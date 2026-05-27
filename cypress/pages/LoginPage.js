import LoginSelectors from './selectors/LoginSelectors'

class LoginPage {
  selectors = new LoginSelectors()

  visit() {
    cy.visit('https://www.saucedemo.com/')
  }

  enterUsername(username) {
    cy.get(this.selectors.usernameInput).type(username)
  }

  enterPassword(password) {
    cy.get(this.selectors.passwordInput).type(password)
  }

  clickLogin() {
    cy.get(this.selectors.loginButton).click()
  }

  validateLoginError() {
    cy.get(this.selectors.errorMessage)
      .should('be.visible')
      .and('contain', 'Username and password do not match')
  }
}

export default LoginPage