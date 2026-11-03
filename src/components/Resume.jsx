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
              <p>BlueScope Buildings North America, Inc.</p>
              <p>(Contract via Innova Solutions)</p>
              <p>Kansas City, MO, USA</p>
            </div>
            <div className='second-con'>
              <ul>
                <li>Built plugins and engineering applications for BlueScope's in-house, model-driven design platform in C#, .NET and WPF/MVVM on the Tekla Open API — UIs whose ViewModels enforce input-format and structural-rule validation before data reaches the model.</li>
                <li>Owned the UI side of migrating legacy plugins onto the next-generation platform: redesigned validation and screens, refactored ViewModels and bindings into reusable components, and improved maintainability and long-term support.</li>
                <li>Automated steel-building design and detailing steps through API-driven tooling, reducing manual effort.</li>
                <li>Trained through BlueScope's AI-development program and used Copilot and LLMs daily in production; built a library of reusable prompts and skills for recurring coding tasks, which let legacy plugins be migrated to refactored code and redesigned UIs much faster than by hand.</li>
                <li>Designed and implemented assigned features end to end, using LLMs as a productivity aid for code review, research, debugging and documentation, with every suggested change reviewed before merge.</li>
                <li>Took part in architecture discussions, solution design reviews and sprint planning in an Agile Scrum team (Azure DevOps).</li>
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
                <li>Led the development and rollout of BIM standards, protocols and digital-delivery workflows for multidisciplinary Civil, Structural and BIM teams on NYC Economic Development Corporation waterfront infrastructure (United Nations Waterfront Esplanade, ~$120–153M; Seaport Coastal Resiliency, up to $229M).</li>
                <li>Ran model validation, QA/QC and data management against project standards and client requirements; deployed project environments on Autodesk Construction Cloud and governed model exchange with partners.</li>
                <li>
                  Key automation &amp; software contributions:
                  <ul>
                    <li>Eliminated repeat remodeling on the UN Esplanade, where the alignment kept changing: secured budget hours, aligned Civil, Structural, BIM and the PM, and architected a parameter-driven Civil 3D → Excel → Revit pipeline — a C# command exports alignment data, design parameters live as structured metadata, and Dynamo rebuilds the model. A design change became a data update instead of a remodel.</li>
                    <li>Wrapped the C/C++ Bentley ProjectWise API in a reusable C# library and built a desktop file explorer so the team could read project files without the full check-out workflow.</li>
                    <li>Developed Revit API add-ins and C# libraries for parameter extraction, element filtering and model analysis; proved approaches in C#, then handed them over as Dynamo graphs the BIM team could maintain.</li>
                    <li>Automated data extraction and translation with Dynamo, Python, SQL/SQLite and Excel, making deliverables consistent and reducing manual processing.</li>
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
                <li>Led the firm's transition from CAD to BIM: established BIM standards, modeling practices, family and parameter libraries, coordination workflows and digital information management; led a team of ~5 engineers implementing BIM and in-house extensions.</li>
                <li>Delivered model-to-construction BIM for &gt;$6B of New York infrastructure (LaGuardia Terminal B ~$4B, Goethals Bridge $1.5B, Kosciuszko Bridge $555M, Unionport Bridge $232M) for PANYNJ, NYSDOT, NYC DOT and MTA contractors.</li>
                <li>
                  Key automation &amp; software-development contributions:
                  <ul>
                    <li>Developed Revit, AutoCAD and Civil 3D plugins in C# using custom metadata structures to automate data extraction, model management and CAD↔BIM interoperability — an estimated 10–15% productivity gain for daily users.</li>
                    <li>Ran an end-to-end data pipeline (ETL) combining GIS models, LiDAR point-cloud scans and design data into BIM models; reduced point-cloud noise in Python to align scans with designs.</li>
                    <li>Built a Python rebar bill-of-materials app with automatic validation for reinforcing-steel design errors, and a C# Autodesk license manager for real-time seat tracking.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ---------------- Selected Software Projects ---------------- */}
        <div className='con'>
          <div className='line-con'>
            <h2>Selected Software Projects</h2>
          </div>

          <div className='main-con'>
            <div className='first-con'>
              <p>BIM AI Agent (live)</p>
              <p>TypeScript, LangGraph.js, RAG, Cloudflare Workers AI, Vectorize, D1, Three.js, web-ifc</p>
            </div>
            <div className='second-con'>
              <ul>
                <li>Multi-agent QA pipeline that checks IFC building models against the NYC building codes: a Planner picks the code topics for each model, then a Researcher, Rule Author, Checker and Reviewer turn the code text into checkable rules with verbatim citations and graded severities; clashes, fire-door ratings and model data are checked deterministically.</li>
                <li>Hybrid RAG over 168 official NYC code PDFs (7,045 chunks): vector and full-text search fused and reranked, every citation with section, page and a PDF preview. A live AI assistant routes each question to code search, the findings or the model data, answers with evidence and drives the 3D view; it advises on fixes and never edits the model.</li>
                <li>Browser app (React, Three.js, web-ifc) on a Cloudflare Worker with Durable Objects streaming the agent steps; a daily AI budget guard, per-session limits and cached searches keep it on the free plan, and the same code runs locally on Ollama.</li>
              </ul>
            </div>
          </div>

          <div className='main-con'>
            <div className='first-con'>
              <p>Engineering Model QA</p>
              <p>C#, .NET, WPF/MVVM, xBIM, IFC4</p>
            </div>
            <div className='second-con'>
              <ul>
                <li>Rule-based IFC model-checking workbench: governed JSON rule profiles (required property, unique value, naming pattern, material, storey assignment) produce deterministic, explainable findings with guidance.</li>
                <li>Revision Compare classifies every finding as Resolved, Persistent or New across model versions by matching IFC GlobalIds and stable condition keys; each rule returns failed, passed or not evaluated, so missing data never produces a false failure.</li>
              </ul>
            </div>
          </div>

          <div className='main-con'>
            <div className='first-con'>
              <p>IFC Viewer</p>
              <p>C#, WPF/MVVM, xBIM, DirectX 11</p>
            </div>
            <div className='second-con'>
              <ul>
                <li>Desktop IFC2x3/IFC4 viewer: 3D navigation, picking with highlight, isolate/hide, a properties panel and a spatial tree linked both ways with the 3D view, plus search by Revit Element ID.</li>
                <li>Opens models of several hundred MB on a background thread by switching large files to on-disk storage (a 385 MB, 56,000-element model loads without running out of memory).</li>
              </ul>
            </div>
          </div>

          <div className='main-con'>
            <div className='first-con'>
              <p>AI Career Assistant (live)</p>
              <p>TypeScript, LangChain.js, Cloudflare Workers, Workers AI, Vectorize, React</p>
            </div>
            <div className='second-con'>
              <ul>
                <li>Production RAG assistant over a curated knowledge base of my career: questions are rewritten with the conversation, searched in a vector index and answered from the retrieved facts only, with streamed answers, source chips and project media; input validation, a CORS allow-list and per-IP rate limiting; embedded in my portfolio.</li>
              </ul>
            </div>
          </div>

          <div className='main-con'>
            <div className='first-con'>
              <p>UNO Multiplayer Game (live)</p>
              <p>TypeScript, React, Zustand, Cloudflare Workers (D1, Durable Objects)</p>
            </div>
            <div className='second-con'>
              <ul>
                <li>Real-time multiplayer on Durable Objects and WebSockets with a single-writer authority model; presence tracking hands an abandoned seat to the AI, players reconnect into their seat, and newcomers claim AI seats mid-game through server-serialized claims.</li>
                <li>Worker backend with PBKDF2 password hashing and JWT sessions and saves in D1; game rules as a pure, immutable TypeScript engine driving a heuristic AI.</li>
              </ul>
            </div>
          </div>

          <div className='main-con'>
            <div className='first-con'>
              <p>Hide &amp; Seek Pathfinding Visualizer (live)</p>
              <p>React, Vite, JavaScript</p>
            </div>
            <div className='second-con'>
              <ul>
                <li>Animates six graph-search algorithms (Dijkstra, A*, BFS, DFS, greedy best-first, bidirectional) on a weighted grid with terrain cost and generated mazes; a race mode runs all six on one map and compares path cost against cells explored.</li>
              </ul>
            </div>
          </div>

          <div className='main-con'>
            <div className='first-con'>
              <p>Data Structures &amp; Algorithms Visualization (live)</p>
              <p>D3.js, JavaScript, SVG</p>
            </div>
            <div className='second-con'>
              <ul>
                <li>Step-by-step D3/SVG animations of eight data structures and six sorting algorithms plus a 3D force-directed graph explorer, built on a registry-driven module architecture as a zero-build static site.</li>
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
          <div className='main-con'>
            <div className='first-con'>
              <h3>2010</h3>
              <p>National Taiwan Ocean University</p>
              <p>Keelung, Taiwan</p>
            </div>
            <div className='second-con edu'>
              <p>Bachelor of Science</p>
              <p>Harbor &amp; River Engineering</p>
            </div>
          </div>
        </div>

        {/* ---------------- Additional Research ---------------- */}
        <div className='con'>
          <div className='line-con'>
            <h2>Research Experience</h2>
          </div>
          <div className='main-con'>
            <div className='first-con'>
              <h3>2009 - 2010</h3>
              <p>Research Assistant – Computational Analysis &amp; Modeling</p>
              <p>MSV (Mechanics Sound Vibration) Lab, National Taiwan Ocean University</p>
              <p>Keelung, Taiwan</p>
            </div>
            <div className='second-con'>
              <ul>
                <li>Built MATLAB numerical models for a National Science Council civil engineering research project, applying finite element, boundary element and finite difference methods to engineering mechanics problems.</li>
                <li>Collected data, ran model computations and helped develop mathematical formulations for papers published in SCI journals (e.g., Engineering Analysis with Boundary Elements).</li>
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
              <div className='list'>Software Design &amp; Architecture</div>
              <div className='list'>API Development &amp; Integration</div>
              <div className='list'>Desktop &amp; Web Applications</div>
              <div className='list'>Multi-Agent AI &amp; RAG Systems</div>
              <div className='list'>Data Translation &amp; Automation Pipelines</div>
              <div className='list'>Cloud Services &amp; Web APIs</div>
              <div className='list'>BIM/CAD Automation</div>
              <div className='list'>Model QA/QC &amp; Validation</div>
              <div className='list'>Digital Delivery &amp; Standards</div>
            </div>
          </div>
          <div className='misc-con'>
            <h3>Languages</h3>
            <div className='con'>
              <div className='list'>C#</div>
              <div className='list'>TypeScript</div>
              <div className='list'>JavaScript</div>
              <div className='list'>Python</div>
              <div className='list'>SQL</div>
            </div>
          </div>
          <div className='misc-con'>
            <h3>Frameworks</h3>
            <div className='con'>
              <div className='list'>.NET</div>
              <div className='list'>WPF</div>
              <div className='list'>MVVM</div>
              <div className='list'>React</div>
              <div className='list'>Vite</div>
              <div className='list'>Node.js</div>
              <div className='list'>REST APIs</div>
              <div className='list'>WebSockets</div>
              <div className='list'>Three.js</div>
              <div className='list'>D3.js</div>
            </div>
          </div>
          <div className='misc-con'>
            <h3>Engineering APIs</h3>
            <div className='con'>
              <div className='list'>Revit</div>
              <div className='list'>AutoCAD / Civil 3D</div>
              <div className='list'>Tekla Open API</div>
              <div className='list'>IFC (xBIM)</div>
              <div className='list'>Bentley ProjectWise</div>
              <div className='list'>Dynamo</div>
            </div>
          </div>
          <div className='misc-con'>
            <h3>Data &amp; Cloud</h3>
            <div className='con'>
              <div className='list'>SQL</div>
              <div className='list'>SQLite</div>
              <div className='list'>MySQL</div>
              <div className='list'>Cloudflare Workers</div>
              <div className='list'>D1</div>
              <div className='list'>Durable Objects</div>
              <div className='list'>Vectorize</div>
              <div className='list'>ACC / BIM 360</div>
            </div>
          </div>
          <div className='misc-con'>
            <h3>Delivery</h3>
            <div className='con'>
              <div className='list'>Git</div>
              <div className='list'>GitHub Actions</div>
              <div className='list'>Azure DevOps</div>
              <div className='list'>Agile Scrum</div>
            </div>
          </div>
          <div className='misc-con'>
            <h3>AI</h3>
            <div className='con'>
              <div className='list'>LLMs</div>
              <div className='list'>RAG</div>
              <div className='list'>LangGraph</div>
              <div className='list'>Multi-Agent Workflows</div>
              <div className='list'>MCP</div>
              <div className='list'>Workers AI</div>
              <div className='list'>Ollama</div>
              <div className='list'>AI-Assisted Development</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Resume
