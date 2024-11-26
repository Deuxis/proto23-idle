# Loading & init
## Loading
**TODO**
## Init
275: starts
Adds initial stuff to storage box, **TODO** when implementing storage box

284: Set background gradient

285: If `dom.bkssttbd` exists (whatever the fuck that is), empty it, remove it, unset `global.flags.bksstt` and then kill it harder
286: If `global.flags.expatv` is set, do the same with `dom.ct_bt4_5a_nc` (unsetting that flag)
287: Same with `global.flags.impatv` and `dom.ct_bt4_5b_nc`
288: If `dom.error` exists, empty it and kill it harder
289: If `global.flags.autosave` is set, set `dom.autosves.checked = true` and set an autosave interval. (Runs `save(true)` every 30s)

291: "Patch things", assumedly patches older saves, gives a title and recipe if their preconditions are met.

295: Fade out loading screen, delete it (repeated for its text elem)

# Dictionary
Chs: location (choice screen?)

# General TOC

## 298-751: TITLES

754: Weather constructor
759-772: Init weather types
774: Set rain onticks
782: Set storm ontick

797: callbackManager constructor
803: onDeath callback
808: funcs for attaching and detaching callbacks

825: Time constructor
834: time.minute set to magic number, probably the desired start time of the game translated from date to minutes via Excel-driven development
835: days of the week names (Eng, Eng short, jpn)

## 839-1314: EFFECTS

## 1316-1475: FURNITURE

## 1478-1575: QUESTS

1577: apparently unused alcohol consumption strings

## 1579-2075: SKILLS

## 2077-5593: ITEMS

## 5597-7254: EQUIPMENT

#### 5637-6050: weapons

#### 6052-6382: equipment (head, torso, legs, arms)

#### 6384-6519: shields

#### 6521-7237: accessories

7239: Commented plans for the locked slots items? Also "suffering", "resentment" - getting kinda relatable rn

7256: dss, whatever that means. What destroyable items drop when destroyed? Looks like some spoilable items' drops, but not all.

## "Misc"
7268: Drop rates?

7274: Checks for title awards for:
7274: being killed and killing
7286: money
7291: titles
7297: buying
7302: petting the cat
7305: punching with a lot of strength
7310: not leaving your house

## 7316-7398: YOU
Pretty much just the constructor, invoked immediately after

## 7400-7942: CREATURES

## 7944-8026: ABILITIES

## 8028-8063: EFFECTORS

## 8065-8224: AREAS

## 8226-8328: AREA SECTORS

## 8330: Container

## 8342-8933: RECIPES

## 8936-8993: VENDORS

## 8995-9084: ACTIONS

## 9086-10143: DOM
Includes most of the initial UI setup just toplevel

10145: Test area setup

10151: `offline_a()` no idea

10168-10431: The godforsaken `dscr()` function that seems to handle everything related to the description popup
Also seems to use global `this` a lot? Which outside of strict mode in the browser is the `window` object.

10433: `msg()` add a message to the event bar (`gmsgs` - global messages?)

10452: `_msg()` alt version, unused

10461: `msg_add()` seems to add an additional message under the previous message? Not sure how or why atm.

10472: `format()` unused

10476: `appear()` (fade in, via an interval that changes the element style every 10ms or so, classy)
10489: `fade()` the same, but in reverse

10500: `addDesc()` add to an element the event listeners that make the description appear, move and disappear

10506: `global.t_n = 0`

10508: `allbuff()` no idea

10518: `fght()` process a fight tick?

10567: `attack()` process an attack attempt, return damage dealt

10617: `tattack()` process throwing attack, don't return and reach for the global monster hp directly

10633: `dmg_calc()` calc damage dealt, used only for abilities

10681: `dumb()` no idea, probably agreed. Used when coins are used.

10709: `mf()` no idea, temporarily adds a span with a colored dot?

10725: `hit_calc()` calculate accuracy of a hit from agility etc?

10738: `wpnhitstt()` based on held weapon increment some counter in a global 2D array :)
10751: `wpnhitstt()` similar but for the weapon breaking or something?

10772: `renderRcp()` render recipe? Looks more like render the entire recipes window?
10867: `refreshRcp()` refresh the recipes list I think? Called only in `renderRcp()`
10886: `_refreshRcpCnt()` not sure, used only in `refreshRcp()`
10891: `_fcraft()` check if you can craft atm and maybe craft? Only used in crafting recipe event listener

10895: `renderSkl()` render skill I guess? Also holds things in global `this`

10909: `area_init()` init (battle) area, choose the monster
10928: `mon_gen()` generate monster

10939: `giveEff()` give effector
10955: `removeEff()` remove effector
then `effdfix()` and `eff_d()` no idea

10995: `equip()` equip an item
11038: `unequip()` unequip an item

11057: `eqpres()` render the equipment table, but only with the empty slot placeholders. All of them, no checks.

11070: `giveRcp()` unlock the recipe if not yet unlocked. Returns 0 or 1 because of course it does.

11078: `giveWealth()` add money
11095: `spend()` spend money

11095: `giveItem()`

1134: `listen_k()` listener callback on keypresses, only used in `renderItem()`

11150: listeners for the shift key I think?

11171: `descsinfo()` show description about the spoiling state, quantity etc of an item

11191: `renderItem()`

11291: `updateInv()` update inventory

11296: `removeItem()`

OK this is where I stopped full indexing, maybe continue from here later

14791-14956: Actually fucking implemented Mersenne Twister what the fuck

14969-15120: copy-pasted base64 library