
import PositionDetailForm from '../../../../../page-objects/SMCMS/PageActions/FS-001-Admin-SystemLogin/FS-001-SMCMSPosition/SMCMSPositionDetail'
import data from '../../../../../fixtures/Data_Module/FS-004-Admin-Settings/001-data'

describe('[TS01] SMCMS Position Detail Form', function () {


    // Page Definitions
    const PositionDetail = new PositionDetailForm()

    it('[TC01] Page Actions -FS-001- Fillout Position Detail Form and click Cancel button', function () {

        const PositionName = data.SAMFRAPostionDetails.positionName
        const Role = data.SAMFRAPostionDetails.Role
        const Location = data.SAMFRAPostionDetails.Location
        const Remark = data.SAMFRAPostionDetails.Remark
        const TargetUserEmail = data.SAMFRAPostionDetails.targetUserEmail
        const TargetUserName = data.SAMFRAPostionDetails.targetUserName

        //Navigate to SMCMS Position Listing
        cy.visit('https://qa-smcms.safra.sg/admin/smcmsPositionDetails')
        cy.wait(8000)

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
        // PositionDetail.addUsersAndVerifyTableEntry(TargetUserEmail, TargetUserName)

        // //Cancel the form
        // PositionDetail.Cancel()

    })

    it('[TC02] Fillout Position Detail Form and click Save button', function () {

        const PositionName = data.SAMFRAPostionDetails.positionName
        const Role = data.SAMFRAPostionDetails.Role
        const Location = data.SAMFRAPostionDetails.Location
        const Remark = data.SAMFRAPostionDetails.Remark
        const TargetUserEmail = data.SAMFRAPostionDetails.targetUserEmail
        const TargetUserName = data.SAMFRAPostionDetails.targetUserName

        //Navigate to SMCMS Position Listing
        cy.visit('https://qa-smcms.safra.sg/admin/smcmsPositionDetails')
        cy.wait(5000)

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

    })
})
