import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'

describe('SauceDemo E2E Purchase Flow', () => {

  const loginPage = new LoginPage()
  const inventoryPage = new InventoryPage()
  const cartPage = new CartPage()
  const checkoutPage = new CheckoutPage()

  beforeEach(() => {
    cy.fixture('userData').as('userData')
  })

  it('should complete a purchase successfully', function () {

    cy.login(this.userData.username, this.userData.password)

    inventoryPage.validateProductsPage()

    inventoryPage.addBackpackToCart()
    inventoryPage.addBikeLightToCart()

    inventoryPage.validateCartBadge(2)

    inventoryPage.openCart()

    cy.url().should('include', '/cart.html')

    cartPage.validateProducts(2)

    cartPage.clickCheckout()

    checkoutPage.fillInformation(
      this.userData.firstName,
      this.userData.lastName,
      this.userData.postalCode
    )

    checkoutPage.continueCheckout()

    cy.url().should('include', '/checkout-step-two.html')

    checkoutPage.finishPurchase()

    checkoutPage.validateOrderComplete()

  })

})