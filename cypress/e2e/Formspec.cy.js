describe('Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/')
  })
  it('Should be able to make a selection', () => {
    cy.get('select').select('collage')
  })
  it('Should be able to click "GO!" and see the selection displayed on a new page', () => {
    cy.intercept('GET', 'http://localhost:3000/api/v1/work', {
      fixture: 'work.json',
      statusCode: 200
  })
    cy.get('select').select('collage')
    .get('button').click()
    cy.url().should('eq', 'http://localhost:3001/collage')
  })
  it('Should be able to return home by clicking the title', () => {
    cy.get('h1').click()
    cy.url().should('eq', 'http://localhost:3001/')
  })
})