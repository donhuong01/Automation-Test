
import login from '../../../../fixtures/login'

import E1GymMembershipRegistration from '../../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1-Gym-Membership-Registration'
import Data from '../../../../fixtures/Data_Module/FS-015-E1-Gym-Membership/E1GymMembershipRegistrationExistingMember'
import Commons from '../../../../page-objects/SMCMS/PageActions/Common/Common'

//Page definition
const common = new Commons()




beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})


const { MemberID, CustomerName, E1GymMemMainSelection, E1GymMembershipSelection, LocationSelection, DependencyType, EffectiveDate } = Data

describe('FS-015 E1 Gym Membership Registration', function () {


    it('E1 Gym Member Registration for Existing SAFRA Member', function () {

        common.Checkin(MemberID)

        cy.visit('/membership/e1GymMembershipMainSelection')

        cy.wait(4000)

        E1GymMembershipRegistration.ClickOnBox(E1GymMemMainSelection)

        E1GymMembershipRegistration.ClickOnBox(E1GymMembershipSelection)

        E1GymMembershipRegistration.ClickOnBox(LocationSelection)

        E1GymMembershipRegistration.SelectDepandencyType(DependencyType)

        E1GymMembershipRegistration.MembershipInfo(EffectiveDate)

        // E1GymMembershipRegistration.OtherInfoCheckboxes()
        E1GymMembershipRegistration.AddToCart()

        common.fillOutandApplyPayment('Cash')
        cy.wait(5000)

        E1GymMembershipRegistration.VerifyItemInIGMemListingTBL(CustomerName)

        cy.LogoutOfSmcms()

    })
})

