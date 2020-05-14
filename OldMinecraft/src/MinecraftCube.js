import * as THREE from "three";

export class MinecraftCube extends THREE.BoxGeometry {
    constructor(type) {
        super();

        this.type = type;
        this.numTexture = 8;
        if (type == 0) {
            this.makeWaterUVs();
        }

        if (type == 1) {
            this.makeMiddleCubeUVs();
        }

        if (type == 2) {
            this.makeTopCubeUVs();
        }

        if (type == 3) {
            this.makeSnowUVs();
        }
    }

    makeTopCubeUVs() {

        //this.faces[0].vertexColors = [new THREE.Color(0xff0000), new THREE.Color(0x00ff00), new THREE.Color(0x0000ff)];
        //this.faces[1].vertexColors = [new THREE.Color(0x00ff00), new THREE.Color(0xff0000), new THREE.Color(0x0000ff)];
        //this.faces[2].vertexColors = [new THREE.Color(0xffffff), new THREE.Color(0xffffff), new THREE.Color(0xffffff)];
        //this.faces[3].vertexColors = [new THREE.Color(0xffffff), new THREE.Color(0xffffff), new THREE.Color(0xffffff)];
        //this.faces[4].vertexColors = [new THREE.Color(0xffffff), new THREE.Color(0xffffff), new THREE.Color(0xffffff)];
        //this.faces[5].vertexColors = [new THREE.Color(0xffffff), new THREE.Color(0xffffff), new THREE.Color(0xffffff)];
        //this.faces[6].vertexColors = [new THREE.Color(0xffffff), new THREE.Color(0xffffff), new THREE.Color(0xffffff)];
        //this.faces[7].vertexColors = [new THREE.Color(0xffffff), new THREE.Color(0xffffff), new THREE.Color(0xffffff)];
        //this.faces[8].vertexColors = [new THREE.Color(0xffffff), new THREE.Color(0xffffff), new THREE.Color(0xffffff)];
        //this.faces[9].vertexColors = [new THREE.Color(0xffffff), new THREE.Color(0xffffff), new THREE.Color(0xffffff)];
        //this.faces[10].vertexColors = [new THREE.Color(0xffffff), new THREE.Color(0xffffff), new THREE.Color(0xffffff)];
        //this.faces[11].vertexColors = [new THREE.Color(0xffffff), new THREE.Color(0xffffff), new THREE.Color(0xffffff)];

        // right
        this.faceVertexUvs[0][0] = [new THREE.Vector2(0, 1 / this.numTexture), new THREE.Vector2(0, 0), new THREE.Vector2(1, 1 / this.numTexture)];
        this.faceVertexUvs[0][1] = [new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 1 / this.numTexture)];
        // left
        this.faceVertexUvs[0][2] = [new THREE.Vector2(0, 1 / this.numTexture), new THREE.Vector2(0, 0), new THREE.Vector2(1, 1 / this.numTexture)];
        this.faceVertexUvs[0][3] = [new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 1 / this.numTexture)];
        // top
        this.faceVertexUvs[0][4] = [new THREE.Vector2(0, this.b(2)), new THREE.Vector2(0, 1 / this.numTexture), new THREE.Vector2(1, this.b(2))];
        this.faceVertexUvs[0][5] = [new THREE.Vector2(0, 1 / this.numTexture), new THREE.Vector2(1, 1 / this.numTexture), new THREE.Vector2(1, this.b(2))];
        // bottom
        this.faceVertexUvs[0][6] = [new THREE.Vector2(0, this.b(3)), new THREE.Vector2(0, this.b(2)), new THREE.Vector2(1, this.b(3))];
        this.faceVertexUvs[0][7] = [new THREE.Vector2(0, this.b(2)), new THREE.Vector2(1, this.b(2)), new THREE.Vector2(1, this.b(3))];
        // front
        this.faceVertexUvs[0][8] = [new THREE.Vector2(0, 1 / this.numTexture), new THREE.Vector2(0, 0), new THREE.Vector2(1, 1 / this.numTexture)];
        this.faceVertexUvs[0][9] = [new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 1 / this.numTexture)];
        // back
        this.faceVertexUvs[0][10] = [new THREE.Vector2(0, 1 / this.numTexture), new THREE.Vector2(0, 0), new THREE.Vector2(1, 1 / this.numTexture)];
        this.faceVertexUvs[0][11] = [new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 1 / this.numTexture)];
    }

    makeMiddleCubeUVs() {
        // right
        this.faceVertexUvs[0][0] = [new THREE.Vector2(0, this.b(3)), new THREE.Vector2(0, this.b(2)), new THREE.Vector2(1, this.b(3))];
        this.faceVertexUvs[0][1] = [new THREE.Vector2(0, this.b(2)), new THREE.Vector2(1, this.b(2)), new THREE.Vector2(1, this.b(3))];
        // left
        this.faceVertexUvs[0][2] = [new THREE.Vector2(0, this.b(3)), new THREE.Vector2(0, this.b(2)), new THREE.Vector2(1, this.b(3))];
        this.faceVertexUvs[0][3] = [new THREE.Vector2(0, this.b(2)), new THREE.Vector2(1, this.b(2)), new THREE.Vector2(1, this.b(3))];
        // top
        this.faceVertexUvs[0][4] = [new THREE.Vector2(0, this.b(3)), new THREE.Vector2(0, this.b(2)), new THREE.Vector2(1, this.b(3))];
        this.faceVertexUvs[0][5] = [new THREE.Vector2(0, this.b(2)), new THREE.Vector2(1, this.b(2)), new THREE.Vector2(1, this.b(3))];
        // bottom
        this.faceVertexUvs[0][6] = [new THREE.Vector2(0, this.b(3)), new THREE.Vector2(0, this.b(2)), new THREE.Vector2(1, this.b(3))];
        this.faceVertexUvs[0][7] = [new THREE.Vector2(0, this.b(2)), new THREE.Vector2(1, this.b(2)), new THREE.Vector2(1, this.b(3))];
        // front
        this.faceVertexUvs[0][8] = [new THREE.Vector2(0, this.b(3)), new THREE.Vector2(0, this.b(2)), new THREE.Vector2(1, this.b(3))];
        this.faceVertexUvs[0][9] = [new THREE.Vector2(0, this.b(2)), new THREE.Vector2(1, this.b(2)), new THREE.Vector2(1, this.b(3))];
        // back
        this.faceVertexUvs[0][10] = [new THREE.Vector2(0, this.b(3)), new THREE.Vector2(0, this.b(2)), new THREE.Vector2(1, this.b(3))];
        this.faceVertexUvs[0][11] = [new THREE.Vector2(0, this.b(2)), new THREE.Vector2(1, this.b(2)), new THREE.Vector2(1, this.b(3))];
    }

    makeWaterUVs() {
        // right
        this.faceVertexUvs[0][0] = [new THREE.Vector2(0, this.b(4)), new THREE.Vector2(0, this.b(3)), new THREE.Vector2(1, this.b(4))];
        this.faceVertexUvs[0][1] = [new THREE.Vector2(0, this.b(3)), new THREE.Vector2(1, this.b(3)), new THREE.Vector2(1, this.b(4))];
        // left
        this.faceVertexUvs[0][2] = [new THREE.Vector2(0, this.b(4)), new THREE.Vector2(0, this.b(3)), new THREE.Vector2(1, this.b(4))];
        this.faceVertexUvs[0][3] = [new THREE.Vector2(0, this.b(3)), new THREE.Vector2(1, this.b(3)), new THREE.Vector2(1, this.b(4))];
        // top
        this.faceVertexUvs[0][4] = [new THREE.Vector2(0, this.b(4)), new THREE.Vector2(0, this.b(3)), new THREE.Vector2(1, this.b(4))];
        this.faceVertexUvs[0][5] = [new THREE.Vector2(0, this.b(3)), new THREE.Vector2(1, this.b(3)), new THREE.Vector2(1, this.b(4))];
        // bottom
        this.faceVertexUvs[0][6] = [new THREE.Vector2(0, this.b(4)), new THREE.Vector2(0, this.b(3)), new THREE.Vector2(1, this.b(4))];
        this.faceVertexUvs[0][7] = [new THREE.Vector2(0, this.b(3)), new THREE.Vector2(1, this.b(3)), new THREE.Vector2(1, this.b(4))];
        // front
        this.faceVertexUvs[0][8] = [new THREE.Vector2(0, this.b(4)), new THREE.Vector2(0, this.b(3)), new THREE.Vector2(1, this.b(4))];
        this.faceVertexUvs[0][9] = [new THREE.Vector2(0, this.b(3)), new THREE.Vector2(1, this.b(3)), new THREE.Vector2(1, this.b(4))];
        // back
        this.faceVertexUvs[0][10] = [new THREE.Vector2(0, this.b(4)), new THREE.Vector2(0, this.b(3)), new THREE.Vector2(1, this.b(4))];
        this.faceVertexUvs[0][11] = [new THREE.Vector2(0, this.b(3)), new THREE.Vector2(1, this.b(3)), new THREE.Vector2(1, this.b(4))];
    }


    makeSnowUVs() {
        // right
        this.faceVertexUvs[0][0] = [new THREE.Vector2(0, this.b(5)), new THREE.Vector2(0, this.b(4)), new THREE.Vector2(1, this.b(5))];
        this.faceVertexUvs[0][1] = [new THREE.Vector2(0, this.b(4)), new THREE.Vector2(1, this.b(4)), new THREE.Vector2(1, this.b(5))];
        // left
        this.faceVertexUvs[0][2] = [new THREE.Vector2(0, this.b(5)), new THREE.Vector2(0, this.b(4)), new THREE.Vector2(1, this.b(5))];
        this.faceVertexUvs[0][3] = [new THREE.Vector2(0, this.b(4)), new THREE.Vector2(1, this.b(4)), new THREE.Vector2(1, this.b(5))];
        // top
        this.faceVertexUvs[0][4] = [new THREE.Vector2(0, this.b(5)), new THREE.Vector2(0, this.b(4)), new THREE.Vector2(1, this.b(5))];
        this.faceVertexUvs[0][5] = [new THREE.Vector2(0, this.b(4)), new THREE.Vector2(1, this.b(4)), new THREE.Vector2(1, this.b(5))];
        // bottom
        this.faceVertexUvs[0][6] = [new THREE.Vector2(0, this.b(5)), new THREE.Vector2(0, this.b(4)), new THREE.Vector2(1, this.b(5))];
        this.faceVertexUvs[0][7] = [new THREE.Vector2(0, this.b(4)), new THREE.Vector2(1, this.b(4)), new THREE.Vector2(1, this.b(5))];
        // front
        this.faceVertexUvs[0][8] = [new THREE.Vector2(0, this.b(5)), new THREE.Vector2(0, this.b(4)), new THREE.Vector2(1, this.b(5))];
        this.faceVertexUvs[0][9] = [new THREE.Vector2(0, this.b(4)), new THREE.Vector2(1, this.b(4)), new THREE.Vector2(1, this.b(5))];
        // back
        this.faceVertexUvs[0][10] = [new THREE.Vector2(0, this.b(5)), new THREE.Vector2(0, this.b(4)), new THREE.Vector2(1, this.b(5))];
        this.faceVertexUvs[0][11] = [new THREE.Vector2(0, this.b(4)), new THREE.Vector2(1, this.b(4)), new THREE.Vector2(1, this.b(5))];
    }

    b(index) {
        return (1 / this.numTexture) * index;
    }

}