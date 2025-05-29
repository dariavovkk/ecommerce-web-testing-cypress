import RegisterPage from '../../pageObjects/RegisterPage'

describe('Registration Tests', () => {
  it('Successful registration', () => {
    const username = 'user' + Math.floor(Math.random() * 10000)
    const password = 'TestPassword123'
    RegisterPage.visit()
    RegisterPage.fillUsername(username)
    RegisterPage.fillPassword(password)
    RegisterPage.submit()
    RegisterPage.assertRegisterSuccess()
  })
})