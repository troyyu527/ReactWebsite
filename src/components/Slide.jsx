import React,{useState,useEffect} from 'react';
import videoImg from "../video.png";
export const Slide = ({ project }) => {
	const title = project.title;
	const client = project.client;
	const location = project.location;
	const jobs = project.jobs;
	const img = project.img;
	const video = project.video? project.video:null;
	const [selectedImage, setSelectedImage] = useState(img[0]);
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [isVideoSelected, setIsVideoSelected] = useState(false);
	useEffect(()=>{

	},[selectedVideo])
  const handleImageClick = (clickedPath) => {
		if (video && video.length > 0) {
			if (video.includes(clickedPath)) {
				setIsVideoSelected(true);
				setSelectedImage(""); // Reset selected image when clicking a video thumbnail
				setSelectedVideo(clickedPath);
			} else {
				setIsVideoSelected(false);
				setSelectedImage(clickedPath);
				setSelectedVideo(""); // Reset selected video when clicking an image thumbnail
			}
		} else {
			setIsVideoSelected(false);
			setSelectedImage(clickedPath);
		}

  };
  return (
		<section className="proj">
			<div className="proj-photo">
				<div className="photo-container">
					<div className="photo-main">
					{isVideoSelected ? (
              <video width="100%" height="100%" controls autoPlay style={{ objectFit: 'cover' }}>
                <source src={selectedVideo} type="video/mp4" />
              </video>
            ) : (
              <div
                className="selected-main"
                style={{ backgroundImage: `url('${selectedImage}')` }}
              ></div>
            )}
          </div>
          <div className="photo-album">
            <ul>
              {img.map((path, index) => (
                <li key={index}>
                  <div
                    className={`thumbnail ${
                      path === selectedImage && !isVideoSelected ? 'img-selected' : ''
                    }`}
                    style={{ backgroundImage: `url('${path}')` }}
                    onClick={() => handleImageClick(path)}
                  ></div>
                </li>
              ))}
              {video &&
                video.map((path, index) => (
                  <li key={index}>
                    <div
                      className={`thumbnail ${
                        path === selectedVideo && isVideoSelected ? 'img-selected' : ''
                      }`}
                      style={{ backgroundImage: `url('${videoImg}')` }}
                      onClick={() => handleImageClick(path)}
                    ></div>
                  </li>
                ))}
            </ul>
					</div>
				</div>
			</div>
			<div className="proj-info">
				<div className="title">
					<h1>{title}</h1>
					<div>Client: {client}</div>
					<div>Location: {location}</div>
				</div>
				<div className="description">
					<h3>Accomplishment</h3>
					<ul>
						{jobs.map((item,index)=>(
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			</div>
	</section>
  );
};
export default Slide

