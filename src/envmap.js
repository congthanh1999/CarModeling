import * as THREE from 'three';

const posx = './assets/images/env_1/1/posx.jpg';
const negx = './assets/images/env_1/1/negx.jpg';
const posy = './assets/images/env_1/1/posy.jpg';
const negy = './assets/images/env_1/1/negy.jpg';
const posz = './assets/images/env_1/1/posz.jpg';
const negz = './assets/images/env_1/1/negz.jpg';

export function getEnvMap() {
    const urls = [posx, negx, posy, negy, posz, negz];
    const map = new THREE.CubeTextureLoader().load(urls);

    map.format = THREE.RGBAFormat;

    return map;
}

export function addSkyBox(scene) {
    const geometry = new THREE.BoxGeometry(1024, 1024, 1024);

    var textureLoader = new THREE.TextureLoader();
    var texture0 = textureLoader.load(posx);
    var texture1 = textureLoader.load(negx);
    var texture2 = textureLoader.load(posy);
    var texture3 = textureLoader.load(negy);
    var texture4 = textureLoader.load(posz);
    var texture5 = textureLoader.load(negz);
    var materials = [
        new THREE.MeshBasicMaterial({ map: texture0 }), //right 
        new THREE.MeshBasicMaterial({ map: texture1 }), //left 
        new THREE.MeshBasicMaterial({ map: texture2 }), //top 
        new THREE.MeshBasicMaterial({ map: texture3 }), //bottom 
        new THREE.MeshBasicMaterial({ map: texture4 }), //front 
        new THREE.MeshBasicMaterial({ map: texture5 }), //back
    ];
    var skyBox = new THREE.Mesh(geometry, materials);
    scene.add(skyBox);
}