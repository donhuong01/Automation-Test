
import E1GymMembershipRegistration from '../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1 Gym Membership Registration'
import E1GymMembershipRenewal from '../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1 Gym Membership Renewal'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import data from '../../../fixtures/Data_Module/FS-015-E1-Gym-Membership/E1GymMembershipRenewal'


const common = new Common()

const E1GYMMembershipRenewal = () => {

describe('[TS01] E1 Gym Membership Renewal Management', function () {

    data.forEach(item => {

        const { MemberId, CustomerName, E1Membership, RenewalTerm } = item

        it('[TC01] E1 Gym Membership Renewal', function () {

            common.Checkin(MemberId)

            cy.visit('/membership/e1GymMembershipRenewal').wait(3000)

            E1GymMembershipRenewal.FilloutMembershipRenewalInfo(E1Membership, RenewalTerm)

            common.AddToCart()

            common.fillOutandApplyPayment('CASH')

            E1GymMembershipRegistration.VerifyItemInIGMemListingTBL(CustomerName)

            E1GymMembershipRenewal.SelectTableLink(CustomerName)

            E1GymMembershipRenewal.ViewTransactionHistory()

            E1GymMembershipRenewal.VarifyReasonCode('Renewal')

            //Logout
            cy.LogoutOfSmcms()

        })
    })
    it('Cancellation of E1 Gym Membership Renewal before payment', function () {

        const { MemberId, E1Membership, RenewalTerm } = data[1]

        common.Checkin(MemberId)

        cy.visit('/membership/e1GymMembershipRenewal').wait(3000)

        E1GymMembershipRenewal.FilloutMembershipRenewalInfo(E1Membership, RenewalTerm)

        common.AddToCart()

        common.ResetCart()

        //Logout
        cy.LogoutOfSmcms()

    })
})

}

export default E1GYMMembershipRenewal