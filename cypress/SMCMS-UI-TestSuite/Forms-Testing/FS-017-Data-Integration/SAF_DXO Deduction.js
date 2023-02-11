import SAF_DXO_Deduction from '../../../../page-objects/SMCMS/PageActions/FS-017 Data Integration Management/SAF DXO Deduction'
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

const { MemberId, MembershipExpiryPerd, BatchName, DormantMemberPrd, DocumentDate, SAFDXOType } = data.SAF_DXO_Deduction

describe('FS-017 SAF/DXO Deduction Management', function () {

    it('Creating a SAF/DXO Deduction Batch', function () {

        common.Checkin(MemberId)

        cy.visit('/di/SAFDXODeductionListing')
        cy.wait(3000)

        SAF_DXO_Deduction.CreateNewInFile()

        SAF_DXO_Deduction.SAFDXODeductionInformation(MembershipExpiryPerd, BatchName, DormantMemberPrd, DocumentDate, SAFDXOType)

        SAF_DXO_Deduction.Save()

        cy.xpath('(//div[@class="k-widget k-grid"]//table//a)[1]').then(txt => {

            const BatchId = txt.text()

            SAF_DXO_Deduction.ApplyFilter(BatchId, 'Pending')

            SAF_DXO_Deduction.VerifyNewItem(BatchName)

            SAF_DXO_Deduction.SelectItem(BatchName)

            SAF_DXO_Deduction.CreateNewInFile()

            SAF_DXO_Deduction.SAFDXOInFile(BatchName, DocumentDate, SAFDXOType)

            SAF_DXO_Deduction.Save()
        })

        cy.LogoutOfSmcms()

    })

})