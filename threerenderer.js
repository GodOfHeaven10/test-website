import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(10,5,1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.x = -10;
camera.position.z = 5;
camera.position.y = 10;

camera.rotation.x = -20;
camera.rotation.y = -45;
camera.rotation.z = -10;

function animate() {
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

//const body = document.body
const camerabuttons = document.getElementById("Camera Adjust")

if (camerabuttons.textContent === "x+") {
    camerabuttons.addEventListener('click', (event) => {
        camera.position += 1;
        camera.lookAt(cube)
    })
} else if (camerabuttons.textContent === "y+") {

} else if (camerabuttons.textContent === "z+") {

}