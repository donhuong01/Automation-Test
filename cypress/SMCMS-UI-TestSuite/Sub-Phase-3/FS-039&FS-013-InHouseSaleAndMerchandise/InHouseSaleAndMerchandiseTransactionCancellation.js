import data from '../../../fixtures/Data_Module/FS-013 & FS-039 InHouseSale & Merchandise/DataManagement'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import InHouseSaleAndMerchandisePurchaseTransaction from "../../../page-objects/SMCMS/PageActions/FS-039 & FS-013 - InHouseSaleAndMerchandise/InHouseSaleAndMerchandisePurchaseTransaction"
import elems_Picker from '../../../page-objects/SMCMS/Elements/Common/Picker'

const common = new Common()


// const { MemberIdMerchandise, MemberIdInHouse } = data.InHouseSaleAndMerchandiseItemTransaction

// const MemberIdMerchandise = ""
// const MemberIdInHouse = ""

const InHouseSaleAndMerchandiseTransactionConcellation = (MemberIdMerchandise, MemberIdInHouse) => {

describe('FS-039 & FS-013 In-House Sale and Merchandise Transaction Cancellation', function () {

    it('Create a Merchandise Transaction Cancellation Request', function () {

        common.Checkin(MemberIdMerchandise)

        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseTransactionListing').wait(4000)

        InHouseSaleAndMerchandisePurchaseTransaction.SelectItemType('Merchandise')

        InHouseSaleAndMerchandisePurchaseTransaction.FilterWithMemberId(MemberIdMerchandise)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickRecieptNumberForMerchandise()

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyMemberInfoInReceiptdetail(MemberIdMerchandise)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickOnReceiptItemCheckBox(MemberIdMerchandise)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickOn("Cancel")
        cy.wait(15000)

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyMemberInfoInAdjustment(MemberIdMerchandise)

        InHouseSaleAndMerchandisePurchaseTransaction.FillOutMerchandiseTransactionCancellation('Cancellation')

        InHouseSaleAndMerchandisePurchaseTransaction.ClickOn("Submit")
        
        common.ApprovalWorkFlow('MCD-CAN', 'Merchandise Transaction Cancellation Approval Workflow', 'Approve', 'testing Merchandise Transaction Cancellation Approval Workflow')

        // InHouseSaleAndMerchandisePurchaseTransaction.ClickOn("Yes")

        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseTransactionListing').wait(4000)

        InHouseSaleAndMerchandisePurchaseTransaction.SelectItemType('Merchandise')

        InHouseSaleAndMerchandisePurchaseTransaction.FilterWithMemberId(MemberIdMerchandise)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickRecieptNumberForMerchandise()

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyMemberInfoInReceiptdetail(MemberIdMerchandise)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickOnReceiptItemCheckBox(MemberIdMerchandise)

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyReceiptItemStatus('Cancelled')

        



    })

    it('Create In-House Transaction Cancellation Request', function () {

        common.Checkin(MemberIdInHouse)

        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseTransactionListing').wait(4000)

        InHouseSaleAndMerchandisePurchaseTransaction.SelectItemType('InHouse')

        InHouseSaleAndMerchandisePurchaseTransaction.FilterWithMemberId(MemberIdInHouse)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickRecieptNumberForInHouseSale()

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyMemberInfoInReceiptdetail(MemberIdInHouse)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickOnReceiptItemCheckBox(MemberIdInHouse)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickOn("Cancel")
        cy.wait(15000)

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyMemberInfoInAdjustment(MemberIdInHouse)

        InHouseSaleAndMerchandisePurchaseTransaction.FillOutMerchandiseTransactionCancellation('Cancellation')

        InHouseSaleAndMerchandisePurchaseTransaction.ClickOn("Submit")
        
        common.ApprovalWorkFlow('SALE-CAN', 'Inhouse Sale Transaction Cancellation Approval Workflow', 'Approve', 'Testing Inhouse Sale Transaction Cancellation Approval Workflow')

        // InHouseSaleAndMerchandisePurchaseTransaction.ClickOn("Yes")

        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseTransactionListing').wait(4000)

        InHouseSaleAndMerchandisePurchaseTransaction.SelectItemType('InHouse')

        InHouseSaleAndMerchandisePurchaseTransaction.FilterWithMemberId(MemberIdInHouse)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickRecieptNumberForInHouseSale()

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyMemberInfoInReceiptdetail(MemberIdInHouse)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickOnReceiptItemCheckBox(MemberIdInHouse)

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyReceiptItemStatus('Cancelled')


    })

})

}
export default InHouseSaleAndMerchandiseTransactionConcellation