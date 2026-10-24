export const projectDataBIM = [
  {
    title: "LaGuardia Airport Terminal Redevelopment",
    client: "Skanska-Walsh",
    location: "Queens, NY, USA",
    jobs: [
      "Design & deliver construction pick plan and rigging required for steel erection",
      "Review minimum crane positions and flow as well as improve crane path which decreased time span in construction and saved extra cost through the use of 3D pick planning into Revit.",
      "Conduct site planning and clash detection monitoring."
    ],
    img: [
      "./img/BIM/LGA/main1.jpg",
      "./img/BIM/LGA/const1.jpg",
      "./img/BIM/LGA/const2.jpg",
      "./img/BIM/LGA/pick.png",
      "./img/BIM/LGA/CHRP.jpg",
      "./img/BIM/LGA/CHRP2.jpg",
      "./img/BIM/LGA/CHRP3.png",
      "./img/BIM/LGA/2020-02-07.png",
    ],
    
  },
  {
    title: "Unionport Bridge Replacement",
    client: "The Lane Construction",
    location: "Bronx, NY, USA",
    jobs: [
      "Create bridge profile, superelevation, and toposurface through Civil 3D.",
      "Implement Revit collaborate systems in overseeing BIM Team worksets, while working closely with contractor and engineer in addressing real time condition from BIM model.",
      "Present potential risk and conflict between proposed and current bridge spans and recommend effective resolution for site planning and roadway traffic control.",
      "Offer provisional support structure scheme, as well as follow-up steel shop drawing."
    ],
    img: [
      "./img/BIM/Unionport-Bridge/main.jpg",
      "./img/BIM/Unionport-Bridge/const1.jpg",
      "./img/BIM/Unionport-Bridge/const2.jpg",
      "./img/BIM/Unionport-Bridge/const3.jpg",
    ],
    video:[
      "./video/unionport/pick order.mp4",
    ]
  },
  {
    title: "Myrtle Avenue Viaduct Rehabilitation",
    client: "Schiavone Construction",
    location: "Brooklyn/Queens, NY, USA",
    jobs: [
      "Proactively communicate with site manager and surveyor to produce employee walkway and tie-in locations.",
      "Gather proposed train rail plan and existing site survey data, while regulating design rail in alignment with designate elevation point and slope.",
      "Generate miscellaneous steel shop drawings, including stair, ladder, railing, and bollard."
    ],
    img: [
      "./img/BIM/Myrtle-Avenue-Viaduct/main.jpg",
      "./img/BIM/Myrtle-Avenue-Viaduct/steelshop_3d.png",
      "./img/BIM/Myrtle-Avenue-Viaduct/elev.png",
      "./img/BIM/Myrtle-Avenue-Viaduct/2019-09-20.png",
      "./img/BIM/Myrtle-Avenue-Viaduct/2019-09-20(1).png",
      "./img/BIM/Myrtle-Avenue-Viaduct/2019-09-20(7).png",

    ],
  },
  {
    title: "Goethals Bridge: Travis Spur Rail Bridge Replacement",
    client: "Kiewit-Weeks-Massman",
    location: "Staten Island, NY/Elizabeth, NJ, USA",
    jobs: [
      "Design both proposed and existing bridge model and toposurface.",
      "Eliminate potential conflict that arise during bridge erection by streamlining SPMT traveling path and provide risk assessment.",
      "Utilize BIM technology to create site planning with ideal engineering solution and successfully attain super weekend bridge erection"
    ],
    img: [
      "./img/BIM/Goethals-Bridge/bridge.jpg",
      "./img/BIM/Goethals-Bridge/construction.jpg",
      "./img/BIM/Goethals-Bridge/spmt.jpg",
      "./img/BIM/Goethals-Bridge/pick.png",
      "./img/BIM/Goethals-Bridge/pick2.png",
      "./img/BIM/Goethals-Bridge/spmt.png",

    ],
  },
  {
    title: "Kosciuszko Bridge Replacement - Phase One",
    client: "Skanska",
    location: "Brooklyn/Queens, NY, USA",
    jobs: [
      "Collected all as-built drawings and contract drawings and survey data to develop existing and proposed bridge, Created BIM Revit model and maintained its life-cycle.",
      "Proficient in site planning, ensuring optimal construction layout, safe demolition area identification, and assessment of potential risks within the construction site.",
      "Collaborated with cross-functional team for integration of BIM system.",
      "Prepared real-time erection/demolition sequence simulation and animation using Navisworks, as well as CAD drawing for official review."
    ],
    img: [
      "./img/BIM/Kosciuszko-Bridge/main.jpg",
      "./img/BIM/Kosciuszko-Bridge/const.jpg",
      "./img/BIM/Kosciuszko-Bridge/const3.png",
      "./img/BIM/Kosciuszko-Bridge/const4.png",
      "./img/BIM/Kosciuszko-Bridge/const5.png",
      "./img/BIM/Kosciuszko-Bridge/const6.png",
      "./img/BIM/Kosciuszko-Bridge/const7.png",
      "./img/BIM/Kosciuszko-Bridge/const2.jpg",

    ],
    video:[
      "./video/k/Kbridge main span demo.mp4",
      "./video/k/TRUSS SPAN DEMO.mp4",
    ]
  },
  {
    title: "Metropolitan Avenue Bascule Bridge Over English Kills Rehabilitation",
    client: "Kiewit Construction",
    location: "Brooklyn, NY",
    jobs: [
      "Outlined bascule bridge model and fender system and 3D simulation for machinery room removal sequence.",
      "Took charge of creating engineering drawing, load take-off calculation, and rigging detail.",
    ],
    img: [
      "./img/BIM/Metropolitan-Avenue-Bascule-Bridge/main.jpg",
      "./img/BIM/Metropolitan-Avenue-Bascule-Bridge/plan.png",
      "./img/BIM/Metropolitan-Avenue-Bascule-Bridge/open.png",
      "./img/BIM/Metropolitan-Avenue-Bascule-Bridge/section.png",

    ],
  },
]



export const projectDataCS = [
  {
    title: "UNO Multiplayer Web Game",
    des: "Real-time online UNO built with React, TypeScript, and Cloudflare Workers — play friends by room code, or three AI opponents",
    link: "http://troyyu527.github.io/uno-web-game",
    jobs: [
      "Built real-time multiplayer on Cloudflare Durable Objects and WebSockets: 4-digit room codes, live presence, and reconnect — a single-writer authority model keeps every client in step while the game rules run in the browser.",
      "Kept the table playing through disconnects — an abandoned seat passes to the AI, and a latecomer can drop into it mid-game.",
      "Wrote the rules as a pure, immutable TypeScript engine driving a heuristic AI.",
      "Rebuilt the client on Vite, React 18, TypeScript, Zustand, and Tailwind, with a backend-agnostic auth/save layer that runs on a Cloudflare Worker (D1) or falls back to localStorage."
    ],
    img: [
      "./img/CS/UNO/main.png",
      "./img/CS/UNO/game-menu.png",
      "./img/CS/UNO/game-turn.png",
      "./img/CS/UNO/draw-4.png",
      "./img/CS/UNO/draw-4-pen.png",
      "./img/CS/UNO/game-pause.png",
    ],
  },
  {
    title: "Visualization of Data Structures & Sorting Algorithms",
    des: "Animated walkthroughs of 8 data structures and 6 sorting algorithms, D3.js-driven and installable offline",
    link: "http://troyyu527.github.io/visual-algo",
    jobs: [
      "Animated eight data structures — array, linked list, stack, queue, hash table, binary search tree, heap, and graph — each stepping through its own insert, search, and delete operations.",
      "Visualized six sorting algorithms (bubble, insertion, selection, merge, quick, heap) with live comparison and swap animations, plus a 3D force-directed graph explorer.",
      "Added a live metrics HUD that counts comparisons, swaps, and elapsed time as each sort runs, shown next to its best, average, and worst-case Big-O, with pause/resume and adjustable speed, array size, and value range.",
      "Refactored the codebase into a registry-driven module structure separating data structures, renderers, and page controllers — a zero-build static site with no toolchain to maintain."
    ],
    img: [
      "./img/CS/Visual-Data/data-tree.png",
      "./img/CS/Visual-Data/data-graph.png",
      "./img/CS/Visual-Data/algo-heapsort.png",
      "./img/CS/Visual-Data/algo-quicksort.png",
    ],
  },
  {
    title: "Hide & Seek Pathfinding Visualizer",
    des: "Race six pathfinding algorithms across a weighted grid and see which one actually suits the map",
    link: "http://troyyu527.github.io/hidenseek",
    jobs: [
      "Implemented six search algorithms — Dijkstra, A*, BFS, DFS, Greedy best-first, and bidirectional search — animated cell by cell as they explore.",
      "Built a comparison mode that races them on the same map and plots cost against cells explored, recommending the best fit by a lexicographic rule: optimal route first, then least work.",
      "Modelled weighted terrain, so sand costs more to cross than open ground and the algorithms visibly diverge on where they're willing to go.",
      "Designed an editable grid with wall painting, random maze generation, and preset scenarios, on a React 18 + Vite component architecture."
    ],
    img: [
      "./img/CS/HideNSeek/main.png",
      "./img/CS/HideNSeek/seek.png",
      "./img/CS/HideNSeek/maze.png",
    ],
  },
  
]

// BIM Software page — Windows desktop tools for IFC / openBIM models.
export const projectDataBIMSoftware = [
  {
    title: "IFC Viewer",
    des: "A Windows desktop viewer for IFC building models — 3D view, picking, properties and an object tree",
    link: "https://github.com/troyyu527/IFCViewer",
    linkLabel: "GITHUB",
    jobs: [
      "Built in C# / WPF (MVVM) on xBIM: opens IFC2x3 and IFC4 files from small samples to several hundred MB on a background thread, in the file's own colors with Revit-style category defaults.",
      "Rendered with HelixToolkit (DirectX 11): orbit, pan and zoom, click and Ctrl+click picking with a blue highlight, isolate / hide / reset, and an object tree linked both ways with the 3D selection.",
      "Properties panel with attributes, property sets, quantities and materials in feet-inches; search by Revit Element ID.",
      "Large-file engineering: models over 100 MB move to xBIM's on-disk storage, so models of several hundred MB with tens of thousands of elements open without running out of memory."
    ],
    img: [
      "./img/BIM-Software/IfcViewer/building.png",
      "./img/BIM-Software/IfcViewer/properties.png",
      "./img/BIM-Software/IfcViewer/hvac.png",
      "./img/BIM-Software/IfcViewer/house.png",
    ],
  },
  {
    title: "Engineering Model QA",
    status: "In progress",
    des: "A Windows desktop workbench that checks IFC4 models against rule profiles and compares two revisions — Resolved, Persistent or New",
    link: "https://github.com/troyyu527/EngineeringModelQA",
    linkLabel: "GITHUB",
    jobs: [
      "Model Check: five rule types — required property, unique value, naming pattern, material and storey assigned — run on a background thread with progress and cancel; findings show expected vs. observed values and guidance.",
      "Revision Compare: elements match by IFC GlobalId and findings by rule, GlobalId and a stable condition key, so a finding on a deleted element is never counted as resolved.",
      "C# / .NET Framework 4.8, WPF + MVVM and xBIM, with rules kept free of WPF and xBIM; fully offline and deterministic."
    ],
    img: [
      "./img/BIM-Software/EngineeringModelQA/model-check.png",
      "./img/BIM-Software/EngineeringModelQA/revision-compare.png",
      "./img/BIM-Software/EngineeringModelQA/structural-check.png",
      "./img/BIM-Software/EngineeringModelQA/settings.png",
    ],
  },
]

// AI Projects page — LLM and agent projects.
export const projectDataAI = [
  {
    title: "AI Career Assistant",
    des: "Ask my AI twin about my career — a RAG chatbot over my own knowledge base, with sources and project media",
    link: "https://troyyu527.github.io/MyAIPersona/",
    backup: { label: "Hugging Face version (Python, Gradio)", link: "https://troy0527-troy-ai-persona.hf.space" },
    jobs: [
      "Built retrieval-augmented generation (RAG) over a curated knowledge base of my career: questions are rewritten with the conversation, searched in a vector index, and answered in my voice from the retrieved facts only.",
      "Streams answers from a Cloudflare Worker (TypeScript, LangChain.js) on Workers AI and Vectorize, with source chips, project photos and simulation videos; guarded with rate limits, an origin allow-list and honest \"I don't know\" and NDA rules.",
      "Measured with a 34-question golden set (retrieval MRR 0.82, answers 4.9/5 by an LLM judge); also on this site as the \"Ask my AI\" button."
    ],
    img: [
      "./img/AI/AIAssistant/main.png",
      "./img/AI/AIAssistant/answer-media.png",
      "./img/AI/AIAssistant/portfolio-panel.png",
    ],
  },
  {
    title: "BIM AI Agent",
    status: "In progress",
    des: "An engineering-aware AI agent platform that reviews and edits IFC models in the browser — answers with building-code evidence, changes only with human approval",
    linkNote: "In development · design mockups shown",
    jobs: [
      "Three LangGraph agents — Planner, Executor and Validator — work over a Neo4j knowledge graph of the model and a Qdrant RAG of New York building codes: 168 official PDFs parsed into 7,045 citation-ready chunks.",
      "LLMs plan, deterministic tools execute: the model produces a validated JSON change plan and an MCP tool server (FastMCP + IfcOpenShell) edits the IFC; every change needs the user's approval and can be undone.",
      "A C# / .NET 8 + xBIM engine turns large IFC files into per-storey 3D geometry for a React / Three.js viewer; a local LLM (Ollama) is the default for privacy. Architecture and an 11-step plan are done; implementation is under way."
    ],
    img: [
      "./img/AI/BimAiAgent/mockup-overview.jpg",
      "./img/AI/BimAiAgent/mockup-views.jpg",
    ],
  },
]
