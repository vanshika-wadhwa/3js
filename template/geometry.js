let scene=new THREE.Scene();
let camera=new THREE.PerspectiveCamera(65, window.innerWidth/window.innerHeight, 0.1, 100);  //camera specifications
camera.position.z=5;   //setting camera position
scene.add(camera);

//ejs sirf front face render krta h backside ni krta render==>side:three

//creating a mesh: mesh is a basic materail jo bina light k dikhta h
let geometry=new THREE.CylinderGeometry(2, 2, 3, 10, 10, true);  //radius, radius, height, segments, segments, openended
//openEnded: top or bottom se open

let material=new THREE.MeshBasicMaterial({color:0x00ff00, wireframe: true, side:THREE.DoubleSide});
let mesh=new THREE.Mesh(geometry, material);

scene.add(mesh);


const canvas=document.querySelector('canvas'); //selecting canvas from html
let renderer=new THREE.WebGLRenderer({canvas:canvas, antialias:true});
// antialias:true---> it will make edges smooth==> jagged lines are r
//wireframe: true--> skeleton structure
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);   //printing a picture  ==>jo b camera dekh rha h use print krte rho


//------------------------------animate----------------------------------------------
let clock=new THREE.Clock();
function animate(){
    // frame per second: 1 second m computer ki jitni power ko picture lene ki lelo
    window.requestAnimationFrame(animate);  
    renderer.render(scene, camera);  //printing done

    //--------jo rotate krna h vo likho-------------------------------------------------------------------------------------------------------------------
    mesh.rotation.y +=0.05;  //0.05 is rotation speed

}

animate();

//segments: how many vertices are connected==> jitne jada segemets utna smoothness


