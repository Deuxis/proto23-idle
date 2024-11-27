import { game } from "../main.mjs"

class Item {
	stackable = false

	constructor(properties) {
		for (const [propKey, propVal] of Object.entries(properties)) {
			this[propKey] = propVal
		}
	}

	use() { }
	/** Callback provided by the holder that the item calls upon being used up or destroyed */
	destroy() { }
}

class ItemStack extends Item {
	stackable = true
	amount = 1

	removeOne() {
		this.amount -= 1
		if (this.amount < 1) {
			this.destroy()
		}
	}
}

class Medicine extends ItemStack {
	healAmount = 1

	use() {
		game.gameState.you.heal(this.healAmount)
		this.removeOne()
	}
}

export class CureGrass extends Medicine {
	healAmount = 7
}