const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed Up!')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function () {
  console.error('error signing up')
}
const signInFailure = function () {
  console.error('error signing in')
  $('#message').show()
}
const signInSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed in, YO!')
  store.user = data.user
  $('#sign-in').trigger('reset')
}
const changePasswordSuccess = function () {
  console.log('changed password!')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function () {
  console.log('Error changing password')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordFailure,
  changePasswordSuccess
}
