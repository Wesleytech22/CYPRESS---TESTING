export const USER_ACCESS_VARIABLES = {
    SELECTORS: {
        MENU_ACL: '(//li[@aria-label="Gestão de Acesso"])[1]',
        SUBMENU_USER_ACCESS: '(//li[@aria-label="Usuário"])[1]',
        USER_LIST: '(//div[@class="MuiDataGrid-virtualScrollerContent css-0"])[1]',
        INPUT_NAME: '//body/div[@id="root"]/div[@class="MuiBox-root css-131p32t"]/div[@class="css-1ouxed2"]/div[@class="MuiBox-root css-1uy29v6"]/form[@class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-isbt42"]/div[3]/div[1]/div[1]/div[1]',
        USERNAME: '//*[@id="root"]/div[1]/div[2]/div/form/div[4]/div/div/div',
        CPF: '//*[@id="root"]/div[1]/div[2]/div/form/div[5]/div/div/div',
        PHONE: '//*[@id="root"]/div[1]/div[2]/div/form/div[6]/div/div/div',
        EMAIL_USER: '//*[@id="root"]/div[1]/div[2]/div/form/div[7]/div/div/div[1]',
    },

    MESSAGES_SUCCESS: {
        PT: {
            SUCCESS_CREATE: 'Usuário criado com sucesso',
            SUCCESS_UPDATE: 'Usuário atualizado com sucesso',
            SUCCESS_DELETE: 'Usuário excluído com sucesso',
        },
        EN: {
            SUCCESS_CREATE: 'User created successfully',
            SUCCESS_UPDATE: 'User updated successfully',
            SUCCESS_DELETE: 'User deleted successfully',
        },
        ES: {
            SUCCESS_CREATE: 'Usuario creado exitosamente',
            SUCCESS_UPDATE: 'Usuario actualizado exitosamente',
            SUCCESS_DELETE: 'Usuario eliminado exitosamente',
        }
    },

    MESSAGES_ERROR: {
        PT: {
            ERROR_NAME_REQUIRED: 'Nome é obrigatório',
            ERROR_EMAIL_INVALID: 'E-mail inválido',
            ERROR_DUPLICATE: 'Já existe um usuário com este e-mail',
        },
        EN: {
            ERROR_NAME_REQUIRED: 'Name is required',
            ERROR_EMAIL_INVALID: 'Invalid email',
            ERROR_DUPLICATE: 'A user with this email already exists',
        },
        ES: {
            ERROR_NAME_REQUIRED: 'El nombre es obligatorio',
            ERROR_EMAIL_INVALID: 'Correo electrónico inválido',
            ERROR_DUPLICATE: 'Ya existe un usuario con este correo electrónico',
        }
    },

    TEST_DATA: {
        VALID_USER: {
            name: 'User Test',
            email: 'test@example.com'
        },
        INVALID_USER: {
            name: '',
            email: 'invalid-email'
        }
    },

    API: {
        CREATE: '/api/users',
        UPDATE: '/api/users/*',
        DELETE: '/api/users/*',
        LIST: '/api/users'
    },

    TIMEOUTS: {
        DEFAULT: 10000,
        API_RESPONSE: 15000,
        ANIMATION: 500
    }
};

// Exportações separadas
export const SELECTORS = USER_ACCESS_VARIABLES.SELECTORS;
export const MESSAGES_SUCCESS = USER_ACCESS_VARIABLES.MESSAGES_SUCCESS;
export const MESSAGES_ERROR = USER_ACCESS_VARIABLES.MESSAGES_ERROR;
export const TEST_DATA = USER_ACCESS_VARIABLES.TEST_DATA;
export const API = USER_ACCESS_VARIABLES.API;
export const TIMEOUTS = USER_ACCESS_VARIABLES.TIMEOUTS;
