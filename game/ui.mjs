const { body: root } = document

const createElement = (...args) => document.createElement(...args)
const createTextNode = (...args) => document.createTextNode(...args)

export const init = () => {
	const p = createElement('p')
	p.appendChild(createTextNode('This looks like it\'s gonna be fun :)'))
	root.appendChild(p)
}