const express = require('express');
const router = express.Router();

const students = [
    { id: 0, name: "Jose"},
    { id: 1, name: "Maria"},
    { id: 2, name: "Gabriel"},
    { id: 3, name: "Marcos"},
];

router.get("/", (req, res) => {
    res.json(students);
});

router.get("/:id", (req, res) => {
    const studentId = req.params.id;
    const student = students[studentId];

    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ error: "Student not found" });
    }
});

module.exports = router;