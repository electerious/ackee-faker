import randomItem from './randomItem.js'

export default () => {
	return randomItem([
		{
			key: 'Clicked "Twitter"',
			value: 1,
		},
		{
			key: 'Clicked "Instagram"',
			value: 1,
		},
		{
			key: 'Toggled menu',
			value: 1,
		},
		{
			key: 'Clicked "More"',
			value: 1,
		},
	])
}