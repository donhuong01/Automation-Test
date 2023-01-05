import elems_PageHeader from "../../../Elements/Common/PageHeader"
import elems_VolunteerCommitteeListing from '../../../Elements/Membership/FS025_Membership-Vip-Volunteer-VeteranLeague/VolunteerCommitteeListing'
import elems_Alerts from '../../../Elements/Common/Alerts.js'

class VolunteerCommitteListing{


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
         * @param {string} TargetColumn
         * @param {string} ExpectedValue

    *****************************************************/


    SelectTableEntry(TargetColumn, ExpectedValue)
    {
        cy.SelectTableItem(elems_VolunteerCommitteeListing.TBL_VOLUNTEERCOMMITTEELISTING,
          TargetColumn, ExpectedValue)
    }

     /************************************************** 
         * Method: delete
         * Description: This function click on delete button
         
    *****************************************************/

     delete()
     {
        cy.Click(elems_VolunteerCommitteeListing.BTN_DELETE,'Volunteer Committee Listing')

     }

    /************************************************** 
         * Method: CreateNew
         * Description: This function create volunteer
         
    *****************************************************/
     createNew()
     {
        cy.Click(elems_VolunteerCommitteeListing.BTN_CREATENEW,'Volunteer Committee Details')
     }

     /************************************************** 
      * Method: deleteConfirmationYes
      * Description: This function Click on Yes button in delete confirmation popup
         
     *****************************************************/
      deleteConfirmationYes(){

          cy.Click(elems_Alerts.BTN_YES, 'Volunteer Committee Listing')

      }

     /************************************************** 
      * Method: deleteConfirmationNo
      * Description: This function Click on Yes button in delete confirmation popup
         
     *****************************************************/
      deleteConfirmationNo(){

          cy.Click(elems_Alerts.BTN_NO, 'Volunteer Committee Listing')

      }


}   
export default new VolunteerCommitteListing
