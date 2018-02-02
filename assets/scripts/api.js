'use strict'

const config = require('./config')
const store = require('./store')

const getBook = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/books/' + data.book.id,
    method: GET,
    data
  })
}

const getAllBooks = function () {
  return $.ajax({
    url: config.apiOrigin + '/books',
    method: GET
  })
}

module.exports = {
  getBook,
  getAllBooks
}
