import elems_GiftManagement from '../../Elements/FS-031 Gift/GiftManagment'
import elems_PageHeader from '../../Elements/Common/PageHeader'

class GiftManagement {

  /*****************************************************
   * Method: verify PageTitle
   * Description: Verify Accommodation Type Listing Form
   * @param {string} ExpectedPg 
    *****************************************************/
    verifyPageTitle(ExpectedPg) {
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)

  }

  
    /*****************************************************
     * Method: FilterByItemCode 
     * Description: This function will Filter By Item Code
     *  @param {string} ItemCode
     *****************************************************/
    FilterByItemCode(ItemCode) {

        cy.EnterText(elems_GiftManagement.ListingForm.TXT_ITEMCODE, ItemCode)
        cy.Click(elems_GiftManagement.ListingForm.BTN_SEARCHFILTERS)

    }
    /*****************************************************
     * Method: FilterByItemDescription 
     * Description: This function will Filter By Item Description
     *  @param {string} Description
     *****************************************************/
    FilterByItemDescription(Description) {

        cy.EnterText(elems_GiftManagement.ListingForm.TXT_ITEMDESCRIPTION, Description)
        cy.Click(elems_GiftManagement.ListingForm.BTN_SEARCHFILTERS)

    }
    /*****************************************************
     * Method: FilterByItemCode 
     * Description: This function will Filter By Item Code
     *  @param {string} WareHouse
     *****************************************************/
    FilterByWareHouse(WareHouse) {

        cy.Click(elems_GiftManagement.ListingForm.PCK_WAREHOUSE)
        cy.EnterText(elems_GiftManagement.ListingForm.TXT_WAREHOUSENAME, WareHouse)
        cy.Click(elems_GiftManagement.ListingForm.BTN_WAREHOUSEFILTERS)
        cy.Click(elems_GiftManagement.ListingForm.BTN_SELECT)

        cy.Click(elems_GiftManagement.ListingForm.BTN_SEARCHFILTERS)
        cy.wait(2000)

    }

    /*****************************************************
     * Method: VerifyTableEntry 
     * Description: This function will Verify table entry
     *  @param {string} Item
     *****************************************************/
        VerifyTableEntry(Item) {

            cy.VerifyTableEntry(elems_GiftManagement.ListingForm.TBL_GIFTMANAGEMENTLISTING, "Item Code", Item)
    
        }

    /*****************************************************
     * Method: ClickTableEntry 
     * Description: This function will Click table entry
     *  @param {string} Item
     *****************************************************/
        ClickTableEntry(Item) {

            cy.ClickTableLinkItem(elems_GiftManagement.ListingForm.TBL_GIFTMANAGEMENTLISTING, "Item Code", Item)
    
        }
      
    /*****************************************************
     * Method: FilloutGiftManagementDetailFrom 
     * Description: This function will Fill out Gift Management Detail From
     * @param {string} RedemptionType
     * @param {string} PublishDateFrom
     * @param {string} PublishDateTo
     * @param {string} ExpiryCollection
     * @param {string} Price
     * @param {string} GiftCategory
     * @param {string} UploadFile
     * @param {string} Status
     *****************************************************/
    FilloutGiftManagementDetailFrom(RedemptionType, PublishDateFrom, PublishDateTo,ExpiryCollection, Price, GiftCategory, UploadFile, Status) {

      cy.SelecDropDownItem(elems_GiftManagement.DetailForm.DRP_REDEMPTIONTYPE, RedemptionType)
      cy.EnterDate(elems_GiftManagement.DetailForm.DATE_PUBLISHDATEFROM, PublishDateFrom)
      cy.EnterDate(elems_GiftManagement.DetailForm.DATE_PUBLISHDATETO, PublishDateTo)
      cy.EnterDate(elems_GiftManagement.DetailForm.TXT_EXPIRYCOLLECTION, ExpiryCollection)
      cy.EnterDate(elems_GiftManagement.DetailForm.TXT_PRICE, Price)
      cy.SelecDropDownItem(elems_GiftManagement.DetailForm.DRP_GIFTCATEGORY, GiftCategory)
      cy.UploadFile(elems_GiftManagement.DetailForm.UPLOADFILE, UploadFile)
      cy.SelecDropDownItem(elems_GiftManagement.DetailForm.DRP_STATUS, Status)

    }
    

    /*****************************************************
     * Method: ImportFromProduct
     * Description: This function Click on Import From Product button
     *****************************************************/
    ImportFromProduct() {

        cy.Click(elems_GiftManagement.ListingForm.BTN_IMPORTMANAGEMENTPRODUCT)

    }
    /*****************************************************
     * Method: Save
     * Description: This function Click on Save button
     *****************************************************/
    Save() {

        cy.Click(elems_GiftManagement.DetailForm.BTN_SAVE)

    }
    /*****************************************************
     * Method: Cancel 
     * Description: This function Click on Cancel button
     *****************************************************/
    Cancel() {

        cy.Click(elems_GiftManagement.DetailForm.BTN_CANCEL)

    }
}
export default new GiftManagement