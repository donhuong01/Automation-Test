import IBG_Deduction from '../../../page-objects/SMCMS/PageActions/FS-017-Data-Integration-Management/IBG Deduction Management'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import login from '../../../fixtures/login'
import data from '../../../fixtures/Data_Module/FS-017-Data-Integration/Data_Integration'

const common = new Common()

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

const { MemberId, MembershipExpiryPerd, BatchName, DormantMemberPrd, DocumentDate, BatchType, SFSType } = data.IBG_Deduction

describe('FS-017 IBG Deduction Management', function () {

    it('Generate IBG Out File', function () {

        common.Checkin(MemberId)

        cy.visit('/di/IBGDeductionListing')
        cy.wait(3000)

        IBG_Deduction.CreateNew()

        IBG_Deduction.IBGDeductionInformation(MembershipExpiryPerd, BatchName, DormantMemberPrd, DocumentDate, BatchType, SFSType)

        IBG_Deduction.Save()

        cy.xpath('(//div[@class="k-widget k-grid"]//table//a)[1]').then(txt => {

            const BatchId = txt.text()

            IBG_Deduction.ApplyFilter(BatchId, BatchType, SFSType)

            IBG_Deduction.ClickBatchIdLink(BatchId)

            IBG_Deduction.GenerateIBGOutFile()

            IBG_Deduction.ApplyFilter(BatchId, BatchType, SFSType)

            IBG_Deduction.VerifyItemStatus('Out File Creating')
        })

        cy.LogoutOfSmcms()

    })

})