import login from "../../../fixtures/login"
import data from '../../../fixtures/Data_Module/FS-013 & FS-039 InHouseSale & Merchandise/DataManagement'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import InHouseSaleAndMerchandisePurchaseTransaction from "../../../page-objects/SMCMS/PageActions/FS-039 & FS-013 - InHouseSaleAndMerchandise/InHouseSaleAndMerchandisePurchaseTransaction"


const common = new Common()


const { MemberIdMerchandise, MemberIdInHouse } = data.InHouseSaleAndMerchandiseItemTransaction

const InHouseSaleAndMerchandiseTransactionRefund = (MemberIdMerchandise, MemberIdInHouse)=> {

describe('FS-039 & FS-013 In-House Sale and Merchandise Transaction Refund', function () {

    it('Create a Merchandise Transaction Refund Request', function () {

        common.Checkin(MemberIdMerchandise)

        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseTransactionListing').wait(4000)

        InHouseSaleAndMerchandisePurchaseTransaction.SelectItemType('Merchandise')

        InHouseSaleAndMerchandisePurchaseTransaction.FilterWithMemberId(MemberIdMerchandise)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickRecieptNumberForMerchandise()

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyMemberInfoInReceiptdetail(MemberIdMerchandise)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickOnReceiptItemCheckBox(MemberIdMerchandise)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickOn("Refund")
        cy.wait(15000)

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyMemberInfoInAdjustment(MemberIdMerchandise)

        InHouseSaleAndMerchandisePurchaseTransaction.FillOutMerchandiseTransactionRefundRequest('Refund', 'PayNow')

        InHouseSaleAndMerchandisePurchaseTransaction.ClickOn("Submit")
        
        common.ApprovalWorkFlow('MCD-REF', 'Merchandise Transaction Refund Approval Workflow', 'Approve', 'testing Merchandise Transaction Cancellation Approval Workflow')

        // InHouseSaleAndMerchandisePurchaseTransaction.ClickOn("Yes")

        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseTransactionListing').wait(4000)

        InHouseSaleAndMerchandisePurchaseTransaction.SelectItemType('Merchandise')

        InHouseSaleAndMerchandisePurchaseTransaction.FilterWithMemberId(MemberIdMerchandise)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickRecieptNumberForMerchandise()

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyMemberInfoInReceiptdetail(MemberIdMerchandise)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickOnReceiptItemCheckBox(MemberIdMerchandise)

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyReceiptItemStatus('Refunded')

    })

    it('Create In-House Transaction Refund Request', function () {

        common.Checkin(MemberIdInHouse)

        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseTransactionListing').wait(4000)

        InHouseSaleAndMerchandisePurchaseTransaction.SelectItemType('InHouse')

        InHouseSaleAndMerchandisePurchaseTransaction.FilterWithMemberId(MemberIdInHouse)

        InHouseSaleAndMerchandisePurchaseTransaction.FilterWithMemberId(MemberIdInHouse)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickRecieptNumberForInHouseSale()

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyMemberInfoInReceiptdetail(MemberIdInHouse)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickOnReceiptItemCheckBox(MemberIdInHouse)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickOn("Refund")
        cy.wait(15000)

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyMemberInfoInAdjustment(MemberIdInHouse)

        InHouseSaleAndMerchandisePurchaseTransaction.FillOutMerchandiseTransactionRefundRequest('Refund', 'PayNow')

        InHouseSaleAndMerchandisePurchaseTransaction.ClickOn("Submit")
        
        common.ApprovalWorkFlow('MCD-REF', 'Merchandise Transaction Refund Approval Workflow', 'Approve', 'testing Merchandise Transaction Cancellation Approval Workflow')

        // InHouseSaleAndMerchandisePurchaseTransaction.ClickOn("Yes")

        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseTransactionListing').wait(4000)

        InHouseSaleAndMerchandisePurchaseTransaction.SelectItemType('InHouse')

        InHouseSaleAndMerchandisePurchaseTransaction.FilterWithMemberId(MemberIdInHouse)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickRecieptNumberForInHouseSale()

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyMemberInfoInReceiptdetail(MemberIdInHouse)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickOnReceiptItemCheckBox(MemberIdInHouse)

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyReceiptItemStatus('Refunded')

    })

})
}
export default InHouseSaleAndMerchandiseTransactionRefund