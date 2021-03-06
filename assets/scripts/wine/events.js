const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onMakeWine = function (event) {
  event.preventDefault()
  $('#make-wine-price').val().replace(/\$/g, '')
  const data = getFormFields(this)
  // console.log('button working')
  // console.log(data)
  api.makeWine(data)
    .then(ui.MakeWineSuccess)
    .catch(ui.MakeWineFailure)
}

const onGetWines = function (event) {
  event.preventDefault()
  $('.content').slideToggle()
  api.getWines()
    .then(ui.getWinesSuccess)
    .catch(ui.getWinesFailure)
}

const addHandlers = function () {
  $('#make-wine').on('submit', onMakeWine)
  $('#get-wines').on('submit', onGetWines)
}

module.exports = {
  addHandlers
}
