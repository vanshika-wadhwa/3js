//orbit controls: mouse se rotate (left/right, zoom in/outkrna material ko
//import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
let scene=new THREE.Scene();
let camera=new THREE.PerspectiveCamera(65, window.innerWidth/window.innerHeight, 0.1, 100);  //camera specifications
camera.position.z=5;   //setting camera position
scene.add(camera);

//creating a mesh: mesh is a basic materail jo bina light k dikhta h
let box=new THREE.BoxGeometry(1,1,1);

let material=new THREE.MeshBasicMaterial({color:"red", wireframe:true});
//wireframe: element ko wire m chnge krdo
let cube=new THREE.Mesh(box, material);

scene.add(cube);

const canvas=document.querySelector('canvas'); //selecting canvas from html
let renderer=new THREE.WebGLRenderer({canvas:canvas});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);   //printing a picture  ==>jo b camera dekh rha h use print krte rho


//orbit controls: animate function k just upr==>coz orbit wants camera, renderer jo phle bngye h
const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true; // Optional - adds smooth damping effect
controls.dampingFactor = 0.05;
controls.enableZoom = true;    // Enable zooming
controls.enablePan = true;     // Enable panning

function animate(){
    window.requestAnimationFrame(animate);  
    cube.rotation.y +=0.01;  //0.01 is rotation speed
    cube.rotation.x +=0.01;

    renderer.render(scene, camera);  //printing done

   controls.update();  //jaise jaise chize animate ho rhi h vaise vaise controls ko b update krna

    
}

animate();

//-------------------------------responsive------------------------------------------------------------------
// resize krne pr: rederer, resize, aspect ratio, projection sb chnhe krna hga
window.addEventListener('resize', ()=>{
    renderer.setSize(window.innerWidth, window.innerHeight); //renderer: printer  ==method
    camera.aspect=window.innerWidth/window.innerHeight;  //camera divison  ==property

    //khud camera chnge krenge to updateProjectionMatrix aaega hi aaega
    camera.updateProjectionMatrix();  //elements squece/shrink na ho same rhe camera pr w, h chnge hone se b
    
})
