
import E1GymMembershipRegistration from '../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1 Gym Membership Registration'
import E1GymMembershipRenewal from '../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1 Gym Membership Renewal'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import data from '../../../fixtures/Data_Module/FS-015-E1-Gym-Membership/E1GymMembershipRenewal'


const common = new Common()

const E1GYMMembershipRenewal = (MemberId, CustomerName, E1Membership) => {

describe('[TS01] E1 Gym Membership Renewal Management', function () {

    it('[TC01] Cancellation of E1 Gym Membership Renewal before payment', function () {

        // const { RenewalTerm } = data

        common.Checkin(MemberId)

        cy.visit('/membership/e1GymMembershipRenewal').wait(3000)

        E1GymMembershipRenewal.FilloutMembershipRenewalInfo(E1Membership, '3')

        common.AddToCart()
        cy.wait(7000)

        common.ResetCart()

        //Logout
        cy.LogoutOfSmcms()
        cy.wait(2000)

    })

    data.forEach(item => {

        const { RenewalTerm } = item

        it('[TC02] E1 Gym Membership Renewal', function () {

            common.Checkin(MemberId)

            cy.visit('/membership/e1GymMembershipRenewal').wait(3000)

            E1GymMembershipRenewal.FilloutMembershipRenewalInfo(E1Membership, RenewalTerm)

            common.AddToCart()
            cy.wait(7000)

            common.fillOutandApplyPayment('CASH')

            E1GymMembershipRegistration.VerifyItemInIGMemListingTBL(CustomerName)

            E1GymMembershipRenewal.SelectTableLink(CustomerName)

            E1GymMembershipRenewal.ViewTransactionHistory()

            E1GymMembershipRenewal.VarifyReasonCode('Renewal')

            //Logout
            cy.LogoutOfSmcms()
            cy.wait(5000)

        })
    })
   
})

}

export default E1GYMMembershipRenewal