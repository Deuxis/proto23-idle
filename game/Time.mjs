import { updateTime } from "./ui/ui.mjs"

const SEASONS_IN_YEAR = 4
const DAYS_IN_SEASON = 90
const HOURS_IN_DAY = 24
const MINUTES_IN_HOUR = 60
const MINUTES_IN_DAY = MINUTES_IN_HOUR * HOURS_IN_DAY
const MINUTES_IN_SEASON = MINUTES_IN_DAY * DAYS_IN_SEASON
const MINUTES_IN_YEAR = MINUTES_IN_SEASON * SEASONS_IN_YEAR
const STARTING_TIME = 338144100 // Magic number taken directly from old code

const MOON_PHASES = {
	halfMoon: { icon: '🌗' }
}
const DAYS_OF_THE_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const SEASONS = {
	spring: {
		name: {
			en: 'Spring',
			jp: '春',
		},
		color: 'springgreen',
	},
}

export class Time {
	#lastTimestamp = performance.now()
	/** Miliseconds leftover from the last time update. (Since it adds full seconds.) */
	#msPending = 0
	/** Tracks current game time in in-game minutes, which are IRL seconds */
	#time
	/** requestAnimationFrame request ID, used to stop the clock */
	#tickerId
	constructor(time = STARTING_TIME) {
		this.#time = time

		this.startTicker()
	}

	tick(now) {
		const msPassed = now - this.#lastTimestamp
		const msTotal = msPassed + this.#msPending
		const secondsPassed = Math.floor(msTotal / 1000)
		this.#msPending = msTotal % 1000
		// Run addTime only if secondsPassed > 0
		secondsPassed && this.addTime(secondsPassed)
		this.#lastTimestamp = now
	}

	/* Start the update ticker. Using requestAnimationFrame:
	 * Pros:
	 * - best possible clock sync, a timeout or interval would lag behind actual time,
	 *   by almost its duration at worst case.
	 * Cons:
	 * - no time updates when game is not being graphically rendered
	 *   (fine for now because we can just catch up when player returns,
	 *   but may cause problems when battles and other more complicated time events are implemented)
	 * - runs *a lot* on high framerate monitors, but that's fine since tick() is pretty much free
	 */
	startTicker() {
		const step = (now) => {
			this.tick(now)
			this.#tickerId = requestAnimationFrame(step)
		}
		this.#tickerId = requestAnimationFrame(step)
	}
	stopTicker() {
		cancelAnimationFrame(this.#tickerId)
		this.#tickerId = 0
	}

	addTime(secondsPassed) {
		this.#time += secondsPassed
		updateTime()
	}

	// TEMP: Ugh, I'm sure there's a better way, but not now
	toGameDateTime() {
		let time = Math.floor(this.#time)
		const year = Math.floor(time / MINUTES_IN_YEAR)
		time -= year * MINUTES_IN_YEAR
		const season = Math.floor(time / MINUTES_IN_SEASON)
		time -= season * MINUTES_IN_SEASON
		const day = Math.floor(time / MINUTES_IN_DAY)
		time -= day * MINUTES_IN_DAY
		const hour = Math.floor(time / MINUTES_IN_HOUR)
		time -= hour * MINUTES_IN_HOUR
		return { year, season, day, hour, minute: time }
	}

	toString() {
		return `${this.dayOfTheWeek} ${this.dateTimeString}`
	}

	get dateTimeString() {
		const { year, season, day, hour, minute } = this.toGameDateTime()
		const hourString = hour < 10 ? `0${hour}` : hour
		const minuteString = minute < 10 ? `0${minute}` : minute
		return `${year}/${season}/${day} ${hourString}:${minuteString}`
	}

	// TODO
	get moonPhase() { return MOON_PHASES.halfMoon }
	get dayOfTheWeek() { return DAYS_OF_THE_WEEK[0] }
	get season() { return SEASONS.spring }
}

export default Time