import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);
//Platform Creation
const platformgeometry = new THREE.BoxGeometry(10, 5, 1);
const platformmaterial = new THREE.MeshBasicMaterial({color: 0x525252});
const platform = new THREE.Mesh(platformgeometry, platformmaterial);

const backwallgeometry = new THREE.BoxGeometry(10, 7.5, 1);
const backwallmaterial = new THREE.MeshBasicMaterial({color: 0x9C9C9C});
const backwall = new THREE.Mesh(backwallgeometry, backwallmaterial);

const onewallgeometry = new THREE.BoxGeometry(1, 7.5, 4);
const onewallmaterial = new THREE.MeshBasicMaterial({color: 0xC7C7C7});
const onewall = new THREE.Mesh(onewallgeometry, onewallmaterial);

const twowallgeometry = new THREE.BoxGeometry(1, 7.5, 4);
const twowallmaterial = new THREE.MeshBasicMaterial({color: 0xC7C7C7});
const twowall = new THREE.Mesh(twowallgeometry, twowallmaterial);

scene.add(plaform);
scene.add(backwall);
scene.add(onewall);
scene.add(twowall);

//platform is already in-position

backwall.position.x = 0
backwall.position.y = 4.25
backwall.position.z = -2

onewall.position.x = -4.5
onewall.position.y = 4.25
onewall.position.z = 0.5

twowall.position.x = 4.5
twowall.position.y = 4.25
twowall.position.z = 0.5

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