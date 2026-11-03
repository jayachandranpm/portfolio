import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const context = {window: {}};
for (const file of ['mobile-previews.js', 'projects.js']) {
  vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), context);
}
const apps = context.window.PORTFOLIO_DATA.mobileApps;
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'assets/mobile/manifest.json')));
assert.equal(apps.length, 14);
assert.equal(new Set(apps.map(app => app.id)).size, apps.length);
assert.deepEqual(Object.keys(manifest).sort(), Array.from(apps, app => app.id).sort());
for (const id of ['music-to-ears', 'personal-vault']) {
  assert(!apps.some(app => app.id === id), `${id}: removed app is still listed`);
  assert(!Object.hasOwn(manifest, id), `${id}: removed gallery is still generated`);
  assert(!fs.existsSync(path.join(root, 'assets/mobile', id)), `${id}: removed assets remain`);
}
let count = 0;
for (const app of apps) {
  assert(!Object.hasOwn(app, 'source'), `${app.id}: mobile source link is exposed`);
  assert(app.screens.length > 0, `${app.id}: missing screens`);
  assert.equal(app.preview, `mobile-app.html?app=${app.id}&v=${context.window.PORTFOLIO_DATA.previewRelease}`);
  for (const field of ['name', 'summary', 'description', 'problem', 'solution', 'value']) {
    assert(app[field]?.trim(), `${app.id}: missing ${field}`);
  }
  assert(!/onboarding|welcome/i.test(app.screens[0].label), `${app.id}: onboarding cover`);
  assert.equal(manifest[app.id].screens.length, app.screens.length);
  const seen = new Set();
  for (const screen of app.screens) {
    assert(screen.src.startsWith(`assets/mobile/${app.id}/`));
    assert(!screen.src.includes('..'));
    assert(screen.label.trim());
    assert(!seen.has(screen.src), `Duplicate ${screen.src}`);
    seen.add(screen.src);
    assert(screen.width >= 380 && screen.height >= 800, `Small capture: ${screen.src}`);
    assert(screen.height / screen.width >= 1.7 && screen.height / screen.width <= 2.8);
    const bytes = fs.readFileSync(path.join(root, screen.src));
    const recorded = manifest[app.id].screens.find(item => item.src === screen.src);
    assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), recorded.sha256);
    assert(screen.src.includes(`-${recorded.sha256.slice(0, 12)}.`), `Unversioned image: ${screen.src}`);
    if (app.id === 'wake-me-up' || app.id === 'rooted') {
      assert.equal(screen.width, 780, `${app.id}: incorrect full-phone width`);
      assert.equal(screen.height, 1688, `${app.id}: incorrect full-phone height`);
      assert.equal(recorded.captured, '2026-11-03', `${app.id}: stale preview`);
      assert(recorded.source.startsWith(app.id === 'rooted'
        ? 'Rooted/docs/portfolio-2026-11-03/' : 'wakemeup/docs/previews/'));
    }
    if (screen.src.endsWith('.png')) {
      assert.equal(bytes.readUInt32BE(0), 0x89504e47);
      assert.equal(bytes.readUInt32BE(16), screen.width);
      assert.equal(bytes.readUInt32BE(20), screen.height);
    } else {
      assert(screen.src.endsWith('.jpg'));
      assert.equal(bytes.readUInt16BE(0), 0xffd8);
    }
    count++;
  }
}
const vitalisHome = manifest.vitalis.screens[0];
assert.equal(vitalisHome.source, 'Vitalis/docs/previews/today.png');
assert.equal(vitalisHome.captured, '2026-11-03');
assert.equal(vitalisHome.width, 780);
assert.equal(vitalisHome.height, 1688);
for (const file of ['script.js', 'mobile-app.js']) {
  assert(!/\bapp\.source\b/.test(fs.readFileSync(path.join(root, file), 'utf8')),
    `${file}: mobile renderer must not emit source links`);
}
for (const id of ['aether', 'rooted', 'thirukkural', 'agaram']) {
  assert(apps.some(app => app.id === id));
}
for (const file of ['index.html', 'mobile-app.html']) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  assert(html.indexOf('mobile-previews.js') < html.indexOf('projects.js'));
  if (file === 'mobile-app.html') {
    assert(html.includes(`index.html?v=${context.window.PORTFOLIO_DATA.previewRelease}#mobile`),
      'Gallery back link must not reopen a cached homepage');
  }
  for (const asset of ['style.css', 'mobile-previews.js', 'projects.js',
    file === 'index.html' ? 'script.js' : 'mobile-app.js']) {
    assert(html.includes(`${asset}?v=${context.window.PORTFOLIO_DATA.previewRelease}`),
      `${file}: asset version differs from gallery release`);
  }
}
console.log(`Verified ${apps.length} app galleries and ${count} original full-screen images.`);
