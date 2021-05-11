const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jbh730:qudgus@88@cluster0.bugja.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}). then(() => console.log('MongoDB Conneted...'))
  . catch(err => console.log(err))

// app.get('/', (req, res) => res.setEncoding('Hello World!'))
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!!!`))