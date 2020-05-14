import { Ground } from './Ground';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';
import { Light } from 'three';

export class World3D {

    constructor(size, height) {

        this.scene, this.camera, this.renderer, this.directionalLight, this.controls, this.ground, this.stats;

        this.createScene();

        this.makeLights();

        this.makeGround(size, height);

        this.makeControls();

        this.makeHelpers();

        this.animate();

        console.log(this.renderer.info.render.triangles);
    }

    makeGround(size, height) {
        this.ground = new Ground(size, height);
        this.ground.position.set(-size * 0.5, 0, -size * 0.5);
        this.scene.add(this.ground);
    }

    createScene() {

        //Création du canvas WebGL
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        //Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xcce0ff);
        this.scene.fog = new THREE.Fog(0xcce0ff, 40, 50);
    }

    animate() {

        this.renderer.render(this.scene, this.camera);

        this.controls.update(this.clock.getDelta());

        //this.stats.update();

        //console.log(this.camera.position);

        requestAnimationFrame(this.animate.bind(this));
    }

    makeLights() {
        //Directional light
        this.directionalLight = new THREE.DirectionalLight(0xffffaa, 1.8);
        this.directionalLight.position.set(15, 50, 15);
        
        this.directionalLight.castShadow = true;
        this.directionalLight.shadow.mapSize.width = 512;
        this.directionalLight.shadow.mapSize.width = 512;
        
        var d = 80;
        
        this.directionalLight.shadow.camera.left = -d;
        this.directionalLight.shadow.camera.right = d;
        this.directionalLight.shadow.camera.top = d;
        this.directionalLight.shadow.camera.bottom = -d;
        this.directionalLight.shadow.camera.far = 100;
        
        this.scene.add(this.directionalLight);
        
        //Ambient Light
        let ambientLight = new THREE.HemisphereLight(
            0xddeeff, // sky color
            0x3e2a0a, // ground color
            0.75, // intensity
        );

        this.scene.add(ambientLight);
    }

    makeHelpers() {
        //AxeHelper
        let axesHelper = new THREE.AxesHelper(5);
        this.scene.add(axesHelper);

        //Light helper
        let helper = new THREE.DirectionalLightHelper(this.directionalLight, 5);
        this.scene.add(helper);

        let shadowHelper = new THREE.CameraHelper(this.directionalLight.shadow.camera);
        this.scene.add(shadowHelper);

        //Stats
       // this.stats = new Stats();
       // document.querySelector('#stats').appendChild(this.stats.dom);
    }

    makeControls() {

        //Camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.3, 20000);
        this.camera.position.set(0, 20, 0);

        //Controls
        this.clock = new THREE.Clock(true);

        this.controls = new FirstPersonControls(this.camera, document.body);
        this.controls.movementSpeed = 20;
        this.controls.lookSpeed = 0.125;
        this.controls.lookVertical = true;
        this.controls.constrainVertical = true;
        this.controls.verticalMin = 1.1;
        this.controls.verticalMax = 2.2;
    }


    onWindowResize(e) {

        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.controls.handleResize();
    }
}