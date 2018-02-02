'use strict'

const booksTemplate = require('HANDLEBARS GO HERE')

const showBooks = function (data) {
  const booksHtml = booksTemplate({ handlebars: data.books })
  $('#content').val(booksHtml)
}

module.exports = {
  showBooks
}
