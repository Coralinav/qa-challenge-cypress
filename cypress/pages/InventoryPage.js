import InventorySelectors from './selectors/InventorySelectors'

class InventoryPage {
  selectors = new InventorySelectors()

  validateProductsPage() {
    cy.url().should('include', '/inventory.html')
    cy.get(this.selectors.title).should('contain', 'Products')
  }

  addBackpackToCart() {
    cy.get(this.selectors.backpackButton).click()
  }

  addBikeLightToCart() {
    cy.get(this.selectors.bikeLightButton).click()
  }

  validateCartBadge(quantity) {
    cy.get(this.selectors.shoppingCartBadge)
      .should('contain', quantity)
  }

  openCart() {
    cy.get(this.selectors.shoppingCart).click()
  }
}

export default InventoryPage