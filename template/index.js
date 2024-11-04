// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let scene=new THREE.Scene();
let camera=new THREE.PerspectiveCamera(65, window.innerWidth/window.innerHeight, 0.1, 100);  //camera specifications
camera.position.z=5;   //setting camera position
scene.add(camera);

//creating a mesh: mesh is a basic materail jo bina light k dikhta h
let box=new THREE.BoxGeometry(1,1,1);

let material=new THREE.MeshBasicMaterial({color:0x00ff00, wireframe: true});
//wireframe: element ko wire m chnge krdo
let mesh=new THREE.Mesh(box, material);

//mesh position
// mesh.position.x=1;    //x point se move hogi left right
// mesh.position.z=-3;   //y point se up down movement
// mesh.position.y=3;    //z point se andr bhr

//mesh rotation

// us axis k surrounding movement hogi
// mesh.rotation.x=1.2;  //jis b axis pr di dali usse rotate hoga
mesh.rotation.y=4;
// mesh.rotation.z=1.2;

//scale: size ko increase decrease krna
// mesh.scale.z=3.6;

//-------------------------------------------------------------------
//mathmatics
//degree radian m denhe yha==> 
//kisi b element ko 180 degree pr rotate krna h==> math.pi=3.14
// mesh.rotation.y=Math.PI/4;
scene.add(mesh);

//------------------------animations---------------------------------------------------------
// animation:iss cube m jo chnge hoga uski picture lete rho n print krte rho

const canvas=document.querySelector('canvas'); //selecting canvas from html
let renderer=new THREE.WebGLRenderer({canvas:canvas, antialias:true});
// antialias:true---> it will make edges smooth==> jagged lines are r

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);   //printing a picture  ==>jo b camera dekh rha h use print krte rho


//-----------------orbit controls-----------------------------------------------
// const controls = new OrbitControls( camera, renderer.domElement );
// camera.position.set( 0, 20, 100 );
// controls.enableDamping=true; //smooth movement
// controls.autoRotate=true;  //controls se b movement kraa skte h
// controls.dampingFactor=0.25; //kitni speeed se rokna or chlana h
// controls has autoRotateSpeed, enableZoom, etc. check documentation

//------------------------------animate----------------------------------------------
let clock=new THREE.Clock();
function animate(){
    // frame per second: 1 second m computer ki jitni power ko picture lene ki lelo
    window.requestAnimationFrame(animate);  
    renderer.render(scene, camera);  //printing done

    controls.update();  //jaise jaise chize animate ho rhi h vaise vaise controls ko b update krna

    //--------jo rotate krna h vo likho-------------------------------------------------------------------------------------------------------------------
    mesh.rotation.y +=0.05;  //0.05 is rotation speed

    // fps depend krega sbke computer ki speed pr==> koi constant speed h jo sbke laptop m same chle
    // mesh.rotation.y +=clock.getElapsedTime();
}

animate();

//-------------------------------responsive------------------------------------------------------------------
// resize krne pr: rederer, resize, aspect ratio, projection sb chnhe krna hga
window.addEventListener('resize', ()=>{
    renderer.setSize(window.innerWidth, window.innerHeight); //renderer: printer
    camera.aspect(window.innerWidth/window.innerHeight);  //camera divison

    //khud camera chnge krenge to updateProjectionMatrix aaega hi aaega
    camera.updateProjectionMatrix();  //elements squece/shrink na ho same rhe camera pr w, h chnge hone se b
    
})
//-------------------------------orbit controls---------------------------------------------------
//orbit control: gives power to control elements acc to mouse
//ye animate function k upr aaega coz isse camera, renderer(jo ki phle hi bne hue h) vo chaiye



//----------------------------------------geometries---------------------------
// wireframe:true==> creted a box skeleton