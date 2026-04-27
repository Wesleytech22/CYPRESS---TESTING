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

Cypress.Commands.add('loginGetConfigQA', (environment = 'qa') => {
    return cy.fixture('environments.json').then((environments) => {
        const environmentConfigQA = environments[environment]

        cy.visit(environmentConfigQA.url)
        cy.title().should('include', 'MDM-Hub')
        cy.get('[name="username"]').type(environmentConfigQA.users.validUser.usernameValid)
        cy.get('[name="password"]').type(environmentConfigQA.users.validUser.passwordValid)
        cy.get('.MuiButton-root').click()

        return cy.wrap(environmentConfigQA)
    })
})

Cypress.Commands.add('loginGetConfigQAWithoutCredencials', () => {
    return cy.fixture('environments.json').then((environment) => {
        const environmentConfigQAWithoutCredencials = environment['qa']

        cy.visit(environmentConfigQAWithoutCredencials.url)
        cy.title().should('include', 'MDM-Hub')
        cy.xpath('//div[@id=\'root\']//button[contains(text(), \'Entrar\')]').click()

        cy.get('#\\:r0\\:-helper-text')
            .should('be.visible')
            .and('contain', 'Campo obrigatório')

        cy.get('#\\:r1\\:-helper-text')
            .should('be.visible')
            .and('contain', 'Campo obrigatório')

        return cy.wrap(environmentConfigQAWithoutCredencials)
    })
})


Cypress.Commands.add('loginGetConfigDev', (environment = 'dev') => {
    return cy.fixture('environments.json').then((environments) => {
        const environmentConfigDev = environments[environment]

        cy.visit(environmentConfigDev.url)
        cy.title().should('include', 'MDM-Hub')
        cy.get('[name="username"]').type(environmentConfigDev.users.validUser.usernameValid)
        cy.get('[name="password"]').type(environmentConfigDev.users.validUser.passwordValid)
        cy.get('.MuiButton-root').click()

        return cy.wrap(environmentConfigDev)
    })
})

Cypress.Commands.add('loginGetConfigHml', (environment = 'hml') => {
    return cy.fixture('environments.json').then((environments) => {
        const environmentConfigHml = environments[environment]

        cy.visit(environmentConfigHml.url)
        cy.title().should('include', 'MDM-Hub')
        cy.get('[name="username"]').type(environmentConfigHml.users.validUser.usernameValid)
        cy.get('[name="password"]').type(environmentConfigHml.users.validUser.passwordValid)
        cy.get('.MuiButton-root').click()

        return cy.wrap(environmentConfigHml)
    })
})

Cypress.Commands.add('loginAndGetConfigProd', (environment = 'production') => {
    return cy.fixture('environments.json').then((environments) => {
        const environmentConfigProd = environments[environment]

        cy.visit(environmentConfigProd.url)
        cy.title().should('include', 'MDM-Hub')
        cy.get('[name="username"]').type(environmentConfigProd.users.validUser.usernameValid)
        cy.get('[name="password"]').type(environmentConfigProd.users.validUser.passwordValid)
        cy.get('.MuiButton-root').click()

        return cy.wrap(environmentConfigProd)
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
