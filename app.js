const express = require("express");
const bodyParser = require("body-parser");
const expressip = require("express-ip");

const getRates = require("./controllers");

const dayjs = require("dayjs");
dayjs().format();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressip().getIpInfoMiddleware);

app.use((req, res, next) => {
	// Website you wish to allow to connect
	res.setHeader("Access-Control-Allow-Origin", "*");

	// Request methods you wish to allow
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE"
	);

	// Request headers you wish to allow
	res.setHeader(
		"Access-Control-Allow-Headers",
		"X-Requested-With,content-type"
	);

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader("Access-Control-Allow-Credentials", true);

	// Pass to next layer of middleware
	next();
});

app.get("/", async (req, res) => {
	let now = dayjs();
	

	let dateTo = now.format("YYYY-MM-DD HH:mm:ss");
	let dateFrom = now.subtract(23, "hour").format("YYYY-MM-DD HH:mm:ss");

	const rates = await getRates(dateFrom, dateTo);
	console.log(rates);
	console.log(dateFrom);
	console.log(dateTo);

	res.json(rates);
});

// require('./routes')(app);

module.exports = app;
