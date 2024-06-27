import SRP_PromotionListing from '../../../page-objects/SMCMS/PageActions/FS-036-SRP/SRP_RedemptionListing'
import SRP_RedemptionDetail from '../../../page-objects/SMCMS/PageActions/FS-036-SRP/SRP_RedemptionDetail'
import ShoppingCartPayments from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Shopping Cart and Payment/ShoppingCartandPayments'
import SRP_RedemptionTransactionListing from '../../../page-objects/SMCMS/PageActions/FS-036-SRP/SRP_RedemptionTransactionListing'
import data from '../../../fixtures/Data_Module/FS-036-SRP/SRP_Sample_Data'


beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('Buffer is not defined')) {
            console.log('Caught buffer error');
            return false; // This will prevent the test from failing
        }
        // If it's not a buffer error, let the test fail
        return true;
    });
    
    })

const ShoppingCart = new ShoppingCartPayments()
const {  ItemCode, ItemDescription, RedemptionSourceLoc, Category, Quantity, Status, PaymentMode } = data.SRP_Redemption_Collection


const SRPRedemptionCollection  = (MemberID) => {

describe('[TS07] FS-036 Collect Uncollected Redemptions', function () {

    it('[TC01] To be able to test collecting uncollected redemptions', function () {

        SRP_PromotionListing.CheckIn(MemberID)

        cy.visit('/membership/srp/redemptionListing')
        cy.wait(3000)

        SRP_PromotionListing.Filters(ItemCode, ItemDescription, Category)

        SRP_PromotionListing.Redeem()

        SRP_RedemptionDetail.VerifySRPRedemptionDetails(MemberID, ItemCode, ItemDescription, RedemptionSourceLoc)

        SRP_RedemptionDetail.EnterQuantity(Quantity)

        SRP_RedemptionDetail.AddToCart()
        cy.wait(10000)

        ShoppingCart.fillOutandApplyPaymentSRP(/*PaymentMode*/)

        cy.visit('/membership/srp/redemptionTransactionListing')

        cy.wait(4000)

        SRP_RedemptionTransactionListing.Filters(Category, MemberID, Status)

        SRP_RedemptionTransactionListing.VerifyStatusCollection("Uncollected")

        cy.LogoutOfSmcms()

    })
    // Todo Download Redemption Letter

})
}
export default SRPRedemptionCollection