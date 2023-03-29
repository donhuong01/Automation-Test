import E1GymMembershipConversion from '../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1GymMembershipConversion'
import E1GymMembershipListing from '../../../page-objects/SMCMS/PageActions/FS-015-E1-Gym-MemberShip/E1 Gym Membership Listing'
import data from '../../../fixtures/Data_Module/FS-015-E1-Gym-Membership/FS-015-E1-Gym-Membership-Conversion'


const E1GYMMembershipConversion = (MemberID) => {

describe('[TS01] FS-015 E1 GYM Membership Conversion', function () {

    it('[TC01] E1 Gym Membership Conversion', function () {

        cy.visit('/membership/e1GymMembershipList').wait(5000)

        E1GymMembershipListing.FilterSAFRAMembershipID(data.MemberID)

        E1GymMembershipListing.Maintenace(data.Maintenace)

        E1GymMembershipConversion.ConversionInformation(data.ConversionReason)

        E1GymMembershipConversion.Convert()

        E1GymMembershipListing.FilterSAFRAMembershipID(MemberID)

        E1GymMembershipListing.ViewTransactionHistory()

        E1GymMembershipListing.VerifyTransactionTableItem(data.ConversionReason, data.ReasonCode)

    })

});

}
export default E1GYMMembershipConversion