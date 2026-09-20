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
      tags: ["Flutter", "Voice capture", "Private journal"],
      color: "#4b6f7b",
      tilt: "1.5deg",
      source: "https://github.com/jayachandranpm/jays-journal",
      preview: "https://jayachandranpm.github.io/jays-journal/",
      screens: mobileScreens("jays-journal", [
        ["onboarding", "Welcome"], ["onboarding-personalize", "Personalize"], ["home", "Journal home"],
        ["new-entry-options", "New entry"], ["editor", "Rich editor"], ["reading", "Reading view"],
        ["entries", "All entries"], ["voice-entry", "Voice journal"], ["moods", "Mood check-in"],
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
      tags: ["Flutter", "On-device speech", "Offline"],
      color: "#635576",
      tilt: "1.5deg",
      source: "https://github.com/jayachandranpm/speak-i-shall-write",
      preview: "https://jayachandranpm.github.io/speak-i-shall-write/",
      screens: mobileScreens("speak-i-shall-write", [
        ["onboarding", "Welcome"], ["onboarding-permission", "Microphone access"], ["record", "Live dictation"],
        ["model-picker", "Model picker"], ["history", "Transcript history"], ["history-detail", "Transcript detail"],
        ["history-no-results", "No search results"], ["stats", "Dashboard"], ["stats-loading", "Dashboard loading"],
        ["models", "Speech models"], ["folders", "Folders"], ["writing-tools", "Writing tools"],
        ["settings", "Dark settings"], ["settings-light", "Light settings"], ["history-empty", "Empty history"],
        ["stats-error", "Dashboard unavailable"]
      ])
    },
    {
      id: "tell-the-world",
      name: "Tell the World",
      summary: "An offline writing studio that publishes polished, themed articles directly to the web.",
      description: "A focused publishing tool with rich editing, imagery, drafts, search, statistics, recoverable backups, GitHub Pages publishing, repository controls, and durable theme metadata so published articles retain their intended design.",
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
  ],
  archive: [
    { name: "Zia RAG Bot", description: "Citation-backed CRM documentation assistant using hybrid retrieval and reciprocal rank fusion.", type: "ai", label: "AI · RAG", url: "https://github.com/jayachandranpm/Zia-RAG-Bot" },
    { name: "Python Code Visualizer", description: "Step through Python execution and watch variables, control flow, and output evolve.", type: "web", label: "Web · Education", url: "https://github.com/jayachandranpm/python-code-visualizer" },
    { name: "Zia Agent Walkthrough", description: "A visual product walkthrough for agent capabilities and guided activation.", type: "web", label: "Web · Product", url: "https://github.com/jayachandranpm/Zia-Agent-Product-Walkthrough" },
    { name: "Gemini Blog Assistant", description: "A writing workflow for ideation, drafting, and refining posts with Gemini.", type: "ai", label: "AI · Writing", url: "https://github.com/jayachandranpm/Gemini-Blog-Assistant" },
    { name: "Web Automation Assistant", description: "Turns natural-language tasks into reviewable Puppeteer browser automations.", type: "ai", label: "AI · Automation", url: "https://github.com/jayachandranpm/Web-Automation-Assistant-with-Puppeteer-Gemini-AI" },
    { name: "CodeLens", description: "Compile code and receive a step-by-step AI explanation of how it behaves.", type: "ai", label: "AI · Developer tool", url: "https://github.com/jayachandranpm/CodeLens-Compile-Explain" },
    { name: "Quiz Creator", description: "Generate, share, and take focused quizzes from a prompt or learning goal.", type: "ai", label: "AI · Education", url: "https://github.com/jayachandranpm/Quiz-Creator-using-AI" },
    { name: "JEN Agent", description: "An agent experiment built with the Mastra framework and tool-oriented workflows.", type: "ai", label: "AI · Agents", url: "https://github.com/jayachandranpm/JEN-Agent" },
    { name: "Web Search Agent", description: "A focused agent for exploring the web and synthesizing search findings.", type: "ai", label: "AI · Search", url: "https://github.com/jayachandranpm/Web-Search-Agent" },
    { name: "RAG UI", description: "A TypeScript interface exploration for retrieval-augmented conversations.", type: "web", label: "Web · RAG", url: "https://github.com/jayachandranpm/RAG-UI" },
    { name: "Gentle Voice Support", description: "A softer conversational support interface centered on accessible voice interaction.", type: "web", label: "Web · Voice", url: "https://github.com/jayachandranpm/gentle-voice-support" },
    { name: "Django Realtime Chat", description: "A realtime messaging application built around Django workflows.", type: "web", label: "Web · Django", url: "https://github.com/jayachandranpm/Django_chatproject" },
    { name: "Hacker News Clone", description: "A clean web implementation of familiar feed, ranking, and discussion patterns.", type: "web", label: "Web · Frontend", url: "https://github.com/jayachandranpm/Hackernews_Clone" },
    { name: "Rentify", description: "A property rental experience exploring discovery, listings, and renter workflows.", type: "web", label: "Web · Marketplace", url: "https://github.com/jayachandranpm/Rentify" },
    { name: "Jen Analytics", description: "A hosted analytics project and collection of interactive data work.", type: "data", label: "Data · Analytics", url: "https://JenAnalytics.github.io/" },
    { name: "Employee Churn Prediction", description: "A Streamlit dashboard for exploring employee retention risk from model inputs.", type: "data", label: "Data · ML", url: "https://github.com/jayachandranpm/Employee-Churn-Prediction" },
    { name: "Heart Disease Prediction", description: "A machine-learning exploration of heart disease risk classification.", type: "data", label: "Data · ML", url: "https://github.com/jayachandranpm/Heart_Disease_Prediction" },
    { name: "IMDB Sentiment Analysis", description: "Natural-language classification for positive and negative movie reviews.", type: "data", label: "Data · NLP", url: "https://github.com/jayachandranpm/IMDB-movie-review-sentiment-analysis" },
    { name: "Movie Recommendation System", description: "A recommendation experiment for finding relevant films from user taste.", type: "data", label: "Data · Recommenders", url: "https://github.com/jayachandranpm/Movie-Recommendation-System" },
    { name: "MNIST Digit App", description: "An interactive handwritten-digit prediction experience backed by an MNIST model.", type: "data", label: "Data · Vision", url: "https://github.com/jayachandranpm/MNIST-Handwritten-Digit-Prediction-App" },
    { name: "Data Analytics Projects", description: "A growing archive of analysis, visualization, and modeling exercises.", type: "data", label: "Data · Portfolio", url: "https://github.com/jayachandranpm/Data-Analytics-Projects" },
    { name: "Thirukural Wisdom", description: "A cultural knowledge experience centered on discovering and reflecting on Thirukural.", type: "ai", label: "AI · Culture", url: "https://github.com/jayachandranpm/Thirukural-Wisdom" },
    { name: "Jen Encryption Tool", description: "A browser-based utility for approachable encryption and decryption workflows.", type: "web", label: "Web · Security", url: "https://github.com/jayachandranpm/Jen-Encryption-tool" }
  ]
};
