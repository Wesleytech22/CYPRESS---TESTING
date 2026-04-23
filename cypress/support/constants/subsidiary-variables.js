export const SUBSIDIARY_VARIABLES = {
    SELECTORS: {
        BRANCH: '//span[normalize-space()="Filial"]',
        BRACH_NEW: '//a[normalize-space()="Novo"]',
        CORPORATION_FIL: '//div[@id="mui-component-select-corporationId"]',
        SELECT_SUB: '(//li[normalize-space()="Teste Wesley Rodrigues"])[last()]',
        COMP_FIL: '(//div[@role="combobox"])[2]',
        FILIAL_FIL: '//input[@type="text" and @name="name"]',
        CNPJ_FIL: '//input[@type="text" and @name="document"]',
        CEP_FIL: '//input[@type="text" and @name="postalCode"]',
        UF_FIL: '//div[@id="mui-component-select-uf"]',
        CITY_FIL: '//input[@type="text" and @name="city"]',
        ADRESS_FIL: '//input[@type="text" and @name="address"]',
        NUMBER_FIL: '//input[@type="number" and @name="addressNumber"]',
        COMPLEMENT_FIL: '//input[@type="text" and @name="complement"]',
        SAVE_FIL: '//button[normalize-space()="Salvar"]',
        INPUT_STATUS: '(//input[@aria-label="controlled"])[1]',
    },

    MESSAGES_SUCCESS: {
        PT: {
            SUCCESS_CREATE: 'Filial criada com sucesso',
            SUCCESS_UPDATE: 'Filial atualizada com sucesso',
            SUCCESS_DELETE: 'Filial excluída com sucesso',
        },
        EN: {
            SUCCESS_CREATE: 'Subsidiary created successfully',
            SUCCESS_UPDATE: 'Subsidiary updated successfully',
            SUCCESS_DELETE: 'Subsidiary deleted successfully',
        },
        ES: {
            SUCCESS_CREATE: 'Sucursal creada exitosamente',
            SUCCESS_UPDATE: 'Sucursal actualizada exitosamente',
            SUCCESS_DELETE: 'Sucursal eliminada exitosamente',
        }
    },

    MESSAGES_ERROR: {
        PT: {
            ERROR_NAME_REQUIRED: 'Nome é obrigatório',
            ERROR_DOCUMENT_INVALID: 'Documento inválido',
            ERROR_EMAIL_INVALID: 'E-mail inválido',
            ERROR_DUPLICATE: 'Já existe uma filial com este documento',
        },
        EN: {
            ERROR_NAME_REQUIRED: 'Name is required',
            ERROR_DOCUMENT_INVALID: 'Invalid document',
            ERROR_EMAIL_INVALID: 'Invalid email',
            ERROR_DUPLICATE: 'A subsidiary with this document already exists',
        },
        ES: {
            ERROR_NAME_REQUIRED: 'El nombre es obligatorio',
            ERROR_DOCUMENT_INVALID: 'Documento inválido',
            ERROR_EMAIL_INVALID: 'Correo electrónico inválido',
            ERROR_DUPLICATE: 'Ya existe una sucursal con este documento',
        }
    },

    TEST_DATA: {
        VALID_SUBSIDIARY: {
            name: 'Subsidiary Test',
            document: '12345678000199',
            postalCode: '12345678',
            city: 'Test City',
            address: 'Test Address',
            number: '123'
        },
        INVALID_SUBSIDIARY: {
            name: '',
            document: '123',
            postalCode: ''
        }
    },

    API: {
        CREATE: '/api/subsidiaries',
        UPDATE: '/api/subsidiaries/*',
        DELETE: '/api/subsidiaries/*',
        LIST: '/api/subsidiaries'
    },

    TIMEOUTS: {
        DEFAULT: 10000,
        API_RESPONSE: 15000,
        ANIMATION: 500
    }
};

// Exportações separadas
export const SELECTORS = SUBSIDIARY_VARIABLES.SELECTORS;
export const MESSAGES_SUCCESS = SUBSIDIARY_VARIABLES.MESSAGES_SUCCESS;
export const MESSAGES_ERROR = SUBSIDIARY_VARIABLES.MESSAGES_ERROR;
export const TEST_DATA = SUBSIDIARY_VARIABLES.TEST_DATA;
export const API = SUBSIDIARY_VARIABLES.API;
export const TIMEOUTS = SUBSIDIARY_VARIABLES.TIMEOUTS;
