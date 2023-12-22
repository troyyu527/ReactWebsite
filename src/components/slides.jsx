// import GB1 from "./img/BIM/Goethals-Bridge/bridge.jpg"
// import GB2 from "./img/BIM/Goethals-Bridge/construction.jpg"
// import GB3 from "./img/BIM/Goethals-Bridge/spmt.jpg"
// import KB1 from "./img/BIM/Kosciuszko-Bridge/main.jpg"
// import KB2 from "./img/BIM/Kosciuszko-Bridge/const.jpg"
// import KB3 from "./img/BIM/Kosciuszko-Bridge/const2.jpg"
// import LGA1 from "./img/BIM/LGA/main.jpg"
// import LGA2 from "./img/BIM/LGA/const1.jpg"
// import LGA3 from "./img/BIM/LGA/const2.jpg"
// import LGA4 from "./img/BIM/LGA/CHRP.jpg"
// import LGA5 from "./img/BIM/LGA/CHRP2.jpg"
// import MAB1 from "./img/BIM/Metropolitan-Avenue-Bascule-Bridge/main.jpg"
// import MAV1 from "./img/BIM/Myrtle-Avenue-Viaduct/main.jpg"
// import UB1 from "./img/BIM/Unionport-Bridge/main.jpg"
// import UB2 from "./img/BIM/Unionport-Bridge/unionport.png"
// import UB3 from "./img/BIM/Unionport-Bridge/SW-bridge.png"
// import UNO1 from "./img/CS/UNO/main.png"
// import UNO2 from "./img/CS/UNO/game-menu.png"
// import UNO3 from "./img/CS/UNO/game-turn.png"
// import UNO4 from "./img/CS/UNO/draw-4.png"
// import UNO5 from "./img/CS/UNO/draw-4-pen.png"
// import UNO6 from "./img/CS/UNO/game-pause.png"
// import VD1 from "./img/CS/Visual-Data/main.png"
// import VD2 from "./img/CS/Visual-Data/data-tree.png"
// import VD3 from "./img/CS/Visual-Data/data-graph.png"
// import VD4 from "./img/CS/Visual-Data/algo-heapsort.png"
// import VD5 from "./img/CS/Visual-Data/algo-quicksort.png"
// import HS1 from "./img/CS/HideNSeek/main.png"
// import HS2 from "./img/CS/HideNSeek/seek.png"
// import HS3 from "./img/CS/HideNSeek/maze.png"

// export const Photos = {
//   BIM:{
//     "Goethals-Bridge":["bridge","construction","spmt"],
//     "Kosciuszko-Bridge":["main","const","const2"],
//     LGA:["main","const1","const2","CHRP","CHRP2"],
//     "Metropolitan-Avenue-Bascule-Bridge":["main"],
//     "Myrtle-Avenue-Viaduct":["main"],
//     "Unionport-Bridge":["main","unionport","SW-bridge"],
//   },
//   CS:{
//     UNO:["main","game-menu","game-turn","draw-4","draw-4-pen","game-pause"],
//     "Visual-Data":["main","data-tree","data-graph","algo-heapsort","algo-quicksort"],
//     HideNSeek:["main","seek","maze"],
//   }
// }
import React,{useState} from 'react';

export const BIMslides = ({ handleImageClick }) => {
  // ... (other code)
	console.log('handleImageClick:', handleImageClick);
  return (
    <section class="proj">
      <div class="proj-photo">
        <div class="photo-container">
          <div class="photo-main">
            <div className="selected-main"></div>
          </div>
          <div class="photo-album">
            <ul>
              <li><div className="p1 img-selected" onClick={() => handleImageClick("p1")}></div></li>
              <li><div className="p2" onClick={() => handleImageClick("p2")}></div></li>
              <li><div className="p3" onClick={() => handleImageClick("p3")}></div></li>
              <li><div className="p4" onClick={() => handleImageClick("p4")}></div></li>
              <li><div className="p5" onClick={() => handleImageClick("p5")}></div></li>
            </ul>
          </div>
        </div>
      </div>
      {/* ... (other code) */}
    </section>
  );
};

// export const BIMslides = [
// <section class="proj">
// 	<div class="proj-photo">
// 		<div class="photo-container">
// 			<div class="photo-main">
// 				<div className="selected-main"></div>
// 			</div>
// 			<div class="photo-album">
// 				<ul>
// 					<li><div className="p1 img-selected" onClick={()=>handleImageClick("p1")}></div></li>
// 					<li><div className="p2" onClick={()=>handleImageClick("p2")}></div></li>
// 					<li><div className="p3" onClick={()=>handleImageClick("p3")}></div></li>
// 					<li><div className="p4" onClick={()=>handleImageClick("p4")}></div></li>
// 					<li><div className="p5" onClick={()=>handleImageClick("p5")}></div></li>
// 				</ul>
// 			</div>
// 		</div>
// 	</div>
// 	<div class="proj-info">
// 		<div class="title">
// 			<h1>LaGuardia Airport Terminal Redevelopment</h1>
// 			<div>Client: Skanska-Walsh</div>
//       <div>Location: Queens, NY, USA</div>
// 		</div>
// 		<div class="description">
// 			<h3>Accomplishment</h3>
// 			<ul>
// 				<li>Design & deliver construction pick plan and rigging required for steel erection</li>
// 				<li>Review minimum crane positions and flow as well as improve crane path which decreased time span in construction and saved extra cost through the use of 3D pick planning into Revit. </li>
// 				<li>Conduct site planning and clash detection monitoring.</li>
// 			</ul>
// 		</div>
// 	</div>
// </section>
// ,
// <section class="proj">
// 	<div class="proj-photo">
// 		<div class="photo-container">
// 			<div class="photo-main">
// 				<img src="" alt="project"/>
// 			</div>
// 			<div class="photo-album">
// 				<ul>
// 					<li><img src="" alt="project"/></li>
// 					<li><img src="" alt="project"/></li>
// 					<li><img src="" alt="project"/></li>
// 					<li><img src="" alt="project"/></li>
// 				</ul>
// 			</div>
// 		</div>
// 	</div>
// 	<div class="proj-info">
// 		<div class="title">
// 			<h1>Unionport Bridge Replacement</h1>
// 			<div>Client: The Lane Construction</div>
//       <div>Location: Bronx, NY, USA</div>
// 		</div>
// 		<div class="description">
// 			<h3>Accomplishment</h3>
// 			<ul>
// 				<li>Create bridge profile, superelevation, and toposurface through Civil 3D.</li>
// 				<li>Implement Revit collaborate systems in overseeing BIM Team worksets, while working closely with contractor and engineer in addressing real time condition from BIM model.</li>
// 				<li>Present potential risk and conflict between proposed and current bridge spans and recommend effective resolution for site planning and roadway traffic control.</li>
//         <li>Offer provisional support structure scheme, as well as follow-up steel shop drawing.</li>
// 			</ul>
// 		</div>
// 	</div>
// </section>
// ,
// <section class="proj">
// 	<div class="proj-photo">
// 		<div class="photo-container">
// 			<div class="photo-main">
// 				<img src="" alt="project"/>
// 			</div>
// 			<div class="photo-album">
// 				<ul>
// 					<li><img src="" alt="project"/></li>
// 					<li><img src="" alt="project"/></li>
// 					<li><img src="" alt="project"/></li>
// 					<li><img src="" alt="project"/></li>
// 				</ul>
// 			</div>
// 		</div>
// 	</div>
// 	<div class="proj-info">
// 		<div class="title">
// 			<h1>Myrtle Avenue Viaduct Rehabilitation</h1>
// 			<div>Schiavone Construction</div>
//       <div>Location: Brooklyn/Queens, NY, USA</div>
// 		</div>
// 		<div class="description">
// 			<h3>Accomplishment</h3>
// 			<ul>
// 				<li>Proactively communicate with site manager and surveyor to produce employee walkway and tie-in locations.</li>
// 				<li>Gather proposed train rail plan and existing site survey data, while regulating design rail in alignment with designate elevation point and slope.</li>
// 				<li>Generate miscellaneous steel shop drawings, including stair, ladder, railing, and bollard.</li>
// 			</ul>
// 		</div>
// 	</div>
// </section>
// ,
// <section class="proj">
// 	<div class="proj-photo">
// 		<div class="photo-container">
// 			<div class="photo-main">
// 				<img src="" alt="project"/>
// 			</div>
// 			<div class="photo-album">
// 				<ul>
// 					<li><img src="" alt="project"/></li>
// 					<li><img src="" alt="project"/></li>
// 					<li><img src="" alt="project"/></li>
// 					<li><img src="" alt="project"/></li>
// 				</ul>
// 			</div>
// 		</div>
// 	</div>
// 	<div class="proj-info">
// 		<div class="title">
// 			<h1>Goethals Bridge: Travis Spur Rail Bridge Replacement</h1>
// 			<div>Kiewit-Weeks-Massman</div>
//       <div>Location: Staten Island, NY/Elizabeth, NJ, USA</div>
// 		</div>
// 		<div class="description">
// 			<h3>Accomplishment</h3>
// 			<ul>
// 				<li>Design both proposed and existing bridge model and toposurface.</li>
// 				<li>Eliminate potential conflict that arise during bridge erection by streamlining SPMT traveling path and provide risk assessment.</li>
// 				<li>Utilize BIM technology to create site planning with ideal engineering solution and successfully attain super weekend bridge erection</li>
// 			</ul>
// 		</div>
// 	</div>
// </section>
// ,
// <section class="proj">
// 	<div class="proj-photo">
// 		<div class="photo-container">
// 			<div class="photo-main">
// 				<img src="" alt="project"/>
// 			</div>
// 			<div class="photo-album">
// 				<ul>
// 					<li><img src="" alt="project"/></li>
// 					<li><img src="" alt="project"/></li>
// 					<li><img src="" alt="project"/></li>
// 					<li><img src="" alt="project"/></li>
// 				</ul>
// 			</div>
// 		</div>
// 	</div>
// 	<div class="proj-info">
// 		<div class="title">
// 			<h1>Kosciuszko Bridge Replacement - Phase One</h1>
// 			<div>Client: Skanska</div>
//       <div>Location: Brooklyn/Queens, NY, USA</div>
// 		</div>
// 		<div class="description">
// 			<h3>Accomplishment</h3>
// 			<ul>
// 				<li>Collected all as-built drawings and contract drawings and survey data to develop existing and proposed bridge, Created BIM Revit model and maintained its life-cycle.</li>
// 				<li>Proficient in site planning, ensuring optimal construction layout, safe demolition area identification, and assessment of potential risks within the construction site.</li>
// 				<li>Collaborated with cross-functional team for integration of BIM system.</li>
//         <li>Prepared real-time erection/demolition sequence simulation and animation using Navisworks, as well as CAD drawing for official review.</li>
// 			</ul>
// 		</div>
// 	</div>
// </section>
// ,
// <section class="proj">
// 	<div class="proj-photo">
// 		<div class="photo-container">
// 			<div class="photo-main">
// 				<img src="" alt="project"/>
// 			</div>
// 			<div class="photo-album">
// 				<ul>
// 					<li><img src="" alt="project"/></li>
// 					<li><img src="" alt="project"/></li>
// 					<li><img src="" alt="project"/></li>
// 					<li><img src="" alt="project"/></li>
// 				</ul>
// 			</div>
// 		</div>
// 	</div>
// 	<div class="proj-info">
// 		<div class="title">
// 			<h1>Metropolitan Avenue Bascule Bridge Over English Kills Rehabilitation</h1>
// 			<div>Kiewit Construction</div>
//       <div>Location: Brooklyn, NY</div>
// 		</div>
// 		<div class="description">
// 			<h3>Accomplishment</h3>
// 			<ul>
// 				<li>Outlined bascule bridge model and fender system and 3D simulation for machinery room removal sequence.</li>
// 				<li>Took charge of creating engineering drawing, load take-off calculation, and rigging detail.</li>
// 			</ul>
// 		</div>
// 	</div>
// </section>
// ];

export const CSslides = [
<section class="proj">
	<div class="proj-photo">
		<div class="photo-container">
			<div class="photo-main">
				<img src="" alt="project"/>
			</div>
			<div class="photo-album">
				<ul>
					<li><img src="" alt="project"/></li>
					<li><img src="" alt="project"/></li>
					<li><img src="" alt="project"/></li>
					<li><img src="" alt="project"/></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="proj-info">
		<div class="title">
			<h1>UNO Card Web Game</h1>
			<div>Web-based multiplayer implementation of the UNO card game using JavaScript, NodeJS, HTML and CSS</div>
      <nav><a href="http://troyyu527.github.io/uno-web-game" target="_blank" rel="noreferrer noopener">Enter</a></nav>
		</div>
		<div class="description">
			<h3>Front-End Development</h3>
			<ul>
				<li>Developed a heuristic algorithm for non-human AI players, utilizing a decision-making process based on card weight points within an internal priority queue structure.</li>
				<li>Implemented the web-based front-end using Next.js framework, providing seamless routing among different pages.</li>
        <li>Created a modularized gameplay interface with CSS animations, sound effects, and real-time interactions with players.</li>
        <li>Integrated the "Axios" module for efficient data fetching and communication with the API server.</li>
        <li>Implemented user game account management and security, allowing users to save and load games in real-time.</li>
			</ul>
      <h3>Back-End Development</h3>
			<ul>
				<li>Designed and developed a game backend server to manage game states and enable bi-directional communication.</li>
				<li>Leveraged MongoDB Atlas for secure data storage and Glitch for hosting the backend server.</li>
        <li>Utilized Express.js as the framework for the web-based back-end, exposing RESTful API endpoints.</li>
        <li>Implemented user authentication using the "Bcrypt" module for password hashing and the "Joi" module for verification.</li>
        <li>Integrated "Passport" and "Json WebToken" for simplified authentication processes, ensuring user account security and preventing information leaks.</li>
			</ul>
		</div>
	</div>
</section>
,
<section class="proj">
	<div class="proj-photo">
		<div class="photo-container">
			<div class="photo-main">
				<img src="" alt="project"/>
			</div>
			<div class="photo-album">
				<ul>
					<li><img src="" alt="project"/></li>
					<li><img src="" alt="project"/></li>
					<li><img src="" alt="project"/></li>
					<li><img src="" alt="project"/></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="proj-info">
		<div class="title">
			<h1>Visualization of Data Structures & Sorting Algorithms</h1>
			<div>Interactive web-based visualization of data structures and sorting algorithms leveraging D3.js and  jQuery</div>
      <nav><a href="http://troyyu527.github.io/visual-algo" target="_blank" rel="noreferrer noopener">Enter</a></nav>
		</div>
		<div class="description">
			<h3>Web Application Development</h3>
			<ul>
				<li>Designed and developed interactive visualizations of prominent data structures including trees, heaps, and graphs using the powerful D3.js library.</li>
				<li>Implemented user input handling and asynchronous processing using native JavaScript event listeners and jQuery, enhancing the interactive experience for users.</li>
        <li>Created re-usable modules for SVG manipulation and DOM data binding, resulting in an efficient and maintainable codebase.</li>
			</ul>
		</div>
	</div>
</section>
,
<section class="proj">
	<div class="proj-photo">
		<div class="photo-container">
			<div class="photo-main">
				<img src="" alt="project"/>
			</div>
			<div class="photo-album">
				<ul>
					<li><img src="" alt="project"/></li>
					<li><img src="" alt="project"/></li>
					<li><img src="" alt="project"/></li>
					<li><img src="" alt="project"/></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="proj-info">
		<div class="title">
			<h1>Hide & Seek</h1>
			<div>An Interactive web-based visualization of Dijkstra's algorithm for calculating the shortest path in an user-created maze using React</div>
      <nav><a href="http://troyyu527.github.io/hidenseek" target="_blank" rel="noreferrer noopener">Enter</a></nav>
		</div>
		<div class="description">
			<h3>Web Application Development</h3>
			<ul>
				<li>Designed and developed a robust React component structure and efficient state management system, following best design patterns. This optimized state propagation, simplified debugging, and enhanced state tracking capabilities.</li>
				<li>Implemented a user-friendly graphical web UI that allows users to create and customize mazes for testing purposes. Custom event handlers were utilized to enable intuitive maze design and interaction.</li>
        <li>Integrated the Recursive Backtracking algorithm to generate random maze layouts. This feature provides a variety of maze configurations for route testing and exploration.</li>
			</ul>
		</div>
	</div>
</section>
];
