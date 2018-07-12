const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')
const path = require('path')
const bodyParser = require('body-parser')
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const router = require('./API/routes/apiRoutes').router
const PORT = 3000 || process.env.PORT

// middleware ==========================================================================================================
app.use(fileUpload())
app.use('/static', express.static(path.join(__dirname, './client/views/routes/htmlRoutes')))
app.use(bodyParser.urlencoded({ extended: false }))
// routes ==============================================================================================================

// API Routes
app.use('/', require('./API/routes/apiRoutes').router)
// HTML Routes
app.use('/', require('./client/views/routes/htmlRoutes').router)

// socket for chat listener
io.on('connection', (socket) => {
  console.log('a user connected')
})

router.route('/sms')
  .post((req, res) => {
    let event = req.body.Body
    io.emit('inboundmsg', event)
    console.log(event)
  })

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg)
  })
})
// listener ============================================================================================================
server.listen(PORT)
