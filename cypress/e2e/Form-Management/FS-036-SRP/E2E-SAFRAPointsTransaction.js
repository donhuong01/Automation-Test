import SRP_PromotionListing from '../../../page-objects/SMCMS/PageActions/FS-036-SRP/SAFRAPointsAdjustmentRequest'
import data from '../../../fixtures/Data_Module/FS-036-SRP/SRP_Sample_Data'


const { TransactionType, SRPOperationItem, SourceChannel, VendoreID, EDCTerminalID, Type, Remark, Amount } = data.SAFRA_Points_Transaction

const SAFRAPointsTransaction = (MemberID) => {

describe('[TS03] FS-036 SAFRAPoints Transaction', function () {

    it('[TC01] Verify SAFRA Points Awarding Transaction', function () {

        cy.visit('/membership/memberList')
        cy.wait(2000)

        SRP_PromotionListing.SelectMemberListItem(MemberID)

        SRP_PromotionListing.SRPDropDownOperation(SRPOperationItem)

        SRP_PromotionListing.VerifyMemberInfoInRequestForm(MemberID)

        SRP_PromotionListing.FillOutSAFRAPointAdjRequestForm(SourceChannel, VendoreID, EDCTerminalID, Type, Remark, Amount)

        SRP_PromotionListing.Request()

        SRP_PromotionListing.ApprovalWorkflowForSRPAdjustment("Approve", "Testing SRP workflow")

        SRP_PromotionListing.Submit()

        cy.visit('/membership/memberList')
        cy.wait(2000)

        SRP_PromotionListing.SelectMemberListItem(MemberID)

        SRP_PromotionListing.MembershipDropDownOperation("SAFRAPoints")

        SRP_PromotionListing.VerifyAwardedSAFRAPoints(MemberID, TransactionType)



    })


})

}

export default SAFRAPointsTransaction