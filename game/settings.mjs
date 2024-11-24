export const backgrounds = {
	white: 'white',
	grey: '#BCBCBC',
	night: '#12122E',
	custom: {
		r: 0xFF,
		g: 0xFF,
		b: 0xFF,
	},
	special: 'linear-gradient(rgb(0, 0, 0), rgb(17, 34, 51))',
}
export const backgroundTypes = Object.keys(backgrounds)
export let settings = {
	mainBG: backgrounds.special,
	noGradients: false,
}
export { settings as default }