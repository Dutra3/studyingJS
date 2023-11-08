const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

app.use("/jujutsu", express.static(path.join(__dirname, 'client')));

app.get("/", (req, res) => {
    res.type("html");
    res.send("Method GET")
})

app.post("/", (req, res) => {
    res.type("html");
    res.send("Method POST")
})

app.put("/", (req, res) => {
    res.type("html");
    res.send("Method PUT")
})

app.delete("/", (req, res) => {
    res.type("html");
    res.send("Method DELETE")
})

app.listen(PORT, () => {
    console.log(`Server is running on Port:${PORT}`);
});