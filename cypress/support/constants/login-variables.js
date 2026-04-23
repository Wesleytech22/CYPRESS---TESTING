export const LOGIN_VARIABLES = {
    SELECTORS: {
        INPUT_USER: '//*[@id=":r0:"]',
        INPUT_PASS: '//*[@id=":r1:"]',
        BTN_LOGIN: '//*[@id="root"]/form/main/div[3]/div/button',
        IMG_PAINEL: '//*[@id="root"]/form/main/div[2]',
        FORGET_PASS: '//a[normalize-space()="Esqueceu sua senha?"]',
        INPUT_EMAIL: '//*[@id=":r2:"]',
        BTN_REDEFINE_PASS: '//*[@id="root"]/form/main/div[3]/div/div[2]/button',
        MDMHUB_PAINEL: '//div[@class="css-1x9uabf"]//a',
    },

    MESSAGES_SUCCESS: {
        PT: {
            SUCCESS_LOGIN: 'Login realizado com sucesso',
        },
        EN: {
            SUCCESS_LOGIN: 'Login successful',
        },
        ES: {
            SUCCESS_LOGIN: 'Inicio de sesión exitoso',
        }
    },

    MESSAGES_ERROR: {
        PT: {
            INVALID_USER: 'Usuário não encontrado',
        },
        EN: {
            INVALID_USER: 'User not found',
        },
        ES: {
            INVALID_USER: 'Usuario no encontrado',
        }
    },

    TEST_DATA: {
        VALID_USER: {
            username: 'test_user',
            password: 'password123'
        },
        INVALID_USER: {
            username: 'invalid_user',
            password: 'wrongpassword'
        }
    },

    API: {
        LOGIN: '/api/auth/login',
        RECOVER_PASSWORD: '/api/auth/recover-password'
    },

    TIMEOUTS: {
        DEFAULT: 10000,
        API_RESPONSE: 15000,
        ANIMATION: 500
    }
};

// Exportações separadas
export const SELECTORS = LOGIN_VARIABLES.SELECTORS;
export const MESSAGES_SUCCESS = LOGIN_VARIABLES.MESSAGES_SUCCESS;
export const MESSAGES_ERROR = LOGIN_VARIABLES.MESSAGES_ERROR;
export const TEST_DATA = LOGIN_VARIABLES.TEST_DATA;
export const API = LOGIN_VARIABLES.API;
export const TIMEOUTS = LOGIN_VARIABLES.TIMEOUTS;
