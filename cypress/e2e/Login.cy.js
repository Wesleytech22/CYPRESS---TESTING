describe('Login MDM-Hub', () => {
    let environment = Cypress.env('environment') || 'qa'

    it('should login with valid credentials', () => {
        cy.loginGetConfigQA(environment)
    })

    it('should login with invalid credentials', () => {
        cy.loginWithInvalidCredentials(environment)
    })

    it('should show required field errors when logging in without credentials', () => {
        cy.loginWithoutCredentials(environment)
    })
})