import * as THREE from "three";

import { makeNoise2D } from "open-simplex-noise";
import { MinecraftCube } from "./MinecraftCube";
import { BufferGeometryUtils } from "three/examples/jsm/utils/BufferGeometryUtils";

export class Ground extends THREE.Group {
    constructor(size, height) {

        super();

        this.waterLevel = 4;

        //Generate tab
        const perlintab = this.generateNoise(size, height);

        this.createBoxes(perlintab, size);
    }

    generateNoise(size, height) {

        const noise2D = makeNoise2D(Date.now());

        let result = new Array(size * size);
        let i;
        //1 = no zoom
        let zoomFactor = 0.1;
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                i = (x + y * size);
                result[i] = Math.round((noise2D(x * zoomFactor, y * zoomFactor) + 1) * 0.5 * height);
            }
        }

        //For water
        result.forEach((v, i) => {
            if (v < this.waterLevel) {
                result[i] = this.waterLevel;
            }
        })

        console.table(Math.min(...result), Math.max(...result));

        return result;
    }

    createBoxes(perlintab, size) {
        //Crée un cube
        let cubeMaterial;

        let perlinValue;

        let cube;
        let cubes = [];
        let groundGeometry;

        for (let i = 0; i < size; i++) {

            for (let j = 0; j < size; j++) {

                perlinValue = perlintab[i * size + j];

                for (let k = 0; k < perlinValue; k++) {

                    if (k < this.waterLevel) {
                        cube = new MinecraftCube(0);
                    } else if (k == perlinValue - 1) {
                        cube = new MinecraftCube(2);
                    } else {
                        cube = new MinecraftCube(1);
                    }

                    cube.translate(i, k, j);

                    cubes.push(new THREE.BufferGeometry().fromGeometry(cube));
                    cube.dispose();
                }
            }
        }

        groundGeometry = BufferGeometryUtils.mergeBufferGeometries(cubes);

        let texture = new THREE.TextureLoader().load('textures/atlas.png');
        //let texture = new THREE.TextureLoader().load('textures/test.jpg');
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.LinearMipmapLinearFilter;

        cubeMaterial = new THREE.MeshLambertMaterial();
        cubeMaterial.vertexColors = THREE.VertexColors;
        cubeMaterial.map = texture;

        // now we got 1 mega big mesh with 10 000 cubes in it
        let mesh = new THREE.Mesh(groundGeometry, cubeMaterial);
        mesh.receiveShadow = true;
        mesh.castShadow = true;
        this.add(mesh);
    }
}