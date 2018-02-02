'use strict'
const api = require('./api')
const ui = require('./ui')

const onGetBook = function (event) {
  event.preventDefault()
  api.getBook()
    .then(ui.showBooks)
    .catch(console.log('error'))
}
const onGetBooks = function (event) {
  event.preventDefault()
  api.getAllBooks()
    .then(ui.showBooks)
    .catch(console.log('error'))
}

const addHandlers = function (data) {
  $('#get-book').on('submit', onGetBook)
  $('#all-books-button').on('click', onGetBooks)
}

module.exports = {
  addHandlers
}
