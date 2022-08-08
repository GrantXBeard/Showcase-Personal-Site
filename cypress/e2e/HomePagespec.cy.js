describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('https://grantxbeard.herokuapp.com/')
  })
  it('Should see a title', () => {
    cy.contains('h1', 'Grant X Beard')
  })
  it('Should have a bio button', () => {
    cy.contains('button', 'Info')
  })
  it('Should have a dropdown', () => {
    cy.get('form')
  })
  it('Should have a "GO!" button', () => {
    cy.contains('button', 'Go')
  })
})