import elems_GiftRedemptionTransaction from '../../Elements/FS-031 Gift/GiftRedemptionTransaction'
import elems_PageHeader from '../../Elements/Common/PageHeader'
import elems_Picker from '../../Elements/Common/Picker'
class GiftRedemptionManagement {

  /*****************************************************
   * Method: verify PageTitle
   * Description: Verify Accommodation Type Listing Form
   * @param {string} ExpectedPg 
    *****************************************************/
  verifyPageTitle(ExpectedPg) {
    cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)

  }

    /*****************************************************
     * Method: FilterWithMemberID 
     * Description: This function Filter With Member ID
     * @param {string} MemberID
     *****************************************************/
        FilterWithMemberID(MemberID) {

            cy.Click(elems_GiftRedemptionTransaction.ListingForm.PCK_MEMBERID)
            cy.wait(4000)
            cy.EnterText(elems_GiftRedemptionTransaction.ListingForm.TXT_MEMBERID, MemberID)
            cy.xpath(elems_GiftRedemptionTransaction.ListingForm.BTN_SEARCHFILTERMEMBER).click()
            cy.wait(4000)
            cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, 'Member ID', MemberID)
            cy.Click(elems_Picker.BTN_SELECT)

    
        }

    /*****************************************************
     * Method: ClickOnsearchFilter 
     * Description: This function will click on Search filter button
     *****************************************************/
    ClickOnsearchFilter() {

        cy.Click(elems_GiftRedemptionTransaction.ListingForm.BTN_SEARCHFILTER)
        cy.wait(5000)
    

    }
    /*****************************************************
     * Method: FilterWithStatus 
     * Description: This function Filter item With Status
     *  @param {string} Status
     *****************************************************/
    FilterWithStatus(Status) {

        cy.SelectDropDownItem(elems_GiftRedemptionTransaction.ListingForm.DRP_STATUS, Status)
    

    }

    /*****************************************************
     * Method: SelectItem 
     * Description: This function Select Table Item
     *****************************************************/
    SelectItem() {

        cy.SelectTableItem(elems_GiftRedemptionTransaction.ListingForm.TBL_GIFTREDMPTRANSACLISTING, 'Status', Status)

    }
    /*****************************************************
     * Method: ClickTableLink 
     * Description: This function Click on table item
     *****************************************************/
    ClickTableLink() {

        cy.Click('(//div[@class="k-widget k-grid"]//table//a)[1]')
        cy.wait(2000)

    }
    /*****************************************************
     * Method: SelectTableFirstItem 
     * Description: This function Click on table first item
     *****************************************************/
   SelectTableFirstItem() {

        cy.Click('(//h2[text()="Gift Redemption Transaction Listing"]/ancestor::div//table//td//input)[1]')

    }
    /*****************************************************
     * Method: VerifyStatusInGRTDetail 
     * Description: This function Click on table item
     *****************************************************/
    VerifyStatusInDetail(Status) {

        cy.ValidateElementText('//label[@for="lblStatus"]', Status)

    }

    /*****************************************************
     * Method: VerifyTableEntry 
     * Description: This function will verify table entry
     *****************************************************/
    VerifyTableEntry(MemberID, Status) {

        cy.VerifyTableEntry(elems_GiftRedemptionTransaction.ListingForm.TBL_GIFTREDMPTRANSACLISTING,
            "Status",Status,
            "Member ID", MemberID)

    }

    /*****************************************************
     * Method: CollectGift 
     * Description: This function will click on Collect Gift button
     *****************************************************/
    CollectGift() {

        cy.Click(elems_GiftRedemptionTransaction.ListingForm.BTN_COLLECTGIFT)

    }

    /*****************************************************
     * Method: CancelGift 
     * Description: This function will click on Cancel Gift button
     *****************************************************/
    CancelGift() {

        cy.Click(elems_GiftRedemptionTransaction.ListingForm.BTN_CANCELGIFT)

    }

    /*****************************************************
     * Method: InsertGift 
     * Description: This function will click on Insert Gift button
     *****************************************************/
    InsertGift() {

        cy.Click(elems_GiftRedemptionTransaction.ListingForm.BTN_INSERTGIFT)

    }
    /*****************************************************
     * Method: ChangeGift 
     * Description: This function will click on Change Gift button
     *****************************************************/
    ChangeGift() {

        cy.Click(elems_GiftRedemptionTransaction.ListingForm.BTN_CHANGEGIFT)

    }
    /*****************************************************
     * Method: RefundGift 
     * Description: This function will click on Refund Gift button
     *****************************************************/
    RefundGift() {

        cy.Click(elems_GiftRedemptionTransaction.ListingForm.BTN_REFUNDGIFT)

    }
    /*****************************************************
     * Method: BulkGiftRedemptionUpload 
     * Description: This function will click on Bulk Gift Redemption Upload button
     *****************************************************/
    BulkGiftRedemptionUpload() {

        cy.Click(elems_GiftRedemptionTransaction.ListingForm.BTN_BULKGIFTREDEMPTIONUPLOAD)

    }
    /*****************************************************
     * Method: GenerateLetter 
     * Description: This function will click on Generate Letter button
     *****************************************************/
    GenerateLetter() {

        cy.Click(elems_GiftRedemptionTransaction.ListingForm.BTN_GENERATELETTER)

    }
    /*****************************************************
     * Method: SendLetter 
     * Description: This function will click on Send Letter button
     *****************************************************/
    SendLetter() {

        cy.Click(elems_GiftRedemptionTransaction.ListingForm.BTN_SENDLETTER)

    }

    /*****************************************************
     * Method: Submit 
     * Description: This function will click on Submit button
     *****************************************************/
        Submit() {

            cy.Click(elems_GiftRedemptionTransaction.GiftInsertionForm.BTN_SUBMIT)
            cy.wait(5000)
    
        }
        
    /*****************************************************
     * Method: Cancel 
     * Description: This function will click on Cancel button
     *****************************************************/
        Cancel() {

            cy.Click(elems_GiftRedemptionTransaction.GiftInsertionForm.BTN_CANCEL)
    
        }

    /*****************************************************
     * Method: InsertGift 
     * Description: This function will insert gift
     * @param {string} MemberID
     * @param {string} GiftItem
     * @param {string} Quantity
     * @param {string} Remarks
     *****************************************************/
    GiftInsertion(MemberID, GiftItem, Quantity, Remarks) {

        cy.Click(elems_GiftRedemptionTransaction.ListingForm.BTN_INSERTGIFT)
        cy.wait(2000)
        cy.Click(elems_GiftRedemptionTransaction.GiftInsertionForm.PCK_MEMBERID)
        cy.EnterText(elems_GiftRedemptionTransaction.GiftInsertionForm.TXT_MEMBERID, MemberID)
        cy.Click(elems_GiftRedemptionTransaction.GiftInsertionForm.BTN_SEARCHFILTER)
        cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, "Member ID", MemberID)
        cy.Click(elems_Picker.BTN_SELECT)

        cy.Click(elems_GiftRedemptionTransaction.GiftInsertionForm.PCK_GIFTITEM)
        cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, "Gift Name", GiftItem)
        cy.Click(elems_Picker.BTN_SELECT)

        cy.EnterText(elems_GiftRedemptionTransaction.GiftInsertionForm.TXT_QUANTITY, Quantity)

        cy.EnterText(elems_GiftRedemptionTransaction.GiftInsertionForm.TXT_REMARK, Remarks)



    }

    /*****************************************************
     * Method:GiftExchange
     * Description: This function will Exchange gift
     * @param {string} GiftItem
     * @param {string} Quantity
     * @param {string} Reason
     *****************************************************/
    GiftExchange(GiftItem, Quantity, Reason) {

        cy.Click(elems_GiftRedemptionTransaction.ListingForm.BTN_CHANGEGIFT)
        cy.wait(2000)
        cy.Click(elems_GiftRedemptionTransaction.GiftExchangeForm.BTN_EDIT)

        cy.Click(elems_GiftRedemptionTransaction.GiftExchangeForm.PCK_ITEMNAME)

        cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, "Gift Name", GiftItem)

        cy.Click(elems_Picker.BTN_SELECT)

        cy.EnterText(elems_GiftRedemptionTransaction.GiftExchangeForm.TXT_QUANTITY, Quantity)

        cy.EnterText(elems_GiftRedemptionTransaction.GiftExchangeForm.TXT_REASAON, Reason)

        cy.Click(elems_GiftRedemptionTransaction.GiftExchangeForm.TBL_ITEMLIST)

        cy.Click(elems_GiftRedemptionTransaction.GiftExchangeForm.BTN_CHANGE)
        cy.wait(7000)


    }

    /*****************************************************
     * Method:RefundGift
     * Description: This function will Refund Gift
     * @param {string} Remarks
     *****************************************************/
    RefundGift(Remarks) {

        cy.Click(elems_GiftRedemptionTransaction.ListingForm.BTN_REFUNDGIFT)
        cy.wait(2000)

        cy.EnterText(elems_GiftRedemptionTransaction.GiftRefundForm.TXT_REMARK, Remarks)


    }

    /*****************************************************
     * Method:GiftCancellation
     * Description: This function will Gift Cancel
     * @param {string} Remarks
     *****************************************************/
    GiftCancellation(Remarks) {

        cy.Click(elems_GiftRedemptionTransaction.ListingForm.BTN_CANCELGIFT)
        cy.wait(2000)

        cy.EnterText(elems_GiftRedemptionTransaction.GiftRefundForm.TXT_REMARK, Remarks)

        cy.Click(elems_GiftRedemptionTransaction.GiftRefundForm.BTN_SUBMIT)


    }

    /*****************************************************
     * Method:CollectGift
     * Description: This function will Gift Cancel
     * @param {string} Remarks
     *****************************************************/
    GiftCollection(Remarks) {

        cy.Click(elems_GiftRedemptionTransaction.ListingForm.BTN_COLLECTGIFT)
        cy.wait(3000)

        cy.EnterText(elems_GiftRedemptionTransaction.GiftCollectionForm.TXT_REMARK, Remarks)

        cy.Click(elems_GiftRedemptionTransaction.GiftCollectionForm.BTN_COLLECT)
        cy.wait(4000)

    }



}
export default new GiftRedemptionManagement