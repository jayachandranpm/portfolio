const mobileScreens = (slug, screens) => screens.map(([file, label]) => ({
  src: `https://jayachandranpm.github.io/${slug}/previews/${file}.png`,
  label
}));

window.PORTFOLIO_DATA = {
  mobileApps: [
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
      id: "music-to-ears",
      name: "Music to My Ears",
      summary: "Music discovery and playback with playlists, lyrics, downloads, queues, and car mode.",
      description: "A full music player covering discovery, search, artists, playlists, queue management, synchronized lyrics, local music, downloads, playback history, equalizer controls, car mode, statistics, and dependable background audio.",
      problem: "Music listening becomes disjointed when discovery, local files, lyrics, queues, downloads, and background controls behave like separate products.",
      solution: "A complete player that unifies discovery, playlists, synchronized lyrics, downloads, local music, queues, car mode, and durable background audio.",
      value: "Listeners keep a continuous playback experience while moving between discovery, the lock screen, lyrics, and offline listening.",
      tags: ["Flutter", "Media playback", "Lyrics"],
      color: "#76536a",
      tilt: "2deg",
      source: "https://github.com/jayachandranpm/music-to-my-ears",
      preview: "https://jayachandranpm.github.io/music-to-my-ears/",
      screens: mobileScreens("music-to-my-ears", [
        ["approved-features/discover-dark", "Discover"], ["approved-features/discover-light", "In daylight"],
        ["approved-features/now-playing", "Now playing"], ["approved-features/search", "Search"],
        ["approved-features/search-results", "Search results"], ["approved-features/library", "Library"],
        ["approved-features/downloads", "Downloads"], ["approved-features/queue", "Up next"],
        ["approved-features/lyrics", "Time-synced lyrics"], ["approved-features/playlist", "Playlist"],
        ["approved-features/artist", "Artist"], ["approved-features/browse", "Browse by mood"],
        ["approved-features/settings", "Settings"], ["approved-features/equalizer", "Equalizer"],
        ["approved-features/history", "Listening history"], ["approved-features/stats", "Listening stats"],
        ["approved-features/storage", "Storage"], ["approved-features/sources", "Music sources"],
        ["approved-features/car-mode", "Car mode"]
      ])
    },
    {
      id: "personal-vault",
      name: "Personal Vault",
      summary: "A chat-like private space for notes, links, media, files, voice, and shared locations.",
      description: "A local personal knowledge vault organized like a familiar conversation. It supports rich messages, replies, reactions, documents, media, audio, link previews, maps and location sharing, collections, history, lock screens, backups, and security controls.",
      problem: "Personal files, links, voice notes, locations, and reminders are spread across apps that were designed for communication rather than private organization.",
      solution: "A familiar chat-shaped vault with rich messages, previews, replies, reactions, collections, protected attachments, locations, search, and backups.",
      value: "Different kinds of personal information can be captured in one private timeline without inventing a new organizational habit.",
      tags: ["Flutter", "Knowledge vault", "Rich previews"],
      color: "#4c5d78",
      tilt: "-1deg",
      source: "https://github.com/jayachandranpm/personal-vault",
      preview: "https://jayachandranpm.github.io/personal-vault/",
      screens: mobileScreens("personal-vault", [
        ["approved-features/chat-light", "Private timeline"], ["approved-features/chat-dark", "Dark mode"],
        ["search", "Search everything"], ["search-results", "Search results"], ["collections", "Collections"],
        ["collection-detail", "Collection detail"], ["image-preview", "Rich file preview"],
        ["approved-features/protected-photo", "Protected attachment"], ["settings", "Settings"],
        ["security", "Security"], ["vault-health", "Vault health"], ["automation", "Automation"],
        ["trash", "Reversible deletion"]
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
