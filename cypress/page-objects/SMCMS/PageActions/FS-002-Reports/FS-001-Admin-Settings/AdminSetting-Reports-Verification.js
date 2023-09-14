import elems_MemberCard from "../../../Elements/FS-002 Reports/FS-030-Identity/MemberCard";

class Report_AdminSetting {
     /*****************************************************
     * Method: Checking functionallity and Verification on 
               Notification Log Listing
     * Description: This function verifies the page
    *****************************************************/
               verifyNotificationLogListing(expectedPg) {
                cy.visit('/report?reportId=ReportSetting.NotificationLog')
                cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
                cy.wait(2000)
                cy.ValidateElementText(elems_MemberCard.LBL_PAGE, expectedPg)
          
                // cy.Click(elems_MemberCard.BTN_GENERATE)
                // cy.wait(5000)
                //cy.ValidateElementText('//div[@data-id="table1_1"]')
                //cy.Click(elems_IGMainListing.BTN_EXPORT)
            }
       
}

export default Report_AdminSetting