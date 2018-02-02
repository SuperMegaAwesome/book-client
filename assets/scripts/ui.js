'use strict'

const booksTemplate = require('./templates/booklistings.handlebars')

const showBooks = function (data) {
  const booksHtml = booksTemplate({ handlebars: data.books })
  $('#content').val(booksHtml)
}

module.exports = {
  showBooks
}
