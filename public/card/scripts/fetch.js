async function fetch_json() {
  const url = "../card/data/profile-fighters.json";
  const request = await fetch(url);
  return await await request.json();
}

export { fetch_json };
