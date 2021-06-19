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
			`,
		}),
	})

	const data = await response.json()

	if (data.errors != null) {
		const message = data.errors[0].message
		throw new Error(message)
	}

	return data.data.events
}