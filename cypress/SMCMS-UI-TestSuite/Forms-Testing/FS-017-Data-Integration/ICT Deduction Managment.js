import ICT_Deduction from '../../../page-objects/SMCMS/PageActions/FS-017-Data-Integration-Management/ICT Deduction Management'
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

const { MemberId, MembershipExpiryPerd, BatchName, DormantMemberPrd, DocumentDate } = data.ICT_Deduction

describe('FS-017 ICT Deduction Management', function () {

    it('Creating an ICT Deduction Batch', function () {

        common.Checkin(MemberId)

        cy.visit('/di/ICTDeductionListing')
        cy.wait(3000)

        ICT_Deduction.CreateNew()

        ICT_Deduction.ICTDeductionInformation(MembershipExpiryPerd, BatchName, DormantMemberPrd, DocumentDate)

        ICT_Deduction.Save()

        cy.xpath('(//div[@class="k-widget k-grid"]//table//a)[1]').then(txt => {

            const BatchId = txt.text()

            ICT_Deduction.ApplyFilter(BatchId, 'Pending')

            ICT_Deduction.VerifyNewItem(BatchName)
        })


        cy.LogoutOfSmcms()

    })

})