import CheckoutPage from '../../pageObjects/CheckoutPage';

describe('Checkout Process', () => {
  beforeEach(() => {
    cy.visit('/');
    CheckoutPage.addProduct('Sony vaio i5');
  });

  it('should complete checkout', () => {
    CheckoutPage.completeCheckout('Test User', 'USA', 'New York', '1234567890123456', '12', '2025');
    CheckoutPage.assertCheckoutSuccess();
  });
});