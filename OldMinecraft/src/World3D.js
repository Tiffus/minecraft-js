//Importe toutes les classes en nommant la racine THREE depuis le fichier three
import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { Ground } from './Ground';
import Stats from 'three/examples/jsm/libs/stats.module';

export class World3D {

    constructor(size, height, debug) {

        this.scene, this.camera, this.renderer, this.cube, this.controls, this.ground;

        this.createScene();

        this.makeControls();

        this.createLights();

        this.makeGround(size, height);

        if (debug) {
            this.createHelper();
        }

        this.animate();

        document.body.querySelector(".loader").classList.add("hidden");

        console.log("calls", this.renderer.info.render.calls);
        console.log("triangles", this.renderer.info.render.triangles);
    }

    makeGround(size, height) {

        this.ground = new Ground(size, height);

        this.ground.position.x = -size * 0.5;
        this.ground.position.z = -size * 0.5;

        this.scene.add(this.ground);
    }

    makeControls() {
        //Camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.3, 1000);
        this.camera.position.z = 5;

        //Controls
        this.controls = new TrackballControls(this.camera, this.renderer.domElement);
        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.panSpeed = 0.8;

        this.controls.keys = [65, 83, 68];
    }

    createHelper() {
        //AxeHelper
        let axesHelper = new THREE.AxesHelper(5);
        this.scene.add(axesHelper);

        //Light helper
        let lightHelper = new THREE.DirectionalLightHelper(this.light, 5);
        this.scene.add(lightHelper);

        //Stats
        this.stats = new Stats();
        document.querySelector('#stats').appendChild(this.stats.dom);
    }

    createLights() {
        //Light
        this.light = new THREE.DirectionalLight(0xdfebff, 1);
        this.light.castShadow = true;
        this.light.position.set(15, 50, 15);
        this.scene.add(this.light);

        //hemisphere light
        let hemisphere = new THREE.HemisphereLight(
            0xddeeff, //sky color
            0x3e2a0a, //ground color
            0.75 //intensity
        );

        this.scene.add(hemisphere);
    }

    createScene() {
        //Création du canvas WebGL
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        //Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xcce0ff);
        this.scene.fog = new THREE.Fog(0xcce0ff, 0.3, 1000);
    }

    animate() {

        this.renderer.render(this.scene, this.camera);

        this.controls.update();

        this.stats.update();

        requestAnimationFrame(this.animate.bind(this));
    }

}