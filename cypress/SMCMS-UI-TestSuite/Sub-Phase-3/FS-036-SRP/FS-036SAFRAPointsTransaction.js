import SRP_PromotionListing from '../../../../page-objects/SMCMS/PageActions/FS-036-SRP/SAFRAPointsAdjustmentRequest'
import login from '../../../../fixtures/login'
import data from '../../../../fixtures/Data_Module/FS-036-SRP/SRP_Sample_Data'

beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

})

const { MemberID, TransactionType, SRPOperationItem, SourceChannel, VendoreID, EDCTerminalID, Type, Remark, Amount } = data.SAFRA_Points_Transaction

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