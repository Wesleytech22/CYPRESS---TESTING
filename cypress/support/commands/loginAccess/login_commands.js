// cypress/support/commands/loginAccess/login_commands.js

import LoginValidations from '../../Validations/LoginAccess/LoginValidations.js'

Cypress.Commands.add('loginWithValidCredentials', (environment = 'qa') => {
    return cy.fixture('environments.json').then((environments) => {
        const config = environments[environment]

        cy.visit(config.url)
        LoginValidations.validatePageTitle()

        cy.get('[name="username"]').type(config.users.validUser.usernameValid)
        cy.get('[name="password"]').type(config.users.validUser.passwordValid)
        cy.contains('button', 'Entrar').click()

        LoginValidations.validateSuccessfulLogin()

        return cy.wrap(config)
    })
})

Cypress.Commands.add('loginWithoutCredentials', (environment = 'qa') => {
    return cy.fixture('environments.json').then((environments) => {
        const config = environments[environment]

        cy.visit(config.url)
        LoginValidations.validatePageTitle()

        cy.contains('button', 'Entrar').click()

        LoginValidations.validateRequiredFields()
        LoginValidations.validateStillOnLoginPage()
        LoginValidations.validateEmptyFields()

        return cy.wrap(config)
    })
})

Cypress.Commands.add('loginWithInvalidCredentials', (environment = 'qa') => {
    return cy.fixture('environments.json').then((environments) => {
        const config = environments[environment]

        cy.visit(config.url)
        cy.get('[name="username"]').type(config.users.invalidUser.usernameInvalid)
        cy.get('[name="password"]').type(config.users.invalidUser.passwordInvalid)
        cy.contains('button', 'Entrar').click()

        LoginValidations.validateInvalidCredentials()
        LoginValidations.validateStillOnLoginPage()

        return cy.wrap(config)
    })
})