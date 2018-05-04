//
// **** Kitchen Sink Tests ****
//
// This app was developed to demonstrate
// how to write tests in Cypress utilizing
// all of the available commands
//
// Feel free to modify this spec in your
// own application as a jumping off point

// Please read our "Introduction to Cypress"
// https://on.cypress.io/introduction-to-cypress

describe('Angular', function () {
  it('Two is completed', function () {
    // https://on.cypress.io/visit
      cy.visit('http://todomvc.com/examples/angularjs/#/')
      cy.title().should('contain', 'Angular')
      cy.get('input:first').type('One {enter}').type('Two {enter}').type('Three {enter}')
      cy.get('input[type=checkbox]').eq(1).check()
      cy.get('input[type=checkbox]').eq(1).should('be.checked')
      cy.wait(1000)
      cy.screenshot()
  })
})

