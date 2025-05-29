class CategoryFilterPage {
    selectCategory(name) { cy.contains(name).click(); }
    assertCategoryProducts(category) {
      cy.get('.card-title').should('exist');
    }
  }
  export default new CategoryFilterPage();  