import React from 'react'

function Resume() {
  return (
    <div className='page'>
      <div className="resume">
        <h1>Resume</h1>

        {/* ---------------- Experience ---------------- */}
        <div className='con'>
          <div className='line-con'>
            <h2>Experience</h2>
            <a href={`${process.env.PUBLIC_URL || ''}/download/TroyYu_Resume.pdf`}
              download="TroyYu_Resume.pdf"
            >
              <span className='download'>DOWNLOAD RESUME</span></a>
          </div>

          <div className='main-con'>
            <div className='first-con'>
              <h3>01/2026 - 06/2026</h3>
              <p>Software Engineer</p>
              <p>BlueScope Buildings North America</p>
              <p>(Contract via Innova Solutions)</p>
              <p>Kansas City, MO, USA</p>
            </div>
            <div className='second-con'>
              <ul>
                <li>Developed enterprise-grade engineering software applications and Tekla Structures plugins using C#, .NET Framework, WPF, MVVM, and the Tekla Open API.</li>
                <li>Designed and implemented engineering automation features for steel-building workflows, reducing manual design and detailing effort through API-driven software solutions.</li>
                <li>Built reusable ViewModels, UI components, and application frameworks following WPF MVVM architecture, leveraging AI-assisted development workflows to improve implementation efficiency and code quality.</li>
                <li>Contributed to migrating legacy engineering applications into BlueScope's next-generation plugin platform, improving maintainability, scalability, and long-term product support.</li>
                <li>Leveraged AI-assisted development tools and Large Language Models (LLMs) for code generation, code review, technical research, debugging, documentation, and software migration.</li>
                <li>Participated in software architecture discussions, solution design reviews, sprint planning, and technical decision-making within an Agile Scrum environment.</li>
              </ul>
            </div>
          </div>

          <div className='main-con'>
            <div className='first-con'>
              <h3>01/2024 - 12/2025</h3>
              <p>BIM Supervisor - Digital Solutions</p>
              <p>AECOM</p>
              <p>New York, NY, USA</p>
            </div>
            <div className='second-con'>
              <ul>
                <li>Spearheaded the development and implementation of BIM standards, digital delivery workflows, and cloud-based collaboration strategies across multidisciplinary project teams.</li>
                <li>Evaluated and integrated emerging BIM technologies, automation tools, APIs, and digital solutions to improve engineering productivity and project delivery efficiency.</li>
                <li>
                  Key automation &amp; digital-solutions contributions:
                  <ul>
                    <li>Developed custom Revit API solutions and C# libraries to automate data extraction, model analysis, and integration between CAD, BIM, and external systems.</li>
                    <li>Designed workflow automation using Dynamo, SQL, and Excel, reducing manual processing effort and improving consistency of engineering deliverables.</li>
                    <li>Managed Autodesk Construction Cloud (ACC) deployments, streamlining model coordination, cloud collaboration, and data exchange.</li>
                    <li>Researched and piloted emerging AEC technologies and automation initiatives to support digital transformation.</li>
                    <li>Performed model validation, quality assurance, and BIM data management to ensure compliance with project standards and client requirements.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className='main-con'>
            <div className='first-con'>
              <h3>10/2014 - 12/2022</h3>
              <p>BIM Engineer</p>
              <p>Urbantech Consulting Engineering PC</p>
              <p>New York, NY, USA</p>
            </div>
            <div className='second-con'>
              <ul>
                <li>Led the company's transition from traditional CAD-based workflows to BIM-based project delivery , establishing BIM standards, modeling practices, coordination workflows, and digital information management across structural engineering projects.</li>
                <li>Used Autodesk Revit, AutoCAD, Civil3D, and Navisworks for BIM coordination, multidisciplinary collaboration, engineering design, drafting, and project delivery.</li>
                <li>
                  Key automation &amp; software-development contributions:
                  <ul>
                    <li>Developed custom Revit, AutoCAD, and Civil3D API solutions in C#, using custom User Attributes and metadata structures to automate data extraction and CAD/BIM interoperability.</li>
                    <li>Created reusable software libraries, plugins, and desktop applications that streamlined engineering workflows and reduced repetitive tasks.</li>
                    <li>Designed automation tools for rebar quantity takeoff, bill-of-material generation, Autodesk license management, and project data management.</li>
                    <li>Implemented BIM workflows using point cloud technologies and LiDAR scanning data for coordination, analysis, and digital delivery.</li>
                    <li>Researched, evaluated, and piloted emerging AEC technologies and automation solutions to modernize engineering processes.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ---------------- Selected Technical Projects ---------------- */}
        <div className='con'>
          <div className='line-con'>
            <h2>Selected Technical Projects</h2>
          </div>

          <div className='main-con'>
            <div className='first-con'>
              <p>UNO Multiplayer Web Game</p>
              <p>React, TypeScript, Vite, Zustand, Supabase (PostgreSQL/Realtime), Tailwind, Vitest</p>
            </div>
            <div className='second-con'>
              <ul>
                <li>Architected real-time online multiplayer on Supabase Realtime using a single-writer authority model — the acting seat owns its move and the host owns unattended seats — keeping four clients consistent with no dedicated game server.</li>
                <li>Engineered resilience into live sessions: presence tracking hands an abandoned seat to the AI, players reconnect into their seat after a refresh, and newcomers can claim an AI seat mid-game via an atomic conditional update.</li>
                <li>Implemented the rules as a pure, immutable TypeScript engine independent of React, driving a heuristic weighted-decision AI, and covered it with 66 unit tests including fully simulated games and card-conservation invariants.</li>
                <li>Migrated the application from Next.js to Vite + React 18 + TypeScript with Zustand state management, behind a backend-agnostic auth and persistence layer that runs on Supabase or falls back to localStorage.</li>
              </ul>
            </div>
          </div>

          <div className='main-con'>
            <div className='first-con'>
              <p>Visualization of Data Structures &amp; Algorithms</p>
              <p>D3.js, JavaScript, SVG, PWA / Service Workers</p>
            </div>
            <div className='second-con'>
              <ul>
                <li>Built animated, step-by-step visualizations of eight data structures (array, linked list, stack, queue, hash table, BST, heap, graph) and six sorting algorithms, using D3.js and SVG rendering plus a 3D force-directed graph explorer.</li>
                <li>Refactored the codebase into a registry-driven module architecture that separates data-structure logic, renderers, and page controllers, keeping the project a zero-build static site with no toolchain to maintain.</li>
                <li>Delivered it as an installable PWA with a service worker caching the app shell, so all visualizations remain fully usable offline.</li>
              </ul>
            </div>
          </div>

          <div className='main-con'>
            <div className='first-con'>
              <p>Hide &amp; Seek Pathfinding Visualizer</p>
              <p>React 18, Vite, JavaScript</p>
            </div>
            <div className='second-con'>
              <ul>
                <li>Implemented and animated six graph-search algorithms — Dijkstra, A*, BFS, DFS, greedy best-first, and bidirectional search — over a weighted grid with variable terrain cost and procedurally generated mazes.</li>
                <li>Built a benchmarking mode that races all six on an identical map and plots path cost against cells explored, selecting the best fit by a lexicographic rule (optimal route first, then fewest nodes expanded).</li>
                <li>Designed a reusable React component architecture and state-management model supporting live grid editing, preset scenarios, and comparative route analysis.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ---------------- Education ---------------- */}
        <div className='con'>
          <div className='line-con'>
            <h2>Education</h2>
          </div>
          <div className='main-con'>
            <div className='first-con'>
              <h3>2014</h3>
              <p>Columbia University</p>
              <p>New York, NY, USA</p>
            </div>
            <div className='second-con edu'>
              <p>Master of Science</p>
              <p>Civil Engineering &amp; Engineering Mechanics</p>
            </div>
          </div>
        </div>

        {/* ---------------- Additional Research ---------------- */}
        <div className='con'>
          <div className='line-con'>
            <h2>Additional Research Experience</h2>
          </div>
          <div className='main-con'>
            <div className='first-con'>
              <h3>2009 - 2010</h3>
              <p>Research Assistant</p>
              <p>National Taiwan Ocean University , MSV Lab</p>
              <p>Keelung, Taiwan</p>
            </div>
            <div className='second-con'>
              <ul>
                <li>Developed MATLAB-based engineering models supporting finite element analysis and engineering mechanics research.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ---------------- Skills ---------------- */}
        <div className='con'>
          <div className='line-con'>
            <h2>Skills</h2>
          </div>
          <div className='misc-con'>
            <h3>Areas of Expertise</h3>
            <div className='con'>
              <div className='list'>Engineering Software Development</div>
              <div className='list'>BIM &amp; CAD Automation &amp; Delivery</div>
              <div className='list'>AEC API Development</div>
              <div className='list'>Desktop / Web Application Development</div>
              <div className='list'>AI-Assisted Engineering Workflows</div>
              <div className='list'>Cloud &amp; Data Integration</div>
            </div>
          </div>
          <div className='misc-con'>
            <h3>Languages &amp; Frameworks</h3>
            <div className='con'>
              <div className='list'>C#</div>
              <div className='list'>.NET</div>
              <div className='list'>WPF</div>
              <div className='list'>MVVM</div>
              <div className='list'>Python</div>
              <div className='list'>JavaScript</div>
              <div className='list'>TypeScript</div>
              <div className='list'>React</div>
              <div className='list'>Node.js</div>
              <div className='list'>D3.js</div>
              <div className='list'>Three.js</div>
            </div>
          </div>
          <div className='misc-con'>
            <h3>AEC APIs</h3>
            <div className='con'>
              <div className='list'>Revit API</div>
              <div className='list'>AutoCAD API</div>
              <div className='list'>Civil3D API</div>
              <div className='list'>Tekla Open API</div>
            </div>
          </div>
          <div className='misc-con'>
            <h3>Cloud, Data &amp; DevOps</h3>
            <div className='con'>
              <div className='list'>Azure DevOps</div>
              <div className='list'>Git</div>
              <div className='list'>SQL</div>
              <div className='list'>PostgreSQL</div>
              <div className='list'>Supabase</div>
              <div className='list'>MongoDB</div>
              <div className='list'>MySQL</div>
              <div className='list'>ACC</div>
              <div className='list'>BIM 360</div>
            </div>
          </div>
          <div className='misc-con'>
            <h3>AI / LLM</h3>
            <div className='con'>
              <div className='list'>Prompt Engineering</div>
              <div className='list'>AI-Assisted Development</div>
              <div className='list'>LLMs</div>
              <div className='list'>Agentic Workflows</div>
              <div className='list'>RAG</div>
              <div className='list'>Local AI Deployment</div>
              <div className='list'>Ollama</div>
              <div className='list'>MCP</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Resume
