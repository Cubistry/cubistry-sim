import { CubeController } from '../CubeController';

export class WhiteCrossSolver {
	private cube: CubeController;

	constructor(cube: CubeController) {
		this.cube = cube;
	}

	public solve(): void {
		console.log("Starting to solve white cross...");

		// Example dummy logic: (You will replace this with real detection)
		this.cube.move("F' U L' U'"); // Just an example move
		console.log("Move: F' U L' U'");
		console.log("Reason: Aligning white edge to the bottom.");

		// You will later detect white edges, calculate best moves, and explain
	}

	public findWhiteEdges(): Array<{ faces: [string, string], stickers: [number, number] }> {
		const cubeState = this.cube.getState(); // 54 character string
		const whiteEdges: Array<{ faces: [string, string], stickers: [number, number] }> = [];

		const edges: [number, string, number, string][] = [
			[1, 'U', 46, 'B'],  // U-B
			[3, 'U', 37, 'L'],  // U-L
			[5, 'U', 10, 'R'],  // U-R
			[7, 'U', 19, 'F'],  // U-F
			[12, 'R', 23, 'F'], // R-F
			[14, 'R', 50, 'B'], // R-B
			[16, 'R', 30, 'D'], // R-D
			[21, 'F', 39, 'L'], // F-L
			[25, 'F', 32, 'D'], // F-D
			[41, 'L', 43, 'D'], // L-D
			[48, 'B', 52, 'D'], // B-D
			[39, 'L', 48, 'B']  // L-B
		];

		for (const [idx1, face1, idx2, face2] of edges) {
			const color1 = cubeState[idx1];
			const color2 = cubeState[idx2];

			if (color1 === 'W' || color2 === 'W') {
				whiteEdges.push({
					faces: [face1, face2],
					stickers: [idx1, idx2]
				});
			}
		}

		return whiteEdges;
	}

}
