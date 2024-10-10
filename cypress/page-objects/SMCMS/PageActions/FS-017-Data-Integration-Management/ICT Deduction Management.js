import elems_ICTDEDUCTION from "../../Elements/FS-017 Data Integration Management/ICT Deduction Management"

class ICT_Deduction {

    /*****************************************************
    * Method: Cancel 
    * Description: This function Click On Cancel Button
    *****************************************************/
    Cancel() {

        cy.Click(elems_ICTDEDUCTION.ListingForm.BTN_CANCEL)

    }
    /*****************************************************
    * Method: Save 
    * Description: This function Click On Save Button
    *****************************************************/
    Save() {

        cy.Click(elems_ICTDEDUCTION.DetailForm.BTN_SAVE)
        cy.wait(2000)

    }
    /*****************************************************
    * Method: CreateNew 
    * Description: This function Click On Create New Button
    *****************************************************/
    CreateNew() {

        cy.Click(elems_ICTDEDUCTION.ListingForm.BTN_CREATENEW)

    }
    /*****************************************************
    * Method: ApplyFilter 
    * Description: 
    *****************************************************/
    ApplyFilter(BatchID, Status) {

        cy.EnterText(elems_ICTDEDUCTION.ListingForm.TXT_BATCHID, BatchID)
        cy.SelectDropDownItem(elems_ICTDEDUCTION.ListingForm.DRP_STATUS, Status)
        cy.Click(elems_ICTDEDUCTION.ListingForm.BTN_SEARCHFILTER)

    }
    /*****************************************************
    * Method: SelectTableItem 
    * Description: 
    *****************************************************/
    SelectItem(BatchName) {

        cy.SelectTableItem(elems_ICTDEDUCTION.ListingForm.TBL_ICTDEDUCTIONLISTING, 'Batch Name', BatchName)

    }
    /*****************************************************
    * Method: ClickBatchIdLink 
    * Description: 
    *****************************************************/
    ClickBatchIdLink(BatchID) {

        cy.ClickTableLinkItem(elems_ICTDEDUCTION.ListingForm.TBL_ICTDEDUCTIONLISTING, 'Batch ID', BatchID)

    }
    /*****************************************************
    * Method: VerifyNewItem 
    * Description: 
    *****************************************************/
    VerifyNewItem(BatchName) {

        cy.VerifyTableEntry(elems_ICTDEDUCTION.ListingForm.TBL_ICTDEDUCTIONLISTING, 'Batch Name', BatchName)

    }
    /*****************************************************
    * Method: ICTDeductionInformation 
    * Description: 
    *****************************************************/
    ICTDeductionInformation(MembershipExpiryPerd, BatchName, DormantMemberPrd, DocumentDate) {

        cy.xpath(elems_ICTDEDUCTION.DetailForm.TXT_MEMBERSHIPEXPIRYPERIOD).clear()
        cy.EnterText(elems_ICTDEDUCTION.DetailForm.TXT_MEMBERSHIPEXPIRYPERIOD, MembershipExpiryPerd)
        cy.EnterText(elems_ICTDEDUCTION.DetailForm.TXT_BATCHNAME, BatchName)
        cy.xpath(elems_ICTDEDUCTION.DetailForm.TXT_DORMANTMEMBERPERIOD).clear()
        cy.EnterText(elems_ICTDEDUCTION.DetailForm.TXT_DORMANTMEMBERPERIOD, DormantMemberPrd)
        cy.EnterDate(elems_ICTDEDUCTION.DetailForm.DATE_DOCUMENTDATE, DocumentDate)

    }

}
export default new ICT_Deduction