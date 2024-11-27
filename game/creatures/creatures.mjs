export const CREATURE_TYPES = {
	You: {
		name: 'You'
	},
	Evil: {
		name: 'Evil'
	},
}

export class Creature {
	static levelMin = 1
	static levelMax = 1
	static c = .5 // ??
	type = CREATURE_TYPES.Evil
	level = 1
	hp = 100
	maxHp = 100
	str = 1
	agi = 1
	int = 1
	spd = 1
	constructor(properties = {}) {
		for (const [propKey, propVal] of Object.entries(properties)) {
			this[propKey] = propVal
		}
	}
}

export class TrainingDummy extends Creature {
	name = 'Training dummy'
}
export class StrawDummy extends Creature {
	name = 'Straw dummy'
}