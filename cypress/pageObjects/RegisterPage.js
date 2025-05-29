class RegisterPage {
  visit() { cy.visit('/'); }
  fillUsername(username) { cy.get('#sign-username').type(username); }
  fillPassword(password) { cy.get('#sign-password').type(password); }
  submitRegister() { cy.get('button[onclick="register()"]').click(); }
  assertRegisterSuccess() {
    cy.on('window:alert', (str) => expect(str).to.include('Sign up successful'));
  }
}
export default new RegisterPage();