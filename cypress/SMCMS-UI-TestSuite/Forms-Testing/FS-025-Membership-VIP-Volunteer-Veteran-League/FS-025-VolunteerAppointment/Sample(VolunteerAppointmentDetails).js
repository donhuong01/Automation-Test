import VolunteerAppointmentDetail from '../../../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-Volunteer Appointment Master/VolunteerAppointmentDetail'
import data from '../../../../../fixtures/Data_Module/FS-025-Membership-VIP-Volunteer-Veteran-League/025-data'
import login from '../../../../../fixtures/login'

describe('[TS04] Volunteer Appointment Details', function () {

    const VolunteerDetail = VolunteerAppointmentDetail

    beforeEach(() => {

        // Set local storage for UAT Enviroment
        cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
        cy.visit('/membership/volunteerAppointmentDetail')

        cy.wait(3000)
    })


    const apponitmentCode = data.volunteerAppointmentDetail.appointmentCode
    const apponitmentDescription = data.volunteerAppointmentDetail.appointmentDescription


    it('[TC01] Verify,Fillout and Cancel the Volunteer Appointment Detail form', function () {

        //Verify page title 
        VolunteerDetail.verifyPageTitle()
        //Fill the form 
        VolunteerDetail.fillOutForm(apponitmentCode, apponitmentDescription)
        //Cancel detail form
        VolunteerDetail.cancel()


    })

    it('[TC02] Verify,Fillout and Save the Volunteer Appointment Detail form', function () {

        //Verify page title 
        VolunteerDetail.verifyPageTitle()
        //Fill the form
        VolunteerDetail.fillOutForm(apponitmentCode, apponitmentDescription)
        //save detail form    
        VolunteerDetail.save()

    })


})

