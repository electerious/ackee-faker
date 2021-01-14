import fetch from 'node-fetch'

export default async (endpoint, headers) => {

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