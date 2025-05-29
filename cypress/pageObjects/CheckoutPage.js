class CheckoutPage {
    fillOrderDetails(name, country, city, card, month, year) {
      cy.get('.btn-success').click(); // "Place Order"
      cy.get('#name').type(name);
      cy.get('#country').type(country);
      cy.get('#city').type(city);
      cy.get('#card').type(card);
      cy.get('#month').type(month);
      cy.get('#year').type(year);
    }
  
    submitOrder() {
      cy.contains('Purchase').click();
    }
  
    assertOrderSuccess() {
      cy.contains('Thank you for your purchase!').should('exist');
    }
  }
  
  export default CheckoutPage;  