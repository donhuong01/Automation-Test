import login from '../../../../fixtures/login'

import InterestGroupRenewalAdvice from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupRenewalAdvice'
import data from '../../../../fixtures/Data_Module/FS-016-Interest-Group/InterestGroupRenewalAdvice'

beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

data.forEach(dataItem => {

    const { GeneratedFor, Description, IGMain, InterestGroup, MembershipStatus, ReasonCode, ExpiryDateFrom, ExpiryDateTo, DateofBithFrom, DateofBirthTo, SearchMonthOnly } = dataItem

    describe('FS-016 Interest Group Renewal Advice', function () {

        it(`Creating Interest Group Renewal Advice ${GeneratedFor}`, function () {

            cy.visit('/membership/interestGroupMembershipRenewalAdviceListing').wait(7000)

            InterestGroupRenewalAdvice.CreateNew()

            InterestGroupRenewalAdvice.IGRenewalAdviceInfo(GeneratedFor, Description)

            InterestGroupRenewalAdvice.MembershipMasterDataFilters(IGMain, InterestGroup, MembershipStatus, ReasonCode, ExpiryDateFrom, ExpiryDateTo, DateofBithFrom, DateofBirthTo, SearchMonthOnly)

            InterestGroupRenewalAdvice.Generat()

            InterestGroupRenewalAdvice.Save()

            InterestGroupRenewalAdvice.SelectTableItem(Description)

            InterestGroupRenewalAdvice.Delete()

        })
    })
})