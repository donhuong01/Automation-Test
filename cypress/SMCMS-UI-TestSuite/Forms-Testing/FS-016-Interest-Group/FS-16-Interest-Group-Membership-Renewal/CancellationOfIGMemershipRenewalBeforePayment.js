
import login from '../../../../fixtures/login'

import IGMembershipRenewal from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/Interest Group Membership Renewal'
import Commons from '../../../../page-objects/SMCMS/PageActions/Common/Common'
import data from '../../../../fixtures/Data_Module/FS-016-Interest-Group/InterestGroupMembershipRenewal'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

const common = new Commons()


const { MemberId, IGMembership, Terms } = data[0]

describe('[TS08] FS-016 Interest Group Membership Renewal', function () {

    it('Cancellation of Interest Group Membership Renewal before Payment', function () {

        common.Checkin(MemberId)

        cy.visit('/membership/interestGroupMembershipRenewal').wait(5000)

        IGMembershipRenewal.SelectIGMembership(IGMembership)

        IGMembershipRenewal.SelectRenewalTerm(Terms)

        IGMembershipRenewal.Submit()

        common.ResetCart()

        cy.LogoutOfSmcms()

    })
})


