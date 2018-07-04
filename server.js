var express = require('express')
var app = express()
const fileUpload = require('express-fileupload')
var PORT = 3011 || process.env.PORT
var path = require('path')

app.use(fileUpload())
app.use(express.static('client'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/views/index.html'))
})

app.post('/upload', (req, res) => {
  if (!req.files) { return res.status(400).send('No files were uploaded.')}

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('/somewhere/on/your/server/filename.jpg', function (err) {
    if (err) { return res.status(500).send(err)}

    res.send('File uploaded!')
  })
})

app.listen(PORT, () => {
  console.log(`app listinening on ${PORT}`)
})
