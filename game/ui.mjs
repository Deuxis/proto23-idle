import GameState from "./GameState.mjs"
import { game } from "./main.mjs"
import settings from "./settings.mjs"
const root = document.getElementById('gameContainer')

export const hiddenElements = {
	weather: true,
	time: true,
	location: true,
}

/**
 * Run a function and render after
 * @param {Function} func
 */
const withRender = (func) => {
	const result = func()
	render(game.gameState)
	return result
}

/**
 * Create element with optional id, CSS classes and style
 * @param {string} tagName
 * @param {{id?: string, classes?: string[], style?: object}} [options] 
 * @returns {HTMLElement}
 */
const createElement = (tagName, { id, classes, style } = {}) => {
	/** @type {HTMLElement} */
	const result = document.createElement(tagName)
	if (id) result.id = id
	if (classes) result.className = classes.join(' ')
	if (style) {
		for (const [styleKey, styleVal] of Object.entries(style)) {
			result.style[styleKey] = styleVal
		}
	}
	return result
}
const createTextNode = (str) => document.createTextNode(str)
const appendTextNode = (elem, str) => elem.appendChild(createTextNode(str))

/** 
 * Bottom-center screen describing current situation and possible actions 
 * @param {GameState} state
 */
const renderControlView = (state) => {
	const view = createElement('div', { id: 'ctrmg' })
	// Top bar with location, weather and time
	{
		const time = state.time
		const overviewBar = createElement('div', { id: 'ctrm_1' })
		view.appendChild(overviewBar)
		const container = createElement('div')
		overviewBar.appendChild(container)
		if (!hiddenElements.location) {
			const location = createElement('div', { id: 'ctr_l', style: { opacity: 1 } })
			container.appendChild(location)
			location.appendChild(createTextNode('Location:'))
			const locationDisplay = createElement('div')
			location.appendChild(locationDisplay)
			const locationSpan1 = createElement('span')
			locationDisplay.appendChild(locationSpan1)
			locationSpan1.appendChild(createTextNode(`|${state.location.name}|`))
			const locationSpan2 = createElement('span')
			locationDisplay.appendChild(locationSpan2)
		}
		if (!hiddenElements.weather) {
			// const { seasonColor, season, weather, weatherIcon, moonPhase } = state.weather
			const season = time.season
			const weather = state.weather
			const weatherDiv = createElement('div', { id: 'ctr_w' })
			container.appendChild(weatherDiv)
			const seasonSmall = createElement('small', { style: { color: season.color } })
			weatherDiv.appendChild(seasonSmall)
			appendTextNode(seasonSmall, `[${season.name.jp}]`)
			const weatherText = createElement('span')
			weatherDiv.appendChild(weatherText)
			appendTextNode(weatherText, weather.name)
			const weatherIconSpan = createElement('span')
			weatherDiv.appendChild(weatherIconSpan)
			appendTextNode(weatherIconSpan, weather.icon)
			const moonPhaseSpan = createElement('span')
			weatherDiv.appendChild(moonPhaseSpan)
			appendTextNode(moonPhaseSpan, time.moonPhase.icon)
		}
		if (!hiddenElements.time) {
			const timeDiv = createElement('div', { id: 'ctr_t' })
			container.appendChild(timeDiv)
			const daySmall = createElement('small')
			timeDiv.appendChild(daySmall)
			appendTextNode(daySmall, time.dayOfTheWeek)
			appendTextNode(timeDiv, ' ' + time.dateTimeString)
		}
	}
	// Situation and options display
	{
		const situationState = state.location.currentSituation.currentState
		const containerOuter = createElement('div')
		view.appendChild(containerOuter)
		const containerInner = createElement('div')
		containerOuter.appendChild(containerInner)
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
			optionDiv.addEventListener('click', () => (withRender(option.onChoose)))
			appendTextNode(optionDiv, option.text)
		}
	}
	return view
}

const genLoadingScreen = () => {
	const loading = createElement('div')
	loading.className = 'loadingContainer'
	const loadingSpan = createElement('span')
	loadingSpan.appendChild(createTextNode('LOADING'))
	loading.appendChild(loadingSpan)
	return loading
}

const decorateGameContainer = (gameContainer) => {
	gameContainer.style.background = settings.mainBG
}

export const render = (gameState) => {
	root.replaceChildren(renderControlView(gameState))
}

export const init = () => {
	/*
	 * ATM the loading screen won't even display unless something goes wrong
	 * in the process of rendering the main UI.
	 * Leaving it in case that happens (TEMP for dev purposes),
	 * or I make the main UI rendering async with perceptible delay.
	 */
	root.replaceChildren(genLoadingScreen())
	decorateGameContainer(root)
}