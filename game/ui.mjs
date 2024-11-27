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
/**
 * Create and append element with optional id, CSS classes and style
 * @param {HTMLElement} elem
 * @param {[string, {id?: string, classes?: string[], style?: object}?]} [args] 
 * @returns {HTMLElement}
 */
const appendElement = (elem, ...args) => elem.appendChild(createElement(...args))
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
		{
			const location = createElement('div', { id: 'ctr_l', style: { opacity: 1 } })
			container.appendChild(location)
			location.appendChild(createTextNode('Location:'))
			if (hiddenElements.location) location.style.visibility = 'hidden'
			const locationDisplay = createElement('div')
			location.appendChild(locationDisplay)
			const locationSpan1 = createElement('span')
			locationDisplay.appendChild(locationSpan1)
			locationSpan1.appendChild(createTextNode(`|${state.location.name}|`))
			const locationSpan2 = createElement('span')
			locationDisplay.appendChild(locationSpan2)
		}
		{
			// const { seasonColor, season, weather, weatherIcon, moonPhase } = state.weather
			const season = time.season
			const weather = state.weather
			const weatherDiv = createElement('div', { id: 'ctr_w' })
			container.appendChild(weatherDiv)
			if (hiddenElements.weather) container.style.visibility = 'hidden'
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
		{
			const timeDiv = createElement('div', { id: 'ctr_t' })
			container.appendChild(timeDiv)
			if (hiddenElements.time) container.style.visibility = 'hidden'
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

/** 
 * Top-left screen describing your character status 
 * @param {GameState} state
 */
const renderCharacterScreen = (state) => {
	const you = state.you
	const view = createElement('div', { id: 'd1', classes: ['d'] })
	// Everything except current effects is inside this unnamed div container
	const container = createElement('div')
	view.appendChild(container)
	const nameDivOuter = createElement('div', { classes: ['d2'] })
	container.appendChild(nameDivOuter)
	const nameDivInner = createElement('div')
	nameDivOuter.appendChild(nameDivInner)
	appendTextNode(nameDivInner, you.name)
	const nameInput = createElement('input', { id: 'nch' })
	nameDivOuter.appendChild(nameInput)
	const lvlTitleDiv = appendElement(container, 'div', { classes: ['d3'] })
	appendTextNode(lvlTitleDiv, `lvl:${you.level} '${you.title.name}'`)
	const hpDivOuter = appendElement(container, 'div', { classes: ['hp'] })
	hpDivOuter.style.width = `${(you.hp / you.maxHp) * 100}%`
	const hpDivInner = appendElement(hpDivOuter, 'div', { classes: ['hpp'] })
	appendTextNode(hpDivInner, `hp: ${you.hp}/${you.maxHp}`)
	const expDivOuter = appendElement(container, 'div', { classes: ['exp'] })
	expDivOuter.style.width = `${(you.exp / you.maxExp) * 100}%`
	const expDivInner = appendElement(expDivOuter, 'div', { id: 'expp' })
	appendTextNode(expDivInner, `exp: ${you.exp}/${you.maxExp}`)
	const energyDivOuter = appendElement(container, 'div', { classes: ['en'] })
	energyDivOuter.style.width = `${(you.energy / you.maxEnergy) * 100}%`
	const energyDivInner = appendElement(energyDivOuter, 'div', { id: 'enn' })
	appendTextNode(energyDivInner, `energy: ${you.energy}/${you.maxEnergy} eff: ${Math.round(you.efficiency * 100)}%`)
	return view
}

const renderLoadingScreen = () => {
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
	root.replaceChildren(renderCharacterScreen(gameState), renderControlView(gameState))
}

export const init = () => {
	/*
	 * ATM the loading screen won't even display unless something goes wrong
	 * in the process of rendering the main UI.
	 * Leaving it in case that happens (TEMP for dev purposes),
	 * or I make the main UI rendering async with perceptible delay.
	 */
	root.replaceChildren(renderLoadingScreen())
	decorateGameContainer(root)
}