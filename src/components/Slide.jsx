function Slide(props){
  //const {name,pos,currentPlayer} = props



  
  return (
    <section class="proj">
      <div class="proj-photo">
        <div class="photo-container">
          <div class="photo-main">
            <div className="selected-pix1"></div>
          </div>
          <div class="photo-album">
            <ul>
              <li><div className="p1" onClick={selectPhoto("p1")}></div></li>
              <li><div className="p2" onClick={selectPhoto("p2")}></div></li>
              <li><div className="p3"></div></li>
              <li><div className="p4"></div></li>
              <li><div className="p5"></div></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="proj-info">
        <div class="title">
          <h1>LaGuardia Airport Terminal Redevelopment</h1>
          <div>Client: Skanska-Walsh</div>
          <div>Location: Queens, NY, USA</div>
        </div>
        <div class="description">
          <h3>Accomplishment</h3>
          <ul>
            <li>Design & deliver construction pick plan and rigging required for steel erection</li>
            <li>Review minimum crane positions and flow as well as improve crane path which decreased time span in construction and saved extra cost through the use of 3D pick planning into Revit. </li>
            <li>Conduct site planning and clash detection monitoring.</li>
          </ul>
        </div>
      </div>
    </section>
  )

}

export default Slide