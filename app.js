const express = require('express')
const bodyParser = require('body-parser')


const {result} = require('./Calculation')



const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/calculate',result)


app.listen(
    5000,
    console.log('Server running in  mode on port 5000' )
    )


