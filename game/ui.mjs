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

const renderControlView = (state) => {
	const view = createElement('div', { id: 'ctrmg' })
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
			const weather = createElement('div', { id: 'ctr_w' })
			container.appendChild(weather)
			const seasonSmall = createElement('small', { style: { color: state.weather.seasonColor } })
			weather.appendChild(seasonSmall)
			appendTextNode(seasonSmall, `[${state.weather.season}]`)
			const weatherText = createElement('span')
			weather.appendChild(weatherText)
			appendTextNode(weatherText, state.weather.weather)
			const weatherIcon = createElement('span')
			weather.appendChild(weatherIcon)
			appendTextNode(weatherIcon, state.weather.weatherIcon)
			const moonPhase = createElement('span')
			weather.appendChild(moonPhase)
			appendTextNode(moonPhase, state.weather.moonPhase)
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