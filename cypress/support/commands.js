Cypress.Commands.add('login', (environment = 'production') => {
    cy.fixture('environments.json').then((environments) => {
        const config = environments[environment]
        cy.visit(config.url)
        cy.get('[name="username"]').type(config.users.validUser.usernameValid)
        cy.get('[name="password"]').type(config.users.validUser.passwordValid)
        cy.get('.MuiButton-root').click()
        cy.title().should('not.include', '/login')
    })
})

Cypress.Commands.add('logout', () => {

    cy.get('.MuiIconButton-root').click()
    cy.wait(500)
    cy.get('.MuiStack-root > :nth-child(4)')
        .should('be.visible')
        .click()
    cy.wait(500)
    cy.get(':nth-child(4) > .MuiListItemText-root > .MuiTypography-root')

    cy.url().should('include', '/login')
    cy.title().should('include', 'MDM-Hub')
})
