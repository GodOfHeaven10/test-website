import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const threescene = document.createElement("div");
threescene.id = 'three'
document.body.appendChild(threescene)

const renderer = new THREE.WebGLRenderer({alpha: true, premultipliedAlpha: false}); //{alpha: true, premultipliedAlpha: false}
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
threescene.style.width = "75%";
threescene.style.height = "75%";
threescene.style.position = "absolute";
threescene.style.justifySelf = "center";
threescene.style.top = "0";
threescene.appendChild(renderer.domElement);
//Platform Creation

const pivotObject = new THREE.Group()
scene.add(pivotObject)
const platformgeometry = new THREE.BoxGeometry(10, 1, 5);
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

pivotObject.add(platform, backwall, onewall, twowall);
const exampStage = [platform, backwall, onewall, twowall]
//platform is already in-position

backwall.position.set(0, 4.25, -2)
onewall.position.set(-4.5, 4.25, 0.5)
twowall.position.set(4.5, 4.25, 0.5)

camera.position.set(-20, 10, 20)

camera.lookAt(0, 4, 0)

document.addEventListener("keydown", (event) => {
    const keyName = event.key.toUpperCase()

    if (keyName === "A") {
        scene.rotation.y -= 0.01;
        renderer.render(scene, camera)
    } else if (keyName === "D") {
        scene.rotation.y += 0.01;
        renderer.render(scene, camera)
    }
})

let isDragging = false;
let previousMousePos = {x: 0, y: 0};

//required: mousedown, mouseup, mousemove
//stage dragging/spinning/rotating

renderer.domElement.addEventListener("mousedown", (event) => {
    isDragging = true;
    previousMousePos = {x: event.clientX, y: event.clientY};
})

window.addEventListener("mouseup", (event) => {
    isDragging = false;
})

renderer.domElement.addEventListener("mousemove", (event) => {
    if (!isDragging) return;

    const deltaX = event.clientX - previousMousePos.x;
    pivotObject.rotateY(deltaX * 0.01) //+= deltaX * 0.01;

    const deltaY = event.clientY - previousMousePos.y;
    pivotObject.rotateX(deltaY * 0.01) //+= deltaY * 0.01;

    previousMousePos = {x: event.clientX, y: event.clientY};
})

renderer.domElement.addEventListener("touchstart", (event) => {
    isDragging = true;

    const touch = event.touches[0]
    previousMousePos = {x: touch.clientX, y: touch.clientY};
})

window.addEventListener("touchend", (event) => {
    isDragging = false;
})

renderer.domElement.addEventListener("touchmove", (event) => {
    if (!isDragging) return;

    event.preventDefault()

    const touch = event.touches[0]
    
    const deltaX = touch.clientX - previousMousePos.x;
    pivotObject.rotateY(deltaX * 0.01) //+= deltaX * 0.01;

    const deltaY = touch.clientY - previousMousePos.y;
    pivotObject.rotateX(deltaY * 0.01) //+= deltaY * 0.01;

    previousMousePos = {x: touch.clientX, y: touch.clientY};
})

function onWindowResize() {
    const container = document.getElementById('three')
    const width = container.clientWidth; //threescene.clientWidth
    const height = container.clientHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

function animate() {
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;
    //scene.rotation.y += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(animate)
}

onWindowResize()

animate()