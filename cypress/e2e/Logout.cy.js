describe('Logout Test', () => {
    beforeEach(() => {
        cy.login("production")
    })

    it('logout from portal', () => {
        cy.logout()
        cy.url().should('include', '/login')
        cy.title().should('include', 'MDM-Hub')
        cy.get('[name="username"]').should('be.visible')
        cy.get('[name="password"]').should('be.visible')
        cy.get('.MuiButton-root').should('be.visible')
    })
})