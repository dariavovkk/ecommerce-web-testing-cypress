import RegisterPage from '../../pageObjects/RegisterPage';

describe('Register Tests', () => {
  beforeEach(() => {
    RegisterPage.visit();
    cy.get('#signin2').click();
  });

  it('should register a new user', () => {
    const username = `user${Date.now()}`;
    const password = 'Test123!';
    RegisterPage.fillUsername(username);
    RegisterPage.fillPassword(password);
    RegisterPage.submitRegister();
    RegisterPage.assertRegisterSuccess();
  });
});