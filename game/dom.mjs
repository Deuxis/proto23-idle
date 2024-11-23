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