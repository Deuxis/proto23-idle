import settings from "./settings.mjs"
const root = document.getElementById('gameContainer')

/**
 * Create element with optional id, CSS classes and style
 * @param {string} tagName
 * @param {{id?: string, classes?: string, style?: string}} [options] 
 * @returns {HTMLElement}
 */
const createElement = (tagName, { id, classes, style } = {}) => {
	/** @type {HTMLElement} */
	const result = document.createElement(tagName)
	if (id) result.id = id
	if (classes) result.className = classes
	if (style) {
		for (const [styleKey, styleVal] of style) {
			result.style[styleKey] = styleVal
		}
	}
	return result
}
const createTextNode = (str) => document.createTextNode(str)

const renderActView = () => {
	const view = createElement('div', { id: 'actView', classes: 'actView' })
	return view
}

const ui = {
	actView: renderActView()
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
	return ui.actView
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