import elems_PageHeader from '../../../Elements/Common/PageHeader.js'
import elems_CodeSetMasterListing from '../../../Elements/Admin/FS004_Admin-Settings/CodeSetMasterListing.js'
import elems_Alerts from '../../../Elements/Common/Alerts.js'

class CodeSetMasterListing {

  /*****************************************************
   * Method: Verify page title
   * Description: This function verifies the page title
   * 
   * @param {string} expectedPg
   *****************************************************/
  verifyPageTitle(expectedPg) {
    cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPg)

  }

  /*****************************************************
   * Method: filterCodeSetMasterList
   * Description: This function filters the Code Set Master Listing
   * 
   * @param {string} CodeSetName Code Set Name
   * @param {string} AbbreviationCode Abbreviation Code
   * @param {string} CodeType Code Type
   *****************************************************/
  filterCodeSetMasterList(CodeSetName, AbbreviationCode, CodeType) {

    // Enter Code Set Name
    if (CodeSetName !== undefined) {
      cy.xpath(elems_CodeSetMasterListing.TXT_CODESETNAME).clear()
      cy.EnterText(elems_CodeSetMasterListing.TXT_CODESETNAME, CodeSetName)
    }

    // Enter Abbreviation Code
    if (AbbreviationCode !== undefined) {
      cy.xpath(elems_CodeSetMasterListing.TXT_ABBREVIATIONCODE).clear()
      cy.EnterText(elems_CodeSetMasterListing.TXT_ABBREVIATIONCODE, AbbreviationCode)
    }

    // Enter Code Type
    if (CodeType !== undefined) {
      cy.xpath(elems_CodeSetMasterListing.TXT_CODETYPE).clear()
      cy.EnterText(elems_CodeSetMasterListing.TXT_CODETYPE, CodeType)
    }

    // Click Search Filters
    cy.Click(elems_CodeSetMasterListing.BTN_SEARCH)
    cy.wait(5000)

  }

  /*****************************************************
   * Method: verifyCodeSetMasterList
   * Description: Verfies Code Set Master Listing Table
   *
   * @param {string} CodeSetMasterList Code Set Master Listing Array
   *****************************************************/
  verifyCodeSetMasterList(AbbreviationCode, CodeSetName) {

    // Loop for dataset
    // CodeSetMasterList.forEach( data => {

    cy.VerifyTableEntry(
      elems_CodeSetMasterListing.TBL_CODESETNAME,
      'Abbreviation Code', AbbreviationCode,
      'Code Set Name', CodeSetName
    )

    //   cy.VerifyTableEntry(
    //     elems_CodeSetMasterListing.TBL_CODESETNAME,
    //     'Code Type', data.CodeType,
    //     'Code Set Name', data.CodeSetName
    //   )
    // })
  }

  /*****************************************************
   * Method: clickCodeSetDropdown
   * Description: Clicks a Code Set Name Item Link
   *
   * @param {string} CodeSetButton Code Set Name dropdown button in Table
   *****************************************************/
  clickCodeSetDropdown(CodeSetButton) {

    // Select Table Item
    if (CodeSetButton !== undefined) {
      cy.ClickTableDropDownButton(
        elems_CodeSetMasterListing.TBL_CODESETNAME,
        'Code Set Name', CodeSetButton
      )
    }
  }

  /*****************************************************
   * Method: clickCodeSetLink
   * Description: Clicks a Code Set Name Item Link
   *
   * @param {string} CodeSetLink Code Set Name item link in Table
   *****************************************************/
  clickCodeSetLink(CodeSetLink) {

    // Select Table Link Item
    if (CodeSetLink !== undefined) {
      cy.ClickTableDropDownLink(
        elems_CodeSetMasterListing.TBL_CODESETNAME,
        'Code Set Name', CodeSetLink
      )

      // Validate Page Redirection
      cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Code Set Master Detail')
    }

    // Error Handling
    if (CodeSetLink === undefined) {
      throw new Error("CodeSetMasterListing.clickCodeSetLink Error!!.\
                        Please provide a value.")
    }
  }

  /*****************************************************
   * Method: selectCodeSetItem
   * Description: Selects Code Set Master Listing Item
   *
   * @param {string} CodeSetItem Batch ID Item
   *****************************************************/
  selectCodeSetItem(CodeSetItem) {

    // Ticks Checkbox beside item
    // Click on arrow
    // cy.Click('//span[@class="k-icon k-i-expand"]')
    cy.SelectTableItem(
      elems_CodeSetMasterListing.TBL_CODESETNAME,
      'Code Set Name', CodeSetItem
    )
  }

  /*****************************************************
   * Method: createNew
   * Description: Create New Bad Address Update
   *****************************************************/
  createNew() {
    cy.Click(elems_CodeSetMasterListing.BTN_CREATENEW)
    cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Code Set Master Detail')
  }

  /*****************************************************
   * Method: delete
   * Description: Delete Bad Address Update Item
   *****************************************************/
  delete() {
    cy.Click(elems_CodeSetMasterListing.BTN_DELETE)

    // Verify Delete Confirmation Popup
    cy.ValidateElementText(elems_Alerts.LBL_POPUPTITLE, 'Delete Item')

    // Delete item
    cy.Click(elems_Alerts.BTN_DELETE)
  }

}

export default CodeSetMasterListing