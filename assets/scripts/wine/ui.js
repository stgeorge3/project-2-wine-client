const showWines = require('../templates/wine-listing.handlebars')
const api = require('./api')

const MakeWineSuccess = function (data) {
  console.log('make wine success')
  console.log(data)
  $('#make-wine').trigger('reset')
}
const MakeWineFailure = function () {
  console.log('make wine failure')
}
const getWinesSuccess = function (data) {
  console.log(data)
  console.log('You got all the wines')
  $('.content').empty()
  const showWinesHtml = showWines({ wines: data.wines })
  $('.content').append(showWinesHtml)
  $('.delete-wine').on('click', function () {
    const wineId = $(this).parent().parent().data('id')
    console.log('this will delete wine # ' + wineId)
    $(this).parent().parent().remove()
    api.deleteWine(data, wineId)
      .then(deleteWinesSuccess)
      .catch(deleteWinesFailure)
  })
}

const getWinesFailure = function () {
  console.error('error getting wines')
}
const editWineSuccess = function (data) {
  console.log('edit wine success')
  console.log(data)
  $('#edit-wine').trigger('reset')
}
const editWineFailure = function () {
  console.log('edit wine failure')
}
const deleteWinesSuccess = function (data) {
  console.log('delete wine success')
}
const deleteWinesFailure = function () {
  console.log('delete wine failure')
}

module.exports = {
  MakeWineSuccess,
  MakeWineFailure,
  getWinesFailure,
  getWinesSuccess,
  editWineFailure,
  editWineSuccess
}