class CartPage {
  addProduct(name) {
    cy.contains(name).click();
    cy.contains('Add to cart').click();
    cy.go('back');
  }
  removeProduct(name) {
    cy.get('#cartur').click();
    cy.contains('Delete').click();
  }
  assertProductInCart(name) {
    cy.get('#cartur').click();
    cy.contains(name).should('exist');
  }
  assertProductNotInCart(name) {
    cy.get('#cartur').click();
    cy.contains(name).should('not.exist');
  }
}
export default new CartPage();