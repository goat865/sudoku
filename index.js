require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

app.use(cors);

app.listen(PORT, (err) => {
    if (err) {
        console.warn(err);

    } else {
        console.log("Express backend server is running on port", PORT);
    }
});

app.get("/", (req, res) => res.status(200).json("asd"));
