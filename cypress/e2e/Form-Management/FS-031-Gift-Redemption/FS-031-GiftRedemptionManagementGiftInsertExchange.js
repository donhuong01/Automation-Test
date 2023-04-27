import GiftRedemptionManagement from '../../../page-objects/SMCMS/PageActions/FS-031-Gift/GiftRedemptionManagement'
import Commons from '../../../page-objects/SMCMS/PageActions/Common/Common'
import data from '../../../fixtures/Data_Module/FS-036-SRP/SRP_Sample_Data'
import login from '../../../fixtures/login'


const common = new Commons



const GiftRedemptionManagementInsertionAndExchange = (MemberID, GiftName, GiftQuantity)=> {

describe('[TS02] FS-031 Gift Redemption Management', function () {

    it('[TC01] To be able to test inserting/adding gift and Generate Letter', function () {


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

    it('[TC03] To be able to test exchanging gift/bulk exchanging gift', function () {


        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(8000)

        GiftRedemptionManagement.FilterWithMemberID(MemberID)

        GiftRedemptionManagement.ClickOnsearchFilter()
        
        GiftRedemptionManagement.FilterWithStatus("Uncollected")

        GiftRedemptionManagement.SelectTableFirstItem()

        GiftRedemptionManagement.GiftExchange("$1 MCDONALD’S GIFT CERTIFICATE","1","Testing Gift Insertion flow")

        GiftRedemptionManagement.FilterWithMemberID(MemberID)

        GiftRedemptionManagement.FilterWithStatus("Exchanged")

        GiftRedemptionManagement.ClickOnsearchFilter()

        GiftRedemptionManagement.ClickTableLink()

        GiftRedemptionManagement.VerifyStatusInDetail("Exchanged")
        

    })

})

}
export default GiftRedemptionManagementInsertionAndExchange