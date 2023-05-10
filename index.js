const express = require("express");
const router = require("./router")
const PORT = 8080;

const app = express();

app.use(express.static("static"));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(router);

app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})