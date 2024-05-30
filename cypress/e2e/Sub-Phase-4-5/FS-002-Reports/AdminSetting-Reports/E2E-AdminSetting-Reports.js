import Report_AdminSetting from "../../../../page-objects/SMCMS/PageActions/FS-002-Reports/FS-001-Admin-Settings/AdminSetting-Reports-Verification";
import data from "../../../../fixtures/Data_Module/FS-002-Reports/AdminSetting-Reports-data"


const Reports_AdminSetting  = new Report_AdminSetting ()

const AdminSetting_Report = () => {

    describe("Admin Settings Verification",function(){

        it('Checking Access on on Collected Redeemed Stock Listing', function(){
            Reports_AdminSetting.verifyNotificationLogListing
            (
                data.NOTIF_LOG.EXPECTEDPG
            )
        })

        it('Checking Access on on Approval Process', function(){
            Reports_AdminSetting.verifyApprovalProcess
            (
                data.APPROVAL_PROCESS.EXPECTEDPG
            )
        })

        it('Checking Access on on Locked User Account Log', function(){
            Reports_AdminSetting.verifyLockedUserAccounts
            (
                data.LOCKED_USER.EXPECTEDPG
            )
        })

        it('Checking Access on on Reassigned Task', function(){
            Reports_AdminSetting.verifyReassignedTask
            (
                data.REASSIGN_TASK.EXPECTEDPG
            )
        })

        it('Checking Access on on System Login Log', function(){
            Reports_AdminSetting.verifySystemLoginLog
            (
                data.SYSTEM_LOGIN.EXPECTEDPG
            )
        })

        it('Checking Access on on User Account Listing Report', function(){
            Reports_AdminSetting.verifyUserAccountListing
            (
                data.USER_ACCOUNT_LISTING.EXPECTEDPG
            )
        })

        it('Checking Access on on User Assigned Dashboard', function(){
            Reports_AdminSetting.verifyUserAssignedDashboard
            (
                data.USER_ASSIGNED_DASHBOARD.EXPECTEDPG
            )
        })

        it('Checking Access on on User Assigned Location', function(){
            Reports_AdminSetting.verifyUserAssignedLocation
            (
                data.USER_ASSIGNED_LOCATION.EXPECTEDPG
            )
        })

        it('Checking Access on on User Assigned Report', function(){
            Reports_AdminSetting.verifyUserAssignedReport
            (
                data.USER_ASSIGNED_REPORT.EXPECTEDPG
            )
        })

        it('Checking Access on on User Assigned Roles Position', function(){
            Reports_AdminSetting.verifyUserAssignedRolesPosition
            (
                data.USER_ASSIGNED_ROLES_POSITION.EXPECTEDPG
            )
        })

        it('Checking Access on on User Functional Access', function(){
            Reports_AdminSetting.verifyUserFunctionalAccess
            (
                data.USER_FUNCTIONAL_ACCESS.EXPECTEDPG
            )
        })

    })


}

export default AdminSetting_Report