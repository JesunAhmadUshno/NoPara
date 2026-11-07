// Smoke tests for the file checks and the ffmpeg argument builder: node --test test/*.test.mjs
// They pin down current behaviour, including the known weak spots, so a change is visible.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateFile, matchSignature, SUPPORTED_FORMATS, MAX_FILE_SIZES, getValidationSchemas } from '../src/utils/security.js';
import { buildFFmpegArgs, getMimeType } from '../src/utils/ffmpeg-args.js';

// validateFile reads the header with FileReader, which Node lacks; this shim reads the Blob the same way.
globalThis.FileReader ??= class {
  readAsArrayBuffer(blob) {
    blob.arrayBuffer().then((buf) => this.onload({ target: { result: buf } }), () => this.onerror());
  }
};
const file = (head, name, type = '', size = 512) => {
  const b = new Uint8Array(size); b.set(head);
  return new File([b], name, { type });
};
const RIFF = (tag) => [0x52, 0x49, 0x46, 0x46, 0, 0, 0, 0, ...[...tag].map((c) => c.charCodeAt(0))];

test('format table: 4 video, 4 audio, 5 image inputs', () => {
  const s = getValidationSchemas();
  assert.deepEqual([s.videoFormats.length, s.audioFormats.length, s.imageFormats.length], [4, 4, 5]);
  assert.equal(MAX_FILE_SIZES.video, 1024 ** 3);
});

test('matchSignature on the real table', () => {
  assert.ok(matchSignature([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a], SUPPORTED_FORMATS.png));
  assert.ok(!matchSignature([0x00, 0x00, 0x00, 0x1c, 0x66, 0x74, 0x79, 0x70], SUPPORTED_FORMATS.mp4), 'ftyp size 0x1C is not in the table');
  assert.ok(matchSignature(RIFF('WAVE'), SUPPORTED_FORMATS.avi), 'RIFF alone satisfies avi');
  assert.ok(matchSignature([0x1a, 0x45, 0xdf, 0xa3], SUPPORTED_FORMATS.webm) && matchSignature([0x1a, 0x45, 0xdf, 0xa3], SUPPORTED_FORMATS.mkv));
  assert.ok(!matchSignature([0x89], SUPPORTED_FORMATS.png), 'short header fails');
});

test('validateFile layers', async () => {
  assert.equal((await validateFile(file([0xff, 0xd8, 0xff], 'a.jpeg'))).valid, true);
  assert.equal((await validateFile(file(RIFF('WAVE'), 'renamed.avi'))).valid, true);
  assert.equal((await validateFile(file([0, 0, 0, 0x1c, 0x66, 0x74, 0x79, 0x70], 'phone.mp4'))).valid, false);
  assert.match((await validateFile(file([0], 'clip.mov'))).errors[0], /Unknown file format/);
  assert.match((await validateFile(file([0x42, 0x4d], 'tiny.bmp', '', 50))).errors[0], /corrupted/);
  const mism = await validateFile(file([0x42, 0x4d], 'x.bmp', 'image/png'));
  assert.equal(mism.valid, true, 'a MIME mismatch is recorded but does not block');
  assert.match(mism.errors[0], /does not match/);
  assert.equal(validateFile(null).valid, false);
});

test('ffmpeg args are fixed per format', () => {
  assert.deepEqual(buildFFmpegArgs('input.mov', 'output.mp4', 'mp4'), ['-i', 'input.mov', '-c:v', 'libx264', '-preset', 'medium', '-crf', '23', '-c:a', 'aac', 'output.mp4']);
  assert.deepEqual(buildFFmpegArgs('i', 'o', 'mkv'), ['-i', 'i', '-c:v', 'copy', '-c:a', 'copy', 'o']);
  assert.equal(getMimeType('webp'), 'image/webp');
  assert.equal(getMimeType('xyz'), 'application/octet-stream');
});

test('F1: .jpg is accepted like .jpeg (the picker offers .jpg)', async () => {
  const r = await validateFile(file([0xff, 0xd8, 0xff, 0xe0], 'photo.jpg', 'image/jpeg'));
  assert.equal(r.valid, true, r.errors.join(' | '));
  assert.equal(r.sanitized.category, 'image');
  assert.equal(r.errors.length, 0);
});
