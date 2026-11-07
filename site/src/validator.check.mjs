// Known-answer check, run by `npm run build` before Vite: node src/validator.check.mjs
// It runs the same code the page runs (src/utils/*.js + site/src/data.js) against the repo files
// and fails the build if any number or behaviour shown on the page has drifted.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { validateFile, getValidationSchemas, MAX_FILE_SIZES } from '../../src/utils/security.js';
import { buildFFmpegArgs, getMimeType } from '../../src/utils/ffmpeg-args.js';
import { PRESETS, FORMATS, makeFile, layers, outputOptions, uiCrfDefault, uiPresets, coreUrl, csp, inlineScripts, securityFacts, readmeTable } from './data.js';

// Node has File and Blob but no FileReader; validateFile only needs readAsArrayBuffer.
globalThis.FileReader ??= class {
  readAsArrayBuffer(blob) { blob.arrayBuffer().then((buf) => this.onload({ target: { result: buf } }), () => this.onerror()); }
};
const read = (p) => readFileSync(new URL(`../../${p}`, import.meta.url), 'utf8');
const app = read('src/App.jsx'), html = read('index.html'), sec = read('src/utils/security.js'), readme = read('README.md'), args = read('src/utils/ffmpeg-args.js');

// 1. Format counts and limits (hero tiles)
const s = getValidationSchemas();
assert.deepEqual([s.videoFormats.length, s.audioFormats.length, s.imageFormats.length], [4, 4, 5]);
assert.equal(FORMATS.length, 13);
assert.deepEqual(MAX_FILE_SIZES, { video: 1024 ** 3, audio: 500 * 1024 ** 2, image: 100 * 1024 ** 2 });
const facts = securityFacts(sec);
assert.deepEqual(facts, { layers: 5, readBytes: 512, minSize: 100 });

// 2. Output menu and the ffmpeg command for each output
const outs = outputOptions(app);
assert.equal(outs.length, 11);
for (const o of outs) {
  const a = buildFFmpegArgs('input.mp4', `output.${o.value}`, o.value);
  assert.notDeepEqual(a.slice(2, 4), ['-c', 'copy'], `${o.value} falls through to the default copy`);
  assert.notEqual(getMimeType(o.value), 'application/octet-stream', o.value);
}
assert.deepEqual(buildFFmpegArgs('input.avi', 'output.mp4', 'mp4').slice(2), ['-c:v', 'libx264', '-preset', 'medium', '-crf', '23', '-c:a', 'aac', 'output.mp4']);
assert.equal(uiCrfDefault(app), 28);
assert.deepEqual(uiPresets(app), ['fast', 'medium', 'slow']);
assert.ok(!/conversionSettings|settings\.crf/.test(args), 'CRF/preset now reach the builder: update the claims audit');

// 3. CSP facts used in the pipeline and claims audit
const c = csp(html);
assert.ok(c['script-src'].includes("'unsafe-inline'"));
assert.deepEqual(c['connect-src'], ["'self'", 'https://unpkg.com']);
assert.equal(inlineScripts(html), 2);
assert.ok(coreUrl(app).startsWith('https://unpkg.com/@ffmpeg/core@'));

// 4. README table now matches the validator
const t = readmeTable(readme);
assert.deepEqual([t.video, t.audio, t.image], [4, 4, 5]);
assert.equal(t.speed, 'TBD-NO-RECORD');
assert.ok(!/wasm-loader/.test(app + sec + read('src/main.jsx') + html), 'wasm-loader.js is imported now: update the audit');

// 5. Every playground preset: recorded verdict, and the layer walk agrees with validateFile
const want = { 'mp4-1c': false, 'wav-as-avi': true, 'webm-as-mkv': true, 'png-as-jpeg': false, mov: false, 'tiny-bmp': false, 'mime-mismatch': true };
const verdicts = {};
for (const p of PRESETS) {
  const r = await validateFile(makeFile(p));
  verdicts[p.id] = r.valid;
  assert.equal(r.valid, want[p.id] ?? true, `${p.id}: ${r.errors.join(' | ')}`);
  const steps = layers(p, facts.readBytes);
  assert.equal(steps.every((x) => x.ok !== false), r.valid, `layer walk disagrees on ${p.id}`);
}
assert.equal((await validateFile(makeFile(PRESETS.find((p) => p.id === 'mime-mismatch')))).errors.length, 1);

// 6. Size limit: one byte over fails, the limit itself passes (the calculator relies on this)
for (const [cat, ext] of [['video', 'mkv'], ['audio', 'flac'], ['image', 'png']]) {
  const head = makeFile(PRESETS.find((p) => p.id === ext));
  const fake = (size) => ({ name: `x.${ext}`, size, type: '', slice: (a, b) => head.slice(a, b) });
  assert.equal((await validateFile(fake(MAX_FILE_SIZES[cat]))).valid, true);
  assert.equal((await validateFile(fake(MAX_FILE_SIZES[cat] + 1))).valid, false);
}
console.log('validator ok', { formats: FORMATS.length, outputs: outs.length, ...facts, edgeVerdicts: Object.fromEntries(Object.entries(verdicts).filter(([k]) => k in want)) });
