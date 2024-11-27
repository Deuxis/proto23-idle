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
	/** Tracks current game time in minutes, which are IRL seconds */
	#time
	constructor(time = STARTING_TIME) {
		this.#time = time
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