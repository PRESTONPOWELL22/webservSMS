let $ = window.$
let io = window.io

$(document).ready(() => {
  var socket = io()
  $('form').submit(() => {
    let m = $('#m').val()
    let n = $('#n').val()
    socket.emit('chat message', m)
    $('#messages').append($('<li>').text(m))
    $.post('/send/sms', {'message': m, 'number': n}, function (d, s) {
      console.log('text sent')
    })
    $('#m').val('')
    return false
  })
  socket.on('inboundmsg', function (msg) {
    $('#messages').append($('<li>').text(msg))
  })
})
