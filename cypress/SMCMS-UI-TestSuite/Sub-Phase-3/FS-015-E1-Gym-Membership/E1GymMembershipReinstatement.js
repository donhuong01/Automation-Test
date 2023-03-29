import E1GymMembershipListing from '../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1 Gym Membership Listing'
import E1GymMembershipReinstatement from '../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1 Gym Membership Reinstatement'
import data from '../../../fixtures/Data_Module/FS-015-E1-Gym-Membership/FS-015-E1-Gym-Membership-Reinstatement'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'

const common = new Common()

const E1GYMMembershipReinstatement = (MemberID) => {

describe('[TS01] FS-015 E1 GYM Membership Reinsatement', function () {

    it('[TC01] Creating E1 Gym Membership Reinstatement ', function () {

        common.Checkin(MemberID)

        cy.visit('/membership/e1GymMembershipList').wait(5000)

        E1GymMembershipListing.FilterSAFRAMembershipID()

        E1GymMembershipListing.Maintenace(data.Maintenace)

        E1GymMembershipReinstatement.ReinstatementInfo(data.TermStartDate)

        E1GymMembershipReinstatement.AddToCart()

        common.fillOutandApplyPayment('CASH')

        cy.visit('/membership/e1GymMembershipList').wait(5000)

        E1GymMembershipListing.StatusMemberID(MemberID, 'Active')

        cy.LogoutOfSmcms()
    })

});

}
export default E1GYMMembershipReinstatement