import { SELECTORS, MESSAGES_SUCCESS, MESSAGES_ERROR, TEST_DATA, API, TIMEOUTS } from "../../support/constants/corporation-variables";

export class Corporation {
    constructor() {
        this.selectors = SELECTORS;
        this.messagesSuccess = MESSAGES_SUCCESS;
        this.messagesError = MESSAGES_ERROR;
        this.testData = TEST_DATA;
        this.api = API;
        this.timeouts = TIMEOUTS;
    }
}