export class Creature {
	type = 'Evil'
	levelMin = 1
	levelMax = 1
	c = .5 // ??
	constructor(properties) {
		for (const [propKey, propVal] of properties) {
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