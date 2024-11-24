import settings from "./settings.mjs"
const root = document.getElementById('gameContainer')

const genLoadingScreen = () => {
	const loading = document.createElement('div')
	loading.className = 'loadingContainer'
	const loadingSpan = document.createElement('span')
	loadingSpan.appendChild(document.createTextNode('LOADING'))
	loading.appendChild(loadingSpan)
	return loading
}

const decorateGameContainer = (gameContainer) => {
	gameContainer.style.background = settings.mainBG
}

const genMainUi = () => {
	return document.createTextNode('sample text')
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