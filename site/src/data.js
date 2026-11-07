// Pure helpers shared by the page and by validator.check.mjs.
// Every number the page shows is derived here from repo source text or from the
// real src/utils modules; nothing is typed in by hand.
import { SUPPORTED_FORMATS, EXTENSION_ALIASES, MAX_FILE_SIZES, matchSignature } from '../../src/utils/security.js';

export const FORMATS = Object.entries(SUPPORTED_FORMATS).map(([ext, f]) => ({
  ext,
  mime: f.mimeType,
  category: f.mimeType.split('/')[0],
  signatures: f.magicNumbers,
}));

export const hex = (bytes) => Array.from(bytes, (b) => b.toString(16).padStart(2, '0').toUpperCase()).join(' ');
export function parseHex(text) {
  const parts = text.replace(/0x/gi, '').split(/[\s,]+/).filter(Boolean);
  const out = [];
  for (const p of parts) {
    if (!/^[0-9a-f]{1,2}$/i.test(p)) return null;
    out.push(parseInt(p, 16));
  }
  return out;
}

// A header that satisfies a format: lay its signature entries down in order,
// skipping any entry that would overwrite bytes already placed (alternatives at the same offset).
export function headerFor(ext) {
  const out = [];
  for (const s of SUPPORTED_FORMATS[ext].magicNumbers) {
    if (s.bytes.some((_, i) => out[s.offset + i] !== undefined)) continue;
    s.bytes.forEach((b, i) => { out[s.offset + i] = b; });
  }
  return Array.from(out, (b) => b ?? 0);
}

const ascii = (s) => [...s].map((c) => c.charCodeAt(0));
// Presets: one clean header per format, then edge cases that show real behaviour of the code.
export const PRESETS = [
  ...FORMATS.map((f) => ({ id: f.ext, label: `Valid ${f.ext.toUpperCase()} header`, name: `sample.${f.ext}`, bytes: headerFor(f.ext), size: 512 })),
  { id: 'mp4-1c', edge: true, label: 'Real-world MP4, ftyp box size 0x1C', name: 'phone.mp4', bytes: [0, 0, 0, 0x1c, ...ascii('ftypisom')], size: 512 },
  { id: 'wav-as-avi', edge: true, label: 'WAV header renamed .avi', name: 'renamed.avi', bytes: headerFor('wav'), size: 512 },
  { id: 'webm-as-mkv', edge: true, label: 'WebM header named .mkv (shared EBML)', name: 'clip.mkv', bytes: headerFor('webm'), size: 512 },
  { id: 'jpg', edge: true, label: 'JPEG photo named .jpg', name: 'photo.jpg', bytes: headerFor('jpeg'), size: 512 },
  { id: 'png-as-jpeg', edge: true, label: 'PNG bytes named .jpeg', name: 'photo.jpeg', bytes: headerFor('png'), size: 512 },
  { id: 'mov', edge: true, label: 'QuickTime .mov (not in the table)', name: 'clip.mov', bytes: [0, 0, 0, 0x14, ...ascii('ftypqt  ')], size: 512 },
  { id: 'tiny-bmp', edge: true, label: 'BMP header, only 50 bytes long', name: 'tiny.bmp', bytes: headerFor('bmp'), size: 50 },
  { id: 'mime-mismatch', edge: true, label: 'BMP declared as image/png by the browser', name: 'scan.bmp', bytes: headerFor('bmp'), size: 512, type: 'image/png' },
];

export function makeFile({ bytes, name, size, type = '' }) {
  const b = new Uint8Array(Math.max(size, 0));
  b.set(bytes.slice(0, b.length));
  return new File([b], name, { type });
}

// The layers validateFile walks through, re-derived step by step for display.
// validator.check.mjs asserts this agrees with validateFile on every preset.
export function layers({ name, size, type = '', bytes }, readLimit) {
  const ext = name.split('.').pop().toLowerCase();
  const f = SUPPORTED_FORMATS[EXTENSION_ALIASES[ext] || ext];
  const cat = f ? f.mimeType.split('/')[0] : null;
  const head = bytes.slice(0, Math.min(size, readLimit));
  const steps = [
    { k: 'File type known', ok: !!f, d: f ? `.${ext} is ${cat}` : `.${ext} is not in the signature table` },
    { k: 'Size limit', ok: f ? size <= MAX_FILE_SIZES[cat] : null, d: f ? `${fmtBytes(size)} of ${fmtBytes(MAX_FILE_SIZES[cat])}` : '' },
    { k: 'MIME type', ok: f ? (!type || type === f.mimeType ? true : 'warn') : null, d: f ? (type ? `declared ${type}, expected ${f.mimeType}` : 'none declared, check skipped') : '' },
    { k: 'Magic number', ok: f ? matchSignature(head, f) : null, d: f ? 'first bytes against the table' : '' },
    { k: 'At least 100 bytes', ok: f ? size >= 100 : null, d: `${size.toLocaleString('en-US')} B` },
  ];
  // validateFile stops at the first hard failure; later layers never run.
  let stopped = false;
  for (const s of steps) {
    if (stopped) s.ok = null;
    else if (s.ok === false) stopped = true;
  }
  return steps;
}

export function fmtBytes(n) {
  const u = ['B', 'KB', 'MB', 'GB'];
  let i = 0;
  while (n >= 1024 && i < u.length - 1) { n /= 1024; i++; }
  return `${n % 1 ? n.toFixed(n < 10 ? 2 : 1) : n} ${u[i]}`;
}

// ---- facts read from repo source text (passed in as raw strings) ----

export function outputOptions(appSrc) {
  const sel = appSrc.slice(appSrc.indexOf('id="output-format"'), appSrc.indexOf('</select>', appSrc.indexOf('id="output-format"')));
  return [...sel.matchAll(/<option value="([^"]+)">([^<]+)<\/option>/g)].map((m) => ({ value: m[1], label: m[2] }));
}
export const uiCrfDefault = (appSrc) => +appSrc.match(/crf:\s*(\d+)/)[1];
export const uiPresets = (appSrc) => JSON.parse(appSrc.match(/\{(\[[^\]]*'fast'[^\]]*\])\.map/)[1].replace(/'/g, '"'));
export const coreUrl = (appSrc) => appSrc.match(/baseURL = '([^']+)'/)[1];

export function csp(indexHtml) {
  const body = indexHtml.match(/http-equiv="Content-Security-Policy"\s+content="([^"]+)"/)[1];
  return Object.fromEntries(body.split(';').map((d) => d.trim().split(/\s+/)).filter((d) => d[0]).map(([k, ...v]) => [k, v]));
}
export const inlineScripts = (indexHtml) => (indexHtml.match(/<script>/g) || []).length;

export function securityFacts(secSrc) {
  return {
    layers: Math.max(...[...secSrc.matchAll(/Layer (\d)/g)].map((m) => +m[1])),
    readBytes: +secSrc.match(/file\.slice\(0, (\d+)\)/)[1],
    minSize: +secSrc.match(/file\.size < (\d+)/)[1],
  };
}

// README "Benchmarks and limits" table: | Item | Value | Source |
export function readmeTable(readme) {
  const rows = {};
  for (const m of readme.matchAll(/^\| ([^|]+?) \| ([^|]+?) \| ([^|]+?) \|$/gm)) rows[m[1].trim()] = m[2].trim();
  const count = (k) => (rows[k] ? +rows[k].match(/^(\d+)/)?.[1] : NaN);
  return { rows, video: count('Video formats in'), audio: count('Audio formats in'), image: count('Image formats in'), speed: rows['Conversion speed'] };
}
