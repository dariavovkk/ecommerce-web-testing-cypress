import CategoryFilterPage from '../../pageObjects/CategoryFilterPage';

describe('Category Filters', () => {
  it('should filter by category', () => {
    cy.visit('/');
    CategoryFilterPage.selectCategory('Laptops');
    CategoryFilterPage.assertCategoryProducts('Laptops');
  });
});