import elems_InHouseSaleMerchandiseTransactionListing from '../../Elements/In-House_Sale-&-Merchandise/MerchandiseInhousePurchaseTransactionList'
import elems_Picker from '../../Elements/Common/Picker'
class InHouseSaleAndMerchandisePurchaseTransaction {

    /*****************************************************
           * Method: ClickPurchaseNumberLink
           * Description: This function click on Table Link
           ***************************************************/
    ClickMerchandisePurchaseNumberLink() {

        cy.Click('(//h2[text()="Merchandise Purchase Transaction Listing"]/ancestor::div//table//a)[1]')
        cy.wait(4000)

    }
    /*****************************************************
           * Method: ClickPurchaseNumberLink
           * Description: This function click on Table Link
           ***************************************************/
    ClickInHousePurchaseNumberLink() {

        cy.Click('(//h2[text()="In-House Sale Purchase Transaction Listing"]/ancestor::div//table//a)[1]')
        cy.wait(4000)

    }
    /*****************************************************
           * Method: ClickRecieptNumber
           * Description: This function click on Table Link
           ***************************************************/
    ClickRecieptNumber(ReceiptNumber) {

        cy.ClickTableLinkItem(elems_InHouseSaleMerchandiseTransactionListing.TBL_PURCHASETRANSACTIONLIST, 'Receipt Number', ReceiptNumber)
        cy.wait(4000)

    }
    /*****************************************************
    * Method: ClickRecieptNumber
    * Description: This function click on Table Link
    ***************************************************/
    ClickRecieptNumberForMerchandise() {

        cy.Click('(//h2[text()="Merchandise Purchase Transaction Listing"]/ancestor::div//table//td//a)[2]')
        cy.wait(4000)

    }

    /*****************************************************
    * Method: ClickRecieptNumber
    * Description: This function click on Table Link
    ***************************************************/
    ClickRecieptNumberForInHouseSale() {

        cy.Click('(//h2[text()="In-House Sale Purchase Transaction Listing"]/ancestor::div//table//td//a)[2]')
        cy.wait(4000)

    }

    /*****************************************************
    * Method: VerifyMemberInfoInReceiptdetail
    * Description: This function will member information in reveipt detail page
    ***************************************************/
    VerifyMemberInfoInReceiptdetail(MemberID) {

        cy.VerifyElementText(elems_InHouseSaleMerchandiseTransactionListing.ReceiptDetail.LBL_MEMBERID ,MemberID)
        cy.wait(2000)

    }
    /*****************************************************
    * Method: VerifyMemberInfoInReceiptdetail
    * Description: This function will member information in reveipt detail page
    ***************************************************/
    VerifyMemberInfoInAdjustment(MemberID) {

        cy.VerifyElementText(elems_InHouseSaleMerchandiseTransactionListing.InHouseSaleMerchandiseTransactionAdjustmentDetailRequest.LBL_MEMBERID ,MemberID)
        cy.wait(2000)

    }

    /*****************************************************
    * Method: FillOutMerchandiseTransactionAdjustmentItemList
    * Description: This function will fill out Merchandise Transaction Adjustment Item List
    ***************************************************/
    FillOutMerchandiseTransactionAdjustmentItemList(ReasonCode) {

        cy.SelectDropDownItem(elems_InHouseSaleMerchandiseTransactionListing.InHouseSaleMerchandiseTransactionAdjustmentDetailRequest.DRP_REASONCODE ,ReasonCode)
        // cy.Click(elems_InHouseSaleMerchandiseTransactionListing.InHouseSaleMerchandiseTransactionAdjustmentDetailRequest.TBL_MerchandiseTransactionAdjustmentItemListStatus)

    }

    /*****************************************************
    * Method: FillOutMerchandiseTransactionCancellation
    * Description: This function will fill out Merchandise Transaction Cancellation Item List
    ***************************************************/
    FillOutMerchandiseTransactionCancellation(ReasonCode) {

        cy.SelectDropDownItem(elems_InHouseSaleMerchandiseTransactionListing.InHouseSaleMerchandiseTransactionAdjustmentDetailRequest.DRP_REASONCODE ,ReasonCode)
        // cy.Click(elems_InHouseSaleMerchandiseTransactionListing.TBL_MerchandiseTransactionAdjustmentItemList)

    }
    /*****************************************************
    * Method: FillOutMerchandiseTransactionAdjustmentItemList
    * Description: This function will fill out Merchandise Transaction Adjustment Item List
    ***************************************************/
    FillOutMerchandiseTransactionRefundRequest(ReasonCode, RefundPaymentType) {

        cy.SelectDropDownItem(elems_InHouseSaleMerchandiseTransactionListing.InHouseSaleMerchandiseTransactionRefundDetailRequest.DRP_REASONCODE ,ReasonCode)
       
       
        if(RefundPaymentType === "Cheque")
        {
            cy.SelectDropDownItem(elems_InHouseSaleMerchandiseTransactionListing.InHouseSaleMerchandiseTransactionRefundDetailRequest.DRP_REFUNDPAYMENTTYPE ,RefundPaymentType)
            cy.EnterText(elems_InHouseSaleMerchandiseTransactionListing.InHouseSaleMerchandiseTransactionRefundDetailRequest.TXT_PAYEENAME, 'Testing Payment')
            
        }
        if(RefundPaymentType === "PayNow"){

            cy.SelectDropDownItem(elems_InHouseSaleMerchandiseTransactionListing.InHouseSaleMerchandiseTransactionRefundDetailRequest.DRP_REFUNDPAYMENTTYPE ,RefundPaymentType)
            cy.EnterText(elems_InHouseSaleMerchandiseTransactionListing.InHouseSaleMerchandiseTransactionRefundDetailRequest.TXT_MOBILENUMBER, '023145145')
        }
        // cy.Click(elems_InHouseSaleMerchandiseTransactionListing.InHouseSaleMerchandiseTransactionRefundDetailRequest.TBL_MerchandiseTransactionRefundItemList)

    }
    /*****************************************************
    * Method: ClickOnReceiptItemCheckBox
    * Description: This function will click on receipt item checkbox
    ***************************************************/
    ClickOnReceiptItemCheckBox() {

        cy.Click('(//h3[text()="Receipt Items"]/ancestor::div//table//td//input)[1]')

    }
    /*****************************************************
    * Method: VerifyReceiptItemStatus
    * Description: This function will will verify Receipt Item Status
    ***************************************************/
    VerifyReceiptItemStatus(Status) {

        cy.VerifyTableEntry('//h3[text()="Receipt Items"]/ancestor::div//table', 'Status', Status)

    }

    /*****************************************************
    * Method: ClickOn
    * Description: This function will click on button
    ***************************************************/
    ClickOn(ButtonName) {

        cy.xpath(`//button[text()='${ButtonName}']`).click()

    }
    /*****************************************************
           * Method: FilterWithMemberId
           * Description: This function Select MemberId and Filter Form
           ***************************************************/
    FilterWithMemberId(MemberID) {

        // cy.SelectPickerDifferentItems(elems_InHouseSaleMerchandiseTransactionListing.PCK_MEMBERID,
        //     elems_InHouseSaleMerchandiseTransactionListing.TXT_MEMBERID, MemberID)
        cy.Click(elems_InHouseSaleMerchandiseTransactionListing.PCK_MEMBERID)
        cy.wait(5000)
        cy.EnterText(elems_InHouseSaleMerchandiseTransactionListing.TXT_MEMBERID, MemberID)
        cy.wait(1000)
        cy.Click(elems_InHouseSaleMerchandiseTransactionListing.BTN_SEARCHFILTERS2)
        cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, "Member ID", MemberID)
        cy.Click(elems_Picker.BTN_SELECT)
        cy.Click(elems_InHouseSaleMerchandiseTransactionListing.BTN_SEARCHFILTERS)
        cy.wait(5000)

    }
    /*****************************************************
           * Method: VerifyGeneralInfoLabels
           * Description: This function Validate label on InHouse sale purchase
           ***************************************************/
        VerifyGeneralInfoLabels(PurchaseNumber, MemberID, ItemName) {

        cy.ValidateElementText(elems_InHouseSaleMerchandiseTransactionListing.InHouseSalePurchase.LBL_PURCHASENUMBER, PurchaseNumber)
        cy.ValidateElementText(elems_InHouseSaleMerchandiseTransactionListing.InHouseSalePurchase.LBL_CUSTOMERMEMBERID, MemberID)
        //cy.ValidateElementText(elems_InHouseSaleMerchandiseTransactionListing.InHouseSalePurchase.LBL_SALEITEMNAME, ItemName)

    }
    /*****************************************************
           * Method: Cancel
           * Description: This function Click on Cancel button
           ***************************************************/
    Cancel() {

        cy.Click(elems_InHouseSaleMerchandiseTransactionListing.InHouseSalePurchase.BTN_CANCEL)

    }

    /*****************************************************
           * Method: Select Item Type
           * Description: This function Select item type radio button 
           * @param {string} type
           ***************************************************/
    SelectItemType(type) {

        if (type === 'InHouse') {
            cy.Click(elems_InHouseSaleMerchandiseTransactionListing.RAD_INHOUSESALEITEM)
            cy.wait(2000)
        } else {
            cy.Click(elems_InHouseSaleMerchandiseTransactionListing.RAD_MERCHANDISEITEM)
            cy.wait(2000)
        }
    }

}
export default new InHouseSaleAndMerchandisePurchaseTransaction