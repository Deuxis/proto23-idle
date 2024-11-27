import GameState from "../GameState.mjs"
import { game } from "../main.mjs"
import settings from "../settings.mjs"
import { renderControlView } from "./controlView.mjs"
export * from './controlView.mjs'
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
export const withRender = (func) => {
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
export const createElement = (tagName, { id, classes, style } = {}) => {
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
export const appendElement = (elem, ...args) => elem.appendChild(createElement(...args))
export const createTextNode = (str) => document.createTextNode(str)
export const appendTextNode = (elem, str) => elem.appendChild(createTextNode(str))



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

// (Re)render the entire UI
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