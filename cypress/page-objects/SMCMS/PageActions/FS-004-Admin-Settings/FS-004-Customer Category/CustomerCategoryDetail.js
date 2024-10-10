import elems_CustomerCategoryDetail from '../../../Elements/Admin/FS004_Admin-Settings/CustomerCategoryDetail.js'
import elems_PageHeader from '../../../Elements/Common/PageHeader.js'
import elems_Picker from '../../../Elements/Common/Picker.js'

class CustomerCategoryDetail {

    /*****************************************************
     * Method: VerifyPageTitle
     * Description: Verify the tile of the Customer Category Detail
     
    *****************************************************/
    VerifyPageTitle() {
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Customer Category Detail')

    }


    /*****************************************************
    * Method: filloutCustomerCategoryDetail
    * Description: Fills-out Customer Category Detail
    *  @param {string} Name Name
     * @param {string} BelongsUnder Belongs Under
    *  @param {string} CustomerCategoryType Customer Category Type
    *  @param {string} D365ID D365 ID
    *****************************************************/

    filloutCustomerCategoryDetail(Name, BelongsUnder, CustomerCategoryType, D365ID) {

        if (Name !== undefined) {
            cy.EnterText(elems_CustomerCategoryDetail.TXT_NAME, Name)
        }
        if (BelongsUnder !== undefined) {
            cy.Click(elems_CustomerCategoryDetail.PCK_BELONGSUNDER)
            cy.wait(10000)
            cy.SelectTableItem(elems_CustomerCategoryDetail.TBL_SELECTCUSTOMERCAT, 'Customer Category Name', BelongsUnder)
            cy.Click(elems_Picker.BTN_SELECT)
        }
        if (CustomerCategoryType !== undefined) {
            cy.Click(elems_CustomerCategoryDetail.PCK_CUSTOMERCATEGORYTYPE)
            cy.SelectTableItem(elems_CustomerCategoryDetail.TBL_SELECTCUSTOMERCAT, 'Customer Category Type', CustomerCategoryType)
            cy.Click(elems_Picker.BTN_SELECT)
        }
        if (D365ID !== undefined) {
            cy.xpath(elems_CustomerCategoryDetail.TXT_D365ID).clear()
            cy.EnterText(elems_CustomerCategoryDetail.TXT_D365ID, D365ID)
        }
        // Error Handling
        if (Name === undefined
            && BelongsUnder === undefined
            && CustomerCategoryType === undefined
            && D365ID === undefined) {
            throw new Error("CustomerCategoryDetail.filloutCustomerCategoryDetail Error!!./n\
                            Please provide at least one argument.")
        }

    }
    /*****************************************************
   * Method: Save
   * Description: Save all fill-out fields
   * *****************************************************/
    Save() {
        cy.Click(elems_CustomerCategoryDetail.BTN_SAVE)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Customer Category Listing')
    }
    /*****************************************************
      * Method: Cancel
      * Description: Save all fill-out fields
      * *****************************************************/
    Cancel() {
        cy.Click(elems_CustomerCategoryDetail.BTN_CANCEL)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Customer Category Listing')
    }
    /*****************************************************
    * Method: UpdateCustomerCategoryDetail
    * Description:Update the Customer Category Detail
    *  
    *  @param {string} Name Name
     * @param {string} BelongsUnder Belongs Under
    *  @param {string} CustomerCategoryType Customer Category Type
    *  @param {string} D365ID D365 ID
    *****************************************************/

    UpdateCustomerCategoryDetail({ Name, BelongsUnder, CustomerCategoryType, D365ID }) {

        if (Name !== undefined) {
            cy.xpath(elems_CustomerCategoryDetail.TXT_NAME).clear()
            cy.EnterText(elems_CustomerCategoryDetail.TXT_NAME, Name)
        }
        if (BelongsUnder !== undefined) {

            cy.Click(elems_CustomerCategoryDetail.PCK_BELONGSUNDER)
            cy.wait(10000)
            cy.Click('(//div[@role="dialog"]//table//td)[1]')
            // cy.SelectTableItem(elems_CustomerCategoryDetail.TBL_SELECTCUSTOMERCAT, 'Customer Category Name', BelongsUnder)
            cy.Click(elems_Picker.BTN_SELECT)
        }
        if (CustomerCategoryType !== undefined) {
            cy.Click(elems_CustomerCategoryDetail.PCK_CUSTOMERCATEGORYTYPE)
            cy.wait(15000)
            cy.SelectTableItem(elems_CustomerCategoryDetail.TBL_SELECTCUSTOMERCAT, 'Customer Category Type', CustomerCategoryType)
            cy.Click(elems_Picker.BTN_SELECT)
        }
        if (D365ID !== undefined) {
            cy.EnterText(elems_CustomerCategoryDetail.TXT_D365ID, D365ID)
        }
        // Error Handling
        if (Name === undefined
            && BelongsUnder === undefined
            && CustomerCategoryType === undefined
            && D365ID === undefined) {
            throw new Error("CustomerCategoryDetail.filloutCustomerCategoryDetail Error!!./n\
                            Please provide at least one argument.")
        }

    }
}
export default CustomerCategoryDetail