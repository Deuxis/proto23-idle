import { You } from "./creatures/You.mjs"
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
	location = new Dojo()
	time = new Time()
	weather = WEATHER.drizzle
	you = new You()
	/** @type {import('./creatures/creatures.mjs').Creature} */
	enemy = undefined
}

export default GameState