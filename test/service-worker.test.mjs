// Runs index.html's inline service-worker script in a sandbox and records what it registers.
// Two workers at one scope replace each other, so only the COOP/COEP worker may be registered.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]).find((s) => s.includes('serviceWorker'));

function run(crossOriginIsolated) {
  const registered = [];
  const handlers = {};
  const on = (ev, fn) => { (handlers[ev] ??= []).push(fn); };
  const serviceWorker = { register: (url) => { registered.push(url); return Promise.resolve(); } };
  const window = { crossOriginIsolated, addEventListener: on };
  const ctx = { window, document: { addEventListener: on }, navigator: { serviceWorker }, console: { info() {}, warn() {} } };
  vm.runInNewContext(script, ctx);
  for (const ev of ['DOMContentLoaded', 'load']) (handlers[ev] || []).forEach((fn) => fn());
  return registered;
}

test('F5: only coi-serviceworker.js is registered, so isolation is not replaced', () => {
  assert.deepEqual(run(false), ['./coi-serviceworker.js']);
  assert.ok(run(true).every((u) => u === './coi-serviceworker.js'));
});
