import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_VipAppointmentTypeDetail from '../../../Elements/Membership/FS025_Membership-Vip-Volunteer-VeteranLeague/VipAppointmentTypeDetail'

class VIPAppointmentDetail {
    /*****************************************************
     * Method: Detail Form Verification
     * Description: Varify the tile of the Detail Form
     * @param ExpectedPg
     *****************************************************/
    verifyTitle(ExpectedPg){ 
        cy.wait(2000)
        cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)
        
    }

     /*****************************************************
     * Method: FillOut Details form 
     * Description: FillOut VIP Appointment Type Detail form
     *
     * @param {string} AppointmentID
     * @param {string} Description
     * @param {string} Type
     * @param {string} FreeMembership
     *****************************************************/

    fillOutForm(AppointmentID,Description,Type,FreeMembership){

        cy.xpath(elems_VipAppointmentTypeDetail.TXT_APPOINTMENTID).clear()
        cy.EnterText(elems_VipAppointmentTypeDetail.TXT_APPOINTMENTID,AppointmentID)
        cy.EnterText(elems_VipAppointmentTypeDetail.TXT_DESCRIPTION,Description)
        cy.SelectDropDownItem(elems_VipAppointmentTypeDetail.DRP_TYPE,Type)
        cy.TickCheckBox(elems_VipAppointmentTypeDetail.CHK_FREEMEMBERSHIP,FreeMembership)
     }

    /*****************************************************
    * Method: Save Details form 
    * Description: Save VIP Appointment Type Detail form
    *****************************************************/
     
     saveForm()
     {
        cy.Click(elems_VipAppointmentTypeDetail.BTN_SAVE,'VIP Appointment Type Listing')
     }
     
    /*****************************************************
    * Method: Cancel Details form 
    * Description: Cancel VIP Appointment Type Detail form
    *****************************************************/

     cancelForm()
     {
        cy.Click(elems_VipAppointmentTypeDetail.BTN_CANCEL,'VIP Appointment Type Listing')

     }

    /*****************************************************
    * Method: VerifySuccessMSG
    * Description: this function verify Notification msg
    * @param NotificationMsg
    *****************************************************/

     VerifySuccessMSG(NotificationMsg)
     {
        cy.ValidateElementText('//div[@class="notification__message"]', NotificationMsg)

     }


}

export default VIPAppointmentDetail