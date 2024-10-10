import elems_PromotionListing from '../../../Elements/FS-042-Promotion/PromotionListing'
import elems_PageHeader from '../../../Elements/Common/PageHeader'

class PromotionListing {

  /*****************************************************
    * Method: verify PageTitle
    * Description: Verify Promotion Listing Form
    * @param {string} ExpectedPg 
     *****************************************************/
  verifyPageTitle(ExpectedPg) {
    cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)

  }
  /*****************************************************
    * Method: CreateNew
    * Description: This function click on Create New button
     *****************************************************/
  CreateNew() {
    cy.Click(elems_PromotionListing.BTN_CREATENEW)

  }

  /*****************************************************
   * Method:FilterByPromotionName
   * Description: This function filter by Promotion Name
   * @param {string} Value 
    *****************************************************/
  FilterByPromotionName(Value) {
    cy.EnterText(elems_PromotionListing.TXT_PROMOTIONNAME, Value)

  }
  /*****************************************************
   * Method:FilterByBasicType
   * Description: This function filter by Basic Type
   * @param {string} Value 
    *****************************************************/
  FilterByBasicType(Value) {
    cy.SelectDropDownItem(elems_PromotionListing.DRP_BASICTYPE, Value)

  }
  /*****************************************************
   * Method:FilterByPromoCode
   * Description: This function filter by Promo Code
   * @param {string} Value 
    *****************************************************/
  FilterByPromoCode(Value) {
    cy.EnterText(elems_PromotionListing.TXT_PROMOCODE, Value)

  }
  /*****************************************************
   * Method:FilterByPromotionType
   * Description: This function filter by Promotion Type
   * @param {string} Value 
    *****************************************************/
  FilterByPromotionType(Value) {
    cy.SelectDropDownItem(elems_PromotionListing.DRP_PROMOTIONTYPE, Value)

  }
  /*****************************************************
   * Method:FilterByValidityStartDate
   * Description: This function filter by Validity Start Date
   * @param {string} Value 
    *****************************************************/
  FilterByValidityStartDate(Value) {
    cy.SelectDate(elems_PromotionListing.DATE_VALIDITYTESTART, Value)

  }
  /*****************************************************
   * Method:FilterByValidityExpiryDate
   * Description: This function filter by Validity Expiry Date
   * @param {string} Value 
    *****************************************************/
  FilterByValidityExpiryDate(Value) {
    cy.SelectDate(elems_PromotionListing.DATE_VALIDITYEXPIRY, Value)

  }
  /*****************************************************
   * Method:FilterByMinimumAge
   * Description: This function filter by Filter By Minimum Age
   * @param {string} Value 
    *****************************************************/
  FilterByMinimumAge(Value) {
    cy.EnterText(elems_PromotionListing.TXT_MINIMUMAGE, Value)

  }
  /*****************************************************
   * Method:FilterByMaximumAge
   * Description: This function filter by Maximum
   * @param {string} Value 
    *****************************************************/
  FilterByMaximumAge(Value) {
    cy.EnterText(elems_PromotionListing.TXT_MAXIMUMAGE, Value)

  }

  /*****************************************************
   * Method:FilterByStatus
   * Description: This function filter by Status
   * @param {string} Value 
    *****************************************************/
  FilterByStatus(Value) {
    cy.SelectDropDownItem(elems_PromotionListing.DRP_STATUS, Value)

  }
  /*****************************************************
   * Method:FilterByWorkFlowStatus
   * Description: This function filter by Status
   * @param {string} Value 
    *****************************************************/
  FilterByWorkFlowStatus(Value) {
    cy.SelectDropDownItem(elems_PromotionListing.DRP_WORKFLOW, Value)

  }

  /*****************************************************
   * Method:FilterByWorkFlowStatus
   * Description: This function filter by Status
   * @param {string} Value 
    *****************************************************/
  FilterByWorkFlowStatus(Value) {
    cy.SelectDropDownItem(elems_PromotionListing.DRP_WORKFLOW, Value)

  }
  /*****************************************************
   * Method:ClickSearchFilter
   * Description: This function Click on search filter button
    *****************************************************/
  ClickSearchFilter() {
    cy.Click(elems_PromotionListing.BTN_SEARCHFILTER)
    cy.wait(4000)

  }

  /*****************************************************
   * Method:SelectTableItem
   * Description: This function Select Table Item
   * @param {string} Item 
    *****************************************************/
  SelectTableItem(Item) {
    cy.SelectTableItem(elems_PromotionListing.TBL_PROMOTIONLISTING, 'Promotion Name', Item)

  }

  /*****************************************************
   * Method:ClickTableLink
   * Description: This function Click Table Item
    *****************************************************/
  ClickTableLink() {

    cy.Click('(//div[@class="k-widget k-grid"]//table//a)[1]')
    cy.wait(3000)

  }
  /*****************************************************
   * Method:Delete
   * Description: This function Click on Delete
    *****************************************************/
  ClickDelete() {
    cy.Click(elems_PromotionListing.BTN_DELETE)
    cy.Click(elems_PromotionListing.BTN_DELETEPOPUPYES)

  }
  /*****************************************************
   * Method:Terminate
   * Description: This function Click on Terminate
    *****************************************************/
  ClickTerminate() {
    cy.Click(elems_PromotionListing.BTN_TERMINATE)

  }
  /*****************************************************
   * Method:ViewUtilizationTransaction
   * Description: This function Click on View Utilization Transaction
    *****************************************************/
  ClickViewUtilizationTransaction() {

    cy.Click(elems_PromotionListing.BTN_VIEWUTILIZATIONTRANSACTION)

  }

  /*****************************************************
        * Method: VerifyStatusWorkflowStatus
        * Description:
         *****************************************************/
  VerifyStatusWorkflowStatus(Status, WorkflowStatus) {

    cy.VerifyTableEntry(elems_PromotionListing.TBL_PROMOTIONLISTING, 'Status', Status)
    cy.VerifyTableEntry(elems_PromotionListing.TBL_PROMOTIONLISTING, 'Workflow Status', WorkflowStatus)

  }

}
export default new PromotionListing