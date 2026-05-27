import DemoblazeApi from '../api/DemoblazeApi'
import DemoblazeConstants from '../api/constants/DemoblazeConstants'

describe('Demoblaze API Tests', () => {
  const demoblazeApi = new DemoblazeApi()

  beforeEach(() => {
    cy.fixture('apiData').as('apiData')
  })

  it('should create a new user successfully', function () {
    const username = `${this.apiData.usernamePrefix}_${Date.now()}`

    demoblazeApi
      .signup(username, this.apiData.validPassword)
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('should validate existing user error', function () {
    const username = `${this.apiData.usernamePrefix}_${Date.now()}`

    demoblazeApi.signup(username, this.apiData.validPassword)

    demoblazeApi
      .signup(username, this.apiData.validPassword)
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.errorMessage)
          .to.contain(DemoblazeConstants.RESPONSE_MESSAGES.EXISTING_USER)
      })
  })

  it('should login successfully', function () {
    const username = `${this.apiData.usernamePrefix}_${Date.now()}`

    demoblazeApi.signup(username, this.apiData.validPassword)

    demoblazeApi
      .login(username, this.apiData.validPassword)
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.contain(DemoblazeConstants.AUTH_TOKEN)
      })
  })

  it('should validate wrong password error', function () {
    const username = `${this.apiData.usernamePrefix}_${Date.now()}`

    demoblazeApi.signup(username, this.apiData.validPassword)

    demoblazeApi
      .login(username, this.apiData.wrongPassword)
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.errorMessage)
          .to.contain(DemoblazeConstants.RESPONSE_MESSAGES.WRONG_PASSWORD)
      })
  })
})