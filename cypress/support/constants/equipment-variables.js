export const EQUIPMENT_VARIABLES = {
    SELECTORS: {
        EQUIPMENTS: '(//li[@aria-label="Equipamento"])[1]',
        BTN_NEW_EQP: '(//button[normalize-space()="Novo"])[1]',
        BTN_REGISTER_EQP: '(//a[normalize-space()="Cadastrar"])[1]',
        STATUS_EQP: '(//input[@name="status"])[1]',
        EQP_TYPE_SELECT: '(//div[@role="combobox"])[1]',
        EQP_TYPE_POS: '(//li[normalize-space()="POS"])[1]',
        EQP_TYPE_TOTEM: '(//li[normalize-space()="Totem"])[1]',
        EQP_TYPE_PDV: '(//li[normalize-space()="PDV"])[1]',
        EQP_TYPE_KDS: '(//li[normalize-space()="KDS"])[1]',
        EQP_TYPE_TABLET: '(//li[normalize-space()="Tablet"])[1]',
        EQP_TYPE_STREAMING: '(//li[normalize-space()="Streaming"])[1]',
        EQP_NAME: '(//div[contains(@class,"MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedStart css-fcj3v7")])[1]',
        EQP_SERIAL: '//body/div[@id="root"]/div[@class="MuiBox-root css-131p32t"]/div[@class="css-1ouxed2"]/div[@class="MuiBox-root css-1uy29v6"]/form[@class="MuiBox-root css-0"]/div[3]/div[2]/div[1]/div[1]/div[1]',
        EQP_MANUFACTURER: '(//div[contains(@role,"combobox")])[2]',
        EQP_MODELS: '(//div[@role="combobox"])[3]',
        EQP_CORP: '(//div[@role="combobox"])[4]',
        EQP_COMPANY: '(//div[@role="combobox"])[5]',
        EQP_SUBSIDIARY: '(//div[@role="combobox"])[6]',
        EQP_MIDIA_STATUS: '(//input[@name="mediaStatus"])[1]',
        EQP_SAVE_BTN: '(//button[normalize-space()="Salvar"])[1]',
        NEW_ITEM_BTN: '(//a[normalize-space()="Novo"])',
        ERROR_MESSAGE: '(//p[@class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-hdqobs"])[1]',
        ERROR_MESSAGE_2: '(//p[@class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-hdqobs"])[2]',
        EQP_MANUFACTURER_SUNMI: '(//li[normalize-space()="Sunmi"])[last()]',
        EQP_MODEL_P2B: '(//li[normalize-space()="P2-B"])[last()]',
        CORP_SELECTION: '(//li[normalize-space()="Amazonas Inovare"])[last()]',
        COMP_SELECTION: '(//li[normalize-space()="Amazonas Inovare"])[last()]',
        SUBS_SELECTION: '(//li[normalize-space()="Amazonas Inovare Matriz"])[last()]',
    },

    MESSAGES_SUCCESS: {
        PT: {
            SUCCESS_CREATE: 'Equipamento criado com sucesso',
            SUCCESS_UPDATE: 'Equipamento atualizado com sucesso',
            SUCCESS_DELETE: 'Equipamento excluído com sucesso',
        },
        EN: {
            SUCCESS_CREATE: 'Equipment created successfully',
            SUCCESS_UPDATE: 'Equipment updated successfully',
            SUCCESS_DELETE: 'Equipment deleted successfully',
        },
        ES: {
            SUCCESS_CREATE: 'Equipo creado exitosamente',
            SUCCESS_UPDATE: 'Equipo actualizado exitosamente',
            SUCCESS_DELETE: 'Equipo eliminado exitosamente',
        }
    },

    MESSAGES_ERROR: {
        PT: {
            ERROR_NAME_REQUIRED: 'Nome é obrigatório',
            ERROR_SERIAL_REQUIRED: 'Serial é obrigatório',
        },
        EN: {
            ERROR_NAME_REQUIRED: 'Name is required',
            ERROR_SERIAL_REQUIRED: 'Serial is required',
        },
        ES: {
            ERROR_NAME_REQUIRED: 'El nombre es obligatorio',
            ERROR_SERIAL_REQUIRED: 'El serial es obligatorio',
        }
    },

    TEST_DATA: {
        VALID_EQUIPMENT: {
            name: 'Equipment Test',
            serial: 'ABC123456'
        },
        INVALID_EQUIPMENT: {
            name: '',
            serial: ''
        }
    },

    API: {
        CREATE: '/api/equipments',
        UPDATE: '/api/equipments/*',
        DELETE: '/api/equipments/*',
        LIST: '/api/equipments'
    },

    TIMEOUTS: {
        DEFAULT: 10000,
        API_RESPONSE: 15000,
        ANIMATION: 500
    }
};

// Exportações separadas
export const SELECTORS = EQUIPMENT_VARIABLES.SELECTORS;
export const MESSAGES_SUCCESS = EQUIPMENT_VARIABLES.MESSAGES_SUCCESS;
export const MESSAGES_ERROR = EQUIPMENT_VARIABLES.MESSAGES_ERROR;
export const TEST_DATA = EQUIPMENT_VARIABLES.TEST_DATA;
export const API = EQUIPMENT_VARIABLES.API;
export const TIMEOUTS = EQUIPMENT_VARIABLES.TIMEOUTS;
