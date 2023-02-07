import elems_IBGDeduction from "../../Elements/FS-017 Data Integration Management/IBG Deduction Management"

class IBG_Deduction {

    /*****************************************************
    * Method: Cancel 
    * Description: This function Click On Cancel Button
    *****************************************************/
    Cancel() {

        cy.Click(elems_IBGDeduction.ListingForm.BTN_CANCEL)

    }
    /*****************************************************
    * Method: Save 
    * Description: This function Click On Save Button
    *****************************************************/
    Save() {

        cy.Click(elems_IBGDeduction.DetailForm.BTN_SAVE)

    }
    /*****************************************************
    * Method: CreateNew 
    * Description: This function Click On Create New Button
    *****************************************************/
    CreateNew() {

        cy.Click(elems_IBGDeduction.ListingForm.BTN_CREATENEW)

    }
    /*****************************************************
    * Method: ApplyFilter 
    * Description: 
    *****************************************************/
    ApplyFilter(BatchID, BatchType, SFSType) {

        cy.EnterText(elems_IBGDeduction.ListingForm.TXT_BATCHID, BatchID)
        cy.SelectDropDownItem(elems_IBGDeduction.ListingForm.DRP_BATCHTYPE, BatchType)
        cy.SelectDropDownItem(elems_IBGDeduction.ListingForm.DRP_SFSTYPE, SFSType)
        // cy.SelectDropDownItem(elems_IBGDeduction.ListingForm.DRP_STATUS, Status)
        cy.Click(elems_IBGDeduction.ListingForm.BTN_SEARCHFILTER)

    }
    /*****************************************************
    * Method: SelectTableItem 
    * Description: 
    *****************************************************/
    SelectItem(BatchName) {

        cy.SelectTableItem(elems_IBGDeduction.ListingForm.TBL_IBGDEDUCTIONLISTING, 'Batch Name', BatchName)

    }
    /*****************************************************
    * Method: ClickBatchIdLink 
    * Description: 
    *****************************************************/
    ClickBatchIdLink(BatchID) {

        cy.ClickTableLinkItem(elems_IBGDeduction.ListingForm.TBL_IBGDEDUCTIONLISTING, 'Batch ID', BatchID)
        cy.wait(3000)

    }
    /*****************************************************
    * Method: GenerateIBGOutFile 
    * Description: 
    *****************************************************/
    GenerateIBGOutFile() {

        cy.Click(elems_IBGDeduction.DetailForm.BTN_GENERATEIBGOUTFILE)

    }
    /*****************************************************
    * Method: VerifyItemStatus 
    * Description: 
    *****************************************************/
    VerifyItemStatus(Status) {

        cy.wait(3000)
        cy.VerifyTableEntry(elems_IBGDeduction.ListingForm.TBL_IBGDEDUCTIONLISTING, 'Status', Status)

    }
    /*****************************************************
    * Method: IBGDeductionInformation 
    * Description: 
    *****************************************************/
    IBGDeductionInformation(MembershipExpiryPerd, BatchName, DormantMemberPrd, DocumentDate, BatchType, SFSType) {

        cy.xpath(elems_IBGDeduction.DetailForm.TXT_MEMBERSHIPEXPIRYPERIOD).clear()
        cy.EnterText(elems_IBGDeduction.DetailForm.TXT_MEMBERSHIPEXPIRYPERIOD, MembershipExpiryPerd)
        cy.EnterText(elems_IBGDeduction.DetailForm.TXT_BATCHNAME, BatchName)
        cy.xpath(elems_IBGDeduction.DetailForm.TXT_DORMANTMEMBERPERIOD).clear()
        cy.EnterText(elems_IBGDeduction.DetailForm.TXT_DORMANTMEMBERPERIOD, DormantMemberPrd)
        cy.EnterDate(elems_IBGDeduction.DetailForm.DATE_DOCUMENTDATE, DocumentDate)
        cy.SelectDropDownItem(elems_IBGDeduction.DetailForm.DRP_BATCHTYPE, BatchType)
        cy.SelectDropDownItem(elems_IBGDeduction.DetailForm.DRP_SFSTYPE, SFSType)

    }

}
export default new IBG_Deduction