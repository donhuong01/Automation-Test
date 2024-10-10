import elems_CCDeduction from "../../Elements/FS-017 Data Integration Management/CC Deduction"

class CC_Deduction {

    /*****************************************************
    * Method: CreateNew 
    * Description: This function Click On Create New Button
    *****************************************************/
    CreateNew() {

        cy.Click(elems_CCDeduction.ListingForm.BTN_CREATENEW)

    }
    /*****************************************************
    * Method: Save 
    * Description: This function Click On Save Button
    *****************************************************/
    Save() {

        cy.Click(elems_CCDeduction.DetailForm.BTN_SAVE)

    }

    /*****************************************************
    * Method: ApplyFilter 
    * Description: 
    *****************************************************/
    ApplyFilter(BatchID, Status, BatchRegistrationID) {

        cy.EnterText(elems_CCDeduction.ListingForm.TXT_BATCHID, BatchID)
        cy.EnterText(elems_CCDeduction.ListingForm.TXT_BATCHREGISTRATIONID, BatchRegistrationID)
        cy.SelectDropDownItem(elems_CCDeduction.ListingForm.DRP_STATUS, Status)
        cy.Click(elems_CCDeduction.ListingForm.BTN_SEARCHFILTER)

    }

    /*****************************************************
    * Method: ClickBatchIdLink 
    * Description: 
    *****************************************************/
    ClickBatchIdLink(BatchID) {

        cy.ClickTableLinkItem(elems_CCDeduction.ListingForm.TBL_CCDEDUCTIONLISTING, 'Batch ID', BatchID)

    }
    /*****************************************************
   * Method: SelectTableItem 
   * Description: 
   *****************************************************/
    SelectItem(BatchName) {

        cy.SelectTableItem(elems_CCDeduction.ListingForm.TBL_CCDEDUCTIONLISTING, 'Batch Name', BatchName)

    }
    /*****************************************************
   * Method: VerifyNewItem 
   * Description: 
   *****************************************************/
    VerifyNewItem(BatchName) {

        cy.VerifyTableEntry(elems_CCDeduction.ListingForm.TBL_CCDEDUCTIONLISTING, 'Batch Name', BatchName)

    }
    /*****************************************************
    * Method: CCDeductionInformation 
    * Description: 
    *****************************************************/
    CCDeductionInformation(BatchName, DocumentDate, BatchRegistrationID) {

        cy.EnterText(elems_CCDeduction.DetailForm.TXT_BATCHNAME, BatchName)
        cy.EnterDate(elems_CCDeduction.DetailForm.DATE_DOCUMENTDATE, DocumentDate)
        cy.SelectPickerItem(elems_CCDeduction.DetailForm.PCK_BATCHREGISTRATIONID, BatchRegistrationID)
    }

}
export default new CC_Deduction