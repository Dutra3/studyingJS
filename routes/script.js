const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let students = [
    { id: 0, name: "Jose"},
    { id: 1, name: "Maria"},
    { id: 2, name: "Gabriel"},
    { id: 3, name: "Marcos"},
];

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Something");
});

app.get("/alunos", (req, res) => {
    res.json(Json.stringfy(students));
});

app.get("/alunos/:id", (req, res) => {
    let student = students[req.body.id]

    res.json(student.name);
});


app.listen(3000, () => console.log('Server is running on Port 3000'))

