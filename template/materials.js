
//-----------------------------------materials-----------------------------------------------------
// Materials: parent ki b hongi properties+khud ki b hongi
// eg. plastic remote=> plastic + button functionalities
// MeshStandardMaterial: its a physical based rendering(pr) 
//                        PBR: real based material jo rotataion pr chmk, shadow nae
// ShaderMaterial: it create interesting effects(animations)

//-----------------------------------materials r not working-----1.17.59--------------------------------------------------------

let scene=new THREE.Scene();
let camera=new THREE.PerspectiveCamera(65, window.innerWidth/window.innerHeight, 0.1, 100);  //camera specifications
camera.position.z=5;   //setting camera position
scene.add(camera);

let geometry=new THREE.BoxGeometry(2, 2, 2);
let material=new THREE.MeshStandardMaterial({color:0x00ff00});
let mesh=new THREE.Mesh(geometry, material);

scene.add(mesh);


const canvas=document.querySelector('canvas'); //selecting canvas from html
let renderer=new THREE.WebGLRenderer({canvas:canvas, antialias:true});
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

//shine: metalness, 