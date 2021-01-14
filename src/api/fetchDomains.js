import fetch from 'node-fetch'

export default async (endpoint, headers) => {

	const response = await fetch(endpoint, {
		method: 'post',
		headers,
		body: JSON.stringify({
			query: `
				query fetchDomains {
					domains {
						id
					}
				}
			`
		})
	})

	const data = await response.json()

	return data.data.domains

}