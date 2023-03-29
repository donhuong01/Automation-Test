
import E1GymMembershipRegistration from '../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1 Gym Membership Registration'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import data from '../../../fixtures/Data_Module/FS-015-E1-Gym-Membership/CancellationOfE1GymMembershipbeforePayment'

//Page definition
const common = new Common()

const E1GymMembershipCancellationBeforePayment = (MemberId)=> {

const {  CustomerName, E1GymMemMainSelection, E1GymMembershipSelection, LocationSelection, DependencyType, PreferredClubHouse, EffectiveDate, Terms } = data

describe('FS-015 E1 GYM Membership Registration', function () {

    it('Cancellation of E1 Gym Membership before Payment', function () {

        common.Checkin(MemberId)

        cy.visit('/membership/e1GymMembershipMainSelection').wait(8000)

        E1GymMembershipRegistration.ClickOnBox(E1GymMemMainSelection)

        E1GymMembershipRegistration.ClickOnBox(E1GymMembershipSelection)

        E1GymMembershipRegistration.ClickOnBox(LocationSelection)

        cy.wait(5000)

        E1GymMembershipRegistration.SelectDepandencyType(DependencyType)

        E1GymMembershipRegistration.MembershipInfo(PreferredClubHouse, EffectiveDate, Terms)

        E1GymMembershipRegistration.AddToCart()

        common.ResetCart()

        cy.visit('/membership/e1GymMembershipList').wait(5000)

        E1GymMembershipRegistration.FilterByCustomerName(CustomerName)

        common.VerifyNoRecordMsg()

        //Logout
        cy.LogoutOfSmcms()

    })
})

}

export default E1GymMembershipCancellationBeforePayment
