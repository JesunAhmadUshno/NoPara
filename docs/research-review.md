# NoPara: engineering and research review

Reviewed on branch `site/live-dashboard`. NoPara is a product app (a browser-only
media converter on React and ffmpeg.wasm), so the rubric below grades engineering
rigor using the same headings a research review would use. Grades are A to F.

**Overall: C+ before this branch, B- after the cheap fixes.** The product works and
the privacy architecture is sound. The weak points are evidence (no measurements,
compliance asserted without audits) and claim discipline (the README promised
more than the code does).

## Rubric

| Area | Grade | Finding | Evidence |
| :--- | :--- | :--- | :--- |
| Question / purpose | A- | Clear: convert media without uploading it. | README, `src/App.jsx` |
| Hypotheses / claims | C | Many claims (formats, strict CSP, adjustable quality, WCAG AAA, ISO 27001) were stated without checks. Formats and CSP wording were wrong. | Claims audit on the dashboard |
| Method / architecture | B+ | File check, then ffmpeg.wasm in a worker, then a Blob URL download. CSP `connect-src` limits outbound requests to `'self'` and `https://unpkg.com`. | `index.html`, `src/utils/security.js` |
| Baselines / comparison | D | No comparison with other converters or with native ffmpeg output. | none |
| Statistics / uncertainty | n/a, F for performance | No measurements exist, so nothing has uncertainty attached. Conversion speed is `TBD-NO-RECORD`. | README table |
| Testing | F, now C | No tests before. Now: `npm test` (node:test, no dependencies) plus the dashboard's known-answer check `site/src/validator.check.mjs`. | `test/`, `site/src/` |
| Reproducibility | B | `npm ci && npm run build` works; dependency ranges use `^`, so builds can drift. The dashboard pins exact versions. | `package.json`, `site/package.json` |
| Threats to validity | C | See below; none were written down before. | this file |
| Related work | D | No comparison with prior browser converters (for example ffmpeg.wasm's own demos) or file-type libraries. | none |
| Limitations | C, now B | Now stated in the README and on the dashboard. | README, dashboard Receipts |

## Fixed on this branch (cheap, behaviour-neutral)

1. `src/utils/security.js` exports `SUPPORTED_FORMATS`, `MAX_FILE_SIZES` and a pure
   `matchSignature()`, which `validateMagicNumbers` now calls. Same logic, testable.
2. `buildFFmpegArgs` and `getMimeType` moved, unchanged, from `App.jsx` to
   `src/utils/ffmpeg-args.js`. The root app still builds.
3. Smoke tests: `npm test` runs `test/security.test.mjs` (4 tests, all pass).
4. README corrected: inputs are 4 video / 4 audio / 5 image (the validator rejects
   MOV, FLV, WMV, MPEG, OGG, WMA, M4A, OPUS and TIFF); 11 outputs; the CSP allows
   `'unsafe-inline'`; the quality slider and presets are not wired; bitrate,
   resolution and frame rate controls do not exist; `wasm-loader.js` is unused.
5. `npm run deploy` now passes `--add`, so an app deploy no longer deletes the
   dashboard folder on `gh-pages`.
6. Live dashboard at `/NoPara/dashboard/` that runs the real `validateFile()` and
   computes every figure from the source at build time.

## Observed code behaviour (recorded by the tests, not changed)

- A file named `.avi` passes with any RIFF header (for example a WAV), because
  signature entries are alternatives evaluated with `some()`.
- WebM and MKV share the EBML signature and cannot be told apart.
- A MIME mismatch is recorded as an error but the file is still marked valid.
- `validateFile` returns a plain object on early failures and a Promise otherwise.
- The CRF slider (default 28) and preset buttons are never passed to ffmpeg; MP4
  is fixed at CRF 23.

These are type-filter weaknesses, not demonstrated security exploits.

## Threats to validity

- Conformance claims (WCAG 2.2 AAA, EN 301 549, ISO/IEC 27001, GDPR Art. 32) are
  asserted in code comments and the certification documents, with no audit output.
- Only `coi-serviceworker.js` registers at the `/NoPara/` scope (it also caches
  responses); offline use is untested. The dashboard sits inside that scope, so its font link uses `crossorigin`.
- The magic-number check reads 512 bytes; it is not content validation.

## Remaining gaps and exactly what each needs

| Gap | What it needs |
| :--- | :--- |
| Conversion speed | A timing harness (Playwright driving the live app) on one named device: e.g. a 60 s 1080p MP4 to WebM, 5 runs, median and range. About 15 minutes of local CPU, no GPU, no paid service. |
| Memory ceiling behind the 1 GB video cap | The same harness with 250 MB, 500 MB and 1 GB inputs, recording peak `performance.memory` or tab crash, in Chrome and Firefox. |
| Output correctness | `ffprobe` on each of the 11 outputs from one fixed input per category, checking codec and duration. Needs native ffmpeg locally. |
| Accessibility claim | An axe-core run and a Lighthouse report on the live app, committed as JSON; contrast measured on the neon palette. |
| Wire the quality controls | A small code change passing `crf` and `preset` into `buildFFmpegArgs`; a product decision for the Owner. |
| Stronger signature check | Require all entries for RIFF formats, read the EBML DocType to split WebM from MKV. Product change; tests already pin today's behaviour. |
| Pinned dependencies and lint | Exact versions in the root `package.json`, and an eslint config (the `lint` script has none). |
| Dead code | Delete `src/utils/wasm-loader.js` after Owner approval. |
| Offline test | Load once, go offline, reload; confirm the COI worker serves from cache. |
