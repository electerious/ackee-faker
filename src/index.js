import UserAgent from 'user-agents'

import createAction from './api/create-action.js'
import createRecord from './api/create-record.js'
import fetchDomains from './api/fetch-domains.js'
import fetchEvents from './api/fetch-events.js'
import updateRecord from './api/update-record.js'
import duds from './utils/duds.js'
import fakeAction from './utils/fake-action.js'
import fakeRecord from './utils/fake-record.js'
import randomInt from './utils/random-int.js'
import randomItem from './utils/random-item.js'
import sleep from './utils/sleep.js'
import { hour } from './utils/times.js'

const fillWithRecord = async (endpoint, headers) => {
  const updateDelay = randomInt(0, hour / 4)

  const domains = await fetchDomains(endpoint, headers)
  const domain = randomItem([...domains, ...duds()])

  if (domain == null) return

  const record = fakeRecord()
  const response = await createRecord(endpoint, headers, domain, record)

  await sleep(updateDelay)
  await updateRecord(endpoint, headers, response)
}

const fillWithAction = async (endpoint, headers) => {
  const events = await fetchEvents(endpoint, headers)
  const event = randomItem([...events, ...duds()])

  if (event == null) return

  const action = fakeAction()
  await createAction(endpoint, headers, event, action)
}

const endpoint = process.env.ACKEE_ENDPOINT
const token = process.env.ACKEE_TOKEN

const headers = new Headers({
  'Authorization': `Bearer ${token}`,
  'User-Agent': new UserAgent().toString(),
  'Content-Type': 'application/json',
})

await fillWithRecord(endpoint, headers)
await fillWithAction(endpoint, headers)
