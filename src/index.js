'use strict'

const { Headers } = require('node-fetch')
const UserAgent = require('user-agents')

const sleep = require('./utils/sleep')
const duds = require('./utils/duds')
const fakeRecord = require('./utils/fakeRecord')
const fakeAction = require('./utils/fakeAction')
const randomItem = require('./utils/randomItem')
const randomInt = require('./utils/randomInt')
const { hour } = require('./utils/times')

const fetchDomains = require('./api/fetchDomains')
const fetchEvents = require('./api/fetchEvents')
const createRecord = require('./api/createRecord')
const updateRecord = require('./api/updateRecord')
const createAction = require('./api/createAction')

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
	'User-Agent': new UserAgent().toString()
})

fillWithRecord(endpoint, headers)
fillWithAction(endpoint, headers)