class LoginPage {
  visit() {
    cy.visit('/');
  }

  fillEmail(email) {
    cy.get('#loginusername').type(email);
  }

  fillPassword(password) {
    cy.get('#loginpassword').type(password);
  }

  submit() {
    cy.get('button[onclick="logIn()"]').click();
  }

  assertLoginSuccess() {
    cy.get('#nameofuser', { timeout: 10000 }).should('contain.text', 'Welcome');
  }

  assertLoginFailure() {
    cy.get('.modal-content').should('contain.text', 'Wrong password.');
  }
}

export default LoginPage;