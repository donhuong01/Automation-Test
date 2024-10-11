import E1GYMMembershipRenewalAdvice from '../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/FS-015 E1 GYM Membership Renewal Advice'
import data from '../../../fixtures/Data_Module/FS-015-E1-Gym-Membership/E1 Gym Renewal Adwice '

const E1GYMMembershipRenewalAdvise = () => {

describe('[TS01] FS-015 E1 GYM Membership Renewal Advice', function () {

    

    data.forEach(item => {
        const {
            GeneratedFor,
            Description,
            MainMembership,
            E1GymMembership,
            ExpiryDateFrom,
            ExpiryDateTo,
            MembershipStatus,
            ReasonCode,
            DOBFrom,
            DOBTo
        } = item


        it(`[TC01] Creating E1 GYM Membership Renewal Advice ${GeneratedFor}`, function () {

            cy.visit('/membership/e1GymMembershipRenewalAdviceList').wait(4000)

            E1GYMMembershipRenewalAdvice.CreateNew()

            E1GYMMembershipRenewalAdvice.RenewalAdviceInfo(Description, GeneratedFor)

            E1GYMMembershipRenewalAdvice.MembershipMasterData(MainMembership, E1GymMembership, ExpiryDateFrom, ExpiryDateTo, MembershipStatus, ReasonCode, DOBFrom, DOBTo)

            E1GYMMembershipRenewalAdvice.Generate()

            E1GYMMembershipRenewalAdvice.Save()

            E1GYMMembershipRenewalAdvice.SelectItem(Description)

            E1GYMMembershipRenewalAdvice.Delete()

        })
    })
})

}
export default E1GYMMembershipRenewalAdvise