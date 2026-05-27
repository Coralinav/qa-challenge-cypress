Author:
Melanie Navarro


OVERVIEW


This project was developed using Cypress and JavaScript to automate both E2E and API testing scenarios.

Technologies Used:
- Cypress
- JavaScript
- Node.js


E2E AUTOMATION


Scenario automated:
- Complete purchase flow in SauceDemo

Framework Design:
- Page Object Model (POM)
- Selectors separated by page
- Reusable methods
- Externalized test data using fixtures


API AUTOMATION


Validated scenarios:
- User signup
- Existing user validation
- Successful login
- Invalid credentials validation

Framework Design:
- Reusable API methods
- Constants management
- Externalized payloads
- Centralized API logic


PROJECT STRUCTURE


cypress/
- api/
- e2e/
- fixtures/
- pages/
- selectors/
- support/


RUN TESTS


1. Install project dependencies:
npm install

2. Open Cypress Test Runner:
npx cypress open

Then:
- Select E2E Testing
- Select a browser
- Run the desired spec file

Available spec files:
- cypress/e2e/saucedemo.cy.js
- cypress/e2e/demoblaze-api.cy.js

3. Run all tests in headless mode:
npx cypress run

4. Run only the E2E test:
npx cypress run --spec "cypress/e2e/saucedemo.cy.js"

5. Run only the API test:
npx cypress run --spec "cypress/e2e/demoblaze-api.cy.js"
