window.PORTFOLIO_DATA = {
  mobileApps: [
    {
      id: "clipstash",
      name: "ClipStash",
      summary: "A private clipboard history that turns copied fragments into a searchable, organized working memory.",
      description: "ClipStash continuously captures copied content on-device, then adds search, categories, favorites, collections, templates, recovery, secure exports, and biometric protection without sending the clipboard to a server.",
      tags: ["Flutter", "Local-first", "Biometrics"],
      color: "#244d3f",
      tilt: "-2deg",
      screens: [
        { src: "assets/mobile/clipstash/home.png", label: "Clipboard library" },
        { src: "assets/mobile/clipstash/dark.png", label: "Dark theme" },
        { src: "assets/mobile/clipstash/templates.png", label: "Reusable templates" }
      ]
    },
    {
      id: "fm-radio",
      name: "FM Radio",
      summary: "Global internet radio with discovery, favorites, listening history, and resilient background playback.",
      description: "A complete radio experience backed by Radio Browser, with search and filters, station health, favorites, listening history, queues, sleep timers, background audio controls, and a focused now-playing surface.",
      tags: ["Flutter", "Background audio", "Radio Browser"],
      color: "#563f2a",
      tilt: "2deg",
      screens: [
        { src: "assets/mobile/fm-radio/home.png", label: "Station home" },
        { src: "assets/mobile/fm-radio/now-playing.png", label: "Now playing" },
        { src: "assets/mobile/fm-radio/history.png", label: "Listening history" }
      ]
    },
    {
      id: "i-remember",
      name: "I Remember",
      summary: "An offline knowledge notebook for quick capture, rich notes, semantic recall, and private sync.",
      description: "A local-first note system combining rich text, voice, OCR, handwriting, sketches, templates, calendar recall, keyword and semantic search, on-device AI, encryption, and device-to-device synchronization.",
      tags: ["Flutter", "On-device AI", "Encrypted notes"],
      color: "#4a414f",
      tilt: "-1deg",
      screens: [
        { src: "assets/mobile/i-remember/notes.png", label: "Notes library" },
        { src: "assets/mobile/i-remember/quick-create.png", label: "Quick capture" },
        { src: "assets/mobile/i-remember/ask-notes.png", label: "Ask your notes" }
      ]
    },
    {
      id: "jays-journal",
      name: "Jay's Journal",
      summary: "A private journal shaped around writing, voice capture, moods, memories, and reflection.",
      description: "A calm offline journal with a Medium-inspired editor, fast local dictation, voice entries, moods, tags, reminders, insights, encrypted storage, reading mode, import, and portable backups.",
      tags: ["Flutter", "Voice capture", "Private journal"],
      color: "#2f4f5e",
      tilt: "1.5deg",
      screens: [
        { src: "assets/mobile/jays-journal/home.png", label: "Journal home" },
        { src: "assets/mobile/jays-journal/editor.png", label: "Rich editor" },
        { src: "assets/mobile/jays-journal/voice.png", label: "Voice journal" }
      ]
    },
    {
      id: "mindful-spend",
      name: "Mindful Spend",
      summary: "A comprehensive money companion for transactions, budgets, bills, accounts, goals, and reports.",
      description: "A robust personal-finance system with multiple accounts, transfers, budgets, recurring bills, goals, categories, receipt capture, search, notifications, reports, backups, and thoughtfully designed empty and error states.",
      tags: ["Flutter", "Personal finance", "Data visualization"],
      color: "#514521",
      tilt: "-2deg",
      screens: [
        { src: "assets/mobile/mindful-spend/dashboard.png", label: "Dashboard" },
        { src: "assets/mobile/mindful-spend/budgets.png", label: "Budgets" },
        { src: "assets/mobile/mindful-spend/reports.png", label: "Reports" }
      ]
    },
    {
      id: "music-to-ears",
      name: "Music to My Ears",
      summary: "Music discovery and playback with playlists, lyrics, downloads, queues, and car mode.",
      description: "A full music player covering discovery, search, artists, playlists, queue management, synchronized lyrics, local music, downloads, playback history, equalizer controls, car mode, statistics, and dependable background audio.",
      tags: ["Flutter", "Media playback", "Lyrics"],
      color: "#5a2947",
      tilt: "2deg",
      screens: [
        { src: "assets/mobile/music-to-ears/discover.png", label: "Discover" },
        { src: "assets/mobile/music-to-ears/now-playing.png", label: "Now playing" },
        { src: "assets/mobile/music-to-ears/lyrics.png", label: "Time-synced lyrics" }
      ]
    },
    {
      id: "personal-vault",
      name: "Personal Vault",
      summary: "A chat-like private space for notes, links, media, files, voice, and shared locations.",
      description: "A local personal knowledge vault organized like a familiar conversation. It supports rich messages, replies, reactions, documents, media, audio, link previews, maps and location sharing, collections, history, lock screens, backups, and security controls.",
      tags: ["Flutter", "Knowledge vault", "Rich previews"],
      color: "#303d65",
      tilt: "-1deg",
      screens: [
        { src: "assets/mobile/personal-vault/vault.png", label: "Vault" },
        { src: "assets/mobile/personal-vault/media.png", label: "Media library" },
        { src: "assets/mobile/personal-vault/chat.png", label: "Private conversation" }
      ]
    },
    {
      id: "speak-i-shall-write",
      name: "Speak, I Shall Write",
      summary: "Privacy-first on-device dictation for fast notes, long recordings, and clean transcripts.",
      description: "An offline transcription workspace designed for responsive dictation, meeting notes, model management, writing tools, folders, recovery, history, performance states, and transparent local storage.",
      tags: ["Flutter", "On-device speech", "Offline"],
      color: "#3b2c57",
      tilt: "1.5deg",
      screens: [
        { src: "assets/mobile/speak-i-shall-write/record.png", label: "Live dictation" },
        { src: "assets/mobile/speak-i-shall-write/history.png", label: "Transcript history" },
        { src: "assets/mobile/speak-i-shall-write/writing-tools.png", label: "Writing tools" }
      ]
    },
    {
      id: "tell-the-world",
      name: "Tell the World",
      summary: "An offline writing studio that publishes polished, themed articles directly to the web.",
      description: "A focused publishing tool with rich editing, imagery, drafts, search, statistics, recoverable backups, GitHub Pages publishing, repository controls, and durable theme metadata so published articles retain their intended design.",
      tags: ["Flutter", "Publishing", "GitHub Pages"],
      color: "#4f352d",
      tilt: "-2deg",
      screens: [
        { src: "assets/mobile/tell-the-world/home.png", label: "Writing home" },
        { src: "assets/mobile/tell-the-world/editor.png", label: "Article editor" },
        { src: "assets/mobile/tell-the-world/publish.png", label: "Publishing style" }
      ]
    },
    {
      id: "vitalis",
      name: "Vitalis",
      summary: "An offline health companion for habits, nutrition, activity, sleep, vitals, and reflection.",
      description: "A broad wellness system that unifies daily habits, goals, quick logs, hydration, workouts, nutrition, sleep, vitals, mindfulness, journaling, insights, and a private health conversation into one coherent local-first experience.",
      tags: ["Flutter", "Health", "On-device insights"],
      color: "#224a45",
      tilt: "2deg",
      screens: [
        { src: "assets/mobile/vitalis/today.png", label: "Today" },
        { src: "assets/mobile/vitalis/quick-log.png", label: "Quick log" },
        { src: "assets/mobile/vitalis/insights.png", label: "Health insights" }
      ]
    },
    {
      id: "hill-myna",
      name: "Hill Myna",
      summary: "A private on-device AI assistant with local models, documents, tools, and cited research.",
      description: "An offline-first assistant for running local GGUF models, organizing conversations, bringing private documents into context, using speech and tools, and optionally expanding into source-cited web research.",
      tags: ["Flutter", "Local LLM", "Private AI"],
      color: "#39462b",
      tilt: "-1.5deg",
      screens: [
        { src: "assets/mobile/hill-myna/assistant.png", label: "Assistant" },
        { src: "assets/mobile/hill-myna/models.png", label: "Local models" },
        { src: "assets/mobile/hill-myna/documents.png", label: "Documents" }
      ]
    },
    {
      id: "wake-me-up",
      name: "Wake Me Up",
      summary: "A destination alert for travelers who want to rest without missing their stop.",
      description: "An OpenStreetMap-based geo-alarm with place recommendations, adjustable alert radii, background monitoring, saved places, reusable trips and routes, full-screen arrival alarms, and wake-up challenges.",
      tags: ["Flutter", "OpenStreetMap", "Background location"],
      color: "#27516a",
      tilt: "2deg",
      screens: [
        { src: "assets/mobile/wake-me-up/map.png", label: "Destination map" },
        { src: "assets/mobile/wake-me-up/trips.png", label: "Saved trips" },
        { src: "assets/mobile/wake-me-up/alarm.png", label: "Arrival alarm" }
      ]
    }
  ],
  archive: [
    { name: "Zia RAG Bot", description: "Citation-backed CRM documentation assistant using hybrid retrieval and reciprocal rank fusion.", type: "ai", label: "AI · RAG", url: "https://github.com/jayachandranpm/Zia-RAG-Bot" },
    { name: "Arbor Research Assistant", description: "A source-grounded deep research workflow for structured, exportable reports.", type: "ai", label: "AI · Research", url: "https://github.com/jayachandranpm/AI-Research-Assistant" },
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
