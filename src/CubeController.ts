import Cube from 'cubejs';

export class CubeController {
	private cube: any;

	constructor() {
		this.cube = new Cube();
	}

	/**
	 * Apply a move or sequence of moves to the cube
	 * @param moves string like "U R' F2"
	 */
	public move(moves: string): void {
		this.cube.move(moves);
	}

	/**
	 * Scramble the cube with random moves
	 * @param moveCount number of moves for scramble
	 */
	public scramble(moveCount: number = 20): void {
		const possibleMoves = ['U', "U'", 'U2', 'D', "D'", 'D2', 'F', "F'", 'F2', 'B', "B'", 'B2', 'L', "L'", 'L2', 'R', "R'", 'R2'];
		let scrambleMoves: string[] = [];
		for (let i = 0; i < moveCount; i++) {
			const move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
			scrambleMoves.push(move);
		}
		const scrambleString = scrambleMoves.join(' ');
		this.move(scrambleString);
		console.log(`Scramble applied: ${scrambleString}`);
	}

	/**
	 * Check if cube is solved
	 */
	public isSolved(): boolean {
		return this.cube.isSolved();
	}

	/**
	 * Get the current cube state as a string
	 */
	public getState(): string {
		return this.cube.asString();
	}

	/**
	 * Print the current state to console
	 */
	public printState(): void {
		console.log(this.getState());
	}

	/**
	 * Reset the cube to solved state
	 */
	public reset(): void {
		this.cube = Cube();
		console.log('Cube reset to solved state.');
	}
}
