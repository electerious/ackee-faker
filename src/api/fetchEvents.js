'use strict'

const fetch = require('node-fetch')

module.exports = async (endpoint, headers) => {

	const response = await fetch(endpoint, {
		method: 'post',
		headers,
		body: JSON.stringify({
			query: `
				query fetchEvents {
					events {
						id
					}
				}
			`
		})
	})

	const data = await response.json()

	return data.data.events

}