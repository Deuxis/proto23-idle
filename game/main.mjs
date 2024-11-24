import { init as initUi } from "./ui.mjs"

class Game {
	constructor() {
		initUi()
	}
}

export const game = new Game()