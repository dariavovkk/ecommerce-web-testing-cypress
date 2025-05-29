import ProductPage from '../../pageObjects/ProductPage'
import CartPage from '../../pageObjects/CartPage'

describe('Cart Tests', () => {
  it('Add product to cart and verify', () => {
    cy.visit('/')
    ProductPage.visitProduct('Samsung galaxy s6')
    ProductPage.addToCart()
    CartPage.visit()
    CartPage.checkProductInCart('Samsung galaxy s6')
  })
})