export class Title {
	/** @type {string} */
	name
	/** @type {string} */
	description
	/** @type {number} */
	rank
}

/*
 * TBH since no title seems to hold any state, this whole thing could've been done
 * with a single Title class, and all titles as simple const instances of it,
 * similar to the old code. I decided not to do it, because:
 * 1. The assumption that no title holds any state might be wrong
 * 2. I or someone else may want to add a stateful title, such as one that grants a crit every 5 attacks
 * 3. This is consistent with the design all other modules (except UI, which is a singleton,
 * but I may change that too)
 */

export class Nobody extends Title {
	name = 'Nobody'
	description = 'Unremarkable someone trying to find his purpose in life'
	rank = 0
}