import VolunteerCommitteDetail from '../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-Volunteer Committee Master/VolunteerCommitteeDetail'
import VolunteerCommitteListing from '../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-Volunteer Committee Master/VolunteerCommitteeListingForm'
import data from '../../../fixtures/Data_Module/FS-025-Membership-VIP-Volunteer-Veteran-League/025-data'


const VolunteerDetail = VolunteerCommitteDetail
const VolunteerListing = VolunteerCommitteListing

const VolunteerCommittee = () => {

describe('[TS06] Volunteer Committee Management', function () {

it('[TC01] Verify the functionality of Create New Button', function () {

    cy.visit('/membership/volunteerCommitteeListing') //Visit Listing Form

    cy.wait(3000)

    VolunteerListing.createNew()
    
    VolunteerListing.verifyPageTitle('Volunteer Committee Details')


})

it('[TC02] Verify and Fillout the Volunteer Committee Detail form', function () {

    const committeeCode = data.VolunteerCommitteeDetails.CommitteeCode
    const committeeDescription = data.VolunteerCommitteeDetails.CommitteeDescription

    cy.visit('/membership/volunteerCommitteeDetail') //Visit Detail Form
    cy.wait(5000)

    VolunteerDetail.verifyPageTitle('Volunteer Committee Details')

    VolunteerDetail.fillOutForm(committeeCode,committeeDescription)

    VolunteerDetail.save()      

    //VolunteerDetail.cancel()
    

})

it('[TC03] Verify Newly created item in the listing form', function () {

    const committeeCode = data.VolunteerCommitteeDetails.CommitteeCode

    cy.visit('/membership/volunteerCommitteeListing') //Visit Listing Form
    cy.wait(5000)

    VolunteerDetail.verifyPageTitle('Volunteer Committee Listing')

    VolunteerDetail.VerifyNewlyCreatedItemInListing('Committee Code', committeeCode)


})


    it('[TC04] Select table entry and click on delete button', function () {

        const committeeCode = data.VolunteerCommitteeDetails.CommitteeCode

        cy.visit('/membership/volunteerCommitteeListing') //Visit Listing Form
        cy.wait(5000)

        VolunteerListing.verifyPageTitle('Volunteer Committee Listing')

        cy.TickSpecificTableItem(committeeCode)
        //VolunteerListing.SelectTableEntry('Committee Code', committeeCode)

        VolunteerListing.delete()
        
        VolunteerListing.verifyPageTitle('Volunteer Committee Listing')

        VolunteerListing.deleteConfirmationYes()

        VolunteerListing.verifyPageTitle('Volunteer Committee Listing')

           

    })
})

}

export default VolunteerCommittee