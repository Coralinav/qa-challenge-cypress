import DemoblazeConstants from './constants/DemoblazeConstants'

class DemoblazeApi {
  signup(username, password) {
    return cy.request({
      method: 'POST',
      url: `${DemoblazeConstants.BASE_URL}${DemoblazeConstants.ENDPOINTS.SIGNUP}`,
      body: {
        username,
        password
      }
    })
  }

  login(username, password) {
    return cy.request({
      method: 'POST',
      url: `${DemoblazeConstants.BASE_URL}${DemoblazeConstants.ENDPOINTS.LOGIN}`,
      body: {
        username,
        password
      }
    })
  }
}

export default DemoblazeApi