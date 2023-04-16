import elems_GiftRedemptionTransaction from '../../Elements/FS-031 Gift/GiftRedemptionTransaction'
import elems_Picker from '../../Elements/Common/Picker'

class GiftRedemptionTransaction {

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
    VerifyStatusInGRTDetail(Status) {

        cy.ValidateElementText('//label[@for="lblStatus"]', Status)

    }
}
export default new GiftRedemptionTransaction