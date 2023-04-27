import GiftRedemptionManagement from '../../../page-objects/SMCMS/PageActions/FS-031-Gift/GiftRedemptionManagement'
import Commons from '../../../page-objects/SMCMS/PageActions/Common/Common'
import data from '../../../fixtures/Data_Module/FS-036-SRP/SRP_Sample_Data'
import login from '../../../fixtures/login'


const common = new Commons


const GiftRedemptionManagementInsertionAndCollection = (MemberID, GiftName, GiftQuantity) => {

describe('[TS02] FS-031 Gift Redemption Management', function () {

    it('[TC01] To be able to test inserting/adding gift', function () {


        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(8000)

        GiftRedemptionManagement.SelectTableFirstItem()

        GiftRedemptionManagement.GiftInsertion(MemberID, GiftName, GiftQuantity,"Testing Gift Insertion flow")

        GiftRedemptionManagement.Submit()

        common.ApprovalWorkFlow("GFT-INS", "Gift Redemption Insert Request Approval Workflow", "Approve", "Testing Gift Redemption Insert Request Approval Workflow")

        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(3000)

        GiftRedemptionManagement.FilterWithMemberID(MemberID)

        GiftRedemptionManagement.ClickOnsearchFilter()

        GiftRedemptionManagement.ClickTableLink()

        GiftRedemptionManagement.VerifyStatusInDetail("Pending Redemption Letter Generation")

        GiftRedemptionManagement.Cancel()

        

    })


    it('[TC02] To be able to test Generate Letter', function () {


        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(8000)

        GiftRedemptionManagement.FilterWithMemberID(MemberID)

        GiftRedemptionManagement.ClickOnsearchFilter()
        
        GiftRedemptionManagement.FilterWithStatus("Pending Redemption Letter Generation")

        GiftRedemptionManagement.SelectTableFirstItem()

        GiftRedemptionManagement.GenerateLetter()

        GiftRedemptionManagement.FilterWithMemberID(MemberID)

        GiftRedemptionManagement.FilterWithStatus("Uncollected")

        GiftRedemptionManagement.ClickOnsearchFilter()

        GiftRedemptionManagement.ClickTableLink()

        GiftRedemptionManagement.VerifyStatusInDetail("Uncollected")
    })

    it('[TC03] To be able to test collecting gift/bulk collecting gift.', function () {

         common.Checkin(MemberID)

        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(8000)

        GiftRedemptionManagement.FilterWithMemberID(MemberID)

        GiftRedemptionManagement.ClickOnsearchFilter()
        
        GiftRedemptionManagement.FilterWithStatus("Uncollected")

        GiftRedemptionManagement.SelectTableFirstItem()

        GiftRedemptionManagement.GiftCollection("Gift Collection")

        GiftRedemptionManagement.FilterWithMemberID(MemberID)

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

}
export default GiftRedemptionManagementInsertionAndCollection