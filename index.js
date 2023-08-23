const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const route = require('./routes/routes')
const cors = require('cors')
const app = express()
require('dotenv').config()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

// cors
// app.use(cors)

// initializing port
let port = process.env.PORT || 3000

// setting headers
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

// swagger config
const swaggerUi = require('swagger-ui-express')
const swaggerDoc = require('./swagger.json');


// route
app.use(route)


const initServer =
    async () => {
  try {
    // listening to the server
    app.listen(
           port, () => {console.log(`Example app listening on port ${port}`)})

        // connecting to the database
        await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to Stackruit database.')
  } catch (error) {
    // exit server on error
    console.error(error);
    process.exit(1);
  }
}

// setting up swagger
// endpoint = http://localhost:<port>/api-docs/
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

initServer()

module.exports = {
    app
};