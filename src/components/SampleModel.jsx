import {React,useEffect,useRef} from 'react';
import * as THREE from 'three';
//import { LASLoader } from 'las-loader';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import '../css/model.css';

function SampleModel(props){
  const modelRef1 = useRef();
  //const modelRef2 = useRef();
  useEffect(() => {
    // OBJ model Viewer 
    var modelHeight = 100;
    var modelWidth = 100;
    var left = -modelWidth / 8;
    var right = modelWidth / 8;
    var top = modelHeight / 8;
    var bottom = -modelHeight / 8;
    var near = 0.1;
    var far = 1000;
    let scene = new THREE.Scene();
    let camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(modelRef1.current.clientWidth, modelRef1.current.clientHeight);
    modelRef1.current.appendChild(renderer.domElement);

    camera.position.set(0,0,100);
    
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    
    
    const loader = new OBJLoader();
    const objPath = "/obj/FinalBaseMesh.obj"
    loader.load(objPath, (object) => {
      // Add the loaded object to the scene
      object.position.y -= 10
      scene.add(object);
    });
    scene.background= new THREE.Color(0xffffff);
    let light = new THREE.HemisphereLight(0xffffff,0x000000,2);
    scene.add(light);
    
    const controls = new OrbitControls( camera, renderer.domElement );
    
    
    controls.update();

    const animate = function () {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

  }, []);
  return (
    <div className='page'>
      
      <div className='cs-content'>
      <span className="cs-topper">3D model / Point Cloud Viewer</span>
      <h3>For Presentation Use</h3>
      <div className='list-container'>
        <h4>Available Actions:</h4>
        <ul>
          <li>Left-Click and Drag to "Rotate"</li>
          <li>Right-Click and Drag to "Pan"</li>
          <li>Scroll Mouse Wheel to "Zoom"</li>
        </ul>
      </div>
      
      </div>
      <div className='model-container' ref={modelRef1}></div>
      
      {/* <div className='model-container' ref={modelRef2}></div> */}
    </div>
    
  )

}

export default SampleModel