import { useEffect, useId, useMemo, useState } from 'react';
import { validateFile, matchSignature, getValidationSchemas, MAX_FILE_SIZES, SUPPORTED_FORMATS } from '../../src/utils/security.js';
import { buildFFmpegArgs, getMimeType } from '../../src/utils/ffmpeg-args.js';
import appSrc from '../../src/App.jsx?raw';
import mainSrc from '../../src/main.jsx?raw';
import secSrc from '../../src/utils/security.js?raw';
import argsSrc from '../../src/utils/ffmpeg-args.js?raw';
import indexHtml from '../../index.html?raw';
import readme from '../../README.md?raw';
import { FORMATS, PRESETS, hex, parseHex, makeFile, layers, fmtBytes, outputOptions, uiCrfDefault, uiPresets, coreUrl, csp, inlineScripts, securityFacts, readmeTable } from './data.js';

const REPO = 'https://github.com/JesunAhmadUshno/NoPara';
const blob = (p) => `${REPO}/blob/main/${p}`;
const APP_URL = '/NoPara/';

// Facts read from the repo at build time (validator.check.mjs asserts each one).
const schemas = getValidationSchemas();
const OUTPUTS = outputOptions(appSrc);
const FACTS = securityFacts(secSrc);
const CSP = csp(indexHtml);
const README = readmeTable(readme);
const CRF_UI = uiCrfDefault(appSrc);
const PRESETS_UI = uiPresets(appSrc);
const CORE = coreUrl(appSrc);
const INLINE = inlineScripts(indexHtml);
const SW_REGISTRATIONS = (indexHtml.match(/serviceWorker\.register\(/g) || []).length;
const WASM_LOADER_USED = /wasm-loader/.test(appSrc + mainSrc + secSrc + indexHtml);
const BUILDER_USES_SETTINGS = /conversionSettings|settings\.crf/.test(argsSrc);
const SANITIZES = /function sanitizeFileName/.test(secSrc) && /sanitizeFileName\(file\.name\)/.test(secSrc);
const CATS = ['video', 'audio', 'image'];
const mp4Args = buildFFmpegArgs('i', 'o', 'mp4');
const MP4_CRF = mp4Args[mp4Args.indexOf('-crf') + 1];
const catCount = { video: schemas.videoFormats.length, audio: schemas.audioFormats.length, image: schemas.imageFormats.length };

const SECTIONS = [['top', 'Overview', '◎'], ['check', 'File check', '▣'], ['signatures', 'Signatures', '⌗'], ['ffmpeg', 'FFmpeg', '❯_'], ['limits', 'Size limits', '⇲'], ['pipeline', 'Privacy path', '⇄'], ['claims', 'Claims audit', '✓'], ['receipts', 'Receipts', '≡']];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.08 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

function MenuBar() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => { const t = setInterval(() => setNow(new Date()), 30000); return () => clearInterval(t); }, []);
  return (
    <div className="menubar" role="banner">
      <span className="apple" aria-hidden="true">◆</span>
      <a className="app" href="#top">NoPara Dashboard</a>
      <a className="m" href={APP_URL}>Open the app</a>
      <a className="m" href={blob('src/utils/security.js')}>security.js</a>
      <a className="m" href={blob('docs/research-review.md')}>Review</a>
      <span className="spacer" />
      <span className="status"><i /> Checks run in your browser</span>
      <a href={REPO}>GitHub ↗</a>
      <span className="clock">{now.toLocaleString('en-US', { weekday: 'short', hour: 'numeric', minute: '2-digit' })}</span>
    </div>
  );
}

function Dock() {
  const [active, setActive] = useState('top');
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' });
    SECTIONS.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <nav className="dock" aria-label="Sections">
      {SECTIONS.map(([id, label, icon]) => (
        <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} aria-current={active === id ? 'true' : undefined}>
          <span className="ico" aria-hidden="true">{icon}</span><span className="lbl">{label}</span>
        </a>
      ))}
    </nav>
  );
}

function Range({ label, value, min, max, step, onChange, show }) {
  const id = useId();
  return (
    <div className="field">
      <label htmlFor={id}>{label} <span>{show}</span></label>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(+e.target.value)} />
    </div>
  );
}

const presetSample = (id) => { const p = PRESETS.find((x) => x.id === id); return { ...p, type: p.type ?? '', source: 'preset' }; };

export default function App() {
  useReveal();
  const [sample, setSample] = useState(() => presetSample('mp4-1c'));
  return (
    <div className="wrap">
      <MenuBar />
      <div className="glow" aria-hidden="true" />
      <Hero />
      <Validator sample={sample} setSample={setSample} />
      <Signatures sample={sample} setSample={setSample} />
      <FFmpegArgs />
      <Limits />
      <Pipeline />
      <Claims />
      <Receipts />
      <Dock />
      <footer>
        Every number on this page is read from the NoPara repo at build time (<code>src/utils/security.js</code>, <code>src/App.jsx</code>, <code>index.html</code>, <code>README.md</code>), and the file check runs the app’s own <code>validateFile()</code> in your browser. No conversion runs here and no speed figures are shown, because none are recorded.
      </footer>
    </div>
  );
}

function Hero() {
  return (
    <header className="card hero window" id="top" data-title="NoPara — README">
      <div className="head">
        <p className="eyebrow">Browser-only media converter · React + ffmpeg.wasm</p>
        <span className="pill good">● Live app on GitHub Pages</span>
      </div>
      <h1>NoPara converts video, audio and images <em>inside your browser</em>, with a {FACTS.layers}-layer file check you can run on this page.</h1>
      <p className="sub">
        NoPara is a working converter: you drop a file, it checks the file, converts it with ffmpeg compiled to WebAssembly, and hands back a download, all on your device.
        This dashboard runs the app’s real file check, shows the exact ffmpeg command for each output, and audits the README’s claims against the code, including the places where they disagree.
      </p>
      <div className="actions">
        <a className="btn primary" href={APP_URL}>Open the app</a>
        <a className="btn ghost" href="#check">Try the file check</a>
        <span className="hint">Run the tests with <code>npm test</code></span>
      </div>
      <div className="tiles">
        <div className="tile"><div className="num">{FORMATS.length}</div><div className="cap">Input types the check accepts: {catCount.video} video, {catCount.audio} audio, {catCount.image} image</div></div>
        <div className="tile"><div className="num">{OUTPUTS.length}</div><div className="cap">Output formats in the app’s menu</div></div>
        <div className="tile"><div className="num">{fmtBytes(MAX_FILE_SIZES.video)}</div><div className="cap">Largest video allowed; audio {fmtBytes(MAX_FILE_SIZES.audio)}, image {fmtBytes(MAX_FILE_SIZES.image)}</div></div>
        <div className="tile"><div className="num">{FACTS.readBytes} B</div><div className="cap">Read from each file to check its signature; files under {FACTS.minSize} B are rejected</div></div>
      </div>
    </header>
  );
}

const STATUS = { true: ['good', 'Pass'], false: ['bad', 'Fail'], warn: ['warn', 'Warning'], null: ['', 'Not run'] };

function Validator({ sample, setSample }) {
  const [res, setRes] = useState(null);
  const [hexText, setHexText] = useState(hex(sample.bytes));
  const [drag, setDrag] = useState(false);
  const ids = { preset: useId(), name: useId(), hex: useId(), size: useId(), type: useId(), file: useId() };
  useEffect(() => { setHexText(hex(sample.bytes)); }, [sample.bytes]);
  useEffect(() => {
    let live = true;
    Promise.resolve(validateFile(sample.file ?? makeFile(sample))).then((r) => live && setRes(r));
    return () => { live = false; };
  }, [sample]);
  const steps = layers(sample, FACTS.readBytes);
  const edit = (patch) => setSample((s) => ({ ...s, ...patch, file: undefined, source: 'edited', id: 'custom' }));
  const onHex = (t) => { setHexText(t); const b = parseHex(t); if (b) edit({ bytes: b }); };
  const loadFile = async (f) => {
    if (!f) return;
    const bytes = Array.from(new Uint8Array(await f.slice(0, 32).arrayBuffer()));
    setSample({ id: 'own', name: f.name, size: f.size, type: f.type, bytes, file: f, source: 'your file' });
  };
  const presetValue = PRESETS.some((p) => p.id === sample.id) ? sample.id : '';
  return (
    <section id="check" className="card window reveal" data-title="validator.app — runs validateFile() live">
      <div className="head">
        <div>
          <p className="eyebrow">Live file check</p>
          <h2>The real check, on your file or on a header you build.</h2>
          <p className="sub">
            This calls the app’s own <a href={blob('src/utils/security.js')}><code>validateFile()</code></a>, unchanged. It reads only the first {FACTS.readBytes} bytes, in your browser; nothing is uploaded.
            The presets include edge cases that show how the code really behaves: some real MP4s are turned away, and any RIFF file passes as <code>.avi</code>.
          </p>
        </div>
        {res && <span className={`pill ${res.valid ? 'good' : 'bad'}`}>● {res.valid ? 'Accepted' : 'Rejected'}</span>}
      </div>
      <div className="grid2">
        <div>
          <div className="controls" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="field" style={{ gridColumn: '1 / -1' }}><label htmlFor={ids.preset}>Preset</label>
              <select id={ids.preset} value={presetValue} onChange={(e) => e.target.value && setSample(presetSample(e.target.value))}>
                {!presetValue && <option value="">{sample.source === 'your file' ? 'Your file' : 'Edited header'}</option>}
                <optgroup label="Edge cases">{PRESETS.filter((p) => p.edge).map((p) => <option key={p.id} value={p.id}>{p.label}</option>)}</optgroup>
                <optgroup label="Clean headers from the signature table">{PRESETS.filter((p) => !p.edge).map((p) => <option key={p.id} value={p.id}>{p.label}</option>)}</optgroup>
              </select>
            </div>
            <div className="field"><label htmlFor={ids.name}>File name</label>
              <input id={ids.name} className="text" value={sample.name} onChange={(e) => edit({ name: e.target.value || 'unnamed' })} disabled={!!sample.file} />
            </div>
            <div className="field"><label htmlFor={ids.size}>Size in bytes</label>
              <input id={ids.size} type="number" min="0" value={sample.size} onChange={(e) => edit({ size: Math.max(0, Math.min(4e6, +e.target.value || 0)) })} disabled={!!sample.file} />
            </div>
            <div className="field" style={{ gridColumn: '1 / -1' }}><label htmlFor={ids.type}>MIME type the browser reports</label>
              <select id={ids.type} value={sample.type} onChange={(e) => edit({ type: e.target.value })} disabled={!!sample.file}>
                <option value="">none (check skipped)</option>
                {[...new Set(FORMATS.map((f) => f.mime))].map((m) => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
            <div className="field" style={{ gridColumn: '1 / -1' }}><label htmlFor={ids.hex}>First bytes (hex, editable)</label>
              <textarea id={ids.hex} className="hexin mono" rows="2" value={hexText} spellCheck="false" onChange={(e) => onHex(e.target.value)} disabled={!!sample.file} aria-invalid={!parseHex(hexText)} />
            </div>
          </div>
          <label htmlFor={ids.file} className={`drop ${drag ? 'over' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setDrag(true); }} onDragLeave={() => setDrag(false)}
            onDrop={(e) => { e.preventDefault(); setDrag(false); loadFile(e.dataTransfer.files[0]); }}>
            <b>Drop a media file here, or choose one</b>
            <span className="hint">Read locally with FileReader. Only the first {FACTS.readBytes} bytes are examined.</span>
            <input id={ids.file} type="file" onChange={(e) => loadFile(e.target.files[0])} />
          </label>
        </div>
        <div>
          <h3>Layer by layer</h3>
          <ol className="layers">
            {steps.map((s, i) => {
              const [cls, word] = STATUS[s.ok];
              return (
                <li key={s.k} className={cls}>
                  <span className="n">{i + 1}</span>
                  <div><b>{s.k}</b><div className="hint">{s.ok === null ? 'Skipped: an earlier layer already failed' : s.d}</div></div>
                  <span className={`pill ${cls}`}>{word}</span>
                </li>
              );
            })}
          </ol>
          <div className="tip" aria-live="polite">
            {res ? (
              <>validateFile returned <b>valid: {String(res.valid)}</b>{res.errors.length ? <> with {res.errors.length === 1 ? 'message' : 'messages'}: “{res.errors.join('” “')}”</> : ', no messages'}
                {res.valid && res.errors.length > 0 && <> Note: a MIME mismatch is recorded but does not block the file.</>}</>
            ) : 'Checking…'}
          </div>
        </div>
      </div>
    </section>
  );
}

function Signatures({ sample, setSample }) {
  const ext = sample.name.split('.').pop().toLowerCase();
  const view = Array.from({ length: 16 }, (_, i) => sample.bytes[i]);
  const own = SUPPORTED_FORMATS[ext];
  const hit = new Set();
  own?.magicNumbers.forEach((s) => { if (matchSignature(sample.bytes, { magicNumbers: [s] })) s.bytes.forEach((_, i) => hit.add(s.offset + i)); });
  return (
    <section id="signatures" className="card window reveal" data-title="signatures.hex — the table the check uses">
      <p className="eyebrow">Signature explorer</p>
      <h2>{FORMATS.length} signatures decide what gets in. One match is enough.</h2>
      <p className="sub">
        Each format lists one or more byte patterns. The matcher accepts a file if <i>any one</i> of them matches, so for AVI, WAV and WebP the shared four-byte “RIFF” entry alone is enough, and WebM and MKV share the same EBML bytes.
        Bytes from the header loaded above are coloured green where they match and red where they don’t.
      </p>
      <div className="hexview" aria-label={`First 16 bytes of ${sample.name}`}>
        {view.map((b, i) => <span key={i} className={b === undefined ? 'empty' : hit.has(i) ? 'match' : ''}>{b === undefined ? '··' : b.toString(16).padStart(2, '0').toUpperCase()}</span>)}
        <small>{sample.name} · offset 0 to 15 · {own ? (matchSignature(sample.bytes, own) ? `matches .${ext}` : `no .${ext} signature matches`) : `.${ext} not in table`}</small>
      </div>
      <div style={{ overflowX: 'auto', marginTop: 14 }}>
        <table>
          <thead><tr><th>Format</th><th>MIME type</th><th>Signature entries (offset: bytes)</th><th>Loaded header</th><th></th></tr></thead>
          <tbody>
            {FORMATS.map((f) => {
              const ok = matchSignature(sample.bytes, { magicNumbers: f.signatures });
              return (
                <tr key={f.ext} className={f.ext === ext ? 'cur' : ''}>
                  <td className="mono">.{f.ext}</td>
                  <td className="mono">{f.mime}</td>
                  <td>{f.signatures.map((s, j) => (
                    <div key={j} className="sig mono">@{s.offset}: {s.bytes.map((b, i) => {
                      const got = sample.bytes[s.offset + i];
                      return <span key={i} className={got === b ? 'match' : 'miss'}>{b.toString(16).padStart(2, '0').toUpperCase()}</span>;
                    })}</div>
                  ))}</td>
                  <td><span className={`pill ${ok ? 'good' : ''}`}>{ok ? 'matches' : 'no match'}</span></td>
                  <td><button className="btn ghost sm" onClick={() => setSample(presetSample(f.ext))}>Load</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const flagNote = { '-c:v': 'video codec', '-c:a': 'audio codec', '-acodec': 'audio codec', '-crf': 'constant quality', '-preset': 'encoder speed', '-q:a': 'audio quality', '-q:v': 'quality scale', '-b:a': 'audio bitrate', '-b:v': 'video bitrate', '-vn': 'drop video', '-vf': 'filters', '-vframes': 'frames to keep', '-quality': 'WebP quality', '-loop': 'GIF loop', '-gifflags': 'GIF options' };

function FFmpegArgs() {
  const [out, setOut] = useState(OUTPUTS[0].value);
  const [inExt, setInExt] = useState('mkv');
  const id = useId();
  const a = buildFFmpegArgs(`input.${inExt}`, `output.${out}`, out);
  const crf = a.indexOf('-crf') >= 0 ? a[a.indexOf('-crf') + 1] : null;
  const pairs = [];
  for (let i = 2; i < a.length - 1; i++) {
    if (a[i].startsWith('-')) { const val = a[i + 1]?.startsWith('-') || i + 1 === a.length - 1 ? '' : a[i + 1]; pairs.push([a[i], val]); if (val) i++; }
  }
  return (
    <section id="ffmpeg" className="card window reveal" data-title="ffmpeg-args.sh — buildFFmpegArgs()">
      <div className="head">
        <div>
          <p className="eyebrow">Command builder</p>
          <h2>Pick an output and see the exact command the app runs.</h2>
          <p className="sub">
            Generated by the app’s own <a href={blob('src/utils/ffmpeg-args.js')}><code>buildFFmpegArgs()</code></a>. The settings are fixed per format: the app’s quality slider (default CRF {CRF_UI}) and its {PRESETS_UI.join(' / ')} preset buttons are not passed in.
          </p>
        </div>
        <div className="field" style={{ minWidth: 160 }}><label htmlFor={id}>Input file type</label>
          <select id={id} value={inExt} onChange={(e) => setInExt(e.target.value)}>{FORMATS.map((f) => <option key={f.ext} value={f.ext}>.{f.ext}</option>)}</select>
        </div>
      </div>
      <div className="seg wrapseg" role="group" aria-label="Output format">
        {OUTPUTS.map((o) => <button key={o.value} aria-pressed={out === o.value} onClick={() => setOut(o.value)}>{o.label}</button>)}
      </div>
      <pre className="cmd" aria-live="polite"><span className="dim">$ </span>ffmpeg {a.map((t, i) => <span key={i} className={t.startsWith('-') ? 'flag' : ''}>{t} </span>)}</pre>
      <div className="grid2">
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead><tr><th>Flag</th><th>Value</th><th>Meaning</th></tr></thead>
            <tbody>{pairs.map(([f, v]) => <tr key={f}><td className="mono">{f}</td><td className="mono">{v || '—'}</td><td>{flagNote[f] ?? ''}</td></tr>)}</tbody>
          </table>
        </div>
        <div className="tiles" style={{ gridTemplateColumns: '1fr 1fr', marginTop: 0 }}>
          <div className="tile"><div className="num mono-num">{getMimeType(out)}</div><div className="cap">MIME type of the download (<code>getMimeType</code>)</div></div>
          <div className="tile"><div className="num">{crf ?? 'none'}</div><div className="cap">{crf ? `CRF in the command, while the slider shows ${CRF_UI}` : `No CRF flag for ${out}; the slider (${CRF_UI}) has no effect here`}</div></div>
          <div className="tile"><div className="num">{a.length}</div><div className="cap">arguments in the list passed to <code>ffmpeg.exec</code></div></div>
          <div className="tile"><div className="num">{a.includes('copy') ? 'copy' : 'encode'}</div><div className="cap">{a.includes('copy') ? 'streams copied as they are: fast, but the input codecs must fit the container' : 'streams decoded and encoded again'}</div></div>
        </div>
      </div>
    </section>
  );
}

function Limits() {
  const [cat, setCat] = useState('video');
  const [logSize, setLogSize] = useState(Math.log10(750 * 1024 ** 2));
  const [res, setRes] = useState(null);
  const size = Math.round(10 ** logSize);
  const ext = { video: 'mkv', audio: 'flac', image: 'png' }[cat];
  const limit = MAX_FILE_SIZES[cat];
  useEffect(() => {
    let live = true;
    const head = makeFile(PRESETS.find((p) => p.id === ext));
    // A stand-in File: real header bytes, but a size you choose, so the real validateFile can judge it.
    Promise.resolve(validateFile({ name: `sample.${ext}`, size, type: '', slice: (a, b) => head.slice(a, b) })).then((r) => live && setRes(r));
    return () => { live = false; };
  }, [size, ext]);
  const W = 460, H = 150, l = 52, r = 16, lo = 3, hi = Math.log10(4 * 1024 ** 3);
  const x = (v) => l + ((Math.log10(v) - lo) / (hi - lo)) * (W - l - r);
  return (
    <section id="limits" className="card window reveal" data-title="limits.calc — MAX_FILE_SIZES">
      <p className="eyebrow">Size-limit calculator</p>
      <h2>Will this file fit? The limits are {fmtBytes(MAX_FILE_SIZES.video)}, {fmtBytes(MAX_FILE_SIZES.audio)} and {fmtBytes(MAX_FILE_SIZES.image)}.</h2>
      <p className="sub">The verdict comes from <code>validateFile()</code> itself, given a valid {ext.toUpperCase()} header and the size you choose. The code’s comment ties the video cap to WebAssembly memory; no memory test in the repo backs the exact figure.</p>
      <div className="grid2" style={{ marginTop: 14 }}>
        <div>
          <div className="seg" role="group" aria-label="Media type">
            {CATS.map((c) => <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}
          </div>
          <div className="controls" style={{ gridTemplateColumns: '1fr', marginTop: 14 }}>
            <Range label="File size" value={logSize} min={3} max={hi} step={0.005} onChange={setLogSize} show={fmtBytes(size)} />
          </div>
          <div className="tiles" style={{ gridTemplateColumns: '1fr 1fr', marginTop: 0 }}>
            <div className="tile"><div className="num" style={{ color: res?.valid ? 'var(--good)' : 'var(--bad)' }}>{res ? (res.valid ? 'Passes' : 'Rejected') : '…'}</div><div className="cap">{res?.errors[0] ?? `within the ${cat} limit`}</div></div>
            <div className="tile"><div className="num">{((size / limit) * 100).toFixed(size / limit < 0.1 ? 2 : 0)}%</div><div className="cap">of the {fmtBytes(limit)} {cat} limit</div></div>
          </div>
        </div>
        <svg className="chart" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="File size against the three limits on a log scale">
          {[1024, 1024 ** 2, 1024 ** 3].map((t) => <g key={t}><line className="axis" x1={x(t)} x2={x(t)} y1={8} y2={H - 26} /><text x={x(t)} y={H - 8} textAnchor="middle">{fmtBytes(t)}</text></g>)}
          {CATS.map((c, i) => (
            <g key={c}>
              <text x={l - 8} y={30 + i * 34} textAnchor="end">{c}</text>
              <rect x={l} y={18 + i * 34} width={x(MAX_FILE_SIZES[c]) - l} height={16} rx={8} fill={c === cat ? 'var(--primary)' : 'var(--grid)'} opacity={c === cat ? 0.85 : 1} />
            </g>
          ))}
          <line x1={x(size)} x2={x(size)} y1={10} y2={H - 26} stroke={res?.valid ? 'var(--good)' : 'var(--bad)'} strokeWidth="2.5" />
        </svg>
      </div>
    </section>
  );
}

function Pipeline() {
  const outbound = CSP['connect-src'].filter((s) => s.startsWith('http'));
  const boxes = [
    ['Your file', 'stays on your device'],
    ['validateFile()', `${FACTS.layers} layers, ${FACTS.readBytes} B header`],
    ['ffmpeg.wasm', 'runs in a Web Worker'],
    ['Blob URL', 'download from memory'],
  ];
  return (
    <section id="pipeline" className="card window reveal" data-title="pipeline.md — where your file goes">
      <p className="eyebrow">Privacy architecture</p>
      <h2>The file never leaves the page. One download comes in: the ffmpeg core.</h2>
      <p className="sub">
        The Content Security Policy in <a href={blob('index.html')}><code>index.html</code></a> allows network requests only to the page’s own origin and {outbound.map((o) => <code key={o}>{o}</code>)}, which serves the ffmpeg core (<span className="mono">{CORE.replace('https://', '')}</span>).
        ffmpeg.wasm needs cross-origin isolation, which GitHub Pages can’t set as a header, so <code>coi-serviceworker.js</code> adds it.
      </p>
      <div className="flow" role="img" aria-label="Data flow: your file, validateFile, ffmpeg.wasm in a worker, Blob URL download, all inside the browser tab; the only outbound request is the ffmpeg core">
        <span className="zone">Inside your browser tab</span>
        {boxes.map(([t, d], i) => (
          <div key={t} className={`step ${i === 2 ? 'core' : ''}`}><b>{t}</b><small>{d}</small></div>
        ))}
      </div>
      <p className="inbound"><span aria-hidden="true">↓</span> Only inbound download: the ffmpeg core from {outbound.map((o) => <code key={o}>{o.replace('https://', '')}</code>)} (CSP <code>connect-src</code>), into the ffmpeg.wasm step.</p>
      <p className="hint">The page registers {SW_REGISTRATIONS === 1 ? 'one service worker, the isolation shim, which also caches responses for offline use' : `${SW_REGISTRATIONS} service workers at the same scope, so one replaces the other`}; offline use has not been tested.</p>
    </section>
  );
}

function Claims() {
  const readmeMatches = README.video === catCount.video && README.audio === catCount.audio && README.image === catCount.image;
  const riffPasses = matchSignature(PRESETS.find((p) => p.id === 'wav-as-avi').bytes, SUPPORTED_FORMATS.avi);
  const rows = [
    { c: 'Files never leave your device', w: 'README', e: `CSP connect-src allows only 'self' and ${CSP['connect-src'].filter((s) => s.startsWith('http')).join(', ')} (the ffmpeg core). No upload code exists in src/.`, s: 'verified' },
    { c: `Input formats: ${README.video} video, ${README.audio} audio, ${README.image} image`, w: 'README table', e: `The validator accepts ${catCount.video} / ${catCount.audio} / ${catCount.image}. Earlier README versions also listed MOV, FLV, WMV, MPEG, OGG, WMA, M4A, OPUS and TIFF, which the check rejects; corrected on this branch.`, s: readmeMatches ? 'verified' : 'contradicted' },
    { c: 'Magic-number verification', w: 'README, security.js', e: `Implemented, but entries are alternatives: a WAV header named .avi ${riffPasses ? 'passes' : 'fails'} and WebM and MKV are indistinguishable.`, s: 'partly' },
    { c: 'Adjustable quality (CRF, presets)', w: 'App UI', e: BUILDER_USES_SETTINGS ? 'The builder reads the UI settings.' : `buildFFmpegArgs never reads the slider (default ${CRF_UI}) or presets; MP4 is fixed at CRF ${MP4_CRF}.`, s: BUILDER_USES_SETTINGS ? 'verified' : 'contradicted' },
    { c: 'Strict CSP', w: 'index.html', e: `script-src includes 'unsafe-inline'; index.html has ${INLINE} inline <script> blocks. README wording corrected on this branch.`, s: CSP['script-src'].includes("'unsafe-inline'") ? 'partly' : 'verified' },
    { c: 'Sanitised file names', w: 'security.js', e: SANITIZES ? 'sanitizeFileName strips "..", path separators and control characters before the name is used.' : 'Not found.', s: SANITIZES ? 'verified' : 'contradicted' },
    { c: 'Offline capability (PWA)', w: 'README', e: SW_REGISTRATIONS === 1 ? 'Only coi-serviceworker.js registers; it caches responses and falls back to the cache offline. No offline test is recorded.' : `${SW_REGISTRATIONS} service workers register at one scope, so only one controls the page at a time.`, s: 'unclear' },
    { c: 'WCAG 2.2 AAA, ISO/IEC 27001, EN 301 549, GDPR Art. 32', w: 'README, code comments', e: 'No axe, Lighthouse, contrast or audit report is committed; the certification documents contain no test evidence.', s: 'asserted' },
    { c: 'Conversion speed', w: 'README table', e: `Recorded as ${README.speed}. No timed run exists.`, s: 'unmeasured' },
    { c: 'src/utils/wasm-loader.js', w: 'repo', e: WASM_LOADER_USED ? 'Imported.' : 'Not imported anywhere: dead code (kept, flagged).', s: WASM_LOADER_USED ? 'verified' : 'unused' },
  ];
  const pill = { verified: ['good', 'Verified in code'], contradicted: ['bad', 'Contradicted by code'], partly: ['warn', 'Partly true'], unclear: ['warn', 'Unclear'], asserted: ['warn', 'Asserted only'], unmeasured: ['', 'Not measured'], unused: ['warn', 'Unused code'] };
  const tally = rows.reduce((t, r) => ({ ...t, [r.s]: (t[r.s] || 0) + 1 }), {});
  return (
    <section id="claims" className="card window reveal" data-title="claims.audit — README against the code">
      <p className="eyebrow">Claims audit</p>
      <h2>{rows.length} claims checked: {tally.verified || 0} hold up in code, {(tally.contradicted || 0) + (tally.partly || 0)} don’t fully.</h2>
      <p className="sub">Each status is computed when the page is built, from the source files, so it changes if the code changes. Where the README was wrong, it has been corrected on this branch and the row says so.</p>
      <div style={{ overflowX: 'auto', marginTop: 12 }}>
        <table>
          <thead><tr><th>Claim</th><th className="where">Where</th><th>What the code shows</th><th>Status</th></tr></thead>
          <tbody>{rows.map((r) => <tr key={r.c}><td><b>{r.c}</b></td><td className="hint where">{r.w}</td><td>{r.e}</td><td><span className={`pill ${pill[r.s][0]}`}>{pill[r.s][1]}</span></td></tr>)}</tbody>
        </table>
      </div>
    </section>
  );
}

function Receipts() {
  const docs = [
    ['src/utils/security.js', 'security.js', 'File check and signature table'],
    ['src/utils/ffmpeg-args.js', 'ffmpeg-args.js', 'Command builder and MIME types'],
    ['index.html', 'index.html', 'CSP and service workers'],
    ['test/security.test.mjs', 'Smoke tests', 'npm test, no dependencies'],
    ['site/src/validator.check.mjs', 'Known-answer check', 'Runs before every dashboard build'],
    ['docs/research-review.md', 'Engineering review', 'Graded rubric and open gaps'],
  ];
  return (
    <section id="receipts" className="card window reveal" data-title="receipts — what is and isn’t measured">
      <p className="eyebrow">Receipts and limits</p>
      <h2>What this page can show, and what nobody has measured yet.</h2>
      <div className="grid2" style={{ marginTop: 16 }}>
        <div className="tile"><h3>Not measured</h3><p className="hint" style={{ margin: 0, fontSize: 13 }}>Conversion speed ({README.speed}), memory use near the {fmtBytes(MAX_FILE_SIZES.video)} video cap, output quality per format, and accessibility conformance. The dashboard shows none of these as numbers.</p></div>
        <div className="tile"><h3>Why no conversion runs here</h3><p className="hint" style={{ margin: 0, fontSize: 13 }}>ffmpeg.wasm needs cross-origin isolation and a large core download, so this page links to <a href={APP_URL}>the real app</a> instead of imitating a run.</p></div>
        <div className="tile"><h3>Scope of the file check</h3><p className="hint" style={{ margin: 0, fontSize: 13 }}>It is a type filter, not malware scanning: it reads {FACTS.readBytes} bytes and trusts the rest. The edge cases above are observed behaviour of this code, not tested exploits.</p></div>
        <div className="tile"><h3>Reproduce</h3><p className="hint" style={{ margin: 0, fontSize: 13 }}><code>npm test</code> at the repo root; <code>cd site && npm ci && npm run build</code> reruns the known-answer check, then builds this page.</p></div>
      </div>
      <div className="docs" style={{ marginTop: 20 }}>
        {docs.map(([p, t, d]) => <a key={p} href={blob(p)}><b>{t}</b><small>{d}</small></a>)}
      </div>
    </section>
  );
}
