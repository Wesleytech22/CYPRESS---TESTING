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
        cy.wait(3000);

        cy.url().then((url) => {
            cy.log('URL atual após login:', url);
        });

        cy.url({ timeout: 15000 }).should('not.include', '/login');
        cy.url({ timeout: 10000 }).should('include', '/painel');
        cy.get('.MuiBreadcrumbs-root', { timeout: 10000 }).should('be.visible');
        cy.get('body').should('not.contain', 'Digite seu e-mail ou usuário');
        return this;
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