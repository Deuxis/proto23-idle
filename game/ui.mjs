const root = document.body

const genLoadingScreen = () => {
	const loading = document.createElement('div')
	loading.className = 'loadingContainer'
	const loadingSpan = document.createElement('span')
	loadingSpan.appendChild(document.createTextNode('LOADING'))
	loading.appendChild(loadingSpan)
	return loading
}

export const init = () => {
	root.replaceChildren(genLoadingScreen())
}