/*****************************************************
 * FS#: FS-028
 * Test Scenario: Task 3900: SP-2-Page Actions-FS-004- Customer Category Type Details
 *
 * @author: fshahzada
 *****************************************************/
// Import Pages
import SMCMSUserDetail from '../../../../../page-objects/SMCMS/PageActions/FS-001-Admin-SystemLogin/FS-001-SMCMSUser/SMCMSUserDetails'
import data from '../../../../../fixtures/Data_Module/FS-001-Admin-System-login/001-data'

describe('SMCMS User', function (){
    
    const UpdatedRemark = data.SMCMSUserDetail.updatedRemark
    const Position = data.SMCMSUserDetail.Position

    const User = new SMCMSUserDetail()
    //Page definition
    it('[TC01] Verify user Details', function () {

       cy.visit('/admin/smcmsUserDetails?id=902934fc-3301-4fad-8e5c-a3a094d1f2c8') 
       
       cy.wait(2000)

       User.VerifyPageTitle('SMCMS User Detail')
       
       User.UpdateRemarks(UpdatedRemark)

       User.AddPosition(Position)

       User.RemovePosition(Position)

       User.AddPosition(Position)
 
    })
})

