import { World3D } from "./World3D";

console.log("START");

const WORLD_SIZE = 100;
const WORLD_HEIGHT = 20;
const DEBUG = true;

window.addEventListener("DOMContentLoaded", (e) => {
    console.log("DOM entièrement chargé et analysé");

    setTimeout(makeWorld, 1000);
});

function makeWorld() {
    const world = new World3D(WORLD_SIZE, WORLD_HEIGHT, DEBUG);
}