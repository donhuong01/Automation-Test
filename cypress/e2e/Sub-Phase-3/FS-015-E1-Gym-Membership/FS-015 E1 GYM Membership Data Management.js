import E1GymMembershipListing from '../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1 Gym Membership Listing'

// beforeEach(() => {

//     cy.visit('/membership/e1GymMembershipList')

// })

const E1GYMMembershipDataManagement = (E1MembershipID, SAFRAMemberID) => {

describe('[TS01] FS-015 E1 GYM Membership Data Management ', function () {

    it('[TC01] Filter with E1 Gym Membership ID', function () {
        cy.visit('/membership/e1GymMembershipList')
        E1GymMembershipListing.FilterE1GymMembershipID(E1MembershipID)

    })
    it('[TC02] Filter with SAFRA Membership ID', function () {
        cy.visit('/membership/e1GymMembershipList')
        E1GymMembershipListing.FilterSAFRAMembershipID(SAFRAMemberID)

    })
    it('[TC03] Filter with Customer Name', function () {
        cy.visit('/membership/e1GymMembershipList')
        E1GymMembershipListing.FiterWithCustomerName('Auto-User7563895230')

    })

});

}
export default E1GYMMembershipDataManagement