var express = require('express')
var app = express()
const fileUpload = require('express-fileupload')
var PORT = 3011 || process.env.PORT
var path = require('path')

// middleware ========================================================================
app.use(fileUpload())

// routes ============================================================================
app.use('/', require('./API/routes/apiRoutes').router)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/views/index.html'))
})

// listener ========================================================================
app.listen(PORT, () => {
  console.log(`app listinening on ${PORT}`)
})
