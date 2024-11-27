import { Inventory } from "../Inventory.mjs"
import { Creature, CREATURE_TYPES } from "./creatures.mjs"

export class You extends Creature {
	name = 'You'
	type = CREATURE_TYPES.You
	level = 1
	hp = 39
	maxHp = 39
	str = 1
	agi = 1
	int = 1
	spd = 1
	exp = 0
	maxExp = 5
	energy = 200
	maxEnergy = 200
	/** @type {Inventory} */
	inventory

	constructor(properties) {
		super(properties)
		this.inventory = this.inventory ? this.inventory : new Inventory()
	}

	get rank() { return 134839972492649 } // just a rank I rolled, TODO: replace with correct getter

	heal(healAmount) {
		this.hp = Math.min(this.hp + healAmount, this.maxHp)
	}
}