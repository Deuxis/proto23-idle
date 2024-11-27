import { Inventory } from "../Inventory.mjs"
import { Nobody } from "../titles.mjs"
import { Creature, CREATURE_TYPES } from "./creatures.mjs"

export class You extends Creature {
	standardName = 'You'
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
	energy = 150
	maxEnergy = 200
	/** @type {Inventory} */
	inventory
	title = new Nobody()
	minEfficiency = 0.25

	constructor(properties) {
		super(properties)
		this.inventory = this.inventory ? this.inventory : new Inventory()
	}

	get rank() { return 134839972492649 } // just a rank I rolled, TODO: replace with correct getter
	/**
	 * Efficiency is calculated from the percentage of energy,
	 * but there is some minimum efficiency reached at 0% energy. (default 25%)
	 * So 75% is the max conditional efficiency, actually calculated from energy percentage.
	 * Min efficiency is increased by a skill, and it also bumps up max efficiency,
	 * so with 30% min efficiency max efficiency attained at 100% energy is 105%.
	 * Meaning max conditional efficiency is a constant 75%.
	 * 
	 * To calculate final efficiency we must add min efficiency to (energy% * maxConditionalEfficiency).
	 * This is too cheap to cache and manage.
	 */
	get efficiency() {
		const maxConditionalEfficiency = 0.75
		const conditionalEfficiency = (this.energy / this.maxEnergy) * maxConditionalEfficiency
		return this.minEfficiency + conditionalEfficiency
	}

	heal(healAmount) {
		this.hp = Math.min(this.hp + healAmount, this.maxHp)
	}
}