import elems_VolunteerAppointmentTermRegistrationListing from '../../../Elements/Membership/FS025_Membership-Vip-Volunteer-VeteranLeague/VolunteerAppointmentTermRegListing'
import elems_Picker from '../../../Elements/Common/Picker'
class AppointmentTermRegistrationListingForm {

     /*****************************************************
     * Method: FillOutAppointmentTermRegListing
     * Description: This function Fill Appointment Term Registration Listing
     * @param {string} AppoinmentID 
     * @param {string} Last4NRIC 
     * @param {string} MemberName 
     * @param {string} MemberID 
     * @param {string} Type 
     * @param {string} StartDate
     * @param {string} EndDate
     *****************************************************/

    FillOutAppointmentTermRegListing(MemberID, MemberName, StartDate, EndDate) {

    // cy.xpath(elems_VolunteerAppointmentTermRegistrationListing.TXT_APPOINMENTTYPE).clear()
    // cy.EnterText(elems_VolunteerAppointmentTermRegistrationListing.TXT_APPOINMENTTYPE, AppoinmentID)
    // cy.xpath(elems_VolunteerAppointmentTermRegistrationListing.TXT_LASTFOURNRIC).clear()
    // cy.EnterText(elems_VolunteerAppointmentTermRegistrationListing.TXT_LASTFOURNRIC, Last4NRIC)

    cy.SelectPickerDifferentItemsSeachBTN(
        elems_VolunteerAppointmentTermRegistrationListing.PCK_MEMBERID,
        elems_VolunteerAppointmentTermRegistrationListing.TXT_MEMBERNAMESELECTID,
        // elems_VolunteerAppointmentTermRegistrationListing.TXT_SELECTNAMEPOPUP,
        MemberID,
        elems_VolunteerAppointmentTermRegistrationListing.BTN_SEARCHFILTERSSELECTID
         )

    cy.EnterText(elems_VolunteerAppointmentTermRegistrationListing.TXT_MEMBERNAME, MemberName)
    // cy.SelectDropDownItem(elems_VolunteerAppointmentTermRegistrationListing.DRP_STATUS, Type)
    cy.EnterDate(elems_VolunteerAppointmentTermRegistrationListing.DATE_STARDATE , StartDate)
    cy.EnterDate(elems_VolunteerAppointmentTermRegistrationListing.DATE_ENDDATE , EndDate)

    cy.Click(elems_VolunteerAppointmentTermRegistrationListing.BTN_SEARCHFILTERS)
    cy.wait(3000)

    // cy.get('(//h2[text()="Volunteer Appointment Term Registration Listing"]//ancestor::div//table//a)[1]').should('contain', MemberID)
    }

    SelectTableItem(MemberID)
    {
        cy.SelectPickerItem(
            elems_VolunteerAppointmentTermRegistrationListing.PCK_MEMBERID,
            elems_VolunteerAppointmentTermRegistrationListing.TXT_MEMBERNAMESELECTID,
            // elems_VolunteerAppointmentTermRegistrationListing.TXT_SELECTNAMEPOPUP,
            MemberID,
            elems_VolunteerAppointmentTermRegistrationListing.BTN_SEARCHFILTERSSELECTID
             )
        cy.Click(elems_VolunteerAppointmentTermRegistrationListing.BTN_SEARCHFILTERS)
        cy.wait(3000)    
        cy.SelectTableItem(elems_VolunteerAppointmentTermRegistrationListing.TBL_VOLUNTEERAPTMNTTERMREGLISTING,
        'Member ID', MemberID)
    
    }

        /*****************************************************
     * Method: SelectMemberID
     * Description: This function click on table entry
     * @param {string} SelectMemberID
     * @param {string} MemberName
    *****************************************************/

         SelectMemberID(NRIC, MemberName)
         {
             
             cy.EnterText(elems_VolunteerAppointmentTermRegistrationListing.TXT_LASTFOURNRIC, NRIC)
             cy.EnterText(elems_VolunteerAppointmentTermRegistrationListing.TXT_MEMBERNAME, MemberName)
             // cy.Click(elems_VolunteerAppointmentTermRegistrationListing.PCK_MEMBERID)
             // cy.EnterText(elems_VolunteerAppointmentTermRegistrationListing.TXT_MEMBERNAMESELECTID, MemberID)
                 // // elems_VolunteerAppointmentTermRegistrationListing.TXT_SELECTNAMEPOPUP,
                 // MemberID,
             // cy.Click(elems_VolunteerAppointmentTermRegistrationListing.BTN_SEARCHFILTERSSELECTID)
            //  cy.Click(elems_Picker.BTN_SELECT)
             // cy.wait(2000)
                  
             cy.Click(elems_VolunteerAppointmentTermRegistrationListing.BTN_SEARCHFILTERS)
             cy.wait(3000)    
             cy.SelectTableItem(elems_VolunteerAppointmentTermRegistrationListing.TBL_VOLUNTEERAPTMNTTERMREGLISTING,
             'Member Name', MemberName)
         
         }

    /*****************************************************
     * Method: Cards
     * Description: This function selects the cards
     * 
     * @param {String} Card 
    *****************************************************/
    Cards(Card)
    {
        cy.Click(elems_VolunteerAppointmentTermRegistrationListing.BTN_CARDS)
        cy.Click(`//li[text()="${Card}"]`)

    }
}

export default AppointmentTermRegistrationListingForm