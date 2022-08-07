describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('Should see a title', () => {
    cy.contains('h1', 'Grant X Beard')
  })
  it('Should have a bio button', () => {
    cy.contains('p', '+')
  })
  it('Should have a dropdown', () => {
    cy.get('form')
  })
  it('Should have a "GO!" button', () => {
    cy.contains('button', 'GO!')
  })
})