// A API utilizada foi a https://api.tutiempo.net/pt/ que fornece de maneira gratuita, simples  e bem documentada, informações metereológicas.
async function meteorologicalData() {
  const key = "XCGqa4XqzaqnX5Z";
  const url = `https://api.tutiempo.net/json/?lan=pt&apid=${key}&lid=57312`;
  const request = fetch(url);
  const response = await request;

  return await response.json();
}

export { meteorologicalData };
