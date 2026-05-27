import CheckoutSelectors from './selectors/CheckoutSelectors'

class CheckoutPage {
  selectors = new CheckoutSelectors()

  fillInformation(firstName, lastName, postalCode) {
    cy.get(this.selectors.firstNameInput).type(firstName)
    cy.get(this.selectors.lastNameInput).type(lastName)
    cy.get(this.selectors.postalCodeInput).type(postalCode)
  }

  continueCheckout() {
    cy.get(this.selectors.continueButton).click()
  }

  finishPurchase() {
    cy.get(this.selectors.finishButton).click()
  }

  validateOrderComplete() {
    cy.get(this.selectors.completeHeader)
      .should('contain', 'Thank you for your order!')
  }
}

export default CheckoutPage