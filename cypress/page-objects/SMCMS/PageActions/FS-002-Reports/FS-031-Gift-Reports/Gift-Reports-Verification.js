import elems_CollectionSettlement from "../../../Elements/FS-002 Reports/FS-031-Gift/CollectionSettlement";
import elems_CounterCollectionSettlement from "../../../Elements/FS-002 Reports/FS-031-Gift/CounterCollectionSettlement";

class Reports_Gifts{
 /*****************************************************
    * Method: Checking functionallity and Verification on 
               Collection Settlement Listing
     * Description: This function verifies the page
*****************************************************/
verifyCollectionSettlement(expectedPg){
    cy.visit('/report?reportId=ReportMembershipGiftRedemption.CollectionSettlement')
    cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
    cy.wait(2000)
    cy.ValidateElementText(elems_CollectionSettlement.LBL_PAGE, expectedPg)

    cy.Click(elems_CollectionSettlement.BTN_GENERATE)
        cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_CollectionSettlement.BTN_EXPORT)
}

 /*****************************************************
    * Method: Checking functionallity and Verification on 
              Counter Collection Settlement Listing
     * Description: This function verifies the page
*****************************************************/
verifyCounterCollectionSettlement(expectedPg){
    cy.visit('/report?reportId=ReportMembershipGiftRedemption.CounterCollectionSettlementByPaymentMode')
    cy.wait(2000)
    cy.ValidateElementText(elems_CounterCollectionSettlement.LBL_PAGE, expectedPg)

    cy.Click(elems_CounterCollectionSettlement.BTN_GENERATE)
        cy.wait(5000)
        //cy.ValidateElementText('//div[@data-id="table1_1"]')
        //cy.Click(elems_CounterCollectionSettlement.BTN_EXPORT)
}

}
 
export default Reports_Gifts