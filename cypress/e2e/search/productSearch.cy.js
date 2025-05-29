describe('Product Search', () => {
    it('Search for product by category', () => {
      cy.visit('/')
      cy.contains('Laptops').click()
      cy.get('.card-title').should('contain.text', 'Sony vaio i5')
    })
  })  