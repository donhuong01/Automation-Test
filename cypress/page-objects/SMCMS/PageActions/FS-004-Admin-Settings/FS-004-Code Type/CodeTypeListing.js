import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_CodeTypeListing from '../../../Elements/Admin/FS004_Admin-Settings/CodeTypeListing'
import elems_Alerts from '../../../Elements/Common/Alerts'
class CodeTypeListingForm{

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
     * Method: Filter Code type
     * Description: This function filter and verify code type
     * @param {string} CodeType

    *****************************************************/

       //Filter by code type
       codeSetMasterListingFilterbyCodeType(CodeType)
       {

        cy.EnterText(elems_CodeTypeListing.TXT_MEMBERID, CodeType)
        cy.Click('//button[@form="formFiltersCodeType"]')
        //cy.wait(5000)
        cy.TickSpecificTableItem(CodeType)
        // cy.SelectTableItem(
        //   elems_CodeTypeListing.TBL_CODETYPE,
        //        'Code Type', CodeType,
        // )

       }

    /*****************************************************
     * Method: Create New
     * Description: This function click on create new button in code type listing form
     * @param {string} expectedPg

    *****************************************************/
      CreateNew(expectedPg)
      {
     
        cy.Click(elems_CodeTypeListing.BTN_CREATENEW, expectedPg)

      }
    /*****************************************************
     * Method: Delete
     * Description: This function click on delete button in code type listing form
    *****************************************************/
      Delete()
      {     
        cy.Click(elems_CodeTypeListing.BTN_DELETE)
        cy.Click(elems_Alerts.BTN_Delete)
        cy.ValidateElementText(elems_Alerts.DELETE_NOTIFICATION, 'Record has been deleted successfully.')
      }
    

}
export default new CodeTypeListingForm