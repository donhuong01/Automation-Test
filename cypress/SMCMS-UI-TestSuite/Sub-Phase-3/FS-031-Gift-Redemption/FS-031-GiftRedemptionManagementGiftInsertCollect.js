import GiftRedemptionManagement from '../../../page-objects/SMCMS/PageActions/FS-031-Gift/GiftRedemptionManagement'
import Commons from '../../../page-objects/SMCMS/PageActions/Common/Common'
import data from '../../../fixtures/Data_Module/FS-036-SRP/SRP_Sample_Data'
import login from '../../../fixtures/login'


const common = new Commons

beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

})



describe('[TS02] FS-031 Gift Redemption Management', function () {

    it('[TC01] To be able to test inserting/adding gift and Generate Letter', function () {


        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(8000)

        GiftRedemptionManagement.SelectTableFirstItem()

        GiftRedemptionManagement.GiftInsertion("A300000584","$1 MCDONALD’S GIFT CERTIFICATE","1","Testing Gift Insertion flow")

        GiftRedemptionManagement.Submit()

        common.ApprovalWorkFlow("GFT-INS", "Gift Redemption Insert Request Approval Workflow", "Approve", "Testing Gift Redemption Insert Request Approval Workflow")

        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(3000)

        GiftRedemptionManagement.FilterWithMemberID("A300000584")

        GiftRedemptionManagement.ClickOnsearchFilter()

        GiftRedemptionManagement.ClickTableLink()

        GiftRedemptionManagement.VerifyStatusInDetail("Pending Redemption Letter Generation")

        GiftRedemptionManagement.Cancel()

        

    })


    it('[TC02] To be able to test Generate Letter', function () {


        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(8000)

        GiftRedemptionManagement.FilterWithMemberID("A300000584")

        GiftRedemptionManagement.ClickOnsearchFilter()
        
        GiftRedemptionManagement.FilterWithStatus("Pending Redemption Letter Generation")

        GiftRedemptionManagement.SelectTableFirstItem()

        GiftRedemptionManagement.GenerateLetter()

        GiftRedemptionManagement.FilterWithMemberID("A300000584")

        GiftRedemptionManagement.FilterWithStatus("Uncollected")

        GiftRedemptionManagement.ClickOnsearchFilter()

        GiftRedemptionManagement.ClickTableLink()

        GiftRedemptionManagement.VerifyStatusInDetail("Uncollected")
    })

    it('[TC03] To be able to test collecting gift/bulk collecting gift.', function () {

         common.Checkin("A300000194")

        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(8000)

        GiftRedemptionManagement.FilterWithMemberID("A300000584")

        GiftRedemptionManagement.ClickOnsearchFilter()
        
        GiftRedemptionManagement.FilterWithStatus("Uncollected")

        GiftRedemptionManagement.SelectTableFirstItem()

        GiftRedemptionManagement.GiftCollection("Gift Collection")

        GiftRedemptionManagement.FilterWithMemberID("A300000584")

        GiftRedemptionManagement.FilterWithStatus("Collected")

        GiftRedemptionManagement.ClickOnsearchFilter()

        GiftRedemptionManagement.ClickTableLink()

        GiftRedemptionManagement.VerifyStatusInDetail("Collected")
        
        cy.LogoutOfSmcms()

    })

    it('[TC04] To be able to test collecting gift/bulk collecting gift.', function () {


        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(8000)

        GiftRedemptionManagement.FilterWithMemberID("A300001148")

        GiftRedemptionManagement.FilterWithStatus("Collected")

        GiftRedemptionManagement.ClickOnsearchFilter()
        
        GiftRedemptionManagement.SelectTableFirstItem()

        GiftRedemptionManagement.RefundGift("Gift Refund")

        GiftRedemptionManagement.VerifyStatusInDetail("Collected")

        GiftRedemptionManagement.Submit()

        common.ApprovalWorkFlow("GFT-REF", "Gift Redemption Refund Request Approval Workflow", "Approve", "Testing Gift Redemption Refund Request Approval Workflow")

        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(8000)

        GiftRedemptionManagement.FilterWithMemberID("A300001148")

        GiftRedemptionManagement.FilterWithStatus("Refunded")

        GiftRedemptionManagement.ClickOnsearchFilter()

        GiftRedemptionManagement.ClickTableLink()

        GiftRedemptionManagement.VerifyStatusInDetail("Refunded")
        
        // cy.LogoutOfSmcms()

    })

})