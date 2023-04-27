import VolunteerAppointmentListing from '../../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-Volunteer Appointment Master/VolunteerAppointmentListing'
import data from '../../../../fixtures/Data_Module/FS-025-Membership-VIP-Volunteer-Veteran-League/025-data'
import login from '../../../../fixtures/login'


describe('[TS04] Volunteer Appointment Listing', function () {

    const VolunteerListing = VolunteerAppointmentListing


    beforeEach(() => {

        // Set local storage for UAT Enviroment
        cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
        //Visit Listing Form
        cy.visit('/membership/volunteerAppointmentListing')

        cy.wait(3000)
    })


    const apponitmentCode = data.volunteerAppointmentDetail.appointmentCode


    it('[TC01] Select table entry and Click on Create New button in the Volunteer Appointment Listing form', function () {

        //Verify page title 
        VolunteerListing.verifyPageTitle('Volunteer Appointment Listing')
        //Select table entry
        VolunteerListing.SelectTableEntry('Appointment Code', apponitmentCode)
        //Click Create New button
        VolunteerListing.createNew()
        //Verify page title 
        VolunteerListing.verifyPageTitle('Volunteer Appointment Detail')



    })

    it('[TC02] Select table entry and click on Delete button Volunteer Appointment Listing form', function () {


        //Verify page title 
        VolunteerListing.verifyPageTitle('Volunteer Appointment Listing')
        //Select table entry
        VolunteerListing.SelectTableEntry('Appointment Code', apponitmentCode)
        //Click on Delete button
        VolunteerListing.delete()
        //Click on Yes button in the confirmation popup
        VolunteerListing.deleteConfirmationYes()

    })


})

