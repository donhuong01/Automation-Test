import elems_CodeSetMasterDetail from '../../../Elements/Admin/FS004_Admin-Settings/CodeSetMasterDetail.js'
import elems_PageHeader from '../../../Elements/Common/PageHeader.js'
import elems_Alerts from '../../../Elements/Common/Alerts.js'
import elems_Picker from '../../../Elements/Common/Picker'

class CodeSetMasterDetail {

     /*****************************************************
      * Method: Verify page title
      * Description: This function verifies the page title
      * 
      * @param {string} expectedPg
      ******************************************************/
     verifyPageTitle(expectedPg) {
          cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPg)
     }

     /*****************************************************
      * Method: fillOutCodeSetMasterDetail
      * Description: Fills out Code Set Master Detail Form
      * 
      * @param {string} Name Name
      * @param {string} AbbreviationCode Abbreviation Code
      * @param {string} BelongsUnder Belongs Under
      * @param {string} CodeType Code Type
      * @param {string} EffectiveStartDate Effective Start Date Day
      * @param {string} EffectiveEndDate Effective Start Date Month

      *****************************************************/
     fillOutCodeSetMasterDetail({ Name, AbbreviationCode, BelongsUnder, CodeType,
          EffectiveStartDate, EffectiveEndDate }) {

          // Enter Name
          if (Name !== undefined) {
               cy.xpath(elems_CodeSetMasterDetail.TXT_NAME).clear()
               cy.EnterText(elems_CodeSetMasterDetail.TXT_NAME, Name)
          }

          // Enter Abbreviation Code
          if (AbbreviationCode !== undefined) {
               cy.xpath(elems_CodeSetMasterDetail.TXT_ABBREVIATIONCODE).clear()
               cy.EnterText(elems_CodeSetMasterDetail.TXT_ABBREVIATIONCODE, AbbreviationCode)
          }

          // Choose Belongs Under
          if (BelongsUnder !== undefined) {
               //      cy.Click(elems_CodeSetMasterDetail.PCK_BELONGSUNDER)
               //      cy.wait(15000)
               //      cy.SelectTableItem(
               //      elems_CodeSetMasterDetail.SelectCodePOPUP.TBL_CODETYPE,
               //      "Code Set Name", BelongsUnder, 
               // )
               // cy.Click(elems_CodeSetMasterDetail.SelectCodePOPUP.BTN_SELECT)
          }

          // Choose Code Type
          if (CodeType !== undefined) {
               cy.SearchFieldSelectTableItem(
                    elems_CodeSetMasterDetail.PCK_CODETYPE,
                    elems_CodeSetMasterDetail.SelectCodePOPUP.TBL_CODETYPE,
                    "Code Type", CodeType,
                    elems_CodeSetMasterDetail.SelectCodePOPUP.BTN_SELECT
               )
          }

          // Select Effective Start Date
          if (EffectiveStartDate !== undefined) {
               cy.EnterDate(elems_CodeSetMasterDetail.DATE_EFFECTIVESTARTDATE, EffectiveStartDate)
          }

          // Select Effective End Date
          if (EffectiveEndDate !== undefined) {
               cy.EnterDate(elems_CodeSetMasterDetail.DATE_EFFECTIVEENDDATE, EffectiveEndDate)
          }

          // Error Handling
          if (Name === undefined
               && AbbreviationCode === undefined
               && BelongsUnder === undefined
               && CodeType === undefined
          ) {
               throw new Error("CodeSetMasterDetail.fillOutCodeSetMasterDetail Error!!.\
                     Please provide at least one value.")
          }
     }


     /*****************************************************
      * Method: save
      * Description: Clicks Save button in Code Set Master Detail Form
      *****************************************************/
     save() {
          cy.Click(elems_CodeSetMasterDetail.BTN_SAVE)
          cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Code Set Master Listing')

          // Validate Notification message
          cy.ValidateElementText(elems_Picker.MSG_NOTIFICATION, 'Record has been saved successfully.')
     }

     /*****************************************************
      * Method: cancel
      * Description: Clicks Cancel button in Code Set Master Detail Form
      *****************************************************/
     cancel() {
          cy.Click(elems_CodeSetMasterDetail.BTN_CANCEL)
          cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Code Set Master Listing')
     }

}

export default CodeSetMasterDetail