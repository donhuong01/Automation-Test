import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_CodeTypeDetail from '../../../Elements/Admin/FS004_Admin-Settings/CodeTypeDetail'
import elems_Picker from '../../../Elements/Common/Picker'

class CodeTypeDetail{

    /*****************************************************
      * Method: Verify page title
      * Description: This function verifies the page title
      * @param {string} expectedPg
    *****************************************************/

     verifyPageTitle(expectedPg)

    {

      cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPg)

    }

    /*****************************************************
      * Method: Enter Name
      * Description: Entering text in the Name field
      * @param {string} Name

    *****************************************************/
      FillOutNameField(Name)

      {
        cy.xpath(elems_CodeTypeDetail.TXT_NAME).clear()
        cy.EnterText(elems_CodeTypeDetail.TXT_NAME, Name)
  
      }

    /*****************************************************
      * Method: Cancel Belong Under
      * Description: Fill out the code type details form and click cancel button
      * @param {string} CodeType

    *****************************************************/
      CancelBelongUnder(CodeType)

      {
  
           // cy.SelectPickerFilter(
            cy.Click(elems_CodeTypeDetail.PCK_BELONGSUNDER)
            //elems_CodeTypeDetail.SelectCodeType.TBL_CODETYPE,
            cy.EnterText(elems_CodeTypeDetail.SelectCodeType.TXT_CODETYPE,CodeType)
  
            cy.Click(elems_CodeTypeDetail.SelectCodeType.BTN_SEARCHFILTER)
            cy.wait(15000)
  
            cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, "Code Type", CodeType)
           
           cy.Click(elems_Picker.BTN_CANCEL)
      }

    /*****************************************************
      * Method: Search  Belong Under
      * Description: Fill out the code type details form and click Select code type
      * @param {string} CodeType
    *****************************************************/
      SearchBelongUnder(CodeType)

      {
        // cy.SelectPickerFilter(
          cy.Click(elems_CodeTypeDetail.PCK_BELONGSUNDER)
          //elems_CodeTypeDetail.SelectCodeType.TBL_CODETYPE,
          cy.EnterText(elems_CodeTypeDetail.SelectCodeType.TXT_CODETYPE,CodeType)

          cy.Click(elems_CodeTypeDetail.SelectCodeType.BTN_SEARCHFILTER)
          cy.wait(5000)

          cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, "Code Type", CodeType)
         
         cy.Click(elems_Picker.BTN_SELECT)
          //"Code Type", CodeType,
          //elems_CodeTypeDetail.SelectCodeType.BTN_SELECT
      
        // )
  
      }
    /*****************************************************
      * Method: Save
      * Description: This function saves the code type details form
    *****************************************************/
     Save()

     {
       cy.Click(elems_CodeTypeDetail.BTN_SAVE)
 
     }

    /*****************************************************
     * Method: Cancel
     * Description: This function Cancels the code type details form
    *****************************************************/
     Cancel()
     {
      cy.Click(elems_CodeTypeDetail.BTN_CANCEL)

     }
}
export default new CodeTypeDetail