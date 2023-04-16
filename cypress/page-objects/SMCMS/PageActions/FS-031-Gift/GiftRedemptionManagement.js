import elems_GiftRedemptionTransaction from '../../Elements/FS-031 Gift/GiftRedemptionTransaction'
import elems_Picker from '../../Elements/Common/Picker'

class GiftRedemptionManagement {

    /*****************************************************
     * Method: FilterWithMemberID 
     * Description: This function Filter With Member ID
     * @param {string} MemberID
     *****************************************************/
        FilterWithMemberID(MemberID) {

            cy.Click(elems_GiftRedemptionTransaction.ListingForm.PCK_MEMBERID)
            cy.EnterText(elems_GiftRedemptionTransaction.ListingForm.TXT_MEMBERID, MemberID)
            cy.Click(elems_GiftRedemptionTransaction.ListingForm.BTN_SEARCHFILTERMEMBER)
    
        }

    /*****************************************************
     * Method: FilterWithStatus 
     * Description: This function Filter item With Status
     *  @param {string} Status
     *****************************************************/
    FilterWithStatus(Status) {

        cy.SelectDropDownItem(elems_GiftRedemptionTransaction.ListingForm.DRP_STATUS, Status)
        cy.Click(elems_GiftRedemptionTransaction.ListingForm.BTN_SEARCHFILTER)

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
     * Method: VerifyStatusInGRTDetail 
     * Description: This function Click on table item
     *****************************************************/
    VerifyStatusInDetail(Status) {

        cy.ValidateElementText('//label[@for="lblStatus"]', Status)

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
        cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, "Member ID", MemberID)
        cy.Click(elems_Picker.BTN_SELECT)

        cy.SelectPickerItem(elems_GiftRedemptionTransaction.GiftInsertionForm.PCK_GIFTITEM, "Gift Name", GiftItem)

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
        cy.CLick(elems_GiftRedemptionTransaction.GiftExchangeForm.BTN_EDIT)

        cy.SelectPickerItem(elems_GiftRedemptionTransaction.GiftExchangeForm.PCK_ITEMNAME, "Gift Name", GiftItem)

        cy.EnterText(elems_GiftRedemptionTransaction.GiftExchangeForm.TXT_QUANTITY, Quantity)

        cy.EnterText(elems_GiftRedemptionTransaction.GiftExchangeForm.TXT_REASAON, Reason)

        cy.Click(elems_GiftRedemptionTransaction.GiftExchangeForm.TBL_ITEMLIST)



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


    }



}
export default new GiftRedemptionManagement