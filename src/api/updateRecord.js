'use strict'

const fetch = require('node-fetch')

module.exports = async (endpoint, headers, record) => {

	const response = await fetch(endpoint, {
		method: 'post',
		headers,
		body: JSON.stringify({
			query: `
				mutation updateRecord($id: ID!) {
					updateRecord(id: $id) {
						success
					}
				}
			`,
			variables: {
				id: record.id
			}
		})
	})

	const data = await response.json()

	return data.data.updateRecord.success

}