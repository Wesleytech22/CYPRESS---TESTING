// support/constants/corporation-variables.js

export const CORPORATION_VARIABLES = {
    SELECTORS: {
        MENU: 'li:nth-child(4) .MuiListItemText-root .MuiTypography-root',
        CORPORATION_OPTION: 'li:nth-child(4) .MuiListItemText-root .MuiTypography-root',
        CREATE_BTN_CORPORATION: '//div[@id="root"]//a[contains(text(), "New")]',
        SAVE_BTN_CORPORATION: '//div[@id="root"]//button[contains(text(), "Save")]',
        CANCEL_BTN_CORPORATION: '//div[@id="root"]//button[contains(text(), "Cancel")]',
        DELETE_BTN_CORPORATION: '[data-testid="delete-corporation-btn"]',
        EDIT_BTN_CORPORATION: '[data-testid="edit-corporation-btn"]',
        SEARCH_INPUT_CORPORATION: 'input[placeholder="Search for corporations"]',
        CORPORATION_LIST: '//div[@aria-multiselectable="true"]//p[contains(text(), "Corporation List")]',

        FIELD_CORPORATION: 'input[name="name"]',
        FIELD_CONTRACT: 'input[name="limitEquipmentsActive"]',
        FIELD_INTEGRATION_CONTRACT_NUMBER: 'input[name="integrationContract"]',
    },

    MESSAGES_SUCCESS: {
        PT: {
            SUCCESS_CREATE: 'Corporação criada com sucesso',
            SUCCESS_UPDATE: 'Corporação atualizada com sucesso',
            SUCCESS_DELETE: 'Corporação excluída com sucesso',
        },
        EN: {
            SUCCESS_CREATE: 'Corporation created successfully',
            SUCCESS_UPDATE: 'Corporation updated successfully',
            SUCCESS_DELETE: 'Corporation deleted successfully',
        },
        ES: {
            SUCCESS_CREATE: 'Corporación creada exitosamente',
            SUCCESS_UPDATE: 'Corporación actualizada exitosamente',
            SUCCESS_DELETE: 'Corporación eliminada exitosamente',
        }
    },

    MESSAGES_ERROR: {
        PT: {
            ERROR_NAME_REQUIRED: 'Nome é obrigatório',
            ERROR_DOCUMENT_INVALID: 'Documento inválido',
            ERROR_EMAIL_INVALID: 'E-mail inválido',
            ERROR_DUPLICATE: 'Já existe uma corporação com este documento',
        },
        EN: {
            ERROR_NAME_REQUIRED: 'Name is required',
            ERROR_DOCUMENT_INVALID: 'Invalid document',
            ERROR_EMAIL_INVALID: 'Invalid email',
            ERROR_DUPLICATE: 'A corporation with this document already exists',
        },
        ES: {
            ERROR_NAME_REQUIRED: 'El nombre es obligatorio',
            ERROR_DOCUMENT_INVALID: 'Documento inválido',
            ERROR_EMAIL_INVALID: 'Correo electrónico inválido',
            ERROR_DUPLICATE: 'Ya existe una corporación con este documento',
        }
    },

    TEST_DATA: {
        VALID_CORPORATION: {
            corporation: 'Cypress_teste',
            contract: '2',
            integrationContractNumber: '123456'
        },
        INVALID_CORPORATION: {
            corporation: '',
            contract: '123',
            integrationContractNumber: ''
        },
        UPDATE_DATA: {
            corporation: 'Cypress_teste_update',
            contract: '3',
            integrationContractNumber: '789012'
        }
    },

    API: {
        CREATE: '/api/corporations',
        UPDATE: '/api/corporations/*',
        DELETE: '/api/corporations/*',
        LIST: '/api/corporations'
    },

    TIMEOUTS: {
        DEFAULT: 10000,
        API_RESPONSE: 15000,
        ANIMATION: 500
    }
};

// Exportações separadas
export const SELECTORS = CORPORATION_VARIABLES.SELECTORS;
export const MESSAGES_SUCCESS = CORPORATION_VARIABLES.MESSAGES_SUCCESS;
export const MESSAGES_ERROR = CORPORATION_VARIABLES.MESSAGES_ERROR;
export const TEST_DATA = CORPORATION_VARIABLES.TEST_DATA;
export const API = CORPORATION_VARIABLES.API;
export const TIMEOUTS = CORPORATION_VARIABLES.TIMEOUTS;