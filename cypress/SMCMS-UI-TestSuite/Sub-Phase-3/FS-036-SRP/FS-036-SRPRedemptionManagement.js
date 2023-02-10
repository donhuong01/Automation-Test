import SRP_PromotionListing from '../../../page-objects/SMCMS/PageActions/FS-036-SRP/SRP_RedemptionListing'
import SRP_RedemptionDetail from '../../../page-objects/SMCMS/PageActions/FS-036-SRP/SRP_RedemptionDetail'
import ShoppingCartPayments from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Shopping Cart and Payment/ShoppingCartandPayments'
import SRP_RedemptionTransactionListing from '../../../page-objects/SMCMS/PageActions/FS-036-SRP/SRP_RedemptionTransactionListing'
import data from '../../../fixtures/Data_Module/FS-036-SRP/SRP_Sample_Data'

import login from '../../../fixtures/login'

const ShoppingCart = new ShoppingCartPayments()

const { MemberID, ItemCode, ItemDescription, Category, RedemptionSourceLoc, Status, Quantity, PaymentMethod } = data.SRP_Redemption_Managment


beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

})


describe('[TS06] FS-036 SRP Redemption management', function () {

    it('[TC01] To be able to test SRP redemption Item.', function () {

        SRP_PromotionListing.CheckIn(MemberID)

        cy.visit('/membership/srp/redemptionListing')
        cy.wait(3000)

        SRP_PromotionListing.Filters(ItemCode, ItemDescription, Category)

        SRP_PromotionListing.Redeem()

        SRP_RedemptionDetail.VerifySRPRedemptionDetails(MemberID, ItemCode, ItemDescription, RedemptionSourceLoc)

        SRP_RedemptionDetail.EnterQuantity(Quantity)

        SRP_RedemptionDetail.AddToCart()

        ShoppingCart.fillOutandApplyPayment(PaymentMethod)

        cy.visit('/membership/srp/redemptionTransactionListing')

        cy.wait(8000)

        SRP_RedemptionTransactionListing.Filters(Category, MemberID, Status)

        SRP_RedemptionTransactionListing.VerifyStatus("Uncollected")

        cy.LogoutOfSmcms()

    })


})