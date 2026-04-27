// cypress/support/Validations/LoginAccess/LoginValidations.js

class LoginValidations {

    validatePageTitle() {
        cy.title().should('include', 'MDM-Hub')
        return this
    }

    validateRequiredFields() {
        cy.get('#\\:r0\\:-helper-text')
            .should('be.visible')
            .and('contain', 'Campo obrigatório')

        cy.get('#\\:r1\\:-helper-text')
            .should('be.visible')
            .and('contain', 'Campo obrigatório')

        return this
    }

    validateInvalidCredentials() {
        cy.get('.Toastify__toast-body > :nth-child(2)', { timeout: 10000 })
            .should('be.visible')
            .and('contain', 'Credenciais inválidas')

        return this
    }

    validateSuccessfulLogin() {
        cy.url().should('not.include', '/login')
        cy.get('.MuiTypography-root').should('contain', 'Dashboard')
        return this
    }

    validateLogout() {
        cy.url().should('include', '/login')
        cy.title().should('include', 'MDM-Hub')
        return this
    }

    validateStillOnLoginPage() {
        cy.url().should('include', '/login')
        return this
    }

    validateEmptyFields() {
        cy.get('[name="username"]').should('have.value', '')
        cy.get('[name="password"]').should('have.value', '')
        return this
    }
}

export default new LoginValidations()