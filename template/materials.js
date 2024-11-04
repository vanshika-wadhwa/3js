
//-----------------------------------materials-----------------------------------------------------
// Materials: parent ki b hongi properties+khud ki b hongi
// eg. plastic remote=> plastic + button functionalities
// MeshStandardMaterial: its a physical based rendering(pr) 
//                        PBR: real based material jo rotataion pr chmk, shadow nae
// ShaderMaterial: it create interesting effects(animations)

//-----------------------------------materials r not working-----1.17.59--------------------------------------------------------

//note: isko dekhne k liye chaiye hogi light==> use light function
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.160.0/examples/jsm/controls/OrbitControls.js';

let scene=new THREE.Scene();
let camera=new THREE.PerspectiveCamera(65, window.innerWidth/window.innerHeight, 0.1, 100);  //camera specifications
camera.position.z=5;   //setting camera position
scene.add(camera);


let geometry=new THREE.BoxGeometry(2, 2, 2);
let material=new THREE.MeshStandardMaterial({color:"red", roughness: 0.3, metalness: 0.3});
let mesh=new THREE.Mesh(geometry, material);

scene.add(mesh);

// Add intense directional light
const brightDirectionalLight = new THREE.DirectionalLight(0xffffff, 2.5); // High intensity of 2.5
brightDirectionalLight.position.set(2, 5, 3); // Position for dramatic lighting
scene.add(brightDirectionalLight);

// // Add ambient light for overall scene illumination
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(ambientLight);

// Add directional light for main illumination
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Add point light for accent lighting
const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.set(-5, 3, 0);
scene.add(pointLight);

// Add light helpers for all lights
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1);
scene.add(directionalLightHelper);

const brightDirectionalLightHelper = new THREE.DirectionalLightHelper(brightDirectionalLight, 1); 
scene.add(brightDirectionalLightHelper);

const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.5);
scene.add(pointLightHelper);

// Note: AmbientLight doesn't have a helper since it's omnidirectional with no position/direction


const canvas=document.querySelector('canvas'); //selecting canvas from html
let renderer=new THREE.WebGLRenderer({canvas:canvas, antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);   //printing a picture  ==>jo b camera dekh rha h use print krte rho


//------------------------------animate----------------------------------------------
let clock=new THREE.Clock();

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth damping effect
controls.dampingFactor = 0.05; // Damping speed
controls.enableZoom = true; // Enable zoom
controls.enablePan = true; // Enable panning

function animate(){
    // frame per second: 1 second m computer ki jitni power ko picture lene ki lelo
    window.requestAnimationFrame(animate);  
    renderer.render(scene, camera);  //printing done

    //--------jo rotate krna h vo likho-------------------------------------------------------------------------------------------------------------------
    mesh.rotation.y +=0.05;  //0.05 is rotation speed
    controls.update()
}

animate();

//shine: metalness, 