describe('Display', () => {
  beforeEach(() =>{
    cy.visit('https://grantxbeard.herokuapp.com/')
  })
  it('Should display an error to the user if compliments do not load', () => {
    cy.intercept('GET', 'https://grantxbeardapi.herokuapp.com/api/v1/work', {
      statusCode: 400
  })
    cy.get('select').select('collage')
    cy.get('.medium-submit').click()
    .get('.error-message').contains('There has been an error. Please try again.')
  })
  it('Should have Images displayed', () => {
    cy.intercept('GET', 'https://grantxbeardapi.herokuapp.com/api/v1/work', {
      fixture: 'work.json',
      statusCode: 200
  })
    cy.get('select').select('collage')
    cy.get('.medium-submit').click()
    cy.get('.image').first().should('have.attr', 'id').should('include', 19)
  })
  it('Should be able to return home by clicking the title', () => {
    cy.get('h1').click()
    cy.url().should('eq', 'https://grantxbeard.herokuapp.com/')
  })
})