import VolunteerCommitteDetail from '../../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-Volunteer Committee Master/VolunteerCommitteeDetail'
import data from '../../../../fixtures/Data_Module/FS-025-Membership-VIP-Volunteer-Veteran-League/025-data'
import login from '../../../../fixtures/login'

beforeEach(() => {

    // Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

describe('[TS06] Volunteer Committee Details', function () {

    const VolunteerDetail = VolunteerCommitteDetail


    it('[TS01] Verify and Fillout the Volunteer Committee Detail form', function () {

        const committeeCode = data.VolunteerCommitteeDetails.CommitteeCode
        const committeeDescription = data.VolunteerCommitteeDetails.CommitteeDescription

        cy.visit('/membership/volunteerCommitteeDetail') //Visit Detail Form

        VolunteerDetail.verifyPageTitle('Volunteer Committee Details')

        VolunteerDetail.fillOutForm(committeeCode, committeeDescription)

        VolunteerDetail.save()

        //VolunteerDetail.cancel()


    })

    it('[TS02] Verify Newly created item in the listing form', function () {

        const committeeCode = data.VolunteerCommitteeDetails.CommitteeCode

        cy.visit('/membership/volunteerCommitteeListing') //Visit Listing Form

        VolunteerDetail.verifyPageTitle('Volunteer Committee Listing')

        VolunteerDetail.VerifyNewlyCreatedItemInListing('Committee Code', committeeCode)



    })
})

