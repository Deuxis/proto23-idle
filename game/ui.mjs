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

const renderControlView = (controlState) => {
	const view = createElement('div', { id: 'ctrmg' })
	{
		const overviewBar = createElement('div', { id: 'ctrm_1' })
		view.appendChild(overviewBar)
		const someDiv = createElement('div')
		overviewBar.appendChild(someDiv)
		const location = createElement('div', { id: 'ctr_l', style: { opacity: 1 } })
		someDiv.appendChild(location)
		location.appendChild(createTextNode('Location:'))
		const locationDisplay = createElement('div')
		location.appendChild(locationDisplay)
		const locationDisplayText1 = createElement('span')
		locationDisplay.appendChild(locationDisplayText1)
		locationDisplayText1.appendChild(createTextNode(`|${controlState.location}|`))
		const locationDisplayText2 = createElement('span')
		locationDisplay.appendChild(locationDisplayText2)
	}
	return view
}

const ui = {
	controlView: renderControlView({ location: 'Dojo, training area' })
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