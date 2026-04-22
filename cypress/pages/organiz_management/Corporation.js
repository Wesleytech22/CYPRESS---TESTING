import { SELECTORS, MESSAGES_SUCCESS, MESSAGES_ERROR, TEST_DATA, API, TIMEOUTS } from "../../support/constants/corporation-variables";

export class Corporation {
    constructor() {
        this.selectors = SELECTORS;
        this.messagesSuccess = MESSAGES_SUCCESS;
        this.messagesError = MESSAGES_ERROR;
        this.testData = TEST_DATA;
        this.api = API;
        this.timeouts = TIMEOUTS;
    }

    navigateToCorporationList() {
        cy.get(this.selectors.MENU).click();
        cy.xpath(this.selectors.CORPORATION_OPTION).click();
        return this;
    }

    navigateToCreate() {
        this.navigateToCorporationList();
        cy.xpath(this.selectors.CREATE_BTN_CORPORATION).click();
        return this;
    }

    // Ações do formulário
    fillCorporationName(name) {
        cy.get(this.selectors.FIELD_CORPORATION).clear().type(name);
        return this;
    }

    fillContract(contract) {
        cy.get(this.selectors.FIELD_CONTRACT).clear().type(contract);
        return this;
    }

    fillIntegrationContract(number) {
        cy.get(this.selectors.FIELD_INTEGRATION_CONTRACT_NUMBER).clear().type(number);
        return this;
    }

    fillForm(data) {
        this.fillCorporationName(data.corporation);
        this.fillContract(data.contract);
        if (data.integrationContractNumber) {
            this.fillIntegrationContract(data.integrationContractNumber);
        }
        return this;
    }

    save() {
        cy.xpath(this.selectors.SAVE_BTN_CORPORATION).click();
        return this;
    }

    cancel() {
        cy.xpath(this.selectors.CANCEL_BTN_CORPORATION).click();
        return this;
    }

    // Ações da lista
    searchCorporation(name) {
        cy.get(this.selectors.SEARCH_INPUT_CORPORATION).clear().type(name);
        cy.wait(this.timeouts.ANIMATION);
        return this;
    }

    clickEdit() {
        cy.get(this.selectors.EDIT_BTN_CORPORATION).first().click();
        return this;
    }

    clickDelete() {
        cy.get(this.selectors.DELETE_BTN_CORPORATION).first().click();
        return this;
    }

    // Validações
    validateSuccessMessage(lang = 'PT', action = 'CREATE') {
        const message = this.messagesSuccess[lang][`SUCCESS_${action}`];
        cy.contains(message).should('be.visible');
        return this;
    }

    validateErrorMessage(lang = 'PT', errorType = 'ERROR_NAME_REQUIRED') {
        const message = this.messagesError[lang][errorType];
        cy.contains(message).should('be.visible');
        return this;
    }

    validateCorporationInList(corporationName) {
        cy.xpath(this.selectors.CORPORATION_LIST).should('contain', corporationName);
        return this;
    }
}