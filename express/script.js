const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

app.use("/jujutsu", express.static(path.join(__dirname, 'client')));

app.get("/", (req, res) => {
    res.type("html");
    res.send("Method GET")
})

app.listen(PORT, () => {
    console.log(`Server is running on Port:${PORT}`);
});