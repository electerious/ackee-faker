import * as fakeData from './fakeData.js'
import randomItem from './randomItem.js'

export default () => {

	const resolution = randomItem(fakeData.resolutions)
	const device = randomItem(fakeData.devices)
	const operatingSystem = randomItem(fakeData.operatingSystems)
	const browser = randomItem(fakeData.browsers)

	const anonymousRecord = {
		siteLocation: randomItem(fakeData.siteLocations)
	}

	const detailedRecord = {
		siteLocation: randomItem(fakeData.siteLocations),
		siteReferrer: randomItem([ null, ...fakeData.referrers ]),
		siteLanguage: randomItem([ null, ...fakeData.langauges ]),
		source: randomItem([ null, null, null, ...fakeData.sources ]),
		screenWidth: resolution.width,
		screenHeight: resolution.height,
		screenColorDepth: randomItem([ null, ...fakeData.screenColorDepths ]),
		deviceName: device.name,
		deviceManufacturer: device.manufacturer,
		osName: operatingSystem.name,
		osVersion: randomItem(operatingSystem.versions),
		browserName: browser.name,
		browserVersion: randomItem(browser.versions),
		browserWidth: resolution.width,
		browserHeight: resolution.height
	}

	return randomItem([
		anonymousRecord,
		detailedRecord
	])

}