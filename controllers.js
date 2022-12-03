const axios = require("axios").default;
// require("dotenv")

const options = {
	method: "GET",
	url: "https://tasas.eltoque.com/v1/trmi",
	params: { date_from: "2022-12-03 00:00:01", date_to: "2022-12-03 23:59:01" },
	headers: { Authorization: `Bearer ${process.env.API_KEY}` },
};

async function getRates() {
	let response;

	try {
		response = await axios.request(options);
		console.log(response);
	} catch (error) {
		console.error(error);
		response = null
	}
	return response ? response.tasas : null;
}

module.exports = getRates;
