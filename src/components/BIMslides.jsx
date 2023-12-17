import React,{useState} from 'react';

export const BIMslides = ({ handleImageClick }) => {
  // ... (other code)
	//console.log('handleImageClick:', handleImageClick);
  return (
    <section class="proj">
      <div class="proj-photo">
        <div class="photo-container">
          <div class="photo-main">
            <div className="selected-main"></div>
          </div>
          <div class="photo-album">
            <ul>
              {/* <li><div className="p1 img-selected" onClick={() => handleImageClick("p1")}></div></li>
              <li><div className="p2" onClick={() => handleImageClick("p2")}></div></li>
              <li><div className="p3" onClick={() => handleImageClick("p3")}></div></li>
              <li><div className="p4" onClick={() => handleImageClick("p4")}></div></li>
              <li><div className="p5" onClick={() => handleImageClick("p5")}></div></li> */}
            </ul>
          </div>
        </div>
      </div>
      {/* ... (other code) */}
    </section>
  );
};