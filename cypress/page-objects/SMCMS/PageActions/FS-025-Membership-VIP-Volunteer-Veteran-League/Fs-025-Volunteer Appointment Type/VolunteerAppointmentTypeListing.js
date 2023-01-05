import elems_VolunteerAppointmentTypeListing from '../../../Elements/Membership/FS025_Membership-Vip-Volunteer-VeteranLeague/VolunteerAppointmentTypeListing'
import elems_PageHeader from '../../../Elements/Common/PageHeader.js'
import elems_Alerts from '../../../Elements/Common/Alerts'

class VolunteerAppointmentTypeListing {

    /*****************************************************
         * Method: VerifyFormTitle
         * Description: Verify form Title 
    *****************************************************/
    VerifyFormTitle() {
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Volunteer Appointment Type Listing')
    }

    /*****************************************************
         * Method: Creat New
         * Description: Create New Volunteer Appointment Type
    *****************************************************/

    CreateNew() {
        cy.Click(elems_VolunteerAppointmentTypeListing.BTN_CREATENEW,)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Volunteer Appointment Type Detail')
    }
    /*****************************************************
         * Method: DeleteNewlyCreatedData
         * Description: Delete newly created item
         * @param AppointmentID
         * @param AppointmentCode
    *****************************************************/

    DeleteNewlyCreatedItem(AppointmentID, AppointmentCode) {

        cy.SelectTableItem(
            elems_VolunteerAppointmentTypeListing.TBL_VOLUNTEERAPPTMENTTYPELIST,
            'Appointment ID', AppointmentID,
            'Appointment Code', AppointmentCode)
        cy.Click(elems_VolunteerAppointmentTypeListing.BTN_DELETE)
    }


    /************************************************** 
    * Method: DelConfirmYes
    * Description: This function Click on Yes button in delete confirmation popup
         
    *****************************************************/
    DelConfirmYes() {
        cy.Click(elems_Alerts.BTN_YES, 'Volunteer Appointment Type Listing')

    }

    /************************************************** 
    * Method: DelConfirmNo
    * Description: This function Click on Yes button in delete confirmation popup
    *****************************************************/
    DelConfirmNo() {
        cy.Click(elems_Alerts.BTN_NO, 'Volunteer Appointment Type Listing')

    }
    /************************************************** 
        * Method: SelectTableItemLink(ExpectedValue)
        * Description: This function select entry from the table
        * @param {string} ExpectedValue
   *****************************************************/
    SelectTableItemLink(ExpectedValue) {
        cy.SelectTableItem(
            elems_VolunteerAppointmentTypeListing.TBL_VOLUNTEERAPPTMENTTYPELIST, 'Appointment ID', ExpectedValue)
    }

    /************************************************** 
        * Method: VerifyNewlyCreatedItemInListingForm
        * Description: This function verify table items
        * @param {string} ExpectedValue
    *****************************************************/
    VerifyNewlyCreatedItemInListingForm(ExpectedValue) {
        cy.VerifyTableEntry(
            elems_VolunteerAppointmentTypeListing.TBL_VOLUNTEERAPPTMENTTYPELIST, 'Appointment ID', ExpectedValue)
    }
    /************************************************** 
        * Method: Delete
        * Description: This function Click on Delete button
    *****************************************************/
    Delete() {
        cy.Click(elems_VolunteerAppointmentTypeListing.BTN_DELETE)
    }

}
export default VolunteerAppointmentTypeListing