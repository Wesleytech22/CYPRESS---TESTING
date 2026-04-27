// cypress/e2e/organize_management/Corporation.cy.js

import { TEST_DATA } from '../../support/constants/corporation-variables';

describe('Corporation Management', () => {
    let environment = Cypress.env('environment') || 'qa';

    beforeEach(() => {
        cy.loginWithValidCredentials(environment);
    });

    it('should create a new corporation with valid data', () => {
        cy.navigateToCorporationManagement();
        cy.createCorporation(TEST_DATA.VALID_CORPORATION);
    });
});