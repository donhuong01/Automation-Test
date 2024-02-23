import VolunteerAppointmentDetail from '../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-Volunteer Appointment Master/VolunteerAppointmentDetail'
import VolunteerAppointmentListing from '../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-Volunteer Appointment Master/VolunteerAppointmentListing'
import data from '../../../fixtures/Data_Module/FS-025-Membership-VIP-Volunteer-Veteran-League/025-data'


const VolunteerAppointment = () => {

    describe('[TS04] Volunteer Appointment Management', function () {

        const VolunteerDetail = VolunteerAppointmentDetail
        const VolunteerListing = VolunteerAppointmentListing
        const apponitmentCode = data.volunteerAppointmentDetail.appointmentCode
        const apponitmentDescription = data.volunteerAppointmentDetail.appointmentDescription


        it('[TC01] Verify,Fillout and Cancel the Volunteer Appointment Detail form', function () {

            cy.visit('/membership/volunteerAppointmentDetail')

            cy.wait(3000)
            //Verify page title
            VolunteerDetail.verifyPageTitle()
            //Fill the form
            VolunteerDetail.fillOutForm(apponitmentCode, apponitmentDescription)
            //Cancel detail form
            VolunteerDetail.cancel()


        })

        it('[TC02] Verify,Fillout and Save the Volunteer Appointment Detail form', function () {

            cy.visit('/membership/volunteerAppointmentDetail')

            cy.wait(3000)
            //Verify page title
            VolunteerDetail.verifyPageTitle()
            //Fill the form
            VolunteerDetail.fillOutForm(apponitmentCode, apponitmentDescription)
            //save detail form
            VolunteerDetail.save()

        })

        it('[TC03] Select table entry and Click on Create New button in the Volunteer Appointment Listing form', function () {

            //Visit Listing Form
            cy.visit('/membership/volunteerAppointmentListing')

            cy.wait(3000)
            //Verify page title
            VolunteerListing.verifyPageTitle('Volunteer Appointment Listing')

            // Wait until the loading image no longer exists
            cy.waitUntil(() =>
                cy.get('div.k-loading-image').should('not.exist')
            );

            //Select table entry
            VolunteerListing.SelectTableEntry('Appointment Code', apponitmentCode)
            //Click Create New button
            VolunteerListing.createNew()
            //Verify page title
            VolunteerListing.verifyPageTitle('Volunteer Appointment Detail')



        })

        it('[TC04] Select table entry and click on Delete button Volunteer Appointment Listing form', function () {

            //Visit Listing Form
            cy.visit('/membership/volunteerAppointmentListing')

            cy.wait(3000)

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

}

export default VolunteerAppointment;