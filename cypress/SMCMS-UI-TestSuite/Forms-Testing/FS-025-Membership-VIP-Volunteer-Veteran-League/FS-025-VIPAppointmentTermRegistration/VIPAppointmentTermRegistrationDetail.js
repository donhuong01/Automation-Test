/*****************************************************
 * Page Function: Run/Test VIP Appointment Term Registration Listing
 * @author: FShahzada
 *****************************************************/

// Import Pages

import VIPAppointmentTermRegistrationDetailForm from '../../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-VIP Appointment Term Registration/VIPAppointmentTermRegistrationDetailForm'
import VIPAppointmentTermRegistrationListingForm from '../../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-VIP Appointment Term Registration/VIPAppointmentTermRegistrationListingForm'
import data from '../../../../fixtures/Data_Module/FS-025-Membership-VIP-Volunteer-Veteran-League/025-data.js'
import login from '../../../../fixtures/login'



describe('[TS02] VIP Appointment Term Registration Detail', function () {

    beforeEach(() => {

        // Set local storage for QA Enviroment
        // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

        // Set local storage for UAT Enviroment
        // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
    })

    // Page Definitions
    const VIPAppTermRegDetail = new VIPAppointmentTermRegistrationDetailForm()

    const MemberID = data.VIPAppointmentTermRegDetail.MemberID
    const Name = data.VIPAppointmentTermRegDetail.Name
    const NRIC = data.VIPAppointmentTermRegDetail.NRIC
    const AppointmentID = data.VIPAppointmentTermRegDetail.AppointmentID
    const Type = data.VIPAppointmentTermRegDetail.Type
    const StartDate = data.VIPAppointmentTermRegDetail.StartDate
    const EndDate = data.VIPAppointmentTermRegDetail.EndDate

    it('[TC01] VIP Appointment Term Registration Detail Form an Save', function () {


        cy.visit('/membership/vipAppointmentTermRegistrationListing')

        //Verify Page Title
        VIPAppTermRegDetail.verifyPageTitle('VIP Appointment Term Registration Listing')

        //Click create new button
        VIPAppTermRegDetail.CreateNew()

        //Verify Page Title
        VIPAppTermRegDetail.verifyPageTitle('VIP Appointment Term Registration Detail')

        //Fill Out Detail Form
        VIPAppTermRegDetail.fillOutVipAppointmentTermRegDetailForm(MemberID, Name, NRIC,
            AppointmentID, Type, StartDate, EndDate)

        //Save Detail Form
        // VIPAppTermRegDetail.saveForm()

        //Verify Success Message
        // VIPAppTermRegDetail.VerifySuccessMSG('Record has been saved successfully.')

        //Verify Page Title
        // VIPAppTermRegDetail.verifyPageTitle('VIP Appointment Term Registration Listing')


    })

    it('[TC02] VIP Appointment Term Registration Detail Form and Cancel ', function () {

        cy.visit('/membership/vipAppointmentTermRegistrationListing')

        //Verify Page Title
        VIPAppTermRegDetail.verifyPageTitle('VIP Appointment Term Registration Listing')

        //Click create new button
        VIPAppTermRegDetail.CreateNew()

        //Verify Page Title
        VIPAppTermRegDetail.verifyPageTitle('VIP Appointment Term Registration Detail')

        //Fill Out Detail Form
        VIPAppTermRegDetail.fillOutVipAppointmentTermRegDetailForm(MemberID, Name, NRIC,
            AppointmentID, Type, StartDate, EndDate)

        //Cancel Detail Form
        VIPAppTermRegDetail.cancelForm()

        //Verify Page Title
        VIPAppTermRegDetail.verifyPageTitle('VIP Appointment Term Registration Listing')



    })

})

