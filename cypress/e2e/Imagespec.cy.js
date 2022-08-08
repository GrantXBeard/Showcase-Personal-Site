describe('Image', () => {
  beforeEach(() => {
    cy.visit('https://grantxbeard.herokuapp.com/')
    cy.intercept('GET', 'https://grantxbeardapi.herokuapp.com/api/v1/work', {
      fixture: 'work.json',
      statusCode: 200
  })
    cy.get('select').select('mixed media')
    .get('.medium-submit').click()
  })
  it('Should be able to click an Image to see details', () => {
    cy.get('.image').first().click()
    .get('.item-container').contains('p', 'small mixed media collage')
  })
  it('Should see the Image id at the end of the URL', () => {
    cy.get('.image').eq(1).click()
    .url().should('eq', 'https://grantxbeard.herokuapp.com/mixed%20media/14')
  })
  it('Should be able to close out details', () => {
    cy.get('.image').eq(1).click()
    .get('.item-container').get('span').click()
    .url().should('eq', 'https://grantxbeard.herokuapp.com/mixed%20media')
  })
  it('Should be able to return home by clicking the title', () => {
    cy.get('h1').click()
    cy.url().should('eq', 'https://grantxbeard.herokuapp.com/')
  })
})