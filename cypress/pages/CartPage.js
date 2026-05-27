import CartSelectors from './selectors/CartSelectors'

class CartPage {
  selectors = new CartSelectors()

  validateProducts(quantity) {
    cy.get(this.selectors.inventoryItems)
      .should('have.length', quantity)
  }

  clickCheckout() {
    cy.get(this.selectors.checkoutButton).click()
  }
}

export default CartPage