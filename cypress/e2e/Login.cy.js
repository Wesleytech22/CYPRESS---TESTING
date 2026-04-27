describe('Login MDM-Hub', () => {
    let environment = Cypress.env('environment') || 'qa'

    it('login to portal', () => {
        cy.loginGetConfigQA(environment)
    })
})

describe('Login MDM-Hub', () => {
    let environment = Cypress.env('environment') || 'qa'
    it('Login without credentials', () => {
        cy.loginGetConfigQAWithoutCredencials(environment)
    })
})