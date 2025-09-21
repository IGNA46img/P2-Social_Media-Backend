const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;

const dbConnection = require("./config/db");
dbConnection();

app.use(express.json());
app.get("/", (req, res) => res.send("Welcome!"));

const routes = ["auth", "comments", "posts", "users"];
routes.forEach((route) => app.use("/" + route, require("./routes/" + route)));

app.use(require("./middleware/validation"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
