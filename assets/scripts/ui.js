'use strict'

const booksTemplate = require('./templates/booklisting.handlebars')

const showBooks = function (data) {
  const booksHtml = booksTemplate({ books: data.books })
  $('#content').val(booksHtml)
}

module.exports = {
  showBooks
}
