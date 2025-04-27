import { CubeController } from './CubeController';
import { WhiteCrossSolver } from './solvers/WhiteCrossSolver';

const myCube = new CubeController();
myCube.scramble();
myCube.printState();

const whiteCrossSolver = new WhiteCrossSolver(myCube);
const whiteEdges = whiteCrossSolver.findWhiteEdges();
console.log(whiteEdges);

myCube.printState();
