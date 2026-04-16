describe('Teste de exemplo', () => {
  it('visita o Google e verifica o título', () => {
    cy.visit('https://www.google.com')
    // Apenas verifica se o título contém Google
    cy.title().should('include', 'Google')
  })
})
