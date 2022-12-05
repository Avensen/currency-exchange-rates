const axios = require("axios").default;

require("dotenv").config();

async function getRates(dateFrom, dateTo) {
	let response;

	const options = {
		method: "GET",
		url: "https://tasas.eltoque.com/v1/trmi",
		params: { date_from: dateFrom, date_to: dateTo },
		headers: { Authorization: `Bearer ${process.env.API_KEY}` },
	};

	try {
		response = await axios.request(options);
		// console.log(response);
	} catch (error) {
		// console.error(error);
		response = null
	}
	return response ? response.data.tasas : null;
}

module.exports = getRates;
