describe('Form', () => {
  beforeEach(() => {
    cy.visit('https://grantxbeard.herokuapp.com/')
  })
  it('Should be able to make a selection', () => {
    cy.get('select').select('collage')
  })
  it('Should be able to click "GO!" and see the selection displayed on a new page', () => {
    cy.intercept('GET', 'https://grantxbeardapi.herokuapp.com/api/v1/work', {
      fixture: 'work.json',
      statusCode: 200
  })
    cy.get('select').select('collage')
    .get('.medium-submit').click()
    cy.url().should('eq', 'https://grantxbeard.herokuapp.com/collage')
  })
  it('Should be able to return home by clicking the title', () => {
    cy.get('h1').click()
    cy.url().should('eq', 'https://grantxbeard.herokuapp.com/')
  })
})