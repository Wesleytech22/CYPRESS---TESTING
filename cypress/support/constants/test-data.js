// cypress/support/constants/test-data.js

import RandomData from '../utils/random-data';

class TestData {
    getCorporate() {
        return {
            name: RandomData.getRandomCompanyName(),
            contract: String(RandomData.getRandomInt(1, 100)),
            integrationContractNumber: RandomData.getRandomString(10)
        };
    }

    getNewCorporate() {
        return {
            name: RandomData.getRandomCompanyName(),
            contract: String(RandomData.getRandomInt(1, 100)),
            integrationContractNumber: RandomData.getRandomString(10)
        };
    }

    getUser() {
        return {
            name: RandomData.getRandomName(),
            email: RandomData.getRandomEmail(),
            cpf: RandomData.getRandomCpf(),
            phone: RandomData.getRandomPhone()
        };
    }

}

export default new TestData();