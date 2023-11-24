async function fetch_json() {
	const url = '../card/data/profile-fighters.json'
	const request = await fetch(url)
	const responseJson = await request.json()
	return await responseJson
}

export { fetch_json }