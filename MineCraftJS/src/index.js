import { World3D } from "./World3D";

console.log("START");
const WORLD_SIZE = 100;
const WORLD_HEIGHT = 20;
let world = new World3D(WORLD_SIZE, WORLD_HEIGHT);

window.addEventListener('resize', world.onWindowResize.bind(world));