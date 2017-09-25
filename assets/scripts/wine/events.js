const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onMakeWine = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('button working')
  console.log(data)
  api.makeWine(data)
    .then(ui.MakeWineSuccess)
    .catch(ui.MakeWineFailure)
}

const onGetWines = function (event) {
  event.preventDefault()
  api.getWines()
    .then(ui.getWinesSuccess)
    .catch(ui.getWinesFailure)
}

const onEditWine = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('button working')
  console.log(data)
  api.editWine(data)
    .then(ui.editWineSuccess)
    .catch(ui.editWineFailure)
}

const addHandlers = function () {
  $('#make-wine').on('submit', onMakeWine)
  $('#get-wines').on('submit', onGetWines)
  $('#edit-wine').on('submit', onEditWine)
}

module.exports = {
  addHandlers
}
