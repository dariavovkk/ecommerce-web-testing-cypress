import LoginPage from '../../pageObjects/LoginPage';

describe('Login Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
    cy.get('#login2').click();
  });

  it('should login successfully', () => {
    cy.fixture('user').then((user) => {
      LoginPage.fillUsername(user.username);
      LoginPage.fillPassword(user.password);
      LoginPage.submitLogin();
    });
  });

  it('should show error for invalid login', () => {
    LoginPage.fillUsername('invaliduser');
    LoginPage.fillPassword('wrongpassword');
    LoginPage.submitLogin();
    LoginPage.assertLoginFailure();
  });
});