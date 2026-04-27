// cypress/support/utils/random-data.js

class RandomData {
    constructor() {
        this.adjetivos = ['Auto', 'Test', 'QA', 'Cypress', 'Random', 'Global', 'Dynamic'];
        this.substantivos = ['Solutions', 'Technologies', 'Systems', 'Innovations', 'Global', 'Group', 'Inc'];

        this.cepsReais = [
            '01001-000', '01310-000', '01414-001', '04538-132', '05424-020',
            '20010-010', '22041-001', '22231-002', '22775-001', '24020-096',
            '30110-001', '30240-020', '30350-020', '30411-020', '30750-020',
            '40010-001', '40140-130', '40280-000', '40301-155', '40415-000',
            '70070-010', '70333-900', '70415-900', '70714-900', '70830-100',
            '80010-010', '80215-901', '80410-010', '80530-000', '80810-050',
            '90010-001', '90220-001', '90450-001', '90510-001', '90650-001'
        ];
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomString(length = 8) {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    getRandomBoolean() {
        return Math.random() >= 0.5;
    }

    getRandomEmail() {
        const domains = ['teste.com', 'qa.com', 'cypress.com', 'automacao.com'];
        return `${this.getRandomString(8)}@${domains[Math.floor(Math.random() * domains.length)]}`;
    }

    getRandomPhone() {
        const ddd = this.getRandomInt(11, 99);
        const part1 = this.getRandomInt(90000, 99999);
        const part2 = this.getRandomInt(1000, 9999);
        return `(${ddd}) ${part1}-${part2}`;
    }

    calculateDigit(numbers, weightsStart) {
        let weight = weightsStart;
        let sum = 0;

        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i] * weight;
            weight--;

            if (weight < 2 && weightsStart === 2) {
                weight = 9;
            }
        }

        const remainder = sum % 11;
        return remainder < 2 ? 0 : 11 - remainder;
    }

    generateRandomArray(length, min = 0, max = 9) {
        const arr = [];
        for (let i = 0; i < length; i++) {
            arr.push(this.getRandomInt(min, max));
        }
        return arr;
    }

    getRandomCnpj() {
        const base = this.generateRandomArray(12, 0, 9);
        base[0] = this.getRandomInt(1, 9);

        const firstDigit = this.calculateDigit(base, 5);
        const secondDigit = this.calculateDigit([...base, firstDigit], 6);

        const cnpjNumbers = [...base, firstDigit, secondDigit];

        return `${cnpjNumbers[0]}${cnpjNumbers[1]}.${cnpjNumbers[2]}${cnpjNumbers[3]}${cnpjNumbers[4]}.${cnpjNumbers[5]}${cnpjNumbers[6]}${cnpjNumbers[7]}/${cnpjNumbers[8]}${cnpjNumbers[9]}${cnpjNumbers[10]}${cnpjNumbers[11]}-${cnpjNumbers[12]}${cnpjNumbers[13]}`;
    }

    getRandomCnpjNumbers() {
        return this.getRandomCnpj().replace(/\D/g, '');
    }

    getRandomCpf() {
        const base = this.generateRandomArray(9, 0, 9);

        const firstDigit = this.calculateDigit(base, 10);
        const secondDigit = this.calculateDigit([...base, firstDigit], 11);

        const cpfNumbers = [...base, firstDigit, secondDigit];

        return `${cpfNumbers[0]}${cpfNumbers[1]}${cpfNumbers[2]}.${cpfNumbers[3]}${cpfNumbers[4]}${cpfNumbers[5]}.${cpfNumbers[6]}${cpfNumbers[7]}${cpfNumbers[8]}-${cpfNumbers[9]}${cpfNumbers[10]}`;
    }

    getRandomCpfNumbers() {
        return this.getRandomCpf().replace(/\D/g, '');
    }

    getRandomCep() {
        return this.cepsReais[Math.floor(Math.random() * this.cepsReais.length)];
    }

    getRandomUf() {
        const ufs = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
        return ufs[Math.floor(Math.random() * ufs.length)];
    }

    getRandomCity() {
        const cities = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Porto Alegre', 'Salvador', 'Brasília', 'Fortaleza', 'Recife', 'Manaus'];
        return cities[Math.floor(Math.random() * cities.length)];
    }

    getRandomAddress() {
        const streets = ['Rua', 'Avenida', 'Alameda', 'Travessa'];
        const streetNames = ['Brasil', 'Paulista', 'Central', 'Principal', 'das Flores'];
        return `${streets[Math.floor(Math.random() * streets.length)]} ${streetNames[Math.floor(Math.random() * streetNames.length)]}, ${this.getRandomInt(1, 9999)}`;
    }

    getRandomNeighborhood() {
        const neighborhoods = ['Centro', 'Jardins', 'Vila Mariana', 'Copacabana', 'Ipanema', 'Liberdade', 'Barra Funda', 'Moema'];
        return neighborhoods[Math.floor(Math.random() * neighborhoods.length)];
    }

    getRandomName() {
        const nomes = ['João', 'Maria', 'José', 'Ana', 'Pedro', 'Paula', 'Carlos', 'Mariana'];
        const sobrenomes = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira'];
        return `${nomes[Math.floor(Math.random() * nomes.length)]} ${sobrenomes[Math.floor(Math.random() * sobrenomes.length)]}`;
    }

    getRandomCompanyName() {
        const adj = this.adjetivos[Math.floor(Math.random() * this.adjetivos.length)];
        const sub = this.substantivos[Math.floor(Math.random() * this.substantivos.length)];
        const num = this.getRandomInt(1, 999);
        return `${adj}${sub}${num}`;
    }

    getRandomQuantity() {
        return this.getRandomInt(1, 100);
    }

    getRandomDate(startYear = 2000, endYear = 2025) {
        const year = this.getRandomInt(startYear, endYear);
        const month = String(this.getRandomInt(1, 12)).padStart(2, '0');
        const day = String(this.getRandomInt(1, 28)).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    getRandomTime() {
        const hour = String(this.getRandomInt(0, 23)).padStart(2, '0');
        const minute = String(this.getRandomInt(0, 59)).padStart(2, '0');
        const second = String(this.getRandomInt(0, 59)).padStart(2, '0');
        return `${hour}:${minute}:${second}`;
    }

    getRandomDateTime() {
        return `${this.getRandomDate()} ${this.getRandomTime()}`;
    }

    getRandomStatusCode() {
        const codes = ['ACTIVE', 'INACTIVE', 'PENDING', 'APPROVED', 'REJECTED'];
        return codes[Math.floor(Math.random() * codes.length)];
    }

    getRandomPriority() {
        const priorities = ['HIGH', 'MEDIUM', 'LOW'];
        return priorities[Math.floor(Math.random() * priorities.length)];
    }
}

export default new RandomData();