import VIPAppointmentTermRegistrationListingForm from '../../../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-VIP Appointment Term Registration/VIPAppointmentTermRegistrationListingForm'
import data from '../../../../../fixtures/Data_Module/FS-025-Membership-VIP-Volunteer-Veteran-League/025-data'
import login from '../../../../../fixtures/login';






beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

describe('Task 4008: SP-2-Page Actions-FS- 025- VIP Appointment Term Registration Listing Form', function () {

    const VIPAppointmentTerm = new VIPAppointmentTermRegistrationListingForm()

    const AppointmentID = data.VIPAppointmentTermRegLIsting.AppointmentID
    const Last4NRICNO = data.VIPAppointmentTermRegLIsting.Last4NRICNO
    const MemberID = data.VIPAppointmentTermRegLIsting.MemberID
    const MemberName = data.VIPAppointmentTermRegLIsting.MemberName
    const Type = data.VIPAppointmentTermRegLIsting.Type
    const StartDate = data.VIPAppointmentTermRegLIsting.StartDate
    const EndDate = data.VIPAppointmentTermRegLIsting.EndDate
    it('Verify Filters in VIP Appointment Term Registration Listing', function () {

        //Visit VIP Appointment Term Registration Listing
        cy.visit('/membership/vipAppointmentTermRegistrationListing');

        //Fill Out VIP Appointment Term Registration Listing
        VIPAppointmentTerm.FillOutVIPAppointmentTermRegListing(AppointmentID, Last4NRICNO, MemberID, MemberName, Type, StartDate, EndDate)

    })

    it('Verify functionality of Create New', function () {

        //Visit VIP Appointment Term Registration Listing
        cy.visit('/membership/vipAppointmentTermRegistrationListing');

        VIPAppointmentTerm.CreateNew()
    })

    it('Verify Cards Selection ', function () {

        //Visit VIP Appointment Term Registration Listing
        cy.visit('/membership/vipAppointmentTermRegistrationListing');
        VIPAppointmentTerm.SelectTableItemLink('A300000504')
        VIPAppointmentTerm.Cards('View Cards')
    })



});