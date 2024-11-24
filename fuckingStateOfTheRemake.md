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

298-751: ***SECTION***: TITLES

754: Weather constructor

759-772: Init weather types

774: Set rain onticks

782: Set storm ontick

797: callbackManager constructor