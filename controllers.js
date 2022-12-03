const axios = require("axios").default;

const headers = new Headers({
	Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2OTg2ODEwNSwianRpIjoiM2UyNDVmMjUtYWYxYS00MTI0LWJlZDAtY2Y4ZDk2NDdhNzgyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjYzODgyYTQ5ZTNhYzlkNWM2NDcwOTZiYiIsIm5iZiI6MTY2OTg2ODEwNSwiZXhwIjoxNzAxNDA0MTA1fQ.ZSX1HsOBfWtc-ywjH7bnadQzHAEKmawaAMyj7Ha8bRw",
});

async function getRates() {
	try {
		const response = await axios.get(
			"https://tasas.eltoque.com/v1/trmi?date_from=2022-12-03%2000%3A00%3A01&date_to=2022-12-03%2023%3A59%3A01",
         {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2OTg2ODEwNSwianRpIjoiM2UyNDVmMjUtYWYxYS00MTI0LWJlZDAtY2Y4ZDk2NDdhNzgyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjYzODgyYTQ5ZTNhYzlkNWM2NDcwOTZiYiIsIm5iZiI6MTY2OTg2ODEwNSwiZXhwIjoxNzAxNDA0MTA1fQ.ZSX1HsOBfWtc-ywjH7bnadQzHAEKmawaAMyj7Ha8bRw",
         }
		);
		console.log(response);
	} catch (error) {
		console.error(error);
	}

   console.log("Asere y esto por que no pincha1")

	return;
}

module.exports = getRates;
