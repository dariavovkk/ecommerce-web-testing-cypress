import CartPage from '../../pageObjects/CartPage';

describe('Cart Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add and remove product', () => {
    CartPage.addProduct('Samsung galaxy s6');
    CartPage.assertProductInCart('Samsung galaxy s6');
    CartPage.removeProduct('Samsung galaxy s6');
    CartPage.assertProductNotInCart('Samsung galaxy s6');
  });
});