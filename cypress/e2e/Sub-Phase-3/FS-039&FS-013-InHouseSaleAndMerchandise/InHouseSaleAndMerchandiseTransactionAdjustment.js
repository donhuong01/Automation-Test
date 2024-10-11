import login from "../../../fixtures/login"
import data from '../../../fixtures/Data_Module/FS-013 & FS-039 InHouseSale & Merchandise/DataManagement'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import InHouseSaleAndMerchandisePurchaseTransaction from "../../../page-objects/SMCMS/PageActions/FS-039 & FS-013 - InHouseSaleAndMerchandise/InHouseSaleAndMerchandisePurchaseTransaction"


const common = new Common()


// const { MemberIdMerchandise, MemberIdInHouse } = data.InHouseSaleAndMerchandiseItemTransaction
// const MemberIdMerchandise = ""
// const MemberIdInHouse = ""

const InHouseSaleAndMerchandiseTransactionAdjustment = (MemberIdMerchandise, MemberIdInHouse) => {


describe('FS-039 & FS-013 In-House Sale and Merchandise Transaction Adjustment', function () {

    it.only('Create a Merchandise Transaction Adjustment Request', function () {

        common.Checkin(MemberIdMerchandise)

        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseTransactionListing').wait(8000)

        InHouseSaleAndMerchandisePurchaseTransaction.SelectItemType('Merchandise')

        InHouseSaleAndMerchandisePurchaseTransaction.FilterWithMemberId(MemberIdMerchandise)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickRecieptNumberForMerchandise()

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyMemberInfoInReceiptdetail(MemberIdMerchandise)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickOnReceiptItemCheckBox(MemberIdMerchandise)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickOn("Adjust")
        cy.wait(15000)

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyMemberInfoInAdjustment(MemberIdMerchandise)

        InHouseSaleAndMerchandisePurchaseTransaction.FillOutMerchandiseTransactionAdjustmentItemList('Adjustment')

        InHouseSaleAndMerchandisePurchaseTransaction.ClickOn("Submit")

        common.ApprovalWorkFlow('MCD-ADJ', 'Inhouse Sale Transaction Adjustment Approval Workflow', 'Approve', 'testing In-House Transaction Adjustment')

        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseTransactionListing').wait(4000)

        InHouseSaleAndMerchandisePurchaseTransaction.SelectItemType('Merchandise')

        InHouseSaleAndMerchandisePurchaseTransaction.FilterWithMemberId(MemberIdMerchandise)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickRecieptNumberForMerchandise()

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyMemberInfoInReceiptdetail(MemberIdMerchandise)

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyReceiptItemStatus('Adjusted')

    })

    it('Create In-House Transaction Adjustment Request', function () {

        common.Checkin(MemberIdInHouse)

        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseTransactionListing').wait(4000)

        InHouseSaleAndMerchandisePurchaseTransaction.SelectItemType('InHouse')

        InHouseSaleAndMerchandisePurchaseTransaction.FilterWithMemberId(MemberIdInHouse)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickRecieptNumberForInHouseSale()
        
        InHouseSaleAndMerchandisePurchaseTransaction.VerifyMemberInfoInReceiptdetail(MemberIdInHouse)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickOnReceiptItemCheckBox(MemberIdInHouse)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickOn("Adjust")
        cy.wait(15000)

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyMemberInfoInAdjustment(MemberIdInHouse)

        InHouseSaleAndMerchandisePurchaseTransaction.FillOutMerchandiseTransactionAdjustmentItemList('Adjustment')

        InHouseSaleAndMerchandisePurchaseTransaction.ClickOn("Submit")

        common.ApprovalWorkFlow('SALE-ADJ', 'Merchandise Transaction Adjustment Approval Workflow', 'Approve', 'testing Merchandise Transaction Adjustment')

        cy.visit('/sales/inhouseSaleAndMerchandisePurchaseTransactionListing').wait(4000)

        InHouseSaleAndMerchandisePurchaseTransaction.SelectItemType('InHouse')

        InHouseSaleAndMerchandisePurchaseTransaction.FilterWithMemberId(MemberIdInHouse)

        InHouseSaleAndMerchandisePurchaseTransaction.ClickRecieptNumberForInHouseSale()

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyMemberInfoInReceiptdetail(MemberIdInHouse)

        InHouseSaleAndMerchandisePurchaseTransaction.VerifyReceiptItemStatus('Adjusted')


    })

})

}
export default InHouseSaleAndMerchandiseTransactionAdjustment