/*****************************************************
 * Page Function: Sample Script to Test  VolunteerAppointment Listing
 * @author: rsampang
 *****************************************************/

//Import Pages
import VolunteerAppointmentTypeListing from '../../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/Fs-025-Volunteer Appointment Type/VolunteerAppointmentTypeListing'
import data from '../../../../fixtures/Data_Module/FS-025-Membership-VIP-Volunteer-Veteran-League/025-data'
import login from '../../../../fixtures/login'


beforeEach(() => {

    // Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

})

// const VAppointmentTypeListing = () => {

describe('[TS05] Volunteer Appointment Listing ', () => {

    //Page definition
    const VolunterAppTypeListing = new VolunteerAppointmentTypeListing()

    it('[TC01] Creating New Volunteer Appointment Type', () => {
        cy.visit('/membership/volunteerAppointmentTypeListing')
        VolunterAppTypeListing.VerifyFormTitle()
        VolunterAppTypeListing.CreateNew()

    })
    //No Data on the Table Listing
    it('[TC02] Delete a Volunteer Appointment Type  using Confirmation Yes', () => {
        cy.visit('/membership/volunteerAppointmentTypeListing')

        VolunterAppTypeListing.SelectTableItemLink('ACC_YS_CHAIR')
        VolunterAppTypeListing.Delete()
        // VolunterAppTypeListing.DelConfirmYes()
    })
    it('[TC03] Delete a Volunteer Appointment Type using Confirmation No', () => {
        cy.visit('/membership/volunteerAppointmentTypeListing')
        VolunterAppTypeListing.SelectTableItemLink('ACC_YS_CHAIR')
        VolunterAppTypeListing.Delete()
        VolunterAppTypeListing.DelConfirmNo()
    })

})
// }
// export default VAppointmentTypeListing