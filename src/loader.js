const app = require(`./config/server`)

//DB
require(`./config/database`)

//Routes
const routes = require('./http/routes/index')
app.use('/api', routes)
