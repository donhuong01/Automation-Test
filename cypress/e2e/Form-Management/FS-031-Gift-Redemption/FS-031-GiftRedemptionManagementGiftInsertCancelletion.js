import GiftRedemptionManagement from '../../../page-objects/SMCMS/PageActions/FS-031-Gift/GiftRedemptionManagement'
import Commons from '../../../page-objects/SMCMS/PageActions/Common/Common'
import data from '../../../fixtures/Data_Module/FS-036-SRP/SRP_Sample_Data'
import login from '../../../fixtures/login'


const common = new Commons




const GiftRedemptionManagementInsertionAndCancellation = (MemberID, GiftName, GiftQuantity) => {

describe('[TS02] FS-031 Gift Redemption Insertion And Cancellation', function () {

    it('[TC01] To be able to test inserting/adding gift', function () {


        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(8000)

        GiftRedemptionManagement.SelectTableFirstItem()

        GiftRedemptionManagement.GiftInsertion(MemberID, GiftName,GiftQuantity,"Testing Gift Insertion flow")

        GiftRedemptionManagement.Submit()

        common.ApprovalWorkFlow("GFT-INS", "Gift Redemption Insert Request Approval Workflow", "Approve", "Testing Gift Redemption Insert Request Approval Workflow")

        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(3000)

        GiftRedemptionManagement.FilterWithMemberID(MemberID)

        GiftRedemptionManagement.FilterWithStatus("Uncollected") //Pending Redemption Letter Generation

        GiftRedemptionManagement.ClickOnsearchFilter()

        GiftRedemptionManagement.ClickTableLink()

        GiftRedemptionManagement.VerifyStatusInDetail("Uncollected") //Pending Redemption Letter Generation

        GiftRedemptionManagement.Cancel()

        

    })


    // it('[TC02] To be able to test Generate Letter', function () {


    //     cy.visit('/membership/giftRedemptionTransactionListing')
    //     cy.wait(8000)

    //     GiftRedemptionManagement.FilterWithMemberID(MemberID)

    //     GiftRedemptionManagement.FilterWithStatus("Pending Redemption Letter Generation")

    //     GiftRedemptionManagement.ClickOnsearchFilter()

    //     GiftRedemptionManagement.SelectTableFirstItem()

    //     GiftRedemptionManagement.GenerateLetter()

    //     GiftRedemptionManagement.FilterWithMemberID(MemberID)

    //     GiftRedemptionManagement.FilterWithStatus("Uncollected")

    //     GiftRedemptionManagement.ClickOnsearchFilter()

    //     GiftRedemptionManagement.ClickTableLink()

    //     GiftRedemptionManagement.VerifyStatusInDetail("Uncollected")
    // })

    it('[TC03] To be able to test gift cancellation', function () {


        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(8000)

        GiftRedemptionManagement.FilterWithMemberID(MemberID)

        GiftRedemptionManagement.FilterWithStatus("Uncollected")

        GiftRedemptionManagement.ClickOnsearchFilter()

        GiftRedemptionManagement.SelectTableFirstItem()

        GiftRedemptionManagement.GiftCancellation("Testing Gift Cancellation flow")

        GiftRedemptionManagement.FilterWithMemberID(MemberID)

        GiftRedemptionManagement.FilterWithStatus("Pending Cancellation Approval")

        GiftRedemptionManagement.ClickOnsearchFilter()

        GiftRedemptionManagement.ClickTableLink()

        GiftRedemptionManagement.VerifyStatusInDetail("Pending Cancellation Approval")

        common.ApprovalWorkFlow("GFT-CAN", "Gift Redemption Cancel Request Approval Workflow", "Approve", "Testing Gift Redemption Cancel Request Approval Workflow")

        cy.visit('/membership/giftRedemptionTransactionListing')
        cy.wait(8000)

        GiftRedemptionManagement.FilterWithMemberID(MemberID)

        GiftRedemptionManagement.FilterWithStatus("Cancelled")

        GiftRedemptionManagement.ClickOnsearchFilter()

        GiftRedemptionManagement.ClickTableLink()

        GiftRedemptionManagement.VerifyStatusInDetail("Cancelled")
        

    })

})

}

export default GiftRedemptionManagementInsertionAndCancellation