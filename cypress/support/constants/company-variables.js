export const COMPANY_VARIABLES = {
    SELECTORS: {
        COMPANY: '//span[normalize-space()="Empresa"]',
        BTN_NEW_COMP: '//a[normalize-space()="Novo"]',
        LIST_PESQUISA_COMP: '//input[@id=":rbl:"]',
        BTN_TODOS_COMP: '//button[normalize-space()="Todos"]',
        BTN_ATIVO_COMP: '//button[normalize-space()="Ativo"]',
        BTN_INATIVO_COMP: '//button[normalize-space()="Inativo"]',
        CORP_COMP: '//div[@id="mui-component-select-corporationId"]',
        NOME_COMP: '//input[@type="text" and @name="name"]',
        CNPJ_COMP: '(//input[@name="document" and not(@aria-hidden="true") and not(@disabled)])[last()]',
        CEP_COMP: '(//input[@type="text" and @name="postalCode"])[last()]',
        UF_COMP: '//div[@id="mui-component-select-uf"]',
        CITY_COMP: '//input[@type="text" and @name="city"]',
        ENDERECO_COMP: '//input[@type="text" and @name="address"]',
        NUMERO_COMP: '//input[@type="text" and @name="number"]',
        COMPLEMENTO_COMP: '//input[@type="text" and @name="complement"]',
        SAVE_COMP: '//button[normalize-space()="Salvar"]',
        EDIT_FIELD: '(//button[@id="long-button"])[1]',
        FORM_EDITION: '(//button[@aria-label="edit"])[2]',
        TOAST_MESSAGE: '(//div[@role="alert"])[1]',
        CORP_COMP_ITEM: '(//li[normalize-space()="Teste Wesley Rodrigues 02"])[last()]',
    },

    MESSAGES_SUCCESS: {
        PT: {
            SUCCESS_CREATE: 'Empresa criada com sucesso',
            SUCCESS_UPDATE: 'Empresa atualizada com sucesso',
            SUCCESS_DELETE: 'Empresa excluída com sucesso',
        },
        EN: {
            SUCCESS_CREATE: 'Company created successfully',
            SUCCESS_UPDATE: 'Company updated successfully',
            SUCCESS_DELETE: 'Company deleted successfully',
        },
        ES: {
            SUCCESS_CREATE: 'Empresa creada exitosamente',
            SUCCESS_UPDATE: 'Empresa actualizada exitosamente',
            SUCCESS_DELETE: 'Empresa eliminada exitosamente',
        }
    },

    MESSAGES_ERROR: {
        PT: {
            ERROR_NAME_REQUIRED: 'Nome é obrigatório',
            ERROR_DOCUMENT_INVALID: 'Documento inválido',
            ERROR_EMAIL_INVALID: 'E-mail inválido',
            ERROR_DUPLICATE: 'Já existe uma empresa com este documento',
        },
        EN: {
            ERROR_NAME_REQUIRED: 'Name is required',
            ERROR_DOCUMENT_INVALID: 'Invalid document',
            ERROR_EMAIL_INVALID: 'Invalid email',
            ERROR_DUPLICATE: 'A company with this document already exists',
        },
        ES: {
            ERROR_NAME_REQUIRED: 'El nombre es obligatorio',
            ERROR_DOCUMENT_INVALID: 'Documento inválido',
            ERROR_EMAIL_INVALID: 'Correo electrónico inválido',
            ERROR_DUPLICATE: 'Ya existe una empresa con este documento',
        }
    },

    TEST_DATA: {
        VALID_COMPANY: {
            name: 'Company Test',
            document: '12345678000199',
            postalCode: '12345678',
            city: 'Test City',
            address: 'Test Address',
            number: '123'
        },
        INVALID_COMPANY: {
            name: '',
            document: '123',
            postalCode: ''
        }
    },

    API: {
        CREATE: '/api/companies',
        UPDATE: '/api/companies/*',
        DELETE: '/api/companies/*',
        LIST: '/api/companies'
    },

    TIMEOUTS: {
        DEFAULT: 10000,
        API_RESPONSE: 15000,
        ANIMATION: 500
    }
};

// Exportações separadas
export const SELECTORS = COMPANY_VARIABLES.SELECTORS;
export const MESSAGES_SUCCESS = COMPANY_VARIABLES.MESSAGES_SUCCESS;
export const MESSAGES_ERROR = COMPANY_VARIABLES.MESSAGES_ERROR;
export const TEST_DATA = COMPANY_VARIABLES.TEST_DATA;
export const API = COMPANY_VARIABLES.API;
export const TIMEOUTS = COMPANY_VARIABLES.TIMEOUTS;
