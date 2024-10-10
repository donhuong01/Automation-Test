import elems_PageHeader from "../../../Elements/Common/PageHeader"
import elems_Alerts from '../../../Elements/Common/Alerts.js'
import elems_VolunteerAppointmentListing from '../../../Elements/Membership/FS025_Membership-Vip-Volunteer-VeteranLeague/VolunteerAppointmentListing'

class VolunteerAppointmentListing{
    /*****************************************************
         * Method: Verify page title
         * Description: This function verifies the page title
         * @param {string} ExpectedPg

    *****************************************************/

     verifyPageTitle(ExpectedPg)

    {

      cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)

    }

    /************************************************** 
         * Method: SelectTableEntry
         * Description: This function select entry from the table
         * @param {string} TaragtCloumn
         * @param {string} ExpectedValue

    *****************************************************/


    SelectTableEntry(TaragtCloumn, ExpectedValue)
    {
        
        cy.SelectTableItem(elems_VolunteerAppointmentListing.TBL_VOLUNTEERAPPOINTMENTLISTING,
          TaragtCloumn, ExpectedValue)
    }

     /************************************************** 
         * Method: createNew
         * Description: This function click on Create New button

    *****************************************************/

     createNew()
     {
        cy.Click(elems_VolunteerAppointmentListing.BTN_CREATENEW,'Volunteer Appointment Listing')

     }

     /************************************************** 
         * Method: delete
         * Description: This function click on Delete button

     *****************************************************/

     delete()
     {
        cy.Click(elems_VolunteerAppointmentListing.BTN_DELETE,'Volunteer Appointment Listing')
     }

          /************************************************** 
      * Method: deleteConfirmationYes
      * Description: This function Click on Yes button in delete confirmation popup
         
     *****************************************************/
     deleteConfirmationYes(){

     cy.Click(elems_Alerts.BTN_YES, 'Volunteer Appointment Listing')

     }

     /************************************************** 
      * Method: deleteConfirmationNo
      * Description: This function Click on Yes button in delete confirmation popup
           
     *****************************************************/
     deleteConfirmationNo(){

     cy.Click(elems_Alerts.BTN_NO, 'Volunteer Appointment Listing')

     }


}   
export default new VolunteerAppointmentListing
