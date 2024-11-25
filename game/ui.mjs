import settings from "./settings.mjs"
const root = document.getElementById('gameContainer')

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

/** Bottom-center screen describing current situation and possible actions */
const renderControlView = (state) => {
	const view = createElement('div', { id: 'ctrmg' })
	// Top bar with location, weather and time
	{
		const overviewBar = createElement('div', { id: 'ctrm_1' })
		view.appendChild(overviewBar)
		const container = createElement('div')
		overviewBar.appendChild(container)
		{
			const location = createElement('div', { id: 'ctr_l', style: { opacity: 1 } })
			container.appendChild(location)
			location.appendChild(createTextNode('Location:'))
			const locationDisplay = createElement('div')
			location.appendChild(locationDisplay)
			const locationSpan1 = createElement('span')
			locationDisplay.appendChild(locationSpan1)
			locationSpan1.appendChild(createTextNode(`|${state.location}|`))
			const locationSpan2 = createElement('span')
			locationDisplay.appendChild(locationSpan2)
		}
		{
			const { seasonColor, season, weather, weatherIcon, moonPhase } = state.weather
			const weatherDiv = createElement('div', { id: 'ctr_w' })
			container.appendChild(weatherDiv)
			const seasonSmall = createElement('small', { style: { color: seasonColor } })
			weatherDiv.appendChild(seasonSmall)
			appendTextNode(seasonSmall, `[${season}]`)
			const weatherText = createElement('span')
			weatherDiv.appendChild(weatherText)
			appendTextNode(weatherText, weather)
			const weatherIconSpan = createElement('span')
			weatherDiv.appendChild(weatherIconSpan)
			appendTextNode(weatherIconSpan, weatherIcon)
			const moonPhaseSpan = createElement('span')
			weatherDiv.appendChild(moonPhaseSpan)
			appendTextNode(moonPhaseSpan, moonPhase)
		}
		{
			const time = createElement('div', { id: 'ctr_t' })
			container.appendChild(time)
			const daySmall = createElement('small')
			time.appendChild(daySmall)
			appendTextNode(daySmall, state.time.dayOfTheWeek)
			appendTextNode(time, state.time.timeString)
		}
	}
	// Situation and options display
	{
		const { description, options } = state.situation
		const containerOuter = createElement('div')
		view.appendChild(containerOuter)
		const containerInner = createElement('div')
		containerOuter.appendChild(containerInner)
		const situationDisplay = createElement('div', { id: 'ctrm_2' })
		containerInner.appendChild(situationDisplay)
		// Description of the situation
		const descriptionDiv = createElement('div', { id: 'chs' })
		situationDisplay.appendChild(descriptionDiv)
		appendTextNode(descriptionDiv, description)
		// Options
		for (const option of options) {
			const optionDiv = createElement('div', { classes: ['chs'] })
			situationDisplay.appendChild(optionDiv)
			appendTextNode(optionDiv, option)
		}
	}
	return view
}

const testState = {
	controlView: {
		location: 'Dojo, training area',
		weather: {
			seasonColor: 'springgreen',
			season: '春', // Spring
			weather: 'Drizzle',
			weatherIcon: '🌧',
			moonPhase: '🌗',
		},
		time: {
			dayOfTheWeek: 'Wednesday',
			timeString: '652/4/15 17:46',
		},
		situation: {
			description: 'Select the difficulty',
			options: [
				'Easiest',
				'Easy',
				'Normal',
			],
		},
	},
}

const ui = {
	controlView: renderControlView(testState.controlView)
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

const genMainUi = () => {
	return ui.controlView
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
	root.replaceChildren(genMainUi())
}