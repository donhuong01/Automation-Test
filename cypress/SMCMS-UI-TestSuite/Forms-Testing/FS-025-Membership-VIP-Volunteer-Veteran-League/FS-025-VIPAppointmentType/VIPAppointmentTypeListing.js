/*****************************************************
* Page Function: Sample Script to Test  VIP Appointment Type Listing
* @author: mfaisal
*****************************************************/

//Import Pages
import VIPAppointmentTypeListing from '../../../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-VIP Appointment Type/VIPAppointmentTypeListing'
import VIPAppointmentDetail from '../../../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-VIP Appointment Type/VIPAppointmentTypeDetail'
import data from '../../../../../fixtures/Data_Module/FS-025-Membership-VIP-Volunteer-Veteran-League/025-data'
import login from '../../../../../fixtures/login'

describe('[TS05] VIP Appointment Type Listing ', () => {

    beforeEach(() => {

        // Set local storage for QA Enviroment
        // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

        // Set local storage for UAT Enviroment
        cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
    })




    //Page definition
    const VIPAppTypeListing = new VIPAppointmentTypeListing()
    const VIPAppDetail = new VIPAppointmentDetail()

    const AppointmentID = data.VIPAppointmentTypeDetail.AppointmentID
    const Description = data.VIPAppointmentTypeDetail.Description

    it('[TC01] Creating New VIP Appointment Type', () => {

        cy.visit('/membership/vipAppointmentTypeListing')

        VIPAppTypeListing.VerifyFormTitle('VIP Appointment Type Listing')
        VIPAppTypeListing.CreateNew()
        VIPAppTypeListing.VerifyFormTitle('VIP Appointment Type Detail')

    })


    it('[TC02] Delete and click No on Confirmation POPup VIP Appointment Type', () => {

        cy.visit('/membership/vipAppointmentTypeListing')

        VIPAppTypeListing.VerifyFormTitle('VIP Appointment Type Listing')
        VIPAppTypeListing.Delete(AppointmentID, Description)
        VIPAppTypeListing.DelConfirmNo()

    })

    it('[TC03] Delete and click Yes on Confirmation POPup VIP Appointment Type', () => {

        cy.visit('/membership/vipAppointmentTypeListing')

        VIPAppTypeListing.VerifyFormTitle('VIP Appointment Type Listing')
        VIPAppTypeListing.Delete(AppointmentID, Description)
        VIPAppTypeListing.DelConfirmYes()
        VIPAppDetail.VerifySuccessMSG('Record has been deleted successfully.')

    })


})

