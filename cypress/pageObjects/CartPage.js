class CartPage {
  addProduct(name) {
    cy.contains(name).click();
    cy.contains('Add to cart').click();
    cy.go('back');
  }
  assertProductInCart(name) {
    cy.get('#tbodyid').click();
    cy.contains(name).should('exist');
  }
  assertProductNotInCart(name) {
    cy.get('#tbodyid').click();
    cy.contains(name).should('not.exist');
  }
}
export default new CartPage();