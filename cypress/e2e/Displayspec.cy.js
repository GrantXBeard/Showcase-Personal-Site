describe('Display', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/')
    cy.intercept('GET', 'http://localhost:3000/api/v1/work', {
      fixture: 'work.json',
      statusCode: 200
  })
    cy.get('select').select('collage')
    .get('button').click()
  })
  it('Should have Images displayed', () => {
    cy.get('.image').first().should('have.attr', 'id').should('include', 19)
  })
  it('Should be able to return home by clicking the title', () => {
    cy.get('h1').click()
    cy.url().should('eq', 'http://localhost:3001/')
  })
})