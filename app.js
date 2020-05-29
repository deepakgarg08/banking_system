const express = require('express')
// const body = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const Posts = require('./model/mongoscheme')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))




let uri = "mongodb+srv://deepakgarg08:92119211@cluster0-zr3gu.mongodb.net/LakshayDb?retryWrites=true";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) console.log('error connecting the mongodb' + err)
    else console.log('connection is successful.')
})


app.get('/', (req, res) => {

    res.send('Welcome ')

})

app.post('/new', (req, res) => {
    // console.log('req', req.body)
    const { initial_balance } = req.body

    if (initial_balance < 2000) {
        return res.send('bhag yha sei...gareeb sala')
    }
    let user = new Posts(req.body)
    user.save().then(data => {
        res.json(data)
    }).catch(err => res.json(err))




})



app.post('/deposit', (req, res) => {
    console.log('req', req.body)

    
    res.send('deposit')

})

app.post('/withdraw', (req, res) => {

    res.send('withdraw')

})

app.patch('/changeuserdetaild', (req, res) => {

    res.send('changeuserdetaild')

})

app.delete('/delete', (req, res) => {

    res.send('delete')

})

app.get('/checkbalance', (req, res) => {

    res.send('checkbalance')

})


app.listen("3000", e => console.log("server started at port 3000 "))




























