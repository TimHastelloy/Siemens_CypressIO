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
  it('Adding of 3 items', function () {
    // https://on.cypress.io/visit
      cy.visit('http://todomvc.com/examples/angularjs/#/')
      cy.title().should('contain', 'Angular')
      cy.get('input:first').type('One {enter}')
      cy.get('input:first').type('Two {enter}')
      cy.get('input:first').type('Three {enter}')
      cy.get('ul li').should('contain','One')
      cy.get('ul li').should('contain','Two')
      cy.get('ul li').should('contain','Three')
      cy.wait(1000)
      cy.screenshot()
  })
})

