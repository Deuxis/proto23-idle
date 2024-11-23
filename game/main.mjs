var dom = new Object();
var global = new Object(), listen = new Object();
var w_manager = new Object();
var creature = new Object();
var offline = new Object();
var effect = new Object();
var wpn = new Object(), eqp = new Object(), acc = new Object(), sld = new Object(), item = new Object(), itemgroup = [item, wpn, eqp, sld, acc];
var rcp = new Object();
var area = new Object();
var timers = new Object();
var chss = new Object();
var ttl = new Object();
var skl = new Object();
var abl = new Object();
var furniture = new Object();
var vendor = new Object();
var quest = new Object();
var act = new Object();
var test = new Object();
var callback = new Object();
var effector = new Object();
var planner = new Object(), plans = [[], [], []];
var sector = new Object(), sectors = [];
var check = new Object(), checksd = [];
var inv = [], furn = [], qsts = [], dar = [[], [], [], [], []], you = new Object(), home = new Object()
eqp.dummy = {};
var container = new Object();
var mastery = new Object();
const YEAR = 518400, MONTH = 43200, DAY = 1440, WEEK = 10080, HOUR = 60;
const SILVER = 100, GOLD = 10000, tempt = new Date();
global.home_loc = 111; global.lst_sve = '?'; global.ver = 470;
global.sm = 1; global.rm = 0; global.bg_g = global.bg_r = global.bg_b = 255;
global.s_l = 0; global.spnew = 0; global.vsnew = 10; global.uid = 1; global.wdwidx = 0; global.menuo = 0; global.lastmsgc = 0
global.sinv = []; global.srcp = []; global.drdata = {};
global.lw_op = 0; global.zone_a_p = [];
global.rec_d = []; global.e_e = []; global.e_em = []; global.titles = []; global.titlese = []; global.tstcr = [];
var acts = [];
global.atkdftm = [-1, -1, -1]; global.atkdfty = [-1, -1]; global.atkdftydt = {};
global.current_m; global.current_z; global.current_l; global.stat = { tick: 0, akills: 0, fooda: 0, foodb: 0, foodal: 0, foodt: 0, ftried: 0, moneyg: 0, die_p: 0, die_p_t: 0, ivtntdj: 0, athme: 0, athmec: 0, slvs: 0, lgtstk: 0, moneysp: 0, shppnt: 0, exptotl: 0, seed1: (Math.random() * 7e+7 << 7) % 7 & 7, igtttl: 0, msts: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], msks: [0, 0, 0, 0, 0, 0, 0], sttime: tempt.getFullYear() + '/' + (tempt.getMonth() + 1) + '/' + tempt.getDate() + ' ' + tempt.getHours() + ':' + (tempt.getMinutes() >= 10 ? tempt.getMinutes() : '0' + tempt.getMinutes()) + ':' + (tempt.getSeconds() > 10 ? tempt.getSeconds() : '0' + tempt.getSeconds()), buyt: 0, rdttl: 0, dsst: 0, thrt: 0, crftt: 0, deadt: 0, smovet: 0, timeslp: 0, misst: 0, dodgt: 0, potnst: 0, medst: 0, plst: 0, jcom: 0, qstc: 0, popt: 0, dsct: 0, bloodt: 0, rdgtttl: 0, cat_c: 0, dmgdt: 0, dmgrt: 0, onesht: 0, pts: 0, gsvs: 0, hbhbsld: 0, wsnburst: 50, wsnrest: 50, indkill: 0, coldnt: 0, lastver: global.ver };
global.hit_a = 0; global.hit_b = 0; global.timescale = 1; global.keytarget; global.offline_evil_index = 1;
global.flags = {
	btl: false, m_freeze: false, msd: false, m_blh: false, crti: false, to_pause: false, civil: true, sleepmode: false, loadstate: false, eshake: false, msgtm: false,
	grd_s: true, inside: true, israin: false, issnow: false, iscold: false, bstu: false, blken: false, rtcrutch: false, savestate: false, expatv: false, gameone: false,
	tmmode: 1, ssngaijin: true, rptbncgt: false
};
global.spirits = 100; global.bestiary = [{ a: false }]; global.shortcuts = [];
global.msgs_max = 36; global.text = new Object(); global.text.nt = ['K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'De', 'Un', 'DDe', 'TDe', 'QaDe', 'QiDe', 'Lc'];
global.fps = 1; global.text.wecs = [['grey', 'inherit'], ['white', 'inherit'], ['cyan', 'cyan'], ['lime', 'green'], ['yellow', 'red'], ['orange', 'orange'], ['purple', 'white']];
global.text.lunarp = [['🌑', 'New Moon'], ['🌒', 'Waxing Crescent Moon'], ['🌓', 'First Quarter Moon'],
['🌔', 'Waxing Gibbous Moon'], ['🌕', 'Full Moon'], ['🌖', 'Waning Gibbous Moon'],
['🌗', 'Last Quarter Moon'], ['🌘', 'Waning Crescent Moon']];
global.text.eranks = ['???', '--G', '-G', 'G', 'G+', '-F', 'F', 'F+', '-E', 'E', 'E+', '-D', 'D', 'D+', '-C', 'C', 'C+', '-B', 'B', 'B+', '--A', '-A', 'A', 'A+', 'A++', '--S', '-S', 'S', 'S+', 'S++', '--SS', '-SS', 'SS', 'SS+', 'SS++', '--SSS', '-SSS', 'SSS', 'SSS+', 'SSS++'];
dom.dseparator = '<div class="dseparator">　</div>';
dom.coincopper = '<small style="color:rgb(255, 116, 63)">●</small>';
dom.coinsilver = '<small style="color:rgb(192, 192, 192)">●</small>';
dom.coingold = '<small style="color:rgb(255, 215, 0)">●</small>';

window.addEventListener('load', () => { load() });

function save(lvr) {
	let storage = window.localStorage; global.flags.savestate = true; global.stat.gsvs++;
	let str = "";
	let a = new Date(); global.lst_sve = a.getFullYear() + '/' + (a.getMonth() + 1) + '/' + a.getDate() + ' ' + a.getHours() + ':' + (a.getMinutes() >= 10 ? a.getMinutes() : '0' + a.getMinutes()) + ':' + (a.getSeconds() >= 10 ? a.getSeconds() : '0' + a.getSeconds());
	dom.sl_extra.innerHTML = 'Last save: ' + global.lst_sve;
	let o = []; for (let obj in you.eqp) { o[obj] = you.eqp[obj]; unequip(you.eqp[obj], { save: true }); } you.stat_r(); let freezete = global.flags.m_freeze;
	if (inSector(sector.home)) { for (let a in furn) deactivatef(furn[a]) }
	global.flags.m_freeze = true; for (let a in you.eff) if (you.eff[a].type === 5) you.eff[a].onRemove();
	let yu = {
		name: you.name, title: you.title.id, lvl: you.lvl, exp: you.exp, exp_t: you.exp_t, sat: you.sat, satmax: you.satmax, sat_r: you.sat_r, hp: you.hp,
		hpmax: you.hpmax, hp_r: you.hp_r, str: you.str, str_r: you.str_r, agl: you.agl, agl_r: you.agl_r, int: you.int, int_r: you.int_r, spd: you.spd,
		spd_r: you.spd_r, luck: you.luck, stat_p: you.stat_p, wealth: you.wealth, crt: you.crt, res: you.res, mods: you.mods, stra: you.stra, strm: you.strm, inta: you.inta,
		intm: you.intm, agla: you.agla, aglm: you.agml, spda: you.spda, spdm: you.spdm, hpa: you.hpa, hpm: you.hpm, sata: you.sata, satm: you.satm, cls: you.cls, ccls: you.ccls,
		aff: you.aff, maff: you.maff, caff: you.caff, cmaff: you.cmaff, karma: you.karma, ki: you.ki
	}
	global.flags.m_freeze = true; global.current_a.deactivate(); dom.ct_bt3.style.backgroundColor = 'inherit';
	for (let a in you.eff) if (you.eff[a].type === 5) you.eff[a].onGive();
	str += JSON.stringify(yu); str += '|';
	let a4 = []; for (let obj in you.eff) if (!!you.eff[obj].id) { var pw; !!you.eff[obj].power ? pw = you.eff[obj].power : pw = 1; a4[obj] = { a: you.eff[obj].id, b: you.eff[obj].duration, c: pw } }; global.flags.m_freeze = false;
	str += JSON.stringify(a4); str += '|';
	let a6 = []; for (let obj in you.skls) { a6[obj] = { id: you.skls[obj].id, lvl: you.skls[obj].lvl, mst: [] }; for (let m in you.skls[obj].mlstn) a6[obj].mst[m] = you.skls[obj].mlstn[m].g };
	str += JSON.stringify(a6); str += '|';
	let a7 = []; for (let obj in skl) a7.push([skl[obj].exp, skl[obj].p]);
	str += JSON.stringify(a7); str += '|';
	var datasi = []; let nindxdt = 0; for (let obj in item) if (item[obj].data.tried === true) datasi[nindxdt++] = item[obj].id;
	var datare = []; let nindxat = 0; for (let obj in item) if (item[obj].data.finished === true) datare[nindxat++] = item[obj].id;
	let a1 = {
		uid: global.uid, jj: global.stat, x: global.current_z.id, a: global.rm, b: global.sm, e: global.flags, f: global.spirits,
		g: global.msgs_max, i: global.lst_loc, j: time.minute, k: w_manager.duration, l: w_manager.curr.id, m: global.lst_sve, n: global.bg_r, o: global.bg_g, p: global.bg_b, q: global.bestiary, r: global.timehold, r2: global.timewold, datas: datasi, u: global.timescale, datar: datare, z: global.offline_evil_index, drdata: global.drdata
	};
	str += JSON.stringify(a1); str += '|';
	let a2 = []; for (let obj in global.rec_d) a2[obj] = { id: global.rec_d[obj].id, data: global.rec_d[obj].data }
	str += JSON.stringify(a2); str += '|';
	let a3 = [[], [], [], [], [], []]; for (let obj in o) equip(o[obj], { save: true }); you.stat_r()
	for (let obj in inv) {
		let expectedIndex = Math.max(0, Math.min(4, Math.floor(inv[obj].id / 10000)));
		if (expectedIndex === 0) {
			a3[0].push({ id: inv[obj].id, am: inv[obj].amount, data: inv[obj].data });
		} else {
			a3[expectedIndex].push({ id: inv[obj].id, dp: inv[obj].dp, toeq: true, data: inv[obj].data }); if (!scanbyuid(you.eqp, inv[obj].data.uid)) a3[expectedIndex][a3[expectedIndex].length - 1].toeq = false
		}
	}
	for (let a in item) if (item[a].save === true) a3[5].push({ item: item[a].id, data: item[a].data });
	str += JSON.stringify(a3); str += '|';
	let a5 = []; let xx = 0; for (let o in area) a5[xx++] = area[o].size;
	str += JSON.stringify(a5); str += '|';
	let a8 = dar;
	str += JSON.stringify(a8); str += '|';
	let a9 = []; for (let obj in furn) a9.push({ id: furn[obj].id, data: furn[obj].data });
	str += JSON.stringify(a9); str += '|';
	let a10 = {}; let a11 = {}; for (let obj in vendor) {
		let stock = []; for (let i = 0; i < vendor[obj].stock.length; i++) { stock[i] = []; stock[i][0] = vendor[obj].stock[i][0].id; stock[i][1] = vendor[obj].stock[i][1]; stock[i][2] = vendor[obj].stock[i][2] }
		a10[obj] = { stock: stock, data: vendor[obj].data };
	}
	str += JSON.stringify(a10); str += '|';
	let a12 = []; for (let a in global.titles) a12.push(global.titles[a].id); //for(let obj in ttl) if(ttl[obj].have===true) a12.push(ttl[obj].id); 
	str += JSON.stringify(a12); str += '|';
	let a13 = new Object();
	for (let s in home) a13[s] = home[s].id;
	str += JSON.stringify(a13); str += '|';
	let a14 = []; for (let obj in qsts) a14.push({ id: qsts[obj].id, data: qsts[obj].data });
	str += JSON.stringify(a14); str += '|';
	let a15 = []; for (let obj in acts) a15.push({ id: acts[obj].id, data: acts[obj].data });
	str += JSON.stringify(a15); str += '|';
	let a17 = []; for (let obj in sector) a17.push({ id: sector[obj].id, data: sector[obj].data });
	str += JSON.stringify(a17); str += '|';
	let a18 = []; for (let obj in container) {
		let cont = [];
		for (let a in container[obj].c) cont.push({ id: container[obj].c[a].item.id, data: container[obj].c[a].data, am: container[obj].c[a].am, dp: container[obj].c[a].dp })
		a18.push({ id: container[obj].id, c: cont });
	}
	str += JSON.stringify(a18); str += '|';
	let a19 = []; for (let obj in chss) if (JSON.stringify(chss[obj].data) !== '{}') a19.push({ id: chss[obj].id, data: chss[obj].data });
	str += JSON.stringify(a19); str += '|savevalid|';
	let a20 = []; for (let a in ttl) if (ttl[a].tget) a20.push(ttl[a].id)
	str += JSON.stringify(a20);
	if (inSector(sector.home)) { for (let a in furn) activatef(furn[a]) }
	global.flags.m_freeze = true; global.current_a.activate(); global.flags.m_freeze = freezete;
	if (global.flags.busy === true) dom.ct_bt3.style.backgroundColor = 'darkslategray'
	str = utf8_to_b64(str);
	storage.setItem("v0.3", str); global.flags.savestate = false;
	if (!lvr) msg('Game Saved', 'cyan');
	return str
}

dom.loading = addElement(document.body, 'div'); dom.loading.style.zIndex = 9997;
dom.loading.style.width = '100%'; dom.loading.style.height = '100%'; dom.loading.style.position = 'absolute';
dom.loading.style.backgroundColor = 'lightgrey'; dom.loading.style.margin = -8;
dom.loadingt = addElement(document.body, 'div'); dom.loadingt.style.zIndex = 9998;
dom.loadingt.innerHTML = 'LOADING'; dom.loadingt.style.textAlign = 'center'; dom.loadingt.style.top = window.innerHeight / 2 - 50;
dom.loadingt.style.fontSize = '4em'; dom.loadingt.style.position = 'absolute'; dom.loadingt.style.left = window.innerWidth / 2 - 150;

function load(dt) {
	var str = dt || window.localStorage.getItem("v0.3");
	str = b64_to_utf8(str);
	if (str && str != '') {
		dom.error = addElement(document.body, 'div');
		dom.error.style.width = '100%'; dom.error.style.height = 'auto'; dom.error.style.position = 'absolute';
		dom.error.style.fontSize = '2em'; dom.error.style.color = 'red'; dom.error.style.zIndex = 9999; dom.error.style.lineHeight = 'normal';
		dom.error.style.opacity = 0; setTimeout(function () { appear(dom.error) }, 500)
		dom.error.style.textAlign = 'center'; dom.error.innerHTML = 'SOMETHING BROKE<br>PERHAPS DUE TO STUPIDITY OR DATA STRUCTURE CHANGES<br>⋗1 DELETING THE SAVE IS ADVISED<br>⋗2 OR WAITING FOR SOME TIME TIL FIXED<br>⋗3 OR CHECKING IN DIFFERENT BROWSER, MIGHT WORK THERE(MEANS THE SAVE IS BORKED(REFER TO 1))';
		clearInterval(timers.mnch); clearInterval(timers.snch); clearInterval(timers.autos); clearInterval(timers.rdng); clearInterval(timers.rdngdots); global.menuo = 0; clearInterval(timers.actm); clearInterval(timers.job1t); clearInterval(timers.bstmonupdate); clearInterval(timers.rptbncgt); global.flags.rptbncgtf = false; global.flags.rptbncgt = false;
		str = str.split('|');
		let yu_s = JSON.parse(str[0]);
		for (let a in ttl) { ttl[a].have = false; ttl[a].tget = false }; global.titles = [];
		you.name = yu_s.name; for (let o in ttl) if (ttl[o].id === yu_s.title) you.title = ttl[o]; you.lvl = yu_s.lvl;
		you.exp = yu_s.exp; you.exp_t = yu_s.exp_t; you.expnext_t = you.expnext();
		you.sat = yu_s.sat; you.satmax = yu_s.satmax; you.sat_r = yu_s.sat_r; you.sata = yu_s.sata || 0; you.satm = yu_s.satm || 1; you.ki = yu_s.ki || new Object();
		you.hp = yu_s.hp; you.hpmax = yu_s.hpmax; you.hp_r = yu_s.hp_r; you.hpa = yu_s.hpa || 0; you.hpm = yu_s.hpm || 1; you.hp = you.hp > you.hpmax ? you.hpmax : you.hp;
		you.str = yu_s.str; you.str_r = yu_s.str_r; you.stra = yu_s.stra || 0; you.strm = yu_s.strm || 1;
		you.agl = yu_s.agl; you.agl_r = yu_s.agl_r; you.agla = yu_s.agla || 0; you.aglm = yu_s.aglm || 1;
		you.int = yu_s.int; you.int_r = yu_s.int_r; you.inta = yu_s.inta || 0; you.intm = yu_s.intm || 1;
		you.spd = yu_s.spd; you.spd_r = yu_s.spd_r; you.spda = yu_s.spda || 0; you.spdm = yu_s.spdm || 1;
		you.cls = yu_s.cls || [0, 0, 0]; you.ccls = yu_s.ccls || [0, 0, 0]
		you.aff = yu_s.aff || [0, 0, 0, 0, 0, 0, 0]; you.maff = yu_s.maff || [0, 0, 0, 0, 0, 0, 0];
		you.caff = yu_s.caff || [0, 0, 0, 0, 0, 0, 0]; you.cmaff = yu_s.cmaff || [0, 0, 0, 0, 0, 0, 0];
		you.luck = yu_s.luck; you.stat_p = yu_s.stat_p; you.karma = yu_s.karma || 0;
		you.wealth = yu_s.wealth; you.crt = yu_s.crt; global.flags.loadstate = true;
		for (let a in callback) for (let b in callback[a].hooks) if (callback[a].hooks[b].data.q) callback[a].hooks.splice(callback[a].hooks[b], 1)
		for (let obj in item) { item[obj].amount = 0; item[obj].have = false } inv = [];
		for (let g in yu_s.res) you.res[g] = yu_s.res[g]; for (let g in yu_s.mods) you.mods[g] = yu_s.mods[g];
		you.eqp = [eqp.dummy, eqp.dummy, eqp.dummy, eqp.dummy, eqp.dummy, eqp.dummy, eqp.dummy, eqp.dummy, eqp.dummy, eqp.dummy];
		for (let a in you.eff) you.eff[a].active = false; you.eff = []; empty(dom.d101); global.e_e = []; global.e_em = []; empty(dom.d101m); global.current_m.eff = [];
		let a4 = JSON.parse(str[1]); global.msgs_max = 300; empty(dom.mscont); global.rec_d = []; for (let ba in rcp) { rcp[ba].have = false }; global.flags.loadstate = false;
		let a6 = JSON.parse(str[2]); you.skls = []; for (let ab in skl) { skl[ab].lvl = 0; skl[ab].exp = 0; }
		for (let a in global.rec_d) global.rec_d[a].have = false; global.rec_d = [];
		for (let i in skl) for (let ii in skl[i].mlstn) skl[i].mlstn[ii].g = false;
		for (let a in a6) for (let b in skl) if (a6[a].id === skl[b].id) {
			you.skls.push(skl[b]); skl[b].lvl = a6[a].lvl;
			for (let c in a6[a].mst) skl[b].mlstn[c].g = a6[a].mst[c];
			if (skl[b].mlstn) for (let d in skl[b].mlstn) if (skl[b].mlstn[d].g === false && skl[b].mlstn[d].lv <= skl[b].lvl) { ; skl[b].mlstn[d].f(); skl[b].mlstn[d].g = true; msg("NEW PERK UNLOCKED " + '<span style="color:tomato">("' + skl[b].name + '")<span style="color:orange">lvl: ' + skl[b].mlstn[d].lv + '</span></span>', 'lime', { x: skl[b].name, y: 'Perk lvl ' + skl[b].mlstn[d].lv + ': <span style="color:yellow">' + skl[b].mlstn[d].p + '</span>' }, 7); }
		}
		var ro = []; for (let io in global.rec_d) ro.push(global.rec_d[io].id);
		let a7 = JSON.parse(str[3]); let skk = 0; for (let obj in skl) if (a7[skk]) {
			skl[obj].exp = a7[skk][0] || 0; skl[obj].expnext_t = skl[obj].expnext(); skl[obj].p = a7[skk++][1];
			if (!skl[obj].p) skl[obj].p = 1; if (skl[obj].p < .99) skl[obj].p += 1
		} global.flags.loadstate = true;
		for (let o = 0; o < a4.length; o++) for (let obj in effect) if (effect[obj].id === a4[o].a) { if (effect[obj].save !== false) giveEff(you, effect[obj], a4[o].b, a4[o].c); else { effect[obj].onRemove() }; continue } global.flags.loadstate = false;
		let a1 = JSON.parse(str[4]);
		global.sm = a1.b; global.rm = a1.a; global.spirits = a1.f; global.lst_loc = a1.i; global.uid = a1.uid;
		global.msgs_max = a1.g; global.flags = {};
		global.sinv = [];
		global.bestiary = a1.q; global.timehold = a1.r || ((time.minute / DAY) << 0); global.timewold = a1.r2 || ((time.minute / WEEK) << 0);
		global.lst_sve = a1.m; global.timescale = a1.u || 1; global.offline_evil_index = a1.z || 1; global.drdata = a1.drdata || {}
		for (let gb = 0; gb < a1.datas.length; gb++) { for (let itm in item) if (item[itm].id === a1.datas[gb]) item[itm].data.tried = true }
		if (a1.datar) for (let gb = 0; gb < a1.datar.length; gb++) { for (let itm in item) if (item[itm].id === a1.datar[gb]) item[itm].data.finished = true }
		time.minute = a1.j; timeConv(time); for (let w in weather) if (weather[w].id === a1.l) setWeather(weather[w], a1.k);
		global.bg_r = a1.n; global.bg_g = a1.o; global.bg_b = a1.p;
		for (let a in global.stat) global.stat[a] = a1.jj[a] || 0; let tempt = new Date(); if (global.stat.sttime === 0) global.stat.sttime = tempt.getFullYear() + '/' + (tempt.getMonth() + 1) + '/' + tempt.getDate() + ' ' + tempt.getHours() + ':' + (tempt.getMinutes() >= 10 ? tempt.getMinutes() : '0' + tempt.getMinutes()) + ':' + (tempt.getSeconds() > 10 ? tempt.getSeconds() : '0' + tempt.getSeconds()); if (global.stat.msts === 0) global.stat.msts = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]; if (global.stat.msks === 0) global.stat.msks = [0, 0, 0, 0, 0, 0, 0]
		dom.ct_bt4_21b.value = global.bg_r; dom.ct_bt4_22b.value = global.bg_g; dom.ct_bt4_23b.value = global.bg_b; global.stat.wsnburst = 50;
		dom.ctrwin4.style.display = 'none'; dom.ctrwin2.style.display = 'none'; dom.ctrwin1.style.display = ''; global.lw_op = 0;
		if (global.flags.civil === false && global.flags.btl === true) for (let obj in area) if (area[obj].id === a1.x) { area_init(area[obj]); break }
		let a2 = JSON.parse(str[5]); for (let o = 0; o < a2.length; o++) { for (let obj in rcp) if (rcp[obj].id === a2[o].id && rcp[obj].have === false) { global.rec_d.push(rcp[obj]); rcp[obj].have = true; rcp[obj].data = a2[o].data } };
		for (let o = 0; o < ro.length; o++) { for (let obj in rcp) if (rcp[obj].id === ro[o] && rcp[obj].have === false) { global.rec_d.push(rcp[obj]); rcp[obj].have = true } }
		dom.d2.innerHTML = you.name; eqpres();
		unequip(you.eqp[4], { save: true }); unequip(you.eqp[5], { save: true }); you.stat_r();
		let a3 = JSON.parse(str[6]); global.flags.loadstate = true;
		if (a3[0].length != 0) for (let o = 0; o < a3[0].length; o++)for (let obj in item) { if (item[obj].id === a3[0][o].id) { giveItem(item[obj], a3[0][o].am, true, { fi: true }); inv[o].new = false; for (let a in a3[0][o].data) inv[o].data[a] = a3[0][o].data[a] } continue }
		if (a3[1].length != 0) for (let o = 0; o < a3[1].length; o++)for (let obj in wpn) if (wpn[obj].id === a3[1][o].id) { let t = giveItem(wpn[obj], 1, true); t.new = false; t.dp = a3[1][o].dp; for (let a in a3[1][o].data) t.data[a] = a3[1][o].data[a]; if (a3[1][o].toeq === true) equip(t, { save: true }); continue }
		if (a3[2].length != 0) for (let o = 0; o < a3[2].length; o++)for (let obj in eqp) if (eqp[obj].id === a3[2][o].id) { let t = giveItem(eqp[obj], 1, true); t.new = false; t.dp = a3[2][o].dp; for (let a in a3[2][o].data) t.data[a] = a3[2][o].data[a]; if (a3[2][o].toeq === true) { if (t.slot === 5 && you.eqp[5].id === 10000) t.slot = 6; equip(t, { save: true }) } }
		if (a3[3].length != 0) for (let o = 0; o < a3[3].length; o++)for (let obj in sld) if (sld[obj].id === a3[3][o].id) { let t = giveItem(sld[obj], 1, true); t.new = false; t.dp = a3[3][o].dp; for (let a in a3[3][o].data) t.data[a] = a3[3][o].data[a]; if (a3[3][o].toeq === true) equip(t, { save: true }); continue }
		if (a3[4].length != 0) for (let o = 0; o < a3[4].length; o++)for (let obj in acc) if (acc[obj].id === a3[4][o].id) { let t = giveItem(acc[obj], 1, true); t.new = false; t.dp = a3[4][o].dp; for (let a in a3[4][o].data) t.data[a] = a3[4][o].data[a]; if (a3[4][o].toeq === true) equip(t, { save: true }); continue };
		if (you.eqp[0].id === 10000) { you.eqp[0].cls[2] = you.lvl / 4 << 0; you.eqp[0].aff[0] = you.lvl / 5 << 0; you.eqp[0].ctype = 2 }
		let a5 = JSON.parse(str[7]); let xx = 0; for (let o in area) if (a5[xx]) area[o].size = a5[xx++]//||area[o].size;
		let a8 = JSON.parse(str[8]); dar = a8;
		if (a8[0].length != 0) for (let o = 0; o < a8[0].length; o++)for (let obj in item) if (item[obj].id === a8[0][o]) item[obj].data.dscv = true;
		if (a8[1].length != 0) for (let o = 0; o < a8[1].length; o++)for (let obj in wpn) if (wpn[obj].id === a8[1][o]) wpn[obj].data.dscv = true;
		if (a8[2].length != 0) for (let o = 0; o < a8[2].length; o++)for (let obj in eqp) if (eqp[obj].id === a8[2][o]) eqp[obj].data.dscv = true;
		if (a8[3].length != 0) for (let o = 0; o < a8[3].length; o++)for (let obj in sld) if (sld[obj].id === a8[3][o]) sld[obj].data.dscv = true;
		if (a8[4].length != 0) for (let o = 0; o < a8[4].length; o++)for (let obj in acc) if (acc[obj].id === a8[4][o]) acc[obj].data.dscv = true;
		if (a3[5].length != 0) for (let a in a3[5]) for (let b in item) if (item[b].id === a3[5][a].item) item[b].data = a3[5][a].data;
		for (let a in furniture) furniture[a].active = false; for (let a in furn) furn[a].data = {}; furn = [];
		let a9 = JSON.parse(str[9]); for (let a = 0; a < a9.length; a++) for (let obj in furniture) if (furniture[obj].id === a9[a].id && a9[a].data.amount > 0) { furn[a] = furniture[obj]; furn[a].data = a9[a].data }
		let a10 = JSON.parse(str[10]); let a11 = JSON.parse(str[11]);
		global.flags = a1.e; global.flags.rdng = false; global.flags.civil = true; global.flags.btl = false; global.current_z = area.nwh; global.current_m = creature.default; update_m(); dom.d7m.update(); global.flags.wkdis = false; global.flags.jdgdis = false;
		for (let obj in vendor) {
			if (a10[obj] && a10[obj].stock) {
				vendor[obj].stock = a10[obj].stock; vendor[obj].data = a10[obj].data; if (!vendor[obj].data.time || vendor[obj].data.time < 0) vendor[obj].data.time = 1
				for (let itm = 0; itm < a10[obj].stock.length; itm++) {
					let k = itemgroup[(a10[obj].stock[itm][0] + 1) / 10000 << 0];
					for (let v in k) if (k[v].id === a10[obj].stock[itm][0]) { vendor[obj].stock[itm][0] = k[v]; continue }
				}
			} else { restock(vendor[obj]) }
		};
		let a12 = JSON.parse(str[11]); for (let ttlid = 0; ttlid < a12.length; ttlid++) for (let obj in ttl) if (ttl[obj].id === a12[ttlid]) { global.titles[ttlid] = ttl[obj]; global.titles[ttlid].have = true; } for (let obj in global.titlese) global.titles.push(global.titlese[obj]); global.titlese = [];
		let a13 = JSON.parse(str[12]); for (let s in a13) { for (let ss in furn) if (furn[ss].id === a13[s]) home[s] = furn[ss] } qsts = [];
		let a14 = JSON.parse(str[13]); for (let obj in a14) for (let q in quest) if (quest[q].id === a14[obj].id) { qsts[obj] = quest[q]; qsts[obj].data = a14[obj].data; if (qsts[obj].callback) qsts[obj].callback() }
		global.current_a = act.default; acts = []; for (let a in act) { act[a].have = false; act[a].data = {}; act[a].active = false }
		let a15 = JSON.parse(str[14]); for (let obj in a15) for (let q in act) if (act[q].id === a15[obj].id) { acts[obj] = act[q]; acts[obj].data = a15[obj].data; act[q].have = true } for (let a in sectors) sectors[a].onLeave(); sectors = []
		let a16 = JSON.parse(str[15]); for (let obj in a16) for (let q in sector) if (sector[q].id === a16[obj].id) { if (objempty(a16[obj].data) === false) { for (let a in a16[obj].data) sector[q].data[a] = a16[obj].data[a] } else if (sector[q].ddata) sector[q].data = sector[q].ddata }
		clearInterval(timers.vndrstkchk); for (let obj in chss) if (chss[obj].id === a1.i) { global.current_l = chss[obj]; smove(chss[obj], false); }
		let a17 = JSON.parse(str[16]); for (let a in container) container[a].c = []; if (a17[0] && !a17[0].c) { a17 = [{ id: 1, c: a17 }] };
		for (let a in a17) {
			for (let d in container) if (container[d].id === a17[a].id) {
				for (let c in a17[a].c) {
					let k = itemgroup[(a17[a].c[c].id + 1) / 10000 << 0];
					for (let b in k) if (k[b].id === a17[a].c[c].id) { let ni = { item: k[b], data: a17[a].c[c].data, am: a17[a].c[c].am, dp: a17[a].c[c].dp }; container[d].c.push(ni); break }
				} break
			}
		}
		let a18 = JSON.parse(str[17]); for (let obj in a18) for (let q in chss) if (chss[q].id === a18[obj].id) { if (objempty(a18[obj].data) === false) chss[q].data = a18[obj].data }
		if (str[19]) { let a19 = JSON.parse(str[19]); for (let a in a19) for (let b in ttl) if (a19[a] === ttl[b].id) ttl[b].tget = true }
		for (let a in ttl) { if (ttl[a].have && ttl[a].talent && !ttl[a].tget) { ttl[a].talent(); ttl[a].tget = true } }
		isort(global.sm); rsort(global.rm); rstcrtthg(); you.stat_r(); global.spbtsr[global.rm].style.color = 'yellow';
		if (global.flags.aw_u) { dom.d0.style.display = ''; dom.d1m.style.display = ''; dom.inv_ctx.style.display = ''; dom.gmsgs.style.display = ''; dom.ct_ctrl.style.display = ''; dom.ctr_1.style.display = ''; dom.d_lct.style.display = '' } dom.ctrwin3.style.display = 'none'; dom.ctrwin5.style.display = 'none'
		dom.d5_1_1.update(); dom.d5_2_1.update(); dom.d6.update(); update_d(); dom.d3.update(); update_m(); m_update(); dom.d7m.update(); dom.d5_3_1.update();
		if (global.flags.m_freeze === true) dom.m_b_1_c.innerHTML = 'Ｘ';
		if (global.flags.m_blh === true) dom.m_b_2_c.innerHTML = 'Ｘ';
		if (global.flags.jnlu) dom.ct_bt6.innerHTML = 'journal'; if (global.flags.asbu) dom.ct_bt1.innerHTML = 'assemble'; if (global.flags.actsu) dom.ct_bt3.innerHTML = 'actions'; if (global.flags.sklu) dom.ct_bt2.innerHTML = 'skills';
		if (global.flags.m_un === true) { dom.mn_2.style.display = ''; dom.mn_4.style.display = ''; dom.mn_3.style.display = ''; if (global.stat.mndrgnu) dom.mn_1.style.display = ''; m_update(); }
		wManager(); dom.d_moon.innerHTML = global.text.lunarp[getLunarPhase()][0]; addDesc(dom.d_moon, null, 2, 'Lunar Phase', global.text.lunarp[getLunarPhase()][1]); wdrseason(global.flags.ssngaijin);
		if (global.flags.isday === false) dom.d_moon.style.display = ''; else dom.d_moon.style.display = 'none'
		dom.sl_extra.innerHTML = 'Last save: ' + global.lst_sve; dom.nthngdsp.style.display = 'none'; dom.ctrwin6.style.display = 'none'
		invbtsrst();
		dom.d_time.innerHTML = '<small>' + getDay(global.flags.tmmode || 2) + '</small> ' + timeDisp(time);
		global.flags.loadstate = false; global.flags.savestate = false; global.flags.ttlscrnopn = false; global.flags.expatv = false; global.flags.impatv = false; global.flags.expatv = false;
	}
	if (!global.flags.stbxinifld) {
		addToContainer(home.trunk, eqp.gnt);
		addToContainer(home.trunk, acc.fmlim);
		addToContainer(home.trunk, wpn.bdsrd);
		addToContainer(home.trunk, item.toolbx);
		addToContainer(home.trunk, sld.tge);
		addToContainer(home.trunk, item.bonig);
		global.flags.stbxinifld = true;
	}
	if (global.flags.bgspc) document.body.style.background = 'linear-gradient(180deg,#000,#123)'; else document.body.style.backgroundColor = 'rgb(' + global.bg_r + ',' + global.bg_g + ',' + global.bg_b + ')';
	if (dom.bkssttbd) { empty(dom.bkssttbd); document.body.removeChild(dom.bkssttbd); global.flags.bksstt = false }
	if (global.flags.expatv) { empty(dom.ct_bt4_5a_nc); document.body.removeChild(dom.ct_bt4_5a_nc); }
	if (global.flags.impatv) { empty(dom.ct_bt4_5b_nc); document.body.removeChild(dom.ct_bt4_5b_nc); }
	if (dom.error) { empty(dom.error); document.body.removeChild(dom.error); }
	if (global.flags.autosave === true) { dom.autosves.checked = true; timers.autos = setInterval(function () { save(true); }, 30000) }
	//if(global.flags.msgtm===true)dom.ct_bt4_61b.checked=true;
	////patch things 
	if (skl.pet.lvl >= 10) giveTitle(ttl.pet3);
	if (item.amrthsck.data.finished) giveRcp(rcp.appljc)
	////////////////
	if (dom.loading) { fade(dom.loading, 5, true); delete dom.loading; }; if (dom.loadingt) { fade(dom.loadingt, 5, true); delete dom.loadingt; }
}

///////////////////////////////////////////
//TTL
///////////////////////////////////////////

function Title(id) {
	this.name; this.id = id || 0
	this.desc;
	this.have = false
	this.tget = false
	this.rar = 1;
	this.onGet = function () { }
}

ttl.new = new Title(0);
ttl.new.name = 'Nobody';
ttl.new.desc = 'Unremarkable someone trying to find his purpose in life';

ttl.inn = new Title(1);
ttl.inn.name = 'Initiate';
ttl.inn.desc = 'Dojo disciple who managed to finish the first training stages. Woo!';

ttl.thr = new Title(2);
ttl.thr.name = 'Thrasher'; ttl.thr.rar = 1; ttl.thr.rars = true
ttl.thr.desc = 'The one who destroyed dojo\'s precious equipment. Were you a bit older you\'d pay the expences, but you made your teacher proud.';

ttl.wsl = new Title(3);
ttl.wsl.name = 'Wolf Slayer';
ttl.wsl.desc = 'You went alone against a pack of feral wolves. That amounts to something!';

ttl.knf = new Title(4);
ttl.knf.name = 'Butterfly'; ttl.knf.rar = 2
ttl.knf.desc = 'You always thought knives were cool. You aren\'t nearly precise with your knifework yet, But you will learn';

ttl.bll = new Title(5);
ttl.bll.name = 'Bully'; ttl.bll.rar = 2
ttl.bll.desc = 'You have graduated from being a mere Weakling. You feel powerful! You still find it difficult to stand your own in a fight';

ttl.cvl = new Title(6);
ttl.cvl.name = 'Civilian';
ttl.cvl.desc = 'You\'re not very suitable for combat. But you think you\'re out of options';

ttl.stk = new Title(7);
ttl.stk.name = 'Stick Kid';
ttl.stk.desc = 'You always liked swinging that thing around. You think you\'re beginning to understand how to land hits properly. Or not';

ttl.fgt = new Title(8);
ttl.fgt.name = 'Fighter'; ttl.fgt.rar = 2
ttl.fgt.desc = 'You begin to start liking to fight! At the very least you can now somewhat defend yourself against mild threats and not just die in one hit';

ttl.pbg = new Title(9);
ttl.pbg.name = 'Weakling';
ttl.pbg.desc = 'You can\'t really hit anything with these frail arms of yours';

ttl.brw = new Title(10);
ttl.brw.name = 'Brawler';
ttl.brw.desc = 'You feel like you can pack a punch! And recieve one. You\'re starting to feel a bit more comfortable with your bare fists';

ttl.stb = new Title(11);
ttl.stb.name = 'Stabber'; ttl.stb.rar = 3
ttl.stb.desc = 'Even if it\'s a smaller tool compared to any other weapon, you\'ve learned how to make knives useful for self-defence, since they are somewhat easier to handle than the rest. You can hit vitals better too';

ttl.slp1 = new Title(12);
ttl.slp1.name = 'Sleeper';
ttl.slp1.desc = 'You really like sleeping don\'t you? You spend a lot of time in your bed';

ttl.slp2 = new Title(13);
ttl.slp2.name = 'Heavy Sleeper'; ttl.slp2.rar = 2
ttl.slp2.desc = 'You learned to sleep very soundly, without any care for the outside world. Your body begins to adapt and grow stronger with every break you take';

ttl.slp3 = new Title(14);
ttl.slp3.name = 'Dreamwatcher'; ttl.slp3.rar = 3
ttl.slp3.desc = '3';

ttl.tcvl = new Title(15);
ttl.tcvl.name = 'Trained Civilian'; ttl.tcvl.rar = 2
ttl.tcvl.desc = 'You\'re still nearly useless in a real fight, but you have learned to at least move out of the way of danger';

ttl.plm = new Title(16);
ttl.plm.name = 'Prick';
ttl.plm.desc = 'You found it fun to make little holes in plant leaves and look through them at the Sun. You think this could be morbidly useful in a fight';

ttl.wlk = new Title(17);
ttl.wlk.name = 'Walker';
ttl.wlk.desc = 'All this walking around feels very beneficial for your body';
ttl.wlk.talent = function () { you.mods.runerg -= .05 }
ttl.wlk.onGet = function () { if (act.demo.active) you.mods.sdrate -= .005 }
ttl.wlk.tdesc = 'Running consumes 5% less energy'

ttl.eat1 = new Title(18);
ttl.eat1.name = 'Starving Child';
ttl.eat1.desc = 'You\'ve been all skin and bones as long as you can remember. You will need to start eating properly if you wish to survive';

ttl.eat2 = new Title(19);
ttl.eat2.name = 'Hungry Child'; ttl.eat2.rar = 2
ttl.eat2.desc = 'You begin to gain some weight eating all this boring and dry food. But you\'re not complaining, at least you live';

ttl.eat4 = new Title(20);
ttl.eat4.name = 'Satiated'; ttl.eat4.rar = 4
ttl.eat4.desc = 'Being full is good, but you start to wonder what kinds of different dishes exist in the world';

ttl.eat5 = new Title(21);
ttl.eat5.name = 'Mini-Gourmand'; ttl.eat5.rar = 5
ttl.eat5.desc = 'You begin to understand the importance of tasty food! You crave the larger variety';

ttl.cck = new Title(22);
ttl.cck.name = 'Campfire Cook';
ttl.cck.desc = 'Not something to brag about, but you won\'t completely starve to death if you find yourself in the wilds without a proper meal';

ttl.rok = new Title(23);
ttl.rok.name = 'Rookie'; ttl.rok.rar = 3
ttl.rok.desc = 'A novice fighter. You have a knack for martial arts but it doesn\'t amount to much yet';

ttl.rnr = new Title(24);
ttl.rnr.name = 'Runner'; ttl.rnr.rar = 3
ttl.rnr.desc = 'Your body is in much better shape, so is your stamina. Moving around fast doesn\'t bother you as much anymore, but you spend your energy and get kind of hungry from it';

ttl.jgg = new Title(25);
ttl.jgg.name = 'Jogger'; ttl.jgg.rar = 2
ttl.jgg.desc = 'Simply walking doesn\'t cut it anymore, maybe you should speed up a bit while travelling on foot?';
ttl.jgg.talent = function () { you.mods.runerg -= .15 }
ttl.jgg.onGet = function () { if (act.demo.active) you.mods.sdrate -= .015 }
ttl.jgg.tdesc = 'Running consumes 15% less energy'

ttl.spn = new Title(26);
ttl.spn.name = 'Sprinter'; ttl.spn.rar = 4
ttl.spn.desc = 's';

ttl.ilt = new Title(27);
ttl.ilt.name = 'Illiterate';
ttl.ilt.desc = 'You have a really difficult time understanding even the basic writings. Even the signs outside the shops give you trouble';

ttl.und = new Title(28);
ttl.und.name = 'Uneducated'; ttl.und.rar = 2
ttl.und.desc = 'You are not very friendly with books, your entire literature knowledge is nothing but simple kiddie stories and fairy tales';

ttl.aaa = new Title(29);
ttl.aaa.name = 'aaa';
ttl.aaa.desc = 'They say that in the hands of a gosu with great inner ki, even a dead leaf can become a weapon that can pierce iron plates';

ttl.eat3 = new Title(30);
ttl.eat3.name = 'Malnourished'; ttl.eat3.rar = 3
ttl.eat3.desc = 'You are clearly undereating, yet, eating something other than bland untasty bread leaves you in a positive mood ';

ttl.srd1 = new Title(31);
ttl.srd1.name = 'Aspiring Ronin';
ttl.srd1.desc = 'Watching swordplay of elder swordmasters always fascinated you, yet even trying to hold the sword properly is apparently extremely difficult. You are not the type to give up though';

ttl.srd2 = new Title(32);
ttl.srd2.name = 'Sword Trainee'; ttl.srd2.rar = 2
ttl.srd2.desc = 'You have only just began learning the Way of the Sword, which clearly shows. You still find it hard to wield the sword properly, let alone attempting to hit something with it';

ttl.srd3 = new Title(33);
ttl.srd3.name = 'Squire'; ttl.srd3.rar = 3
ttl.srd3.desc = 'All those thousand swings training sessions weren\'t for nothing. Now you can hold your sword somewhat straight and your posture got better. Hovewer, slashing things didn\'t get any easier';

ttl.srd4 = new Title(34);
ttl.srd4.name = 'Blade for Hire'; ttl.srd4.rar = 4
ttl.srd4.desc = 'Your swordplay has reached the rank of a common foot soldier. Or so you thought. Maybe you can match a lowest level mercenary, which isn\'t something to be proud of. You are still ways away from calling yourself a proper swordsman';

ttl.lnc1 = new Title(35);
ttl.lnc1.name = 'Spearholder';
ttl.lnc1.desc = 'You have learned how the art of Spearmanship can be used for both offensive and defensive combat, which you think suits you pretty well. Hovewer, handling a spear with skill is much more difficult than you initially thought';

ttl.lnc2 = new Title(36);
ttl.lnc2.name = 'Village Militia'; ttl.lnc2.rar = 2
ttl.lnc2.desc = 'Your reflexes wielding a polearm got slightly better, at the very least you aren\'t dropping your weapon after every second swing anymore. You could be considered a part of a peasant spear group with your measly skills';

ttl.lnc3 = new Title(37);
ttl.lnc3.name = 'Phlanger'; ttl.lnc3.rar = 3
ttl.lnc3.desc = 'You\'re getting a hold of your primitive spearmanship, which is reasurring considering how much effort went into your training. You could be a part of the second-rate frontline military squad with your ability, but you will aim higher';

ttl.hmr2 = new Title(38);
ttl.hmr2.name = 'Basher'; ttl.hmr2.rar = 2
ttl.hmr2.desc = 'Squashing things with a hammer or a club may seem simple, but it does require some skill to do so properly and effectively. You understand the basics but lack the strength for it, though';

ttl.hmr3 = new Title(39);
ttl.hmr3.name = 'Heavy Hand'; ttl.hmr3.rar = 3
ttl.hmr3.desc = 'You favor strong blunt weaponry, which shows by how sturdy and hard your hands have become. This is good for your overall strength. You still lack any skill or technique, hovewer';

ttl.kill1 = new Title(40);
ttl.kill1.name = 'Pest Control';
ttl.kill1.desc = 'You have wiped out about 10000 creatures on your way. Most of them weren\'t living things though... right?';

ttl.rspn1 = new Title(41);
ttl.rspn1.name = 'Punching Bag';
ttl.rspn1.desc = 'Getting beat up like this hurts like hell. You better think of a way out of this misery!';

ttl.rfpn1 = new Title(42);
ttl.rfpn1.name = 'Garbage Eater';
ttl.rfpn1.desc = 'All the time you had to consume disgusting rotten stuff is finally paying off... Kind of. You would rather avoid doing that in the future, if possible';

ttl.rfpn2 = new Title(43);
ttl.rfpn2.name = 'Iron Stomach'; ttl.rfpn2.rar = 2;
ttl.rfpn2.desc = 'Going through these desperate times of having such an unsafe diet, your stomach doesn\'t feel as awful anymore. You really shouldn\'t be doing that';
ttl.rfpn2.talent = function () { you.mods.survinf++ }
ttl.rfpn2.tdesc = 'Allows you to roughly guess when perishable food rots (shift key)'

ttl.rfpn3 = new Title(44);
ttl.rfpn3.name = 'Omnivore'; ttl.rfpn3.rar = 3;
ttl.rfpn3.desc = 'It seems like you can eat a lot of awful stuff and feel fine afterwards. Is that really worth it? You think it is. The taste doesn\'t get any better though...';

ttl.tqtm = new Title(45);
ttl.tqtm.name = 'Quartermaster'; ttl.tqtm.rars = true;
ttl.tqtm.desc = 'You have returned more than 300 pieces of dojo supplies. How much of that stuff do they have?';
ttl.tqtm.talent = function () {/*(:*/ }
ttl.tqtm.tdesc = 'Dummies may drop something special'

ttl.ddw = new Title(46);
ttl.ddw.name = 'Glass Bones'; ttl.ddw.rar = 0; ttl.ddw.rars = true;
ttl.ddw.desc = 'Bizzarely, you got yourself knocked out by the weakest enemy in existence. How did that happen? You feel like you have achieved somewhat absurd understanding of how frail your body actually is. Perhaps violence isn\'t for you';

ttl.neet = new Title(47);
ttl.neet.name = 'Hikikomori'; ttl.neet.rars = true;
ttl.neet.desc = 'You have spent an entire year at your house without going out even once. You were somewhat productive in your seclusion, but the time spent didn\'t even feel like a year, however...';

ttl.aptc = new Title(48);
ttl.aptc.name = 'Apprentice'; ttl.aptc.rar = 2;
ttl.aptc.desc = 'You have succesfully completed the second part of dojo\'s training courses. You are impressed by your own achievements!';

ttl.sld1 = new Title(49);
ttl.sld1.name = 'Wimp';
ttl.sld1.desc = 'The fear of pain has forced you to begin taking cover behind whatever you take your hands on. Shields fall within this category nicely, you think you should try learning how to handle them properly';

ttl.sld2 = new Title(50);
ttl.sld2.name = 'Defender'; ttl.sld2.rar = 2;
ttl.sld2.desc = 'Even if you\'re still full of openings and have a terrible time adjusting to the weight of a shield you\'re holding, you can still manage to reflect the slowest, stupidest and the most direct attack you\'re facing. Sometimes';

ttl.sld3 = new Title(51);
ttl.sld3.name = 'Protector'; ttl.sld3.rar = 3;
ttl.sld3.desc = 'You understand better how shields work, and your reaction time against frontal attacks has improved as well. Your openings are still plentiful, but you manage to stay alive';

ttl.sld4 = new Title(52);
ttl.sld4.name = 'Sentry'; ttl.sld4.rar = 4;
ttl.sld4.desc = '';

ttl.seye1 = new Title(53);
ttl.seye1.name = 'Bat Eyes';
ttl.seye1.desc = 'Sometimes when you hit an enemy the certain way your attack feels somewhat stronger, you noticed. What\'s that about?';

ttl.seye2 = new Title(54);
ttl.seye2.name = 'Suspicious Eyes'; ttl.seye2.rar = 2;
ttl.seye2.desc = 'You have confirmed it, bashing the enemy on the head makes your battles end slightly quicker. Is it only the head that does that?';

ttl.pet1 = new Title(55);
ttl.pet1.name = 'Valley Cat';
ttl.pet1.desc = 'Stray animals don\'t seem to be wary of you that much, for some reason. You are able to hug a random cat without it running away';

ttl.pet2 = new Title(56);
ttl.pet2.name = 'Animal Friend'; ttl.pet2.rar = 2;
ttl.pet2.desc = 'Minor predators don\'t view you as a threat, which is good, but you don\'t want to bother them when they\'re hungry, though. You think you have a way to avoid the dangers of wild life, at least';

ttl.dngs1 = new Title(57);
ttl.dngs1.name = 'Wary';
ttl.dngs1.desc = 'Sometimes when you\'re hit it hurts much more then usual. You hate this, but why does that happen? You have to figure out how to avoid this';

ttl.dngs2 = new Title(58);
ttl.dngs2.name = 'Careful'; ttl.dngs2.rar = 2;
ttl.dngs2.desc = 'Avoiding hits to the vitals is much harder, as you found out. You must think of a way to take precautions to guarantee your own safety';

ttl.rtr1 = new Title(59);
ttl.rtr1.name = 'Coward'; ttl.rtr1.rar = 1;
ttl.rtr1.desc = 'You can\'t stomach the thought of getting seriously injured at all. Running away from danger is where it\'s at';

ttl.ddcd = new Title(60);
ttl.ddcd.name = 'null'; ttl.ddcd.rar = 0; ttl.ddcd.rars = true;
ttl.ddcd.desc = 'null';

ttl.neet2 = new Title(61);
ttl.neet2.name = 'Shut In'; ttl.neet2.rar = 2; ttl.neet2.rars = true;
ttl.neet2.desc = 'Staying home for a year was nothing, this time you went half a decade staying put in your comfortable living space, caring not for the outside world. You are not sure how you feel about nobody ever checking on you..';

ttl.neet3 = new Title(62);
ttl.neet3.name = 'Hermit'; ttl.neet3.rar = 3; ttl.neet3.rars = true;
ttl.neet3.desc = 'Tenth of century at home, you did it. What were you even doing in there? Sleeping? Cultivating? It doesn\'t matter, you can proudly call yourself a hermit and stay forgotten until you decide to show yourself in light again';

ttl.coo1 = new Title(63);
ttl.coo1.name = 'Kitchen Nightmare';
ttl.coo1.desc = 'Either cooking is a very difficult art, or you\'re just very bad at it. Leaving you alone in the kitchen is a recipe for disaster. But you won\'t become good without making some mistakes first';

ttl.kill2 = new Title(64);
ttl.kill2.name = 'Sweeper'; ttl.kill2.rar = 2;
ttl.kill2.desc = 'Eliminating 50000 creatures like it was nothing made you wonder whether this realm is filled with weaklings or it is you who are simply too strong to handle. It is probably the former';

ttl.kill3 = new Title(65);
ttl.kill3.name = 'Bone Collector'; ttl.kill3.rar = 3;
ttl.kill3.desc = 'Hack and slash! 200000 foes have fallen under mighty arm! You\'re getting a little too comfortable on your path of destruction';

ttl.kill4 = new Title(66);
ttl.kill4.name = 'Decamate'; ttl.kill4.rar = 4;
ttl.kill4.desc = 'Million down, billions to go...';

ttl.kill5 = new Title(67);
ttl.kill5.name = 'Sentinel'; ttl.kill5.rar = 5;
ttl.kill5.desc = '5 million deaths! You managed to undo the population of the small city. That\'s quiet a feat given your low power level';

ttl.axc1 = new Title(68);
ttl.axc1.name = 'Hack';
ttl.axc1.desc = 'Axes are difficult to handle, you learned. This isn\'t simply chpping firewood on a log, you a need hard grip and proper hand flexibility to fight with them efficiently';

ttl.axc2 = new Title(69);
ttl.axc2.name = 'Chopper';
ttl.axc2.desc = 'You feel strong when using axes in battles! You only feel that way, you are not any strong with it yet. It is difficut for you to find the right balance to swing that thing';

ttl.axc3 = new Title(70);
ttl.axc3.name = 'Axejack'; ttl.axc3.rar = 3;
ttl.axc3.desc = '';

ttl.dth1 = new Title(71);
ttl.dth1.name = 'Fallen';
ttl.dth1.desc = 'Somehow you always escape life threatening situations even after being hit and bruised a lot, hovewer you still lose conciousness. Newbie\'s luck?';

ttl.dth2 = new Title(72);
ttl.dth2.name = 'Decadent'; ttl.dth2.rar = 2;
ttl.dth2.desc = 'Often you manage to avoid death even after being heavily injured. Perhaps you have a very resilient body, or Heavens aren\'t willing to accept you yet';

ttl.dth3 = new Title(73);
ttl.dth3.name = 'Cadaver'; ttl.dth3.rar = 3;
ttl.dth3.desc = '';

ttl.sld5 = new Title(74);
ttl.sld5.name = 'Bastion'; ttl.sld5.rar = 5;
ttl.sld5.desc = '';

ttl.seye3 = new Title(75);
ttl.seye3.name = 'Dissector'; ttl.seye3.rar = 3;
ttl.seye3.desc = 'By slaying foes as much as you did, you learned how to quickly notice your enemies\' weak points. This knowledge will allow you quickly and effectively dispose of those standing in your way';

ttl.fmn1 = new Title(76);
ttl.fmn1.name = 'Scrawny';
ttl.fmn1.desc = 'You feel terrible. You might want to eat something or you\'ll end up being nothing more than a skeleton';

ttl.fmn2 = new Title(77);
ttl.fmn2.name = 'Bag Of Bones'; ttl.fmn2.rar = 2;
ttl.fmn2.desc = 'Days of hunger took a toll on your body, yet made you learn to conserve your energy by other means, which shows. Just a bit';

ttl.fmn3 = new Title(78);
ttl.fmn3.name = 'Emaciated'; ttl.fmn3.rar = 3;
ttl.fmn3.desc = 'Yesterdays\'s weakness is today\'s strength. Or so you\'ve heard. You are not feeling as awful and weak by starving yourself, but there\'s still nothing to be proud of';

ttl.shpt1 = new Title(79);
ttl.shpt1.name = 'Third-Rate Shopper';
ttl.shpt1.desc = 'You left the shop with half a thousand goods total. It\'s a tiny amount if you think about it - food, cooking ingredients, household tools';

ttl.shpt2 = new Title(80);
ttl.shpt2.name = ''; ttl.shpt2.rar = 2;
ttl.shpt2.desc = ''

ttl.shpt3 = new Title(81);
ttl.shpt3.name = ''; ttl.shpt3.rar = 3;
ttl.shpt3.desc = ''

ttl.mone1 = new Title(82);
ttl.mone1.name = 'Beggar';
ttl.mone1.desc = 'Acquiring a whole 1 Gold coin worth of money is a lot for someone as pathetic you. You could survive with that amount for a year!';

ttl.mone2 = new Title(83);
ttl.mone2.name = 'Peasant'; ttl.mone2.rar = 2;
ttl.mone2.desc = ''

ttl.mone3 = new Title(84);
ttl.mone3.name = ''; ttl.mone3.rar = 3;
ttl.mone3.desc = ''

ttl.geti1 = new Title(85);
ttl.geti1.name = 'Collector';
ttl.geti1.desc = ''

ttl.geti2 = new Title(86);
ttl.geti2.name = 'Packmule'; ttl.geti2.rar = 2;
ttl.geti2.desc = ''

ttl.geti3 = new Title(87);
ttl.geti3.name = 'Hoarder'; ttl.geti3.rar = 3
ttl.geti3.desc = ''

ttl.geti4 = new Title(88);
ttl.geti4.name = 'Treasure Hunter'; ttl.geti4.rar = 4
ttl.geti4.desc = ''

ttl.tghs1 = new Title(89);
ttl.tghs1.name = 'Scarred';
ttl.tghs1.desc = ''

ttl.tghs2 = new Title(90);
ttl.tghs2.name = 'Thickskinned'; ttl.tghs2.rar = 2;
ttl.tghs2.desc = ''

ttl.tghs3 = new Title(91);
ttl.tghs3.name = 'Brute'; ttl.tghs3.rar = 3;
ttl.tghs3.desc = ''

ttl.dth4 = new Title(92);
ttl.dth4.name = 'Carcass'; ttl.dth4.rar = 4;
ttl.dth4.desc = '';

ttl.ttsttl1 = new Title(93);
ttl.ttsttl1.name = 'Unknown';
ttl.ttsttl1.desc = 'You barely took a single minor step into the world by gathering 10 titles. Nobody takes notice of you or your ambition, you are but a filler existence that doesn\'t amount to anything yet';

ttl.ttsttl2 = new Title(94);
ttl.ttsttl2.name = 'Nameless'; ttl.ttsttl2.rar = 2;
ttl.ttsttl2.desc = '25 titles would be something an average working man would aquire effortlessly by simply living his life. You shouldn\'t feel proud by only reaching this high';

ttl.ttsttl3 = new Title(95);
ttl.ttsttl3.name = 'Ordinary'; ttl.ttsttl3.rar = 3;
ttl.ttsttl3.desc = 'You\'re finally getting somewhere, having a basic set of skills and minor achievements. You could even be called reliable by some. But once again, you are feeling like a part of the mass';

ttl.ttsttl4 = new Title(96);
ttl.ttsttl4.name = 'Accomplished'; ttl.ttsttl4.rar = 4;
ttl.ttsttl4.desc = '100';

ttl.hstr1 = new Title(97);
ttl.hstr1.name = 'Pathetic';
ttl.hstr1.desc = 'Your weak punch can barely exert a power of 100kg, which is a measly amount in the martial world. A simple farmer can hit harder than this';

ttl.hstr2 = new Title(98);
ttl.hstr2.name = 'Softhitter'; ttl.hstr2.rar = 2;
ttl.hstr2.desc = 'You got somewhat stronger in reaching 250kg worth of punch power. You can manage some physical labor with that strength, but nothing noteworthy';

ttl.hstr3 = new Title(99);
ttl.hstr3.name = 'Jawbreaker'; ttl.hstr3.rar = 3;
ttl.hstr3.desc = 'Half ton punch isn\'t bad, you can successfully push a body a few meters back if you hit correctly in the right spot. This only applies to entities without strong physical protection, you are no match to anything with real strength';

ttl.hstr4 = new Title(100);
ttl.hstr4.name = 'Nameless'; ttl.hstr4.rar = 4;
ttl.hstr4.desc = '1000';

ttl.cpet1 = new Title(101);
ttl.cpet1.name = 'Cat Lover'; ttl.cpet1.rar = 2;
ttl.cpet1.desc = 'You really love that kitty';

ttl.jbs1 = new Title(102);
ttl.jbs1.name = 'Errand Boy';
ttl.jbs1.desc = '';

ttl.jbs2 = new Title(103);
ttl.jbs2.name = 'Part-Timer'; ttl.jbs2.rar = 2;
ttl.jbs2.desc = '';

ttl.jbs3 = new Title(104);
ttl.jbs3.name = 'Hired Hand'; ttl.jbs3.rar = 3;
ttl.jbs3.desc = '';

ttl.pet3 = new Title(105);
ttl.pet3.name = 'Wild Kid'; ttl.pet3.rar = 3;
ttl.pet3.desc = 'All that time you spent with your cat made you understand a whole lot about the habits and behaviour of vicious predators. You feel that knowledge might prove to be useful one day';

ttl.ndthextr = new Title(106);
ttl.ndthextr.name = 'Safehouse'; ttl.ndthextr.rar = 0; ttl.ndthextr.rars = true;
ttl.ndthextr.desc = 'You kept yourself well and protected, avoiding danger and moving out of harm\'s way for quiet some time. Almost like any other person who fears for his life';

ttl.indkill = new Title(107);
ttl.indkill.name = 'Indirect Killer'; ttl.indkill.rar = 2; ttl.indkill.rars = true;
ttl.indkill.desc = '';


function Weather(id) {
	this.name = '?'; this.id = id || -1
	this.ontick = function () { };
} var weather = new Object();

weather.sunny = new Weather(100); weather.sunny.name = 'Sunny'; weather.sunny.c = 'yellow';
weather.cloudy = new Weather(101); weather.cloudy.name = 'Cloudy'; weather.cloudy.c = 'ghostwhite';
weather.stormy = new Weather(102); weather.stormy.name = 'Stormy'; weather.stormy.c = '#bdbdbd';
weather.overcast = new Weather(103); weather.overcast.name = 'Overcast'; weather.overcast.c = 'lightgrey';
weather.storm = new Weather(104); weather.storm.name = 'Storm'; weather.storm.frain = true; weather.storm.c = 'lightgrey'; weather.storm.bc = '#5a5a5a';
weather.thunder = new Weather(105); weather.thunder.name = 'Thunderstorm'; weather.thunder.frain = true; weather.thunder.c = 'yellow'; weather.thunder.bc = '#5a5a5a';
weather.rain = new Weather(106); weather.rain.name = 'Rain'; weather.rain.c = 'cyan'; weather.rain.bc = '#2a3971'; weather.rain.frain = true;
weather.heavyrain = new Weather(107); weather.heavyrain.name = 'Heavy rain'; weather.heavyrain.frain = true; weather.heavyrain.c = 'cyan'; weather.heavyrain.bc = '#4d5eb3';
weather.misty = new Weather(108); weather.misty.name = 'Misty'; weather.misty.bc = '#244b68';
weather.foggy = new Weather(109); weather.foggy.name = 'Foggy'; weather.foggy.bc = '#7c8b9a';
weather.drizzle = new Weather(110); weather.drizzle.name = 'Drizzle'; weather.drizzle.bc = '254863'; weather.drizzle.frain = true;
weather.clear = new Weather(111); weather.clear.name = 'Clear';
weather.snow = new Weather(112); weather.snow.name = 'Snow'; weather.snow.c = 'white'; weather.snow.bc = '#aaa'; weather.snow.fsnow = true;
weather.sstorm = new Weather(113); weather.sstorm.name = 'Snow Storm'; weather.sstorm.c = 'white'; weather.sstorm.bc = '#88a'; weather.sstorm.fsnow = true;

weather.storm.ontick = weather.rain.ontick = weather.heavyrain.ontick = weather.drizzle.ontick = function () {
	if (global.flags.inside === false) {
		if (effect.wet.active === false && !you.mods.rnprtk) giveEff(you, effect.wet, 5);
		let f = findbyid(global.current_m.eff, effect.wet.id);
		if (!f || f.active === false) giveEff(global.current_m, effect.wet, 5)
	}
}

weather.thunder.ontick = function () {
	if (global.flags.inside === false) {
		if (effect.wet.active === false && !you.mods.rnprtk) giveEff(you, effect.wet, 5);
		let f = findbyid(global.current_m.eff, effect.wet.id);
		if (!f || f.active === false) giveEff(global.current_m, effect.wet, 5)
		if (random() < .0009) {
			global.stat.lgtstk++;
			msg("You were struck by lightning!", 'black', null, null, 'yellow');
			let d = (200 / (1 + skl.aba.lvl * .05)) << 0;
			if (you.hp - d < 0) { global.atkdfty[0] = 1; you.hp = 0; you.onDeath();; giveSkExp(skl.painr, 300); giveSkExp(skl.dth, 100) } else { you.hp -= d; giveSkExp(skl.painr, 170) } giveSkExp(skl.aba, 30);
			dom.d5_1_1.update();
		}
	}
}

function callbackManager(id) {
	this.id = id || 0
	this.hooks = [{ f: function (victim, killer) { }, id: 0, data: {} }]
	this.fire = function () { }
}

callback.onDeath = new callbackManager(1);
callback.onDeath.fire = function (victim, killer) {
	for (let a in this.hooks) this.hooks[a].f(victim, killer)
}

function attachCallback(callback, what, data) {
	callback.hooks.push(what)
}

function detachCallback(callback, what) {
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

function Time() {
	this.minute = 0;
	this.hour = 0;
	this.day = 0;
	this.month = 0;
	this.year = 0;
}

var time = new Time();
time.minute = 338144100;
global.text.d_l = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
global.text.d_s = ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."];
global.text.d_j = ["月", "火", "水", "木", "金", "土", "日"];

///////////////////////////////////////////
//EFF
///////////////////////////////////////////


function Effect() {
	this.name = 'dummy';
	this.desc = '';
	this.type = 0; // 1 - on attack; 2 - on stat refersh; 3 - on tick; 4 - decor? 5 - stat mod? 6 - tickstat
	this.x; this.c; this.b;
	this.y; this.z; this.target
	this.duration; this.timer_o;
	this.active = false;
	this.use = function (y, z) { };
	this.un = function (x, y, z) { };
	this.mods = function () { }
	this.onGive = function () { };
	this.onRemove = function (x) { };
	this.onClick = function () { }
}

effect.test1 = new Effect()
effect.test1.name = 'Beast killer';
effect.test1.desc = 'Attacks against beast type creatures are 30% more effective';
effect.test1.type = 1;
effect.test1.use = function () {
	if (global.current_m.type === 1) { you.str = Math.round(you.str * 1.3); }
}

effect.bk1 = new Effect()
effect.bk1.type = 1;
effect.bk1.use = function () {
	if (global.current_m.type === 1) { you.dmlt += .2 }
}

effect.strawp = new Effect()
effect.strawp.type = 2;
effect.strawp.use = function () { you.satmax += 50; you.sat += 50 }
effect.strawp.un = function () { you.sat -= 50 }
effect.strawp.noGive = function () { msg('You feel ready for the future', 'ornage') };

effect.psn = new Effect(); effect.psn.id = 1;
effect.psn.name = 'Poison';
effect.psn.desc = 'Depletes health each second';
effect.psn.type = 3; effect.psn.atype = 1;
effect.psn.duration = 5;
effect.psn.x = '毒'; effect.psn.c = 'red'; effect.psn.b = 'darkmagenta';
effect.psn.onGive = function (x, y) {
	if (!this.active) { if (this.target.id === you.id) msg('You have been poisoned!', 'darkmagenta') }
	else {
		this.y = Math.ceil((this.y + y) / 2); this.duration += x * .7 << 0
	}
}

effect.psn.use = function (y, z) {
	this.duration--; var dmg = y || 1; this.power = y; if (this.target.id === you.id) {
		if (effect.psnwrd.active === false) {
			giveSkExp(skl.poisr, this.power * .1); dmg *= Math.ceil(1 - skl.poisr.use()); giveSkExp(skl.painr, this.power * .05); global.stat.dmgrt += dmg;
			if (you.hp - dmg > 0) you.hp -= dmg; else { you.hp = 0; removeEff(this); this.duration = 5; you.onDeath(); global.atkdfty = [2, 1] }
			dom.d5_1_1.update();
		}
	}
	else {
		if (this.target.hp - dmg > 0) this.target.hp -= dmg; else { this.target.hp = 0; removeEff(this, this.target); this.duration = 5; global.atkdftm = [-1, -1, 1]; this.target.onDeath(you); global.stat.indkill++ }
		dom.d5_1_1m.update();
	}
	if (this.duration === 0) {
		removeEff(this, this.target); this.duration = 5;
	}
}

effect.vnm = new Effect(); effect.vnm.id = 2;
effect.vnm.name = 'Venom';
effect.vnm.desc = 'Depletes health each second';
effect.vnm.type = 3; effect.vnm.atype = 1;
effect.vnm.duration = 15;
effect.vnm.x = '毒'; effect.vnm.c = 'blue'; effect.vnm.b = 'red';
effect.vnm.onGive = function (x, y) {
	if (!this.active) { if (this.target.id === you.id) msg('You have been badly poisoned!', 'darkmagenta') }
	else {
		this.y = Math.ceil((this.y + y) / 1.5); this.duration += x * .5 << 0
	}
}

effect.vnm.use = function (y, z) {
	this.duration--; var dmg = y; this.power = y; if (this.target.id === you.id) {
		if (effect.psnwrd2.active === false) {
			giveSkExp(skl.poisr, this.power * .1); dmg *= Math.ceil(1 - (skl.poisr.use() * .3)); giveSkExp(skl.painr, this.power * .2); global.stat.dmgrt += dmg;
			if (you.hp - dmg > 0) you.hp -= dmg; else { you.hp = 0; removeEff(this); this.duration = 5; you.onDeath(); global.atkdfty = [2, 2] }
			dom.d5_1_1.update();
		}
	}
	else {
		if (this.target.hp - dmg > 0) this.target.hp -= dmg; else { this.target.hp = 0; removeEff(this, this.target); this.duration = 5; global.atkdftm = [-1, -1, 1]; this.target.onDeath(you); global.stat.indkill++ }
		dom.d5_1_1m.update();
	}
	if (this.duration === 0) {
		removeEff(this, this.target); this.duration = 5;
	}
}

effect.psnwrd = new Effect(); effect.psnwrd.id = 3;
effect.psnwrd.name = 'Poison block';
effect.psnwrd.desc = 'Weak poisons have no effect on you';
effect.psnwrd.type = 3;
effect.psnwrd.duration = 600;
effect.psnwrd.x = '＋'; effect.psnwrd.c = 'lime'; effect.psnwrd.b = 'darkmagenta';
effect.psnwrd.onGive = function () { msg('You feel safer', 'lime') };
effect.psnwrd.use = function () {
	if (--this.duration === 0) { removeEff(this); this.duration = 600; };
}

effect.psnwrd2 = new Effect(); effect.psnwrd2.id = 4;
effect.psnwrd2.name = 'Venom block';
effect.psnwrd2.desc = 'Severe poisons have no effect on you';
effect.psnwrd2.type = 3;
effect.psnwrd2.duration = 600;
effect.psnwrd2.x = '＋'; effect.psnwrd2.c = 'lime'; effect.psnwrd2.b = 'magenta';
effect.psnwrd2.onGive = function () { msg('You feel much safer', 'lime') };
effect.psnwrd2.use = function () {
	if (--this.duration === 0) { removeEff(this); this.duration = 600; };
}

effect.imm = new Effect(); effect.imm.id = 5;
effect.imm.name = 'Immortality';
effect.imm.desc = 'Eternal life';
effect.imm.type = 2;
effect.imm.duration = 0;
effect.imm.x = '￥'; effect.imm.c = 'gold'; effect.imm.b = 'navy';
effect.imm.use = function () {
}

effect.snch = new Effect(); effect.snch.id = 6;
effect.snch.name = 'Sun blessing';
effect.snch.desc = 'You are blessed by Sun';
effect.snch.type = 2; effect.snch.eq = true;
effect.snch.duration = -1;
effect.snch.x = '☼'; effect.snch.c = 'gold'; effect.snch.b = 'blue';
effect.snch.onGive = function () {
	if (global.flags.loadstate) {
		you.str += 5; you.sat += 100;
		you.spd += 1; you.hpmax += 100; you.satmax += 100
		you.int += 5; you.str_d += 5; you.agl_d += 5;
		you.agl += 5; you.int_d += 5; global.flags.snch = true;
	}
};
effect.snch.use = function () {
	if (global.flags.isday === true) {
		if (!global.flags.snch) {
			you.str += 5; you.sat += 100;
			you.spd += 1; you.hpmax += 100; you.satmax += 100
			you.int += 5; you.str_d += 5; you.agl_d += 5;
			you.agl += 5; you.int_d += 5; global.flags.snch = true;
		}
	}
	timers.snch = setInterval(function () {
		if (global.flags.isday === true) {
			if (!global.flags.snch) {
				you.str += 5; you.sat += 100;
				you.spd += 1; you.hpmax += 100; you.satmax += 100
				you.int += 5; you.str_d += 5; you.agl_d += 5;
				you.agl += 5; you.int_d += 5; global.flags.snch = true; update_d();
			}
		} else { if (global.flags.snch === true) { effect.snch.un(); you.stat_r(); update_d(); } }
	}, 1000)
}
effect.snch.un = function () {
	clearInterval(timers.snch); if (global.flags.snch === true) { you.sat -= 100; global.flags.snch = false; }
}


effect.mnch = new Effect(); effect.mnch.id = 7;
effect.mnch.name = 'Moon blessing';
effect.mnch.desc = 'You are blessed by Moon';
effect.mnch.type = 2; effect.mnch.eq = true;
effect.mnch.duration = -1;
effect.mnch.x = '☽'; effect.mnch.c = 'gold'; effect.mnch.b = 'purple';
effect.mnch.onGive = function () {
	if (global.flags.loadstate) {
		you.str += 5; you.sat += 100;
		you.spd += 1; you.hpmax += 100; you.satmax += 100
		you.int += 5; you.str_d += 5; you.agl_d += 5;
		you.agl += 5; you.int_d += 5; global.flags.mnch = true;
	}
};
effect.mnch.use = function () {
	if (global.flags.isday === false) {
		if (!global.flags.mnch) {
			you.str += 5; you.sat += 100;
			you.spd += 1; you.hpmax += 100; you.satmax += 100
			you.int += 5; you.str_d += 5; you.agl_d += 5;
			you.agl += 5; you.int_d += 5; global.flags.mnch = true;
		}
	}
	timers.mnch = setInterval(function () {
		if (global.flags.isday === false) {
			if (!global.flags.mnch) {
				you.str += 5; you.sat += 100;
				you.spd += 1; you.hpmax += 100; you.satmax += 100
				you.int += 5; you.str_d += 5; you.agl_d += 5;
				you.agl += 5; you.int_d += 5; global.flags.mnch = true; update_d();
			}
		} else { if (global.flags.mnch === true) { effect.mnch.un(); you.stat_r(); update_d(); } }
	}, 1000)
}
effect.mnch.un = function () {
	clearInterval(timers.mnch); if (global.flags.mnch === true) { you.sat -= 100; global.flags.mnch = false; }
}

effect.fpn = new Effect(); effect.fpn.id = 8;
effect.fpn.name = 'Food poisoning';
effect.fpn.desc = 'From eating something bad';
effect.fpn.type = 3;
effect.fpn.duration = 30;
effect.fpn.x = '«'; effect.fpn.c = 'lime'; effect.fpn.b = 'grey';
effect.fpn.onGive = function () { msg(select(['You feel bad inside', 'Your stomach bothers you']), 'green') };
effect.fpn.use = function (y, z) {
	if (you.sat > 0) giveSkExp(skl.fdpnr, 1); giveSkExp(skl.painr, 1);
	this.duration--; let dmg = randf(1, 3) * (1 - skl.fdpnr.use()); if (you.sat > 0) you.sat - dmg >= 0 ? you.sat -= dmg : you.sat = 0;
	dom.d5_1_1.update();
	if (this.duration === 0) { removeEff(this); this.duration = 30; }
}

effect.wet = new Effect(); effect.wet.id = 9;
effect.wet.name = 'Wet';
effect.wet.desc = 'You\'re drenched in water';
effect.wet.type = 3;
effect.wet.duration = 5;
effect.wet.x = '雨'; effect.wet.c = 'cyan'; effect.wet.b = 'blue';
effect.wet.onGive = function () { if (this.target.id === you.id) { msg('Your clothes get soaked', 'cyan', null, null, 'blue'); global.flags.iswet = true } };
effect.wet.onRemove = function () { msg('You dry up', 'orange'); global.flags.iswet = false };
effect.wet.use = function () {
	if (global.flags.inside === false && global.flags.israin === true && !you.mods.rnprtk) this.duration += 6;
	if (this.target.id === you.id) {
		if (you.sat > 0) giveSkExp(skl.abw, .05);
		effect.fplc.active === true ? this.duration -= 15 : this.duration--;
	}
	else this.duration--; if (this.duration > 600) this.duration = 600;
	if (this.duration <= 0) { removeEff(this, this.target); this.duration = 5; };
}

effect.fplc = new Effect(); effect.fplc.id = 10; effect.fplc.save = false;
effect.fplc.name = 'Fireplace Aura';
effect.fplc.desc = 'You\'re feeling the warmth of the fireplace';
effect.fplc.type = 3;
effect.fplc.duration = 2;
effect.fplc.x = '火'; effect.fplc.c = 'yellow'; effect.fplc.b = 'crimson';
effect.fplc.onGive = function () { msg('You feel the warmth of the fireplace', 'orange') };
effect.fplc.use = function () {
	var fire = findbyid(furn, furniture.frplc.id);
	this.duration = fire.data.fuel; giveSkExp(skl.abf, .2);
	if (this.duration === 0) {
		removeEff(this); this.duration = 2;
		rsort(global.rm);
	}
}
effect.fplc.onGive = function () { you.mods.ckfre += 1; };
effect.fplc.onRemove = function () { you.mods.ckfre -= 1; };

effect.cdlt = new Effect(); effect.cdlt.id = 11;
effect.cdlt.name = 'Candlelight';
effect.cdlt.desc = 'You\'re carrying a candle. The surroundings are lit up';
effect.cdlt.type = 3;
effect.cdlt.duration = 360;
effect.cdlt.x = '❛'; effect.cdlt.c = 'gold'; effect.cdlt.b = '#440205';
effect.cdlt.use = function () {
	if (--this.duration === 0) { removeEff(this); this.duration = 360; }
}
effect.cdlt.onGive = function () { you.mods.light += 1; };
effect.cdlt.onRemove = function () { you.mods.light -= 1; };


effect.tst2 = new Effect(); effect.tst2.id = 12;
effect.tst2.name = 'STR+';
effect.tst2.desc = 'STR+';
effect.tst2.type = 2;
effect.tst2.duration = 0;
effect.tst2.x = 'X'; effect.tst2.c = 'RED'; effect.tst2.b = 'WHITE';
effect.tst2.use = function () {
	you.str *= .5; you.str_d *= .5
}

effect.slep = new Effect(); effect.slep.id = 13;
effect.slep.name = 'Sleep';
effect.slep.desc = 'You are fast asleep';
effect.slep.type = 4;
effect.slep.duration = -1;
effect.slep.x = 'z'; effect.slep.c = 'white'; effect.slep.b = 'dimgray';
effect.slep.use = function () {
}

effect.bled = new Effect(); effect.bled.id = 14;
effect.bled.name = 'Bleeding';
effect.bled.desc = 'Depletes health each second';
effect.bled.type = 3; effect.bled.atype = 1;
effect.bled.duration = 5;
effect.bled.x = '血'; effect.bled.c = 'red'; effect.bled.b = 'darkred';
effect.bled.onGive = function (x, y) {
	if (!this.active) { if (this.target.id === you.id) msg('You\'re losing blood!', 'red') }
	else {
		this.y = Math.ceil(this.y + y * .2 + 1); this.duration += x * .9 << 0
	}
}
effect.bled.use = function (y, z) {
	this.duration--;
	this.power = y; let dmg = this.power; dmg = Math.ceil(rand(dmg * .6, dmg * 1.4)); if (this.target.id === you.id) {
		giveSkExp(skl.bledr, this.power * .1); dmg *= Math.ceil(1 - skl.bledr.use()); global.stat.dmgrt += dmg; if (you.hp - dmg > 0) you.hp -= dmg; else { you.hp = 0; removeEff(this); this.duration = 5; you.onDeath(); global.atkdfty = [2, 3] }
		dom.d5_1_1.update();
	}
	else { if (this.target.hp - dmg > 0) this.target.hp -= dmg; else { this.target.hp = 0; removeEff(this, this.target); this.duration = 5; this.target.onDeath(you); global.stat.indkill++ } }
	if (this.duration === 0) { removeEff(this, this.target); this.duration = 5; };
}
effect.bled.onClick = function () {
	return;
	let it; if (item.bdgh.have) item.bdgh.use();
}

effect.tarnish = new Effect(); effect.tarnish.id = 15;
effect.tarnish.name = 'Tarnished';
effect.tarnish.desc = 'Equipment usability -30%';
effect.tarnish.type = 4;
effect.tarnish.duration = -1;
effect.tarnish.x = '≠'; effect.tarnish.c = 'purple'; effect.tarnish.b = 'grey';
effect.tarnish.onGive = function () { msg('Your equipment cracks', 'purple') };
effect.tarnish.use = function (y, z) {
}

effect.prostasia = new Effect(); effect.prostasia.id = 16;
effect.prostasia.name = 'Prostasía';
effect.prostasia.desc = 'Equipment usability +30%';
effect.prostasia.type = 4;
effect.prostasia.duration = -1;
effect.prostasia.x = '≒'; effect.prostasia.c = 'midnightblue'; effect.prostasia.b = 'skyblue';
effect.prostasia.onGive = function () { msg('You feel secure', 'skyblue') };
effect.prostasia.use = function (y, z) {
}

effect.incsk = new Effect(); effect.incsk.id = 17;
effect.incsk.name = 'Incense Aroma';
effect.incsk.desc = 'Your senses are enhanced';
effect.incsk.type = 3;
effect.incsk.duration = 600;
effect.incsk.x = 'Í'; effect.incsk.c = 'gold'; effect.incsk.b = '#440205';
effect.incsk.use = function () {
	if (--this.duration === 0) { removeEff(this); this.duration = 600; }
}

effect.run = new Effect(); effect.run.id = 18;
effect.run.name = 'Running';
effect.run.desc = 'You\'re jogging';
effect.run.type = 4;
effect.run.duration = -1;
effect.run.x = '走'; effect.run.c = 'black'; effect.run.b = 'skyblue';

effect.drunk = new Effect(); effect.drunk.id = 19;
effect.drunk.name = 'Inebriated';
effect.drunk.desc = 'You\'re feeling drunk from alcohol';
effect.drunk.type = 5;
effect.drunk.duration = 15;
effect.drunk.x = '酒'; effect.drunk.c = 'darkred'; effect.drunk.b = 'orange';
effect.drunk.use = function () {
	if (--this.duration === 0) removeEff(this);
}
effect.drunk.mods = function () { you.agle /= 1 + (.4 - skl.drka.lvl * .03); you.stre *= 1 + (.2 + skl.drka.lvl * .02); you.inte /= 1 + (.5 - skl.drka.lvl * .04) }
effect.drunk.onGive = function () { msg('You\'re feeling tipsy', 'chocolate') };
effect.drunk.onRemove = function () { msg('You sober up', 'orange') };

effect.virus = new Effect(); effect.virus.id = 20;
effect.virus.name = 'Virus';
effect.virus.desc = 'You are contaminated';
effect.virus.type = 5;
effect.virus.duration = -1;
effect.virus.x = '⁑'; effect.virus.c = 'black'; effect.virus.b = 'lightgrey';
effect.virus.use = function () {
}
effect.virus.mods = function () { you.agle /= 1.1; you.stre /= 1.1; you.sat -= 70; you.sata -= 70 }
effect.virus.onGive = function () { msg('You feel bad', 'grey') };
effect.virus.onRemove = function () { msg('You feel better', 'orange') };

effect.scout = new Effect(); effect.scout.id = 21;
effect.scout.name = 'Investigating';
effect.scout.desc = 'You\'re exploring your surroundings';
effect.scout.type = 4;
effect.scout.duration = -1;
effect.scout.x = 'ǔ'; effect.scout.c = 'aquamarine'; effect.scout.b = 'teal';

effect.invgrt = new Effect(); effect.invgrt.id = 22;
effect.invgrt.name = 'Invigorate';
effect.invgrt.desc = 'Your joints feel flexible';
effect.invgrt.type = 3;
effect.invgrt.duration = -1;
effect.invgrt.x = 'ℐ'; effect.invgrt.c = 'yellowgreen'; effect.invgrt.b = 'darkgreen';
effect.invgrt.onGive = function () { if (!this.active) { msg(this.target.id === you.id ? 'You become nimble' : (this.target.name + ' becomes nimble'), 'green'); this.target.aglm += .3 } }
effect.invgrt.onRemove = function () { this.target.aglm -= .3 }
effect.invgrt.use = function () {
	if (--this.duration === 0) {
		removeEff(this); this.duration = 5;
	};
}

effect.fei1 = new Effect(); effect.fei1.id = 23;
effect.fei1.name = 'Fei poisoning';
effect.fei1.desc = 'Fei impurities attack your flesh';
effect.fei1.type = 3;
effect.fei1.duration = 60;
effect.fei1.x = '⇔'; effect.fei1.c = 'magenta'; effect.fei1.b = '#520090';
effect.fei1.onGive = function (x, y) {
	if (!this.active) { msg('Your body is fighting against the impurities', 'darkmagenta', null, null, 'grey'); this.power = y }
	else { this.power += y; this.duration += 30 }
}
effect.fei1.use = function (y) {
	this.duration--; giveSkExp(skl.crptr, 1); giveSkExp(skl.painr, this.power); let dmg = (this.power * 5 * (1 - skl.crptr.lvl * .05)) << 0; global.stat.dmgrt += dmg;
	if (you.hp - dmg > 0) you.hp -= dmg; else { you.hp = 0; removeEff(this); you.onDeath(); global.atkdfty = [2, 4]; msg("You fail to purify the pill", 'darkgrey') }
	dom.d5_1_1.update();
	if (this.duration === 0) { removeEff(this, this.target); this.duration = 5; msg("You have successfully purified the pill!", 'lime'); giveExp(this.power * 5000 + (this.power > 1 ? (this.power * .15 * 5000) : 0), true, true, true) }
}

effect.cold = new Effect(); effect.cold.id = 24;
effect.cold.name = 'Cold';
effect.cold.desc = 'You\'re freezing';
effect.cold.type = 5;
effect.cold.duration = 5;
effect.cold.x = '冷'; effect.cold.c = '#88a'; effect.cold.b = '#eef';
effect.cold.mods = function () { you.agle /= 1.1; you.stre /= 1.1; you.hpe /= 1.1; you.sate /= 1.05 }
effect.cold.onGive = function () { if (this.target.id === you.id) msg('You feel colder', 'blue', null, null, 'cyan'); };
effect.cold.onRemove = function () { if (this.target.id === you.id) msg('You\'re warming up', 'orange'); };
effect.cold.use = function () {
	if (this.target.id === you.id) {
		giveSkExp(skl.abw, .01); giveSkExp(skl.coldr, .01);
		effect.fplc.active === true ? this.duration -= 15 : this.duration--; effect.wet.active ? global.stat.coldnt += 6 : global.stat.coldnt += 2;
		if (effect.fbite.active) effect.fbite.duration += 5; else if (global.stat.coldnt >= 460) giveEff(you, effect.fbite, 20); if (global.stat.coldnt > 0) global.stat.coldnt--
	}
	else this.duration--; if (this.duration > 600) this.duration = 600;
	if (this.duration <= 0) { removeEff(this, this.target); this.duration = 5; };
}

effect.smoke = new Effect(); effect.smoke.id = 25;
effect.smoke.name = 'Smoke';
effect.smoke.desc = 'Thick smoke abstructs your lungs';
effect.smoke.type = 3;
effect.smoke.duration = 5;
effect.smoke.x = '煙'; effect.smoke.c = 'grey'; effect.smoke.b = 'lightgrey';
effect.smoke.onGive = function () { if (this.target.id === you.id) { msg('You breathe heavily', 'grey') } };
effect.smoke.onRemove = function () { msg('Your lungs feel lighter', 'orange') };
effect.smoke.use = function () {
	if (this.target.id === you.id) {
		if (random() < .1) {
			msg(select(['*Cough..*', '*Hack..*', '*Cough-cough..*', '*Khe..*'], 'grey')); giveSkExp(skl.painr, rand(0.5, 5));
			if (you.hp > 50) you.hp -= (rand(5, 35) + you.hp * (rand(.01, .05))); dom.d5_1_1.update();
		}
	}
	this.duration--;
	if (this.duration <= 0) { removeEff(this, this.target); this.duration = 5; }
}

effect.fbite = new Effect(); effect.fbite.id = 26;
effect.fbite.name = 'Hypothermia';
effect.fbite.desc = 'Your limbs are suffering from frostbites';
effect.fbite.type = 5;
effect.fbite.duration = 5;
effect.fbite.x = '凍'; effect.fbite.c = 'red'; effect.fbite.b = '#aaf';
effect.fbite.mods = function () { you.agle /= 1.15; you.stre /= 1.2; you.hpe /= 1.2; you.sate /= 1.1 }
effect.fbite.onGive = function () { if (this.target.id === you.id) msg('Sharp pain stings you', 'red', null, null, 'cyan') };
effect.fbite.onRemove = function () { if (this.target.id === you.id) { msg('You aren\'t freezing anymore', 'orange'); global.stat.coldnt = 0 } };
effect.fbite.use = function () {
	if (this.target.id === you.id) {
		giveSkExp(skl.coldr, .05);
		effect.fplc.active === true ? this.duration -= 5 : this.duration--;
		if (random() < .3) {
			giveSkExp(skl.painr, rand(0.2, 1));
			if (you.hp > 50) you.hp -= (rand(5, 20)); dom.d5_1_1.update();
		}
	}
	else this.duration--; if (this.duration > 900) this.duration = 900;
	if (this.duration <= 0) { removeEff(this, this.target); this.duration = 5; };
}

///////////////////////////////////////////
//FURN
///////////////////////////////////////////

function Furniture() {
	this.name = '';
	this.desc = '';
	this.data = {};
	this.id = 0;
	this.removable = false;
	this.use = function () { };
	this.onGive = function () { };
	this.onSelect = function () { };
	this.onRemove = function () { };
	this.onDestroy = function () { }
	this.activate = function () { };
	this.deactivate = function () { };
}

furniture.cat = new Furniture(); furniture.cat.id = 2;
furniture.cat.name = 'Cat';
furniture.cat.desc = 'Your best feline friend';
furniture.cat.data = { age: DAY * 15, c: 0, p: 0, l1: 0, l2: 0, amount: 0, named: false, sex: false, name: 'Cat', mood: 1 }; furniture.cat.v = 1;
furniture.cat.use = function () {
	this.data.age += global.timescale; this.data.mood = this.data.mood > 1 ? 1 : this.data.mood + .002;
}

furniture.frplc = new Furniture(); furniture.frplc.id = 3;
furniture.frplc.name = 'Fireplace';
furniture.frplc.desc = 'Comfy fireplace. You can light it up for various useful means, or just to warm up';
furniture.frplc.data = { fuel: 0, amount: 0 }; furniture.frplc.v = 3;
furniture.frplc.use = function () {
	if (this.data.fuel > 0) this.data.fuel--
}

furniture.bed1 = new Furniture(); furniture.bed1.id = 4;
furniture.bed1.name = 'Straw Bedding';
furniture.bed1.desc = 'A "bed" made from several layers of straw placed onto each other. Extremely itchy and isn\'t much better from sleeping on a rock';
furniture.bed1.data = { amount: 0 }; furniture.bed1.sq = .1; furniture.bed1.v = 1;
furniture.bed1.onGive = function () {
	if (!home.bed || home.bed.sq < this.sq) home.bed = this;
}

furniture.bed2 = new Furniture(); furniture.bed2.id = 5; furniture.bed2.removable = true;
furniture.bed2.name = 'Plain Bed';
furniture.bed2.desc = 'Crude planks cobbled together to form a container for a matress or such. Not a whole lot in terms of sleeping place, but somewhat better than a hard cold floor';
furniture.bed2.data = { amount: 0 }; furniture.bed2.sq = 1; furniture.bed2.v = 5;
furniture.bed2.onGive = function () {
	if (!home.bed || home.bed.sq < this.sq) home.bed = this;
}
furniture.bed2.onRemove = function () {
	home.bed = furniture.bed1;
	giveItem(item.bed2, 1, true);
}

furniture.tbwr1 = new Furniture(); furniture.tbwr1.id = 6; furniture.tbwr1.removable = true;
furniture.tbwr1.name = 'Wooden Tableware';
furniture.tbwr1.desc = 'Cheap massproduced tableware carved from wood. Kind of a pain to wash' + dom.dseparator + '<span style="color:deeppink">Gluttony EXP gain +5%</span>';
furniture.tbwr1.data = { amount: 0 }; furniture.tbwr1.sq = 1; furniture.tbwr1.v = 3;
furniture.tbwr1.activate = function () { if (home.tbw.id === this.id) skl.glt.p += .05 };
furniture.tbwr1.deactivate = function () { if (home.tbw.id === this.id) skl.glt.p -= .05 };
furniture.tbwr1.onGive = function () {
	if (!home.tbw || home.tbw.sq < this.sq) home.tbw = this;
}
furniture.tbwr1.onRemove = function () {
	giveItem(item.tbwr1, 1, true);
}

furniture.tbwr2 = new Furniture(); furniture.tbwr2.id = 7; furniture.tbwr2.removable = true;
furniture.tbwr2.name = 'Clay Tableware';
furniture.tbwr2.desc = 'Tableware made from hardened clay. Easy to make and doesn\'t cost very much';
furniture.tbwr2.data = { amount: 0 }; furniture.tbwr2.v = 9;
furniture.tbwr2.onGive = function () {

}

furniture.tbwr3 = new Furniture(); furniture.tbwr3.id = 8; furniture.tbwr3.removable = true;
furniture.tbwr3.name = 'Ceramic Tableware';
furniture.tbwr3.desc = 'Quality and shiny ceramic tableware. Though it is commonly available and not expensive, some prefer to display it on the shelves for decorative purposes';
furniture.tbwr3.data = { amount: 0 }; furniture.tbwr3.v = 21;
furniture.tbwr3.onGive = function () {

}

furniture.wvbkt = new Furniture(); furniture.wvbkt.id = 9; furniture.wvbkt.removable = true;
furniture.wvbkt.name = 'Straw Basket';
furniture.wvbkt.desc = 'Small woven basket. For storing stuff in';
furniture.wvbkt.data = { amount: 0 };
furniture.wvbkt.onRemove = function () {
	giveItem(item.wvbkt, 1, true);
}

furniture.strgbx = new Furniture(); furniture.strgbx.id = 10;
furniture.strgbx.name = 'Storage Box';
furniture.strgbx.desc = 'Huge container with a secure padlock. You can put your possessions inside to keep them safe.';
furniture.strgbx.data = { amount: 0 }; furniture.strgbx.v = 2;

furniture.bblkt = new Furniture(); furniture.bblkt.id = 11; furniture.bblkt.removable = true;
furniture.bblkt.name = 'Ragwork Blanket';
furniture.bblkt.desc = 'More like a long sheet of cloth folded trice and stitched in. Barely offers any warmth, but keeps you from getting frostbites if it\'s windy' + dom.dseparator + '<span style="color:deeppink">Sleep EXP gain +50%</span>';
furniture.bblkt.data = { amount: 0 }; furniture.bblkt.sq = 1; furniture.bblkt.v = 2;
furniture.bblkt.activate = function () { if (home.blkt.id === this.id) skl.sleep.p += .5 };
furniture.bblkt.deactivate = function () { if (home.blkt.id === this.id) skl.sleep.p -= .5 };
furniture.bblkt.onGive = function () {
	if (!home.blkt || home.blkt.sq < this.sq) home.blkt = this;
}
furniture.bblkt.onRemove = function () {
	giveItem(item.bblkt, 1, true);
}

furniture.spillw = new Furniture(); furniture.spillw.id = 12; furniture.spillw.removable = true;
furniture.spillw.name = 'Straw Pillow';
furniture.spillw.desc = 'More like a healthy dose of dry grass in a sack. Uneven, hard, itchy, and probably bad for your neck. Despite that, it still passes as a basic tool of comfort' + dom.dseparator + '<span style="color:deeppink">Sleep EXP gain +30%</span>'
furniture.spillw.data = { amount: 0 }; furniture.spillw.sq = 1; furniture.spillw.v = 3;
furniture.spillw.activate = function () { if (home.pilw.id === this.id) skl.sleep.p += .3 };
furniture.spillw.deactivate = function () { if (home.pilw.id === this.id) skl.sleep.p -= .3 };
furniture.spillw.onGive = function () {
	if (!home.pilw || home.pilw.sq < this.sq) home.pilw = this;
}
furniture.spillw.onRemove = function () {
	giveItem(item.spillw, 1, true);
}

furniture.cyrn = new Furniture(); furniture.cyrn.id = 13; furniture.cyrn.removable = true;
furniture.cyrn.name = 'Yarn Ball';
furniture.cyrn.desc = 'Fluffy ball of yarn which is normally used as a material for knitting. Cats love these and often claim them as toys' + dom.dseparator + '<span style="color:deeppink">Patting EXP gain +15%</span><br><span style="color:springgreen">Passive Patting EXP +0.5</span>'
furniture.cyrn.data = { amount: 0 }; furniture.cyrn.v = 3;
furniture.cyrn.activate = function () { skl.pet.p += .15; you.mods.petxp += .25 };
furniture.cyrn.deactivate = function () { skl.pet.p -= .15; you.mods.petxp -= .25 };
furniture.cyrn.onRemove = function () {
	giveItem(item.cyrn, 1, true);
}

furniture.fwdpile = new Furniture(); furniture.fwdpile.id = 14; furniture.fwdpile.removable = true;
furniture.fwdpile.name = 'Firewood Pile';
furniture.fwdpile.desc = function () {
	return 'Stockpile of firewood neatly packed together for easy storage' + dom.dseparator + '<span style="color:orange">Automatically supplies fireplace, but needs refueling</span><br>' + '<div style="color:yellow"><br>Supply: <br><span>0</span><span style="display:inline-table;width:130px;border:1px solid darkgrey;margin: 7px;background-color:orange"><span style="display:block;background-color:black;float:right;width:' + (100 - this.data.fuel / (this.data.amount * 5) * 100) + '%">　</span></span><span>' + 5 * this.data.amount + '</span></div>'
}
furniture.fwdpile.data = { amount: 0, fuel: 5 }; furniture.fwdpile.v = 5;
furniture.fwdpile.onRemove = function () {
	giveItem(item.fwdpile, 1, true);
}
furniture.fwdpile.onSelect = function () {
	let f = item.fwd1; if (f.amount === 0) { msg('No firewood!', 'orange'); return }
	if (this.data.fuel === this.data.amount * 5) { msg('Firewood pile is full', 'cyan'); return } else {
		let n = this.data.amount * 5 - this.data.fuel; if (f.amount < n) n = f.amount; this.data.fuel += n; reduce(f, n);
	}
}


furniture.bookgen = new Furniture(); furniture.bookgen.id = 15; furniture.bookgen.removable = true;
furniture.bookgen.name = 'Book';
furniture.bookgen.desc = function () { return 'Book which you\'ve already read. It doesn\'t contain any new useful information' + dom.dseparator + '<span style="color:deeppink">Literacy EXP gain +1%</span><br><br><small style="color:deeppink">Current:<span style="color:orange"> +' + Math.round(furniture.bookgen.data.p * 100) + '%</span></small>' }
furniture.bookgen.data = { amount: 0, p: 0 }; furniture.bookgen.v = 0.1;
furniture.bookgen.activate = function () { skl.rdg.p += this.data.p };
furniture.bookgen.deactivate = function () { skl.rdg.p -= this.data.p };
furniture.bookgen.onGive = function () { ; if (inSector(sector.home) && this.active) skl.rdg.p += .01; this.data.p += .01; }
furniture.bookgen.onRemove = function () {
	giveItem(item.bookgen, 1, true); if (inSector(sector.home) && this.active) skl.rdg.p -= .01; this.data.p -= .01
}


///////////////////////////////////////////
//QST
///////////////////////////////////////////

function Quest() {
	this.name = 'dummy';
	this.desc = 'dummy';
	this.cond = 'dummy';
	this.tracker = function () { };
	this.fpending = function () { };
	this.init = function () { };
	this.check = function () { };
	this.id = 0;
	this.rwd = function () { };
	this.data = { started: false, done: false, pending: false, toup: false };
}

quest.test = new Quest(); quest.test.id = 1
quest.test.name = 'test';
quest.test.desc = 'find 10';
quest.test.init = function () { this.data.itm = item.rwmt1; this.data.started = true; };
quest.test.tracker = function () { if (this.data.itm.amount >= 10) this.data.pending = true; else { this.data.pending = false; this.data.toup = true }; };
quest.test.fpending = function () { msg('10 item found'); this.data.toup = false };
quest.test.rwd = function () { this.data.done = true; this.data.pending = false; msg('done'); };

quest.fwd1 = new Quest(); quest.fwd1.id = 2
quest.fwd1.name = 'Firewood Gathering'; quest.fwd1.rar = 1;
quest.fwd1.desc = 'Secure 10 bundles of firewood for hunter Yamato';
quest.fwd1.loc = 'Western Woods, Hunter\'s Lodge'
quest.fwd1.rwd = function () { you.karma++; giveWealth(100); giveItem(sld.bkl); smove(chss.frstn1b1, false); giveExp(15000, true, true, true) }
quest.fwd1.goals = function () {
	let c; if (item.fwd1.amount >= 10) c = 'lime'; else if (item.fwd1.amount < 10 && item.fwd1.amount > 0) c = 'yellow'; else if (item.fwd1.amount <= 0) c = 'red';
	let txt = 'Firewood collected: <span style="color: ' + c + '">' + item.fwd1.amount + '/10</span>'; return [txt];
}
quest.fwd1.goalsf = function () {
	return ['Firewood collected: <span style="color:lime">10/10</span>'];
}

quest.hnt1 = new Quest(); quest.hnt1.id = 3
quest.hnt1.name = 'First Hunt'; quest.hnt1.rar = 1;
quest.hnt1.desc = 'Hunt for 10 peices of meat for hunter Yamato';
quest.hnt1.loc = 'Western Woods, Hunter\'s Lodge'
quest.hnt1.rwd = function () { you.karma++; giveWealth(130); giveItem(item.jrk1, 10); giveExp(12000, true, true, true) }
quest.hnt1.goals = function () {
	let c; if (item.rwmt1.amount >= 10) c = 'lime'; else if (item.rwmt1.amount < 10 && item.rwmt1.amount > 0) c = 'yellow'; else if (item.rwmt1.amount <= 0) c = 'red';
	let txt = 'Raw meat collected: <span style="color: ' + c + '">' + item.rwmt1.amount + '/10</span>'; return [txt];
}
quest.hnt1.goalsf = function () {
	return ['Raw meat collected: <span style="color:lime">10/10</span>'];
}


quest.grds1 = new Quest(); quest.grds1.id = 4
quest.grds1.name = 'Guarding Duty'; quest.grds1.rar = 1; quest.grds1.loc = 'Village Center, Marketplace Entry Gate'
quest.grds1.desc = 'You were tasked with guarding duty to watch over marketplace';
quest.grds1.data.t = 0; quest.grds1.repeatable = true;
quest.grds1.rwd = function () { this.data.t++; giveWealth(65); giveExp(3000, true, true, true); global.stat.jcom++ };
quest.grds1.goals = function () {
	return ['Guard the gate until 8PM (<span style="color:yellow">in progress</span>)']
}
quest.grds1.goalsf = function () {
	return ['Guard the gate until 8PM (<span style="color:lime">done!</span>)']
}


quest.lmfstkil1 = new Quest(); quest.lmfstkil1.id = 5
quest.lmfstkil1.name = 'Monster Eradication'; quest.lmfstkil1.rar = 1; quest.lmfstkil1.loc = 'Western Woods, Hunter\'s Lodge'
quest.lmfstkil1.desc = 'Dangerous monsters have invaded the southern forest and terrorizing the villagers. Get rid of them!';
quest.lmfstkil1.data = { t: 0, mkilled: 0 }
quest.lmfstkil1.init = function () { this.callback() }
quest.lmfstkil1.callback = function () {
	if (!quest.lmfstkil1.data.done) attachCallback(callback.onDeath, {
		f: function (victim, killer) {
			if (victim.id === creature.wolf1.id) quest.lmfstkil1.data.mkilled++;
			if (quest.lmfstkil1.data.mkilled && !quest.lmfstkil1.data.weird1 && quest.lmfstkil1.data.mkilled >= 35) { msg('You hear a piercing wail', 'red'); quest.lmfstkil1.data.weird1 = true; smove(chss.frstn3main) }
		},
		id: 1005,
		data: { q: true }
	})
}
quest.lmfstkil1.rwd = function () { this.data.t++; giveWealth(300); giveItem(wpn.gsprw); giveItem(eqp.nkgd); giveExp(18000, true, true, true); detachCallback(callback.onDeath, 1005); }
quest.lmfstkil1.goals = function () {
	let c; if (quest.lmfstkil1.data.mkilled >= 35) c = 'lime'; else if (quest.lmfstkil1.data.mkilled < 35) c = 'yellow';
	let txt = 'Wolves killed: <span style="color: ' + c + '">' + quest.lmfstkil1.data.mkilled + '/35</span>'; return [txt];
}
quest.lmfstkil1.goalsf = function () {
	return ['Wolves killed: <span style="color:lime">35/35</span>'];
}

////////////////////////////////////////////

function giveQst(q) {
	if (!q.data.started) { q.init(); q.data.started = true; msg((q.repeatable ? '<span style="color:cyan">Repeatable</span> q' : 'Q') + 'uest accepted: ' + '<span style="color:orange">"' + q.name + '"</span>', 'lightblue', q, 8); let have = false; for (let a in qsts) if (qsts[a].id === q.id) { have = true; break } if (!have) qsts.push(q); }
}

function finishQst(q) {
	if (q.data.started) { q.data.done = true; q.data.started = false; q.data.pending = false; msg('Quest completed: ', 'lime'); msg_add('"' + q.name + '"', 'orange'); q.rwd(); global.stat.qstc++ }
}

global.text.alcohol_d = ["You drank some alcohol. You feel warm inside.", "You drank alcohol. Party on!", "You drank lots of alcohol. Are those white mice?", "You drank unholy amounts of alcohol. But what do you care?", "You embalmed yourself alive with so much alcohol, that even undead will leave your dead body alone."];

///////////////////////////////////////////
//SKL
///////////////////////////////////////////

function Skill() {
	this.name = '';
	this.desc = '';
	this.exp = 0;
	this.lvl = 0;
	this.type = 0;
	this.p = 1; this.sp;
	this.expnext = function () { return Math.round((50 + ((this.lvl + 1) ** Math.log(9 * this.lvl + 1)))) }; this.expnext_t = this.expnext(); ///(i*.12)
	this.onLevel = function () { };
	this.onGive = function (x) { };
	this.use = function (x, y) { };
}

skl.fgt = new Skill(); skl.fgt.id = 101; skl.fgt.type = 1;
skl.fgt.name = 'Fighting';
skl.fgt.desc = 'Ability to perform better in a fight' + dom.dseparator + '<small style="color:darkorange">Slightly increases overall attack power</small>';
skl.fgt.use = function (x, y) { return you.str * (this.lvl * .02) }
skl.fgt.mlstn = [{ lv: 2, f: () => { you.exp_t += 0.02; you.stat_r(); }, g: false, p: "EXP Gain +2%" },
{ lv: 5, f: () => { you.stra += 1; you.stat_r(); giveTitle(ttl.cvl) }, g: false, p: "STR +1, New Title" },
{ lv: 8, f: () => { you.exp_t += 0.02; you.stat_r() }, g: false, p: "EXP Gain +3%" },
{ lv: 10, f: () => { you.exp_t += 0.05; you.mods.sbonus += 0.01; you.stat_r(); giveTitle(ttl.tcvl) }, g: false, p: "EXP Gain +5%, Energy Effectiveness +1%, New Title" },
{ lv: 11, f: function () { skl.unc.p += .1; skl.srdc.p += .1; skl.knfc.p += .1; skl.axc.p += .1; skl.plrmc.p += .1; skl.stfc.p += .1; skl.bwc.p += .1; skl.hmrc.p += .1; }, g: false, p: "All Masteries EXP Gain +10%" },
{ lv: 12, f: () => { giveTitle(ttl.fgt); you.stra += 1; skl.war.p += .05; you.stat_r() }, g: false, p: "STR +1, War EXP Gain +5%, New Title" },
{ lv: 13, f: () => { you.agla += 2; you.stat_r() }, g: false, p: "AGL +2" },
{ lv: 14, f: () => { you.exp_t += 0.06; }, g: false, p: "EXP Gain +6%" },
{ lv: 15, f: () => { you.exp_t += 0.08; skl.unc.p += .1; skl.srdc.p += .1; skl.knfc.p += .1; skl.axc.p += .1; skl.plrmc.p += .1; skl.stfc.p += .1; skl.bwc.p += .1; skl.hmrc.p += .1; giveTitle(ttl.rok) }, g: false, p: "EXP Gain +8%, All Masteries EXP Gain +10%, New Title" },
];


skl.unc = new Skill(); skl.unc.id = 102; skl.unc.type = 1;
skl.unc.name = 'Unarmed M';
skl.unc.bname = 'Unarmed Mastery';
skl.unc.desc = 'Mastery of unarmed combat' + dom.dseparator + '<small style="color:darkorange">Slightly increases attack power when fighting unarmed</small>';
skl.unc.use = function (x, y) { you.str += you.str / 100 * (this.lvl * 6); }
skl.unc.mlstn = [{ lv: 2, f: () => { you.stra += 1; you.stat_r(); }, g: false, p: "STR +1" },
{ lv: 5, f: () => { you.agla += 1; you.stat_r(); giveTitle(ttl.pbg) }, g: false, p: "AGL +1, New Title" },
{ lv: 8, f: () => { you.exp_t += 0.01; you.stat_r() }, g: false, p: "EXP Gain +1%" },
{ lv: 10, f: () => { you.exp_t += 0.05; you.mods.sbonus += 0.02; you.stat_r(); giveTitle(ttl.bll) }, g: false, p: "EXP Gain +5%, Energy Effectiveness +2%, New Title" },
{ lv: 11, f: () => { skl.fgt.p += .03; you.stat_r(); }, g: false, p: "Fighting EXP Gain +3%" },
];
skl.srdc = new Skill(); skl.srdc.id = 103; skl.srdc.type = 1;
skl.srdc.name = 'Sword M';
skl.srdc.bname = 'Sword Mastery';
skl.srdc.desc = 'Ability to fight using swords' + dom.dseparator + '<small style="color:darkorange">Slightly increases attack power when holding a sword</small>';
skl.srdc.use = function (x, y) { you.str += you.str / 100 * (this.lvl * 5); }
skl.srdc.mlstn = [{ lv: 1, f: () => { you.stra += 1; you.stat_r(); }, g: false, p: "STR +1" },
{ lv: 3, f: () => { you.agla += 1; you.stat_r(); }, g: false, p: "AGL +1" },
{ lv: 5, f: () => { you.stra += 1; you.agla += 1; you.stat_r(); giveTitle(ttl.srd1) }, g: false, p: "STR +1, AGL +1, New Title" },
{ lv: 8, f: () => { you.exp_t += 0.03; you.stat_r() }, g: false, p: "EXP Gain +3%" },
{ lv: 10, f: () => { you.exp_t += 0.05; you.mods.sbonus += 0.01; you.stat_r(); giveTitle(ttl.srd2) }, g: false, p: "EXP Gain +5%, Energy Effectiveness +1%, New Title" },
{ lv: 11, f: () => { skl.fgt.p += .03; you.stat_r(); }, g: false, p: "Fighting EXP Gain +3%" },
];

skl.knfc = new Skill(); skl.knfc.id = 104; skl.knfc.type = 1;
skl.knfc.name = 'Knife M';
skl.knfc.bname = 'Knife Mastery';
skl.knfc.desc = 'Ability to fight using knives and daggers' + dom.dseparator + '<small style="color:darkorange">Slightly increases attack power when holding a knife</small>';
skl.knfc.use = function (x, y) { you.str += you.str / 100 * (this.lvl * 5); }
skl.knfc.mlstn = [{ lv: 2, f: () => { you.agla += 1; you.stat_r(); }, g: false, p: "AGL +1" },
{ lv: 3, f: () => { you.exp_t += 0.01; you.agla += 2; you.stat_r(); }, g: false, p: "AGL +2, EXP Gain +1%" },
{ lv: 5, f: () => { you.stra += 1; you.stat_r(); giveTitle(ttl.plm) }, g: false, p: "STR +1, New Title" },
{ lv: 8, f: () => { you.stra += 1; you.agla += 1; you.exp_t += 0.02; }, g: false, p: "AGL +1, STR +1, EXP Gain +2%" },
{ lv: 10, f: () => { you.mods.cpwr += .1; giveTitle(ttl.knf) }, g: false, p: "Critical Damage +10%, New Title" },
{ lv: 11, f: () => { skl.fgt.p += .03; you.stat_r(); }, g: false, p: "Fighting EXP Gain +3%" },
];

skl.axc = new Skill(); skl.axc.id = 105; skl.axc.type = 1;
skl.axc.name = 'Axe M';
skl.axc.bname = 'Axe Mastery';
skl.axc.desc = 'Ability to fight using axes' + dom.dseparator + '<small style="color:darkorange">Slightly increases attack power when holding an axe</small>';
skl.axc.use = function (x, y) { you.str += you.str / 100 * (this.lvl * 5); }
skl.axc.mlstn = [{ lv: 2, f: () => { you.stra += 1; you.stat_r(); }, g: false, p: "STR +1" },
{ lv: 3, f: () => { you.exp_t += 0.02; you.stra += 1; you.stat_r(); }, g: false, p: "STR +1, EXP Gain +2%" },
{ lv: 5, f: () => { you.hpa += 30; you.ccls[2] += 1; you.stat_r(); giveTitle(ttl.axc1) }, g: false, p: "HP +30, Blunt DEF +1, New Title" },
{ lv: 8, f: () => { you.stra += 1; you.agla += 1; you.exp_t += 0.02; you.stat_r() }, g: false, p: "AGL +1, STR +1, EXP Gain +2%" },
{ lv: 10, f: () => { you.mods.sbonus += 0.02; you.stat_p[1] += .05; giveTitle(ttl.axc2) }, g: false, p: "Energy Effectiveness +2%, STR training Potential +5%, New Title" },
{ lv: 11, f: () => { skl.fgt.p += .03; you.stat_r(); }, g: false, p: "Fighting EXP Gain +3%" },
];

skl.plrmc = new Skill(); skl.plrmc.id = 106; skl.plrmc.type = 1;
skl.plrmc.name = 'Polearm M';
skl.plrmc.bname = 'Polearm Mastery';
skl.plrmc.desc = 'Ability to fight using polearms and lances' + dom.dseparator + '<small style="color:darkorange">Slightly increases attack power when holding a spear/polearm</small>';
skl.plrmc.use = function (x, y) { you.str += you.str / 100 * (this.lvl * 5); }
skl.plrmc.mlstn = [{ lv: 2, f: () => { you.agla += 1; you.stat_r(); }, g: false, p: "AGL +1" },
{ lv: 3, f: () => { you.exp_t += 0.01; you.agla += 1; you.stat_r(); }, g: false, p: "AGL +1, EXP Gain +1%" },
{ lv: 5, f: () => { you.stra += 1; you.ccls[1] += 1; you.stat_r(); giveTitle(ttl.lnc1) }, g: false, p: "STR +1, Pierce DEF +1, New Title" },
{ lv: 8, f: () => { you.stra += 2; you.exp_t += 0.03; you.stat_r() }, g: false, p: "STR +2, EXP Gain +3%" },
{ lv: 10, f: () => { you.res.ph += .01; giveTitle(ttl.lnc2) }, g: false, p: "Physical Resistance +1%, New Title" },
{ lv: 11, f: () => { skl.fgt.p += .03; you.stat_r(); }, g: false, p: "Fighting EXP Gain +3%" },
];


skl.hmrc = new Skill(); skl.hmrc.id = 107; skl.hmrc.type = 1;
skl.hmrc.name = 'Hammer M';
skl.hmrc.bname = 'Hammer Mastery';
skl.hmrc.desc = 'Ability to fight using blunt weaponry' + dom.dseparator + '<small style="color:darkorange">Slightly increases attack power when holding a club/hammer</small>';
skl.hmrc.use = function (x, y) { you.str += you.str / 100 * (this.lvl * 5); }
skl.hmrc.mlstn = [{ lv: 2, f: () => { you.exp_t += 0.01; you.agla += 1; you.stat_r(); }, g: false, p: "AGL +1, EXP Gain +1%" },
{ lv: 4, f: () => { you.stra += 1; you.stat_r(); }, g: false, p: "STR +1" },
{ lv: 5, f: () => { you.stra += 1; you.stat_r(); giveTitle(ttl.stk) }, g: false, p: "STR +1, New Title" },
{ lv: 8, f: () => { you.stra += 1; you.exp_t += 0.03; you.stat_r() }, g: false, p: "STR +1, EXP Gain +3%" },
{ lv: 10, f: () => { you.stra += 3; you.exp_t += 0.03; you.stat_r(); giveTitle(ttl.hmr2) }, g: false, p: "STR +3, EXP Gain +3%, New Title" },
{ lv: 11, f: () => { skl.fgt.p += .03; you.stat_r(); }, g: false, p: "Fighting EXP Gain +3%" },
];

skl.stfc = new Skill(); skl.stfc.id = 108; skl.stfc.type = 1;
skl.stfc.name = 'Staff M';
skl.stfc.bname = 'Staff Mastery';
skl.stfc.desc = 'Ability to fight using staves and wands';
skl.stfc.use = function (x, y) { you.int += you.int / 100 * (this.lvl * 5); }

skl.shdc = new Skill(); skl.shdc.id = 109; skl.shdc.type = 1;
skl.shdc.name = 'Shield M';
skl.shdc.bname = 'Shield Mastery';
skl.shdc.desc = 'Ability to use shields better';
skl.shdc.use = function (x, y) { giveSkExp(this, x || 1); you.str += you.str / 100 * (this.lvl * 5); you.int += you.int / 100 * (this.lvl * 3); }
skl.shdc.mlstn = [{ lv: 2, f: () => { you.exp_t += 0.03; skl.painr.p += .01; you.stat_r(); }, g: false, p: "EXP Gain +3%, Pain Resistance EXP Gain +1%" },
{ lv: 4, f: () => { you.hpa += 12; skl.painr.p += .02; you.stat_r(); dom.d5_3_1.update() }, g: false, p: "HP +12, Pain Resistance EXP Gain +2%" },
{ lv: 5, f: () => { you.stra += 1; you.stat_r(); giveTitle(ttl.sld1); skl.painr.p += .07 }, g: false, p: "STR +1, Pain Resistance EXP Gain +7%, New Title" },
{ lv: 8, f: () => { you.agla += 2; you.exp_t += 0.05; you.stat_r() }, g: false, p: "AGL +2, EXP Gain +5%" },
{ lv: 10, f: () => { you.hpa += 30; you.stra += 2; you.agla += 2; you.exp_t += 0.05; you.stat_r(); giveTitle(ttl.sld2) }, g: false, p: "HP +30, STR +2, AGL +2, New Title" },
{ lv: 11, f: () => { skl.fgt.p += .08; you.stat_r(); }, g: false, p: "Fighting EXP Gain +8%" },
];

skl.sleep = new Skill(); skl.sleep.id = 110; skl.sleep.type = 4;
skl.sleep.name = 'Sleeping';
skl.sleep.desc = 'The rest of Body' + dom.dseparator + '<small style="color:darkorange">Increases health gain during sleep</small>';
skl.sleep.use = function (x, y) { giveSkExp(this, x.sq || 1); return 5 * this.lvl * x.sq }
skl.sleep.mlstn = [{ lv: 2, f: () => { you.hpa += 2; you.stat_r(); dom.d5_1_1.update() }, g: false, p: "HP +2" },
{ lv: 4, f: () => { you.hpa += 5; you.stat_r(); dom.d5_1_1.update() }, g: false, p: "HP +5" },
{ lv: 5, f: () => { skl.ptnc.p += .05; giveTitle(ttl.slp1); you.hpa += 10; you.stat_r(); dom.d5_1_1.update() }, g: false, p: "HP +10, Patience EXP Gain +5%, New Title" },
{ lv: 6, f: () => { you.hpa += 12; you.stat_r(); dom.d5_1_1.update() }, g: false, p: "HP +12" },
{ lv: 7, f: () => { you.hpa += 15; you.stat_r(); dom.d5_1_1.update() }, g: false, p: "HP +15" },
{ lv: 8, f: () => { you.hpa += 20; you.stat_r(); dom.d5_1_1.update() }, g: false, p: "HP +20" },
{ lv: 9, f: () => { skl.ptnc.p += .1; you.hpa += 25; you.stat_r(); dom.d5_1_1.update() }, g: false, p: "Patience EXP Gain +10%, HP +25" },
{ lv: 10, f: () => { giveTitle(ttl.slp2); skl.dth.p += .1; you.hpa += 30; you.stat_r(); dom.d5_1_1.update() }, g: false, p: "HP +30, Death EXP Gain +10%, New Title" },
{ lv: 11, f: () => { you.hpa += 35; you.stat_r(); dom.d5_1_1.update() }, g: false, p: "HP +35" },
{ lv: 12, f: () => { you.hpa += 50; you.stat_r(); dom.d5_1_1.update() }, g: false, p: "HP +50" },
];

skl.seye = new Skill(); skl.seye.id = 111; skl.seye.type = 3;
skl.seye.name = 'Sharp Eye';
skl.seye.desc = 'Ability to notice weak points' + dom.dseparator + '<small style="color:darkorange">Slightly increases critical probability</small>';
skl.seye.use = function (x, y) { return this.lvl * 0.003 }
skl.seye.mlstn = [{ lv: 1, f: () => { you.agla += 1; you.stat_r(); }, g: false, p: "AGL +1" },
{ lv: 3, f: () => { giveTitle(ttl.seye1); you.stra += 1; you.exp_t += 0.04; you.stat_r() }, g: false, p: "STR +1, EXP Gain +4%, New Title" },
{ lv: 4, f: () => { skl.scout.p += .05; you.mods.cpwr += .02; you.exp_t += 0.06; }, g: false, p: "Perception EXP Gain +5%, Critical Damage +2%, EXP Gain +6%" },
{ lv: 5, f: () => { skl.unc.p += .05; skl.fgt.p += .05; skl.srdc.p += .05; skl.knfc.p += .05; skl.axc.p += .05; skl.plrmc.p += .05; skl.stfc.p += .05; skl.bwc.p += .05; skl.hmrc.p += .05; you.stat_r(); giveTitle(ttl.seye2); }, g: false, p: "All Masteries EXP Gain +5%, Fighting EXP Gain +5%, New Title" },
{ lv: 6, f: () => { skl.evas.p += .08; you.mods.cpwr += .08; skl.war.p += .07; }, g: false, p: "Evasion EXP Gain +8%, Critical Damage +8%, War EXP Gain +7%" },
{ lv: 7, f: () => { skl.scout.p += .1; you.mods.sbonus += 0.01; you.stra += 2; you.stat_r() }, g: false, p: "EXP Gain +7%, STR +2, Perception EXP Gain +10%, Energy Effectiveness +1%" },
{ lv: 8, f: () => { you.aff[0] += 5; giveTitle(ttl.seye3) }, g: false, p: "Physical ATK +5, New Title" },
];

skl.pet = new Skill(); skl.pet.id = 112; skl.pet.type = 10;
skl.pet.name = 'Patting';
skl.pet.desc = 'Mastery of petting animals' + dom.dseparator + '<small style="color:darkorange">Makes animals love you</small>';
skl.pet.use = function (x, y) { giveSkExp(this, x || 1); }
skl.pet.mlstn = [{ lv: 2, f: () => { you.luck += 1; you.stat_r(); }, g: false, p: "LUCK +1" },
{ lv: 4, f: () => { you.agla += 1; you.stat_r(); }, g: false, p: "AGL +1" },
{ lv: 5, f: () => { you.agla += 1; you.mods.sbonus += 0.01; you.stat_r(); giveTitle(ttl.pet1) }, g: false, p: "Energy Effectiveness +1%, New Title" },
{ lv: 6, f: () => { you.hpa += 33; you.stat_r(); dom.d5_1_1.update() }, g: false, p: "HP +33" },
{ lv: 7, f: () => { you.agla += 2; you.stat_r(); }, g: false, p: "AGL +2" },
{ lv: 8, f: () => { you.exp_t += 0.1; you.cmaff[1] += 3; you.stat_r(); giveTitle(ttl.pet2) }, g: false, p: "EXP Gain +10%, Beast Class DEF +3, New Title" },
{ lv: 9, f: () => { skl.unc.p += .1; }, g: false, p: "Unarmed Mastery EXP gain +10%" },
{ lv: 10, f: () => { you.inta += 3; giveTitle(ttl.pet3) }, g: false, p: "INT +3, New Title" },
];

skl.walk = new Skill(); skl.walk.id = 113; skl.walk.type = 4;
skl.walk.name = 'Walking';
skl.walk.desc = 'Ability to walk';
skl.walk.use = function (x, y) { giveSkExp(this, .5); }
skl.walk.mlstn = [{ lv: 1, f: () => { you.agla += 1; you.stat_r(); giveAction(act.demo) }, g: false, p: "AGL +1" },
{ lv: 3, f: () => { giveTitle(ttl.wlk); you.hpa += 5; you.stat_r() }, g: false, p: "HP +5, New Title" },
{ lv: 4, f: () => { you.hpa += 8; you.sata += 6; you.stat_r(); dom.d5_3_1.update() }, g: false, p: "HP +8, SAT +6" },
{ lv: 5, f: () => { giveTitle(ttl.jgg); you.hpa += 10; you.sata += 8; you.stat_r(); dom.d5_3_1.update() }, g: false, p: "HP +10, SAT +8, New Title" },
{ lv: 6, f: () => { you.exp_t += 0.03; you.hpa += 12; you.stat_r(); you.stat_p[0] += .03; dom.d5_3_1.update() }, g: false, p: "HP +12, EXP Gain +3%, HP Training Potential +3%" },
{ lv: 7, f: () => { skl.tghs.p += .1; you.exp_t += 0.03; you.sata += 10; you.stat_r(); you.stra += 1; you.stat_p[1] += .03; dom.d5_3_1.update() }, g: false, p: "Toughness EXP Gain +10%, STR +1, SAT +10, EXP Gain +3%, STR Training Potential +3%" },
{ lv: 8, f: () => { skl.evas.p += .05; you.exp_t += 0.03; you.hpa += 15; you.stat_r(); you.agla += 2; you.stat_p[2] += .03; dom.d5_3_1.update() }, g: false, p: "Evasion EXP Gain +5%, HP +15, AGL +2, EXP Gain +3%, AGL Training Potential +3%" },
{ lv: 9, f: () => { you.exp_t += 0.06; you.hpa += 8; you.sata += 8; you.stat_r(); dom.d5_3_1.update() }, g: false, p: "HP +8, SAT +8, EXP Gain +6%" },
{ lv: 10, f: () => { giveTitle(ttl.rnr); you.spda += 1; you.hpa += 10; you.sata += 10; you.stat_r(); dom.d5_3_1.update() }, g: false, p: "HP +10, SAT 10, SPD +1, New Title" },
];

skl.dice = new Skill(); skl.dice.id = 114; skl.dice.type = 10;
skl.dice.name = 'Gambling';
skl.dice.desc = 'Skill of chances';
skl.dice.use = function (x, y) { giveSkExp(this, x || 1); }
skl.dice.mlstn = [{ lv: 1, f: () => { you.luck += 1; you.stat_r(); }, g: false, p: "LUCK +1" },
{ lv: 3, f: () => { you.agla += 2; you.stat_r(); }, g: false, p: "AGL +2" },
	//{lv:10,f:()=>{you.spda+=1;you.stat_r();},g:false,p:"SPD +1"},
];

skl.glt = new Skill(); skl.glt.id = 115; skl.glt.type = 4;
skl.glt.name = 'Gluttony';
skl.glt.desc = 'Mastery of eating';
skl.glt.use = function (x, y) { giveSkExp(this, x || 1); return this.lvl || 1 }
skl.glt.mlstn = [{ lv: 1, f: function () { you.sata += 5; you.stat_r(); dom.d5_3_1.update() }, g: false, p: "SAT +5" },
{ lv: 2, f: () => { you.sata += 5; you.hpa += 5; you.stat_r(); dom.d5_3_1.update() }, g: false, p: "SAT +5, HP +5" },
{ lv: 3, f: () => { giveTitle(ttl.eat1); you.sata += 10; you.hpa += 5; you.stat_r(); dom.d5_3_1.update() }, g: false, p: "SAT +10, HP +5, New Title" },
{ lv: 4, f: () => { skl.fdpnr.p += .05; you.sata += 10; you.hpa += 5; you.stat_r(); dom.d5_3_1.update() }, g: false, p: "SAT +10, HP +5, Survival EXP Gain +5%" },
{ lv: 5, f: () => { you.sata += 10; you.hpa += 10; you.stat_r(); dom.d5_3_1.update() }, g: false, p: "SAT +10, HP +10" },
{ lv: 6, f: () => { you.sata += 10; you.hpa += 15; you.stat_r(); dom.d5_3_1.update() }, g: false, p: "SAT +10, HP +15" },
{ lv: 7, f: () => { giveTitle(ttl.eat2); you.sata += 10; you.hpa += 20; you.stat_r(); dom.d5_3_1.update() }, g: false, p: "SAT +10, HP +20, New Title" },
{ lv: 8, f: () => { you.sata += 15; you.hpa += 25; you.stat_r(); dom.d5_3_1.update() }, g: false, p: "SAT +15, HP +25" },
{ lv: 9, f: () => { skl.fdpnr.p += .15; you.sata += 15; you.hpa += 35; you.stat_r(); dom.d5_3_1.update() }, g: false, p: "SAT +15, HP +35, Survival EXP Gain +15%" },
{ lv: 10, f: () => { you.eqp_t += .13; giveTitle(ttl.eat3); you.sata += 20; you.hpa += 40; you.stat_r(); dom.d5_3_1.update() }, g: false, p: "EXP Gain +13%, SAT +20, HP +40, New Title" },
{ lv: 11, f: () => { you.sata += 25; you.hpa += 50; you.stat_r(); dom.d5_3_1.update() }, g: false, p: "SAT +25, HP +50" },
{ lv: 12, f: () => { you.sata += 25; you.hpa += 60; you.stat_r(); dom.d5_3_1.update() }, g: false, p: "SAT +25, HP +60" },
{ lv: 13, f: () => { you.sata += 25; you.hpa += 70; you.stat_r(); dom.d5_3_1.update() }, g: false, p: "SAT +25, HP +70" },];

skl.rdg = new Skill(); skl.rdg.id = 116; skl.rdg.type = 4;
skl.rdg.name = 'Literacy';
skl.rdg.desc = 'Understanding of meaning behind texts' + dom.dseparator + '<small style="color:darkorange">Improves reading speed</small>';
skl.rdg.use = function (x, y) { return this.lvl }
skl.rdg.mlstn = [{ lv: 2, f: () => { you.inta += 1; you.stat_r(); }, g: false, p: "INT +1" },
{ lv: 3, f: () => { giveTitle(ttl.ilt); you.exp_t += 0.02; you.stat_r(); }, g: false, p: "EXP Gain +2%, New Title" },
{ lv: 4, f: () => { you.exp_t += 0.02; you.inta += 1; you.stat_r(); }, g: false, p: "INT +1, EXP Gain +2%" },
{ lv: 5, f: () => { giveTitle(ttl.und); you.inta += 1; you.exp_t += 0.03; you.stat_r(); }, g: false, p: "EXP Gain +3%, INT +1, New Title" },
];

skl.cook = new Skill(); skl.cook.id = 117; skl.cook.type = 5;
skl.cook.name = 'Cooking';
skl.cook.desc = 'The art of Cooking' + dom.dseparator + '<small style="color:darkorange">Reduces chances to cook a failed product</small>';
skl.cook.use = function (x, y) { giveSkExp(this, x || 1); return this.lvl || 1 }
skl.cook.mlstn = [{ lv: 1, f: () => { you.inta += 1; you.agla += 1; giveRcp(rcp.rsmt); giveRcp(rcp.segg); you.stat_r(); }, g: false, p: "INT +1, AGL +1" },
{ lv: 2, f: () => { giveTitle(ttl.coo1); giveRcp(rcp.bcrc); giveRcp(rcp.bcrrt); you.exp_t += 0.05; you.stra += 1; you.stat_r(); }, g: false, p: "STR +1, EXP Gain +5%, New Title" },
	//              {lv:3,f:()=>{you.exp_t+=0.02;you.inta+=1;you.stat_r();},g:false,p:"INT +1, EXP Gain +2%"},
	//              {lv:4,f:()=>{giveTitle(ttl.cck);you.inta+=1;you.exp_t+=0.03;you.stat_r();},g:false,p:"EXP Gain +3%, INT +1, New Title"},
];

skl.mdt = new Skill(); skl.mdt.id = 118; skl.mdt.type = 4;
skl.mdt.name = 'Meditation';
skl.mdt.desc = 'The rest of Mind';
skl.mdt.use = function (x, y) { return this.lvl }

skl.crft = new Skill(); skl.crft.id = 119; skl.crft.type = 5;
skl.crft.name = 'Crafting';
skl.crft.desc = 'The art of Creation' + dom.dseparator + '<small style="color:darkorange">Makes autocrafting faster</small>';
skl.crft.use = function (x, y) { giveSkExp(this, x || 1); return this.lvl || 1 }

skl.alch = new Skill(); skl.alch.id = 120; skl.alch.type = 5;
skl.alch.name = 'Alchemy';
skl.alch.desc = 'Knowledge of medicine and alchemical transmutation';
skl.alch.use = function (x, y) { giveSkExp(this, x || 1); return this.lvl || 1 }
skl.alch.mlstn = [{ lv: 1, f: () => { you.inta += 1; giveRcp(rcp.hptn1) }, g: false, p: "INT +1" }];

skl.thr = new Skill(); skl.thr.id = 121; skl.thr.type = 2;
skl.thr.name = 'Throwing';
skl.thr.desc = 'Mastery of throwing' + dom.dseparator + '<small style="color:darkorange">Decreases waiting time between throws<br>Slightly increases throwing damage</small>';
skl.thr.use = function (x, y) { return { a: this.lvl / 10, b: this.lvl * 5 } }

skl.bwc = new Skill(); skl.bwc.id = 122; skl.bwc.type = 1;
skl.bwc.name = 'Ranged M';
skl.bwc.bname = 'Ranged Mastery';
skl.bwc.desc = 'Ability to utilize bows and crossbows in combat';
skl.bwc.use = function (x, y) { you.str += you.str / 100 * (this.lvl * 5); }

skl.ntst = new Skill(); skl.ntst.id = 123; skl.ntst.type = 3;
skl.ntst.name = 'Nightsight';
skl.ntst.desc = 'Ability to see better in the darkness' + dom.dseparator + '<small style="color:darkorange">Mitigates hit penalty while fighting in darkness</small>';
skl.ntst.use = function (x, y) { giveSkExp(this, x || 1) }

skl.evas = new Skill(); skl.evas.id = 124; skl.evas.type = 3;
skl.evas.name = 'Evasion';
skl.evas.desc = 'Ability to dodge attacks';
skl.evas.use = function (x, y) { giveSkExp(this, x || 1) }

skl.gred = new Skill(); skl.gred.id = 125; skl.gred.type = 4;
skl.gred.name = 'Greed';
skl.gred.desc = 'The power of possessions';
skl.gred.use = function (x, y) { return true }

skl.dngs = new Skill(); skl.dngs.id = 126; skl.dngs.type = 3;
skl.dngs.name = 'Danger Sense';
skl.dngs.desc = 'Ability to detect and avoid danger' + dom.dseparator + '<small style="color:darkorange">Slightly decreases critical damage received</small>';
skl.dngs.use = function (x, y) { return this.lvl }
skl.dngs.mlstn = [{ lv: 1, f: () => { you.exp_t += 0.03 }, g: false, p: "EXP Gain +3%" },
{ lv: 2, f: () => { you.agla += 1; you.stat_r(); skl.painr.p += .03 }, g: false, p: "AGL +1, Pain Resistance EXP Gain +3%" },
{ lv: 3, f: () => { giveTitle(ttl.dngs1); skl.fgt.p += .1; }, g: false, p: "Fighting EXP Gain +10%, New Title" },
{ lv: 4, f: () => { skl.evas.p += .1; you.exp_t += 0.05; you.stra += 1; you.stat_r(); }, g: false, p: "EXP Gain +5%, Evasion EXP Gain +10%, STR +1" },
{ lv: 5, f: () => { giveTitle(ttl.dngs2); skl.seye.p += .1; you.mods.sbonus += 0.01; you.agla += 2; you.stat_r(); }, g: false, p: "AGL +2, Energy Effectiveness +1%, Sharp Eye EXP Gain +10%, New Title" },
];

skl.painr = new Skill(); skl.painr.id = 127; skl.painr.type = 6;
skl.painr.name = 'Pain Resistance'; skl.painr.sp = '.66em';
skl.painr.desc = 'Ability to tolerate physical harm' + dom.dseparator + '<small style="color:darkorange">Slightly decreases damage received</small>';
skl.painr.use = function (x, y) { return this.lvl * .004 }
skl.painr.mlstn = [{ lv: 1, f: () => { you.exp_t += 0.01 }, g: false, p: "EXP Gain +1%" },
{ lv: 3, f: () => { you.exp_t += 0.02; you.agla += 1; you.stat_r(); }, g: false, p: "EXP Gain +2%, AGL +1" },
{ lv: 5, f: () => { giveTitle(ttl.rspn1); you.stra += 1; you.exp_t += 0.05; you.stat_r(); }, g: false, p: "EXP Gain +5%, STR +1, New Title" },
{ lv: 6, f: () => { skl.dngs.p += .1; you.stat_r(); }, g: false, p: "Danger Sense EXP Gain +10%" },
];

skl.poisr = new Skill(); skl.poisr.id = 128; skl.poisr.type = 6;
skl.poisr.name = 'Poison Resistance'; skl.poisr.sp = '0.66em';
skl.poisr.desc = 'Ability to tolerate harmful poisons' + dom.dseparator + '<small style="color:darkorange">Increases probability to avoid being poisoned</small>';
skl.poisr.use = function (x, y) { return this.lvl * .01 }

skl.fdpnr = new Skill(); skl.fdpnr.id = 129; skl.fdpnr.type = 4;
skl.fdpnr.name = 'Survival';
skl.fdpnr.desc = 'Ability to safely digest dangerous food' + dom.dseparator + '<small style="color:darkorange">Reduces energy loss from food poisoning</small>';
skl.fdpnr.use = function (x, y) { return this.lvl * .05 }
skl.fdpnr.mlstn = [{ lv: 1, f: () => { you.exp_t += 0.03 }, g: false, p: "EXP Gain +3%" },
{ lv: 2, f: () => { you.sata += 15; you.hpa += 30; skl.glt.p += .05; dom.d5_3_1.update(); you.stat_r(); }, g: false, p: "SAT +15, HP +30, Gluttony EXP Gain +5%" },
{ lv: 3, f: () => { giveTitle(ttl.rfpn1); skl.drka.p += .1;; you.exp_t += 0.05; you.stra += 1; you.stat_r(); }, g: false, p: "EXP Gain +5%, STR +1, Drinking EXP Gain +10%, New Title" },
{ lv: 5, f: () => { giveTitle(ttl.rfpn2); you.exp_t += 0.07; skl.painr.p += .1; skl.glt.p += .1; }, g: false, p: "EXP Gain +7%, Pain Resistance EXP Gain +10%, Gluttony EXP Gain +10%, New Title" },
{ lv: 6, f: () => { skl.rtr.p += .15; you.stra += 2; you.stat_r(); }, g: false, p: "Elusion EXP Gain +15%, STR +2, HP +100" },
{ lv: 7, f: () => { you.exp_t += 0.1; you.stra += 1; skl.poisr.p += .1; skl.glt.p += .15; you.stat_r(); }, g: false, p: "EXP Gain +10%, STR +1, Poison Resistance EXP Gain +10%, Gluttony EXP Gain +15%," },
{ lv: 8, f: () => { giveTitle(ttl.rfpn3); you.res.ph -= .01; skl.poisr.p += .2; skl.painr.p += .2 }, g: false, p: "Damage Reduction +1%, Pain Resistance EXP Gain +20%, Poison Resistance EXP Gain +20%, New Title" },
];

skl.war = new Skill(); skl.war.id = 130; skl.war.type = 3;
skl.war.name = 'War';
skl.war.desc = 'Mastery of destruction and military tactics' + dom.dseparator + '<small style="color:darkorange">Slightly increases crit damage</small>';
skl.war.use = function (x, y) { return this.lvl * .005 }

skl.stel = new Skill(); skl.stel.id = 131; skl.stel.type = 3;
skl.stel.name = 'Stealing';
skl.stel.desc = 'Ability to pilfer';
skl.stel.use = function (x, y) { return this.lvl * .05 }

skl.dth = new Skill(); skl.dth.id = 132; skl.dth.type = 4;
skl.dth.name = 'Death';
skl.dth.desc = 'Ability to cling to your fate' + dom.dseparator + '<small style="color:darkorange">Reduces energy loss on death</small>';
skl.dth.use = function (x, y) { return this.lvl * .1 }
skl.dth.mlstn = [{ lv: 1, f: () => { you.hpa += 20; you.stat_r() }, g: false, p: "HP +20" },
{ lv: 3, f: () => { you.exp_t += .03; skl.painr.p += .05; giveTitle(ttl.dth1); you.stat_r() }, g: false, p: "EXP Gain +3%, Pain Resistance EXP Gain +5%, New Title" },
{ lv: 5, f: () => { you.eqp_t += .05; skl.tghs.p += .1; you.stat_r() }, g: false, p: "EXP Gain +5%, Toughness EXP Gain +10%" },
{ lv: 7, f: () => { skl.dngs.p += .15; you.stra += 2; giveTitle(ttl.dth2); you.stat_r() }, g: false, p: "STR +2, Danger Sense EXP Gain +15%, New Title" },
{ lv: 9, f: () => { skl.painr.p += .1; you.sata += 15;; you.stat_r() }, g: false, p: "SAT +15, Pain Resistance EXP Gain +10%, New Title" },
{ lv: 10, f: () => { skl.fdpnr.p += .1; skl.dngs.p += .15; you.stra += 2; giveTitle(ttl.dth3); you.stat_r() }, g: false, p: "Survival EXP Gain +10%, , New Title" },
];

skl.rtr = new Skill(); skl.rtr.id = 133; skl.rtr.type = 3;
skl.rtr.name = 'Elusion';
skl.rtr.desc = 'Ability to escape danger';
skl.rtr.use = function (x, y) { return this.lvl }

skl.fmn = new Skill(); skl.fmn.id = 134; skl.fmn.type = 4;
skl.fmn.name = 'Famine';
skl.fmn.desc = 'Ability to go by without any sustenance' + dom.dseparator + '<small style="color:darkorange">Increases lower energy effectiveness bonus</small>';
skl.fmn.use = function (x, y) { return this.lvl * .01 }
skl.fmn.mlstn = [{ lv: 1, f: () => { you.exp_t += 0.01 }, g: false, p: "EXP Gain +1%" },
{ lv: 3, f: () => { you.sata += 5; you.hpa += 5; skl.glt.p += .03; giveTitle(ttl.fmn1); dom.d5_3_1.update(); you.stat_r(); }, g: false, p: "SAT +5, HP +5, Gluttony EXP Gain +3%, New Title" },
{ lv: 5, f: () => { you.stra++; skl.tghs.p += .03; dom.d5_3_1.update(); you.stat_r(); }, g: false, p: "STR +1, Toughness EXP Gain +3%" },
{ lv: 7, f: () => { you.agla += 2; skl.fdpnr.p += .15; you.hpa += 15; giveTitle(ttl.fmn2); dom.d5_3_1.update(); you.stat_r(); }, g: false, p: "AGL +2, HP +15, Survival EXP Gain +15%, New Title" },
{ lv: 9, f: () => { you.sata += 10; skl.glt.p += .07; skl.dth.p += .05; dom.d5_3_1.update(); you.stat_r(); }, g: false, p: "SAT +10, Death EXP Gain +5%, Gluttony EXP Gain +7%" },
{ lv: 10, f: () => { giveTitle(ttl.fmn3); dom.d5_3_1.update(); you.stat_r(); }, g: false, p: ", New Title" },
];

skl.abw = new Skill(); skl.abw.id = 135; skl.abw.type = 7;
skl.abw.name = 'Water Absorption'; skl.abw.sp = '0.66em';
skl.abw.desc = 'Ability to absorb Water Ki and assimilate it within your body' + dom.dseparator + '<small style="color:darkorange">Reduces energy loss when wet<br>Provides minor protection from water-based attacks</small>';
skl.abw.use = function (x, y) { return this.lvl }
skl.abw.onLevel = function () { you.cmaff[3] += Math.ceil(this.lvl / 3 + 1) }
skl.abw.onGive = function (x) { if (!you.ki['w']) you.ki['w'] = x; else you.ki['w'] += x }

skl.abf = new Skill(); skl.abf.id = 136; skl.abf.type = 7;
skl.abf.name = 'Fire Absorption'; skl.abf.sp = '0.66em';
skl.abf.desc = 'Ability to absorb Fire Ki and assimilate it within your body' + dom.dseparator + '<small style="color:darkorange">Provides minor protection from fire-based attacks</small>';
skl.abf.use = function (x, y) { return this.lvl }
skl.abf.onLevel = function () { you.cmaff[4] += Math.ceil(this.lvl / 3 + 1) }
skl.abf.onGive = function (x) { if (!you.ki['f']) you.ki['f'] = x; else you.ki['f'] += x }

skl.aba = new Skill(); skl.aba.id = 137; skl.aba.type = 7;
skl.aba.name = 'Air Absorption'; skl.aba.sp = '0.66em';
skl.aba.desc = 'Ability to absorb Air Ki and assimilate it within your body' + dom.dseparator + '<small style="color:darkorange">Provides minor protection from air-based attacks</small>';
skl.aba.use = function (x, y) { return this.lvl }
skl.aba.onLevel = function () { you.cmaff[1] += Math.ceil(this.lvl / 3 + 1) }
skl.aba.onGive = function (x) { if (!you.ki['a']) you.ki['a'] = x; else you.ki['a'] += x }

skl.abe = new Skill(); skl.abe.id = 138; skl.abe.type = 7;
skl.abe.name = 'Earth Absorption'; skl.abe.sp = '0.66em';
skl.abe.desc = 'Ability to absorb Earth Ki and assimilate it within your body' + dom.dseparator + '<small style="color:darkorange">Provides minor protection from earth-based attacks</small>';
skl.abe.use = function (x, y) { return this.lvl }
skl.abe.onLevel = function () { you.cmaff[2] += Math.ceil(this.lvl / 3 + 1) }
skl.abe.onGive = function (x) { if (!you.ki['e']) you.ki['e'] = x; else you.ki['e'] += x }

skl.abl = new Skill(); skl.abl.id = 139; skl.abl.type = 7;
skl.abl.name = 'Light Absorption'; skl.abl.sp = '0.66em';
skl.abl.desc = 'Ability to absorb Holy Ki and assimilate it within your body' + dom.dseparator + '<small style="color:darkorange">Provides minor protection from holy attacks</small>';
skl.abl.use = function (x, y) { return this.lvl }
skl.abl.onLevel = function () { you.cmaff[5] += Math.ceil(this.lvl / 3 + 1) }
skl.abl.onGive = function (x) { if (!you.ki['l']) you.ki['l'] = x; else you.ki['l'] += x }

skl.abd = new Skill(); skl.abd.id = 140; skl.abd.type = 7;
skl.abd.name = 'Dark Absorption'; skl.abd.sp = '0.66em';
skl.abd.desc = 'Ability to absorb Dark Ki and assimilate it within your body' + dom.dseparator + '<small style="color:darkorange">Provides minor protection from Dark attacks</small>';
skl.abd.use = function (x, y) { return this.lvl }
skl.abd.onLevel = function () { you.cmaff[6] += Math.ceil(this.lvl / 3 + 1) }
skl.abd.onGive = function (x) { if (!you.ki['d']) you.ki['d'] = x; else you.ki['d'] += x }

skl.hvt = new Skill(); skl.hvt.id = 141; skl.hvt.type = 8;
skl.hvt.name = 'Foraging';
skl.hvt.desc = 'Ability to harvest gifts of Nature';
skl.hvt.use = function (x, y) { return this.lvl }

skl.glg = new Skill(); skl.glg.id = 142; skl.glg.type = 8;
skl.glg.name = 'Geology';
skl.glg.desc = 'Knowledge and ability to identify precious minerals';
skl.glg.use = function (x, y) { return this.lvl }

skl.mng = new Skill(); skl.mng.id = 143; skl.mng.type = 8;
skl.mng.name = 'Mining';
skl.mng.desc = 'Ability to extract materials from stones and mountains';
skl.mng.use = function (x, y) { return this.lvl }

skl.mntnc = new Skill(); skl.mntnc.id = 144; skl.mntnc.type = 9;
skl.mntnc.name = 'Maintanence';
skl.mntnc.desc = 'Ability to repair damaged equipment';
skl.mntnc.use = function (x, y) { return this.lvl }

skl.rccln = new Skill(); skl.rccln.id = 145; skl.rccln.type = 9;
skl.rccln.name = 'Temperance';
skl.rccln.desc = 'Ability to resist temptation of worldly possessions';
skl.rccln.use = function (x, y) { return this.lvl }

skl.bledr = new Skill(); skl.bledr.id = 146; skl.bledr.type = 6;
skl.bledr.name = 'Bleeding Resistance'; skl.bledr.sp = '0.66em';
skl.bledr.desc = 'Ability to keep going with blood loss' + dom.dseparator + '<small style="color:darkorange">Wounds bleed less</small>';
skl.bledr.use = function (x, y) { return this.lvl * .01 }

skl.twoh = new Skill(); skl.twoh.id = 147; skl.twoh.type = 1;
skl.twoh.name = 'Two Handed M';
skl.twoh.bname = 'Two Handed Mastery';
skl.twoh.desc = 'Ability to fight using heavy two handed weapons' + dom.dseparator + '<small style="color:darkorange">Slightly increases attack power when holding a two handed weapon</small>';
skl.twoh.use = function (x, y) { giveSkExp(this, 1); return you.str * (this.lvl * .0125) }

skl.trad = new Skill(); skl.trad.id = 148; skl.trad.type = 3;
skl.trad.name = 'Trading';
skl.trad.desc = 'Ability to exchange wealth for goods and services' + dom.dseparator + '<small style="color:darkorange">Slightly shifts shop prices in your favour</small>';
skl.trad.use = function (x, y) { return this.lvl * .005 }
skl.trad.onLevel = function () { recshop() }

skl.swm = new Skill(); skl.swm.id = 149; skl.swm.type = 3;
skl.swm.name = 'Swimming';
skl.swm.desc = 'Ability to dive and traverse waters';
skl.swm.use = function (x, y) { return this.lvl }

skl.dssmb = new Skill(); skl.dssmb.id = 150; skl.dssmb.type = 3;
skl.dssmb.name = 'Disassembly';
skl.dssmb.desc = 'Ability to deconstruct goods into raw spare parts' + dom.dseparator + '<small style="color:darkorange">Increases yield from deconstructed items</small>';
skl.dssmb.use = function (x, y) { return this.lvl }

skl.tghs = new Skill(); skl.tghs.id = 151; skl.tghs.type = 2;
skl.tghs.name = 'Toughness';
skl.tghs.desc = 'Durability of one\'s body' + dom.dseparator + '<small style="color:darkorange">Slightly improves physical defence</small>';
skl.tghs.use = function (x, y) { return this.lvl }
skl.tghs.onLevel = function () { you.cmaff[0] += Math.ceil(this.lvl / 3 + 1) }

skl.drka = new Skill(); skl.drka.id = 152; skl.drka.type = 4;
skl.drka.name = 'Drinking';
skl.drka.desc = 'Ability to tolerate and enjoy alcoholic beverages';
skl.drka.use = function (x, y) { return this.lvl }

skl.tpgrf = new Skill(); skl.tpgrf.id = 153; skl.tpgrf.type = 4;
skl.tpgrf.name = 'Topography';
skl.tpgrf.desc = 'Knowledge of land surfaces';
skl.tpgrf.use = function (x, y) { return this.lvl }

skl.ptnc = new Skill(); skl.ptnc.id = 154; skl.ptnc.type = 4;
skl.ptnc.name = 'Patience';
skl.ptnc.desc = 'Ability to endure forms of suffering without complaint';
skl.ptnc.use = function (x, y) { return this.lvl }

skl.scout = new Skill(); skl.scout.id = 155; skl.scout.type = 4;
skl.scout.name = 'Perception';
skl.scout.desc = 'Ability to see the unseen and better understand your surroundings';
skl.scout.use = function (x, y) { return this.lvl }

skl.jdg = new Skill(); skl.jdg.id = 156; skl.jdg.type = 4;
skl.jdg.name = 'Judgement';
skl.jdg.desc = 'Ability to evaluate your choices';
skl.jdg.use = function (x, y) { return this.lvl }

skl.tlrng = new Skill(); skl.tlrng.id = 157; skl.tlrng.type = 5;
skl.tlrng.name = 'Tailoring';
skl.tlrng.desc = 'Abillity to sew and create produce out of cloth';
skl.tlrng.use = function (x, y) { giveSkExp(this, x || 1); return this.lvl || 1 }

skl.crptr = new Skill(); skl.crptr.id = 158; skl.crptr.type = 6;
skl.crptr.name = 'Corruption Resistance'; skl.crptr.sp = '.66em';
skl.crptr.desc = 'Ability to resist the corruption of flesh' + dom.dseparator + '<small style="color:darkorange">Mitigates corruption and fei damage</small>';

skl.hst = new Skill(); skl.hst.id = 159; skl.hvt.type = 8;
skl.hst.name = 'Harvesting';
skl.hst.desc = 'Ability to find and collect usable materials from the surroundings' + dom.dseparator + '<small style="color:darkorange">Increases chances of obtaining area loot</small>';
skl.hst.use = function (x, y) { return this.lvl }

skl.coldr = new Skill(); skl.coldr.id = 160; skl.coldr.type = 6;
skl.coldr.name = 'Cold Resistance'; skl.coldr.sp = '.66em';
skl.coldr.desc = 'Ability to tolerate harsh and cold temperatures' + dom.dseparator + '<small style="color:darkorange">Slightly decreases energy loss when cold</small>';
skl.coldr.use = function (x, y) { return this.lvl * .004 }

///////////////////////////////////////////
//ITM
///////////////////////////////////////////

function Item() {
	this.name = 'dummy';
	this.desc = '';
	this.eff = [];
	this.data = { dscv: false };
	this.amount = 0;
	this.type = 1;
	this.stype = 1;
	this.rar = 1;
	this.new = false;
	this.have = false;
	this.important = false;
	this.onGet = function () { };
	this.use = function () { };
}

item.rcs = new Item(); item.rcs.id = 3000;
item.rcs.name = 'Reality shot';
item.rcs.desc = 'Amplifies surrounding awareness and perception senses';
item.rcs.stype = 4;
item.rcs.rar = 3;
item.rcs.use = function () {
	msg('placeholder');
}

item.hrb1 = new Item(); item.hrb1.id = 3001;
item.hrb1.name = 'Cure Grass'; item.hrb1.val = 7
item.hrb1.desc = 'Herb with minor healing properties. Has to be processed before use. Can somewhat speed up recovery of tiny cuts and bruises if applied directly' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.hrb1.val + ' </span>health';
item.hrb1.stype = 4;
item.hrb1.use = function () {
	global.stat.medst++
	you.hp + this.val > you.hpmax ? you.hp = you.hpmax : you.hp += this.val;
	this.amount--; dom.d5_1_1.update(); msg('Restored ' + this.val + ' hp', 'lime');
}
item.hrb1.onGet = function () {
	if (this.amount >= 50) { giveRcp(rcp.hlstw); this.onGet = function () { } }
}

item.atd1 = new Item(); item.atd1.id = 3002;
item.atd1.name = 'Herbal Antidote';
item.atd1.desc = 'Bundle of certain common herbs, mixed together. Tastes incredibly bitter, but helps to detoxify blood from containments' + dom.dseparator + '<span style=\'color:lime\'> Neautralizes the effects of weak poisons </span>';
item.atd1.stype = 4;
item.atd1.use = function () {
	global.stat.medst++
	if (effect.psn.active === true) { if (effect.psn.duration - 30 <= 0) { removeEff(effect.psn); msg('You feel better', 'lime') } else { effect.psn.duration -= 30; msg('You feel a little better', 'lightgreen') } } else msg('Tastes like medicine..', 'lightblue');
	this.amount--;
}

item.psnwrd = new Item(); item.psnwrd.id = 3003;
item.psnwrd.name = 'Poison Ward';
item.psnwrd.desc = 'Solution developed to protect residents from diseases during times of plague' + dom.dseparator + '<span style=\'color:lime\'> Grants invulnerability to poisons for a few hours </span>';
item.psnwrd.stype = 4;
item.psnwrd.rar = 2;
item.psnwrd.use = function () {
	global.stat.medst++
	if (effect.psnwrd.active === false) giveEff(you, effect.psnwrd, 600); else effect.psnwrd.duration = 600;
	this.amount--;
}

item.hlpd = new Item(); item.hlpd.id = 3004;
item.hlpd.name = 'Low-grade Healing Powder'; item.hlpd.val = 16;
item.hlpd.desc = 'Finely crushed cure grass. Used as a base to make weak medicine' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.hlpd.val + ' </span>health';
item.hlpd.stype = 4;
item.hlpd.use = function () {
	global.stat.medst++
	you.hp + this.val > you.hpmax ? you.hp = you.hpmax : you.hp += this.val;
	this.amount--; dom.d5_1_1.update(); msg('Restored ' + this.val + ' hp', 'lime');
}

item.smm = new Item(); item.smm.id = 3005;
item.smm.name = 'Stomach Medicine';
item.smm.desc = 'Mixture of ginger, bittervine,  and other herbs. Destroys toxins in one\'s body' + dom.dseparator + '<span style=\'color:lime\'> Alliviates food poisoning </span>';
item.smm.stype = 4;
item.smm.use = function () {
	global.stat.medst++
	if (effect.fpn.active === true) { if (effect.fpn.duration - 30 <= 0) { removeEff(effect.fpn); msg('You feel better', 'lime') } else { effect.fpn.duration -= 30; msg('You feel a little better', 'lightgreen') } } else msg('Tastes like medicine..', 'lightblue');
	this.amount--;
}

item.sp1 = new Item(); item.sp1.id = 3006;
item.sp1.name = 'Low-grade Spirit Pill';
item.sp1.desc = 'Tiny cheap spirit pill, made from condensed Ki. Lowest type, given to weak people and children to nourish their bodies.' + dom.dseparator + '<span style=\'color:orange\'> Grants +500 EXP </span>';
item.sp1.stype = 4;
item.sp1.use = function () {
	giveExp(500, true, true, true); global.stat.plst++; global.stat.medst++
	this.amount--;
}

item.sp2 = new Item(); item.sp2.id = 3007;
item.sp2.name = 'Mid-grade Spirit Pill';
item.sp2.desc = 'Small cheap spirit pill, made from condensed Ki. Developed to help young martial artists to go through their training' + dom.dseparator + '<span style=\'color:orange\'> Grants +2500 EXP </span>';
item.sp2.stype = 4;
item.sp2.use = function () {
	giveExp(2500, true, true, true); global.stat.plst++; global.stat.medst++
	this.amount--;
}

item.sp3 = new Item(); item.sp3.id = 3008;
item.sp3.name = 'High-grade Spirit Pill';
item.sp3.desc = 'Small spirit pill, made from condensed Ki. Given to young warriors as energy supplement' + dom.dseparator + '<span style=\'color:orange\'> Grants +15000 EXP </span>';
item.sp3.stype = 4;
item.sp3.use = function () {
	giveExp(15000, true, true, true); global.stat.plst++; global.stat.medst++
	this.amount--;
}

item.lsrd = new Item(); item.lsrd.id = 3009;
item.lsrd.name = 'Life Shard';
item.lsrd.desc = 'A fragment of living energy, trapped within a crystallic shell. Absorbing these slightly increases lifespan' + dom.dseparator + '<span style=\'color:hotpink\'> Increases HP by +2 permanently </span>';
item.lsrd.stype = 4;
item.lsrd.use = function () {
	you.hpmax += 2; you.hp += 2; you.hpa += 2; dom.d5_1_1.update(); msg('HP increased by +2 permanently', 'hotpink')
	this.amount--;
}

item.hptn1 = new Item(); item.hptn1.id = 3010;
item.hptn1.name = 'Lesser Healing Potion'; item.hptn1.val = 50;
item.hptn1.desc = 'Weakest healing potion you can possibly find. Nearly useless for actual healing, but can act as a headache reliever' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.hptn1.val + ' </span>health';
item.hptn1.stype = 4;
item.hptn1.use = function () {
	you.hp + this.val > you.hpmax ? you.hp = you.hpmax : you.hp += this.val; global.stat.potnst++; global.stat.medst++
	this.amount--; dom.d5_1_1.update(); msg('Restored ' + this.val + ' hp', 'lime');
}

item.lckl = new Item(); item.lckl.id = 3011;
item.lckl.name = 'Lucky Clover';
item.lckl.desc = 'Clover of the rare breed. Whoever is able to find even one will be blessed by the Gods of Luck' + dom.dseparator + '<span style="color: red">L</span><span style="color: orange">U</span><span style="color: gold">C</span><span style="color: YELLOW">K +1</span>';
item.lckl.stype = 4;
item.lckl.rar = 4;
item.lckl.onGet = function () {
	if (this.amount >= 7) { giveRcp(rcp.clrpin); this.onGet = function () { } }
}
item.lckl.use = function (x) {
	you.luck += 1; msg('Your Luck Increases!', 'gold');
	this.amount--;
}

item.wstn1 = new Item(); item.wstn1.id = 3012;
item.wstn1.name = 'Grey Whetsone';
item.wstn1.desc = 'Cheap and crude piece of whetstone. Not nearly good enough to maintain the life of a weapon, you can at least scrap off dirt and blood with it' + dom.dseparator + '<span style="color: lightgreen">Repairs equipped Weapon for <span style="color: lime">+2 DP</span></span>';
item.wstn1.stype = 4;
item.wstn1.use = function (x) {
	if (you.eqp[0].id === 10000) msg('Repair what?...', 'lightgrey'); else {
		you.eqp[0].dp + 2 >= you.eqp[0].dpmax ? you.eqp[0].dp = you.eqp[0].dpmax : you.eqp[0].dp += 2; msg('You\'ve repaired ' + you.eqp[0].name + ' slightly', 'yellow');
		this.amount--;
	}
}

item.bdgh = new Item(); item.bdgh.id = 3013;
item.bdgh.name = 'Bandage';
item.bdgh.desc = 'Clean piece of thin sturdy cloth, perfect for wrapping and securing open wounds' + dom.dseparator + '<span style="color:lime">Somewhat stops bleeding</span>';
item.bdgh.stype = 4;
item.bdgh.use = function () {
	if (!effect.bled.active) { msg('You\'re not bleeding', 'orange'); return }
	let f = findbyid(you.eff, effect.bled.id);
	if (f.duration - 20 <= 0) removeEff(f, f.target); else f.duration -= 20;
	msg("You bandage your wounds", 'lime'); this.amount--;
}
item.bdgh.onGet = function () {
	if (this.amount >= 5) { giveRcp(rcp.mdcag); this.onGet = function () { } }
}

item.amshrm = new Item(); item.amshrm.id = 3014;
item.amshrm.name = 'Asura Mushroom';
item.amshrm.desc = 'The ultimate mushroom of the mushroom world. Eating it makes you feel a mysterious kind of vitality' + dom.dseparator + '<span style="color: springgreen">Permanently increases STR by +5</span>';
item.amshrm.stype = 4;
item.amshrm.rar = 4;
item.amshrm.use = function (x) {
	you.stra += 5; msg('You feel the surge of strength!', 'crimson'); msg('STR +5!', 'lime'); you.stat_r(); update_d();
	this.amount--;
}

item.akhrb = new Item(); item.akhrb.id = 3015;
item.akhrb.name = 'Aspha Herb';
item.akhrb.desc = 'Diet-oriented vegetable with misleading effect. It was such a terrible taste and bitter texture that no one would willingly eat them' + dom.dseparator + '<span style="color: orange">Makes you feel bad</span>';
item.akhrb.stype = 4;
item.akhrb.rar = 2;
item.akhrb.use = function (x) {
	if (this.disabled !== true) {
		this.disabled = true;
		if (random() < .005) { msg('You managed to consume it', 'lime'); giveSkExp(skl.glt, rand(100, (355 * (skl.glt.lvl * .2 + 1)))); you.sat *= .2; this.amount--; } else { msg(select(['You retch..', 'You feel like vomiting..', 'You feel sick..', 'Your insides turn just by looking at this thing..', 'You immidiately spit it out..', 'Your body rejects this..', 'Your body screams..']), 'grey') } setTimeout(() => { this.disabled = false }, 200);
	}
}

item.cndl = new Item(); item.cndl.id = 3016;
item.cndl.name = 'Candle';
item.cndl.desc = 'A tall wax candle, made to burn for a very long time';
item.cndl.stype = 4;
item.cndl.use = function (x) {
	if (!effect.cdlt.active) giveEff(you, effect.cdlt); else effect.cdlt.duration = 360;
	this.amount--;
}

item.incsk = new Item(); item.incsk.id = 3017;
item.incsk.name = 'Incense Stick';
item.incsk.desc = 'A stick of aromatic incense. It calms your soul and mind' + dom.dseparator + '<span style="color: skyblue">Doubles meditation gain<br>Doubles cultivation gain</span>';
item.incsk.stype = 4;
item.incsk.use = function (x) {
	if (effect.incsk.active === true) effect.insck.duration = 600; else giveEff(you, effect.incsk);
	this.amount--;
}

item.sp0a = new Item(); item.sp0a.id = 3018;
item.sp0a.name = 'Spirit Opening Powder';
item.sp0a.desc = 'Powder refined from blood of the wyrm. Has potential to improve internal energy' + dom.dseparator + '<span style=\'color:orange\'> Grants +95000 EXP </span><br><span style=\'color:deeppink\'>EXP Gain +1%</span>';
item.sp0a.stype = 4;
item.sp0a.rar = 2;
item.sp0a.use = function () {
	global.stat.medst++
	giveExp(95000, true, true, true); you.exp_t += .01;
	this.amount--;
}

item.smkbmb = new Item(); item.smkbmb.id = 3019;
item.smkbmb.name = 'Smoke Bomb';
item.smkbmb.desc = 'Pellets that release thick smog when crushed. Can create a smokescreen to help you escape from danger' + dom.dseparator + '<span style=\'color:springgreen\'>Bypasses current enemy</span>';
item.smkbmb.stype = 4;
item.smkbmb.use = function () {
	if (global.flags.civil === true && global.flags.btl === false) { msg('You\'re not in combat!', 'red'); return }
	if (global.current_z.size === 1 || global.current_z.size === 0 || global.current_z.isboss) { msg('You can\'t pass this enemy!', 'red'); return }
	else {
		clearInterval(timers.btl); clearInterval(timers.btl2); msg('*Puff*', 'black', null, null, 'lightgrey'); global.flags.smkactv = true;
		global.current_z.size--; area_init(global.current_z); dom.d7m.update();
		this.amount--;
	}
}

item.svial1 = new Item(); item.svial1.id = 3020;
item.svial1.name = 'Skeleton Vial';
item.svial1.desc = 'Summons a lvl 10 Skeleton';
item.svial1.stype = 4;
item.svial1.use = function () {
	if (global.flags.civil === true && global.flags.btl === false) {
		if (global.flags.sleepmode || global.flags.rdng || global.flags.isshop || global.flags.busy || global.flags.work) { msg('Unable to summon!', 'red'); return }
		let ta = new Area(); ta.id = -1
		ta.name = 'Somewhere';
		ta.pop = [{ crt: creature.skl, lvlmin: 10, lvlmax: 10, c: 1 }]; ta.protected = true;
		ta.onEnd = function () { area_init(area.nwh); global.flags.civil = true; global.flags.btl = false; }; global.flags.civil = false; global.flags.btl = true;
		ta.size = 1; z_bake(ta); area_init(ta); dom.d7m.update(); msg('The creature arises from the ground!', 'white', null, null, 'red')
		this.amount--;
	} else msg('You\'re already in a battle!', 'red')
}

item.mpwdr = new Item(); item.mpwdr.id = 3021;
item.mpwdr.name = 'Monster Powder';
item.mpwdr.desc = 'Dried and grounded sunbloom mixed with red salts, it emits aura often mistaken for soul energy that attracts nearby creatures<br>' + dom.dseparator + '<span style=\'color:seagreen\'>Increases area size by 5</span>';
item.mpwdr.stype = 4;
item.mpwdr.use = function () {
	if (global.current_z.protected || global.current_z.id <= 101 || global.current_z.size <= 1) { msg('Unable to use it here!', 'red'); return }
	msg('You spread some powder on the ground', 'lime', null, null, 'brown')
	global.current_z.size += 5; dom.d7m.update();
	this.amount--;
}

item.smbpll = new Item(); item.smbpll.id = 3022;
item.smbpll.name = 'Slumber Pill';
item.smbpll.desc = 'Pill with a strong sedative effect. Normally used by sick and old people to treat insomnia, if they can afford it. Has other uses if you are creative enough' + dom.dseparator + '<span style=\'color:lightgrey\'>Makes you sleep through 18 hours in an instant</span>';
item.smbpll.stype = 4;
item.smbpll.use = function (x) {
	if (global.flags.btl || global.flags.rdng || global.flags.isshop || global.flags.busy || global.flags.work) { msg('You can\'t sleep now!', 'red'); return } else {
		let b = .1; let s = HOUR * 18; if (!global.flags.sleepmode) giveEff(you, effect.slep); else if (global.current_l.id === 112) b += home.bed.sq; global.stat.plst++
		for (let a = 0; a < s; a++) { giveSkExp(skl.sleep, .1); ontick() } if (!global.flags.sleepmode) removeEff(effect.slep);
	}
	this.amount--;
}

item.lifedr = new Item(); item.lifedr.id = 3023;
item.lifedr.name = 'Life Drop';
item.lifedr.desc = 'A single drop of revitalizing liquid. Consuming even such a meager amount has a miraclous effect on the lifeforce of a mortal' + dom.dseparator + '<span style=\'color:hotpink\'> Increases HP by +40 permanently </span><br><span style=\'color:lime\'>HP growth rate +2%</span>';
item.lifedr.stype = 4;
item.lifedr.rar = 2;
item.lifedr.use = function () {
	you.stat_p[0] += .03; you.hpmax += 40; you.hp += 40; you.hpa += 40; dom.d5_1_1.update(); msg('HP increased by +40 permanently', 'hotpink'); msg('HP potential grows!', 'pink')
	this.amount--;
}

item.mnblm = new Item(); item.mnblm.id = 3024;
item.mnblm.name = 'Moonbloom';
item.mnblm.desc = 'A yellow flower which is said to bud on new moons. The flower\' nectar is the favourite of spirits and is effective for recovering from exhaustion, but only by refining it into a pill or elixir is it possible to draw out its full potential, which makes it prized by alchemists' + dom.dseparator + '<span style=\'color:hotpink\'> Increases SAT by +2 permanently </span>';
item.mnblm.stype = 4;
item.mnblm.rar = 2;
item.mnblm.use = function () {
	you.satmax += 2; you.sat += 2; you.sata += 2; dom.d5_3_1.update(); msg('SAT increased by +2 permanently', 'hotpink');
	this.amount--;
}

item.hptn2 = new Item(); item.hptn2.id = 3025;
item.hptn2.name = 'Minor Healing Potion'; item.hptn2.val = 450;
item.hptn2.desc = 'Healing potion with weak healing powers. It is usually used by commoners as first aid before deciding whether to go see a doctor or not' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.hptn2.val + ' </span>health';
item.hptn2.stype = 4;
item.hptn2.use = function () {
	you.hp + this.val > you.hpmax ? you.hp = you.hpmax : you.hp += this.val; global.stat.potnst++; global.stat.medst++
	this.amount--; dom.d5_1_1.update(); msg('Restored ' + this.val + ' hp', 'lime');
}

item.hptn3 = new Item(); item.hptn3.id = 3026;
item.hptn3.name = 'Healing Potion'; item.hptn3.val = 2100;
item.hptn3.desc = 'Startand healing potion of common quality. It can heal wounds, bruises, burns, sprains and other minor injuries. Novice adventurers and hunters should carry a few of these at all times' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.hptn3.val + ' </span>health';
item.hptn3.stype = 4;
item.hptn3.use = function () {
	you.hp + this.val > you.hpmax ? you.hp = you.hpmax : you.hp += this.val; global.stat.potnst++; global.stat.medst++
	this.amount--; dom.d5_1_1.update(); msg('Restored ' + this.val + ' hp', 'lime');
}

item.hptn4 = new Item(); item.hptn4.id = 3027;
item.hptn4.name = 'Major Healing Potion'; item.hptn4.val = 7900;
item.hptn4.desc = 'Potions given to the knights in times of war. Can heal moderate wounds and dull out the pain. These potions sneak their way into the market by all kinds of illegal means, yet actually selling them isn\'t prohibited' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.hptn4.val + ' </span>health';
item.hptn4.stype = 4; item.hptn4.rar = 2;
item.hptn4.use = function () {
	you.hp + this.val > you.hpmax ? you.hp = you.hpmax : you.hp += this.val; global.stat.potnst++; global.stat.medst++
	this.amount--; dom.d5_1_1.update(); msg('Restored ' + this.val + ' hp', 'lime');
}

item.lsstn = new Item(); item.lsstn.id = 3028;
item.lsstn.name = 'Life Stone';
item.lsstn.desc = 'Life vessel that lost its energy and became impure, now looks like an ordinary small pebble and serves very little purpose. Can be absorbed for minor health benefits' + dom.dseparator + '<span style=\'color:hotpink\'> Increases HP by +25 permanently </span>';
item.lsstn.stype = 4;
item.lsstn.use = function () {
	you.hpmax += 25; you.hp += 25; you.hpa += 25; dom.d5_1_1.update(); msg('HP increased by +25 permanently', 'hotpink')
	this.amount--;
}

item.bltrt = new Item(); item.bltrt.id = 3029;
item.bltrt.name = 'Bloat Root';
item.bltrt.desc = 'Unremarkable looking grey root that is bland and tasteless, but eating it makes you feel full. It doesn\'t seem to have any other qualities, hovewer' + dom.dseparator + 'Restores<span style=\'color:lime\'> 100 </span>energy';
item.bltrt.stype = 4;
item.bltrt.rar = 2;
item.bltrt.use = function () {
	you.sat + 100 > you.satmax ? you.sat = you.satmax : you.sat += 100; dom.d5_3_1.update();
	this.amount--; msg('Restored 100 energy', 'lime');
}

item.feip1 = new Item(); item.feip1.id = 3030;
item.feip1.name = 'Fei Pill';
item.feip1.desc = 'When an alchemist miserably fails to produce a pill, this waste is created. Compound of ruined medical materials is full of poison and impurities, it can be used to kill those with weak constitution. However, it is not useless, and can be absorbed for raw ki if one endures the pain and survives after consuming it';
item.feip1.stype = 4;
item.feip1.use = function () {
	giveEff(you, effect.fei1, 60, 1);
	this.amount--; global.stat.plst++
}

item.stthbm1 = new Item(); item.stthbm1.id = 3031;
item.stthbm1.name = 'Morgia';
item.stthbm1.desc = 'Herb of might. This fiery herb is rumored to improve muscle density' + dom.dseparator + '<span style="color: springgreen">Permanently increases STR by +1</span>';
item.stthbm1.stype = 4;
item.stthbm1.rar = 2;
item.stthbm1.use = function (x) {
	you.stra += 1; msg('You feel the surge of strength!', 'crimson'); msg('STR +1', 'lime'); you.stat_r(); update_d();
	this.amount--;
}

item.stthbm2 = new Item(); item.stthbm2.id = 3032;
item.stthbm2.name = 'Springsweed';
item.stthbm2.desc = 'Herb of swiftness. Loved by Serpents, this herb slightly raises one\'s reaction time' + dom.dseparator + '<span style="color: springgreen">Permanently increases SPD by +1</span>';
item.stthbm2.stype = 4;
item.stthbm2.rar = 2;
item.stthbm2.use = function (x) {
	you.spda += 1; msg('You feel the surge of strength!', 'crimson'); msg('SPD +1', 'lime'); you.stat_r(); update_d();
	this.amount--;
}

item.stthbm3 = new Item(); item.stthbm3.id = 3033;
item.stthbm3.name = 'Clearbane';
item.stthbm3.desc = 'Herb of clarity. This herb is often used in making of high quality incense' + dom.dseparator + '<span style="color: springgreen">Permanently increases INT by +1</span>';
item.stthbm3.stype = 4;
item.stthbm3.rar = 2;
item.stthbm3.use = function (x) {
	you.inta += 1; msg('You feel the surge of strength!', 'crimson'); msg('INT +1', 'lime'); you.stat_r(); update_d();
	this.amount--;
}

item.stthbm4 = new Item(); item.stthbm4.id = 3034;
item.stthbm4.name = 'Drakevine';
item.stthbm4.desc = 'Herb of flexibility. There are rumors of an old hermit growing these herbs under the hidden mountain' + dom.dseparator + '<span style="color: springgreen">Permanently increases AGL by +1</span>';
item.stthbm4.stype = 4;
item.stthbm4.rar = 2;
item.stthbm4.use = function (x) {
	you.agla += 1; msg('You feel the surge of strength!', 'crimson'); msg('AGL +1', 'lime'); you.stat_r(); update_d();
	this.amount--;
}

item.bmsmktt = new Item(); item.bmsmktt.id = 3035;
item.bmsmktt.name = 'Smoke Pellet Cluster';
item.bmsmktt.desc = 'Repurposed smoke bomb, made by concentrating multiple volatile components together, making the moke several times more hazardous, but not enough to cause real damage to a living person. Since the ignition period from such a modification is much longer, it has fewer uses than a regular smoke bomb';
item.bmsmktt.stype = 4;
item.bmsmktt.use = function () {
	if (global.current_l.id !== 111) { msg('This isn\'t the best place to use this', 'red'); return }
	area.hmbsmnt.size = 0; msg('You toss a cluster down your basement and hear a distant shrill', 'yellow')
	dom.d_lctt.innerHTML += '<span style="color:grey;font-size:1.2em">&nbsp煙<span>'
	sector.home.data.smkp = 900; sector.home.data.smkt = time.minute; this.amount--;
}


item.appl = new Item(); item.appl.id = 1;
item.appl.name = 'Apple'; item.appl.val = 7;
item.appl.desc = 'Juicy red fruit. Makes a fine breakfast if you have nothing else...' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.appl.val + ' </span>energy';
item.appl.stype = 4;
item.appl.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val;
	this.amount--; dom.d5_3_1.update(); skl.glt.use(2); global.stat.fooda++;
	msg('Restored ' + this.val + ' energy', 'lime');
}

item.brd = new Item(); item.brd.id = 2;
item.brd.name = 'Bread'; item.brd.val = 14;
item.brd.desc = 'Simple loaf of bread, baked with care. It\'s crunchy and smells nice' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.brd.val + ' </span>energy';
item.brd.stype = 4; item.brd.rot = [.15, .25, .05, .15];
item.brd.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}
item.brd.onChange = function (x, y) { if (y) return [item.spb, x]; giveItem(item.spb, x) }

item.crrt = new Item(); item.crrt.id = 3;
item.crrt.name = 'Carrot'; item.crrt.val = 5
item.crrt.desc = 'It gets very sweet when boiled' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.crrt.val + ' </span>energy';
item.crrt.stype = 4;
item.crrt.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(1); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}
item.crrt.onGet = function () {
	if (this.amount >= 20) { giveRcp(rcp.bcrrt); this.onGet = function () { } }
}

item.potat = new Item(); item.potat.id = 4;
item.potat.name = 'Potato'; item.potat.val = 7;
item.potat.desc = 'Universal vegetable that can be prepared in hundreds different ways' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.potat.val + ' </span>energy';
item.potat.stype = 4;
item.potat.use = function () {
	if (random() < .1) { if (effect.fpn.active === false) giveEff(you, effect.fpn, rand(15, 35)); else effect.fpn.duration += rand(5, 25); }
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.eggn = new Item(); item.eggn.id = 5;
item.eggn.name = 'Egg'; item.eggn.val = 4;
item.eggn.desc = 'Whole chicken egg, very nutritious' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.eggn.val + ' </span>energy';
item.eggn.stype = 4;
item.eggn.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.mlkn = new Item(); item.mlkn.id = 6;
item.mlkn.name = 'Milk'; item.mlkn.val = 8;
item.mlkn.desc = 'Power potion for your bones' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.mlkn.val + ' </span>energy';
item.mlkn.stype = 4;
item.mlkn.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.foodb++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.rwmt1 = new Item(); item.rwmt1.id = 7;
item.rwmt1.name = 'Raw Meat'; item.rwmt1.val = 11;
item.rwmt1.desc = 'Edible part of some animal, has to be cooked before consumption' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.rwmt1.val + ' </span>energy';
item.rwmt1.stype = 4; item.rwmt1.rot = [.25, .45, .1, .2]
item.rwmt1.onGet = function () {
	if (this.amount >= 5) { giveRcp(rcp.rsmt); this.onGet = function () { } }
}
item.rwmt1.use = function () {
	if (random() < .15) { if (effect.fpn.active === false) giveEff(you, effect.fpn, rand(15, 35)); else effect.fpn.duration += rand(5, 25); }
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(6); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}
item.rwmt1.onChange = function (x, y) { if (y) return [item.rtnmt, x]; giveItem(item.rtnmt, x) }

item.rice = new Item(); item.rice.id = 8;
item.rice.name = 'Rice'; item.rice.val = 2;
item.rice.desc = 'Clean rice grains. Healthy and delicious when cooked, but awful to eat in dry state' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.rice.val + ' </span>energy';
item.rice.stype = 4;
item.rice.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}


item.borc = new Item(); item.borc.id = 9;
item.borc.name = 'Steamed Rice'; item.borc.val = 18;
item.borc.desc = 'Fluffy rice. Simple dish that tastes good' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.borc.val + ' </span>energy';
item.borc.stype = 4;
item.borc.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(3); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.begg = new Item(); item.begg.id = 10;
item.begg.name = 'Boiled Egg'; item.begg.val = 7;
item.begg.desc = 'Hard/soft-boiled egg, you aren\'t sure. Will fill you up either way' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.begg.val + ' </span>energy';
item.begg.stype = 4;
item.begg.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.kit = new Item(); item.kit.id = 11;
item.kit.name = 'Kikatsugan'; item.kit.val = 800;
item.kit.desc = 'Ninja ration consisting mostly of cereals that, according to esoteric scrolls, <span style=\'color:orange\'>\"Could sustain one in both mind and body with only three grains per day\"</span>' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.kit.val + ' </span>energy';
item.kit.stype = 4;
item.kit.rar = 4;
item.kit.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(390); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.bac = new Item(); item.bac.id = 12;
item.bac.name = 'Bacon'; item.bac.val = 12;
item.bac.desc = 'The food of kings' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.bac.val + ' </span>energy';
item.bac.stype = 4;
item.bac.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(6); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.bgt = new Item(); item.bgt.id = 13;
item.bgt.name = 'Baguette'; item.bgt.val = 17;
item.bgt.desc = 'A very long bread' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.bgt.val + ' </span>energy';
item.bgt.stype = 4;
item.bgt.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(4); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.bhd = new Item(); item.bhd.id = 14;
item.bhd.name = 'Hardtack'; item.bhd.val = 6;
item.bhd.desc = 'A dry and virtually tasteless bread product capable of remaining edible without spoilage for vast lengths of time' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.bhd.val + ' </span>energy';
item.bhd.stype = 4;
item.bhd.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(8); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.spb = new Item(); item.spb.id = 15;
item.spb.name = 'Spoiled Bread'; item.spb.val = 8;
item.spb.desc = ' Piece of old stale bread covered in mold. Takes courage to eat' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.spb.val + ' </span>energy';
item.spb.stype = 4;
item.spb.rar = 0;
item.spb.use = function () {
	if (random() < .4) { if (effect.fpn.active === false) giveEff(you, effect.fpn, rand(15, 35)); else effect.fpn.duration += rand(5, 25); }
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(17); global.stat.fooda++; global.stat.foodt++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.wsb = new Item(); item.wsb.id = 16;
item.wsb.name = 'Wastebread'; item.wsb.val = 11;
item.wsb.desc = 'When flour becomes a commodity to deal with, wayfarers and the poor resort to mix it with leftovers of other ingredients and bake it all into bread' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.wsb.val + ' </span>energy';
item.wsb.stype = 4;
item.wsb.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(7); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.onn = new Item(); item.onn.id = 17;
item.onn.name = 'Onion'; item.onn.val = 3;
item.onn.desc = 'Vegetable cultivated since ancient times. Enhances the dish in various ways, also makes you cry' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.onn.val + ' </span>energy';
item.onn.stype = 4;
item.onn.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(8); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.sgr = new Item(); item.sgr.id = 18;
item.sgr.name = 'Sugar'; item.sgr.val = 1;
item.sgr.desc = 'Sweet little crystals. Kids love treats made out of them' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.sgr.val + ' </span>energy';
item.sgr.stype = 4;
item.sgr.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(1); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.wht = new Item(); item.wht.id = 19;
item.wht.name = 'Wheat'; item.wht.val = 1;
item.wht.desc = 'Raw wheat. While not very tasty, powder made out of them is the main ingredient in breadmaking' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.wht.val + ' </span>energy';
item.wht.stype = 4;
item.wht.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(1); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.tmt = new Item(); item.tmt.id = 20;
item.tmt.name = 'Tomato'; item.tmt.val = 8;
item.tmt.desc = 'Soursweet juicy edible, has many uses in cooking. Rumored to be poisonous' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.tmt.val + ' </span>energy';
item.tmt.stype = 4;
item.tmt.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.cbg = new Item(); item.cbg.id = 21;
item.cbg.name = 'Cabbage'; item.cbg.val = 12;
item.cbg.desc = 'Crisp layered vegetable. Used in variety of dishes' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.cbg.val + ' </span>energy';
item.cbg.stype = 4;
item.cbg.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.mshr = new Item(); item.mshr.id = 22;
item.mshr.name = 'Mushroom'; item.mshr.val = 5;
item.mshr.desc = 'Common edible mushroom. When cooked with the right ingredients, the flavour of this mushroom is not so common' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.mshr.val + ' </span>energy';
item.mshr.stype = 4;
item.mshr.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.bnn = new Item(); item.bnn.id = 23;
item.bnn.name = 'Banana'; item.bnn.val = 8;
item.bnn.desc = 'Fruit full of potassium. Originaly cultivated as staple food, but eventually gained popularity' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.bnn.val + ' </span>energy';
item.bnn.stype = 4;
item.bnn.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(1); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.wbrs = new Item(); item.wbrs.id = 24;
item.wbrs.name = 'Wild Berries'; item.wbrs.val = 7;
item.wbrs.desc = 'Wide selection of various edible berries collected from the forest' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.wbrs.val + ' </span>energy';
item.wbrs.stype = 4;
item.wbrs.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(1); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.strwb = new Item(); item.strwb.id = 25;
item.strwb.name = 'Strawberry'; item.strwb.val = 18;
item.strwb.desc = 'Heap of plump red berries. They are sweet and popular with children and royalty' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.strwb.val + ' </span>energy';
item.strwb.stype = 4;
item.strwb.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(3); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.orng = new Item(); item.orng.id = 26;
item.orng.name = 'Orange'; item.orng.val = 9;
item.orng.desc = 'Fragnant citruis, can be either sour or sweet depending where it was cultivated' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.orng.val + ' </span>energy';
item.orng.stype = 4;
item.orng.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(5); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.ches = new Item(); item.ches.id = 27;
item.ches.name = 'Cheese'; item.ches.val = 13;
item.ches.desc = 'Fermented cow milk. Despite having strong smell it is a tasty and popular product. Can be eaten raw' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.ches.val + ' </span>energy';
item.ches.stype = 4;
item.ches.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(5); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.ltcc = new Item(); item.ltcc.id = 28;
item.ltcc.name = 'Lettuce'; item.ltcc.val = 2;
item.ltcc.desc = 'Watery leaves, usually used in salads' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.ltcc.val + ' </span>energy';
item.ltcc.stype = 4;
item.ltcc.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.brly = new Item(); item.brly.id = 29;
item.brly.name = 'Barley'; item.brly.val = 2;
item.brly.desc = 'Grainy cereal used for malting. A staple of brewing everywhere. It can also be ground into flour' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.brly.val + ' </span>energy';
item.brly.stype = 4;
item.brly.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(1); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.grlc = new Item(); item.grlc.id = 30;
item.grlc.name = 'Garlic'; item.grlc.val = 6;
item.grlc.desc = 'A pungent garlic, popular as a seasoning for its strong flavor' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.grlc.val + ' </span>energy';
item.grlc.stype = 4;
item.grlc.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(9); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.pmpk = new Item(); item.pmpk.id = 31;
item.pmpk.name = 'Pumpkin'; item.pmpk.val = 12;
item.pmpk.desc = 'A large vegetable, about the size of your head. Not very tasty raw, but is great for cooking' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.pmpk.val + ' </span>energy';
item.pmpk.stype = 4;
item.pmpk.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(3); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.lmn = new Item(); item.lmn.id = 32;
item.lmn.name = 'Lemon'; item.lmn.val = 8;
item.lmn.desc = 'Very sour citrus. Can be eaten if you really want' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.lmn.val + ' </span>energy';
item.lmn.stype = 4;
item.lmn.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(10); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.grp = new Item(); item.grp.id = 33;
item.grp.name = 'Grapes'; item.grp.val = 8;
item.grp.desc = 'A cluster of juicy grapes. If you ferment them they\'ll turn into wine' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.grp.val + ' </span>energy';
item.grp.stype = 4;
item.grp.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.pnpl = new Item(); item.pnpl.id = 34;
item.pnpl.name = 'Pineapple'; item.pnpl.val = 12;
item.pnpl.desc = 'A large, spiky pineapple. A bit sour, though' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.pnpl.val + ' </span>energy';
item.pnpl.stype = 4;
item.pnpl.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(3); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.rsmt = new Item(); item.rsmt.id = 35;
item.rsmt.name = 'Roasted Meat'; item.rsmt.val = 15; item.rsmt.rot = [.1, .25, .05, .15]
item.rsmt.desc = 'Simple slab of meat, roasted on an open fire without any seasoning. Tastes pretty good nonetheless' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.rsmt.val + ' </span>energy';
item.rsmt.stype = 4;
item.rsmt.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(4); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.tbrwd = new Item(); item.tbrwd.id = 36;
item.tbrwd.name = 'Tea'; item.tbrwd.val = 20;
item.tbrwd.desc = 'The beverage of gentlemen everywhere, made from applying hot water to leaves of the tea plant. Often used during the ceremonies as a social supplement' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.tbrwd.val + ' </span>energy';
item.tbrwd.stype = 4;
item.tbrwd.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(7); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.htbrwd = new Item(); item.htbrwd.id = 37;
item.htbrwd.name = 'Herbal Tea'; item.htbrwd.val = 16;
item.htbrwd.desc = 'Healthy beverage brewed from various herbs, has a powerful relaxation effect' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.htbrwd.val + ' </span>energy';
item.htbrwd.stype = 4;
item.htbrwd.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(5); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.segg = new Item(); item.segg.id = 38;
item.segg.name = 'Scrambled Eggs'; item.segg.val = 20;
item.segg.desc = 'Fluffy and delicious scrambled eggs' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.segg.val + ' </span>energy';
item.segg.stype = 4;
item.segg.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(7); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.irntl = new Item(); item.irntl.id = 39;
item.irntl.name = 'Indigo Rantil'; item.irntl.val = 31;
item.irntl.desc = 'Wierd wine mixed with whiskey and rum' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.irntl.val + ' </span>energy';
item.irntl.stype = 4;
item.irntl.rar = 2;
item.irntl.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(17); global.stat.foodb++; global.stat.foodal++; giveSkExp(skl.drka, 21)
	if (effect.drunk.active === false) giveEff(you, effect.drunk, 130); else effect.drunk.duration += 75
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.wine1 = new Item(); item.wine1.id = 40;
item.wine1.name = 'One-year Wine'; item.wine1.val = 12;
item.wine1.desc = 'Barely reached the standard, maybe you should keep it for longer' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.wine1.val + ' </span>energy';
item.wine1.stype = 4;
item.wine1.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(10); global.stat.foodb++; global.stat.foodal++; giveSkExp(skl.drka, 5)
	if (effect.drunk.active === false) giveEff(you, effect.drunk, 60); else effect.drunk.duration += 35
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.wines1 = new Item(); item.wines1.id = 41;
item.wines1.name = 'Valens'; item.wines1.val = 100;
item.wines1.desc = 'A Celtic red wine with delicate, yet robust, flavour' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.wines1.val + ' </span>energy';
item.wines1.stype = 4;
item.wines1.rar = 4;
item.wines1.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(100); global.stat.foodb++; global.stat.foodal++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.wines2 = new Item(); item.wines2.id = 42;
item.wines2.name = 'Prudens'; item.wines2.val = 100;
item.wines2.desc = 'The most elegant red wine, with gentle flavour and bouquet' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.wines2.val + ' </span>energy';
item.wines2.stype = 4;
item.wines2.rar = 4;
item.wines2.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(100); global.stat.foodb++; global.stat.foodal++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.wines3 = new Item(); item.wines3.id = 43;
item.wines3.name = 'Volare'; item.wines3.val = 100;
item.wines3.desc = 'A Celtic white wine known for its honey-like fragrance' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.wines3.val + ' </span>energy';
item.wines3.stype = 4;
item.wines3.rar = 4;
item.wines3.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(100); global.stat.foodb++; global.stat.foodal++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.wines4 = new Item(); item.wines4.id = 44;
item.wines4.name = 'Audentia'; item.wines4.val = 100;
item.wines4.desc = 'A Celtic quality sweet wine allowed to age to perfection' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.wines4.val + ' </span>energy';
item.wines4.stype = 4;
item.wines4.rar = 4;
item.wines4.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(100); global.stat.foodb++; global.stat.foodal++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');

}

item.wines5 = new Item(); item.wines5.id = 45;
item.wines5.name = 'Virtus'; item.wines5.val = 100;
item.wines5.desc = 'A sparkling wine made from a blend of three grapes' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.wines5.val + ' </span>energy';
item.wines5.stype = 4;
item.wines5.rar = 4;
item.wines5.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(100); global.stat.foodb++; global.stat.foodal++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');

}

item.acrn = new Item(); item.acrn.id = 46;
item.acrn.name = 'Acorn'; item.acrn.val = 4;
item.acrn.desc = 'A handful of acorns, still in their shells. Squirrels like them, but they\'re not very good for you to eat in this state' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.acrn.val + ' </span>energy';
item.acrn.stype = 4;
item.acrn.use = function () {
	if (random() < .4) { if (effect.fpn.active === false) giveEff(you, effect.fpn, rand(15, 35)); else effect.fpn.duration += rand(5, 25); }
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(6); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');

}

item.wine2 = new Item(); item.wine2.id = 47;
item.wine2.name = 'Three-year Wine'; item.wine2.val = 24;
item.wine2.desc = 'Delicious wine kept for more than 3 years' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.wine2.val + ' </span>energy';
item.wine2.stype = 4;
item.wine2.rar = 2;
item.wine2.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(17); global.stat.foodal++; global.stat.foodb++; giveSkExp(skl.drka, 12)
	if (effect.drunk.active === false) giveEff(you, effect.drunk, 90); else effect.drunk.duration += 45
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');

}

item.winec1 = new Item(); item.winec1.id = 48;
item.winec1.name = 'Cheap Red Wine'; item.winec1.val = 8;
item.winec1.desc = 'Very rough wine made from fermeted fruit' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.winec1.val + ' </span>energy';
item.winec1.stype = 4;
item.winec1.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(9); global.stat.foodb++; global.stat.foodal++; giveSkExp(skl.drka, 5)
	if (effect.drunk.active === false) giveEff(you, effect.drunk, 55); else effect.drunk.duration += 33
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');

}

item.winec2 = new Item(); item.winec2.id = 49;
item.winec2.name = 'Cheap White Wine'; item.winec2.val = 12;
item.winec2.desc = 'Light wine, prepared only recently' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.winec2.val + ' </span>energy';
item.winec2.stype = 4;
item.winec2.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(10); global.stat.foodb++; global.stat.foodal++; giveSkExp(skl.drka, 8)
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	if (effect.drunk.active === false) giveEff(you, effect.drunk, 60); else effect.drunk.duration += 35
}

item.ske = new Item(); item.ske.id = 50
item.ske.name = 'Sake'; item.ske.val = 31;
item.ske.desc = 'Eastern rice wine, popular past-time drink' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.ske.val + ' </span>energy';
item.ske.stype = 4;
item.ske.rar = 2;
item.ske.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(25); global.stat.foodal++; global.stat.foodb++; giveSkExp(skl.drka, 25)
	if (effect.drunk.active === false) giveEff(you, effect.drunk, 180); else effect.drunk.duration += 115
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.pske = new Item(); item.pske.id = 51
item.pske.name = 'Premium Sake'; item.pske.val = 51;
item.pske.desc = 'Rich Sake with strong foundation, flavorful and fragnant. Valued in high society for its presige status' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.pske.val + ' </span>energy';
item.pske.stype = 4;
item.pske.rar = 3;
item.pske.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(65); global.stat.foodal++; global.stat.foodb++; giveSkExp(skl.drka, 150)
	if (effect.drunk.active === false) giveEff(you, effect.drunk, 380); else effect.drunk.duration += 190
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.cbun1 = new Item(); item.cbun1.id = 52
item.cbun1.name = 'Steamed Bun'; item.cbun1.val = 19;
item.cbun1.desc = 'Plain round bun, very soft and filling' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.cbun1.val + ' </span>energy';
item.cbun1.stype = 4;
item.cbun1.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(4); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');

}

item.cbun2 = new Item(); item.cbun2.id = 53
item.cbun2.name = 'Red Bean Bun'; item.cbun2.val = 29;
item.cbun2.desc = 'Bun with red beans added to it, resulting in rich flavour' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.cbun2.val + ' </span>energy';
item.cbun2.stype = 4;
item.cbun2.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(6); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');

}

item.cbun3 = new Item(); item.cbun3.id = 54
item.cbun3.name = 'Pork Bun'; item.cbun3.val = 34;
item.cbun3.desc = 'Delicious treat with pork meat inside of it, fine addition to your dinner' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.cbun3.val + ' </span>energy';
item.cbun3.stype = 4;
item.cbun3.rar = 2;
item.cbun3.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(8); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');

}

item.scak = new Item(); item.scak.id = 55;
item.scak.name = 'Strawberry Shortcake'; item.scak.val = 39;
item.scak.desc = 'Sweet cake with cream and strawberries, has a soft texture and melts in your mouth' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.scak.val + ' </span>energy';
item.scak.stype = 4;
item.scak.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(13); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');

}

item.atrt = new Item(); item.atrt.id = 56;
item.atrt.name = 'Apple Tart'; item.atrt.val = 29;
item.atrt.desc = 'Crunchy small cake baked with apples' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.atrt.val + ' </span>energy';
item.atrt.stype = 4;
item.atrt.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(8); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');

}

item.strt = new Item(); item.strt.id = 57;
item.strt.name = 'Strawberry Tart'; item.strt.val = 38;
item.strt.desc = 'Sweet pastry with strawberries added on top' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.strt.val + ' </span>energy';
item.strt.stype = 4;
item.strt.rar = 2;
item.strt.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(10); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');

}

item.ccak = new Item(); item.ccak.id = 58;
item.ccak.name = 'Cheesecake'; item.ccak.val = 52;
item.ccak.desc = 'Delicious sweet dessert prepared in multiple layers. With fruit jam on top!' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.ccak.val + ' </span>energy';
item.ccak.stype = 4;
item.ccak.rar = 2;
item.ccak.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(15); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');

}

item.icrm = new Item(); item.icrm.id = 59;
item.icrm.name = 'Ice Cream'; item.icrm.val = 19;
item.icrm.desc = 'A sweet, frozen food made of milk with rich amounts of sugar. Gets very popular during Summer' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.icrm.val + ' </span>energy';
item.icrm.stype = 4;
item.icrm.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(8); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');

}

item.lnch1 = new Item(); item.lnch1.id = 60;
item.lnch1.name = 'Bacon and Eggs'; item.lnch1.val = 40;
item.lnch1.desc = 'Breakfast of choice and a part of your morning ritual, very filling' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.lnch1.val + ' </span>energy';
item.lnch1.stype = 4;
item.lnch1.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(12); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');

}

item.lnch2 = new Item(); item.lnch2.id = 61;
item.lnch2.name = 'Morning Set'; item.lnch2.val = 47;
item.lnch2.desc = 'Eggs and toast. Goes best with Coffee' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.lnch2.val + ' </span>energy';
item.lnch2.stype = 4;
item.lnch2.rar = 2;
item.lnch2.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(15); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');

}

item.lnch3 = new Item(); item.lnch3.id = 62;
item.lnch3.name = 'Lunch Set'; item.lnch3.val = 58;
item.lnch3.desc = 'Hefty combination of meat, eggs and a toast.' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.lnch3.val + ' </span>energy';
item.lnch3.stype = 4;
item.lnch3.rar = 2;
item.lnch3.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(22); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');

}

item.orgs = new Item(); item.orgs.id = 63;
item.orgs.name = 'Onion Rings'; item.orgs.val = 20;
item.orgs.desc = 'Golden slices of onion, buttered and fried in flour. Crunchy!' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.orgs.val + ' </span>energy';
item.orgs.stype = 4;
item.orgs.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(7); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.fsh1 = new Item(); item.fsh1.id = 65;
item.fsh1.name = 'Fish'; item.fsh1.val = 15;
item.fsh1.desc = 'Freshly caught fish. Makes a passable meal raw' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.fsh1.val + ' </span>energy';
item.fsh1.stype = 4;
item.fsh1.use = function () {
	if (random() < .1) { if (effect.fpn.active === false) giveEff(you, effect.fpn, rand(15, 35)); else effect.fpn.duration += rand(5, 25); }
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(8); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.fsh2 = new Item(); item.fsh2.id = 66;
item.fsh2.name = 'Fish Fillet'; item.fsh2.val = 6;
item.fsh2.desc = 'The fillet of fish, ready to be cooked' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.fsh2.val + ' </span>energy';
item.fsh2.stype = 4;
item.fsh2.use = function () {
	if (random() < .05) { if (effect.fpn.active === false) giveEff(you, effect.fpn, rand(15, 35)); else effect.fpn.duration += rand(5, 25); }
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(3); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.ffsh1 = new Item(); item.ffsh1.id = 67;
item.ffsh1.name = 'Cooked Fish'; item.ffsh1.val = 19;
item.ffsh1.desc = 'Evenly fried delicious fish. It has a very deicious aroma' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.ffsh1.val + ' </span>energy';
item.ffsh1.stype = 4;
item.ffsh1.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(4); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.ffsh2 = new Item(); item.ffsh2.id = 68;
item.ffsh2.name = 'Batter Fried Fish'; item.ffsh2.val = 42;
item.ffsh2.desc = 'A delicious golden brown serving of crispy fried fish' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.ffsh2.val + ' </span>energy';
item.ffsh2.stype = 4;
item.ffsh2.rar = 2;
item.ffsh2.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(10); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.ssm = new Item(); item.ssm.id = 69;
item.ssm.name = 'Sashimi'; item.ssm.val = 17;
item.ssm.desc = 'Little fish slices, served with tangly dip sauce' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.ssm.val + ' </span>energy';
item.ssm.stype = 4;
item.ssm.rar = 2;
item.ssm.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(8); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.dssm = new Item(); item.dssm.id = 70;
item.dssm.name = 'Deluxe Sashimi'; item.dssm.val = 43; // fish soy cucum lettuc
item.dssm.desc = 'Delicious slivers of thinly sliced raw fish and tasty vegetables' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.dssm.val + ' </span>energy';
item.dssm.stype = 4;
item.dssm.rar = 2;
item.dssm.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(15); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.mkzs = new Item(); item.mkzs.id = 71;
item.mkzs.name = 'Makizushi'; item.mkzs.val = 35;
item.mkzs.desc = 'Delicious fish slices wrapped in tasty sushi rice and rolled up in a healthy nori' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.mkzs.val + ' </span>energy';
item.mkzs.stype = 4;
item.mkzs.rar = 2;
item.mkzs.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(17); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.nori = new Item(); item.nori.id = 72;
item.nori.name = 'Nori'; item.nori.val = 10;
item.nori.desc = 'Pages of dried seaweed, very healthy and tastes like ocean' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.nori.val + ' </span>energy';
item.nori.stype = 4;
item.nori.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(3); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.fnori = new Item(); item.fnori.id = 73;
item.fnori.name = 'Fried Nori'; item.fnori.val = 20;
item.fnori.desc = 'Sheets of nori friend with salt, giving it an entirely new taste. An incredibly delicios and popular snack' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.fnori.val + ' </span>energy';
item.fnori.stype = 4;
item.fnori.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(7); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.swtch1 = new Item(); item.swtch1.id = 74;
item.swtch1.name = 'Sandwich'; item.swtch1.val = 40;
item.swtch1.desc = 'Two peices of bread and a slice of cheese inbetween. Simple and tasty' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.swtch1.val + ' </span>energy';
item.swtch1.stype = 4;
item.swtch1.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(5); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.jll = new Item(); item.jll.id = 75;
item.jll.name = 'Jelly'; item.jll.val = 6;
item.jll.desc = 'Should you really be eating this stuff?' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.jll.val + ' </span>energy';
item.jll.stype = 4;
item.jll.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(4); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');

}

item.flr = new Item(); item.flr.id = 76;
item.flr.name = 'Flour'; item.flr.val = 1;
item.flr.desc = 'This enriched white flour is useful for baking' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.flr.val + ' </span>energy';
item.flr.stype = 4;
item.flr.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');

}

item.pcns = new Item(); item.pcns.id = 77;
item.pcns.name = 'Pine Nuts'; item.pcns.val = 4;
item.pcns.desc = 'A handful of tasty crunchy nuts from a pinecone' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.pcns.val + ' </span>energy';
item.pcns.stype = 4;
item.pcns.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.dgh = new Item(); item.dgh.id = 78;
item.dgh.name = 'Dough'; item.dgh.val = 4;
item.dgh.desc = 'Flour mixed with water, kneaded into a gooey paste.  This dough can be used to bake bread more efficiently than with just flour' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.dgh.val + ' </span>energy';
item.dgh.stype = 4;
item.dgh.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(3); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.hzlnt = new Item(); item.hzlnt.id = 79;
item.hzlnt.name = 'Hazelnuts'; item.hzlnt.val = 6;
item.hzlnt.desc = 'Popular forest nuts, still in their shells. They smell like the woods they come from' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.hzlnt.val + ' </span>energy';
item.hzlnt.stype = 4;
item.hzlnt.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.hpck = new Item(); item.hpck.id = 80;
item.hpck.name = 'Hippo Cookie'; item.hpck.val = 33;
item.hpck.desc = 'Soft cookies in a shape of a cute hippo, baked with milk and hazelnuts. Very popular with children and adults alike' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.hpck.val + ' </span>energy';
item.hpck.stype = 4;
item.hpck.rar = 2;
item.hpck.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(6); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.dfrt = new Item(); item.dfrt.id = 81;
item.dfrt.name = 'Dried Fruit'; item.dfrt.val = 12;
item.dfrt.desc = 'Fruit roughly chopped and sun-dried, prepared as marching rations for the rangers' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.dfrt.val + ' </span>energy';
item.dfrt.stype = 4;
item.dfrt.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.brdb = new Item(); item.brdb.id = 82;
item.brdb.name = 'Burnt Bread'; item.brdb.val = 4;
item.brdb.desc = 'Completely ruined and unappetizing loaf of charred bread. You can still eat it, but you probably won\'t enjoy it' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.brdb.val + ' </span>energy';
item.brdb.stype = 4;
item.brdb.rar = 0
item.brdb.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(12); global.stat.fooda++; global.stat.foodt++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.spcn = new Item(); item.spcn.id = 83;//Pukusakina
item.spcn.name = 'Soft Windflower'; item.spcn.val = 5;
item.spcn.desc = 'Wild vegetable that goes well with meat. ' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.spcn.val + ' </span>energy';
item.spcn.stype = 4;
item.spcn.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.hney = new Item(); item.hney.id = 84;
item.hney.name = 'Honey'; item.hney.val = 11;
item.hney.desc = 'Sweet sticky syrup that bees make. Can be turned into candy, but also very good by itself' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.hney.val + ' </span>energy';
item.hney.stype = 4;
item.hney.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.brise = new Item(); item.brise.id = 85;
item.brise.name = 'Bad Rice'; item.brise.val = 8;
item.brise.desc = 'Old spoiled rice that\'s gone bad and turned yellow. Desperate food' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.brise.val + ' </span>energy';
item.brise.stype = 4;
item.brise.rar = 0;
item.brise.use = function () {
	if (random() < .75) { if (effect.fpn.active === false) giveEff(you, effect.fpn, rand(15, 35)); else effect.fpn.duration += rand(5, 25); }
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(16); global.stat.fooda++; global.stat.foodt++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.steak = new Item(); item.steak.id = 86;
item.steak.name = 'Steak'; item.steak.val = 50;
item.steak.desc = 'Quality steak seared to perfection with a sprinkle of salt and generous twist of pepper. The delicious aroma is enough to make you drool' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.steak.val + ' </span>energy';
item.steak.stype = 4;
item.steak.rar = 2;
item.steak.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(15); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.spc1 = new Item(); item.spc1.id = 87;
item.spc1.name = 'Black Pepper'; item.spc1.val = 2;
item.spc1.desc = 'Small black berries with pungent aroma. Perfect for spicing food up' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.spc1.val + ' </span>energy';
item.spc1.stype = 4;
item.spc1.rar = 2;
item.spc1.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(7); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.cnmn = new Item(); item.cnmn.id = 88;
item.cnmn.name = 'Cinnamon'; item.cnmn.val = 3;
item.cnmn.desc = 'Bark sticks from the Cinnamon tree. Fragnant and good for your health' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.cnmn.val + ' </span>energy';
item.cnmn.stype = 4;
item.cnmn.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(6); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.bttr = new Item(); item.bttr.id = 89;
item.bttr.name = 'Butter'; item.bttr.val = 8;
item.bttr.desc = 'Small brick of creamy butter, made from churned cow milk ' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.bttr.val + ' </span>energy';
item.bttr.stype = 4;
item.bttr.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(3); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.cnmnb = new Item(); item.cnmnb.id = 90;
item.cnmnb.name = 'Cinnamon Bun'; item.cnmnb.val = 36;
item.cnmnb.desc = 'Fluffy sweet pastry bun with aromatic cinnamon powder sprinkled on top of it. Rare treat everyone can enjoy ' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.cnmnb.val + ' </span>energy';
item.cnmnb.stype = 4;
item.cnmnb.rar = 2;
item.cnmnb.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(9); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.brth = new Item(); item.brth.id = 91;
item.brth.name = 'Broth'; item.brth.val = 16;
item.brth.desc = 'Tasty and healthy meat broth. Used mainly for cooking soups, but can be consumed as is' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.brth.val + ' </span>energy';
item.brth.stype = 4;
item.brth.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(4); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.eggsp = new Item(); item.eggsp.id = 92;
item.eggsp.name = 'Egg Soup'; item.eggsp.val = 46;
item.eggsp.desc = 'Popular soup made from delicious broth and eggs. It\'s a great meal to start your day with' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.eggsp.val + ' </span>energy';
item.eggsp.stype = 4;
item.eggsp.rar = 2;
item.eggsp.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(10); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.scln = new Item(); item.scln.id = 93;
item.scln.name = 'Scallion'; item.scln.val = 4;
item.scln.desc = 'Green scallions, also known as spring onions. Slightly spicy and fragnant, they help to bring out the taste of the soups' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.scln.val + ' </span>energy';
item.scln.stype = 4;
item.scln.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(10); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.crmchd = new Item(); item.crmchd.id = 94;
item.crmchd.name = 'Creamy Chowder'; item.crmchd.val = 62;
item.crmchd.desc = 'Delicious meat howder with milk, cheese and potato flakes. You can practically taste the chef\'s skill' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.crmchd.val + ' </span>energy';
item.crmchd.stype = 4;
item.crmchd.rar = 2;
item.crmchd.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(10); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.chklt = new Item(); item.chklt.id = 95;
item.chklt.name = 'Chocolate'; item.chklt.val = 9;
item.chklt.desc = 'Ground cacao beans solidified into a sweet, tasty treat' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.chklt.val + ' </span>energy';
item.chklt.stype = 4;
item.chklt.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(3); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.fegg = new Item(); item.fegg.id = 96;
item.fegg.name = 'Fried Egg'; item.fegg.val = 9;
item.fegg.desc = 'An egg, simply fried as is. It\'s pretty good' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.fegg.val + ' </span>energy';
item.fegg.stype = 4;
item.fegg.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.crn = new Item(); item.crn.id = 97;
item.crn.name = 'Corn'; item.crn.val = 3;
item.crn.desc = 'Golden kernels, attached to a cob. Practically inedible like this' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.crn.val + ' </span>energy';
item.crn.stype = 4;
item.crn.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(5); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');

}

item.bcrn = new Item(); item.bcrn.id = 98;
item.bcrn.name = 'Butter Corn'; item.bcrn.val = 25;
item.bcrn.desc = 'Golden brown corn fried in generous amount of butter. Very tasty' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.bcrn.val + ' </span>energy';
item.bcrn.stype = 4;
item.bcrn.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(6); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.pcrn = new Item(); item.pcrn.id = 99;
item.pcrn.name = 'Popcorn'; item.pcrn.val = 10;
item.pcrn.desc = 'Corn kernels, roasted under high heat. They make a *pop* sound and explode into little edible clouds' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.pcrn.val + ' </span>energy';
item.pcrn.stype = 4;
item.pcrn.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.cpcrn = new Item(); item.cpcrn.id = 100;
item.cpcrn.name = 'Salted Popcorn'; item.cpcrn.val = 15;
item.cpcrn.desc = 'Regular popcorn, but slightly salted for extra taste' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.cpcrn.val + ' </span>energy';
item.cpcrn.stype = 4;
item.cpcrn.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(4); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.fbrd = new Item(); item.fbrd.id = 101;
item.fbrd.name = 'Flatbread'; item.fbrd.val = 12;
item.fbrd.desc = 'Primitive unleavened bread' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.fbrd.val + ' </span>energy';
item.fbrd.stype = 4;
item.fbrd.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.gcce = new Item(); item.gcce.id = 102;
item.gcce.name = 'Ginger Cookie'; item.gcce.val = 25;
item.gcce.desc = 'Spiced cookies baked from a batter of flour, molasses and ginger powder' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.gcce.val + ' </span>energy';
item.gcce.stype = 4;
item.gcce.rar = 2;
item.gcce.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(5); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.bcrc = new Item(); item.bcrc.id = 103;
item.bcrc.name = 'Bone Cracker'; item.bcrc.val = 12;
item.bcrc.desc = 'Bones of some kind, baked until crisp' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.bcrc.val + ' </span>energy';
item.bcrc.stype = 4;
item.bcrc.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(3); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.snkb = new Item(); item.snkb.id = 104;
item.snkb.name = 'Snack Bar'; item.snkb.val = 30;
item.snkb.desc = 'Fruit, sugar, and grain meal mixed and molded before being backed into a stcik-shaped pastry' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.snkb.val + ' </span>energy';
item.snkb.stype = 4;
item.snkb.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(5); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.dmtp = new Item(); item.dmtp.id = 105;
item.dmtp.name = 'Deluxe Meat Pie'; item.dmtp.val = 60;
item.dmtp.desc = 'Premium pie with abudance of various meats, best eaten hot! Extremely filling' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.dmtp.val + ' </span>energy';
item.dmtp.rar = 2;
item.dmtp.stype = 4;
item.dmtp.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(41); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.lkmc = new Item(); item.lkmc.id = 106;
item.lkmc.name = 'Lokum'; item.lkmc.val = 29;
item.lkmc.desc = 'Grain meal cooked down, mixed with mashed fruits and then cooled to produce a soft candy' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.lkmc.val + ' </span>energy';
item.lkmc.stype = 4;
item.lkmc.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(4); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.vgsn = new Item(); item.vgsn.id = 107;
item.vgsn.name = 'Vegetable Sandwich'; item.vgsn.val = 35;
item.vgsn.desc = 'A sandwich with sliced cucumber filling. Tastes slightly bland' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.vgsn.val + ' </span>energy';
item.vgsn.stype = 4;
item.vgsn.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(9); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.stgp = new Item(); item.stgp.id = 108;
item.stgp.name = 'Stargazing Pie'; item.stgp.val = 55;
item.stgp.desc = 'A pie containing a whole fish romantically gazing up at the stars' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.stgp.val + ' </span>energy';
item.stgp.stype = 4;
item.stgp.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(18); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.tdpps = new Item(); item.tdpps.id = 109;
item.tdpps.name = 'Tallow Drops'; item.tdpps.val = 33;
item.tdpps.desc = 'Nourishing tallow, molded into lozenges. Subtly sweet' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.tdpps.val + ' </span>energy';
item.tdpps.stype = 4;
item.tdpps.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(4); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.chstn = new Item(); item.chstn.id = 110;
item.chstn.name = 'Chestnuts'; item.chstn.val = 5;
item.chstn.desc = 'Delicious acorns which release more flavour the more one chews on them' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.chstn.val + ' </span>energy';
item.chstn.stype = 4;
item.chstn.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(1); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.prfd = new Item(); item.prfd.id = 111;
item.prfd.name = 'Prison Food'; item.prfd.val = 22;
item.prfd.desc = 'This jail level delicacy is nutritious, generously portioned and inexpensive. But it doesn\'t taste good' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.prfd.val + ' </span>energy';
item.prfd.stype = 4;
item.prfd.rar = 0;
item.prfd.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(8); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.brmt = new Item(); item.brmt.id = 112;
item.brmt.name = 'Burnt Meat'; item.brmt.val = 7;
item.brmt.desc = 'Coal-looking overcooked chunk of meat. Mildly nutritious but awful to eat' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.brmt.val + ' </span>energy';
item.brmt.stype = 4;
item.brmt.rar = 0
item.brmt.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(5); global.stat.fooda++; global.stat.foodt++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.mbsps = new Item(); item.mbsps.id = 113;
item.mbsps.name = 'Mebaspa Sandwich'; item.mbsps.val = 52;
item.mbsps.desc = 'Ordinary bread with meatballs and spaghetti put in it, it\'s extremely high on cholesterol. Weird skeleton kid invented this dish' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.mbsps.val + ' </span>energy';
item.mbsps.stype = 4;
item.mbsps.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(66); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.spgt = new Item(); item.spgt.id = 114;
item.spgt.name = 'Spaghetti and Meatballs'; item.spgt.val = 33;
item.spgt.desc = 'Long noodles with meat and meatsauce. Renown food from some far off land' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.spgt.val + ' </span>energy';
item.spgt.stype = 4;
item.spgt.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(5); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.mnj1 = new Item(); item.mnj1.id = 115;
item.mnj1.name = 'Manjū'; item.mnj1.val = 26;
item.mnj1.desc = 'Popular traditional eastern confection, kneaded boiled bun with the variety of sweet fillings within in' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.mnj1.val + ' </span>energy';
item.mnj1.stype = 4;
item.mnj1.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(4); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.mnj2 = new Item(); item.mnj2.id = 116;
item.mnj2.name = 'Alcoholic Manjū'; item.mnj2.val = 38;
item.mnj2.desc = 'Manjū bun with delicious sake added to it' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.mnj2.val + ' </span>energy';
item.mnj2.rar = 2;
item.mnj2.stype = 4;
item.mnj2.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(12); global.stat.fooda++; global.stat.foodal++; giveSkExp(skl.drka, 10)
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.ntea1 = new Item(); item.ntea1.id = 117;
item.ntea1.name = 'Landen Flower Tea'; item.ntea1.val = 26;
item.ntea1.desc = 'Rare herbal tea created by a talented pharmacist. It calms and relaxes those who drink it.' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.ntea1.val + ' </span>energy';
item.ntea1.rar = 2;
item.ntea1.stype = 4;
item.ntea1.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(3); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.jrk1 = new Item(); item.jrk1.id = 118;
item.jrk1.name = 'Beef Jerky'; item.jrk1.val = 18;
item.jrk1.desc = 'Perfectly dried strips of meat. The taste is not bad, this jerky can be kept edible for years' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.jrk1.val + ' </span>energy';
item.jrk1.stype = 4;
item.jrk1.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.jrk2 = new Item(); item.jrk2.id = 119;
item.jrk2.name = 'Spicy Jerky'; item.jrk2.val = 30;
item.jrk2.desc = 'Valuable jerky, enriched and improved. Salted and spiced into a filling and tasty travel food' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.jrk2.val + ' </span>energy';
item.jrk2.stype = 4;
item.jrk2.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(5); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.ongr = new Item(); item.ongr.id = 120;
item.ongr.name = 'Onigiri'; item.ongr.val = 25;
item.ongr.desc = 'A simple portable food consisting of cooked rice rolled into a ball and seasoned with salt' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.ongr.val + ' </span>energy';
item.ongr.stype = 4;
item.ongr.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.rbmb = new Item(); item.rbmb.id = 121;
item.rbmb.name = 'Rice Bomb'; item.rbmb.val = 33;
item.rbmb.desc = 'A grilled onigiri with a miso-ginger glaze that creates explosion of flavour' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.rbmb.val + ' </span>energy';
item.rbmb.stype = 4;
item.rbmb.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(4); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.mchii = new Item(); item.mchii.id = 122;
item.mchii.name = 'Mochi'; item.mchii.val = 22;
item.mchii.desc = 'Dumpling made with kneaded mochi rice flour' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.mchii.val + ' </span>energy';
item.mchii.stype = 4;
item.mchii.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(8); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.mchai = new Item(); item.mchai.id = 123;
item.mchai.name = 'Kuzumochi'; item.mchai.val = 29;
item.mchai.desc = 'Variation of mochi, made by glazing grilled rice flour with kudzu sauce' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.mchai.val + ' </span>energy';
item.mchai.stype = 4;
item.mchai.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(12); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.igum = new Item(); item.igum.id = 124;
item.igum.name = 'Ice Gummy'; item.igum.val = 17;
item.igum.desc = 'A refreshing snack made from larvae suspended in fruit juice gelatin' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.igum.val + ' </span>energy';
item.igum.stype = 4;
item.igum.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(3); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.msoop = new Item(); item.msoop.id = 125;
item.msoop.name = 'Mushroom Soup'; item.msoop.val = 37;
item.msoop.desc = 'Refreshing soup made of chopped mushrooms, potatoes and onions boiled together' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.msoop.val + ' </span>energy';
item.msoop.stype = 4;
item.msoop.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(4); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.rmn1 = new Item(); item.rmn1.id = 126;
item.rmn1.name = 'Chashu Ramen'; item.rmn1.val = 41;
item.rmn1.desc = 'This ramen features fresh soy sauce broth and deliciously textured chashu pork ' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.rmn1.val + ' </span>energy';
item.rmn1.stype = 4;
item.rmn1.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(6); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.rmn2 = new Item(); item.rmn2.id = 127;
item.rmn2.name = 'Miso Ramen'; item.rmn2.val = 44;
item.rmn2.desc = 'Miso and pork mixed with spicy vegetables makes for a succulent soup you\'d want to eat again' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.rmn2.val + ' </span>energy';
item.rmn2.stype = 4;
item.rmn2.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(5); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');

}

item.rmn3 = new Item(); item.rmn3.id = 128;
item.rmn3.name = 'Tonkotsu Ramen'; item.rmn3.val = 48;
item.rmn3.desc = 'This delicious tonkotsu ramen is a rich pork-infused soup made from finest ingredients' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.rmn3.val + ' </span>energy';
item.rmn3.stype = 4;
item.rmn3.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(9); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');

}


item.sqdyak = new Item(); item.sqdyak.id = 129;
item.sqdyak.name = 'Squid Yakisoba'; item.sqdyak.val = 43;
item.sqdyak.desc = 'Tender, delicious yakisoba noodles are combined with tasty squid making a filling and enjoyable meal' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.sqdyak.val + ' </span>energy';
item.sqdyak.stype = 4;
item.sqdyak.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(7); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.mtbeer = new Item(); item.mtbeer.id = 130;
item.mtbeer.name = 'Malt Beer'; item.mtbeer.val = 18;
item.mtbeer.desc = 'This beer has a pleasant aftertaste and depth of flavor that only 100% barley malts can provide' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.mtbeer.val + ' </span>energy';
item.mtbeer.stype = 4;
item.mtbeer.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(18); global.stat.foodb++; global.stat.foodal++; giveSkExp(skl.drka, 8)
	if (effect.drunk.active === false) giveEff(you, effect.drunk, 40); else effect.drunk.duration += 20
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.dbeer = new Item(); item.dbeer.id = 131;
item.dbeer.name = 'Draft Beer'; item.dbeer.val = 15;
item.dbeer.desc = 'A medium-sized mug of draft beet that many like to start with. Its creamy head and crisp taste are perfect after a day of hard work ' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.dbeer.val + ' </span>energy';
item.dbeer.stype = 4;
item.dbeer.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(19); global.stat.foodb++; global.stat.foodal++; giveSkExp(skl.drka, 6)
	if (effect.drunk.active === false) giveEff(you, effect.drunk, 52); else effect.drunk.duration += 31
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.ootee = new Item(); item.ootee.id = 132;
item.ootee.name = 'Oolong Tea'; item.ootee.val = 25;
item.ootee.desc = 'Oolong tea, famous for its thick, rich flavor and light aftertaste, is the quintessential non-alcoholic drink. Enjoy its exquisite fragrance and flavor' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.ootee.val + ' </span>energy';
item.ootee.stype = 4;
item.ootee.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(3); global.stat.foodb++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.krcsal = new Item(); item.krcsal.id = 133;
item.krcsal.name = 'Kotchori Salad'; item.krcsal.val = 49;
item.krcsal.desc = 'Kotchori salad brimming with eastern bunching onions! The peppery dressing drizzled on top and pungent onion flavor match all manners of drings' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.krcsal.val + ' </span>energy';
item.krcsal.stype = 4;
item.krcsal.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(6); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.emdm = new Item(); item.emdm.id = 134;
item.emdm.name = 'Edamame'; item.emdm.val = 21;
item.emdm.desc = 'These soybeans in a pod are pretty much the default snack when drinking' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.emdm.val + ' </span>energy';
item.emdm.stype = 4;
item.emdm.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.skplt = new Item(); item.skplt.id = 135;
item.skplt.name = 'Skewer Platter'; item.skplt.val = 61;
item.skplt.desc = 'A plate of five different skewers. The secret to their popularity is the special spicy miso' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.skplt.val + ' </span>energy';
item.skplt.stype = 4;
item.skplt.rar = 2;
item.skplt.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(10); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.skwre = new Item(); item.skwre.id = 136;
item.skwre.name = 'Eastern Chicken Skewer'; item.skwre.val = 39;
item.skwre.desc = 'Chicken sourced from domestic farms makes for a firm, juicy kebab with unique richness of flavor' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.skwre.val + ' </span>energy';
item.skwre.stype = 4;
item.skwre.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(7); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.smfro = new Item(); item.smfro.id = 137;
item.smfro.name = 'Smelt Fish with Roe'; item.smfro.val = 34;
item.smfro.desc = 'The burst of flavor from the roe with over many who try this perfectly grilled with delicacy' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.smfro.val + ' </span>energy';
item.smfro.stype = 4;
item.smfro.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(6); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.fsqdnr = new Item(); item.fsqdnr.id = 138;
item.fsqdnr.name = 'Fried Squid with Nori'; item.fsqdnr.val = 44;
item.fsqdnr.desc = 'A dish found on the meny of many izakaya. Fans can never get enough of the nori fragrance and firm squid flesh' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.fsqdnr.val + ' </span>energy';
item.fsqdnr.stype = 4;
item.fsqdnr.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(6); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.sltyak = new Item(); item.sltyak.id = 139;
item.sltyak.name = 'Salted Yakisoba'; item.sltyak.val = 39;
item.sltyak.desc = 'This addictive yakisoba dish mixes a rich, salty sauce with piquant eastern onions, and can be eaten as a meal or a snack with drinks' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.sltyak.val + ' </span>energy';
item.sltyak.stype = 4;
item.sltyak.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(8); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.jcmncc = new Item(); item.jcmncc.id = 140;
item.jcmncc.name = 'Juicy Mince Cutlet'; item.jcmncc.val = 45;
item.jcmncc.desc = 'This popular mince cutlet is packed with meaty goodness that fills your mouth each time you take a bite' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.jcmncc.val + ' </span>energy';
item.jcmncc.stype = 4;
item.jcmncc.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(6); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.sbeanf = new Item(); item.sbeanf.id = 141;
item.sbeanf.name = 'Stir-Fried Bean Sprouts'; item.sbeanf.val = 37;
item.sbeanf.desc = 'A simple dish taht cahmpiions the humble bean sprout, accented with a peppery punch. Once you start earing it, it\'s hard to put down' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.sbeanf.val + ' </span>energy';
item.sbeanf.stype = 4;
item.sbeanf.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(4); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.mgpch = new Item(); item.mgpch.id = 142;
item.mgpch.name = 'Mango & Peach Sherbet'; item.mgpch.val = 29;
item.mgpch.desc = 'No matter how much you\'ve already eaten, it\'s always seary to make room for this tropical sherbet dessert' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.mgpch.val + ' </span>energy';
item.mgpch.stype = 4;
item.mgpch.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(3); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.maitake = new Item(); item.maitake.id = 143;
item.maitake.name = 'Maitake'; item.maitake.val = 7;
item.maitake.desc = 'Maitake mushrooms are a delectable addition to hotpots' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.maitake.val + ' </span>energy';
item.maitake.stype = 4;
item.maitake.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(2); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.odens = new Item(); item.odens.id = 144;
item.odens.name = 'Oden Soup'; item.odens.val = 40;
item.odens.desc = 'There is more than enough of this piping hot oden assortment to satisfy your hunger. Perfect for a colkd winter evening' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.odens.val + ' </span>energy';
item.odens.stype = 4;
item.odens.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(5); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.onign1 = new Item(); item.onign1.id = 145;
item.onign1.name = 'Seaweed Onigiri'; item.onign1.val = 30;
item.onign1.desc = 'Seaweed boiled in soy sauce is in the center of this onigiri' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.onign1.val + ' </span>energy';
item.onign1.stype = 4;
item.onign1.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(3); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}



item.onign2 = new Item(); item.onign2.id = 146;
item.onign2.name = 'Tuna Onigiri'; item.onign2.val = 36;
item.onign2.desc = 'This nigiri has tuna dressing with maynnaise in the middle' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.onign2.val + ' </span>energy';
item.onign2.stype = 4;
item.onign2.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(4); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.onign3 = new Item(); item.onign3.id = 147;
item.onign3.name = 'Salmon Onigiri'; item.onign3.val = 38;
item.onign3.desc = 'Old standard salmon onigiri, belowed by old and young for generations' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.onign3.val + ' </span>energy';
item.onign3.stype = 4;
item.onign3.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(5); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.syakis = new Item(); item.syakis.id = 148;
item.syakis.name = 'Special Yakisoba'; item.syakis.val = 50;
item.syakis.desc = 'Yakisoba with cabbage and pork. The smell of the sauce is mouth-watering' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.syakis.val + ' </span>energy';
item.syakis.stype = 4;
item.syakis.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(9); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.kkbin = new Item(); item.kkbin.id = 149;
item.kkbin.name = 'Kakubin'; item.kkbin.val = 25;
item.kkbin.desc = 'The most popular whisky in the East. It has a sweet aroma and is thick on the palate, with a smooth, rich taste' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.kkbin.val + ' </span>energy';
item.kkbin.stype = 4;
item.kkbin.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(21); global.stat.foodb++; global.stat.foodal++; giveSkExp(skl.drka, 11)
	if (effect.drunk.active === false) giveEff(you, effect.drunk, 80); else effect.drunk.duration += 50
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.blsho = new Item(); item.blsho.id = 150;
item.blsho.name = 'Barley Shochu'; item.blsho.val = 39;
item.blsho.desc = 'This barley shochy has a dry state popular with experienced drinkers' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.blsho.val + ' </span>energy';
item.blsho.stype = 4;
item.blsho.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(23); global.stat.foodb++; global.stat.foodal++; giveSkExp(skl.drka, 21)
	if (effect.drunk.active === false) giveEff(you, effect.drunk, 72); else effect.drunk.duration += 36
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.scwhi = new Item(); item.scwhi.id = 151;
item.scwhi.name = 'Scotch Whisky'; item.scwhi.val = 40;
item.scwhi.desc = 'This whisky has a high alcohol content, so be careful not to drink too much' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.scwhi.val + ' </span>energy';
item.scwhi.stype = 4;
item.scwhi.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(30); global.stat.foodb++; global.stat.foodal++; giveSkExp(skl.drka, 24)
	if (effect.drunk.active === false) giveEff(you, effect.drunk, 140); else effect.drunk.duration += 70
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.cham1 = new Item(); item.cham1.id = 152;
item.cham1.name = 'Satoyu Champon'; item.cham1.val = 45;
item.cham1.desc = 'The flavors of Satoyu condensed into one dish. The rich soup is made with fresh vegetables and a wealth of of ohter ingredients' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.cham1.val + ' </span>energy';
item.cham1.stype = 4;
item.cham1.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(8); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.cham2 = new Item(); item.cham2.id = 153;
item.cham2.name = 'Vegetable Champon'; item.cham2.val = 48;
item.cham2.desc = 'This dish features seven different vegetables, and contains double the cabbage, bean sprouts, and onionof the standard champion' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.cham2.val + ' </span>energy';
item.cham2.stype = 4;
item.cham2.rar = 2;
item.cham2.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(11); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.cham3 = new Item(); item.cham3.id = 154;
item.cham3.name = 'Spicy Champon'; item.cham3.val = 42;
item.cham3.desc = 'Eye-popping champon with homemade spicy miso' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.cham3.val + ' </span>energy';
item.cham3.stype = 4;
item.cham3.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(14); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.cham4 = new Item(); item.cham4.id = 155;
item.cham4.name = 'Light Champon'; item.cham4.val = 26;
item.cham4.desc = 'A small serving of champon that is popular with women. Just the thing when you are only a little hungry' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.cham4.val + ' </span>energy';
item.cham4.stype = 4;
item.cham4.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(7); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.sudon1 = new Item(); item.sudon1.id = 156;
item.sudon1.name = 'Satoyu Saraudon'; item.sudon1.val = 47;
item.sudon1.desc = 'Extra thin, crispy deep-fried noodles packed with flavor, and topped with vegetable in a thick, silky sauce that melts in your mouth ' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.sudon1.val + ' </span>energy';
item.sudon1.stype = 4;
item.sudon1.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(9); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.sudon2 = new Item(); item.sudon2.id = 157;
item.sudon2.name = 'Vegetable Saraudon'; item.sudon2.val = 42;
item.sudon2.desc = 'A sister dish to the popular Vegetable Champon. Eat it with a dressing of your choice' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.sudon2.val + ' </span>energy';
item.sudon2.stype = 4;
item.sudon2.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(8); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.sudon3 = new Item(); item.sudon3.id = 158;
item.sudon3.name = 'Thick Saraudon'; item.sudon3.val = 50;
item.sudon3.desc = 'Soft, thisk, flavorsome noodle make for a filling treat. Big plate is enough to satiate you for a whole day!' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.sudon3.val + ' </span>energy';
item.sudon3.stype = 4;
item.sudon3.rar = 2;
item.sudon3.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(10); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.sudon4 = new Item(); item.sudon4.id = 159;
item.sudon4.name = 'Light Saraudon'; item.sudon4.val = 25;
item.sudon4.desc = 'A small plate of udon that hits the spot when you feel like a snack' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.sudon4.val + ' </span>energy';
item.sudon4.stype = 4;
item.sudon4.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(6); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.goza = new Item(); item.goza.id = 160;
item.goza.name = 'Gyoza'; item.goza.val = 37;
item.goza.desc = 'Fried dumplings with a rich meat filling. The skin has rice flour blended in for amazing crispiness' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.goza.val + ' </span>energy';
item.goza.stype = 4;
item.goza.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(5); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.dfrch = new Item(); item.dfrch.id = 161;
item.dfrch.name = 'Deep Fried Chicken'; item.dfrch.val = 48;
item.dfrch.desc = 'Fried chicken made with thigh meat. it\'s crunchy on the outside and juicy in the middle. Finger-smacking good!' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.dfrch.val + ' </span>energy';
item.dfrch.stype = 4;
item.dfrch.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(9); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.ynasl = new Item(); item.ynasl.id = 162;
item.ynasl.name = 'Yuona Salad'; item.ynasl.val = 29;
item.ynasl.desc = 'Thin, deep-fried noodles topped with dressing and fresh vegetables' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.ynasl.val + ' </span>energy';
item.ynasl.stype = 4;
item.ynasl.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(5); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.ramen1 = new Item(); item.ramen1.id = 163;
item.ramen1.name = 'Shoyu Ramen'; item.ramen1.val = 40;
item.ramen1.desc = 'Famous shoyu ramen. Thick soba noodles in the soy sauce based soup, improved with rich selection of vegetables. Delicious!' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.ramen1.val + ' </span>energy';
item.ramen1.stype = 4;
item.ramen1.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(7); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.ramen2 = new Item(); item.ramen2.id = 164;
item.ramen2.name = 'Negi Ramen'; item.ramen2.val = 42;
item.ramen2.desc = 'Classic shoyu ramen topped with piquant eastern onions' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.ramen2.val + ' </span>energy';
item.ramen2.stype = 4;
item.ramen2.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(8); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.ramen3 = new Item(); item.ramen3.id = 165;
item.ramen3.name = 'Chashu Ramen'; item.ramen3.val = 50;
item.ramen3.desc = 'Tasty ramen topped with succulent, thin slices of roast pork' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.ramen3.val + ' </span>energy';
item.ramen3.stype = 4;
item.ramen3.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(10); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.ramen4 = new Item(); item.ramen4.id = 166;
item.ramen4.name = 'Negi Chashu Ramen'; item.ramen4.val = 66;
item.ramen4.desc = 'This exquisit ramen features a hefty helping of spicy eastern onions and slices of roast pork' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.ramen4.val + ' </span>energy';
item.ramen4.stype = 4;
item.ramen4.rare = 2;
item.ramen4.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(12); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.bffbl = new Item(); item.bffbl.id = 167;
item.bffbl.name = 'Beef Bowl'; item.bffbl.val = 48;
item.bffbl.desc = 'A hearty beef bowl made with top quality eastern beef' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.bffbl.val + ' </span>energy';
item.bffbl.stype = 4;
item.bffbl.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(7); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.sposs = new Item(); item.sposs.id = 168;
item.sposs.name = 'Sweet Potato Shochu'; item.sposs.val = 33;
item.sposs.desc = 'A sweet potato shochu that succeeds in bringing out the flavors of its ingredients' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.sposs.val + ' </span>energy';
item.sposs.stype = 4;
item.sposs.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(26); global.stat.foodb++; global.stat.foodal++; giveSkExp(skl.drka, 20)
	if (effect.drunk.active === false) giveEff(you, effect.drunk, 92); else effect.drunk.duration += 41
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.soban1 = new Item(); item.soban1.id = 169;
item.soban1.name = 'Soba in Hot Broth'; item.soban1.val = 40;
item.soban1.desc = 'This house classic features freshly-boiled soba noodles served in a piping hot homemade soup' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.soban1.val + ' </span>energy';
item.soban1.stype = 4;
item.soban1.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(6); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.soban2 = new Item(); item.soban2.id = 170;
item.soban2.name = 'Chilled Soba'; item.soban2.val = 44;
item.soban2.desc = 'Delicious soba noodles rinsed in water after cooking to stop them becoming too soft, served with a special dipping sauce' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.soban2.val + ' </span>energy';
item.soban2.stype = 4;
item.soban2.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(8); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.soban3 = new Item(); item.soban3.id = 171;
item.soban3.name = 'Chilled Tanuki Soba'; item.soban3.val = 46;
item.soban3.desc = 'Freshly cooked soba noodles topped with chilled sauce and bits of fried tenpura batter. This is a firm favourite among population' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.soban3.val + ' </span>energy';
item.soban3.stype = 4;
item.soban3.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(9); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.soban4 = new Item(); item.soban4.id = 172;
item.soban4.name = 'Chilled Kitsune Soba'; item.soban4.val = 48;
item.soban4.desc = 'Freshly cooked soba noodles topped with chilled sauce and house made fried tofu cut into easy-to-eat pieces' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.soban4.val + ' </span>energy';
item.soban4.stype = 4;
item.soban4.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(10); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.soban5 = new Item(); item.soban5.id = 173;
item.soban5.name = 'Egg & Tenpura Soba'; item.soban5.val = 52;
item.soban5.desc = 'Hot soba noodles served with soft-boiled egg and vegetable tenpura. This dish is a perennial favorite' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.soban5.val + ' </span>energy';
item.soban5.stype = 4;
item.soban5.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(11); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.soban6 = new Item(); item.soban6.id = 174;
item.soban6.name = 'Special Fuji Soba'; item.soban6.val = 60;
item.soban6.desc = 'Hot soba noodles topped with a lavish amount of fried tenpura batter and fried tofu, along with soft-bioled egg and "kamaboko" fish cake' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.soban6.val + ' </span>energy';
item.soban6.stype = 4;
item.soban6.rar = 2;
item.soban6.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(15); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.soban7 = new Item(); item.soban7.id = 175;
item.soban7.name = 'Yuzu Chicken & Spinach Soba'; item.soban7.val = 50;
item.soban7.desc = 'A vibrant dish of hot soba noodles topped with spinach and pieces of steamed chicken, accented with the subtle fragrance of yuzu' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.soban7.val + ' </span>energy';
item.soban7.stype = 4;
item.soban7.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(9); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.katubo = new Item(); item.katubo.id = 176;
item.katubo.name = 'Fried Pork Cutlet Bowl'; item.katubo.val = 58;
item.katubo.desc = 'This classic dish features a thick, crunchy pork cutlet topped with sauce and lightly cooked egg. It is made to order for maximum freshness' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.katubo.val + ' </span>energy';
item.katubo.stype = 4;
item.katubo.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(11); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.curry1 = new Item(); item.curry1.id = 177;
item.curry1.name = 'Curry & Rice'; item.curry1.val = 50;
item.curry1.desc = 'Mild curry and rice. This curry is made with the house\'s special roux and sauce, and is petfect for those who don\'t like too much spice' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.curry1.val + ' </span>energy';
item.curry1.stype = 4;
item.curry1.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(14); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.soban8 = new Item(); item.soban8.id = 178;
item.soban8.name = 'Pickled Ginger Soba'; item.soban8.val = 56;
item.soban8.desc = 'Hot soba noodles served with tenpura containing copious amounts of red pickled ginger for a pleasant meal that warms the soul' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.soban8.val + ' </span>energy';
item.soban8.stype = 4;
item.soban8.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(8); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.yktr = new Item(); item.yktr.id = 179;
item.yktr.name = 'Yakitori'; item.yktr.val = 48;
item.yktr.desc = 'This charcoal-grilled chicken on a skewer has a savory smell that is out of this world' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.yktr.val + ' </span>energy';
item.yktr.stype = 4;
item.yktr.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(6); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.tegs = new Item(); item.tegs.id = 180;
item.tegs.name = 'Tuna & Egg Sandwich'; item.tegs.val = 45;
item.tegs.desc = 'This sandwich features an egg-mayo mix with tuna on white bread' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.tegs.val + ' </span>energy';
item.tegs.stype = 4;
item.tegs.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(5); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.tamag = new Item(); item.tamag.id = 181;
item.tamag.name = 'Tamago'; item.tamag.val = 15;
item.tamag.desc = 'Delicate and tasty egg sushi' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.tamag.val + ' </span>energy';
item.tamag.stype = 4;
item.tamag.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(3); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.magr = new Item(); item.magr.id = 182;
item.magr.name = 'Maguro'; item.magr.val = 26;
item.magr.desc = 'Top-grade bluefin tuna sushi' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.magr.val + ' </span>energy';
item.magr.stype = 4;
item.magr.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(5); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.ameb = new Item(); item.ameb.id = 183;
item.ameb.name = 'Ama-Ebi'; item.ameb.val = 24;
item.ameb.desc = 'This tender, sweet shrimp will melt in your mouth. It\'s unbelievably fresh!' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.ameb.val + ' </span>energy';
item.ameb.stype = 4;
item.ameb.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(4); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.engw = new Item(); item.engw.id = 184;
item.engw.name = 'Engawa'; item.engw.val = 32;
item.engw.desc = 'Tastiest engawa sushi made from eastern flounder' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.engw.val + ' </span>energy';
item.engw.stype = 4;
item.engw.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(5); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.skmsk = new Item(); item.skmsk.id = 185;
item.skmsk.name = 'Seki Mackerel'; item.skmsk.val = 30;
item.skmsk.desc = 'Not all mackerel are created equal. This premium mackerel is packed with tasty fish oil' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.skmsk.val + ' </span>energy';
item.skmsk.stype = 4;
item.skmsk.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(8); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.namatk = new Item(); item.namatk.id = 186;
item.namatk.name = 'Namatako'; item.namatk.val = 29;
item.namatk.desc = 'Octopus sushi of the highest grade. The more you chew, the better it tastes. That\'s proof of quality' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.namatk.val + ' </span>energy';
item.namatk.stype = 4;
item.namatk.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(7); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.hirame = new Item(); item.hirame.id = 187;
item.hirame.name = 'Hirame'; item.hirame.val = 37;
item.hirame.desc = 'This halibut is a popular sushi topping. Its sweet white meat doesn\'t have a trace of fishiness' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.hirame.val + ' </span>energy';
item.hirame.stype = 4;
item.hirame.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(9); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.shmaj = new Item(); item.shmaj.id = 188;
item.shmaj.name = 'Shima-Aji'; item.shmaj.val = 33;
item.shmaj.desc = 'The king of horse mackerel! It\'s a summer fish best eaten as sashimi or sushi' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.shmaj.val + ' </span>energy';
item.shmaj.stype = 4;
item.shmaj.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(6); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.kndma = new Item(); item.kndma.id = 189;
item.kndma.name = 'Kinmedai'; item.kndma.val = 38;
item.kndma.desc = ' The shiny color of this splendid alfonsino is a feast for the eyes. It\'s fatty and melts in your mouth' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.kndma.val + ' </span>energy';
item.kndma.stype = 4;
item.kndma.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(7); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.ikura = new Item(); item.ikura.id = 190;
item.ikura.name = 'Ikura'; item.ikura.val = 40;
item.ikura.desc = ' Top quality salmon roe wrapped in nori. The best there is!' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.ikura.val + ' </span>energy';
item.ikura.stype = 4;
item.ikura.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(10); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.akagi = new Item(); item.akagi.id = 191;
item.akagi.name = 'Akagai'; item.akagi.val = 37;
item.akagi.desc = 'Popular sushi toping made from ark clams. Also known as "bloody clams" because they have red blood' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.akagi.val + ' </span>energy';
item.akagi.stype = 4;
item.akagi.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(8); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.otor = new Item(); item.otor.id = 192;
item.otor.name = 'Otoro'; item.otor.val = 45;
item.otor.desc = 'This is the richest cut from the top-grade bluefin tuna. The taste alone will leave you hungry for more' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.otor.val + ' </span>energy';
item.otor.stype = 4;
item.otor.rar = 2;
item.otor.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(12); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.awabi = new Item(); item.awabi.id = 193;
item.awabi.name = 'Awabi'; item.awabi.val = 56;
item.awabi.desc = 'Highest quality abalone with the taste out of this world. Premium snack for those who can afford it' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.awabi.val + ' </span>energy';
item.awabi.stype = 4;
item.awabi.rar = 2;
item.awabi.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(13); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.uni = new Item(); item.uni.id = 194;
item.uni.name = 'Uni'; item.uni.val = 60;
item.uni.desc = 'Exquisit sea urchin meat of the most excellent kind, wrapped in nori. As fresh as can be' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.uni.val + ' </span>energy';
item.uni.stype = 4;
item.uni.rar = 3;
item.uni.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(16); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.klbi1 = new Item(); item.klbi1.id = 195;
item.klbi1.name = 'Kalbi'; item.klbi1.val = 48;
item.klbi1.desc = 'This beef rib meat is popular for its incredibly rich flavor' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.klbi1.val + ' </span>energy';
item.klbi1.stype = 4;
item.klbi1.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(10); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.klbi2 = new Item(); item.klbi2.id = 196;
item.klbi2.name = 'Grade A Kalbi'; item.klbi2.val = 55;
item.klbi2.desc = 'Top-grade meat is selected from only the rarest, choicest cuts of beef rib' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.klbi2.val + ' </span>energy';
item.klbi2.stype = 4;
item.klbi2.rar = 2;
item.klbi2.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(25); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.srln1 = new Item(); item.srln1.id = 197;
item.srln1.name = 'Sirloin'; item.srln1.val = 52;
item.srln1.desc = 'Light and relatively low fat sirloin beef steak with spices' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.srln1.val + ' </span>energy';
item.srln1.stype = 4;
item.srln1.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(12); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.srln2 = new Item(); item.srln2.id = 198;
item.srln2.name = 'Grade A Sirloin'; item.srln2.val = 66;
item.srln2.desc = 'Incredible top-grade beef sirloin prized for its unparalleled taste and quality' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.srln2.val + ' </span>energy';
item.srln2.stype = 4;
item.srln2.rar = 2;
item.srln2.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(28); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.sfdpl = new Item(); item.sfdpl.id = 199;
item.sfdpl.name = 'Seafood Platter'; item.sfdpl.val = 57;
item.sfdpl.desc = 'A plate of the sea\'s delicious bounty, including shrimp, scallops, and squid' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.sfdpl.val + ' </span>energy';
item.sfdpl.stype = 4;
item.sfdpl.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(38); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.kmchc = new Item(); item.kmchc.id = 200;
item.kmchc.name = 'Kimchi Combo'; item.kmchc.val = 63;
item.kmchc.desc = 'A tantalizing combo dish of kimchi made from eastern cabbage, cucumbers, daikon and more' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.kmchc.val + ' </span>energy';
item.kmchc.stype = 4;
item.kmchc.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(20); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.stnkbb = new Item(); item.stnkbb.id = 201;
item.stnkbb.name = 'Stone Cooked Bibimbap'; item.stnkbb.val = 68;
item.stnkbb.desc = 'Very hot bowl of bibimbap with special spicy sweed kochujang sauce. Roasted to a golden brown for an irresistable taste' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.stnkbb.val + ' </span>energy';
item.stnkbb.stype = 4;
item.stnkbb.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(32); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.spcbef = new Item(); item.spcbef.id = 202;
item.spcbef.name = 'Spicy Beef Soup'; item.spcbef.val = 49;
item.spcbef.desc = 'Spicy hot beef soup with rice and noodles. It has a very homemade feeling to it' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.spcbef.val + ' </span>energy';
item.spcbef.stype = 4;
item.spcbef.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(39); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.binigiri = new Item(); item.binigiri.id = 203;
item.binigiri.name = 'Giant Nigiri'; item.binigiri.val = 88;
item.binigiri.desc = 'This nigiri looks way to big to eat. Who made this thing?' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.binigiri.val + ' </span>energy';
item.binigiri.stype = 4;
item.binigiri.rar = 3;
item.binigiri.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(48); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.infpdps = new Item(); item.infpdps.id = 204;
item.infpdps.name = 'Inferno Pepper Dumpling'; item.infpdps.val = 66;
item.infpdps.desc = 'These special dumplings are so hot and addictive that you won\'t be able to talk for a week' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.infpdps.val + ' </span>energy';
item.infpdps.stype = 4;
item.infpdps.rar = 3;
item.infpdps.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(62); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.daikn = new Item(); item.daikn.id = 205;
item.daikn.name = 'Daikon'; item.daikn.val = 6;
item.daikn.desc = 'A still-juicy daikon radish. It\'s not spicy and can be eaten raw' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.daikn.val + ' </span>energy';
item.daikn.stype = 4;
item.daikn.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(3); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.bonig = new Item(); item.bonig.id = 206;
item.bonig.name = 'Rotten Onigiri'; item.bonig.val = 19;
item.bonig.desc = 'This riceball has gone bad. You normally wouldn\'t eat this, but when you run out of food even this looks delicious' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.bonig.val + ' </span>energy';
item.bonig.stype = 4;
item.bonig.rar = 0;
item.bonig.use = function () {
	if (random() < .8) { if (effect.fpn.active === false) giveEff(you, effect.fpn, rand(15, 35)); else effect.fpn.duration += rand(5, 25); }
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(20); global.stat.fooda++; global.stat.foodt++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.wdaikn = new Item(); item.wdaikn.id = 207;
item.wdaikn.name = 'Wihered Daikon'; item.wdaikn.val = 4;
item.wdaikn.desc = 'A daikon radish that has withered in the sun. It\'s still edible, but it\'s kinda sad' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.wdaikn.val + ' </span>energy';
item.wdaikn.stype = 4;
item.wdaikn.rar = 0;
item.wdaikn.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(4); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.oppr = new Item(); item.oppr.id = 208;
item.oppr.name = 'Oni Pepper'; item.oppr.val = 42;
item.oppr.desc = 'An extremely spicy pepper that makes you erupt in sweat and make an expression like an oni. It hurts more coming out than going in' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.oppr.val + ' </span>energy';
item.oppr.stype = 4;
item.oppr.rar = 2;
item.oppr.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(42); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.jdaik = new Item(); item.jdaik.id = 209;
item.jdaik.name = 'Jumbo Daikon'; item.jdaik.val = 50;
item.jdaik.desc = 'A huge, rare daikon radish. Stews made with this daikon are delicious. You can put some miso paste on it to eat raw' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.jdaik.val + ' </span>energy';
item.jdaik.stype = 4;
item.jdaik.rar = 2;
item.jdaik.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(35); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.bmshrm = new Item(); item.bmshrm.id = 210;
item.bmshrm.name = 'Big Mushroom'; item.bmshrm.val = 33;
item.bmshrm.desc = 'A big, juicy mushroom that sucked up lots of nutrients. It doesn\'t taste ordinary. It can be stewed, roasted, fried or eaten raw' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.bmshrm.val + ' </span>energy';
item.bmshrm.stype = 4;
item.bmshrm.rar = 2;
item.bmshrm.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(16); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.hlstw = new Item(); item.hlstw.id = 211;
item.hlstw.name = 'Healing Stew'; item.hlstw.val = 18;
item.hlstw.desc = 'Tasteless soup made by boiling heaps of cure grass in water. Healing only in name, it is known that exposing cure grass to high temperatures destroys any healing properties of the product' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.hlstw.val + ' </span>energy';
item.hlstw.stype = 4;
item.hlstw.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(8); global.stat.fooda++;
	dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
	this.amount--;
}

item.bcrrt = new Item(); item.bcrrt.id = 212;
item.bcrrt.name = 'Boiled Carrot'; item.bcrrt.val = 9;
item.bcrrt.desc = 'Regular carrot, boiled in water. It is sweet but not all that tasty, actually' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.bcrrt.val + ' </span>energy';
item.bcrrt.stype = 4;
item.bcrrt.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(5); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.jsdch = new Item(); item.jsdch.id = 213;
item.jsdch.name = 'Jelly Sandwich'; item.jsdch.val = 27;
item.jsdch.desc = 'Awful sandwich that doesn\'t taste like anything. It is filling, at the very least' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.jsdch.val + ' </span>energy';
item.jsdch.stype = 4;
item.jsdch.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(12); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.agrns = new Item(); item.agrns.id = 214;
item.agrns.name = 'Assorted Grains'; item.agrns.val = 3;
item.agrns.desc = 'Buckwheat, sunflower seeds, oats, rye... Various grains, seeds and nuts in very small quantities as such making them not very useful for pretty much anything' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.agrns.val + ' </span>energy';
item.agrns.stype = 4;
item.agrns.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(5); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}
item.agrns.onGet = function () {
	if (this.amount >= 10) { giveRcp(rcp.wsb); this.onGet = function () { } }
}

item.eggfrc = new Item(); item.eggfrc.id = 215;
item.eggfrc.name = 'Egg Fried Rice'; item.eggfrc.val = 33;
item.eggfrc.desc = 'Stir fried egg cooked together with golden rice. Excellent and refreshing dish' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.eggfrc.val + ' </span>energy';
item.eggfrc.stype = 4;
item.eggfrc.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(9); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.thme = new Item(); item.thme.id = 216;
item.thme.name = 'Thyme'; item.thme.val = 2;
item.thme.desc = 'A stalk of aromatic thyme, often used in medicine as a complimentary herb. Can be made into a relaxing tea or antiseptic' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.thme.val + ' </span>energy';
item.thme.stype = 4;
item.thme.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(3); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.wldhrbs = new Item(); item.wldhrbs.id = 217;
item.wldhrbs.name = 'Wild Herbs'; item.wldhrbs.val = 1;
item.wldhrbs.desc = 'A tasty collection of wild herbs including violet, sassafras, mint, clover, purslane, and fireweed' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.wldhrbs.val + ' </span>energy';
item.wldhrbs.stype = 4;
item.wldhrbs.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(3); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.meffg = new Item(); item.meffg.id = 218;
item.meffg.name = 'Meat Effigy'; item.meffg.val = 28;
item.meffg.desc = 'Strange edible effigy made of who knows what. It tastes like regular jerky' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.meffg.val + ' </span>energy';
item.meffg.stype = 4;
item.meffg.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(10); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.rtnmt = new Item(); item.rtnmt.id = 219;
item.rtnmt.name = 'Rotten Meat'; item.rtnmt.val = 4; item.rtnmt.rar = 0
item.rtnmt.desc = 'Greenish grey organic mass that was once something edible, now isn\'t good for pretty much anything' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.rtnmt.val + ' </span>energy';
item.rtnmt.stype = 4; item.rtnmt.rot = [.4, .8, .3, .6]
item.rtnmt.use = function () {
	if (random() < .45) { if (effect.fpn.active === false) giveEff(you, effect.fpn, rand(15, 35)); else effect.fpn.duration += rand(5, 25); }
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(13); global.stat.fooda++; global.stat.foodt++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.appljc = new Item(); item.appljc.id = 220
item.appljc.name = 'Apple Juice'; item.appljc.val = 18;
item.appljc.desc = 'Freshly-squeezed from real apples!' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.appljc.val + ' </span>energy';
item.appljc.stype = 4;
item.appljc.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(3); global.stat.fooda++; global.stat.foodb++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.frtplp = new Item(); item.frtplp.id = 221
item.frtplp.name = 'Juice Pulp'; item.frtplp.val = 9; item.frtplp.rot = [.05, .15, .05, .15]
item.frtplp.desc = 'Left-over byproduct from juicing the fruit.  Not very tasty, but contains a lot of healthy fiber' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.frtplp.val + ' </span>energy';
item.frtplp.stype = 4;
item.frtplp.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(4); global.stat.fooda++;
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}

item.klngbr = new Item(); item.klngbr.id = 222;
item.klngbr.name = 'Kaoliang'; item.klngbr.val = 52;
item.klngbr.desc = 'Strong traditional liquor with a tangy taste and important role during social gatherings' + dom.dseparator + 'Restores<span style=\'color:lime\'> ' + item.klngbr.val + ' </span>energy';
item.klngbr.stype = 4;
item.klngbr.use = function () {
	you.sat + this.val > you.satmax ? you.sat = you.satmax : you.sat += this.val; skl.glt.use(35); global.stat.foodb++; global.stat.foodal++; giveSkExp(skl.drka, 25)
	if (effect.drunk.active === false) giveEff(you, effect.drunk, 80); else effect.drunk.duration += 40
	this.amount--; dom.d5_3_1.update(); msg('Restored ' + this.val + ' energy', 'lime');
}


item.sbone = new Item(); item.sbone.id = 5000;
item.sbone.name = 'Small Bone';
item.sbone.desc = 'Brittle bone of some animal';
item.sbone.stype = 5;
item.sbone.use = function () { msg('You rattle the bone') }
item.sbone.onGet = function () {
	if (this.amount >= 50) { giveRcp(rcp.bdl1); this.onGet = function () { } }
}

item.death_b = new Item(); item.death_b.id = 5001;
item.death_b.name = 'Death Badge';
item.death_b.desc = 'Awarded by fate for dying. Congratulations';
item.death_b.stype = 5;
item.death_b.use = function () { msg('Looking at this fills you with bad memories'); }

item.sstraw = new Item(); item.sstraw.id = 5002;
item.sstraw.name = 'Strand Of Straw';
item.sstraw.desc = 'This fell out of a dummy when you punched it to death';
item.sstraw.stype = 5;
item.sstraw.use = function () { msg('You put one in your mouth...'); }
item.sstraw.onGet = function () {
	if (this.amount >= 30) giveRcp(rcp.strwks);
	if (this.amount >= 40) giveRcp(rcp.wvbkt);
	if (this.amount >= 50) { giveRcp(rcp.sdl1); this.onGet = function () { } }
}

item.d6 = new Item(); item.d6.id = 5003;
item.d6.name = 'Red Die';
item.d6.desc = 'Die with 6 sides. Brings luck';
item.d6.stype = 5;
item.d6.rar = 2;
item.d6.use = function () {
	let r = rand(1, 6); global.stat.die_p += r; global.stat.die_p_t += r;
	msg('You roll <span style="color:red">' + r + '</span>'); skl.dice.use(1);
	if (random() < .05) {
		this.amount--; msg("The die crumbles in your hands", 'Magenta');
	}
}

item.cp = new Item(); item.cp.id = 5004;
item.cp.name = 'Penny';
item.cp.desc = 'A single penny, outdated form of currency. For some reason it\'s still in circulation';
item.cp.stype = 4;
item.cp.use = function (x) {
	giveWealth(1, false, true);
	this.amount--; dumb(x);
}

item.lcn = new Item(); item.lcn.id = 5005;
item.lcn.name = 'Large Copper Coin';
item.lcn.desc = 'Local currency in a form of a heavy coin. Poor people can eat for a whole day with a few of those';
item.lcn.stype = 4;
item.lcn.use = function (x) {
	giveWealth(20, false, true);
	this.amount--; dumb(x);
}

item.cn = new Item(); item.cn.id = 5006;
item.cn.name = 'Nickel';
item.cn.desc = 'Small nickel, outdated form of currency. It was worth much more in the past';
item.cn.stype = 4;
item.cn.use = function (x) {
	giveWealth(5, false, true);
	this.amount--; dumb(x);
}

item.cd = new Item(); item.cd.id = 5007;
item.cd.name = 'Dime';
item.cd.desc = 'Round copper dime. Still shiny';
item.cd.stype = 4;
item.cd.use = function (x) {
	giveWealth(10, false, true);
	this.amount--; dumb(x);
}

item.cq = new Item(); item.cq.id = 5008;
item.cq.name = 'Quarter';
item.cq.desc = 'Very large coin, made of copper. Not much worth as money, but collected and used by poor blacksmiths for resmelting into tools';
item.cq.stype = 4;
item.cq.use = function (x) {
	giveWealth(25, false, true);
	this.amount--; dumb(x);
}

item.watr = new Item(); item.watr.id = 5009;
item.watr.name = 'Water';
item.watr.desc = 'Regular drinkable water';
item.watr.stype = 5;
item.watr.use = function () {
	msg('You took a sip', 'aqua');
}

item.psb = new Item(); item.psb.id = 5010;
item.psb.name = 'Pleasant Sleep Blanket';
item.psb.desc = 'Soft warm blanket. It makes you sleep better';
item.psb.stype = 5;
item.psb.use = function () {
}

item.wdc = new Item(); item.wdc.id = 5011;
item.wdc.name = 'Wood Splint';
item.wdc.desc = 'A small chipped piece of wood. Not very useful by itself';
item.wdc.stype = 5;
item.wdc.onGet = function () {
	if (this.amount >= 10) giveRcp(rcp.wbdl);
	if (this.amount >= 50) { giveRcp(rcp.wdl1); this.onGet = function () { } }
}
item.wdc.use = function () {
	msg('Ouch');
}

item.bgl = new Item(); item.bgl.id = 5012;
item.bgl.name = 'Bag of lost items';
item.bgl.desc = 'Lost possession of waifarers and travellers';
item.bgl.stype = 4;
item.bgl.use = function () {
	this.amount--;
}

item.salt = new Item(); item.salt.id = 5013;
item.salt.name = 'Salt';
item.salt.desc = 'Rock salt crushed into tiny crystals. Yuck! You surely wouldn\'t want to eat this. It\'s good for preserving perishable foods and cooking, though';
item.salt.stype = 5;
item.salt.use = function () {
	msg('It stings your tongue', 'silver');
}

item.slm = new Item(); item.slm.id = 5014;
item.slm.name = 'Slime';
item.slm.desc = 'Clear blob of slime. Used in elementary alchemy to make adhesives. Also acts as a base for some potions';
item.slm.stype = 5;
item.slm.use = function () {
	msg('Sticky..', 'silver');
}

item.tlvs = new Item(); item.tlvs.id = 5015;
item.tlvs.name = 'Tea leaves';
item.tlvs.desc = 'A pinch of fragnant tea leaves, ready for brewing';
item.tlvs.stype = 5;
item.tlvs.use = function () {
	msg('They feel just dry enough', 'blue');
}

item.key1 = new Item(); item.key1.id = 5016;
item.key1.name = 'Bronze Key';
item.key1.desc = '';
item.key1.stype = 5;
item.key1.use = function () {
}

item.key2 = new Item(); item.key2.id = 5017;
item.key2.name = 'Iron Key';
item.key2.desc = '';
item.key2.stype = 5;
item.key2.use = function () {
}

item.key3 = new Item(); item.key3.id = 5018;
item.key3.name = 'Silver Key';
item.key3.desc = '';
item.key3.stype = 5;
item.key3.use = function () {
}

item.key4 = new Item(); item.key4.id = 5019;
item.key4.name = 'Gold Key';
item.key4.desc = '';
item.key4.stype = 5;
item.key4.use = function () {
}

item.key5 = new Item(); item.key5.id = 5020;
item.key5.name = 'Platinum Key';
item.key5.desc = '';
item.key5.stype = 5;
item.key5.use = function () {
}

item.key6 = new Item(); item.key6.id = 5021;
item.key6.name = 'Steel Key';
item.key6.desc = '';
item.key6.stype = 5;
item.key6.use = function () {
}

item.key7 = new Item(); item.key7.id = 5022;
item.key7.name = 'Crimson Key';
item.key7.desc = '';
item.key7.stype = 5;
item.key7.use = function () {
}

item.key0 = new Item(); item.key0.id = 5023;
item.key0.name = 'Rusty Key';
item.key0.desc = function () { return ('Scummy old key. ' + (global.flags.hbs1 ? 'You can open your basement with it' : 'What could it be for?')) }
item.key0.stype = 5;
item.key0.use = function () {
	msg(global.flags.hbs1 ? 'Thankfully it didn\'t break apart when you used it' : 'It looks familiar...', 'lightgrey');
}

item.ywlt = new Item(); item.ywlt.id = 5024;
item.ywlt.name = 'Woven Wallet';
item.ywlt.desc = 'This is your personal wallet, you received it as a gift' + dom.dseparator + '<span style=\'color:orange\'>You can feel coinage inside</spam>';
item.ywlt.stype = 4;
item.ywlt.rar = 2;
item.ywlt.use = function (x) {
	giveItem(item.cd, 2); giveItem(item.cq, 1); giveItem(item.cn, 1); giveItem(item.cp, rand(2, 10));
	this.amount--; global.flags.m_un = true;
	appear(dom.mn_2); appear(dom.mn_4); appear(dom.mn_3);

}

item.hnhn = new Item(); item.hnhn.id = 5025;
item.hnhn.name = 'Teruterubōzu';
item.hnhn.desc = 'Holy talisman. Leave it out on the rain to gain blessing of good fortune';
item.hnhn.stype = 5;
item.hnhn.rar = 2;
item.hnhn.use = function (x) {
}

item.pcn = new Item(); item.pcn.id = 5026;
item.pcn.name = 'Pinecone';
item.pcn.desc = 'A spiny pod from a pine tree.  Dry seeds rattle around inside when you shake it';
item.pcn.stype = 4;
item.pcn.use = function (x) {
	msg(select(["*Crack..* ", "*Crunch..* ", "*Pop..* "]), 'lightgrey');
	if (random() <= (.3 + skl.dice.lvl * .03)) { msg_add("You have discovered some pine nuts inside!", 'lime'); giveItem(item.pcns, rand(1, 3)); giveSkExp(skl.dice, 2); } else { msg_add("The cone was empty..", 'grey'); giveSkExp(skl.dice, .5); }
	this.amount--;
}

item.pbl = new Item(); item.pbl.id = 5027;
item.pbl.name = 'Pebble';
item.pbl.desc = 'A tiny useless stone, found everywhere. Can be thrown to create distraction' + dom.dseparator + '<span style="color:yellow">+5 Throwing Damage</span>';
item.pbl.stype = 2; item.pbl.c = 'yellow';
item.pbl.use = function () {
	if (this.disabled !== true) {
		this.disabled = true;
		if (global.flags.civil === true || global.flags.btl === false) { msg("You threw " + this.name + " into the distance", "grey"); giveSkExp(skl.thr, 1) } else tattack(5, 1, 1);
		this.amount--; setTimeout(() => { this.disabled = false }, (500 / (skl.thr.lvl || 1)))
	}
}

item.ptng1 = new Item(); item.ptng1.id = 5028;
item.ptng1.name = 'Tattered Painting';
item.ptng1.desc = 'Scratched up and faded painting of a lady. It\'s nearly impossible to recognize any details';
item.ptng1.stype = 5;
item.ptng1.use = function () {
}

item.fwd1 = new Item(); item.fwd1.id = 5029;
item.fwd1.name = 'Firewood';
item.fwd1.desc = 'Type of dry wood, prepared for easy burning. Useful at camps or during winter';
item.fwd1.stype = 5;
item.fwd1.use = function () {
	msg('*Donk* ..It sounds hollow', 'ghostwhite')
}
item.fwd1.onGet = function () {
	if (this.amount >= 60) { giveRcp(rcp.fwdpile); this.onGet = function () { } }
}

item.coal1 = new Item(); item.coal1.id = 5030;
item.coal1.name = 'Coal';
item.coal1.desc = 'Black rocks of fossilized organic mass. This coal burns for a very long time';
item.coal1.stype = 5;
item.coal1.use = function () {
	msg('You can picture it smoldering inside your fireplace', 'grey');
}

item.coal2 = new Item(); item.coal2.id = 5031;
item.coal2.name = 'Charcoal';
item.coal2.desc = 'Coal made from carefuly burning quality wood for lengths of time. This coal cinders for a very long time';
item.coal2.stype = 5;
item.coal2.use = function () {
	msg('Your hands get all dirty', 'black', null, null, 'lightgrey');
}

item.cndl2 = new Item(); item.cndl2.id = 5032;
item.cndl2.name = 'placehold';
item.cndl2.desc = 'hldplace';

item.skl = new Item(); item.skl.id = 5033;
item.skl.name = 'Skull';
item.skl.desc = 'Mostly undamaged human skull, taken from some unlucky corpse. It is used in various ways by all sorts of dark sorcerers, witches and alchemists';
item.skl.stype = 5;
item.skl.use = function () {
	msg('It looks menacing', 'purple', null, null, 'lightgrey');
}

global.text.kntsct = ['Adjustable bend', 'Adjustable grip hitch', 'Albright special', 'Alpine Butterfly', 'Anchor bend', 'Angle\'s loop ', 'Arbor knot', 'Artillery loop', 'Ashley\'s bend', 'Axle hitch', 'Bachmann knot', 'Bag knot', 'Bait loop', 'Barrel knot', 'Basket weave knot', 'Becket hitch ', 'Beer knot', 'Bimini twist', 'Blackwall hitch', 'Blake\'s hitch', 'Blood knot', 'Boa knot', 'Boling knot', 'Boom hitch', 'Bourchier knot', 'Heraldic knot', 'Bumper knot', 'Bunny ears', 'Butterfly loop', 'Carrick bend', 'Cat\'s paw', 'Catshank', 'Celtic button knot', 'Chain sinnet', 'Chair knot', 'Clove hitch', 'Constrictor knot', 'Cow hitch', 'Crown knot', 'Double loop', 'Dogshank', 'Diamond knot', 'Dropper loop', 'Death knot', 'Eye splice', 'Falconer\'s knot', 'Farmer\'s loop', 'Fiador knot', 'Figure-eight knot', 'Fisherman\'s bend', 'Friendship knot', 'Hackamore', 'Garda hitch', 'Grief knot', 'Gordian knot', 'Grantchester knot', 'Ground-line hitch', 'Gripping sailor\'s hitch', 'Halter hitch', 'Handcuff knot', 'Hangman\'s noose', 'Highpoint hitch', 'Highwayman\'s hitch', 'Hitching tie', 'Hunter\'s bend', 'Icicle hitch', 'Jamming knot', 'Killick hitch', 'Klemheist knot', 'Knot of isis', 'Lariat loop', 'Lighterman\'s hitch', 'Lineman\s loop', 'Lissajous knot', 'Lobster buoy hitch', 'Magnus hitch', 'Marlinespike hitch', 'Midshipman\'s hitch', 'Miller\'s knot', 'Monkey\'s fist', 'Mountaineer\'s coil', 'Munter hitch', 'Nail knot', 'Ossel hitch', 'Overhand bend', 'Palomar knot', 'Pile hitch', 'Pipe hitch', 'Pretzel link knot', 'Power cinch', 'Racking bend', 'Reef knot', 'Reever Knot', 'Rolling hitch', 'Round turn', 'Running bowline', 'Sailor\'s hitch', 'Sheepshank', 'Shoelace knot', 'Simple knot', 'Slip knot', 'Snell knot', 'Snuggle hitch', 'Span loop', 'Square knot', 'Strangle knot', 'Surgeon\'s loop', 'Tape knot', 'Thief knot', 'Transom knot', 'Thumb knot', 'Threefoil knot', 'Trident loop', 'Trilene knot', 'Triple crown knot', 'True lover\'s knot', 'Turle knot', 'Versatackle knot', 'Underhand knot', 'Underwriter\'s knot', 'Uni knot', 'Wall and crown knot', 'Water knot', 'Windsor knot', 'Yosemite bowlin', 'Zeppelin bend']

item.rope = new Item(); item.rope.id = 5034;
item.rope.name = 'Rope';
item.rope.desc = 'A length of sturdy rope, for tying things up';
item.rope.stype = 5;
item.rope.use = function () {
	msg('You practiced knot tying for a short while and made <span style="color:orange">"' + select(global.text.kntsct) + '"</span>!', 'springgreen');
}

item.mcps = new Item(); item.mcps.id = 5035;
item.mcps.name = 'Clay Milk Cap';
item.mcps.desc = 'Milk caps made from packed clay. Children like to play with these' + dom.dseparator + '<span style="color:yellow">+9 Throwing Damage</span>';
item.mcps.stype = 2; item.mcps.c = 'yellow';
item.mcps.use = function () {
	if (this.disabled !== true) {
		this.disabled = true;
		if (global.flags.civil === true || global.flags.btl === false) { msg("You threw " + this.name + " into the distance", "grey"); giveSkExp(skl.thr, 1) } else tattack(9, 1, 1);
		this.amount--; setTimeout(() => { this.disabled = false }, (500 / (skl.thr.lvl || 1)))
	}
}

item.stdst = new Item(); item.stdst.id = 5036;
item.stdst.name = 'Stardust';
item.stdst.desc = 'Tiny bits of solar pieces that came from the Sky. They shine in darkness and hold the energy of stars';
item.stdst.stype = 5;
item.stdst.use = function (x) {
	msg('It is glittering', 'gold', null, null, 'darkblue');
}

item.gcre1 = new Item(); item.gcre1.id = 5037;
item.gcre1.name = 'Lesser Golem Core';
item.gcre1.desc = 'Exhausted power core of a golem. It has nearly no use anymore, the entire energy supply of this thing has been used up';
item.gcre1.stype = 5;
item.gcre1.use = function (x) {
	msg('You notice specks of dull light flickering inside');
}

item.wvbkt = new Item(); item.wvbkt.id = 5038;
item.wvbkt.name = 'Straw Basket';
item.wvbkt.desc = furniture.wvbkt.desc
item.wvbkt.stype = 4; item.wvbkt.isf = true; item.wvbkt.parent = furniture.wvbkt;
item.wvbkt.use = function (x) {
	giveFurniture(furniture.wvbkt);
	this.amount--;
}

item.tbwr1 = new Item(); item.tbwr1.id = 5039;
item.tbwr1.name = 'Wooden Tableware';
item.tbwr1.desc = furniture.tbwr1.desc
item.tbwr1.stype = 4; item.tbwr1.isf = true; item.tbwr1.parent = furniture.tbwr1
item.tbwr1.use = function (x) {
	let f = giveFurniture(furniture.tbwr1); if (inSector(sector.home)) activatef(f);
	this.amount--;
}

item.ess1 = new Item(); item.ess1.id = 5040;
item.ess1.name = 'Essence of Air';
item.ess1.desc = 'Spirit shard of concentrated Wind power';
item.ess1.stype = 5;
item.ess1.rar = 2;

item.ess2 = new Item(); item.ess2.id = 5041;
item.ess2.name = 'Essence of Earth';
item.ess2.desc = 'Spirit shard of concentrated Geo power';
item.ess2.stype = 5;
item.ess2.rar = 2;

item.ess3 = new Item(); item.ess3.id = 5042;
item.ess3.name = 'Essence of Flames';
item.ess3.desc = 'Spirit shard of concentrated Fire power';
item.ess3.stype = 5;
item.ess3.rar = 2;

item.ess4 = new Item(); item.ess4.id = 5043;
item.ess4.name = 'Essence of Water';
item.ess4.desc = 'Spirit shard of concentrated Aqua power';
item.ess4.stype = 5;
item.ess4.rar = 2;

item.ess5 = new Item(); item.ess5.id = 5044;
item.ess5.name = 'Essence of Light';
item.ess5.desc = 'Spirit shard of concentrated Holy power';
item.ess5.stype = 5;
item.ess5.rar = 2;

item.ess6 = new Item(); item.ess6.id = 5045;
item.ess6.name = 'Essence of Night';
item.ess6.desc = 'Spirit shard of concentrated Demonic power';
item.ess6.stype = 5;
item.ess6.rar = 2;

item.toolbx = new Item(); item.toolbx.id = 5046;
item.toolbx.name = 'Toolbox';
item.toolbx.desc = 'Metal box with a variety of fine tools inside, multipurpose knives, mallets, pincers, chisels and a few more. Used for precision work and tinkering with simple and complex objects' + dom.dseparator + '<span style="color:chartreuse">Allows deconstruction of items and equipment when kept in inventory</span>';
item.toolbx.stype = 5;
item.toolbx.use = function () {
	if (random() < .1) msg('You almost dropped the box..', 'orange'); else msg('Dozens of tools tumble inside as you shake it', 'yellow');
}

item.cpdst = new Item(); item.cpdst.id = 5047;
item.cpdst.name = 'Corpse Dust';
item.cpdst.desc = 'Dust derived from the remains of the deciesed, often used for witchcraft and enchantments';
item.cpdst.stype = 5;
item.cpdst.use = function () {
	msg('Disgusting', 'lightgrey');
}

item.cclth = new Item(); item.cclth.id = 5048;
item.cclth.name = 'Cheap Cloth';
item.cclth.desc = 'A poor quality swatch of cloth. Unstitches when you so much as breathe on it';
item.cclth.stype = 5;
item.cclth.use = function () {
	msg('Can you even work with something this worthless?', 'lightgrey');
}

item.thrdnl = new Item(); item.thrdnl.id = 5049;
item.thrdnl.name = 'Thread';
item.thrdnl.desc = 'A small quantity of thread that could be used in sewing and tailoring projects';
item.thrdnl.stype = 5;
item.thrdnl.use = function () {
	msg('It doesn\'t seem very sturdy', 'lightgrey');
}
item.thrdnl.onGet = function () {
	if (this.amount >= 100) { giveRcp(rcp.cyrn); this.onGet = function () { } }
}

item.sktbad = new Item(); item.sktbad.id = 5050;
item.sktbad.name = 'Mistake';
item.sktbad.desc = 'A failed product of an unskilled artisan. Once destined to become something worty of display, this mangled mess is repulsive to look at';
item.sktbad.stype = 5;
item.sktbad.use = function () {
	msg('Better put this away', 'lightgrey');
}

item.bblkt = new Item(); item.bblkt.id = 5051;
item.bblkt.name = 'Ragwork Blanket';
item.bblkt.desc = furniture.bblkt.desc
item.bblkt.stype = 4; item.bblkt.isf = true; item.bblkt.parent = furniture.bblkt
item.bblkt.use = function (x) {
	let f = giveFurniture(furniture.bblkt); if (inSector(sector.home)) activatef(f);
	this.amount--;
}

item.spillw = new Item(); item.spillw.id = 5052;
item.spillw.name = 'Straw Pillow';
item.spillw.desc = furniture.spillw.desc
item.spillw.stype = 4; item.spillw.isf = true; item.spillw.parent = furniture.spillw
item.spillw.use = function (x) {
	let f = giveFurniture(furniture.spillw); if (inSector(sector.home)) activatef(f);
	this.amount--;
}

item.cyrn = new Item(); item.cyrn.id = 5053;
item.cyrn.name = 'Yarn Ball';
item.cyrn.desc = furniture.cyrn.desc
item.cyrn.stype = 4; item.cyrn.isf = true; item.cyrn.parent = furniture.cyrn
item.cyrn.use = function (x) {
	let f = giveFurniture(furniture.cyrn); if (inSector(sector.home)) activatef(f);
	this.amount--;
}

item.dfish = new Item(); item.dfish.id = 5054;
item.dfish.name = 'Dead Fish';
item.dfish.desc = 'Carcass of some fish, looking bad, grey and dead. Can be dismantled into fishbait';
item.dfish.stype = 5;
item.dfish.use = function () {
	msg('Gross!', 'lightgrey');
}

item.fbait1 = new Item(); item.fbait1.id = 5055;
item.fbait1.name = 'Bait';
item.fbait1.desc = 'Organic remains rolled into a ball, favoured by fish and other aquatic population';
item.fbait1.stype = 5;
item.fbait1.use = function () {
}

item.htrdvr = new Item(); item.htrdvr.id = 5056;
item.htrdvr.name = 'Hunter\'s Crate';
item.htrdvr.desc = 'Heavy wooden crate you were asked to deliver to dojo. It is sealed shut and you can\'t look inside. It smells faintly of meat, spices and mushrooms. Probably filled with preserved dry produce';
item.htrdvr.stype = 5;
item.htrdvr.use = function () {
	msg('You resist the temptation to open it', 'lightgrey')
}

item.htrsvr = new Item(); item.htrsvr.id = 5057;
item.htrsvr.name = 'Hunter\'s Bag';
item.htrsvr.desc = 'Heavy canvas bag you were asked to deliver to the herbalist. It is filled with separated bundles of various herbs you can\'t identify. You\'d rather not touch anything inside as it looks dangerously poisonous';
item.htrsvr.stype = 5;
item.htrsvr.use = function () {
	msg('Strong aroma eminating from this bag makes your head spin', 'orange')
}

item.hbtsvr = new Item(); item.hbtsvr.id = 5058;
item.hbtsvr.name = 'Herbalist\'s Satchel'
item.hbtsvr.desc = 'Heavy leather satchel you were asked to deliver to the head hunter. Hundreds of vials clang Violently no matter how carefully you attempt to carry it';
item.hbtsvr.stype = 5;
item.hbtsvr.use = function () {
	msg('You\'ll be in trouble of you break anything inside', 'lightgrey')
}

item.fwdpile = new Item(); item.fwdpile.id = 5059;
item.fwdpile.name = 'Firewood Pile';
item.fwdpile.desc = 'Stockpile of firewood neatly packed together for easy storage'
item.fwdpile.stype = 4; item.fwdpile.isf = true; item.fwdpile.parent = furniture.fwdpile
item.fwdpile.use = function (x) {
	let f = giveFurniture(furniture.fwdpile); if (inSector(sector.home)) activatef(f);
	this.amount--;
}

item.lprmt = new Item(); item.lprmt.id = 5060;
item.lprmt.name = 'Travel Permit';
item.lprmt.desc = 'Written document used in your village. Acts as a proof of one\'s strength, meaning the owner has the ability to protect himself when leaving the village, you will need this when going out. Nearly every adult you know has this';
item.lprmt.stype = 5; item.lprmt.rar = 2;
item.lprmt.use = function () {
	msg('You feel pride holding this', 'green')
}

item.bed2 = new Item(); item.bed2.id = 5061;
item.bed2.name = 'Plain Bed';
item.bed2.desc = furniture.bed2.desc
item.bed2.stype = 4; item.bed2.isf = true; item.bed2.parent = furniture.bed2
item.bed2.use = function (x) {
	let f = giveFurniture(furniture.bed2); if (inSector(sector.home)) activatef(f);
	this.amount--;
}

item.wfng = new Item(); item.wfng.id = 5062;
item.wfng.name = 'Wolf Fang';
item.wfng.desc = 'Clear and sharp fang of a predator. It still looks dangerous';
item.wfng.stype = 5;
item.wfng.use = function () {
	msg('You may prick your finger if you mishandle it', 'lightgrey')
}
item.wfng.onGet = function () {
	if (this.amount >= 10) giveRcp(rcp.wfng)
}

item.bookgen = new Item(); item.bookgen.id = 5063;
item.bookgen.name = 'Book';
item.bookgen.desc = furniture.bookgen.desc
item.bookgen.stype = 4; item.bookgen.isf = true; item.bookgen.parent = furniture.bookgen
item.bookgen.use = function (x) {
	let f = giveFurniture(furniture.bookgen); if (inSector(sector.home) && !f.active) activatef(f);
	this.amount--;
}

item.dmice1 = new Item(); item.dmice1.id = 5064;
item.dmice1.name = 'Dead Mouse';
item.dmice1.desc = 'Vermin hunted by your cat, now proudly displayed before you';
item.dmice1.stype = 5;
item.dmice1.rar = 0;
item.dmice1.use = function () {
	msg('Yeah..', 'grey')
}

item.dbdc1 = new Item(); item.dbdc1.id = 5065;
item.dbdc1.name = 'Dead Bird';
item.dbdc1.desc = 'A proof of loyalty brought to you by your cat';
item.dbdc1.stype = 5;
item.dbdc1.rar = 0;
item.dbdc1.use = function () {
	msg('Indeed..', 'grey')
}


item.ip1 = new Item(); item.ip1.id = 9000;
item.ip1.name = '"Idea paper"';
item.ip1.desc = 'Tiny scrap of paper with information. You wrote it yourself to remember things.';
item.ip1.stype = 4; item.ip1.data.time = HOUR;
item.ip1.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			giveRcp(rcp.strawp); giveRcp(rcp.hlpd); giveRcp(rcp.borc); giveRcp(rcp.begg);
			this.amount--; this.data.read = false; this.data.finished = true;
		} else chss.trd.sl(this, .2);
	}
}

item.skl1 = new Item(); item.skl1.id = 9001;
item.skl1.name = 'P Skillbook (Swords)';
item.skl1.desc = 'Entry level practitioner skillbook about sword combat' + dom.dseparator + '<span style="color:deeppink">Sword Mastery EXP gain +5%</span>';
item.skl1.stype = 4; item.skl1.data.time = HOUR * 4;
item.skl1.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			this.amount--; giveSkExp(skl.srdc, 150); skl.srdc.p += .05; this.data.read = false; this.data.finished = true; giveItem(item.bookgen)
		} else chss.trd.sl(this, .5);
	}
}

item.skl2 = new Item(); item.skl2.id = 9002;
item.skl2.name = 'P Skillbook (Knives)';
item.skl2.desc = 'Entry level practitioner skillbook about knife combat' + dom.dseparator + '<span style="color:deeppink">Knife Mastery EXP gain +5%</span>';
item.skl2.stype = 4; item.skl2.data.time = HOUR * 4;
item.skl2.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			this.amount--; giveSkExp(skl.knfc, 150); skl.knfc.p += .05; this.data.read = false; this.data.finished = true; giveItem(item.bookgen)
		} else chss.trd.sl(this, .5);
	}
}

item.skl3 = new Item(); item.skl3.id = 9003;
item.skl3.name = 'P Skillbook (Axes)';
item.skl3.desc = 'Entry level practitioner skillbook about axe combat' + dom.dseparator + '<span style="color:deeppink">Axe Mastery EXP gain +5%</span>';
item.skl3.stype = 4; item.skl3.data.time = HOUR * 4;
item.skl3.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			this.amount--; giveSkExp(skl.axc, 150); skl.axc.p += .05; this.data.read = false; this.data.finished = true; giveItem(item.bookgen)
		} else chss.trd.sl(this, .5);
	}
}

item.skl4 = new Item(); item.skl4.id = 9004;
item.skl4.name = 'P Skillbook (Spears)';
item.skl4.desc = 'Entry level practitioner skillbook about spear combat' + dom.dseparator + '<span style="color:deeppink">Polearm Mastery EXP gain +5%</span>';
item.skl4.stype = 4; item.skl4.data.time = HOUR * 4;
item.skl4.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			this.amount--; giveSkExp(skl.plrmc, 150); skl.plrmc.p += .05; this.data.read = false; this.data.finished = true; giveItem(item.bookgen)
		} else chss.trd.sl(this, .5);
	}
}

item.skl5 = new Item(); item.skl5.id = 9005;
item.skl5.name = 'P Skillbook (Hammers)';
item.skl5.desc = 'Entry level practitioner skillbook about hammer combat' + dom.dseparator + '<span style="color:deeppink">Hammer Mastery EXP gain +5%</span>';
item.skl5.stype = 4; item.skl5.data.time = HOUR * 4;
item.skl5.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			this.amount--; giveSkExp(skl.hmrc, 150); skl.hmrc.p += .05; this.data.read = false; this.data.finished = true; giveItem(item.bookgen)
		} else chss.trd.sl(this, .5);
	}
}

item.skl6 = new Item(); item.skl6.id = 9006;
item.skl6.name = 'P Skillbook (Martial)';
item.skl6.desc = 'Entry level practitioner skillbook about unarmed combat' + dom.dseparator + '<span style="color:deeppink">Martial Mastery EXP gain +5%</span>';
item.skl6.stype = 4; item.skl6.data.time = HOUR * 4;
item.skl6.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			this.amount--; giveSkExp(skl.unc, 150); skl.unc.p += .05; this.data.read = false; this.data.finished = true; giveItem(item.bookgen)

		} else chss.trd.sl(this, .5);
	}
}

item.bstr = new Item(); item.bstr.id = 9007;
item.bstr.name = '"Animalis Vicipaedia"';
item.bstr.rar = 2;
item.bstr.desc = 'Heavy Hunter\'s Encyclopedia. There are a few entries about wild life, beasts, and mythical creatures you can encounter, the other pages are blank. You feel the urge to fill them in' + dom.dseparator + '<span style="color:lime">Unlocks Bestiary</span>';
item.bstr.stype = 4; item.bstr.data.time = HOUR * 17;
item.bstr.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			msg('Bestiary Unlocked!', 'cyan');
			this.data.read = false; this.amount--; global.flags.bstu = true; this.data.finished = true; if (dom.jlbrw1s2) dom.jlbrw1s2.innerHTML = 'B E S T I A R Y'
		} else chss.trd.sl(this);
	}
}

item.tbrwdb = new Item(); item.tbrwdb.id = 9008;
item.tbrwdb.name = '"The Art of Teabrewing"';
item.tbrwdb.rar = 2;
item.tbrwdb.desc = 'Informative little book in detail describing the ways of teamaking, starting from precise amounts and proportions, specific water temperatures, correct tableware, to the defferent styles and etiquette';
item.tbrwdb.stype = 4; item.tbrwdb.data.time = HOUR * 26;
item.tbrwdb.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			giveRcp(rcp.tbrwd);
			this.data.finished = true; this.data.read = false; this.amount--; giveItem(item.bookgen)
		} else chss.trd.sl(this);
	}
}

global.text.mscbkatxt = ["This fairy tale is about a wolf who eats so much salted meat she becomes trapped in the butcher's cellar.",
	"In this traditional story of beastly intrigue a clever fox convinces an elderly lion to kill a derogatory wolf.",
	"This is an illustrated fairy tale book about a conversation between a mouse and a cat.",
	"An amusing collection of stories featuring a Thunder God on the cover.",
	"This is a well illustrated fairy tale about a war between the birds and the beasts, with particulars on the wartime conduct and eventual fate of the bat.",
	"This book, titled \"The Rattlesnake's Vengeance\" is a collection of local myths and legends.",
	"This fairy tale book is a regional variant of a tale of friendship between the Demon and the Angel",
	"This fairy tale book is entitled \"Little Red Cap\".  It details a red-cloaked child's various encounters with talking wolves.", "A collection of ghost stories warning about the dangers of stealing from the dead.",
	"A book of culinary fairy tales.  The cover features an orange fairy juggling a lemon, a lime, and a tangerine slimes.",
	"A book of fables about people who change into birds.",
	"This compendium of amusing folk tales about the devil is titled \"Hell's Kettle: Legends of the Devil.\"",
	"This charming book of fables is titled, \"The Crystal Mountain and the Princess.\"",
	"This is a collection of fairy tale stories warning against the consequences of extreme greed.",
	"In this fairy tale a strong man frightens an ogre by squeezing water out of a stone.",
	"This book of rustic folk tales bears the title: \"How to Shout Down the Devil.\"",
	"The title of this book is \"Village Folk-tales of Darion.\"  It includes fables about logical errors and foolish misjudgements of the village men.",
	"This book of folk tales is titled, \"The Girl with the Ugly Name, and Other Stories.\"",
	"Titled \"The Fleeing Pancake\", this collection of silly folk tales is suitable for small children."];

item.msc1 = new Item(); item.msc1.id = 9009;
item.msc1.name = '"Book of Fairy Tales"';
item.msc1.data.bid = _rand(global.text.mscbkatxt.length - 1); item.msc1.data.exp = _rand(500, 10000); item.msc1.save = true;
item.msc1.desc = function () { return 'An amusing collection of folklore featuring the usual cast of fairies and demons' + dom.dseparator + '<span style="color:limegreen">' + global.text.mscbkatxt[this.data.bid] + '</span>' }
item.msc1.stype = 4; item.msc1.data.time = HOUR * 6;
item.msc1.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			giveExp(this.data.exp || 500, true, true, true); this.data.bid = rand(global.text.mscbkatxt.length - 1); this.data.exp = rand(500, 5000); this.desc = 'An amusing collection of folklore featuring the usual cast of fairies and demons' + dom.dseparator + '<span style="color:limegreen">' + global.text.mscbkatxt[item.msc1.data.bid] + '</span>'; this.data.time = this.data.timep = rand(2, 10) * HOUR;
			this.data.bid = rand(global.text.mscbkatxt.length - 1); this.data.finished = true; this.data.read = false; this.amount--; giveItem(item.bookgen)
		} else chss.trd.sl(this);
	}
}

item.bcpn = new Item(); item.bcpn.id = 9010;
item.bcpn.name = '"Cooking with Poison"';
item.bcpn.rar = 2;
item.bcpn.desc = 'A leatherbound book with an embossed cauldron on the cover. Inside it describes ways to purify food through alchemy';
item.bcpn.stype = 4; item.bcpn.data.time = HOUR * 30;
item.bcpn.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			this.data.finished = true; this.data.read = false; this.amount--; giveItem(item.bookgen)
		} else chss.trd.sl(this);
	}
}

item.mdc1 = new Item(); item.mdc1.id = 9011;
item.mdc1.name = '"First Aid Manual"';
item.mdc1.desc = 'Tiny red pocket-sized guide to emergency care, covers basic bandaging and wound treating';
item.mdc1.stype = 4; item.mdc1.data.time = HOUR * 12;
item.mdc1.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			let dt = 0; dt += giveRcp(rcp.bdgh); dt += giveRcp(rcp.mdcag); dt += giveRcp(rcp.hptn1); this.data.finished = true; giveItem(item.bookgen)
			if (dt === 0) msg('You haven\'t learned anything new...', 'lightgrey')
			this.data.read = false; this.amount--;
		} else chss.trd.sl(this);
	}
}

item.dmkbk = new Item(); item.dmkbk.id = 9012;
item.dmkbk.name = '"Dollmaker\'s Handbook"';
item.dmkbk.desc = 'A very short manual filled with illustrations about primitive dollmaking. The instructions are easy to understand so children could make the dolls too. Looks like there was a chapter dedicated to sewing, now it\'s almost entirely missing';
item.dmkbk.stype = 4; item.dmkbk.data.time = HOUR * 12;
item.dmkbk.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			giveItem(item.bookgen)
			let dt = 0; dt += giveRcp(rcp.sdl1); dt += giveRcp(rcp.wdl1); dt += giveRcp(rcp.gdl1); dt += giveRcp(rcp.bdl1); dt += giveRcp(rcp.cyrn); this.data.finished = true;
			if (dt === 0) msg('You haven\'t learned anything new...', 'lightgrey')
			this.data.read = false; this.amount--;
		} else chss.trd.sl(this);
	}
}

item.scrlw = new Item(); item.scrlw.id = 9013;
item.scrlw.name = '"Ragged Parchment"';
item.scrlw.desc = 'Scummy sheet of paper tainted with something teal. Some kinds of materials are listed here';
item.scrlw.stype = 4; item.scrlw.data.time = HOUR * 3;
item.scrlw.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			let dt = 0; dt += giveRcp(rcp.hptn1); this.data.finished = true;
			if (dt === 0) msg('You already know how to make lesser potions', 'lightgrey')
			this.data.read = false; this.amount--;
		} else chss.trd.sl(this);
	}
}

item.wp2s = new Item(); item.wp2s.id = 9014;
item.wp2s.name = '"Rotten Illustration"';
item.wp2s.desc = 'Found this within old bushery, it looks like a drawing of something in charcoal';
item.wp2s.onGet = function () { global.flags.wp2sgt = true }
item.wp2s.stype = 4; item.wp2s.data.time = HOUR * 2;
item.wp2s.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			let dt = 0; dt += giveRcp(rcp.wp2); this.data.finished = true;
			if (dt === 0) msg('You already know how to sharpen sticks', 'lightgrey')
			this.data.read = false; this.amount--;
		} else chss.trd.sl(this);
	}
}

item.shppmf = new Item(); item.shppmf.id = 9015;
item.shppmf.name = '"Pamphlet"';
item.shppmf.desc = 'This was shoved onto you by someone on the streets. Store names, discount prices, hot items... An entire wall of advertisements in tiny letters, to fit as much of it as possible on this piece of paper. It is a good idea to memorize the addresses';
item.shppmf.onGet = function () { global.flags.pmfspmkm1 = true }
item.shppmf.stype = 4; item.shppmf.data.time = HOUR * 3;
item.shppmf.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			global.flags.mkplc1u = true; this.data.finished = true; msg('Right, you could go to the marketplace', 'lime'); if (global.current_l.id === chss.lsmain1.id) smove(chss.lsmain1, false);
			this.data.read = false; this.amount--;
		} else chss.trd.sl(this);
	}
}

item.amrthsck = new Item(); item.amrthsck.id = 9016;
item.amrthsck.name = '"Guide To Living By Yourself"';
item.amrthsck.desc = 'Looks like a page from someone\'s notebook, marked "H", poorly written in bad handwriting. It lists several simple things you can cook and make from widely available cheap materials';
item.amrthsck.stype = 4; item.amrthsck.data.time = HOUR * 12;
item.amrthsck.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			giveItem(item.bookgen)
			let dt = 0; dt += giveRcp(rcp.bcrrt); dt += giveRcp(rcp.bcrc); dt += giveRcp(rcp.hlstw); dt += giveRcp(rcp.rsmt); dt += giveRcp(rcp.segg); dt += giveRcp(rcp.jsdch); dt += giveRcp(rcp.appljc);
			dt += giveRcp(rcp.bblkt); dt += giveRcp(rcp.spillw);
			this.data.finished = true;
			if (dt === 0) msg('You haven\'t learned anything new...', 'lightgrey')
			this.data.read = false; this.amount--;
		} else chss.trd.sl(this);
	}
}

item.skl1a = new Item(); item.skl1a.id = 9017;
item.skl1a.name = '"Bladesman Manual"'; item.skl1a.rar = 2;
item.skl1a.desc = 'Technique book full of fundamental knowledge about swordfighting' + dom.dseparator + '<span style="color:deeppink">Sword Mastery EXP gain +15%</span>';
item.skl1a.stype = 4; item.skl1a.data.time = HOUR * 14;
item.skl1a.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			this.amount--; giveSkExp(skl.srdc, 3250); skl.srdc.p += .15; this.data.read = false; this.data.finished = true; giveItem(item.bookgen)

		} else chss.trd.sl(this);
	}
}

item.skl2a = new Item(); item.skl2a.id = 9018;
item.skl2a.name = '"Assassin Manual"'; item.skl2a.rar = 2;
item.skl2a.desc = 'Technique book full of fundamental knowledge about kinfefighting' + dom.dseparator + '<span style="color:deeppink">Knife Mastery EXP gain +15%</span>';
item.skl2a.stype = 4; item.skl2a.data.time = HOUR * 14;
item.skl2a.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			this.amount--; giveSkExp(skl.knfc, 3250); skl.knfc.p += .15; this.data.read = false; this.data.finished = true; giveItem(item.bookgen)

		} else chss.trd.sl(this);
	}
}

item.skl3a = new Item(); item.skl3a.id = 9019;
item.skl3a.name = '"Axeman Manual"'; item.skl3a.rar = 2;
item.skl3a.desc = 'Technique book full of fundamental knowledge about axefighting' + dom.dseparator + '<span style="color:deeppink">Axe Mastery EXP gain +15%</span>';
item.skl3a.stype = 4; item.skl3a.data.time = HOUR * 14;
item.skl3a.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			this.amount--; giveSkExp(skl.axc, 150); skl.axc.p += .05; this.data.read = false; this.data.finished = true; giveItem(item.bookgen)

		} else chss.trd.sl(this);
	}
}

item.skl4a = new Item(); item.skl4a.id = 9020;
item.skl4a.name = '"Lancer Manual"'; item.skl4a.rar = 2;
item.skl4a.desc = 'Technique book full of fundamental knowledge about spearfighting' + dom.dseparator + '<span style="color:deeppink">Polearm Mastery EXP gain +15%</span>';
item.skl4a.stype = 4; item.skl4a.data.time = HOUR * 14;
item.skl4a.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			this.amount--; giveSkExp(skl.plrmc, 3250); skl.plrmc.p += .15; this.data.read = false; this.data.finished = true; giveItem(item.bookgen)

		} else chss.trd.sl(this);
	}
}

item.skl5a = new Item(); item.skl5a.id = 9021;
item.skl5a.name = '"Clubber Manual"'; item.skl5a.rar = 2;
item.skl5a.desc = 'Technique book full of fundamental knowledge about bluntfighting' + dom.dseparator + '<span style="color:deeppink">Hammer Mastery EXP gain +15%</span>';
item.skl5a.stype = 4; item.skl5a.data.time = HOUR * 14;
item.skl5a.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			this.amount--; giveSkExp(skl.hmrc, 3250); skl.hmrc.p += .15; this.data.read = false; this.data.finished = true; giveItem(item.bookgen)

		} else chss.trd.sl(this);
	}
}

item.skl6a = new Item(); item.skl6a.id = 9022;
item.skl6a.name = '"Brawler Manual"'; item.skl6a.rar = 2;
item.skl6a.desc = 'Technique book full of fundamental knowledge about fistfighting' + dom.dseparator + '<span style="color:deeppink">Martial Mastery EXP gain +15%</span>';
item.skl6a.stype = 4; item.skl6a.data.time = HOUR * 14;
item.skl6a.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			this.amount--; giveSkExp(skl.unc, 3250); skl.unc.p += .15; this.data.read = false; this.data.finished = true; giveItem(item.bookgen)

		} else chss.trd.sl(this);
	}
}

item.brdbn = new Item(); item.brdbn.id = 9023;
item.brdbn.name = '"Your First Bread"';
item.brdbn.desc = 'Very primitive instruction booklet about making simple breads. The way it\'s written, it looks very similar to manuals given to slaves and servants at the beginning of their service, if they are able to read';
item.brdbn.stype = 4; item.brdbn.data.time = HOUR * 7;
item.brdbn.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			let dt = 0; dt += giveRcp(rcp.flr); dt += giveRcp(rcp.dgh); dt += giveRcp(rcp.brd); this.data.finished = true; giveItem(item.bookgen)
			if (dt === 0) msg('You haven\'t learned anything new...', 'lightgrey')
			this.data.read = false; this.amount--;
		} else chss.trd.sl(this);
	}
}

item.bfsnwt = new Item(); item.bfsnwt.id = 9024;
item.bfsnwt.name = '"Beggar Fashion"';
item.bfsnwt.desc = 'Some nonsence illustration with a name, featuring a group of peasants in rags posing awkwardly. What even is this?';
item.bfsnwt.stype = 4; item.bfsnwt.data.time = HOUR * 4;
item.bfsnwt.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			let dt = 0; dt += giveRcp(rcp.ptchpts); dt += giveRcp(rcp.ptchct);
			if (dt === 0) msg('You haven\'t learned anything new...', 'lightgrey')
			this.data.read = false; this.amount--;
		} else chss.trd.sl(this);
	}
}

item.pdeedhs = new Item(); item.pdeedhs.id = 9025;
item.pdeedhs.name = '"Property Deed"'; item.pdeedhs.rar = 2
item.pdeedhs.desc = 'This old looking legal document indentifies you as a sole owner of this broken down hut you live in. It was passed down to you by your ancestors, you speculate' + dom.dseparator + '<span style="color:lime">Allows you to list and examine your possessions</span>';
item.pdeedhs.stype = 4; item.pdeedhs.data.time = 30;
item.pdeedhs.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			global.flags.hsedchk = true; if (global.current_l.id === 111) smove(chss.home, false)
			this.data.read = false; this.amount--;
		} else chss.trd.sl(this);
	}
}

item.fgtsb1 = new Item(); item.fgtsb1.id = 9026;
item.fgtsb1.name = '"Street Fighting"';
item.fgtsb1.desc = 'Someone\'s observational notes of street gangs and their violent encounters. There\'s an amusing essay about dirty tricks in the front section' + dom.dseparator + '<span style="color:deeppink">Fighting EXP gain +15%</span>';
item.fgtsb1.stype = 4; item.fgtsb1.data.time = HOUR * 6;
item.fgtsb1.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			this.amount--; skl.fgt.p += .15; this.data.read = false; this.data.finished = true; giveItem(item.bookgen)

		} else chss.trd.sl(this);
	}
}

item.jnlbk = new Item(); item.jnlbk.id = 9027;
item.jnlbk.name = '"Empty Journal"';
item.jnlbk.desc = 'Dusty old tome, pure as snow and untainted by ink. Feels like it was purified by magic. When you gaze upon it, you are compelled to record your encounters and anything else that you find important and crucial for your adventures' + dom.dseparator + '<span style="color:lime">Unlocks Journal</span>';
item.jnlbk.stype = 4; item.jnlbk.data.time = HOUR * 4;
item.jnlbk.use = function () {
	if (canRead()) {
		if (this.data.timep >= this.cmax) {
			msg('Journal Unlocked!', 'cyan');
			this.data.read = false; this.amount--; global.flags.jnlu = true; this.data.finished = true; dom.ct_bt6.innerHTML = 'journal'
		} else chss.trd.sl(this);
	}
}



///////////////////////////////////////////
//EQP
///////////////////////////////////////////


function Eqp() {
	this.name = 'nothing';
	this.desc = '';
	this.str = 0;
	this.agl = 0;
	this.int = 0;
	this.spd = 0;
	this.dp = 15;
	this.dpmax = 15;
	this.eff = [];
	this.data = { dscv: false };
	this.cls = [0, 0, 0]; // edge, pierce, blunt
	//this.ccls=[0,0,0];
	this.aff = [0, 0, 0, 0, 0, 0, 0]; //p, a, e, f, w, l, d
	//this.caff = [0,0,0,0,0,0,0];
	//this.maff=[0,0,0,0,0,0,0];
	//this.cmaff=[0,0,0,0,0,0,0];
	this.atype = 0; this.ctype = 0;
	this.wtype = 0; // un, srd, axe, knf, spr, hmr, stff
	this.atkmode = 1;
	this.rar = 1;
	this.type = 2;
	this.amount = 1;
	this.stype = 2;
	this.slot = 0;
	this.id = 10000;
	this.important = false;
	this.new = false;
	this.cond = function () { return true };
	this.onGet = function () { };
	this.oneq = function () { };
	this.onuneq = function () { };
	this.use = function () { equip(this) };
} eqp.dummy = new Eqp();

wpn.stk1 = new Eqp(); wpn.stk1.id = 10001;
wpn.stk1.name = 'A Stick';
wpn.stk1.desc = 'Your favorite weapon!' + dom.dseparator;
wpn.stk1.slot = 1;
wpn.stk1.str = 2; wpn.stk1.cls = [0, 0, 1];
wpn.stk1.ctype = 2; wpn.stk1.wtype = 5;
wpn.stk1.dp = wpn.stk1.dpmax = 13;

wpn.stk2 = new Eqp(); wpn.stk2.id = 10002;
wpn.stk2.name = 'Sharpened Stick';
wpn.stk2.desc = 'Long stick with a sharpened end. Watch out, you may hurt someone with it' + dom.dseparator;
wpn.stk2.slot = 1;
wpn.stk2.str = 5; wpn.stk2.cls = [0, 3, 0];
wpn.stk2.ctype = 1; wpn.stk2.wtype = 4;
wpn.stk2.dp = wpn.stk2.dpmax = 16;
wpn.stk2.onGet = function () {
	let n = 0
	for (let a in inv) if (inv[a].id === this.id) n++
	if (n >= 4) giveRcp(rcp.stksld)
}

wpn.knf1 = new Eqp(); wpn.knf1.id = 10003;
wpn.knf1.name = 'Wooden Knife';
wpn.knf1.desc = 'Lost kid\'s toy. The relic of many playground battles' + dom.dseparator;
wpn.knf1.slot = 1;
wpn.knf1.str = 4; wpn.knf1.cls = [0, 0, 2];
wpn.knf1.ctype = 2; wpn.knf1.wtype = 3;
wpn.knf1.dp = wpn.knf1.dpmax = 31;

wpn.knf2 = new Eqp(); wpn.knf2.id = 10004;
wpn.knf2.name = 'Rusty Dagger';
wpn.knf2.desc = 'Used up useless knife. More of a blunt weapon in it\'s current state' + dom.dseparator;
wpn.knf2.slot = 1;
wpn.knf2.str = 7;
wpn.knf2.agl = -1; wpn.knf2.cls = [3, 2, 1];
wpn.knf2.dp = wpn.knf2.dpmax = 11;
wpn.knf2.wtype = 3;

wpn.ktn1 = new Eqp(); wpn.ktn1.id = 10005;
wpn.ktn1.name = 'Rusty Katana';
wpn.ktn1.desc = 'Old worthless blade, forgotten for ages. It falls apart as you attempt to swing it' + dom.dseparator;
wpn.ktn1.slot = 1;
wpn.ktn1.str = 15;
wpn.ktn1.agl = -2; wpn.ktn1.cls = [4, 1, 2];
wpn.ktn1.dp = wpn.ktn1.dpmax = 21;
wpn.ktn1.wtype = 1;

wpn.ktn2 = new Eqp(); wpn.ktn2.id = 10006;
wpn.ktn2.name = 'Red Katana';
wpn.ktn2.desc = 'Polished rusty katana. Still nearly useless in a fight' + dom.dseparator;
wpn.ktn2.slot = 1;
wpn.ktn2.str = 42;
wpn.ktn2.agl = -4; wpn.ktn2.cls = [5, 3, 2];
wpn.ktn2.dp = wpn.ktn2.dpmax = 17;
wpn.ktn2.wtype = 1;

wpn.trch = new Eqp(); wpn.trch.id = 10007;
wpn.trch.name = 'Torch';
wpn.trch.desc = 'Used to light up dark places or for burning up thing' + dom.dseparator + '<span style="color:yellow;background-color:crimson">Fire DMG +10</span><br>';
wpn.trch.slot = 1;
wpn.trch.str = 2; wpn.trch.atype = 3;
wpn.trch.aff = [0, 0, 0, 10, 0, 5, 0]; wpn.trch.cls = [0, 0, 3];
wpn.trch.ctype = 2;
wpn.trch.dp = wpn.trch.dpmax = 10; wpn.trch.degrade = .03
wpn.trch.wtype = 5;
wpn.trch.oneq = function () { you.mods.light += 1 };
wpn.trch.onuneq = function () { you.mods.light -= 1 };
wpn.trch.onDegrade = function () { msg('Your torch burned down', 'darkgrey') }

wpn.twg = new Eqp(); wpn.twg.id = 10009;
wpn.twg.name = 'Dry Twig';
wpn.twg.desc = 'With this you can pretend you\'re a wizard' + dom.dseparator + '<span style="color:lightgoldenrodyellow;text-shadow:gold 0px 0px 5px">Light DMG +3</span><br>';
wpn.twg.slot = 1;
wpn.twg.int = 3; wpn.twg.cls = [0, 0, 2];
wpn.twg.aff = [0, 1, 0, 0, 0, 3, 5]; wpn.twg.atype = 5; wpn.twg.atkmode = 2;
wpn.twg.dp = wpn.twg.dpmax = 12;
wpn.twg.wtype = 6;

wpn.dgknf = new Eqp(); wpn.dgknf.id = 10010;
wpn.dgknf.name = 'Dagger';
wpn.dgknf.desc = 'Simple knife used by wayfarers. Not a combat weapon, has a minor domestic use' + dom.dseparator;
wpn.dgknf.slot = 1;
wpn.dgknf.str = 11; wpn.dgknf.cls = [4, 2, 0];
wpn.dgknf.dp = wpn.dgknf.dpmax = 22;
wpn.dgknf.wtype = 3;

wpn.bknf = new Eqp(); wpn.bknf.id = 10011;
wpn.bknf.name = 'Battle Knife';
wpn.bknf.desc = 'A good dagger for the novice' + dom.dseparator;
wpn.bknf.slot = 1;
wpn.bknf.wtype = 3;

wpn.skknf = new Eqp(); wpn.skknf.id = 10012;
wpn.skknf.name = 'Scramasax';
wpn.skknf.desc = 'A good knife for both combat and daily use' + dom.dseparator;
wpn.skknf.slot = 1;
wpn.skknf.wtype = 3; wpn.skknf.ctype = 1;

wpn.drknf = new Eqp(); wpn.drknf.id = 10013;
wpn.drknf.name = 'Dirk';
wpn.drknf.desc = 'A steady knife you can depend on' + dom.dseparator;
wpn.drknf.slot = 1;
wpn.drknf.wtype = 3;

wpn.thknf = new Eqp(); wpn.thknf.id = 10014;
wpn.thknf.name = 'Throwing Knife';
wpn.thknf.desc = 'A finely honed throwing knife' + dom.dseparator;
wpn.thknf.slot = 1;
wpn.thknf.wtype = 3; wpn.thknf.ctype = 1;

wpn.kdknf = new Eqp(); wpn.kdknf.id = 10015;
wpn.kdknf.name = 'Kudi';
wpn.kdknf.desc = 'A dangerous dagger with a curved blade' + dom.dseparator;
wpn.kdknf.slot = 1;
wpn.kdknf.wtype = 3;

wpn.krsnf = new Eqp(); wpn.krsnf.id = 10016;
wpn.krsnf.name = 'Kris';
wpn.krsnf.desc = 'An exotic dagger with a wavy blade' + dom.dseparator;
wpn.krsnf.slot = 1;
wpn.krsnf.wtype = 3; wpn.krsnf.ctype = 1;

wpn.cqsnf = new Eqp(); wpn.cqsnf.id = 10017;
wpn.cqsnf.name = 'Cinquedea';
wpn.cqsnf.desc = 'The knife of theives' + dom.dseparator;
wpn.cqsnf.slot = 1;
wpn.cqsnf.wtype = 3; wpn.cqsnf.ctype = 1;

wpn.kkknf = new Eqp(); wpn.kkknf.id = 10018;
wpn.kkknf.name = 'Khukuri';
wpn.kkknf.desc = 'A knife with a heavy, curved blade' + dom.dseparator;
wpn.kkknf.slot = 1;
wpn.kkknf.wtype = 3;

wpn.bdknf = new Eqp(); wpn.bdknf.id = 10019;
wpn.bdknf.name = 'Baselard';
wpn.bdknf.desc = 'A battle knife with a flat, thin blade, perfect for deploying fast attacks' + dom.dseparator;
wpn.bdknf.slot = 1;
wpn.bdknf.wtype = 3;

wpn.stknf = new Eqp(); wpn.stknf.id = 10020;
wpn.stknf.name = 'Stiletto';
wpn.stknf.desc = 'A stabbing dagger with a thin, sharp blade' + dom.dseparator;
wpn.stknf.slot = 1;
wpn.stknf.wtype = 3; wpn.stknf.ctype = 1;

wpn.jmknf = new Eqp(); wpn.jmknf.id = 10021;
wpn.jmknf.name = 'Jamadhar';
wpn.jmknf.desc = 'An exotic dagger with three blades in one hilt' + dom.dseparator;
wpn.jmknf.slot = 1;
wpn.jmknf.wtype = 3; wpn.jmknf.ctype = 1;

wpn.skknf = new Eqp(); wpn.skknf.id = 10022;
wpn.skknf.name = 'Soul Kiss';
wpn.skknf.desc = 'Cursed knife capable of rapturing the soul' + dom.dseparator;
wpn.skknf.slot = 1;
wpn.skknf.wtype = 3;

wpn.rbknf = new Eqp(); wpn.rbknf.id = 10023;
wpn.rbknf.name = 'Ribsplitter';
wpn.rbknf.desc = 'Unusualy long knife with a curved tip' + dom.dseparator;
wpn.rbknf.slot = 1;
wpn.rbknf.wtype = 3;

wpn.gaknf = new Eqp(); wpn.gaknf.id = 10024;
wpn.gaknf.name = 'Glacialdra';
wpn.gaknf.desc = '';
wpn.gaknf.slot = 1;
wpn.gaknf.rar = 3;
wpn.gaknf.wtype = 3;

wpn.ekmw = new Eqp(); wpn.ekmw.id = 10025;
wpn.ekmw.name = 'Ekimnekuwa';
wpn.ekmw.desc = 'Also known as "Hiking Stick". Sturdy, used for support while travelling on foot in forests, mountains, through the snow, water, or any other difficult to navigate landscape' + dom.dseparator;
wpn.ekmw.slot = 1;
wpn.ekmw.ctype = 2; wpn.ekmw.wtype = 5;

wpn.mnkm = new Eqp(); wpn.mnkm.id = 10026;
wpn.mnkm.name = 'Menokamakiri';
wpn.mnkm.desc = 'Short knife, designed for women. Light and durable, functions like a hunting knife' + dom.dseparator;
wpn.mnkm.slot = 1;
wpn.mnkm.wtype = 3;

wpn.mkr = new Eqp(); wpn.mkr.id = 10027;
wpn.mkr.name = 'Makiri';
wpn.mkr.desc = 'Short sword' + dom.dseparator;
wpn.mkr.slot = 1;
wpn.mkr.wtype = 1;

wpn.wsrd1 = new Eqp(); wpn.wsrd1.id = 10028;
wpn.wsrd1.name = 'Wooden Sword';
wpn.wsrd1.desc = 'Simple long sword carved from light wood. Easy to handle and is suitable as amateurish training weapon' + dom.dseparator;
wpn.wsrd1.slot = 1;
wpn.wsrd1.str = 7; wpn.wsrd1.cls = [1, 0, 3];
wpn.wsrd1.dp = wpn.wsrd1.dpmax = 33;
wpn.wsrd1.wtype = 1; wpn.wsrd1.ctype = 2;

wpn.wsrd2 = new Eqp(); wpn.wsrd2.id = 10029;
wpn.wsrd2.name = 'Bamboo Training Sword';
wpn.wsrd2.desc = 'A training sword for kenjutsu lessons. Designed in the late Edo period, it is strung together from four bamboo planks. The ruthless chief of a female bandit group named Danfu is known to wield it' + dom.dseparator;
wpn.wsrd2.slot = 1;
wpn.wsrd2.str = 10; wpn.wsrd2.cls = [2, 0, 3];
wpn.wsrd2.dp = wpn.wsrd2.dpmax = 41;
wpn.wsrd2.wtype = 1; wpn.wsrd2.ctype = 2;

wpn.nssrd = new Eqp(); wpn.nssrd.id = 10030;
wpn.nssrd.name = 'Short Sword';
wpn.nssrd.desc = 'Short crude sword designed for self-defence. It\'s not that useful in battle, especially in unskilled hands' + dom.dseparator;
wpn.nssrd.slot = 1;
wpn.nssrd.str = 55; wpn.nssrd.cls = [4, 2, 1];
wpn.nssrd.dp = wpn.nssrd.dpmax = 35;
wpn.nssrd.wtype = 1;

wpn.heyit = new Eqp(); wpn.heyit.id = 10031;
wpn.heyit.name = 'Heiyoto';
wpn.heyit.desc = 'Nothing flashy or noticeable about his sword. It reflects the samurai spirit' + dom.dseparator;

wpn.fksrd = new Eqp(); wpn.fksrd.id = 10032;
wpn.fksrd.name = 'Fake Sword';
wpn.fksrd.desc = 'The sword is made of bamboo. Poorer ronin sometimes pretend to be full-fledged samurai with this' + dom.dseparator;
wpn.fksrd.slot = 1;
wpn.fksrd.str = 23; wpn.fksrd.cls = [2, 0, 4];
wpn.fksrd.dp = wpn.fksrd.dpmax = 33;
wpn.fksrd.wtype = 1; wpn.fksrd.ctype = 2;

wpn.tkmts = new Eqp(); wpn.tkmts.id = 10033;
wpn.tkmts.name = 'Takemitsu';
wpn.tkmts.desc = 'This reinforced sword is made of bamboo. Not much as a weapon, but makes you seem stronger' + dom.dseparator;
wpn.tkmts.slot = 1;
wpn.tkmts.str = 35; wpn.tkmts.cls = [2, 1, 5];
wpn.tkmts.dp = wpn.tkmts.dpmax = 40;
wpn.tkmts.wtype = 1; wpn.tkmts.ctype = 2;

wpn.bsrd = new Eqp(); wpn.bsrd.id = 10034;
wpn.bsrd.name = 'Blunt Sword';
wpn.bsrd.desc = 'This is the blunt sword used as a bad example of a knife in demonstration sales for housewives. Good luck trying to cut onions with this' + dom.dseparator;
wpn.bsrd.slot = 1;
wpn.bsrd.str = 20; wpn.bsrd.cls = [2, 3, 3];
wpn.bsrd.dp = wpn.bsrd.dpmax = 38;
wpn.bsrd.wtype = 1; wpn.bsrd.ctype = 2;

wpn.bdsrd = new Eqp(); wpn.bdsrd.id = 10035;
wpn.bdsrd.name = 'Dull Sword';
wpn.bdsrd.desc = 'A sword designed for mass production by reducing labor and material cost down to a minimum. It may look like a sword, but it\'s not really fit to cut anything. The manual suggests it be used to cut radishes' + dom.dseparator;
wpn.bdsrd.slot = 1;
wpn.bdsrd.str = 27; wpn.bdsrd.cls = [2, 3, 3];
wpn.bdsrd.dp = wpn.bdsrd.dpmax = 34;
wpn.bdsrd.wtype = 1; wpn.bdsrd.ctype = 2;

wpn.bcsrd = new Eqp(); wpn.bcsrd.id = 10036;
wpn.bcsrd.name = 'Crappy Sword';
wpn.bcsrd.desc = 'This sword is sold at the 100 Cout store under the name "Big Loss". You get what you pay for. There are even competitions to see who can sharpen this sword the best' + dom.dseparator;
wpn.bcsrd.slot = 1;
wpn.bcsrd.str = 40; wpn.bcsrd.cls = [4, 3, 3];
wpn.bcsrd.dp = wpn.bcsrd.dpmax = 34;
wpn.bcsrd.wtype = 1;

wpn.ktsk = new Eqp(); wpn.ktsk.id = 10037;  //2
wpn.ktsk.name = 'Kotesaki';
wpn.ktsk.desc = 'A light sword a ight-heartet guy begged the swordsmith to make. He thought his sword would make him more popular with the ladies. He managed to rack up some wins by cheating, but the ladies still don\'t like him' + dom.dseparator;

wpn.crsto = new Eqp(); wpn.crsto.id = 10038;  //3
wpn.crsto.name = 'Cristo';
wpn.crsto.desc = 'A samurai wrongly imprisoned for a crime he didn\'t commit carved this weapon from his cell walls. He did this in a secret from the guards, but by the time he finished, his sentence was over' + dom.dseparator;

wpn.ksbmr = new Eqp(); wpn.ksbmr.id = 10039;  //4
wpn.ksbmr.name = 'Komusubimaru';
wpn.ksbmr.desc = 'A swordsman who loves sumo made this sword to cheer on his favorite sumo wrestler. But the name "Komusubi" is a low rank in sumo. It was bad luck, and the wrestler never got promoted' + dom.dseparator;

wpn.hsmts = new Eqp(); wpn.hsmts.id = 10040;  //5
wpn.hsmts.name = 'Hasemitsu';
wpn.hsmts.desc = 'A swordsmith created this blade as he danced around bragging about his skill. You may think he was just screwing around, but this sword is actually quiet nice' + dom.dseparator;

wpn.kiknif = new Eqp(); wpn.kiknif.id = 10041;
wpn.kiknif.name = 'Kitchen Knife';
wpn.kiknif.desc = 'A knife originally used to cut fish, not people. It\'s not a sword, but ordering one won\'t get you yelled at' + dom.dseparator + '<span style="color:deeppink">Cooking EXP gain +15%</span><br>'
wpn.kiknif.slot = 1;
wpn.kiknif.str = 24; wpn.kiknif.cls = [3, 2, 0];
wpn.kiknif.dp = wpn.kiknif.dpmax = 15;
wpn.kiknif.wtype = 3;
wpn.kiknif.oneq = function () { skl.cook.p += .15 }
wpn.kiknif.onuneq = function () { skl.cook.p -= .15 }

wpn.gamas = new Eqp(); wpn.gamas.id = 10042;  //6
wpn.gamas.name = 'Gama';
wpn.gamas.desc = 'A man\'s wife who had a face that resembles a frog died, so he hired a medium to do a seance to summon his wife\'s spirit. But the medium summoned the spirit of some toad. The husband used this sword to kill the medium' + dom.dseparator;

wpn.wsdmbld = new Eqp(); wpn.wsdmbld.id = 10043  //7
wpn.wsdmbld.name = 'Wisdom Blade';
wpn.wsdmbld.desc = 'This is the sword used by a serial killer that struck fear in Edo. The killer stole his family sword to do his killing, so you can imagine that things got weird at the house when they found the sword missing' + dom.dseparator;

wpn.kurum = new Eqp(); wpn.kurum.id = 10044  //8
wpn.kurum.name = 'Kuruma';
wpn.kurum.desc = 'This is the sword used by a great tengu when he taught Ushiwakamaru how to fight at Mt. Kuruma. Ushiwakamaru is trained to fight and also became great at the pommel horse' + dom.dseparator;

wpn.hrsm = new Eqp(); wpn.hrsm.id = 10045  //9 ice
wpn.hrsm.name = 'Harusame';
wpn.hrsm.desc = 'A sword made in the quiet rain in spring. It is easy to wield and can be chewy. When dried, it won\'t be as sharp, but putting water turns it back to normal' + dom.dseparator;

wpn.kosgi = new Eqp(); wpn.kosgi.id = 10046 //10
wpn.kosgi.name = 'Kosugi';
wpn.kosgi.desc = 'A sword used by the famous ninja who left the country and took and extremely dangerous mission. This sword encompasses his very being' + dom.dseparator;

wpn.shiran = new Eqp(); wpn.shiran.id = 10047 //11
wpn.shiran.name = 'Shiran';
wpn.shiran.desc = 'Its name comes from its purple orchid-like accessory. The true etymology of the sword is a mystery to even its swordsmith' + dom.dseparator;

wpn.shnztt = new Eqp(); wpn.shnztt.id = 10048 //12
wpn.shnztt.name = 'Shinzanto';
wpn.shnztt.desc = 'Those who wield this sword also command the shaky nervousness of the rookie blacksmith who crafted it' + dom.dseparator;

wpn.lsrd = new Eqp(); wpn.lsrd.id = 10049;
wpn.lsrd.name = 'Light Sword';
wpn.lsrd.desc = 'A basic, easy to wield civilian-level light sword' + dom.dseparator;
wpn.lsrd.slot = 1;
wpn.lsrd.wtype = 1;

wpn.log = new Eqp(); wpn.log.id = 10050;
wpn.log.name = 'Log';
wpn.log.desc = 'A massive heavy tree log. How did you even think about swinging it as a weapon?' + dom.dseparator;
wpn.log.slot = 1; wpn.log.twoh = true;
wpn.log.str = 48; wpn.log.cls = [-5, -5, 6];
wpn.log.agl = -15;
wpn.log.ctype = 2; wpn.log.wtype = 5;
wpn.log.dp = wpn.log.dpmax = 68;

wpn.sprw = new Eqp(); wpn.sprw.id = 10051;
wpn.sprw.name = 'Spear';
wpn.sprw.desc = 'Long piece of wood with a sharp metal chunk at the end of it. Couldn\'t get simpler than that' + dom.dseparator;
wpn.sprw.slot = 1;
wpn.sprw.str = 11; wpn.sprw.cls = [2, 4, 1];
wpn.sprw.ctype = 1; wpn.sprw.wtype = 4;
wpn.sprw.dp = wpn.sprw.dpmax = 26;

wpn.gsprw = new Eqp(); wpn.gsprw.id = 10052;
wpn.gsprw.name = 'Guard Spear';
wpn.gsprw.desc = 'Basic and easy to wield spear used in self-defence' + dom.dseparator;
wpn.gsprw.slot = 1;
wpn.gsprw.str = 27; wpn.gsprw.cls = [2, 5, 2];
wpn.gsprw.ctype = 1; wpn.gsprw.wtype = 4;
wpn.gsprw.dp = wpn.gsprw.dpmax = 44;

wpn.scspt1 = new Eqp(); wpn.scspt1.id = 10053;
wpn.scspt1.name = 'Red Hand';
wpn.scspt1.desc = 'Burning sword that looks like a scissors blade. Its flames can evaporate any liquid' + dom.dseparator + '<span style="color:orange;text-shadow:red 0px 0px 5px,red 0px 0px 5px">Fire Affinity +25</span><br>';
wpn.scspt1.slot = 1;
wpn.scspt1.str = 54;
wpn.scspt1.cls = [10, 7, 3]; wpn.scspt1.aff = [0, 0, 0, 25, -35, 0, 0];
wpn.scspt1.dp = wpn.scspt1.dpmax = 75;
wpn.scspt1.wtype = 1;
wpn.scspt1.atype = 3;
wpn.scspt1.rar = 3;

wpn.scspt2 = new Eqp(); wpn.scspt2.id = 10054;
wpn.scspt2.name = 'Blue Hand';
wpn.scspt2.desc = 'Freezing sword that looks like a scissors blade. Its edge can calm the fieriest fire' + dom.dseparator + '<span style="color:cyan;text-shadow:blue 0px 0px 5px,blue 0px 0px 5px">Water Affinity +25</span><br>';
wpn.scspt2.slot = 1;
wpn.scspt2.str = 52;
wpn.scspt2.cls = [11, 8, 5]; wpn.scspt2.aff = [0, 0, 0, -35, 25, 0, 0];
wpn.scspt2.dp = wpn.scspt2.dpmax = 65;
wpn.scspt2.wtype = 1;
wpn.scspt2.atype = 4;
wpn.scspt2.rar = 3;

wpn.scspt3 = new Eqp(); wpn.scspt3.id = 10055;
wpn.scspt3.name = 'Fate Cutters';
wpn.scspt3.desc = 'Two swords combined together, forming a scissors-shaped weapon. It is said a mad blacksmith created this blade to hunt demigods' + dom.dseparator + '<span style="color:mediumorchid;text-shadow:darkblue 0px 0px 5px,darkblue 0px 0px 5px">Dark Affinity +30</span><br>';
wpn.scspt3.slot = 1; wpn.scspt3.twoh = true;
wpn.scspt3.str = 108;
wpn.scspt3.cls = [15, 12, 6]; wpn.scspt3.aff = [0, 0, 0, 15, 15, -5, 30];
wpn.scspt3.dp = wpn.scspt3.dpmax = 99;
wpn.scspt3.wtype = 1;
wpn.scspt3.atype = 6;
wpn.scspt3.rar = 4;

wpn.shrsb = new Eqp(); wpn.shrsb.id = 10056;
wpn.shrsb.name = 'Shears';
wpn.shrsb.desc = 'Massive gardening shears, for tiding up the bushes and other decorative flora. A murderer in the past was known to commit atrocities with a similar tool' + dom.dseparator;
wpn.shrsb.slot = 1; wpn.shrsb.twoh = true;
wpn.shrsb.str = 40;
wpn.shrsb.agl = -11;
wpn.shrsb.cls = [8, 5, 1];
wpn.shrsb.dp = wpn.shrsb.dpmax = 45;
wpn.shrsb.wtype = 3;

wpn.evob = new Eqp(); wpn.evob.id = 10057;
wpn.evob.name = 'Sword Of Evolution';
wpn.evob.desc = 'This living blade can absorb the blood and souls of defeated foes, it gets sharper with each kill' + dom.dseparator;
wpn.evob.slot = 1;
wpn.evob.str = 1;
wpn.evob.rar = 4;
wpn.evob.dp = wpn.evob.dpmax = 30;
wpn.evob.wtype = 1;
wpn.evob.oneq = function () {
	attachCallback(callback.onDeath, {
		f: function (victim, killer) {
			you.eqp[0].str += victim.str * .00005
			you.eqp[0].agl += victim.agl * .000003
			you.eqp[0].int += victim.int * .000001
			let d = victim.lvl * .001 ** (1 + victim.rnk * .01); you.eqp[0].dp += d; you.eqp[0].dpmax += d
		},
		id: 10057,
		data: { q: true }
	})
};
wpn.evob.onuneq = function () { detachCallback(callback.onDeath, 10057) };

wpn.mkrdwk = new Eqp(); wpn.mkrdwk.id = 10058;
wpn.mkrdwk.name = 'Marked Wakizashi';
wpn.mkrdwk.desc = 'Old wakizashi variant with red hilt. Scarred and chipped blade hints that it was used rather heavily in the past' + dom.dseparator;
wpn.mkrdwk.slot = 1; wpn.mkrdwk.important = true; wpn.mkrdwk.rar = 2;
wpn.mkrdwk.str = 40; wpn.mkrdwk.cls = [4, 3, 2];
wpn.mkrdwk.dp = wpn.mkrdwk.dpmax = 48;
wpn.mkrdwk.wtype = 1;

eqp.bnd = new Eqp(); eqp.bnd.id = 20001;
eqp.bnd.name = 'Bandana';
eqp.bnd.desc = 'Thin cloth bandana. It protects your face from sweat' + dom.dseparator;
eqp.bnd.slot = 3;
eqp.bnd.str = 3;
eqp.bnd.agl = 1;
eqp.bnd.aff = [1, 0, 1, 4, -2, 0, 0];
eqp.bnd.cls = [1, 0, 2];
eqp.bnd.stype = 3;
eqp.bnd.dp = eqp.bnd.dpmax = 11;

eqp.pnt = new Eqp(); eqp.pnt.id = 20002;
eqp.pnt.name = 'Dojo Pants';
eqp.pnt.desc = 'Perfect for morning runs' + dom.dseparator;
eqp.pnt.slot = 7;
eqp.pnt.str = 4;
eqp.pnt.agl = 2;
eqp.pnt.aff = [2, 0, 3, 4, -1, 0, 0];
eqp.pnt.cls = [2, 1, 1];
eqp.pnt.stype = 3;
eqp.pnt.dp = eqp.pnt.dpmax = 19;

eqp.brc = new Eqp(); eqp.brc.id = 20003;
eqp.brc.name = 'Bandage';
eqp.brc.desc = 'Simple handwraps' + dom.dseparator;
eqp.brc.slot = 5;
eqp.brc.str = 2;
eqp.brc.agl = 1;
eqp.brc.int = 3;
eqp.brc.aff = [0, 0, 0, 0, 0, 0, 0];
eqp.brc.cls = [1, 0, 1];
eqp.brc.stype = 3;
eqp.brc.dp = eqp.brc.dpmax = 11;

eqp.gnt = new Eqp(); eqp.gnt.id = 20004;
eqp.gnt.name = 'Gauntlet';
eqp.gnt.desc = 'Tough leather gauntlet that covers your entire hand. May prevent you from losing fingers' + dom.dseparator;
eqp.gnt.slot = 5;
eqp.gnt.str = 10;
eqp.gnt.stype = 3;
eqp.gnt.aff = [2, 1, 3, 3, 2, 2, 1];
eqp.gnt.cls = [3, 2, 4];
eqp.gnt.dp = eqp.gnt.dpmax = 24;

eqp.vst = new Eqp(); eqp.vst.id = 20005;
eqp.vst.name = 'Linen Vest';
eqp.vst.desc = 'You\'ll feel chilly without sleeves' + dom.dseparator;
eqp.vst.slot = 4;
eqp.vst.str = 6;
eqp.vst.stype = 3;
eqp.vst.aff = [1, 0, 0, 0, 0, 1, 0];
eqp.vst.cls = [3, 1, 1];
eqp.vst.dp = eqp.vst.dpmax = 23;

eqp.thd = new Eqp(); eqp.thd.id = 20006;
eqp.thd.name = 'Yellow Hood';
eqp.thd.desc = '';
eqp.thd.slot = 3;
eqp.thd.stype = 3;

eqp.amsk = new Eqp(); eqp.amsk.id = 20007;
eqp.amsk.name = 'Wolf Mask';
eqp.amsk.desc = 'A cute wolf mask.<br>It symbolizes <span style="color:orange;text-shadow:red 0px 0px 5px,red 0px 0px 5px">Fire</span>';
eqp.amsk.slot = 3;
eqp.amsk.stype = 3;
eqp.amsk.caff = [1, 0, 0, 20, 0, 0, 0];
eqp.amsk.cls = [5, 5, 5];
eqp.amsk.rar = 2;
eqp.amsk.dp = eqp.amsk.dpmax = 30;
eqp.amsk.oneq = function () { for (let afn in this.caff) you.caff[afn] += this.caff[afn] };
eqp.amsk.onuneq = function () { for (let afn in this.caff) you.caff[afn] -= this.caff[afn] };

eqp.bmsk = new Eqp(); eqp.bmsk.id = 20008;
eqp.bmsk.name = 'Frog Mask';
eqp.bmsk.desc = 'A cute frog mask.<br>It symbolizes <span style="color:cyan;text-shadow:blue 0px 0px 5px,blue 0px 0px 5px">Water</span>';
eqp.bmsk.slot = 3;
eqp.bmsk.stype = 3;
eqp.bmsk.caff = [1, 0, 0, 0, 20, 0, 0];
eqp.bmsk.cls = [5, 5, 5];
eqp.bmsk.rar = 2;
eqp.bmsk.dp = eqp.bmsk.dpmax = 30;
eqp.bmsk.oneq = function () { for (let afn in this.caff) you.caff[afn] += this.caff[afn] };
eqp.bmsk.onuneq = function () { for (let afn in this.caff) you.caff[afn] -= this.caff[afn] };

eqp.cmsk = new Eqp(); eqp.cmsk.id = 20009;
eqp.cmsk.name = 'Cat Mask';
eqp.cmsk.desc = 'A cute cat mask. <br>It symbolizes <span style="color:lime;text-shadow:green 0px 0px 5px,green 0px 0px 5px">Wind</span>';
eqp.cmsk.slot = 3;
eqp.cmsk.stype = 3;
eqp.cmsk.caff = [1, 20, 0, 0, 0, 0, 0];
eqp.cmsk.cls = [5, 5, 5];
eqp.cmsk.rar = 2;
eqp.cmsk.dp = eqp.cmsk.dpmax = 30;
eqp.cmsk.oneq = function () { for (let afn in this.caff) you.caff[afn] += this.caff[afn] };
eqp.cmsk.onuneq = function () { for (let afn in this.caff) you.caff[afn] -= this.caff[afn] };

eqp.dmsk = new Eqp(); eqp.dmsk.id = 20010;
eqp.dmsk.name = 'Dog Mask';
eqp.dmsk.desc = 'A cute dog mask. <br>It symbolizes <span style="color:gold;text-shadow:orange 0px 0px 5px,orange 0px 0px 5px">Bravery</span>';
eqp.dmsk.slot = 3;
eqp.dmsk.stype = 3;
eqp.dmsk.caff = [1, 0, 20, 0, 0, 0, 0];
eqp.dmsk.cls = [5, 5, 5];
eqp.dmsk.rar = 2;
eqp.dmsk.dp = eqp.dmsk.dpmax = 30;
eqp.dmsk.oneq = function () { for (let afn in this.caff) you.caff[afn] += this.caff[afn] };
eqp.dmsk.onuneq = function () { for (let afn in this.caff) you.caff[afn] -= this.caff[afn] };

eqp.emsk = new Eqp(); eqp.emsk.id = 20011;
eqp.emsk.name = 'Fox Mask';
eqp.emsk.desc = 'A cute fox mask. <br>It symbolizes <span style="color:lightgoldenrodyellow;text-shadow:gold 0px 0px 5px">Light</span>';
eqp.emsk.slot = 3;
eqp.emsk.stype = 3;
eqp.emsk.caff = [1, 0, 0, 0, 0, 20, 0];
eqp.emsk.cls = [5, 5, 5];
eqp.emsk.rar = 2;
eqp.emsk.dp = eqp.emsk.dpmax = 30;
eqp.emsk.oneq = function () { for (let afn in this.caff) you.caff[afn] += this.caff[afn] };
eqp.emsk.onuneq = function () { for (let afn in this.caff) you.caff[afn] -= this.caff[afn] };

eqp.fmsk = new Eqp(); eqp.fmsk.id = 20012;
eqp.fmsk.name = 'Devil Mask';
eqp.fmsk.desc = 'A viscous devil mask. <br>It symbolizes <span style="color:mediumorchid;text-shadow:darkblue 0px 0px 5px,darkblue 0px 0px 5px">Darkness</span>';
eqp.fmsk.slot = 3;
eqp.fmsk.stype = 3;
eqp.fmsk.caff = [1, 0, 0, 0, 0, 0, 20];
eqp.fmsk.cls = [5, 5, 5];
eqp.fmsk.rar = 2;
eqp.fmsk.dp = eqp.fmsk.dpmax = 30;
eqp.fmsk.oneq = function () { for (let afn in this.caff) you.caff[afn] += this.caff[afn] };
eqp.fmsk.onuneq = function () { for (let afn in this.caff) you.caff[afn] -= this.caff[afn] };

eqp.nkgd = new Eqp(); eqp.nkgd.id = 20013;
eqp.nkgd.name = 'Neck Guard';
eqp.nkgd.desc = 'Metal plating worn around the neck. Minor protection from direct frontal attacks' + dom.dseparator;
eqp.nkgd.str = 7;
eqp.nkgd.slot = 3;
eqp.nkgd.stype = 3;
eqp.nkgd.aff = [3, -3, -3, -3, -3, -3, -3];
eqp.nkgd.cls = [4, 4, 4];
eqp.nkgd.dp = eqp.nkgd.dpmax = 35;

eqp.sndl = new Eqp(); eqp.sndl.id = 20014;
eqp.sndl.name = 'Sandals';
eqp.sndl.desc = 'Cheap unremarkable sandals made from light leather. Aren\'t even that comfortable to wear' + dom.dseparator;
eqp.sndl.slot = 7;
eqp.sndl.str = 3;
eqp.sndl.agl = 1;
eqp.sndl.aff = [2, 0, 2, 3, -1, 0, 0];
eqp.sndl.cls = [1, 1, 1];
eqp.sndl.stype = 3;
eqp.sndl.dp = eqp.sndl.dpmax = 12;

eqp.ykkr = new Eqp(); eqp.ykkr.id = 20015;
eqp.ykkr.name = 'Yukker';
eqp.ykkr.desc = 'Warm deerskin boots, worn by civilians and hunters during winter for maximum protection from cold and environmental hazards' + dom.dseparator;
eqp.ykkr.slot = 7;
eqp.ykkr.str = 11;
eqp.ykkr.agl = 2;
eqp.ykkr.aff = [3, 5, 15, 7, 3, 0, 0];
eqp.ykkr.cls = [5, 4, 8];
eqp.ykkr.stype = 3;
eqp.ykkr.dp = eqp.ykkr.dpmax = 22;

eqp.tnc = new Eqp(); eqp.tnc.id = 20016;
eqp.tnc.name = 'Tunic';
eqp.tnc.desc = 'A simple, short-sleeved shirt. It\'s somewhat short in length and tailored to snugly fit the wearer\'s body' + dom.dseparator;
eqp.tnc.slot = 4;
eqp.tnc.str = 9;
eqp.tnc.stype = 3;
eqp.tnc.aff = [2, 1, -1, 1, 1, 5, 0];
eqp.tnc.cls = [2, 2, 3];
eqp.tnc.dp = eqp.tnc.dpmax = 26;

eqp.rncp = new Eqp(); eqp.rncp.id = 20017;
eqp.rncp.name = 'Rain Cap';
eqp.rncp.desc = 'The cap with the wide brim for keeping the rain from the wearer\'s eyes' + dom.dseparator;
eqp.rncp.slot = 3;
eqp.rncp.str = 9;
eqp.rncp.aff = [2, 3, 2, 5, 14, 5, -5];
eqp.rncp.cls = [3, 2, 2];
eqp.rncp.stype = 3;
eqp.rncp.dp = eqp.rncp.dpmax = 17;

eqp.rnss = new Eqp(); eqp.rnss.id = 20018;
eqp.rnss.name = 'Rain Shoes';
eqp.rnss.desc = 'Simple shoes made from tree rubber. Sturdy and longlasting, they protect one\'s toes from cold' + dom.dseparator;
eqp.rnss.slot = 7;
eqp.rnss.str = 9;
eqp.rnss.agl = 2;
eqp.rnss.aff = [4, 5, 10, 9, 14, 1, 0];
eqp.rnss.cls = [3, 7, 5];
eqp.rnss.stype = 3;
eqp.rnss.dp = eqp.rnss.dpmax = 22;

eqp.hkgd = new Eqp(); eqp.hkgd.id = 20019;
eqp.hkgd.name = 'Headguard';
eqp.hkgd.desc = 'A simple and light helmet that provides minimal protection against falling debris and the like' + dom.dseparator;
eqp.hkgd.str = 14;
eqp.hkgd.slot = 3;
eqp.hkgd.stype = 3;
eqp.hkgd.aff = [5, -4, -4, -4, -4, -4, -1];
eqp.hkgd.cls = [5, 5, 7];
eqp.hkgd.dp = eqp.hkgd.dpmax = 28;

eqp.wkss = new Eqp(); eqp.wkss.id = 20020;
eqp.wkss.name = 'Worker Shoes';
eqp.wkss.desc = 'Safety shoes for laborers. The metal reinforcement offers dependable protection for the toes' + dom.dseparator;
eqp.wkss.slot = 7;
eqp.wkss.str = 16;
eqp.wkss.agl = 2;
eqp.wkss.aff = [7, 12, 8, 7, 8, 1, 2];
eqp.wkss.cls = [5, 4, 6];
eqp.wkss.stype = 3;
eqp.wkss.dp = eqp.wkss.dpmax = 22;

eqp.jhmt = new Eqp(); eqp.jhmt.id = 20021;
eqp.jhmt.name = 'Junk Helmet';
eqp.jhmt.desc = 'A helmet clobbled together from scrap material. It looks terribly heavy but provides good protection around the head and neck' + dom.dseparator;
eqp.jhmt.str = 18;
eqp.jhmt.slot = 3;
eqp.jhmt.stype = 3;
eqp.jhmt.aff = [8, -5, -5, -5, -5, -5, -5];
eqp.jhmt.cls = [8, 8, 8];
eqp.jhmt.dp = eqp.jhmt.dpmax = 28;

eqp.knkn = new Eqp(); eqp.knkn.id = 20022;
eqp.knkn.name = 'Knit Knee-Highs';
eqp.knkn.desc = 'Long boots woven from linen. Light and breathable, so they\'re comfortable when it\'s hot' + dom.dseparator;
eqp.knkn.slot = 7;
eqp.knkn.str = 19;
eqp.knkn.agl = 2;
eqp.knkn.aff = [3, 4, 7, 15, 10, 3, 2];
eqp.knkn.cls = [3, 3, 3];
eqp.knkn.stype = 3;
eqp.knkn.dp = eqp.knkn.dpmax = 32;

eqp.brbn = new Eqp(); eqp.brbn.id = 20023;
eqp.brbn.name = 'Burnouns';
eqp.brbn.desc = 'A long, hooded cloak. Protetcs the wearer from both the scorching sun and chilling cold' + dom.dseparator;
eqp.brbn.slot = 4;
eqp.brbn.str = 33;
eqp.brbn.agl = -4;
eqp.brbn.stype = 3;
eqp.brbn.aff = [4, 7, 5, 19, 21, -15, 15];
eqp.brbn.cls = [8, 5, 8];
eqp.brbn.dp = eqp.brbn.dpmax = 41;

eqp.ovrl = new Eqp(); eqp.ovrl.id = 20024;
eqp.ovrl.name = 'Overalls';
eqp.ovrl.desc = 'Work clothes made of heavy cloth that cover the entire body. Protects from bumps and scratches' + dom.dseparator;
eqp.ovrl.slot = 4;
eqp.ovrl.str = 25;
eqp.ovrl.stype = 3;
eqp.ovrl.aff = [6, 6, 5, 9, 8, 9, 3];
eqp.ovrl.cls = [8, 8, 8];
eqp.ovrl.dp = eqp.ovrl.dpmax = 33;

eqp.prsnu = new Eqp(); eqp.prsnu.id = 20025;
eqp.prsnu.name = 'Prison Uniform';
eqp.prsnu.desc = 'Made of ugly, coarse cloth, this garment\'s sturdiness is its only redeeming trait. It holds up well under what washing it does get' + dom.dseparator;
eqp.prsnu.slot = 4;
eqp.prsnu.str = 40;
eqp.prsnu.stype = 3;
eqp.prsnu.aff = [9, 6, 5, 9, 8, 9, 3];
eqp.prsnu.cls = [10, 10, 5];
eqp.prsnu.dp = eqp.prsnu.dpmax = 38;

eqp.prsna = new Eqp(); eqp.prsna.id = 20026;
eqp.prsna.name = 'Prison Apparel';
eqp.prsna.desc = 'It looks just like any other prison uniform, but the neck, sleeves and elbows have been made far more comfortable with soft threads' + dom.dseparator;
eqp.prsna.slot = 4;
eqp.prsna.rar = 2;
eqp.prsna.str = 44;
eqp.prsna.agl = 5;
eqp.prsna.stype = 3;
eqp.prsna.aff = [9, 7, 8, 9, 8, 9, 3];
eqp.prsna.cls = [10, 10, 10];
eqp.prsna.dp = eqp.prsna.dpmax = 38;

eqp.strwks = new Eqp(); eqp.strwks.id = 20027;
eqp.strwks.name = 'Straw Kasa';
eqp.strwks.desc = 'A Sando-gasa is made by weaving straw together. Great for boys who are too embarrassed to use a parasol' + dom.dseparator;
eqp.strwks.slot = 3;
eqp.strwks.str = 6;
eqp.strwks.aff = [3, 3, 2, 13, 2, 5, -5];
eqp.strwks.cls = [2, 1, 1];
eqp.strwks.stype = 3;
eqp.strwks.dp = eqp.strwks.dpmax = 18;

eqp.knkls = new Eqp(); eqp.knkls.id = 20028;
eqp.knkls.name = 'Knuckles';
eqp.knkls.desc = 'Leather bands that cover fingers' + dom.dseparator + 'Unarmed STR: <span style="color:lime">+4</span><br>';
eqp.knkls.slot = 5;
eqp.knkls.str = 4; eqp.knkls.undc = 4;
eqp.knkls.aff = [1, 0, 0, 0, 0, 0, 0];
eqp.knkls.cls = [2, 1, 1];
eqp.knkls.stype = 3;
eqp.knkls.dp = eqp.knkls.dpmax = 17;
eqp.knkls.oneq = function () { you.mods.undc += this.undc };
eqp.knkls.onuneq = function () { you.mods.undc -= this.undc };

eqp.reedhd = new Eqp(); eqp.reedhd.id = 20029;
eqp.reedhd.name = 'Reed Hood';
eqp.reedhd.desc = 'A hat that covers the face of Zen monks made from woven reed. Wearing this doesn\'t necessarily make you a monk, though' + dom.dseparator;
eqp.reedhd.slot = 3;
eqp.reedhd.str = 25;
eqp.reedhd.aff = [4, 1, 7, 13, 2, 9, -5];
eqp.reedhd.cls = [3, 3, 3];
eqp.reedhd.stype = 3;
eqp.reedhd.dp = eqp.reedhd.dpmax = 28;

eqp.ptchct = new Eqp(); eqp.ptchct.id = 20030;
eqp.ptchct.name = 'Patchwork Coat';
eqp.ptchct.desc = 'Coat stitched together from patches of cloth of various sizes and thickness. Somewhat durable but looks desperate' + dom.dseparator;
eqp.ptchct.slot = 4;
eqp.ptchct.str = 14;
eqp.ptchct.stype = 3;
eqp.ptchct.aff = [4, 2, 1, 2, 2, 3, 3];
eqp.ptchct.cls = [1, 4, 4];
eqp.ptchct.dp = eqp.ptchct.dpmax = 40;

eqp.ptchpts = new Eqp(); eqp.ptchpts.id = 20031;
eqp.ptchpts.name = 'Patchwork Pants';
eqp.ptchpts.desc = 'Crude attempt at pants, very baggy looking and somewhat uncomfortable to wear. Potential holes near stitch areas make your lower body shiver when it\'s windy' + dom.dseparator;
eqp.ptchpts.slot = 7;
eqp.ptchpts.str = 12;
eqp.ptchpts.stype = 3;
eqp.ptchpts.aff = [3, 2, 8, 4, 5, 5, 2];
eqp.ptchpts.cls = [3, 5, 5];
eqp.ptchpts.dp = eqp.ptchpts.dpmax = 38;

sld.bkl = new Eqp(); sld.bkl.id = 30001;
sld.bkl.name = 'Buckler';
sld.bkl.desc = 'Tiny shield that is supposed to be strapped onto an arm. Low defence, but provides high mobility' + dom.dseparator;
sld.bkl.slot = 2;
sld.bkl.str = 5;
sld.bkl.aff = [2, 2, 2, 2, 2, 2, 2];
sld.bkl.cls = [2, 2, 2];
sld.bkl.stype = 3;
sld.bkl.dp = sld.bkl.dpmax = 36;

sld.tge = new Eqp(); sld.tge.id = 30002;
sld.tge.name = 'Targe';
sld.tge.desc = 'Simple square shield with reinforced corners' + dom.dseparator;
sld.tge.slot = 2;
sld.tge.str = 9;
sld.tge.aff = [4, 3, 3, 3, 3, 3, 3];
sld.tge.cls = [3, 3, 4];
sld.tge.stype = 3;
sld.tge.dp = sld.tge.dpmax = 38;

sld.plt = new Eqp(); sld.plt.id = 30003;
sld.plt.name = 'Pelta Shield';
sld.plt.desc = 'Triangular shield composed of several layers of wood banded together, making it a little on the heavy side';
sld.plt.slot = 2;
sld.plt.str = 15;
sld.plt.aff = [8, 6, 5, 4, 5, 3, 3];
sld.plt.cls = [5, 5, 5];
sld.plt.stype = 3;
sld.plt.dp = sld.plt.dpmax = 41;

sld.qad = new Eqp(); sld.qad.id = 30004;
sld.qad.name = 'Quad Shield';
sld.qad.desc = '';
sld.qad.slot = 2;
sld.qad.str = 0;
sld.qad.stype = 3;

sld.crc = new Eqp(); sld.crc.id = 30005;
sld.crc.name = 'Circle Shield';
sld.crc.desc = '';
sld.crc.slot = 2;
sld.crc.str = 0;
sld.crc.stype = 3;

sld.rnd = new Eqp(); sld.rnd.id = 30006;
sld.rnd.name = 'Round Shield';
sld.rnd.desc = '';
sld.rnd.slot = 2;
sld.rnd.str = 0;
sld.rnd.stype = 3;

sld.twr = new Eqp(); sld.twr.id = 30007;
sld.twr.name = 'Tower Shield';
sld.twr.desc = '';
sld.twr.slot = 2;
sld.twr.str = 0;
sld.twr.stype = 3;

sld.spk = new Eqp(); sld.spk.id = 30008;
sld.spk.name = 'Spiked Shield';
sld.spk.desc = '';
sld.spk.slot = 2;
sld.spk.str = 0;
sld.spk.stype = 3;

sld.kit = new Eqp(); sld.kit.id = 30009;
sld.kit.name = 'Kite Shield';
sld.kit.desc = '';
sld.kit.slot = 2;
sld.kit.str = 0;
sld.kit.stype = 3;

sld.kit = new Eqp(); sld.kit.id = 30010;
sld.kit.name = 'Casserole Shield';
sld.kit.desc = '';
sld.kit.slot = 2;
sld.kit.str = 0;
sld.kit.stype = 3;

sld.htr = new Eqp(); sld.htr.id = 30011;
sld.htr.name = 'Heater Shield';
sld.htr.desc = '';
sld.htr.slot = 2;
sld.htr.str = 0;
sld.htr.stype = 3;

sld.ovl = new Eqp(); sld.ovl.id = 30012;
sld.ovl.name = 'Oval Shield';
sld.ovl.desc = '';
sld.ovl.slot = 2;
sld.ovl.str = 0;
sld.ovl.stype = 3;

sld.knt = new Eqp(); sld.knt.id = 30013;
sld.knt.name = 'Knight Shield';
sld.knt.desc = '';
sld.knt.rar = 4;
sld.knt.slot = 2;
sld.knt.str = 0;
sld.knt.stype = 3;

sld.hpt = new Eqp(); sld.hpt.id = 30014;
sld.hpt.name = 'Hoplite Shield';
sld.hpt.desc = '';
sld.hpt.rar = 4;
sld.hpt.slot = 2;
sld.hpt.str = 0;
sld.hpt.stype = 3;

sld.jrt = new Eqp(); sld.jrt.id = 30015;
sld.jrt.name = 'Jazeraint Shield';
sld.jrt.desc = '';
sld.jrt.rar = 4;
sld.jrt.slot = 2;
sld.jrt.str = 0;
sld.jrt.stype = 3;

sld.drd = new Eqp(); sld.drd.id = 30016;
sld.drd.name = 'Dread Shield';
sld.drd.desc = '';
sld.drd.rar = 4;
sld.drd.slot = 2;
sld.drd.str = 0;
sld.drd.stype = 3;

sld.stksld = new Eqp(); sld.stksld.id = 30017;
sld.stksld.name = 'Stake Shield';
sld.stksld.desc = 'Not actually a shield, but a row of spiky wood stakes tightly packed together to form a square panel. It\'s a bit heavy' + dom.dseparator + '<span style="color:hotpink">Physical ATK +4</span><br>';
sld.stksld.slot = 2;
sld.stksld.str = 7;
sld.stksld.aff = [2, 2, 2, 2, 2, 2, 2];
sld.stksld.cls = [3, 3, 3];
sld.stksld.stype = 3;
sld.stksld.dp = sld.stksld.dpmax = 23;
sld.stksld.oneq = function () { you.aff[0] += 4 };
sld.stksld.onuneq = function () { you.aff[0] -= 4 };

acc.strawp = new Eqp(); acc.strawp.id = 40001;
acc.strawp.name = 'Straw Pendant';
acc.strawp.desc = 'You made this yourself!' + dom.dseparator + '<span style=\'color:green\'><span style=\'color:lime\'> +50 </span> to max energy<br><span style="color: lime">SPD +1</span></span>';
acc.strawp.slot = 8;
acc.strawp.stype = 3;
//acc.strawp.eff[0]=effect.strawp;
acc.strawp.oneq = function () { you.sata += 50; you.sat += 50; you.spda += 1 }
acc.strawp.onuneq = function () { you.sata -= 50; you.sat -= 50; you.spda -= 1 }
acc.strawp.onGet = function () { if (acc.fmlim.have) { giveRcp(rcp.fmlim2); this.onGet = function () { } } }

acc.snch = new Eqp(); acc.snch.id = 40002;
acc.snch.name = 'Sun Charm';
acc.snch.desc = 'Little charm with a piece of power of the Sun imbued into it. It absorbs Sun energy' + dom.dseparator + '<span style=\'color:gold\'>Raises stats during day</span>';
acc.snch.slot = 8;
acc.snch.stype = 3;
acc.snch.eff[0] = effect.snch;
acc.snch.rar = 2;
acc.snch.oneq = function () {
	if (global.flags.savestate === false) msg('You feel closer to the Sun..', 'gold')
}

acc.mnch = new Eqp(); acc.mnch.id = 40003;
acc.mnch.name = 'Moon Charm';
acc.mnch.desc = 'Little charm with a piece of power of the Moon imbued into it. It absorbs Moon energy' + dom.dseparator + '<span style=\'color:cyan\'>Raises stats during night</span>';
acc.mnch.slot = 8;
acc.mnch.stype = 3;
acc.mnch.eff[0] = effect.mnch;
acc.mnch.rar = 2;
acc.mnch.oneq = function () {
	if (global.flags.savestate === false) msg('You feel closer to the Moon..', 'gold')
}

acc.mstn = new Eqp(); acc.mstn.id = 40004;
acc.mstn.name = 'Mana Stone';
acc.mstn.desc = 'Gem imbued with raw arcanic power';
acc.mstn.slot = 8;
acc.mstn.stype = 3;
acc.mstn.rar = 2;

acc.bstn = new Eqp(); acc.bstn.id = 40005;
acc.bstn.name = 'Blood Stone';
acc.bstn.desc = 'Gem imbued with the power of blood';
acc.bstn.slot = 8;
acc.bstn.stype = 3;
acc.bstn.rar = 2;

acc.sstn = new Eqp(); acc.sstn.id = 40006;
acc.sstn.name = 'Soul Stone';
acc.sstn.desc = 'Gem with a fraction of a soul trapped inside of it';
acc.sstn.slot = 8;
acc.sstn.stype = 3;
acc.sstn.rar = 2;

acc.srng = new Eqp(); acc.srng.id = 40007;
acc.srng.name = 'Silver Ring';
acc.srng.desc = 'Simple ring made of silver. It is used as a base for making enchanted accessories';
acc.srng.slot = 8;
acc.srng.stype = 3;

acc.grng = new Eqp(); acc.grng.id = 40008;
acc.grng.name = 'Gold Ring';
acc.grng.desc = 'Valuable ring made of gold. Has high vanity value and can be improved by setting gems into it';
acc.grng.slot = 8;
acc.grng.stype = 3;

acc.trrng = new Eqp(); acc.trrng.id = 40009;
acc.trrng.name = 'Trinity';
acc.trrng.desc = 'Rings were given to the Knights in ancient times, as a symbol of loyalty. Strenghtens mind and body';
acc.trrng.slot = 8;
acc.trrng.stype = 3;
acc.trrng.rar = 3;

acc.akh = new Eqp(); acc.akh.id = 40010;
acc.akh.name = 'Ankh';
acc.akh.desc = 'A symbol of life ☥';
acc.akh.slot = 8;
acc.akh.stype = 3;
acc.akh.rar = 3;

acc.gmph1 = new Eqp(); acc.gmph1.id = 40011;
acc.gmph1.name = 'Titan Malachite';
acc.gmph1.desc = 'Malachite with a Titan\'s soul bound inside. Slightly increases the power of direct attacks';
acc.gmph1.slot = 8;
acc.gmph1.stype = 3;
acc.gmph1.rar = 2;

acc.gmph2 = new Eqp(); acc.gmph2.id = 40012;
acc.gmph2.name = 'Talos Feldspar';
acc.gmph2.desc = 'Feldspar imbued with the dark powers of Talos. Increases the power of direct attacks';
acc.gmph2.slot = 8;
acc.gmph2.stype = 3;
acc.gmph2.rar = 3;

acc.gmai1 = new Eqp(); acc.gmai1.id = 40013;
acc.gmai1.name = 'Sylphid Topaz';
acc.gmai1.desc = 'Topaz imbued with the power of the Sylphs. Slightly increases air affinity';
acc.gmai1.slot = 8;
acc.gmai1.stype = 3;
acc.gmai1.rar = 2;

acc.gmai2 = new Eqp(); acc.gmai2.id = 40014;
acc.gmai2.name = 'Djinn Amber';
acc.gmai2.desc = 'Amber imbued with the power of Sylphs. Increases air affinity';
acc.gmai2.slot = 8;
acc.gmai2.stype = 3;
acc.gmai2.rar = 3;

acc.gmfr1 = new Eqp(); acc.gmfr1.id = 40015;
acc.gmfr1.name = 'Salamander Ruby';
acc.gmfr1.desc = 'Ruby imbued with the power of the Salamanders. Slightly increases fire affinity';
acc.gmfr1.slot = 8;
acc.gmfr1.stype = 3;
acc.gmfr1.rar = 2;

acc.gmfr2 = new Eqp(); acc.gmfr2.id = 40016;
acc.gmfr2.name = 'Ifrit Carnelian';
acc.gmfr2.desc = 'Carnelian imbued with the power of Ifrit. Increases fire affinity';
acc.gmfr2.slot = 8;
acc.gmfr2.stype = 3;
acc.gmfr2.rar = 3;

acc.gmea1 = new Eqp(); acc.gmea1.id = 40017;
acc.gmea1.name = 'Gnome Emerald';
acc.gmea1.desc = 'Emerald imbued with the power of the Gnomes. Slightly increases earth affinity';
acc.gmea1.slot = 8;
acc.gmea1.stype = 3;
acc.gmea1.rar = 2;

acc.gmea2 = new Eqp(); acc.gmea2.id = 40018;
acc.gmea2.name = 'Dao Moonstone';
acc.gmea2.desc = 'Moonstone imbued with the power of Dao. Increases earth affinity';
acc.gmea2.slot = 8;
acc.gmea2.stype = 3;
acc.gmea2.rar = 3;

acc.gmwt1 = new Eqp(); acc.gmwt1.id = 40019;
acc.gmwt1.name = 'Undine Jasper';
acc.gmwt1.desc = 'Jasper imbued with the power of the Undines. Slightly increases water affinity';
acc.gmwt1.slot = 8;
acc.gmwt1.stype = 3;
acc.gmwt1.rar = 2;

acc.gmwt2 = new Eqp(); acc.gmwt2.id = 40020;
acc.gmwt2.name = 'Marid Aquamarine';
acc.gmwt2.desc = 'Aquamarine imbued with the power of Marid. Increases water affinity';
acc.gmwt2.slot = 8;
acc.gmwt2.stype = 3;
acc.gmwt2.rar = 3;

acc.gmhl1 = new Eqp(); acc.gmhl1.id = 40021;
acc.gmhl1.name = 'Angel Pearl';
acc.gmhl1.desc = 'Pearl imbued with the power of the angels. Slightly increases light affinity';
acc.gmhl1.slot = 8;
acc.gmhl1.stype = 3;
acc.gmhl1.rar = 2;

acc.gmhl2 = new Eqp(); acc.gmhl2.id = 40022;
acc.gmhl2.name = 'Seraphim Diamond';
acc.gmhl2.desc = 'Diamond with a seraph\'s soul bound inside. Increases light affinity';
acc.gmhl2.slot = 8;
acc.gmhl2.stype = 3;
acc.gmhl2.rar = 3;

acc.gmdk1 = new Eqp(); acc.gmdk1.id = 40023;
acc.gmdk1.name = 'Morlock Jet';
acc.gmdk1.desc = 'Jet stone sealed with Morlock\'s magical power. Slightly increases dark affinity';
acc.gmdk1.slot = 8;
acc.gmdk1.stype = 3;
acc.gmdk1.rar = 2;

acc.gmdk2 = new Eqp(); acc.gmdk2.id = 40024;
acc.gmdk2.name = 'Berial Blackpearl';
acc.gmdk2.desc = 'Blackpearl with Berial\'s soul bound inside. Increases dark affinity';
acc.gmdk2.slot = 8;
acc.gmdk2.stype = 3;
acc.gmdk2.rar = 3;

acc.wfng = new Eqp(); acc.wfng.id = 40025;
acc.wfng.name = 'Wolf Fang Necklace';
acc.wfng.desc = 'Menacing fang of the wolf, in the form of a pendant. Wearing this can help to repell and scare away minor beasts' + dom.dseparator + '<span style="color:orange">Beast Class DEF +15</span>';
acc.wfng.slot = 8;
acc.wfng.stype = 3;
acc.wfng.oneq = function () { you.cmaff[1] += 15 };
acc.wfng.onuneq = function () { you.cmaff[1] -= 15 }
acc.wfng.onGet = function () {
	if (!rcp.wfar.have) {
		let f = 0; for (let a in inv) if (inv[a].id === this.id) f++
		if (f >= 3) giveRcp(rcp.wfar)
	}
}

acc.wfar = new Eqp(); acc.wfar.id = 40026;
acc.wfar.name = 'Wolf Array';
acc.wfar.desc = 'Array composed of interlinked fangs of the wolf. Used by hunters as a mean of protection agains wildlife' + dom.dseparator + '<span style="color:orange">Beast Class DEF +30</span>';
acc.wfar.slot = 8;
acc.wfar.stype = 3;
acc.wfar.rar = 2;
acc.wfar.oneq = function () { you.cmaff[1] += 30 };
acc.wfar.onuneq = function () { you.cmaff[1] -= 30 }

acc.sshl = new Eqp(); acc.sshl.id = 40027;
acc.sshl.name = 'Star Shell';
acc.sshl.desc = 'A little shell with a fraction of power of Space within it. It radiates incomprehencible energy when you touch it' + dom.dseparator + '<span style=\'color:gold\'>Raises stats+';
acc.sshl.slot = 8;
acc.sshl.stype = 3;
acc.sshl.rar = 2;
acc.sshl.oneq = function () { };
acc.sshl.onuneq = function () { }

acc.qill = new Eqp(); acc.qill.id = 40028;
acc.qill.name = 'Quill';
acc.qill.desc = 'Feather of a large bird, turned into a writing tool ' + dom.dseparator + '<span style="color:lime">AGL +5</span>';
acc.qill.slot = 8;
acc.qill.stype = 3;
acc.qill.oneq = function () { you.agla += 5 }
acc.qill.onuneq = function () { you.agla -= 5 }
acc.qill.onGet = function () {
	if (acc.bink.have) { giveRcp(rcp.mink); this.onGet = function () { } }
}

acc.bink = new Eqp(); acc.bink.id = 40029;
acc.bink.name = 'Black Ink';
acc.bink.desc = 'Pitch black Ink, useful in writing. Stains left by it will never come off' + dom.dseparator + '<span style="color:lime">INT +3</span>';
acc.bink.slot = 8;
acc.bink.stype = 3;
acc.bink.oneq = function () { you.inta += 3 }
acc.bink.onuneq = function () { you.inta -= 3 }
acc.bink.onGet = function () {
	if (acc.qill.have) { giveRcp(rcp.mink); this.onGet = function () { } }
}

acc.mink = new Eqp(); acc.mink.id = 40030;
acc.mink.name = 'Magic Ink';
acc.mink.desc = 'Glowing magic ink, used for writing magical and runic inscriptions. ' + dom.dseparator + '<span style="color:lime">INT +8</span><br><span style="color:lime">AGL +10</span>';
acc.mink.slot = 8;
acc.mink.stype = 3;
acc.mink.rar = 2;
acc.mink.oneq = function () { you.inta += 8; you.agla += 10; }
acc.mink.onuneq = function () { you.inta -= 8; you.agla -= 10; }

acc.rfot = new Eqp(); acc.rfot.id = 40031;
acc.rfot.name = 'Rabbit Foot';
acc.rfot.desc = 'Lucky charm made from a foot of a rabbit. Wearing this gives you a strange feeling of satisfaction' + dom.dseparator + '<span style="color:gold">LUCK +2</span>';
acc.rfot.slot = 8;
acc.rfot.stype = 3;
acc.rfot.rar = 2;
acc.rfot.oneq = function () { you.luck += 2 }
acc.rfot.onuneq = function () { you.luck -= 2 }

acc.sdl1 = new Eqp(); acc.sdl1.id = 40032;
acc.sdl1.name = 'Straw Effigy';
acc.sdl1.desc = 'Small handcrafted straw doll. Dolls of this type are used to bind with the souls of the living. Appropriate for Curses and Dark Magic manipulation' + dom.dseparator + '<span style="color:hotpink">Physical DEF +5</span>';
acc.sdl1.slot = 8;
acc.sdl1.stype = 3;
acc.sdl1.oneq = function () { you.caff[0] += 5; }
acc.sdl1.onuneq = function () { you.caff[0] -= 5; }
acc.sdl1.onGet = function () { if (acc.bdl1.have && acc.wdl1.have) { giveRcp(rcp.gdl1); this.onGet = function () { } } }

acc.lckcn = new Eqp(); acc.lckcn.id = 40033;
acc.lckcn.name = 'Lucky Coin';
acc.lckcn.desc = 'Special little coin, unlike any other. You have a feeling you should hold onto it' + dom.dseparator + '<span style="color:gold">LUCK +3</span>';
acc.lckcn.slot = 8;
acc.lckcn.stype = 3;
acc.lckcn.oneq = function () { you.luck += 3; }
acc.lckcn.onuneq = function () { you.luck -= 3; }
acc.lckcn.onGet = function () { if (acc.cfgn.have) { giveRcp(rcp.mnknk); this.onGet = function () { } } }

acc.cfgn = new Eqp(); acc.cfgn.id = 40034;
acc.cfgn.name = 'Cat Figurine';
acc.cfgn.desc = 'Small figurine of a cat. It eminates powerful energy' + dom.dseparator + '<span style="color:deeppink">Energy Effectiveness +5%</span>';
acc.cfgn.slot = 8;
acc.cfgn.stype = 3;
acc.cfgn.oneq = function () { you.mods.sbonus += .05 }
acc.cfgn.onuneq = function () { you.mods.sbonus -= .05 }
acc.cfgn.onGet = function () { if (acc.lckcn.have) { giveRcp(rcp.mnknk); this.onGet = function () { } } }

acc.mnknk = new Eqp(); acc.mnknk.id = 40035;
acc.mnknk.name = 'Maneki-Neko';
acc.mnknk.desc = 'Little statue of a Divine Cat holding a Coin. This treasure is rumored to bring luck and prosperity to its owner' + dom.dseparator + '<span style="color:gold">LUCK +4</span><br><span style="color:deeppink">Energy Effectiveness +10%</span>';
acc.mnknk.slot = 8;
acc.mnknk.stype = 3;
acc.mnknk.rar = 2;
acc.mnknk.oneq = function () { you.luck += 4; you.mods.sbonus += .1; }
acc.mnknk.onuneq = function () { you.luck -= 4; you.mods.sbonus -= .1; }

acc.wdl1 = new Eqp(); acc.wdl1.id = 40036;
acc.wdl1.name = 'Wood Effigy';
acc.wdl1.desc = 'Small wooden doll with flexible joints. This type can be used, with Dark enchantment, to take control of living things.' + dom.dseparator + '<span style="color:crimson">Piercing DEF +5</span><br><span style="color:crimson">Edged DEF +5</span><br><span style="color:crimson">Blunt DEF +5</span>';
acc.wdl1.ccls = [5, 5, 5];
acc.wdl1.slot = 8;
acc.wdl1.stype = 3;
acc.wdl1.oneq = function () { for (let afn = 0; afn < this.ccls.length; afn++)you.ccls[afn] += this.ccls[afn] };
acc.wdl1.onuneq = function () { for (let afn = 0; afn < this.ccls.length; afn++)you.ccls[afn] -= this.ccls[afn] };
acc.wdl1.onGet = function () { if (acc.sdl1.have && acc.bdl1.have) { giveRcp(rcp.gdl1); this.onGet = function () { } } }

acc.gdl1 = new Eqp(); acc.gdl1.id = 40037;
acc.gdl1.name = 'Soul Puppet';
acc.gdl1.desc = 'Dolls that could be remotely controlled by one\'s soul. Employed by spies to infiltrate enemy lines unnoticed' + dom.dseparator + '<span style="color:crimson">Piercing DEF +4</span><br><span style="color:crimson">Edged DEF +4</span><br><span style="color:crimson">Blunt DEF +4</span><br><span style="color:thistle;text-shadow:blueviolet 0px 0px 5px">Dark RES +6</span><br><span style="color:royalblue;text-shadow:blueviolet 0px 0px 5px">Evil Class DEF +2</span><br><span style="color:hotpink">Physical DEF +3</span>';
acc.gdl1.ccls = [4, 4, 4];
acc.gdl1.slot = 8;
acc.gdl1.stype = 3;
acc.gdl1.rar = 2;
acc.gdl1.oneq = function () { you.caff[0] += 3; you.caff[6] += 2; for (let afn = 0; afn < this.ccls.length; afn++)you.ccls[afn] += this.ccls[afn]; you.cmaff[3] += 6 }
acc.gdl1.onuneq = function () { you.caff[0] -= 3; you.caff[6] -= 2; for (let afn = 0; afn < this.ccls.length; afn++)you.ccls[afn] -= this.ccls[afn]; you.cmaff[3] -= 6 }

acc.rnsn = new Eqp(); acc.rnsn.id = 40038;
acc.rnsn.name = 'Rain Stone';
acc.rnsn.desc = 'This stone, eroded by years of rain, can actually mimic rain to fool plants and animals. For this reason, it\'s in high demand for horticultural use' + dom.dseparator + '';
acc.rnsn.slot = 8;
acc.rnsn.stype = 3;

acc.hndm = new Eqp(); acc.hndm.id = 40039;
acc.hndm.name = 'Fey Hound Mane';
acc.hndm.desc = 'A tuft of a fey hound\'s mane, said to ward off evil. It raises resistance to heat and cold' + dom.dseparator + '';
acc.hndm.slot = 8;
acc.hndm.stype = 3;

acc.dcpe = new Eqp(); acc.dcpe.id = 40040;
acc.dcpe.name = 'Deception Eye';
acc.dcpe.desc = 'A mysterious gem. It feels like it\'s looking at something, but you can\'t really tell' + dom.dseparator + '';
acc.dcpe.slot = 8;
acc.dcpe.stype = 3;

acc.bdl1 = new Eqp(); acc.bdl1.id = 40041;
acc.bdl1.name = 'Bone Doll';
acc.bdl1.desc = 'A small doll carved from beast bone. It\'s a charm that protects the wearer from evil' + dom.dseparator + '<span style="color:thistle;text-shadow:blueviolet 0px 0px 5px">Dark RES +5</span><br><span style="color:royalblue;text-shadow:blueviolet 0px 0px 5px">Evil Class DEF +5</span>';
acc.bdl1.slot = 8;
acc.bdl1.stype = 3;
acc.bdl1.oneq = function () { you.caff[6] += 5; you.cmaff[3] += 5 }
acc.bdl1.onuneq = function () { you.caff[6] -= 5; you.cmaff[3] -= 5; }
acc.bdl1.onGet = function () { if (acc.sdl1.have && acc.wdl1.have) { giveRcp(rcp.gdl1); this.onGet = function () { } } }

acc.fssn = new Eqp(); acc.fssn.id = 40042;
acc.fssn.name = 'Bonefish Spine'
acc.fssn.desc = 'A spine taken from a bonefish, which are still keen in undeath. It\'s said to raise spiritual awareness of the holder' + dom.dseparator + '';
acc.fssn.slot = 8;
acc.fssn.stype = 3;

acc.mpst = new Eqp(); acc.mpst.id = 40043;
acc.mpst.name = 'Mortar and Pestle';
acc.mpst.desc = 'A basic stone bowl and a pounder used to mince and crush herbs, seeds, bones and other pharmaceutical oddities' + dom.dseparator + '<span style="color:deeppink">Alchemy EXP gain +5%</span><br><br><small style="color:deeppink">Alchemy quality:<span style="color:orange"> 1</span></small>';
acc.mpst.slot = 8; acc.mpst.alchq = 1;
acc.mpst.stype = 3;
acc.mpst.oneq = function () { skl.alch.p += .05 }
acc.mpst.onuneq = function () { skl.alch.p -= .05 }
acc.mpst.onGet = function () { if (acc.mpst.have && acc.mshst.have && acc.mhhst) { giveRcp(rcp.alseto); this.onGet = function () { } } }

acc.vtmns = new Eqp(); acc.vtmns.id = 40044;
acc.vtmns.name = 'Vitamins';
acc.vtmns.desc = 'A bottle of powerful vitamins, which grant one\'s body incresed vitality' + dom.dseparator + '<span style="color:limegreen">Poison resist +5%</span>';
acc.vtmns.slot = 8;
acc.vtmns.stype = 3;
acc.vtmns.oneq = function () { you.res.poison -= .05 }
acc.vtmns.onuneq = function () { you.res.poison += .05 }
acc.vtmns.onGet = function () { if (acc.mdcag.have && acc.vtmns.have) { giveRcp(rcp.mdcbg); this.onGet = function () { } } }

acc.mdcag = new Eqp(); acc.mdcag.id = 40045;
acc.mdcag.name = 'Adhesive Bandage';
acc.mdcag.desc = 'Bandage, boiled in hot water and sterilized using herbs' + dom.dseparator + '<span style="color:chartreuse">Bleed resist +5%</span>';
acc.mdcag.slot = 8;
acc.mdcag.stype = 3;
acc.mdcag.oneq = function () { you.res.bleed -= .05 }
acc.mdcag.onuneq = function () { you.res.bleed += .05 }
acc.mdcag.onGet = function () { if (acc.mdcag.have && acc.vtmns.have) { giveRcp(rcp.mdcbg); this.onGet = function () { } } }

acc.mdcbg = new Eqp(); acc.mdcbg.id = 40046;
acc.mdcbg.name = 'Medicated Bandage';
acc.mdcbg.desc = 'Sterile bandage soaked in strong medical solution' + dom.dseparator + '<span style="color:chartreuse">Bleed resist +8%</span><br><span style="color:limegreen">Poison resist +8%</span>';
acc.mdcbg.slot = 8;
acc.mdcbg.stype = 3;
acc.mdcbg.rar = 2;
acc.mdcbg.oneq = function () { you.res.bleed -= .08; you.res.poison -= .08 }
acc.mdcbg.onuneq = function () { you.res.bleed += .08; you.res.poison += .08 }

acc.mshst = new Eqp(); acc.mshst.id = 40047; //🝪
acc.mshst.name = 'Retort';
acc.mshst.desc = 'Alchemical vessel used for distilling, important for vapor separation' + dom.dseparator + '<span style="color:deeppink">Alchemy EXP gain +10%</span><br><br><small style="color:deeppink">Alchemy quality:<span style="color:orange"> 1</span></small>';
acc.mshst.slot = 8; acc.mshst.alchq = 1;
acc.mshst.stype = 3;
acc.mshst.oneq = function () { skl.alch.p += .1 }
acc.mshst.onuneq = function () { skl.alch.p -= .1 }
acc.mshst.onGet = function () { if (acc.mpst.have && acc.mshst.have && acc.mhhst) { giveRcp(rcp.alseto); this.onGet = function () { } } }

acc.mhhst = new Eqp(); acc.mhhst.id = 40048;
acc.mhhst.name = 'Alembic';
acc.mhhst.desc = 'Alchemical vessel used in distilling, especially useful for cooling' + dom.dseparator + '<span style="color:deeppink">Alchemy EXP gain +15%</span><br><br><small style="color:deeppink">Alchemy quality:<span style="color:orange"> 1</span></small>';
acc.mhhst.slot = 8; acc.mhhst.alchq = 1;
acc.mhhst.stype = 3;
acc.mhhst.oneq = function () { skl.alch.p += .15 }
acc.mhhst.onuneq = function () { skl.alch.p -= .15 }
acc.mhhst.onGet = function () { if (acc.mpst.have && acc.mshst.have && acc.mhhst) { giveRcp(rcp.alseto); this.onGet = function () { } } }

acc.asfk = new Eqp(); acc.asfk.id = 40049;
acc.asfk.name = 'Alchemical Flask';
acc.asfk.desc = 'A sealed flask with some vicious limegreen bubbling liquid moving inside. Opening this thing is a very bad idea' + dom.dseparator + '<span style="color:chartreuse">Damage reduction +3%</span>';
acc.asfk.slot = 8;
acc.asfk.stype = 3;
acc.asfk.oneq = function () { you.res.ph -= .03 }
acc.asfk.onuneq = function () { you.res.ph += .03 }

acc.alseto = new Eqp(); acc.alseto.id = 40050;
acc.alseto.name = 'Basic Alchemy Set';
acc.alseto.desc = 'Wide variety of aberrant glassware and precision tools for all types of entry level alchemy-based manipulations. A necessity for making basic medicine, pills, poisons, elixirs and everything inbetween' + dom.dseparator + '<span style="color:deeppink">Alchemy EXP gain +50%</span><br><br><small style="color:deeppink">Alchemy quality:<span style="color:orange"> 2</span></small><br><br>';
acc.alseto.slot = 8; acc.alseto.alchq = 2;
acc.alseto.stype = 3;
acc.alseto.int = 15;
acc.alseto.rar = 2;
acc.alseto.oneq = function () { skl.alch.p += .5 }
acc.alseto.onuneq = function () { skl.alch.p -= .5 }

acc.csfk = new Eqp(); acc.csfk.id = 40051;
acc.csfk.name = 'Corrupt Flask';
acc.csfk.desc = 'Glass container with an evil essence trapped inside of it. It is trying to break free' + dom.dseparator + '<span style="color:thistle;text-shadow:blueviolet 0px 0px 5px">Dark RES +10</span>';
acc.csfk.slot = 8;
acc.csfk.stype = 3;
acc.csfk.oneq = function () { you.caff[6] += 10 }
acc.csfk.onuneq = function () { you.caff[6] -= 10 }

acc.gsfk = new Eqp(); acc.gsfk.id = 40052;
acc.gsfk.name = 'Plague Flask';
acc.gsfk.desc = 'Locked vessel containing a volatile tissue sample from the plague beast. Should be handled with extreme care and must not be unsealed under any circumstances' + dom.dseparator + '<span style="color:chartreuse">Damage reduction +4%</span><br><span style="color:thistle;text-shadow:blueviolet 0px 0px 5px">Dark RES +35</span>';
acc.gsfk.slot = 8;
acc.gsfk.stype = 3;
acc.gsfk.rar = 2;
acc.gsfk.oneq = function () { you.res.ph -= .04; you.caff[6] += 35 }
acc.gsfk.onuneq = function () { you.res.ph += .04; you.caff[6] -= 35 }

acc.jln1 = new Eqp(); acc.jln1.id = 40053;
acc.jln1.name = 'Life Jelly';
acc.jln1.desc = 'Concentrated red jelly. Improves life force' + dom.dseparator + '<span style="color:chartreuse">MAX HP +400</span>';
acc.jln1.slot = 8;
acc.jln1.stype = 3;
acc.jln1.oneq = function () { you.hpa += 400 }
acc.jln1.onuneq = function () { you.hpa -= 400 }

acc.jln2 = new Eqp(); acc.jln2.id = 40054;
acc.jln2.name = 'Stamina Jelly';
acc.jln2.desc = 'Concentrated green jelly. Improves stamina' + dom.dseparator + '<span style="color:chartreuse">MAX SAT +100</span>';
acc.jln2.slot = 8;
acc.jln2.stype = 3;
acc.jln2.oneq = function () { you.sat += 100; you.sata += 100; }
acc.jln2.onuneq = function () { you.sat -= 100; you.sata -= 100; }

acc.jln3 = new Eqp(); acc.jln3.id = 40055;
acc.jln3.name = 'Vital Jelly';
acc.jln3.desc = 'Concentrated blue jelly. Improves metabolism' + dom.dseparator + '<span style="color:chartreuse">SPD +2</span><br><span style="color:crimson">Energy Consumtion +0.2\/s</span>';
acc.jln3.slot = 8;
acc.jln3.stype = 3;
acc.jln3.oneq = function () { you.spda += 2; you.mods.sdrate += .2 }
acc.jln3.onuneq = function () { you.spda -= 2; you.mods.sdrate -= .2 }

acc.jln4 = new Eqp(); acc.jln4.id = 40056;
acc.jln4.name = 'Grand Gelatin';
acc.jln4.desc = 'proc';
acc.jln4.slot = 8;
acc.jln4.stype = 3;
acc.jln4.rar = 2;
acc.jln4.oneq = function () { you.spda += 2; you.mods.sdrate += .2 }
acc.jln4.onuneq = function () { you.spda -= 2; you.mods.sdrate -= .2 }

acc.mstone = new Eqp(); acc.mstone.id = 40057;
acc.mstone.name = 'Moon Stone';
acc.mstone.desc = 'proc';
acc.mstone.slot = 8;
acc.mstone.stype = 3;

acc.sstone = new Eqp(); acc.sstone.id = 40058;
acc.sstone.name = 'Sun Stone';
acc.sstone.desc = 'proc';
acc.sstone.slot = 8;
acc.sstone.stype = 3;

acc.cstone = new Eqp(); acc.cstone.id = 40059;
acc.cstone.name = 'Celestial Stone';
acc.cstone.desc = 'proc';
acc.cstone.slot = 8;
acc.cstone.stype = 3;
acc.cstone.rar = 2;

acc.coring = new Eqp(); acc.coring.id = 40060;
acc.coring.name = 'Coin Ring';
acc.coring.desc = 'Golden ring whith runic engraving of a coin on it. Rumored to attract wealth ' + dom.dseparator + '<span style="color:orange">Defeated enemies occasionally drop money</span>';
acc.coring.slot = 8;
acc.coring.stype = 3;
acc.coring.rar = 2;
acc.coring.oneq = function () { you.mods.enmondren += .01 }
acc.coring.onuneq = function () { you.mods.enmondren -= .01 }

acc.dticket = new Eqp(); acc.dticket.id = 40061;
acc.dticket.name = 'Discount Ticket';
acc.dticket.desc = 'Small ticket that allows you to buy things for cheaper, if you show it to the shopkeeper. Sometimes given to random customers for promotional purposes ' + dom.dseparator + '<span style="color:thistle">Shop price reduction -1%</span>';
acc.dticket.slot = 8;
acc.dticket.stype = 3;
acc.dticket.onGet = function () { let b = 0; for (let a in inv) if (inv[a].id === this.id) b++; if (b >= 5) giveRcp(rcp.dcard1) }
acc.dticket.oneq = function () { you.mods.infsrate -= .01; recshop(); }
acc.dticket.onuneq = function () { you.mods.infsrate += .01; recshop(); }

acc.dcard1 = new Eqp(); acc.dcard1.id = 40062;
acc.dcard1.name = 'Discount Card';
acc.dcard1.desc = 'A card given to the most loyal customers in popular shops' + dom.dseparator + '<span style="color:thistle">Shop price reduction -5%</span>';
acc.dcard1.slot = 8;
acc.dcard1.stype = 3;
acc.dcard1.rar = 2;
acc.dcard1.oneq = function () { you.mods.infsrate -= .05; recshop(); }
acc.dcard1.onuneq = function () { you.mods.infsrate += .05; recshop(); }

acc.rgreed = new Eqp(); acc.rgreed.id = 40063;
acc.rgreed.name = 'Ring of Greed';
acc.rgreed.desc = 'Expensive ring employed by rich merchants and gamblers. Makes you seem like a symbol of authority, brings tremendous luck and helps during negotiations' + dom.dseparator + '<span style="color:orange">Defeated enemies sometimes drop money</span><br><span style="color:gold">+15% dropped money</span><br><span style="color:thistle">Shop price reduction -10%</span>';
acc.rgreed.slot = 8;
acc.rgreed.stype = 3;
acc.rgreed.rar = 3;
acc.rgreed.oneq = function () { you.mods.infsrate -= .1; you.mods.enmondren += .03; recshop(); }
acc.rgreed.onuneq = function () { you.mods.infsrate += .1; you.mods.enmondren -= .03; recshop(); }

acc.medl1 = new Eqp(); acc.medl1.id = 40064;
acc.medl1.name = 'Moon Medal';
acc.medl1.desc = 'proc';
acc.medl1.slot = 8;
acc.medl1.stype = 3;

acc.medl2 = new Eqp(); acc.medl2.id = 40065;
acc.medl2.name = 'Little Light Medal';
acc.medl2.desc = 'proc';
acc.medl2.slot = 8;
acc.medl2.stype = 3;

acc.medl3 = new Eqp(); acc.medl3.id = 40066;
acc.medl3.name = 'Moonlight Medal';
acc.medl3.desc = 'proc';
acc.medl3.slot = 8;
acc.medl3.stype = 3;
acc.medl3.rar = 2;

acc.medl4 = new Eqp(); acc.medl4.id = 40067;
acc.medl4.name = 'White Boar Medal';
acc.medl4.desc = 'proc';
acc.medl4.slot = 8;
acc.medl4.stype = 3;

acc.medl5 = new Eqp(); acc.medl5.id = 40068;
acc.medl5.name = 'Jade Skin Medal';
acc.medl5.desc = 'proc';
acc.medl5.slot = 8;
acc.medl5.stype = 3;

acc.medl6 = new Eqp(); acc.medl6.id = 40069;
acc.medl6.name = 'White Jade Medal';
acc.medl6.desc = 'proc';
acc.medl6.slot = 8;
acc.medl6.stype = 3;
acc.medl6.rar = 2;

acc.coindct = new Eqp(); acc.coindct.id = 40070;
acc.coindct.name = 'Coin of Deceit';
acc.coindct.desc = 'Crooked tainted coin with seemingly evil aura floating about it' + dom.dseparator + '<span style="color:royalblue">Crit Chance +3%</span>';
acc.coindct.slot = 8;
acc.coindct.stype = 3;
acc.coindct.oneq = function () { you.mods.crflt += .03; }
acc.coindct.onuneq = function () { you.mods.crflt -= .03; }

acc.slchth = new Eqp(); acc.slchth.id = 40071;
acc.slchth.name = 'Silencing Sheath';
acc.slchth.desc = 'Light conciealed sheath for storing small knives and other assassin tools. Unconspicous and easy to use, it is favoured by the agents of the Underworld' + dom.dseparator + '<span style="color:mediumpurple">Crit Damage +15%</span>';
acc.slchth.slot = 8;
acc.slchth.stype = 3;
acc.slchth.oneq = function () { you.mods.cpwr += .15; }
acc.slchth.onuneq = function () { you.mods.cpwr -= .15; }

acc.rmedlon = new Eqp(); acc.rmedlon.id = 40072;
acc.rmedlon.name = 'Ruin Medallion';
acc.rmedlon.desc = 'Evil Medallion imbued with the curse of misforture. Brings terrible luck to everyone around its bearer' + dom.dseparator + '<span style="color:royalblue">Crit Chance +6%</span>';
acc.rmedlon.slot = 8;
acc.rmedlon.stype = 3;
acc.rmedlon.rar = 2;
acc.rmedlon.oneq = function () { you.mods.crflt += .06; }
acc.rmedlon.onuneq = function () { you.mods.crflt -= .06; }

acc.mirgmirr = new Eqp(); acc.mirgmirr.id = 40073;
acc.mirgmirr.name = 'Mirage Mirror';
acc.mirgmirr.desc = 'Mirror of clouded darkness. It bends light around you.' + dom.dseparator + '<span style="color:royalblue">Reduces enemy aggression<br>Auto Dodge +10%</span>';
acc.mirgmirr.slot = 8;
acc.mirgmirr.stype = 3;
acc.mirgmirr.oneq = function () { you.mods.ddgmod += .1; }
acc.mirgmirr.onuneq = function () { you.mods.ddgmod -= .1; }

acc.aihomnt = new Eqp(); acc.aihomnt.id = 40074;
acc.aihomnt.name = 'Airia Hair Ornament';
acc.aihomnt.desc = 'An ornament made of light magic ore. Wraps the wearer with a thin magic barrier' + dom.dseparator + '<span style="color:royalblue">Reduces enemy aggression<br>Magic DEF +15</span>';
acc.aihomnt.slot = 8;
acc.aihomnt.stype = 3;
acc.aihomnt.oneq = function () { }
acc.aihomnt.onuneq = function () { }

acc.gourd1 = new Eqp(); acc.gourd1.id = 40075;
acc.gourd1.name = 'Gourd';
acc.gourd1.desc = 'One of the oldest crop plants in existence. You can use it to store water... or sake' + dom.dseparator + '<span style="color:chartreuse">Max SAT +150</span>';
acc.gourd1.slot = 8;
acc.gourd1.stype = 3;
acc.gourd1.oneq = function () { you.sat += 150; you.sata += 150; }
acc.gourd1.onuneq = function () { you.sat -= 150; you.sata -= 150; }

acc.stupa = new Eqp(); acc.stupa.id = 40076;
acc.stupa.name = 'Stupa';
acc.stupa.desc = 'Stupa are long boards placed next to graves to pay respects to the dead. They are usually to be written with an ink brush' + dom.dseparator + '<span style="color:ghostwhite;text-shadow:0px 0px 5px royalblue">Keeps your soul in the mortal world</span><br><span style="color:ghostwhite;text-shadow:0px 0px 5px royalblue">+2% Chance To Avoid Death</span>';
acc.stupa.slot = 8;
acc.stupa.stype = 3;
acc.stupa.oneq = function () { you.res.death -= .02 }
acc.stupa.onuneq = function () { you.res.death += .02 }

acc.wpeny = new Eqp(); acc.wpeny.id = 40077;
acc.wpeny.name = 'Penny of Wealth';
acc.wpeny.desc = 'An extra shiny penny, that looks like it\'s made of gold. It probably isn\'t, but you feel richer just by holding it' + dom.dseparator + '<span style="color:orange">Picking a coin gives you an extra coin<br><span style="color:gold">Greed EXP gain +20%</span></span>';
acc.wpeny.slot = 8;
acc.wpeny.stype = 3;
acc.wpeny.oneq = function () { skl.gred.p += .2; you.mods.wthexrt++ }
acc.wpeny.onuneq = function () { skl.gred.p -= .2; you.mods.wthexrt-- }

acc.rngsgn = new Eqp(); acc.rngsgn.id = 40078;
acc.rngsgn.name = 'Signet Ring';
acc.rngsgn.desc = 'A gold and silver ring with a wide stamp attached to the band. A long time ago, the stamp was legible, but now the pattern is too worn to discern its former use';
acc.rngsgn.slot = 8;
acc.rngsgn.stype = 3;

acc.fmlim = new Eqp(); acc.fmlim.id = 40079; acc.fmlim.important = true;
acc.fmlim.name = 'Family Heirloom';
acc.fmlim.desc = 'A treasure passed down in your family. This plain looking medalion doesn\'t look anything special, it appears incomplete with an empty socket in the center. You fail to see any value in this piece of junk' + dom.dseparator + '<span style="color:chartreuse">MAX HP +2</span>'
acc.fmlim.slot = 8;
acc.fmlim.stype = 3;
acc.fmlim.oneq = function () { you.hpa += 2 }
acc.fmlim.onuneq = function () { you.hpa -= 2 }
acc.fmlim.onGet = function () { if (acc.strawp.have) { giveRcp(rcp.fmlim2); this.onGet = function () { } } }

acc.pbrs = new Eqp(); acc.pbrs.id = 40080;
acc.pbrs.name = 'Pet Brush';
acc.pbrs.desc = 'Special brush designed for tending to fur of the animals. Cats especially enjoy being brushed by this tool' + dom.dseparator + '<span style="color:deeppink">Petting EXP gain +200%</span>';
acc.pbrs.slot = 8;
acc.pbrs.stype = 3;
acc.pbrs.oneq = function () { skl.pet.p += 2; }
acc.pbrs.onuneq = function () { skl.pet.p -= 2; }

acc.clrpin = new Eqp(); acc.clrpin.id = 40081;
acc.clrpin.name = 'Clover Pin';
acc.clrpin.desc = 'Small golden pin in a shape of a clover. Senior gamblers wear these pins to display their prestige and status' + dom.dseparator + '<span style="color:gold">Minor chance for an enemy dropped item to duplicate</span>';
acc.clrpin.slot = 8;
acc.clrpin.stype = 3;
acc.clrpin.rar = 4;
acc.clrpin.oneq = function () { you.mods.lkdbt += .01; }
acc.clrpin.onuneq = function () { you.mods.lkdbt -= .01; }

acc.prtckst = new Eqp(); acc.prtckst.id = 40082;
acc.prtckst.name = 'Portable Cooking Set';
acc.prtckst.desc = 'Box-sized kit containing every crucial cooking utencil you may need for comfortable and effortless foodmaking session anywhere at any time, complimented with variously sized knives, cutting boards, pots and even everlasting fire burner' + dom.dseparator + '<span style="color:deeppink">Cooking EXP gain +200%</span><br><span style="color:springgreen">Allows cooking everywhere</span>';
acc.prtckst.slot = 8;
acc.prtckst.stype = 3;
acc.prtckst.rar = 3;
acc.prtckst.oneq = function () { skl.cook.p += 2; you.mods.ckfre += 1 }
acc.prtckst.onuneq = function () { skl.cook.p -= 2; you.mods.ckfre -= 1 }

acc.ubrlc = new Eqp(); acc.ubrlc.id = 40083;
acc.ubrlc.name = 'Umbrella';
acc.ubrlc.desc = 'Light umbrella with a cloud pattern. Young masters and ladies carry these to display their carefree nature' + dom.dseparator + '<span style="color:cyan;background-color:blue">Prevents you from getting rained on</span>';
acc.ubrlc.slot = 8;
acc.ubrlc.stype = 3;
acc.ubrlc.oneq = function () { you.mods.rnprtk += 1; }
acc.ubrlc.onuneq = function () { you.mods.rnprtk -= 1; }

acc.sltbg = new Eqp(); acc.sltbg.id = 40084;
acc.sltbg.name = 'Bag of Salt';
acc.sltbg.desc = 'Little canvas bag filled with salt. Commoners believe that spreading salt can repel evil, so you can keep some on yourself for protection' + dom.dseparator + '<span style="color:tomato;text-shadow:blueviolet 0px 0px 5px">Undead Class DEF +12</span><br><span style="color:tomato;text-shadow:blueviolet 0px 0px 5px">Undead Class ATK +8</span>';
acc.sltbg.slot = 8;
acc.sltbg.stype = 3;
acc.sltbg.oneq = function () { you.cmaff[2] += 12; you.maff[2] += 8 }
acc.sltbg.onuneq = function () { you.cmaff[2] -= 12; you.maff[2] -= 8 }

acc.chlsbd = new Eqp(); acc.chlsbd.id = 40085;
acc.chlsbd.name = 'Chalice';
acc.chlsbd.desc = function (x, y) {
	return '<div style="color:red">Collected blood: <br><span>0ml</span><span style="display:inline-table;width:130px;border:1px solid darkgrey;margin: 7px;background:linear-gradient(90deg,#690000,red)"><span style="display:block;background-color:black;float:right;width:' + (100 - x.data.bld / x.data.bldmax * 100) + '%">　</span></span><span>' + x.data.bldmax + 'ml</span></div>'
}
acc.chlsbd.slot = 8; acc.chlsbd.data.bld = 0; acc.chlsbd.data.bldmax = 200;
acc.chlsbd.stype = 3;
acc.chlsbd.onKill = function (x, y) { if ((x.type === 1 || x.type === 0 || x.type === 5) && x.blood) { if (y.data.bld + x.blood * 5 > y.data.bldmax) y.data.bld = y.data.bldmax; else y.data.bld += x.blood * 5 } }
acc.chlsbd.oneq = function () { checksd.push({ f: this.onKill, o: this }) }
acc.chlsbd.onuneq = function () { checksd.splice(checksd.indexOf({ f: this.onKill, o: this }), 1) }

acc.otpin = new Eqp(); acc.otpin.id = 40086;
acc.otpin.name = 'Sword Medal';
acc.otpin.desc = 'Wearable ornament in the shape of a sword. Even if ranking the lowest, it serves as a proof of one\'s affiliation with dojo and martial arts in general' + dom.dseparator + '<span style="color:magenta"> EXP Gain +25%<br>All masteries EXP Gain +10%</span>';
acc.otpin.slot = 8;
acc.otpin.stype = 3;
acc.otpin.oneq = function () { skl.unc.p += .1; skl.srdc.p += .1; skl.knfc.p += .1; skl.axc.p += .1; skl.plrmc.p += .1; skl.stfc.p += .1; skl.bwc.p += .1; skl.hmrc.p += .1; you.exp_t += .25 }
acc.otpin.onuneq = function () { skl.unc.p -= .1; skl.srdc.p -= .1; skl.knfc.p -= .1; skl.axc.p -= .1; skl.plrmc.p -= .1; skl.stfc.p -= .1; skl.bwc.p -= .1; skl.hmrc.p -= .1; you.exp_t -= .25 }

acc.fmlim2 = new Eqp(); acc.fmlim2.id = 40087; acc.fmlim2.important = true;
acc.fmlim2.name = 'Family Heirloom+';
acc.fmlim2.desc = 'You reinforced your family pendant\'s string with straw to prevent possible breaking. It looks even more lame like this' + dom.dseparator + '<span style="color:chartreuse">MAX HP +5<br>Max SAT +25<br>SPD +1</span>'
acc.fmlim2.slot = 8;
acc.fmlim2.stype = 3;
acc.fmlim2.oneq = function () { you.hpa += 5; you.sata += 25; you.spda += 1 }
acc.fmlim2.onuneq = function () { you.hpa -= 5; you.sata -= 25; you.spda -= 1 }

acc.gpin = new Eqp(); acc.gpin.id = 40088;
acc.gpin.name = 'Fighter Insignia';
acc.gpin.desc = 'Ring tempered by unending fighter spirit, was formerly owned by a rookie knight' + dom.dseparator + '<span style="color:chartreuse">STR +20<br>AGL +5</span>'
acc.gpin.slot = 8;
acc.gpin.stype = 3;
acc.gpin.oneq = function () { you.stra += 20; you.agla += 5 }
acc.gpin.onuneq = function () { you.stra -= 20; you.agla -= 5 }

acc.ndlb = new Eqp(); acc.ndlb.id = 40089;
acc.ndlb.name = 'Wooden Needle';
acc.ndlb.desc = 'Very primitive needle crafted from tough wood. Despite its simplicity, the craftsmanship is quiet nice' + dom.dseparator + '<span style="color:magenta">Tailoring EXP Gain +10%</span><br><br><small style="color:deeppink">Tailoring quality:<span style="color:orange"> 1</span></small>'
acc.ndlb.slot = 8; acc.ndlb.tlrq = 1;
acc.ndlb.stype = 3;
acc.ndlb.oneq = function () { skl.tlrng.p += .1 }
acc.ndlb.onuneq = function () { skl.tlrng.p -= .1 }

/*Orlandu - "Actonite containing a fragment of Orlandu's skeleton"
Ogimus - "Amethyst containing Ogmious the Guardian's soul"
Balvus - "Chiastrite containing the ashes of Balvus"
Beowulf - "Moon Zircon"
Sigguld - "Fire agate with the soul of Sigguld the Dragoon"
Altema - "Garnet containing Altema the Fallen's spirit"
Haeralis - "Star sapphire with the power of Haeralis the Brave"
Orion - "Black coral holding the hair of Orion the Beast"
Iocus - "Lazurite containing St. Iocus's prayer"
Trinity - "Jade containing the Nordic holy spirits"
Dragonite - "Serpentine containing a dragon's power"
Demonia - "Blood opal containing the blood of devils"
 
suffering
resentment
*/

////dss////
wpn.stk1.dss = [{ item: item.wdc, amount: 2, q: 1.5, max: 5 }]
wpn.knf1.dss = [{ item: item.wdc, amount: 1, q: 1, max: 2 }]
item.fsh1.dss = [{ item: item.fsh2, amount: 1 }]
eqp.bnd.dss = eqp.pnt.dss = eqp.brc.dss = eqp.vst.dss = [{ item: item.cclth, amount: 1, q: .5, max: 2 }]
eqp.tnc.dss = [{ item: item.cclth, amount: 2 }]
item.dfish.dss = [{ item: item.fbait1, amount: 1, q: .75, max: 3 }]
item.cclth.dss = [{ item: item.thrdnl, amount: 1, q: 1, max: 2 }]
item.dmice1.dss = [{ item: item.sbone, amount: 1, q: .6, max: 3 }]
item.dbdc1.dss = [{ item: item.sbone, amount: 1, q: .5, max: 2 }]

////misc////
global.wdrop = [{ item: item.lckl, c: .0000048 }];
global.rdrop = [ // g f e 
	[{ item: item.lsrd, c: .00026 }],
	[{ item: item.lsrd, c: .0005 }],
	[{ item: item.lsrd, c: .00098 }, { item: item.lsstn, c: .00023 }],
	[], [], [], []];
global.achchk = [//1 - you die, 2 - enemy dies
	[
		function (x) { if (ttl.ddw.have === false) { if ((x.id === 103 || x.id === 102) && x.lvl === 1) { giveTitle(ttl.ddw) } } }
	],
	[
		function (x) { if (ttl.kill1.have === false) { if (global.stat.akills >= 10000) { giveTitle(ttl.kill1) } } },
		function (x) { if (ttl.kill2.have === false) { if (global.stat.akills >= 50000) { giveTitle(ttl.kill2) } } },
		function (x) { if (ttl.kill3.have === false) { if (global.stat.akills >= 200000) { giveTitle(ttl.kill3) } } },
		function (x) { if (ttl.kill4.have === false) { if (global.stat.akills >= 1000000) { giveTitle(ttl.kill4) } } },
		function (x) { if (ttl.kill5.have === false) { if (global.stat.akills >= 5000000) { giveTitle(ttl.kill5) } } },
	]
];
global.monchk = [
	function (x) { if (ttl.mone1.have === false) { if (global.stat.moneyg >= GOLD) { giveTitle(ttl.mone1) } } },
	//  function(x){if(ttl.mone2.have===false){if(global.stat.moneyg>=GOLD){giveTitle(ttl.mone2)}}},
	//  function(x){if(ttl.mone3.have===false){if(global.stat.moneyg>=GOLD){giveTitle(ttl.mone3)}}},
];
global.ttlschk = [
	function (x) { if (ttl.ttsttl1.have === false) { if (global.titles.length >= 10) { giveTitle(ttl.ttsttl1) } } },
	function (x) { if (ttl.ttsttl2.have === false) { if (global.titles.length >= 25) { giveTitle(ttl.ttsttl2) } } },
	function (x) { if (ttl.ttsttl3.have === false) { if (global.titles.length >= 50) { giveTitle(ttl.ttsttl3) } } },
];

global.shptchk = [
	function (x) { if (ttl.shpt1.have === false) { if (global.stat.buyt >= 500) { giveTitle(ttl.shpt1) } } },
	//  function(x){if(ttl.shpt2.have===false){if(global.stat.buyt>=5000){giveTitle(ttl.shpt2)}}},
	//  function(x){if(ttl.shpt3.have===false){if(global.stat.buyt>=10000){giveTitle(ttl.shpt3)}}},
];
global.cptchk = [
	function (x) { if (ttl.cpet1.have === false) { if (global.stat.cat_c >= 9999) { giveTitle(ttl.cpet1) } } },
];
global.htrchl = [
	function (x) { if (ttl.hstr1.have === false) { if (x >= 100) { giveTitle(ttl.hstr1) } } },
	function (x) { if (ttl.hstr2.have === false) { if (x >= 250) { giveTitle(ttl.hstr2) } } },
	function (x) { if (ttl.hstr3.have === false) { if (x >= 500) { giveTitle(ttl.hstr3) } } },
];
global.nethmchk = [
	function (x) { if (ttl.neet.have === false) { if (global.stat.athmec >= YEAR) { giveTitle(ttl.neet) } } },
	function (x) { if (ttl.neet2.have === false) { if (global.stat.athmec >= YEAR * 5) { giveTitle(ttl.neet2) } } },
	function (x) { if (ttl.neet3.have === false) { if (global.stat.athmec >= YEAR * 10) { giveTitle(ttl.neet3) } } },
];

///////////////////////////////////////////
//U
///////////////////////////////////////////

function You() {
	this.name = 'You';
	this.title = ttl.new;
	this.desc = 'This is you';
	this.id = -1;
	this.type = 0;
	this.rank = function () { return Math.ceil(50000000000000 * (1 / (((this.agl + this.str + (you.eqp[0].str) + this.spd + this.int) ** 2) / Math.sqrt((this.agl + this.str + this.int + (this.spd / this.lvl)) * 512 / (this.luck * .1 + 1))))) }; this.rnk = 0;
	this.lvl = 1;
	this.exp = 0;
	this.expnext = function () { return this.lvl * ((this.lvl * 2) ** 2) + (this.lvl ** 2) }; this.expnext_t = this.expnext();
	this.exp_t = 1;
	this.efficiency = function () { let g = skl.fmn.use(); g = g >= .6 ? .6 : g; let e = (.8 - g) * this.sat / this.satmax + (.2 + g) + you.mods.sbonus; return e < 0 ? 0 : e }
	this.mods = { sbonus: 0, sdrate: .1, infsrate: 1, enmondren: 0, enmondrts: 1, ddgmod: 0, rdgrt: 1, cpwr: 1, crflt: 0, wthexrt: 0, tstl: 0, lkdbt: 0, ckfre: 0, rnprtk: 0, light: 0, undc: 0, petxp: .005, stdstps: 1, survinf: 0, runerg: 1 };
	this.ki = new Object();
	this.sat = this.satmax = this.sat_r = 200;
	this.hpmax = 39;
	this.hp = this.hp_r = 39;
	this.str = this.str_r = this.agl = this.agl_r = this.int = this.int_r = this.spd = this.spd_r = this.str_d = this.agl_d = this.int_d = 1;
	this.stra = this.agla = this.inta = this.spda = this.hpa = this.sata = 0; this.strm = this.intm = this.spdm = this.aglm = this.hpm = this.satm = 1
	this.stat_p = [1, 1, 1, 1];
	this.res = { poison: 1, burn: 1, frost: 1, paralize: 1, blind: 1, sleep: 1, curse: 1, death: 1, bleed: 1, ph: 1, venom: 1, fpoison: 1 };
	this.cls = [0, 0, 0];
	this.ccls = [0, 0, 0];
	this.aff = [0, 0, 0, 0, 0, 0, 0];
	this.maff = [0, 0, 0, 0, 0, 0, 0];
	this.caff = [0, 0, 0, 0, 0, 0, 0];
	this.cmaff = [0, 0, 0, 0, 0, 0, 0];
	this.dmlt = 1;
	this.luck = 1; this.karma = 0;
	this.crt = .008;
	this.wealth = 0;
	this.eva = 0;
	this.atkmode = 1;
	this.alive = true;
	this.eqp = [eqp.dummy, eqp.dummy, eqp.dummy, eqp.dummy, eqp.dummy, eqp.dummy, eqp.dummy, eqp.dummy, eqp.dummy, eqp.dummy];
	this.eff = [];
	this.skls = [];
	this.drop = [{ item: item.death_b, chance: 1 }];
	this.onDeath = function (killer) {
		if (you.res.death < 1 && random() >= you.res.death) { msg('You avoid death...', 'lightgrey'); you.hp = Math.ceil(you.hpmax * .1) } else {
			callback.onDeath.fire(this, killer)
			this.alive = false; this.hp = 1; if (!killer) killer = creature.default;
			if (global.current_a.id !== act.default.id) deactivateAct(global.current_a); global.flags.work = false
			you.sat / you.satmax > .3 ? giveSkExp(skl.dth, killer.rnk * 10 + 1) : giveSkExp(skl.dth, killer.rnk + 1);
			if (this.sat > 0) this.sat *= (.55 * (1 - skl.dth.use())); giveItem(item.death_b);
			dom.d5_1_1.update(); global.s_l = 0; global.stat.deadt++;
			for (let x in global.achchk[0]) global.achchk[0][x](killer);
			clearInterval(timers.rdng); clearInterval(timers.rdngdots); global.flags.rdng = false; clearInterval(timers.job1t); clearInterval(timers.bstmonupdate)
			for (let o in this.eff) removeEff(this.eff[o])
			global.flags.btl = false; global.flags.civil = true; global.current_z.onDeath(); if (sector.home.data.smkp > 0) { smove(chss.lsmain1, false); msg('You ran out of your smoked up house', 'grey') } else smove(chss.hbed, false); global.current_z = area.nwh; dom.hit_c(); dom.d7m.update()
		}
	}
	this.onDeathE = function () { }
	this.ai = function () { }
	this.battle_ai = function (x, y, z) { return attack(x, y) }
	this.stat_r = function () {
		this.stre = this.inte = this.agle = this.spde = this.sate = this.hpe = 1;
		for (let idx in this.eff) this.eff[idx].mods();
		this.str = (this.str_r + this.stra) * this.strm * this.stre; this.str_d = this.str
		this.int = (this.int_r + this.inta) * this.intm * this.inte; this.int_d = this.int
		this.agl = (this.agl_r + this.agla) * this.aglm * this.agle; this.agl_d = this.agl
		this.spd = (this.spd_r + this.spda) * this.spdm * this.spde; this.spd_d = this.spd
		this.hpmax = Math.ceil((this.hp_r + this.hpa) * this.hpm * this.hpe); this.satmax = Math.ceil((this.sat_r + this.sata) * this.satm * this.sate);
		this.str_d += this.eqp[0].str;
		this.dmlt = 1;
		for (let obj in this.eqp) {
			this.int_d += this.eqp[obj].int;
			this.agl_d += this.eqp[obj].agl;
			this.spd += this.eqp[obj].spd;
		}
		for (let idx in this.eff) {
			if (this.eff[idx].type === 2) { this.eff[idx].un(); this.eff[idx].use(this.eff[idx].y, this.eff[idx].z) };
		} dom.d6.update(); update_db(); if (you.hp > you.hpmax) you.hp = you.hpmax; dom.d5_1_1.update();
	}
} you = new You(); you.eqp[0].ctype = 2; giveTitle(ttl.new, true);
you.ai = function () {
	//if(you.hp*100/you.hpmax<50) item.hrb1.use();
	//if(you.sat*100/you.satmax<90) item.appl.use();
}

///////////////////////////////////////////
//CRT
///////////////////////////////////////////

function Creature() {
	this.name = 'Nothing';
	this.desc = 'Empty space';
	this.type = 3; //h,b,u,e,p,d
	this.id = 0;
	this.lvl = 1;
	this.exp = 1;
	this.stat_p = [1, 1, 1, 1]; //hp, str, agl, int
	this.eqp = [eqp.dummy, eqp.dummy];
	this.cls = [0, 0, 0];
	this.aff = [0, 0, 0, 0, 0, 0, 0]; //phy air eth fir wtr lgt drk
	this.res = { poison: 1, burn: 1, frost: 1, paralize: 1, blind: 1, sleep: 1, curse: 1, death: 1, bleed: 1, ph: 1, venom: 1, fpoison: 1 };
	this.atype = 0; this.ctype = 0;
	this.atkmode = 1;
	this.hp = this.hp_r = this.hpmax = 17;
	this.str = this.str_r = this.agl = this.agl_r = this.int = this.int_r = this.spd = this.spd_r = 1;
	this.stra = this.agla = this.inta = this.spda = this.hpa = 0; this.strm = this.intm = this.spdm = this.aglm = this.hpm = 1
	this.crt = .008;
	this.dmlt = 1;
	this.rnk = 0;
	this.pts = 1;
	this.eva = 0;
	this.data = { lstdmg: 0, oneshot: true };
	this.stat_r = function () {
		this.stre = this.inte = this.agle = this.spde = this.sate = this.hpe = 1;
		for (let idx in this.eff) this.eff[idx].mods();
		this.str = (this.str_r + this.stra) * this.strm * this.stre; this.str_d = this.str
		this.int = (this.int_r + this.inta) * this.intm * this.inte; this.int_d = this.int
		this.agl = (this.agl_r + this.agla) * this.aglm * this.agle; this.agl_d = this.agl
		this.spd = (this.spd_r + this.spda) * this.spdm * this.spde; this.spd_d = this.spd
		this.hpmax = Math.ceil((this.hp_r + this.hpa) * this.hpm * this.hpe);
		this.dmlt = 1;
		for (let idx in this.eff) {
			if (this.eff[idx].type === 2) { this.eff[idx].un(); this.eff[idx].use(this.eff[idx].y, this.eff[idx].z) };
		} update_m(); if (this.hp > this.hpmax) this.hp = this.hpmax
	}
	this.alive = true;
	this.eff = [];
	this.drop = [];
	this.onDeath = function (killer) {
		callback.onDeath.fire(this, killer)
		this.hp = 0; this.alive = false; let tt = 0;
		for (let obj in global.bestiary) {
			if (global.bestiary[obj].id === this.id) { global.bestiary[obj].kills++; break }
			if (++tt === global.bestiary.length) global.bestiary.push({ id: this.id, kills: 1 });
		}
		global.stat.akills++; global.stat.pts += this.pts; if (you.eqp[0].id !== 10000) you.eqp[0].data.kills ? you.eqp[0].data.kills++ : (you.eqp[0].data.kills = 1);
		if (this.type !== 2 && this.type !== 4) global.spirits++; else if (this.type === 4) global.spirits--;
		if (global.flags.m_blh === false) msg(this.name + ' died ', 'burlywood');
		global.flags.civil = true; global.flags.btl = false; let df = 1; let ld = this.lvl - you.lvl; if (ld < 0) df = Math.sqrt(Math.abs(ld)) + Math.abs(ld) * .1 * Math.abs(ld);
		giveExp(this.exp + (this.exp * this.lvl / 10 << 0) / df); dropC(this); global.s_l = 0;
		if (you.mods.enmondren > 0) if (random() < you.mods.enmondren) { let aam = 1 + rand(this.lvl << 0, (this.lvl / 4) << 0) ** (1 + (this.rnk / 5) << 0) * you.mods.enmondrts; giveWealth(rand(aam * .5 << 0 || 1, aam * 1.5 << 0 || 1)); }
		if (--global.current_z.size > 0) area_init(global.current_z); else { if (global.current_z.size <= -1) area_init(global.current_z); else { msg('Area cleared', 'orange'); global.current_z.onEnd(); global.flags.civil = true; global.flags.btl = false; } };
		if (global.flags.to_pause === true) global.flags.btl = false;
		wpndiestt(killer, this); if (this.blood) global.stat.bloodt += this.blood;
		for (let a in checksd) checksd[a].f(this, checksd[a].o);
		for (let x in global.achchk[1]) global.achchk[1][x](killer);
		dom.d5_1_1m.update(); dom.d7m.update();
		kill(this)
	};
	this.onDeathE = function () {
		giveSkExp(skl.war, (this.rnk * 2 - 1) * (1 + this.lvl * .05) * .1);
	}
	this.battle_ai = function (x, y, z) {
  /*me = this.data;
    if(!me.lasthp) me.lasthp=this.hp;
    me.cdmg = me.lasthp-this.hp;
    me.avgdmg = (me.cdmg+me.lstdmg)/2;
    me.lasthp=this.hp; me.lstdmg=me.cdmg;
    if(this.hp-me.avgdmg<=0) {msg('too scary, running away'); global.flags.btlinterrupt=true;}
    */return attack(x, y)
	}
} creature.default = new Creature(); global.current_m = creature.default;

creature.bat = new Creature();
creature.bat.name = 'Bat'; creature.bat.id = 101;
creature.bat.desc = 'Aggressive little bats living in the dark';
creature.bat.type = 1;
creature.bat.exp = 8;
creature.bat.hp_r = 39;
creature.bat.blood = .0852;
creature.bat.stat_p = [.5, 1, 1.5, .5];
creature.bat.aff = [-5, 25, -5, -5, 10, -5, 5];
creature.bat.cls = [-4, -7, -3];
creature.bat.eqp[0].aff = [0, 12, -10, 0, 0, -5, 5];
creature.bat.eqp[0].cls = [1, 1, 0];
creature.bat.atype = 1; creature.bat.ctype = 1;
creature.bat.str_r = 2;
creature.bat.agl_r = 10;
creature.bat.spd_r = 2;
creature.bat.drop = [{ item: item.sbone, chance: .1 }, { item: item.appl, chance: .06 }];
creature.bat.rnk = 3;
creature.bat.pts = 6;

creature.cbat = new Creature(); creature.cbat.id = 109;
creature.cbat.name = 'Cave bat';
creature.cbat.desc = 'Large, agile bats that swooop down to strike from the air';
creature.cbat.drop = [];

creature.stirge = new Creature(); creature.stirge.id = 110;
creature.stirge.name = 'Stirge';
creature.stirge.desc = 'Giant vampire bats rumored to drain a victim\'s life in a single blow';
creature.stirge.drop = [];

creature.spd1 = new Creature();
creature.spd1.name = 'Attic spider'; creature.spd1.id = 104;
creature.spd1.desc = 'Small docile spiders who live in damp and dark places';
creature.spd1.type = 1;
creature.spd1.exp = 8;
creature.spd1.hp_r = 26;
creature.spd1.stat_p = [.6, 1.1, 1.6, 1];
creature.spd1.aff = [2, 5, 10, -35, 10, -5, 15];
creature.spd1.cls = [4, 6, -6];
creature.spd1.eqp[0].aff = [3, -5, 5, 0, 0, -5, 5];
creature.spd1.eqp[0].cls = [2, 1, 1];
creature.spd1.str_r = 3;
creature.spd1.agl_r = 8;
creature.spd1.spd_r = 2;
creature.spd1.rnk = 3;
creature.spd1.pts = 5;
creature.spd1.drop = [{ item: item.ltcc, chance: .01 }, { item: item.thrdnl, chance: .1 }];
creature.spd1.battle_ai = function (x, y, z) {
	if (random() <= .3) return attack(x, y, abl.pbite, 3);
	return attack(x, y)
}

creature.tdummy = new Creature(); creature.tdummy.id = 103;
creature.tdummy.name = 'Training dummy';
creature.tdummy.desc = 'He\'s made of fabric';
creature.tdummy.drop = [{ item: wpn.knf1, chance: .01, cond: () => { return you.lvl <= 20 } }, { item: eqp.brc, chance: .03, cond: () => { return you.lvl <= 20 } }, { item: item.hrb1, chance: .02 }];
creature.tdummy.aff = [0, 0, 15, -25, -5, -666, 666];
creature.tdummy.stat_p = [.1, .5, .4, .2]
creature.tdummy.ctype = 2;
creature.tdummy.int_r = 0;
creature.tdummy.rnk = 1;
creature.tdummy.battle_ai = function (x, y, z) {
	if (random() <= .001) return attack(x, y, abl.rstab);
	return attack(x, y)
}
creature.tdummy.onDeathE = function () { };

creature.sdummy = new Creature(); creature.sdummy.id = 102;
creature.sdummy.name = 'Straw dummy';
creature.sdummy.desc = 'He\'s made of straw';
creature.sdummy.drop = [{ item: item.sstraw, chance: .085 }, { item: item.hrb1, chance: .02 }];
creature.sdummy.aff = [0, 0, 15, -25, -5, -666, 666];
creature.sdummy.stat_p = [.25, .6, .3, .2];
creature.sdummy.ctype = 2;
creature.sdummy.int_r = 0;
creature.sdummy.rnk = 1;
creature.sdummy.battle_ai = function (x, y, z) {
	if (random() <= .001) return attack(x, y, abl.rstab);
	return attack(x, y)
}
creature.sdummy.onDeathE = function () { };

creature.wdummy = new Creature(); creature.wdummy.id = 112;
creature.wdummy.name = 'Wooden dummy';
creature.wdummy.desc = 'He\'s made of wood';
creature.wdummy.stat_p = [.4, .8, .12, .2];
creature.wdummy.aff = [0, 0, 15, -30, 20, -666, 666];
creature.wdummy.cls = [-1, 2, 4];
creature.wdummy.str_r = 3;
creature.wdummy.ctype = 2;
creature.wdummy.rnk = 1;
creature.wdummy.drop = [{ item: eqp.pnt, chance: .008, cond: () => { return you.lvl <= 20 } }, { item: eqp.vst, chance: .007, cond: () => { return you.lvl <= 20 } }, { item: eqp.bnd, chance: .01, cond: () => { return you.lvl <= 20 } }, { item: item.wdc, chance: .03 }, { item: wpn.wsrd2, chance: .002, cond: () => { return you.lvl <= 20 } }];
creature.wdummy.battle_ai = function (x, y, z) {
	if (random() <= .001) return attack(x, y, abl.rstab);
	return attack(x, y)
}
creature.wdummy.onDeathE = function () { };

creature.puppet = new Creature(); creature.puppet.id = 105;
creature.puppet.name = 'Puppet';
creature.puppet.desc = 'Animated doll with agile movements';
creature.puppet.drop = [];
creature.puppet.battle_ai = function (x, y, z) { }

creature.bpuppet = new Creature(); creature.bpuppet.id = 106;
creature.bpuppet.name = 'Battle Puppet';
creature.bpuppet.desc = 'Animated doll with martial ability';
creature.bpuppet.drop = [];
creature.bpuppet.battle_ai = function (x, y, z) { }

creature.doll = new Creature(); creature.doll.id = 107;
creature.doll.name = 'Doll';
creature.doll.desc = 'Child\'s toy possessed by an evil spirit';
creature.doll.drop = [];
creature.doll.battle_ai = function (x, y, z) { }

creature.ndoll = new Creature(); creature.ndoll.id = 108;
creature.ndoll.name = 'Necro doll';
creature.ndoll.desc = 'Evil Dolls used in dark rituals';
creature.ndoll.drop = [];
creature.ndoll.battle_ai = function (x, y, z) { }

creature.cdoll = new Creature(); creature.cdoll.id = 111;
creature.cdoll.name = 'Quicksilver';
creature.cdoll.desc = 'Dolls possessed by the souls of children who lost their lives to war or illness';
creature.cdoll.drop = [];
creature.cdoll.battle_ai = function (x, y, z) { }

creature.zomb1 = new Creature(); creature.zomb1.id = 113;
creature.zomb1.name = 'Zombie';
creature.zomb1.desc = 'Once the inhabitants of the surface, zombies emerge from the Dark to attack the living';

creature.mumy = new Creature(); creature.mumy.id = 114;
creature.mumy.name = 'Mummy';
creature.mumy.desc = 'Ancient corpses infused with the power of Dark';

creature.ghl = new Creature(); creature.ghl.id = 115;
creature.ghl.name = 'Ghoul';
creature.ghl.desc = 'Ghouls lurk in the Catacombs, longing for human flesh. Attacking their heads proves effective';

creature.ght = new Creature(); creature.ght.id = 116;
creature.ght.name = 'Ghast';
creature.ght.desc = 'The living dead, given power by demons of the Underworld';

creature.zmbf = new Creature(); creature.zmbf.id = 117;
creature.zmbf.name = 'Zombie Fighter';
creature.zmbf.desc = 'Corpses of common soldiers, brought back to life through the Dark\'s taint';

creature.zmbk = new Creature(); creature.zmbk.id = 118;
creature.zmbk.name = 'Zombie Knight';
creature.zmbk.desc = 'Zombies of the Knights of the Cross, still in possession of potent martial skills';

creature.zmbm = new Creature(); creature.zmbm.id = 119;
creature.zmbm.name = 'Zombie Mage';
creature.zmbm.desc = 'Zombies of Dark mages, who employ powerful offensive magic';

creature.skl = new Creature();
creature.skl.name = 'Skeleton'; creature.skl.id = 120;
creature.skl.desc = 'Skeletal remains of zombie corpses. They lurk in darkness to attack the living';
creature.skl.type = 2;
creature.skl.exp = 15;
creature.skl.hp_r = 132;
creature.skl.stat_p = [1.3, 1.15, 1.05, .1];
creature.skl.aff = [12, 20, -4, -11, 31, -33, 51];
creature.skl.cls = [0, 9, -16];
creature.skl.eqp[0].aff = [8, 20, -4, -11, 31, -33, 51];
creature.skl.eqp[0].cls = [2, 5, 5];
creature.skl.ctype = 1;
creature.skl.str_r = 17;
creature.skl.agl_r = 19;
creature.skl.spd_r = 2;
creature.skl.drop = [];
creature.skl.rnk = 7;
creature.skl.pts = 17;

creature.slm1 = new Creature();
creature.slm1.name = 'Blue Slime'; creature.slm1.id = 121;
creature.slm1.desc = 'Lesser slimes, devoid of any senses. They survive by absorbing debris from the ground';
creature.slm1.type = 1;
creature.slm1.exp = 3;
creature.slm1.hp_r = 65;
creature.slm1.stat_p = [0.7, .8, 1.5, .3];
creature.slm1.aff = [5, 5, 15, -20, -15, 25, 34]
creature.slm1.cls = [5, 5, 20];
creature.slm1.eqp[0].aff = [2, 5, 0, -2, 4, 0, 0];
creature.slm1.eqp[0].cls = [1, 1, 1];
creature.slm1.ctype = 2;
creature.slm1.str_r = 2;
creature.slm1.agl_r = 5; creature.slm1.eva = 6;
creature.slm1.spd_r = 1;
creature.slm1.drop = [{ item: item.watr, chance: .01 }, { item: item.slm, chance: .03 }, { item: item.jll, chance: .01 }];
creature.slm1.rnk = 2;
creature.slm1.pts = 3;

creature.slm2 = new Creature();
creature.slm2.name = 'Green Slime'; creature.slm2.id = 122;
creature.slm2.desc = 'Small forest slimes. They hide in leaves and grass';
creature.slm2.type = 1;
creature.slm2.exp = 4;
creature.slm2.hp_r = 70;
creature.slm2.stat_p = [0.75, .85, 1.5, .3];
creature.slm2.aff = [5, 5, 15, -20, -15, 25, 34]
creature.slm2.cls = [4, 4, 22];
creature.slm2.eqp[0].aff = [2, 12, 5, -12, 6, 0, 0];
creature.slm2.eqp[0].cls = [2, 2, 2];
creature.slm2.ctype = 1;
creature.slm2.str_r = 3;
creature.slm2.agl_r = 5; creature.slm2.eva = 6;
creature.slm2.spd_r = 1;
creature.slm2.drop = [{ item: item.watr, chance: .01 }, { item: item.slm, chance: .04 }, { item: item.jll, chance: .01 }, { item: acc.jln2, chance: .0005 },];
creature.slm2.rnk = 2;
creature.slm2.pts = 3;

creature.rbt1 = new Creature();
creature.rbt1.name = 'Wild Rabbit'; creature.rbt1.id = 123;
creature.rbt1.desc = 'Docile rabbits, often found in plains and woods. They\'re difficult to catch';
creature.rbt1.type = 1;
creature.rbt1.exp = 5;
creature.rbt1.stat_p = [1, .9, 2, .3];
creature.rbt1.aff = [6, 15, 15, -10, 16, 33, 2]
creature.rbt1.cls = [4, -2, 5];
creature.rbt1.eqp[0].aff = [5, 6, 6, 0, 2, 0, 0];
creature.rbt1.eqp[0].cls = [2, 3, 1];
creature.rbt1.ctype = 1;
creature.rbt1.hp_r = 55;
creature.rbt1.blood = .108
creature.rbt1.str_r = 2;
creature.rbt1.agl_r = 10; creature.rbt1.eva = 40;
creature.rbt1.spd_r = 2;
creature.rbt1.drop = [{ item: item.sbone, chance: .1 }, { item: item.rwmt1, chance: .06 }, { item: item.crrt, chance: .04 }, { item: acc.rfot, chance: .00004 }];
creature.rbt1.rnk = 2;
creature.rbt1.pts = 4;

creature.slm3 = new Creature();
creature.slm3.name = 'Cyan Slime'; creature.slm3.id = 124;
creature.slm3.desc = 'Brightly colored slime. It looks like it can perfectly reflect the sky';
creature.slm3.type = 1;
creature.slm3.exp = 8;
creature.slm3.hp_r = 120;
creature.slm3.stat_p = [1.2, 1.2, 2.9, .8];
creature.slm3.aff = [15, 5, 15, -10, -5, 55, 34]
creature.slm3.cls = [9, 9, 24];
creature.slm3.eqp[0].aff = [4, 6, 7, -12, 6, 0, 0];
creature.slm3.eqp[0].cls = [4, 4, 4];
creature.slm3.ctype = 1; creature.slm3.atype = 1;
creature.slm3.str_r = 5;
creature.slm3.agl_r = 8; creature.slm3.eva = 15;
creature.slm3.spd_r = 2;
creature.slm3.drop = [{ item: item.watr, chance: .03 }, { item: item.slm, chance: .05 }, { item: item.jll, chance: .02 }];
creature.slm3.rnk = 3;
creature.slm3.pts = 4;

creature.slm4 = new Creature();
creature.slm4.name = 'Clear Slime'; creature.slm4.id = 125;
creature.slm4.desc = 'Weird transparent slime, bearing no distinct color. They can hide anywhere and are very difficult to notice';
creature.slm4.type = 1;
creature.slm4.exp = 10;
creature.slm4.hp_r = 95;
creature.slm4.stat_p = [1.24, 1.23, 2.97, .82];
creature.slm4.aff = [15, 5, 15, -10, -5, 55, 34]
creature.slm4.cls = [12, 12, 28];
creature.slm4.eqp[0].aff = [4, 9, 7, -12, 12, 0, 0];
creature.slm4.eqp[0].cls = [6, 5, 4];
creature.slm4.ctype = 2; creature.slm4.atype = 4;
creature.slm4.str_r = 9;
creature.slm4.agl_r = 9; creature.slm4.eva = 20;
creature.slm4.spd_r = 2;
creature.slm4.drop = [{ item: item.watr, chance: .035 }, { item: item.slm, chance: .02 }, { item: item.jll, chance: .06 }];
creature.slm4.rnk = 3;
creature.slm4.pts = 5;

creature.kksh = new Creature(); //u
creature.kksh.name = 'Scarecrow'; creature.kksh.id = 126;
creature.kksh.desc = 'Once protector of fields, this figure has turned to evil by the influence of Dark. It hangs still in ambush, waiting for unsuspecting passersby';
creature.kksh.exp = 5;
creature.kksh.hp_r = 100;
creature.kksh.stat_p = [1.1, 1.2, 2.9, .8];
creature.kksh.aff = [15, 5, 15, -10, -5, 55, 34]
creature.kksh.cls = [9, 9, 35];
creature.kksh.eqp[0].aff = [4, 12, 7, -12, 6, 0, 0];
creature.kksh.eqp[0].cls = [5, 5, 5];
creature.kksh.ctype = 1; creature.kksh.atype = 1;
creature.kksh.str_r = 5;
creature.kksh.agl_r = 13;
creature.kksh.spd_r = 2;
creature.kksh.drop = [{ item: item.watr, chance: .03 }, { item: item.slm, chance: .06 }, { item: item.jll, chance: .02 }];
creature.kksh.rnk = 10;

creature.golem1 = new Creature();
creature.golem1.name = 'Straw Golem'; creature.golem1.id = 127;
creature.golem1.desc = 'Big golem composed of straw. These golems are brittle and weak, their main purpose is to assist newbies in training';
creature.golem1.exp = 50;
creature.golem1.hp_r = 500;
creature.golem1.stat_p = [0.05, 0.2, 0.2, 0.2];
creature.golem1.aff = [10, 8, 5, -60, -5, 15, 14]
creature.golem1.cls = [10, 15, 10];
creature.golem1.eqp[0].aff = [9, 5, 25, 6, 6, 2, 13];
creature.golem1.eqp[0].cls = [2, 2, 10];
creature.golem1.ctype = 2;
creature.golem1.str_r = 15;
creature.golem1.agl_r = 30;
creature.golem1.spd_r = 3;
creature.golem1.drop = [{ item: item.sstraw, chance: 1, min: 13, max: 25 }, { item: item.lsrd, chance: 1 }];
creature.golem1.rnk = 4; creature.golem1.un = true;
creature.golem1.pts = 200;

creature.golem2 = new Creature();
creature.golem2.name = 'Reinforced Straw Golem'; creature.golem2.id = 128;
creature.golem2.desc = 'This golem\'s joints have been binded by the rope, giving it sturdier and more stable frame';
creature.golem2.exp = 60;
creature.golem2.hp_r = 700;
creature.golem2.stat_p = [0.06, 0.25, 0.2, 0.25];
creature.golem2.aff = [11, 8, 5, -60, -5, 15, 14]
creature.golem2.cls = [11, 16, 11];
creature.golem2.eqp[0].aff = [10, 5, 25, 6, 6, 2, 13];
creature.golem2.eqp[0].cls = [3, 3, 11];
creature.golem2.ctype = 2;
creature.golem2.str_r = 18;
creature.golem2.agl_r = 35;
creature.golem2.spd_r = 3;
creature.golem2.rnk = 4; creature.golem2.un = true;
creature.golem2.drop = [{ item: item.sstraw, chance: 1, min: 13, max: 25 }, { item: item.lsrd, chance: 1, min: 2, max: 2 }, { item: item.rope, chance: .1 }];
creature.golem2.pts = 400;

creature.golem3 = new Creature();
creature.golem3.name = 'Paper Golem'; creature.golem3.id = 129;
creature.golem3.desc = 'Slim golem made of paper-like material. While not as tough as other training golems, it has a light body which allows it to move faster';
creature.golem3.exp = 80;
creature.golem3.hp_r = 400;
creature.golem3.stat_p = [0.06, 0.3, 0.3, 0.3];
creature.golem3.aff = [11, 8, 5, -60, -5, 15, 14]
creature.golem3.cls = [10, 20, 14];
creature.golem3.eqp[0].aff = [10, 5, 25, 6, 6, 2, 13];
creature.golem3.eqp[0].cls = [3, 3, 14];
creature.golem3.ctype = 2;
creature.golem3.str_r = 21;
creature.golem3.agl_r = 70;
creature.golem3.spd_r = 4;
creature.golem3.rnk = 4; creature.golem3.un = true;
creature.golem3.drop = [{ item: item.lsrd, chance: 1, min: 4, max: 4 }, { item: item.bhd, chance: .5, min: 1, max: 4 }];
creature.golem3.pts = 500;

creature.golem4 = new Creature();
creature.golem4.name = 'Attack Golem'; creature.golem4.id = 130;
creature.golem4.desc = 'Golem with implanted martial prowess. Somewhat similar to a trained militant, they pose a dangerous threat to any unprepared opponent';
creature.golem4.exp = 120;
creature.golem4.hp_r = 730;
creature.golem4.stat_p = [0.06, 0.3, 0.3, 0.3];
creature.golem4.aff = [19, 8, 5, -60, -5, 15, 14]
creature.golem4.cls = [20, 25, 18];
creature.golem4.eqp[0].aff = [11, 5, 25, 6, 6, 2, 13];
creature.golem4.eqp[0].cls = [3, 3, 13];
creature.golem4.ctype = 2;
creature.golem4.str_r = 25;
creature.golem4.agl_r = 50;
creature.golem4.spd_r = 4;
creature.golem4.rnk = 5; creature.golem4.un = true;
creature.golem4.pts = 800;
creature.golem4.drop = [{ item: item.lsstn, chance: 1 }];
creature.golem4.battle_ai = function (x, y, z) {
	if (random() <= .2) return attack(x, y, abl.bash);
	return attack(x, y)
}

creature.ngtmr1 = new Creature();
creature.ngtmr1.name = 'Nightmare'; creature.ngtmr1.id = 131;
creature.ngtmr1.desc = 'Manifestation of your fears';
creature.ngtmr1.exp = 1;
creature.ngtmr1.hp_r = 100000000;
creature.ngtmr1.stat_p = [0, 0, 0, 0];
creature.ngtmr1.cls = [9999, 9999, 9999];
creature.ngtmr1.str_r = 1;
creature.ngtmr1.agl_r = 1;
creature.ngtmr1.rnk = 0;
creature.ngtmr1.battle_ai = function () {
	return false
}

creature.lrck = new Creature();
creature.lrck.name = 'Locked Rock'; creature.lrck.id = 132;
creature.lrck.desc = 'A rock shaped monster found in caves and dungeons. It has a habit of closing of paths by mimicking a wall, but it\'s fighting prowess is close to zero.';
creature.lrck.exp = 123;
creature.lrck.hp_r = 9000;
creature.lrck.stat_p = [1.5, 1.2, 1, 1];
creature.lrck.cls = [90, 120, 60];
creature.lrck.str_r = 90;
creature.lrck.agl_r = 1;
creature.lrck.rnk = 11;
creature.lrck.battle_ai = function () {
	return false
}

creature.lsprt = new Creature(); //u
creature.lsprt.name = 'Lamp Spirit'; creature.lsprt.id = 133;
creature.lsprt.desc = 'Small fire sprites that manifest inside oil lamps located in mines and other places with low human activity. While not sinister by nature, they enjoy playing pranks on people';
creature.lsprt.exp = 5;
creature.lsprt.hp_r = 100;
creature.lsprt.stat_p = [1.1, 1.2, 2.9, .8];
creature.lsprt.aff = [15, 5, 15, -10, -5, 55, 34]
creature.lsprt.cls = [9, 9, 35];
creature.lsprt.eqp[0].aff = [4, 12, 7, -12, 6, 0, 0];
creature.lsprt.eqp[0].cls = [5, 5, 5];
creature.lsprt.ctype = 1; creature.lsprt.atype = 1;
creature.lsprt.str_r = 5;
creature.lsprt.agl_r = 13;
creature.lsprt.spd_r = 2;
creature.lsprt.drop = [{ item: item.watr, chance: .03 }, { item: item.slm, chance: .06 }, { item: item.jll, chance: .02 }];
creature.lsprt.rnk = 10;

creature.dcrps1 = new Creature(); creature.dcrps1.id = 134;
creature.dcrps1.name = 'Disaster Corpse';
creature.dcrps1.desc = 'Undead bodies manifested purely by death ki. They appear in ancient battlefields or other areas with extremely heavy concentration of dark ki. These corpses share countless memories of residue souls';

creature.unsctn = new Creature(); creature.unsctn.id = 135;
creature.unsctn.name = 'Unchanging Skeleton';
creature.unsctn.desc = 'People that neither die nor dissolve, active in the world but don\'t have minds or memories. They won\'t hurt people other than pulling pranks and causing trouble, but would go frenzy if exposed to death ki for too long';

creature.wolf1 = new Creature();
creature.wolf1.name = 'Weakened Wolf'; creature.wolf1.id = 136;
creature.wolf1.desc = 'Wolves affected by a disease or other negative influences. While not nearly as dangerous as its healthy counterpart, even in such a low state they pose danger to those who aren\'t careful'//'Predatorous inhabitants of forests with a proud character. They stalk their prey and hunt in packs';
creature.wolf1.type = 1;
creature.wolf1.exp = 15;
creature.wolf1.hp_r = 400;
creature.wolf1.stat_p = [1.3, 1.15, 1.35, .9];
creature.wolf1.aff = [22, 20, -4, -11, 31, -33, 51];
creature.wolf1.cls = [36, 32, 45];
creature.wolf1.eqp[0].aff = [12, 20, -4, -11, 31, -33, 51];
creature.wolf1.eqp[0].cls = [8, 9, 8];
creature.wolf1.ctype = 1;
creature.wolf1.str_r = 20;
creature.wolf1.agl_r = 20;
creature.wolf1.int_r = 10;
creature.wolf1.spd_r = 3; creature.wolf1.eva = 25;
creature.wolf1.drop = [{ item: item.sbone, chance: .15 }, { item: item.rwmt1, chance: .06 }, { item: item.wfng, chance: .005 }];
creature.wolf1.rnk = 4;
creature.wolf1.blood = .986
creature.wolf1.pts = 9;
creature.wolf1.battle_ai = function (x, y, z) {
	if (random() <= .3) return attack(x, y, abl.bite);
	else if (random() <= .1) return attack(x, y, abl.scratch)
	return attack(x, y)
}

creature.slm5 = new Creature();
creature.slm5.name = 'Blue Slime'; creature.slm5.id = 137;
creature.slm5.desc = 'Slime of a very deep darkblue hue, which looks shiny under the light and almost completely dark in the shade';
creature.slm5.type = 1;
creature.slm5.exp = 12;
creature.slm5.hp_r = 220;
creature.slm5.stat_p = [0.5, 1.1, 2.97, .6];
creature.slm5.aff = [19, 15, 15, 3, -5, 55, 34]
creature.slm5.cls = [23, 23, 23];
creature.slm5.eqp[0].aff = [4, 9, 7, -12, 12, 0, 0];
creature.slm5.eqp[0].cls = [7, 7, 7];
creature.slm5.ctype = 2; creature.slm5.atype = 4;
creature.slm5.str_r = 8;
creature.slm5.agl_r = 9; creature.slm5.eva = 22;
creature.slm5.spd_r = 2;
creature.slm5.drop = [{ item: item.watr, chance: .085 }, { item: item.slm, chance: .03 }, { item: item.jll, chance: .07 }, { item: acc.jln3, chance: .0005 }];
creature.slm5.rnk = 3;
creature.slm5.pts = 5;
creature.slm5.battle_ai = function (x, y, z) {
	if (random() <= .15) return attack(x, y, abl.bash);
	return attack(x, y)
}

///////////////////////////////////////////
//ABL
///////////////////////////////////////////

function Ability(id) {
	this.name = ''; this.id = id || 0
	this.atrg = ' -> ';
	this.btrg = ' -> ';
	this.cls;
	this.aff; this.affp = 0
	this.stt = 1;
	this.f = function (x, y) { return dmg_calc(x, y, this) }
} abl.default = new Ability();


abl.bite = new Ability(1);
abl.bite.name = 'Bite';
abl.bite.atrg = ' <span style="color:hotpink">bites you</span> -> ';
abl.bite.f = function (x, y, z) {
	if (random() < .15) {
		let f = findbyid(y.eff, effect.bled.id);
		if (random() < y.res.bleed) { giveEff(y, effect.bled, 10, z || 4); if (f) f.duration += 6 }
	}
	return dmg_calc(x, y, this) * 1.15;
}

abl.rstab = new Ability(2);
abl.rstab.name = 'Selfharm';
abl.rstab.atrg = ' <span style="color:magenta">stabs you with something rusty</span> -> ';
abl.rstab.cls = 1;
abl.rstab.f = function (x, y) {
	if (you.res.poison >= random()) { if (effect.psn.active === false) giveEff(you, effect.psn, 5, 1); else effect.psn.duration += 5; }
	return dmg_calc(x, y, this) * 1.1;
}

abl.scrtch = new Ability(3);
abl.scrtch.name = 'Scratch';
abl.scrtch.atrg = ' <span style="color:hotpink">scratches you</span> -> ';
abl.scrtch.cls = 0;
abl.scrtch.f = function (x, y, z) {
	if (random() < .05) {
		let f = findbyid(y.eff, effect.bled.id);
		if (random() < y.res.bleed) { giveEff(y, effect.bled, 5, z || 3); if (f) f.duration += 3 }
	}
	return dmg_calc(x, y, this) * 1.1;
}

abl.spark = new Ability(4);
abl.spark.name = 'Spark';
abl.spark.atrg = ' <span style="color:yellow">electrocutes you</span> -> ';
abl.spark.btrg = ' <span style="color:yellow">electrocute the enemy</span> -> ';
abl.spark.cls = 1; abl.spark.aff = 1; abl.spark.stt = 2; abl.spark.affp = 25;
abl.spark.f = function (x, y) {
	return dmg_calc(x, y, this) * 1.2;
}

abl.dstab = new Ability(5);
abl.dstab.name = 'Double Stab';
abl.dstab.atrg = ' <span style="color:pink">doublestabs you</span> -> ';
abl.dstab.btrg = ' <span style="color:pink">You doublestab the enemy</span> -> ';
abl.dstab.cls = 1;
abl.dstab.f = function (x, y) {
	return (dmg_calc(x, y, this) * 0.7 + dmg_calc(x, y, this) * 0.7)
}

abl.pbite = new Ability(6);
abl.pbite.name = 'Poison Bite';
abl.pbite.atrg = ' <span style="color:magenta">bites you</span> -> ';
abl.pbite.cls = 1;
abl.pbite.f = function (x, y, z) {
	if (random() < .25) {
		if (random() < y.res.poison) giveEff(y, effect.psn, 15, z || 3)
	}
	return dmg_calc(x, y, this) * 1.15;
}

abl.bash = new Ability(7);
abl.bash.name = 'Bash';
abl.bash.atrg = ' <span style="color:lightgrey">bashes you</span> -> ';
abl.bash.cls = 2;
abl.bash.f = function (x, y) {
	return dmg_calc(x, y, this) * 1.3
}

///////////////////////////////////////////
//EFFECTORS
///////////////////////////////////////////
function Effector() {
	this.id = 0;
	this.x = '@'; this.c = 'white';
	this.active = false;
	this.activate = function () { }
	this.deactivate = function () { }
	this.use = function () { }
}

effector.dark = new Effector();
effector.dark.activate = function () { global.flags.isdark = true }
effector.dark.deactivate = function () { global.flags.isdark = false }
effector.dark.x = '闇'; effector.dark.c = 'darkgrey';

effector.shop = new Effector();
effector.shop.activate = function () { global.flags.isshop = true }
effector.shop.deactivate = function () { global.flags.isshop = false }
effector.shop.x = '$'; effector.shop.c = 'gold';

function activateEffectors(e) {
	if (!e) return;
	for (let a in e) if (!e[a].e.active && (!e[a].c || e[a].c() === true)) { e[a].e.activate(); e[a].e.active = true }
}

function deactivateEffectors(e) {
	if (!e) return
	for (let a in e) if (e[a].e.active) { e[a].e.deactivate(); e[a].e.active = false }
}

function runEffectors(e) {
	if (!e) return
	for (let a in e) e[a].e.use();
}

///////////////////////////////////////////
//ZNE
///////////////////////////////////////////

function Area() {
	this.name = 'Nowhere';
	this.id = 0;
	this.pop = [];
	this.size = 10
	this.drop = [];
	this.onEnd = function () { };
	this.onDeath = function () { };
}

area.nwh = new Area(); area.nwh.id = 101;
area.nwh.name = 'Somewhere';
area.nwh.pop = [{ crt: creature.default, lvlmin: 1, lvlmax: 1, c: 1 }];
area.nwh.size = 1; z_bake(area.nwh); global.current_z = area.nwh;

area.trn = new Area(); area.trn.id = 102;
area.trn.name = 'Training Grounds';
area.trn.pop = [{ crt: creature.sdummy, lvlmin: 1, lvlmax: 9, c: .3 }, { crt: creature.tdummy, lvlmin: 4, lvlmax: 8, c: .3 }, { crt: creature.wdummy, lvlmin: 3, lvlmax: 5, c: .3 }];
area.trn.size = 10000; z_bake(area.trn);
area.trn.onEnd = function () { this.size = -1; giveTitle(ttl.thr); global.flags.trnex1 = true; smove(chss.t3, false) };
area.trn.drop = [{ item: item.appl, c: .02 }, { item: acc.gpin, c: .00012, cond: () => { return ttl.tqtm.tget } }]

area.trnf = new Area(); area.trn.id = 107;
area.trnf.name = 'Training Grounds';
area.trnf.pop = [{ crt: creature.sdummy, lvlmin: 1, lvlmax: 12, c: .3 }, { crt: creature.tdummy, lvlmin: 7, lvlmax: 13, c: .3 }, { crt: creature.wdummy, lvlmin: 8, lvlmax: 10, c: .3 }];
area.trnf.size = -1; z_bake(area.trnf); area.trnf.protected = true
area.trnf.drop = [{ item: acc.gpin, c: .00012, cond: () => { return ttl.tqtm.tget } }]

area.trn1 = new Area(); area.trn1.id = 103;
area.trn1.name = 'Training Grounds';
area.trn1.pop = [{ crt: creature.sdummy, lvlmin: 1, lvlmax: 1, c: .5 }, { crt: creature.tdummy, lvlmin: 1, lvlmax: 1, c: .5 }];
area.trn1.size = 10; z_bake(area.trn1);
area.trn1.onEnd = function () { smove(chss.t2, false); global.flags.tr1_win = true; };
area.trn1.onDeath = function () { if (!global.flags.dj1end) global.flags.nbtfail = true; }
area.trn1.drop = [{ item: item.appl, c: .28 }]

area.trn2 = new Area(); area.trn2.id = 104;
area.trn2.name = 'Training Grounds';
area.trn2.pop = [{ crt: creature.sdummy, lvlmin: 1, lvlmax: 3, c: .4 }, { crt: creature.tdummy, lvlmin: 1, lvlmax: 3, c: .6 }];
area.trn2.size = 20; z_bake(area.trn2);
area.trn2.onEnd = function () { smove(chss.t2, false); global.flags.tr2_win = true; };
area.trn2.onDeath = function () { if (!global.flags.dj1end) global.flags.nbtfail = true; }
area.trn2.drop = [{ item: item.appl, c: .28 }]

area.trn3 = new Area(); area.trn3.id = 105;
area.trn3.name = 'Training Grounds';
area.trn3.pop = [{ crt: creature.sdummy, lvlmin: 3, lvlmax: 5, c: .35 }, { crt: creature.tdummy, lvlmin: 2, lvlmax: 3, c: .45 }, { crt: creature.wdummy, lvlmin: 1, lvlmax: 1, c: .25 }];
area.trn3.size = 50; z_bake(area.trn3);
area.trn3.onEnd = function () { smove(chss.t2, false); global.flags.tr3_win = true; };
area.trn3.onDeath = function () { if (!global.flags.dj1end) global.flags.nbtfail = true; }
area.trn3.drop = [{ item: item.appl, c: .28 }]

area.clg = new Area(); area.clg.id = 106;
area.clg.name = 'Damp cellar';
area.clg.pop = [{ crt: creature.bat, lvlmin: 1, lvlmax: 4 }, { crt: creature.spd1, lvlmin: 2, lvlmax: 4 }];
area.clg.size = 33; z_bake(area.clg);
area.clg.onEnd = function () { if (!global.flags.q1lwn) { global.flags.q1lwn = true; smove(chss.q1lwn, false); } else smove(chss.q1l, false) };

area.tst = new Area(); area.tst.id = 108;
area.tst.name = 'Test';
area.tst.pop = [{ crt: creature.skl, lvlmin: 1, lvlmax: 1, c: 1 }];
area.tst.size = -1; z_bake(area.tst);
area.tst.onEnd = function () { };

area.frstn1a2 = new Area(); area.frstn1a2.id = 109;
area.frstn1a2.name = 'Western forest hunting area';
area.frstn1a2.pop = [{ crt: creature.rbt1, lvlmin: 1, lvlmax: 5, c: .20 }, { crt: creature.slm1, lvlmin: 1, lvlmax: 6, c: .40 }, { crt: creature.slm2, lvlmin: 1, lvlmax: 6, c: .40 }];
area.frstn1a2.size = 60; z_bake(area.frstn1a2);
area.frstn1a2.onEnd = function () {
	roll(item.acrn, .2, 1, 3); roll(item.wbrs, .2, 1, 3); roll(item.cp, .5, 1, 5); roll(wpn.knf2, .06); roll(wpn.ktn1, .04); roll(item.hrb1, .6, 1, 4);
	roll(wpn.stk1, .3); roll(item.sbone, .1, 1, 3); giveItem(item.wbrs, rand(1, 2)); roll(item.wdc, 1, 7, 22); roll(item.spb, .7);
	roll(item.pcn, .1, 1, 2);
	this.size = rand(40) + 30; smove(chss.frstn1a2);
}; area.frstn1a2.drop = [{ item: item.hrb1, c: .02 }, { item: item.wdc, c: .05 }]

area.hmbsmnt = new Area(); area.hmbsmnt.id = 110;
area.hmbsmnt.name = 'Your basement';
area.hmbsmnt.pop = [{ crt: creature.bat, lvlmin: 10, lvlmax: 17, c: .50 }, { crt: creature.spd1, lvlmin: 10, lvlmax: 17, c: .50 }];
area.hmbsmnt.size = 10; z_bake(area.hmbsmnt);
area.hmbsmnt.onEnd = function () {
	smove(chss.bsmnthm1, false);
}
area.hmbsmnt.drop = [{ item: item.cp, c: .05 }, { item: item.lcn, c: .003 }, { item: item.cn, c: .02 }, { item: item.cd, c: .01 }, { item: item.wdc, c: .08 }, { item: acc.wpeny, c: .001 }]

area.trne1 = new Area(); area.trne1.id = 111;
area.trne1.name = 'Training Grounds';
area.trne1.pop = [{ crt: creature.golem1, lvlmin: 20, lvlmax: 20, c: 1 }];
area.trne1.size = 1; z_bake(area.trne1); area.trne1.protected = true
area.trne1.onEnd = function () { this.size = 1; if (!global.flags.trne1e1) smove(chss.trne1e1, false); else smove(chss.t3, false) };

area.frstn2a2 = new Area(); area.frstn2a2.id = 112;
area.frstn2a2.name = 'Western forest hunting area';
area.frstn2a2.pop = [{ crt: creature.rbt1, lvlmin: 1, lvlmax: 7, c: .25 }, { crt: creature.slm1, lvlmin: 1, lvlmax: 8, c: .20 }, { crt: creature.slm2, lvlmin: 1, lvlmax: 8, c: .20 }, { crt: creature.slm3, lvlmin: 1, lvlmax: 5, c: .25 }];
area.frstn2a2.size = 50; z_bake(area.frstn2a2);
area.frstn2a2.onEnd = function () {
	roll(item.acrn, .2, 1, 3); roll(item.cp, .2, 1, 8); roll(wpn.knf2, .03); roll(wpn.ktn1, .04); roll(item.hrb1, .4, 2, 5);
	roll(wpn.stk1, .4); roll(item.sbone, .2, 1, 3); giveItem(item.wbrs, rand(1, 3)); roll(item.wdc, 1, 5, 17); roll(item.spb, .6);
	roll(item.pcn, .3, 1, 3); if (!global.flags.wp2sgt) roll(item.wp2s, .2);
	this.size = rand(50) + 40;
	if (!global.flags.frstn1a3u) { msg('You have discovered a new hunting area', 'lime'); global.flags.frstn1a3u = true; smove(chss.frstn1main) } else smove(chss.frstn1a2);
}; area.frstn2a2.drop = [{ item: item.hrb1, c: .03 }, { item: item.wdc, c: .06 }]

area.trne2 = new Area(); area.trne2.id = 113;
area.trne2.name = 'Training Grounds';
area.trne2.pop = [{ crt: creature.golem2, lvlmin: 23, lvlmax: 23, c: 1 }];
area.trne2.size = 1; z_bake(area.trne2); area.trne2.protected = true
area.trne2.onEnd = function () { this.size = 1; if (!global.flags.trne2e1) smove(chss.trne2e1, false); else smove(chss.t3, false) };

area.trne3 = new Area(); area.trne3.id = 114;
area.trne3.name = 'Training Grounds';
area.trne3.pop = [{ crt: creature.golem3, lvlmin: 25, lvlmax: 25, c: 1 }];
area.trne3.size = 1; z_bake(area.trne3); area.trne3.protected = true
area.trne3.onEnd = function () { this.size = 1; if (!global.flags.trne3e1) smove(chss.trne3e1, false); else smove(chss.t3, false) };

area.frstn1a3 = new Area(); area.frstn1a3.id = 115;
area.frstn1a3.name = 'Western forest hunting area';
area.frstn1a3.pop = [{ crt: creature.rbt1, lvlmin: 3, lvlmax: 8, c: .35 }, { crt: creature.slm1, lvlmin: 3, lvlmax: 9, c: .15 }, { crt: creature.slm2, lvlmin: 3, lvlmax: 9, c: .15 }, { crt: creature.slm3, lvlmin: 2, lvlmax: 5, c: .2 }];
area.frstn1a3.size = -1; z_bake(area.frstn1a3); area.frstn1a3.protected = true
area.frstn1a3.drop = [{ item: item.hrb1, c: .009 }, { item: item.wdc, c: .025 }, { item: item.acrn, c: .001 }, { item: item.mshr, c: .002 }, { item: item.cp, c: .002 }, { item: wpn.knf2, c: .00009 }, { item: wpn.ktn1, c: .00006 }, { item: wpn.stk1, c: .0007 }, { item: item.sbone, c: .0009 }, { item: item.wbrs, c: .003 }, { item: item.spb, c: .0004 }, { item: item.pcn, c: .001 }, { item: item.fwd1, c: .0009 }]

area.frstn1a4 = new Area(); area.frstn1a4.id = 116;
area.frstn1a4.name = 'Western forest hidden area';
area.frstn1a4.pop = [{ crt: creature.slm4, lvlmin: 9, lvlmax: 11, c: 1 }];
area.frstn1a4.size = 25; z_bake(area.frstn1a4); area.frstn1a4.protected = true
area.frstn1a4.drop = [{ item: item.cp, c: .006 }, { item: wpn.stk1, c: .0009 }, { item: item.sbone, c: .0005 }]
area.frstn1a4.onEnd = function () {
	chss.frstn1a4.sl()
};

area.trne4 = new Area(); area.trne4.id = 117;
area.trne4.name = 'Training Grounds';
area.trne4.pop = [{ crt: creature.golem4, lvlmin: 28, lvlmax: 28, c: 1 }];
area.trne4.size = 1; z_bake(area.trne4); area.trne4.protected = true
area.trne4.onEnd = function () { this.size = 1; if (!global.flags.trne4e1) smove(chss.trne4e1, false); else smove(chss.t3, false); giveTitle(ttl.aptc) };

area.frstn9a1 = new Area(); area.frstn9a1.id = 118;
area.frstn9a1.name = 'Southern forest hunting area';
area.frstn9a1.pop = [{ crt: creature.wolf1, lvlmin: 7, lvlmax: 8, c: .25 }, { crt: creature.slm5, lvlmin: 10, lvlmax: 11, c: .75 }];
area.frstn9a1.size = 48; z_bake(area.frstn9a1);
area.frstn9a1.onEnd = function () {
	roll(item.acrn, .2, 1, 5); roll(item.mshr, .35, 1, 3);
	roll(wpn.stk1, .15); roll(item.sbone, .3, 1, 3); roll(item.wdc, 1, 5, 17); roll(item.appl, .25, 2, 5); roll(item.pcn, .5, 1, 3);
	this.size = rand(20) + 40; smove(chss.frstn3main)
}; area.frstn9a1.drop = [{ item: item.hrb1, c: .03 }, { item: item.wdc, c: .06 }]


function z_bake(area) {
	let c = 0; let d = 0; let b = []; let e = []; let s = 0;
	for (let i = 0; i < area.pop.length; i++) c += area.pop[i].c; d = 1 - c;
	for (let i = 0; i < area.pop.length; i++) b[i] = (d / c) * area.pop[i].c + area.pop[i].c;
	for (let i = 0; i < b.length; i++) {
		if (i === 0) { e[i] = [0, b[i]]; s = b[i]; }
		else if (i === b.length - 1) e[i] = [s, 1];
		else { e[i] = [s, b[i] + s]; s += b[i] }
	} area.popc = e;
}

///////////////////////////////////////////
//ZNE SECTOR
///////////////////////////////////////////
function Sector() {
	this.id = 0
	this.group = [0];
	this.data = {};
	this.active = false;
	this.onEnter = function () { }
	this.onLeave = function () { }
	this.onStay = function () { }
	this.onMove = function () { }
	this.onScout = function () { }
}

function addtosector(sector, loc) {
	sector.group.push(loc.id);
	loc.sector.push(sector);
}

function inSector(sector) {
	for (let a in global.current_l.sector) if (global.current_l.sector[a].id === sector.id) return true
}

sector.home = new Sector(); sector.home.id = 1; sector.home.inside = true; sector.home.ddata = {}
sector.home.onEnter = function () {
	let fire = findbyid(furn, furniture.frplc.id);
	for (let f in furn) activatef(furn[f])
	if (this.data.smkp > 0) {
		dom.d_lctt.innerHTML += '<span style="color:grey;font-size:1.2em">&nbsp煙<span>'
		let re = time.minute - this.data.smkt; this.data.smkp -= re;
	}
}

sector.home.data = { scoutm: 100, scout: 0, scoutf: false, gets: [false], gotmod: 0, smkp: 0, ctlt: [] }
sector.home.scout = [
	{ c: .1, cond: () => { if (sector.home.data.ctlt.length != 0) return true }, f: () => { let i = select(sector.home.data.ctlt); msg(select(['Your cat found something for you', 'Another one of your cat\'s gifts', 'Something was lying in the corner of the room. Probably cat\'s', 'Your cat dropped something before you']), 'lime'); let k = itemgroup[(i + 1) / 10000 << 0]; for (let v in k) if (k[v].id === i) giveItem(k[v]); sector.home.data.ctlt.splice(sector.home.data.ctlt.indexOf(i), 1); }, exp: 2 },
];
sector.home.onScout = function () { scoutGeneric(this) }

sector.home.onMove = function () {
	if (this.data.smkp > 0) {
		dom.d_lctt.innerHTML += '<span style="color:grey;font-size:1.2em">&nbsp煙<span>'
	}
}

sector.home.onLeave = function () {
	global.stat.athmec = 0;
	if (effect.fplc.active === true) removeEff(effect.fplc);
	this.data.smkt = time.minute;
	for (let f in furn) deactivatef(furn[f])
}

sector.home.onStay = function () {
	if (this.data.smkp > 0) {
		if (effect.smoke.active) effect.smoke.duration = 26; else giveEff(you, effect.smoke, 26)
		if (--this.data.smkp <= 0) smove(global.current_l)
	}
	if (global.flags.catget) giveSkExp(skl.pet, you.mods.petxp);
	global.stat.athme += global.timescale; global.stat.athmec += global.timescale;
	for (let x in global.nethmchk) global.nethmchk[x]();
	let fire = findbyid(furn, furniture.frplc.id);

	if (effect.fplc.active === false && fire.data.fuel > 0) giveEff(you, effect.fplc, fire.data.fuel)
	if (fire.data.fuel > 0) {
		if (effect.fplc.active === false) giveEff(you, effect.fplc, 2)
		let afire = findbyid(furn, furniture.fwdpile.id); if (afire && fire.data.fuel <= 2 && afire.data.fuel > 0) { fire.data.fuel += 30; afire.data.fuel-- }
	}
}

sector.vcent = new Sector(); sector.vcent.id = 2;
sector.vcent.onStay = function () {
	if (random() < .03 && !isWeather(weather.sstorm) && !isWeather(weather.heavyrain) && !isWeather(weather.thunder) && (getHour() > 8 && getHour() < 20)) {
		; if (!global.text.vlg1) global.text.vlg1 = ['\"♪La, laaaah, la, la-la. Lah, la-la,la la....♪\"', '\"Eat flowers evil-doer!♪\"', '\"Oh my! Such pretty flowers♪\"', '\"Can I tag along? I won\'t be a bother♪\"'];
		if (!global.text.vlg1s) global.text.vlg1s = ['\"Let\'s build a snowman!♪\"', '\"Yey, snow!♪\"', '\"Everything is so white and beautiful♪\"', 'A snowball lands on you. Hey!'];
		msg(getSeason() === 4 ? select(global.text.vlg1s) : select(global.text.vlg1), 'yellow');
	}
}

sector.forest1 = new Sector(); sector.forest1.id = 3;
sector.forest1.data = { scoutm: 7000, scout: 0, scoutf: false }
sector.forest1.onStay = function () {
	if (!this.data.scoutf) {
		if (this.data.scout <= this.data.scoutm) { if (global.flags.btl || act.scout.active === true) { this.data.scout += .1; giveSkExp(skl.tpgrf, .001) } } else {
			msg('Area Explored!', 'lime'); this.data.scoutf = true; giveExp(7000, true, true, true);
		}
	}
}

sector.cata1 = new Sector(); sector.cata1.id = 4; sector.cata1.inside = true; sector.cata1.effectors = [{ e: effector.dark }]
sector.cata1.data = { scoutm: 11000, scout: 0, scoutf: false }

sector.vmain1 = new Sector(); sector.vmain1.id = 5;/*
sector.vmain1.data={scoutm:400,scout:0,scoutf:false,gets:[false],gotmod:0}
sector.vmain1.scout=[
  {c:.11,f:()=>{msg(select(['You notice a coin on the ground!','You pick a coin from under the counter','You snatch a coin while no one is looking']),'lime');giveItem(select([item.cp,item.cn,item.cq,item.cd]));sector.vmain1.data.gets[0]=true},exp:5},
  {c:.05,f:()=>{msg(select(['You notice a coin on the ground!','You pick a coin from under the counter','You snatch a coin while no one is looking']),'lime');giveItem(select([item.cp,item.cn,item.cq,item.cd]));sector.vmain1.data.gets[1]=true},exp:5},
]
sector.vmain1.onScout=function(){scoutGeneric(this)}*/

function giveCrExp(skl, am, lvl) {
	if (!lvl || skl.lvl < lvl) giveSkExp(skl, am);
}

///////////////////////////////////////////
//CONT
///////////////////////////////////////////

function Container(id) {
	this.id = id || 0;
	this.c = [];
}

container.home_strg = new Container(1);
if (!home.trunk) { home.trunk = container.home_strg }

///////////////////////////////////////////
//REC
///////////////////////////////////////////

function Recipe() {
	this.name = '';
	this.locked = true;
	this.allow = true;
	this.have = false;
	this.rec = [];
	this.res = [];
	this.srec = function () { };
	this.srece = false; this.srect = null;
	this.onmake = function () { };
	this.type = 0;
}

rcp.test = new Recipe(); rcp.test.id = 101;
rcp.test.name = 'Test';
rcp.test.rec = [{ item: acc.dticket, amount: 1 }, { item: acc.dticket, amount: 1 }];
rcp.test.res = [{ item: item.sbone, amount: 991 }];

rcp.wp2 = new Recipe(); rcp.wp2.id = 102;
rcp.wp2.name = 'Sharpened Stick';
rcp.wp2.type = 3;
rcp.wp2.rec = [{ item: wpn.stk1, amount: 1 }];
rcp.wp2.res = [{ item: wpn.stk2, amount: 1 }];
rcp.wp2.onmake = function () { giveCrExp(skl.crft, .5, 1) }
rcp.wp2.srect = ['Any sharp tool'];
rcp.wp2.srec = [function () {
	for (let hh in inv) if (inv[hh].ctype === 0 && inv[hh].cls[0] >= 2) return true;
}];

rcp.strawp = new Recipe(); rcp.strawp.id = 103;
rcp.strawp.name = 'Straw Pendant';
rcp.strawp.type = 4;
rcp.strawp.rec = [{ item: item.sstraw, amount: 5 }];
rcp.strawp.res = [{ item: acc.strawp, amount: 1 }];
rcp.strawp.onmake = function () { giveCrExp(skl.crft, .1, 1) }

rcp.hlpd = new Recipe(); rcp.hlpd.id = 104;
rcp.hlpd.name = 'Low-grade Healing Powder';
rcp.hlpd.type = 2;
rcp.hlpd.rec = [{ item: item.hrb1, amount: 3 }];
rcp.hlpd.res = [{ item: item.hlpd, amount: 1 }];
rcp.hlpd.onmake = function () { giveCrExp(skl.alch, .2, 1) }

rcp.borc = new Recipe(); rcp.borc.id = 105;
rcp.borc.name = 'Boiled Rice';
rcp.borc.type = 1;
rcp.borc.rec = [{ item: item.rice, amount: 2 }, { item: item.watr, amount: 2 }];
rcp.borc.res = [{ item: item.borc, amount: 1 }];
rcp.borc.onmake = function () { giveCrExp(skl.cook, .5, 1) }
rcp.borc.srect = ['Nearby firesource'];
rcp.borc.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.begg = new Recipe(); rcp.begg.id = 106;
rcp.begg.name = 'Boiled Egg';
rcp.begg.type = 1;
rcp.begg.rec = [{ item: item.eggn, amount: 1 }, { item: item.watr, amount: 2 }];
rcp.begg.res = [{ item: item.begg, amount: 1 }];
rcp.begg.onmake = function () { giveCrExp(skl.cook, .2, 1) }
rcp.begg.srect = ['Nearby firesource'];
rcp.begg.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.trr = new Recipe(); rcp.trr.id = 107;
rcp.trr.name = 'Trinity';
rcp.trr.type = 4;
rcp.trr.rec = [{ item: acc.mstn, amount: 1 }, { item: acc.srng, amount: 1 }, { item: acc.bstn, amount: 1 }, { item: acc.mstn, amount: 1 }];
rcp.trr.res = [{ item: acc.trrng, amount: 1 }];

rcp.rsmt = new Recipe(); rcp.rsmt.id = 108;
rcp.rsmt.name = 'Roasted Meat';
rcp.rsmt.type = 1;
rcp.rsmt.rec = [{ item: item.rwmt1, amount: 1 }];
rcp.rsmt.res = [{ item: item.rsmt, amount: 1 }];
rcp.rsmt.cmake = function () { let rn = random() + skl.cook.lvl * .1; if (rn >= .30) giveItem(rcp.rsmt.res[0].item); else { giveItem(item.brmt); msg('It didn\'t turn out very well...', 'black', null, null, 'lightgrey'); } giveCrExp(skl.cook, .2, 1); }
rcp.rsmt.srect = ['Nearby firesource'];
rcp.rsmt.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.segg = new Recipe(); rcp.segg.id = 109;
rcp.segg.name = 'Scrambled Eggs';
rcp.segg.type = 1;
rcp.segg.rec = [{ item: item.eggn, amount: 2 }];
rcp.segg.res = [{ item: item.segg, amount: 1 }];
rcp.segg.onmake = function () { giveCrExp(skl.cook, 1, 2) }
rcp.segg.srect = ['Nearby firesource'];
rcp.segg.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.lnch1 = new Recipe(); rcp.lnch1.id = 110;
rcp.lnch1.name = 'Bacon and Eggs';
rcp.lnch1.type = 1;
rcp.lnch1.rec = [{ item: item.eggn, amount: 2 }, { item: item.bac, amount: 1 }];
rcp.lnch1.res = [{ item: item.lnch1, amount: 1 }];
rcp.lnch1.onmake = function () { giveCrExp(skl.cook, 5, 3) }
rcp.lnch1.srect = ['Nearby firesource'];
rcp.lnch1.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.lnch2 = new Recipe(); rcp.lnch2.id = 111;
rcp.lnch2.name = 'Morning Set';
rcp.lnch2.type = 1;
rcp.lnch2.rec = [{ item: item.eggn, amount: 2 }, { item: item.brd, amount: 1 }];
rcp.lnch2.res = [{ item: item.lnch2, amount: 1 }];
rcp.lnch2.onmake = function () { giveCrExp(skl.cook, 8, 3) }
rcp.lnch2.srect = ['Nearby firesource'];
rcp.lnch2.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.lnch3 = new Recipe(); rcp.lnch3.id = 112;
rcp.lnch3.name = 'Lunch Set';
rcp.lnch3.type = 1;
rcp.lnch3.rec = [{ item: item.eggn, amount: 2 }, { item: item.brd, amount: 1 }, { item: item.rwmt1, amount: 1 }];
rcp.lnch3.res = [{ item: item.lnch3, amount: 1 }];
rcp.lnch3.onmake = function () { giveCrExp(skl.cook, 10, 4) }
rcp.lnch3.srect = ['Nearby firesource'];
rcp.lnch3.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.orgs = new Recipe(); rcp.orgs.id = 113;
rcp.orgs.name = 'Onion Rings';
rcp.orgs.type = 1;
rcp.orgs.rec = [{ item: item.flr, amount: 2 }, { item: item.onn, amount: 1 }];
rcp.orgs.res = [{ item: item.orgs, amount: 1 }];
rcp.orgs.onmake = function () { giveCrExp(skl.cook, 8, 4) }
rcp.orgs.srect = ['Nearby firesource'];
rcp.orgs.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.ffsh1 = new Recipe(); rcp.ffsh1.id = 114;
rcp.ffsh1.name = 'Cooked Fish';
rcp.ffsh1.type = 1;
rcp.ffsh1.rec = [{ item: item.fsh1, amount: 1 }];
rcp.ffsh1.res = [{ item: item.ffsh1, amount: 1 }];
rcp.ffsh1.onmake = function () { giveCrExp(skl.cook, 2, 2) }
rcp.ffsh1.srect = ['Nearby firesource'];
rcp.ffsh1.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.ffsh2 = new Recipe(); rcp.ffsh2.id = 115;
rcp.ffsh2.name = 'Batter Fried Fish';
rcp.ffsh2.type = 1;
rcp.ffsh2.rec = [{ item: item.fsh2, amount: 1 }, { item: item.flr, amount: 1 }, { item: item.eggn, amount: 1 }, { item: item.salt, amount: 1 }];
rcp.ffsh2.res = [{ item: item.ffsh2, amount: 1 }];
rcp.ffsh2.onmake = function () { giveCrExp(skl.cook, 12, 5) }
rcp.ffsh2.srect = ['Nearby firesource'];
rcp.ffsh2.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.fnori = new Recipe(); rcp.fnori.id = 116;
rcp.fnori.name = 'Fried Nori';
rcp.fnori.type = 1;
rcp.fnori.rec = [{ item: item.nori, amount: 1 }, { item: item.salt, amount: 1 }];
rcp.fnori.res = [{ item: item.fnori, amount: 1 }];
rcp.fnori.onmake = function () { giveCrExp(skl.cook, 4, 4) }
rcp.fnori.srect = ['Nearby firesource'];
rcp.fnori.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.cbun1 = new Recipe(); rcp.cbun1.id = 117;
rcp.cbun1.name = 'Steamed Bun';
rcp.cbun1.type = 1;
rcp.cbun1.rec = [{ item: item.watr, amount: 1 }, { item: item.salt, amount: 1 }, { item: item.dgh, amount: 1 }];
rcp.cbun1.res = [{ item: item.cbun1, amount: 1 }];
rcp.cbun1.onmake = function () { giveCrExp(skl.cook, 5, 3) }
rcp.cbun1.srect = ['Nearby firesource'];
rcp.cbun1.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.dgh = new Recipe(); rcp.dgh.id = 118;
rcp.dgh.name = 'Dough';
rcp.dgh.type = 1;
rcp.dgh.rec = [{ item: item.watr, amount: 1 }, { item: item.flr, amount: 3 }];
rcp.dgh.res = [{ item: item.dgh, amount: 1 }];
rcp.dgh.onmake = function () { giveCrExp(skl.cook, .5, 2) }

rcp.flr = new Recipe(); rcp.flr.id = 119;
rcp.flr.name = 'Flour';
rcp.flr.type = 1;
rcp.flr.rec = [{ item: item.wht, amount: 1 }];
rcp.flr.res = [{ item: item.flr, amount: 2 }];
rcp.flr.onmake = function () { giveCrExp(skl.cook, .2, 2) }

rcp.wbdl = new Recipe(); rcp.wbdl.id = 120;
rcp.wbdl.name = 'Small Wood Bundle';
rcp.wbdl.type = 5;
rcp.wbdl.rec = [{ item: item.wdc, amount: 25 }];
rcp.wbdl.res = [{ item: item.fwd1, amount: 1 }];
rcp.wbdl.onmake = function () { giveCrExp(skl.crft, .5, 1) }

rcp.sshl = new Recipe(); rcp.sshl.id = 121;
rcp.sshl.name = 'Star Shell';
rcp.sshl.type = 4;
rcp.sshl.rec = [{ item: acc.snch, amount: 1 }, { item: acc.mnch, amount: 1 }];
rcp.sshl.res = [{ item: acc.sshl, amount: 1 }];
rcp.sshl.onmake = function () { giveCrExp(skl.crft, 10) }

rcp.hptn1 = new Recipe(); rcp.hptn1.id = 122;
rcp.hptn1.name = 'Lesser Healing Potion';
rcp.hptn1.type = 2;
rcp.hptn1.rec = [{ item: item.slm, amount: 1 }, { item: item.hlpd, amount: 2 }];
rcp.hptn1.res = [{ item: item.hptn1, amount: 1 }];
rcp.hptn1.onmake = function () { giveCrExp(skl.alch, 1, 2) }

rcp.hpck = new Recipe(); rcp.hpck.id = 123;
rcp.hpck.name = 'Hippo Cookie';
rcp.hpck.type = 1;
rcp.hpck.rec = [{ item: item.flr, amount: 1 }, { item: item.hzlnt, amount: 1 }, { item: item.sgr, amount: 1 }, { item: item.mlkn, amount: 1 }];
rcp.hpck.res = [{ item: item.hpck, amount: 1 }];
rcp.hpck.onmake = function () { giveCrExp(skl.cook, 7, 4) }
rcp.hpck.srect = ['Nearby firesource'];
rcp.hpck.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.sdl1 = new Recipe(); rcp.sdl1.id = 124;
rcp.sdl1.name = 'Straw Effigy';
rcp.sdl1.type = 4;
rcp.sdl1.rec = [{ item: item.sstraw, amount: 50 }];
rcp.sdl1.res = [{ item: acc.sdl1, amount: 1 }];
rcp.sdl1.onmake = function () { giveCrExp(skl.crft, 3, 2) }

rcp.mnknk = new Recipe(); rcp.mnknk.id = 125;
rcp.mnknk.name = 'Maneki-Neko';
rcp.mnknk.type = 4;
rcp.mnknk.rec = [{ item: acc.cfgn, amount: 1 }, { item: acc.lckcn, amount: 1 },];
rcp.mnknk.res = [{ item: acc.mnknk, amount: 1 }];
rcp.mnknk.onmake = function () { giveCrExp(skl.crft, 25) }

rcp.wdl1 = new Recipe(); rcp.wdl1.id = 126;
rcp.wdl1.name = 'Wood Effigy';
rcp.wdl1.type = 4;
rcp.wdl1.rec = [{ item: item.wdc, amount: 40 }];
rcp.wdl1.res = [{ item: acc.wdl1, amount: 1 }];
rcp.wdl1.onmake = function () { giveCrExp(skl.crft, 3, 2) }
rcp.wdl1.srect = ['Any sharp tool'];
rcp.wdl1.srec = [function () {
	for (let hh in inv) if (inv[hh].ctype === 0 && inv[hh].cls[0] >= 2) return true;
}];

rcp.gdl1 = new Recipe(); rcp.gdl1.id = 127;
rcp.gdl1.name = 'Soul Puppet';
rcp.gdl1.type = 4;
rcp.gdl1.rec = [{ item: acc.wdl1, amount: 1 }, { item: acc.sdl1, amount: 1 }, { item: acc.bdl1, amount: 1 }, { item: item.lsrd, amount: 5 }];
rcp.gdl1.res = [{ item: acc.gdl1, amount: 1 }];
rcp.gdl1.onmake = function () { giveCrExp(skl.crft, 5, 2) }

rcp.tbrwd = new Recipe(); rcp.tbrwd.id = 128;
rcp.tbrwd.name = 'Tea';
rcp.tbrwd.type = 1;
rcp.tbrwd.rec = [{ item: item.tlvs, amount: 1 }, { item: item.watr, amount: 1 },];
rcp.tbrwd.res = [{ item: item.tbrwd, amount: 1 }];
rcp.tbrwd.onmake = function () { giveCrExp(skl.cook, 1) }

rcp.brd = new Recipe(); rcp.brd.id = 129;
rcp.brd.name = 'Bread';
rcp.brd.type = 1;
rcp.brd.rec = [{ item: item.dgh, amount: 1 }];
rcp.brd.res = [{ item: item.brd, amount: 1 }];
rcp.brd.cmake = function () { let rn = random() + skl.cook.lvl * .05; if (rn >= .25) giveItem(rcp.brd.res[0].item); else { giveItem(item.brdb); msg('It didn\'t turn out very well...', 'black', null, null, 'lightgrey'); } giveCrExp(skl.cook, 2, 3) }
rcp.brd.srect = ['Nearby firesource'];
rcp.brd.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.steak = new Recipe(); rcp.steak.id = 130;
rcp.steak.name = 'Steak';
rcp.steak.type = 1;
rcp.steak.rec = [{ item: item.salt, amount: 1 }, { item: item.rwmt1, amount: 1 }, { item: item.spc1, amount: 1 }];
rcp.steak.res = [{ item: item.steak, amount: 1 }];
rcp.steak.onmake = function () { giveCrExp(skl.cook, 7) }
rcp.steak.srect = ['Nearby firesource', 'Cooking lvl: 3'];
rcp.steak.srec = [function () { if (you.mods.ckfre > 0) return true }, function () { if (skl.cook.lvl === 3) return true }];

rcp.cnmnb = new Recipe(); rcp.cnmnb.id = 131;
rcp.cnmnb.name = 'Cinnamon Bun';
rcp.cnmnb.type = 1;
rcp.cnmnb.rec = [{ item: item.sgr, amount: 1 }, { item: item.bttr, amount: 1 }, { item: item.cnmn, amount: 1 }, { item: item.wht, amount: 1 }];
rcp.cnmnb.res = [{ item: item.cnmnb, amount: 1 }];
rcp.cnmnb.onmake = function () { giveCrExp(skl.cook, 6, 5) }
rcp.cnmnb.srect = ['Nearby firesource'];
rcp.cnmnb.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.brth = new Recipe(); rcp.brth.id = 132;
rcp.brth.name = 'Broth';
rcp.brth.type = 1;
rcp.brth.rec = [{ item: item.watr, amount: 2 }, { item: item.rwmt1, amount: 1 }];
rcp.brth.res = [{ item: item.brth, amount: 1 }];
rcp.brth.onmake = function () { giveCrExp(skl.cook, .5, 2) }
rcp.brth.srect = ['Nearby firesource'];
rcp.brth.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.eggsp = new Recipe(); rcp.eggsp.id = 133;
rcp.eggsp.name = 'Egg Soup';
rcp.eggsp.type = 1;
rcp.eggsp.rec = [{ item: item.brth, amount: 1 }, { item: item.eggn, amount: 2 }, { item: item.salt, amount: 1 }, { item: item.scln, amount: 1 }];
rcp.eggsp.res = [{ item: item.eggsp, amount: 1 }];
rcp.eggsp.onmake = function () { giveCrExp(skl.cook, 5, 4) }
rcp.eggsp.srect = ['Nearby firesource'];
rcp.eggsp.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.crmchd = new Recipe(); rcp.crmchd.id = 134;
rcp.crmchd.name = 'Creamy Chowder';
rcp.crmchd.type = 1;
rcp.crmchd.rec = [{ item: item.mlkn, amount: 1 }, { item: item.ches, amount: 1 }, { item: item.rwmt1, amount: 1 }, { item: item.potat, amount: 1 }];
rcp.crmchd.res = [{ item: item.crmchd, amount: 1 }];
rcp.crmchd.onmake = function () { giveCrExp(skl.cook, 15) }
rcp.crmchd.srect = ['Nearby firesource'];
rcp.crmchd.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.mink = new Recipe(); rcp.mink.id = 135;
rcp.mink.name = 'Magic Ink';
rcp.mink.type = 4;
rcp.mink.rec = [{ item: acc.qill, amount: 1 }, { item: acc.bink, amount: 1 }];
rcp.mink.res = [{ item: acc.mink, amount: 1 }];
rcp.mink.onmake = function () { giveCrExp(skl.crft, 2.5, 4) }

rcp.msoop = new Recipe(); rcp.msoop.id = 136;
rcp.msoop.name = 'Mushroom Soup';
rcp.msoop.type = 1;
rcp.msoop.rec = [{ item: item.watr, amount: 2 }, { item: item.mshr, amount: 2 }, { item: item.potat, amount: 1 }, { item: item.onn, amount: 1 }];
rcp.msoop.res = [{ item: item.msoop, amount: 1 }];
rcp.msoop.onmake = function () { giveCrExp(skl.cook, 4, 3) }
rcp.msoop.srect = ['Nearby firesource'];
rcp.msoop.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.jln4 = new Recipe(); rcp.jln4.id = 137;
rcp.jln4.name = 'Grand Gelatin';
rcp.jln4.type = 4;
rcp.jln4.rec = [{ item: acc.jln1, amount: 1 }, { item: acc.jln2, amount: 1 }, { item: acc.jln3, amount: 1 },];
rcp.jln4.res = [{ item: acc.jln4, amount: 1 }];
rcp.jln4.onmake = function () { giveCrExp(skl.crft, 15) }

rcp.strwks = new Recipe(); rcp.strwks.id = 138;
rcp.strwks.name = 'Straw Kasa';
rcp.strwks.type = 4;
rcp.strwks.rec = [{ item: item.sstraw, amount: 30 }];
rcp.strwks.res = [{ item: eqp.strwks, amount: 1 }];
rcp.strwks.onmake = function () { giveCrExp(skl.crft, 3, 2) }

rcp.bdl1 = new Recipe(); rcp.bdl1.id = 139;
rcp.bdl1.name = 'Bone Doll';
rcp.bdl1.type = 4;
rcp.bdl1.rec = [{ item: item.sbone, amount: 30 }];
rcp.bdl1.res = [{ item: acc.bdl1, amount: 1 }];
rcp.bdl1.onmake = function () { giveCrExp(skl.crft, 3, 2) }
rcp.bdl1.srect = ['Any sharp tool'];
rcp.bdl1.srec = [function () {
	for (let hh in inv) if (inv[hh].ctype === 0 && inv[hh].cls[0] >= 2) return true;
}];

rcp.wvbkt = new Recipe(); rcp.wvbkt.id = 140;
rcp.wvbkt.name = 'Straw Basket';
rcp.wvbkt.type = 5;
rcp.wvbkt.rec = [{ item: item.sstraw, amount: 40 }];
rcp.wvbkt.res = [{ item: item.wvbkt, amount: 1 }];
rcp.wvbkt.onmake = function () { giveCrExp(skl.crft, 3, 2) }

rcp.hlstw = new Recipe(); rcp.hlstw.id = 141;
rcp.hlstw.name = 'Healing Stew';
rcp.hlstw.type = 1;
rcp.hlstw.rec = [{ item: item.watr, amount: 2 }, { item: item.hrb1, amount: 28 }];
rcp.hlstw.res = [{ item: item.hlstw, amount: 1 }];
rcp.hlstw.onmake = function () { giveCrExp(skl.cook, 1, 2) }
rcp.hlstw.srect = ['Nearby firesource'];
rcp.hlstw.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.bcrc = new Recipe(); rcp.bcrc.id = 142;
rcp.bcrc.name = 'Bone Cracker';
rcp.bcrc.type = 1;
rcp.bcrc.rec = [{ item: item.sbone, amount: 25 }];
rcp.bcrc.res = [{ item: item.bcrc, amount: 1 }];
rcp.bcrc.onmake = function () { giveCrExp(skl.cook, 1.7, 3) }
rcp.bcrc.srect = ['Nearby firesource'];
rcp.bcrc.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.bcrrt = new Recipe(); rcp.bcrrt.id = 143
rcp.bcrrt.name = 'Boiled Carrot';
rcp.bcrrt.type = 1;
rcp.bcrrt.rec = [{ item: item.crrt, amount: 1 }, { item: item.watr, amount: 1 }];
rcp.bcrrt.res = [{ item: item.bcrrt, amount: 1 }];
rcp.bcrrt.onmake = function () { giveCrExp(skl.cook, .3, 2) }
rcp.bcrrt.srect = ['Nearby firesource'];
rcp.bcrrt.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.jsdch = new Recipe(); rcp.jsdch.id = 144;
rcp.jsdch.name = 'Jelly Sandwich';
rcp.jsdch.type = 1;
rcp.jsdch.rec = [{ item: item.jll, amount: 1 }, { item: item.brd, amount: 1 }, { item: item.ltcc, amount: 1 }];
rcp.jsdch.res = [{ item: item.jsdch, amount: 1 }];
rcp.jsdch.onmake = function () { giveCrExp(skl.cook, .8, 2) }

rcp.dcard1 = new Recipe(); rcp.dcard1.id = 145;
rcp.dcard1.name = 'Discount Card';
rcp.dcard1.type = 4;
rcp.dcard1.rec = [{ item: acc.dticket, amount: 5 }];
rcp.dcard1.res = [{ item: acc.dcard1, amount: 1 }];
rcp.dcard1.onmake = function () { giveCrExp(skl.crft, 16) }

rcp.wsb = new Recipe(); rcp.wsb.id = 146;
rcp.wsb.name = 'Wastebread';
rcp.wsb.type = 1;
rcp.wsb.rec = [{ item: item.agrns, amount: 3 }];
rcp.wsb.res = [{ item: item.wsb, amount: 1 }];
rcp.wsb.onmake = function () { giveCrExp(skl.cook, .5, 3) }

rcp.stksld = new Recipe(); rcp.stksld.id = 147;
rcp.stksld.name = 'Stake Shield';
rcp.stksld.type = 4;
rcp.stksld.rec = [{ item: wpn.stk2, amount: 4 }];
rcp.stksld.res = [{ item: sld.stksld, amount: 1 }];
rcp.stksld.onmake = function () { giveCrExp(skl.crft, 2.5, 2) }

rcp.clrpin = new Recipe(); rcp.clrpin.id = 148;
rcp.clrpin.name = 'Clover Pin';
rcp.clrpin.type = 4;
rcp.clrpin.rec = [{ item: item.lckl, amount: 7 }];
rcp.clrpin.res = [{ item: acc.clrpin, amount: 1 }];
rcp.clrpin.onmake = function () { giveCrExp(skl.crft, 77) }

rcp.ptchct = new Recipe(); rcp.ptchct.id = 149;
rcp.ptchct.name = 'Patchwork Coat';
rcp.ptchct.type = 4;
rcp.ptchct.rec = [{ item: item.cclth, amount: 11 }, { item: item.thrdnl, amount: 4 }];
rcp.ptchct.res = [{ item: eqp.ptchct, amount: 1 }];
rcp.ptchct.onmake = function () { giveCrExp(skl.crft, 3, 2); giveCrExp(skl.tlrng, 2, 1) }
rcp.ptchct.srect = ['Tailoring tool lvl: 1'];
rcp.ptchct.srec = [function () {
	for (let hh in inv) if (inv[hh].tlrq >= 1) return true;
}];

rcp.ptchpts = new Recipe(); rcp.ptchpts.id = 150;
rcp.ptchpts.name = 'Patchwork Pants';
rcp.ptchpts.type = 4;
rcp.ptchpts.rec = [{ item: item.cclth, amount: 9 }, { item: item.thrdnl, amount: 3 }];
rcp.ptchpts.res = [{ item: eqp.ptchpts, amount: 1 }];
rcp.ptchpts.onmake = function () { giveCrExp(skl.crft, 2, 2); giveCrExp(skl.tlrng, 3, 1) }
rcp.ptchpts.srect = ['Tailoring tool lvl: 1'];
rcp.ptchpts.srec = [function () {
	for (let hh in inv) if (inv[hh].tlrq >= 1) return true;
}];

rcp.bblkt = new Recipe(); rcp.bblkt.id = 151;
rcp.bblkt.name = 'Ragwork Blanket';
rcp.bblkt.type = 5;
rcp.bblkt.rec = [{ item: item.cclth, amount: 40 }, { item: item.thrdnl, amount: 18 }];
rcp.bblkt.res = [{ item: item.bblkt, amount: 1 }];
rcp.bblkt.onmake = function () { giveCrExp(skl.crft, 4, 2); giveCrExp(skl.tlrng, 7, 1) }
rcp.bblkt.srect = ['Tailoring tool lvl: 1'];
rcp.bblkt.srec = [function () {
	for (let hh in inv) if (inv[hh].tlrq >= 1) return true;
}];

rcp.spillw = new Recipe(); rcp.spillw.id = 152;
rcp.spillw.name = 'Straw Pillow';
rcp.spillw.type = 5;
rcp.spillw.rec = [{ item: item.cclth, amount: 15 }, { item: item.thrdnl, amount: 8 }, { item: item.sstraw, amount: 80 }];
rcp.spillw.res = [{ item: item.spillw, amount: 1 }];
rcp.spillw.onmake = function () { giveCrExp(skl.crft, 3, 2); giveCrExp(skl.tlrng, 4, 1) }

rcp.alseto = new Recipe(); rcp.alseto.id = 153
rcp.alseto.name = 'Basic Alchemy Set';
rcp.alseto.type = 4;
rcp.alseto.rec = [{ item: acc.mpst, amount: 1 }, { item: acc.mshst, amount: 1 }, { item: acc.mhhst, amount: 1 }];
rcp.alseto.res = [{ item: acc.alseto, amount: 1 }];
rcp.alseto.onmake = function () { giveCrExp(skl.crft, 15, 2); }

rcp.mdcag = new Recipe(); rcp.mdcag.id = 154
rcp.mdcag.name = 'Adhesive Bandage';
rcp.mdcag.type = 4;
rcp.mdcag.rec = [{ item: item.bdgh, amount: 1 }, { item: item.watr, amount: 5 }, { item: item.hrb1, amount: 50 }, { item: item.slm, amount: 10 }];
rcp.mdcag.res = [{ item: acc.mdcag, amount: 1 }];
rcp.mdcag.onmake = function () { giveCrExp(skl.alch, 2, 2) }

rcp.mdcbg = new Recipe(); rcp.mdcbg.id = 155
rcp.mdcbg.name = 'Medicated Bandage';
rcp.mdcbg.type = 4;
rcp.mdcbg.rec = [{ item: acc.mdcag, amount: 1 }, { item: acc.vtmns, amount: 1 }, { item: item.hptn1, amount: 8 }];
rcp.mdcbg.res = [{ item: acc.mdcbg, amount: 1 }];
rcp.mdcbg.onmake = function () { giveCrExp(skl.alch, 3, 2) }

rcp.cyrn = new Recipe(); rcp.cyrn.id = 156
rcp.cyrn.name = 'Yarn Ball';
rcp.cyrn.type = 5;
rcp.cyrn.rec = [{ item: item.thrdnl, amount: 200 }];
rcp.cyrn.res = [{ item: item.cyrn, amount: 1 }];
rcp.cyrn.onmake = function () { giveCrExp(skl.crft, 4, 2) }

rcp.fwdpile = new Recipe(); rcp.fwdpile.id = 157
rcp.fwdpile.name = 'Firewood Pile';
rcp.fwdpile.type = 5;
rcp.fwdpile.rec = [{ item: item.fwd1, amount: 60 }];
rcp.fwdpile.res = [{ item: item.fwdpile, amount: 1 }];
rcp.fwdpile.onmake = function () { giveCrExp(skl.crft, 5, 2) }

rcp.fmlim2 = new Recipe(); rcp.fmlim2.id = 158
rcp.fmlim2.name = 'Family Heirloom+';
rcp.fmlim2.type = 4;
rcp.fmlim2.rec = [{ item: acc.strawp, amount: 1 }, { item: acc.fmlim, amount: 1 }];
rcp.fmlim2.res = [{ item: acc.fmlim2, amount: 1 }];
rcp.fmlim2.onmake = function () { giveCrExp(skl.crft, 5, 2) }

rcp.appljc = new Recipe(); rcp.appljc.id = 159;
rcp.appljc.name = 'Apple Juice';
rcp.appljc.type = 1;
rcp.appljc.rec = [{ item: item.appl, amount: 3 }];
rcp.appljc.res = [{ item: item.appljc, amount: 1 }, { item: item.frtplp, amount: 1 }];
rcp.appljc.onmake = function () { giveCrExp(skl.cook, .5, 2) }

rcp.bdgh = new Recipe(); rcp.bdgh.id = 160;
rcp.bdgh.name = 'Bandage';
rcp.bdgh.type = 2;
rcp.bdgh.rec = [{ item: item.cclth, amount: 1 }, { item: item.watr, amount: 3 }];
rcp.bdgh.res = [{ item: item.bdgh, amount: 1 }];
rcp.bdgh.onmake = function () { giveCrExp(skl.crft, .5, 2) }
rcp.bdgh.srect = ['Nearby firesource'];
rcp.bdgh.srec = [function () { if (you.mods.ckfre > 0) return true }];

rcp.wfng = new Recipe(); rcp.wfng.id = 161;
rcp.wfng.name = 'Wolf Fang Necklace';
rcp.wfng.type = 4;
rcp.wfng.rec = [{ item: item.wfng, amount: 5 }, { item: item.thrdnl, amount: 1 }];
rcp.wfng.res = [{ item: acc.wfng, amount: 1 }];
rcp.wfng.onmake = function () { giveCrExp(skl.crft, 5, 3) }

rcp.wfar = new Recipe(); rcp.wfar.id = 162;
rcp.wfar.name = 'Wolf Array';
rcp.wfar.type = 4;
rcp.wfar.rec = [{ item: acc.wfng, amount: 3 }];
rcp.wfar.res = [{ item: acc.wfar, amount: 1 }];
rcp.wfar.onmake = function () { giveCrExp(skl.crft, 10, 3) }


function evaluateSpecialRequirementsForRecipe(recipe) {
	if (recipe.srect == null) {
		return [0];
	}

	let results = [];
	for (let i in recipe.srec) {
		results[i] = (recipe.srec[i]() === true) ? 1 : 2;
	}
	return results;
}

function scan2(arr, val, am) {
	for (let o = 0; o < arr.length + 1; o++) {
		if (o === arr.length) return { a: false, b: arr[o] };
		if (arr[o].id === val.id && arr[o].amount >= am) return { a: true, b: arr[o] }; else continue;
	}
}

function canMake(rc, times) {
	let missing = []; let has = []; let z = []; let b = []; let r = [];
	let o = evaluateSpecialRequirementsForRecipe(rc);
	for (let i = 0; i < rc.rec.length; i++) {
		let sc = new Object();
		if (!rc.rec[i].item.slot) {
			sc = scan2(inv, rc.rec[i].item, rc.rec[i].amount * times);
			z.push(rc.rec[i].item.amount * times);
		} else {
			let ar = findworst(inv, rc.rec[i].item);
			if (ar.length >= rc.rec[i].amount * times) sc.a = true;
			z.push(ar.length); r = ar;
		}
		if (!sc.a) {
			missing.push(rc.rec[i].item); b.push(false)
		} else {
			has.push(rc.rec[i].item); b.push(true)
		}
	} for (let a in global.tstcr) global.tstcr[a].testc = false;
	return { x: missing, y: has, z, o, success: missing.length === 0 && !o.includes(2), b, r };
}


function make(rc, rp, times) {
	times = times || 1
	let check = canMake(rc, times);
	if (rp || !check.success) {
		return check;
	} for (let k = 0; k < times; k++) {
		for (let j = 0; j < rc.rec.length; j++) {
			if (rc.rec[j].return) continue;
			if (!rc.rec[j].item.slot) {
				let itemToAlter = scan2(inv, rc.rec[j].item, rc.rec[j].amount).b;
				itemToAlter.amount -= rc.rec[j].amount;
				if (itemToAlter.amount === 0) removeItem(itemToAlter);
			} else {
				let ar = findworst(inv, rc.rec[j].item); let finar = [];
				for (let m = 0; m < rc.rec[j].amount; m++) finar.push(ar[m]);
				for (let m in finar) removeItem(finar[m]);
			}
		}
		if (!!rc.cmake) { rc.cmake(); }
		else {
			for (let itm in rc.res) {
				if (!rc.res[itm].amount_max) giveItem(rc.res[itm].item, rc.res[itm].amount);
				else { giveItem(rc.res[itm].item, rand(rc.res[itm].amount, rc.res[itm].amount_max)); }
			}
			rc.onmake();
		}
	}
	isort(global.sm);
}


function Vendor() {
	this.name = '';
	this.items = [];
	this.stock = [];
	this.data = { time: 1, rep: 0 }; this.timeorig = 1;
	this.restocked = false;
	this.extra = function () { }
	this.onRestock = function () { this.restocked = true }
	this.onDayPass = function () { if (--this.data.time === 0) { restock(this); this.data.time = this.timeorig; this.onRestock(); this.extra() } }
}

vendor.stvr1 = new Vendor();
vendor.stvr1.name = 'Street Vendor'; vendor.stvr1.infl = 2; vendor.stvr1.dfl = .3;
vendor.stvr1.items = [{ item: item.cbun1, p: 6, c: .8, min: 1, max: 4 }, { item: item.strwb, p: 8, c: .01, min: 1, max: 8 }, { item: item.cbun2, p: 7, c: .5, min: 1, max: 4 }, { item: item.brd, p: 5, c: 1, min: 4, max: 8 }];

vendor.kid1 = new Vendor();
vendor.kid1.name = 'Child Trader';
vendor.kid1.items = [{ item: item.pbl, p: 1, c: 1, min: 10, max: 50 }, { item: item.mcps, p: 2, c: .3, min: 6, max: 16 }, { item: item.spb, p: 3, c: .8, min: 2, max: 8 }, { item: item.bonig, p: 11, c: .2, min: 2, max: 5 }];

vendor.grc1 = new Vendor();
vendor.grc1.name = 'Grocery Shop';
vendor.grc1.data.time = vendor.grc1.timeorig = 3; vendor.grc1.infl = 1.15; vendor.grc1.dfl = .3;
vendor.grc1.data.rep = 10; vendor.grc1.repsc = 8
vendor.grc1.items = [{ item: item.rice, p: 4, c: 1, min: 40, max: 50 }, { item: item.eggn, p: 7, c: 1, min: 8, max: 32 }, { item: item.onn, p: 8, c: 1, min: 5, max: 12 }, { item: item.salt, p: 25, c: .3, min: 2, max: 7 }, { item: item.grlc, p: 14, c: .15, min: 1, max: 8 }, { item: item.wht, p: 5, c: 1, min: 13, max: 29 }, { item: item.ltcc, p: 8, c: .6, min: 3, max: 6 }, { item: item.mlkn, p: 10, c: .4, min: 2, max: 4 }, { item: item.appl, p: 5, c: .8, min: 5, max: 20 }, { item: item.brd, p: 12, c: .85, min: 3, max: 10 }, { item: item.bgt, p: 17, c: .35, min: 1, max: 6 }, { item: item.rwmt1, p: 31, c: .25, min: 4, max: 8 }, { item: item.agrns, p: 8, c: .2, min: 10, max: 30 }, { item: item.watr, p: 2, c: .85, min: 20, max: 70 }];
vendor.grc1.extra = function () {
	if (random() < .2) chss.grc1.data.gets[0] = false;
}

vendor.gens1 = new Vendor();
vendor.gens1.name = 'General Store';
vendor.gens1.time = vendor.gens1.timeorig = 3; vendor.gens1.infl = 1.2; vendor.gens1.dfl = .2;
vendor.gens1.data.rep = 5; vendor.gens1.repsc = 4
vendor.gens1.items = [{ item: item.fwd1, p: 25, c: 1, min: 8, max: 20 }, { item: item.coal2, p: 80, c: .5, min: 2, max: 5 }, { item: item.amrthsck, p: 360, c: .2, min: 1, max: 1 }, { item: item.dmkbk, p: 390, c: .15, min: 1, max: 1 }, { item: item.wsb, p: 16, c: .7, min: 5, max: 11 }, { item: wpn.wsrd1, p: 35, c: .6, min: 1, max: 3 }, { item: eqp.rncp, p: 60, c: .3, min: 1, max: 3 }, { item: eqp.rnss, p: 70, c: .3, min: 1, max: 3 }, { item: eqp.tnc, p: 56, c: .3, min: 1, max: 3 }, { item: eqp.sndl, p: 32, c: .3, min: 1, max: 6 }, { item: wpn.bsrd, p: 100, c: .3, min: 1, max: 2 }, { item: wpn.sprw, p: 130, c: .3, min: 1, max: 3 }, { item: item.wine1, p: 116, c: .2, min: 1, max: 7 }, { item: item.rope, p: 100, c: .65, min: 1, max: 6 }, { item: item.msc1, p: 110, c: .25, min: 1, max: 4 }, { item: item.tbwr1, p: 130, c: .65, min: 1, max: 4 }, { item: item.bed2, p: 500, c: .45, min: 1, max: 1 }, { item: item.cndl, p: 200, c: .55, min: 1, max: 2 }, { item: item.cclth, p: 7, c: .85, min: 15, max: 50 }, { item: item.thrdnl, p: 2, c: .85, min: 3, max: 70 }, { item: acc.ndlb, p: 50, c: .73, min: 1, max: 15 }];
vendor.gens1.extra = function () {
	if (random() < .2) chss.gens1.data.gets[0] = false;
}

vendor.pha1 = new Vendor();
vendor.pha1.name = 'Herbalist';
vendor.pha1.time = vendor.pha1.timeorig = 2; vendor.pha1.infl = 1.25; vendor.pha1.dfl = .2;
vendor.pha1.data.rep = 5; vendor.pha1.repsc = 6
vendor.pha1.items = [{ item: item.sp1, p: 20, c: 1, min: 3, max: 15 }, { item: item.sp2, p: 230, c: .8, min: 2, max: 10 }, { item: item.sp3, p: 690, c: .7, min: 1, max: 5 }, { item: item.bdgh, p: 6, c: .9, min: 5, max: 15 }, { item: acc.vtmns, p: 150, c: .5, min: 1, max: 3 }, { item: acc.mpst, p: 100, c: .8, min: 1, max: 6 }, { item: acc.mshst, p: 480, c: .6, min: 1, max: 1 }, { item: acc.mhhst, p: 600, c: .4, min: 1, max: 1 }, { item: item.hptn1, p: 20, c: 1, min: 8, max: 35 }, { item: item.atd1, p: 40, c: .7, min: 4, max: 13 }, { item: item.psnwrd, p: 400, c: .25, min: 2, max: 5 }, { item: item.smm, p: 70, c: .75, min: 2, max: 8 }, { item: item.mdc1, p: 150, c: .75, min: 1, max: 1 }];
vendor.pha1.extra = function () {
	if (random() < .2) chss.pha1.data.gets[0] = false;
}

function restock(vnd) {
	vnd.stock = []; shuffle(vnd.items);
	for (let ims = 0; ims < vnd.items.length; ims++) {
		if ((!vnd.items[ims].cond || vnd.items[ims].cond() === true) && random() <= vnd.items[ims].c) vnd.stock.push([vnd.items[ims].item, rand(vnd.items[ims].min, vnd.items[ims].max), vnd.items[ims].p]);
		vnd.stock.sort(function (a, b) { if (a[0].id < b[0].id) return -1; if (a[0].id > b[0].id) return 1; return 0 });
	}
}

function shuffle(arr) {
	let copy = []; let index = 0; for (let a in arr) copy[a] = arr[a];
	while (copy.length != 0) { let val = rand(copy.length - 1); arr[index++] = copy[val]; copy.splice(val, 1) }
}

///////////////////////////////////////////
//ACT
///////////////////////////////////////////

function Action() {
	this.name = 'dummy';
	this.desc = 'dummy';
	this.id = 0;
	this.type = 1;
	this.data = {};
	this.have = false;
	this.active = false;
	this.cond = function () { return true }
	this.use = function () { }
	this.activate = function () { }
	this.deactivate = function () { }
}; act.default = new Action(); global.current_a = act.default;

//tendon transformation scripture
//third inner cultivation
//heavenly dragon arts
//eff iron determination / golden rule / wisdom of crisis
//arhat/deep sitting arhat/raised bowl arhat/raised pagoda arhat/meditating arhat/overseas arhat/elephant riding arhat/taming tiger arhat/taming dragon arhat/

act.demo = new Action(); act.demo.id = 1;
act.demo.name = 'Run';
act.demo.desc = function () { return 'Run within this area to improve your physique' + dom.dseparator + '<span style="color:pink">Exp +0.5/s</span><br><span style="color:skyblue">Trains Walking</span><br><span style="color:crimson">Energy Consumption +0.1\/s</span>'; };
act.demo.cond = function (l) {
	if (!global.flags.btl && global.flags.civil && !global.flags.inside && !global.flags.sleepmode && !global.flags.rdng && !global.flags.isshop && !global.flags.work) return true; else { if (l !== false) msg('This isn\'t the best place to run around', 'red'); return false }
}
act.demo.use = function () {
	giveExp(.5, true, true);
	if (you.sat > 0) giveSkExp(skl.walk, 1.5); else giveSkExp(skl.walk, .5);
	you.eqp[6].dp = you.eqp[6].dp - .005 < 0 ? 0 : you.eqp[6].dp - .005;
}
act.demo.activate = function () {
	msg('You start running', 'orange'); this.active = true;
	you.mods.sdrate += .1 * you.mods.runerg; you.mods.stdstps += .5;
	clearInterval(timers.actm); giveEff(you, effect.run);
	timers.actm = setInterval(() => {
		this.use();
	}, 1000);
};
act.demo.deactivate = function () { msg('You stop', 'skyblue'); clearInterval(timers.actm); this.active = false; removeEff(effect.run); you.mods.sdrate -= .1 * you.mods.runerg; you.mods.stdstps -= .5; }

act.scout = new Action(); act.scout.id = 2;
act.scout.name = 'Investigate';
act.scout.desc = function () { return 'Thoroughly examine current area in search for hidden passages, treasure, secrets or anything of interest' };
act.scout.cond = function (l) {
	if (global.flags.isdark && !cansee()) { return false }
	if (!global.flags.btl && global.flags.civil && !global.flags.sleepmode && !global.flags.rdng) return true; else { if (l !== false) msg('You\'re too occupied with something else', 'red'); return false }
}
act.scout.activate = function () {
	msg('You begin to look around', 'springgreen'); this.active = true;
	clearInterval(timers.actm); giveEff(you, effect.scout);
	let t = 2; for (let a in global.current_l.sector) { let m = canScout(global.current_l.sector[a]); if (m === 1) t = m; }
	if (canScout(global.current_l) === 1 || t === 1) msg('You sense something', 'white')
	timers.actm = setInterval(() => {
		this.use();
	}, 1000);
};

act.scout.use = function () {
	if (global.flags.isdark && !cansee()) { deactivateAct(this); msg('You can\'t see anything', 'grey'); return }
	let a1 = canScout(global.current_l); let a2c = []
	for (let a in global.current_l.sector) a2c.push(canScout(global.current_l.sector[a]));
	let a2 = 3; for (let a in a2c) if (a2c[a] !== 3) { if (a2c[a] === 1) { a2 = 1; break } else a2 = 2 }
	if (a1 === 1) global.current_l.onScout(); if (a2 === 1) { for (let a in global.current_l.sector) if (canScout(global.current_l.sector[a]) === 1) global.current_l.sector[a].onScout(); }
	if (a1 === 3 && a2 === 3) {
		msg('There doesn\'t seem to be anything of interest around..', 'lightgrey'); deactivateAct(this)
	} else if (a1 >= 2 && a2 >= 2) {
		msg('You have already explored this area', 'lightgrey'); deactivateAct(this);
	}
}
act.scout.deactivate = function () { msg('You stop', 'skyblue'); clearInterval(timers.actm); this.active = false; removeEff(effect.scout); }

act.demo2 = new Action(); act.demo2.id = -3;
act.demo2.name = 'Selfharm'; act.demo2.type = 2
act.demo2.desc = function () { return 'Injure yourself' };
act.demo2.use = function () {
	let f = findbyid(you.eff, effect.bled.id);
	if (!f) { msg('You ' + select(['stab', 'slash']) + ' your ' + select(['hand', 'chest', 'leg', 'palm', 'arm', 'foot']), 'red'); } else msg('You\'re already injured', 'orange'); giveEff(you, effect.bled, 10, 1);
};

function giveAction(a) {
	if (a.have === false) {
		if (!global.flags.actsu) { global.flags.actsu = true; dom.ct_bt3.innerHTML = 'actions' }
		msg('You learned a new action: <span style="color:tomato">"' + a.name + '"</span>', 'lime', a, 9); a.have = true; acts.push(a); if (acts.length >= 1 && dom.acccon) { empty(dom.acccon); for (let a in acts) renderAct(acts[a]) }
	}
}

///////////////////////////////////////////
//DOM
///////////////////////////////////////////
dom.d0 = addElement(document.body, 'div', 'd1', 'd'); if (!global.flags.aw_u) dom.d0.style.display = 'none';
dom.d1 = addElement(dom.d0, 'div'); dom.d101 = addElement(dom.d0, 'div', 'se_i');
dom.d2c = addElement(dom.d1, 'div', null, 'd2');
dom.d2 = addElement(dom.d2c, 'div'); dom.d2.innerHTML = you.name;
dom.d2_a = addElement(dom.d2c, 'input', 'nch');
dom.d2_a.addEventListener('focusin', function () { dom.d2_a.value = you.name; you.name = ''; dom.d2.innerHTML = '　' });
dom.d2_a.addEventListener('focusout', function () { you.name = dom.d2_a.value; dom.d2_a.value = ''; dom.d2.innerHTML = you.name });
addDesc(dom.d2c, null, 2, you.name, you.desc);
dom.d3 = addElement(dom.d1, 'div', null, 'd3');
dom.d3.innerHTML = ' lvl:' + you.lvl + ' \'' + you.title.name + '\'';
dom.d3.addEventListener('click', function () {
	if (!global.flags.ttlscrnopn) {
		global.flags.ttlscrnopn = true;
		dom.ttlcont = addElement(document.body, 'div', 'youttlc');
		dom.ttlhead = addElement(dom.ttlcont, 'div', 'youttlh');
		dom.ttlhead.innerHTML = 'SELECT YOUR TITLE';
		dom.ttlbd = addElement(dom.ttlcont, 'div');
		dom.ttlbd.style.overflow = 'auto';
		dom.ttlbd.style.maxHeight = window.innerHeight - 130;
		for (let obj in global.titles) {
			this.ttlent = addElement(dom.ttlbd, 'div', null, 'youttl'); let title = global.titles[obj]
			if (obj === 0) this.ttlent.style.borderTop = '';
			this.ttlent.innerHTML = '"' + title.name + '"'; if (global.titles[obj].talent) this.ttlent.innerHTML += " <span style='color:yellow;text-shadow:0px 0px 5px orange'>*</span>"
			addDesc(this.ttlent, title, 5);
			this.ttlent.addEventListener('click', function () {
				you.title = title; empty(dom.ttlcont); document.body.removeChild(dom.ttlcont); dom.d3.innerHTML = ' lvl:' + you.lvl + ' \'' + you.title.name + '\''; empty(global.dscr); global.dscr.style.display = 'none'; global.flags.ttlscrnopn = false;
			});
		}
	}
});
addDesc(dom.d3, you.title, 5, true);
//dom.d5 = addElement(dom.d1,'div','d5'); ???????
dom.d5_1 = addElement(dom.d1, 'div', null, 'hp'); dom.d5_2 = addElement(dom.d1, 'div', null, 'exp'); dom.d5_3 = addElement(dom.d1, 'div', null, 'en');
addDesc(dom.d5_1, null, 2, 'Health', function () { return ('Physical health points, needed to stay alive. You will probably die if it reaches 0<div style="  border-bottom: 1px solid grey;width:100%;height:8px">　</div><br><small>Growth Potential: <span style="color:lime">' + (you.stat_p[0] * 100 << 0) + '%</span></small>') }, true);
addDesc(dom.d5_2, null, 2, 'Experience', function () { return ('Physical and combat experience. You\'ll have to work hard to achieve new heights<div style="  border-bottom: 1px solid grey;width:100%;height:8px">　</div><br><small>EXP Gain Potential: <span style="color:gold">' + (you.exp_t * 100 << 0) + '%</span><br>Current EXP Gain: <span style="color:yellow">' + (you.exp_t * 100 * you.efficiency() << 0) + '%</span></small>') }, true);
addDesc(dom.d5_3, null, 2, 'Energy meter', function () {
	let lose = you.mods.sdrate;
	if (global.flags.iswet === true) lose *= (3 / (1 + (skl.abw.lvl * .03)))
	if (global.flags.iscold === true) lose += effect.cold.duration / 1000 / (1 + skl.coldr.lvl * .05); lose = (lose * 100 << 0) / 100
	return ('Influences the effectiveness of your actions, eat a lot to keep it full<div style="  border-bottom: 1px solid grey;width:100%;height:8px">　</div><br><small>Energy Effectiveness: <span style="color:deeppink">' + ((you.mods.sbonus + 1) * 100 << 0) + '%</span><br>Energy Consumption Rate: <span style="color:gold">' + lose + '/s</span></small>')
}, true)
dom.d5_1_1 = addElement(dom.d5_1, 'div', 'hpp'); dom.d5_2_1 = addElement(dom.d5_2, 'div', 'expp'); dom.d5_3_1 = addElement(dom.d5_3, 'div', 'enn');
dom.d6 = addElement(dom.d1, 'div', 'd6');
addDesc(dom.d6, null, 2, 'Power rank', 'Your power position in this realm. The lower the number the stronger you are');
dom.d4 = addElement(dom.d1, 'div', 'd4');
dom.d4_1 = addElement(dom.d4, 'span', null, 'dd'); dom.d4_2 = addElement(dom.d4, 'span', null, 'dd');
dom.d4_3 = addElement(dom.d4, 'span', null, 'dd'); dom.d4_4 = addElement(dom.d4, 'span', null, 'dd');
addDesc(dom.d4_1, null, 2, 'Physical Strength', function () { return ('Determines physical damage dealt and received<div style="  border-bottom: 1px solid grey;width:100%;height:8px">　</div><br><small>Growth Potential: <span style="color:lime">' + (you.stat_p[1] * 100 << 0) + '%</span></small>') }, true);
addDesc(dom.d4_2, null, 2, 'Agility', function () { return ('Determines hit/dodge rate<div style="  border-bottom: 1px solid grey;width:100%;height:8px">　</div><br><small>Growth Potential: <span style="color:lime">' + (you.stat_p[2] * 100 << 0) + '%</span></small>') }, true);
addDesc(dom.d4_3, null, 2, 'Mental acuity', function () { return ('Determines magic damage dealt and received<div style="  border-bottom: 1px solid grey;width:100%;height:8px">　</div><br><small>Growth Potential: <span style="color:lime">' + (you.stat_p[3] * 100 << 0) + '%</span></small>') }, true);
addDesc(dom.d4_4, null, 2, 'Speed', 'Allows for faster attacks and multihit combos');
dom.d7 = addElement(dom.d1, 'div', 'eq_w');
dom.d7_1 = addElement(dom.d7, 'div', null, 'ddd_2');
dom.d7_slot_1 = addElement(dom.d7_1, 'div', null, 'ddd_1'); dom.d7_slot_1.innerHTML = 'Weapon'; dom.d7_slot_1.style.color = 'grey';
dom.d7_slot_2 = addElement(dom.d7_1, 'div', null, 'ddd_1'); dom.d7_slot_2.innerHTML = 'Shield'; dom.d7_slot_2.style.color = 'grey';
dom.d7_2 = addElement(dom.d7, 'div', null, 'ddd_2');
dom.d7_slot_3 = addElement(dom.d7_2, 'div', null, 'ddd_1'); dom.d7_slot_3.innerHTML = 'Head'; dom.d7_slot_3.style.color = 'grey';
dom.d7_slot_4 = addElement(dom.d7_2, 'div', null, 'ddd_1'); dom.d7_slot_4.innerHTML = 'Body'; dom.d7_slot_4.style.color = 'grey';
dom.d7_3 = addElement(dom.d7, 'div', null, 'ddd_2');
dom.d7_slot_5 = addElement(dom.d7_3, 'div', null, 'ddd_1'); dom.d7_slot_5.innerHTML = 'L Arm'; dom.d7_slot_5.style.color = 'grey';
dom.d7_slot_6 = addElement(dom.d7_3, 'div', null, 'ddd_1'); dom.d7_slot_6.innerHTML = 'R Arm'; dom.d7_slot_6.style.color = 'grey';
dom.d7_4 = addElement(dom.d7, 'div', null, 'ddd_2');
dom.d7_slot_7 = addElement(dom.d7_4, 'div', null, 'ddd_1'); dom.d7_slot_7.innerHTML = 'Legs'; dom.d7_slot_7.style.color = 'grey';
dom.d7_slot_8 = addElement(dom.d7_4, 'div', null, 'ddd_1'); dom.d7_slot_8.innerHTML = 'Accessory'; dom.d7_slot_8.style.color = 'grey';
dom.d7_5 = addElement(dom.d7, 'div', null, 'ddd_2'); dom.d7_5.style.borderBottom = 'solid 2px rgb(12,86,195)';
dom.d7_slot_9 = addElement(dom.d7_5, 'div', null, 'ddd_1'); dom.d7_slot_9.innerHTML = '∥LOCKED∥'; dom.d7_slot_9.style.color = 'grey';
dom.d7_slot_10 = addElement(dom.d7_5, 'div', null, 'ddd_1'); dom.d7_slot_10.innerHTML = '∥LOCKED∥'; dom.d7_slot_10.style.color = 'grey';
dom.d8 = addElement(dom.d1, 'div'); dom.d8.style.fontSize = '.9em'; dom.d8.style.paddingTop = '5px';
dom.d8_2 = addElement(dom.d1, 'div'); dom.d8_2.style.fontSize = '.7em'; if (typeof InstallTrigger == 'undefined') dom.d8_2.style.paddingTop = '5px';
dom.d8_2.innerHTML = 'Critical chance: ' + ((you.mods.crflt + you.crt) * 100) + '%';
dom.d7_slot_3.addEventListener('mouseenter', function () { global._tad = this.innerHTML; this.innerHTML = 'DEF: ' + Math.round(you.eqp[2].str * (you.eqp[2].dp / you.eqp[2].dpmax) + you.str_r + you.eqp[1].str * (you.eqp[1].dp / you.eqp[1].dpmax)) });
dom.d7_slot_3.addEventListener('mouseleave', function () { this.innerHTML = global._tad; });
dom.d7_slot_4.addEventListener('mouseenter', function () { global._tad = this.innerHTML; this.innerHTML = 'DEF: ' + Math.round(you.eqp[3].str * (you.eqp[3].dp / you.eqp[3].dpmax) + you.str_r + you.eqp[1].str * (you.eqp[1].dp / you.eqp[1].dpmax)) });
dom.d7_slot_4.addEventListener('mouseleave', function () { this.innerHTML = global._tad; });
dom.d7_slot_5.addEventListener('mouseenter', function () { global._tad = this.innerHTML; this.innerHTML = 'DEF: ' + Math.round(you.eqp[4].str * (you.eqp[4].dp / you.eqp[4].dpmax) + you.str_r + you.eqp[1].str * (you.eqp[1].dp / you.eqp[1].dpmax)) });
dom.d7_slot_5.addEventListener('mouseleave', function () { this.innerHTML = global._tad; });
dom.d7_slot_6.addEventListener('mouseenter', function () { global._tad = this.innerHTML; this.innerHTML = 'DEF: ' + Math.round(you.eqp[5].str * (you.eqp[5].dp / you.eqp[5].dpmax) + you.str_r + you.eqp[1].str * (you.eqp[1].dp / you.eqp[1].dpmax)) });
dom.d7_slot_6.addEventListener('mouseleave', function () { this.innerHTML = global._tad; });
dom.d7_slot_7.addEventListener('mouseenter', function () { global._tad = this.innerHTML; this.innerHTML = 'DEF: ' + Math.round(you.eqp[6].str * (you.eqp[6].dp / you.eqp[6].dpmax) + you.str_r + you.eqp[1].str * (you.eqp[1].dp / you.eqp[1].dpmax)) });
dom.d7_slot_7.addEventListener('mouseleave', function () { this.innerHTML = global._tad; });
dom.d1m = addElement(document.body, 'div', 'd1', 'd'); if (!global.flags.aw_u) dom.d1m.style.display = 'none'; dom.d101m = addElement(dom.d1m, 'div', 'se_i');
dom.d1m.style.top = 8; dom.d1m.style.left = 457; dom.d1m.style.position = 'absolute'; dom.d101m.style.top = 264
global.special_x = dom.d1m.style.left;
global.special_y = dom.d1m.style.top;

/*dom.d1m.addEventListener('mousedown',function(){
  this.style.left=parseInt(global.special_x)+rand(-5,5)+'px';
  this.style.top=parseInt(global.special_y)+rand(-5,5)+'px';
});
dom.d1m.addEventListener('mouseup',function(){
  this.style.left=parseInt(global.special_x)+'px';
  this.style.top=parseInt(global.special_y)+'px';
});*/
dom._d23m = addElement(dom.d1m, 'div');
addDesc(dom._d23m, null, 3, global.current_m.name, global.current_m.desc);
dom.d2m = addElement(dom._d23m, 'div', null, 'd2');
dom.d3m = addElement(dom._d23m, 'div', null, 'd3m');
dom.d5_1m = addElement(dom.d1m, 'div', null, 'hp'); dom.d5_2m = addElement(dom.d1m, 'div', null, 'exp');
dom.d5_1_1m = addElement(dom.d5_1m, 'div', 'hpp'); dom.d5_2_1m = addElement(dom.d5_2m, 'div');
dom.d5_1_1m.update = function () {
	this.innerHTML = 'hp: ' + format3(global.current_m.hp.toString()) + '/' + format3(global.current_m.hpmax.toString()); dom.d5_1m.style.width = 100 * global.current_m.hp / global.current_m.hpmax + '%';
}
dom.d4m = addElement(dom.d1m, 'div', 'd4');
dom.d4_1m = addElement(dom.d4m, 'span', null, 'dd'); dom.d4_2m = addElement(dom.d4m, 'span', null, 'dd');
dom.d4_3m = addElement(dom.d4m, 'span', null, 'dd'); dom.d4_4m = addElement(dom.d4m, 'span', null, 'dd');
dom.d9m = addElement(dom.d1m, 'div');
dom.d9m.update = function () { this.innerHTML = 'rank: ' + global.text.eranks[global.current_m.rnk]; if (global.current_m.rnk <= 4) this.style.color = 'lightgrey'; else if (global.current_m.rnk > 4 && global.current_m.rnk <= 7) this.style.color = 'white'; else if (global.current_m.rnk > 7 && global.current_m.rnk <= 10) this.style.color = 'lightblue'; else if (global.current_m.rnk > 10 && global.current_m.rnk <= 13) this.style.color = 'lightgreen'; else if (global.current_m.rnk > 13 && global.current_m.rnk <= 16) this.style.color = 'lime'; else if (global.current_m.rnk > 16 && global.current_m.rnk <= 19) this.style.color = 'yellow' }
dom.d9m.style.borderBottom = '#545299 dotted 2px'; dom.d9m.style.backgroundColor = '#272744';
dom.d8m_c = addElement(dom.d1m, 'small', 'bbts');
dom.d8m1 = addElement(dom.d8m_c, 'div', null, 'bbts');
dom.d8m1.innerHTML = 'Pause next battle: <span style=\'color:green\'>&nbspOFF';
dom.d8m1.addEventListener('click', function () {
	if (global.flags.to_pause === true) { if (!global.flags.civil) global.flags.btl = true; global.flags.to_pause = false; this.innerHTML = 'Pause next battle: <span style=\'color:green\'>&nbspOFF'; }
	else { global.flags.to_pause = true; this.innerHTML = 'Pause next battle: <span style=\'color:crimson\'>&nbspON'; }
});
dom.d8m2 = addElement(dom.d8m_c, 'div', null, 'bbts');
dom.d8m2.innerHTML = 'Resume the fight';
dom.d8m2.style.right = '0px'; dom.d8m2.style.position = 'absolute';
dom.d8m2.addEventListener('click', function () { if (!global.flags.civil) global.flags.btl = true; });
dom.d7m_c = addElement(dom.d1m, 'div', 'ainfo');
dom.d7m = addElement(dom.d7m_c, 'small');
dom.d7m.update = function () { global.current_z.size >= 0 ? this.innerHTML = 'Area: ' + global.current_z.name + ' / ' + global.current_z.size : this.innerHTML = 'Area: ' + global.current_z.name + ' / ' + '∞'; }; dom.d7m.update();
dom.inv_ctx = addElement(document.body, 'div', 'inv'); if (!global.flags.aw_u) dom.inv_ctx.style.display = 'none';
dom.inventory = addElement(dom.inv_ctx, 'div');
dom.inv_control = addElement(dom.inventory, 'div', 'inv_control');
dom.inv_btn_1 = addElement(dom.inv_control, 'div', null, 'bts'); dom.inv_btn_2 = addElement(dom.inv_control, 'div', null, 'bts');
dom.inv_btn_3 = addElement(dom.inv_control, 'div', null, 'bts'); dom.inv_btn_4 = addElement(dom.inv_control, 'div', null, 'bts');
dom.inv_btn_5 = addElement(dom.inv_control, 'div', null, 'bts');
dom.inv_ctx_b = addElement(dom.inventory, 'div', 'inv_ctx_b');
dom.inv_control_b = addElement(dom.inv_ctx, 'div', 'inv_control_b');
dom.inv_btn_1_b = addElement(dom.inv_control_b, 'div', null, 'bts_b');
dom.inv_btn_2_b = addElement(dom.inv_control_b, 'div', null, 'bts_b');
dom.inv_btn_3_b = addElement(dom.inv_control_b, 'div', null, 'bts_b');
dom.mn = addElement(dom.inv_control_b, 'div', 'mn');
dom.mn_1 = addElement(dom.mn, 'small', 'mnb'); dom.mn_1.innerHTML = '㊧0';
dom.mn_2 = addElement(dom.mn, 'small', 'mnb'); dom.mn_2.innerHTML = '●0';
dom.mn_3 = addElement(dom.mn, 'small', 'mnb'); dom.mn_3.innerHTML = '●0';
dom.mn_4 = addElement(dom.mn, 'small', 'mnb'); dom.mn_4.innerHTML = '●0';
dom.mn_1.style.textShadow = 'red -1px 1px 0px, crimson 2px 0px 0px'; dom.mn_1.style.backgroundColor = 'darkred'; dom.mn_1.style.color = 'chartreuse';
dom.mn_2.style.color = '#ffd700'; dom.mn_2.style.backgroundColor = '664200';
dom.mn_3.style.color = '#c0c0c0'; dom.mn_3.style.backgroundColor = '383838';
dom.mn_4.style.color = '#ff743f'; dom.mn_4.style.backgroundColor = '662617';
dom.mn_1.style.opacity = 0; dom.mn_2.style.display = 'none'; dom.mn_3.style.display = 'none'; dom.mn_4.style.display = 'none';
dom.ctrmg = addElement(document.body, 'div', 'ctrmg');
dom.ctrmg_ca = addElement(dom.ctrmg, 'div');
dom.ctrmg_cb = addElement(dom.ctrmg, 'div');
dom.ctrwin1 = addElement(dom.ctrmg_cb, 'div'); dom.ctrwin1.style.display = '';
dom.ctrwin2 = addElement(dom.ctrmg_cb, 'div', null, 'ctrwinbx'); dom.ctrwin2.style.display = 'none';
dom.ctrwin3 = addElement(dom.ctrmg_cb, 'div', null, 'ctrwinbx'); dom.ctrwin3.style.display = 'none';
dom.ctrwin4 = addElement(dom.ctrmg_cb, 'div', null, 'ctrwinbx'); dom.ctrwin4.style.display = 'none';
dom.ctrwin5 = addElement(dom.ctrmg_cb, 'div', null, 'ctrwinbx'); dom.ctrwin5.style.display = 'none';
dom.ctrwin6 = addElement(dom.ctrmg_cb, 'div', null, 'ctrwinbx'); dom.ctrwin6.style.display = 'none';
dom.ctrwin7 = addElement(dom.ctrmg_cb, 'div', null, 'ctrwinbx'); dom.ctrwin7.style.display = 'none';
dom.nthngdsp = addElement(dom.ctrmg_cb, 'div');
dom.nthngdsp.style.top = 200; dom.nthngdsp.style.left = 210
dom.nthngdsp.style.position = 'relative'; dom.nthngdsp.style.color = 'grey';
dom.nthngdsp.innerHTML = 'Nothing here yet'; dom.nthngdsp.style.display = 'none'
dom.ctr_1 = addElement(dom.ctrmg_ca, 'div', 'ctrm_1'); if (!global.flags.aw_u) dom.ctr_1.style.display = 'none';
dom.ctr_1a = addElement(dom.ctr_1, 'div');
dom.d_weather = addElement(dom.ctr_1a, 'div', 'ctr_w'); dom.d_weathers = addElement(dom.d_weather, 'small'); dom.d_weathert = addElement(dom.d_weather, 'span'); dom.d_weathers.style.marginRight = 5
dom.d_weathers.addEventListener('click', () => { global.flags.ssngaijin = !global.flags.ssngaijin; wdrseason(global.flags.ssngaijin) })
dom.d_moon = addElement(dom.d_weather, 'span');
dom.d_anomaly = addElement(dom.d_weather, 'span'); dom.d_anomaly.innerHTML = '';
if (typeof InstallTrigger == 'undefined') {
	dom.d_anomaly.style.float = 'right'; dom.d_anomaly.style.top = -4; dom.d_anomaly.style.position = 'relative';
	dom.d_moon.style.float = 'right'; dom.d_moon.style.top = -4; dom.d_moon.style.position = 'relative';
}
dom.d_time = addElement(dom.ctr_1a, 'div', 'ctr_t'); dom.d_time.addEventListener('click', function () { if (global.flags.tmmode >= 3) global.flags.tmmode = 1; else global.flags.tmmode++; this.innerHTML = '<small>' + getDay(global.flags.tmmode) + '</small> ' + timeDisp(time) });
dom.d_lct = addElement(dom.ctr_1a, 'div', 'ctr_l'); dom.d_lct.style.display = 'none'; dom.d_lct.innerHTML = 'Location: '
dom.d_lctc = addElement(dom.d_lct, 'div'); dom.d_lctc.style.fontSize = '0.85em'; dom.d_lctc.style.paddingTop = 7; dom.d_lctc.style.marginLeft = -1; dom.d_lctc.style.display = 'flex'
dom.d_lctt = addElement(dom.d_lctc, 'span'); dom.d_lctte = addElement(dom.d_lctc, 'span')
dom.ctr_2 = addElement(dom.ctrwin1, 'div', 'ctrm_2');
dom.ct_ctrl = addElement(dom.ctrmg, 'div', 'ct_ctrl'); if (!global.flags.aw_u) dom.ct_ctrl.style.display = 'none';
dom.ct_bt1 = addElement(dom.ct_ctrl, 'div', null, 'ct_bts'); dom.ct_bt1.innerHTML = global.flags.asbu ? 'assemble' : '???????';
dom.ct_bt2 = addElement(dom.ct_ctrl, 'div', null, 'ct_bts'); dom.ct_bt2.innerHTML = global.flags.sklu ? 'skills' : '???????';
dom.ct_bt3 = addElement(dom.ct_ctrl, 'div', null, 'ct_bts'); dom.ct_bt3.innerHTML = global.flags.actsu ? 'actions' : '???????';
//dom.ct_bt4 = addElement(dom.ct_ctrl ,'div',null,'ct_bts'); dom.ct_bt4.innerHTML = '';
//dom.ct_bt5 = addElement(dom.ct_ctrl ,'div',null,'ct_bts'); dom.ct_bt5.innerHTML = '';
dom.ct_bt6 = addElement(dom.ct_ctrl, 'div', null, 'ct_bts'); dom.ct_bt6.innerHTML = global.flags.jnlu ? 'journal' : '???????';
dom.ct_bt7 = addElement(dom.ct_ctrl, 'div', null, 'ct_bts'); dom.ct_bt7.innerHTML = 'settings';
dom.ct_bt1.style.borderLeft = 'none'; dom.ct_bt7.style.borderRight = 'none';

dom.ct_bt7.addEventListener('click', () => {
	dom.nthngdsp.style.display = 'none';
	if (global.lw_op === 7) { dom.ctrwin6.style.display = 'none'; dom.ctrwin5.style.display = 'none'; dom.ctrwin4.style.display = 'none'; dom.ctrwin3.style.display = 'none'; dom.ctrwin2.style.display = 'none'; dom.ctrwin1.style.display = ''; global.lw_op = 0; clearInterval(timers.sklupdate); clearInterval(timers.bstmonupdate) }
	else { dom.ctrwin6.style.display = 'none'; dom.ctrwin5.style.display = 'none'; dom.ctrwin4.style.display = ''; dom.ctrwin3.style.display = 'none'; dom.ctrwin1.style.display = 'none'; dom.ctrwin2.style.display = 'none'; global.lw_op = 7 }
	clearInterval(timers.sklupdate); clearInterval(timers.bstmonupdate)
});
dom.ct_bt1.addEventListener('click', () => {
	dom.nthngdsp.style.display = 'none';
	if (global.lw_op === 1) { dom.ctrwin6.style.display = 'none'; dom.ctrwin5.style.display = 'none'; dom.ctrwin4.style.display = 'none'; dom.ctrwin3.style.display = 'none'; dom.ctrwin2.style.display = 'none'; dom.ctrwin1.style.display = ''; global.lw_op = 0; clearInterval(timers.sklupdate); clearInterval(timers.bstmonupdate) }
	else {
		dom.ctrwin6.style.display = 'none'; dom.ctrwin5.style.display = 'none'; dom.ctrwin4.style.display = 'none'; dom.ctrwin3.style.display = 'none'; dom.ctrwin2.style.display = ''; dom.ctrwin1.style.display = 'none'; global.lw_op = 1;
		if (global.rec_d.length > 0) { dom.ct_bt1_c.style.display = ''; rsort(global.rm); clearInterval(timers.sklupdate); clearInterval(timers.bstmonupdate) } else { dom.ct_bt1_c.style.display = 'none'; dom.nthngdsp.style.display = '' }
	}
});

dom.ct_bt3.addEventListener('click', () => {
	dom.nthngdsp.style.display = 'none';
	if (global.lw_op === 3) { dom.ctrwin6.style.display = 'none'; dom.ctrwin5.style.display = 'none'; dom.ctrwin4.style.display = 'none'; dom.ctrwin3.style.display = 'none'; dom.ctrwin2.style.display = 'none'; dom.ctrwin1.style.display = ''; global.lw_op = 0; clearInterval(timers.sklupdate); clearInterval(timers.bstmonupdate) }
	else {
		dom.ctrwin6.style.display = 'none'; dom.ctrwin5.style.display = ''; dom.ctrwin4.style.display = 'none'; dom.ctrwin3.style.display = 'none'; dom.ctrwin2.style.display = 'none'; dom.ctrwin1.style.display = 'none'; global.lw_op = 3; empty(dom.ctrwin5);
		if (acts.length > 0) {
			this.acch = addElement(dom.ctrwin5, 'div'); this.acch.innerHTML = 'A c t i o n　　l i s t';
			this.acch.style.padding = '2px';
			this.acch.style.textAlign = 'center'; this.acch.style.backgroundColor = '#050730';
			this.acch_e = addElement(this.acch, 'div');
			this.acch_e.style.float = 'right'; this.acch_e.style.display = 'flex'; this.acch_e.style.position = 'relative'; this.acch_e.style.top = -6; this.acch_e.style.right = -2;
			this.acch_e.style.height = 20;
			dom.acccon = addElement(dom.ctrwin5, 'div'); empty(dom.acccon);
			for (let a in acts) {
				renderAct(acts[a]);
			}
		} else dom.nthngdsp.style.display = ''
	}
});

function renderAct(a) {
	this.accm = addElement(dom.acccon, 'div', null, 'skwmmc'); a.t = this.accm;
	addDesc(this.accm, null, 2, a.name, a.desc());
	this.accm.innerHTML = a.name; this.accm.style.textAlign = 'center'; this.accm.style.display = 'block'
	if (acts.length - 1 === acts.indexOf(a)) this.accm.style.borderBottom = '1px solid #46a';
	if (a.cond(false) !== true) this.accm.style.color = 'grey'; if (a.active === true) this.accm.style.color = 'lime';
	this.accm.addEventListener('click', function () {
		switch (a.type) {
			case 1:
				if (a.cond() === true && a.id !== global.current_a.id) { activateAct(a); this.style.color = 'lime' } else
					if (a.id === global.current_a.id) { deactivateAct(global.current_a); this.style.color = 'inherit' }
				break;
			case 2: if (a.cond() === true) a.use(); break;
			case 3: break;
		}
		for (let a in acts) refreshAct(acts[a].t, acts[a])
	})
}
function refreshAct(e, a) { e.style.color = 'inherit'; if (a.cond(false) !== true) e.style.color = 'grey'; if (a.active === true) e.style.color = 'lime'; }

function activateAct(actn) {
	global.current_a.deactivate(); actn.activate(); global.current_a = actn; global.flags.busy = true; dom.ct_bt3.style.backgroundColor = 'darkslategray'
}

function deactivateAct(actn) {
	actn.deactivate(); global.current_a = act.default; global.flags.busy = false; dom.ct_bt3.style.backgroundColor = 'inherit'; for (let a in acts) refreshAct(acts[a].t, acts[a])
}

dom.ct_bt2.addEventListener('click', function () {
	dom.nthngdsp.style.display = 'none';
	if (global.lw_op === 2) { dom.ctrwin6.style.display = 'none'; dom.ctrwin5.style.display = 'none'; dom.ctrwin4.style.display = 'none'; dom.ctrwin3.style.display = 'none'; dom.ctrwin2.style.display = 'none'; dom.ctrwin1.style.display = ''; global.lw_op = 0; clearInterval(timers.sklupdate); clearInterval(timers.bstmonupdate) }
	else {
		dom.ctrwin6.style.display = 'none'; dom.ctrwin5.style.display = 'none'; dom.ctrwin4.style.display = 'none'; dom.ctrwin3.style.display = ''; dom.ctrwin2.style.display = 'none'; dom.ctrwin1.style.display = 'none'; global.lw_op = 2; if (you.skls.length > 0) {
			dom.nthngdsp.style.display = 'none';
			empty(dom.ctrwin3); this.skwm = addElement(dom.ctrwin3, 'div'); this.skwm.innerHTML = 'S k i l l　　l i s t';
			this.skwm.style.padding = '2px';
			this.skwm.style.textAlign = 'center'; this.skwm.style.backgroundColor = '#050730';
			this.skwm_e = addElement(this.skwm, 'div');
			this.skwm_e.style.float = 'right'; this.skwm_e.style.display = 'flex'; this.skwm_e.style.position = 'relative'; this.skwm_e.style.top = -6; this.skwm_e.style.right = -2;
			this.skwm_e.style.height = 20;
			this.skwm_e_btn_1_b = addElement(this.skwm_e, 'div', null, 'bts_b'); this.skwm_e_btn_1_b.innerHTML = 'A-Z'; this.skwm_e_btn_1_b.style.border = '1px solid #46a';
			this.skwm_e_btn_2_b = addElement(this.skwm_e, 'div', null, 'bts_b'); this.skwm_e_btn_2_b.innerHTML = 'TPE'; this.skwm_e_btn_2_b.style.border = '1px solid #46a';
			this.skwm_e_btn_3_b = addElement(this.skwm_e, 'div', null, 'bts_b'); this.skwm_e_btn_3_b.innerHTML = 'LVL'; this.skwm_e_btn_3_b.style.border = '1px solid #46a';
			this.skwm_e_btn_1_b.addEventListener('click', function () {
				if (global.flags.ssort_a === true) {
					you.skls.sort(function (a, b) { if (a.name < b.name) return -1; if (a.name > b.name) return 1; return 0 });
					global.flags.ssort_a = false;
				} else {
					you.skls.sort(function (a, b) { if (a.name > b.name) return -1; if (a.name < b.name) return 1; return 0 });
					global.flags.ssort_a = true;
				} empty(dom.skcon)
				for (let m = 0; m < you.skls.length; m++) { renderSkl(you.skls[m]); if (m === you.skls.length - 1) dom.skcon.children[m].style.borderBottom = '1px solid #46a'; }
			});
			this.skwm_e_btn_2_b.addEventListener('click', function () {
				if (global.flags.ssort_b === true) {
					you.skls.sort(function (a, b) { if (a.type < b.type) return -1; if (a.type > b.type) return 1; if (a.id < b.id) return -1; if (a.id > b.id) return 1; return 0 });
					global.flags.ssort_b = false;
				} else {
					you.skls.sort(function (a, b) { if (a.type > b.type) return -1; if (a.type < b.type) return 1; if (a.id > b.id) return -1; if (a.id < b.id) return 1; return 0 });
					global.flags.ssort_b = true;
				} empty(dom.skcon)
				for (let m = 0; m < you.skls.length; m++) { renderSkl(you.skls[m]); if (m === you.skls.length - 1) dom.skcon.children[m].style.borderBottom = '1px solid #46a'; }
			});
			this.skwm_e_btn_3_b.addEventListener('click', function () {
				if (global.flags.ssort_b === true) {
					you.skls.sort(function (a, b) { if (a.lvl < b.lvl) return -1; if (a.lvl > b.lvl) return 1; if (a.exp < b.exp) return -1; if (a.exp > b.exp) return 1; return 0 });
					global.flags.ssort_b = false;
				} else {
					you.skls.sort(function (a, b) { if (a.lvl > b.lvl) return -1; if (a.lvl < b.lvl) return 1; if (a.exp > b.exp) return -1; if (a.exp < b.exp) return 1; return 0 });
					global.flags.ssort_b = true;
				} empty(dom.skcon)
				for (let m = 0; m < you.skls.length; m++) { renderSkl(you.skls[m]); if (m === you.skls.length - 1) dom.skcon.children[m].style.borderBottom = '1px solid #46a'; }
			});
			addDesc(this.skwm_e_btn_1_b, null, 2, 'Filter', 'Alphabetically');
			addDesc(this.skwm_e_btn_2_b, null, 2, 'Filter', 'by Type');
			addDesc(this.skwm_e_btn_3_b, null, 2, 'Filter', 'by Levels');
			dom.skcon = addElement(dom.ctrwin3, 'div'); dom.skcon.style.overflow = 'auto'; dom.skcon.style.height = 335; dom.skcon.style.width = '100%'
			for (let m = 0; m < you.skls.length; m++) { renderSkl(you.skls[m]); if (m === you.skls.length - 1) dom.skcon.children[m].style.borderBottom = '1px solid #46a'; }
			let sklsize = you.skls.length; timers.sklupdate = setInterval(() => {
				if (sklsize < you.skls.length) {
					empty(dom.skcon);
					for (let m = 0; m < you.skls.length; m++) { renderSkl(you.skls[m]); if (m === you.skls.length - 1) dom.skcon.children[m].style.borderBottom = '1px solid #46a'; }
				}
				for (let n = 1; n < you.skls.length + 1; n++) {
					dom.skcon.children[n - 1].children[0].innerHTML = you.skls[n - 1].name + ' lvl: ' + you.skls[n - 1].lvl;
					dom.skcon.children[n - 1].children[0].style.fontSize = you.skls[n - 1].sp;
					dom.skcon.children[n - 1].children[1].innerHTML = '　exp: ' + formatw(Math.floor(you.skls[n - 1].exp)) + '/' + formatw(you.skls[n - 1].expnext_t);
					dom.skcon.children[n - 1].children[2].children[0].style.width = you.skls[n - 1].exp / you.skls[n - 1].expnext_t * 100 + '%';
					//if(you.skls[n-1].lastupd&&you.skls[n-1].lastupd-time.minute>=1) dom.skcon.children[n-1].children[2].children[0].style.backgroundColor='limegreen'; else dom.skcon.children[n-1].children[2].children[0].style.backgroundColor='yellow';
				}
			}, 1000)
		} else dom.nthngdsp.style.display = ''
	}
});
dom.ct_bt6.addEventListener('click', function () {
	if (!global.flags.jnlu) return; dom.nthngdsp.style.display = 'none';
	if (global.lw_op === 6) { dom.ctrwin6.style.display = 'none'; dom.ctrwin5.style.display = 'none'; dom.ctrwin4.style.display = 'none'; dom.ctrwin3.style.display = 'none'; dom.ctrwin2.style.display = 'none'; dom.ctrwin1.style.display = ''; global.lw_op = 0; clearInterval(timers.sklupdate); clearInterval(timers.bstmonupdate) }
	else {
		dom.ctrwin6.style.display = ''; dom.ctrwin5.style.display = 'none'; dom.ctrwin4.style.display = 'none'; dom.ctrwin3.style.display = 'none'; dom.ctrwin2.style.display = 'none'; dom.ctrwin1.style.display = 'none'; global.lw_op = 6;
		empty(dom.ctrwin6)
		this.jlbl = addElement(dom.ctrwin6, 'div');
		this.jlbl.innerHTML = 'J o u r n a l';
		this.jlbl.style.padding = '2px';
		this.jlbl.style.textAlign = 'center'; this.jlbl.style.backgroundColor = '#050730'; this.jlbl.style.borderBottom = '1px solid rgb(12,86,195)'
		this.jlmain = addElement(dom.ctrwin6, 'div'); this.jlmain.style.height = 336; this.jlmain.style.background = 'linear-gradient(0deg, rgb(35, 67, 125), rgb(19, 18, 97))'
		this.jlbod = addElement(this.jlmain, 'div');
		this.jlbrw1 = addElement(this.jlbod, 'div', null, 'jrow');
		dom.jlbrw1s1 = addElement(this.jlbrw1, 'div', 'jcell1', 'jcell'); dom.jlbrw1s2 = addElement(this.jlbrw1, 'div', 'jcell2', 'jcell');
		this.jlbrw2 = addElement(this.jlbod, 'div', null, 'jrow');
		this.jlbrw2s1 = addElement(this.jlbrw2, 'div', 'jcell3', 'jcell'); this.jlbrw2s2 = addElement(this.jlbrw2, 'div', 'jcell4', 'jcell');
		this.jlbod.style.height = 100; this.jlbod.style.width = '100%';
		dom.jlbrw1s1.innerHTML = 'Q U E S T S'; dom.jlbrw1s2.innerHTML = global.flags.bstu === true ? 'B E S T I A R Y' : '????????????'
		this.jlbrw2s1.innerHTML = '????????????'; this.jlbrw2s2.innerHTML = 'S T A T I S T I C S';
		dom.jlbrw1s1.addEventListener('click', () => {
			empty(dom.ctrwin6); global.lw_op = -1;
			qsts.sort(function (a, b) { if ((a.id > b.id) && a.data.started === true) return -1; if ((a.id < b.id) && a.data.done === true && a.data.started === false) return 1 });
			dom.qstbody = addElement(dom.ctrwin6, 'div');
			this.qstlbl = addElement(dom.qstbody, 'div'); this.qstlbl.innerHTML = 'Q U E S T　　L I S T'
			this.qstlbl.style.textAlign = 'center'; this.qstlbl.style.padding = 7; this.qstlbl.style.background = 'linear-gradient(180deg,#182347,#13152f)';
			for (let a in qsts) {
				let c, rarc, rarts = '';
				switch (qsts[a].rar) {
					case 0: { rarc = 'grey'; break }
					case 1: { rarc = 'white'; break }
					case 2: { rarts = '0px 0px 1px blue'; rarc = 'cyan'; break }
					case 3: { rarts = '0px 0px 2px lime'; rarc = 'lime'; break }
					case 4: { rarts = '0px 0px 3px orange'; rarc = 'yellow'; break }
					case 5: { rarts = '0px 0px 2px crimson,0px 0px 5px red'; rarc = 'orange'; break }
					case 6: { rarts = '1px 1px 1px black,0px 0px 2px purple'; rarc = 'purple'; break }
					case 7: { rarts = 'hotpink 1px 1px .1em,cyan -1px -1px .1em'; rarc = 'black'; break }
				}
				if (qsts[a].data.done) c = 'green'; if (qsts[a].data.started) c = 'cyan'
				this.qstcell = addElement(dom.qstbody, 'div', null, 'skwmmc');
				this.qstcell.innerHTML = qsts[a].name; this.qstcell.style.color = c; this.qstcell.style.textAlign = 'center'; this.qstcell.style.display = 'block';
				let rar = ''; for (let i = 0; i < qsts[a].rar; i++) rar += ' ★ ';
				this.qstcell.innerHTML += ' <small style="font-size:.6em;color:' + rarc + ';text-shadow:' + rarts + '">' + rar + '</small>'
				if (qsts[a].repeatable) this.qstcell.innerHTML += '<small style="color:grey"> ≶</small>';
				if (qsts.length - 1 == Number(a)) this.qstcell.style.borderBottom = '1px solid #46a';
				this.qstcell.addEventListener('click', function () {
					empty(dom.qstbody); this.qmain = addElement(dom.qstbody, 'div');
					this.qmain.style.height = 359; this.qmain.style.width = '100%'; this.qmain.style.background = 'linear-gradient(180deg,#040b2d,#29071c)'; this.qmain.style.textAlign = 'center'
					this.qlabl = addElement(this.qmain, 'small'); this.qlabl.innerHTML = '#' + qsts[a].id + ': ' + qsts[a].name + ' [<small style="color:' + rarc + ';text-shadow:' + rarts + '">' + rar + '</small>]' + (qsts[a].data.done && !qsts[a].data.started ? '<span style="color:lime"> completed</span>' : '<span style="color:yellow"> in progress</span>');
					this.qlabl.style.padding = 6; this.qlabl.style.borderBottom = 'dotted 2px #2b408a'; this.qlabl.style.backgroundColor = '#12152f'; this.qlabl.style.display = 'inherit'
					this.qstatba = addElement(this.qmain, 'small'); this.qstatba.innerHTML = 'Location: <span style="color:green">' + qsts[a].loc + '</span>';
					this.qstatba.style.borderBottom = '1px solid #2b408a'; this.qstatba.style.display = 'block';
					this.qdsc = addElement(this.qmain, 'div'); this.qdsc.innerHTML = qsts[a].desc; this.qdsc.style.padding = 12; this.qdsc.style.borderBottom = 'dotted 2px #2b408a';
					this.qdsc.style.color = '#f7ff82'
					this.qtodo = addElement(this.qmain, 'div'); let goals = qsts[a].data.done && !qsts[a].data.started ? qsts[a].goalsf() : qsts[a].goals();
					this.qtodo.style.padding = 6;
					this.qtodo.innerHTML = '「Objectives」'; this.qtodo.style.color = '#ffc319'; this.qtodo.style.backgroundColor = '#12152f'
					this.qgoalbod = addElement(this.qmain, 'div');
					this.qgoalbod.style.borderBottom = 'dotted 2px #2b408a';
					for (let b in goals) {
						this.qtodoitm = addElement(this.qgoalbod, 'div');
						this.qtodoitm.style.padding = 4; this.qtodoitm.style.fontSize = 'smaller'; this.qtodoitm.style.backgroundColor = '#182247';
						this.qtodoitm.style.borderTop = '1px solid #3b3158'
						this.qtodoitm.innerHTML = goals[b];
					}
					this.qstatbak = addElement(this.qmain, 'div', 'qtrtn'); this.qstatbak.innerHTML = '<= Return';
					this.qstatbak.addEventListener('click', () => { dom.jlbrw1s1.click() });
				});
			}
		});
		dom.jlbrw1s2.addEventListener('click', function () {
			if (!global.flags.bstu) return; empty(dom.ctrwin6); global.lw_op = -1;
			let bst_entr_case = addElement(dom.ctrwin6, 'div'); bst_entr_case.style.height = '84%'; bst_entr_case.style.backgroundColor = 'rgb(0,20,44)'; bst_entr_case.style.overflow = 'auto'
			this.bst_entr_head = addElement(bst_entr_case, 'div', null, 'bst_entr');
			this.bst_entr_head.style.textAlign = 'center';
			this.bst_entr_head.style.paddingTop = '3px'; this.bst_entr_head.style.paddingBottom = '3px';
			this.bst_entr_head1 = addElement(this.bst_entr_head, 'div', null, 'bst_entr1'); this.bst_entr_head1.innerHTML = 'name'
			this.bst_entr_head2 = addElement(this.bst_entr_head, 'div', null, 'bst_entr2'); this.bst_entr_head2.innerHTML = 'rank'
			this.bst_entr_head3 = addElement(this.bst_entr_head, 'div', null, 'bst_entr3'); this.bst_entr_head3.innerHTML = 'kills'
			for (let ii = 1; ii < global.bestiary.length; ii++) {
				let mon; for (let id in creature) if (creature[id].id === global.bestiary[ii].id) mon = creature[id];
				this.bst_entr_m_case = addElement(bst_entr_case, 'div', 'bst_entrh', 'bst_entr'); this.bst_entr_m_case.style.backgroundColor = 'rgb(10,30,54)';
				this.bst_entr_m_e1 = addElement(this.bst_entr_m_case, 'div', null, 'bst_entr1'); this.bst_entr_m_e1.innerHTML = mon.name;
				this.bst_entr_m_e2 = addElement(this.bst_entr_m_case, 'div', null, 'bst_entr2'); this.bst_entr_m_e2.innerHTML = global.text.eranks[mon.rnk];
				if (mon.rnk <= 4) this.bst_entr_m_e2.style.color = 'lightgrey'; else if (mon.rnk > 4 && mon.rnk <= 7) this.bst_entr_m_e2.style.color = 'white'; else if (mon.rnk > 7 && mon.rnk <= 10) this.bst_entr_m_e2.style.color = 'lightblue'; else if (mon.rnk > 10 && mon.rnk <= 13) this.bst_entr_m_e2.style.color = 'lightgreen'; else if (mon.rnk > 13 && mon.rnk <= 16) this.bst_entr_m_e2.style.color = 'lime'; else if (mon.rnk > 16 && mon.rnk <= 19) this.bst_entr_m_e2.style.color = 'yellow';
				this.bst_entr_m_e3 = addElement(this.bst_entr_m_case, 'div', null, 'bst_entr3'); this.bst_entr_m_e3.innerHTML = global.bestiary[ii].kills;
				addDesc(this.bst_entr_m_case, mon, 10);
			} let monsize = global.bestiary.length;
			timers.bstmonupdate = setInterval(function () {
				if (monsize < global.bestiary.length) {
					for (let ii = monsize; ii < global.bestiary.length; ii++) {
						let mon; for (let id in creature) if (creature[id].id === global.bestiary[ii].id) mon = creature[id];
						this.bst_entr_m_case = addElement(bst_entr_case, 'div', 'bst_entrh', 'bst_entr'); this.bst_entr_m_case.style.backgroundColor = 'rgb(10,30,54)';
						this.bst_entr_m_e1 = addElement(this.bst_entr_m_case, 'div', null, 'bst_entr1'); this.bst_entr_m_e1.innerHTML = mon.name;
						this.bst_entr_m_e2 = addElement(this.bst_entr_m_case, 'div', null, 'bst_entr2'); this.bst_entr_m_e2.innerHTML = global.text.eranks[mon.rnk];
						if (mon.rnk <= 4) this.bst_entr_m_e2.style.color = 'lightgrey'; else if (mon.rnk > 4 && mon.rnk <= 7) this.bst_entr_m_e2.style.color = 'white'; else if (mon.rnk > 7 && mon.rnk <= 10) this.bst_entr_m_e2.style.color = 'lightblue'; else if (mon.rnk > 10 && mon.rnk <= 13) this.bst_entr_m_e2.style.color = 'lightgreen'; else if (mon.rnk > 13 && mon.rnk <= 16) this.bst_entr_m_e2.style.color = 'lime'; else if (mon.rnk > 16 && mon.rnk <= 19) this.bst_entr_m_e2.style.color = 'yellow';
						this.bst_entr_m_e3 = addElement(this.bst_entr_m_case, 'div', null, 'bst_entr3'); this.bst_entr_m_e3.innerHTML = global.bestiary[ii].kills;
						addDesc(this.bst_entr_m_case, mon, 10);
					} monsize = global.bestiary.length
				}
				for (let ii = 1; ii < global.bestiary.length; ii++) {
					let mon; for (let id in creature) if (creature[id].id === global.bestiary[ii].id) mon = creature[id];
					bst_entr_case.children[ii].children[2].innerHTML = global.bestiary[ii].kills;
				}
			}, 1000);
		});
		this.jlbrw2s2.addEventListener('click', function () {
			empty(dom.ctrwin6); global.lw_op = -1;
			dom.ch_1 = addElement(dom.ctrwin6, 'div'); dom.ch_1.style.height = '359px'; dom.ch_1.style.background = 'linear-gradient(0deg, rgb(24, 18, 51), rgb(0, 44, 87))';
			dom.flsthdr = addElement(dom.ch_1, 'div'); dom.flsthdr.innerHTML = 'S T A T S'; dom.flsthdr.style.background = 'linear-gradient(0deg,rgb(21, 17, 49),rgb(0, 42, 85))';
			dom.flsthdr.style.borderBottom = '1px #44c dashed'; dom.flsthdr.style.padding = 2; dom.flsthdr.style.fontSize = 'small'; dom.flsthdr.style.height = 18
			dom.statbod = addElement(dom.ch_1, 'div'); dom.statbod.style.overflow = 'auto'; dom.statbod.style.maxHeight = '93%'; dom.statbod.style.background = 'linear-gradient(90deg,rgb(1,1,87),rgb(55,7,57))'; dom.ch_1.style.textAlign = 'center';
			dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
			dom.tcleft.innerHTML = 'Game start time'; dom.tcright.innerHTML = global.stat.sttime
			/*dom.tccon=addElement(dom.statbod,'small',null,'sttc'); dom.tcleft=addElement(dom.tccon,'div',null,'sttl'); dom.tcright=addElement(dom.tccon,'div',null,'sttr');
			dom.tcleft.innerHTML='Time passed'; let br=global.stat.tick;dom.tcright.innerHTML=(br>=86400?(br/(86400)<<0+' Days '):'')+(br%86400>=3600?(((br%86400/3600)<<0)%24+':'):'')+(br%3600<60?'00':(br%3600>=600?(br%3600/60)<<0:'0'+(br%3600/60)<<0))+(':'+(br%360<60?'0'+br%60:br%60));*/
			dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
			dom.tcleft.innerHTML = 'Ingame time passed'; let br = time.minute - 338143959; dom.tcright.innerHTML = (br >= YEAR ? '<span style="color:orange">' + (br / YEAR << 0) + '</span> Years ' : '') + (br >= MONTH ? '<span style="color:yellow">' + (br / MONTH << 0) % 12 + '</span> Months ' : '') + (br >= DAY ? '<span style="color:lime">' + (br / DAY << 0) % 30 + '</span> Days ' : '') + (br / HOUR % 24 << 0) + ':' + (br % 60 < 10 ? '0' + br % 60 : br % 60); dom.tcright.style.fontSize = '.9em';
			if (global.stat.gsvs > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Game saves'; dom.tcright.innerHTML += global.stat.gsvs
			}
			if (global.stat.athme > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Total time spent at home'; let br = global.stat.athme; dom.tcright.innerHTML = (br >= YEAR ? '<span style="color:orange">' + (br / YEAR << 0) + '</span> Years ' : '') + (br >= MONTH ? '<span style="color:yellow">' + (br / MONTH << 0) % 12 + '</span> Months ' : '') + (br >= DAY ? '<span style="color:lime">' + (br / DAY << 0) % 30 + '</span> Days ' : '') + (br / HOUR % 24 << 0) + ':' + (br % 60 < 10 ? '0' + br % 60 : br % 60)
			}
			if (global.stat.timeslp > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Time Slept'; let br = global.stat.timeslp; dom.tcright.innerHTML = (br >= YEAR ? '<span style="color:orange">' + (br / YEAR << 0) + '</span> Years ' : '') + (br >= MONTH ? '<span style="color:yellow">' + (br / MONTH << 0) % 12 + '</span> Months ' : '') + (br >= DAY ? '<span style="color:lime">' + (br / DAY << 0) % 30 + '</span> Days ' : '') + (br / HOUR % 24 << 0) + ':' + (br % 60 < 10 ? '0' + br % 60 : br % 60)
			}
			if (global.stat.lgtstk > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Times struck by lightning'; dom.tcright.innerHTML = '<span style="color:black;background-color:yellow">' + global.stat.lgtstk + '</span>'
			}
			if (global.stat.qstc > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Quests completed'; dom.tcright.innerHTML = global.stat.qstc
			}
			if (global.stat.jcom > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Jobs completed'; dom.tcright.innerHTML = global.stat.jcom
			}
			if (global.stat.dsct > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Discoveries made'; dom.tcright.innerHTML = global.stat.dsct
			}
			if (global.stat.smovet > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Times walked'; dom.tcright.innerHTML = global.stat.smovet
			}
			if (global.stat.cat_c > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Cat pets'; dom.tcright.innerHTML = global.stat.cat_c
			}
			if (global.stat.fooda > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Food consumed'; dom.tcright.innerHTML = global.stat.fooda
			}
			if (global.stat.foodt > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Bad food consumed'; dom.tcright.innerHTML = global.stat.foodt
			}
			if (global.stat.foodb > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Drinks consumed'; dom.tcright.innerHTML = global.stat.foodb
			}
			if (global.stat.foodal > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Alcohol consumed'; dom.tcright.innerHTML = global.stat.foodal
			}
			if (global.stat.ftried > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Unique food tried'; dom.tcright.innerHTML = global.stat.ftried
			}
			if (global.stat.medst > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Medicine used'; dom.tcright.innerHTML = global.stat.medst
			}
			if (global.stat.potst > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Potions consumed'; dom.tcright.innerHTML = global.stat.potst
			}
			if (global.stat.plst > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Pills consumed'; dom.tcright.innerHTML = global.stat.plst
			}
			if (global.stat.igtttl > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Items picked up'; dom.tcright.innerHTML = global.stat.igtttl
			}
			if (global.stat.dsst > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Items disassembled'; dom.tcright.innerHTML = global.stat.dsst
			}
			if (global.stat.thrt > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Items thrown away'; dom.tcright.innerHTML = global.stat.thrt
			}
			if (global.stat.crftt > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Items crafted'; dom.tcright.innerHTML = global.stat.crftt
			}
			if (global.rec_d.length > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Recipes unlocked'; dom.tcright.innerHTML = global.rec_d.length
			}
			if (you.skls.length > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Skills unlocked'; dom.tcright.innerHTML = you.skls.length
			}
			if (global.titles.length > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Titles unlocked'; dom.tcright.innerHTML = global.titles.length
			}
			if (global.stat.exptotl > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Total EXP gained'; dom.tcright.innerHTML = formatw(global.stat.exptotl)
			}
			if (global.stat.slvs > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Total skill levels'; dom.tcright.innerHTML = global.stat.slvs
			}
			if (global.stat.moneyg > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Money acquired';
				dom.ch_etn2_1 = addElement(dom.tcright, 'span'); dom.ch_etn2_1.style.width = '33.3%';
				dom.ch_etn2_2 = addElement(dom.tcright, 'span'); dom.ch_etn2_2.style.width = '33.3%';
				dom.ch_etn2_3 = addElement(dom.tcright, 'span'); dom.ch_etn2_3.style.width = '33.3%'; let p = global.stat.moneyg
				if (p >= GOLD) { dom.ch_etn2_1.innerHTML = (dom.coingold + ((p / GOLD) << 0)); dom.ch_etn2_1.style.backgroundColor = 'rgb(102, 66, 0)'; }
				if (p >= SILVER && p % GOLD >= SILVER) { dom.ch_etn2_2.innerHTML = (dom.coinsilver + ((p / SILVER % SILVER) << 0)); dom.ch_etn2_2.style.backgroundColor = 'rgb(56, 56, 56)'; }
				if (p < SILVER || (p > SILVER && p % SILVER > 0)) { dom.ch_etn2_3.innerHTML = (dom.coincopper + ((p % SILVER) << 0)); dom.ch_etn2_3.style.backgroundColor = 'rgb(102, 38, 23)'; }
			}
			if (global.stat.moneysp > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Money spent in shops';
				dom.ch_etn2_1 = addElement(dom.tcright, 'span'); dom.ch_etn2_1.style.width = '33.3%';
				dom.ch_etn2_2 = addElement(dom.tcright, 'span'); dom.ch_etn2_2.style.width = '33.3%';
				dom.ch_etn2_3 = addElement(dom.tcright, 'span'); dom.ch_etn2_3.style.width = '33.3%'; let p = global.stat.moneysp
				if (p >= GOLD) { dom.ch_etn2_1.innerHTML = (dom.coingold + ((p / GOLD) << 0)); dom.ch_etn2_1.style.backgroundColor = 'rgb(102, 66, 0)'; }
				if (p >= SILVER && p % GOLD >= SILVER) { dom.ch_etn2_2.innerHTML = (dom.coinsilver + ((p / SILVER % SILVER) << 0)); dom.ch_etn2_2.style.backgroundColor = 'rgb(56, 56, 56)'; }
				if (p < SILVER || (p > SILVER && p % SILVER > 0)) { dom.ch_etn2_3.innerHTML = (dom.coincopper + ((p % SILVER) << 0)); dom.ch_etn2_3.style.backgroundColor = 'rgb(102, 38, 23)'; }
			}
			if (global.stat.buyt > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Goods bought'; dom.tcright.innerHTML = global.stat.buyt
			}
			if (global.stat.rdttl > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Books read'; dom.tcright.innerHTML = global.stat.rdttl; addDesc(dom.tccon, null, 2, 'Info', '<span style="color:lie">Click to list known books</span>');
				dom.tccon.addEventListener('click', function () {
					if (!global.flags.bksstt) {
						global.flags.bksstt = true;
						dom.bkssttbd = addElement(document.body, 'div', null, 'bksstt'); dom.bkssttbd.addEventListener('click', function () { empty(dom.bkssttbd); document.body.removeChild(dom.bkssttbd); global.flags.bksstt = false; global.dscr.style.display = 'none' });
						let bks = []; for (let a in item) if (item[a].data.finished) bks.push(item[a]);
						for (let a in bks) {
							dom.bkssttcell = addElement(dom.bkssttbd, 'div', null, 'blssttc');
							dom.bkssttcell.innerHTML = bks[a].name; addDesc(dom.bkssttcell, bks[a]);
							switch (bks[a].rar) {
								case 0: { dom.bkssttcell.style.color = 'grey'; break }
								case 1: { dom.bkssttcell.style.color = 'rgb(188,254,254)'; break }
								case 2: { dom.bkssttcell.style.textShadow = '0px 0px 1px blue'; dom.bkssttcell.style.color = 'cyan'; break }
								case 3: { dom.bkssttcell.style.textShadow = '0px 0px 2px lime'; dom.bkssttcell.style.color = 'lime'; break }
								case 4: { dom.bkssttcell.style.textShadow = '0px 0px 3px orange'; dom.bkssttcell.style.color = 'yellow'; break }
								case 5: { dom.bkssttcell.style.textShadow = '0px 0px 2px crimson,0px 0px 5px red'; dom.bkssttcell.style.color = 'orange'; break }
								case 6: { dom.bkssttcell.style.textShadow = '1px 1px 1px black,0px 0px 2px purple'; dom.bkssttcell.style.color = 'purple'; break }
							}
						}
					}
				});
			}
			if (global.stat.rdgtttl > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Total reading time'; let br = global.stat.rdgtttl; dom.tcright.innerHTML = (br >= YEAR ? '<span style="color:orange">' + (br / YEAR << 0) + '</span> Years ' : '') + (br >= MONTH ? '<span style="color:yellow">' + (br / MONTH << 0) % 12 + '</span> Months ' : '') + (br >= DAY ? '<span style="color:lime">' + (br / DAY << 0) % 30 + '</span> Days ' : '') + (br / HOUR % 24 << 0) + ':' + (br % 60 < 10 ? '0' + br % 60 : br % 60)
			}
			if (global.stat.popt > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Times description window appeared'; dom.tcright.innerHTML = global.stat.popt
			}
			if (global.stat.dmgdt > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Total damage dealt'; dom.tcright.innerHTML = formatw(global.stat.dmgdt)
			}
			if (global.stat.dmgrt > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Total damage recieved'; dom.tcright.innerHTML = formatw(global.stat.dmgrt)
			}
			if (global.stat.deadt > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Times died'; dom.tcright.innerHTML = global.stat.deadt
			}
			if (global.stat.deadt > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Last cause of casualty'; dom.tcright.innerHTML = getlastd()
			}
			if (global.stat.akills > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Total kills'; dom.tcright.innerHTML = global.stat.akills
			}
			if (global.stat.onesht > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Times killed with a single hit'; dom.tcright.innerHTML = global.stat.onesht
			}
			if (global.stat.misst > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Times missed the attack'; dom.tcright.innerHTML = global.stat.misst
			}
			if (global.stat.dodgt > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Times dodged the attack'; dom.tcright.innerHTML = global.stat.dodgt
			}
			if (global.stat.msks[0] > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Humanoid-class foes slayed'; dom.tcright.innerHTML = global.stat.msks[0]
			}
			if (global.stat.msks[1] > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Beast-class foes slayed'; dom.tcright.innerHTML = global.stat.msks[1]
			}
			if (global.stat.msks[2] > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Undead-class foes slayed'; dom.tcright.innerHTML = global.stat.msks[2]
			}
			if (global.stat.msks[3] > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Evil-class foes slayed'; dom.tcright.innerHTML = global.stat.msks[3]
			}
			if (global.stat.msks[4] > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Phantom-class foes slayed'; dom.tcright.innerHTML = global.stat.msks[4]
			}
			if (global.stat.msks[5] > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Dragon-class foes slayed'; dom.tcright.innerHTML = global.stat.msks[5]
			}
			if (global.stat.msts[0][0] > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Unarmed attacks'; dom.tcright.innerHTML = global.stat.msts[0][0]
			}
			if (global.stat.msts[0][1] > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Unarmed kills'; dom.tcright.innerHTML = global.stat.msts[0][1]
			}
			if (global.stat.msts[1][0] > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Sword attacks'; dom.tcright.innerHTML = global.stat.msts[1][0]
			}
			if (global.stat.msts[1][1] > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Sword kills'; dom.tcright.innerHTML = global.stat.msts[1][1]
			}
			if (global.stat.msts[2][0] > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Axe attacks'; dom.tcright.innerHTML = global.stat.msts[2][0]
			}
			if (global.stat.msts[2][1] > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Axe kills'; dom.tcright.innerHTML = global.stat.msts[2][1]
			}
			if (global.stat.msts[3][0] > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Dagger attacks'; dom.tcright.innerHTML = global.stat.msts[3][0]
			}
			if (global.stat.msts[3][1] > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Dagger kills'; dom.tcright.innerHTML = global.stat.msts[3][1]
			}
			if (global.stat.msts[4][0] > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Polearm/Spear attacks'; dom.tcright.innerHTML = global.stat.msts[4][0]
			}
			if (global.stat.msts[4][1] > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Polearm/Spear kills'; dom.tcright.innerHTML = global.stat.msts[4][1]
			}
			if (global.stat.msts[5][0] > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Hammer/Club attacks'; dom.tcright.innerHTML = global.stat.msts[5][0]
			}
			if (global.stat.msts[5][1] > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Hammer/Club kills'; dom.tcright.innerHTML = global.stat.msts[5][1]
			}
			if (global.stat.msts[6][0] > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Staff attacks'; dom.tcright.innerHTML = global.stat.msts[6][0]
			}
			if (global.stat.msts[6][1] > 0) {
				dom.tccon = addElement(dom.statbod, 'small', null, 'sttc'); dom.tcleft = addElement(dom.tccon, 'div', null, 'sttl'); dom.tcright = addElement(dom.tccon, 'div', null, 'sttr');
				dom.tcleft.innerHTML = 'Staff kills'; dom.tcright.innerHTML = global.stat.msts[6][1]
			}

		});
	}
});

dom.ct_bt1_c = addElement(dom.ctrwin2, 'div', 'crf_c');
dom.ct_bt1_1_ncont = addElement(dom.ct_bt1_c, 'div'); dom.ct_bt1_1_ncont.style.height = '100%'; dom.ct_bt1_1_ncont.style.width = '45%';
dom.ct_bt1_1_cont = addElement(dom.ct_bt1_1_ncont, 'div');
dom.ct_bt1_1 = addElement(dom.ct_bt1_1_ncont, 'div', 'crf_l'); dom.ct_bt1_1.style.height = 343; dom.ct_bt1_1.style.width = '100%';
dom.ct_bt1_1_cont.style.bottom = 0;
dom.ct_bt1_1_cont.style.borderBottom = '1px solid cornflowerblue '; dom.ct_bt1_1_cont.style.display = 'flex';
dom.ct_bt1_1_cont_a = addElement(dom.ct_bt1_1_cont, 'small', null, 'crf_c_bts'); dom.ct_bt1_1_cont_c = addElement(dom.ct_bt1_1_cont, 'small', null, 'crf_c_bts');
dom.ct_bt1_1_cont_b = addElement(dom.ct_bt1_1_cont, 'small', null, 'crf_c_bts'); dom.ct_bt1_1_cont_d = addElement(dom.ct_bt1_1_cont, 'small', null, 'crf_c_bts');
dom.ct_bt1_1_cont_e = addElement(dom.ct_bt1_1_cont, 'small', null, 'crf_c_bts'); dom.ct_bt1_1_cont_f = addElement(dom.ct_bt1_1_cont, 'small', null, 'crf_c_bts');
dom.ct_bt1_1_cont_f.style.borderRight = 'none'; 16
dom.ct_bt1_1_cont_a.style.backgroundColor = 'darkslategrey'; dom.ct_bt1_1_cont_b.style.backgroundColor = '#332e12';
dom.ct_bt1_1_cont_c.style.backgroundColor = '#1c3319'; dom.ct_bt1_1_cont_d.style.backgroundColor = '#b73c0d';
dom.ct_bt1_1_cont_e.style.backgroundColor = '#313254'; dom.ct_bt1_1_cont_f.style.backgroundColor = '#5155d6';
dom.ct_bt1_1_cont_a.addEventListener('click', function () { rstcrtthg(); this.style.color = 'yellow'; rsort(0) });
dom.ct_bt1_1_cont_b.addEventListener('click', function () { rstcrtthg(); this.style.color = 'yellow'; rsort(1) });
dom.ct_bt1_1_cont_c.addEventListener('click', function () { rstcrtthg(); this.style.color = 'yellow'; rsort(2) });
dom.ct_bt1_1_cont_d.addEventListener('click', function () { rstcrtthg(); this.style.color = 'yellow'; rsort(3) });
dom.ct_bt1_1_cont_e.addEventListener('click', function () { rstcrtthg(); this.style.color = 'yellow'; rsort(4) });
dom.ct_bt1_1_cont_f.addEventListener('click', function () { rstcrtthg(); this.style.color = 'yellow'; rsort(5) });
global.spbtsr = [dom.ct_bt1_1_cont_a, dom.ct_bt1_1_cont_b, dom.ct_bt1_1_cont_c, dom.ct_bt1_1_cont_d, dom.ct_bt1_1_cont_e, dom.ct_bt1_1_cont_f]
dom.ct_bt1_1_cont_a.innerHTML = 'ALL'; dom.ct_bt1_1_cont_b.innerHTML = 'FOD'; dom.ct_bt1_1_cont_c.innerHTML = 'MED';
dom.ct_bt1_1_cont_d.innerHTML = 'WEP'; dom.ct_bt1_1_cont_e.innerHTML = 'EQP'; dom.ct_bt1_1_cont_f.innerHTML = 'MAT';
addDesc(dom.ct_bt1_1_cont_a, null, 2, 'Filter', 'All'); addDesc(dom.ct_bt1_1_cont_b, null, 2, 'Filter', 'Food');
addDesc(dom.ct_bt1_1_cont_c, null, 2, 'Filter', 'Medicine/Tools'); addDesc(dom.ct_bt1_1_cont_d, null, 2, 'Filter', 'Weapons');
addDesc(dom.ct_bt1_1_cont_e, null, 2, 'Filter', 'Equipment/Accessories'); addDesc(dom.ct_bt1_1_cont_f, null, 2, 'Filter', 'Materials/Misc.');
dom.ct_bt1_2 = addElement(dom.ct_bt1_c, 'div', 'crf_r');
dom.ct_bt4_1 = addElement(dom.ctrwin4, 'div', null, 'opt_c');
dom.ct_bt4_1a = addElement(dom.ct_bt4_1, 'div', null, 'opt_t');
dom.ct_bt4_1a.innerHTML = 'Message log limit';
dom.ct_bt4_1b = addElement(dom.ct_bt4_1, 'input', null, 'opt_v');
dom.ct_bt4_1b.value = global.msgs_max; dom.ct_bt4_1b.type = 'number';
dom.ct_bt4_1b.min = 1; dom.ct_bt4_1b.max = 100;
dom.ct_bt4_1b.addEventListener('change', function () { if (this.value < 1) this.value = 1; else if (this.value > 100) this.value = 100; global.msgs_max = this.value });
function rstcrtthg() { for (let a in global.spbtsr) global.spbtsr[a].style.color = 'inherit'; }

dom.ct_bt4_2 = addElement(dom.ctrwin4, 'div', null, 'opt_c');
dom.ct_bt4_2a = addElement(dom.ct_bt4_2, 'div', null, 'opt_t');
dom.ct_bt4_2a.innerHTML = 'BG Color';
dom.ct_bt4_21b = addElement(dom.ct_bt4_2, 'input', null, 'opt_v');
dom.ct_bt4_21b.value = global.bg_r; dom.ct_bt4_21b.type = 'range';
dom.ct_bt4_21b.min = 0; dom.ct_bt4_21b.max = 255; dom.ct_bt4_21b.style.width = '85px'; dom.ct_bt4_21b.style.height = '16px';
dom.ct_bt4_21b.addEventListener('input', function () { document.body.removeAttribute('style'); global.flags.bgspc = false; global.bg_r = this.value; document.body.style.backgroundColor = 'rgb(' + global.bg_r + ',' + global.bg_g + ',' + global.bg_b + ')'; dom.ct_bt4_31b.innerHTML = global.bg_r });
dom.ct_bt4_22b = addElement(dom.ct_bt4_2, 'input', null, 'opt_v');
dom.ct_bt4_22b.value = global.bg_g; dom.ct_bt4_22b.type = 'range'; dom.ct_bt4_21b.style.height = '16px'; dom.ct_bt4_22b.style.height = '16px';
dom.ct_bt4_22b.min = 0; dom.ct_bt4_22b.max = 255; dom.ct_bt4_22b.style.width = '85px'; dom.ct_bt4_22b.style.left = '367px';
dom.ct_bt4_22b.addEventListener('input', function () { document.body.removeAttribute('style'); global.flags.bgspc = false; global.bg_g = this.value; document.body.style.backgroundColor = 'rgb(' + global.bg_r + ',' + global.bg_g + ',' + global.bg_b + ')'; dom.ct_bt4_32b.innerHTML = global.bg_g });
dom.ct_bt4_23b = addElement(dom.ct_bt4_2, 'input', null, 'opt_v');
dom.ct_bt4_23b.value = global.bg_b; dom.ct_bt4_23b.type = 'range'; dom.ct_bt4_21b.style.height = '16px'; dom.ct_bt4_23b.style.height = '16px';
dom.ct_bt4_23b.min = 0; dom.ct_bt4_23b.max = 255; dom.ct_bt4_23b.style.width = '85px'; dom.ct_bt4_23b.style.left = '459px';
dom.ct_bt4_23b.addEventListener('input', function () { document.body.removeAttribute('style'); global.flags.bgspc = false; global.bg_b = this.value; document.body.style.backgroundColor = 'rgb(' + global.bg_r + ',' + global.bg_g + ',' + global.bg_b + ')'; dom.ct_bt4_33b.innerHTML = global.bg_b });

dom.ct_bt4_3 = addElement(dom.ctrwin4, 'div', null, 'opt_c');
dom.ct_bt4_3a = addElement(dom.ct_bt4_3, 'div', null, 'opt_t');
dom.ct_bt4_3a.innerHTML = '　';
dom.ct_bt4_31b = addElement(dom.ct_bt4_3, 'div', null, 'opt_v'); dom.ct_bt4_31b.style.textAlign = 'center';
dom.ct_bt4_31b.style.width = '83px'; dom.ct_bt4_31b.innerHTML = global.bg_r || 255;
dom.ct_bt4_32b = addElement(dom.ct_bt4_3, 'div', null, 'opt_v'); dom.ct_bt4_32b.style.textAlign = 'center';
dom.ct_bt4_32b.style.width = '83px'; dom.ct_bt4_32b.innerHTML = global.bg_g || 255; dom.ct_bt4_32b.style.left = '367px';
dom.ct_bt4_33b = addElement(dom.ct_bt4_3, 'div', null, 'opt_v'); dom.ct_bt4_33b.style.textAlign = 'center';
dom.ct_bt4_33b.style.width = '83px'; dom.ct_bt4_33b.innerHTML = global.bg_b || 255; dom.ct_bt4_33b.style.left = '459px';

dom.ct_bt4_03 = addElement(dom.ctrwin4, 'div', null, 'opt_c');
dom.ct_bt4_03a = addElement(dom.ct_bt4_03, 'div', null, 'opt_t');
dom.ct_bt4_03a.innerHTML = 'BG presets';
dom.ct_bt4_03b = addElement(dom.ct_bt4_03, 'div', null, 'opt_v'); dom.ct_bt4_03b.style.width = 274; dom.ct_bt4_03b.style.height = 20; dom.ct_bt4_03b.style.display = 'flex'; dom.ct_bt4_03b.style.padding = 0; dom.ct_bt4_03b.style.textAlign = 'center'
dom.ct_bt4_03b1 = addElement(dom.ct_bt4_03b, 'small'); dom.ct_bt4_03b2 = addElement(dom.ct_bt4_03b, 'small');
dom.ct_bt4_03b3 = addElement(dom.ct_bt4_03b, 'small'); dom.ct_bt4_03b4 = addElement(dom.ct_bt4_03b, 'small');
dom.ct_bt4_03b1.style.width = dom.ct_bt4_03b2.style.width = dom.ct_bt4_03b3.style.width = dom.ct_bt4_03b4.style.width = '25%'
dom.ct_bt4_03b1.innerHTML = 'White'; dom.ct_bt4_03b2.innerHTML = 'grey'; dom.ct_bt4_03b3.innerHTML = 'night'; dom.ct_bt4_03b4.innerHTML = 'special'
dom.ct_bt4_03b1.style.color = '#000'; dom.ct_bt4_03b1.style.backgroundColor = 'white';
dom.ct_bt4_03b2.style.color = 'lightgrey'; dom.ct_bt4_03b2.style.backgroundColor = '#666';
dom.ct_bt4_03b3.style.color = 'yellow'; dom.ct_bt4_03b3.style.backgroundColor = 'rgb(18,18,46)';
dom.ct_bt4_03b4.style.background = 'linear-gradient(180deg,#000,#123)';
dom.ct_bt4_03b1.addEventListener('click', function () {
	global.flags.bgspc = false
	global.bg_r = 255; global.bg_g = 255; global.bg_b = 255; document.body.removeAttribute('style')
	dom.ct_bt4_31b.innerHTML = 255; dom.ct_bt4_32b.innerHTML = 255; dom.ct_bt4_33b.innerHTML = 255;
	dom.ct_bt4_21b.value = global.bg_r; dom.ct_bt4_22b.value = global.bg_g; dom.ct_bt4_23b.value = global.bg_b
	document.body.style.backgroundColor = 'rgb(' + global.bg_r + ',' + global.bg_g + ',' + global.bg_b + ')';
});
dom.ct_bt4_03b2.addEventListener('click', function () {
	global.flags.bgspc = false
	global.bg_r = 188; global.bg_g = 188; global.bg_b = 188; document.body.removeAttribute('style')
	dom.ct_bt4_31b.innerHTML = 188; dom.ct_bt4_32b.innerHTML = 188; dom.ct_bt4_33b.innerHTML = 188;
	dom.ct_bt4_21b.value = global.bg_r; dom.ct_bt4_22b.value = global.bg_g; dom.ct_bt4_23b.value = global.bg_b
	document.body.style.backgroundColor = 'rgb(' + global.bg_r + ',' + global.bg_g + ',' + global.bg_b + ')';
});
dom.ct_bt4_03b3.addEventListener('click', function () {
	global.flags.bgspc = false
	global.bg_r = 18; global.bg_g = 18; global.bg_b = 46; document.body.removeAttribute('style')
	dom.ct_bt4_31b.innerHTML = 18; dom.ct_bt4_32b.innerHTML = 18; dom.ct_bt4_33b.innerHTML = 46;
	dom.ct_bt4_21b.value = global.bg_r; dom.ct_bt4_22b.value = global.bg_g; dom.ct_bt4_23b.value = global.bg_b
	document.body.style.backgroundColor = 'rgb(' + global.bg_r + ',' + global.bg_g + ',' + global.bg_b + ')';
});
dom.ct_bt4_03b4.addEventListener('click', function () {
	global.flags.bgspc = true
	dom.ct_bt4_31b.innerHTML = 'SPCL'; dom.ct_bt4_32b.innerHTML = 'SPCL'; dom.ct_bt4_33b.innerHTML = 'SPCL';
	document.body.style.background = 'linear-gradient(180deg,#000,#123)';
});

dom.ct_bt4_4 = addElement(dom.ctrwin4, 'div', null, 'opt_c');
dom.ct_bt4_4a = addElement(dom.ct_bt4_4, 'div', null, 'opt_t');
dom.ct_bt4_4a.innerHTML = 'Destroy gradients';
dom.ct_bt4_41b = addElement(dom.ct_bt4_4, 'input', null, 'opt_v'); dom.ct_bt4_41b.type = 'checkbox';
dom.ct_bt4_41b.addEventListener('click', () => { nograd(global.flags.grd_s) });
dom.ct_bt4_5 = addElement(dom.ctrwin4, 'div', null, 'opt_c');
dom.ct_bt4_5a = addElement(dom.ct_bt4_5, 'div', null, 'opt_ta');
dom.ct_bt4_5b = addElement(dom.ct_bt4_5, 'div', null, 'opt_va');
dom.ct_bt4_5a.innerHTML = 'Export'; dom.ct_bt4_5a.style.border = '1px lightgrey solid';
dom.ct_bt4_5a.addEventListener('click', function () {
	if (!global.flags.expatv) {
		t = save(true); global.flags.expatv = true;
		dom.ct_bt4_5a_nc = addElement(document.body, 'div');
		dom.ct_bt4_5a_nc.style.position = 'absolute'; dom.ct_bt4_5a_nc.style.padding = 2;
		dom.ct_bt4_5a_nc.style.top = 370; dom.ct_bt4_5a_nc.style.left = 330;
		dom.ct_bt4_5a_nc.style.width = 600; dom.ct_bt4_5a_nc.style.height = 400; dom.ct_bt4_5a_nc.style.border = '2px solid black';
		dom.ct_bt4_5a_nc.style.backgroundColor = 'lightgrey';
		dom.ct_bt4_5a_nh = addElement(dom.ct_bt4_5a_nc, 'div'); dom.ct_bt4_5a_nh.style.height = 20; dom.ct_bt4_5a_nh.style.borderBottom = '2px solid black';
		dom.ct_bt4_5a_nhv = addElement(dom.ct_bt4_5a_nh, 'div');
		dom.ct_bt4_5a_nhv.style.float = 'left'; dom.ct_bt4_5a_nhv.style.marginRight = 6;
		dom.ct_bt4_5a_nhv.style.backgroundColor = 'grey'; dom.ct_bt4_5a_nhv.innerHTML = 'Export As Text'
		dom.ct_bt4_5a_nhv.addEventListener('click', function () { dom.ct_bt4_5a_nbc.value = t });
		dom.ct_bt4_5a_nhz = addElement(dom.ct_bt4_5a_nh, 'div');
		dom.ct_bt4_5a_nhz.style.float = 'left';
		dom.ct_bt4_5a_nhz.style.backgroundColor = 'grey'; dom.ct_bt4_5a_nhz.innerHTML = 'Export As File'
		dom.ct_bt4_5a_nhz.addEventListener('click', function () {
			let a = new Date(); let temp = document.createElement('a');
			temp.href = 'data:text/plain;charset=utf-8,' + t; let n = you.name; if (/(<.*>)|(\(.*\))/.test(you.name)) n = '';
			temp.download = n + ' - v' + global.ver + ' - ' + (a.getFullYear() + '/' + (a.getMonth() + 1) + '/' + a.getDate() + ' ' + a.getHours() + '_' + (a.getMinutes() >= 10 ? a.getMinutes() : '0' + a.getMinutes()) + '_' + (a.getSeconds() >= 10 ? a.getSeconds() : '0' + a.getSeconds())) + ' [Proto23]'; temp.click();
		});
		dom.ct_bt4_5a_nhx = addElement(dom.ct_bt4_5a_nh, 'div'); draggable(dom.ct_bt4_5a_nh, dom.ct_bt4_5a_nc);
		dom.ct_bt4_5a_nhx.innerHTML = '✖'; dom.ct_bt4_5a_nhx.style.float = 'right';
		dom.ct_bt4_5a_nhx.style.backgroundColor = 'red';
		dom.ct_bt4_5a_nhx.addEventListener('click', function () { global.flags.expatv = false; empty(dom.ct_bt4_5a_nc); document.body.removeChild(dom.ct_bt4_5a_nc); });
		dom.ct_bt4_5a_nb = addElement(dom.ct_bt4_5a_nc, 'div');
		dom.ct_bt4_5a_nbc = addElement(dom.ct_bt4_5a_nb, 'textArea'); dom.ct_bt4_5a_nbc.style.fontFamily = 'MS Gothic';
		dom.ct_bt4_5a_nbc.style.width = '100%'; dom.ct_bt4_5a_nbc.style.height = '378px'; dom.ct_bt4_5a_nbc.style.overflow = 'auto'

	}
});
dom.ct_bt4_5b.innerHTML = 'Import'; dom.ct_bt4_5b.style.border = '1px lightgrey solid';
dom.ct_bt4_5b.addEventListener('click', function () {
	if (!global.flags.impatv) {
		global.flags.impatv = true;
		dom.ct_bt4_5b_nc = addElement(document.body, 'div');
		dom.ct_bt4_5b_nc.style.position = 'absolute'; dom.ct_bt4_5b_nc.style.padding = 2;
		dom.ct_bt4_5b_nc.style.top = 370; dom.ct_bt4_5b_nc.style.left = 330;
		dom.ct_bt4_5b_nc.style.width = 600; dom.ct_bt4_5b_nc.style.height = 400; dom.ct_bt4_5b_nc.style.border = '2px solid black';
		dom.ct_bt4_5b_nc.style.backgroundColor = 'lightgrey';
		dom.ct_bt4_5b_nh = addElement(dom.ct_bt4_5b_nc, 'div'); dom.ct_bt4_5b_nh.style.height = 20; dom.ct_bt4_5b_nh.style.borderBottom = '2px solid black';
		dom.ct_bt4_5b_nhv = addElement(dom.ct_bt4_5b_nh, 'div'); draggable(dom.ct_bt4_5b_nh, dom.ct_bt4_5b_nc);
		dom.ct_bt4_5b_nhv.style.float = 'left';
		dom.ct_bt4_5b_nhv.style.backgroundColor = 'grey'; dom.ct_bt4_5b_nhv.innerHTML = 'Import As Text'; dom.ct_bt4_5b_nhv.style.marginRight = 6
		dom.ct_bt4_5b_nhv.addEventListener('click', function () {
			if (dom.ct_bt4_5b_nbc.value == "" || dom.ct_bt4_5b_nbc.value == "?") { dom.ct_bt4_5b_nbc.value = '?'; return }
			let storage = window.localStorage; let t = dom.ct_bt4_5b_nbc.value; bt = b64_to_utf8(dom.ct_bt4_5b_nbc.value);
			if (/savevalid/g.test(bt)) {
				storage.setItem("v0.2a", t); load(t); global.flags.impatv = false; empty(dom.ct_bt4_5b_nc); document.body.removeChild(dom.ct_bt4_5b_nc);
			}
			else { dom.ct_bt4_5b_nbc.value = 'Save Invalid'; return }
		});
		dom.ct_bt4_5b_nhx = addElement(dom.ct_bt4_5b_nh, 'div');
		dom.ct_bt4_5b_nhx.innerHTML = '✖'; dom.ct_bt4_5b_nhx.style.float = 'right';
		dom.ct_bt4_5b_nhx.style.backgroundColor = 'red';
		dom.ct_bt4_5b_nhx.addEventListener('click', function () { global.flags.impatv = false; empty(dom.ct_bt4_5b_nc); document.body.removeChild(dom.ct_bt4_5b_nc) });
		dom.ct_bt4_5b_nhz = addElement(dom.ct_bt4_5b_nh, 'div'); dom.ct_bt4_5b_nhz.style.float = 'left';
		dom.ct_bt4_5b_nhz.style.backgroundColor = 'grey'; dom.ct_bt4_5b_nhz.innerHTML = 'Load File';;
		dom.ct_bt4_5b_nhz2 = addElement(dom.ct_bt4_5b_nhz, 'input'); dom.ct_bt4_5b_nhz2.innerHTML = '323'
		dom.ct_bt4_5b_nhz2.accept = '.txt'; dom.ct_bt4_5b_nhz2.type = 'file';
		dom.ct_bt4_5b_nhz2.style.opacity = 0; dom.ct_bt4_5b_nhz2.style.position = 'absolute'; dom.ct_bt4_5b_nhz2.style.left = 128
		dom.ct_bt4_5b_nhz2.style.width = 81; dom.ct_bt4_5b_nhz2.style.top = 0; dom.ct_bt4_5b_nhz2.style.height = 18;
		dom.ct_bt4_5b_nhz2.addEventListener('change', function () {
			let r = new FileReader(); r.readAsText(this.files[0]); let storage = window.localStorage;
			r.addEventListener('load', function () {
				let t = b64_to_utf8(r.result);
				if (/savevalid/g.test(t)) {
					dom.ct_bt4_5b_nbc.value = 'Load Successful';
					storage.setItem("v0.2a", r.result); load(r.result); global.flags.impatv = false; empty(dom.ct_bt4_5b_nc); document.body.removeChild(dom.ct_bt4_5b_nc);
				}
				else { dom.ct_bt4_5b_nbc.value = 'Save Invalid'; return }
			})
		})
		dom.ct_bt4_5b_nb = addElement(dom.ct_bt4_5b_nc, 'div');
		dom.ct_bt4_5b_nbc = addElement(dom.ct_bt4_5b_nb, 'textArea'); dom.ct_bt4_5b_nbc.style.fontFamily = 'MS Gothic';
		dom.ct_bt4_5b_nbc.style.width = '100%'; dom.ct_bt4_5b_nbc.style.height = '378px'; dom.ct_bt4_5b_nbc.style.overflow = 'auto'
	}
});
/*
dom.ct_bt4_6 = addElement(dom.ctrwin4,'div',null,'opt_c'); 
dom.ct_bt4_6a = addElement(dom.ct_bt4_6,'div',null,'opt_t');
dom.ct_bt4_6a.innerHTML = 'Attach timestamp to messages';
dom.ct_bt4_61b = addElement(dom.ct_bt4_6,'input',null,'opt_v'); dom.ct_bt4_61b.type='checkbox';
dom.ct_bt4_61b.addEventListener('click',()=>{global.flags.msgtm=!global.flags.msgtm});*/


dom.gmsgs = addElement(document.body, 'div', 'gmsgs');
dom.mstt = addElement(dom.gmsgs, 'div', 'mstt'); if (!global.flags.aw_u) dom.gmsgs.style.display = 'none';
dom.mstt.style.textAlign = 'center'; dom.mstt.innerHTML = 'm e s s a g e　　　l o g';
dom.mstt.style.fontSize = '1.1em'; dom.mstt.style.borderBottom = 'dashed 2px RoyalBlue';
dom.mscont = addElement(dom.gmsgs, 'div', 'mscont');
dom.m_control = addElement(dom.gmsgs, 'div', 'm_control');
dom.m_b_1 = addElement(dom.m_control, 'small', null, 'bts_m');
dom.m_b_1.innerHTML = 'freeze messagelog　';
dom.m_b_1_c = addElement(dom.m_b_1, 'span', null, 'bts_m_b');
dom.m_b_1.addEventListener('click', () => {
	if (global.flags.m_freeze === false) { global.flags.m_freeze = true; dom.m_b_1_c.innerHTML = 'Ｘ' }
	else { global.flags.m_freeze = false; dom.m_b_1_c.innerHTML = '' }
});

dom.m_b_2 = addElement(dom.m_control, 'small', null, 'bts_m');
dom.m_b_2.innerHTML = '　stop combatlog　';
dom.m_b_2.style.left = '19px';
dom.m_b_2_c = addElement(dom.m_b_2, 'span', null, 'bts_m_b');
dom.m_b_2.addEventListener('click', () => {
	if (global.flags.m_blh === false) { global.flags.m_blh = true; dom.m_b_2_c.innerHTML = 'Ｘ' }
	else { global.flags.m_blh = false; dom.m_b_2_c.innerHTML = '' }
});
dom.m_b_3 = addElement(dom.m_control, 'small', null, 'bts_m');
dom.m_b_3.innerHTML = 'CLR'; dom.m_b_3.style.width = '36px';
dom.m_b_3.style.borderRight = 'none';
dom.m_b_3.style.left = '38px'; dom.m_b_3.style.textAlign = 'center';
dom.m_b_3.addEventListener('click', () => { empty(dom.mscont) });

addDesc(dom.inv_btn_1, null, 2, 'Filter', 'All'); addDesc(dom.inv_btn_2, null, 2, 'Filter', 'Weapons');
addDesc(dom.inv_btn_3, null, 2, 'Filter', 'Armor'); addDesc(dom.inv_btn_4, null, 2, 'Filter', 'Comestibles');
addDesc(dom.inv_btn_5, null, 2, 'Filter', 'Materials/Other');
addDesc(dom.inv_btn_1_b, null, 2, 'Filter', 'Alphabetically');
addDesc(dom.inv_btn_2_b, null, 2, 'Filter', 'by Amount');
addDesc(dom.inv_btn_3_b, null, 2, 'Filter', 'by Type');

global.dscr = addElement(document.body, 'div', 'dscr'); global.dscr.style.display = 'none';

function invbtsrst() {
	dom.inv_btn_1.removeAttribute('style'); dom.inv_btn_2.removeAttribute('style'); dom.inv_btn_3.removeAttribute('style');
	dom.inv_btn_4.removeAttribute('style'); dom.inv_btn_5.removeAttribute('style');
	switch (global.sm) {
		case 1: dom.inv_btn_1.style.color = 'black'; dom.inv_btn_1.style.backgroundColor = 'yellow'; break;
		case 2: dom.inv_btn_2.style.color = 'black'; dom.inv_btn_2.style.backgroundColor = 'yellow'; break;
		case 3: dom.inv_btn_3.style.color = 'black'; dom.inv_btn_3.style.backgroundColor = 'yellow'; break;
		case 4: dom.inv_btn_4.style.color = 'black'; dom.inv_btn_4.style.backgroundColor = 'yellow'; break;
		case 5: dom.inv_btn_5.style.color = 'black'; dom.inv_btn_5.style.backgroundColor = 'yellow'; break;
	}
}

dom.inv_btn_1.innerHTML = 'ALL'; dom.inv_btn_2.innerHTML = 'WPN'; dom.inv_btn_3.innerHTML = 'EQP';
dom.inv_btn_4.innerHTML = 'USE'; dom.inv_btn_5.innerHTML = 'OTHER';
dom.inv_btn_1_b.innerHTML = 'A-Z';
dom.inv_btn_2_b.innerHTML = '1-9';
dom.inv_btn_3_b.innerHTML = 'TPE';
dom.inv_con = addElement(dom.inv_ctx_b, 'div', 'inv_con'); dom.inv_con.style.padding = '8px';
/*dom.inv_con.addEventListener('scroll',function(){
  for(a in this.children) {if(this.children[a].offsetTop-this.scrollTop+19<0) this.children[a].style.display='none'; else dom.inv_con[a].style.display='';}
});*/
dom.inv_btn_1.addEventListener('click', function () { isort(1); invbtsrst() }); dom.inv_btn_2.addEventListener('click', function () { isort(2); invbtsrst() });
dom.inv_btn_3.addEventListener('click', function () { isort(3); invbtsrst() }); dom.inv_btn_4.addEventListener('click', function () { isort(4); invbtsrst() });
dom.inv_btn_5.addEventListener('click', function () { isort(5); invbtsrst() });
dom.inv_btn_1_b.addEventListener('click', function () {
	if (global.flags.sort_a === true) {
		inv.sort(function (a, b) { if (a.name < b.name) return -1; if (a.name > b.name) return 1; return 0 });
		global.flags.sort_a = false;
	} else {
		inv.sort(function (a, b) { if (a.name > b.name) return -1; if (a.name < b.name) return 1; return 0 });
		global.flags.sort_a = true;
	} iftrunkopenc(1);
	isort(global.sm)
});
dom.inv_btn_2_b.addEventListener('click', function () {
	if (global.flags.sort_b === true) {
		inv.sort(function (a, b) { if (a.amount < b.amount) return -1; if (a.amount > b.amount) return 1; if (a.name < b.name) return -1; if (a.name > b.name) return 1; return 0 });
		global.flags.sort_b = false;
	} else {
		inv.sort(function (a, b) { if (a.amount > b.amount) return -1; if (a.amount < b.amount) return 1; if (a.name > b.name) return -1; if (a.name < b.name) return 1; return 0 });
		global.flags.sort_b = true;
	} iftrunkopenc(1);
	isort(global.sm)
});
dom.inv_btn_3_b.addEventListener('click', function () {
	if (global.flags.sort_c === true) {
		inv.sort(function (a, b) { if (a.id < b.id) return -1; if (a.id > b.id) return 1; if (a.name < b.name) return -1; if (a.name > b.name) return 1; return 0 });
		global.flags.sort_c = false;
	} else {
		inv.sort(function (a, b) { if (a.id > b.id) return -1; if (a.id < b.id) return 1; if (a.name > b.name) return -1; if (a.name < b.name) return 1; return 0 });
		global.flags.sort_c = true;
	} iftrunkopenc(1);
	isort(global.sm)
});
dom.d3.update = function () { this.innerHTML = ' lvl:' + you.lvl + ' \'' + you.title.name + '\''; }
dom.d5_1_1.update = function () { this.innerHTML = 'hp: ' + format3(you.hp.toString()) + '/' + format3(you.hpmax.toString()); dom.d5_1.style.width = 100 * you.hp / you.hpmax + '%' };
dom.d5_2_1.update = function () { this.innerHTML = 'exp: ' + format3(Math.round(you.exp).toString()) + '/' + format3(you.expnext_t.toString()); dom.d5_2.style.width = 100 * you.exp / you.expnext_t + '%' }; dom.d5_2_1.update();
dom.d5_3_1.update = function () { this.innerHTML = 'energy: ' + format3(Math.round(you.sat).toString()) + '/' + format3(you.satmax.toString()) + ' eff: ' + Math.round(you.efficiency() * 100) + '%'; dom.d5_3.style.width = you.sat >= 0 ? 100 * you.sat / you.satmax + '%' : '0%' };
dom.d6.update = function () { this.innerHTML = 'rank: ' + format3(you.rank().toString()) }; dom.d6.update();
dom.hit_c = function () {
	let hit_a = hit_calc(1); let hit_b = hit_calc(2); let drk = (global.flags.isdark && !cansee());
	if (hit_a > 100) hit_a = 100; else if (hit_a < 0) hit_a = 0;
	if (hit_b > 100) hit_b = 100; else if (hit_b < 0) hit_b = 0;
	dom.d8.innerHTML = 'hit chance: <span style="color:' + (drk ? 'darkgrey' : '') + '">' + Math.round(hit_a * (drk ? (.3 + skl.ntst.lvl * .07) : 1)) + '%</span> / dodge chance: ' + (100 - Math.round(hit_b)) + '%' + (you.mods.ddgmod !== 0 ? ('(<span style="color:orange">' + you.mods.ddgmod * 100 + '%</span>)') : '');
}

dom.sl = addElement(document.body, 'div', 'sl', 'noselect'); dom.sl.style.zIndex = 10000;
dom.sl_s = addElement(dom.sl, 'span', null, 'sl'); dom.sl_s.innerHTML = 'save';
dom.sl_s.addEventListener('click', () => { save(); let j = addElement(dom.sl, 'span'); j.style.fontSize = '.9em'; j.style.padding = '3px'; j.innerHTML = 'saved...'; fade(j); setTimeout(() => { dom.sl.removeChild(j) }, 500) });
dom.sl_l = addElement(dom.sl, 'span', null, 'sl'); dom.sl_l.innerHTML = 'load';
dom.sl_l.addEventListener('click', () => load(null, true));
dom.sl_extra = addElement(dom.sl, 'span', null, 'sl'); dom.sl_extra.style.borderLeft = 'none'; dom.sl_extra.innerHTML = '<span style="color:crimson">game not saved!</span>';
dom.autosve = addElement(dom.sl, 'span', null, 'sl'); dom.autosve.innerHTML = 'Autosave';
dom.autosve.style.position = 'fixed'; dom.autosve.style.width = 'auto'; dom.autosve.style.right = '139px'; dom.autosve.style.bottom = '1px';
dom.autosve.style.paddingRight = '20px';
dom.autosves = addElement(dom.autosve, 'input'); dom.autosves.type = 'checkbox';
dom.autosves.margin = 0; dom.autosves.style.position = 'fixed'; if (typeof InstallTrigger === 'undefined') dom.autosves.style.bottom = 'inherit';
dom.autosves.addEventListener('click', function () {
	global.flags.autosave = !global.flags.autosave;
	if (global.flags.autosave === true) timers.autos = setInterval(function () { save(true); }, 30000); else clearInterval(timers.autos)
});
dom.sl_h = addElement(dom.sl, 'span', null, 'sl'); dom.sl_h.innerHTML = '>>'; dom.sl_h.style.right = '214px'; dom.sl_h.style.position = 'fixed'; dom.sl_h.style.width = 'auto'; dom.sl_h.style.bottom = '1px';
dom.sl_h.addEventListener('click', () => {
	dom.sl.style.display = 'none'; if (dom.sl_h_n) empty(dom.sl_h_n);
	dom.sl_h_n = addElement(document.body, 'span', null, 'sl'); dom.sl_h_n.innerHTML = '<<';
	dom.sl_h_n.style.right = 0; dom.sl_h_n.style.position = 'absolute'; dom.sl_h_n.style.bottom = 0; dom.sl_h_n.style.width = 14; dom.sl_h_n.style.backgroundColor = 'lightgrey'
	dom.sl_h_n.addEventListener('click', () => {
		dom.sl.style.display = ''; empty(dom.sl_h_n); document.body.removeChild(dom.sl_h_n);
	});
});

dom.vrs = addElement(dom.sl, 'div', null, 'sl'); dom.vrs.style.position = 'fixed'; dom.vrs.style.width = 'auto'; dom.vrs.innerHTML = 'v' + global.ver;
dom.vrs.style.right = '105px'; dom.vrs.style.bottom = '1px'; dom.vrs.style.color = 'black'; dom.vrs.style.textDecoration = 'underline'
dom.vrs.addEventListener('click', function () { window.open('/changelog/changelog.html', '_blank') }); dom.vrs.href = 'changelog';
dom.sl_kill = addElement(dom.sl, 'span', null, 'sl'); dom.sl_kill.style.position = 'fixed'; dom.sl_kill.style.width = 'auto'; dom.sl_kill.innerHTML = 'delete the save';
dom.sl_kill.style.right = '5px'; dom.sl_kill.style.bottom = '1px';
dom.sl_kill.addEventListener('click', () => { localStorage.clear(); msg('Save deleted', '') });

function update_db() {
	dom.d4_1.innerHTML = 'STR: ' + Math.round(you.str_d); dom.d4_2.innerHTML = 'AGL: ' + Math.round(you.agl_d);
	dom.d4_3.innerHTML = 'INT: ' + Math.round(you.int_d); dom.d4_4.innerHTML = 'SPD: ' + you.spd;
} update_db()

function update_d() {
	dom.d5_1_1m.innerHTML = 'hp: ' + format3(global.current_m.hp.toString()) + '/' + format3(global.current_m.hpmax.toString()); dom.d5_1m.style.width = 100 * global.current_m.hp / global.current_m.hpmax + '%';
	dom.hit_c(); dom.d5_3_1.update(); dom.d5_1_1.update();
} update_d()

global.text.mtp = ['Human', 'Beast', 'Undead', 'Evil', 'Phantom', 'Dragon'];

function update_m() {
	dom.d2m.innerHTML = global.current_m.name; let mtp = global.text.mtp[global.current_m.type];
	if (global.current_m.id >= 1) mtp += global.current_m.sex === true ? ' ♂' : ' ♀';
	dom.d3m.innerHTML = ' lvl:' + global.current_m.lvl + ' \'' + mtp + '\'';
	dom.d4_1m.innerHTML = 'STR: ' + Math.round(global.current_m.str); dom.d4_2m.innerHTML = 'AGL: ' + Math.round(global.current_m.agl);
	dom.d4_3m.innerHTML = 'INT: ' + Math.round(global.current_m.int); dom.d4_4m.innerHTML = 'SPD: ' + global.current_m.spd;
	dom.d9m.update();
}

var testz = new Area();
testz.apop = 4000;
testz.bpop = 6000;
testz.vsize = 10000;
global.zone_a_p[0] = testz;

function offline_a() {
	global.offline_evil_index = 0;
	for (let i in global.zone_a_p) {
		let zone = global.zone_a_p[i];
		let apower = zone.apop / zone.bpop * 2;
		zone.vsize += zone.vsize * 0.0008 + 5;
		zone.apop += zone.apop * (randf(Math.log(zone.apop) * 0.8, Math.log(zone.apop) * 1.2) / 1000);
		zone.bpop += zone.bpop * (randf(Math.log(zone.bpop) * 0.8, Math.log(zone.bpop) * 1.2) / 1000);
		if (zone.apop > 0) zone.vsize -= Math.log2(zone.apop) * 2; else zone.bpop -= rand(20, 50);
		if (zone.bpop > 0) zone.apop -= zone.bpop / rand(40, 100);
		if (zone.vsize < 0) zone.apop -= rand(20, 50);
		global.offline_evil_index += zone.bpop;
		console.log('docile: ' + zone.apop + ' predator: ' + zone.bpop + ' forest: ' + zone.vsize);
	}
	global.offline_evil_index = Math.sqrt(global.offline_evil_index + 2100) / 45;
}

function dscr(c, what, type, ttl, dsc, id) {
	id = id || 0;
	global.dscr.style.display = ''; empty(global.dscr);
	global.dscr.style.top = c.clientY + 30; global.dscr.style.left = c.clientX + 30;
	if (!type || type === 1) {
		globalThis.label = addElement(global.dscr, 'div', 'd_l'); globalThis.label.innerHTML = what.name;
		switch (what.rar) {
			case 0: { globalThis.label.style.color = 'grey'; break }
			case 2: { globalThis.label.style.textShadow = '0px 0px 1px blue'; globalThis.label.style.color = 'cyan'; break }
			case 3: { globalThis.label.style.textShadow = '0px 0px 2px lime'; globalThis.label.style.color = 'lime'; break }
			case 4: { globalThis.label.style.textShadow = '0px 0px 3px orange'; globalThis.label.style.color = 'yellow'; break }
			case 5: { globalThis.label.style.textShadow = '0px 0px 2px crimson,0px 0px 5px red'; globalThis.label.style.color = 'orange'; break }
			case 6: { globalThis.label.style.textShadow = '1px 1px 1px black,0px 0px 2px purple'; globalThis.label.style.color = 'purple'; break }
		}
		globalThis.text = addElement(global.dscr, 'div', 'd_t'); globalThis.text.innerHTML = typeof what.desc === 'function' ? (what.desc)(what) : what.desc;
		if (what.slot > 0) {
			if (what.slot === 1) {
				if (what.str > 0) globalThis.text.innerHTML += 'STR: <span style=\'color:lime\'> +' + what.str + '</span><br>';
				else if (what.str < 0) globalThis.text.innerHTML += 'STR: <span style=\'color:red\'>' + what.str + '</span><br>';
			}
			else {
				if (what.str > 0) globalThis.text.innerHTML += 'DEF: <span style=\'color:lime\'> +' + what.str + '</span><br>';
				else if (what.str < 0) globalThis.text.innerHTML += 'DEF: <span style=\'color:red\'>' + what.str + '</span><br>';
			}
			if (what.agl > 0) globalThis.text.innerHTML += 'AGL: <span style=\'color:lime\'> +' + what.agl + '</span><br>';
			else if (what.agl < 0) globalThis.text.innerHTML += 'AGL: <span style=\'color:red\'>' + what.agl + '</span><br>';
			if (what.int > 0) globalThis.text.innerHTML += 'INT: <span style=\'color:lime\'> +' + what.int + '</span><br>';
			else if (what.int < 0) globalThis.text.innerHTML += 'INT: <span style=\'color:red\'>' + what.int + '</span><br>';
			if (what.spd > 0) globalThis.text.innerHTML += 'SPD: <span style=\'color:lime\'> +' + what.spd + '</span><br>';
			else if (what.spd < 0) globalThis.text.innerHTML += 'SPD: <span style=\'color:red\'>' + what.spd + '</span><br>';

			if (what.slot < 8) {
				globalThis.dp_c = addElement(global.dscr, 'div', 'dr_l');
				globalThis.dp_t = addElement(globalThis.dp_c, 'small'); globalThis.dp_t.innerHTML = 'DP:'
				globalThis.dp_m = addElement(globalThis.dp_c, 'small', 'dp_m');
				globalThis.dp_mn = addElement(globalThis.dp_m, 'small'); globalThis.dp_mn.innerHTML = ((what.dp * 10 << 0) / 10) + '\/' + what.dpmax;
				globalThis.dp_mn.style.textShadow = '1px 1px black'; //globalThis.dp_mn.style.backgroundColor='rgba(102, 51, 153,.8)';
				globalThis.dp_mn.style.position = 'inherit'; globalThis.dp_mn.style.top = -4; //globalThis.dp_mn.style.border='1px black solid';
				globalThis.dp_mn.style.padding = 1; globalThis.dp_mn.style.left = '35%';
				let dp = what.dp * 100 / what.dpmax;
				globalThis.dp_m.style.width = dp + '%';
				if (dp >= 90) globalThis.dp_m.style.backgroundColor = 'royalblue';
				else if (dp < 90 && dp >= 70) globalThis.dp_m.style.backgroundColor = 'green';
				else if (dp < 70 && dp >= 35) globalThis.dp_m.style.backgroundColor = 'yellow';
				else if (dp < 35 && dp >= 10) globalThis.dp_m.style.backgroundColor = 'orange';
				else if (dp < 10) globalThis.dp_m.style.backgroundColor = 'red';
				clearInterval(timers.dp_tmr); timers.dp_tmr = setInterval(function () {
					let dp = what.dp * 100 / what.dpmax;
					globalThis.dp_mn.innerHTML = ((what.dp * 10 << 0) / 10) + '\/' + what.dpmax;
					globalThis.dp_m.style.width = dp + '%';
					if (dp >= 90) globalThis.dp_m.style.backgroundColor = 'royalblue';
					else if (dp < 90 && dp >= 70) globalThis.dp_m.style.backgroundColor = 'green';
					else if (dp < 70 && dp >= 35) globalThis.dp_m.style.backgroundColor = 'yellow';
					else if (dp < 35 && dp >= 10) globalThis.dp_m.style.backgroundColor = 'orange';
					else if (dp < 10) globalThis.dp_m.style.backgroundColor = 'red';
				}, 1000);
			}
			globalThis.sltic = addElement(global.dscr, 'div', 'intfffx'); globalThis.sltic.style.textAlign = 'left';
			let slti = addElement(globalThis.sltic, 'small'); slti.innerHTML = '<br>Class: ';
			if (!!what.wtype) {
				switch (what.wtype) {
					case 0: slti.innerHTML += 'Unarmed'; break;
					case 1: slti.innerHTML += 'Sword'; break;
					case 2: slti.innerHTML += 'Axe'; break;
					case 3: slti.innerHTML += 'Knife'; break;
					case 4: slti.innerHTML += 'Spear/Polearm'; break;
					case 5: slti.innerHTML += 'Club/Hammer'; break;
					case 6: slti.innerHTML += 'Staff/Wand'; break;
					case 7: slti.innerHTML += 'Bow/Crossbow'; break;
				}
			}
			else {
				switch (what.slot) {
					case 2: slti.innerHTML += 'Shield'; break;
					case 3: slti.innerHTML += 'Head'; break;
					case 4: slti.innerHTML += 'Body'; break;
					case 5: slti.innerHTML += 'Hands'; break;
					case 6: slti.innerHTML += 'Hands'; break;
					case 7: slti.innerHTML += 'Legs'; break;
					case 8: slti.innerHTML += 'Accessory'; break;
					case 9: slti.innerHTML += 'Accessory'; break;
					case 10: slti.innerHTML += 'Accessory'; break;
				}
			}
			if (what.twoh === true) slti.innerHTML += ' (2H)';
			if (what.slot === 1) switch (what.ctype) {
				case 0: slti.innerHTML += ', Edged'; break;
				case 1: slti.innerHTML += ', Piercing'; break;
				case 2: slti.innerHTML += ', Blunt'; break;
			}
			if (what.data.kills) {
				let sp = addElement(globalThis.sltic, 'small'); sp.style.position = 'absolute'; sp.style.right = 6;
				sp.innerHTML = 'kills: ' + col(what.data.kills, 'yellow');
				clearInterval(timers.wpnkilsch); timers.wpnkilsch = setInterval(function () {
					sp.innerHTML = 'kills: ' + col(what.data.kills, 'yellow');
				}, 1000);
			}
		} else {
			globalThis.sltic = addElement(global.dscr, 'div'); globalThis.sltic.style.textAlign = 'left';
			let slti = addElement(globalThis.sltic, 'small'); slti.innerHTML = '<br>Class: ';
			if (what.isf === true) {
				slti.innerHTML += 'Furniture';
				globalThis.text.innerHTML += dom.dseparator + '<span style="color:chartreuse">Use to add to the furniture list</span>';
				if (what.parent) {
					let owned = false;
					let sp = addElement(globalThis.sltic, 'small'); sp.style.position = 'absolute'; sp.style.right = 6;
					for (let a in furn) if (furn[a].id === what.parent.id) { owned = true; break }; sp.innerHTML = 'owned: <span style="color:' + (owned ? 'lime' : 'red') + '">' + (owned ? 'yes' : 'no') + '</span>'
				}
			}
			else if (what.id < 3000) { slti.innerHTML += 'Food'; if (what.rot) slti.innerHTML += '(' + '<span style="color:orange">perishable</span>' + ')' }
			else if (what.id >= 3000 && what.id < 5000) slti.innerHTML += 'Medicine/Tool';
			else if (what.id >= 5000 && what.id < 9000) slti.innerHTML += 'Material/Misc';
			else slti.innerHTML += 'Book';
		}
		if (what.id < 3000) {
			dom.dtrd = addElement(globalThis.sltic, 'small'); dom.dtrd.innerHTML = 'Tried: ';
			dom.dtrd.style.position = 'relative'; dom.dtrd.style.right = 1; dom.dtrd.style.float = 'right';
			if (what.data.tried === true) dom.dtrd.innerHTML += '<span style="color: lime">Yes</span>'; else dom.dtrd.innerHTML += '<span style="color: crimson">Never</span>'
		}
		if (what.id >= 9000 && what.id < 10000) {
			dom.dtrd = addElement(globalThis.sltic, 'small'); dom.dtrd.innerHTML = 'Read: ';
			dom.dtrd.style.position = 'relative'; dom.dtrd.style.right = 1; dom.dtrd.style.float = 'right';
			if (what.data.finished === true) dom.dtrd.innerHTML += '<span style="color: lime">Yes</span>'; else dom.dtrd.innerHTML += '<span style="color: crimson">Never</span>'
		}
		globalThis.rar_c = addElement(global.dscr, 'div', 'd_l');
		globalThis.rar = addElement(globalThis.rar_c, 'small'); globalThis.rar.innerHTML = '<br>Rarity: ';
		globalThis.rar.style.position = 'relative'; globalThis.rar.style.float = 'left';
		for (let i = 0; i < what.rar; i++) globalThis.rar.innerHTML += ' ★ ';
		dom.dscshe = addElement(global.dscr, 'div'); //dom.dscshe.innerHTML = dom.dseparator+'2323'; dom.dscshe.style.paddingTop=20;
		global.shiftitem = { item: what };
	}
	else if (type === 2) {
		globalThis.label = addElement(global.dscr, 'div', 'd_l'); globalThis.label.innerHTML = ttl;
		globalThis.text = addElement(global.dscr, 'div', 'd_t'); globalThis.text.innerHTML = dsc;
	}
	else if (type === 3) {
		globalThis.label = addElement(global.dscr, 'div', 'd_l'); globalThis.label.innerHTML = global.current_m.name;
		globalThis.text = addElement(global.dscr, 'div', 'd_t'); globalThis.text.innerHTML = global.current_m.desc;
	}
	else if (type === 4) {
		globalThis.label = addElement(global.dscr, 'div', 'd_l'); globalThis.label.innerHTML = ttl;
		globalThis.text = addElement(global.dscr, 'div', 'd_t'); globalThis.text.innerHTML = dsc;
		dom.gde = addElement(global.dscr, 'small'); dom.gde.style.position = 'relavite';
		dom.gde.style.float = 'left';
		dom.gde.innerHTML = '<br>Duration: '; if (what.duration !== -1) dom.gde.innerHTML += what.duration; else dom.gde.innerHTML += '∞';
		if (what.power) {
			dom.gde1 = addElement(global.dscr, 'small'); dom.gde1.style.position = 'relavite';
			dom.gde1.style.float = 'right';
			dom.gde1.innerHTML = '<br>Power: '; dom.gde1.innerHTML += what.power;
		}
		clearInterval(timers.inup); timers.inup = setInterval(function () { dom.gde.innerHTML = '<br>Duration: '; if (what.duration !== -1) dom.gde.innerHTML += what.duration; else dom.gde.innerHTML += '∞'; }, 200);
	}
	else if (type === 5) {
		let t = ttl === true ? you.title : what;
		globalThis.label = addElement(global.dscr, 'div', 'd_l'); globalThis.label.innerHTML = t.name
		switch (t.rar) {
			case 0: { globalThis.label.style.color = 'grey'; break }
			case 2: { globalThis.label.style.textShadow = '0px 0px 1px blue'; globalThis.label.style.color = 'cyan'; break }
			case 3: { globalThis.label.style.textShadow = '0px 0px 2px lime'; globalThis.label.style.color = 'lime'; break }
			case 4: { globalThis.label.style.textShadow = '0px 0px 3px orange'; globalThis.label.style.color = 'yellow'; break }
			case 5: { globalThis.label.style.textShadow = '0px 0px 2px crimson,0px 0px 5px red'; globalThis.label.style.color = 'orange'; break }
			case 6: { globalThis.label.style.textShadow = '1px 1px 1px black,0px 0px 2px purple'; globalThis.label.style.color = 'purple'; break }
			case 7: { globalThis.dl.style.textShadow = 'hotpink 1px 1px .1em,cyan -1px -1px .1em'; globalThis.dl.style.color = 'black'; break }
		}
		globalThis.text = addElement(global.dscr, 'div', 'd_t'); globalThis.text.innerHTML = t.desc
		if (t.talent) globalThis.text.innerHTML += (dom.dseparator + '<small style="color:cyan">talent effect<br></small><br><small style="color:darkorange">' + t.tdesc + '</small>')
		globalThis.dl = addElement(global.dscr, 'small'); globalThis.dl.style.position = 'relative'; globalThis.dl.style.display = 'flex';
		globalThis.dl.innerHTML = '<br>Rank: ' + (ttl === true ? (you.title.id === 0 ? '0' : you.title.rar) : (what.id === 0 ? '0' : what.rar));
		if (ttl === true && you.title.rars === true || !ttl && what.rars === true) globalThis.dl.innerHTML += '★';
	}
	else if (type === 6) {
		globalThis.label = addElement(global.dscr, 'div', 'd_l'); globalThis.label.innerHTML = !!what.bname ? what.bname : what.name;
		globalThis.sp = addElement(globalThis.label, 'small'); globalThis.sp.style.position = 'absolute'; globalThis.sp.style.right = 6; globalThis.sp.innerHTML = 'Ｐ: ' + (col((Math.round(what.p * 100) + '%'), 'magenta'));
		globalThis.text = addElement(global.dscr, 'div', 'd_t'); globalThis.text.innerHTML = what.desc;
		if (!!what.mlstn) {
			globalThis.prks = addElement(global.dscr, 'div', 'd_l'); globalThis.prks.innerHTML = '<br>Perks unlocked'; globalThis.prks.style.color = 'cyan';
			for (let k = 0; k < what.mlstn.length; k++) if (what.mlstn[k].g === true) {
				globalThis.prk = addElement(global.dscr, 'div', 'd_t'); globalThis.prk.innerHTML = 'lvl ' + what.mlstn[k].lv + ':<span style="color:yellow"> ' + what.mlstn[k].p + ' </span>';
			} else { globalThis.prk = addElement(global.dscr, 'div', 'd_t'); globalThis.prk.innerHTML = 'lvl ' + what.mlstn[k].lv + ':<span style="color:yellow"> ' + '??????????' + ' </span>'; return }
		}
	}
	else if (type === 7) {
		globalThis.label = addElement(global.dscr, 'div', 'd_l'); globalThis.label.innerHTML = what.x; globalThis.label.style.color = 'tomato';
		globalThis.text = addElement(global.dscr, 'div', 'd_t'); globalThis.text.innerHTML = what.y;
	}
	else if (type === 8) {
		globalThis.label = addElement(global.dscr, 'div', 'd_l'); globalThis.label.innerHTML = what.name;
		globalThis.text = addElement(global.dscr, 'div', 'd_t'); globalThis.text.innerHTML = what.desc;
		globalThis.dl = addElement(global.dscr, 'small'); globalThis.dl.style.position = 'relative'; globalThis.dl.style.display = 'flex';
		globalThis.dl.innerHTML = '<br>Rank: '; globalThis.db = addElement(globalThis.dl, 'div'); for (let i = 0; i < what.rar; i++) globalThis.db.innerHTML += '★';
		globalThis.db.style.paddingTop = 12; globalThis.db.style.paddingLeft = 6;
		switch (what.rar) {
			case 0: { globalThis.label.style.color = globalThis.db.style.color = 'grey'; break }
			case 2: { globalThis.label.style.textShadow = globalThis.db.style.textShadow = '0px 0px 1px blue'; globalThis.label.style.color = globalThis.db.style.color = 'cyan'; break }
			case 3: { globalThis.label.style.textShadow = globalThis.db.style.textShadow = '0px 0px 2px lime'; globalThis.label.style.color = globalThis.db.style.color = 'lime'; break }
			case 4: { globalThis.label.style.textShadow = globalThis.db.style.textShadow = '0px 0px 3px orange'; globalThis.label.style.color = globalThis.db.style.color = 'yellow'; break }
			case 5: { globalThis.label.style.textShadow = globalThis.db.style.textShadow = '0px 0px 2px crimson,0px 0px 5px red'; globalThis.label.style.color = globalThis.db.style.color = 'orange'; break }
			case 6: { globalThis.label.style.textShadow = globalThis.db.style.textShadow = '1px 1px 1px black,0px 0px 2px purple'; globalThis.label.style.color = globalThis.db.style.color = 'purple'; break }
			case 7: { globalThis.label.style.textShadow = globalThis.db.style.textShadow = 'hotpink 1px 1px .1em,cyan -1px -1px .1em'; globalThis.label.style.color = globalThis.db.style.color = 'black'; break }
		}
	}
	else if (type === 9) {
		globalThis.label = addElement(global.dscr, 'div', 'd_l'); globalThis.label.innerHTML = what.name;
		globalThis.text = addElement(global.dscr, 'div', 'd_t'); globalThis.text.innerHTML = typeof what.desc === 'function' ? (what.desc)(what) : what.desc;
	}
	else if (type === 10) {
		globalThis.label = addElement(global.dscr, 'div', 'd_l'); globalThis.label.innerHTML = what.name;
		globalThis.text = addElement(global.dscr, 'div', 'd_t'); globalThis.text.innerHTML = what.desc + dom.dseparator;
		let t = Object.keys(global.drdata); let ids = []; for (let a in t) ids[a] = Number(t[a].substring(1));
		globalThis.o = addElement(globalThis.text, 'small'); globalThis.o.innerHTML = 'drop table'; globalThis.o.style.color = 'cyan'; let thing = false;
		for (let a in ids) {
			if (ids[a] === what.id || what.un) {
				let dt = global.drdata[Object.keys(global.drdata)[a]]; thing = true;
				for (let b in what.drop) {
					globalThis.dbig = addElement(globalThis.text, 'div'); globalThis.dbig.style.display = 'flex'; globalThis.dbig.style.border = '#1f72a2 1px solid'; globalThis.dbig.style.backgroundColor = '#202031';
					globalThis.dcell1 = addElement(globalThis.dbig, 'div'); globalThis.dcell2 = addElement(globalThis.dbig, 'div'); globalThis.dbig.style.textAlign = 'center';
					globalThis.dcell1.style.width = '80%'; globalThis.dcell1.style.borderRight = '#1f72a2 1px solid'; globalThis.dcell2.style.width = '20%';
					if (b != what.drop.length - 1) globalThis.dbig.style.borderBottom = 'none'
					globalThis.dcell2.innerHTML = ((what.drop[b].chance * 100000000 << 0) / 1000000 + '%');
					if (what.drop[b].chance >= .05) globalThis.dcell2.style.color = 'lime';
					else if (what.drop[b].chance < .05 && what.drop[b].chance > .01) globalThis.dcell2.style.color = 'yellow';
					else if (what.drop[b].chance <= .01 && what.drop[b].chance > .001) globalThis.dcell2.style.color = 'orange';
					else if (what.drop[b].chance <= .001) globalThis.dcell2.style.color = 'crimson';
					if (dt[b] || what.un) {
						globalThis.dcell1.innerHTML += what.drop[b].item.name
						if (what.drop[b].cond && !what.drop[b].cond()) { globalThis.dcell1.style.textDecoration = 'line-through'; globalThis.dcell1.style.color = 'red' }
						switch (what.rar) {
							case 0: { globalThis.dcell1.style.color = 'grey'; break }
							case 2: { globalThis.dcell1.style.textShadow = '0px 0px 1px blue'; globalThis.dcell1.style.color = 'cyan'; break }
							case 3: { globalThis.dcell1.style.textShadow = '0px 0px 2px lime'; globalThis.dcell1.style.color = 'lime'; break }
							case 4: { globalThis.dcell1.style.textShadow = '0px 0px 3px orange'; globalThis.dcell1.style.color = 'yellow'; break }
							case 5: { globalThis.dcell1.style.textShadow = '0px 0px 2px crimson,0px 0px 5px red'; globalThis.dcell1.style.color = 'orange'; break }
							case 6: { globalThis.dcell1.style.textShadow = '1px 1px 1px black,0px 0px 2px purple'; globalThis.dcell1.style.color = 'purple'; break }
						}
						if (what.drop[b].max) {
							globalThis.dcell1b = addElement(globalThis.dcell1, 'small'); globalThis.dcell1b.style.color = 'inherit'; globalThis.dcell1b.style.position = 'absolute'
							globalThis.dcell1b.style.right = 70; globalThis.dcell1b.style.paddingTop = 2;
							globalThis.dcell1b.innerHTML = what.drop[b].max; if (what.drop[b].min && what.drop[b].min !== what.drop[b].max) globalThis.dcell1b.innerHTML += ('-' + what.drop[b].min)
						}
					}
					else { globalThis.dcell1.innerHTML = '???????????'; globalThis.dcell1.style.color = 'yellow' }
				}
				break
			}
		}
		if (!thing) {
			for (let b in what.drop) {
				globalThis.dbig = addElement(globalThis.text, 'div'); globalThis.dbig.style.display = 'flex'; globalThis.dbig.style.border = '#1f72a2 1px solid'; globalThis.dbig.style.backgroundColor = '#202031';
				globalThis.dcell1 = addElement(globalThis.dbig, 'div'); globalThis.dcell2 = addElement(globalThis.dbig, 'div'); globalThis.dbig.style.textAlign = 'center';
				globalThis.dcell1.style.width = '80%'; globalThis.dcell1.style.borderRight = '#1f72a2 1px solid'; globalThis.dcell2.style.width = '20%'
				if (b != what.drop.length - 1) globalThis.dbig.style.borderBottom = 'none'
				globalThis.dcell1.innerHTML = '???????????'; globalThis.dcell1.style.color = 'yellow'; globalThis.dcell2.innerHTML = ((what.drop[b].chance * 100000000 << 0) / 1000000 + '%');
				if (what.drop[b].chance >= .05) globalThis.dcell2.style.color = 'lime';
				else if (what.drop[b].chance < .05 && what.drop[b].chance > .01) globalThis.dcell2.style.color = 'yellow';
				else if (what.drop[b].chance <= .01 && what.drop[b].chance > .001) globalThis.dcell2.style.color = 'orange';
				else if (what.drop[b].chance <= .001) globalThis.dcell2.style.color = 'crimson';
			}
		}
	}
	else if (type === 12) {
		globalThis.label = addElement(global.dscr, 'div', 'd_l'); globalThis.label.innerHTML = ttl;
		globalThis.text = addElement(global.dscr, 'div', 'd_t'); globalThis.text.innerHTML = typeof dsc === 'function' ? (dsc)(what) : dsc;
	}
}

function msg(txt, c, dsc, type, bc, chck) {
	if (global.flags.m_freeze === false && global.flags.loadstate === false) {
		while (dom.gmsgs.children[1].children.length > global.msgs_max - 1) dom.gmsgs.children[1].removeChild(dom.gmsgs.children[1].children[0]);
		let msg = addElement(dom.mscont, 'div', null, 'msg');
		if (global.flags.msgtm) {
			let now = new Date();
			let g = addElement(msg, 'small'); g.innerHTML = '[' + (now.getHours() < 10 ? ('0' + now.getHours()) : now.getHours()) + ':' + (now.getMinutes() < 10 ? ('0' + now.getMinutes()) : now.getMinutes()) + ':' + (now.getSeconds() < 10 ? ('0' + now.getSeconds()) : now.getSeconds()) + ']'
			g.style.backgroundColor = '#242848'; g.style.display = 'flex';
		}
		let mtxt = addElement(msg, 'span');
		if (dsc) { if (type) addDesc(msg, dsc, type); else addDesc(msg, dsc); }
		//let nt = new String(); for(let a in txt){nt+=txt[a].charCodeAt()!==32?String.fromCharCode(41216-txt[a].charCodeAt()):' '}; txt=nt;
		if (c) mtxt.innerHTML = '<span style=color:' + c + (bc ? (';background-color:' + bc) : '') + '>' + txt + '</span>';
		else mtxt.innerHTML = txt; dom.mscont.scrollTop = dom.mscont.scrollHeight; global.lastmsg = msg.innerHTML;
		//if(true) {if(msg.innerHTML==global.lstmsg) msg.innerHTML=global.lastmsg+'('+(++global.lastmsgc)+')';
		//  else {global.lastmsg=msg.innerHTML;global.lastmsgc=0;}} else global.lastmsg=msg.innerHTML;
	}
}

function _msg(txt, c, dsc, type, bc, chck) {
	while (dom.gmsgs.children[1].children.length > global.msgs_max - 1) dom.gmsgs.children[1].removeChild(dom.gmsgs.children[1].children[0]);
	let msg = addElement(dom.mscont, 'div', null, 'msg');
	if (dsc) { if (type) addDesc(msg, dsc, type); else addDesc(msg, dsc); }
	if (c) msg.innerHTML = '<span style=color:' + c + (bc ? (';background-color:' + bc) : '') + '>' + txt + '</span>';
	else msg.innerHTML = txt; dom.mscont.scrollTop = dom.mscont.scrollHeight;
}


function msg_add(txt, c, bc, shd) {
	if (global.flags.m_freeze === false && global.flags.loadstate === false) {
		let bac = ''; let b = '';
		if (bc) bac = 'background-color:' + bc;
		if (shd) b = 'text-shadow:' + shd.toString(); else b = '';
		if (c) dom.gmsgs.children[1].children[dom.gmsgs.children[1].children.length - 1].innerHTML += '<span style=\"color:' + c + ';' + bac + ';' + b + '\">' + txt + '</span>';
		else dom.gmsgs.children[1].children[dom.gmsgs.children[1].children.length - 1].innerHTML += txt;
		dom.mscont.scrollTop = dom.mscont.scrollHeight;
	}
}

function format(thing, what) {
	msg('wHw')
}

function appear(dom) {
	if (!!dom) {
		let tmr = 0;
		dom.style.opacity = 0;
		dom.style.display = '';
		let a = setInterval(() => {
			tmr++;
			dom.style.opacity = tmr / 100;
			if (tmr === 100) clearInterval(a);
		}, 10);
	}
}

function fade(dom, timer, del) {
	let tmr = (timer || 50);
	dom.style.opacity = 1;
	dom.style.display = '';
	let a = setInterval(() => {
		tmr--;
		dom.style.opacity = tmr / (timer || 50);
		if (tmr === 0) { clearInterval(a); if (del === true) { document.body.removeChild(dom); } }
	}, 10);
}

function addDesc(dm, what, type, ttl, dsc, f, id) {
	dm.addEventListener('mouseenter', a => { dscr(a, what, type, ttl, f === true ? (dsc)() : dsc, id); giveSkExp(skl.rdg, .002); global.stat.popt++; global.curwds = globalThis; global.shiftid = id; if (global.kkey === 1) descsinfo(global.shiftid) });
	dm.addEventListener('mousemove', a => { global.dscr.style.top = global.dscr.clientHeight + 60 + a.clientY > document.body.clientHeight ? (a.clientY + 30 + global.dscr.clientHeight) - ((a.clientY + 30 + global.dscr.clientHeight) - document.body.clientHeight) - global.dscr.clientHeight - 30 : a.clientY + 30; global.dscr.style.left = global.dscr.clientWidth + 60 + a.clientX > document.body.clientWidth ? (a.clientX + 30 + global.dscr.clientWidth) - ((a.clientX + 30 + global.dscr.clientWidth) - document.body.clientWidth) - global.dscr.clientWidth - 30 : a.clientX + 30; });
	dm.addEventListener('mouseleave', () => { global.shiftid = 0; empty(global.dscr); global.dscr.style.display = 'none'; clearInterval(timers.inup); clearInterval(timers.dp_tmr); clearInterval(timers.wpnkilsch); if (dom.dscshe) dom.dscshe.innerHTML = '' });
}

global.t_n = 0;

function allbuff(who) {
	who.stat_r();
	for (let g in who.eff) if (who.eff[g].type === 1) who.eff[g].use(who.eff[g].y, who.eff[g].z);
	if (who.id === you.id) {
		let dm = skl.fgt.use(); if (you.eqp[0].twoh === true) dm += skl.twoh.use();
		you.str += dm; you.int += dm;
		usePlayerWeaponSkill();
	}
}

function fght(att, def) {
	/*if(global.flags.btlinterrupt===true){
	  msg('battle interrupted');if(global.current_z.size>0) {area_init(global.current_z);global.current_z.size--;}else if(global.current_z.size===-1)area_init(global.current_z);else {msg('Area cleared','orange');global.current_z.onEnd();global.flags.civil=true;global.flags.btl=false;}; dom.d7m.update(); global.flags.btlinterrupt=false; return;
	}*/
	if (!att.alive || !def.alive) {
		return;
	}
	if (global.flags.smkactv) { global.flags.smkactv = false; return; }
	att.stat_r(); def.stat_r();
	for (let g in att.eff) if (att.eff[g].type === 1) att.eff[g].use(att.eff[g].y, att.eff[g].z);
	for (let g in def.eff) if (def.eff[g].type === 1) def.eff[g].use(def.eff[g].y, def.eff[g].z);
	if (att.spd > 0 && def.spd > 0) {
		global.s_l += Math.abs(att.spd - def.spd);
	} else {
		global.s_l = Math.abs(att.spd - def.spd);
	}
	let inn, sc; if (att.spd >= def.spd || att.spd <= 0) { inn = att; sc = def; } else { inn = def; sc = att };
	global.miss = 0; let isyouinn = inn.id === you.id;
	//if(isyouinn===false){if(random()<.9){console.log('stealth active'); inn=att; sc=def}}
	if (inn.spd > 0) {
		if (global.s_l / sc.spd >= 2) {
			let acc_dmg = 0; let hts = 0; global.flags.multih = true;
			for (let ii = 0; ii < Math.ceil(global.s_l / sc.spd); ii++) {
				hts++;
				acc_dmg += inn.battle_ai(inn, sc);
				if (sc.hp <= 0) break;
			}
			global.flags.multih = false; if (att.id === you.id && acc_dmg >= sc.hpmax) global.stat.onesht++;
			if (global.flags.m_blh === false && (hts - global.miss) > 0) {
				if (hts === 1) printHitMessage(inn.name, acc_dmg, !isyouinn); else
					printMultihitMessage(hts, inn.name, acc_dmg, !isyouinn);
			}
			else if (global.flags.m_blh === false) msg(inn.name + ' missed', 'grey');
			if (sc.hp <= 0 && sc.alive === true) { global.atkdfty = [3, global.atkdftydt]; sc.onDeath(inn); sc.onDeathE(inn); }
			global.s_l = global.s_l % sc.spd;
		} else {
			doSingleAttack(inn, sc, isyouinn);
		}
	}
	if (!sc.alive) {
		you.stat_r(); return;
	}
	timers.btl2 = setTimeout(function () {
		if (global.flags.btl === true) {
			doSingleAttack(sc, inn, !isyouinn); you.stat_r();
		}
	}, 500 / global.fps);
}

function attack(att, def, atk, power) {
	if (!global.flags.btl) return
	allbuff(att); allbuff(def);
	atk = atk || abl.default; let isyou = att.id === you.id; global.mabl = atk;
	let dmg; let hit; let dk = false
	let a = 2 + rand(4);
	if (isyou === true) {
		wpnhitstt();
		hit = hit_calc(1); giveSkExp(skl.fgt, def.rnk); dk = global.flags.isdark && !cansee();
		if (dk) hit *= .3 + skl.ntst.lvl * .07;
	} else hit = hit_calc(2);
	global.target = you.eqp[a]; global.t_n = a;
	if (rand(100) < hit) {
		global.target_g = a;
		if (isyou === true) {
			let t = you.eqp[0].dp > 0 ? 1 : .5;
			switch (you.eqp[0].wtype) {
				case 0: giveSkExp(skl.unc, t); break;
				case 1: giveSkExp(skl.srdc, t); break;
				case 2: giveSkExp(skl.axc, t); break;
				case 3: giveSkExp(skl.knfc, t); break;
				case 4: giveSkExp(skl.plrmc, t); break;
				case 5: giveSkExp(skl.hmrc, t); break;
				case 6: giveSkExp(skl.stfc, t); break;
			}
			if (dk) giveSkExp(skl.ntst, .1);
			if (you.mods.tstl > 0) {
				itm = select(def.drop); if (random() < (itm.chance + (itm.chance / 100 * you.luck)) * .01 * skl.stel.use()) { giveItem(itm.item); giveSkExp(skl.stel, 1 / itm.chance * 10) } else giveSkExp(skl.stel, 1);
			}
		} else {
			if (you.eqp[1].id !== 10000 && !you.eqp[0].twoh) giveSkExp(skl.shdc, .2); you.stat_r();
			if (you.mods.ddgmod !== 0) if (random() < you.mods.ddgmod) { global.miss++; if (global.flags.m_blh === false && (!global.flags.multih && global.flags.m_blh === false)) msg(att.name + ' missed', 'grey'); global.flags.msd = true; giveSkExp(skl.evas, .5); return 0 }
		}
		dmg = Math.round(atk.f(att, def, power));
		def.hp -= dmg;
		global.flags.msd = false;
		if (global.flags.m_blh === false && (!global.flags.multih && global.flags.m_blh === false)) printHitMessage(att.name, dmg, att.id === you.id ? false : true);
		if (isyou === true) {
			dom.d8_2.innerHTML = 'Critical chance: ' + (Math.round(you.mods.crflt * 1000 + ((you.crt * (2 - (you.sat / you.satmax + you.mods.sbonus) * 2) + you.crt) * (you.luck / 25 + 1) + skl.seye.use()) * 1000) / 10) + '%'; if (you.eqp[0].id != 10000) you.eqp[0].dp > 0 ? you.eqp[0].dp -= .008 : you.eqp[0].dp = 0; global.stat.dmgdt += dmg;
			if (global.flags.eshake === true) {
				dom.d1m.style.left = parseInt(global.special_x) + rand(-3, 3) + 'px'; dom.d1m.style.top = parseInt(global.special_y) + rand(-3, 3) + 'px';
				setTimeout(() => { dom.d1m.style.left = parseInt(global.special_x) + 'px'; dom.d1m.style.top = parseInt(global.special_y) + 'px'; }, 60);
			}
		}
		else { if (global.target.id !== 10000) global.target.dp > 0 ? global.target.dp -= .008 : global.target.dp = 0; if (you.eqp[1].id !== 10000) you.eqp[1].dp > 0 ? you.eqp[1].dp -= .008 : you.eqp[1].dp = 0; if (dmg > 0) giveSkExp(skl.painr, 1); if (global.target.id === 10000 && dmg > 0) giveSkExp(skl.tghs, dmg * .05); global.stat.dmgrt += dmg }
	} else { global.miss++; global.stat.misst++;; if (global.flags.m_blh === false && (!global.flags.multih && global.flags.m_blh === false)) msg(att.name + ' missed', 'grey'); global.flags.msd = true; if (dk) giveSkExp(skl.ntst, .01); if (!isyou) global.stat.dodgt++; } update_d();
	if (!global.flags.multih) { if (isyou && dmg >= def.hpmax) global.stat.onesht++; if (def.hp <= 0 && def.alive === true) { global.atkdfty = [3, global.atkdftydt]; def.onDeath(att); def.onDeathE(att); } }
	return dmg || 0;
}

function tattack(pow, type, e) {
	let dmg; let ddat = skl.thr.use(); let m = global.current_m; global.atkdftm[0] = type;
	let agl_bonus = 0; let spd = m.spd > 0 ? m.spd : 0; for (let i = 0; i < you.eqp.length; i++) agl_bonus += you.eqp[i].agl;
	let hit = ((you.agl + agl_bonus / 2) * you.efficiency()) / ((spd * 5 + m.agl)) * 130 + 5 + ddat.b;
	giveSkExp(skl.thr, e); giveSkExp(skl.fgt, skl.thr.lvl * 5 + 1);
	if (rand(100) < hit) {
		dmg = Math.round(((1 + you.str_r * .05) * (you.efficiency() + 1) * pow * (ddat.a + 1)) / 2); global.stat.dmgdt += dmg;
		if (!global.flags.m_blh) msg('You hit ' + global.current_m.name + ' for <span style="color:hotpink">' + dmg + '</span> damage', 'yellow');
		global.current_m.hp -= dmg; if (m.hp <= 0 && m.alive === true) { m.onDeath(you); m.onDeathE(); } dom.d5_1_1m.update();
		if (global.flags.eshake === true) {
			dom.d1m.style.left = parseInt(global.special_x) + rand(-3, 3) + 'px'; dom.d1m.style.top = parseInt(global.special_y) + rand(-3, 3) + 'px';
			setTimeout(() => { dom.d1m.style.left = parseInt(global.special_x) + 'px'; dom.d1m.style.top = parseInt(global.special_y) + 'px'; }, 60);
		}
	} else { if (global.flags.m_blh === false) msg(you.name + ' missed', 'grey'); }
}

function dmg_calc(att, def, atk) {
	let isyou = att.id === you.id;
	let atea = atk.aff || isyou ? att.eqp[0].atype : att.atype;
	let atcs = atk.class || isyou ? att.eqp[0].ctype : att.ctype;
	global.atype_d = atk.aff || att.atype;
	let ta = effect.tarnish.active === true ? .7 : (effect.prostasia.active === true ? 1.3 : 1);
	let eff = you.efficiency(); let dmg = 0; let b = 1;
	if (atk.stt === 1) {
		if (isyou === true) {
			global.atype_d = atk.aff || you.eqp[0].atype; global.atkdftm = [atea, atcs, 0];
			let b = you.luck / 25 + 1; let undc = 0; if (you.eqp[0].id === 10000) undc = you.mods.undc;
			dmg = (att.str * eff + (((att.eqp[0].str + undc) * (att.eqp[0].dp / att.eqp[0].dpmax) * .9 + .1) * (att.eqp[0].id === 10000 ? 1 : ta))) * (100 + (att.eqp[0].aff[atea] * 10 + atk.affp * 10 + att.eqp[0].cls[atcs] * 10 + att.maff[global.current_m.type] * 10 + att.aff[atea] * 10) * (att.eqp[0].id === 10000 ? 1 : ta)) / 100 - (def.str * (100 + def.aff[atea] * 5 + def.cls[atcs] * 5) / 100) + 1;
		} else { dmg = (att.str * (100 + att.eqp[0].aff[att.atype] * 10 + atk.affp * 10 + att.eqp[0].cls[att.ctype] * 10) / 100 - ((def.str * eff + (global.target.str * ((global.target.dp / global.target.dpmax) * .85 + .15) * ta)) * (100 + global.target.aff[att.atype] * 5 * ta + global.target.cls[att.ctype] * 5 * ta + you.caff[att.atype] * 10 + you.cmaff[global.current_m.type] * 10 + you.ccls[att.ctype] * 10) / 100 + ((you.eqp[1].str * (1 + skl.shdc.lvl / 20) * (you.eqp[1].dp / you.eqp[1].dpmax) * .6 + .4) * ta) / 2) * (100 - (you.eqp[1].aff[att.atype] * 5 * (1 + skl.shdc.lvl / 20) + global.target.cls[att.ctype] * 5 * (1 + skl.shdc.lvl / 20) * ta)) / 100); b = 1; }
	}
	else if (atk.stt === 2) {
		if (isyou === true) {
			global.atype_d = atk.aff || you.eqp[0].atype;
			let b = you.luck / 20 + 1;
			dmg = (att.int * eff + ((att.eqp[0].int * (att.eqp[0].dp / att.eqp[0].dpmax) * .9 + .1) * (att.eqp[0].id === 10000 ? 1 : ta))) * (100 + (att.eqp[0].aff[atea] * 10 + atk.affp * 10 + att.eqp[0].cls[atcs] * 10 + att.maff[global.current_m.type] * 10 + att.aff[atea] * 10) * (att.eqp[0].id === 10000 ? 1 : ta)) / 100 - (def.int * (100 + def.aff[atea] * 5 + def.cls[atcs] * 5) / 100) + 1;
		} else { dmg = (att.int * (100 + att.eqp[0].aff[att.atype] * 15 + atk.affp * 15 + att.eqp[0].cls[att.ctype] * 5) / 100 - ((def.int * eff + (global.target.int * ((global.target.dp / global.target.dpmax) * .85 + .15) * ta)) * (100 + global.target.aff[att.atype] * 5 * ta + global.target.cls[att.ctype] * 5 * ta + you.caff[att.atype] * 10 + you.cmaff[global.current_m.type] * 10 + you.ccls[att.ctype] * 10) / 100 + ((you.eqp[1].int * (1 + skl.shdc.lvl / 20) * (you.eqp[1].dp / you.eqp[1].dpmax) * .6 + .4) * ta) / 2) * (100 - (you.eqp[1].aff[att.atype] * 5 * (1 + skl.shdc.lvl / 20) + global.target.cls[att.ctype] * 5 * (1 + skl.shdc.lvl / 20) * ta)) / 100); b = 1; }
	}
	let ran = random(); let c = 0; if (isyou === true) c = skl.seye.use(); let ctr_r = (att.crt * (2 - (you.sat / you.satmax + you.mods.sbonus) * 2) + att.crt) * b + c + you.mods.crflt;
	if (isyou === false && dmg > 0) {
		switch (global.atype_d) {
			case 1: giveSkExp(skl.aba, dmg * .01); break;
			case 2: giveSkExp(skl.abe, dmg * .01); break;
			case 3: giveSkExp(skl.abf, dmg * .01); break;
			case 4: giveSkExp(skl.abw, dmg * .01); break;
			case 5: giveSkExp(skl.abl, dmg * .01); break;
			case 6: giveSkExp(skl.abd, dmg * .01); break;
		}
		global.atkdftydt.a = atea; global.atkdftydt.c = atcs; global.atkdftydt.id = att.id
	}
	let pn = isyou === true ? 1 : 1 - skl.painr.use(); dmg = dmg * def.res.ph * pn;
	if (ran < ctr_r) {
		let cpw = 1; let dmod = 1; let cbst = 1;
		if (isyou === true) {
			giveSkExp(skl.seye, 1); cpw = you.mods.cpwr; cbst = 1 + skl.war.use();
			dom.d1m.style.left = parseInt(global.special_x) + rand(-3, 3) + 'px'; dom.d1m.style.top = parseInt(global.special_y) + rand(-3, 3) + 'px';
			setTimeout(() => { dom.d1m.style.left = parseInt(global.special_x) + 'px'; dom.d1m.style.top = parseInt(global.special_y) + 'px'; }, 60);
		} else { giveSkExp(skl.dngs, 1); sk = skl.dngs.use(); dmod = 1 - sk * (sk > 25 ? .01 : .02) }
		if (dmg <= 0) dmg = 0;
		cdmg = dmg * randf(1.9 * cpw, 2.1 * cpw) * .5 * dmod * cbst;
		global.flags.crti = true;
		return dmg + cdmg <= 1 ? rand(1, 5) : Math.ceil((dmg + cdmg) * att.dmlt * randf(.9, 1.1)) + rand(1, 5);
	} else return dmg > 0 ? Math.ceil(dmg * att.dmlt * randf(.9, 1.1)) : 0;
}

function dumb(x) {
	if (x) {
		let arr = [];
		for (let m = 0; m < 5; m++) {
			arr[m] = new Object();
			arr[m].obj = addElement(document.body, 'span', null, 'shn');
			arr[m].obj.style.pointerEvents = 'none';
			arr[m].obj.innerHTML = select(['x', 'X', '*', '#', '$']);
			arr[m].obj.style.top = -55; arr[m].obj.style.left = -55;
			arr[m].posx = x.clientX; arr[m].posy = x.clientY;
			arr[m].accx = rand(-10, 10); arr[m].accy = rand(15, 25);
		}
		let t = 0;
		let g = setInterval(() => {
			t++;
			for (let m = 0; m < 5; m++) {
				arr[m].obj.style.top = arr[m].posy - (arr[m].accy - t) * t * .4;
				arr[m].obj.style.left = arr[m].posx + arr[m].accx * t * .5;
				arr[m].obj.style.opacity = (30 - t) / 30;
			}
			if (t === 30) {
				clearInterval(g);
				for (let m = 0; m < 5; m++) document.body.removeChild(arr[m].obj);
			}
		}, 20);
	}
}

function mf(num, index) {
	let d = addElement(document.body, 'small'); let c = ['rgb(255, 116, 63)', 'rgb(192, 192, 192)', 'rgb(255, 215, 0)'];
	d.style.position = 'absolute'; d.style.opacity = 1;
	d.style.width = 100; d.style.top = 755; d.style.left = 328 - 50 * index;
	d.innerHTML = '<span style="color: ' + c[index - 1] + '">●</span><span style="color: rgb(255,70,70)">' + num + '</span>';
	let t = 0;
	let g = setInterval(() => {
		t++;
		d.style.top = parseInt(d.style.top) - 2 + 'px'; d.style.opacity = (30 - t) / 30;
		if (t === 30) {
			clearInterval(g);
			document.body.removeChild(d);
		}
	}, 30);
}

function hit_calc(tp) {
	if (tp === 1) {
		let agl_bonus = 0; let spd = global.current_m.spd > 0 ? global.current_m.spd : 0; for (let i = 0; i < you.eqp.length; i++) agl_bonus += you.eqp[i].agl;
		//return (200 + ((you.agl+agl_bonus)*you.efficiency()) - (global.current_m.spd+global.current_m.agl+100/(100*you.efficiency())*100));
		return ((you.agl + agl_bonus / 2) * you.efficiency()) / ((spd + global.current_m.agl + global.current_m.eva)) * 130 + 5;
	}
	else if (tp === 2) {
		let agl_bonus = 0; let spd = you.spd > 0 ? you.spd : 0; for (let i = 0; i < you.eqp.length; i++) agl_bonus += you.eqp[i].agl;
		return global.current_m.agl / ((spd + you.agl + agl_bonus / 2) * you.efficiency()) * 100 + 10 - skl.evas.lvl
		//return (210 + global.current_m.agl - (you.spd+you.agl+100*(100*you.efficiency())/100)); 
	}
}

function wpnhitstt() {
	switch (you.eqp[0].wtype) {
		case 0: global.stat.msts[0][0]++; break
		case 1: global.stat.msts[1][0]++; break
		case 2: global.stat.msts[2][0]++; break
		case 3: global.stat.msts[3][0]++; break
		case 4: global.stat.msts[4][0]++; break
		case 5: global.stat.msts[5][0]++; break
		case 6: global.stat.msts[6][0]++; break
		case 7: global.stat.msts[7][0]++; break
	}
}

function wpndiestt(killer, me) {
	switch (killer.eqp[0].wtype) {
		case 0: global.stat.msts[0][1]++; break
		case 1: global.stat.msts[1][1]++; break
		case 2: global.stat.msts[2][1]++; break
		case 3: global.stat.msts[3][1]++; break
		case 4: global.stat.msts[4][1]++; break
		case 5: global.stat.msts[5][1]++; break
		case 6: global.stat.msts[6][1]++; break
		case 7: global.stat.msts[7][1]++; break
	}
	switch (me.type) {
		case 0: global.stat.msks[0]++; break
		case 1: global.stat.msks[1]++; break
		case 2: global.stat.msks[2]++; break
		case 3: global.stat.msks[3]++; break
		case 4: global.stat.msks[4]++; break
		case 5: global.stat.msks[5]++; break
	}
}

function renderRcp(rcp) {
	dom.ct_bt1_1_mc = addElement(dom.ct_bt1_1, 'div', null, 'crf_lg'); dom.ct_bt1_1_mc.style.position = 'relative';
	this.ct_bt1_1_m = addElement(dom.ct_bt1_1_mc, 'span'); rcp._t = this.ct_bt1_1_m;
	if (typeof InstallTrigger !== 'undefined') { this.ct_bt1_1_m.style.paddingTop = 0; this.ct_bt1_1_m.style.paddingBottom = 0 }
	this.ct_bt1_1_m.innerHTML = rcp.name;
	let test = make(rcp, true); let safe = false;
	if (test.y.length != rcp.rec.length || test.o[0] === 2) this.ct_bt1_1_m.style.color = 'grey';
	if (dom.spcldom && rcp.id === dom.spcldom.rcp.id) {
		dom.rcpcurar = addElement(dom.ct_bt1_1_mc, 'span'); dom.rcpcurar.innerHTML = '⋗⋗'; dom.spcldom = dom.ct_bt1_1_mc; dom.spcldom.rcp = rcp;
		dom.rcpcurar.style.position = 'absolute'; dom.rcpcurar.style.right = 2; dom.rcpcurar.style.color = 'rgb(188,254,254)';
	}
	dom.ct_bt1_1_mc.addEventListener('mouseenter', function () {
		test = make(rcp, true); global.curr_r = rcp
		empty(dom.ct_bt1_2);
		this.ct_bt1_2a = addElement(dom.ct_bt1_2, 'div'); this.ct_bt1_2a.innerHTML = 'reagents required';
		this.ct_bt1_2a.style.textAlign = 'center'; this.ct_bt1_2a.style.borderBottom = '1px solid #3e4092';
		if (skl.crft.lvl > 0) {
			this.ct_bt1_2at = addElement(dom.ct_bt1_2, 'div', 'rptbn'); if (!global.flags.rptbncgt) {
				this.ct_bt1_2at.style.backgroundColor = '#a11'; this.ct_bt1_2at.innerHTML = '';
			} else { this.ct_bt1_2at.style.backgroundColor = 'green'; this.ct_bt1_2at.innerHTML = '‣'; }
			let tm = (5000 - (skl.crft.lvl * 350 + skl.ptnc.lvl * 150) < 300 ? 300 : (5000 - (skl.crft.lvl * 350 + skl.ptnc.lvl * 150)))
			addDesc(this.ct_bt1_2at, { name: "Enable Repeatable Crafting", desc: function () { let txt = "<span style='color:magenta'>Current speed: </span><span style='color:orange'>" + ((tm / 1000).toFixed(2)) + " sec</span>"; return txt } }, 9);
			this.ct_bt1_2at.addEventListener('click', function () {
				if (global.flags.rptbncgt) {
					clearInterval(timers.rptbncgt); global.flags.rptbncgtf = false;
					this.style.backgroundColor = '#a11'; this.innerHTML = '';
				} else {
					this.style.backgroundColor = 'green'; this.innerHTML = '‣';
				}
				global.flags.rptbncgt = !global.flags.rptbncgt
			});
		} rcp._t2 = [];
		for (let g = 0; g < rcp.rec.length; g++) {
			this.ct_bt1_2bc = addElement(dom.ct_bt1_2, 'small'); this.ct_bt1_2bc.style.display = 'flex';
			this.ct_bt1_2bc1 = addElement(this.ct_bt1_2bc, 'div', null, 'rgt_ics');
			this.ct_bt1_2bc2 = addElement(this.ct_bt1_2bc, 'div', null, 'rgt_ics'); rcp._t2[g] = this.ct_bt1_2bc2
			if (rcp.rec[g].item.data.dscv === true) { this.ct_bt1_2bc1.innerHTML = rcp.rec[g].item.name; addDesc(this.ct_bt1_2bc, rcp.rec[g].item) } else this.ct_bt1_2bc1.innerHTML = '?????????';
			this.ct_bt1_2bc1.style.paddingLeft = '8px';
			let num = 0; if (test.z.length > 0) num = test.z[g];
			if ((test.z[g] >= rcp.rec[g].amount) || test.b[g] === true) { this.ct_bt1_2bc2.style.color = 'lime'; num = rcp.rec[g].item.slot ? test.z[g] : rcp.rec[g].item.amount }
			else { this.ct_bt1_2bc2.style.color = 'grey'; num = rcp.rec[g].item.slot ? test.z[g] : rcp.rec[g].item.amount }
			let n = ''; if (test.z[g] > 0 && rcp.rec[g].item.slot) {
				for (let r in test.r) for (let b in you.eqp) if (you.eqp[b].data.uid === test.r[r].data.uid && you.eqp[b].id !== 10000) { n = '<small style="color:orange">[E]</small>'; continue }
			}
			if ((test.z[g] >= rcp.rec[g].amount) || test.b[g] === true) this.ct_bt1_2bc2.style.color = 'lime'; else this.ct_bt1_2bc2.style.color = 'grey';
			if (rcp.rec[g].return === true) this.ct_bt1_2bc2.innerHTML = '∞'; else this.ct_bt1_2bc2.innerHTML = rcp.rec[g].amount + ' / ' + num + ' ' + n; this.ct_bt1_2bc2.style.borderRight = 'none';
			this.ct_bt1_2bc2.style.textAlign = 'center';
		}
		this.ct_bt1_2c = addElement(dom.ct_bt1_2, 'div'); this.ct_bt1_2c.innerHTML = 'output';
		this.ct_bt1_2c.style.width = '55%'; this.ct_bt1_2c.style.position = 'absolute';
		this.ct_bt1_2c.style.borderTop = '1px solid #3e4092'; this.ct_bt1_2c.style.borderBottom = '1px solid #3e4092';
		this.ct_bt1_2c.style.bottom = 71; this.ct_bt1_2c.style.textAlign = 'center';
		for (let g in rcp.res) {
			this.ct_bt1_2cc = addElement(dom.ct_bt1_2, 'small'); this.ct_bt1_2cc.style.display = 'flex';
			this.ct_bt1_2cc.style.position = 'absolute'; this.ct_bt1_2cc.style.bottom = (typeof InstallTrigger !== 'undefined') ? (48 - g * 21) : (50 - g * 21);
			this.ct_bt1_2cc.style.width = '55%';
			this.ct_bt1_2cc1 = addElement(this.ct_bt1_2cc, 'div', 'toh', 'rgt_ics');
			this.ct_bt1_2cc2 = addElement(this.ct_bt1_2cc, 'div', null, 'rgt_ics');
			if (rcp.allow === true) {
				this.ct_bt1_2cc1.innerHTML = rcp.res[g].item.name; if (!!rcp.res[g].amount_max) { this.ct_bt1_2cc2.innerHTML = rcp.res[g].amount + '~' + rcp.res[g].amount_max; } else this.ct_bt1_2cc2.innerHTML = rcp.res[g].amount;
				addDesc(this.ct_bt1_2cc1, rcp.res[g].item); this.ct_bt1_2cc2.style.color = 'lime';
			} else { this.ct_bt1_2cc1.innerHTML = '?????????'; this.ct_bt1_2cc2.innerHTML = '???'; this.ct_bt1_2cc2.style.color = 'grey'; }
			this.ct_bt1_2cc2.style.textAlign = 'center';
			this.ct_bt1_2cc2.style.borderRight = 'none'; this.ct_bt1_2cc1.style.paddingLeft = '8px';
			this.ct_bt1_2cc2.style.width = '27.5%'; this.ct_bt1_2cc1.style.width = '75%';
		}
		if (rcp.srect != null) {
			let l = test.o.length;
			this.ct_bt1_3c = addElement(dom.ct_bt1_2, 'div'); this.ct_bt1_3c.innerHTML = 'tools needed';
			this.ct_bt1_3c.style.width = '55%'; this.ct_bt1_3c.style.position = 'absolute';
			this.ct_bt1_3c.style.borderTop = '1px solid #3e4092'; this.ct_bt1_3c.style.borderBottom = '1px solid #3e4092';
			this.ct_bt1_3c.style.bottom = 115 + (((l - 1) / 2) << 0) * 15; this.ct_bt1_3c.style.textAlign = 'center';   // bluh!!!
			this.ct_bt1_3cc = addElement(dom.ct_bt1_2, 'small'); //this.ct_bt1_3cc.style.fontSize='.8em';
			this.ct_bt1_3cc.style.width = '55%'; this.ct_bt1_3cc.style.position = 'absolute';
			this.ct_bt1_3cc.style.top = 250 - (((l - 1) / 2) << 0) * 15; this.ct_bt1_3cc.style.textAlign = 'left';
			this.ct_bt1_3cc.style.left = '255px';
			if (l > 1) {
				for (let nu in test.o) {
					if (test.o[nu] === 1) this.ct_bt1_3cc.innerHTML += '<span style="color:lime">' + rcp.srect[nu] + '</span>' + (l - 1 == nu ? '' : ', '); else if (test.o[nu] === 2) this.ct_bt1_3cc.innerHTML += '<span style="color:red">' + rcp.srect[nu] + '</span>' + (l - 1 == nu ? '' : ', ');
				}
			} else { if (test.o[0] === 1) this.ct_bt1_3cc.style.color = 'lime'; else if (test.o[0] === 2) this.ct_bt1_3cc.style.color = 'red'; this.ct_bt1_3cc.innerHTML += rcp.srect[0] }
		}
	});
	dom.ct_bt1_1_mc.addEventListener('mouseenter', function () {
		if (dom.rcpcurar) dom.spcldom.removeChild(dom.rcpcurar);
		dom.rcpcurar = addElement(this, 'span'); dom.rcpcurar.innerHTML = '⋗⋗'; dom.spcldom = this; dom.spcldom.rcp = rcp;
		dom.rcpcurar.style.position = 'absolute'; dom.rcpcurar.style.right = 2; dom.rcpcurar.style.color = 'rgb(188,254,254)';
	})
	dom.ct_bt1_1_mc.addEventListener('click', function () {
		test = make(rcp, true); if (rcp.rec.length === test.y.length && test.o[0] !== 2) safe = true
		if (global.flags.rptbncgt) { _fcraft(rcp, safe); global.crrpsat = rcp; clearInterval(timers.rptbncgt); global.flags.rptbncgtf = true; if (safe) timers.rptbncgt = setInterval(() => { _fcraft(global.crrpsat, safe); giveSkExp(skl.ptnc, .05); refreshRcp(global.curr_r) }, (5000 - (skl.crft.lvl * 350 + skl.ptnc.lvl * 150) < 300 ? 300 : (5000 - (skl.crft.lvl * 350 + skl.ptnc.lvl * 150)))) }
		else _fcraft(rcp, safe); refreshRcp(rcp);
	});
}

function refreshRcp(fl) {
	if (global.rm === 0 || !global.rm) {
		for (let a in global.rec_d) _refreshRcpCnt(global.rec_d[a], global.rec_d[a]._t)
	} else {
		for (let a in global.srcp) _refreshRcpCnt(global.srcp[a], global.srcp[a]._t)
	}
	let t2 = fl._t2; let test = make(fl, true);
	for (let g in fl.rec) {
		if (!t2) break;
		let n = ''; if (test.z[g] > 0 && fl.rec[g].item.slot) {
			for (let r in test.r) for (let b in you.eqp) if (you.eqp[b].data.uid === test.r[r].data.uid && you.eqp[b].id !== 10000) { n = '<small style="color:orange">[E]</small>'; continue }
		}
		let num = 0; if (test.z.length > 0) num = test.z[g];
		if ((test.z[g] >= fl.rec[g].amount) || test.b[g] === true) { t2[g].style.color = 'lime'; num = fl.rec[g].item.slot ? test.z[g] : fl.rec[g].item.amount }
		else { t2[g].style.color = 'grey'; num = fl.rec[g].item.slot ? test.z[g] : fl.rec[g].item.amount }
		t2[g].innerHTML = fl.rec[g].amount + ' / ' + num + ' ' + n;
	}
}

function _refreshRcpCnt(r, t, t2) {
	let test = make(r, true);
	if (test.y.length != r.rec.length || test.o[0] === 2) t.style.color = 'grey'; else t.style.color = 'rgb(188,254,254)';
}

function _fcraft(what, safe) {
	if (safe) { safe = false; if (global.flags.sleepmode === true) { msg('You may want to wake up first', 'red'); return }; if (global.flags.btl === true) { msg('You\'re too busy fighting', 'red'); return }; if (global.flags.rdng === true) { msg('You\'re too occupied with reading', 'red'); return }; if (global.flags.busy === true) { msg('You\'re too busy with something else', 'red'); return }; let ntest = make(what, true); for (let g = 0; g < what.rec.length; g++) { if (what.rec.length === ntest.y.length && ntest.o[0] !== 2) safe = true } if (safe) { make(what); global.stat.crftt++; iftrunkopen(1) } else { if (global.flags.rptbncgtf) { clearInterval(timers.rptbncgt); global.flags.rptbncgtf = false; } } }
}

function renderSkl(skl) {
	this.skwmmc = addElement(dom.skcon, 'div', null, 'skwmmc');
	addDesc(this.skwmmc, skl, 6);
	this.skwmm1 = addElement(this.skwmmc, 'small'); if (skl.sp) this.skwmm1.style.fontSize = skl.sp;
	this.skwmm1.style.width = '32%';
	this.skwmm1.innerHTML = skl.name + ' lvl: ' + skl.lvl; this.skwmm1.style.borderRight = '1px solid #46a';
	this.skwmm2 = addElement(this.skwmmc, 'small'); this.skwmm2.innerHTML = '　exp: ' + formatw(Math.round(skl.exp)) + '/' + formatw(skl.expnext_t) + '　';
	this.skwmm2.style.borderRight = '1px solid #46a'; this.skwmm2.style.fontSize = '.8em'; this.skwmm2.style.width = '170px';
	this.skwmm3c = addElement(this.skwmmc, 'div'); this.skwmm3 = addElement(this.skwmm3c, 'div'); this.skwmm3c.style.width = '197px'; this.skwmm3.innerHTML = '　';
	this.skwmm3.style.marginLeft = '2px'; this.skwmm3.style.width = skl.exp / skl.expnext_t * 100 + '%';
	//if(skl.lastupd&&skl.lastupd-time.minute>=1) this.skwmm3.style.backgroundColor='limegreen'; else this.skwmm3.style.backgroundColor='yellow';
	this.skwmm3.style.backgroundColor = 'yellow';
}

function area_init(area) {
	if (area.size !== 0) {
		if (area.id !== 101) {
			let rnd = random();
			for (let obj in area.pop) if (rnd >= area.popc[obj][0] && rnd <= area.popc[obj][1]) if (!area.pop[obj].cond || area.pop[obj].cond() === true) {
				global.flags.civil = false; global.flags.btl = true;
				global.current_z = area;
				let temp = area.pop[obj];
				let newobj = temp.crt.id === creature.default.id ? creature.default : mon_gen(temp.crt);
				lvlup(newobj, rand(temp.lvlmin - 1, temp.lvlmax - 1));
				//newobj.data.lasthp=newobj.hp; 
				global.current_m = newobj; update_m(); dom.d5_1_1m.update(); if (!!dom.d7m) dom.d7m.update(); //dom.d5m.update(); 
				return newobj;
			} else (area_init(area));
		}
	} else msg('nobody\'s here');
	if (!!dom.d7m) dom.d7m.update(); update_m(); dom.d5_1_1m.update();
}

function mon_gen(crt) {
	crt.eff = []; global.e_em = []; empty(dom.d101m);
	let newobj = copy(crt); newobj.drop = crt.drop;
	if (!global.flags.inside) {
		if (global.flags.israin) giveEff(newobj, effect.wet, 5)
		if (global.flags.iscold) giveEff(newobj, effect.cold, 25)
	}
	newobj.sex = random() < .5;
	return newobj;
}

function giveEff(target, e, d, y, z) {
	if (target.id !== 0) {
		let ef = e;
		if (target.id !== you.id) { ef = new Object(); for (let g in e) ef[g] = e[g]; }
		if (target.id === you.id || global.flags.btl) {
			let p = findbyid(target.eff, e.id);
			if (!p || !p.active) {
				if (d) ef.duration = d; ef.y = y; ef.z = z; if (ef.x) eff_d(ef, ef.x, ef.c, ef.b, target);
				ef.target = target; target.eff.push(ef);
			} ef.onGive(d, y, z); ef.active = true;
		} effdfix();
		target.stat_r(); return e
	}
}


function removeEff(e, t) {
	if (e.active === true) {
		if (e.x) {
			if (e.target.id === you.id) {
				node = global.e_e.indexOf(e); dom.d101.removeChild(dom.d101.children[node]); global.e_e.splice(node, 1);
				if (dom.d101.children.length > you.eff.length) empty(dom.d101);
			}
			else {
				node = global.e_em.indexOf(e); dom.d101m.removeChild(dom.d101m.children[node]); global.e_em.splice(node, 1);
				if (dom.d101m.children.length > e.target.eff.length) empty(dom.d101m);
			} e.onRemove(); global.dscr.style.display = 'none';
		} e.target.eff.splice(e.target.eff.indexOf(e), 1); e.active = false; clearInterval(timers.inup); effdfix()
	}
	e.target.stat_r();
}

function effdfix() {
	if (you.eff.length >= 21) {
		dom.d7.style.height = 104; for (let i = 0; i < document.getElementsByClassName('se_ia').length; i++) document.getElementsByClassName('se_ia')[i].style.display = 'inline-block';
		document.getElementById('se_i').style.display = 'block';
	} else {
		dom.d7.style.height = 125; for (let i = 0; i < document.getElementsByClassName('se_ia').length; i++) document.getElementsByClassName('se_ia')[i].style.display = '';
		document.getElementById('se_i').style.display = 'flex';
	}
}

function eff_d(e, s, c, b, tgt) {
	if (tgt.id === you.id) {
		let ic = addElement(dom.d101, 'div', null, 'se_ia');
		ic.innerHTML = s; ic.style.color = c; ic.style.backgroundColor = b;
		ic.addEventListener('click', () => { e.onClick() })
		addDesc(ic, e, 4, e.name, e.desc); if (e.duration !== 0) global.e_e.push(e);
	}
	else {
		let ic = addElement(dom.d101m, 'div', null, 'se_ia');
		ic.innerHTML = s; ic.style.color = c; ic.style.backgroundColor = b;
		addDesc(ic, e, 4, e.name, e.desc); if (e.duration !== 0) global.e_em.push(e);
	}
}

function equip(w, flags) {
	if (!w.data || !w.data.uid) return;
	if (w.data.uid === you.eqp[w.slot - 1].data.uid) { unequip(w, { save: true }); if (w.twoh === true) { dom.d7_slot_2.innerHTML = 'Shield'; dom.d7_slot_2.style.color = 'grey' }; isort(global.sm) } else {
		if (w.req && !w.req() && !global.flags.loadstate) { msg("Requirenments not met!", 'red'); return }
    /*switch(w.slot){
      case 5 :{
        if(you.eqp[4].id===10000) you.eqp[4]=w; else if(you.eqp[5].id===10000) {you.eqp[5]=w;w.slot=6} else {unequip(you.eqp[4]);you.eqp[4]=w}
      } break;
      case 6 :{
        if(you.eqp[5].id===10000) you.eqp[5]=w; else if(you.eqp[4].id===10000) {you.eqp[4]=w;w.slot=5} else {unequip(you.eqp[5]);you.eqp[5]=w}
      } break;
    default: {unequip(you.eqp[w.slot-1]); you.eqp[w.slot-1] = w;}; break
    }*/  unequip(you.eqp[w.slot - 1]); you.eqp[w.slot - 1] = w;
		if (w.twoh === true) { if (you.eqp[1].id !== 10000) unequip(you.eqp[1]) } else if (you.eqp[1].id !== 10000 && you.eqp[0].twoh === true) unequip(you.eqp[0]);
		if (w.eff.length > 0) for (let k = 0; k < w.eff.length; k++) { w.eff[k].use(w.eff[k].y, w.eff[k].z); giveEff(you, w.eff[k]) }
		w.oneq(); if (w.degrade) planner.itmwear.data.items.push(w)
		if (w.slot === 1) you.atkmode = w.atkmode; w.wc = global.text.wecs[w.rar][0]; //w.wbc=global.text.wecs[w.rar][1];
		let spst; switch (w.rar) {
			case 2: spst = '0px 0px 2px blue'; break;
			case 3: spst = '0px 0px 2px lime'; break;
			case 4: spst = '0px 0px 3px orange'; break;
			case 5: spst = '0px 0px 2px crimson,0px 0px 5px red'; break;
			case 6: spst = '1px 1px 1px black,0px 0px 2px purple'; break;
		}
		switch (w.slot - 1) {
			case 0: { dom.d7_slot_1.removeAttribute('style'); dom.d7_slot_1.innerHTML = you.eqp[w.slot - 1].name; if (!!w.wc) { dom.d7_slot_1.style.color = w.wc; dom.d7_slot_1.style.textShadow = spst }; if (!!w.wbc) dom.d7_slot_1.style.backgroundColor = w.wbc; } break;
			case 1: { dom.d7_slot_2.removeAttribute('style'); dom.d7_slot_2.innerHTML = you.eqp[w.slot - 1].name; if (!!w.wc) { dom.d7_slot_2.style.color = w.wc; dom.d7_slot_2.style.textShadow = spst } if (!!w.wbc) dom.d7_slot_2.style.backgroundColor = w.wbc; } break;
			case 2: { dom.d7_slot_3.removeAttribute('style'); dom.d7_slot_3.innerHTML = you.eqp[w.slot - 1].name; if (!!w.wc) { dom.d7_slot_3.style.color = w.wc; dom.d7_slot_3.style.textShadow = spst } if (!!w.wbc) dom.d7_slot_3.style.backgroundColor = w.wbc; } break;
			case 3: { dom.d7_slot_4.removeAttribute('style'); dom.d7_slot_4.innerHTML = you.eqp[w.slot - 1].name; if (!!w.wc) { dom.d7_slot_4.style.color = w.wc; dom.d7_slot_4.style.textShadow = spst } if (!!w.wbc) dom.d7_slot_4.style.backgroundColor = w.wbc; } break;
			case 4: { dom.d7_slot_5.removeAttribute('style'); dom.d7_slot_5.innerHTML = you.eqp[w.slot - 1].name; if (!!w.wc) { dom.d7_slot_5.style.color = w.wc; dom.d7_slot_5.style.textShadow = spst } if (!!w.wbc) dom.d7_slot_5.style.backgroundColor = w.wbc; } break;
			case 5: { dom.d7_slot_6.removeAttribute('style'); dom.d7_slot_6.innerHTML = you.eqp[w.slot - 1].name; if (!!w.wc) { dom.d7_slot_6.style.color = w.wc; dom.d7_slot_6.style.textShadow = spst } if (!!w.wbc) dom.d7_slot_6.style.backgroundColor = w.wbc; } break;
			case 6: { dom.d7_slot_7.removeAttribute('style'); dom.d7_slot_7.innerHTML = you.eqp[w.slot - 1].name; if (!!w.wc) { dom.d7_slot_7.style.color = w.wc; dom.d7_slot_7.style.textShadow = spst } if (!!w.wbc) dom.d7_slot_7.style.backgroundColor = w.wbc; } break;
			case 7: { dom.d7_slot_8.removeAttribute('style'); dom.d7_slot_8.innerHTML = you.eqp[w.slot - 1].name; if (!!w.wc) { dom.d7_slot_8.style.color = w.wc; dom.d7_slot_8.style.textShadow = spst } if (!!w.wbc) dom.d7_slot_8.style.backgroundColor = w.wbc; } break;
			case 8: { dom.d7_slot_9.removeAttribute('style'); dom.d7_slot_9.innerHTML = you.eqp[w.slot - 1].name; if (!!w.wc) { dom.d7_slot_9.style.color = w.wc; dom.d7_slot_9.style.textShadow = spst } if (!!w.wbc) dom.d7_slot_9.style.backgroundColor = w.wbc; } break;
			case 9: { dom.d7_slot_10.removeAttribute('style'); dom.d7_slot_10.innerHTML = you.eqp[w.slot - 1].name; if (!!w.wc) { dom.d7_slot_10.style.color = w.wc; dom.d7_slot_10.style.textShadow = spst } if (!!w.wbc) dom.d7_slot_10.style.backgroundColor = w.wbc; } break;
		}
		if (w.twoh === true) { dom.d7_slot_2.innerHTML = you.eqp[0].name; dom.d7_slot_2.removeAttribute('style'); dom.d7_slot_2.style.color = 'lightgrey' } else {
			if (you.eqp[1].id === 10000) { dom.d7_slot_2.innerHTML = 'Shield'; dom.d7_slot_2.removeAttribute('style'); dom.d7_slot_2.style.color = 'grey' }
		}
		if (!flags || !flags.save) { you.stat_r(); update_d(); isort(global.sm) }
	}
}

function unequip(w, flags) {
	if (!w.data || !w.data.uid) return;
	if (w.eff.length > 0) for (let k = 0; k < w.eff.length; k++) { w.eff[k].un(); removeEff(w.eff[k]) }
	w.onuneq(); you.eqp[w.slot - 1] = eqp.dummy; if (w.degrade) planner.itmwear.data.items.splice(planner.itmwear.data.items.indexOf(w), 1)
	switch (w.slot - 1) {
		case 0: { dom.d7_slot_1.innerHTML = 'Weapon'; dom.d7_slot_1.removeAttribute('style'); dom.d7_slot_1.style.color = 'grey'; you.eqp[0].cls[2] = you.lvl / 5 << 0; you.eqp[0].aff[0] = you.lvl / 8 << 0; you.eqp[0].ctype = 2 } break;
		case 1: { dom.d7_slot_2.innerHTML = 'Shield'; dom.d7_slot_2.removeAttribute('style'); dom.d7_slot_2.style.color = 'grey' } break;
		case 2: { dom.d7_slot_3.innerHTML = 'Head'; dom.d7_slot_3.removeAttribute('style'); dom.d7_slot_3.style.color = 'grey' } break;
		case 3: { dom.d7_slot_4.innerHTML = 'Body'; dom.d7_slot_4.removeAttribute('style'); dom.d7_slot_4.style.color = 'grey' } break;
		case 4: { dom.d7_slot_5.innerHTML = 'L arm'; dom.d7_slot_5.removeAttribute('style'); dom.d7_slot_5.style.color = 'grey' } break;
		case 5: { dom.d7_slot_6.innerHTML = 'R arm'; dom.d7_slot_6.removeAttribute('style'); dom.d7_slot_6.style.color = 'grey' } break;
		case 6: { dom.d7_slot_7.innerHTML = 'Legs'; dom.d7_slot_7.removeAttribute('style'); dom.d7_slot_7.style.color = 'grey' } break;
		case 7: { dom.d7_slot_8.innerHTML = 'Accessory'; dom.d7_slot_8.removeAttribute('style'); dom.d7_slot_8.style.color = 'grey' } break;
		case 8: { dom.d7_slot_9.innerHTML = 'Accessory'; dom.d7_slot_9.removeAttribute('style'); dom.d7_slot_9.style.color = 'grey' } break;
		case 9: { dom.d7_slot_10.innerHTML = 'Accessory'; dom.d7_slot_10.removeAttribute('style'); dom.d7_slot_10.style.color = 'grey' } break;
	}
	if (!flags || !flags.save) { you.stat_r(); update_d() }
}

function eqpres() {
	dom.d7_slot_1.innerHTML = 'Weapon'; dom.d7_slot_1.removeAttribute('style'); dom.d7_slot_1.style.color = 'grey';
	dom.d7_slot_2.innerHTML = 'Shield'; dom.d7_slot_2.removeAttribute('style'); dom.d7_slot_2.style.color = 'grey';
	dom.d7_slot_3.innerHTML = 'Head'; dom.d7_slot_3.removeAttribute('style'); dom.d7_slot_3.style.color = 'grey';
	dom.d7_slot_4.innerHTML = 'Body'; dom.d7_slot_4.removeAttribute('style'); dom.d7_slot_4.style.color = 'grey';
	dom.d7_slot_5.innerHTML = 'L arm'; dom.d7_slot_5.removeAttribute('style'); dom.d7_slot_5.style.color = 'grey';
	dom.d7_slot_6.innerHTML = 'R arm'; dom.d7_slot_6.removeAttribute('style'); dom.d7_slot_6.style.color = 'grey';
	dom.d7_slot_7.innerHTML = 'Legs'; dom.d7_slot_7.removeAttribute('style'); dom.d7_slot_7.style.color = 'grey'
	dom.d7_slot_8.innerHTML = 'Accessory'; dom.d7_slot_8.removeAttribute('style'); dom.d7_slot_8.style.color = 'grey'
	//    dom.d7_slot_9.innerHTML = 'Accessory';dom.d7_slot_9.removeAttribute('style');dom.d7_slot_9.style.color='grey'
	//    dom.d7_slot_10.innerHTML = 'Accessory';dom.d7_slot_10.removeAttribute('style');dom.d7_slot_10.style.color='grey'
}

function giveRcp(rcp) {
	if (!global.flags.asbu) { global.flags.asbu = true; dom.ct_bt1.innerHTML = 'assemble' }
	if (rcp.have === false) {
		global.rec_d.push(rcp); rcp.have = true; if (global.lw_op === 1) rsort(global.rm)
		msg('New blueprint unlocked: ', 'cyan'); msg_add('"' + rcp.name + '"', 'orange'); return 1;
	} else return 0;
}

function giveWealth(val, mes, f) {
	if (you.mods.wthexrt !== 0 && f) val += 1;
	you.wealth += val; global.stat.moneyg += val;
	for (let x in global.monchk) global.monchk[x]();
	if (!global.stat.mndrgnu && you.wealth >= 100000000) { global.stat.mndrgnu = true; appear(dom.mn_1) }
	m_update(); giveSkExp(skl.gred, val * .01);
	if (mes !== false) {
		msg('+', 'gold');
		if (val >= GOLD) msg_add(' ●' + ((val / GOLD) << 0), 'rgb(255, 215, 0)');
		if (val >= SILVER && val % GOLD >= SILVER) msg_add(' ●' + ((val / SILVER % SILVER) << 0), 'rgb(192, 192, 192)');
		if (val < SILVER || (val > SILVER && val % SILVER > 0)) msg_add(' ●' + ((val % SILVER) << 0), 'rgb(255, 116, 63)');
	} recshop();
}

function spend(m) {
	if (you.wealth < m) return
	you.wealth -= m; global.stat.moneysp += m; m_update()
}

function giveItem(obj, am, ignore, flag) {
	am = am || 1;
	if (!!obj.slot) {
		let nitm; for (let p = 0; p < am; p++) {
			obj.new = true; obj.data.uid = ++global.uid;
			let tmp = obj; obj.data.dscv = true; obj.have = true;
			nitm = copy(obj); nitm.data = deepCopy(obj.data); nitm.eff = tmp.eff; if (tmp.dss) nitm.dss = tmp.dss;
			inv.push(nitm); msg('New item obtained: <span style="color:coral">' + nitm.name + '</span>', 'cyan', obj); obj.onGet();
			if (global.sm === nitm.stype) global.sinv.push(nitm); if (nitm.stype === global.sm || global.sm === 1) renderItem(nitm);
			let g = obj.id / 10000 << 0; if (!scan(dar[g], obj.id)) dar[g].push(obj.id);
			if (flag && flag.fl) iftrunkopen(1); else iftrunkopenc(1); if (!global.flags.loadstate && !ignore) global.stat.igtttl += am;
		}
		return nitm;
	}
	if (!obj.have) {
		obj.new = true; if (global.flags.blken === true) {
			global.spnew++; clearInterval(timers.nsblk); timers.nsblk = setInterval(function () {
				let a = document.querySelectorAll('.blinks'); let g = a.length;
				for (let i = 0; i < g; i++) a[i].style.opacity = global.vsnew / 10;
				if (--global.vsnew < 0) global.vsnew = 10;
			}, 100)
		}
		obj.have = true; obj.data.dscv = true;
		inv.push(obj); obj.amount += am; msg('New item obtained: <span style="color:coral">' + obj.name + '</span><span style="color:lime"> x' + am + '</span>', 'cyan', obj); obj.onGet();
		if (global.sm === obj.stype) global.sinv.push(obj); if (obj.stype === global.sm || global.sm === 1) renderItem(obj);
	} else { obj.amount += am; msg('Item Acquired: <span style="color:chartreuse">' + obj.name + '</span><span style="color:lime"> x' + am + '</span>', 'cyan', obj); if (global.sm === 1) updateInv(inv.indexOf(obj)); else if (global.sm === obj.stype) updateInv(global.sinv.indexOf(obj)); obj.onGet(); }
	let g = obj.id / 10000 << 0; if (!scan(dar[g], obj.id)) dar[g].push(obj.id);
	if (obj.multif) for (let a = 0; a < am; a++) obj.multif()
	if (obj.rot) {
		let thave = false;
		for (let a in planner.imorph.data.items) if (planner.imorph.data.items[a].id === obj.id) { thave = true; break }
		if (!thave) { planner.imorph.data.items.push(obj); obj.data.rottil = 0 }
	}
	if (flag && !flag.fi && flag.fl) iftrunkopen(1); else iftrunkopenc(1); if (!global.flags.loadstate && !ignore) global.stat.igtttl += am;
	return obj;
}

function listen_k(e) {
	global.keytarget = e.target;
	if (e.which === 46) {
		for (let obj in global.shortcuts) if (global.shortcuts[obj][0] === global.keyobj.data.skey) global.shortcuts.splice(global.shortcuts.indexOf(global.shortcuts[obj]), 1)
		global.keytarget.children[0].innerHTML = global.keyobj.name;
		global.keyobj.data.skey = null;
	}
	else if ((e.which >= 47 && e.which <= 90) || (e.which >= 96 && e.which <= 105)) {
		global.keytarget.children[0].innerHTML = global.keyobj.name + '<small> {' + String.fromCharCode(global.keyobj.data.skey) + '}</small>';
		if (global.keyobj.data.skey > 0 && e.which !== global.keyobj.data.skey) { for (let obje in global.shortcuts) { if (global.shortcuts[obje][2].data.skey === global.keyobj.data.skey) { global.shortcuts[obje][2].data.skey = null; global.shortcuts.splice(global.shortcuts.indexOf(global.shortcuts[obje]), 1); } } }
		let tg; for (let obj in global.shortcuts) {
			if (e.which === global.shortcuts[obj][0]) { global.shortcuts[obj][2].data.skey = null; global.shortcuts.splice(global.shortcuts.indexOf(global.shortcuts[obj]), 1); }
		} global.keyobj.data.skey = e.which; global.shortcuts.push([e.which, global.keyobj.id, global.keyobj]); global.shortcuts[global.shortcuts.length - 1][2].data.skey = e.which; isort(global.sm)
	}
}

document.body.addEventListener('keydown', function (e) {
	if (global.flags.kfocus !== true) {
		for (let obj in global.shortcuts) if (e.which === global.shortcuts[obj][0]) {
			g = global.shortcuts[obj][2]; if (g.amount > 0 || !!g.slot) {
				g.use(); reduce(g); iftrunkopenc(1); if (g.id < 3000 && !g.data.tried) { g.data.tried = true; global.stat.ftried += 1; }
				break
			}
		}
	}
	if (!global.flags.shifton && (e.which === 69 || e.which === 16)) {
		global.flags.shifton = true; global.kkey = 1;
		descsinfo(global.shiftid)
	}
});

document.body.addEventListener('keyup', function (e) {
	if (e.which === 69 || e.which === 16) {
		global.flags.shifton = false; if (dom.dscshe) dom.dscshe.innerHTML = ''; global.kkey = -1
	}
});

function descsinfo(id) {
	if (id === 100) if (global.shiftitem.item.rot && you.mods.survinf > 0) {
		let itm = global.shiftitem.item; let ds, rs, dt, rt, c
		switch (you.mods.survinf) {
			case 1:
				ds = Math.ceil(itm.amount * ((itm.rot[2] + itm.rot[3]) / 2)); rs = itm.data.rottil;
				dt = ''; rt = ''; c = '';
				if (ds < 5) dt = 'a couple'; else if (ds < 10) dt = 'a few'; else if (ds < 30) dt = 'some'; else if (ds < 50) dt = 'multiple'; else if (ds < 100) dt = 'dozens'; else dt = 'many';
				if (rs < .1) { rt = 'very fresh'; c = 'lime' } else if (rs < .2) { rt = 'fresh'; c = 'limegreen' } else if (rs < .5) { rt = 'like it\'s reaching midlife'; c = 'yellow' } else if (rs < .75) { rt = 'will go bad soon'; c = 'grey' } else if (rs < 1) { rt = 'are almost decayed'; c = 'red' }
				if (rs < .5) dom.dscshe.innerHTML = dom.dseparator + '<span style="color:orange">This food looks <span style="color:' + c + '">' + rt + '</span>';
				else dom.dscshe.innerHTML = dom.dseparator + '<span style="color:orange"><span style="color:cyan">' + dt + '</span> units of this item <span style="color:' + c + '">' + rt + '</span></span>';
				break;
			case 2:
				ds = Math.ceil(itm.amount * ((itm.rot[2] + itm.rot[3]) / 2)); rs = (Math.ceil((1 - itm.data.rottil) / ((itm.rot[0] + itm.rot[1]) / 2)));
				dom.dscshe.innerHTML = dom.dseparator + '<span style="color:orange">Upon examination, about <span style="color:cyan">' + ds + '</span> units of this item will decay in approximately <span style="color:yellow">' + rs + '</span> days</span>'; break;
		}
		dom.dscshe.style.paddingTop = 20;
	}
}

function renderItem(obj) {
	let inv_slot_c = addElement(dom.inv_con, 'div', null, 'noout');
	let inv_slot = addElement(inv_slot_c, 'div', null, 'inv_slot noout');
	/*switch(obj.wtype){
	  case 1:var z= icon(inv_slot,2,1,18,18);z.style.paddingRight=2;break;
	  case 2:var z= icon(inv_slot,4,1,18,18);z.style.paddingRight=2;break;
	  case 3:var z= icon(inv_slot,3,1,18,18);z.style.paddingRight=2;break;
	}*/
	let inv_name = addElement(inv_slot, 'span'); inv_name.innerHTML = obj.name;
	if (!!obj.data.skey) inv_name.innerHTML += '<small> {' + String.fromCharCode(obj.data.skey) + '}</small>';
	if (obj.new === true) inv_name.innerHTML += '<small style="font-size:.65em;color: yellow;position:absolute" class="blinks">　new</small>';
	inv_slot_c.addEventListener('mouseenter', function () {
		global.keyobj = obj; inv_slot.tabIndex = 0; inv_slot.focus(); inv_slot.addEventListener('keydown', listen_k); global.flags.kfocus = true;
		if (obj.important === false && obj.slot) {
			dom.inv_del = addElement(inv_slot_c, 'span', null, 'del_b'); dom.inv_del.innerHTML = 'x';
			addDesc(dom.inv_del, null, 2, 'Throw away', 'Deletes <span style="color:cyan">\"' + obj.name + '\"</span> permanently');
			dom.inv_del.addEventListener('click', () => {
				if (obj.data.uid === you.eqp[obj.slot - 1].data.uid) {
					let prm = addElement(document.body, 'div'); prm.style.backgroundColor = 'grey'; prm.style.width = document.body.clientWidth; prm.style.height = document.body.clientHeight; prm.style.position = 'absolute'; prm.style.left = 0; prm.style.top = 0; prm.style.opacity = .4;
					let prm2 = addElement(document.body, 'div'); prm2.style.position = 'absolute'; prm2.style.top = document.body.clientHeight / 2 - 40; prm2.style.left = 1300 / 2 - 195; prm2.style.width = 390; prm2.style.height = 80; prm2.style.border = '4px black solid'; prm2.style.padding = 5; prm2.style.backgroundColor = 'lightgrey';
					let pin = addElement(prm2, 'div'); pin.style.height = 32; pin.innerHTML = 'Really destroy \"' + obj.name + '\"\?'; pin.style.textAlign = 'center'; pin.style.width = '100%'; pin.style.borderBottom = '2px solid black'; pin.style.paddingTop = 10;
					let pcon = addElement(prm2, 'div'); pcon.style.display = 'flex'; pcon.style.textAlign = 'center'; pcon.style.backgroundColor = 'darkgrey';
					let phai = addElement(pcon, 'div'); phai.style.width = '50%'; phai.innerHTML = 'YES'; phai.style.paddingTop = 9; phai.style.paddingBottom = 9;
					let piie = addElement(pcon, 'div'); piie.style.width = '50%'; piie.innerHTML = 'NO'; piie.style.paddingTop = 9; piie.style.paddingBottom = 9;
					phai.addEventListener('mouseenter', function () { this.style.backgroundColor = '#666' }); piie.addEventListener('mouseenter', function () { this.style.backgroundColor = '#666' });
					phai.addEventListener('mouseleave', function () { this.style.backgroundColor = 'darkgrey' }); piie.addEventListener('mouseleave', function () { this.style.backgroundColor = 'darkgrey' });
					phai.addEventListener('click', () => { giveSkExp(skl.rccln, (2 ** obj.rar) * 5 - 9.5); giveSkExp(skl.thr, .5); global.stat.thrt++; removeItem(obj); document.body.removeChild(prm); document.body.removeChild(prm2) });
					piie.addEventListener('click', () => { document.body.removeChild(prm); document.body.removeChild(prm2) });
				}
				else { giveSkExp(skl.rccln, (2 ** obj.rar) * 5 - 9.5); removeItem(obj); giveSkExp(skl.thr, .5); global.stat.thrt++; empty(global.dscr); }
			}
			);
		}
		if (obj.slot === 5 || obj.slot === 6) {
			dom.eq_l = addElement(inv_slot_c, 'small', null, 'eq_l'); dom.eq_l.innerHTML = 'L'; addDesc(dom.eq_l, obj);
			dom.eq_l.addEventListener('click', () => { if (obj.data.uid !== you.eqp[4].data.uid && obj.data.uid !== you.eqp[5].data.uid) { obj.slot = 5; equip(obj); } else if (obj.data.uid !== you.eqp[4].data.uid && obj.data.uid === you.eqp[5].data.uid) { unequip(obj); obj.slot = 5; equip(obj); } else { unequip(obj); dom.eq_l.style.backgroundColor = 'royalblue'; this.children[0].removeChild(this.children[0].lastChild) } });
			if (obj.data.uid === you.eqp[4].data.uid) dom.eq_l.style.backgroundColor = 'crimson';
			dom.eq_r = addElement(inv_slot_c, 'small', null, 'eq_r'); dom.eq_r.innerHTML = 'R'; addDesc(dom.eq_r, obj);
			dom.eq_r.addEventListener('click', () => { if (obj.data.uid !== you.eqp[4].data.uid && obj.data.uid !== you.eqp[5].data.uid) { obj.slot = 6; equip(obj); } else if (obj.data.uid === you.eqp[4].data.uid && obj.data.uid !== you.eqp[5].data.uid) { unequip(obj); obj.slot = 6; equip(obj); } else { unequip(obj); dom.eq_r.style.backgroundColor = 'royalblue'; this.children[0].removeChild(this.children[0].lastChild) } });
			if (obj.data.uid === you.eqp[5].data.uid) dom.eq_r.style.backgroundColor = 'crimson';
		}
		if (obj.dss && item.toolbx.have) {
			dom.inv_dss = addElement(inv_slot_c, 'span', null, 'dss_b'); dom.inv_dss.innerHTML = '∥'; if (!obj.slot) dom.inv_dss.style.left = 242; else if (obj.slot === 5 || obj.slot === 6) dom.inv_dss.style.left = 208
			let t = ''; for (let a in obj.dss) {
				let am = obj.dss[a].amount;
				if (obj.dss[a].q) am = (am + am * (obj.dss[a].q * skl.dssmb.lvl)) << 0
				if (obj.dss[a].max) if (am > obj.dss[a].max) am = obj.dss[a].max;
				let c = 1; if (obj.slot) c = obj.dp / obj.dpmax; am = Math.ceil(am / (2 - c));
				t += '<br><span style="color:orange">' + obj.dss[a].item.name + ': <span style="color:' + (obj.dss[a].max && obj.dss[a].max === am ? 'lime' : 'lightblue') + '">' + am + '</span></span>'
			}
			addDesc(dom.inv_dss, null, 2, 'Disassemble', 'Deconstruct <span style="color:cyan">\"' + obj.name + '\"</span> into:<br>' + t);
			dom.inv_dss.addEventListener('click', () => {
				if (obj.slot && obj.data.uid === you.eqp[obj.slot - 1].data.uid) {
					let prm = addElement(document.body, 'div'); prm.style.backgroundColor = 'grey'; prm.style.width = document.body.clientWidth; prm.style.height = document.body.clientHeight; prm.style.position = 'absolute'; prm.style.left = 0; prm.style.top = 0; prm.style.opacity = .4;
					let prm2 = addElement(document.body, 'div'); prm2.style.position = 'absolute'; prm2.style.top = document.body.clientHeight / 2 - 40; prm2.style.left = 1300 / 2 - 195; prm2.style.width = 390; prm2.style.height = 90; prm2.style.border = '4px black solid'; prm2.style.padding = 5; prm2.style.backgroundColor = 'lightgrey';
					let pin = addElement(prm2, 'div'); pin.style.height = 42; pin.innerHTML = 'You are currently wearing \"<span style="color:crimson">' + obj.name + '</span>\"<br>Really deconstruct?'; pin.style.textAlign = 'center'; pin.style.width = '100%'; pin.style.borderBottom = '2px solid black'; pin.style.paddingTop = 10;
					let pcon = addElement(prm2, 'div'); pcon.style.display = 'flex'; pcon.style.textAlign = 'center'; pcon.style.backgroundColor = 'darkgrey';
					let phai = addElement(pcon, 'div'); phai.style.width = '50%'; phai.innerHTML = 'YES'; phai.style.paddingTop = 9; phai.style.paddingBottom = 9;
					let piie = addElement(pcon, 'div'); piie.style.width = '50%'; piie.innerHTML = 'NO'; piie.style.paddingTop = 9; piie.style.paddingBottom = 9;
					phai.addEventListener('mouseenter', function () { this.style.backgroundColor = '#666' }); piie.addEventListener('mouseenter', function () { this.style.backgroundColor = '#666' });
					phai.addEventListener('mouseleave', function () { this.style.backgroundColor = 'darkgrey' }); piie.addEventListener('mouseleave', function () { this.style.backgroundColor = 'darkgrey' });
					phai.addEventListener('click', () => { disassembleGeneric(obj); document.body.removeChild(prm); document.body.removeChild(prm2) });
					piie.addEventListener('click', () => { document.body.removeChild(prm); document.body.removeChild(prm2) });
				}
				else disassembleGeneric(obj)
			}
			);
		}
	});
	inv_slot_c.addEventListener('mouseleave', function () {
		inv_slot.tabIndex = -1; inv_slot.removeEventListener('keydown', listen_k); global.keyobj = 0; global.flags.kfocus = false;
		if (obj.important === false && obj.slot) inv_slot_c.removeChild(dom.inv_del);
		if (obj.dss && item.toolbx.have) inv_slot_c.removeChild(dom.inv_dss);
		if (obj.slot === 5 || obj.slot === 6) { inv_slot_c.removeChild(dom.eq_r); inv_slot_c.removeChild(dom.eq_l); }
	});
	if (obj.slot && scanbyuid(you.eqp, obj.data.uid) === true) {
		dom.spc_a = addElement(inv_slot, 'small', null, 'spc_a');
		dom.spc_a.innerHTML = 'E';
	}
	if (!obj.slot) {
		let s_am = addElement(inv_slot, 'small', null, 's_am'); s_am.innerHTML = ' x' + (obj.amount);
		inv_slot.addEventListener('mouseenter', function () { global.flags.kfocus = true; this.tabIndex = 0; this.focus(); global.keyobj = obj; this.addEventListener('keydown', listen_k) })
		inv_slot.addEventListener('mouseleave', function () { global.flags.kfocus = false; this.tabIndex = -1; global.keyobj = 0; this.removeEventListener('keydown', listen_k); })
	}
	if (!!obj.c || !!obj.bc) {
		if (!!obj.c) inv_name.style.color = obj.c;
		if (!!obj.bc) inv_name.style.backgroundColor = obj.bc;
	}
	else {
		switch (obj.stype) {
			case 2: inv_name.style.color = 'rgb(255,192,5)'; break;
			case 3: inv_name.style.color = 'rgb(0,235,255)'; break;
			case 4: inv_name.style.color = 'rgb(44,255,44)'; break;
		}
	}
	addDesc(inv_slot, obj, null, null, null, null, 100);
	inv_slot.addEventListener('click', function (x) { if (obj.amount > 0 || !!obj.slot) { obj.use(x); if (!obj.slot) reduce(obj); if (obj.id < 3000 && !obj.data.tried) { obj.data.tried = true; global.stat.ftried += 1; if (global.dscr.style.display != 'none') dom.dtrd.innerHTML = 'Tried: <span style="color: lime">Yes</span>'; } } });
	inv_slot.addEventListener('mouseleave', function () { if (obj.new === true) { obj.new = false; clearTimeout(timers.nsblk); inv_name.innerHTML = obj.name } });
}

function updateInv(slot) {
	if (global.sm === 1) dom.inv_con.children[slot].children[0].children[1].innerHTML = ' x' + inv[slot].amount;
	else dom.inv_con.children[slot].children[0].children[1].innerHTML = ' x' + global.sinv[slot].amount;
}

function removeItem(obj, flag) {
	if (obj.slot) if (wearing(obj)) unequip(obj)
	if (obj.data.skey) {
		for (let s in global.shortcuts) if (obj.data.skey === global.shortcuts[s][0]) { global.shortcuts.splice(global.shortcuts.indexOf(obj.data.skey), 1); continue };
	}
	let idx;
	if (global.sm === 1) {
		idx = inv.indexOf(obj);
		dom.inv_con.removeChild(dom.inv_con.children[idx])
	} else if (global.sm === obj.stype) {
		idx = global.sinv.indexOf(obj);
		dom.inv_con.removeChild(dom.inv_con.children[idx])
		global.sinv.splice(idx, 1);
	}
	global.dscr.style.display = 'none'; inv.splice(inv.indexOf(obj), 1); obj.have = false;
	if (obj.rot) for (let a in planner.imorph.data.items) if (planner.imorph.data.items[a].id === obj.id) { planner.imorph.data.items.splice(planner.imorph.data.items.indexOf(obj)); }
	if (global.lw_op === 1) rsort(global.rm)
	if (flag && flag.fl) iftrunkopen(1); else iftrunkopenc(1);
}

function m_update() {
	dom.mn_1.innerHTML = '㊧' + (you.wealth / 100000000 << 0);
	dom.mn_2.innerHTML = '●' + (you.wealth / 10000 % 10000 << 0);
	dom.mn_3.innerHTML = '●' + (you.wealth / 100 % 100 << 0);
	dom.mn_4.innerHTML = '●' + (you.wealth % 100 << 0);
}

function chs(txt, f, c, bc, iconx, icony, size, ignore, slimsize) {
	if (f === true) { clr_chs(); dom.ch_1 = addElement(dom.ctr_2, 'div', 'chs'); dom.ch_1.innerHTML = txt; }
	else { dom.ch_1 = addElement(dom.ctr_2, 'div', null, 'chs'); dom.ch_1.innerHTML = txt; }
	if (!!iconx) { dom.ch_1.insertBefore(icon(dom.ch_1, iconx, icony), dom.ch_1.firstChild); }
	if (c) dom.ch_1.style.color = c; if (bc) dom.ch_1.style.backgroundColor = bc; if (size) dom.ch_1.style.fontSize = size; if (slimsize) dom.ch_1.style.height = slimsize;
	if (!ignore) global.menuo = 0;
	dom.ch_1.addEventListener('click', () => { clearInterval(timers.rptbncgt); global.flags.rptbncgtf = false; if (!global.flags.jdgdis) { global.flags.jdgdis = true; giveSkExp(skl.jdg, .1); setTimeout(() => { global.flags.jdgdis = false }, 500) } })
	return dom.ch_1;
}

global.text.cfc = ['White', 'Black', 'Orange', 'Grey', 'Black&White', 'Brown', 'Ginger', 'Cinnamon', 'Fawn', 'Amber', 'Cream', 'Chocolate'];
global.text.cfp = ['Spotted', 'Plain', 'Solid', 'Bicolored', 'Tabby', 'Tricolored', 'Calico', 'Tortoiseshell', 'Wavy', 'Fluffy', 'Siamese', 'Striped'];
global.text.cln = ['Sleeping', 'Playing', 'Catching fireflies', 'Eating', 'Fish', 'People', 'Running outside', 'Warm places', 'Water', 'Fighting', 'Meowing', 'Singing', 'Catching mice', 'Its Master', 'Climbing trees', 'Toppling objects', 'Hiding', 'Safe places', 'Rooftops', 'Sitting by the window', 'Watching others', 'Master\'s bed', 'Being petted', 'Being brushed', 'Sitting on laps', 'Other cats', 'Dogs', 'Warm weather', 'Watching stars', 'Toys', 'Meat', 'Rain', 'Snow'];


function chs_spec(type, x) {
	switch (type) {
		case 1: {
			clr_chs(); let c = findbyid(furn, furniture.cat.id); let br = time.minute - c.data.age;
			dom.ch_1 = addElement(dom.ctr_2, 'div', 'chs');
			dom.ch_1.style.height = '200px';
			dom.ch_1_1 = addElement(dom.ch_1, 'div', null, 'chs_s'); dom.ch_1_1.innerHTML = 'Name: <span style="color:orange">' + c.data.name + (c.data.sex === true ? ' ♂' : ' ♀') + '</span>'; dom.ch_1_1.style.marginTop = -17;
			dom.ch_1_12 = addElement(dom.ch_1, 'div', null, 'chs_s'); dom.ch_1_12.innerHTML = 'Day of birth: <span style="color:lime">' + (((br / (YEAR)) << 0) + '/' + (((br / (MONTH) << 0) % 12) + 1) + '/' + (((br / DAY << 0) % 30) + 1)) + '</span>';
			dom.ch_1_2 = addElement(dom.ch_1, 'div', null, 'chs_s'); dom.ch_1_2.innerHTML = 'Age: ' + (c.data.age >= YEAR ? '<span style="color:orange">' + (c.data.age / YEAR << 0) + '</span> Years ' : '') + (c.data.age >= MONTH ? '<span style="color:yellow">' + (c.data.age / MONTH << 0) % 12 + '</span> Months ' : '') + (c.data.age >= DAY ? '<span style="color:lime">' + (c.data.age / DAY << 0) % 30 + '</span> Days ' : '');
			dom.ch_1_3 = addElement(dom.ch_1, 'div', null, 'chs_s'); dom.ch_1_3.innerHTML = 'Pattern: <span style="color:cyan">' + global.text.cfp[c.data.p] + '</span> | Color: <span style="color:cyan">' + global.text.cfc[c.data.c] + '</span>';
			dom.ch_1_4 = addElement(dom.ch_1, 'div', null, 'chs_s'); dom.ch_1_4.innerHTML = 'Likes: <span style="color:lime">' + global.text.cln[c.data.l1] + '</span> And <span style="color:lime">' + global.text.cln[c.data.l2] + '</span>';
			timers.caupd = setInterval(() => { dom.ch_1_2.innerHTML = 'Age: ' + (c.data.age >= YEAR ? '<span style="color:orange">' + (c.data.age / YEAR << 0) + '</span> Years ' : '') + (c.data.age >= MONTH ? '<span style="color:yellow">' + (c.data.age / MONTH << 0) % 12 + '</span> Months ' : '') + (c.data.age >= DAY ? '<span style="color:lime">' + (c.data.age / DAY << 0) % 30 + '</span> Days ' : ''); }, 1000);
		}; break
		case 2: {
			clr_chs()
			dom.ch_1 = addElement(dom.ctr_2, 'div'); dom.ch_1.style.height = '76%'; dom.ch_1.style.backgroundColor = 'rgb(0,20,44)';
			dom.flsthdr = addElement(dom.ch_1, 'div'); dom.flsthdra = addElement(dom.flsthdr, 'div'); dom.flsthdr.style.display = 'flex'
			dom.flsthdra.innerHTML = 'Furniture Owned'; dom.flsthdra.style.position = 'relative'; dom.flsthdra.style.left = 120;
			dom.flsthdr.style.borderBottom = '1px #44c solid'; dom.flsthdr.style.padding = 2;
			dom.flsthdrbc = addElement(dom.flsthdr, 'div');
			dom.flsthdrb = addElement(dom.flsthdrbc, 'small'); dom.flsthdrb.innerHTML = 'Home rating: ';
			dom.flsthdrbc.style.left = 237; dom.flsthdrb.style.paddingLeft = 6; dom.flsthdrbc.style.position = 'relative'; dom.flsthdrbc.style.borderLeft = '1px solid rgb(68, 68, 204)'
			dom.flsthdrbb = addElement(dom.flsthdrbc, 'small'); dom.flsthdrbb.style.color = 'lime';
			let v = 0; for (let a in furn) if (furn[a].v) { if (furn[a].multv) v += furn[a].v * furn[a].amount; else v += furn[a].v } dom.flsthdrbb.innerHTML = v;
			dom.ch_1h = addElement(dom.ch_1, 'div', null);
			dom.ch_1h.style.textAlign = 'left'; dom.ch_1h.style.display = 'block'
			for (let a in furn) {
				renderFurniture(furn[a]);
			}
		}; break
		case 3: {
			clr_chs(); global.menuo = 3; global.cchest = x;
			dom.ch_1a = addElement(dom.ctr_2, 'div'); dom.ch_1a.style.height = '74.5%'; dom.ch_1a.style.backgroundColor = 'rgb(0,20,44)';
			dom.ch_1a.style.display = 'flex'; dom.ch_1a.style.overflow = 'auto'; dom.ch_1a.style.position = 'relative';
			dom.invp1 = addElement(dom.ch_1a, 'div'); dom.invp2 = addElement(dom.ch_1a, 'div');
			dom.invp1.style.width = dom.invp2.style.width = '50%';
			dom.invp2noth = addElement(dom.ctr_2, 'div'); dom.invp2noth.style.top = 150; dom.invp2noth.style.position = 'absolute'; dom.invp2noth.style.color = 'grey';
			dom.invp2noth.innerHTML = 'Nothing in the box yet'; dom.invp2noth.style.left = 301; dom.invp2noth.style.pointerEvents = 'none';
			for (let obj in inv) rendertrunkitem(dom.invp1, inv[obj]);
			for (let obj in x.c) rendertrunkitem(dom.invp2, x.c[obj].item, { right: true, nit: { item: x.c[obj].item, data: x.c[obj].data, am: x.c[obj].am, dp: x.c[obj].dp } });
			if (x.c.length > 0) dom.invp2noth.style.display = 'none';
			if (inv.length >= 21) dom.invp2noth.style.left = 301; else dom.invp2noth.style.left = 314
		}; break
		case 4: {
			clr_chs(); global.menuo = 4; global.shprf = x;
			dom.ch_1 = addElement(dom.ctr_2, 'div'); dom.ch_1.style.height = '76%'; dom.ch_1.style.backgroundColor = 'rgb(0,20,44)';
			dom.flsthdr = addElement(dom.ch_1, 'div'); dom.flsthdr.innerHTML = x.name
			dom.flsthdr.style.borderBottom = '1px #44c solid'; dom.flsthdr.style.padding = 2;
			dom.ch_1h = addElement(dom.ch_1, 'div');
			dom.ch_1h.style.textAlign = 'left'; dom.ch_1h.style.display = 'block'; dom.ch_1h.style.height = '87%'; dom.ch_1h.style.overflow = 'auto';
			if (dom.ch_etn) empty(dom.ch_etn); for (let it in x.stock) {
				rendershopitem(dom.ch_1h, x.stock[it], x)
			}
			dom.ch_1c = addElement(dom.ch_1, 'div'); dom.ch_1c.style.backgroundColor = 'rgb(10, 30, 54)'; dom.ch_1c.style.height = '5%'; dom.ch_1c.style.width = '100%';
			dom.ch_1e = addElement(dom.ch_1c, 'small'); //dom.ch_1e.style.border='1px solid #9485ed'; 
			dom.ch_1e.style.float = dom.ch_1e.style.textAlign = 'left';
			dom.ch_2e = addElement(dom.ch_1c, 'small'); //dom.ch_1e.style.border='1px solid #9485ed'; 
			dom.ch_2e.style.float = dom.ch_2e.style.textAlign = 'right'; dom.ch_2e.style.paddingRight = 6
			//dom.ch_1e1 = addElement(dom.ch_1e,'input'); dom.ch_1e1.style.height=18;dom.ch_1e1.style.width=40;
			//dom.ch_1e1.style.textAlign='center'; dom.ch_1e1.style.color='white'; dom.ch_1e1.style.fontFamily='MS Gothic';
			//dom.ch_1e1.style.backgroundColor='transparent'
			dom.ch_1e.innerHTML = '&nbspBuying price: <span style="color:lime">' + Math.round(((you.mods.infsrate - skl.trad.use()) * x.infl * (1 - (Math.sqrt(x.data.rep) ** 1.3 + 0.05) * .01) * global.offline_evil_index) * 10000) / 100 + '%</span>'
			dom.ch_2e.innerHTML = '&nbspReputation: ' + col(x.data.rep << 0, 'lime');
		}; break
		case 5: {
		}; break
	}
	return dom.ch_1;
}

//linear-gradient(0deg,rgb(1,1,111),rgb(22,222,22))

function renderFurniture(frn) {
	dom.ch_etn = addElement(dom.ch_1h, 'div', 'bst_entrh', 'bst_entr'); dom.ch_etn.style.backgroundColor = 'rgb(10,30,54)';
	dom.ch_etn1 = addElement(dom.ch_etn, 'div', null, 'bst_entr1'); dom.ch_etn1.innerHTML = frn.name;
	switch (frn.id) {
		case home.bed.id:
			dom.ch_etn1.innerHTML += ' <small style="color:grey">[z]</small>'; break
		case home.pilw && home.pilw.id:
			dom.ch_etn1.innerHTML += ' <small style="color:grey">[zp]</small>'; break
		case home.blkt && home.blkt.id:
			dom.ch_etn1.innerHTML += ' <small style="color:grey">[zb]</small>'; break
		case home.tbw && home.tbw.id:
			dom.ch_etn1.innerHTML += ' <small style="color:pink">[t]</small>'; break
	}
	dom.ch_etn.addEventListener('mouseenter', function () {
		if (frn.removable === true) {
			dom.chsfdel = addElement(this.children[0], 'div', null, 'del_b'); dom.chsfdel.innerHTML = 'x'; dom.chsfdel.style.right = 5; dom.chsfdel.style.top = 19;
			dom.chsfdel.addEventListener('click', function () {
				frn.data.amount--; frn.onRemove();
				if (frn.data.amount === 0) { deactivatef(frn); frn.onDestroy(); global.dscr.style.display = 'none'; furn.splice(furn.indexOf(frn), 1); chs_spec(2); chs('"<= Return"', false).addEventListener('click', () => { smove(chss.home, false) }) } else
					this.parentElement.parentElement.children[1].innerHTML = 'x' + frn.data.amount;
				let v = 0; for (let a in furn) if (furn[a].v) { if (furn[a].multv) v += furn[a].v * furn[a].amount; else v += furn[a].v } dom.flsthdrbb.innerHTML = v;
			});
		}
	});
	dom.ch_etn.addEventListener('mouseleave', function () {
		if (frn.removable === true) this.children[0].removeChild(dom.chsfdel);
	});
	dom.ch_etn.addEventListener('click', function () {
		frn.onSelect(); //this.dispatchEvent(new window.Event('mouseenter'))
	});
	dom.ch_etn2 = addElement(dom.ch_etn, 'div', null, 'bst_entr2'); dom.ch_etn2.innerHTML = 'x' + frn.data.amount; dom.ch_etn2.style.width = '6%';
	addDesc(dom.ch_etn, frn, 9);
}

function recshop() {
	if (global.menuo === 4) {
		empty(dom.ch_1h); for (let it in global.shprf.stock) { rendershopitem(dom.ch_1h, global.shprf.stock[it], global.shprf) }
		dom.ch_1e.innerHTML = '&nbspBuying price: <span style="color:lime">' + Math.round(((you.mods.infsrate - skl.trad.use()) * global.shprf.infl * (1 - (Math.sqrt(global.shprf.data.rep) ** 1.3 + 0.05) * .01) * global.offline_evil_index) * 10000) / 100 + '%</span>'
		dom.ch_2e.innerHTML = '&nbspReputation: ' + col(global.shprf.data.rep << 0, 'lime')
	}
}

function rendershopitem(root, itm, vnd) {
	dom.ch_etn = addElement(root, 'div', 'bst_entrh', 'bst_entr'); dom.ch_etn.style.backgroundColor = 'rgb(10,30,54)';
	addDesc(dom.ch_etn, itm[0]);
	dom.ch_etn1 = addElement(dom.ch_etn, 'div', null, 'bst_entr1'); dom.ch_etn1.style.width = '79%'
	dom.ch_etn1n = addElement(dom.ch_etn1, 'div'); dom.ch_etn1n.innerHTML = itm[0].name; dom.ch_etn1n.style.width = 305;
	dom.ch_etn1b = addElement(dom.ch_etn1, 'div'); dom.ch_etn1.style.display = 'flex'; dom.ch_etn1b.style.display = 'inline-flex'; dom.ch_etn1b.style.position = 'absolute'; dom.ch_etn1b.style.right = 6; dom.ch_etn1b.style.textAlign = 'center'; dom.ch_etn1b.style.backgroundColor = 'rgb(20,50,84)'
	let p = Math.ceil(itm[2] * (you.mods.infsrate - skl.trad.use()) * vnd.infl * (1 - (Math.sqrt(vnd.data.rep) ** 1.3 + 0.05) * .01) * global.offline_evil_index);
	switch (itm[0].stype) {
		case 2: dom.ch_etn1n.style.color = 'rgb(255,192,5)'; break;
		case 3: dom.ch_etn1n.style.color = 'rgb(0,235,255)'; break;
		case 4: dom.ch_etn1n.style.color = 'rgb(44,255,44)'; break;
	}
	dom.ch_etn2 = addElement(dom.ch_etn, 'div', null, 'bst_entr2'); dom.ch_etn2.style.display = 'flex'; dom.ch_etn2.style.width = '22%'; dom.ch_etn2.style.textAlign = 'left'; if (you.wealth < p) { dom.ch_etn2.style.color = 'red'; dom.ch_etn.style.backgroundColor = 'rgb(68,26,38)' }
	dom.ch_etn2_1 = addElement(dom.ch_etn2, 'span'); dom.ch_etn2_1.style.width = '33.3%';
	dom.ch_etn2_2 = addElement(dom.ch_etn2, 'span'); dom.ch_etn2_2.style.width = '33.3%';
	dom.ch_etn2_3 = addElement(dom.ch_etn2, 'span'); dom.ch_etn2_3.style.width = '33.3%';
	if (p >= GOLD) { dom.ch_etn2_1.innerHTML = (dom.coingold + ((p / GOLD) << 0)); dom.ch_etn2_1.style.backgroundColor = 'rgb(102, 66, 0)'; }
	if (p >= SILVER && p % GOLD >= SILVER) { dom.ch_etn2_2.innerHTML = (dom.coinsilver + ((p / SILVER % SILVER) << 0)); dom.ch_etn2_2.style.backgroundColor = 'rgb(56, 56, 56)'; }
	if (p < SILVER || (p > SILVER && p % SILVER > 0)) { dom.ch_etn2_3.innerHTML = (dom.coincopper + ((p % SILVER) << 0)); dom.ch_etn2_3.style.backgroundColor = 'rgb(102, 38, 23)'; }
	dom.ch_etn3 = addElement(dom.ch_etn, 'div', null, 'bst_entr3'); dom.ch_etn3.style.width = '14%'; dom.ch_etn3.style.color = 'lime';
	dom.ch_etn3.innerHTML = itm[1];
	if (itm[1] === 0) { dom.ch_etn3.innerHTML = '<small>sold out</small>'; dom.ch_etn1n.style.color = 'grey'; dom.ch_etn2.style.color = 'grey'; dom.ch_etn3.style.color = 'grey'; }
	dom.ch_etn.addEventListener('mouseenter', function () {
		dom.ch_etn1b1 = addElement(this.children[0].children[1], 'small', null, 'ch_entbb'); dom.ch_etn1b1.innerHTML = '1';
		dom.ch_etn1b2 = addElement(this.children[0].children[1], 'small', null, 'ch_entbb'); dom.ch_etn1b2.innerHTML = '5';
		dom.ch_etn1b3 = addElement(this.children[0].children[1], 'small', null, 'ch_entbb'); dom.ch_etn1b3.innerHTML = '10';
		dom.ch_etn1b4 = addElement(this.children[0].children[1], 'small', null, 'ch_entbb'); dom.ch_etn1b4.innerHTML = 'M';
		buycbs(itm, vnd)
		dom.ch_etn1b1.addEventListener('click', function () {
			let el = this.parentElement.parentElement.parentElement; let p = Math.ceil(itm[2] * (you.mods.infsrate - skl.trad.use()) * vnd.infl * (1 - (Math.sqrt(vnd.data.rep) ** 1.3 + 0.05) * .01) * global.offline_evil_index);
			if (you.wealth >= p && itm[1] > 0) {
				itm[1]--; giveItem(itm[0]); spend(p); m_update(); giveSkExp(skl.gred, itm[2] * .05); giveSkExp(skl.trad, itm[2] ** (1 + itm[0].rar * .1) * .05)
				if (p >= GOLD) mf(-Math.ceil((p - GOLD) / GOLD), 3); if (p >= SILVER) mf(-Math.ceil((p - SILVER) / SILVER % 100), 2); mf(-p % 100, 1); global.stat.buyt++;
				if (random() < .0008) { giveItem(acc.dticket); msg('Thank you for your patronage!', 'gold', null, null, 'magenta') }; global.stat.shppnt += p * .01; vnd.data.rep += itm[2] * .0004 * vnd.repsc; if (vnd.data.rep > 100) vnd.data.rep = 100
				if (itm[1] === 0) { el.children[2].innerHTML = '<small>sold out</small>'; el.children[2].style.color = el.children[0].children[0].style.color = el.children[1].style.color = 'grey' } else el.children[2].innerHTML = itm[1];
			} buycbs(itm, vnd)
		});
		dom.ch_etn1b2.addEventListener('click', function () {
			let el = this.parentElement.parentElement.parentElement; let p = Math.ceil(itm[2] * (you.mods.infsrate - skl.trad.use()) * vnd.infl * (1 - (Math.sqrt(vnd.data.rep) ** 1.3 + 0.05) * .01) * global.offline_evil_index);
			if (you.wealth >= p * 5 && itm[1] >= 5) {
				itm[1] -= 5; giveItem(itm[0], 5); spend(p * 5); m_update(); giveSkExp(skl.gred, itm[2] * 5 * .05); giveSkExp(skl.trad, itm[2] ** (1 + itm[0].rar * .1) * .05 * 5)
				if (p * 5 >= GOLD) mf(-Math.ceil((p * 5 - GOLD) / GOLD), 3); if (p * 5 >= SILVER) mf(-Math.ceil((p * 5 - SILVER) / SILVER % 100), 2); mf(-p * 5 % 100, 1); global.stat.buyt += 5;
				if (random() < .004) { giveItem(acc.dticket); msg('Thank you for your patronage!', 'gold', null, null, 'magenta') }; global.stat.shppnt += p * .01; vnd.data.rep += itm[2] * (5 * (1 + .05)) * .0004 * vnd.repsc; if (vnd.data.rep > 100) vnd.data.rep = 100
				if (itm[1] === 0) { el.children[2].innerHTML = '<small>sold out</small>'; el.children[2].style.color = el.children[0].children[0].style.color = el.children[1].style.color = 'grey' } else el.children[2].innerHTML = itm[1];
			} buycbs(itm, vnd)
		});
		dom.ch_etn1b3.addEventListener('click', function () {
			let el = this.parentElement.parentElement.parentElement; let p = Math.ceil(itm[2] * (you.mods.infsrate - skl.trad.use()) * vnd.infl * (1 - (Math.sqrt(vnd.data.rep) ** 1.3 + 0.05) * .01) * global.offline_evil_index);
			if (you.wealth >= p * 10 && itm[1] >= 10) {
				itm[1] -= 10; giveItem(itm[0], 10); spend(p * 10); m_update(); giveSkExp(skl.gred, itm[2] * 10 * .05); giveSkExp(skl.trad, itm[2] ** (1 + itm[0].rar * .1) * .05 * 10)
				if (p * 10 >= GOLD) mf(-Math.ceil((p * 10 - GOLD) / GOLD), 3); if (p * 10 >= SILVER) mf(-Math.ceil((p * 10 - SILVER) / SILVER % 100), 2); mf(-p * 10 % 100, 1); global.stat.buyt += 10;
				if (random() < .008) { giveItem(acc.dticket); msg('Thank you for your patronage!', 'gold', null, null, 'magenta') }; global.stat.shppnt += p * .01; vnd.data.rep += itm[2] * (10 * (1 + .1)) * .0004 * vnd.repsc; if (vnd.data.rep > 100) vnd.data.rep = 100
				if (itm[1] === 0) { el.children[2].innerHTML = '<small>sold out</small>'; el.children[2].style.color = el.children[0].children[0].style.color = el.children[1].style.color = 'grey' } else el.children[2].innerHTML = itm[1];
			} buycbs(itm, vnd)
		});
		dom.ch_etn1b4.addEventListener('click', function () {
			let el = this.parentElement.parentElement.parentElement; let p = Math.ceil(itm[2] * (you.mods.infsrate - skl.trad.use()) * vnd.infl * (1 - (Math.sqrt(vnd.data.rep) ** 1.3 + 0.05) * .01) * global.offline_evil_index); let max = (you.wealth / p) << 0; if (max > itm[1]) max = itm[1];
			if (you.wealth >= p && itm[1] > 0) {
				itm[1] -= max; giveItem(itm[0], max); spend(p * max); m_update(); giveSkExp(skl.gred, itm[2] * max * .05); giveSkExp(skl.trad, itm[2] ** (1 + itm[0].rar * .1) * .05 * max)
				if (p * max >= GOLD) mf(-Math.ceil((p * max - GOLD) / GOLD), 3); if (p * max >= SILVER) mf(-Math.ceil((p * max - SILVER) / SILVER % 100), 2); mf(-p * max % 100, 1); global.stat.buyt += max;
				if (random() < .0008 * max) { giveItem(acc.dticket); msg('Thank you for your patronage!', 'gold', null, null, 'magenta') }; global.stat.shppnt += p * .01; vnd.data.rep += itm[2] * (max * (1 + max * .01)) * .0004 * vnd.repsc; if (vnd.data.rep > 100) vnd.data.rep = 100
				if (itm[1] === 0) { el.children[2].innerHTML = '<small>sold out</small>'; el.children[2].style.color = el.children[0].children[0].style.color = el.children[1].style.color = 'grey'; } else el.children[2].innerHTML = itm[1];
			} buycbs(itm, vnd)
		});
	});
	dom.ch_etn.addEventListener('mouseleave', function () {
		empty(this.children[0].children[1]);
	});
	dom.ch_etn1n.addEventListener('click', function () {
		let el = this.parentElement.parentElement; let p = Math.ceil(itm[2] * (you.mods.infsrate - skl.trad.use()) * vnd.infl * (1 - (Math.sqrt(vnd.data.rep) ** 1.3 + 0.05) * .01) * global.offline_evil_index);
		if (you.wealth >= p && itm[1] > 0) {
			itm[1]--; giveItem(itm[0]); spend(p); m_update(); giveSkExp(skl.gred, itm[2] * .05); giveSkExp(skl.trad, itm[2] ** (1 + itm[0].rar * .1) * .05)
			if (p >= GOLD) mf(-Math.ceil((p - GOLD) / GOLD), 3); if (p >= SILVER) mf(-Math.ceil((p - SILVER) / SILVER % 100), 2); mf(-p % 100, 1); global.stat.buyt++;
			if (random() < .0008) { giveItem(acc.dticket); msg('Thank you for your patronage!', 'gold', null, null, 'magenta') }; global.stat.shppnt += p * .01; vnd.data.rep += itm[2] * .0004 * vnd.repsc; if (vnd.data.rep > 100) vnd.data.rep = 100
			if (itm[1] === 0) { el.children[2].innerHTML = '<small>sold out</small>'; el.children[2].style.color = this.style.color = el.children[1].style.color = 'grey' } else el.children[2].innerHTML = itm[1];
		} buycbs(itm, vnd)
	});
}

function buycbs(itm, vnd) {
	let p = Math.ceil(itm[2] * (you.mods.infsrate - skl.trad.use()) * vnd.infl * (1 - (Math.sqrt(vnd.data.rep) ** 1.3 + 0.05) * .01) * global.offline_evil_index);
	if (you.wealth < p || itm[1] <= 0) dom.ch_etn1b1.style.color = 'grey';
	if (you.wealth < p * 5 || itm[1] < 5) dom.ch_etn1b2.style.color = 'grey';
	if (you.wealth < p * 10 || itm[1] < 10) dom.ch_etn1b3.style.color = 'grey';
	if (you.wealth < p || itm[1] <= 0) dom.ch_etn1b4.style.color = 'grey';
	dom.ch_1e.innerHTML = '&nbspBuying price: <span style="color:lime">' + Math.round(((you.mods.infsrate - skl.trad.use()) * vnd.infl * (1 - (Math.sqrt(vnd.data.rep) ** 1.3 + 0.05) * .01) * global.offline_evil_index) * 10000) / 100 + '%</span>'
	dom.ch_2e.innerHTML = '&nbspReputation: ' + col(vnd.data.rep << 0, 'lime');
	for (let i = 0; i < vnd.stock.length; i++) { if (you.wealth < Math.ceil(vnd.stock[i][2] * (you.mods.infsrate - skl.trad.use()) * vnd.infl * (1 - (Math.sqrt(vnd.data.rep) ** 1.3 + 0.05) * .01) * global.offline_evil_index)) { dom.ch_1h.children[i].children[1].style.color = 'red'; dom.ch_1h.children[i].style.backgroundColor = 'rgb(68,26,38)' } }
	for (let x in global.shptchk) global.shptchk[x]();//put it here for now
}
for (let x in global.cptchk) global.cptchk[x]();

function rendertrunkitem(root, item, ni) {
	if (!ni) { ni = new Object(); ni.right = false }; let trunk = global.cchest;
	dom.invp1_con = addElement(root, 'div', null, 'trkitm'); ni.right === true ? dom.invp1_con.style.borderLeft = '1px rgb(204, 68, 68) solid' : dom.invp1_con.style.borderRight = '1px rgb(204, 68, 68) solid';
	if (ni.right === true) {
		let c = copy(item); c.data = ni.nit.data; c.dp = ni.nit.dp; addDesc(dom.invp1_con, c);
	} else addDesc(dom.invp1_con, item);
	dom.invp1_s = addElement(dom.invp1_con, 'small');
	dom.invp2_s = addElement(dom.invp1_con, 'small');
	dom.invp1_s.style.marginLeft = ni.right ? 23 : 3; dom.invp1_s.innerHTML = item.name;
	dom.invp2_s.style.right = ni.right ? 3 : 20; dom.invp2_s.innerHTML = !item.slot ? ('x' + (ni.right === true ? ni.nit.am : item.amount)) : '';
	dom.invp2_s.style.position = 'absolute';
	if (!!item.c || !!item.bc) {
		if (!!item.c) dom.invp1_s.style.color = item.c;
		if (!!item.bc) dom.invp1_s.style.backgroundColor = item.bc;
	}
	else {
		switch (item.stype) {
			case 2: dom.invp1_s.style.color = 'rgb(255,192,5)'; break;
			case 3: dom.invp1_s.style.color = 'rgb(0,235,255)'; break;
			case 4: dom.invp1_s.style.color = 'rgb(44,255,44)'; break;
		}
	}

	dom.invp1_con.addEventListener('mouseenter', function () {
		dom.invp1_op2 = addElement(this, 'small', null, ni.right ? 'atrkmove2' : 'atrkmove');
		dom.invp1_op2.innerHTML = ni.right ? '<<' : '>>';
		dom.invp1_op2.addEventListener('mouseenter', function () { global.flags.rtcrutch = true });  //ugly hack
		dom.invp1_op2.addEventListener('mouseleave', function () { global.flags.rtcrutch = false }); //self to self: revisit later V:
		dom.invp1_op2.addEventListener('click', function () {
			let scann = false; let titem;
			if (ni.right === false) {
				for (let a in trunk.c) { if (trunk.c[a].item.id === item.id && !item.slot) { scann = true; titem = trunk.c[a]; break } }
				if (scann === false) {
					let nit = addToContainer(trunk, item, item.amount); item.amount = 0; titem = nit;
					if (item.amount <= 0 || item.slot) { dom.invp1.removeChild(dom.invp1.children[inv.indexOf(item)]); removeItem(item, { fl: true }) } else if (global.sm === 1) updateInv(inv.indexOf(item)); else if (global.sm === item.stype) updateInv(global.sinv.indexOf(item));
				} else {
					titem.am += item.amount; item.amount = 0;
					if (item.amount <= 0) { dom.invp1.removeChild(dom.invp1.children[inv.indexOf(item)]); removeItem(item, { fl: true }); } else if (global.sm === 1) updateInv(inv.indexOf(item)); else if (global.sm === item.stype) updateInv(global.sinv.indexOf(item));
				} if (titem.item.onTIn) titem.item.onTIn(trunk, titem); //  big stack moves into container
			} else {
				for (let a in inv) { if (inv[a].id === item.id && !item.slot) { scann = true; titem = inv[a]; break } }
				if (scann === false) {
					let fin; if (ni.nit.item.slot) { for (let a in trunk.c) { if (trunk.c[a].data.uid === ni.nit.data.uid) { fin = trunk.c[a]; break } } } else { for (let a in trunk.c) { if (trunk.c[a].item.id === ni.nit.item.id) { fin = trunk.c[a]; break } } }
					let g = giveItem(ni.nit.item, ni.nit.am, true, { fl: true }); g.data = ni.nit.data; g.dp = ni.nit.dp;
					dom.invp2.removeChild(dom.invp2.children[trunk.c.indexOf(fin)]); removeFromContainer(trunk, fin); rendertrunkitem(dom.invp1, g);
					if (trunk.c.length === 0) global.dscr.style.display = 'none'
				}
				else {
					titem.amount += ni.nit.am; let fin; for (let a in trunk.c) { if (trunk.c[a].item.id === ni.nit.item.id) { fin = trunk.c[a]; break } }
					dom.invp2.removeChild(dom.invp2.children[trunk.c.indexOf(fin)]); removeFromContainer(trunk, fin); if (trunk.c.length === 0) global.dscr.style.display = 'none'
					if (global.sm === 1) updateInv(inv.indexOf(item)); else if (global.sm === item.stype) updateInv(global.sinv.indexOf(item));
				} if (ni.nit.item.onTOut) ni.nit.item.onTOut(trunk, ni.nit); //  big stack moves out of container
			} iftrunkopen();
		});
	});
	dom.invp1_con.addEventListener('mouseleave', function () {
		empty(this.children[2]); this.removeChild(this.children[2]);
	});
	dom.invp1_con.addEventListener('click', function () {
		if (global.flags.rtcrutch === true) { this.children[0].click(); return } else {
			scann = false; let titem;
			if (ni.right === false) {
				for (let a in trunk.c) { if (trunk.c[a].item.id === item.id && !item.slot) { scann = true; titem = trunk.c[a]; break } }
				if (scann === false) {
					let nit = addToContainer(trunk, item); item.amount--; titem = nit;
					if (item.amount <= 0) { dom.invp1.removeChild(dom.invp1.children[inv.indexOf(item)]); removeItem(item, { fl: true }); } else if (global.sm === 1) updateInv(inv.indexOf(item)); else if (global.sm === item.stype) updateInv(global.sinv.indexOf(item));

				} else {
					titem.am++; item.amount--;
					if (item.amount <= 0 || item.slot) { dom.invp1.removeChild(dom.invp1.children[inv.indexOf(item)]); removeItem(item, { fl: true }) } else if (global.sm === 1) updateInv(inv.indexOf(item)); else if (global.sm === item.stype) updateInv(global.sinv.indexOf(item));
				} if (titem.item.onTIn) titem.item.onTIn(trunk, titem); //  1 item moves into container
			} else {
				for (let a in inv) { if (inv[a].id === item.id && !item.slot) { scann = true; titem = inv[a]; break } }
				if (scann === false) {
					let fin; if (ni.nit.item.slot) { for (let a in trunk.c) { if (trunk.c[a].data.uid === ni.nit.data.uid) { fin = trunk.c[a]; break } } } else { for (let a in trunk.c) { if (trunk.c[a].item.id === ni.nit.item.id) { fin = trunk.c[a]; break } } }
					let g = giveItem(ni.nit.item, 1, true, { fl: true }); g.data = ni.nit.data; g.dp = ni.nit.dp; rendertrunkitem(dom.invp1, g); if (--fin.am <= 0) { dom.invp2.removeChild(dom.invp2.children[trunk.c.indexOf(fin)]); removeFromContainer(trunk, fin) } if (trunk.c.length === 0) global.dscr.style.display = 'none'
				}
				else {
					titem.amount++; let fin; for (let a in trunk.c) { if (trunk.c[a].item.id === ni.nit.item.id) { fin = trunk.c[a]; break } }
					if (--fin.am <= 0) { dom.invp2.removeChild(dom.invp2.children[trunk.c.indexOf(fin)]); removeFromContainer(trunk, fin) } if (trunk.c.length === 0) global.dscr.style.display = 'none';
					if (global.sm === 1) updateInv(inv.indexOf(item)); else if (global.sm === item.stype) updateInv(global.sinv.indexOf(item));
				} if (ni.nit.item.onTOut) ni.nit.item.onTOut(trunk, ni.nit); //  1 item moves out of container
			} iftrunkopen()
		}
	});
}

function updateTrunkItem(root, idx, item, am) {
	if (root.children[idx]) root.children[idx].children[1].innerHTML = item.slot ? '' : 'x' + am;
}

function updateTrunkLeftItem(item, kill) {
	if (global.menuo === 3) {
		for (let a in inv) if ((inv[a].data.uid && inv[a].data.uid === item.data.uid) || (inv[a].id === item.id)) {
			if (kill) dom.invp1.removeChild(dom.invp1.children[inv.indexOf(inv[a])]); else {
				dom.invp1.children[inv.indexOf(inv[a])].children[1].innerHTML = item.slot ? '' : 'x' + item.amount;
			}
		}
	}
}

function iftrunkopen(side) {
	if (global.menuo === 3) {
		let trunk = global.cchest;
		if (!side || side === 1) for (let obj in inv) updateTrunkItem(dom.invp1, obj, inv[obj], inv[obj].amount);
		if (!side || side === 2) for (let obj in trunk.c) updateTrunkItem(dom.invp2, obj, trunk.c[obj].item, trunk.c[obj].am);
		if (trunk.length === 0) dom.invp2noth.style.display = ''; else dom.invp2noth.style.display = 'none'
	}
}

function iftrunkopenc(side) {
	if (global.menuo === 3) {
		let trunk = global.cchest;
		if (!side || side === 1) { empty(dom.invp1); for (let obj in inv) rendertrunkitem(dom.invp1, inv[obj]); }
		if (!side || side === 2) { empty(dom.invp2); for (let obj in trunk.c) rendertrunkitem(dom.invp2, trunk.c[obj].item, { right: true, nit: { item: trunk.c[obj].item, data: trunk.c[obj].data, am: trunk.c[obj].am, dp: trunk.c[obj].dp } }); }
		if (trunk.length === 0) dom.invp2noth.style.display = ''; else dom.invp2noth.style.display = 'none'
	}
}

function addToContainer(cont, thing, am, data) {
	let it = thing; if (thing.slot) it = deepCopy(thing);
	let r = { item: it, am: am || 1, data: data || thing.data, dp: thing.slot ? thing.dp : 0 }
	if (r.item.slot) r.data.uid = ++global.uid;
	cont.c.push(r); if (global.menuo == 3) rendertrunkitem(dom.invp2, r.item, { right: true, nit: { item: r.item, data: r.data, am: r.am, dp: r.dp } }); return r;
}

function removeFromContainer(cont, item, find) {
	if (find) {
		for (let a in cont.c) if (cont.c.indexOf(cont.c[a]) === cont.c.indexOf(item)) {
			cont.c.splice(cont.c.indexOf(item), 1)
			break
		}
	}
	else cont.c.splice(cont.c.indexOf(item), 1);
}

function clr_chs(index) {
	if (!index) empty(dom.ctr_2);
	else dom.ctr_2.removeChild(dom.ctr_2.children[index]);
}

function smove(where, lv) {
	global.flags.busy = false; global.flags.work = false; global.wdwidx = 0;
	if (global.flags.loadstate) return;
	if (!global.flags.wkdis) { global.flags.wkdis = true; if (lv !== false) giveSkExp(skl.walk, .25); setTimeout(() => { global.flags.wkdis = false }, 500) }
	you.eqp[6].dp = you.eqp[6].dp - .08 < 0 ? 0 : you.eqp[6].dp - .08; let flg = false; let und = []
	for (let c in global.current_l.sector) {
		for (let a in where.sector) {
			for (let b in where.sector[a].group)
				if (where.sector[a].group[b] === global.current_l.id && where.sector[a].id === global.current_l.sector[c].id) flg = true
		} if (flg === false) { global.current_l.sector[c].onLeave(); deactivateEffectors(global.current_l.sector[c].effectors); sectors.splice(sectors.indexOf(global.current_l.sector[c])) } else flg = false
	}
	global.current_l.onLeave(); deactivateEffectors(global.current_l.effectors); global.flags.civil = true; global.flags.btl = false; global.current_z = area.nwh; dom.d7m.update(); global.stat.smovet++
	global.flags.inside = false; for (let a in where.sector) { if (where.sector[a].inside || where.inside) global.flags.inside = true }
	clr_chs();
	activateEffectors(where.effectors); where.sl(); global.current_l = where; for (let a in sectors) sectors[a].onMove();
	global.current_a.deactivate(); global.current_a = act.default; dom.ct_bt3.style.backgroundColor = 'inherit';
	for (let a in global.current_l.sector) if (!scanbyid(sectors, global.current_l.sector[a].id)) { sectors.push(global.current_l.sector[a]); global.current_l.sector[a].onEnter(); activateEffectors(global.current_l.sector[a].effectors) }
	global.current_l.onEnter(); rfeff(global.current_l)
	if (global.flags.btl === false) {
		global.current_m = creature.default; global.current_m.eff = []; empty(dom.d101m); dom.d5_1_1m.update(); update_m();
	}
}

function giveFurniture(frt, l, show) {
	let frn = l === true ? copy(frt) : frt;
	if (show !== false) msg('Furniture Acquired: <span style="color:orange">"' + frt.name + '"</span>', 'yellow', frt, 9);
	if (scanbyid(furn, frn.id)) frn.data.amount++; else { furn.push(frn); frn.data.amount++; }
	frn.onGive(); if (global.wdwidx === 1) { empty(dom.ch_1h); for (let a in furn) renderFurniture(furn[a]) }
	let v = 0; for (let a in furn) if (furn[a].v) { if (furn[a].multv) v += furn[a].v * furn[a].amount; else v += furn[a].v } if (dom.flsthdrbb) dom.flsthdrbb.innerHTML = v;
	return frn
}

function activatef(f) {
	if (!f.active) {
		f.activate(); f.active = true;
	}
}

function deactivatef(f) {
	if (f.active) {
		f.deactivate(); f.active = false;
	}
}

global._preig = addElement(document.body, 'img'); global._preig.src = 'ctst.png';//global._preig.crossOrigin = "Anonymous"; global._preig.src='http://127.0.0.1:8887/ctst.png'; 
global._preic = addElement(document.body, 'canvas'); global._preic_tmain = global._preic.getContext('2d');
global._preic2 = addElement(document.body, 'canvas'); global._preic2_tmain = global._preic2.getContext('2d'); global._preic2.width = 512; global._preic2.height = 512;
global._preig.onload = function () { global._preic_tmain.drawImage(global._preig, 0, 0); global._preic2_tmain.imageSmoothingEnabled = false;; global._preic2_tmain.drawImage(global._preig, 0, 0, 400, 400) };
document.body.removeChild(global._preig); document.body.removeChild(global._preic); document.body.removeChild(global._preic2);


function icon(root, x, y, sx, sy, sz) { //sz=2
	if (window.location.pathname.length === 1) {
		sx = sx || 16; sy = sy || 16
		var div = addElement(root, 'canvas'); div.width = sx; div.height = sy;
		let data = global._preic_tmain.getImageData(x * sx - sx, y * sy - sy, sx, sy);
		div.getContext('2d').putImageData(data, 0, 0);
		//    let temp = addElement(root,'canvas'); temp.width=sx;temp.height=sy;
		//    let data = global._preic_tmain.getImageData(x*sx-sx,y*sy-sy,sx,sy); 
		//    temp.getContext('2d').putImageData(data,0,0);
		//    var div = addElement(root,'canvas'); div.width=sx*sz;div.height=sy*sz;
		//    div.getContext('2d').imageSmoothingEnabled=false;
		//    div.getContext('2d').drawImage(temp,0,0,sx,sy,0,0,sx*sz,sy*sz);
	} else div = addElement(root, 'span');
	return div;
}

function Chs() {
	this.ttl;
	this.sl = function () { };
	this.data = {};
	this.onStay = function () { };
	this.onEnter = function () { };
	this.onLeave = function () { };
	this.onScout = function () { };
	this.sector = []
}


chss.t1 = new Chs(); chss.t1.id = 101;
chss.t1.sl = function () {
	global.lst_loc = 101; global.flags.inside = true; d_loc('Dojo, training area');
	chs('???: Kid', true);
	chs('"..."', false).addEventListener('click', function () {
		global.time += DAY;
		appear(dom.ctr_1);
		chs('???: Quit daydreaming', true);
		chs('"?"', false).addEventListener('click', function () {
			appear(dom.d0);
			chs('???: You have training to complete', true);
			chs('"!"', false).addEventListener('click', function () {
				appear(dom.inv_ctx); appear(dom.d_lct);
				chs('???: Grab your stuff and get to it', true);
				chs('"..."', false).addEventListener('click', function () { appear(dom.ct_ctrl); smove(chss.tdf, false); giveItem(wpn.stk1); giveItem(item.hrb1, 15); global.flags.aw_u = true; });
			});
		});
	});
};
if (global.flags.gameone === false) {
	global.current_l = chss.t1; smove(chss.t1); giveFurniture(furniture.frplc, null, false); let _b = giveFurniture(furniture.bed1, null, false); home.bed = _b;
}

chss.tdf = new Chs(); chss.tdf.id = 102;
chss.tdf.sl = function () {
	global.lst_loc = 102; global.flags.inside = true;
	clr_chs(); if (!global.flags.dmap) { appear(dom.gmsgs); global.flags.dmap = true }
	chs('"Select the difficulty"', true);
	if (!global.flags.tr1_win) chs('"Easiest"', false).addEventListener('click', function () {
		chs('"You are fighting training dummies"', true);
		if (!global.flags.dm1ap) { appear(dom.d1m); global.flags.dm1ap = true };
		area_init(area.trn1);
	});
	if (!global.flags.tr2_win) chs('"Easy"', false).addEventListener('click', function () {
		chs('"You are fighting training dummies"', true);
		if (!global.flags.dm1ap) { appear(dom.d1m); global.flags.dm1ap = true }
		area_init(area.trn2);
	});
	if (!global.flags.tr3_win) chs('"Normal"', false).addEventListener('click', function () {
		chs('"You are fighting training dummies"', true);
		if (!global.flags.dm1ap) { appear(dom.d1m); global.flags.dm1ap = true };
		area_init(area.trn3);
	});
}
chss.tdf.onEnter = function () {
	area_init(area.nwh);
}

chss.t2 = new Chs(); chss.t2.id = 103;
chss.t2.sl = function () {
	global.lst_loc = 103; global.flags.inside = true;
	chs('"Instructor: ' + select(['Good', 'Nice', 'Great', 'Excellent']) + ' ' + select(['job', 'work']) + ' kid! Here\'s the reward for completing the course"', true, 'lime');
	chs('"->"', false).addEventListener('click', function () {
		if (global.flags.tr1_win === true && !global.flags.rwd1) { global.flags.rwd1 = true; giveItem(item.appl, 4); giveItem(item.hrb1, 5); smove(chss.tdf); }
		else if (global.flags.tr2_win === true && !global.flags.rwd2) { global.flags.rwd2 = true; giveItem(item.brd, 2); giveItem(item.hrb1, 5); giveItem(eqp.sndl); smove(chss.tdf); }
		else if (global.flags.tr3_win === true && !global.flags.rwd3) { global.flags.rwd3 = true; let itm = giveItem(eqp.vst); itm.dp *= .7; if (global.flags.m_un === true) giveItem(item.cp, 10); }
		if (!global.flags.tr3_win || !global.flags.tr2_win || !global.flags.tr1_win) smove(chss.tdf); else { ; smove(chss.t3); giveTitle(ttl.inn); }
	});
}

chss.t3 = new Chs(); chss.t3.id = 104;
chss.t3.sl = () => {
	global.flags.inside = true; d_loc('Dojo, lobby'); global.lst_loc = 104; global.flags.inside = true;
	if (global.flags.nbtfail) {
		chs('"Instructor: You got beaten up by an inanimated dummy?! Pay attention to your condition!"', true);
		chs('"..."', false).addEventListener('click', () => {
			global.flags.nbtfail = false; clr_chs();
			smove(chss.tdf, false); giveItem(item.hrb1, 4);
		});
	}
	else {
		if (!global.flags.dj1end) {
			chs('"Instructor: Your training is over for today, you did well. As a reward, select one of these skill manuals to practice. The better your understanding, the stronger you will be in battle"', true);
			chs('"Practitioner Skillbook (Swords)"', false).addEventListener('click', () => { giveItem(item.skl1); global.flags.dj1end = true; smove(chss.lsmain1); });
			chs('"Practitioner Skillbook (Knives)"', false).addEventListener('click', () => { giveItem(item.skl2); global.flags.dj1end = true; smove(chss.lsmain1); });
			chs('"Practitioner Skillbook (Axes)"', false).addEventListener('click', () => { giveItem(item.skl3); global.flags.dj1end = true; smove(chss.lsmain1); });
			chs('"Practitioner Skillbook (Spears)"', false).addEventListener('click', () => { giveItem(item.skl4); global.flags.dj1end = true; smove(chss.lsmain1); });
			chs('"Practitioner Skillbook (Hammers)"', false).addEventListener('click', () => { giveItem(item.skl5); global.flags.dj1end = true; smove(chss.lsmain1); });
			chs('"Practitioner Skillbook (Martial)"', false).addEventListener('click', () => { giveItem(item.skl6); global.flags.dj1end = true; smove(chss.lsmain1); });
		}
		else if (global.flags.trnex1 === true && !global.flags.trnex2) {
			chs('"Instructor: Hahahhha! What a great disciple! That\'s not the dedication most of the other disciples have! Take this, it\'ll help you in your future endeavours"', true, 'yellow');
			chs('"Thanks teacher!"', false).addEventListener('click', () => {
				giveItem(acc.snch); smove(chss.lsmain1); global.flags.trnex2 = true;
			});
		}
		else {
			chs(select(['"Instructor: Back already?"', 'You notice other dojo disciples diligently train', 'Pieces of broken training dummies are scattered on the floor']), true);
			chs('"Dojo infoboard"', false).addEventListener('click', () => {
				smove(chss.djinf, false);
			});
			chs('"Destroy more dummies"', false).addEventListener('click', () => {
				smove(chss.return1, false);
			});
			if (global.flags.dj1end === true && you.lvl >= 10 && !global.flags.trne1e1) chs('"Challenge a stronger opponent"', false).addEventListener('click', () => {
				chs('"You are facing a golem"', true);
				area_init(area.trne1);
				chs('"<= Escape"', false).addEventListener('click', () => {
					smove(chss.t3, false);
				});
			});
			if (global.flags.trne1e1 && !global.flags.trne2e1) chs('"Challenge an even stronger opponent"', false, 'cornflowerblue').addEventListener('click', () => {
				chs('"You are facing a golem"', true);
				area_init(area.trne2);
				chs('"<= Escape"', false).addEventListener('click', () => {
					smove(chss.t3, false);
				});
			});
			if (global.flags.trne2e1 && !global.flags.trne3e1) chs('"Challenge a dangerous opponent"', false, 'crimson').addEventListener('click', () => {
				chs('"You are facing a golem"', true);
				area_init(area.trne3);
				chs('"<= Escape"', false).addEventListener('click', () => {
					smove(chss.t3, false);
				});
			});
			if (global.flags.trne3e1 && !global.flags.trne4e1) chs('"Challenge a powerful opponent"', false, 'red').addEventListener('click', () => {
				chs('"You are facing a golem"', true);
				area_init(area.trne4);
				chs('"<= Escape"', false).addEventListener('click', () => {
					smove(chss.t3, false);
				});
			});
			if (global.flags.dj1end) chs('"Turn in dojo gear"', false).addEventListener('click', () => {
				chs('"Instructor: You can return whatever you punched off of dummies and get coin for it, it\'s dojo\'s equipment after all. Or you can keep and use for it yourself, the choice is yours"', true);
				chs('"Return the rags"', false).addEventListener('click', () => {
					let dlr = 0; stash = []; verify = true;
					for (let a in inv) { if (inv[a].id === wpn.knf1.id && you.eqp[0].data.uid !== inv[a].data.uid) { stash.push(inv[a]); dlr += 1 } }
					for (let a in inv) { if (inv[a].id === wpn.wsrd2.id && you.eqp[0].data.uid !== inv[a].data.uid) { stash.push(inv[a]); dlr += 3 } }
					for (let a in inv) { if (inv[a].id === eqp.brc.id) { verify = true; for (let b in you.eqp) if (you.eqp[b].data.uid === inv[a].data.uid) verify = false; if (verify === true) { stash.push(inv[a]); dlr += 1 } } }
					for (let a in inv) { if (inv[a].id === eqp.vst.id) { verify = true; for (let b in you.eqp) if (you.eqp[b].data.uid === inv[a].data.uid) verify = false; if (verify === true) { stash.push(inv[a]); dlr += 1 } } }
					for (let a in inv) { if (inv[a].id === eqp.pnt.id) { verify = true; for (let b in you.eqp) if (you.eqp[b].data.uid === inv[a].data.uid) verify = false; if (verify === true) { stash.push(inv[a]); dlr += 1 } } }
					for (let a in inv) { if (inv[a].id === eqp.bnd.id) { verify = true; for (let b in you.eqp) if (you.eqp[b].data.uid === inv[a].data.uid) verify = false; if (verify === true) { stash.push(inv[a]); dlr += 1 } } }
					if (dlr === 0) chs('"Instructor: There\'s nothing I can take from you"', true); else {
						chs('"Instructor: For all your stuff I can fetch you ' + dlr + ' ' + (dom.coincopper) + ' copper. How does that sound?"', true);
						chs('"Accept"', false, 'lime').addEventListener('click', () => {
							msg(stash.length + " Items returned back to dojo", 'ghostwhite'); global.stat.ivtntdj += stash.length; giveWealth(dlr); for (let a in stash) removeItem(stash[a]); if (global.stat.ivtntdj >= 300) giveTitle(ttl.tqtm); smove(chss.t3, false);
						});
					}
					chs('"<= Go back"', false).addEventListener('click', () => {
						smove(chss.t3, false);
					});
				});
				chs('"<= Go back"', false).addEventListener('click', () => {
					smove(chss.t3, false);
				});
			});
			if (global.flags.djmlet && getDay(1) == 'Sunday') {
				chs('"Grab a serving of free food"', false, 'lime').addEventListener('click', () => {
					if (getDay(1) == 'Sunday') {
						msg(select(['*Chow*', '*Munch*', '*Crunch*', '*Gulp*']), 'lime'); msg(select(['That was good!', 'Delicious!', 'A little dry but, that will do', 'Tasty!', 'Phew, I needed that!']), 'lime');
						you.sat = you.satmax; giveSkExp(skl.glt, 42); dom.d5_3_1.update(); global.flags.djmlet = false; smove(chss.t3, false); return
					} else {
						msg('Too late for that', 'yellow'); global.flags.djmlet = false; smove(chss.t3, false); return
					}
				});
			}
			if (global.flags.dj1end === true) chs('"Level Advancement"', false, 'orange').addEventListener('click', () => {
				chs('"Instructor: If you put effort into training you will get rewards as long as you are still a disciple of this hall. After every 5 levels you reach, come here and recieve your share! You might get something really useful if you continue to improve your skills"', true);
				if (!global.flags.dj1rw1 && you.lvl >= 5) {
					chs('"Level 5 reward"', false).addEventListener('click', () => {
						chs('"Instructor: This is a good start, congratulations! Keep working hard!"', true);
						chs('"Accept"', false, 'lime').addEventListener('click', () => {
							global.flags.dj1rw1 = true; giveWealth(25); giveItem(item.sp1, 5); smove(chss.t3, false);
						});
					});
				}
				if (!global.flags.dj1rw2 && global.flags.dj1rw1 === true && you.lvl >= 10) {
					chs('"Level 10 reward"', false, 'royalblue').addEventListener('click', () => {
						chs('"Instructor: You seem to not neglect your training, good job! Keep working hard!"', true);
						chs('"Accept"', false, 'lime').addEventListener('click', () => {
							global.flags.dj1rw2 = true; giveWealth(100); giveItem(item.sp2, 2); smove(chss.t3, false);
						});
					});
				}
				if (!global.flags.dj1rw3 && global.flags.dj1rw2 === true && you.lvl >= 15) {
					chs('"Level 15 reward"', false, 'lime').addEventListener('click', () => {
						chs('"Instructor: You\'re slowly growing into a fine young warrior! Keep working hard!"', true);
						chs('"Accept"', false, 'lime').addEventListener('click', () => {
							global.flags.dj1rw3 = true; giveWealth(200); giveItem(item.sp3, 1); giveItem(eqp.tnc); giveItem(item.lifedr); giveItem(eqp.knkls); giveItem(eqp.knkls); smove(chss.t3, false);
						});
					});
				}
				if (!global.flags.dj1rw4 && global.flags.dj1rw3 === true && you.lvl >= 20) {
					chs('"Level 20 reward"', false, 'gold').addEventListener('click', () => {
						chs('"Instructor: Time to start getting serious! Keep working hard!"', true);
						chs('"Accept"', false, 'lime').addEventListener('click', () => {
							global.flags.dj1rw4 = true; giveWealth(300); giveItem(wpn.tkmts); smove(chss.t3, false);
						});
					});
				}
				if (!global.flags.dj1rw5 && global.flags.dj1rw4 === true && you.lvl >= 25) {
					chs('"Level 25 reward"', false, 'orange').addEventListener('click', () => {
						chs('"Instructor: You\'re almost ready to face real dangers of the outside world! Keep working hard!"', true);
						chs('"Accept"', false, 'lime').addEventListener('click', () => {
							global.flags.dj1rw5 = true; giveWealth(350); giveItem(acc.mnch); smove(chss.t3, false);
						});
					});
				}
				if (!global.flags.dj1rw6 && global.flags.dj1rw5 === true && you.lvl >= 30) {
					chs('"Level 30 reward"', false, 'crimson').addEventListener('click', () => {
						chs('"Instructor: You are almost as strong as an average adult! Good job kid and Keep working hard! Maybe you can defend this village one day"', true);
						chs('"Accept"', false, 'lime').addEventListener('click', () => {
							global.flags.dj1rw6 = true; giveWealth(400); giveItem(item.stthbm1); giveItem(item.stthbm4); giveItem(item.stthbm3); giveItem(item.stthbm2); smove(chss.t3, false);
						});
					});
				}
				chs('"<= Return"', false).addEventListener('click', () => {
					smove(chss.t3, false);
				});
			});
			if (item.htrdvr.have) chs('"Deliver the crate"', false, 'lightblue').addEventListener('click', () => {
				chs('"Instructor: Yamato sent something? Great timing on that, we were getting very close to running out already. This will be turned into rations for you lads, you better don\'t forget to thank our hunters properly next time you see them, as they work hard to bring food to people\'s tables. Here, small compensation for your timely delivery"', true);
				chs('"Accept"', false, 'lime').addEventListener('click', () => {
					chs('"Instructor: Hold it, that\'s not all, catch this as well, i believe it is yours. You won\'t be as lucky next time and lose your possessions for good if you leave them around again, pay better attention to where your stuff is"', true);
					chs('"Accept x2"', false, 'lime').addEventListener('click', () => {
						giveWealth(50); giveItem(item.key0); removeItem(item.htrdvr); smove(chss.t3, false);
					});
				});
			});
			chs('"<= Go outside"', false).addEventListener('click', () => {
				smove(chss.lsmain1);
			});
			if (global.flags.trne4e1 && !global.flags.trne4e1b) {
				chs('"Instructor: Once again, choose the skillbook of specialization you are interested in. Doesn\'t mean you have to stick with it to the bitter end, but it will help you train"', true);
				chs('"Bladesman Manual"', false).addEventListener('click', () => { giveItem(item.skl1a); global.flags.trne4e1b = true; smove(chss.lsmain1); });
				chs('"Assassin Manual"', false).addEventListener('click', () => { giveItem(item.skl2a); global.flags.trne4e1b = true; smove(chss.lsmain1); });
				chs('"Axeman Manual"', false).addEventListener('click', () => { giveItem(item.skl3a); global.flags.trne4e1b = true; smove(chss.lsmain1); });
				chs('"Lancer Manual"', false).addEventListener('click', () => { giveItem(item.skl4a); global.flags.trne4e1b = true; smove(chss.lsmain1); });
				chs('"Clubber Manual"', false).addEventListener('click', () => { giveItem(item.skl5a); global.flags.trne4e1b = true; smove(chss.lsmain1); });
				chs('"Brawler Manual"', false).addEventListener('click', () => { giveItem(item.skl6a); global.flags.trne4e1b = true; smove(chss.lsmain1); });
			}
		}
	}
}
chss.t3.onEnter = function () {
	area_init(area.nwh);
}

chss.djinf = new Chs(); chss.djinf.id = 160;
chss.djinf.sl = () => {
	global.flags.inside = true; d_loc('Dojo, Infoboard'); global.lst_loc = 160;
	chs('Useful information regarding dojo is written here. What will you read?', true);
	chs('"Get stronger!"', false).addEventListener('click', () => {
		chs('Fight dummies provided by dojo to improve your physique and weapon skills! Destroy them and grab their stuff, or vanquish thousands for a special reward! The doors of our dojo is open for everyone willing to lead the path of a warrior', true);
		chs('"<= Return"', false).addEventListener('click', () => {
			smove(chss.djinf, false);
		});
	});
	chs('"Graduate!"', false).addEventListener('click', () => {
		chs('When you are confident in your skills, try your fist at fighting powerful golems! How much beating can you withstand?', true);
		chs('"<= Return"', false).addEventListener('click', () => {
			smove(chss.djinf, false);
		});
	});
	chs('"Claim your rewards!"', false).addEventListener('click', () => {
		chs('As long as you keep gaining experience and train hard, dojo will provide you with gifts and money! Don\'t miss out!', true);
		chs('"<= Return"', false).addEventListener('click', () => {
			smove(chss.djinf, false);
		});
	});
	chs('"Get your grub at the canteen!"', false).addEventListener('click', () => {
		chs('Our generous dojo provides ' + col('Free Meals', 'lime') + ' to every attending low-class disciple every ' + col('Sunday', 'yellow') + '! Get in time for your weekly menu!', true);
		chs('"<= Return"', false).addEventListener('click', () => {
			smove(chss.djinf, false);
		});
	});
	chs('"Measure your power!"', false).addEventListener('click', () => {
		let v = chs('Try out punching this ' + col('Indestructable Dummy', 'orange') + ' to measure the power of your fist!', true);
		chs('"Give it a try"', false).addEventListener('click', () => {
			you.stat_r();
			let hs = handStr();
			v.innerHTML = select(['Wham!', 'Slap!', 'Hit!', 'Punch!', 'Hack!']) + ' Your approximate hand strength is measured in: <br><br><span style="border:1px dashed yellow;padding:6px">' + col((format3(hs.toString()) + 'kg'), 'springgreen') + '</span><br><br>';
			for (let x in global.htrchl) global.htrchl[x](hs);
		});
		chs('"<= Return"', false).addEventListener('click', () => {
			smove(chss.djinf, false);
		});
	});
	chs('"<= Return"', false).addEventListener('click', () => {
		smove(chss.t3, false);
	});
}

chss.trne1e1 = new Chs(); chss.trne1e1.id = 124;
chss.trne1e1.sl = () => {
	global.flags.inside = true; d_loc('Dojo, training area'); global.lst_loc = 124;
	chs('Instructor: Great job smashing that golem! This golem is one of the weakest types around, but even he can become a huge trouble if you\'re not giving it your best. Now, grab this and proceed with your training', true);
	chs('"Proceed with your training"', false).addEventListener('click', () => {
		giveItem(item.hptn1, 10); global.flags.trne1e1 = true; smove(chss.t3);
	});
}

chss.trne2e1 = new Chs(); chss.trne2e1.id = 125;
chss.trne2e1.sl = () => {
	global.flags.inside = true; d_loc('Dojo, training area'); global.lst_loc = 125;
	chs('Instructor: Just like that, keep it up. You are starting to stand much longer in fights, such an improvement from when you just arrived here! You deserver your praise, but don\'t get complacent', true);
	chs('"Proceed with your training"', false).addEventListener('click', () => {
		giveItem(wpn.fksrd); giveItem(acc.otpin); global.flags.trne2e1 = true; smove(chss.t3);
	});
}

chss.trne3e1 = new Chs(); chss.trne3e1.id = 126;
chss.trne3e1.sl = () => {
	global.flags.inside = true; d_loc('Dojo, training area'); global.lst_loc = 126;
	chs('Instructor: That was a tough one, but you still managed to crush it! You are getting close to finishing a second course. Don\'t give up!', true);
	chs('"Proceed with your training"', false).addEventListener('click', () => {
		giveItem(item.scrlw); global.flags.trne3e1 = true; smove(chss.t3);
	});
}

chss.trne4e1 = new Chs(); chss.trne4e1.id = 162;
chss.trne4e1.sl = () => {
	global.flags.inside = true; d_loc('Dojo, training area'); global.lst_loc = 162;
	chs('Instructor: <span style="color:lime">As expected, you have what it takes to protect yourself! And with that, you have finished the second entry course of this dojo, job well done! Soon, you will be able to step out of the village and take on serious jobs that will let you explore the land. You better prepare yourself well before that happens!</span>', true);
	chs('"Finish training"', false, 'lime').addEventListener('click', () => {
		global.flags.trne4e1 = true; smove(chss.t3);
	});
}

chss.return1 = new Chs(); chss.return1.id = 105;
chss.return1.sl = () => {
	global.flags.inside = true; d_loc('Dojo, training area'); global.lst_loc = 105;
	chs('Punch as many as you want', true);
	if (!global.flags.trnex2) area_init(area.trn); else area_init(area.trnf);
	chs('"<= Return back into lobby"', false).addEventListener('click', () => {
		smove(chss.t3);
	});
}

chss.frstn1main = new Chs(); chss.frstn1main.id = 113;
chss.frstn1main.sl = () => {
	global.flags.inside = false; d_loc('Western Woods, The Wooden Gate'); global.lst_loc = 113;
	chs('You\'re out in the forest. You can hunt here', true);
	chs('"=> Enter the Hunter\'s lodge"', false).addEventListener('click', () => {
		smove(chss.frstn1b1);
	});
	chs('"=> Delve inside the forest"', false).addEventListener('click', () => {
		smove(chss.frstn1a1);
	});
	if (global.flags.frstn1a3u) chs('"=> Hunt indefinitely"', false).addEventListener('click', () => {
		smove(chss.frstn1a3);
	});
	chs('"<= Return back"', false).addEventListener('click', () => {
		smove(chss.lsmain1);
	});
}

chss.frstn1a3 = new Chs(); chss.frstn1a3.id = 130; addtosector(sector.forest1, chss.frstn1a3)
chss.frstn1a3.sl = () => {
	global.flags.inside = false; d_loc('Western Woods, They\'re Nearby'); global.lst_loc = 130;
	chs('The woods are silent', true);
	chs('"<= Return back"', false).addEventListener('click', () => {
		smove(chss.frstn1main);
	});
}
chss.frstn1a3.onEnter = function () {
	area_init(area.frstn1a3);
}

chss.frstn1a4 = new Chs(); chss.frstn1a4.id = 161; addtosector(sector.forest1, chss.frstn1a4)
chss.frstn1a4.sl = () => {
	global.flags.inside = false; d_loc('Western Woods, Round Branches');
	if (area.frstn1a4.size > 0) {
		chs('Something ambushes you!', true, 'red');
		chs('"<= Escape"', false).addEventListener('click', () => {
			smove(chss.frstn1main);
		});
	} else {
		chs('You never knew this secluded area was here', true);
		if (!global.flags.frstnskltg) chs('"Look around"', false).addEventListener('click', () => {
			chs('You see something sticking out from the ground in the grass over there. Bones?', true);
			chs('"Examine whatever that might be"', false).addEventListener('click', () => {
				chs('Indeed, bones. Skeletal remains of a person to be exact. Looks like he died long time ago, much of everything rotted off, even metallic bits of whatever armor he was wearing have fallen apart.', true);
				chs('"See if you can salvage anything"', false).addEventListener('click', () => {
					chs('There isn\'t much you can take with you, except for the sword on the skeleton\'\s hip, still inside its half-desintegrated sheath. What was the cause of his death? He wasn\'t in a fight judging by the state of the sword. Was he poisoned? Or caught by surprise? Couldn\'t leave this place for whatever reason? You are not sure. The least you can do is honor the deceased by burying his remains', true);
					chs('"Make a grave"', false).addEventListener('click', () => {
						global.flags.frstnskltg = true; giveItem(wpn.mkrdwk); you.karma += 3; you.luck++; msg('Your good deed improved your karma!', 'gold'); msg('LUCK Increased +1', 'gold'); chss.frstn1a4.sl()
					})
				})
			})
		})
		chs('"<= Return"', false).addEventListener('click', () => {
			smove(chss.frstn1main);
		})
	}
}
chss.frstn1a4.onEnter = function () {
	if (area.frstn1a4.size > 0) area_init(area.frstn1a4);
}
chss.frstn1a4.onLeave = function () {
	area.frstn1a4.size = rand(5) + 20;
}
chss.frstn1a4.data = { scoutm: 600, scout: 0, scoutf: false, gets: [false], gotmod: 0 }
chss.frstn1a4.scout = [
	{ c: .009, f: () => { msg('You discover a pouch half-etched into the ground and covered by a rock. It probably belonged to the corpse', 'lime'); giveItem(item.mnblm, 3); chss.frstn1a4.data.gets[0] = true }, exp: 35 },
	{ c: .0005, cond: () => { if (getHour() >= 0 && getHour() <= 3 && getLunarPhase() === 0) return true }, f: () => { msg('You found Moonbloom!', 'lime'); giveItem(item.mnblm); }, exp: 10 },
]
chss.frstn1a4.onScout = function () { scoutGeneric(this) }


chss.frstn1b1 = new Chs(); chss.frstn1b1.id = 118;
chss.frstn1b1.sl = () => {
	global.flags.inside = true; d_loc('Western Woods, Hunter\'s Lodge');
	if (wearingany(wpn.mkrdwk) && !global.flags.wkrtndrt) {
		chs('<span style="color:limegreen">Head Hunter Yamato</span>: You! Why do you have that?', true);
		chs('"?"', false).addEventListener('click', () => {
			chs('<span style="color:limegreen">Head Hunter Yamato</span>: The sword! Where did you get it!?', true);
			chs('Give explanation', false).addEventListener('click', () => {
				chs('<span style="color:limegreen">Head Hunter Yamato</span>: The body in the forest, you say... Dammit! Our scouts are worthless if it takes someone like you to make such an important discovery! *sigh..* This sword you\'re holding once belonged to our deputy chief - Dein. You might have not met him before if you never set your foot out of the village, he was a promising and talented young soldier who were assigned to such an remote settlement for his field training', true);
				chs('=>', false).addEventListener('click', () => {
					chs('<span style="color:limegreen">Head Hunter Yamato</span>: Then one day he staight up vanished, without letting anyone know, and he was well respected and cared for our people all the same. Of course, being a part of the military would prevent him from disclosing his plans and duties, but it is highly doubtful a special task from the higher command would be the reason of his abscence. All of his belongins, personal items and possessions are still there, where he left them. Lad knew how to fight and wield a sword, I do not for once believe a man of his caliber would perish and die like this, the corpse you speak of might not be his...', true);
					chs('Express your condolences to the deceased', false).addEventListener('click', () => {
						chs('<span style="color:limegreen">Head Hunter Yamato</span>: Alright, enough. Your sentiment is appreciated, but let us hope Dein still draws breath out there. This entire precident calls for investigation, a team of hunters will be dispatched shortly and you keep yourself alert too. And I will be taking that from your hands, thank you for bringing it here. Time will tell wether this sword becomes a memento or returns to its rightful owner', true);
						chs('Part with the sword', false).addEventListener('click', () => {
							chs('<span style="color:limegreen">Head Hunter Yamato</span>: Here, take this for your trouble', true);
							chs('Accept', false, 'lime').addEventListener('click', () => {
								removeItem(findbyid(inv, wpn.mkrdwk.id)); giveWealth(300); global.flags.wkrtndrt = true; smove(chss.frstn1b1, false)
							});
						});
					});
				});
			});
		});
		return;
	}
	if (!global.flags.frstn1b1int) { chs('<span style="color:limegreen">Head Hunter Yamato</span>: Hm? Your face is unfamiliar. Might be your first time around here I take it? These are the Western Woods, or simply the western part of the forest. Spots here are very meek and mild on danger and resources, it is perfect for newbies like you. You are free to come and hunt as much as you like. Consider doing some of the available jobs while you\'re at it. Won\'t pay much, but you can be of help to the people.', true, 'orange', null, null, null, '.9em'); global.flags.frstn1b1int = true } else global.flags.wkrtndrt && random() > .5 ? chs(select(['You sight the hunter thinking deeply about something', 'You hear mumbling']), true) : chs(select(['You see a variety of bows and other hunting tools arranged on the table and hanging from the walls', 'You notice head hunter maintaining his hunting gear', 'The smell of beef jerky assaults your nose']), true);
	chs('"!Ask about the jobs"', false, 'yellow').addEventListener('click', () => {
		smove(chss.frstn1b1j, false);
	});
	chs('"Tell me something"', false).addEventListener('click', () => {
		smove(chss.htrtch0, false)
	});
	if (quest.fwd1.data.done === true) {
		chs('"Sell firewood ' + dom.coincopper + '"', false).addEventListener('click', () => {
			smove(chss.frstn1b1s, false);
		});
	}
	if (item.hbtsvr.have) chs('"Deliver the satchel"', false, 'lightblue').addEventListener('click', () => {
		chs('<span style="color:limegreen">Head Hunter Yamato</span>: Delivery back? That\'s unexpected! Put this here, let me examine it... I see, we\'re going east soon, then... Well, that\'s not for you to worry about, hhah! There is another thing. You wait here a moment<br>.......<br><br> Heeere we go! Get this crate to the dojo since you\'re going in that direction anyway. They\'ll know what to do with it. Go now, go', true);
		chs('"Ok"', false).addEventListener('click', () => {
			giveItem(item.htrdvr); removeItem(item.hbtsvr); smove(chss.frstn1main);
		});
	});
	chs('"<= Exit"', false).addEventListener('click', () => {
		smove(chss.frstn1main);
	});
	if (quest.fwd1.data.done === true && quest.hnt1.data.done === true && !global.flags.frstn1b1g1) {
		chs('<span style="color:limegreen">Head Hunter Yamato</span>: You\'re still going around without a proper weapon? That won\'t do, catch this. It isn\'t much, but a bit better than you being nearly emptyhanded. Once you return back you should check the ' + col('Notice Board', 'lime') + ' by the village center, you never know if something important is happening in the ouskirts that you aren\'t aware of, but it will almost certainly be written there. You may find a job offer or two, or see pleads of fellow villagers asking for help with mundane things, consider those as well', true);
		chs('"Thanks!"', false).addEventListener('click', () => {
			chs('<span style="color:limegreen">Head Hunter Yamato</span>: One more thing. I\'ll ask you to do this very easy, little job. Grab this bag and get it to the village\'s herbalist. You know where the herbalist is? Here are the directions, listen well: head to the marketplace and look for a very unremarkable little building with a sign that looks like a vial. Like those vials they use in alchemy, those ones. The building is located a little further back from the road, in the shade, so you may simply forget it exists if you aren\'t specifically looking for it, you keep your eyes peeled. Now go, you should have no problem getting there', true);
			chs('"Got it"', false).addEventListener('click', () => {
				global.flags.frstn1b1g1 = true; giveItem(wpn.dgknf); giveItem(item.htrsvr); smove(chss.frstn1b1, false); global.flags.phai1udt = true;
			});
		});
	}
}

chss.htrtch0 = new Chs(); chss.htrtch0.id = 164;
chss.htrtch0.sl = () => {
	global.flags.inside = true;
	chs('<span style="color:limegreen">Head Hunter Yamato</span>: What do you want to ask, kid? Want to know how to butcher a carcass? Khahhahhah! *cough*', true);
	chs('"About monsters"', false).addEventListener('click', () => { smove(chss.htrtch1, false) });
	chs('"What are monster ranks?"', false).addEventListener('click', () => {
		chs('<div style="line-height:16px"><span style="color:limegreen">Head Hunter Yamato</span>: Ranking is a way to separate monsters by their relative danger level, they go as following:<div style="border: darkblue 1px solid;background-color:#0b1c3c;margin:10px;"><div><span style="color:lighgrey">G - Can be dealth with by able people</span></div><div><span style="color:white">F - Can be dealth with by male adults</span></div><div><span style="color:lightgreen">E - Village Crisis</span></div><div><span style="color:lime">D - Townside Crisis</span></div><div><span style="color:yellow">C - Citywide Crisis</span></div><div><span style="color:orange">B - National Crisis</span></div><div><span style="color:crimson">A - Continental Threat</span></div><div><span style="color:gold;text-shadow: 0px 0px 2px red,0px 0px 2px red,0px 0px 2px red">S - Global Crisis</span></div><div><span style="color:black;text-shadow:hotpink 1px 1px .1em,cyan -1px -1px .1em">SS - World Disaster</span></div><div><span style="color:white;text-shadow:2px 0px 2px red,-2px 0px 2px magenta,0px 2px 2px cyan,0px -2px 2px yellow,0px 0px 2px gold">SSS - Universal Calamity</div></div>We haven\'t experienced anything stronger than the E rank in all history of our village. Whatever is above the A rank is completely unheard of, and only partially mentioned in ancient texts. That\'s the realm of gods, world destroyers and higher beings that our mortal souls are unlikely to ever face</div>', true, 0, 0, 0, 0, '.9em');
		chs('"<= Return"', false).addEventListener('click', () => { smove(chss.htrtch0, false) });
	});
	chs('"<= Return"', false).addEventListener('click', () => { smove(chss.frstn1b1, false) });
}

chss.htrtch1 = new Chs(); chss.htrtch1.id = 163;
chss.htrtch1.sl = () => {
	global.flags.inside = true;
	chs('<div style="line-height:14px"><span style="color:limegreen">Head Hunter Yamato</span>: Monsters, you say? There are many and they are around, terrorizing peaceful folk in the outside world. Our remote parts don\'t see much of that, these lands are tame. Not without dangers, of course, you meet a wild boar in the forest - a single wrong move and its tusks are in your guts and that is it, end of the fool. Or those pesky slimes, while don\'t look menacing and pose little danger, they sometimes gather and destroy the fields by melting crops and soil. We have it good but starvation is worse than any monster, at times. *cough* anyway, anything living and non-living you meet can be separated into 6 categories:<br>Human, Beast, Undead, Evil, Phantom, Dragon</div>', true, 0, 0, 0, 0, '.8em');
	chs('"About Humans"', false, 0, 0, 0, 0, '.8em', 0, '15px').addEventListener('click', () => {
		chs('<span style="color:limegreen">Head Hunter Yamato</span>: Humans and Demihumans fall into the same class. People like you and me, beastmen, orcs, goblins... Mostly creatures intelligent enough to walk on their two, use tools, form societies, make settlements, trade and speak on their own violition. You will encounter and perhaps fight them as bandits, criminals, members of the opposing factions and armies, whoever you disagree with. Always be on your guard, humanoids are cunning and skilled, versatile and very adaptive. Yet, they have mushy bodies. One correct strike and you get an advantage', true);
		chs('"<= Return"', false).addEventListener('click', () => { smove(chss.htrtch1, false) });
	});
	chs('"About Beasts"', false, 0, 0, 0, 0, '.8em', 0, '15px').addEventListener('click', () => {
		chs('<span style="color:limegreen">Head Hunter Yamato</span>: Beasts are your usual, normal wildlife like wolves, slimes, mimics, or prone to being evil Demihumans with low intelligence and high level of aggression like ogres, harpies, minotaurs. While animals are dumb, never underestimate a wild beast. With their thick skin and natural weapons like fangs and claws, they pose a major threat when driven into a desperate state. Fire works very well against the most, especially those with fur and feathers, keep that in mind next time you go hunting', true);
		chs('"<= Return"', false).addEventListener('click', () => { smove(chss.htrtch1, false) });
	});
	chs('"About Undead"', false, 0, 0, 0, 0, '.8em', 0, '15px').addEventListener('click', () => {
		chs('<span style="color:limegreen">Head Hunter Yamato</span>: Undead, as you could already tell, are living dead. Reanimated remains of humans and beasts by the influence of natural forces or a skilled necromancer. Even if they completely lack intelligence and wander around aimlessly, controlled bodies of the dead get strenghtened by Dark magic and gain unnatural resilience and power as a result. It doesn\'t prevent them from being hurt by fire or Holy powers, hovewer. You can deal with lesser fragile skeletal beings quickly if you bash them with something blunt', true);
		chs('"<= Return"', false).addEventListener('click', () => { smove(chss.htrtch1, false) });
	});
	chs('"About Evil"', false, 0, 0, 0, 0, '.8em', 0, '15px').addEventListener('click', () => {
		chs('<span style="color:limegreen">Head Hunter Yamato</span>: Beings that are artificially made or existences who are inherently evil, can be classified as such. Demons, imps, golems, possessed weapons and armor, gremlins, devils and much of anything else that comes out from the Underworld. They are extremely dangerous and seek destruction all that they come across', true);
		chs('"<= Return"', false).addEventListener('click', () => { smove(chss.htrtch1, false) });
	});
	chs('"About Phantoms"', false, 0, 0, 0, 0, '.8em', 0, '15px').addEventListener('click', () => {
		chs('<span style="color:limegreen">Head Hunter Yamato</span>: Souls of the dead, ethereal beings, manifestations of powers or other apparitions can all be called Phantoms. They take forms of wisp and sprites, benevolent or twisted elementals or spirits and wraiths that terrorize the living. They are difficult or sometimes outright impossible to hurt using normal physical means, magic or exorcism would be a preferred way of dealing with such enemies', true);
		chs('"<= Return"', false).addEventListener('click', () => { smove(chss.htrtch1, false) });
	});
	chs('"About Dragons"', false, 0, 0, 0, 0, '.8em', 0, '15px').addEventListener('click', () => {
		chs('<span style="color:limegreen">Head Hunter Yamato</span>: Dragons are legendary creatures that possess evil and cunning intellect. Through some unknown means many dragons in ancient times were reduced to subspecies of wyverns and wyrms, or outright bastard draconids like lizardmen, and other beings with Dragon bloodline. The power of said bloodline grants them superior defence against magic and energy abilities, their physical toughness is also no joke', true);
		chs('"<= Return"', false).addEventListener('click', () => { smove(chss.htrtch1, false) });
	});
	chs('"<= Return"', false).addEventListener('click', () => { smove(chss.htrtch0, false) });
}


chss.frstn1b1s = new Chs(); chss.frstn1b1s.id = 121;
chss.frstn1b1s.sl = () => {
	global.flags.inside = true;
	chs('<span style="color:limegreen">Head Hunter Yamato</span>: I\'ll fetch you 15 copper per bundle! How many do you want to sell?', true);
	let fwd = item.fwd1.have ? item.fwd1.amount : 0;
	if (fwd >= 1) chs('"Sell 1 piece"', false, 'lightgrey').addEventListener('click', () => {
		item.fwd1.amount -= 1; if (item.fwd1.amount <= 0) removeItem(item.fwd1); giveWealth(15); smove(chss.frstn1b1s, false)
	});
	if (fwd >= 5) chs('"Sell 5 piece"', false, 'lime').addEventListener('click', () => {
		item.fwd1.amount -= 5; if (item.fwd1.amount <= 0) removeItem(item.fwd1); giveWealth(75); smove(chss.frstn1b1s, false)
	});
	if (fwd >= 10) chs('"Sell 10 pieces"', false, 'cyan').addEventListener('click', () => {
		item.fwd1.amount -= 10; if (item.fwd1.amount <= 0) removeItem(item.fwd1); giveWealth(150); smove(chss.frstn1b1s, false)
	});
	if (fwd >= 1) chs('"Sell Everything"', false, 'orange').addEventListener('click', () => {
		giveWealth(item.fwd1.amount * 15); item.fwd1.amount = 0; removeItem(item.fwd1); smove(chss.frstn1b1s, false)
	});
	chs('"<= Return"', false).addEventListener('click', () => {
		smove(chss.frstn1b1, false)
	});
}

chss.frstn1b1j = new Chs(); chss.frstn1b1j.id = 119;
chss.frstn1b1j.sl = () => {
	global.flags.inside = true;
	chs('<span style="color:limegreen">Head Hunter Yamato</span>: Here is what\'s available, take a look', true);
	if (quest.fwd1.data.done && quest.hnt1.data.done) {
		if (!quest.lmfstkil1.data.started && !quest.lmfstkil1.data.done) {
			chs('"Monster eradication"', false).addEventListener('click', () => {
				if (you.lvl < 20 || !global.flags.trne4e1) { msg('<span style="color:limegreen">Head Hunter Yamato</span>: Don\'t even think about it, you will not be sent to your death. Go back and train, dojo has everything you need'); return }
				if (!quest.lmfstkil1.data.started) {
					chs('<span style="color:limegreen">Head Hunter Yamato</span>: What\'s this? Your aura has changed since we last met! All the martial training you went through certainly hasn\'t gone to waste, this kid is definitely isn\'t a pushover anymore, hah! If you have the guts to take on the next task, listen well - southern forest is becoming more and more dangerous, lethal beasts keep crawling in from the farther plains, making it very difficult to do any sort of work in the south. Looks like wolves this time. Some fear, at this rate, they might reach and assault the village, and that will have need to be dealth with. This is a dangerous issue, and you will have to have courage to take it on, but in turn it will serve you as great real battle experience. Other lads have already signed up, as well. Are you willing?', true, 'yellow', 0, 0, 0, '.9em');
					chs('"Accept"', false, 'lime').addEventListener('click', () => {
						giveQst(quest.lmfstkil1); global.flags.frst1u = true; giveItem(item.bstr)
						chs('<span style="color:limegreen">Head Hunter Yamato</span>: Hunt down all the wolves you find and return once you destroy at least 35 of them. You will also want this, every hunter should keep his personal notes close. And prepare medicinal bandages, just in case. Be careful, and good luck', true);
						chs('"<= Return"', false).addEventListener('click', () => {
							smove(chss.frstn1b1, false)
						});
					});
					chs('"Refuse"', false, 'crimson').addEventListener('click', () => {
						smove(chss.frstn1b1, false)
					});
				}
			});
		} else if (quest.lmfstkil1.data.started) {
			if (quest.lmfstkil1.data.mkilled < 35) {
				chs('<span style="color:limegreen">Head Hunter Yamato</span>: Having troubles with the task?', true);
				chs('"<= Return"', false).addEventListener('click', () => {
					smove(chss.frstn1b1, false);
				}); return
			}
			else chs('<span style="color:limegreen">Head Hunter Yamato</span>: What is that fire in your eyes? Can it be you are done already?', true);
			chs('"Report the sounds you heard"', false, 'lime').addEventListener('click', () => {
				chs('<span style="color:limegreen">Head Hunter Yamato</span>: That isn\'t good, sounds like trouble... Might have been the leader of the pack, furious about death of his underlings. This matter will need to be resolved quickly. As for you, go and have a good hard earned rest, you have done very well. Expect to be contacted later for further monster subjugation', true);
				chs('"Accept the reward"', false, 'lime').addEventListener('click', () => {
					finishQst(quest.lmfstkil1); smove(chss.frstn1main);
				});
			});
		}
	}
	if (!quest.fwd1.data.done) {
		chs('"Firewood gathering"', false).addEventListener('click', () => {
			if (!quest.fwd1.data.started) {
				chs('<span style="color:limegreen">Head Hunter Yamato</span>: While coal is not easy to obtain around here, good burnable wood is always in demand. Your job this time is to collect and bring about 10 bundles of firewood, keep an eye out while you\'re strolling out in the forest. Your deed will help the villagers, and you will get something out of it as well', true, 'yellow');
				chs('"Accept"', false, 'lime').addEventListener('click', () => {
					giveQst(quest.fwd1);
					chs('<span style="color:limegreen">Head Hunter Yamato</span>: Great! I will be awaiting your return', true);
					chs('"<= Return"', false).addEventListener('click', () => {
						smove(chss.frstn1b1, false)
					});
				});
				chs('"Refuse"', false, 'crimson').addEventListener('click', () => {
					smove(chss.frstn1b1, false)
				});
			} else {
				if (!item.fwd1.have) chs('<span style="color:limegreen">Head Hunter Yamato</span>: If you find your task too difficult, go back to the training grounds', true);
				else if (item.fwd1.amount < 10) chs('<span style="color:limegreen">Head Hunter Yamato</span>: You found some already? You still need ' + (10 - item.fwd1.amount) + ' more bundles of firewood to finish the task', true);
				else chs('<span style="color:limegreen">Head Hunter Yamato</span>: If you got requested firewood, turn it in', true);
				if (item.fwd1.amount >= 10) {
					chs('"Hand over firewood"', false, 'lime').addEventListener('click', () => {
						reduce(item.fwd1, 10)
						chs('<span style="color:limegreen">Head Hunter Yamato</span>: Very good, you didn\'t disappoint. You can never have enough burning material, be it for cooking or warmth, or anything else. Here, this is for you. And some monetary compensation for the job well done. Oh, by the way, I\'ll buy any spare firewood off of you if you need some coin', true);
						chs('"Accept the reward"', false, 'lime').addEventListener('click', () => {
							finishQst(quest.fwd1);
						});
					});
				}
				chs('"<= Return"', false).addEventListener('click', () => {
					smove(chss.frstn1b1, false)
				});
			}
		});
	}
	if (!quest.hnt1.data.done) {
		chs('"Hunting for meat"', false).addEventListener('click', () => {
			if (!quest.hnt1.data.started) {
				chs('<span style="color:limegreen">Head Hunter Yamato</span>: If you want to survive, you will need to eat. Prove that you can handle yourself in the wilderness by hunting down wildlife. 10 piece of fresh meat should be enough, bring them to me for the evaluation', true, 'yellow');
				chs('"Accept"', false, 'lime').addEventListener('click', () => {
					giveQst(quest.hnt1);
					chs('<span style="color:limegreen">Head Hunter Yamato</span>: Great! I will be awaiting your return', true);
					chs('"<= Return"', false).addEventListener('click', () => {
						smove(chss.frstn1b1, false)
					});
				});
				chs('"Refuse"', false, 'crimson').addEventListener('click', () => {
					smove(chss.frstn1b1, false)
				});
			} else {
				if (!item.fwd1.have) chs('<span style="color:limegreen">Head Hunter Yamato</span>: If you find your task too difficult, go back to the training grounds', true);
				else if (item.rwmt1.amount < 10) chs('<span style="color:limegreen">Head Hunter Yamato</span>: Oh, so you managed to hunt down some of the animals. You still need ' + (10 - item.rwmt1.amount) + ' more chunks of meat to end he job. Hurry up before it goes bad!', true);
				else chs('<span style="color:limegreen">Head Hunter Yamato</span>: If you have everything already, leave it here', true);
				if (item.rwmt1.amount >= 10) {
					chs('"Turn in raw meat"', false, 'lime').addEventListener('click', () => {
						reduce(item.rwmt1, 10);
						chs('<span style="color:limegreen">Head Hunter Yamato</span>: Well done! Hunting down animals and stockpiling food that way is always a good precaution. Cooking or drying raw meat is generally a better idea than consuming it raw, give that a piece of mind if you\'re not sure what to do with the stuff you have.<br>All in all, you deserve a reward', true);
						chs('"Accept the reward"', false, 'lime').addEventListener('click', () => {
							finishQst(quest.hnt1); smove(chss.frstn1b1, false);
						});
					});
				}
				chs('"<= Return"', false).addEventListener('click', () => {
					smove(chss.frstn1b1, false);
				});
			}
		});
	}
	//blabla

	chs('"<= Return"', false).addEventListener('click', () => {
		smove(chss.frstn1b1, false);
	});
}

chss.frstn1a1 = new Chs(); chss.frstn1a1.id = 114; addtosector(sector.forest1, chss.frstn1a1)
chss.frstn1a1.sl = () => {
	global.flags.inside = false; d_loc('Western Woods, The Yellow Path');
	chs('The woods are silent', true);
	chs('"<= Return back"', false).addEventListener('click', () => {
		smove(chss.frstn1main);
	});
}
chss.frstn1a1.onEnter = function () {
	area_init(area.frstn1a2);
}

chss.frstn1a2 = new Chs(); chss.frstn1a2.id = 115; addtosector(sector.forest1, chss.frstn1a2)
chss.frstn1a2.sl = () => {
	global.lst_loc = 115; global.flags.inside = false; d_loc('Western Woods, The Underbushes');
	chs('You scavenged some goods from this forest area', true);
	chs('"=> Go further into the forest"', false).addEventListener('click', () => {
		smove(chss.frstn2a1);
	});
	if (global.flags.frstnscgr) chs('"\-\-> Enter the hidden path"', false, 'grey').addEventListener('click', () => {
		smove(chss.frstn1a4);
	});
	chs('"<= Return back"', false).addEventListener('click', () => {
		smove(chss.frstn1main);
	});
}
chss.frstn1a2.data = { scoutm: 320, scout: 0, scoutf: false, gets: [false], gotmod: 0 }
chss.frstn1a2.scout = [
	{ c: .008, f: () => { msg('You uncover a hidden passage!', 'lime'); global.flags.frstnscgr = true; smove(chss.frstn1a4); chss.frstn1a2.data.gets[0] = true }, exp: 66 },
]
chss.frstn1a2.onScout = function () { scoutGeneric(this) }


chss.frstn2a1 = new Chs(); chss.frstn2a1.id = 120; addtosector(sector.forest1, chss.frstn2a1)
chss.frstn2a1.sl = () => {
	global.flags.inside = false; d_loc('Western Woods, The Shaded Path');
	chs('The woods are silent', true);
	chs('"<= Return back"', false).addEventListener('click', () => {
		smove(chss.frstn1main);
	});
}
chss.frstn2a1.onEnter = function () {
	area_init(area.frstn2a2);
}

chss.frstn3main = new Chs(); chss.frstn3main.id = 168;
chss.frstn3main.sl = () => {
	global.flags.inside = false; d_loc('Southern Forest, The Oaken Gate'); global.lst_loc = 168;
	chs('The air here feels intimidating', true);
	chs('"=> Explore the depths"', false).addEventListener('click', () => {
		smove(chss.frstn9a1m);
	});
	chs('"<= Return back"', false).addEventListener('click', () => {
		smove(chss.lsmain1);
	});
}

chss.frstn9a1m = new Chs(); chss.frstn9a1m.id = 169;
chss.frstn9a1m.sl = () => {
	global.flags.inside = false; d_loc('Southern Forest, The Foliage'); global.lst_loc = 169;
	chs('This place looks dark', true);
	chs('"<= Return back"', false).addEventListener('click', () => {
		smove(chss.frstn3main);
	});
}
chss.frstn9a1m.onEnter = function () {
	area_init(area.frstn9a1);
}


chss.lsmain1 = new Chs(); chss.lsmain1.id = 106; addtosector(sector.vcent, chss.lsmain1); addtosector(sector.vmain1, chss.lsmain1)
chss.lsmain1.sl = () => {
	global.flags.inside = false; d_loc('Village Center'); global.lst_loc = 106;
	if (isWeather(weather.sunny) || isWeather(weather.clear)) chs('The surroundings are flourishing with life, nothing bad can happen', true);
	else if (isWeather(weather.cloudy) || isWeather(weather.overcast) || isWeather(weather.stormy)) chs('You have a feeling it might rain soon', true);
	else if (isWeather(weather.storm) || isWeather(weather.rain) || isWeather(weather.drizzle)) chs('The rain feels surprisingly refreshing', true);
	else if (isWeather(weather.heavyrain) || isWeather(weather.thunder)) chs('It\'s pouring so hard the streets are completely flooded. There\'s noone around ' + (getHour() > 6 && getHour() < 21 ? 'except for a few kids' : ''), true);
	else if (isWeather(weather.misty) || isWeather(weather.foggy)) chs('Can\'t see a meter in front of you with all this fog', true);
	chs('"=> Check the Message Board"', false).addEventListener('click', () => {
		smove(chss.mbrd, false);
	});
	chs('"=> Enter Dojo"', false).addEventListener('click', () => {
		smove(chss.t3);
	});
	chs('"=> Enter Southern forest"', false).addEventListener('click', () => {
		if (!global.flags.frst1u) msg('Gate Guard: "Nothing for you to do there. Scram!"', 'yellow'); else {
			if (!global.flags.frst1um) { msg('Gate Guard: "You were given permission to proceed. Go on"', 'yellow'); global.flags.frst1um = true } smove(chss.frstn3main)
		}
	})
	chs('"=> Enter Western Woods"', false).addEventListener('click', () => {
		if (you.lvl >= 6) smove(chss.frstn1main); else msg('Gate Guard: "It is too dangerous for you to leave at this moment. Come back when you train a bit"', 'yellow');
	})
	//  chs('"=> Visit Pill Tower"',false).addEventListener('click',()=>{
	//    smove(chss.pltwr1);
	//  });
	if (global.flags.mkplc1u === true) chs('"=> Visit Marketplace"', false).addEventListener('click', () => {
		smove(chss.mrktvg1);
	});
	chs('"=> Go home"', false, 'green').addEventListener('click', () => {
		smove(chss.home);
	});
	if (!global.flags.scrtgltt) chs('"=> Food stand"', false).addEventListener('click', () => {
		if (skl.trad.lvl >= 2 && random() < .2) global.flags.scrtglti = true;
		if (global.flags.scrtglti === true) {
			chs('...', true);
			chs('?', false).addEventListener('click', () => {
				chs('"Passerby: Looking for the foodstand guy? He took his stuff and went South. That one supposedly travels from place to place to sell the food he makes, doubt we\'ll see him back any time soon"', true);
				chs('Well then..', false).addEventListener('click', () => {
					global.flags.scrtgltt = true; smove(chss.lsmain1, false);
				});
			});
		} else smove(chss.vndr1, false);
	});
	if (random() < .15) chs('"=> Shady Kid"', false, 'springgreen').addEventListener('click', () => {
		smove(chss.vndrkd1, false);
	});

	// chs('"test"',false,'red').addEventListener('click',()=>{
	//   chss.tst.sl();
	// });
	if (!global.flags.catget) chs('"=> Approach the cat"', false).addEventListener('click', () => {
		smove(chss.cat1); if (!global.stat.cat_c) global.stat.cat_c = 0;
	});
	if (!global.flags.mkplc1u) {
		if (global.flags.dj1end === true && global.flags.pmfspmkm1 !== true && random() < .4) {
			chs('Paper Boy: Hey, this is for you!', true);
			chs('?', false).addEventListener('click', () => { giveItem(item.shppmf); smove(chss.lsmain1, false) });
		}
	}
}

chss.mrktvg1 = new Chs(); chss.mrktvg1.id = 127; addtosector(sector.vmain1, chss.mrktvg1)
chss.mrktvg1.sl = () => {
	global.flags.inside = false; d_loc('Village Center, Marketplace'); global.lst_loc = 127;
	chs('The marketplace feels busy', true);
	chs('"Grocery Shop =>"', false, 'gold').addEventListener('click', () => {
		smove(chss.grc1);
	});
	chs('"General Store =>"', false, 'gold').addEventListener('click', () => {
		smove(chss.gens1);
	});
	if (global.flags.phai1udt) chs('"Herbalist =>"', false, 'gold').addEventListener('click', () => {
		smove(chss.pha1);
	});
	chs('"Nervous Guy =>"', false).addEventListener('click', () => {
		smove(chss.fdwrg1qt);
	});

	if (global.flags.grddtjb) chs('"Checkpoint"', false, 'hotpink').addEventListener('click', () => {
		if (getHour() >= 7 && getHour() <= 10) {
			chs('Lookout Guard: Here for work? You won\'t have to do much, just stand there near the gate and look intimidating. You\'re not doing any fighting if someone dangerous comes around, that would be dealth by Us, your militia. Your shift ends at 8PM, sign up now and go', true);
			chs('"Alright..."', false).addEventListener('click', () => {
				if (getHour() >= 7 && getHour() <= 10) {
					giveQst(quest.grds1); smove(chss.jbgd1);
				} else {
					chs('Lookout Guard: Too damn late, next time don\'t stand there like a decoration wasting everyone\'s time', true);
					chs('"Ah..."', false).addEventListener('click', () => { smove(chss.lsmain1) });
				}
			});
			chs('"<= Maybe not"', false).addEventListener('click', () => {
				smove(chss.mrktvg1);
			});
		} else {
			chs('Lookout Guard: If you want work come at the time that\'s stated in the notice and not a minute late!', true);
			chs('"<= Return"', false).addEventListener('click', () => {
				smove(chss.mrktvg1);
			});
		}
	});
	chs('"<= Return back to the village Center"', false).addEventListener('click', () => {
		smove(chss.lsmain1);
	});
}
chss.mrktvg1.onEnter = function () {
	if (!timers.mktwawa1) timers.mktwawa1 = setInterval(function () {
		if (random() < .1) { if (!global.text.mktwawa1) global.text.mktwawa1 = ['<small>"...for that price? Are you cr..."</small>', '<small>"...no, go by yourself..."</small>', '<small>"...right, I\'ll take ' + rand(15) + ', put them in..."</small>', '<small>"...is this really?..."</small>', '<small>"...never seen this thing..."</small>', '<small>"...is this real?..."</small>', '<small>"...yeah, he said it\'s there..."</small>', '<small>"...mama!!..."</small>', '<small>"...right, coming next evening. You should probably p..."</small>', '<small>"...stop pushing!..."</small>', '<small>"...what a scam..."</small>', '<small>"...this isn\'t even fresh!..."</small>', '<small>"...why is this so expensive?..."</small>', '<small>"...I won\'t lower it further!..."</small>', '<small>"...I\'ll come back, just wait for a minute..."</small>', '<small>"...break time!..."</small>', '<small>"...who said so? Gotta be a lie..."</small>', '<small>"...whatever, I\'m not buying..."</small>', '<small>"...turn right and then..."</small>', '<small>"...check for yourself then..."</small>', '<small>"...she\'ll return shortly. As for you..."</small>', '<small>"...deal!..."</small>', '<small>"...try a different one..."</small>', '<small>"...buy it! You won\'t regret it!..."</small>', '<small>"Oh no! I dropped it in the forest!..."</small>']; msg(select(global.text.mktwawa1), 'rgb(' + rand(255) + ',' + rand(255) + ',' + rand(255) + ')') }
	}, 1000);
}
chss.mrktvg1.onLeave = function () {
	clearInterval(timers.mktwawa1); delete timers.mktwawa1
}

chss.jbgd1 = new Chs(); chss.jbgd1.id = 159;
chss.jbgd1.sl = () => {
	global.flags.inside = false; d_loc('Village Center, Marketplace Entry Gate'); global.lst_loc = 159;
	let c = chs('You are standing on guard duty. This isn\'t very fun', true); global.flags.work = true;
	dom.trddots = addElement(c, 'span'); dom.trddots.frames = ['', '.', '..', '...']; dom.trddots.frame = 0; dom.trddots.style.position = 'absolute'; clearInterval(timers.rdngdots);
	timers.rdngdots = setInterval(() => { dom.trddots.innerHTML = dom.trddots.frames[(dom.trddots.frame = dom.trddots.frame > 2 ? 0 : ++dom.trddots.frame)] }, 333)
	chs('"Be bored"', false).addEventListener('click', () => {
		msg(select(['Right...', 'This is boring', '*whistle*', 'Ah...', '...', 'Yeah...', 'Mhm...', 'Yawn..']), 'lightgrey')
	});
}
chss.jbgd1.onEnter = function () {
	timers.job1t = setInterval(() => {
		if (getHour() >= 20) {
			msg('Lookout Guard: Work\'s done for today, you have performed your duty just well and earned your salary, take it. You are advised to go straight home after you check out');
			finishQst(quest.grds1); global.flags.work = false; clearInterval(this); smove(chss.home); global.flags.jcom++;
		} else {
			giveSkExp(skl.ptnc, .08);
			if (random() <= .01) msg(select(['Right...', 'This is boring', '*whistle*', 'Ah...', '...', 'Yeah...', 'Mhm...', 'Yawn...']), 'lightgrey')
			if (random() <= (.0005 + skl.seye.lvl * 0.0002)) {
				msg('A passerby dropped a coin. Sweet!', 'lime'); giveItem(select([item.cp, item.lcn, item.cn, item.cd, item.cq])); giveSkExp(skl.seye, 20)
			}
		}
	}, 1000)
}
chss.jbgd1.onLeave = function () {
	clearInterval(timers.job1t); global.flags.work = false;
}

chss.fdwrg1qt = new Chs(); chss.fdwrg1qt.id = 165;
chss.fdwrg1qt.sl = () => {
	d_loc('Marketplace, Stalls');
	chs('"<span style="color:cyan">Nervous Guy:</span> Argh, what am I gonna do now! How could this... Uh? S-sorry, can\'t talk right now, please leave me be. Ahh damn it..."<div style="color: darkgrey">The man then proceeds to fidget in unrest</div>', true)
	chs('"<= Walk away"', false).addEventListener('click', () => {
		smove(chss.mrktvg1, false);
	});
}


chss.grc1 = new Chs(); chss.grc1.id = 128; chss.grc1.effectors = [{ e: effector.shop }];
chss.grc1.sl = () => {
	global.flags.inside = true; d_loc('Marketplace, Grocery Shop'); global.lst_loc = 128;
	chs('Old Lady: ' + (select(['These are very fresh, buy some!', 'Freshest vegetables for the lowest price!', 'Try a few and you\'ll want even more!'])), true);
	chs('"Purchase"', false, 'orange').addEventListener('click', () => {
		chs_spec(4, vendor.grc1)
		vendor.grc1.restocked = false; clearInterval(timers.vndrstkchk); timers.vndrstkchk = setInterval(function () { if (vendor.grc1.restocked === true) { clearInterval(timers.vndrstkchk); vendor.grc1.restocked = false; msg('We\'re restocking, step out for a minute'); smove(chss.mrktvg1, false); } });
		chs('"<= Return"', false, '', '', null, null, null, true).addEventListener('click', () => {
			smove(chss.grc1, false); clearInterval(timers.vndrstkchk);
		});
	});
	chs('"<= Return back"', false).addEventListener('click', () => {
		smove(chss.mrktvg1);
	});
}
chss.grc1.data = { scoutm: 200, scout: 0, scoutf: false, gets: [false], gotmod: 0 }
chss.grc1.scout = [
	{ c: .01, f: () => { msg(select(['You notice a coin on the ground!', 'You pick a coin from under the counter', 'You snatch a coin while no one is looking']), 'lime'); giveItem(select([item.cp, item.cn, item.cq, item.cd])); chss.grc1.data.gets[0] = true }, exp: 5 },
]
chss.grc1.onScout = function () { scoutGeneric(this) }


chss.gens1 = new Chs(); chss.gens1.id = 129; chss.gens1.effectors = [{ e: effector.shop }];
chss.gens1.sl = () => {
	global.flags.inside = true; d_loc('Marketplace, Shabby General Store'); global.lst_loc = 129;
	chs('Sleeping Old Man: ' + (select(['...Welcome', '...', 'zzz...', 'A customer? Pick what you want', 'Take your time'])), true);
	chs('"Purchase"', false, 'orange').addEventListener('click', () => {
		chs_spec(4, vendor.gens1)
		vendor.gens1.restocked = false; clearInterval(timers.vndrstkchk); timers.vndrstkchk = setInterval(function () { if (vendor.gens1.restocked === true) { clearInterval(timers.vndrstkchk); vendor.gens1.restocked = false; msg('We\'re restocking, step out for a minute'); smove(chss.mrktvg1, false); } });
		chs('"<= Return"', false, '', '', null, null, null, true).addEventListener('click', () => {
			smove(chss.gens1, false); clearInterval(timers.vndrstkchk);
		});
	});
	if (item.wvbkt.have) chs('"Sell straw baskets ' + dom.coincopper + '"', false).addEventListener('click', () => {
		chs('Sleeping Old Man: You made these, kid? Hahaha, alright, i\'ll take them off your hands. 15 ' + dom.coincopper + ' each!', true);
		chs('"Sell your goods"', false, 'lime').addEventListener('click', () => {
			if (item.wvbkt.amount > 0) {
				giveWealth(item.wvbkt.amount * 15); item.wvbkt.amount = 0; removeItem(item.wvbkt); smove(chss.gens1, false);
			} else { smove(chss.gens1, false); msg('?') }
		});
		chs('"<= Maybe next time"', false).addEventListener('click', () => {
			smove(chss.gens1, false);
		});
	});
	if (area.hmbsmnt.size >= 1000 && global.flags.hbs1 && !global.flags.bmntsmkgt) chs('Infestation problem', false, 'grey').addEventListener('click', () => {
		chs('Sleeping Old Man: Your basement is in bad shape? Same been happening to the other folks lately, it\'s not just you. Something is drilling through the underground right into people\'s homes! And then you get a cellar full of rats. A complete travesty! Some speculate there\'s a monster cave nearby, but nothing was found yet. But don\'t fret, there is a solution for you - you smoke the pests out. Light this bag and toss it in, the deeper the better. Your entire place will be filled with smog, so you will have to leave and stay out for a few hours, then you\'ll have a clean and monster free basement at your disposal. 5 ' + dom.coinsilver + ' silver the price', true);
		if (you.wealth >= SILVER * 5) chs('"Sounds good"', false, 'lime').addEventListener('click', () => {
			if (you.wealth < SILVER * 5) return;
			spend(SILVER * 5); giveItem(item.bmsmktt); global.flags.bmntsmkgt = true; smove(chss.gens1, false)
		});
		chs('"<= Too expensive"', false).addEventListener('click', () => {
			smove(chss.gens1, false);
		});
	});
	chs('"<= Return back"', false).addEventListener('click', () => {
		smove(chss.mrktvg1);
	});
}
chss.gens1.data = { scoutm: 200, scout: 0, scoutf: false, gets: [false], gotmod: 0 }
chss.gens1.scout = [
	{ c: .01, f: () => { msg(select(['You notice a coin on the ground!', 'You pick a coin from under the counter', 'You snatch a coin while no one is looking']), 'lime'); giveItem(select([item.cp, item.cn, item.cq, item.cd])); chss.gens1.data.gets[0] = true }, exp: 5 },
]
chss.gens1.onScout = function () { scoutGeneric(this) }

chss.pha1 = new Chs(); chss.pha1.id = 166; chss.pha1.effectors = [{ e: effector.shop }];
chss.pha1.sl = () => {
	global.flags.inside = true; d_loc('Marketplace, Herbalist'); global.lst_loc = 166;
	chs('Herbalist: ' + (select(['Injured? Come in, I\'ll give you a check up', 'Yes yes..', 'Don\'t neglect your well being, stack on anything you will need'])), true);
	chs('"Purchase"', false, 'orange').addEventListener('click', () => {
		chs_spec(4, vendor.pha1)
		vendor.pha1.restocked = false; clearInterval(timers.vndrstkchk); timers.vndrstkchk = setInterval(function () { if (vendor.pha1.restocked === true) { clearInterval(timers.vndrstkchk); vendor.pha1.restocked = false; msg('We\'re restocking, step out for a minute'); smove(chss.mrktvg1, false); } });
		chs('"<= Return"', false, '', '', null, null, null, true).addEventListener('click', () => {
			smove(chss.pha1, false); clearInterval(timers.vndrstkchk);
		});
	});
	if (item.hrb1.amount >= 50) chs('"Sell cure grass ' + dom.coincopper + '"', false).addEventListener('click', () => {
		chs('Herbalist: Yes indeed, if you have any cure grass to sell, by all means bring it here, you can never have too much. I will take bundles of 50 for 15 ' + dom.coincopper, true);
		chs('"Sell your goods"', false, 'lime').addEventListener('click', () => {
			if (item.hrb1.amount >= 50) {
				global.stat.hbhbsld++;
				giveWealth(15); item.hrb1.amount -= 50; reduce(item.hrb1); if (global.stat.hbhbsld >= 7 && !global.flags.hbhbgft) {
					chs('Herbalist: You were such a great help bringing all this cure grass to me! Take this, as a bonus', true);
					chs('"Accept"', false, 'lime').addEventListener('click', () => {
						giveItem(item.hptn1, 15); giveItem(item.hptn2, 3); vendor.pha1.data.rep = vendor.pha1.data.rep + 10 > 100 ? 100 : vendor.pha1.data.rep + 10; msg('The Herbalist likes you a bit more', 'lime'); global.flags.hbhbgft = true; smove(chss.pha1, false); return;
					});
				}; if (item.hrb1.amount < 50) smove(chss.pha1, false)
			} else { smove(chss.pha1, false); msg('?') }
		});
		chs('"<= Rather not"', false).addEventListener('click', () => {
			smove(chss.pha1, false);
		});
	});
	if (item.htrsvr.have) chs('"Deliver the bag"', false, 'lightblue').addEventListener('click', () => {
		chs('Herbalist: And who might you be? Ohhhh, aren\'t you that dojo kid who\'s learning the art of hunting from the head himself? Come in come in, welcome! What is it you wish to deliver? Ah! Wonderful, excellent, this will last for plenty of time. Thank you for coming all this way in timely manner, you\'ve been a great help. I will give you these to sample, as a reward, they will be useful to you. Oh, and one simple request, if you don\'t mind. Give this to him when you meet next time, it is very important that he gets it.', true);
		chs('"I can do it!"', false).addEventListener('click', () => {
			removeItem(item.htrsvr); giveItem(item.atd1, 3); giveItem(item.hptn1, 10); giveItem(item.psnwrd); giveItem(item.hptn2); giveItem(item.hbtsvr); smove(chss.pha1);
		});
	});

	chs('"<= Return back"', false).addEventListener('click', () => {
		smove(chss.mrktvg1);
	});
}
chss.pha1.data = { scoutm: 200, scout: 0, scoutf: false, gets: [false], gotmod: 0 }
chss.pha1.scout = [
	{ c: .01, f: () => { msg(select(['You notice a coin on the ground!', 'You pick a coin from under the counter', 'You snatch a coin while no one is looking']), 'lime'); giveItem(select([item.cp, item.cn, item.cq, item.cd])); chss.pha1.data.gets[0] = true }, exp: 5 },
]
chss.pha1.onScout = function () { scoutGeneric(this) }


chss.vndr1 = new Chs(); chss.vndr1.id = 116; chss.vndr1.effectors = [{ e: effector.shop }]; addtosector(sector.vcent, chss.vndr1); addtosector(sector.vmain1, chss.vndr1)
chss.vndr1.sl = () => {
	d_loc('Village Center, Street Food Stand'); global.lst_loc = 116;
	vendor.stvr1.restocked = false; clearInterval(timers.vndrstkchk); timers.vndrstkchk = setInterval(function () { if (vendor.stvr1.restocked === true) { clearInterval(timers.vndrstkchk); vendor.stvr1.restocked = false; msg('We\'re restocking, step out for a minute'); smove(chss.lsmain1, false); } });
	let hi = 'Street Merchant Ran: Welcome! What would you like?'; dom.vndr1 = chs(hi, true);
	for (let ost = 0; ost < vendor.stvr1.stock.length; ost++) {
		let itm = vendor.stvr1.stock[ost];
		dom.vndrs = chs(itm[0].name + ' <small style="color:rgb(255, 116, 63)">' + itm[2] + '●</small> x' + itm[1], false);
		dom.vndrs.addEventListener('click', function () {
			if (you.wealth - itm[2] >= 0) { spend(itm[2]); mf(-itm[2], 1); m_update(); giveItem(itm[0]); global.stat.buyt++; if (--itm[1] === 0) { clr_chs(vendor.stvr1.stock.indexOf(itm) + 1); vendor.stvr1.stock.splice(vendor.stvr1.stock.indexOf(itm), 1); empty(global.dscr); global.dscr.style.display = 'none' } else this.innerHTML = itm[0].name + ' <small style="color:rgb(255, 116, 63)">' + itm[2] + '●</small> x' + itm[1]; } else { clearTimeout(timers.shopcant); dom.vndr1.innerHTML = 'Sorry you can\'t afford that!'; timers.shopcant = setTimeout(() => { dom.vndr1.innerHTML = hi }, 1000) }
		});
		addDesc(dom.vndrs, itm[0]);
	}
	chs('"<= Go back"', false).addEventListener('click', () => {
		smove(chss.lsmain1, false); clearInterval(timers.vndrstkchk);
	});
}

chss.vndrkd1 = new Chs(); chss.vndrkd1.id = 123; chss.vndrkd1.shop = true; addtosector(sector.vcent, chss.vndrkd1); addtosector(sector.vmain1, chss.vndrkd1)
chss.vndrkd1.sl = () => {
	d_loc('Village Center, Child Trader'); global.lst_loc = 123;
	vendor.kid1.restocked = false; clearInterval(timers.vndrstkchk); timers.vndrstkchk = setInterval(function () { if (vendor.kid1.restocked === true) { clearInterval(timers.vndrstkchk); vendor.kid1.restocked = false; msg('You, step out for a moment, I\'m getting new stuff'); smove(chss.lsmain1, false); } });
	let hi = 'Hey, I\'ve got some good stuff for you'; dom.vndr1 = chs(hi, true);
	for (let ost = 0; ost < vendor.kid1.stock.length; ost++) {
		let itm = vendor.kid1.stock[ost];
		dom.vndrs = chs(itm[0].name + ' <small style="color:rgb(255, 116, 63)">' + itm[2] + '●</small> x' + itm[1], false);
		dom.vndrs.addEventListener('click', function () {
			if (you.wealth - itm[2] >= 0) { spend(itm[2]); mf(-itm[2], 1); m_update(); giveItem(itm[0]); global.stat.buyt++; if (--itm[1] === 0) { clr_chs(vendor.kid1.stock.indexOf(itm) + 1); vendor.kid1.stock.splice(vendor.kid1.stock.indexOf(itm), 1); empty(global.dscr); global.dscr.style.display = 'none' } else this.innerHTML = itm[0].name + ' <small style="color:rgb(255, 116, 63)">' + itm[2] + '●</small> x' + itm[1]; } else { clearTimeout(timers.shopcant); dom.vndr1.innerHTML = 'Bring money next time'; timers.shopcant = setTimeout(() => { dom.vndr1.innerHTML = hi }, 1000) }
		});
		addDesc(dom.vndrs, itm[0]);
	}
	if (skl.fgt.lvl >= 5 && !global.flags.vndrkd1sp1) chs('"Show me something better"', false, 'darkgrey').addEventListener('click', () => {
		chs('So you want something from the hidden stash, huh? Good eye! You are one of the dojo runts, I\'ve got just what someone like you needs. One book, 3 silver' + dom.coinsilver + '. So, watcha say?', true);
		chs('"Give me"', false, 'lime').addEventListener('click', () => {
			if (you.wealth >= 300) {
				chs('"There ya go, enjoy"', true)
				global.flags.vndrkd1sp1 = true; giveItem(item.fgtsb1); spend(300)
				chs('"Sweet purchase!"', false).addEventListener('click', () => {
					smove(chss.lsmain1, false);
				});
			} else {
				chs('No money - no goods! Don\'t waste my time!', true);
				chs('"<= Go back"', false).addEventListener('click', () => {
					smove(chss.lsmain1, false);
				});
			}
		});
		chs('"<= Nah"', false, 'Red').addEventListener('click', () => {
			chs('No worries, I\'ll keep it for you', true);
			chs('"<= Go back"', false).addEventListener('click', () => {
				smove(chss.lsmain1, false);
			});
		});
	});
	else if (global.stat.moneyg >= 1000 && !global.flags.vndrkd1sp2 && global.flags.vndrkd1sp1) chs('"Show me something better"', false, 'darkgrey').addEventListener('click', () => {
		chs('Alright, there\'s something else for you, snatched from some sleeping guy and I bet would be useful for you. Similar deal, 5 silver' + dom.coinsilver, true);
		chs('"Yes please"', false, 'lime').addEventListener('click', () => {
			if (you.wealth >= 500) {
				chs('"Deal successfully made"', true)
				global.flags.vndrkd1sp2 = true; giveItem(item.bfsnwt); spend(500)
				chs('"Score!"', false).addEventListener('click', () => {
					smove(chss.lsmain1, false);
				});
			} else {
				chs('No money - no goods! Don\'t waste my time!', true);
				chs('"<= Go back"', false).addEventListener('click', () => {
					smove(chss.lsmain1, false);
				});
			}
		});
		chs('"<= Nah"', false, 'Red').addEventListener('click', () => {
			chs('No worries, I\'ll keep it for you', true);
			chs('"<= Go back"', false).addEventListener('click', () => {
				smove(chss.lsmain1, false);
			});
		});
	});
	chs('"<= Go back"', false).addEventListener('click', () => {
		smove(chss.lsmain1, false);
	});
}
chss.vndrkd1.onLeave = function () { clearInterval(timers.vndrstkchk) }

chss.tstauto = new Chs(); chss.tstauto.id = -1;
chss.tstauto.sl = () => {
	d_loc('Test auto'); global.lst_loc = -1;
	dom.testauto = chs('TEST', true);
	if (!global.flags.testauto_1 || global.flags.testauto_1 === false) chs('Run', false).addEventListener('click', () => {
		global.flags.testauto_1 = true; timers.testauto1 = setInterval(() => { dom.testauto.innerHTML = rand(9999999) }, 1000); chss.tstauto.sl();
	}); else chs('Stop', false).addEventListener('click', () => {
		global.flags.testauto_1 = false; chss.tstauto.sl(); clearInterval(timers.testauto1);
	});
	chs('"<= Go back"', false).addEventListener('click', () => {
		chss.lsmain1.sl();
	});
}

chss.tst = new Chs(); chss.tst.id = -1;
chss.tst.sl = () => {
	d_loc('Test'); global.lst_loc = -1;
	dom.tst = chs('TEST', true);
	global.flags.btl = true; global.flags.civil = false; area_init(area.tst);
	chs('"<= Go back"', false).addEventListener('click', () => {
		chss.lsmain1.sl();
	});
}

chss.cat1 = new Chs(); chss.cat1.id = 107; addtosector(sector.vcent, chss.cat1); addtosector(sector.vmain1, chss.cat1)
chss.cat1.sl = () => {
	d_loc('Village Center, Cat'); //global.lst_loc = 107;
	let w = !global.stat.cat_c ? chs('There is a cat.', true) : chs('There is a cat. Pets: ' + global.stat.cat_c, true);
	chs('"Pet the cat"', false).addEventListener('click', x => {
		let a = addElement(document.body, 'span');
		a.style.pointerEvents = 'none';
		a.style.position = 'absolute'; a.style.color = 'lime';
		a.innerHTML = select([':3', '\'w\'', '\'ω\'', '(=・∀・=)', '*ﾟヮﾟ']);
		a.style.top = -55; a.style.left = -55;
		a.style.fontSize = '1.25em'; a.style.textShadow = '2px 2px 1px blue';
		a.posx = x.clientX - 20; a.posy = x.clientY - 20; a.spos = randf(-1, 1);
		let t = 0;
		let g = setInterval(() => {
			t++;
			a.style.top = a.posy - 2 * t;
			a.style.left = a.posx + Math.sin(t / 5 + a.spos) * 15;
			a.style.opacity = (110 - t) / 110;
			if (t === 110) {
				clearInterval(g);
				document.body.removeChild(a);
			}
		}, 20);
		global.stat.cat_c++; if (global.stat.cat_c < 333) skl.pet.use(); w.innerHTML = 'There is a cat. Pets: ' + global.stat.cat_c;
		if (global.stat.cat_c >= 100) {
			if (!global.flags.cat_g) {
				clr_chs(2); global.flags.cat_g = true;
				chs('"???"', false).addEventListener('click', () => {
					chs('Cat wants to tag along', true);
					chs('"Take it with you"', false).addEventListener('click', () => {
						let cat = giveFurniture(furniture.cat, true, false); cat.data.sex = rand(1);
						cat.data.c = rand(global.text.cfc.length - 1); cat.data.p = rand(global.text.cfp.length - 1); cat.data.l1 = rand(global.text.cln.length - 1); let tg = rand(global.text.cln.length - 1); do { tg = rand(global.text.cln.length - 1) } while (tg === cat.data.l1); cat.data.l2 = rand(global.text.cln.length - 1);
						global.flags.catget = true; msg('The cat decided to move into your house!', 'lime'); smove(chss.lsmain1);
					});
					chs('"Leave it as is"', false).addEventListener('click', () => {
						smove(chss.lsmain1);
					});
				});
				chs('"<= Return"', false).addEventListener('click', () => {
					smove(chss.lsmain1);
				})
			}
		}
	});
	if (global.stat.cat_c >= 100) {
		chs('"???"', false).addEventListener('click', () => {
			chs('Cat wants to tag along', true);
			chs('"Take it with you"', false).addEventListener('click', () => {
				let cat = giveFurniture(furniture.cat, true, false); cat.data.sex = rand(1);
				cat.data.c = rand(global.text.cfc.length - 1); cat.data.p = rand(global.text.cfp.length - 1); cat.data.l1 = rand(global.text.cln.length - 1); let tg = rand(global.text.cln.length - 1); do { tg = rand(global.text.cln.length - 1) } while (tg === cat.data.l1); cat.data.l2 = rand(global.text.cln.length - 1);
				global.flags.catget = true; msg('The cat decided to move into your house!', 'lime'); smove(chss.lsmain1);
			});
			chs('"Leave it as is"', false).addEventListener('click', () => {
				smove(chss.lsmain1);
			});
		});
	}
	chs('"<= Return"', false).addEventListener('click', () => {
		smove(chss.lsmain1);
	});
}

global.text.mbrdtt = ['"If you do not work your hours daily, you will not get any dessert"', '"Do your job well and you will be rewarded"', 'There is a report of a missing cat', 'There is a section of useless gossip', 'This is an  advertisement for fresh vegetables', 'This is an advertisement for dojo membership', 'This is an advertisement for wooden furniture', 'This is an advertisement for dried meat', 'This is an advertisement for joining the militia', '"The Hunter Association offers you a large variety of boxes full of smoked meat and furs"', 'This is an advertisement for herbal medicine', 'This is an advertisement for wine kegs', 'This is an advertisement for farming equipment', 'This is an advertisement for carpentery supplies', '"All the children must return home by 8PM!"', 'This is an advertisement for smithing orders', 'This is an advertisement for cooking courses', 'This is an advertisement for bottled water', 'This is an advertisement for knitting advices', 'This is an advertisement for cleaning services', 'This is a warning to stay away from fortune tellers', 'This is an advertisement for woven straw baskets', 'This is an advertisement for hemp clothing']

chss.mbrd = new Chs(); chss.mbrd.id = 108; addtosector(sector.vcent, chss.mbrd); addtosector(sector.vmain1, chss.mbrd)
chss.mbrd.sl = () => {
	d_loc('Village Center, Message Board'); global.lst_loc = 108;
	for (let a in inv) if (inv[a].id === acc.wdl1.id || inv[a].id === acc.sdl1.id || inv[a].id === acc.bdl1.id || inv[a].id === acc.gdl1.id) {
		if (!global.flags.glqtdltn && (getHour() < 20 && getHour() > 8) && random() < .15) {
			{
				chs('You notice a little girl with emerald green hair approach you', true);
				chs('"?"', false).addEventListener('click', () => {
					chs('<span style="color:lime">Xiao Xiao</span>: "Hey, hey, what are those dolls you carry? Make one for me!!"', true);
					chs('"Alright..."', false).addEventListener('click', () => {
						global.flags.glqtdltn = true; smove(chss.mbrd, false)
					});
				});
			}
			return
		} break
	}
	chs('Message Board<br>You can find jobs or other stuff here', true);
	chs('"Explore the posts"', false).addEventListener('click', () => {
		chs(select(global.text.mbrdtt), true);
		chs('"<= Return"', false).addEventListener('click', () => {
			smove(chss.mbrd, false);
		});
	});
	if (global.flags.frstn1b1g1) {
		chs('"Notice #4"', false).addEventListener('click', () => {
			chs('It says here:<br><span style="color:orange">Looking for a anyone with free time to assist local militia with guarding duty. Apply at the checkpoint near marketplace area between 7AM and 10AM"</span>', true);
			chs('"Huh.."', false).addEventListener('click', () => {
				global.flags.grddtjb = true; smove(chss.mbrd);
			});
		});
		chs('"Warning!"', false).addEventListener('click', () => {
			chs('Dangerous beasts were sighted in vicinity of the Southern Forest. These reports are likely linked to the cause of livestock and locals getting injured, therefore, to avoid further casualties, entry into the forest is prohibited to those without permit or high enough self-defence ability until the situation is resolved<br><br><div style="text-align:right">一Head of The Guard, Hitoshi</div>', true);
			chs('"I see"', false).addEventListener('click', () => { smove(chss.mbrd); });
		});
	}
	if (global.flags.glqtdltn && !global.flags.glqtdldn && (getHour() < 20 && getHour() > 8)) {
		chs('"Xiao Xiao =>"', false).addEventListener('click', () => { smove(chss.xpgdqt1, false) });
	}
	chs('"<= Go back"', false).addEventListener('click', () => {
		smove(chss.lsmain1, false);
	});
}

chss.xpgdqt1 = new Chs(); chss.xpgdqt1.id = 167; addtosector(sector.vcent, chss.xpgdqt1); addtosector(sector.vmain1, chss.xpgdqt1)
chss.xpgdqt1.sl = () => {
	d_loc('Village Center, Message Board'); global.lst_loc = 166;
	chs('<span style="color:lime">Xiao Xiao</span>: "What is it what is it?"', true);
	let dl1 = findbyid(inv, acc.wdl1.id); let dl2 = findbyid(inv, acc.sdl1.id); let dl3 = findbyid(inv, acc.bdl1.id); let dl4 = findbyid(inv, acc.gdl1.id);
	if (dl1) {
		chs('"Show Xiao Xiao a wooden doll"', false).addEventListener('click', () => {
			chs('<span style="color:lime">Xiao Xiao</span>: "Nooooo it\'s ugly!!"', true);
			chs('"<= Take it back"', false).addEventListener('click', () => { smove(chss.xpgdqt1, false) })
		});
	}
	if (dl2) {
		chs('"Show Xiao Xiao a straw doll"', false).addEventListener('click', () => {
			chs('<span style="color:lime">Xiao Xiao</span>: "Nooooo it\'s creepy!!"', true);
			chs('"<= Take it back"', false).addEventListener('click', () => { smove(chss.xpgdqt1, false) })
		});
	}
	if (dl3) {
		chs('"Show Xiao Xiao a bone doll"', false).addEventListener('click', () => {
			chs('<span style="color:lime">Xiao Xiao</span>: "Nooooo it\'s scary!!"', true);
			chs('"<= Take it back"', false).addEventListener('click', () => { smove(chss.xpgdqt1, false) })
		});
	}
	if (dl4) {
		chs('"Show Xiao Xiao a soul doll"', false).addEventListener('click', () => {
			chs('<span style="color:lime">Xiao Xiao</span>: "Waai thank you! I love it! I\'ll give you this! Here, take!"<br><br><span style="color:lightgrey">The girl happily runs away with her new toy</span>', true);
			chs('"Claim your hardearned reward"', false).addEventListener('click', () => { removeItem(dl4); global.flags.glqtdldn = true; global.offline_evil_index -= .002; msg('You feel more peaceful', 'gold'); giveItem(acc.ubrlc); smove(chss.mbrd, false) })
		});
	}
	chs('"<= Return"', false).addEventListener('click', () => {
		smove(chss.mbrd, false)
	});
}

chss.trd = new Chs(); chss.trd.id = 109;
chss.trd.sl = function (b, x) {
	global.flags.rdng = true; let rd = skl.rdg.use(); b.data.timep = b.data.timep || 0;
	b.cmax = (b.data.time * (1 / (1 + (rd) / 10)) / you.mods.rdgrt) - (1 / (1 + (rd) / 10) - 1) / you.mods.rdgrt; let c = b.cmax - b.data.timep; if (c < 0) c = 0;
	let ttxt; if (c > HOUR) ttxt = (c / HOUR << 0) + '</span> hours to finish'; else ttxt = (c << 0) + '</span> minutes to finish';
	dom.trdc = chs('', true); dom.trd = addElement(dom.trdc, 'span'); dom.trd.innerHTML = 'You are reading <span style="color:orange">' + b.name + '</span><br>It will take you about <span style="color:lime">' + ttxt;
	dom.trddots = addElement(dom.trdc, 'span'); dom.trddots.frames = ['', '.', '..', '...']; dom.trddots.frame = 0; dom.trddots.style.position = 'absolute';
	timers.rdngdots = setInterval(() => { dom.trddots.innerHTML = dom.trddots.frames[(dom.trddots.frame = dom.trddots.frame > 2 ? 0 : ++dom.trddots.frame)] }, 333);
	timers.rdng = setInterval(() => {
		global.stat.rdgtttl++; let rd = skl.rdg.use(); giveSkExp(skl.rdg, x || 1);
		b.cmax = (b.data.time * (1 / (1 + (rd) / 10)) / you.mods.rdgrt) - (1 / (1 + (rd) / 10) - 1) / you.mods.rdgrt; let c = b.cmax - b.data.timep; if (c < 0) c = 0;
		let ttxt; if (c > HOUR) ttxt = (c / HOUR << 0) + '</span> hours to finish'; else ttxt = (c << 0) + '</span> minutes to finish';
		dom.trd.innerHTML = 'You are reading <span style="color:orange">' + b.name + '</span><br>It will take you about <span style="color:lime">' + ttxt;
		if (++b.data.timep >= b.cmax) { clearInterval(timers.rdng); clearInterval(timers.rdngdots); global.stat.rdttl++; global.flags.rdng = false; for (let gg in chss) if (chss[gg].id === global.lst_loc) chss[gg].sl(); b.use(); reduce(b); b.data.timep = 0; }
	}, 1000);
	chs('"Stop reading"', false).addEventListener('click', () => {
		clearInterval(timers.rdng); clearInterval(timers.rdngdots); global.flags.rdng = false; for (let gg in chss) if (chss[gg].id === global.lst_loc) chss[gg].sl();
	});
}

chss.home = new Chs(); chss.home.id = 111; addtosector(sector.home, chss.home);
chss.home.sl = () => {
	d_loc('Your Home'); global.lst_loc = 111;
	if (!global.flags.catget || sector.home.data.smkp > 0) chs('Your humble abode. You can rest here. ', true);
	else { if (!global.text.hmcttt) global.text.hmcttt = ['Your cat comes out to greet you!', '', 'You hear rustling', 'Meow']; chs('You feel safe. You can rest here. ' + select(global.text.hmcttt), true); }
	if (!global.flags.hbgget) chs('"Examine your bag"', false).addEventListener('click', () => {
		chs('Something you\'ve forgotten to grab before. There\'s a pack of food and some junk idea paper.', true)
		chs('Better take this with you', false).addEventListener('click', () => {
			global.flags.hbgget = true; giveItem(eqp.bnd); giveItem(item.ip1); giveItem(item.watr, 10); giveItem(wpn.wsrd1); giveItem(item.eggn, 3); giveItem(item.mlkn, 2); giveItem(item.rice, 5); giveItem(item.brd, 50); smove(chss.home, false);
		});
	});
	chs('"Crash down and take a nap"', false).addEventListener('click', () => {
		if (sector.home.data.smkp > 0) { msg('This isn\'t time for sleep', 'red'); return }
		smove(chss.hbed, false);
	});
	if (!global.flags.chbdfst) chs('"Examine your hidden stash"', false).addEventListener('click', () => {
		chs('You reach for a small red box which you keep your valuables in, it is time to take it out', true)
		chs('Grab the contents', false).addEventListener('click', () => {
			giveItem(item.ywlt); giveItem(item.pdeedhs); global.flags.chbdfst = true;
			smove(chss.home, false);
		});
	});
	chs(global.flags.hbs1 === true ? '"Enter the basement"' : '"Examine basement door"', false).addEventListener('click', () => {
		if (!global.flags.hbs1) {
			if (item.key0.have) { msg('*click...* ', 'lightgrey'); msg_add('The door has opened', 'lime'); global.flags.hbs1 = true; smove(chss.home, false) } else msg("It's locked");
		} else smove(chss.bsmnthm1, false)
	});
	if (global.flags.hsedchk) chs(' "Furniture list"', false, 'orange', '', 1, 8).addEventListener('click', () => {
		chs_spec(2); global.wdwidx = 1;
		chs('"<= Return"', false).addEventListener('click', () => {
			smove(chss.home, false);
		});
	});
	if (scanbyid(furn, furniture.frplc.id)) {
		chs('"Examine Fireplace"', false).addEventListener('click', () => {
			smove(chss.ofrplc, false);
		});
	}
	if (scanbyid(furn, furniture.strgbx.id)) {
		chs('"Access Storagebox"', false).addEventListener('click', () => {
			smove(chss.sboxhm, false);
		});
	}
	if (global.flags.catget) {
		tcat = findbyid(furn, furniture.cat.id); tcat.data.mood = tcat.data.mood || 1;
		chs('"Check on Cat"', false).addEventListener('click', () => {
			if (sector.home.data.smkp > 0) { msg('Your cat went outside', 'yellow'); return }
			chs_spec(1);
			if (tcat.data.named === false) chs('"Rename"', false).addEventListener('click', () => {
				chs('Give your cat a name!<br><small>(can\'t rename later!)</small>', true);
				let inp = addElement(dom.ctr_2, 'input', 'chs');
				inp.style.textAlign = 'center'; inp.style.color = 'white'; inp.style.fontFamily = 'MS Gothic';
				chs('"Accept"', false, 'lime').addEventListener('click', () => {
					if (inp.value == '' || inp.value.search(/ *$/) === 0) msg('Actually give it a name, maybe?', 'springgreen'); else if (inp.value.search(/[Kk][Ii][Rr][Ii]/) === 0) { msg('Hey now! o:<', 'crimson'); dom.gmsgs.children[1].lastChild.style.fontSize = '2em' } else { tcat.data.name = inp.value; tcat.data.named = true; } smove(chss.home, false);
				});
				chs('"Decline"', false, 'red').addEventListener('click', () => {
					smove(chss.home, false);
				});
			});
			dom.ctspcl = chs('"Pet ' + tcat.data.name + '"', false);
			dom.ctspcl.addEventListener('click', x => {
				let a = addElement(document.body, 'span'); global.stat.cat_c++; for (let x in global.cptchk) global.cptchk[x]()
				a.style.pointerEvents = 'none';
				a.style.position = 'absolute'; a.style.color = 'lime';
				a.innerHTML = tcat.data.mood > .2 ? select([':3', '\'w\'', '\'ω\'', '(=・∀・=)', '*ﾟヮﾟ']) : select(['¦3', 'ーωー', '( ˘ω˘)', '(´-ω-`)', '(。-∀-)']);
				a.style.top = -55; a.style.left = -55;
				a.style.fontSize = '1.25em'; a.style.textShadow = '2px 2px 1px blue';
				a.posx = x.clientX - 20; a.posy = x.clientY - 20; a.spos = randf(-1, 1);
				let t = 0;
				let g = setInterval(() => {
					t++;
					a.style.top = a.posy - 2 * t;
					a.style.left = a.posx + Math.sin(t / 5 + a.spos) * 15;
					a.style.opacity = (110 - t) / 110;
					if (t === 110) {
						clearInterval(g);
						document.body.removeChild(a);
					}
				}, 20);
				tcat.data.mood = tcat.data.mood - .01 <= 0 ? 0 : tcat.data.mood - .01; if (tcat.data.mood >= 0.01) skl.pet.use();
			});
			chs('"<= Return"', false).addEventListener('click', () => {
				smove(chss.home, false); clearInterval(timers.caupd);
			});
		});
	}
	chs('"<= Go outside"', false).addEventListener('click', () => {
		smove(chss.lsmain1);
	});
}

chss.home.data = { scoutm: 1200, scout: 0, scoutf: false, gets: [false, false], gotmod: 0 }
chss.home.scout = [
	{ c: .006, f: () => { msg('Oh, you forgot you had this around', 'orange'); giveItem(wpn.kiknif); chss.home.data.gets[0] = true; }, exp: 30 },
	{ c: .01, f: () => { msg('There was a coin stuck between the floor boards', 'orange'); giveItem(item.lcn); chss.home.data.gets[1] = true; }, exp: 3 },
]
chss.home.onScout = function () { scoutGeneric(this) }

global.text.bssel = ['Ack! There\'s dust and cobweb everywhere in this place', 'Spiderweb lands on your face as you enter', 'Various broken garbage is littered around', 'You step on some glass shards and crush them']
global.text.bsseldark = ['Ack! Something touches you from the darkness', 'You step in and something crunches underneath', 'You feel like something moved in front of you', 'You touched cobweb and felt gross']

chss.bsmnthm1 = new Chs(); chss.bsmnthm1.id = 158; addtosector(sector.home, chss.bsmnthm1); chss.bsmnthm1.effectors = [{ e: effector.dark }]
chss.bsmnthm1.sl = () => {
	d_loc('Your Home, Basement'); global.lst_loc = 158;
	if (area.hmbsmnt.size > 0) {
		chs('Argh! This place is infested!', true, 'red');
		area_init(area.hmbsmnt);
	} else {
		if (!cansee()) chs(select(global.text.bsseldark) + '. You can\'t see anything in this darkness, it\'ll be better if you find a lightsource', true, 'darkgrey'); else {
			chs(select(global.text.bssel), true);
			if (!global.flags.bsmntchck) chs('"Examine your surroundings"', false).addEventListener('click', () => {
				if (!cansee()) {
					chs('Your light went off..', true, 'darkgrey');
					chs('"<= Return"', false).addEventListener('click', () => {
						smove(chss.home, false);
					});
				} else {
					chs("You glance around and find mountains of broken crates, shelves, boxes, furniture and other decaying goods. Don't expect to find anything of great value amongst this trash. Perhaps you can salvage at least something if you look careful enough" + (!global.flags.bsmntchstgt ? ', like that giant chest over there' : ''), true, 'orange');
					if (!global.flags.bsmntchstgt) chs('"Seek significance of a massive container"', false).addEventListener('click', () => {
						chs("It looks like an ordinary coffer, except it's unusually big and has a padlock, which thankfully isn't locked. You get a brilliant idea to carry this hunk-a-junk upstairs", true);
						chs('"Do exactly that"', false, 'lime').addEventListener('click', () => {
							global.flags.bsmntchstgt = true; giveFurniture(furniture.strgbx); smove(chss.home, false);
							msg('Phew! That felt like a workout! You won\'t need to descend into that awful basement anymore if you wish to access the Big Box', 'orange');
							msg('Your muscles feel stronger!', 'lime'); msg('STR increased by +1 permanently', 'lime'); you.sat *= .5; you.stra++; you.stat_r();
						});
					});
					if (!global.flags.bsmntsctgt) chs('"Rummage through rubble"', false).addEventListener('click', () => {
						chs("Indeed, simply glancing over the rubble won\'t reveal you any hidden secrets, you think you better investigate everything carefully", true);
						chs('"Prepare for further examination"', false).addEventListener('click', () => {
							global.flags.bsmntsctgt = true; giveAction(act.scout); global.current_a.deactivate(); global.current_a = act.default; smove(chss.bsmnthm1, false)
						});
					});
					chs('"<= Return"', false).addEventListener('click', () => {
						smove(chss.bsmnthm1, false);
					});
				}
			});
		}
	}
	chs('"<= Return"', false).addEventListener('click', () => {
		smove(chss.home, false);
	});
}
chss.bsmnthm1.data = { scoutm: 900, scout: 0, scoutf: false, gets: [false, false], gotmod: 0 }
chss.bsmnthm1.scout = [
	{ c: .01, f: () => { msg('You found a pouch with some coins!', 'lime'); giveItem(item.cp, rand(1, 5)); giveItem(item.cn, rand(1, 5)); giveItem(item.cq, rand(1, 5)); chss.bsmnthm1.data.gets[0] = true; }, exp: 40 },
	{ c: .03, f: () => { msg('You found a pile of scattered firewood, some logs seem useful but others have rotted completely. You decide to grab them anyway'); giveItem(item.fwd1, rand(2, 4)); giveItem(item.wdc, (45, 90)); chss.bsmnthm1.data.gets[1] = true; }, exp: 10 },
	{
		c: .03, f: () => {
			chs('Among the rabble and remains of collapsed bookshelves you decide to confirm if anything survived. Rotten and soaked in basement juices books seems unsalvagable, bookshelves as well, you can\'t even tell if they are made of wood anymore. One of the books was incased into a small mound formed by rocks and sand, it seems surprisingly fine', true);
			chs('"<= I\'m taking this"', false).addEventListener('click', () => { chss.bsmnthm1.data.gets[2] = true; giveItem(item.jnlbk); deactivateAct(global.current_a); smove(chss.bsmnthm1, false) })
		}, exp: 15
	},
];
chss.bsmnthm1.onScout = function () { scoutGeneric(this) }

chss.hbed = new Chs(); chss.hbed.id = 112; addtosector(sector.home, chss.hbed)
chss.hbed.sl = () => {
	d_loc('Your Home, Bed'); global.lst_loc = 112; let extra = '';
	if (you.alive === false) { chs(select(['You lost consciousness...', 'You have been knocked out...', 'You passed out...']), true); you.alive = true }
	else { if (global.flags.catget) extra = select(['. Your cat is resting next to you', '. You feel warm']); chs('Great way to pass time' + extra, true); }
	chs('"<= Get up"', false).addEventListener('click', () => {
		for (let i in chss) if (chss[i].id === global.home_loc) smove(chss[i]);
	});
}
chss.hbed.onStay = function () {
	let hpr = (skl.sleep.use(home.bed) + (global.flags.catget ? 5 : 1) + 1) << 0;
	if (!effect.fei1.active && you.hp < you.hpmax) { you.hp + hpr <= you.hpmax ? you.hp += hpr : you.hp = you.hpmax; dom.d5_1_1.update() }
	// if(global.current_z.id!==-666&&random()<.00001){
	//   let ta = new Area(); ta.id=-666;
	//   ta.name = 'Nightmare';
	//   ta.pop = [{crt:creature.ngtmr1,lvlmin:you.lvl,lvlmax:you.lvl,c:1}]; ta.protected=true;
	//   ta.onEnd=function(){area_init(area.nwh);global.flags.civil=true; global.flags.btl=false;}; global.flags.civil=false; global.flags.btl=true;
	//   ta.size = 1; z_bake(ta); area_init(ta); dom.d7m.update(); msg('Your sins are crawling up on you','red')
	//}
}
chss.hbed.onEnter = function () {
	global.flags.sleepmode = true; if (effect.slep.active === false) giveEff(you, effect.slep); global.timescale = 5;
}
chss.hbed.onLeave = function () {
	global.flags.sleepmode = false; global.timescale = 1; removeEff(effect.slep);
}

chss.ofrplc = new Chs(); chss.ofrplc.id = 117; addtosector(sector.home, chss.ofrplc)
chss.ofrplc.sl = () => {
	d_loc('Your Home, Fireplace'); let fire = findbyid(furn, furniture.frplc.id); global.lst_loc = 117;
	//dom.d_lctt.innerHTML+='<span style="color:orange;font-size:1.2em">&nbspⓞ<span>'
	let its = []
	if (findbyid(inv, item.fwd1.id)) its.push([findbyid(inv, item.fwd1.id), 'some firewood', 30])
	if (findbyid(inv, item.coal1.id)) its.push([findbyid(inv, item.coal1.id), 'some coal', 300])
	if (findbyid(inv, item.coal2.id)) its.push([findbyid(inv, item.coal2.id), 'some charcoal', 300])
	if (findbyid(inv, wpn.stk1.id)) its.push([findbyid(inv, wpn.stk1.id), 'a stick', 15])
	if (!global.text.fplcextra) global.text.fplcextra = ['You\'ll need fire if you want to get some cooking done', 'You can warm up here if you light it up'];
	if (!global.text.frplcfrextra) global.text.frplcfrextra = ["You notice the fire flickering slightly", "Tiny fire is warming up the room", "Comfy fire lights up the surroundings", "Bright flame is roaring inside the Fireplace"];
	let textra0; if (fire.data.fuel === 0) textra0 = ''; else if (fire.data.fuel <= 60) textra0 = global.text.frplcfrextra[0]
	else if (fire.data.fuel >= 130 && fire.data.fuel <= 300) textra0 = global.text.frplcfrextra[1];
	else if (fire.data.fuel >= 300 && fire.data.fuel <= 540) textra0 = global.text.frplcfrextra[2];
	else if (fire.data.fuel >= 540) textra0 = global.text.frplcfrextra[3];
	dom.frpls = chs('Comfy fireplace. ' + (select(global.text.fplcextra) + '<br>' + textra0), true);
	if (!global.flags.fplcgtwd) chs('"Retrieve spare firewood. You have a feeling you\'ll need it"', false).addEventListener('click', function () {
		msg("You have some lying around nearby", 'orange'); global.flags.fplcgtwd = true;
		giveItem(item.fwd1, 3); smove(chss.ofrplc, false);
	});
	for (let a in its) {
		chs('"' + (select(["Toss ", "Throw "])) + its[a][1] + ' into the fireplace"', false).addEventListener('click', function () {
			its[a][0].amount--; fire.data.fuel = fire.data.fuel + its[a][2] > its[a][2] ? its[a][2] : fire.data.fuel + its[a][2];
			if (fire.data.fuel <= its[a][2]) dom.frpls.innerHTML = global.text.frplcfrextra[0]
			else if (fire.data.fuel >= 130 && fire.data.fuel <= 300) dom.frpls.innerHTML = global.text.frplcfrextra[1];
			else if (fire.data.fuel >= 300 && fire.data.fuel <= 540) dom.frpls.innerHTML = global.text.frplcfrextra[2];
			else if (fire.data.fuel >= 540) dom.frpls.innerHTML = global.text.frplcfrextra[3];
			if (its[a][0].amount <= 0) { removeItem(its[a][0]); dom.ctr_2.removeChild(this) } else if (global.sm === 1) updateInv(inv.indexOf(its[a][0])); else if (global.sm === its[a][0]) updateInv(global.sinv.indexOf(its[a][0]));
		});
	};
	let afire = findbyid(furn, furniture.fwdpile.id); if (afire && afire.data.fuel > 0) {
		chs('"Light a fire"', false, 'orange').addEventListener('click', () => {
			if (effect.fplc.active) msg('Fire is already on', 'orange'); else { afire.data.fuel--; fire.data.fuel += 16 }
		});
	}
	chs('"<= Step away"', false).addEventListener('click', () => {
		smove(chss.home, false);
	});
}

chss.sboxhm = new Chs(); chss.sboxhm.id = 131; addtosector(sector.home, chss.sboxhm)
chss.sboxhm.sl = () => {
	d_loc('Your Home, Storage Box');
	//  chs('"Your botomless storage container, full of your belongings"',true)
	chs_spec(3, home.trunk)
	chs('"<= Step Away"', false, '', '', null, null, null, true).addEventListener('click', () => {
		smove(chss.home, false);
	});
}

global.text.catasound = ['You are hearing weird sounds', 'Crunching sound echoes', 'Your feet sink into the muddy ground', 'You hear wailing',
	'Something growls in the distance', 'Damp stagnant air of the underground makes it difficult to breathe', 'You hear bones', 'You notice something move in the darkness',
	'You feel sinister aura', 'Aged walls have something written on them, but you are unable to decipher what it is', 'Bone bits are littered on the ground', 'Old rotting cloth is hanging from the walls', 'Something rusty sparkes from below', 'old stale air fills your lungs'];

chss.catamn = new Chs(); chss.catamn.id = 132; addtosector(sector.cata1, chss.catamn);
chss.catamn.sl = () => {
	d_loc('Catacombs, The Entryway'); global.lst_loc = 132;
	chs('"You have entered the Catacombs"', true, 'lightgrey', 'black')
	chs('"↑ Move North"', false).addEventListener('click', () => {
		smove(chss.cata1);
	});
	chs('"<= Exit"', false).addEventListener('click', () => {
		smove(chss.lsmain1);
	});
}

chss.cata1 = new Chs(); chss.cata1.id = 133; addtosector(sector.cata1, chss.cata1)
chss.cata1.sl = () => {
	d_loc('Catacombs, The Casket Service'); global.lst_loc = 133;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"← Move West"', false).addEventListener('click', () => {
		smove(chss.cata13);
	});
	chs('"→ Move East"', false).addEventListener('click', () => {
		smove(chss.cata2);
	});
	chs('"↓ Move South"', false).addEventListener('click', () => {
		smove(chss.catamn);
	});
}

chss.cata2 = new Chs(); chss.cata2.id = 134; addtosector(sector.cata1, chss.cata2)
chss.cata2.sl = () => {
	d_loc('Catacombs, The Mourning Hall'); global.lst_loc = 134;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"← Move West"', false).addEventListener('click', () => {
		smove(chss.cata1);
	});
	chs('"→ Move East"', false).addEventListener('click', () => {
		smove(chss.cata3);
	});
}

chss.cata3 = new Chs(); chss.cata3.id = 135; addtosector(sector.cata1, chss.cata3)
chss.cata3.sl = () => {
	d_loc('Catacombs, The Last Breath'); global.lst_loc = 135;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"↑ Move North"', false).addEventListener('click', () => {
		smove(chss.cata4);
	});
	chs('"← Move West"', false).addEventListener('click', () => {
		smove(chss.cata2);
	});
}

chss.cata4 = new Chs(); chss.cata4.id = 136; addtosector(sector.cata1, chss.cata4)
chss.cata4.sl = () => {
	d_loc('Catacombs, Tunnel of the Dead'); global.lst_loc = 136;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"↑ Move North"', false).addEventListener('click', () => {
		smove(chss.cata5);
	});
	chs('"↓ Move South"', false).addEventListener('click', () => {
		smove(chss.cata3);
	});
}

chss.cata5 = new Chs(); chss.cata5.id = 137; addtosector(sector.cata1, chss.cata5)
chss.cata5.sl = () => {
	d_loc('Catacombs, Movement Below'); global.lst_loc = 137;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"↑ Move North"', false).addEventListener('click', () => {
		smove(chss.cata6, false);
	});
	chs('"← Move West"', false).addEventListener('click', () => {
		smove(chss.cata12);
	});
	chs('"↓ Move South"', false).addEventListener('click', () => {
		smove(chss.cata4);
	});
}

chss.cata6 = new Chs(); chss.cata6.id = 138; addtosector(sector.cata1, chss.cata6)
chss.cata6.sl = () => {
	d_loc('Catacombs, The Web Corridor'); global.lst_loc = 138;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"↑ Move North"', false).addEventListener('click', () => {
		smove(chss.cata7);
	});
	chs('"↓ Move South"', false).addEventListener('click', () => {
		smove(chss.cata5);
	});
}

chss.cata7 = new Chs(); chss.cata7.id = 139; addtosector(sector.cata1, chss.cata7)
chss.cata7.sl = () => {
	d_loc('Catacombs, Grievance'); global.lst_loc = 139;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"← Move West"', false).addEventListener('click', () => {
		smove(chss.cata8);
	});
	chs('"↓ Move South"', false).addEventListener('click', () => {
		smove(chss.cata6);
	});
}

chss.cata8 = new Chs(); chss.cata8.id = 140; addtosector(sector.cata1, chss.cata8)
chss.cata8.sl = () => {
	d_loc('Catacombs, Forgotten Post'); global.lst_loc = 140;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"← Move West"', false).addEventListener('click', () => {
		smove(chss.cata9);
	});
	chs('"→ Move East"', false).addEventListener('click', () => {
		smove(chss.cata7);
	});
}

chss.cata9 = new Chs(); chss.cata9.id = 141; addtosector(sector.cata1, chss.cata9)
chss.cata9.sl = () => {
	d_loc('Catacombs, Withered Hand'); global.lst_loc = 141;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"→ Move East"', false).addEventListener('click', () => {
		smove(chss.cata8);
	});
	chs('"↓ Move South"', false).addEventListener('click', () => {
		smove(chss.cata10);
	});
}

chss.cata10 = new Chs(); chss.cata10.id = 142; addtosector(sector.cata1, chss.cata10)
chss.cata10.sl = () => {
	d_loc('Catacombs, The Rusted Arc'); global.lst_loc = 142;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"↑ Move North"', false).addEventListener('click', () => {
		smove(chss.cata9);
	});
	chs('"↓ Move South"', false).addEventListener('click', () => {
		smove(chss.cata11);
	});
}

chss.cata11 = new Chs(); chss.cata11.id = 143; addtosector(sector.cata1, chss.cata11)
chss.cata11.sl = () => {
	d_loc('Catacombs, Old One\'s Destination'); global.lst_loc = 143;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"↑ Move North"', false).addEventListener('click', () => {
		smove(chss.cata10);
	});
	chs('"→ Move East"', false).addEventListener('click', () => {
		smove(chss.cata12);
	});
}

chss.cata12 = new Chs(); chss.cata12.id = 144; addtosector(sector.cata1, chss.cata12)
chss.cata12.sl = () => {
	d_loc('Catacombs, Thawing Candles'); global.lst_loc = 144;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"← Move West"', false).addEventListener('click', () => {
		smove(chss.cata11);
	});
	chs('"→ Move East"', false).addEventListener('click', () => {
		smove(chss.cata5);
	});
}

chss.cata13 = new Chs(); chss.cata13.id = 145; addtosector(sector.cata1, chss.cata13)
chss.cata13.sl = () => {
	d_loc('Catacombs, The Endless Echoes'); global.lst_loc = 145;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"← Move West"', false).addEventListener('click', () => {
		smove(chss.cata14);
	});
	chs('"→ Move East"', false).addEventListener('click', () => {
		smove(chss.cata1);
	});
}

chss.cata14 = new Chs(); chss.cata14.id = 146; addtosector(sector.cata1, chss.cata14)
chss.cata14.sl = () => {
	d_loc('Catacombs, The Dusty Underpass'); global.lst_loc = 146;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"↑ Move North"', false).addEventListener('click', () => {
		smove(chss.cata15);
	});
	chs('"→ Move East"', false).addEventListener('click', () => {
		smove(chss.cata13);
	});
}

chss.cata15 = new Chs(); chss.cata15.id = 147; addtosector(sector.cata1, chss.cata15)
chss.cata15.sl = () => {
	d_loc('Catacombs, Light\'s Corner'); global.lst_loc = 147;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"↑ Move North"', false).addEventListener('click', () => {
		smove(chss.cata16);
	});
	chs('"↓ Move South"', false).addEventListener('click', () => {
		smove(chss.cata14);
	});
}

chss.cata16 = new Chs(); chss.cata16.id = 148; addtosector(sector.cata1, chss.cata16)
chss.cata16.sl = () => {
	d_loc('Catacombs, Son\'s Last Visit'); global.lst_loc = 148;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"↑ Move North"', false).addEventListener('click', () => {
		smove(chss.cata17);
	});
	chs('"↓ Move South"', false).addEventListener('click', () => {
		smove(chss.cata15);
	});
}

chss.cata17 = new Chs(); chss.cata17.id = 149; addtosector(sector.cata1, chss.cata17)
chss.cata17.sl = () => {
	d_loc('Catacombs, The Stone Plate'); global.lst_loc = 149;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"↑ Move North"', false).addEventListener('click', () => {
		smove(chss.cata18);
	});
	chs('"↓ Move South"', false).addEventListener('click', () => {
		smove(chss.cata16);
	});
}

chss.cata18 = new Chs(); chss.cata18.id = 150; addtosector(sector.cata1, chss.cata18)
chss.cata18.sl = () => {
	d_loc('Catacombs, Cracked Passageway'); global.lst_loc = 150;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"← Move West"', false).addEventListener('click', () => {
		smove(chss.cata19);
	});
	chs('"↓ Move South"', false).addEventListener('click', () => {
		smove(chss.cata17);
	});
}

chss.cata19 = new Chs(); chss.cata19.id = 151; addtosector(sector.cata1, chss.cata19)
chss.cata19.sl = () => {
	d_loc('Catacombs, The Limited Leeway'); global.lst_loc = 151;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"← Move West"', false).addEventListener('click', () => {
		smove(chss.cata20);
	});
	chs('"→ Move East"', false).addEventListener('click', () => {
		smove(chss.cata18);
	});
}

chss.cata20 = new Chs(); chss.cata20.id = 152; addtosector(sector.cata1, chss.cata20)
chss.cata20.sl = () => {
	d_loc('Catacombs, The Brittle Turn'); global.lst_loc = 152;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"→ Move East"', false).addEventListener('click', () => {
		smove(chss.cata19);
	});
	chs('"↓ Move South"', false).addEventListener('click', () => {
		smove(chss.cata21);
	});
}

chss.cata21 = new Chs(); chss.cata21.id = 153; addtosector(sector.cata1, chss.cata21)
chss.cata21.sl = () => {
	d_loc('Catacombs, Bright Ray Above'); global.lst_loc = 153;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"↑ Move North"', false).addEventListener('click', () => {
		smove(chss.cata20);
	});
	chs('"↓ Move South"', false).addEventListener('click', () => {
		smove(chss.cata22);
	});
}

chss.cata22 = new Chs(); chss.cata22.id = 154; addtosector(sector.cata1, chss.cata22)
chss.cata22.sl = () => {
	d_loc('Catacombs, Nowhere To Run'); global.lst_loc = 154;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"↑ Move North"', false).addEventListener('click', () => {
		smove(chss.cata21);
	});
	chs('"↓ Move South"', false).addEventListener('click', () => {
		smove(chss.cata23);
	});
}

chss.cata23 = new Chs(); chss.cata23.id = 155; addtosector(sector.cata1, chss.cata23)
chss.cata23.sl = () => {
	d_loc('Catacombs, The Aging Room'); global.lst_loc = 155;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"↑ Move North"', false).addEventListener('click', () => {
		smove(chss.cata22);
	});
	chs('"↓ Move South"', false).addEventListener('click', () => {
		smove(chss.cata24);
	});
}

chss.cata24 = new Chs(); chss.cata24.id = 156; addtosector(sector.cata1, chss.cata24)
chss.cata24.sl = () => {
	d_loc('Catacombs, Eleven Wisemen'); global.lst_loc = 156;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"↑ Move North"', false).addEventListener('click', () => {
		smove(chss.cata23);
	});
	chs('"← Move West"', false).addEventListener('click', () => {
		smove(chss.cata25);
	});
}

chss.cata25 = new Chs(); chss.cata25.id = 157; addtosector(sector.cata1, chss.cata25)
chss.cata25.sl = () => {
	d_loc('Catacombs, The End Of Journey'); global.lst_loc = 157;
	chs(select(global.text.catasound), true, 'lightgrey', 'black');
	chs('"→ Move East"', false).addEventListener('click', () => {
		smove(chss.cata24);
	});
}


function wManager() {
	let ses = getSeason()
	if (w_manager.duration > 0) w_manager.duration -= global.timescale;
	else {
		let chance = rand(1, 100);
		switch (ses) {
			case 1:
				switch (w_manager.curr.id) {
					case weather.sunny.id:
						if (chance <= 10) setWeather(weather.cloudy, rand(120, 220));
						else if (chance > 10 && chance <= 20) setWeather(weather.overcast, rand(90, 280));
						else if (chance > 20 && chance <= 90 && getHour() < 5 && getHour() > 16) setWeather(weather.clear, rand(300, 500));
						else if (chance > 20 && chance <= 90 && getHour() >= 5 && getHour() <= 16) setWeather(weather.sunny, rand(200, 400));
						else setWeather(weather.sunny, rand(22, 44));
						break;
					case weather.cloudy.id:
						if (chance <= 15) setWeather(weather.stormy, rand(100, 200));
						else if (chance > 15 && chance <= 35) setWeather(weather.overcast, rand(90, 220));
						else if (chance > 35 && chance <= 45) setWeather(weather.rain, rand(150, 250));
						else if (chance > 45 && chance <= 65) setWeather(weather.drizzle, rand(30, 80));
						else if (chance > 65 && chance <= 80 && getHour() < 5 && getHour() > 16) setWeather(weather.clear, rand(300, 500));
						else if (chance > 65 && chance <= 80 && getHour() >= 5 && getHour() <= 16) setWeather(weather.sunny, rand(200, 400));
						else setWeather(weather.cloudy, rand(90, 160));
						break;
					case weather.stormy.id:
						if (chance < 10) setWeather(weather.cloudy, rand(90, 120));
						else if (chance > 10 && chance <= 40) setWeather(weather.storm, rand(90, 160));
						else if (chance > 40 && chance <= 60) setWeather(weather.rain, rand(120, 200));
						else if (chance > 60 && chance <= 75) setWeather(weather.drizzle, rand(20, 40));
						else setWeather(weather.stormy, rand(60, 120));
						break;
					case weather.storm.id:
						if (chance < 5) setWeather(weather.stormy, rand(80, 120));
						else if (chance > 5 && chance <= 65) setWeather(weather.rain, rand(180, 250));
						else if (chance > 65 && chance <= 75) setWeather(weather.heavyrain, rand(80, 150));
						else setWeather(weather.storm, rand(20, 80));
						break;
					case weather.overcast.id:
						if (chance < 20) setWeather(weather.stormy, rand(50, 120));
						else if (chance > 20 && chance <= 45) setWeather(weather.cloudy, rand(100, 200));
						else if (chance > 45 && chance <= 60) setWeather(weather.clear, rand(150, 250));
						else setWeather(weather.overcast, rand(40, 90));
						break;
					case weather.rain.id:
						if (chance < 10) setWeather(weather.drizzle, rand(30, 50));
						else if (chance > 10 && chance <= 20) setWeather(weather.heavyrain, rand(100, 200));
						else if (chance > 20 && chance <= 30) setWeather(weather.overcast, rand(52, 173));
						else if (chance > 30 && chance <= 55) setWeather(weather.misty, rand(25, 55));
						else if (chance > 55 && chance <= 80) setWeather(weather.clear, rand(225, 455));
						else setWeather(weather.rain, rand(80, 120));
						break;
					case weather.heavyrain.id:
						if (chance < 10) setWeather(weather.storm, rand(80, 130));
						else if (chance > 10 && chance <= 65) setWeather(weather.rain, rand(100, 170));
						else if (chance > 65 && chance <= 75) setWeather(weather.misty, rand(15, 40));
						else if (chance > 75 && chance <= 80) setWeather(weather.clear, rand(110, 200));
						else if (chance > 80 && chance <= 90) setWeather(weather.thunder, rand(120, 200));
						else setWeather(weather.heavyrain, rand(50, 100));
						break;
					case weather.misty.id:
						if (chance < 50) setWeather(weather.foggy, rand(22, 33));
						else if (chance > 50 && chance <= 80 && getHour() >= 5 && getHour() <= 16) setWeather(weather.sunny, rand(100, 200));
						else if (chance > 50 && chance <= 80 && getHour() < 5 && getHour() > 16) setWeather(weather.clear, rand(100, 200));
						else setWeather(weather.misty, rand(11, 22));
						break;
					case weather.foggy.id:
						if (chance < 20) setWeather(weather.overcast, rand(80, 130));
						else if (chance > 20 && chance <= 70 && getHour() >= 5 && getHour() <= 16) setWeather(weather.sunny, rand(100, 200));
						else if (chance > 20 && chance <= 70 && getHour() < 5 && getHour() > 16) setWeather(weather.clear, rand(100, 200));
						else setWeather(weather.foggy, rand(11, 22));
						break;
					case weather.drizzle.id:
						if (chance < 20) setWeather(weather.overcast, rand(30, 60));
						else if (chance > 20 && chance <= 50) setWeather(weather.rain, rand(90, 180));
						else if (chance > 50 && chance <= 65) setWeather(weather.clear, rand(90, 180));
						else setWeather(weather.drizzle, rand(30, 62));
						break;
					case weather.clear.id:
						if (chance < 10) setWeather(weather.overcast, rand(30, 60));
						else if (chance > 10 && chance <= 55 && getHour() >= 5 && getHour() <= 16) setWeather(weather.sunny, rand(100, 200));
						else if (chance > 10 && chance <= 55 && getHour() < 5 && getHour() > 16) setWeather(weather.clear, rand(100, 200));
						else if (chance > 55 && chance <= 65) setWeather(weather.cloudy, rand(100, 200));
						else setWeather(weather.clear, rand(160, 290));
						break;
					case weather.thunder.id:
						if (chance < 50) setWeather(weather.heavyrain, rand(60, 90));
						else if (chance > 50 && chance <= 80) setWeather(weather.storm, rand(80, 120));
						else setWeather(weather.thunder, rand(40, 60));
						break;
					default: setWeather(weather.clear, rand(30, 60)); break;
				}
				break;
			case 2:
				switch (w_manager.curr.id) {
					case weather.sunny.id:
						if (chance <= 5) setWeather(weather.cloudy, rand(60, 120));
						else if (chance > 5 && chance <= 90 && getHour() < 5 && getHour() > 16) setWeather(weather.clear, rand(400, 700));
						else if (chance > 15 && chance <= 90 && getHour() >= 5 && getHour() <= 16) setWeather(weather.sunny, rand(300, 500));
						else setWeather(weather.sunny, rand(90, 180));
						break;
					case weather.cloudy.id:
						if (chance <= 3) setWeather(weather.stormy, rand(30, 60));
						else if (chance > 3 && chance <= 8) setWeather(weather.overcast, rand(40, 120));
						else if (chance > 8 && chance <= 15) setWeather(weather.rain, rand(50, 100));
						else if (chance > 15 && chance <= 25) setWeather(weather.drizzle, rand(30, 80));
						else if (chance > 25 && chance <= 80 && getHour() < 5 && getHour() > 16) setWeather(weather.clear, rand(300, 500));
						else if (chance > 25 && chance <= 80 && getHour() >= 5 && getHour() <= 16) setWeather(weather.sunny, rand(200, 400));
						else setWeather(weather.cloudy, rand(40, 120));
						break;
					case weather.stormy.id:
						if (chance < 35) setWeather(weather.cloudy, rand(60, 120));
						else if (chance > 35 && chance <= 40) setWeather(weather.storm, rand(90, 160));
						else if (chance > 40 && chance <= 60) setWeather(weather.rain, rand(70, 120));
						else if (chance > 60 && chance <= 85) setWeather(weather.drizzle, rand(60, 900));
						else setWeather(weather.stormy, rand(60, 120));
						break;
					case weather.storm.id:
						if (chance < 5) setWeather(weather.stormy, rand(30, 50));
						else if (chance > 5 && chance <= 65) setWeather(weather.rain, rand(140, 200));
						else if (chance > 65 && chance <= 70) setWeather(weather.heavyrain, rand(80, 150));
						else setWeather(weather.storm, rand(20, 80));
						break;
					case weather.overcast.id:
						if (chance < 5) setWeather(weather.stormy, rand(20, 60));
						else if (chance > 5 && chance <= 45) setWeather(weather.cloudy, rand(100, 200));
						else if (chance > 45 && chance <= 65) setWeather(weather.clear, rand(150, 250));
						else setWeather(weather.overcast, rand(60, 110));
						break;
					case weather.rain.id:
						if (chance < 10) setWeather(weather.drizzle, rand(50, 70));
						else if (chance > 10 && chance <= 15) setWeather(weather.heavyrain, rand(50, 80));
						else if (chance > 15 && chance <= 40) setWeather(weather.overcast, rand(82, 173));
						else if (chance > 40 && chance <= 55) setWeather(weather.misty, rand(25, 55));
						else if (chance > 55 && chance <= 80) setWeather(weather.clear, rand(225, 455));
						else setWeather(weather.rain, rand(80, 120));
						break;
					case weather.heavyrain.id:
						if (chance < 10) setWeather(weather.storm, rand(80, 130));
						else if (chance > 10 && chance <= 65) setWeather(weather.rain, rand(100, 170));
						else if (chance > 65 && chance <= 75) setWeather(weather.misty, rand(15, 40));
						else if (chance > 75 && chance <= 87) setWeather(weather.clear, rand(110, 200));
						else if (chance > 87 && chance <= 90) setWeather(weather.thunder, rand(120, 200));
						else setWeather(weather.heavyrain, rand(50, 100));
						break;
					case weather.misty.id:
						if (chance < 50) setWeather(weather.foggy, rand(22, 33));
						else if (chance > 50 && chance <= 80 && getHour() >= 5 && getHour() <= 16) setWeather(weather.sunny, rand(100, 200));
						else if (chance > 50 && chance <= 80 && getHour() < 5 && getHour() > 16) setWeather(weather.clear, rand(100, 200));
						else setWeather(weather.misty, rand(11, 22));
						break;
					case weather.foggy.id:
						if (chance < 20) setWeather(weather.overcast, rand(80, 130));
						else if (chance > 20 && chance <= 70 && getHour() >= 5 && getHour() <= 16) setWeather(weather.sunny, rand(100, 200));
						else if (chance > 20 && chance <= 70 && getHour() < 5 && getHour() > 16) setWeather(weather.clear, rand(100, 200));
						else setWeather(weather.foggy, rand(11, 22));
						break;
					case weather.drizzle.id:
						if (chance < 15) setWeather(weather.overcast, rand(30, 60));
						else if (chance > 15 && chance <= 40) setWeather(weather.cloudy, rand(90, 180));
						else if (chance > 40 && chance <= 50) setWeather(weather.rain, rand(50, 111));
						else if (chance > 50 && chance <= 65) setWeather(weather.clear, rand(90, 180));
						else setWeather(weather.drizzle, rand(30, 62));
						break;
					case weather.clear.id:
						if (chance < 5) setWeather(weather.overcast, rand(30, 60));
						else if (chance > 5 && chance <= 55 && getHour() >= 5 && getHour() <= 16) setWeather(weather.sunny, rand(100, 200));
						else if (chance > 10 && chance <= 55 && getHour() < 5 && getHour() > 16) setWeather(weather.clear, rand(100, 200));
						else if (chance > 55 && chance <= 65) setWeather(weather.cloudy, rand(100, 200));
						else setWeather(weather.clear, rand(160, 290));
						break;
					case weather.thunder.id:
						if (chance < 50) setWeather(weather.heavyrain, rand(60, 90));
						else if (chance > 50 && chance <= 80) setWeather(weather.storm, rand(80, 120));
						else setWeather(weather.thunder, rand(40, 60));
						break;
					default: setWeather(weather.clear, rand(30, 60)); break;
				}
				break;
			case 3:
				switch (w_manager.curr.id) {
					case weather.sunny.id:
						if (chance <= 25) setWeather(weather.cloudy, rand(120, 220));
						else if (chance > 25 && chance <= 60) setWeather(weather.overcast, rand(90, 280));
						else if (chance > 60 && chance <= 90 && getHour() < 5 && getHour() > 16) setWeather(weather.clear, rand(80, 150));
						else if (chance > 60 && chance <= 90 && getHour() >= 5 && getHour() <= 16) setWeather(weather.sunny, rand(120, 180));
						else setWeather(weather.sunny, rand(22, 44));
						break;
					case weather.cloudy.id:
						if (chance <= 30) setWeather(weather.stormy, rand(100, 200));
						else if (chance > 30 && chance <= 55) setWeather(weather.overcast, rand(90, 220));
						else if (chance > 55 && chance <= 85) setWeather(weather.rain, rand(150, 250));
						else if (chance > 85 && chance <= 90) setWeather(weather.drizzle, rand(70, 120));
						else if (chance > 90 && chance <= 95 && getHour() < 5 && getHour() > 16) setWeather(weather.clear, rand(170, 250));
						else if (chance > 90 && chance <= 95 && getHour() >= 5 && getHour() <= 16) setWeather(weather.sunny, rand(180, 300));
						else setWeather(weather.cloudy, rand(90, 160));
						break;
					case weather.stormy.id:
						if (chance < 15) setWeather(weather.cloudy, rand(90, 120));
						else if (chance > 15 && chance <= 40) setWeather(weather.storm, rand(90, 160));
						else if (chance > 40 && chance <= 70) setWeather(weather.rain, rand(120, 200));
						else if (chance > 70 && chance <= 85) setWeather(weather.drizzle, rand(20, 40));
						else setWeather(weather.stormy, rand(60, 120));
						break;
					case weather.storm.id:
						if (chance < 10) setWeather(weather.stormy, rand(80, 120));
						else if (chance > 10 && chance <= 45) setWeather(weather.rain, rand(180, 250));
						else if (chance > 45 && chance <= 85) setWeather(weather.heavyrain, rand(100, 190));
						else setWeather(weather.storm, rand(20, 80));
						break;
					case weather.overcast.id:
						if (chance < 20) setWeather(weather.stormy, rand(50, 120));
						else if (chance > 20 && chance <= 55) setWeather(weather.cloudy, rand(80, 150));
						else if (chance > 55 && chance <= 60) setWeather(weather.clear, rand(150, 250));
						else setWeather(weather.overcast, rand(40, 90));
						break;
					case weather.rain.id:
						if (chance < 10) setWeather(weather.drizzle, rand(30, 50));
						else if (chance > 10 && chance <= 30) setWeather(weather.heavyrain, rand(100, 200));
						else if (chance > 30 && chance <= 40) setWeather(weather.overcast, rand(52, 173));
						else if (chance > 40 && chance <= 50) setWeather(weather.misty, rand(25, 55));
						else if (chance > 50 && chance <= 65) setWeather(weather.clear, rand(100, 200));
						else setWeather(weather.rain, rand(80, 120));
						break;
					case weather.heavyrain.id:
						if (chance < 15) setWeather(weather.storm, rand(80, 130));
						else if (chance > 15 && chance <= 55) setWeather(weather.rain, rand(100, 170));
						else if (chance > 55 && chance <= 65) setWeather(weather.misty, rand(15, 40));
						else if (chance > 65 && chance <= 70) setWeather(weather.clear, rand(110, 200));
						else if (chance > 70 && chance <= 95) setWeather(weather.thunder, rand(120, 200));
						else setWeather(weather.heavyrain, rand(50, 100));
						break;
					case weather.misty.id:
						if (chance < 25) setWeather(weather.foggy, rand(22, 33));
						else if (chance > 25 && chance <= 55) setWeather(weather.overcast, rand(60, 100));
						else if (chance > 55 && chance <= 75) setWeather(weather.cloudy, rand(60, 100));
						else setWeather(weather.misty, rand(11, 22));
						break;
					case weather.foggy.id:
						if (chance < 20) setWeather(weather.overcast, rand(80, 130));
						else if (chance > 20 && chance <= 40) setWeather(weather.rain, rand(100, 200));
						else if (chance > 40 && chance <= 70) setWeather(weather.heavyrain, rand(100, 200));
						else setWeather(weather.foggy, rand(11, 22));
						break;
					case weather.drizzle.id:
						if (chance < 15) setWeather(weather.overcast, rand(30, 60));
						else if (chance > 15 && chance <= 55) setWeather(weather.rain, rand(90, 180));
						else if (chance > 55 && chance <= 60) setWeather(weather.clear, rand(60, 100));
						else if (chance > 60 && chance <= 70) setWeather(weather.cloudy, rand(40, 90));
						else setWeather(weather.drizzle, rand(30, 62));
						break;
					case weather.clear.id:
						if (chance < 25) setWeather(weather.overcast, rand(80, 140));
						else if (chance > 25 && chance <= 45 && getHour() >= 5 && getHour() <= 16) setWeather(weather.sunny, rand(100, 200));
						else if (chance > 25 && chance <= 45 && getHour() < 5 && getHour() > 16) setWeather(weather.clear, rand(100, 200));
						else if (chance > 45 && chance <= 70) setWeather(weather.cloudy, rand(100, 200));
						else if (chance > 70 && chance <= 90) setWeather(weather.drizzle, rand(30, 80));
						else setWeather(weather.clear, rand(120, 200));
						break;
					case weather.thunder.id:
						if (chance < 30) setWeather(weather.heavyrain, rand(60, 90));
						else if (chance > 30 && chance <= 60) setWeather(weather.storm, rand(80, 120));
						else setWeather(weather.thunder, rand(40, 60));
						break;
					default: setWeather(weather.clear, rand(30, 60)); break;
				}
				break;
			case 4:
				switch (w_manager.curr.id) {
					case weather.sunny.id:
						if (chance <= 40) setWeather(weather.cloudy, rand(120, 220));
						else if (chance > 40 && chance <= 80) setWeather(weather.overcast, rand(90, 280));
						else if (chance > 80 && chance <= 90 && getHour() < 5 && getHour() > 16) setWeather(weather.clear, rand(100, 300));
						else if (chance > 80 && chance <= 90 && getHour() >= 5 && getHour() <= 16) setWeather(weather.sunny, rand(100, 300));
						else setWeather(weather.sunny, rand(22, 44));
						break;
					case weather.cloudy.id:
						if (chance <= 15) setWeather(weather.overcast, rand(90, 220));
						else if (chance > 15 && chance <= 17) setWeather(weather.rain, rand(30, 80));
						else if (chance > 17 && chance <= 20) setWeather(weather.drizzle, rand(30, 80));
						else if (chance > 20 && chance <= 30 && getHour() < 5 && getHour() > 16) setWeather(weather.clear, rand(100, 300));
						else if (chance > 20 && chance <= 30 && getHour() >= 5 && getHour() <= 16) setWeather(weather.sunny, rand(100, 300));
						else if (chance > 30 && chance <= 60) setWeather(weather.snow, rand(180, 300));
						else if (chance > 60 && chance <= 70) setWeather(weather.sstorm, rand(90, 200));
						else setWeather(weather.cloudy, rand(90, 160));
						break;
					case weather.overcast.id:
						if (chance < 20) setWeather(weather.snow, rand(50, 120));
						else if (chance > 20 && chance <= 45) setWeather(weather.cloudy, rand(100, 200));
						else if (chance > 45 && chance <= 60) setWeather(weather.clear, rand(150, 250));
						else if (chance > 60 && chance <= 70) setWeather(weather.sstorm, rand(150, 250));
						else setWeather(weather.overcast, rand(40, 90));
						break;
					case weather.rain.id:
						if (chance < 10) setWeather(weather.drizzle, rand(30, 50));
						else if (chance > 10 && chance <= 20) setWeather(weather.snow, rand(100, 200));
						else if (chance > 20 && chance <= 30) setWeather(weather.overcast, rand(52, 173));
						else if (chance > 30 && chance <= 55) setWeather(weather.misty, rand(25, 55));
						else if (chance > 55 && chance <= 80) setWeather(weather.clear, rand(225, 455));
						else setWeather(weather.rain, rand(20, 40));
						break;
					case weather.misty.id:
						if (chance < 30) setWeather(weather.foggy, rand(22, 33));
						else if (chance > 30 && chance <= 50) setWeather(weather.snow, rand(100, 200));
						else if (chance > 50 && chance <= 80 && getHour() >= 5 && getHour() <= 16) setWeather(weather.sunny, rand(100, 200));
						else if (chance > 50 && chance <= 80 && getHour() < 5 && getHour() > 16) setWeather(weather.clear, rand(100, 200));
						else setWeather(weather.misty, rand(11, 22));
						break;
					case weather.foggy.id:
						if (chance < 20) setWeather(weather.overcast, rand(80, 130));
						else if (chance > 20 && chance <= 70 && getHour() >= 5 && getHour() <= 16) setWeather(weather.sunny, rand(100, 200));
						else if (chance > 20 && chance <= 70 && getHour() < 5 && getHour() > 16) setWeather(weather.clear, rand(100, 200));
						else setWeather(weather.foggy, rand(11, 22));
						break;
					case weather.drizzle.id:
						if (chance < 20) setWeather(weather.overcast, rand(30, 60));
						else if (chance > 20 && chance <= 25) setWeather(weather.rain, rand(90, 120));
						else if (chance > 25 && chance <= 40) setWeather(weather.snow, rand(90, 180));
						else if (chance > 40 && chance <= 65) setWeather(weather.clear, rand(90, 150));
						else setWeather(weather.drizzle, rand(30, 62));
						break;
					case weather.clear.id:
						if (chance < 10) setWeather(weather.overcast, rand(30, 60));
						else if (chance > 10 && chance <= 55 && getHour() >= 5 && getHour() <= 16) setWeather(weather.sunny, rand(100, 200));
						else if (chance > 10 && chance <= 55 && getHour() < 5 && getHour() > 16) setWeather(weather.clear, rand(100, 200));
						else if (chance > 55 && chance <= 65) setWeather(weather.cloudy, rand(100, 200));
						else if (chance > 65 && chance <= 75) setWeather(weather.snow, rand(100, 200));
						else setWeather(weather.clear, rand(160, 290));
						break;
					case weather.snow.id:
						if (chance < 20) setWeather(weather.sstorm, rand(80, 130));
						else if (chance > 20 && chance <= 25) setWeather(weather.rain, rand(15, 50));
						else if (chance > 25 && chance <= 40) setWeather(weather.clear, rand(90, 150));
						else if (chance > 40 && chance <= 65) setWeather(weather.overcast, rand(140, 320));
						else if (chance > 60 && chance <= 85) setWeather(weather.cloudy, rand(120, 200));
						else setWeather(weather.snow, rand(30, 62));
						break;
					case weather.sstorm.id:
						if (chance < 10) setWeather(weather.overcast, rand(30, 60));
						else if (chance > 10 && chance <= 35) setWeather(weather.snow, rand(90, 120));
						else if (chance > 35 && chance <= 45) setWeather(weather.cloudy, rand(90, 180));
						else if (chance > 45 && chance <= 65) setWeather(weather.overcast, rand(90, 150));
						else setWeather(weather.sstorm, rand(40, 120));
						break;
					default: setWeather(weather.clear, rand(30, 60)); break;
				}
				break;
		}
		dom.d_weathert.style.backgroundColor = dom.d_weathert.style.color = 'inherit';
		dom.d_weathert.innerHTML = w_manager.curr.name
		dom.d_weathert.style.color = w_manager.curr.c ? w_manager.curr.c : 'inherit'; dom.d_weathert.style.backgroundColor = w_manager.curr.bc ? w_manager.curr.bc : 'inherit';
		switch (w_manager.curr.id) {
			case weather.sunny.id:
				if ((getHour() > 4 && getMinute() >= 30) && getHour() <= 6) { dom.d_weathert.innerHTML = 'Sunrise'; dom.d_weathert.style.color = '#ffef33'; dom.d_weathert.style.backgroundColor = '#bf495f' }
				else if (getHour() >= 20 && getHour() <= 21) { dom.d_weathert.innerHTML = 'Dusk'; dom.d_weathert.style.color = 'yellow'; dom.d_weathert.style.backgroundColor = '#e8421c' }
				else if (getHour() >= 22 || getHour() <= 3) { dom.d_weathert.innerHTML = 'Bright Night'; dom.d_weathert.style.color = 'cornflowerblue'; dom.d_weathert.style.backgroundColor = '#1d4677' }
				break;
			case weather.cloudy.id:
				if ((getHour() > 4 && getMinute() >= 30) && getHour() <= 6) { dom.d_weathert.innerHTML = 'Sunrise'; dom.d_weathert.style.color = '#ffef33'; dom.d_weathert.style.backgroundColor = '#bf495f' }
				else if (getHour() >= 22 || getHour() <= 3) { dom.d_weathert.innerHTML = 'Night'; dom.d_weathert.style.color = '#69e1e6'; dom.d_weathert.style.backgroundColor = '#091523' }
				break;
			case weather.overcast.id:
				if (getHour() >= 18 && getHour() <= 21) { dom.d_weathert.innerHTML = 'Dusk'; dom.d_weathert.style.color = 'yellow'; dom.d_weathert.style.backgroundColor = '#e8421c' }
				else if (getHour() >= 22 || getHour() <= 3) { dom.d_weathert.innerHTML = 'Night'; dom.d_weathert.style.color = '#69e1e6'; dom.d_weathert.style.backgroundColor = '#091523' }
				break;
			case weather.rain.id:
				if (getHour() >= 22 || getHour() <= 3) { dom.d_weathert.innerHTML = 'Rainy Night'; dom.d_weathert.style.color = 'cyan'; dom.d_weathert.style.backgroundColor = '#111f63' }
				break;
			case weather.misty.id:
				if ((getHour() > 4 && getMinute() >= 30) && getHour() <= 6) { dom.d_weathert.innerHTML = 'Misty Morning'; dom.d_weathert.style.color = '#ffb91d'; dom.d_weathert.style.backgroundColor = '#926b64' }
				else if (getHour() >= 18 && getHour() <= 21) { dom.d_weathert.innerHTML = 'Dusk'; dom.d_weathert.style.color = 'yellow'; dom.d_weathert.style.backgroundColor = '#e8421c' }
				else if (getHour() >= 22 || getHour() <= 3) { dom.d_weathert.innerHTML = 'Misty Night'; dom.d_weathert.style.color = '#1f69a9'; dom.d_weathert.style.backgroundColor = '#2c3044' }
				break;
			case weather.foggy.id:
				if ((getHour() > 4 && getMinute() >= 30) && getHour() <= 6) { dom.d_weathert.innerHTML = 'Foggy Morning'; dom.d_weathert.style.color = '#ffc94f'; dom.d_weathert.style.backgroundColor = '#8e8280' }
				else if (getHour() >= 18 && getHour() <= 21) { dom.d_weathert.innerHTML = 'Dusk'; dom.d_weathert.style.color = 'yellow'; dom.d_weathert.style.backgroundColor = '#e8421c' }
				else if (getHour() >= 22 || getHour() <= 3) { dom.d_weathert.innerHTML = 'Foggy Night'; dom.d_weathert.style.color = '#6dbbff'; dom.d_weathert.style.backgroundColor = '#273267' }
				break;
			case weather.drizzle.id:
				if (getHour() >= 22 && getHour() <= 3) { dom.d_weathert.innerHTML = 'Night Drizzle'; dom.d_weathert.style.color = 'cyan'; dom.d_weathert.style.backgroundColor = '#111f63' }
				break;
			case weather.clear.id:
				if ((getHour() > 4 && getMinute() >= 30) && getHour() <= 6) { dom.d_weathert.innerHTML = 'Sunrise'; dom.d_weathert.style.color = '#ffef33'; dom.d_weathert.style.backgroundColor = '#9c3f3f' }
				else if (getHour() >= 20 && getHour() <= 21) { dom.d_weathert.innerHTML = 'Dusk'; dom.d_weathert.style.color = 'yellow'; dom.d_weathert.style.backgroundColor = '#e8421c' }
				else if (getHour() >= 22 || getHour() <= 3) { dom.d_weathert.innerHTML = 'Starry Night'; dom.d_weathert.style.color = '#ffff66'; dom.d_weathert.style.backgroundColor = '#00397b' }
				break;
		}
	} w_manager.curr.ontick(); onSeasonTick(ses);
}

function setWeather(w, d) {
	w_manager.curr = w; w_manager.duration = d; dom.d_weathert.style.backgroundColor = dom.d_weathert.style.color = 'inherit';
	dom.d_weathert.innerHTML = w_manager.curr.name;
	//empty(dom.d_weather); icon(dom.d_weather,1,1,32,32)
	if (w.frain === true) { global.flags.israin = true; global.flags.issnow = false; dom.d_anomaly.innerHTML = '🌧' } else if (w.fsnow === true) { global.flags.issnow = true; global.flags.israin = false; dom.d_anomaly.innerHTML = '❄️' } else { global.flags.israin = false; dom.d_anomaly.innerHTML = ''; global.flags.issnow = false }
	if (w.c) dom.d_weathert.style.color = w.c; if (w.bc) dom.d_weathert.style.backgroundColor = w.bc;
} setWeather(weather.clear, 600);

function isWeather(weather) {
	return w_manager.curr.id === weather.id
} wManager(); dom.d_time.innerHTML = '<small>' + getDay(global.flags.tmmode) + '</small> ' + timeDisp(time)

function onSeasonTick(season) {
	switch (season) {
		case 4:
			if (global.stat.wsnrest > 0) { global.stat.wsnrest--; return }
			if (!global.flags.inside) {
				if (!effect.cold.active) giveEff(you, effect.cold, 5);
				else {
					if (w_manager.curr.id === weather.snow.id || w_manager.curr.id === weather.sstorm.id) { effect.cold.duration += rand(3, 7); giveSkExp(skl.coldr, .02) } else effect.cold.duration += rand(1, 3)
					if (effect.wet.active) {
						effect.cold.duration += rand(5, 10); effect.wet.duration -= 5;
					}
				}
			}
			if (global.stat.wsnburst <= 0) {
				global.stat.wsnburst = rand(200, 1300)
				global.stat.wsnrest = rand(20, 100)
			}
			global.stat.wsnburst--
			break
	}
}

function getMinute() { return time.minute % 60 }
function getHour() { return time.hour % 24; }
function getDay(n) { return n === 1 ? global.text.d_l[time.day % 7] : (n === 2 ? global.text.d_s[time.day % 7] : global.text.d_j[time.day % 7]) }
function getMonth() { return time.month % 12 + 1; }
function getYear() { return time.year; }
function getLunarPhase() { return (time.day % 62.64 / 7.83) << 0 }
function getSeason(flag) {
	if (getMonth() > 2 && getMonth() <= 5) return !flag ? 1 : "Spring";
	else if (getMonth() > 5 && getMonth() <= 8) return !flag ? 2 : "Summer";
	else if (getMonth() > 8 && getMonth() <= 11) return !flag ? 3 : "Autumn";
	else return !flag ? 4 : "Winter";
}

function timeConv(chrono) {
	chrono.year = (chrono.minute / (518400)) << 0;
	chrono.month = (chrono.minute / (43200)) << 0;
	chrono.day = (chrono.minute / (1440)) << 0;
	chrono.hour = (chrono.minute / 60) << 0;
}

function timeDisp(time, future) {
	let time_t = time;
	if (future) { time_t = copy(time); time_t.minute += future; }
	timeConv(time_t);
	let mm = time_t.minute % 60; if (mm < 10) mm = '0' + mm;
	return time_t.year + '/' + ((time_t.month % 12) + 1) + '/' + ((time_t.day % 30) + 1) + ' ' + time_t.hour % 24 + ':' + mm;
}

function dropC(crt, t) {
	t = t || 1;
	for (let j in crt.drop) if (!crt.drop[j].cond || (!!crt.drop[j].cond && crt.drop[j].cond() === true)) if (random() < crt.drop[j].chance + (crt.drop[j].chance / 100 * you.luck)) {
		giveItem(crt.drop[j].item, !!crt.drop[j].min ? rand(crt.drop[j].min, crt.drop[j].max) : t); if (you.mods.lkdbt > 0 && random() < you.mods.lkdbt) giveItem(crt.drop[j].item);
		let d = global.drdata["d" + crt.id]; if (!d) { d = global.drdata["d" + crt.id] = []; d[j] = 1 } else d[j] = 1;
	}
	for (let jj in global.wdrop) if (random() < global.wdrop[jj].c + (global.wdrop[jj].c / 100 * you.luck)) giveItem(global.wdrop[jj].item, t);
	for (let obj in global.current_z.drop) if (!global.current_z.drop[obj].cond || (!!global.current_z.drop[obj].cond && global.current_z.drop[obj].cond() === true)) if (random() < global.current_z.drop[obj].c + (global.current_z.drop[obj].c / 100 * you.luck) + (global.current_z.drop[obj].c / 75 * skl.hst.lvl)) { giveItem(global.current_z.drop[obj].item, t); giveSkExp(skl.hst, .2) }
	if (crt.rnk < 22) { let ar = (crt.rnk - 1) / 3 << 0; for (let a in global.rdrop[ar]) if (random() < global.rdrop[ar][a].c + (global.rdrop[ar][a].c / 100 * you.luck)) giveItem(global.rdrop[ar][a].item, t) }
}

function dropread() {
	let t = Object.keys(global.drdata); let ids = []; for (let a in t) ids[a] = Number(t[a].substring(1))
	for (let a in ids) {
		for (let b in creature) {
			if (ids[a] === creature[b].id) {
				let dt = global.drdata[Object.keys(global.drdata)[a]]
				for (let c = 0; c < dt.length; c++) { if (dt[c]) console.log(creature[b].drop[c].item.name); else console.log("??????") }
			}
		}
	}
}

function roll(itm, c, mi, ma) {
	mi = mi || 1;
	let r = random();
	if (r < c + (c / 100 * you.luck)) giveItem(itm, (!!ma ? rand(mi, ma) : rand(mi)));
}

function handStr() {
	return (5000 + (you.str * 800)) * (1 + you.lvl * .03) * (1 + skl.unc.lvl * .1 + skl.fgt.lvl * .08 + skl.tghs.lvl * .11) / 1000 << 0
}

function format3(a) {
	if (a.length > 3) {
		let b = new String();
		for (let i = 0; i < a.length; i++) { if ((a.length - i) % 3 == 0 && i > (a > 0 ? 0 : 1)) b += ','; b += a[i] }
		return b;
	} return a;
}

function formatw(a) {
	let b = (Math.log(Math.abs(a + 1)) * 0.43429448190325178 | 0) + 1;
	if (b > 3) { let n = a / 1000 ** ((b - 1) / 3 << 0) * 10; return ((n - ~~n >= 0.5 ? 1 : 0) + ~~n) / 10 + global.text.nt[((b - 4) / 3 << 0)] } return a;
}

function d_loc(text) {
	let txt; if (global.flags.inside === true) txt = '|' + text + '|'; else txt = text
	dom.d_lctt.innerHTML = txt; global.current_l.locn = text;
}

function rfeff(what) {
	let t = '';
	for (let a in what.sector) if (what.sector[a].effectors)
		for (let b in what.sector[a].effectors) t += '<span style="color:' + what.sector[a].effectors[b].e.c + ';font-size:1.2em">&nbsp' + what.sector[a].effectors[b].e.x + '<span>';
	if (what.effectors) for (let a in what.effectors) t += '<span style="color:' + what.effectors[a].e.c + ';font-size:1.2em">&nbsp' + what.effectors[a].e.x + '<span>';
	dom.d_lctte.innerHTML = t;
}

function lvlup(p, t) {
	if (t === 0) {
		p.hp = p.hp_r; p.str = p.str_r; p.agl = p.agl_r; p.spd = p.spd_r;
	} else {
		t = t || 1
		p.lvl += t;
		let sb = randf(t * p.stat_p[1], 2 * t * p.stat_p[1]); p.str_r += sb;
		let sa = randf(t * p.stat_p[2], 2 * t * p.stat_p[2]); p.agl_r += sa;
		let si = randf(t * p.stat_p[3], 2 * t * p.stat_p[3]); p.int_r += si;
		let hpp; if (p.id === you.id) hpp = Math.round(rand(1.4 * Math.log(p.lvl) * t * p.stat_p[0], 1.8 * p.lvl * t * p.stat_p[0]));
		else hpp = Math.round(rand(1.8 * Math.log(p.lvl) * t * p.stat_p[0], 2.2 * p.lvl * t * p.stat_p[0]));
		p.hp_r += hpp; p.hpmax += hpp; p.hp += hpp; if (p.id !== you.id) p.hp = p.hpmax = p.hp_r;
		if (p.id != you.id) p.exp = p.exp * (1 + t / 5) + 1 << 0;
		else {
			dom.d3.update();
			msg("Leveled Up " + you.lvl, 'orange');
			msg('STR +' + Math.round(sb), 'darkturquoise');
			msg_add(' | AGL +' + Math.round(sa), 'darkturquoise');
			msg_add(' | INT +' + Math.round(si), 'darkturquoise');
			msg_add(' | HP +' + hpp, 'darkturquoise');
			you.expnext_t = you.expnext();
			if (you.eqp[0].id === 10000) { you.eqp[0].cls[2] = you.lvl / 4 << 0; you.eqp[0].aff[0] = you.lvl / 5 << 0; you.eqp[0].ctype = 2 }
			if (global.stat.deadt < 1 && you.lvl >= 20) giveTitle(ttl.ndthextr)
		}
	} p.stat_r(); update_d();
}

function giveExp(exp, r, g, b) {
	if (!r) exp = Math.round((exp * you.exp_t * (0.4 + you.efficiency() * 0.6))) - (you.lvl - 1); exp = exp <= 0 ? 1 : exp;
	if (!b) { if (global.flags.m_blh === false) if (!g) { msg('EXP: +' + formatw(exp), 'hotpink'); global.stat.exptotl += exp } } else { msg('EXP: +' + formatw(exp), 'hotpink'); global.stat.exptotl += exp }
	if (you.exp + exp < you.expnext_t) you.exp += exp;
	else {
		let extra = (you.exp + exp) - you.expnext_t;
		you.exp = 0;
		lvlup(you);
		giveExp(extra, true, true);
	}
	dom.d5_2_1.update();
}

function giveSkExp(skl, exp, res) {
	exp = res === false ? exp : exp * skl.p; //skl.lastupd = time.minute+2;
	if (skl.exp + exp < skl.expnext_t) skl.exp += exp;
	else {
		let extra = (skl.exp + exp) - skl.expnext_t;
		skl.exp = 0; skl.lvl++; global.stat.slvs++;
		if (!scanbyid(you.skls, skl.id)) { you.skls.push(skl); msg('<span style="text-shadow:cyan 0px 0px 2px">New Skill Unlocked! <span style="text-shadow:red 0px 0px 2px;color:orange">"' + (!!skl.bname ? skl.bname : skl.name) + '"</span></span>', 'aqua', skl, 6); if (!global.flags.sklu) { dom.ct_bt2.innerHTML = 'skills'; global.flags.sklu = true } }
		else { msg('Skill <span style="color:tomato">\'' + (!!skl.bname ? skl.bname : skl.name) + '\'</span> Leveled Up: ' + skl.lvl, 'deepskyblue', skl, 6); } skl.onLevel();
		skl.expnext_t = skl.expnext();
		if (!!skl.mlstn) for (let ss = 0; ss < skl.mlstn.length; ss++) if (skl.mlstn[ss].lv === skl.lvl && skl.mlstn[ss].g === false) { msg("NEW PERK UNLOCKED " + '<span style="color:tomato">("' + skl.name + '")<span style="color:orange">lvl: ' + skl.mlstn[ss].lv + '</span></span>', 'lime', { x: skl.name, y: 'Perk lvl ' + skl.mlstn[ss].lv + ': <span style="color:yellow">' + skl.mlstn[ss].p + '</span>' }, 7); skl.mlstn[ss].f(); skl.mlstn[ss].g = true };
		giveSkExp(skl, extra, false);
	} skl.onGive(exp);
}

function giveTitle(title, lv) {
	if (title.have === false) {
		global.titles.push(title); if (title.id !== 0) global.titlese.push(title); you.title = title; title.have = true; if (!title.tget && title.talent) { title.talent(); title.tget = true }
		title.onGet();
		for (let x in global.ttlschk) global.ttlschk[x]();
		if (!lv) { msg('New Title Earned! ' + col('"' + title.name + '"', 'orange'), 'cyan', title, 5); dom.d3.update(); }
	} else return;
}

function isort(type, flags) {
	empty(dom.inv_con);
	if (type === 1) for (let k = 0; k < inv.length; k++) renderItem(inv[k]); else {
		global.sinv = [];
		for (let k = 0; k < inv.length; k++) if (type === inv[k].stype) { global.sinv.push(inv[k]); renderItem(inv[k]); }
	}
	global.sm = type; if (flags && flags.tr) iftrunkopenc(1);
}

function rsort(type) {
	empty(dom.ct_bt1_1);
	if (type === 0 || !type) for (let ind in global.rec_d) renderRcp(global.rec_d[ind]); else {
		global.srcp = [];
		for (let k = 0; k < global.rec_d.length; k++) if (type === global.rec_d[k].type) global.srcp.push(global.rec_d[k]);
		for (let k = 0; k < global.srcp.length; k++) renderRcp(global.srcp[k])
	}
	global.rm = type;
}

function objempty(obj) { for (let a in obj) return false }

function effAct_test() {
	for (let index in you.eff) you.eff[index].use(creature.bat);
}

function canRead() {
	if (!global.flags.civil || global.flags.civil.btl) { msg('It is too dangerous to read right now', 'red'); return false }
	if (global.flags.rdng) { msg("You\'re already reading", 'orange'); return false }
	if (global.flags.work) { msg("You have a job to do", 'orange'); return false }
	if (global.flags.busy) { msg("You'll have to stop what you're doing first", 'orange'); return false }
	if (global.flags.isshop) { msg("This isn\'t the library", 'orange'); return false }
	if (global.flags.sleepmode) { msg("You can't read while sleeping", 'orange'); return false }
	return true;
}

function canScout(what) {
	if (what.data.scoutm) {
		for (let a in what.scout) if (what.data.gets[a] !== true && (!what.scout[a].cond || what.scout[a].cond() === true)) return 1; return 2
	} return 3
}

function scoutGeneric(chs) {
	if (global.flags.isdark && !cansee()) return msg('You can\'t see anything', 'grey')
	let sct = select(chs.scout); let idx = chs.scout.indexOf(sct); giveSkExp(skl.scout, .3); chs.data.scout += 2 * (1 + skl.scout.lvl * .2); let m = 1;
	if (chs.data.scout >= chs.data.scoutm) { m = 5; chs.data.scout = 0 }
	if ((!sct.cond || sct.cond() === true) && !chs.data.gets[idx] && random() <= sct.c * m * (1 + skl.scout.lvl * .15) * (1 + chs.data.gotmod * .2)) { global.stat.dsct++; chs.data.gotmod++; sct.f(); giveSkExp(skl.scout, (sct.exp ? sct.exp : .5 / sct.c)) }
	let t = 2; for (let a in global.current_l.sector) { let m = canScout(global.current_l.sector[a]); if (m === 1) t = m }
	if (canScout(global.current_l) >= 2 && t >= 2) { deactivateAct(act.scout); msg('There doesn\'t seem to be anything of interest left in this area') }
}

function disassembleGeneric(obj) {
	for (let a in obj.dss) {
		let am = obj.dss[a].amount;
		if (obj.dss[a].q) am = (am + am * (obj.dss[a].q * skl.dssmb.lvl)) << 0;
		if (obj.dss[a].max) if (am > obj.dss[a].max) am = obj.dss[a].max;
		let c = 1; if (obj.slot) c = obj.dp / obj.dpmax; am = Math.ceil(am / (2 - c));
		giveItem(obj.dss[a].item, am)
	} giveSkExp(skl.dssmb, (2 ** obj.rar || 1) * 5 - 9.5); global.stat.dsst++;
	if (obj.slot) removeItem(obj); else { obj.amount--; if (obj.amount <= 0) removeItem(obj); else if (obj.stype === global.sm) updateInv(global.sinv.indexOf(obj)); else if (global.sm === 1) updateInv(inv.indexOf(obj)) }
}

global.text.ssns = ['春', '夏', '秋', '冬']

function wdrseason(flag) {
	let s; s = !flag ? getSeason(true) : global.text.ssns[getSeason() - 1]; dom.d_weathers.innerHTML = '[' + s + ']';
	switch (getSeason()) {
		case 1: dom.d_weathers.style.color = 'springgreen'; dom.d_weathers.style.backgroundColor = '#253'; break
		case 2: dom.d_weathers.style.color = 'lime'; dom.d_weathers.style.backgroundColor = '#141'; break
		case 3: dom.d_weathers.style.color = 'yellow'; dom.d_weathers.style.backgroundColor = '#631'; break
		case 4: dom.d_weathers.style.color = 'ghostwhite'; dom.d_weathers.style.backgroundColor = '#556'; break
	}
}

function ontick() {
	global.stat.tick++;
	time.minute += global.timescale; wManager();
	for (let a in plans[0]) plans[0][a].f();
	dom.d_time.innerHTML = '<small>' + getDay(global.flags.tmmode || 2) + '</small> ' + timeDisp(time); //global.stat.seed1=(random()*7e+7<<7)%7&7
	global.current_l.onStay(); runEffectors(global.current_l.effectors)
	for (let a in sectors) { sectors[a].onStay(); runEffectors(sectors[a].effectors) }
	giveSkExp(skl.aba, .004);
	let timeh = (time.minute / DAY) << 0; if (global.timehold !== timeh) {
		global.timehold = timeh; //proc when day passes
		for (let a in plans[1]) plans[1][a].f();
		for (let vnd in vendor) vendor[vnd].onDayPass();
		empty(dom.d_moon); dom.d_moon.innerHTML = global.text.lunarp[getLunarPhase()][0]; addDesc(dom.d_moon, null, 2, 'Lunar Phase', global.text.lunarp[getLunarPhase()][1])
		wdrseason(global.flags.ssngaijin); if (getSeason() === 4) global.flags.iscold = true; else global.flags.iscold = false; global.offline_evil_index += .00008
		///////////////////////////////// 
		let timew = (time.minute / WEEK) << 0; if (global.timewold !== timew) {
			global.timewold = timew; //proc when week passes
			for (let a in plans[2]) plans[2][a].f();
		}
	}
	let h = getHour();
	if (h > 5 && h < 22) { global.flags.isday = true; dom.d_moon.style.display = 'none' } else { if (global.flags.inside === false && random() < .00002 * you.mods.stdstps) { msg('A star particle landed on you!', 'gold', null, null, 'darkblue'); giveItem(item.stdst) } global.flags.isday = false; dom.d_moon.style.display = '' }
	for (let g = 0; g < you.eff.length; g++) if (you.eff[g].type === 3 || you.eff[g].type === 5 || you.eff[g].type === 6) you.eff[g].use(you.eff[g].y, you.eff[g].z);
	for (let g = 0; g < global.current_m.eff.length; g++) if (global.current_m.eff[g].type === 3 || global.current_m.eff[g].type === 5 || global.current_m.eff[g].type === 6) global.current_m.eff[g].use(global.current_m.eff[g].y, global.current_m.eff[g].z);
	if (global.flags.btl === true) timers.btl = setTimeout(fght(you, global.current_m), 1000 / global.fps); else giveSkExp(skl.mdt, .0065 * (1 + skl.ptnc.lvl * .15) * (effect.incsk.active === true ? 2 : 1))
	for (let obj in furn) furn[obj].use();
	//for(let q in qsts) qsts[q].tracker();
	if (you.sat > 0) {
		let lose = you.mods.sdrate
		if (global.flags.iswet === true) lose *= (3 / (1 + (skl.abw.lvl * .03)))
		if (global.flags.iscold === true) lose += effect.cold.duration / 1000 / (1 + skl.coldr.lvl * .05);
		you.sat -= lose
	} else giveSkExp(skl.fmn, .1);
	if (global.flags.sleepmode) global.stat.timeslp += global.timescale;
	if (random() < .00000001) { let au = new Audio("laugh6.wav"); au.play() }
	dom.d5_3_1.update();
}

(function update() {
	setTimeout(function () { update(); ontick(); }, 1000 / global.fps);
})();

function select(arr) {
	return arr[rand(arr.length - 1)];
}

function nograd(s) {
	if (s === true) {
		for (let i = 0; i < document.getElementsByClassName('d2').length; i++) document.getElementsByClassName('d2')[i].style.background = '#0e574b';
		for (let i = 0; i < document.getElementsByClassName('d3').length; i++) document.getElementsByClassName('d3')[i].style.background = '#0e574b';
		for (let i = 0; i < document.getElementsByClassName('hp').length; i++) document.getElementsByClassName('hp')[i].style.background = '#91e6b6';
		for (let i = 0; i < document.getElementsByClassName('exp').length; i++) document.getElementsByClassName('exp')[i].style.background = '#ea9c83';
		for (let i = 0; i < document.getElementsByClassName('en').length; i++) document.getElementsByClassName('en')[i].style.background = '#4f3170';
		dom.inv_ctx.style.background = dom.inv_control_b.style.background = dom.ctrmg.style.background = '#00224e'; dom.d7m_c.style.background = '#392c72';
		for (let i = 0; i < document.styleSheets[0].rules.length; i++) if (document.styleSheets[0].rules[i].selectorText == ".opt_c:hover, .ct_bts:hover, .chs:hover, .bts:hover, .bbts:hover, .bts_b:hover, .inv_slot:hover, .bts_m:hover") document.styleSheets[0].rules[i].style.background = '#0e574b'; global.flags.grd_s = false;
	}
	else {
		for (let i = 0; i < document.getElementsByClassName('d2').length; i++) document.getElementsByClassName('d2')[i].style.background = 'linear-gradient(90deg,rgb(25,129,108),rgb(1,41,39))';
		for (let i = 0; i < document.getElementsByClassName('d3').length; i++) document.getElementsByClassName('d3')[i].style.background = 'linear-gradient(90deg,rgb(25,129,108),rgb(1,41,39))';
		for (let i = 0; i < document.getElementsByClassName('hp').length; i++) document.getElementsByClassName('hp')[i].style.background = 'linear-gradient(90deg,rgb(254,239,157),rgb(45,223,206))';
		for (let i = 0; i < document.getElementsByClassName('exp').length; i++) document.getElementsByClassName('exp')[i].style.background = 'linear-gradient(90deg,rgb(254,239,157),rgb(219,119,158))';
		for (let i = 0; i < document.getElementsByClassName('en').length; i++) document.getElementsByClassName('en')[i].style.background = 'linear-gradient(270deg,rgb(124,68,112),rgb(29,29,113))';
		dom.inv_ctx.style.background = dom.inv_control_b.style.background = dom.ctrmg.style.background = 'linear-gradient(90deg,rgb(0,5,51),rgb(0,65,107))'; dom.d7m_c.style.background = 'linear-gradient(270deg,rgb(84,28,112),rgb(29,62,116))';
		for (let i = 0; i < document.styleSheets[0].rules.length; i++) if (document.styleSheets[0].rules[i].selectorText == ".opt_c:hover, .ct_bts:hover, .chs:hover, .bts:hover, .bbts:hover, .bts_b:hover, .inv_slot:hover, .bts_m:hover") document.styleSheets[0].rules[i].style.background = 'linear-gradient(90deg,rgb(25,129,108),rgb(1,41,39))'; global.flags.grd_s = true;
	}
}

function reduce(itm, am) { if (am) { itm.amount = itm.amount - am <= 0 ? 0 : itm.amount - am } if (itm.amount <= 0) { removeItem(itm); updateTrunkLeftItem(itm, true) } else if (global.sm === 1) updateInv(inv.indexOf(itm)); else if (global.sm === itm.stype) updateInv(global.sinv.indexOf(itm)); updateTrunkLeftItem(itm) }
function cansee() { if ((global.flags.isdark && you.mods.light > 0) || skl.ntst.lvl >= 12) return true }

function col(txt, c, bc) {
	let cc; let bcc;
	if (c) cc = 'color:' + c + ';';
	if (bc) bcc = 'background-color:' + bc + ';';
	return '<span' + (c ? (' style="' + cc + (bc ? bcc : '') + '"') : '') + '>' + txt + '</span>'
}

function usePlayerWeaponSkill() {
	switch (you.eqp[0].wtype) {
		case 0: skl.unc.use(); break;
		case 1: skl.srdc.use(); break;
		case 2: skl.axc.use(); break;
		case 3: skl.knfc.use(); break;
		case 4: skl.plrmc.use(); break;
		case 5: skl.hmrc.use(); break;
		case 6: skl.stfc.use(); break;
	}
}

function printBodyPartHit(partNumber) {
	switch (partNumber) {
		case 2: msg_add(' (head)', 'orange'); break;
		case 3: msg_add(' (body)', 'orange'); break;
		case 4: msg_add(' (L hand)', 'orange'); break;
		case 5: msg_add(' (R hand)', 'orange'); break;
		case 6: msg_add(' (legs)', 'orange'); break;
	}
}

function printCritIfCrit() {
	if (global.flags.crti) { msg_add(' CRIT! ', 'yellow'); global.flags.crti = false }
}

function printDamageNumber(ddmg) {
	let col; let bcol = ''; let shd = '';
	switch (global.atype_d) {
		case 0: col = 'pink'; break;
		case 1: col = 'lime'; break;
		case 2: col = 'yellow'; break;
		case 3: col = 'orange'; bcol = 'crimson'; break;
		case 4: col = 'cyan'; break;
		case 5: col = 'lightgoldenrodyellow'; shd = "gold 0px 0px 5px"; break;
		case 6: col = 'thistle'; shd = "blueviolet 0px 0px 5px"; break;
	}
	if (ddmg > 9999) formatw(ddmg);
	msg_add(ddmg, col, bcol, shd);
}

function printHitMessage(attackerName, ddmg, targetsPlayer) {
	if (global.mabl.id === 0) msg(attackerName + (targetsPlayer === true ? global.mabl.atrg : global.mabl.btrg));
	else msg((targetsPlayer === true ? attackerName : '') + (targetsPlayer === true ? global.mabl.atrg : ('You ' + global.mabl.btrg)));
	printHitMessageResult(ddmg, targetsPlayer);
}

function printMultihitMessage(times, attackerName, acc_dmg, targetsPlayer) {
	msg(attackerName + ' -> x' + (times - global.miss) + '(<span style="color:lightgrey">' + times + '</span>) for ');
	printHitMessageResult(acc_dmg, targetsPlayer);
	if (time - global.miss > 0) printBodyPartHit(global.target_g)
}

function printHitMessageResult(ddmg, targetsPlayer) {
	printDamageNumber(ddmg);
	printCritIfCrit();
	if (targetsPlayer === true && !global.flags.msd) printBodyPartHit(global.t_n)
}

function doSingleAttack(attacker, defender, isPlayerAttacking) {
	if (isPlayerAttacking) {
		let dm = skl.fgt.use(); if (you.eqp[0].twoh === true) dm += skl.twoh.use();
		you.str += dm; you.int += dm;
		usePlayerWeaponSkill();
	}
	attacker.battle_ai(attacker, defender);
}

function getlastd() {
	switch (global.atkdfty[0]) {
		case 1: return '<span style="color:black;background-color:yellow">Struck by lightning</span>'; break;
		case 2: switch (global.atkdfty[1]) {
			case 1: return '<span style="color:red;background-color:darkmagenta">Suffocated from poison</span>'; break;
			case 2: return '<span style="color:darkmagenta;">Suffocated from venom</span>'; break;
			case 3: return '<span style="color:red;background-color:darkred">Bled out</span>'; break;
			case 4: return '<span style="color:white;background-color:black">Rotten from corruption</span>'; break;
		}; break;
		case 3: let txt = ''; let fc = ['', '', '']
			switch (global.atkdftydt.a) {
				case 0: fc[0] = 'pink'; break;
				case 1: fc[0] = 'lime'; break;
				case 2: fc[0] = 'yellow';; break;
				case 3: fc[0] = 'orange'; fc[1] = 'crimson'; break;
				case 4: fc[0] = 'cyan'; break;
				case 5: fc[0] = 'lightgoldenrodyellow'; fc[2] = 'gold 0px 0px 5px'; break;
				case 6: fc[0] = 'thistle'; fc[2] = 'blueviolet 0px 0px 5px'; break;
			}
			switch (global.atkdftydt.c) {
				case 0: txt += '<span style="color:' + fc[0] + ';background-color:' + fc[1] + ';text-shadow:' + fc[2] + '">' + select(['Slashed', 'Lacerated', 'Cut down', 'Hacked']) + '</span>'; break;
				case 1: txt += '<span style="color:' + fc[0] + ';background-color:' + fc[1] + ';text-shadow:' + fc[2] + '">' + select(['Pierced', 'Impaled', 'Gored']) + '</span>'; break;
				case 2: txt += '<span style="color:' + fc[0] + ';background-color:' + fc[1] + ';text-shadow:' + fc[2] + '">' + select(['Smashed', 'Crushed', 'Destroyed']) + '</span>'; break;
			} txt += ' by ';
			for (let a in creature) if (creature[a].id === global.atkdftydt.id) { txt += creature[a].name; break } return txt; break;
		default: return 'what casualty?'; break;
	}
}

function draggable(root, target) {
	root.addEventListener('mousedown', function (x) { global.ctarget = target; this.boxoffsetx = x.clientX - parseInt(target.style.left); this.boxoffsety = x.clientY - parseInt(target.style.top); global.croot = root; document.body.addEventListener('mousemove', draggablemove) });
	root.addEventListener('mouseup', function (x) { global.ctarget = null; global.croot = null; document.body.removeEventListener('mousemove', draggablemove) });
}

function draggablemove(x) {
	if (global.ctarget) { global.ctarget.style.left = x.clientX - global.croot.boxoffsetx; global.ctarget.style.top = x.clientY - global.croot.boxoffsety }
}

function _dbgman() { let g = 0; for (let a in chss) if (chss[a].id > g) g = chss[a].id; return g; }
function _dbgitc() { let g = 0; for (let a in item) g++; for (let a in acc) g++; for (let a in sld) g++; for (a in eqp) g++; for (let a in wpn) g++; return g; }
function _dbgspawn(arr, times) {
	let result = []; for (let g = 0; g < times; g++) {
		for (let a in arr) {
			let t = 0;
			if (random() < arr[a].chance + (arr[a].chance / 100 * you.luck)) {
				for (let b in result) {
					if (result[b].item.id === arr[a].item.id) { result[b].am++; break }
					if (++t === result.length) result.push({ item: arr[a].item, am: 1 });
				}
				if (!result.length > 0) result.push({ item: arr[a].item, am: 1 });
			}
		}
	}
	console.log('Spawn from the drop array ' + times + ' times\n::RESULT::');
	for (let a in result) console.log(result[a].item.name + ': x' + result[a].am)
	console.log('::END::')
}

function _dbggibberish(w, l) {
	let a = new String();
	for (let b = 0; b < w; b++) {
		lr = rand(1, l);
		for (let c = 0; c < lr; c++) {
			a += String.fromCharCode(rand(40960, 42124));
		} a += ' ';
	} return a;
}

function giveall(what) {
	/*switch(what){
	  case item: for(let a in item) giveItem(item[a]);break;
	  case wpn: for(let a in wpn) giveItem(wpn[a]);break;
	  case eqp: for(let a in eqp) giveItem(eqp[a]);break;
	  case acc: for(let a in acc) giveItem(acc[a]);break;
	  case ttl: for(let a in ttl) giveTitle(ttl[a]);break;
	  case rcp: for(let a in rcp) giveRcp(rcp[a]);break;
	}*/
}

function scan(arr, val, am) {
	if (am) { for (let obj in arr) if (arr[obj].id === val.id && arr[obj].amount >= am) return true }
	else for (let obj in arr) if (arr[obj] === val) return true;
}

//finder functions
function scanbyid(arr, val) { for (let obj in arr) if (arr[obj].id === val) return true }
function scanbyuid(arr, val) { for (let obj in arr) if (arr[obj].data.uid === val) return true }
function find(arr, val) { for (let obj in arr) if (arr[obj] === val) return arr[obj] }
function findbyid(arr, val) { for (let obj in arr) if (arr[obj].id === val) return arr[obj] }
function wearing(itm) { for (let obj in you.eqp) if (itm.data.uid === you.eqp[obj].data.uid && you.eqp[obj].id !== 10000) return true }
function wearingany(itm) { for (let obj in you.eqp) if (itm.id === you.eqp[obj].id && you.eqp[obj].id !== 10000) return true }
function findbest(arr, itm) {
	let temp = []; for (let a in arr) if (arr[a].id === itm.id) temp.push(arr[a]);
	return temp.sort(function (a, b) { if (a.dp > b.dp) return -1; return 1 })
}
function findworst(arr, itm) {
	let temp = []; for (let a in arr) if (arr[a].id === itm.id) temp.push(arr[a]);
	return temp.sort(function (a, b) { if (a.dp < b.dp) return -1; return 1 })
}

function addPlan(plan, data) {
	let p = deepCopy(plan);
	if (data) p.data = data;
	plans[plan.id].push(p);
}

/////plans/////
function Plan() {
	this.id = 0;
	this.f = function () { };
	this.data = {};
	this.destroy = function () { plans.splice(plans.indexOf(this), 1) }
}

planner.test = new Plan();
planner.test.id = 1;
planner.test.data = { date: 42 };
planner.test.f = function () {
	if (time.minute >= this.data.date) {
		msg('done'); this.destroy();
	}
}

planner.chkrot = new Plan();
planner.chkrot.id = 1;
planner.chkrot.data = { items: [] };
planner.chkrot.f = function () {
	for (let a in planner.chkrot.data.items) {
		let itm = planner.chkrot.data.items[a]; let wmod = 1; if (getSeason() === 2) wmod = 0.5; else if (getSeason() === 4) wmod = 2.5; itm.data.rottil += randf(itm.rot[0] / wmod, itm.rot[1] / wmod);
		if (itm.data.rottil >= 1) {
			let am = (itm.amount * randf(itm.rot[2], itm.rot[3]) + 1) << 0; itm.data.rottil--; itm.amount -= am;
			if (itm.stype === global.sm) updateInv(global.sinv.indexOf(itm)); else if (global.sm === 1) updateInv(inv.indexOf(itm));
			if (itm.amount <= 0) { planner.chkrot.data.items.splice(planner.chkrot.data.items.indexOf(itm)); removeItem(itm) }
			msg('Your <span style="color:cyan">x' + am + '</span> <span style="color: orange">' + itm.name + '</span> ' + select(['rotted away', 'went bad', 'spoiled']) + '!', 'yellow', null, null, 'green')
			if (itm.onChange) itm.onChange(am)
		}
	}
};

planner.imorph = new Plan();
planner.imorph.id = 1;
planner.imorph.data = { items: [] };
planner.imorph.f = function () {
	for (let a in planner.imorph.data.items) {
		planner.imorph.data.items[a].alttype = planner.imorph.data.items[a].alttype || 1;
		switch (planner.imorph.data.items[a].alttype) {
			case 1:
				let itm = planner.imorph.data.items[a]; let wmod = 1; switch (getSeason()) { case 2: wmod = 0.5; break; case 4: wmod = 2.5; break }; itm.data.rottil += randf(itm.rot[0] / wmod, itm.rot[1] / wmod);
				if (itm.data.rottil >= 1) {
					let am = (itm.amount * randf(itm.rot[2], itm.rot[3]) + 1) << 0; itm.data.rottil--;
					reduce(itm, am); if (itm.amount <= 0) planner.imorph.data.items.splice(planner.imorph.data.items.indexOf(itm));
					msg('Your <span style="color:cyan">x' + am + '</span> <span style="color: orange">' + itm.name + '</span> ' + select(['rotted away', 'went bad', 'spoiled']) + '!', 'yellow', null, null, 'green')
					if (itm.onChange) itm.onChange(am)
				} break;
		}
	}
}; addPlan(planner.imorph)

planner.cchk = new Plan();
planner.cchk.id = 1;
planner.cchk.f = function () {
	for (let a in container.home_strg.c) {
		if (container.home_strg.c[a].item.rot) {
			let itm = container.home_strg.c[a].item; let data = container.home_strg.c[a].data;
			let wmod = 1; switch (getSeason()) { case 2: wmod = 0.25; break; case 4: wmod = 1.25; break }; data.rottil += randf(itm.rot[0] / wmod, itm.rot[1] / wmod);
			if (data.rottil >= 1) {
				let am = (itm.amount * randf(itm.rot[2], itm.rot[3]) + 1) << 0; data.rottil--;
				container.home_strg.c[a].am -= am; if (container.home_strg.c[a].am <= 0) removeFromContainer(container.home_strg, container.home_strg.c[a]);
				if (itm.onChange) {
					let nitm = itm.onChange(am, true);
					let citm = false; for (let b in container.home_strg.c) if (container.home_strg.c[b].item.id === nitm[0].id) { citm = container.home_strg.c[b]; break }
					if (citm) citm.am += nitm[1]; else addToContainer(container.home_strg, nitm[0], nitm[1]);
				} iftrunkopenc();
			}
		}
	}
}; addPlan(planner.cchk)

planner.itmwear = new Plan();
planner.itmwear.data = { items: [] };
planner.itmwear.f = function () {
	for (let a in planner.itmwear.data.items) {
		let itm = planner.itmwear.data.items[a]; if (itm.dp - itm.degrade < 0) itm.dp = 0; else itm.dp -= itm.degrade;
		if (itm.dp <= 0) {
			itm.onDegrade(); planner.itmwear.data.items.splice(planner.itmwear.data.items.indexOf(itm)); removeItem(itm);
		}
	}
}; addPlan(planner.itmwear)

planner.djfood = new Plan();
planner.djfood.id = 1;
planner.djfood.f = function () {
	if (getDay(1) === "Sunday") global.flags.djmlet = true;
}; addPlan(planner.djfood)

planner.areafillw = new Plan();
planner.areafillw.id = 2;
planner.areafillw.f = function () {
	area.hmbsmnt.size += rand(5, 15);
}; addPlan(planner.areafillw)

planner.zrespawn = new Plan();
planner.zrespawn.id = 1;
planner.zrespawn.f = function () {
	if (random() <= .03 && global.flags.catget) {
		let things = [{ t: item.dmice1, c: .25 }, { t: item.dbdc1, c: .25 }, { t: item.d6, c: .05 }, { t: item.mcps, c: .2 }, { t: item.pcn, c: .2 }, { t: item.cp, c: .4 }]
		for (let a in things) if (random() <= things[a].c) sector.home.data.ctlt.push(things[a].t.id)
	}
}; addPlan(planner.zrespawn)

function addElement(parent_element, elem, id, cls) {
	let newelem = document.createElement(elem);
	if (id) newelem.id = id;
	if (cls) newelem.className = cls;
	parent_element.appendChild(newelem);
	return newelem;
}

function deepCopy(o) {
	let copy = o, k;
	if (o && typeof o === 'object') {
		copy = Object.prototype.toString.call(o) === '[object Array]' ? [] : {};
		for (let k in o) {
			copy[k] = deepCopy(o[k]);
		}
	}
	return copy;
}

function copy(o) {
	let res = new Object();
	for (let a in o) res[a] = o[a];
	return res;
}

function empty(dom) {
	while (dom.lastChild) {
		dom.removeChild(dom.lastChild);
	}
}

test.maps = {};
test.maps.cellsize = 20;
test.maps.mapdata = [];
test.maps.mapdata[0] = {}
test.maps.mapdata[0].data =
	[[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
	[1, 1, 0, 2, 3, 1, 1, 3, 2, 0, 1],
	[1, 2, 3, 1, 0, 1, 1, 0, 0, 0, 1],
	[1, 1, 0, 1, 0, 1, 1, 1, 2, 0, 1],
	[1, 0, 0, 1, 0, 0, 0, 0, 3, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1]];
test.maps.mapdata[0].c = ['white', 'grey', 'red', 'ghostwhite'];
test.maps.mapdata[0].d = ['corridor', 'wall', 'secret', 'secret enter'];

function _drawmap(mapdata) {
	if (test.maps.gui) {
		empty(test.maps.gui); document.body.removeChild(test.maps.gui); delete test.maps.gui
		empty(test.maps.guioverlay); document.body.removeChild(test.maps.guioverlay); delete test.maps.guioverlay
	}
	let size = test.maps.cellsize;
	test.maps.gui = addElement(document.body, 'canvas');
	test.maps.gui.style.position = 'absolute'; test.maps.gui.style.top = 0; test.maps.gui.style.left = 0;
	test.maps.guit = test.maps.gui.getContext('2d');
	test.maps.guioverlay = addElement(document.body, 'canvas');
	test.maps.guioverlay.style.position = 'absolute'; test.maps.guioverlay.width = window.innerWidth; test.maps.guioverlay.height = window.innerHeight; test.maps.guioverlay.style.pointerEvents = 'none';
	test.maps.guioverlay.style.top = 0; test.maps.guioverlay.style.left = 0
	draggable(test.maps.gui, test.maps.gui);
	let canvas = test.maps.gui; let tmain = test.maps.guit; let tmaino = test.maps.guioverlay.getContext('2d');
	canvas.height = mapdata.data.length * size; canvas.width = mapdata.data[0].length * size;
	for (let y in mapdata.data) {
		for (let x in mapdata.data[y]) {
			tmain.fillStyle = mapdata.c[mapdata.data[y][x]];
			tmain.fillRect(x * size, y * size, size, size);
		}
	}
	// mapdata.guicache = tmain.getImageData(0,0,canvas.width,canvas.height);
	test.maps.gui.addEventListener('mousemove', xy => {
		//tmain.clearRect(0,0,canvas.height,canvas.width)
		tmaino.clearRect(0, 0, test.maps.guioverlay.height, test.maps.guioverlay.width)
		//tmain.putImageData(mapdata.guicache,0,0)
		let l = parseInt(test.maps.gui.style.left); let t = parseInt(test.maps.gui.style.top);
		let cx = xy.clientX - parseInt(test.maps.gui.style.left); let cy = xy.clientY - parseInt(test.maps.gui.style.top); tmaino.strokeStyle = 'lime';
		tmaino.strokeRect(l + (cx / size << 0) * size, t + (cy / size << 0) * size, size, size);
		tmaino.strokeStyle = 'red'; tmaino.beginPath();
		tmaino.moveTo(cx + 20 + l, cy + 20 + t);
		tmaino.lineTo(cx + 35 + l, cy + 30 + t);
		tmaino.lineTo(cx + 90 + l, cy + 30 + t);
		tmaino.stroke(); tmaino.closePath();
		tmaino.font = 'italic  bold .6em "MS Gothic"'; tmaino.fillStyle = 'crimson';
		tmaino.fillText('X:' + ((cx / size << 0) + 1) + ' Y:' + ((cy / size << 0) + 1), cx + 40 + l, cy + 45 + t);
		tmaino.fillText(mapdata.d[mapdata.data[cy / size << 0][cx / size << 0]], cx + 40 + l, cy + 25 + t);
	})
	test.maps.gui.addEventListener('mouseleave', () => {
		tmaino.clearRect(0, 0, test.maps.guioverlay.height, test.maps.guioverlay.width)
	})
}

/*pts=[];
wind = -2;
canvas = addElement(document.body,'canvas'); canvas.style.position='absolute'; canvas.style.top=canvas.style.left=0; canvas.style.pointerEvents='none'
tmain = canvas.getContext('2d'); canvas.height = window.innerHeight; canvas.width = window.innerWidth;
tmain.globalCompositeOperation='destination-over'; tmain.fillStyle='white'; tmain.font='20px MS Gothic'; 
drawsnow = setInterval(()=>{ //tmain.clearRect(0,0,window.innerWidth,window.innerHeight); 
  for(let a in pts){ 
	let p = pts[a]; p.windtimedest>p.windtime?p.windtime++:p.windtime--;
	if(p.windtime===p.windtimedest) {p.windtimedest=rand(550); p.windold=p.wind; p.wind = random()*wind}
	p.y+=.5; p.x+=(p.wind-p.windold)*(Math.min(p.windtimedest/Math.max(p.windtimedest,p.windtime)))
	tmain.fillText(p.c,p.x,p.y); 
	if(p.y>=window.innerHeight) pts.splice(pts[a],1);
  }
  if(random()<.1){pts.push({x:rand(window.innerWidth*1.5+10),y:0,wind:.1,windtimedest:1,switch:true,windold:.1,windded:0,windtime:0,c:select(['*',"'",'.','。'])})}
},10)*/

function Mastery(id) {
	this.id = id || -1;
	this.name = 'dummy';
	this.desc = function () { return 'dummy' }
	this.condd = function () { return '????????' }
	this.icon// = [0,0];
	this.x = 20; this.y = 20;
	this.data = { lvl: 0 };
	this.limit = 10;
	this.have = false;
	this.linkto; this.linkfrom;
	this.cond = function () { return true }
	this.onlevel = function () { }
}

mastery.str1 = new Mastery(1);
mastery.str1.name = 'Physical Training'
mastery.str1.desc = function () { return 'Simple improvements to body physique' + dom.dseparator + '<div style="color:cyan;background-color:midnightblue;font-size:small">Effects:</div><div style="color:yellow;background-color:#123;font-size:small"><br>STR +0.5  |  HP +5  |  SAT +1<br><br></div><div style="color:cyan;background-color:midnightblue;font-size:small">Current:</div><div style="color:lime;background-color:#123;font-size:small"><br>STR +' + mastery.str1.data.lvl * .5 + '  |  HP +' + mastery.str1.data.lvl * 5 + '  |  SAT +' + mastery.str1.data.lvl + '<br><br></div>' }
mastery.str1.have = true;
mastery.str1.onlevel = function () { you.stra += .5; you.sata += 1; you.hpa += 5 }
mastery.str1.icon = [6, 3];

mastery.agl1 = new Mastery(2);
mastery.agl1.name = 'Athletics'
mastery.agl1.desc = function () { return '' + dom.dseparator + '<div style="color:cyan;background-color:midnightblue;font-size:small">Effects:</div><div style="color:yellow;background-color:#123;font-size:small"><br>STR +0.5  |  HP +5  |  SAT +1<br><br></div><div style="color:cyan;background-color:midnightblue;font-size:small">Current:</div><div style="color:lime;background-color:#123;font-size:small"><br>STR +' + mastery.str1.data.lvl * .5 + '  |  HP +' + mastery.str1.data.lvl * 5 + '  |  SAT +' + mastery.str1.data.lvl + '<br><br></div>' }
mastery.agl1.have = true;
mastery.agl1.x = 230;
mastery.agl1.limit = 10;
mastery.agl1.icon = [7, 3];

mastery.xtr1 = new Mastery(3);
mastery.xtr1.name = 'Observation';
mastery.xtr1.have = true;
mastery.xtr1.x = 430;
mastery.xtr1.limit = 10;
mastery.xtr1.icon = [1, 7];

mastery.fse1 = new Mastery(4);
mastery.fse1.name = 'Reflexes';
mastery.fse1.x = 230; mastery.fse1.y = 200;
mastery.fse1.linkfrom = [mastery.str1, mastery.agl1, mastery.xtr1]
mastery.xtr1.linkto = [mastery.fse1]
mastery.fse1.icon = [6, 1];

mastery.hstr1 = new Mastery(9);
mastery.hstr1.have = false;
mastery.hstr1.x = 125;
mastery.hstr1.linkfrom = [mastery.str1, mastery.agl1]
mastery.hstr1.limit = 1;
mastery.hstr1.icon = [5, 3]; mastery.hstr1.hidden = true
mastery.str1.linkto = [mastery.fse1, mastery.hstr1]
mastery.agl1.linkto = [mastery.fse1, mastery.hstr1]

function _drawmwindow() {
	if (test.mguic) {
		empty(test.mguic); document.body.removeChild(test.mguic); delete test.mguic;
	}
	test.mguic = addElement(document.body, 'div'); test.mguic.style.height = 500; test.mguic.style.width = 500; test.mguic.style.padding = 2;
	test.mguic.style.position = 'absolute'; test.mguic.style.top = 100; test.mguic.style.left = 100;
	test.mguic.style.border = '2px solid black'; test.mguic.style.backgroundColor = '#558';
	test.mguid = addElement(test.mguic, 'div'); test.mguid.style.height = 20; test.mguid.style.borderBottom = '2px solid rgb(0,40,64)'
	test.mguid.innerHTML = "M A S T E R I E S"; test.mguid.style.color = 'lime'; test.mguid.style.textAlign = 'center'
	test.mguidk = addElement(test.mguid, 'div'); test.mguidk.innerHTML = '✖'; test.mguidk.style.float = 'right'; test.mguidk.style.color = 'black'
	test.mguidk.style.backgroundColor = 'crimson';
	test.mguidk.addEventListener('click', function () { empty(test.mguic); document.body.removeChild(test.mguic); delete test.mguic });
	test.mgui = addElement(test.mguic, 'canvas'); test.mgui.offsetx = 0; test.mgui.offsety = 0;
	draggable(test.mguid, test.mguic);
	let canvas = test.mgui; let tmain = test.mgui.getContext("2d");
	canvas.height = 478; canvas.width = 500; let HEIGHT = canvas.height; let WIDTH = canvas.width;
	let _gr = tmain.createLinearGradient(200, 200, 200, 500); _gr.addColorStop(0, "#000"); _gr.addColorStop(1, "#123")
	tmain.fillStyle = _gr;
	tmain.fillRect(0, 0, WIDTH, HEIGHT); tmain.c = canvas; tmain._bg = tmain.getImageData(0, 0, WIDTH, HEIGHT);
	_renderm(tmain)
	test.mgui.addEventListener('mousemove', xy => {
		for (let a in mastery) {
			let m = mastery[a];
			if (xy.offsetX > m.x - 3 && xy.offsetX < m.x + 53 && xy.offsetY > m.y - 3 && xy.offsetY < m.y + 53) {
				if (test.mgui.selected && test.mgui.selected.id === m.id) {
					global.dscr.style.top = global.dscr.clientHeight + 60 + xy.clientY > document.body.clientHeight ? (xy.clientY + 30 + global.dscr.clientHeight) - ((xy.clientY + 30 + global.dscr.clientHeight) - document.body.clientHeight) - global.dscr.clientHeight - 30 : xy.clientY + 30; global.dscr.style.left = global.dscr.clientWidth + 60 + xy.clientX > document.body.clientWidth ? (xy.clientX + 30 + global.dscr.clientWidth) - ((xy.clientX + 30 + global.dscr.clientWidth) - document.body.clientWidth) - global.dscr.clientWidth - 30 : xy.clientX + 30;
					return
				}
				test.mgui.selected = m; _renderm(tmain); if (!m.hidden && (m.dscv || m.have)) dscr(xy, null, 12, !m.have ? '????????' : m.name, !m.have ? m.condd : m.desc); return
			}
		} if (test.mgui.selected) { test.mgui.selected = null; empty(global.dscr); global.dscr.style.display = 'none'; _renderm(tmain); }
	})
	test.mgui.addEventListener('click', xy => {
		if (test.mgui.selected && test.mgui.selected.data.lvl < test.mgui.selected.limit && test.mgui.selected.have) { test.mgui.selected.data.lvl++; test.mgui.selected.onlevel(); you.stat_r(); dom.d5_1_1m.update(); dom.d5_3_1.update(); global.dscr.children[1].innerHTML = test.mgui.selected.desc(); _renderm(tmain, true); }
	})
}

function _renderm(tmain, forced) {
	tmain.clearRect(0, 0, tmain.c.width, tmain.c.height); tmain.putImageData(tmain._bg, 0, 0)
	let ofx = test.mgui.offsetx; let ofy = test.mgui.offsety;
	for (let a in mastery) {
		let m = mastery[a]; if (mastery[a].have) {
			if (m.linkto) for (let b in m.linkto) {
				if (m.data.lvl <= 0 || (m.linkto[b].hidden && !m.linkto[b].have)) break;
				let p = m.linkto[b];
				tmain.beginPath();
				tmain.moveTo(m.x + 25, m.y + 25);
				tmain.lineTo(p.x + 25, p.y + 25);
				if (p.have) { tmain.lineWidth = 6; tmain.strokeStyle = '#a44'; tmain.stroke(); tmain.lineWidth = 2; tmain.strokeStyle = '#ff0'; tmain.stroke(); }
				else { tmain.lineWidth = 6; tmain.strokeStyle = '#444'; tmain.stroke(); tmain.lineWidth = 1; tmain.strokeStyle = '#ccc'; tmain.stroke(); }
				tmain.closePath();
			}
		}
		if (m.linkfrom && (!m.hidden)) {
			let t = m.linkfrom.length; for (let c in m.linkfrom) {
				let p = m.linkfrom[c];
				if (p.data.lvl > 0) t--;
			} if (t === 0) m.have = true; else if (t !== m.linkfrom.length) {
				m.dscv = true;
				tmain.fillStyle = '#555';
				tmain.fillRect(m.x + ofx - 2, m.y + ofy - 2, 54, 54); tmain.fillStyle = 'grey'
				tmain.fillRect(m.x + ofx, m.y + ofy, 50, 50); tmain.fillStyle = '#333'; tmain.font = ' 1.2em "MS Gothic"'
				tmain.fillText('???', m.x + ofx + 9, m.y + ofy + 33)
			}
		}
		if (m.have) {
			tmain.fillStyle = test.mgui.selected && m.id === test.mgui.selected.id ? 'lime' : 'red';
			tmain.fillRect(m.x + ofx - 2, m.y + ofy - 2, 54, 54); tmain.fillStyle = 'rgba(0,0,0,.5)'
			tmain.fillRect(m.x + ofx, m.y + ofy + 54, 50, 9);
			tmain.font = ' .6em "MS PGothic"'; tmain.fillStyle = m.data.lvl === 0 ? 'crimson' : (m.data.lvl === m.limit ? 'lime' : 'yellow');
			tmain.fillText(m.data.lvl + '/' + m.limit, m.x + ofx + 1, m.y + ofy + 62)
			if (m.icon) {
				let data = global._preic2_tmain.getImageData((m.icon[0] - 1) * 50, (m.icon[1] - 1) * 50, 50, 50);
				tmain.putImageData(data, m.x, m.y);
			}
		}
	}
}


function rand(max, min) {
	if (min) return Math.round(random() * (max - min) + min);
	else return Math.round(random() * max);
}

function randf(max, min) {
	if (min) return random() * (max - min) + min;
	else return random() * max;
}

function _rand(max, min) {
	if (min) return Math.round(Math.random() * (max - min) + min);
	else return Math.round(Math.random() * max);
}


function class__MersenneTwister__(window) {
	var className = "MersenneTwister";

	var $next = "$__next__";

	var N = 624;
	var M = 397;
	var MAG01 = [0x0, 0x9908b0df];

	var F = window[className] = function () {
		this.mt = new Array(N);
		this.mti = N + 1;

		var a = arguments;
		switch (a.length) {
			case 0:
				this.setSeed(new Date().getTime());
				break;
			case 1:
				this.setSeed(a[0]);
				break;
			default:
				var seeds = new Array();
				for (var i = 0; i < a.length; ++i) {
					seeds.push(a[i]);
				}
				this.setSeed(seeds);
				break;
		}
	};

	var FP = F.prototype;

	FP.setSeed = function () {
		var a = arguments;
		switch (a.length) {
			case 1:
				if (a[0].constructor === Number) {
					this.mt[0] = a[0];
					for (var i = 1; i < N; ++i) {
						var s = this.mt[i - 1] ^ (this.mt[i - 1] >>> 30);
						this.mt[i] = ((1812433253 * ((s & 0xffff0000) >>> 16))
							<< 16)
							+ 1812433253 * (s & 0x0000ffff)
							+ i;
					}
					this.mti = N;
					return;
				}

				this.setSeed(19650218);

				var l = a[0].length;
				var i = 1;
				var j = 0;

				for (var k = N > l ? N : l; k != 0; --k) {
					var s = this.mt[i - 1] ^ (this.mt[i - 1] >>> 30)
					this.mt[i] = (this.mt[i]
						^ (((1664525 * ((s & 0xffff0000) >>> 16)) << 16)
							+ 1664525 * (s & 0x0000ffff)))
						+ a[0][j]
						+ j;
					if (++i >= N) {
						this.mt[0] = this.mt[N - 1];
						i = 1;
					}
					if (++j >= l) {
						j = 0;
					}
				}

				for (var k = N - 1; k != 0; --k) {
					var s = this.mt[i - 1] ^ (this.mt[i - 1] >>> 30);
					this.mt[i] = (this.mt[i]
						^ (((1566083941 * ((s & 0xffff0000) >>> 16)) << 16)
							+ 1566083941 * (s & 0x0000ffff)))
						- i;
					if (++i >= N) {
						this.mt[0] = this.mt[N - 1];
						i = 1;
					}
				}

				this.mt[0] = 0x80000000;
				return;
			default:
				var seeds = new Array();
				for (var i = 0; i < a.length; ++i) {
					seeds.push(a[i]);
				}
				this.setSeed(seeds);
				return;
		}
	};

	FP[$next] = function (bits) {
		if (this.mti >= N) {
			var x = 0;

			for (var k = 0; k < N - M; ++k) {
				x = (this.mt[k] & 0x80000000) | (this.mt[k + 1] & 0x7fffffff);
				this.mt[k] = this.mt[k + M] ^ (x >>> 1) ^ MAG01[x & 0x1];
			}
			for (var k = N - M; k < N - 1; ++k) {
				x = (this.mt[k] & 0x80000000) | (this.mt[k + 1] & 0x7fffffff);
				this.mt[k] = this.mt[k + (M - N)] ^ (x >>> 1) ^ MAG01[x & 0x1];
			}
			x = (this.mt[N - 1] & 0x80000000) | (this.mt[0] & 0x7fffffff);
			this.mt[N - 1] = this.mt[M - 1] ^ (x >>> 1) ^ MAG01[x & 0x1];

			this.mti = 0;
		}

		var y = this.mt[this.mti++];
		y ^= y >>> 11;
		y ^= (y << 7) & 0x9d2c5680;
		y ^= (y << 15) & 0xefc60000;
		y ^= y >>> 18;
		return y >>> (32 - bits);
	};

	FP.nextBoolean = function () {
		return this[$next](1) == 1;
	};

	FP.nextInteger = function () {
		return this[$next](32);
	};

	FP.nextLong = function () {
		return this[$next](25) * 2097152 + this[$next](25);
	};

	FP.nextFloat = function () {
		return this[$next](32) / 4294967296.0; // 2^32
	};

	FP.nextDouble = function () {
		return (this[$next](25) * 2097152 + this[$next](25))
			/ 70368744177664.0; // 2^46
	};

} class__MersenneTwister__(window);

Math.__MERSENNE_TWISTER__ = new MersenneTwister();
var random = function (s) {
	if (s) Math.__MERSENNE_TWISTER__.setSeed(s)
	return Math.__MERSENNE_TWISTER__.nextFloat();
}

function xmur3(str) {
	for (var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
		h = Math.imul(h ^ str.charCodeAt(i), 3432918353),
			h = h << 13 | h >>> 19;
	return function () {
		h = Math.imul(h ^ h >>> 16, 2246822507);
		h = Math.imul(h ^ h >>> 13, 3266489909);
		return (h ^= h >>> 16) >>> 0;
	}
}

/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info/
*
**/

var Base64 = {

	// private property
	_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

	// public method for encoding
	encode: function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;

		input = Base64._utf8_encode(input);

		while (i < input.length) {

			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;

			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}

			output = output +
				this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
				this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

		}

		return output;
	},

	// public method for decoding
	decode: function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;

		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		while (i < input.length) {

			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			output = output + String.fromCharCode(chr1);

			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}

		}

		output = Base64._utf8_decode(output);

		return output;

	},

	// private method for UTF-8 encoding
	_utf8_encode: function (string) {
		string = string.replace(/\r\n/g, "\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if ((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	},

	// private method for UTF-8 decoding
	_utf8_decode: function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;

		while (i < utftext.length) {

			c = utftext.charCodeAt(i);

			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if ((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i + 1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i + 1);
				c3 = utftext.charCodeAt(i + 2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}

		}

		return string;
	}

}

function utf8_to_b64(str) {
	try { return Base64.encode(unescape(encodeURIComponent(str))); }
	catch (err) { return ''; }
}

function b64_to_utf8(str) {
	try { return decodeURIComponent(escape(Base64.decode(str))); }
	catch (err) { return ''; }
}