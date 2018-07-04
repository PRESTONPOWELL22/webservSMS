
const $ = window.$
// const alert = window.alert
// let files = window.files

$(document).ready(() => {
  $('.fileSubmit').on('click', () => {
      $.ajax({
          url: '/upload',
          method: 'post'
      })
  })
})
