export const REPRESENTATIVE_VARIABLES = {
    SELECTORS: {
        REPRESENTATIVE: '(//span[normalize-space()="Representante"])[1]',
        LIST_PESQUISA_REP: '(//input[@id=":rec:"])[1]',
        BTN_TODOS_REP: '//button[normalize-space()="Todos"]',
        BTN_ATIVO_REP: '//button[normalize-space()="Ativo"]',
        BTN_INATIVO_REP: '//button[normalize-space()="Inativo"]',
        BTN_NEW_REP: '//a[normalize-space()="Novo"]',
        NOME_COMP_REP: '//input[@type="text" and @name="name"]',
        CNPJ_REP: '//input[@type="text" and @name="document"]',
        CORP_REP: '(//div[@class="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye"])[3]',
        CEP_REP: '//input[@type="text" and @name="postalCode"]',
        ADRESS_REP: '//input[@type="text" and @name="address"]',
        NUMBER_REP: '//input[@type="number" and @name="number"]',
        COMPLEMENT_REP: '//input[@type="text" and @name="complement"]',
        UF_REP: '//div[@id="mui-component-select-uf"]',
        CITY_REP: '//input[@type="text" and @name="city"]',
        QUANT_LICEN_REP: '//input[@type="text" and @name="licensesContracted"]',
        SAVE_REP: '//button[normalize-space()="Salvar"]',
    },

    MESSAGES_SUCCESS: {
        PT: {
            SUCCESS_CREATE: 'Representante criado com sucesso',
            SUCCESS_UPDATE: 'Representante atualizado com sucesso',
            SUCCESS_DELETE: 'Representante excluído com sucesso',
        },
        EN: {
            SUCCESS_CREATE: 'Representative created successfully',
            SUCCESS_UPDATE: 'Representative updated successfully',
            SUCCESS_DELETE: 'Representative deleted successfully',
        },
        ES: {
            SUCCESS_CREATE: 'Representante creado exitosamente',
            SUCCESS_UPDATE: 'Representante actualizado exitosamente',
            SUCCESS_DELETE: 'Representante eliminado exitosamente',
        }
    },

    MESSAGES_ERROR: {
        PT: {
            ERROR_NAME_REQUIRED: 'Nome é obrigatório',
            ERROR_DOCUMENT_INVALID: 'Documento inválido',
            ERROR_EMAIL_INVALID: 'E-mail inválido',
            ERROR_DUPLICATE: 'Já existe um representante com este documento',
        },
        EN: {
            ERROR_NAME_REQUIRED: 'Name is required',
            ERROR_DOCUMENT_INVALID: 'Invalid document',
            ERROR_EMAIL_INVALID: 'Invalid email',
            ERROR_DUPLICATE: 'A representative with this document already exists',
        },
        ES: {
            ERROR_NAME_REQUIRED: 'El nombre es obligatorio',
            ERROR_DOCUMENT_INVALID: 'Documento inválido',
            ERROR_EMAIL_INVALID: 'Correo electrónico inválido',
            ERROR_DUPLICATE: 'Ya existe un representante con este documento',
        }
    },

    TEST_DATA: {
        VALID_REPRESENTATIVE: {
            name: 'Representative Test',
            document: '12345678000199',
            postalCode: '12345678',
            city: 'Test City',
            address: 'Test Address',
            number: '123'
        },
        INVALID_REPRESENTATIVE: {
            name: '',
            document: '123',
            postalCode: ''
        }
    },

    API: {
        CREATE: '/api/representatives',
        UPDATE: '/api/representatives/*',
        DELETE: '/api/representatives/*',
        LIST: '/api/representatives'
    },

    TIMEOUTS: {
        DEFAULT: 10000,
        API_RESPONSE: 15000,
        ANIMATION: 500
    }
};

// Exportações separadas
export const SELECTORS = REPRESENTATIVE_VARIABLES.SELECTORS;
export const MESSAGES_SUCCESS = REPRESENTATIVE_VARIABLES.MESSAGES_SUCCESS;
export const MESSAGES_ERROR = REPRESENTATIVE_VARIABLES.MESSAGES_ERROR;
export const TEST_DATA = REPRESENTATIVE_VARIABLES.TEST_DATA;
export const API = REPRESENTATIVE_VARIABLES.API;
export const TIMEOUTS = REPRESENTATIVE_VARIABLES.TIMEOUTS;
