import elems_VIPAppointmentTypeListing  from '../../../Elements/Membership/FS025_Membership-Vip-Volunteer-VeteranLeague/VipAppointmentTypeListing'
import elems_PageHeader from '../../../Elements/Common/PageHeader.js'
import elems_Alerts from '../../../Elements/Common/Alerts.js'


class VIPAppointmentTypeListing{

    /*****************************************************
         * Method: Form Title
         * Description: Verify form Title 
         * @param ExpectedPg
    *****************************************************/ 

      VerifyFormTitle(ExpectedPg)
      {
          cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)
      }

    /*****************************************************
         * Method: Creat New
         * Description: Create New Volunteer Appointment Type
    *****************************************************/ 

     CreateNew()
    {
        cy.Click(elems_VIPAppointmentTypeListing.BTN_CREATENEW)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE,'VIP Appointment Type Detail')
    }
    /*****************************************************
         * Method: Delete
         * Description: Delete a VIP Appointment Type
         * 
         * @param {string} AppointmentID
         * @param {string} Description
    *****************************************************/ 

    Delete(AppointmentID,Description)
    {
        cy.TickSpecificTableItem(Description)
        // cy.SelectTableItem(
        //     elems_VIPAppointmentTypeListing.TBL_VIPAPPOINTMENTTYPELISTING,
        //     'Appointment ID', AppointmentID,
        //     'Description', Description
        // )
        cy.Click(elems_VIPAppointmentTypeListing.BTN_DELETE)
         
    }

    /*****************************************************
         * Method: VeridyNewlyCreatedItem
         * Description: This function verify newly created item in the listing form
         * 
         * @param {string} AppointmentID
         * @param {string} Description
    *****************************************************/ 

     VerifyNewlyCreatedItem(AppointmentID,Description)
    {
        cy.VerifyTableEntry(
            elems_VIPAppointmentTypeListing.TBL_VIPAPPOINTMENTTYPELISTING,
            'Appointment ID', AppointmentID,
            'Description', Description
        )

    }
   
    /************************************************** 
    * Method: DelConfirmYes
    * Description: This function Click on Yes button in delete confirmation popup
         
    *****************************************************/
    DelConfirmYes()
    {
        cy.Click(elems_Alerts.BTN_YES, 'VIP Appointment Type Listing')
       
    }
       
    /************************************************** 
    * Method: DelConfirmNo
    * Description: This function Click on No button in delete confirmation popup
    *****************************************************/
     DelConfirmNo()
    {
       cy.Click(elems_Alerts.BTN_NO, 'VIP Appointment Type Listing')
       
    }
     /************************************************** 
         * Method: SelectTableEntry
         * Description: This function select entry from the table
            * @param {string} AppointmentID

    *****************************************************/
    SelectTableItem(AppointmentID)
    {
        cy.SelectTableItem(
            elems_VIPAppointmentTypeListing.TBL_VIPAPPOINTMENTTYPELISTING, 
            'Appointment ID',ExpectedValue,
            'Description',Description)
    }

}
export default VIPAppointmentTypeListing