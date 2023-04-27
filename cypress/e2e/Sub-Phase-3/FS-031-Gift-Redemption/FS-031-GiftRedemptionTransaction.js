import GiftRedemptionTransaction from '../../../page-objects/SMCMS/PageActions/FS-031-Gift/GiftRedemptionTransaction'
import GiftRedemptionManagement from '../../../page-objects/SMCMS/PageActions/FS-031-Gift/GiftRedemptionManagement'
import Data from '../../../fixtures/Data_Module/FS-031-Gift/Gift_Data'
import login from '../../../fixtures/login'


beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

})


describe('[TS03] FS-031 Gift Redemption Transaction', function () {

    it('[TC01] To be able to test viewing the Gift Redemption "Collected" item', function () {


        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(3000)

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Listing")

        GiftRedemptionTransaction.FilterWithStatus("Collected")

        GiftRedemptionTransaction.ClickTableLink()

        GiftRedemptionTransaction.VerifyStatusInGRTDetail("Collected")

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Detail")

        GiftRedemptionManagement.Cancel()

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Listing")



    })

    it('[TC02] To be able to test viewing the Gift Redemption "Uncollected" item', function () {


        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(3000)

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Listing")

        GiftRedemptionTransaction.FilterWithStatus("Uncollected")

        GiftRedemptionTransaction.ClickTableLink()

        GiftRedemptionTransaction.VerifyStatusInGRTDetail("Uncollected")

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Detail")

        GiftRedemptionManagement.Cancel()

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Listing")



    })

    it('[TC03] To be able to test viewing the Gift Redemption "Expired" item', function () {


        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(3000)

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Listing")

        GiftRedemptionTransaction.FilterWithStatus("Expired")

        GiftRedemptionTransaction.ClickTableLink()

        GiftRedemptionTransaction.VerifyStatusInGRTDetail("Expired")

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Detail")

        GiftRedemptionManagement.Cancel()

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Listing")



    })

    it('[TC04] To be able to test viewing the Gift Redemption "Cancelled" item', function () {


        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(3000)

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Listing")

        GiftRedemptionTransaction.FilterWithStatus("Cancelled")

        GiftRedemptionTransaction.ClickTableLink()

        GiftRedemptionTransaction.VerifyStatusInGRTDetail("Cancelled")

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Detail")

        GiftRedemptionManagement.Cancel()

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Listing")



    })
    it('[TC05] To be able to test viewing the Gift Redemption "Pending Redemption Letter Generation" item', function () {


        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(3000)

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Listing")

        GiftRedemptionTransaction.FilterWithStatus("Pending Redemption Letter Generation")

        GiftRedemptionTransaction.ClickTableLink()

        GiftRedemptionTransaction.VerifyStatusInGRTDetail("Pending Redemption Letter Generation")

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Detail")

        GiftRedemptionManagement.Cancel()

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Listing")



    })

    it('[TC06] To be able to test viewing the Gift Redemption "Pending Cancellation Approval" item', function () {


        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(3000)

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Listing")

        GiftRedemptionTransaction.FilterWithStatus("Pending Cancellation Approval")

        GiftRedemptionTransaction.ClickTableLink()

        GiftRedemptionTransaction.VerifyStatusInGRTDetail("Pending Cancellation Approval")

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Detail")

        GiftRedemptionManagement.Cancel()

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Listing")



    })

    it('[TC07] To be able to test viewing the Gift Redemption "Pending Refund Approval" item', function () {


        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(3000)

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Listing")

        GiftRedemptionTransaction.FilterWithStatus("Pending Refund Approval")

        GiftRedemptionTransaction.ClickTableLink()

        GiftRedemptionTransaction.VerifyStatusInGRTDetail("Pending Refund Approval")

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Detail")

        GiftRedemptionManagement.Cancel()

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Listing")



    })

    it('[TC08] To be able to test viewing the Gift Redemption "Refunded" item', function () {


        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(3000)

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Listing")

        GiftRedemptionTransaction.FilterWithStatus("Refunded")

        GiftRedemptionTransaction.ClickTableLink()

        GiftRedemptionTransaction.VerifyStatusInGRTDetail("Refunded")

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Detail")

        GiftRedemptionManagement.Cancel()

        GiftRedemptionTransaction.verifyPageTitle("Gift Redemption Transaction Listing")



    })





})