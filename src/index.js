import dotenv from 'dotenv'

dotenv.config()

import { Headers } from 'node-fetch'
import UserAgent from 'user-agents'

import sleep from './utils/sleep.js'
import duds from './utils/duds.js'
import fakeRecord from './utils/fakeRecord.js'
import fakeAction from './utils/fakeAction.js'
import randomItem from './utils/randomItem.js'
import randomInt from './utils/randomInt.js'
import { hour } from './utils/times.js'

import fetchDomains from './api/fetchDomains.js'
import fetchEvents from './api/fetchEvents.js'
import createRecord from './api/createRecord.js'
import updateRecord from './api/updateRecord.js'
import createAction from './api/createAction.js'

const fillWithRecord = async (endpoint, headers) => {
	const updateDelay = randomInt(0, hour / 4)

	const domains = await fetchDomains(endpoint, headers)
	const domain = randomItem([ ...domains, ...duds() ])

	if (domain == null) return

	const record = fakeRecord()
	const response = await createRecord(endpoint, headers, domain, record)

	await sleep(updateDelay)
	await updateRecord(endpoint, headers, response)
}

const fillWithAction = async (endpoint, headers) => {
	const events = await fetchEvents(endpoint, headers)
	const event = randomItem([ ...events, ...duds() ])

	if (event == null) return

	const action = fakeAction()
	await createAction(endpoint, headers, event, action)
}

const endpoint = process.env.ACKEE_ENDPOINT
const token = process.env.ACKEE_TOKEN

const headers = new Headers({
	'Authorization': `Bearer ${ token }`,
	'User-Agent': new UserAgent().toString(),
	'Content-Type': 'application/json',
})

fillWithRecord(endpoint, headers)
fillWithAction(endpoint, headers)