describe('Login Test', () => {
    let environment = Cypress.env('environment') || 'production'

    it('login to portal', () => {
        cy.loginAndGetConfigProd(environment)
    })
})