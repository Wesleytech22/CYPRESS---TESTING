describe('Login Test', () => {
    let environment = Cypress.env('environment') || 'production'
    let environmentConfig

    beforeEach(() => {
        cy.fixture('environments.json').then((environments) => {
            environmentConfig = environments[environment]
        })
    })

    it('login to portal', () => {
        cy.visit(environmentConfig.url)
        cy.title().should('include', 'MDM-Hub')
        cy.get('[name="username"]').type(environmentConfig.users.validUser.usernameValid)
        cy.get('[name="password"]').type(environmentConfig.users.validUser.passwordValid)
        cy.get('.MuiButton-root').click()
    })
})