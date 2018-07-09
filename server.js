const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')
const PORT = 3011 || process.env.PORT
const path = require('path')

// middleware ==========================================================================================================
app.use(fileUpload())
app.use('/static', express.static(path.join(__dirname, './client/views/routes/htmlRoutes')))
// routes ==============================================================================================================

// API Routes
app.use('/', require('./API/routes/apiRoutes').router)
// HTML Routes
app.use('/', require('./client/views/routes/htmlRoutes').router)

// listener ============================================================================================================
app.listen(PORT)
