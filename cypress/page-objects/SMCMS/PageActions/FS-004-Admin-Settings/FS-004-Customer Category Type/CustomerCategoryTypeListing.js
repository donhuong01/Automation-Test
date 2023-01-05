// import elems_VolunteerAppointmentDetail from '../../../Elements/Membership/FS025_Membership-Vip-Volunteer-VeteranLeague/VolunteerAppointmentDetail'
import elems_PageHeader from "../../../Elements/Common/PageHeader"
import elems_CustomerCategoryTypeListing from '../../../Elements/Admin/FS004_Admin-Settings/CustomerCategoryTypeListing'
import elems_Alerts from "../../../Elements/Common/Alerts"
class CustomerCategoryTypeListing{
    /*****************************************************
         * Method: Verify page title
         * Description: This function verifies the page title
         * @param {string} ExpectedPage

    *****************************************************/

     verifyPageTitle(ExpectedPage)

    {

      cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPage)

    }

    /************************************************** 
         * Method: SearchAndSelectCustomerCategory 
         * Description: This function Search and Select Customer Category 
         * @param {string} CustomerCategory

    *****************************************************/

    SearchAndSelectCustomerCategory(CustomerCategory)
    {
        cy.EnterText(elems_CustomerCategoryTypeListing.TXT_CUSTOMERCATEGORYTYPE, CustomerCategory)
        cy.Click(elems_CustomerCategoryTypeListing.BTN_SEARCH)
        cy.wait(5000)
        cy.SelectTableItem(
             elems_CustomerCategoryTypeListing.TBL_CUSTOMERCATEGORYTYPE,
             'Customer Category Type Name', CustomerCategory)

    }

     /************************************************** 
         * Method: CreateNew
         * Description: This function click on Create New button

    *****************************************************/

     CreateNew()
     {
        cy.Click(elems_CustomerCategoryTypeListing.BTN_CREATENEW,'Customer Category Type Detail')
        cy.wait(3000)

     }

     /************************************************** 
         * Method: Delete
         * Description: This function click on delete button

    *****************************************************/
     Delete()
     {
        cy.Click(elems_CustomerCategoryTypeListing.BTN_DELETE)
     //    cy.Click(elems_Alerts.BTN_Delete,'Customer Category Type Listing')
     }

     /************************************************** 
         * Method: DeleteConfirmationPopup
         * Description: This function click on delete button in the confirmation popup

    *****************************************************/
     DeleteConfirmationPopup()
     {
        cy.Click(elems_Alerts.BTN_Delete)
     }

     /************************************************** 
         * Method: CancelConfirmationPopup
         * Description: This function click on Cancel button in the confirmation popup

    *****************************************************/
     CancelConfirmationPopup()
     {
        cy.Click(elems_Alerts.BTN_Cancel,'Customer Category Type Listing')
     }

     /************************************************** 
         * Method: VerifySuccessNotification
         * Description: This function verify success notification message
         * @param {string} ExpectedPage
    *****************************************************/
     VerifySuccessNotification(ExpectedPage)
     {
        cy.ValidateElementText(elems_CustomerCategoryTypeListing.MSG_SUCCESSDELETEMSG, ExpectedPage)
     }

     /************************************************** 
         * Method: ClickTableItem
         * Description: This function clicks on table item
         * @param {string} item
    *****************************************************/
      ClickTableItem(item)
     {
        cy.ClickTableLink(elems_CustomerCategoryTypeListing.TBL_CUSTOMERCATEGORYTYPE,
          'Customer Category Type Name', item)

          // cy.EnterText(elems_CustomerCategoryTypeListing.TXT_CUSTOMERCATEGORYTYPE, item)
          // cy.Click(elems_CustomerCategoryTypeListing.BTN_SEARCH)
          // cy.wait(5000)
          // cy.ClickTableLink(
          //      elems_CustomerCategoryTypeListing.TBL_CUSTOMERCATEGORYTYPE,
          //      'Customer Category Type Name', item)
     }


}   
export default CustomerCategoryTypeListing
