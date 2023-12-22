import React,{useState} from 'react';
import {BIMslides} from './BIMslides';
//import {BIMslides,CSslides} from '../projects/slides';
import '../css/proj_slide.css';
import '../css/photo_style.css';
function Projects(props) {
  //const {name,pos,currentPlayer} = props
  const [currentBIMSlide, setCurrentBIMSlide] = useState(0);
  const [currentCSSlide, setCurrentCSSlide] = useState(0);
  const [slideBIMSet, setSlideBIMSet] = useState(BIMslides)
  //const [slideCSSet, setSlideCSSet] = useState(CSslides)
  const [selectedImage, setSelectedImage] = useState('p1'); // Set this to the filename of the first image

  const handleImageClick = (imageName) => {
    setSelectedImage(imageName);
    let main = document.querySelector(".selected-main");
    let selectImg = document.querySelector("."+selectedImage);
    main.style.backgroundImage = selectImg.style.backgroundImage;
  };
  const handleBIMSlide = (direction) => {
    if (direction === 'forward') {
      setCurrentBIMSlide((prevSlide) => (prevSlide + 1) % slideBIMSet.length);
    } else if (direction === 'backward') {
      setCurrentBIMSlide((prevSlide) => (prevSlide - 1 + slideBIMSet.length) % slideBIMSet.length);
    }
  };
  // const handleCSSlide = (direction) => {
  //   if (direction === 'forward') {
  //     setCurrentCSSlide((prevSlide) => (prevSlide + 1) % slideCSSet.length);
  //   } else if (direction === 'backward') {
  //     setCurrentCSSlide((prevSlide) => (prevSlide - 1 + slideCSSet.length) % slideCSSet.length);
  //   }
  // };
  // const handleSlideSet = (set)=>{
  //   setSlideSet(set);
  //   setCurrentSlide(0);
  // }
  return (
    <div className='page'>
      <div className="projects">
        {/* <button onClick={()=>handleSlideSet(BIMslides)}>BIM</button>
        <button onClick={()=>handleSlideSet(CSslides)}>CS</button> */}
        <div className='slide-container'>
          {/* <div>{slideSet[currentSlide]}</div> */}
          <div class="container">
          <input class="proj-toggle" type="checkbox" id="proj" name="project"/>
			          	<label for="proj"><span class="block-diff">BIM Proj<span class="float-right">CS Proj</span></span></label>
              <div class="card-3d-wrap">
                <div class="card-3d-wrapper">
                  <div class="card-front">
                    <div class="proj-wrap">
                      <div>
                        {/* <BIMslides handleImageClick={handleImageClick} /> */}
                        {/* {slideBIMSet[currentBIMSlide]} */}
                      </div>
                      <div className="button-container">
                        <div onClick={() => handleBIMSlide('backward')}>Previous</div>
                        <div onClick={() => handleBIMSlide('forward')}>Next</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-back">
                    {/* <div class="proj-wrap">
                      <div>{slideCSSet[currentCSSlide]}</div>
                      <div className="button-container">
                        <div onClick={() => handleCSSlide('backward')}>Previous</div>
                        <div onClick={() => handleCSSlide('forward')}>Next</div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            
		      	  
	      	  
	        </div>
          
        </div>
      </div>
      
    </div>
    
  )
}

export default Projects