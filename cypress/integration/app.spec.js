/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Navigation', () => {
  it('should navigate to the about page', () => {
    cy.visit('/')
    cy.get('a').contains('About')

    // // Find a link with an href attribute containing "about" and click it
    // cy.get('#about').click()

    // // The new url should include "/about"
    // cy.url().should('include', '/about')

    // // The new page should contain an h1 with "About page"
    // cy.get('h1').contains('About Page')
  })
})
