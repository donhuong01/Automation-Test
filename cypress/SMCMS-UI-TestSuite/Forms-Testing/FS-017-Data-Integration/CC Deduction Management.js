import CC_Deduction from '../../../../page-objects/SMCMS/PageActions/FS-017 Data Integration Management/CC Deduction'
import Common from '../../../../page-objects/SMCMS/PageActions/Common/Common'
import login from '../../../../fixtures/login'
import data from '../../../../fixtures/Data_Module/FS-017-Data-Integration/Data_Integration'

const common = new Common()

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

const { MemberId, BatchName, DocumentDate, BatchRegId } = data.CC_Batch

describe('FS-017 CC Deduction Management', function () {

    it('Creating a CC Deduction Batch', function () {

        common.Checkin(MemberId)

        cy.visit('/di/CCDeductionListing')
        cy.wait(3000)

        CC_Deduction.CreateNew()

        CC_Deduction.CCDeductionInformation(BatchName, DocumentDate, BatchRegId)

        CC_Deduction.Save()

        cy.xpath('(//div[@class="k-widget k-grid"]//table//a)[1]').then(txt => {

            const BatchId = txt.text()

            CC_Deduction.ApplyFilter(BatchId, 'Pending', BatchRegId)

            CC_Deduction.VerifyNewItem(BatchName)

        })

        cy.LogoutOfSmcms()

    })

})