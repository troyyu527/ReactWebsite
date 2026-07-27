import React,{useState} from 'react';

export const CSlide = ({ project }) => {
	const title = project.title;
	const des = project.des;
	const link = project.link;
	const jobs = project.jobs;
	const img = project.img;
	const [selectedImage, setSelectedImage] = useState(img[0])
  const handleImageClick = (clickedImagePath) => {
    setSelectedImage(clickedImagePath);
  };
  // `proj-cs` widens the image window to 16:9 and shows screenshots whole
  // rather than cropped. It is scoped to this component so the BIM gallery,
  // which reuses these class names through Slide.jsx, keeps its own framing.
  return (
		<section className="proj proj-cs">
			<div className="proj-photo">
				<div className="photo-container">
					<div className="photo-main">
						<div className="selected-main" style={{backgroundImage:`url('${selectedImage}')`}}></div>
					</div>
					<div className="photo-album">
						<ul>
							{img.map((path,index)=>(
								<li key={index}><div className={`thumbnail ${path === selectedImage ? 'img-selected' : ''}`} style={{backgroundImage:`url('${path}')`}} onClick={()=>handleImageClick(path)}></div></li>
							))}
							
						</ul>
					</div>
				</div>
			</div>
			<div className="proj-info">
				<div className="title">
					<h1>{title}</h1>
					<div>{des}</div>
					<nav style={{marginTop:"3rem"}}>➔<a href={link} target="_blank" rel="noreferrer noopener"><b>ENTER</b></a></nav>
				</div>
				<div className="description">
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
export default CSlide