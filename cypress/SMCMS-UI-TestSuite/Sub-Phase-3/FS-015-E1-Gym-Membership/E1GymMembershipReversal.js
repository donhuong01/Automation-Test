import E1GymMembershipListing from '../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1 Gym Membership Listing'
import E1GymMembershipWaiver from '../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1 Gym Membership Waiver'
import data from '../../../fixtures/Data_Module/FS-015-E1-Gym-Membership/FS-015-E1-Gym-Membership-Waiver'
import Commons from '../../../page-objects/SMCMS/PageActions/Common/Common'


const common = new Commons()

const E1GYMMembershipReversal = (MemberID) => {

const { WaiverPeriod, WaiverReason } = data[1]

describe('[TS01] FS-015  E1 GYM  Membership Reversal', function () {

    it('[TC01] E1 GYM  Membership  Reversal on waiver transaction for credit ', function () {

        cy.visit('/membership/e1GymMembershipList').wait(8000)

        E1GymMembershipListing.FilterSAFRAMembershipID(MemberID)

        E1GymMembershipListing.Maintenace('Waive')

        E1GymMembershipWaiver.WaiverInformation(WaiverPeriod, WaiverReason)

        E1GymMembershipWaiver.Request()

        common.ApprovalWorkFlow('E1-WAV', 'Energy One Waiver Approval WorkFlow', 'Approve', 'Approved')

        cy.visit('/membership/e1GymMembershipList').wait(5000)

        E1GymMembershipListing.FilterSAFRAMembershipID(MemberID)

        E1GymMembershipListing.Maintenace('Reverse')

        E1GymMembershipListing.Submit()

        common.ApprovalWorkFlow('E1-REV', 'Energy One Reversal Approval Workflow', 'Approve', 'Test')

        cy.visit('/membership/e1GymMembershipList').wait(5000)

        E1GymMembershipListing.FilterSAFRAMembershipID(MemberID)

        E1GymMembershipListing.VerifyItemStatus('Active')

    })

});
}
export default E1GYMMembershipReversal