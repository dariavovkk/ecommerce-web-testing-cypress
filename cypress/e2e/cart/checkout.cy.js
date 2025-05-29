import CartPage from '../../pageObjects/CartPage'

describe('Checkout Tests', () => {
  it('Checkout and verify success', () => {
    cy.visit('/')
    cy.contains('Samsung galaxy s6').click()
    cy.get('.btn-success').click()
    cy.on('window:alert', () => true)
    CartPage.visit()
    CartPage.checkout()
    CartPage.assertOrderSuccess()
  })
})