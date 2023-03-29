
import E1GymMembershipRegistration from '../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1 Gym Membership Registration'
import Data from '../../../fixtures/Data_Module/FS-015-E1-Gym-Membership/E1GymRegistrationExistingSAFRAMember'
import Commons from '../../../page-objects/SMCMS/PageActions/Common/Common'

//Page definition
const common = new Commons()

const E1GYMMembershipRegistrationWithExistingMember = () => {

Data.forEach(data => {

    const { MemberID, CustomerName, E1GymMemMainSelection, E1GymMembershipSelection, LocationSelection, DependencyType, category, PreferredClubHouse, EffectiveDate, Terms, AddWaiver } = data

    describe('FS-015 E1 Gym Membership Registration', function () {

        it('E1 Gym Member Registration for Existing SAFRA Member', function () {

            common.Checkin(MemberID)

            cy.visit('/membership/e1GymMembershipMainSelection').wait(8000)

            E1GymMembershipRegistration.ClickOnBox(E1GymMemMainSelection)

            E1GymMembershipRegistration.ClickOnBox(E1GymMembershipSelection)

            E1GymMembershipRegistration.ClickOnBox(LocationSelection)

            cy.wait(5000)

            E1GymMembershipRegistration.SelectDepandencyType(DependencyType)

            E1GymMembershipRegistration.RegistrationInformation(category)

            E1GymMembershipRegistration.MembershipInfo(PreferredClubHouse, EffectiveDate, Terms)

            {
                AddWaiver === 'Yes' && E1GymMembershipRegistration.AddWiaver()
            }

            E1GymMembershipRegistration.AddToCart()

            common.fillOutandApplyPayment('CASH')
            cy.wait(5000)

            E1GymMembershipRegistration.VerifyItemInIGMemListingTBL(CustomerName)

            cy.LogoutOfSmcms()

        })
    })

})   

}

export default E1GYMMembershipRegistrationWithExistingMember
