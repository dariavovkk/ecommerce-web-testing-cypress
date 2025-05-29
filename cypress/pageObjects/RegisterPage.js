class RegisterPage {
    visit() {
      cy.visit('/index.html');
      cy.get('#signin2').click();
      cy.wait(1000);
    }
  
    fillUsername(username) {
      cy.get('#sign-username').type(username);
    }
  
    fillPassword(password) {
      cy.get('#sign-password').type(password);
    }
  
    submit() {
      cy.get('button[onclick="register()"]').click();
    }
  
    assertRegisterSuccess() {
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Sign up successful.');
      });
    }
  }
  
  export default new RegisterPage();  