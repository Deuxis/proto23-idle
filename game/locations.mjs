import * as creatures from './creatures.mjs'

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

	constructor(situationId, stateId) {
		this.changeSituation(situationId, stateId)
	}

	changeSituation(situationId, stateId, ...args) {
		// @ts-ignore
		this.currentSituation = new this.constructor.situations[situationId](this, stateId, ...args)
	}
}
class Situation {
	static battle = false
	static states = {}

	constructor(parentLocation, stateId) {
		this.parentLocation = parentLocation
		this.changeState(stateId)
	}

	changeState(stateId, ...args) {
		// @ts-ignore
		this.currentState = this.constructor.states['w1']
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
				super('w1')
			}
			static states = {
				w1: {
					text: '???: Kid',
					options: [{
						text: '"..."',
						onChoose: function () { this.changeState('w2') },
					}],
				},
				w2: {
					text: '???: Quit daydreaming',
					options: [{
						text: '"?"',
						onChoose: function () { this.changeState('w3') },
					}],
				},
				w3: {
					text: '???: You have training to complete',
					options: [{
						text: '"!"',
						onChoose: function () { this.changeState('w4') },
					}],
				},
				w4: {
					text: '???: Grab your stuff and get to it',
					options: [{
						text: '"..."',
						onChoose: function () { this.changeState('difficultySelect') },
					}],
				},
				difficultySelect: {
					text: '"Select the difficulty"',
					options: [{
						text: '"Easiest"',
						onChoose: function () { this.parentLocation.changeSituation('TrainingAreaEasiest') },
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