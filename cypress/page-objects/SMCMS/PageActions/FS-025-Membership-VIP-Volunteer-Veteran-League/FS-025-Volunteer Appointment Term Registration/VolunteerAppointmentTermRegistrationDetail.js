import elems_VolunteerAppointmentTermRegistrationDetail from '../../../Elements/Membership/FS025_Membership-Vip-Volunteer-VeteranLeague/VolunteerAppointmentTermRegDetail'
import elems_PageHeader from '../../../Elements/Common/PageHeader.js'
import elems_Picker from '../../../Elements/Common/Picker'

class VolunteerAppointmentTermRegistrationDetail{
    /*****************************************************
     * Method: Form Title
     * Description: Verify form Title 
     * @param {string} ExpectedPg
    *****************************************************/ 

     VerifyFormTitle(ExpectedPg)
     {
         cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)
     }
    /*****************************************************
     * Method: Form Title
     * Description: Verify form Title 
     * @param {string} NRIC
     * @param {string} Name
    *****************************************************/ 

     ValidateNameAndNRIC(NRIC, Name)
     {
         cy.ValidateElementText(elems_VolunteerAppointmentTermRegistrationDetail.LBL_LAST4NRIC_ICNO, NRIC)
         cy.ValidateElementText(elems_VolunteerAppointmentTermRegistrationDetail.LBL_MEMBERNAME, Name)
     }

    /*****************************************************
     * Method: Form Title
     * Description: Verify form Title 
     * @param ExpectedPg
    *****************************************************/ 

    /************************************************** 
     * Method: FillOutVolAppointmentTermRegDetailForm 
     * Description: This function FillOut Volunteer Appointment Term Registration Detail Form
     * @param {string} MemberID
     * @param {string} MemberName
     * @param {string} AppointmentID
     * @param {string} startDate 
     * @param {string} EndDate
    *****************************************************/
   FillOutVolAppointmentTermRegDetailForm(MemberID, MemberName, AppointmentID, startDate, EndDate)
   {
    cy.PickerFieldwithTwoFieldsSearchFilter(
        elems_VolunteerAppointmentTermRegistrationDetail.PCK_MEMBERID,
        elems_VolunteerAppointmentTermRegistrationDetail.SELECTMEMBERID.TXT_MEMBERID, MemberID,
        elems_VolunteerAppointmentTermRegistrationDetail.SELECTMEMBERID.TXT_NAME, MemberName,
        'Member ID', MemberID
        )
    cy.SelectDropDownItem(elems_VolunteerAppointmentTermRegistrationDetail.DRP_APPOINTMENTTYPEID, AppointmentID)

    cy.EnterDate(elems_VolunteerAppointmentTermRegistrationDetail.DATE_STARTDATE, startDate)
    cy.EnterDate(elems_VolunteerAppointmentTermRegistrationDetail.DATE_ENDDATE, EndDate)
    // cy.SelectDate(elems_VolunteerAppointmentTermRegistrationDetail.DATE_STARTDATE, StartDate)
    // cy.SelectDate(elems_VolunteerAppointmentTermRegistrationDetail.DATE_ENDDATE, EndDate)
   }

      save()
      {
         cy.Click(elems_VolunteerAppointmentTermRegistrationDetail.BTN_SAVE,'Volunteer Appointment Term Registration Listing')
         cy.wait(3000)
 
      }
    /************************************************** 
     * Method: Cancel the form 
     * Description: This function Cancel the detail form 
    *****************************************************/
      cancel()
      {
         cy.Click(elems_VolunteerAppointmentTermRegistrationDetail.BTN_CANCEL,'Volunteer Appointment Term Registration Detail')
      }
    /************************************************** 
     * Method: VerifySuccessMSG
     * Description: This function Verifies success notification message
     * @param {string} Message
    *****************************************************/
     VerifySuccessMSG(Message)
      {
         cy.Click(elems_Picker.MSG_NOTIFICATION, Message)
      }
 
}
export default VolunteerAppointmentTermRegistrationDetail

       