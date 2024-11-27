import * as creatures from './creatures/creatures.mjs'
import { game } from './main.mjs'
import * as ui from './ui/ui.mjs'

// Since atm we just have one global game object, these shorthands are more convenient
// than passing down parent objects down to state and accessing their methods via this.parent.parent.parent.method
const changeSituation = (...args) => game.gameState.location.changeSituation(...args)
const changeState = (...args) => game.gameState.location.currentSituation.changeState(...args)

/**
 * Location is 4-level:
 * 1. LocationHandler (NYI): Holds the current location, allows moving between them.
 * Currently we just hold the only location in the game in GameState so no need for it yet
 * 2. Location: Overall area, such as house, town, dojo
 * 3. Situation: sub-section of the location, such as beating dummies in dojo, accessing storage in house, talking to merchant
 * 4. state: state of the situation, such as the currently asked question and the available answers
 */

class Location {
	/**
	 * Situations map, contains constructors of possible situations
	 */
	static situations = {}
	/**
	 * @type {Situation}
	 */
	currentSituation

	constructor(situationId, stateId) {
		this.changeSituation(situationId, stateId)
	}

	changeSituation(situationId, stateId, ...args) {
		// @ts-ignore
		this.currentSituation = new this.constructor.situations[situationId](stateId, ...args)
		ui.updateSituation(this.currentSituation)
	}
}
class Situation {
	static battle = false
	static states = {}

	constructor(stateId) {
		this.changeState(stateId)
	}

	changeState(stateId, ...args) {
		// @ts-ignore
		this.currentState = this.constructor.states[stateId]
		this.currentState.onStart()
		ui.updateSituation(this)
	}
}

export class Dojo extends Location {
	static name = 'Dojo'
	get name() { return Dojo.name }

	constructor(situationId = 'WakingUp') {
		super(situationId)
	}

	static situations = {
		WakingUp: class WakingUp extends Situation {
			constructor(stateId = 'w1') {
				super(stateId)
			}
			static states = {
				w1: {
					text: '???: Kid',
					onStart: () => { },
					options: [{
						text: '"..."',
						onChoose: () => changeState('w2'),
					}],
				},
				w2: {
					text: '???: Quit daydreaming',
					onStart: () => { // Also unlock weather and time UI
						ui.hiddenElements.weather = false
						ui.hiddenElements.time = false
						ui.updateVisibility()
					},
					options: [{
						text: '"?"',
						onChoose: () => changeState('w3'),
					}],
				},
				w3: {
					text: '???: You have training to complete',
					onStart: () => { }, // Also unlock character UI
					options: [{
						text: '"!"',
						onChoose: () => changeState('w4'),
					}],
				},
				w4: {
					text: '???: Grab your stuff and get to it',
					onStart: () => {
						ui.hiddenElements.location = false
						ui.updateVisibility()
						// Also unlock inventory UI
					},
					options: [{
						text: '"..."',
						onChoose: () => changeState('difficultySelect'),
					}],
				},
				difficultySelect: {
					text: '"Select the difficulty"',
					onStart: () => { }, // Also unlock message log, contol view bottom panel, and get A Stick and 15 Cure Grass
					options: [{ // All options also unlock enemy UI and initiate battle
						text: '"Easiest"',
						onChoose: () => changeSituation('TrainingAreaEasiest'),
					}],
				},
			}
		},
		TrainingAreaEasiest: class TrainingAreaEasiest extends Situation {
			static battle = true
			static enemies = [creatures.TrainingDummy, creatures.StrawDummy]
			static battleWon = null
			remainingEnemies = 10
		},
	}
}