Cypress.Commands.add('login', (username, password) => {
    cy.get('#login2').click()
    cy.get('#loginusername').type(username)
    cy.get('#loginpassword').type(password)
    cy.get('button[onclick="logIn()"]').click()
  })  