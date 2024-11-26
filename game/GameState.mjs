import { Dojo } from "./locations.mjs"
import Time from "./Time.mjs"
import { WEATHER } from "./weather.mjs"

/**
 * Dynamic state of the game world, such as current locations, character state, etc.
 * Passed to ui.render()
 * 
 * TODO: loading and saving game state
 */
export class GameState {
	constructor() {
		this.location = new Dojo()
		this.time = new Time()
		this.weather = WEATHER.drizzle
	}
}

export default GameState