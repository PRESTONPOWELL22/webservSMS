const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')
const PORT = 3011 || process.env.PORT
const path = require('path')

// middleware ==========================================================================================================
app.use(fileUpload())

// routes ==============================================================================================================

// API Routes
app.use('/', require('./API/routes/apiRoutes').router)

// Routes for static HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/views/index.html'))
})

app.get('/landing.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/views/landing.html'))
})

// listener ============================================================================================================
app.listen(PORT)
