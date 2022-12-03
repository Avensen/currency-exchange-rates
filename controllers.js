const axios = require("axios").default;

const headers = new Headers({
	Authorization: "Bearer " + process.env.API_KEY
});

async function getRates() {
	try {
		const response = await axios.get(
			"https://tasas.eltoque.com/v1/trmi?date_from=2022-12-03%2000%3A00%3A01&date_to=2022-12-03%2023%3A59%3A01", headers
		);
		console.log(response);
	} catch (error) {
		console.error(error);
	}

   console.log("Asere y esto por que no pincha1")

	return;
}

module.exports = getRates;
