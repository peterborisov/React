const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsById = {}

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsById[req.params.id] || [])
})

app.post('/posts/:id/comments', (req, res) => {
    const id = Math.random();
    const { title, content } = req.body;

    const comments = commentsById[req.params.id] || [];

    comments.push({ id, title, content })

    commentsById[req.params.id] = comments;
    
    res.status(201).send(comments);
})

app.listen(4001, () => {
    console.log('App listen on port 4001')
})