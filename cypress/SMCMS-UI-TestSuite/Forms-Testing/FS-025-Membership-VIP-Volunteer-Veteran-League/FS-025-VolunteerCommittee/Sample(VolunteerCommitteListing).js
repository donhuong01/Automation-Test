import VolunteerCommitteListing from '../../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-Volunteer Committee Master/VolunteerCommitteeListingForm'
import data from '../../../../fixtures/Data_Module/FS-025-Membership-VIP-Volunteer-Veteran-League/025-data'
import login from '../../../../fixtures/login'



describe('[TS06] Volunteer Committee Listing', function () {

    const VolunteerListing = VolunteerCommitteListing

    beforeEach(() => {

        // Set local storage for UAT Enviroment
        cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
    })

    it('[TS01] Select table entry and click on create new button', function () {

        const committeeCode = data.VolunteerCommitteeDetails.CommitteeCode

        cy.visit('/membership/volunteerCommitteeListing') //Visit Listing Form

        cy.wait(3000)

        VolunteerListing.verifyPageTitle('Volunteer Committee Listing')

        VolunteerListing.SelectTableEntry('Committee Code', committeeCode)

        VolunteerListing.createNew()

        VolunteerListing.verifyPageTitle('Volunteer Committee Details')

        //VolunteerListing.cancel()   

    })

    it('[TS02] Select table entry and click on delete button', function () {

        const committeeCode = data.VolunteerCommitteeDetails.CommitteeCode

        cy.visit('/membership/volunteerCommitteeListing') //Visit Listing Form


        VolunteerListing.verifyPageTitle('Volunteer Committee Listing')

        VolunteerListing.SelectTableEntry('Committee Code', committeeCode)

        VolunteerListing.delete()

        VolunteerListing.verifyPageTitle('Volunteer Committee Listing')

        VolunteerListing.deleteConfirmationYes()

        VolunteerListing.verifyPageTitle('Volunteer Committee Listing')



    })
})
