describe('Bio', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/')
    .get('p').click()
  })
  it('Should have an image', () => {
    cy.get('img').should('have.attr', 'src').should('include', 'https://i.ibb.co/Y83Vcjy/IMG-3311.jpg')
  })
  it('Should have a biography', () => {
    cy.get('p').eq(1).contains('Lorem ipsum')
  })
  it('Should be able to link to Instagram', () => {
    cy.get('a').eq(2).should('have.attr', 'href').should('include', 'https://www.instagram.com/grantxbeard/')
  })
  it('Should be able to exit back to the main page', () => {
    cy.get('p').first().click()
    cy.url().should('eq', 'http://localhost:3001/')
  })
  it('Should be able to return home by clicking the title', () => {
    cy.get('h1').click()
    cy.url().should('eq', 'http://localhost:3001/')
  })
})