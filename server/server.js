const express = require('express')
// cross origion resourse sharing connets backend to fronend
const cors = require('cors')
require('./config/mongoose.config')
const app = express()
const port = 8000

// these line of code is written to fix the req.body issue
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// if the cors is witten like this "cors()" anyone can make req to your api"
// if it is  written "cors({origin:"http://localhost:3000"})" this will only accepts reqs from front-end.
app.use(cors())

require('./routes/product.route')(app)

app.listen(port, () => {
  console.log(`server is running on ${port}`)
})
