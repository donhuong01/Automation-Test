import elems_PageHeader from "../../../Elements/Common/PageHeader"
import elems_VolunteerAppointmentDetail from '../../../Elements/Membership/FS025_Membership-Vip-Volunteer-VeteranLeague/VolunteerAppointmentDetail'

class VolunteerAppointmentDetail{
    /*****************************************************
         * Method: Verify page title
         * Description: This function verifies the page title

    *****************************************************/

     verifyPageTitle()

    {

      cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Volunteer Appointment Detail')

    }

    /************************************************** 
         * Method: Fill the form 
         * Description: This function fills the detail form 
         * @param {string} appointmentCode
         * @param {string} appointmentDescription

    *****************************************************/


    fillOutForm(appointmentCode,appointmentDescription)
    {
        cy.xpath(elems_VolunteerAppointmentDetail.TXT_APPOINTMENTCODE).clear()
        cy.EnterText(elems_VolunteerAppointmentDetail.TXT_APPOINTMENTCODE,appointmentCode)
        cy.xpath(elems_VolunteerAppointmentDetail.TXT_APPOINTMENTDESCRIPTION).clear()
        cy.EnterText(elems_VolunteerAppointmentDetail.TXT_APPOINTMENTDESCRIPTION,appointmentDescription)
    }

     /************************************************** 
         * Method: save the form 
         * Description: This function saves the detail form 

    *****************************************************/

     save()
     {
        cy.Click(elems_VolunteerAppointmentDetail.BTN_SAVE,'Volunteer Appointment Listing')
        cy.wait(3000)

     }

     cancel()
     {
        cy.Click(elems_VolunteerAppointmentDetail.BTN_CANCEL,'Volunteer Appointment Listing')
     }


}   
export default new VolunteerAppointmentDetail
