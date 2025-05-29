class ProductPage {
    visitProduct(productName) {
      cy.contains(productName).click();
    }
  
    addToCart() {
      cy.get('.btn-success').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Product added');
      });
    }
  }
  
  export default new ProductPage();  