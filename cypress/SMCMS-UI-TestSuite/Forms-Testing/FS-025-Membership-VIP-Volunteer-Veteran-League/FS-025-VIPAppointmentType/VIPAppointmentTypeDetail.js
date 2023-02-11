/*****************************************************
 * Page Function: Run/Test Approval Workflow Detail Page Actions
 *
 * @author: asadol
 *****************************************************/

// Import Pages

import VIPAppointmentDetail from '../../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-VIP Appointment Type/VIPAppointmentTypeDetail'
import VIPAppointmentTypeListing from '../../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-VIP Appointment Type/VIPAppointmentTypeListing'
import data from '../../../../fixtures/Data_Module/FS-025-Membership-VIP-Volunteer-Veteran-League/025-data'
import login from '../../../../fixtures/login.js'



describe('[FS025] VIP Appointment Type Detail', function () {


    beforeEach(() => {

        // Set local storage for QA Enviroment
        // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

        // Set local storage for UAT Enviroment
        cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
    })

    // Page Definitions
    const VIPAppDetail = new VIPAppointmentDetail()
    const VIPAppTypeListing = new VIPAppointmentTypeListing()

    const AppointmentID = data.VIPAppointmentTypeDetail.AppointmentID
    const Description = data.VIPAppointmentTypeDetail.Description
    const Type = data.VIPAppointmentTypeDetail.Type
    const FreeMembership = data.VIPAppointmentTypeDetail.FreeMembership

    it('[TC01]  Fill Out  Detail Form and Cancel', function () {


        cy.visit('/membership/vipAppointmentTypeListing')

        VIPAppTypeListing.VerifyFormTitle('VIP Appointment Type Listing')
        VIPAppTypeListing.CreateNew()
        VIPAppDetail.verifyTitle('VIP Appointment Type Detail')
        VIPAppDetail.fillOutForm(AppointmentID, Description, Type, FreeMembership)
        VIPAppDetail.cancelForm()


    })

    it('[TC02] Fill Out VIP Appointment Type Detail Form and Save ', function () {

        cy.visit('/membership/vipAppointmentTypeDetail')

        VIPAppDetail.verifyTitle('VIP Appointment Type Detail')
        VIPAppDetail.fillOutForm(AppointmentID, Description, Type, FreeMembership)
        VIPAppDetail.saveForm()
        VIPAppDetail.verifyTitle('VIP Appointment Type Listing')
        VIPAppDetail.VerifySuccessMSG('Record has been saved successfully.')

    })

})

