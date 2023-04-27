import E1GymMembershipListing from '../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1 Gym Membership Listing'
import E1GymMembershipTerminantion from '../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1 Gym Membership Termination'
import data from '../../../fixtures/Data_Module/FS-015-E1-Gym-Membership/FS-015-E1-Gym-Membership-Termination'
import Commons from '../../../page-objects/SMCMS/PageActions/Common/Common'


const common = new Commons()

const E1GYMMembershipTermination = (MemberID) => {

describe('[TS01]  FS-015 E1 GYM Membership Termination', function () {

    it('[TC01] Creating E1 GYM Membership Termination', function () {

        cy.visit('/membership/e1GymMembershipList')

        E1GymMembershipListing.FilterSAFRAMembershipID(MemberID)

        E1GymMembershipListing.Maintenace(data.Maintenace)

        E1GymMembershipTerminantion.TerminationInformation(data.TerminatedBy, data.TerminationDate, data.TerminationReason)

        E1GymMembershipTerminantion.Submit()

        common.ApprovalWorkFlow('E1-TMN', 'Energy One Termination Approval WorkFlow', 'Approve', 'Test')

    })

});

}
export default E1GYMMembershipTermination