import PositionDetailForm from '../../../page-objects/SMCMS/PageActions/FS-001-Admin-SystemLogin/FS-001-SMCMSPosition/SMCMSPositionDetail'
import PositionListing from '../../../page-objects/SMCMS/PageActions/FS-001-Admin-SystemLogin/FS-001-SMCMSPosition/SMCMSPositionListing'
// import elems_SMCMSPoitionDetail from '../../../../../page-objects/SMCMS/Elements/Admin/FS001_Admin-SystemLogin/SMCMSPositionDetail'
import data from '../../../fixtures/Data_Module/FS-004-Admin-Settings/001-data'
// import data from '../../../fixtures/Data_Module/FS-004-Admin-Settings/001-Uat-data'


const SMCMSPostion = () => {

describe('[TS01] SMCMS Position Management', function () {
    

    // Page Definitions
    const PositionDetail = new PositionDetailForm()
    const posList = new PositionListing()

    const PositionName = data.SAMFRAPostionDetails.positionName + Math.floor(Math.random() * 1000 )
    const Role = data.SAMFRAPostionDetails.Role
    const Location = data.SAMFRAPostionDetails.Location
    const Remark = data.SAMFRAPostionDetails.Remark
    const TargetUserEmail = data.SAMFRAPostionDetails.targetUserEmail
    const TargetUserName = data.SAMFRAPostionDetails.targetUserName
    const Name = data.positionList.positionName
    const lastDate = data.positionList.lastDate

    //Update data
    const UpdatedPositionName = data.UpdatedSAMFRAPostionDetails.positionName + Math.floor(Math.random() * 1000 )
    const UpdatedRole = data.UpdatedSAMFRAPostionDetails.Role
    const UpdatedLocation = data.UpdatedSAMFRAPostionDetails.Location
    const UpdatedRemark = data.UpdatedSAMFRAPostionDetails.Remark

    it('[TC01] Fillout Position Detail Form and click Save button', function () {



        //Navigate to SMCMS Position Listing
        cy.visit('/admin/smcmsPositionList')
        // cy.wait(5000)

        
        //Verify create new button functionality
        posList.createNew()

        //Verify page title
        PositionDetail.verifyPageTitle('SMCMS Position Detail')
        
        //Fill out position details form
        PositionDetail.fillOutPositionDetailForm(PositionName, Role, Location, Remark)

        //Select user from the userlist
        PositionDetail.addUsersAndVerifyTableEntry(TargetUserEmail, TargetUserName)

        //Verify page title
        PositionDetail.verifyPageTitle('SMCMS Position Detail')

        //Search and delete User
        PositionDetail.searchAndDeleteUser(TargetUserEmail)

        //Select user from the userlist
        PositionDetail.addUsersAndVerifyTableEntry(TargetUserEmail, TargetUserName)

        //Cancel the form
        PositionDetail.Save()

        //Verify Success message
        PositionDetail.VerifyNotificationMsg('Record has been saved successfully.')

        //verify page title
        posList.verifyPageTitle()

        //Verify newly created entry in the table
        posList.VerifySearchFilter(PositionName)
        
})

    it('[TC02] Update newly created postion', function() {

        //Navigate to SMCMS Position Listing
        cy.visit('/admin/smcmsPositionList')
        cy.wait(3000)

        //Verify Search filter functionality
        posList.VerifySearchFilter(PositionName)

        //Click table entry
        posList.UpdatePosition(PositionName)

        //Fill out position details form
        PositionDetail.fillOutPositionDetailForm(UpdatedPositionName, UpdatedRole, UpdatedLocation, UpdatedRemark)
        
        //Select user from the userlist
        PositionDetail.addUsersAndVerifyTableEntry(TargetUserEmail, TargetUserName)
    
        //Cancel the form
        PositionDetail.Save()

        //Verify Success message
        PositionDetail.VerifyNotificationMsg('Record has been saved successfully.')

        //Verify Page title
        posList.verifyPageTitle()

        //Verify newly created entry in the table
        posList.VerifySearchFilter(UpdatedPositionName)
    })

    it('[TC03] Updating  and cancelling a Position Name', function() {

        //Navigate to SMCMS Position Listing
        cy.visit('/admin/smcmsPositionList')
        cy.wait(3000)

        //Verify Search filter functionality
        posList.VerifySearchFilter(UpdatedPositionName)

        //Click table entry
        posList.UpdatePosition(UpdatedPositionName)

        //Fill out position details form
        PositionDetail.fillOutPositionDetailForm(UpdatedPositionName, UpdatedRole, UpdatedLocation, UpdatedRemark)
        
        //Select user from the userlist
        PositionDetail.addUsersAndVerifyTableEntry(TargetUserEmail, TargetUserName)
    
        //Cancel the form
        PositionDetail.Cancel()

        //Verify Page title
        posList.verifyPageTitle()

    })

    it('[TC04] Delete newly created Psition Name in the table', function() {

        //Navigate to SMCMS Position Listing
        cy.visit('/admin/smcmsPositionList')
        cy.wait(3000)

        //Verify Search filter functionality
        posList.VerifySearchFilter(UpdatedPositionName)

        //Select and Delete Table entry
        posList.Delete(UpdatedPositionName)

        //Click Yes button
        posList.DeleteConfirmYes()

        //Verify Success message
        PositionDetail.VerifyNotificationMsg('Record has been deleted successfully.')

    })

})

}

export default SMCMSPostion