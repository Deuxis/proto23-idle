import GameState from "../GameState.mjs"
import { game } from "../main.mjs"
import { appendTextNode, createElement, createTextNode, hiddenElements } from "./ui.mjs"

/**
 * Holds the nodes the contents of which may need updating.
 * Assigned by a render function, mutated by an update function.
 */
const reactive = {
	location: {
		/** @type {HTMLElement} */
		container: null,
		/** @type {Text} */
		name: null,
	},
	season: {
		/** @type {HTMLElement} */
		container: null,
		/** @type {Text} */
		name: null,
	},
	weather: {
		/** @type {HTMLElement} */
		outerContainer: null,
		/** @type {HTMLElement} */
		innerContainer: null,
		/** @type {Text} */
		name: null,
		/** @type {Text} */
		icon: null,
	},
	/** @type {Text} */
	moonPhase: null,
	time: {
		/** @type {HTMLElement} */
		container: null,
		/** @type {Text} */
		dayOfTheWeek: null,
		/** @type {Text} */
		time: null,
	},
	/** @type {HTMLElement} */
	situationContainer: null,
}

export const updateVisibility = () => {
	reactive.location.container.style.visibility = hiddenElements.location ? 'hidden' : null
	reactive.weather.outerContainer.style.visibility = hiddenElements.weather ? 'hidden' : null
	reactive.time.container.style.visibility = hiddenElements.time ? 'hidden' : null
}
export const updateLocation = () => {
	reactive.location.name.textContent = game.gameState.location.name
}
export const updateSeason = () => {
	reactive.season.container.style.color = game.gameState.time.season.color
	reactive.season.name.textContent = game.gameState.time.season.name.jp
}
export const updateWeather = () => {
	reactive.weather.innerContainer.style.color = game.gameState.weather.color
	reactive.weather.name.textContent = game.gameState.weather.name
	reactive.weather.icon.textContent = game.gameState.weather.icon
}
export const updateMoonPhase = () => reactive.moonPhase.textContent = game.gameState.time.moonPhase.icon
export const updateTime = () => {
	reactive.time.dayOfTheWeek.textContent = game.gameState.time.dayOfTheWeek
	reactive.time.time.textContent = ' ' + game.gameState.time.dateTimeString
}
// Fuck it, we're re-rendering this one
export const updateSituation = (situation) => reactive.situationContainer?.replaceChildren(renderSituation(situation))

const renderSituation = (situation) => {
	const situationState = situation.currentState
	const containerInner = createElement('div')
	const situationDisplay = createElement('div', { id: 'ctrm_2' })
	containerInner.appendChild(situationDisplay)
	// Description of the situation
	const descriptionDiv = createElement('div', { id: 'chs' })
	situationDisplay.appendChild(descriptionDiv)
	appendTextNode(descriptionDiv, situationState.text)
	// Options
	for (const option of situationState.options) {
		const optionDiv = createElement('div', { classes: ['chs'] })
		situationDisplay.appendChild(optionDiv)
		optionDiv.addEventListener('click', option.onChoose)
		appendTextNode(optionDiv, option.text)
	}

	return containerInner
}

/** 
 * Bottom-center screen describing current situation and possible actions 
 * @param {GameState} state
 */
export const renderControlView = (state) => {
	const view = createElement('div', { id: 'ctrmg' })
	// Top bar with location, weather and time
	{
		const time = state.time
		const overviewBar = createElement('div', { id: 'ctrm_1' })
		view.appendChild(overviewBar)
		const container = createElement('div')
		overviewBar.appendChild(container)
		{
			reactive.location.container = createElement('div', { id: 'ctr_l', style: { opacity: 1 } })
			container.appendChild(reactive.location.container)
			reactive.location.container.appendChild(createTextNode('Location:'))
			if (hiddenElements.location) reactive.location.container.style.visibility = 'hidden'
			const locationDisplay = createElement('div')
			reactive.location.container.appendChild(locationDisplay)
			const locationSpan1 = createElement('span')
			locationDisplay.appendChild(locationSpan1)
			reactive.location.name = locationSpan1.appendChild(createTextNode(`|${state.location.name}|`))
			const locationSpan2 = createElement('span')
			locationDisplay.appendChild(locationSpan2)
		}
		{
			const season = time.season
			const weather = state.weather
			reactive.weather.outerContainer = createElement('div', { id: 'ctr_w' })
			container.appendChild(reactive.weather.outerContainer)
			if (hiddenElements.weather) reactive.weather.outerContainer.style.visibility = 'hidden'
			reactive.season.container = createElement('small', { style: { color: season.color } })
			reactive.weather.outerContainer.appendChild(reactive.season.container)
			reactive.season.name = appendTextNode(reactive.season.container, `[${season.name.jp}]`)
			reactive.weather.innerContainer = createElement('span', { style: { color: weather.color } })
			reactive.weather.outerContainer.appendChild(reactive.weather.innerContainer)
			reactive.weather.name = appendTextNode(reactive.weather.innerContainer, weather.name)
			const weatherIconSpan = createElement('span')
			reactive.weather.outerContainer.appendChild(weatherIconSpan)
			reactive.weather.icon = appendTextNode(weatherIconSpan, weather.icon)
			const moonPhaseSpan = createElement('span')
			reactive.weather.outerContainer.appendChild(moonPhaseSpan)
			reactive.moonPhase = appendTextNode(moonPhaseSpan, time.moonPhase.icon)
		}
		{
			reactive.time.container = createElement('div', { id: 'ctr_t' })
			container.appendChild(reactive.time.container)
			if (hiddenElements.time) reactive.time.container.style.visibility = 'hidden'
			const daySmall = createElement('small')
			reactive.time.container.appendChild(daySmall)
			reactive.time.dayOfTheWeek = appendTextNode(daySmall, time.dayOfTheWeek)
			reactive.time.time = appendTextNode(reactive.time.container, ' ' + time.dateTimeString)
		}
	}
	// Situation and options display
	{
		reactive.situationContainer = createElement('div')
		updateSituation(state.location.currentSituation)
		view.appendChild(reactive.situationContainer)
	}
	return view
}