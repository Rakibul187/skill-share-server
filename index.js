const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
app.use(cors())

const categories = require('./data/categories.json')
const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('Skill Share API Is Running !!')
})

app.get('/courses-categories', (req, res) => {
    res.send(categories)
})

app.get('/courses/:id', (req, res) => {
    console.log(req.params.id)
    const id = req.params.id;
    const selectedCourses = courses.find(course => course.category_id == id)
    res.send(selectedCourses)
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log('Skill Share Server Is Running on port ', port)
})