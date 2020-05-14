import * as THREE from "three";

export class MinecraftCube extends THREE.BoxGeometry {
    constructor(type) {
        super();

        this.type = type;

        if (type == 0) {
            this.makeWaterUVs();
        }

        if (type == 1) {
            this.makeMiddleCubeUVs();
        }

        if (type == 2) {
            this.makeTopCubeUVs();
        }
    }

    makeTopCubeUVs() {

        this.faces[0].vertexColors = [new THREE.Color(0xff0000), new THREE.Color(0x00ff00), new THREE.Color(0x0000ff)];
        this.faces[1].vertexColors = [new THREE.Color(0x00ff00), new THREE.Color(0xff0000), new THREE.Color(0x0000ff)];
        this.faces[2].vertexColors = [new THREE.Color(0xffffff), new THREE.Color(0xffffff), new THREE.Color(0xffffff)];
        this.faces[3].vertexColors = [new THREE.Color(0xffffff), new THREE.Color(0xffffff), new THREE.Color(0xffffff)];
        this.faces[4].vertexColors = [new THREE.Color(0xffffff), new THREE.Color(0xffffff), new THREE.Color(0xffffff)];
        this.faces[5].vertexColors = [new THREE.Color(0xffffff), new THREE.Color(0xffffff), new THREE.Color(0xffffff)];
        this.faces[6].vertexColors = [new THREE.Color(0xffffff), new THREE.Color(0xffffff), new THREE.Color(0xffffff)];
        this.faces[7].vertexColors = [new THREE.Color(0xffffff), new THREE.Color(0xffffff), new THREE.Color(0xffffff)];
        this.faces[8].vertexColors = [new THREE.Color(0xffffff), new THREE.Color(0xffffff), new THREE.Color(0xffffff)];
        this.faces[9].vertexColors = [new THREE.Color(0xffffff), new THREE.Color(0xffffff), new THREE.Color(0xffffff)];
        this.faces[10].vertexColors = [new THREE.Color(0xffffff), new THREE.Color(0xffffff), new THREE.Color(0xffffff)];
        this.faces[11].vertexColors = [new THREE.Color(0xffffff), new THREE.Color(0xffffff), new THREE.Color(0xffffff)];

        // right
        this.faceVertexUvs[0][0] = [new THREE.Vector2(0, 0.25), new THREE.Vector2(0, 0), new THREE.Vector2(1, 0.25)];
        this.faceVertexUvs[0][1] = [new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 0.25)];
        // left
        this.faceVertexUvs[0][2] = [new THREE.Vector2(0, 0.25), new THREE.Vector2(0, 0), new THREE.Vector2(1, 0.25)];
        this.faceVertexUvs[0][3] = [new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 0.25)];
        // top
        this.faceVertexUvs[0][4] = [new THREE.Vector2(0, 0.5), new THREE.Vector2(0, 0.25), new THREE.Vector2(1, 0.5)];
        this.faceVertexUvs[0][5] = [new THREE.Vector2(0, 0.25), new THREE.Vector2(1, 0.25), new THREE.Vector2(1, 0.5)];
        // bottom
        this.faceVertexUvs[0][6] = [new THREE.Vector2(0, 0.75), new THREE.Vector2(0, 0.5), new THREE.Vector2(1, 0.75)];
        this.faceVertexUvs[0][7] = [new THREE.Vector2(0, 0.5), new THREE.Vector2(1, 0.5), new THREE.Vector2(1, 0.75)];
        // front
        this.faceVertexUvs[0][8] = [new THREE.Vector2(0, 0.25), new THREE.Vector2(0, 0), new THREE.Vector2(1, 0.25)];
        this.faceVertexUvs[0][9] = [new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 0.25)];
        // back
        this.faceVertexUvs[0][10] = [new THREE.Vector2(0, 0.25), new THREE.Vector2(0, 0), new THREE.Vector2(1, 0.25)];
        this.faceVertexUvs[0][11] = [new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 0.25)];
    }

    makeMiddleCubeUVs() {
        // right
        this.faceVertexUvs[0][0] = [new THREE.Vector2(0, 0.75), new THREE.Vector2(0, 0.5), new THREE.Vector2(1, 0.75)];
        this.faceVertexUvs[0][1] = [new THREE.Vector2(0, 0.5), new THREE.Vector2(1, 0.5), new THREE.Vector2(1, 0.75)];
        // left
        this.faceVertexUvs[0][2] = [new THREE.Vector2(0, 0.75), new THREE.Vector2(0, 0.5), new THREE.Vector2(1, 0.75)];
        this.faceVertexUvs[0][3] = [new THREE.Vector2(0, 0.5), new THREE.Vector2(1, 0.5), new THREE.Vector2(1, 0.75)];
        // top
        this.faceVertexUvs[0][4] = [new THREE.Vector2(0, 0.75), new THREE.Vector2(0, 0.5), new THREE.Vector2(1, 0.75)];
        this.faceVertexUvs[0][5] = [new THREE.Vector2(0, 0.5), new THREE.Vector2(1, 0.5), new THREE.Vector2(1, 0.75)];
        // bottom
        this.faceVertexUvs[0][6] = [new THREE.Vector2(0, 0.75), new THREE.Vector2(0, 0.5), new THREE.Vector2(1, 0.75)];
        this.faceVertexUvs[0][7] = [new THREE.Vector2(0, 0.5), new THREE.Vector2(1, 0.5), new THREE.Vector2(1, 0.75)];
        // front
        this.faceVertexUvs[0][8] = [new THREE.Vector2(0, 0.75), new THREE.Vector2(0, 0.5), new THREE.Vector2(1, 0.75)];
        this.faceVertexUvs[0][9] = [new THREE.Vector2(0, 0.5), new THREE.Vector2(1, 0.5), new THREE.Vector2(1, 0.75)];
        // back
        this.faceVertexUvs[0][10] = [new THREE.Vector2(0, 0.75), new THREE.Vector2(0, 0.5), new THREE.Vector2(1, 0.75)];
        this.faceVertexUvs[0][11] = [new THREE.Vector2(0, 0.5), new THREE.Vector2(1, 0.5), new THREE.Vector2(1, 0.75)];
    }

    makeWaterUVs() {
        // right
        this.faceVertexUvs[0][0] = [new THREE.Vector2(0, 1), new THREE.Vector2(0, 0.75), new THREE.Vector2(1, 1)];
        this.faceVertexUvs[0][1] = [new THREE.Vector2(0, 0.75), new THREE.Vector2(1, 0.75), new THREE.Vector2(1, 1)];
        // left
        this.faceVertexUvs[0][2] = [new THREE.Vector2(0, 1), new THREE.Vector2(0, 0.75), new THREE.Vector2(1, 1)];
        this.faceVertexUvs[0][3] = [new THREE.Vector2(0, 0.75), new THREE.Vector2(1, 0.75), new THREE.Vector2(1, 1)];
        // top
        this.faceVertexUvs[0][4] = [new THREE.Vector2(0, 1), new THREE.Vector2(0, 0.75), new THREE.Vector2(1, 1)];
        this.faceVertexUvs[0][5] = [new THREE.Vector2(0, 0.75), new THREE.Vector2(1, 0.75), new THREE.Vector2(1, 1)];
        // bottom
        this.faceVertexUvs[0][6] = [new THREE.Vector2(0, 1), new THREE.Vector2(0, 0.75), new THREE.Vector2(1, 1)];
        this.faceVertexUvs[0][7] = [new THREE.Vector2(0, 0.75), new THREE.Vector2(1, 0.75), new THREE.Vector2(1, 1)];
        // front
        this.faceVertexUvs[0][8] = [new THREE.Vector2(0, 1), new THREE.Vector2(0, 0.75), new THREE.Vector2(1, 1)];
        this.faceVertexUvs[0][9] = [new THREE.Vector2(0, 0.75), new THREE.Vector2(1, 0.75), new THREE.Vector2(1, 1)];
        // back
        this.faceVertexUvs[0][10] = [new THREE.Vector2(0, 1), new THREE.Vector2(0, 0.75), new THREE.Vector2(1, 1)];
        this.faceVertexUvs[0][11] = [new THREE.Vector2(0, 0.75), new THREE.Vector2(1, 0.75), new THREE.Vector2(1, 1)];
    }
}