import elems_VipAppointmentTermRegistrationDetail from '../../../../SMCMS/Elements/Membership/FS025_Membership-Vip-Volunteer-VeteranLeague/VipAppointmentTermRegistrationDetail'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Picker from '../../../Elements/Common/Picker'

class VIPAppointmentTermRegistrationDetailForm {
   /*****************************************************
    * Method: Detail Form Verification
    * Description: Varify the tile of the Detail Form
    * @param ExpectedPg
    *****************************************************/
   verifyPageTitle(ExpectedPg) {

      cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)

   }

   /*****************************************************
   * Method: FillOut Details form 
   * Description: FillOut VIP Appointment Term Registration Detail form
   *
   * @param {string} MemberID
   * @param {string} Name
   * @param {string} VerifyNRIC
   * @param {string} AppointmentID
   * @param {string} Type
   * @param {string} StartDate
   * @param {string} EndDate
   *****************************************************/

   UpdateVipAppointmentTermRegDetailForm(MemberID, Name, VerifyNRIC, AppointmentID,
      Type, StartDate, EndDate) {

      //   cy.PickerFieldwithTwoFieldsSearchFilter(elems_VipAppointmentTermRegistrationDetail.PCK_MEMBERID,

      //   elems_VipAppointmentTermRegistrationDetail.TXT_MEMBERID, MemberID,    
      //   elems_VipAppointmentTermRegistrationDetail.TXT_NAME, Name,
      //   'Member ID', MemberID   
      //   )
      //   cy.wait(2000)
      cy.Click(elems_VipAppointmentTermRegistrationDetail.PCK_MEMBERID)
      cy.wait(2000)
      cy.Click(elems_VipAppointmentTermRegistrationDetail.PCK_MEMBERID)
      //   cy.Click(elems_VipAppointmentTermRegistrationDetail.PCK_MEMBERID)
      cy.wait(5000)
      cy.EnterText(elems_VipAppointmentTermRegistrationDetail.TXT_MEMBERID, MemberID)
      cy.EnterText(elems_VipAppointmentTermRegistrationDetail.TXT_NAME, Name)
      cy.Click(elems_Picker.BTN_SEARCH)

      cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, 'Member ID', MemberID)
      cy.Click(elems_Picker.BTN_SELECT)

      cy.ValidateElementText(elems_VipAppointmentTermRegistrationDetail.LBL_LAST4NRIC, VerifyNRIC)
      cy.SelectDropDownItem(elems_VipAppointmentTermRegistrationDetail.DRP_APPOINTMENTID, AppointmentID)
      cy.ValidateElementText(elems_VipAppointmentTermRegistrationDetail.LBL_TYPE, Type)
      cy.EnterDate(elems_VipAppointmentTermRegistrationDetail.DATE_STARTDATE, StartDate)
      cy.EnterDate(elems_VipAppointmentTermRegistrationDetail.DATE_ENDDATE, EndDate)
   }

   /*****************************************************
   * Method: FillOut Details form 
   * Description: FillOut VIP Appointment Term Registration Detail form
   *
   * @param {string} MemberID
   * @param {string} Name
   * @param {string} VerifyNRIC
   * @param {string} AppointmentID
   * @param {string} Type
   * @param {string} StartDate
   * @param {string} EndDate
   *****************************************************/
   fillOutVipAppointmentTermRegDetailForm(MemberID, Name, VerifyNRIC, AppointmentID,
      Type, StartDate, EndDate) {


      cy.SelectPickerFilter(elems_VipAppointmentTermRegistrationDetail.PCK_MEMBERID,
         elems_VipAppointmentTermRegistrationDetail.TXT_MEMBERID, MemberID,
         elems_VipAppointmentTermRegistrationDetail.BTN_SEARCH)

      cy.ValidateElementText(elems_VipAppointmentTermRegistrationDetail.LBL_LAST4NRIC, VerifyNRIC)
      cy.SelectDropDownItem(elems_VipAppointmentTermRegistrationDetail.DRP_APPOINTMENTID, AppointmentID)
      cy.ValidateElementText(elems_VipAppointmentTermRegistrationDetail.LBL_TYPE, Type)
      cy.EnterDate(elems_VipAppointmentTermRegistrationDetail.DATE_STARTDATE, StartDate)
      cy.EnterDate(elems_VipAppointmentTermRegistrationDetail.DATE_ENDDATE, EndDate)
   }


   /*****************************************************
   * Method: Save Details form 
   * Description: Save VIP Appointment Term Registration Detail form
   *****************************************************/

   saveForm() {
      cy.Click(elems_VipAppointmentTermRegistrationDetail.BTN_SAVE, 'VIP Appointment Term Registration Listing')
      cy.wait(2000)
   }

   /*****************************************************
   * Method: Cancel Details form 
   * Description: CancelVIP Appointment Term Registration Detail
   *****************************************************/

   cancelForm() {
      cy.Click(elems_VipAppointmentTermRegistrationDetail.BTN_CANCEL, 'VIP Appointment Term Registration Listing')

   }

   /*****************************************************
   * Method: CreateNew
   * Description:This function click on create new button
   *****************************************************/

   CreateNew() {
      cy.Click(elems_VipAppointmentTermRegistrationDetail.BTN_CREATENEW)

   }

   /*****************************************************
   * Method: VerifySuccessMSG
   * Description: this function verify Notification msg
   * @param NotificationMsg
   *****************************************************/

   VerifySuccessMSG(NotificationMsg) {
      cy.ValidateElementText(elems_Picker.MSG_NOTIFICATION, NotificationMsg)

   }


}

export default VIPAppointmentTermRegistrationDetailForm