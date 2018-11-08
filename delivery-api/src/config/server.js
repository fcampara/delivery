const port = 3000

const bodyParser = require(`body-parser`)
const express = require(`express`)
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(port , () => {
    console.log(`BACKEND RUN IN PORT ${port}`)
})


module.exports = app