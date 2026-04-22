describe('Login Test', () => {
    let environment = Cypress.env('environment') || 'dev'

    it('login to portal', () => {
        cy.loginAndGetConfigDev(environment)
    })
})