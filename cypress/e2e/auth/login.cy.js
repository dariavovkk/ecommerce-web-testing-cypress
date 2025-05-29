import LoginPage from '../../pageObjects/LoginPage'

describe('Login Tests', () => {
  beforeEach(() => {
    cy.fixture('user').as('userData')
  })

  it('Successful login', function() {
    LoginPage.visit()
    LoginPage.fillEmail(this.userData.email)
    LoginPage.fillPassword(this.userData.password)
    LoginPage.submit()
    LoginPage.assertLoginSuccess()
  })

  it('Failed login', () => {
    LoginPage.visit()
    LoginPage.fillEmail('wronguser')
    LoginPage.fillPassword('wrongpass')
    LoginPage.submit()
    LoginPage.assertLoginFailure()
  })
})