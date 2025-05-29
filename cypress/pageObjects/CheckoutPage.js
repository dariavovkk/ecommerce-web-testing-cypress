class CheckoutPage {
  addProduct(productName) {
    cy.contains(productName).click();
    cy.contains('Add to cart').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added');
    });
  }

  fillOrderDetails(name, country, city, card, month, year) {
    cy.get('.btn-success').click();
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

export default new CheckoutPage();