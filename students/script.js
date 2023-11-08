const express = require('express');
const bodyParser = require('body-parser');
const student = require('./routes/student')

const app = express();

app.use(bodyParser.json());
app.use("/students", student);

app.get("/", (req, res) => {
    res.send("Something");
});


app.listen(3000, () => console.log('Server is running on Port 3000'))

