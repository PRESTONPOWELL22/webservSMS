
const $ = window.$
const alert = window.alert
let files = window.files
$(document).ready(() => {
  $('#txtFileUpload').on('click', () => {
    // event.preventDefault()
    alert('you clicked me you piece of shit')
  })

  $('input[type=file]').on('change', prepareUpload)

  // Grab the files and set them to our variable
  function prepareUpload (event) {
    files = event.target.files
    console.log(files)
  }
})
