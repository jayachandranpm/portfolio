// Copies real app captures without cropping, resizing or generating UI images.
// Usage: node tools/sync-mobile-previews.mjs "/path/to/Projects/Mobile Apps"
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const workspace = path.resolve(process.argv[2] ?? path.join(root, '../../Mobile Apps'));
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'projects.js'), 'utf8'), sandbox);
const apps = sandbox.window.PORTFOLIO_DATA.mobileApps;
const base = {
  clipstash: 'ClipStash', 'fm-radio': 'FM Radio', 'i-remember': 'I remember',
  'jays-journal': "Jay's Diary", 'mindful-spend': 'Mindful Spend',
  'speak-i-shall-write': 'Speak I shall write', 'tell-the-world': 'Tell the world',
  vitalis: 'Vitalis', 'hill-myna': 'hill_myna', 'wake-me-up': 'wakemeup',
};
const overrides = {
  aether: [
    ['Aether Weather/validation/native/today.png', 'Today'],
    ['Aether Weather/validation/native/forecast.png', 'Forecast'],
    ['Aether Weather/validation/native/places.png', 'Saved places'],
    ['Aether Weather/validation/native/search.png', 'Place search'],
    ['Aether Weather/validation/native/hour-details.png', 'Hourly details'],
    ['Aether Weather/validation/native/daylight-dawn.png', 'Dawn and daylight'],
    ['Aether Weather/validation/native/daylight-golden.png', 'Golden hour'],
    ['Aether Weather/validation/native/night.png', 'Night forecast'],
    ['Aether Weather/validation/native/alerts.png', 'Weather warnings · sample data'],
    ['Aether Weather/validation/native/alert-details.png', 'Warning details · sample data'],
    ['Aether Weather/validation/native/preferences.png', 'Preferences'],
    ['Aether Weather/validation/navigation-polish/after-india-map.png', 'Weather map · shared renderer', 'browser'],
    ['Aether Weather/validation/navigation-polish/after-layers.png', 'Map layers · shared renderer', 'browser'],
  ],
  rooted: [
    ['home', 'Everyday overview'], ['food-search', 'Food search'],
    ['food-details', 'Food label details'], ['basket', 'Shopping basket'],
    ['nearby', 'Nearby nature · empty state'], ['journal', 'Private journal'],
    ['editor', 'Rich journal editor'], ['editor-format', 'Journal formatting'],
    ['editor-insert', 'Journal inserts'], ['settings', 'Settings'],
  ].map(([file, label]) => [`Rooted/docs/portfolio-2026-11-03/${file}.png`, label]),
  thirukkural: ['today', 'reader', 'explore', 'learn', 'journey', 'voice', 'downloads', 'settings'].map(file => [
    `Thirukkural/docs/verification/ui-1.7.0/${file}.png`,
    ({today:'Daily Kural',reader:'Thoughtful reading',explore:'Explore the collection',learn:'Recall practice',journey:'Reading journey',voice:'Voice and speech',downloads:'Voice downloads',settings:'Settings'})[file],
  ]),
  'wake-me-up': [
    ['map-destination', 'Destination alert · Flutter preview'],
    ['arrival-setup', 'Arrival setup'], ['map-radius', 'Wake-up distance'],
    ['map-search-suggestions', 'Destination search'], ['trips', 'Trip history'],
    ['trip-insights', 'Trip insights'], ['routes', 'Saved routes'],
    ['saved-places', 'Saved places'], ['saved-sort', 'Place sorting'],
    ['settings', 'Settings'], ['settings-search', 'Search settings'],
    ['settings-alert-behavior', 'Alert behavior'],
    ['settings-alarm-experience', 'Alarm experience'],
    ['settings-appearance', 'Appearance'], ['settings-about', 'About Wake Me Up'],
    ['settings-dark', 'Settings · dark theme'],
    ['map-dark', 'Destination · dark theme'],
    ['active-alert-dark', 'Active alert · dark theme'],
    ['route-actions', 'Route actions'], ['offline-maps', 'Offline maps'],
    ['onboarding-alert', 'Arrival onboarding'], ['alarm', 'Arrival alarm'],
    ['trips-empty', 'Trip history · empty state'],
    ['saved-empty', 'Saved places · empty state'],
  ].map(([file, label]) => [`wakemeup/docs/previews/${file}.png`, label]),
  agaram: [
    ['../Agaram/docs/portfolio-2026-11-03/learning-path.jpg', 'Your learning path', 'browser'],
    ['../Agaram/docs/peacock-layout-2026-10-28/12-profile-phone.png', 'Your learning space', 'browser'],
    ['../Agaram/docs/peacock-layout-2026-10-28/10-dictionary-phone.png', 'Explore the dictionary', 'browser'],
    ['../Agaram/docs/peacock-layout-2026-10-28/16-word-phone-final.png', 'Word discovery', 'browser'],
    ['../Agaram/docs/peacock-layout-2026-10-28/03-practice.png', 'Practice hub', 'browser'],
    ['../Agaram/docs/peacock-layout-2026-10-28/05-lab-phone.png', 'Learning lab', 'browser'],
    ['../Agaram/docs/peacock-layout-2026-10-28/23-recording-bar-final.png', 'Speaking practice', 'browser'],
    ['../Agaram/docs/peacock-layout-2026-10-28/09-voice-phone.png', 'Voice settings', 'browser'],
    ['../Agaram/docs/peacock-layout-2026-10-28/17-peacock-phone.png', 'Meet Aru', 'browser'],
  ],
};
const title = (file) => file.replace(/\.png$/, '').replaceAll('-', ' ').replace(/^\w/, c => c.toUpperCase());
function dimensions(bytes) {
  if (bytes.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) {
    return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20), extension: 'png' };
  }
  if (bytes[0] === 255 && bytes[1] === 216) {
    let offset = 2;
    while (offset < bytes.length) {
      if (bytes[offset++] !== 255) continue;
      let marker = bytes[offset++];
      while (marker === 255) marker = bytes[offset++];
      const length = bytes.readUInt16BE(offset);
      if ([192,193,194,195,197,198,199,201,202,203,205,206,207].includes(marker)) {
        return { height: bytes.readUInt16BE(offset + 3), width: bytes.readUInt16BE(offset + 5), extension: 'jpg' };
      }
      offset += length;
    }
  }
  throw new Error('Unsupported or invalid image');
}

const manifest = {};
const manifestFile = path.join(root, 'assets/mobile/manifest.json');
const previousIds = fs.existsSync(manifestFile)
  ? Object.keys(JSON.parse(fs.readFileSync(manifestFile, 'utf8'))) : [];
let total = 0;
for (const app of apps) {
  const appFolder = base[app.id];
  let captures = overrides[app.id] ?? app.screens.map(screen => [
    `${appFolder}/docs/previews/${screen.file}`, screen.label,
  ]);
  if (['jays-journal', 'i-remember', 'mindful-spend', 'tell-the-world'].includes(app.id)) {
    const directory = path.join(workspace, appFolder, 'docs/previews');
    const extras = fs.readdirSync(directory).filter(file => file.endsWith('.png'))
      .map(file => [`${appFolder}/docs/previews/${file}`, title(file)]);
    captures = [...captures, ...extras];
  }
  const seen = new Set();
  const screens = [];
  const output = path.join(root, 'assets/mobile', app.id);
  fs.mkdirSync(output, {recursive: true});
  for (const [relative, label, kind = 'flutter'] of captures) {
    const input = path.resolve(workspace, relative);
    if (!fs.existsSync(input)) continue;
    const bytes = fs.readFileSync(input);
    const info = dimensions(bytes);
    // Keep standard, full-size phone captures; omit compact accessibility
    // fixtures, desktop screenshots, comparison boards and artwork masters.
    if (info.width < 380 || info.height < 800 || info.height / info.width < 1.7 || info.height / info.width > 2.8 || /compact|large-text|320|comparison|before|reference|emulator/i.test(relative)) continue;
    const key = path.parse(relative).name;
    if (seen.has(key)) continue;
    seen.add(key);
    const sha256 = crypto.createHash('sha256').update(bytes).digest('hex');
    // New image bytes always receive a new URL, including when the source name
    // stays the same. This prevents stale portfolio images in browser caches.
    const file = `${key}-${sha256.slice(0, 12)}.${info.extension}`;
    fs.copyFileSync(input, path.join(output, file));
    screens.push({
      src: `assets/mobile/${app.id}/${file}`, label,
      width: info.width, height: info.height, kind,
      source: relative,
      captured: fs.statSync(input).mtime.toISOString().slice(0, 10),
      sha256,
    });
  }
  if (!screens.length) throw new Error(`No usable captures for ${app.id}`);
  const retained = new Set(screens.map(screen => path.basename(screen.src)));
  for (const file of fs.readdirSync(output)) {
    if (/\.(png|jpg)$/.test(file) && !retained.has(file)) fs.unlinkSync(path.join(output, file));
  }
  manifest[app.id] = { updated: '2026-11-03', screens };
  total += screens.length;
  console.log(`${app.name}: ${screens.length} screens`);
}
// Only prune previously managed galleries, never unrelated asset directories.
for (const id of previousIds) {
  if (!Object.hasOwn(manifest, id) && /^[a-z0-9-]+$/.test(id)) {
    fs.rmSync(path.join(root, 'assets/mobile', id), {recursive: true, force: true});
  }
}
fs.writeFileSync(manifestFile, JSON.stringify(manifest, null, 2) + '\n');
const runtime = Object.fromEntries(Object.entries(manifest).map(([id, entry]) => [id, {
  updated: entry.updated,
  screens: entry.screens.map(({src,label,width,height,kind}) => ({src,label,width,height,kind})),
}]));
fs.writeFileSync(path.join(root, 'mobile-previews.js'), `// Generated by tools/sync-mobile-previews.mjs; do not edit.\nwindow.MOBILE_PREVIEWS = ${JSON.stringify(runtime, null, 2)};\n`);
console.log(`${apps.length} apps, ${total} full-screen captures. Original bytes preserved.`);
