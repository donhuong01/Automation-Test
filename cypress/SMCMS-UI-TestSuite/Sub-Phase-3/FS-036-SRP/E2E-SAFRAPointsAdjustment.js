import SRP_PromotionListing from '../../../page-objects/SMCMS/PageActions/FS-036-SRP/SAFRAPointsAdjustmentRequest'
import data from '../../../fixtures/Data_Module/FS-036-SRP/SRP_Sample_Data'


const { SourceChannel, VendorID, EDCTerminal, Awarding, Remarks, SAFRAPoints, Deduction } = data.SAFRA_Points_Adjustment

const SAFRAPointsAdjustment = (MemberID) => {

describe('[TS02] FS-036 SAFRAPoints Adjustment', function () {

    it('[TC01] Requesting Individual SAFRAPoints Awarding Adjustment', function () {

        cy.visit('/membership/memberList')
        cy.wait(2000)

        SRP_PromotionListing.SelectMemberListItem(MemberID)

        SRP_PromotionListing.SRPDropDownOperation('Manual Points Adjustment')

        SRP_PromotionListing.VerifyMemberInfoInRequestForm(MemberID)

        SRP_PromotionListing.FillOutSAFRAPointAdjRequestForm(SourceChannel, VendorID, EDCTerminal, Awarding, Remarks, SAFRAPoints)

        SRP_PromotionListing.Request()

        SRP_PromotionListing.ApprovalWorkflowForSRPAdjustment("Approve", "Testing SRP workflow")

        SRP_PromotionListing.Submit()

        cy.visit('/membership/memberList')
        cy.wait(5000)

        SRP_PromotionListing.SelectMemberListItem(MemberID)

        SRP_PromotionListing.MembershipDropDownOperation("SAFRAPoints")

        SRP_PromotionListing.VerifyAwardedSAFRAPoints(MemberID, Awarding)




    })
    it('[TC02] Requesting Individual SAFRAPoints Deduction Adjustment', function () {

        cy.visit('/membership/memberList')
        cy.wait(5000)

        SRP_PromotionListing.SelectMemberListItem(MemberID)

        SRP_PromotionListing.SRPDropDownOperation('Manual Points Adjustment')

        SRP_PromotionListing.VerifyMemberInfoInRequestForm(MemberID)

        SRP_PromotionListing.FillOutSAFRAPointAdjRequestForm(SourceChannel, VendorID, EDCTerminal, Awarding, Remarks, "1")

        SRP_PromotionListing.Request()

        SRP_PromotionListing.ApprovalWorkflowForSRPAdjustment("Approve", "Testing SRP workflow")

        SRP_PromotionListing.Submit()

        cy.visit('/membership/memberList')
        cy.wait(6000)

        SRP_PromotionListing.SelectMemberListItem(MemberID)

        SRP_PromotionListing.MembershipDropDownOperation("SAFRAPoints")

        SRP_PromotionListing.VerifyAwardedSAFRAPoints(MemberID, Deduction)




    })


})
}

export default SAFRAPointsAdjustment