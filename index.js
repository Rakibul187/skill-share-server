const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
const categories = require('./data/categories.json')
const courses = require('./data/courses.json')

app.use(cors())
app.get('/', (req, res) => {
    res.send('Skill Share Is Running !!')
})

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.get('/courses', (req, res) => {
    res.send(courses)
})


app.listen(port, () => {
    console.log('Skill Share Server Is Running on port ', port)
})