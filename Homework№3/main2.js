export const loadTexture = (path) => {
return new Promise((resolve, reject) => {
const loader = new THREE.TextureLoader();
loader.load(path, (texture) => {
resolve(texture);
});
});
}

export const loadTextures = (paths) => {
const loader = new THREE.TextureLoader();
const promises = [];
for (let i = 0; i < paths.length; i++) {
	promises.push(new Promise((resolve, reject) => {
loader.load(paths[i], (texture) => {
resolve(texture);
});
}));
}
return Promise.all(promises);
}
import {CSS3DObject} from
"https://unpkg.com/three/examples/jsm/renderers/CSS3DRenderer.js";
import {loadGLTF, loadTexture, loadTextures, loadVideo} from
"./loader.js";
const THREE = window.MINDAR.IMAGE.THREE;
document.addEventListener("DOMContentLoaded", () => {
const start = async() => {

const mindarThree = new window.MINDAR.IMAGE.MindARThree({
container: document.body,
imageTargetSrc: "cc_card.mind",
});
	const {renderer, cssRenderer, scene, cssScene, camera} =
mindarThree;
	const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
scene.add(light);
	const [
cardTexture,
emailTexture,
locationTexture,
webTexture,
profileTexture,
leftTexture,
rightTexture,
portfolioItem0Texture,
portfolioItem1Texture,
portfolioItem2Texture,
] = await loadTextures([
"5.png"
]);
	const planeGeometry=new THREE.PlaneGeometry(1, 0.552);
const cardMaterial=new THREE.MeshBasicMaterial({map:cardTexture});
const card=new THREE.Mesh(planeGeometry, cardMaterial);
	const iconGeometry=new THREE.CircleGeometry(0.075, 32);
const emailMaterial=new
THREE.MeshBasicMaterial({map:emailTexture});
const webMaterial=new THREE.MeshBasicMaterial({map:webTexture});
const profileMaterial=new
THREE.MeshBasicMaterial({map:profileTexture});
const locationMaterial=new
THREE.MeshBasicMaterial({map:locationTexture});
const leftMaterial=new THREE.MeshBasicMaterial({map:leftTexture});
const rightMaterial=new
THREE.MeshBasicMaterial({map:rightTexture});
const emailIcon=new THREE.Mesh(iconGeometry, emailMaterial);
const webIcon=new THREE.Mesh(iconGeometry, webMaterial);
const profileIcon=new THREE.Mesh(iconGeometry, profileMaterial);
const locationIcon=new THREE.Mesh(iconGeometry, locationMaterial);
const leftIcon=new THREE.Mesh(iconGeometry, leftMaterial);
const rightIcon=new THREE.Mesh(iconGeometry, rightMaterial);
