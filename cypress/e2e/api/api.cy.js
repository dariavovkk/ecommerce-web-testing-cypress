describe('API Tests', () => {
  it('should get products list', () => {
    cy.request('/entries').its('status').should('eq', 200);
  });
});