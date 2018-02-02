'use strict'

const config = require('./config')

const getBook = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/books/' + data.book.id,
    method: 'GET'
  })
}

const getAllBooks = function () {
  return $.ajax({
    url: config.apiOrigin + '/books',
    method: 'GET'
  })
}

module.exports = {
  getBook,
  getAllBooks
}
