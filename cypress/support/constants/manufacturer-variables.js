export const MANUFACTURER_VARIABLES = {
    SELECTORS: {
        MANUFACTURER_LIST: '//*[@id="root"]/div[1]/div[2]/div/div[2]/div/div[2]/div[2]/div/div/div/div[1]',
    },

    MESSAGES_SUCCESS: {
        PT: {
            SUCCESS_CREATE: 'Fabricante criado com sucesso',
            SUCCESS_UPDATE: 'Fabricante atualizado com sucesso',
            SUCCESS_DELETE: 'Fabricante excluído com sucesso',
        },
        EN: {
            SUCCESS_CREATE: 'Manufacturer created successfully',
            SUCCESS_UPDATE: 'Manufacturer updated successfully',
            SUCCESS_DELETE: 'Manufacturer deleted successfully',
        },
        ES: {
            SUCCESS_CREATE: 'Fabricante creado exitosamente',
            SUCCESS_UPDATE: 'Fabricante actualizado exitosamente',
            SUCCESS_DELETE: 'Fabricante eliminado exitosamente',
        }
    },

    MESSAGES_ERROR: {
        PT: {
            ERROR_NAME_REQUIRED: 'Nome é obrigatório',
        },
        EN: {
            ERROR_NAME_REQUIRED: 'Name is required',
        },
        ES: {
            ERROR_NAME_REQUIRED: 'El nombre es obligatorio',
        }
    },

    TEST_DATA: {
        VALID_MANUFACTURER: {
            name: 'Manufacturer Test'
        },
        INVALID_MANUFACTURER: {
            name: ''
        }
    },

    API: {
        CREATE: '/api/manufacturers',
        UPDATE: '/api/manufacturers/*',
        DELETE: '/api/manufacturers/*',
        LIST: '/api/manufacturers'
    },

    TIMEOUTS: {
        DEFAULT: 10000,
        API_RESPONSE: 15000,
        ANIMATION: 500
    }
};

// Exportações separadas
export const SELECTORS = MANUFACTURER_VARIABLES.SELECTORS;
export const MESSAGES_SUCCESS = MANUFACTURER_VARIABLES.MESSAGES_SUCCESS;
export const MESSAGES_ERROR = MANUFACTURER_VARIABLES.MESSAGES_ERROR;
export const TEST_DATA = MANUFACTURER_VARIABLES.TEST_DATA;
export const API = MANUFACTURER_VARIABLES.API;
export const TIMEOUTS = MANUFACTURER_VARIABLES.TIMEOUTS;
