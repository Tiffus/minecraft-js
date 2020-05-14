import * as THREE from 'three';
import { makeNoise2D } from 'open-simplex-noise';
import { BufferGeometryUtils } from "three/examples/jsm/utils/BufferGeometryUtils";
import { MinecraftCube } from './MinecraftCube';


export class Ground extends THREE.Group {
    constructor(size, height, renderer, camera, scene) {

        super();

        this.waterLevel = 4;
        this.snowLevel = 15;
        this.renderer = renderer;
        this.camera = camera;
        this.scene = scene;

        const heightTab = this.generateNoise(size, height);

        this.createBoxes(heightTab, size);
    }

    createBoxes(heightTab, size) {

        let heightValue = 0;
        let cubeGeometry;
        let groundGeometry = new THREE.BufferGeometry();
        let groundMesh;
        let material;

        let cubes = [];

        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {

                heightValue = heightTab[x + y * size];

                for (let h = 0; h <= heightValue; h++) {
                    if (h < this.waterLevel) {
                        cubeGeometry = new MinecraftCube(0);
                    } else if (h > this.snowLevel) {
                        cubeGeometry = new MinecraftCube(3);
                    } else if (h == heightValue) {
                        cubeGeometry = new MinecraftCube(2);
                    } else {
                        cubeGeometry = new MinecraftCube(1);
                    }

                    cubeGeometry.translate(x, h, y);

                    cubes.push(new THREE.BufferGeometry().fromGeometry(cubeGeometry));
                }
            }
        }

        groundGeometry = BufferGeometryUtils.mergeBufferGeometries(cubes);

        let texture = new THREE.TextureLoader().load('textures/atlas.png');
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.LinearMipMapLinearFilter;

        material = new THREE.MeshLambertMaterial();
        material.vertexColors = THREE.VertexColors;
        material.map = texture;


        groundMesh = new THREE.Mesh(groundGeometry, material);


        this.add(groundMesh);

    }

    generateNoise(size, height) {

        const noise2D = makeNoise2D(Date.now());
        const zoomFactor = 10;

        let tab = new Array(size * size);
        let i;
        let elevation;

        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                i = x + y * size;

                elevation = Math.round((noise2D(x / zoomFactor, y / zoomFactor) + 1) * 0.5 * height);

                tab[i] = elevation;
            }
        }

        return tab;
    }

}