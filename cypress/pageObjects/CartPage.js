class CartPage {
    visit() {
      cy.get('#cartur').click();
    }
  
    checkProductInCart(productName) {
      cy.get('.success td').should('contain.text', productName);
    }
  
    checkout() {
      cy.contains('Place Order').click();
      cy.get('#name').type('Test User');
      cy.get('#country').type('Test Country');
      cy.get('#city').type('Test City');
      cy.get('#card').type('1234 5678 9012 3456');
      cy.get('#month').type('12');
      cy.get('#year').type('2025');
      cy.contains('Purchase').click();
    }
  
    assertOrderSuccess() {
      cy.get('.sweet-alert').should('contain.text', 'Thank you for your purchase!');
    }
  }
  
  export default new CartPage();  