'use strict'

const booksTemplate = require('./templates/booklisting.handlebars')

const showBooks = function (data) {
  console.log('in ui.showBooks', data)
  const booksHtml = booksTemplate({ books: data.books })
  $('#content').html(booksHtml)
}

module.exports = {
  showBooks
}
