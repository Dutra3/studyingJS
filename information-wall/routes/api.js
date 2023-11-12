const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const posts = require('../model/posts.js');

const router = express.Router();
const options = {
    origin: "http://localhost:3333",
};

router.use(cors(options));

router.get('/all', (request, response) => {
    response.json(JSON.stringify(posts.getAll));
})

router.post('/new', bodyParser.json(), (request, response) => {
    let title = request.body.title;
    let description = request.body.description;

    posts.newPost(title, description);

    response.status(201).send('POST created');
})

module.exports = router;