import NFS_Update from '../../../page-objects/SMCMS/PageActions/FS-017-Data-Integration-Management/NFS Update'
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

const { MemberId, BatchName, DocumentDate, FileName } = data.NFS_Update

describe('FS-017 Data Update Management', function () {

    it('Creating NSF Update and Importing NSF In File', function () {

        common.Checkin(MemberId)

        cy.visit('/di/NSFUpdateListing')
        cy.wait(3000)

        NFS_Update.CreateNew()

        NFS_Update.NFSUpdateInformation(BatchName, DocumentDate)

        NFS_Update.Save()

        cy.xpath('(//div[@class="k-widget k-grid"]//table//a)[1]').then(txt => {

            const BatchId = txt.text()

            NFS_Update.ApplyFilter(BatchId, 'Pending')

            NFS_Update.VerifyNewItem(BatchName)

            NFS_Update.ClickBatchIdLink(BatchId)

            // NFS_Update.ImportNewInFile(FileName)

            // NFS_Update.Save()

            // NFS_Update.ApplyFilter(BatchId, 'Pending')

        })

        cy.LogoutOfSmcms()

    })

})