import elems_PromotionUtilizationListing from '../../../Elements/FS-042-Promotion/PromotionUtilizationListing'


class PromotionUtilization {

    /*****************************************************
      * Method: FilterWithPromotionName
      * Description: Verify Promotion Listing Form
      * @param {string} Name 
       *****************************************************/
    FilterWithPromotionName(Name) {
        cy.SelectPickerDifferentItemsWait(elems_PromotionUtilizationListing.PCK_PROMOTION, 4000,
            elems_PromotionUtilizationListing.TXT_PROMOTIONNAME, Name,
            '//div[@class="k-window-content k-dialog-content"]//button[text()="Search Filters"]')
        cy.wait(1000)
        cy.Click(elems_PromotionUtilizationListing.BTN_SEARCHFILTER)

    }
    /*****************************************************
      * Method: VerifyAppliedPromotion
      * Description: Verify Applied Promotion Promotion Utilization Listing 
      * @param {string} Name 
       *****************************************************/
    VerifyAppliedPromotion(Name) {
        cy.SelectPickerDifferentItemsWait(elems_PromotionUtilizationListing.PCK_PROMOTION, 4000,
            elems_PromotionUtilizationListing.TXT_PROMOTIONNAME, Name,
            '//div[@class="k-window-content k-dialog-content"]//button[text()="Search Filters"]')
        cy.wait(1000)
        cy.Click(elems_PromotionUtilizationListing.BTN_SEARCHFILTER)
        cy.VerifyTableEntry(elems_PromotionUtilizationListing.TBL_PROMOTIONUTILIZATIONLISTING, 'Promotion Name', Name)

    }
}
export default new PromotionUtilization