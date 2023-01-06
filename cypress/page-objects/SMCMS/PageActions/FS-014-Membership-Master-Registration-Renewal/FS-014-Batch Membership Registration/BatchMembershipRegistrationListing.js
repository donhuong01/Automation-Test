import elems_PageHeader from "../../../Elements/Common/PageHeader"
import elems_BatchMembershipRegistrationListing from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/BatchMembershipRegistrationListing'
import elems_MembershipTenureSelection from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/MembershipTenureSelection'
import elems_Alerts from '../../../Elements/Common/Alerts'

class BatchMembershipRegistrationListing {


     /*****************************************************
          * Method: Verify page title
          * Description: This function verifies the page title
          * @param {string} expectedPg
 
     *****************************************************/

     verifyPageTitle(expectedPg) {

          cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPg)

     }

     /*****************************************************
          * Method: FilterByBatchID
          * Description: This function filter values by BatchID
          * @param {string} BatchID
 
     *****************************************************/
     FilterByBatchID(BatchID) {
          cy.EnterText(elems_BatchMembershipRegistrationListing.TXT_BATCHID, BatchID)
     }
     /*****************************************************
          * Method: FilterByBatchType
          * Description: This function filter values by Batch type
          * @param {string} BatchType
 
     *****************************************************/
     FilterByBatchType(BatchType) {
          cy.SelectDropDownItem(elems_BatchMembershipRegistrationListing.DRP_BATCHTYPE, BatchType)
     }
     /*****************************************************
     
     /*****************************************************
          * Method: FilterByBatchName
          * Description: This function filter values by Batch Name
          * @param {string} BatchName
 
     *****************************************************/
     FilterByBatchName(BatchName) {
          cy.EnterText(elems_BatchMembershipRegistrationListing.TXT_BATCHNAME, BatchName)
     }
     /*****************************************************
          * Method: FilterByStatus
          * Description: This function filter values by Status
          * @param {string} Status
 
     *****************************************************/
     FilterByStatus(Status) {
          cy.SelectDropDownItem(elems_BatchMembershipRegistrationListing.DRP_STATUS, Status)
     }
     /*****************************************************
          * Method: ClickSeacrhFilters
          * Description: This function Click Search Filters Buttun
     *****************************************************/
     ClickSeacrhFilters() {
          cy.Click(elems_BatchMembershipRegistrationListing.BTN_SEARCHFILTERS)
          cy.wait(3000)
     }
     /*****************************************************
          * Method: VerifyTableValue
          * Description: This function 
          * @param {string} TargetColumn
          * @param {string} ExpectedValue
 
     *****************************************************/
     VerifyTableValue(TargetColumn, ExpectedValue) {
          cy.VerifyTableEntry(elems_BatchMembershipRegistrationListing.TBL_BATCHMEMSHIPREGLISTING,
               TargetColumn, ExpectedValue,
               'Membership Registration Tenure', '2 YRS CC')
     }

     /*****************************************************
          * Method: VerifyNewlyCreatedItem
          * Description: This function verify newly created item in table
          * @param {string} TargetValue
          * @param {string} rowReference
 
     *****************************************************/
     VerifyNewlyCreatedItem(TargetValue, rowReference) {
          cy.VerifyTableEntry(elems_BatchMembershipRegistrationListing.TBL_BATCHMEMSHIPREGLISTING,
               'Batch Name', TargetValue,
               'Payment Mode', rowReference,


          )
     }

     /*****************************************************
          * Method: SelecTableItam
          * Description: This function Select table item
          * @param {string} TargetValue
          * @param {string} rowReference
     *****************************************************/
     SelecTableItam(TargetValue, rowReference) {
          cy.SelectTableItem(elems_BatchMembershipRegistrationListing.TBL_BATCHMEMSHIPREGLISTING,
               'Batch Type', TargetValue,
               'Status', rowReference,

          )
     }

     /*****************************************************
          * Method: createNew
          * Description: This function Click create new button
     *****************************************************/
     createNew() {
          cy.Click(elems_BatchMembershipRegistrationListing.BTN_CREATENEW)
     }

     /*****************************************************
          * Method: createNew
          * Description: This function Click delete button
     *****************************************************/
     delete() {
          cy.Click(elems_BatchMembershipRegistrationListing.BTN_DELETE)
          cy.Click(elems_Alerts.BTN_YES)
          //   cy.Click(elems_Alerts.BTN_YES)
     }

     /*****************************************************
          * Method: DeleteTableEntry
          * Description: This function delete table entry
     *****************************************************/
     DeleteTableEntry() {
          cy.DeleteTableItem(elems_BatchMembershipRegistrationListing.TBL_BATCHMEMSHIPREGLISTING,
               'Batch Type', 'Interest Group'),
               'Batch ID', '28c462fe-040f-4b5d-2c29-08da21d6382c'

     }

     /*****************************************************
          * Method: ClickOnNewlyCreatedItem
          * Description: This function click newly created table entry
     *****************************************************/
     ClickOnNewlyCreatedItem() {

          cy.Click('//h2[text()="Batch Membership Registration Listing"]/ancestor::div//table//a')
     }

     /*****************************************************
     * Method: MembershipPrincipalTenureSelection
     * Description: Add Tenure Selection to Principal Member
     *
     * @param {string} TenureDuration Tenure Selection
     *****************************************************/
     MembershipPrincipalTenureSelection(TenureDuration) {

          // Set Tenure Selection
          if (TenureDuration !== undefined) {

               //     cy.TenureSelection(elems_MembershipTenureSelection.Principal.TBL_PRINCIPAL,
               //         ColumnValue,  tenureSelection)
               const locator = elems_MembershipTenureSelection.Principal.TBL_PRINCIPAL
               cy.Click(`${locator}//tr[contains(@class, "k-master-row")]//td//following-sibling::td//span[@class="k-dropdown-wrap"]`)
               cy.Click(`//li[text()="${TenureDuration}"]`)
          }

     }

     /*****************************************************
     * Method: principalTenureSelection
     * Description: Add Tenure Selection to Principal Member
     *
     * @param {string} TenureDuration Tenure Selection
     * @param {string} ColumnValue Column value
     *****************************************************/
     principalTenureSelection(TenureDuration, ColumnValue) {

          // Set Tenure Selection
          if (TenureDuration !== undefined) {

               cy.TenureSelection(elems_MembershipTenureSelection.Principal.TBL_PRINCIPAL,
                    ColumnValue, TenureDuration)
               // const locator = elems_MembershipTenureSelection.Principal.TBL_PRINCIPAL
               // cy.Click(`${locator}//tr[contains(@class, "k-master-row")]//td//following-sibling::td//span[@class="k-dropdown-wrap"]`)
               // cy.Click(`//li[text()="${TenureDuration}"]`)
               // cy.xpath('//div[text()="Principal"]/parent::div//table//tr//td//span[@class="k-widget k-dropdown"]').click()
               // cy.wait(1000)
               // cy.Click(`//li[text()="${TenureDuration}"]`)
          }

     }

}

export default new BatchMembershipRegistrationListing

