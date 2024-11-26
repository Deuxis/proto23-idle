import GameState from "./GameState.mjs"
import { init as initUi, render } from "./ui.mjs"

export class Game {
	constructor() {
		this.gameState = new GameState()
		initUi()
		render(this.gameState)
	}
}

export const game = new Game()