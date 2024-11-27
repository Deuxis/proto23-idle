import GameState from "./GameState.mjs"
import { init as initUi, render } from "./ui/ui.mjs"

export class Game {
	constructor() {
		initUi()
		this.gameState = new GameState()
		render(this.gameState)
	}
}

export const game = new Game()