import { Corporation } from "../../pages/organiz_management/Corporation";

describe('Corporation Management', () => {
    const corporation = new Corporation();

    beforeEach(() => {
        corporation.navigateToCorporationList();
    });

    it('should create a new corporation', () => {
        corporation.navigateToCreate();
        corporation.fillForm(corporation.testData.VALID_CORPORATION);
        corporation.save();
        corporation.validateSuccessMessage('PT', 'CREATE');
        corporation.validateCorporationInList(corporation.testData.VALID_CORPORATION.corporation);
    });
});
