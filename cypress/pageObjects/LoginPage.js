class LoginPage {
  visit() {
    cy.visit('/');
  }
  fillUsername(username) {
    cy.get('#loginusername').clear().type(username);
  }
  fillPassword(password) {
    cy.get('#loginpassword').clear().type(password);
  }
  submitLogin() {
    cy.get('button[onclick="logIn()"]').click();
  }
  assertLoginFailure() {
    cy.on('window:alert', (str) => {
      expect(str).to.include('Wrong password.');
    });
  }
}

export default new LoginPage();