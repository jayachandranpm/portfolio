const mobileScreens = (slug, screens) => screens.map(([file, label]) => ({
  file: `${file}.png`,
  src: `assets/mobile/${slug}/${file}.png`,
  label
}));

window.PORTFOLIO_DATA = {
  mobileApps: [
    {
      id: "aether",
      name: "Aether",
      summary: "An illustrated weather companion for forecasts, saved places, daylight and weather maps.",
      description: "A native Flutter weather app with current conditions, hourly and multi-day forecasts, saved cities, interactive daylight, published weather warnings and a locally bundled scientific map renderer. Weather layers and warning coverage are labeled by source and freshness.",
      problem: "Weather apps can bury useful details in dense charts, separate maps and ambiguous alerts.",
      solution: "A clear daily outlook with approachable weather cards, daylight exploration, saved locations and layered maps, backed by visible data sources.",
      value: "People can move from a quick weather check to deeper exploration without losing the context of place and time.",
      tags: ["Flutter", "Weather data", "MapLibre"],
      notes: "The gallery uses controlled native-widget forecasts. Map views are separately labeled browser/shared-renderer previews; warning examples are not active alerts.",
      screens: []
    },
    {
      id: "rooted",
      name: "Rooted",
      summary: "Food labels, personal price history, nearby nature and a private journal in one everyday companion.",
      description: "Rooted brings together food and barcode lookup, product comparison, an editable basket, receipt review, dated purchase history, nearby nature observations, weather and rich-text journaling. Personal records stay local, with user-controlled backups.",
      problem: "Everyday information about food, changing prices and nearby nature is scattered across unrelated tools.",
      solution: "A source-aware mobile workspace that connects label details, personal purchase records, nature discovery and private notes.",
      value: "People can make more informed everyday choices while keeping personal receipts, notes and purchase history on their device.",
      tags: ["Flutter", "Open data", "Local-first"],
      notes: "Full-phone previews are rendered from the current Flutter widgets with controlled sample foods, prices, weather and journal entries. Food and nature coverage depends on public sources. Prices are dated observations, not live merchant offers; nature records are not guaranteed sightings.",
      screens: []
    },
    {
      id: "thirukkural",
      name: "Thirukkural",
      summary: "A Tamil-first companion for daily wisdom, thoughtful reading and personal reflection.",
      description: "All 1,330 Kurals and 133 chapters are available offline, alongside Tamil originals, transliteration, explanations and credited translations. Search, listening, favourites, private reflections, recall practice and a reading journey support a daily habit.",
      problem: "A rich classical text is harder to build a habit around when reading, translations and personal reflection are disconnected.",
      solution: "A daily Kural and complete offline library with an intentional reader, multilingual context, voice options and learning tools.",
      value: "Readers can explore Tamil literature at their own pace, revisit meaningful verses and carry its ideas into daily life.",
      tags: ["Flutter", "Tamil-first", "Offline reading"],
      notes: "Device speech uses installed voices. Optional neural voices require a separately configured speech server; the text library itself works offline.",
      screens: []
    },
    {
      id: "agaram",
      name: "Agaram",
      summary: "A playful language-learning foundation with Aru the peacock, dictionaries, lessons and adaptive practice.",
      description: "Agaram combines situation-based learning paths, a multilingual dictionary, listening and word practice, personal vocabulary, adaptive review and progress tools. An original animated peacock companion brings encouragement to the learning journey.",
      problem: "Language learning can feel disconnected when vocabulary, useful situations, listening and review live in separate experiences.",
      solution: "An approachable learning journey with structured starter content, connected dictionaries, speech, recall practice and an expressive companion.",
      value: "Learners can make small, repeatable progress and revisit what they have learned in a coherent, encouraging space.",
      tags: ["Flutter", "Language learning", "Rive animation"],
      notes: "This is a learning foundation, not a complete A1–C1 course or proficiency certification. Optional voice packs have their own licensing and download requirements.",
      screens: []
    },
    {
      id: "clipstash",
      name: "ClipStash",
      summary: "A private clipboard history that turns copied fragments into a searchable, organized working memory.",
      description: "ClipStash continuously captures copied content on-device, then adds search, categories, favorites, collections, templates, recovery, secure exports, and biometric protection without sending the clipboard to a server.",
      problem: "Copied text, links, and snippets disappear as soon as the system clipboard changes, while cloud clipboard managers can expose sensitive material.",
      solution: "An on-device clipboard timeline with search, organization, reusable templates, reversible deletion, encrypted exports, and biometric access.",
      value: "Transient fragments become a private, recoverable working memory instead of disposable clipboard history.",
      tags: ["Flutter", "Local-first", "Biometrics"],
      color: "#3f6b56",
      tilt: "-2deg",
      source: "https://github.com/jayachandranpm/clipstash",
      preview: "https://jayachandranpm.github.io/clipstash/",
      screens: mobileScreens("clipstash", [
        ["clips-light", "Clipboard library"], ["clips-dark", "Dark theme"], ["settings-dark", "Settings"],
        ["approved-features/template", "Reusable templates"], ["approved-features/import-review", "Safe import review"],
        ["approved-features/backups", "Portable backups"], ["approved-features/privacy", "Privacy controls"],
        ["approved-features/trash", "Reversible deletion"]
      ])
    },
    {
      id: "fm-radio",
      name: "FM Radio",
      summary: "Global internet radio with discovery, favorites, listening history, and resilient background playback.",
      description: "A complete radio experience backed by Radio Browser, with search and filters, station health, favorites, listening history, queues, sleep timers, background audio controls, and a focused now-playing surface.",
      problem: "Internet radio is fragmented across directories, unreliable streams, and players that lose state or stop when the app leaves the foreground.",
      solution: "A Radio Browser client that combines station discovery, stream health, favorites, history, sleep controls, queues, and resilient background playback.",
      value: "Listeners can discover and return to global stations through one dependable listening experience.",
      tags: ["Flutter", "Background audio", "Radio Browser"],
      color: "#7a6148",
      tilt: "2deg",
      source: "https://github.com/jayachandranpm/fm-radio",
      preview: "https://jayachandranpm.github.io/fm-radio/",
      screens: mobileScreens("fm-radio", [
        ["home", "Home"], ["discover", "Discover"], ["discover-filters", "Station filters"],
        ["saved", "Saved stations"], ["now-playing", "Now playing"], ["history", "Listening history"],
        ["settings", "Settings"]
      ])
    },
    {
      id: "i-remember",
      name: "I Remember",
      summary: "An offline knowledge notebook for quick capture, rich notes, semantic recall, and private sync.",
      description: "A local-first note system combining rich text, voice, OCR, handwriting, sketches, templates, calendar recall, keyword and semantic search, on-device AI, encryption, and device-to-device synchronization.",
      problem: "Ideas arrive in different formats and are quickly buried, while cloud-first recall tools often require giving private notes to a remote service.",
      solution: "A multimodal local notebook with quick capture, rich editing, OCR, voice, semantic recall, encryption, and controlled device-to-device sync.",
      value: "People can capture naturally and rediscover their own knowledge without surrendering control of it.",
      tags: ["Flutter", "On-device AI", "Encrypted notes"],
      color: "#6a5c70",
      tilt: "-1deg",
      source: "https://github.com/jayachandranpm/i-remember",
      preview: "https://jayachandranpm.github.io/i-remember/",
      screens: mobileScreens("i-remember", [
        ["notes", "Memory palace"], ["quick-create", "Quick capture"], ["search", "Find a thought"],
        ["editor", "Rich editor"], ["ask-notes", "Ask your notes"], ["calendar", "Timeline calendar"],
        ["weekly-digest", "Weekly reflection"], ["templates", "Templates"], ["settings", "Settings"]
      ])
    },
    {
      id: "jays-journal",
      name: "Jay's Journal",
      summary: "A private journal shaped around writing, voice capture, moods, memories, and reflection.",
      description: "A calm offline journal with a Medium-inspired editor, fast local dictation, voice entries, moods, tags, reminders, insights, encrypted storage, reading mode, import, and portable backups.",
      problem: "Journaling loses momentum when writing tools feel cramped, voice capture is slow, or personal reflections depend on a cloud account.",
      solution: "A calm offline journal pairing an editorial writing surface with fast local dictation, voice entries, moods, reminders, encryption, and portable backups.",
      value: "Reflection stays private and low-friction across both spoken and written entries.",
      tags: ["Flutter", "Voice capture", "Private journal"],
      color: "#4b6f7b",
      tilt: "1.5deg",
      source: "https://github.com/jayachandranpm/jays-journal",
      preview: "https://jayachandranpm.github.io/jays-journal/",
      screens: mobileScreens("jays-journal", [
        ["home", "Journal home"], ["editor", "Rich editor"], ["voice-entry", "Voice journal"],
        ["onboarding", "Welcome"], ["onboarding-personalize", "Personalize"],
        ["new-entry-options", "New entry"], ["reading", "Reading view"],
        ["entries", "All entries"], ["moods", "Mood check-in"],
        ["insights", "Insights"], ["calendar", "Calendar"], ["tags", "Manage tags"],
        ["import", "Import"], ["settings", "Settings"], ["settings-backup-manage", "Backup and manage"],
        ["reading-dark", "Dark reading"]
      ])
    },
    {
      id: "mindful-spend",
      name: "Mindful Spend",
      summary: "A comprehensive money companion for transactions, budgets, bills, accounts, goals, and reports.",
      description: "A robust personal-finance system with multiple accounts, transfers, budgets, recurring bills, goals, categories, receipt capture, search, notifications, reports, backups, and thoughtfully designed empty and error states.",
      problem: "Everyday money decisions are scattered across accounts, bills, receipts, and spreadsheets, making it difficult to see what is safe to spend.",
      solution: "A unified finance workspace for transactions, accounts, transfers, budgets, recurring bills, goals, receipts, reports, and backups.",
      value: "Daily spending and longer-term commitments can be understood from one consistent source of truth.",
      tags: ["Flutter", "Personal finance", "Data visualization"],
      color: "#70643b",
      tilt: "-2deg",
      source: "https://github.com/jayachandranpm/mindful-spend",
      preview: "https://jayachandranpm.github.io/mindful-spend/",
      screens: mobileScreens("mindful-spend", [
        ["dashboard", "Dashboard"], ["transactions", "Transactions"], ["add-transaction", "Add transaction"],
        ["receipt", "Receipt capture"], ["accounts", "Accounts"], ["budgets", "Budgets"],
        ["bills", "Bills"], ["goals", "Savings goals"], ["reports", "Reports"],
        ["reports-calendar", "Calendar analysis"], ["search", "Search"], ["profile", "Profile"],
        ["settings", "Settings"], ["backup", "Backups"], ["dashboard-dark", "Dark dashboard"],
        ["budgets-empty", "Empty budgets"]
      ])
    },
    {
      id: "speak-i-shall-write",
      name: "Speak, I Shall Write",
      summary: "Privacy-first on-device dictation for fast notes, long recordings, and clean transcripts.",
      description: "An offline transcription workspace designed for responsive dictation, meeting notes, model management, writing tools, folders, recovery, history, performance states, and transparent local storage.",
      problem: "Cloud dictation introduces latency, usage limits, and privacy concerns—especially for long recordings and sensitive notes.",
      solution: "Responsive on-device transcription with model controls, long-form recording, writing tools, folders, recovery, and transparent local storage.",
      value: "Speech becomes editable text quickly and privately, even when the network is unavailable.",
      tags: ["Flutter", "On-device speech", "Offline"],
      color: "#635576",
      tilt: "1.5deg",
      source: "https://github.com/jayachandranpm/speak-i-shall-write",
      preview: "https://jayachandranpm.github.io/speak-i-shall-write/",
      screens: mobileScreens("speak-i-shall-write", [
        ["record", "Live dictation"], ["history", "Transcript history"], ["writing-tools", "Writing tools"],
        ["onboarding", "Welcome"], ["onboarding-permission", "Microphone access"],
        ["model-picker", "Model picker"], ["history-detail", "Transcript detail"],
        ["history-no-results", "No search results"], ["stats", "Dashboard"], ["stats-loading", "Dashboard loading"],
        ["models", "Speech models"], ["folders", "Folders"],
        ["settings", "Dark settings"], ["settings-light", "Light settings"], ["history-empty", "Empty history"],
        ["stats-error", "Dashboard unavailable"]
      ])
    },
    {
      id: "tell-the-world",
      name: "Tell the World",
      summary: "An offline writing studio that publishes polished, themed articles directly to the web.",
      description: "A focused publishing tool with rich editing, imagery, drafts, search, statistics, recoverable backups, GitHub Pages publishing, repository controls, and durable theme metadata so published articles retain their intended design.",
      problem: "Writers often choose between simple local tools that cannot publish and publishing platforms that control the presentation and hosting.",
      solution: "An offline editor with drafts, imagery, reusable themes, previews, backups, and direct publishing to a user-owned GitHub Pages repository.",
      value: "Writers retain ownership of both their work and its final visual presentation on the web.",
      tags: ["Flutter", "Publishing", "GitHub Pages"],
      color: "#795b4d",
      tilt: "-2deg",
      source: "https://github.com/jayachandranpm/tell-the-world",
      preview: "https://jayachandranpm.github.io/tell-the-world/",
      screens: mobileScreens("tell-the-world", [
        ["home", "Writing home"], ["editor", "Visual editor"], ["posts", "Post library"],
        ["search", "Search"], ["reading", "Reading preview"], ["editor-dark", "Dark editor"],
        ["stats", "Statistics"], ["settings", "Settings"], ["connect", "Connect"],
        ["publish-repository", "Publish repository"], ["publish-details", "Publish details"],
        ["publish-style", "Publishing style"]
      ])
    },
    {
      id: "vitalis",
      name: "Vitalis",
      summary: "An offline health companion for habits, nutrition, activity, sleep, vitals, and reflection.",
      description: "A broad wellness system that unifies daily habits, goals, quick logs, hydration, workouts, nutrition, sleep, vitals, mindfulness, journaling, insights, and a private health conversation into one coherent local-first experience.",
      problem: "Health signals are split across isolated trackers, making it difficult to understand how habits, sleep, food, activity, vitals, and mood influence one another.",
      solution: "A local-first wellness system that connects quick logs, habits, nutrition, hydration, workouts, sleep, vitals, mindfulness, journaling, and insights.",
      value: "Daily actions and longer-term patterns can be reviewed together without turning private health history into an advertising profile.",
      tags: ["Flutter", "Health", "On-device insights"],
      color: "#39665b",
      tilt: "2deg",
      source: "https://github.com/jayachandranpm/vitalis",
      preview: "https://jayachandranpm.github.io/vitalis/",
      screens: mobileScreens("vitalis", [
        ["today", "Today"], ["quick-log", "Quick log"], ["habits", "Habits"], ["logs", "Logs"],
        ["insights-loading", "Insights loading"], ["insights", "Health insights"], ["nutrition", "Nutrition"],
        ["sleep", "Sleep"], ["mindfulness", "Mindfulness"], ["workouts", "Workouts"],
        ["journal", "Journal"], ["vitals", "Vitals"], ["hydration", "Hydration"], ["goals", "Goals"],
        ["health-chat", "Health chat"], ["settings", "Settings"], ["settings-dark", "Dark settings"],
        ["onboarding", "Onboarding"], ["onboarding-profile", "Personal setup"], ["habits-empty", "Empty habits"]
      ])
    },
    {
      id: "hill-myna",
      name: "Hill Myna",
      summary: "A private on-device AI assistant with local models, documents, tools, and cited research.",
      description: "An offline-first assistant for running local GGUF models, organizing conversations, bringing private documents into context, using speech and tools, and optionally expanding into source-cited web research.",
      problem: "Useful AI assistants usually require sending conversations and documents to a remote provider, and their answers can be difficult to verify.",
      solution: "An offline-first assistant for local GGUF models, private document context, speech, tools, durable conversations, and optional source-cited research.",
      value: "Users can choose when AI stays entirely local and when a question genuinely benefits from the wider web.",
      tags: ["Flutter", "Local LLM", "Private AI"],
      color: "#59633f",
      tilt: "-1.5deg",
      source: "https://github.com/jayachandranpm/hill-myna",
      preview: "https://jayachandranpm.github.io/hill-myna/",
      screens: mobileScreens("hill-myna", [
        ["assistant", "Assistant"], ["assistant-dark", "Dark theme"], ["history", "Conversation library"],
        ["documents", "Local knowledge"], ["models", "Local models"], ["settings", "Privacy controls"],
        ["archive", "Encrypted archive"]
      ])
    },
    {
      id: "wake-me-up",
      name: "Wake Me Up",
      summary: "A destination alert for travelers who want to rest without missing their stop.",
      description: "An OpenStreetMap-based geo-alarm with place recommendations, adjustable alert radii, background monitoring, saved places, reusable trips and routes, full-screen arrival alarms, and wake-up challenges.",
      problem: "Travelers cannot comfortably rest on an unfamiliar route when a normal clock alarm has no understanding of distance or arrival progress.",
      solution: "An OpenStreetMap destination alarm with place search, adjustable geofences, background monitoring, reusable routes, saved places, and full-screen arrival challenges.",
      value: "People can rest during a journey while the device watches the destination instead of the clock.",
      tags: ["Flutter", "OpenStreetMap", "Background location"],
      notes: "These previews use the current Flutter interface and controlled journey data. Map tiles and Android's native 3D map renderer are unavailable in offscreen widget renders; map views demonstrate the interface rather than live cartography. Location monitoring and alarms require device testing.",
      color: "#416b7d",
      tilt: "2deg",
      source: "https://github.com/jayachandranpm/wake-me-up",
      preview: "https://jayachandranpm.github.io/wake-me-up/",
      screens: mobileScreens("wake-me-up", [
        ["map-destination", "Destination map"], ["map-search-suggestions", "Search suggestions"],
        ["trips", "Trip history"], ["routes", "Multi-stop routes"], ["route-actions", "Route actions"],
        ["saved-places", "Saved places"], ["saved-sort", "Sort controls"], ["settings", "Settings"],
        ["settings-dark", "Dark settings"], ["onboarding-alert", "Onboarding"], ["onboarding-map", "Map onboarding"],
        ["alarm", "Arrival alarm"], ["trips-empty", "Empty trips"], ["saved-empty", "Empty saved places"]
      ])
    }
  ]
};

// Preview assets are versioned with this portfolio, rather than depending on
// independently deployed app repositories or stale external gallery pages.
for (const app of window.PORTFOLIO_DATA.mobileApps) {
  const preview = window.MOBILE_PREVIEWS?.[app.id];
  if (preview) {
    app.screens = preview.screens;
    app.previewUpdated = preview.updated;
  }
  app.preview = `mobile-app.html?app=${encodeURIComponent(app.id)}`;
}
