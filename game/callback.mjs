export const callback = {}
export { callback as default }

function callbackManager(id) {
	this.id = id || 0
	this.hooks = [{ f: function (victim, killer) { }, id: 0, data: {} }]
	this.fire = function () { }
}

callback.onDeath = new callbackManager(1)
callback.onDeath.fire = function (victim, killer) {
	for (let a in this.hooks) this.hooks[a].f(victim, killer)
}

export function attachCallback(callback, what, data) {
	callback.hooks.push(what)
}

export function detachCallback(callback, what) {
	for (let a in callback.hooks) if (callback.hooks[a].id === what) callback.hooks.splice(callback.hooks[a], 1)
}

/*attachCallback(callback.onDeath,{
  f:function(victim, killer){
	if(victim.id===112) this.data.a++
	if(this.data.a===5) msg("KILLED FIVE",'yellow')
  },
  id:50,
  data:{a:0,q:true}
})*/