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

describe('React', function () {
  it('Sorting by completed tasks', function () {
    // https://on.cypress.io/visit
      cy.visit('http://todomvc.com/examples/react/#/')
      cy.title().should('contain', 'React')
      cy.get('input:first').type('One {enter}').type('Two {enter}').type('Three {enter}')
      cy.get('input[type=checkbox]').eq(1).check()
      cy.get('a[href="#/completed"]').click()
      cy.wait(1000)
      cy.get('ul li').should('contain','One')
      cy.get('ul li').should('not.contain','Two')
      cy.get('ul li').should('not.contain','Three')
      cy.wait(1000)
      cy.screenshot()
  })
})

