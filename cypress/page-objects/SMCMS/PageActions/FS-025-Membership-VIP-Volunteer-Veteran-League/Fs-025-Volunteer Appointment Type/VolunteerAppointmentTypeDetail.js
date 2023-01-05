import elems_VolunteerAppointmentTypeDetail from '../../../Elements/Membership/FS025_Membership-Vip-Volunteer-VeteranLeague/VolunteerAppointmentTypeDetail'
import elems_Picker from '../../../Elements/Common/Picker'

class VolunteerAppointmentTypeDetail{
     /*****************************************************
         * Method: filloutVolunteerAppointmentTypeDetail
         * Description: Fills-out Volunteer AppointmentType Detail
         *  @param {string} AppointmentID  Appointment ID
         *  @param {string} AppointmentCode  Appointment Type
         *  @param {string} CommitteeCode   Committee Code
         *  @param {string} Point   Point
         *****************************************************/ 
    filloutVolunteerAppointmentTypeDetail({AppointmentID, AppointmentCode, CommitteeCode, Point})
    {
        // Enter Appointment ID
        if(AppointmentID !== undefined)
            {
            cy.xpath(elems_VolunteerAppointmentTypeDetail.TXT_APPOINTMENTID).clear()
            cy.EnterText(elems_VolunteerAppointmentTypeDetail.TXT_APPOINTMENTID, AppointmentID)
            } 
        //Enter Appointment Type
        if(AppointmentCode !== undefined)
            {
            cy.SelectDropDownItem(elems_VolunteerAppointmentTypeDetail.DRP_APPOINTMENTCODE, AppointmentCode)
            } 
        // Enter Committee Code
           if(CommitteeCode !== undefined)
            {
            cy.SelectDropDownItem(elems_VolunteerAppointmentTypeDetail.DRP_COMMITTEECODE, CommitteeCode)
            } 
        // Enter Point
            if(Point !== undefined)
            {
            cy.xpath(elems_VolunteerAppointmentTypeDetail.TXT_POINT).clear()
            cy.EnterText(elems_VolunteerAppointmentTypeDetail.TXT_POINT, Point)
            } 


            // Error Handling
            if(AppointmentID === undefined 
                && AppointmentType === undefined
                && CommitteeCode === undefined
                && Point === undefined
               )
            {
                throw new Error("VolunteerAppointmentTypeDetail.filloutVolunteerAppointmentTypeDetail Error!!./n\
                                Please provide at least one argument.")
            }

    }
    /*****************************************************
     * Method: SelectClubStore
     * Description: This function select value form Select source channel
     * @param {string} Name
     * @param {string} Group
     *****************************************************/
    SelectClubStore(Name, Group){
        cy.SelectPickerDifferentItemsSeachBTN(elems_VolunteerAppointmentTypeDetail.PCK_CLUBHOUSE,
            elems_VolunteerAppointmentTypeDetail.SELECTSOURCECHANNEL.TXT_NAME, Name,
            // elems_VolunteerAppointmentTypeDetail.SELECTSOURCECHANNEL.TXT_GROUP, Group,
            elems_VolunteerAppointmentTypeDetail.SELECTSOURCECHANNEL.BTN_SEARCHFILTER)
     }
     
    /*****************************************************
     * Method: SelectClubStore
     * Description: This function select value form Select source channel
     * @param {string} Name
     * @param {string} Group
     *****************************************************/
    FilterAndSelectByNameGroupClubStore(Name, Group){

        cy.Click(elems_VolunteerAppointmentTypeDetail.PCK_CLUBHOUSE)
        cy.EnterText(elems_VolunteerAppointmentTypeDetail.SELECTSOURCECHANNEL.TXT_NAME, Name,)
        // cy.EnterText(elems_VolunteerAppointmentTypeDetail.SELECTSOURCECHANNEL.TXT_GROUP, Group,)
        cy.Click(elems_VolunteerAppointmentTypeDetail.SELECTSOURCECHANNEL.BTN_SEARCHFILTER)

        cy.SelectTableItem(
            elems_Picker.TBL_PICKERITEMS,
            'Name', Name,
            'Group', Group
        )

        cy.Click(elems_Picker.BTN_SELECT)
     }

      /*****************************************************
     * Method: Save
     * Description: Click Save button
     *****************************************************/
    Save(){ 
        cy.Click(elems_VolunteerAppointmentTypeDetail.BTN_SAVE)
      }
      /*****************************************************
     * Method: Cancel
     * Description: Click Cancel button
     *****************************************************/
    Cancel(){

        // Click Cancel button
        cy.Click(elems_VolunteerAppointmentTypeDetail.BTN_CANCEL)

      
    }

}
export default VolunteerAppointmentTypeDetail

       