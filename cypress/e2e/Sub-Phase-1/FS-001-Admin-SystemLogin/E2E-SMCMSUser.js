import SMCMSUserListing from '../../../page-objects/SMCMS/PageActions/FS-001-Admin-SystemLogin/FS-001-SMCMSUser/SMCMSUserListing'
import SMCMSUserDetail from '../../../page-objects/SMCMS/PageActions/FS-001-Admin-SystemLogin/FS-001-SMCMSUser/SMCMSUserDetails'
// import data from '../../../../../fixtures/Data_Module/FS-001-Admin-System-login/001-data'
import data from '../../../fixtures/Data_Module/FS-004-Admin-Settings/001-Uat-data'

const SMCMSUser = () => {

    describe('[TS01] SMCMS User Management', () => {
        //page definition
        const SMCMSUserList = new SMCMSUserListing()
        const User = new SMCMSUserDetail()
        const UpdatedRemark = data.SMCMSUserDetail.updatedRemark
        const Position = data.clickLoginEmail.PositionList
        const PositionDetail = data.SMCMSUserDetail.PositionDetail
        const LoginEmail = data.clickLoginEmail.LoginEmail
        const Status = data.clickLoginEmail.Status
        const StatusDisabled = 'Disabled'

        it('[TC01] Updating the SMCMS User and checking filter functionality', () => {

            // Visit SMCMS User Listing Form
            cy.visit('/admin/smcmsUserList?pageNumber=1&pageSize=20')

            // FilOut Filter Form
            SMCMSUserList.FilloutFilters({ LoginEmail, Position, Status })

            // Click on Search Filter button
            SMCMSUserList.SearchFiters()

            // Click on Email Link
            SMCMSUserList.loginEmailLink(data.clickLoginEmail)

            // Update Remark Field
            User.UpdateRemarks(UpdatedRemark)

            // Add Postion
            User.AddPosition(PositionDetail)

            // Remove Postion
            User.RemovePosition(PositionDetail)

            // Add Again Postion
            User.AddPosition(PositionDetail)

            // Save SMCMS User detail form
            User.Save()

            // Verify Notification Message
            User.VerifyNotificationMsg('Record has been saved successfully.')

            // Verify Page title
            User.VerifyPageTitle('SMCMS User Listing')
        })
        it('[TC02] Disabling the SMCMS User Email', () => {

            // Visit SMCMS User Listing Form
            cy.visit('/admin/smcmsUserList?pageNumber=1&pageSize=20')
            cy.wait(5000)

            // FilOut Filter Form
            SMCMSUserList.FilloutFilters({ LoginEmail, Position, Status })

            // Click on Search Filter button
            SMCMSUserList.SearchFiters()

            // Disabled User Email
            SMCMSUserList.DisabledEmail(data.disabledemail)
            cy.wait(1000)

            //Verify Notification Message
            User.VerifyNotificationMsg('User disabled successfully.')
        })
        it('[TC03] Enabling the SMCMS User Email', () => {

            // Visit SMCMS User Listing Form
            cy.visit('/admin/smcmsUserList?pageNumber=1&pageSize=20')
            cy.wait(5000)

            // FilOut Filter Form
            SMCMSUserList.FilloutFilters({ LoginEmail, Position, StatusDisabled })

            // Click on Search Filter button
            SMCMSUserList.SearchFiters()

            SMCMSUserList.VerifyUserStatus(LoginEmail, 'Disabled')

            // Enabled SMCMS User Email
            SMCMSUserList.EnabledEmail(data.enabledemail)
            cy.wait(1000)

            // Verify Notification Message
            User.VerifyNotificationMsg('User enabled successfully.')
        })

        it('[TC04] Updating the SMCMS User and cancelling', () => {

            // Visit SMCMS User Listing Form
            cy.visit('/admin/smcmsUserList?pageNumber=1&pageSize=20')

            // FilOut Filter Form
            SMCMSUserList.FilloutFilters({ LoginEmail, Position, Status })

            // Click on Search Filter button
            SMCMSUserList.SearchFiters()

            // Click on Email Link
            SMCMSUserList.loginEmailLink(data.clickLoginEmail)

            // Update Remark Field
            User.UpdateRemarks(UpdatedRemark)

            // Add Postion
            User.AddPosition(PositionDetail)

            // Remove Postion
            User.RemovePosition(PositionDetail)

            // Add Again Postion
            User.AddPosition(PositionDetail)

            // Save SMCMS User detail form
            User.Cancel()

            // Verify Page title
            User.VerifyPageTitle('SMCMS User Listing')
        })
    })

}

export default SMCMSUser