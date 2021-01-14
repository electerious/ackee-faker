import fetch from 'node-fetch'

export default async (endpoint, headers, domain, record) => {

	const response = await fetch(endpoint, {
		method: 'post',
		headers,
		body: JSON.stringify({
			query: `
				mutation createRecord($domainId: ID!, $input: CreateRecordInput!) {
					createRecord(domainId: $domainId, input: $input) {
						payload {
							id
						}
					}
				}
			`,
			variables: {
				domainId: domain.id,
				input: record
			}
		})
	})

	const data = await response.json()

	return data.data.createRecord.payload

}