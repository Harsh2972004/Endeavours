const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const routes = require("./routes/api/user");
const listItemsRoutes = require("./routes/api/listItems");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// use the cors middleware with the
// origin and credentials options
app.use(cors({ origin: true, credentials: true }));

// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use cookie parser
app.use(cookieParser());

// use the routes module as a middleware
// for the /api/books path
app.use("/api/user", routes);
app.use("/api/list", listItemsRoutes);

//connecting to mongoDB database
connectDB();

app.get("/", (req, res) => res.send("Hello world!"));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("server running at port:" + port));
