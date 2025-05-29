class LoginPage {
  visit() { cy.visit('/'); }
  fillUsername(username) { cy.get('#loginusername').type(username); }
  fillPassword(password) { cy.get('#loginpassword').type(password); }
  submitLogin() { cy.get('button[onclick="logIn()"]').click(); }
  assertLoginSuccess() {
    cy.get('#nameofuser', { timeout: 10000 }).should('contain.text', 'Welcome');
  }
  assertLoginFailure() {
    cy.on('window:alert', (str) => expect(str).to.include('Wrong'));
  }
}
export default new LoginPage();