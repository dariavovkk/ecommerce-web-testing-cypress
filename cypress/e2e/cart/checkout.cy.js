import CheckoutPage from '../../pageObjects/CheckoutPage';

describe('Checkout Process', () => {
  before(() => {
    cy.visit('/');
    CheckoutPage.addProduct('Sony vaio i5');
  });

  beforeEach(() => {
    cy.visit('/cart.html')
  })
  
  it('should complete checkout', () => {
    CheckoutPage.fillOrderDetails('Test User', 'USA', 'New York', '1234567890123456', '12', '2025');
    CheckoutPage.submitOrder();
    CheckoutPage.assertOrderSuccess();
  });
});