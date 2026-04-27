// cypress/support/validations/corporation_management/CorporationValidations.js

import { SELECTORS, MESSAGES_SUCCESS, MESSAGES_ERROR, TEST_DATA, API, TIMEOUTS } from "../../constants/corporation-variables";

class CorporationValidations {
    validateCorporationPageLoaded() {
        cy.url({ timeout: TIMEOUTS.DEFAULT }).should('include', '/gestao-de-organizacao/corporacao');
        cy.xpath(SELECTORS.CORPORATION_LIST, { timeout: TIMEOUTS.DEFAULT })
            .should('be.visible');
        cy.get(SELECTORS.SEARCH_INPUT_CORPORATION, { timeout: TIMEOUTS.DEFAULT })
            .should('be.visible');
        return this;
    }

    validateCreateFormPageLoaded() {
        cy.url({ timeout: TIMEOUTS.DEFAULT }).should('include', '/corporacao/novo');
        cy.get(SELECTORS.FIELD_CORPORATION, { timeout: TIMEOUTS.DEFAULT })
            .should('be.visible');
        cy.get(SELECTORS.FIELD_CONTRACT, { timeout: TIMEOUTS.DEFAULT })
            .should('be.visible');
        cy.xpath(SELECTORS.SAVE_BTN_CORPORATION, { timeout: TIMEOUTS.DEFAULT })
            .should('be.visible');
        return this;
    }

    validateEditFormPageLoaded() {
        cy.url({ timeout: TIMEOUTS.DEFAULT }).should('match', /\/corporacao\/editar\/.+$/);
        cy.get(SELECTORS.FIELD_CORPORATION, { timeout: TIMEOUTS.DEFAULT })
            .should('be.visible');
        cy.get(SELECTORS.FIELD_CONTRACT, { timeout: TIMEOUTS.DEFAULT })
            .should('be.visible');
        cy.xpath(SELECTORS.SAVE_BTN_CORPORATION, { timeout: TIMEOUTS.DEFAULT })
            .should('be.visible');
        return this;
    }

    validateSuccessCreate(language = 'PT') {
        const message = MESSAGES_SUCCESS[language].SUCCESS_CREATE;
        cy.contains(message, { timeout: TIMEOUTS.API_RESPONSE })
            .should('be.visible');
        cy.url({ timeout: TIMEOUTS.DEFAULT }).should('include', '/gestao-de-organizacao/corporacao');
        return this;
    }

    validateSuccessUpdate(language = 'PT') {
        const message = MESSAGES_SUCCESS[language].SUCCESS_UPDATE;
        cy.contains(message, { timeout: TIMEOUTS.API_RESPONSE })
            .should('be.visible');
        return this;
    }

    validateSuccessDelete(language = 'PT') {
        const message = MESSAGES_SUCCESS[language].SUCCESS_DELETE;
        cy.contains(message, { timeout: TIMEOUTS.API_RESPONSE })
            .should('be.visible');
        return this;
    }

    validateErrorNameRequired(language = 'PT') {
        const message = MESSAGES_ERROR[language].ERROR_NAME_REQUIRED;
        cy.contains(message, { timeout: TIMEOUTS.DEFAULT })
            .should('be.visible');
        return this;
    }

    validateErrorDuplicateDocument(language = 'PT') {
        const message = MESSAGES_ERROR[language].ERROR_DUPLICATE;
        cy.contains(message, { timeout: TIMEOUTS.DEFAULT })
            .should('be.visible');
        return this;
    }

    validateErrorDocumentInvalid(language = 'PT') {
        const message = MESSAGES_ERROR[language].ERROR_DOCUMENT_INVALID;
        cy.contains(message, { timeout: TIMEOUTS.DEFAULT })
            .should('be.visible');
        return this;
    }

    validateErrorEmailInvalid(language = 'PT') {
        const message = MESSAGES_ERROR[language].ERROR_EMAIL_INVALID;
        cy.contains(message, { timeout: TIMEOUTS.DEFAULT })
            .should('be.visible');
        return this;
    }

    validateRequiredFields() {
        cy.get('p').contains('Campo obrigatório', { timeout: TIMEOUTS.DEFAULT })
            .should('have.length.at.least', 1)
            .and('be.visible');
        return this;
    }

    validateFieldCorporationValue(expectedValue) {
        cy.get(SELECTORS.FIELD_CORPORATION, { timeout: TIMEOUTS.DEFAULT })
            .should('have.value', expectedValue);
        return this;
    }

    validateFieldContractValue(expectedValue) {
        cy.get(SELECTORS.FIELD_CONTRACT, { timeout: TIMEOUTS.DEFAULT })
            .should('have.value', expectedValue);
        return this;
    }

    validateFieldIntegrationContractNumberValue(expectedValue) {
        cy.get(SELECTORS.FIELD_INTEGRATION_CONTRACT_NUMBER, { timeout: TIMEOUTS.DEFAULT })
            .should('have.value', expectedValue);
        return this;
    }

    validateCorporationInList(corporationName) {
        cy.contains(corporationName, { timeout: TIMEOUTS.DEFAULT })
            .should('be.visible');
        return this;
    }

    validateCorporationNotInList(corporationName) {
        cy.contains(corporationName, { timeout: TIMEOUTS.DEFAULT })
            .should('not.exist');
        return this;
    }

    validateDeleteConfirmation() {
        cy.contains('button', 'Confirmar').should('be.visible');
        cy.contains('button', 'Cancelar').should('be.visible');
        return this;
    }

    validateToastMessage(expectedMessage) {
        cy.get('.Toastify__toast-body > :nth-child(2)', { timeout: TIMEOUTS.DEFAULT })
            .should('be.visible')
            .and('contain', expectedMessage);
        return this;
    }
}

export default new CorporationValidations();