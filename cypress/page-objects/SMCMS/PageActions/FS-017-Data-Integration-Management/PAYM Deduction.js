import elems_PAYMDeduction from "../../Elements/FS-017 Data Integration Management/PAYM Deduction"

class PAYM_Deduction {

    /*****************************************************
    * Method: CreateNew 
    * Description: This function Click On Create New Button
    *****************************************************/
    CreateNew() {

        cy.Click(elems_PAYMDeduction.ListingForm.BTN_CREATENEW)

    }
    /*****************************************************
    * Method: Save 
    * Description: This function Click On Save Button
    *****************************************************/
    Save() {

        cy.Click(elems_PAYMDeduction.DetailForm.BTN_SAVE)
        cy.wait(3000)

    }

    /*****************************************************
    * Method: ApplyFilter 
    * Description: 
    *****************************************************/
    ApplyFilter(BatchID, Status) {

        cy.EnterText(elems_PAYMDeduction.ListingForm.TXT_BATCHID, BatchID)
        cy.SelectDropDownItem(elems_PAYMDeduction.ListingForm.DRP_STATUS, Status)
        cy.Click(elems_PAYMDeduction.ListingForm.BTN_SEARCHFILTER)

    }

    /*****************************************************
    * Method: ClickBatchIdLink 
    * Description: 
    *****************************************************/
    ClickBatchIdLink(BatchID) {

        cy.ClickTableLinkItem(elems_PAYMDeduction.ListingForm.TBL_PAYMDEDUCTIONLISTING, 'Batch ID', BatchID)

    }
    /*****************************************************
    * Method: VerifyNewItem 
    * Description: 
    *****************************************************/
    VerifyNewItem(BatchName) {

        cy.VerifyTableItem(elems_PAYMDeduction.ListingForm.TBL_PAYMDEDUCTIONLISTING, 'Batch Name', BatchName)

    }
    /*****************************************************
    * Method: PAYMDeductionInformation 
    * Description: 
    *****************************************************/
    PAYMDeductionInformation(BatchName, DocumentDate) {

        cy.EnterText(elems_PAYMDeduction.DetailForm.TXT_BATCHNAME, BatchName)
        cy.EnterDate(elems_PAYMDeduction.DetailForm.DATE_DOCUMENTDATE, DocumentDate)

    }

}
export default new PAYM_Deduction