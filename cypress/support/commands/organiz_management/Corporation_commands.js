// cypress/support/commands/organiz_management/corporation_commands.js

import { SELECTORS, TEST_DATA, TIMEOUTS } from '../../constants/corporation-variables';

Cypress.Commands.add('navigateToCorporationManagement', () => {
    cy.get(SELECTORS.MENU_GESTAO_ORGANIZACAO, { timeout: TIMEOUTS.DEFAULT })
        .should('be.visible')
        .click();

    cy.wait(500);

    cy.get(SELECTORS.SUBMENU_CORPORACAO, { timeout: TIMEOUTS.DEFAULT })
        .should('be.visible')
        .click();

    cy.url().should('include', '/gestao-de-organizacao/corporacao');
});

Cypress.Commands.add('createCorporation', (corporationData = TEST_DATA.VALID_CORPORATION) => {
    cy.xpath(SELECTORS.CREATE_BTN_CORPORATION, { timeout: TIMEOUTS.DEFAULT }).click();

    cy.url().should('include', '/corporacao/novo');

    cy.get(SELECTORS.FIELD_CORPORATION, { timeout: TIMEOUTS.DEFAULT })
        .should('be.visible')
        .type(corporationData.corporation);

    cy.get(SELECTORS.FIELD_CONTRACT)
        .should('be.visible')
        .type(corporationData.contract);

    cy.get(SELECTORS.FIELD_INTEGRATION_CONTRACT_NUMBER)
        .should('be.visible')
        .type(corporationData.integrationContractNumber);

    cy.xpath(SELECTORS.SAVE_BTN_CORPORATION).click();

    cy.contains('Cadastro criada com sucesso', { timeout: TIMEOUTS.API_RESPONSE })
        .should('be.visible');

    cy.url().should('include', '/gestao-de-organizacao/corporacao');
});