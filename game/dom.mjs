import global from "./global.mjs"

export const dom = {}
export { dom as default }

dom.dseparator = '<div class="dseparator">　</div>'
dom.coincopper = '<small style="color:rgb(255, 116, 63)">●</small>'
dom.coinsilver = '<small style="color:rgb(192, 192, 192)">●</small>'
dom.coingold = '<small style="color:rgb(255, 215, 0)">●</small>'

dom.loading = addElement(document.body, 'div'); dom.loading.style.zIndex = 9997
dom.loading.style.width = '100%'; dom.loading.style.height = '100%'; dom.loading.style.position = 'absolute'
dom.loading.style.backgroundColor = 'lightgrey'; dom.loading.style.margin = -8
dom.loadingt = addElement(document.body, 'div'); dom.loadingt.style.zIndex = 9998
dom.loadingt.innerHTML = 'LOADING'; dom.loadingt.style.textAlign = 'center'; dom.loadingt.style.top = window.innerHeight / 2 - 50
dom.loadingt.style.fontSize = '4em'; dom.loadingt.style.position = 'absolute'; dom.loadingt.style.left = window.innerWidth / 2 - 150

export function addElement(parent_element, elem, id, cls) {
	let newelem = document.createElement(elem)
	if (id) newelem.id = id
	if (cls) newelem.className = cls
	parent_element.appendChild(newelem)
	return newelem
}

// addDesc added as function arg because properly moving it seems to result in dependency hell of some magnitude
export function msg(txt, c, dsc, type, bc, chck, addDesc) {
	if (global.flags.m_freeze === false && global.flags.loadstate === false) {
		while (dom.gmsgs.children[1].children.length > global.msgs_max - 1) dom.gmsgs.children[1].removeChild(dom.gmsgs.children[1].children[0])
		let msg = addElement(dom.mscont, 'div', null, 'msg')
		if (global.flags.msgtm) {
			let now = new Date()
			let g = addElement(msg, 'small'); g.innerHTML = '[' + (now.getHours() < 10 ? ('0' + now.getHours()) : now.getHours()) + ':' + (now.getMinutes() < 10 ? ('0' + now.getMinutes()) : now.getMinutes()) + ':' + (now.getSeconds() < 10 ? ('0' + now.getSeconds()) : now.getSeconds()) + ']'
			g.style.backgroundColor = '#242848'; g.style.display = 'flex'
		}
		let mtxt = addElement(msg, 'span')
		if (dsc) { if (type) addDesc(msg, dsc, type); else addDesc(msg, dsc) }
		//let nt = new String(); for(let a in txt){nt+=txt[a].charCodeAt()!==32?String.fromCharCode(41216-txt[a].charCodeAt()):' '}; txt=nt;
		if (c) mtxt.innerHTML = '<span style=color:' + c + (bc ? (';background-color:' + bc) : '') + '>' + txt + '</span>'
		else mtxt.innerHTML = txt; dom.mscont.scrollTop = dom.mscont.scrollHeight; global.lastmsg = msg.innerHTML
		//if(true) {if(msg.innerHTML==global.lstmsg) msg.innerHTML=global.lastmsg+'('+(++global.lastmsgc)+')';
		//  else {global.lastmsg=msg.innerHTML;global.lastmsgc=0;}} else global.lastmsg=msg.innerHTML;
	}
}

export function col(txt, c, bc) {
	let cc; let bcc
	if (c) cc = 'color:' + c + ';'
	if (bc) bcc = 'background-color:' + bc + ';'
	return '<span' + (c ? (' style="' + cc + (bc ? bcc : '') + '"') : '') + '>' + txt + '</span>'
}