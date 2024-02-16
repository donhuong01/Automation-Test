import elems_MemberCard from "../../../Elements/FS-002 Reports/FS-030-Identity/MemberCard";

class Report_AdminSetting {
     /*****************************************************
     * Method: Checking functionallity and Verification on 
               Notification Log Listing
     * Description: This function verifies the page
    *****************************************************/
               verifyNotificationLogListing(expectedPg) {
                cy.visit('/report?reportId=ReportSetting.NotificationLog')
                // cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
                cy.wait(2000)
                cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)
          
                // cy.Click(elems_MemberCard.BTN_GENERATE)
                // cy.wait(5000)
                //cy.ValidateElementText('//div[@data-id="table1_1"]')
                //cy.Click(elems_IGMainListing.BTN_EXPORT)
            }

    /*****************************************************
     * Method: Checking Verification on 
               Approval Process
     * Description: This function verifies the page
    *****************************************************/
               verifyApprovalProcess(expectedPg) {
                cy.visit('/report?reportId=ReportIdentity.ApprovalProcessReport')
                // cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
                cy.wait(2000)
                cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)
          
                // cy.Click(elems_MemberCard.BTN_GENERATE)
                // cy.wait(5000)
                //cy.ValidateElementText('//div[@data-id="table1_1"]')
                //cy.Click(elems_IGMainListing.BTN_EXPORT)
            }

    /*****************************************************
     * Method: Checking Verification on 
               Locked User Account Log
     * Description: This function verifies the page
    *****************************************************/
               verifyLockedUserAccounts(expectedPg) {
                cy.visit('/report?reportId=ReportIdentity.LockedUserAccountLog')
                // cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
                cy.wait(2000)
                cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)
          
                // cy.Click(elems_MemberCard.BTN_GENERATE)
                // cy.wait(5000)
                //cy.ValidateElementText('//div[@data-id="table1_1"]')
                //cy.Click(elems_IGMainListing.BTN_EXPORT)
            }

    /*****************************************************
     * Method: Checking Verification on 
               Reassigned Task
     * Description: This function verifies the page
    *****************************************************/
               verifyReassignedTask(expectedPg) {
                cy.visit('/report?reportId=ReportIdentity.ReassignedTaskReport')
                // cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
                cy.wait(2000)
                cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)
          
                // cy.Click(elems_MemberCard.BTN_GENERATE)
                // cy.wait(5000)
                //cy.ValidateElementText('//div[@data-id="table1_1"]')
                //cy.Click(elems_IGMainListing.BTN_EXPORT)
            }

    /*****************************************************
     * Method: Checking Verification on 
               System Login Log
     * Description: This function verifies the page
    *****************************************************/
               verifySystemLoginLog(expectedPg) {
                cy.visit('/report?reportId=ReportIdentity.SystemLoginLog')
                // cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
                cy.wait(2000)
                cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)
          
                // cy.Click(elems_MemberCard.BTN_GENERATE)
                // cy.wait(5000)
                //cy.ValidateElementText('//div[@data-id="table1_1"]')
                //cy.Click(elems_IGMainListing.BTN_EXPORT)
            }

    /*****************************************************
     * Method: Checking Verification on 
               User Account Listing Report
     * Description: This function verifies the page
    *****************************************************/
               verifyUserAccountListing(expectedPg) {
                cy.visit('/report?reportId=ReportIdentity.UserAccountListingReport')
                // cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
                cy.wait(2000)
                cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)
          
                // cy.Click(elems_MemberCard.BTN_GENERATE)
                // cy.wait(5000)
                //cy.ValidateElementText('//div[@data-id="table1_1"]')
                //cy.Click(elems_IGMainListing.BTN_EXPORT)
            }

    /*****************************************************
     * Method: Checking Verification on 
               User Assigned Dashboard
     * Description: This function verifies the page
    *****************************************************/
               verifyUserAssignedDashboard(expectedPg) {
                cy.visit('/report?reportId=ReportIdentity.UserAssignedDashboardListingReport')
                // cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
                cy.wait(2000)
                cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)
          
                // cy.Click(elems_MemberCard.BTN_GENERATE)
                // cy.wait(5000)
                //cy.ValidateElementText('//div[@data-id="table1_1"]')
                //cy.Click(elems_IGMainListing.BTN_EXPORT)
            }
    
    /*****************************************************
     * Method: Checking Verification on 
               User Assigned Location
     * Description: This function verifies the page
    *****************************************************/
               verifyUserAssignedLocation(expectedPg) {
                cy.visit('/report?reportId=ReportIdentity.UserAssignedLocationListing')
                // cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
                cy.wait(2000)
                cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)
          
                // cy.Click(elems_MemberCard.BTN_GENERATE)
                // cy.wait(5000)
                //cy.ValidateElementText('//div[@data-id="table1_1"]')
                //cy.Click(elems_IGMainListing.BTN_EXPORT)
            }

    /*****************************************************
     * Method: Checking Verification on 
               User Assigned Report
     * Description: This function verifies the page
    *****************************************************/
               verifyUserAssignedReport(expectedPg) {
                cy.visit('/report?reportId=ReportIdentity.UserAssignedReportListing')
                // cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
                cy.wait(2000)
                cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)
          
                // cy.Click(elems_MemberCard.BTN_GENERATE)
                // cy.wait(5000)
                //cy.ValidateElementText('//div[@data-id="table1_1"]')
                //cy.Click(elems_IGMainListing.BTN_EXPORT)
            }

    /*****************************************************
     * Method: Checking Verification on 
               User Assigned Roles Position
     * Description: This function verifies the page
    *****************************************************/
               verifyUserAssignedRolesPosition(expectedPg) {
                cy.visit('/report?reportId=ReportIdentity.UserAssignedRolesPositionListing')
                // cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
                cy.wait(2000)
                cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)
          
                // cy.Click(elems_MemberCard.BTN_GENERATE)
                // cy.wait(5000)
                //cy.ValidateElementText('//div[@data-id="table1_1"]')
                //cy.Click(elems_IGMainListing.BTN_EXPORT)
            }

    /*****************************************************
     * Method: Checking Verification on 
               User Functional Access
     * Description: This function verifies the page
    *****************************************************/
               verifyUserFunctionalAccess(expectedPg) {
                cy.visit('/report?reportId=ReportIdentity.UserFunctionalAccessListing')
                // cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
                cy.wait(2000)
                cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)
          
                // cy.Click(elems_MemberCard.BTN_GENERATE)
                // cy.wait(5000)
                //cy.ValidateElementText('//div[@data-id="table1_1"]')
                //cy.Click(elems_IGMainListing.BTN_EXPORT)
            }
}

export default Report_AdminSetting