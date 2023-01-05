import elems_VipAppointmentTermRegistrationListing from '../../../Elements/Membership/FS025_Membership-Vip-Volunteer-VeteranLeague/VipAppointmentTermRegListing'
import elems_VolunteerAppointmentTermRegistrationListing from '../../../Elements/Membership/FS025_Membership-Vip-Volunteer-VeteranLeague/VolunteerAppointmentTermRegListing'
import elems_Picker from '../../../Elements/Common/Picker'
class VIPAppointmentTermRegistrationListingForm {

    /*****************************************************
    * Method: FillOutVIPAppointmentTermRegListing
    * Description: This function Fill VIP Appointment Term Registration Listing
    * @param {string} AppoinmentID 
    * @param {string} Last4NRIC 
    * @param {string} MemberName 
    * @param {string} Type 
    * @param {string} StartDate 
    * @param {string} EndDate 
    *****************************************************/
    FillOutVIPAppointmentTermRegListing(MemberID, MemberName, StartDate, EndDate) {


        // cy.EnterText(elems_VipAppointmentTermRegistrationListing.TXT_APPOINTMENTID, AppoinmentID)
        // cy.EnterText(elems_VipAppointmentTermRegistrationListing.TXT_LAST4NRIC_ICNO, Last4NRIC)

        cy.SelectPickerFilter(
            elems_VolunteerAppointmentTermRegistrationListing.PCK_MEMBERID,
            elems_VolunteerAppointmentTermRegistrationListing.TXT_MEMBERNAMESELECTID,
            // elems_VolunteerAppointmentTermRegistrationListing.TXT_SELECTNAMEPOPUP,
            MemberID,
            elems_VolunteerAppointmentTermRegistrationListing.BTN_SEARCHFILTERSSELECTID
        )

        // cy.SelectPickerDifferentItems(
        //     elems_VipAppointmentTermRegistrationListing.PCK_MEMBERID,
        //     elems_VipAppointmentTermRegistrationListing.TXT_SELECTNAMEPOPUP,
        //     'Test Name'
        //     )
        cy.EnterText(elems_VipAppointmentTermRegistrationListing.TXT_MEMBERNAME, MemberName)
        // cy.SelectDropDownItem(elems_VipAppointmentTermRegistrationListing.DRP_TYPE, Type)
        cy.EnterDate(elems_VipAppointmentTermRegistrationListing.DATE_STARTDATE, StartDate)
        cy.EnterDate(elems_VipAppointmentTermRegistrationListing.DATE_ENDDATE, EndDate)
        cy.Click(elems_VipAppointmentTermRegistrationListing.BTN_SEARCHFILTERS)
        cy.wait(2000)

    }
    /*****************************************************
    * Method: FillOutVIPAppointmentTermRegListing
    * Description: This function Fill VIP Appointment Term Registration Listing
    * @param {string} AppoinmentID 
    * @param {string} Last4NRIC 
    * @param {string} MemberName 
    * @param {string} Type 
    * @param {string} StartDate 
    * @param {string} EndDate 
    *****************************************************/
    FilterByAppointIDAndNRIC(AppoinmentID, Last4NRIC) {


        cy.EnterText(elems_VipAppointmentTermRegistrationListing.TXT_APPOINTMENTID, AppoinmentID)
        cy.EnterText(elems_VipAppointmentTermRegistrationListing.TXT_LAST4NRIC_ICNO, Last4NRIC)
        cy.Click(elems_VipAppointmentTermRegistrationListing.BTN_SEARCHFILTERS)

    }
    /*****************************************************
     * Method: CreateNew
     * Description: This function verifies the functionality of create new button 
    *****************************************************/

    CreateNew() {
        cy.Click(elems_VipAppointmentTermRegistrationListing.BTN_CREATENEW, 'VIP Appointment Term Registration Detail')
    }

    /*****************************************************
     * Method: ClickTableItem
     * Description: This function click on table entry
     * @param {string} MemberID
    *****************************************************/

    ClickTableItem(MemberID) {

        cy.ClickTableLink(elems_VipAppointmentTermRegistrationListing.TBL_VIPAPPOINTMNTREGLIST,
            'Member ID', MemberID)

    }
    /*****************************************************
     * Method: ClickTableItem
     * Description: This function click on table entry
     * @param {string} MemberID
    *****************************************************/

    SelectTableItemLink(MemberID) {
        cy.SelectPickerFilter(
            elems_VolunteerAppointmentTermRegistrationListing.PCK_MEMBERID,
            elems_VolunteerAppointmentTermRegistrationListing.TXT_MEMBERNAMESELECTID,
            // elems_VolunteerAppointmentTermRegistrationListing.TXT_SELECTNAMEPOPUP,
            MemberID,
            elems_VolunteerAppointmentTermRegistrationListing.BTN_SEARCHFILTERSSELECTID
        )
        cy.Click(elems_VipAppointmentTermRegistrationListing.BTN_SEARCHFILTERS)
        cy.wait(3000)
        // cy.SelectTableItem(elems_VipAppointmentTermRegistrationListing.TBL_VIPAPPOINTMNTREGLIST,
        //     'Member ID', MemberID)
        cy.Click('//h2[text()="VIP Appointment Term Registration Listing"]/ancestor::div//table//input')
    }

    /*****************************************************
     * Method: ClickTableItem
     * Description: This function click on table entry
     * @param {string} MemberID
    *****************************************************/

    SelectMemberID(MemberID) {

        cy.Click(elems_VolunteerAppointmentTermRegistrationListing.PCK_MEMBERID)
        cy.EnterText(elems_VolunteerAppointmentTermRegistrationListing.TXT_MEMBERNAMESELECTID, MemberID)
        cy.Click(elems_VolunteerAppointmentTermRegistrationListing.BTN_SEARCHFILTERSSELECTID)
        cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, "Member ID", MemberID)
        cy.Click(elems_Picker.BTN_SELECT)
        cy.wait(2000)

        cy.Click(elems_VipAppointmentTermRegistrationListing.BTN_SEARCHFILTERS)
        cy.wait(3000)
        cy.SelectTableItem(elems_VipAppointmentTermRegistrationListing.TBL_VIPAPPOINTMNTREGLIST,
            'Member ID', MemberID)

    }

    /*****************************************************
     * Method: Cards
     * Description: This function selects the cards
     * 
     * @param {String} Card 
    *****************************************************/

    Cards(Card) {
        // cy.Click(elems_VipAppointmentTermRegistrationListing.BTNDRP_CARDS)
        // cy.wait(1000)
        // cy.Click(`//li[text()="${Card}"]`)
        cy.SelectDropDownItem(elems_VipAppointmentTermRegistrationListing.BTNDRP_CARDS, Card)
    }




}

export default VIPAppointmentTermRegistrationListingForm