const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => res.send("Welcome!"));

const routes = ["auth", "comments", "posts", "users"];

routes.forEach((route) => app.use("/" + route, require("./routes/" + route)));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
