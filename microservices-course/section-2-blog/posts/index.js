const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const posts = {}
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/posts', (req, res) => {
    const id = Math.random();
    const { title, content, details } = req.body;
    posts[id] = {
        title,
        content,
        details
    }

    res.status(201).send(posts[id])
})

app.listen(4000, () => {
    console.log('App listen on port 4000')
})