const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  // console.log('on signout in events.js')
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
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
const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#make-wine').on('submit', onMakeWine)
  $('#get-wines').on('submit', onGetWines)
}

module.exports = {
  addHandlers
}
