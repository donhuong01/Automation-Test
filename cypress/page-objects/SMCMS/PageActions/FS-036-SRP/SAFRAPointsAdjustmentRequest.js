import elems_SRPPointsAdjustmentRequest from '../../Elements/FS-036-SRP/SAFRAPointsAdjustmentRequest'
import elems_MemberListing from '../../Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'
import elems_PendingTaskListing from '../../Elements/Admin/FS004_Admin-Settings/PendingTaskListing'
import elems_PendingTaskDetails from '../../Elements/Admin/FS004_Admin-Settings/PendingTaskDetail'
import Picker from '../../Elements/Common/Picker'
import Table from '../../../../support/libraries/lib_table'
import elems_PageHeader from '../../Elements/Common/PageHeader'
import elems_SRPPointsTransaction from '../../Elements/FS-036-SRP/SAFRAPointsAdjustmentTransactionListing'

class SRP_PromotionListing {

    /*****************************************************
     * Method: Request 
     * Description: This function click on Request button
     *****************************************************/
    Request() {

        cy.Click(elems_SRPPointsAdjustmentRequest.BTN_REQUEST)
        cy.VerifyElementText(Picker.MSG_NOTIFICATION, "Request has been submitted successfully.")
        cy.wait(8000)

    }
    /*****************************************************
     * Method: Submit 
     * Description: This function click on Submit button
     *****************************************************/
    Submit() {

        cy.Click(elems_PendingTaskDetails.BTN_SUBMIT)
       
        cy.wait(8000)

    }
    /*****************************************************
     * Method: Cancel 
     * Description: This function click on Cancel button
     *****************************************************/
    Cancel() {

        cy.Click(elems_SRPPointsAdjustmentRequest.BTN_CANCEL)

    }
    /*****************************************************
    * Method: SelectMemberListItem
    * Description
    *****************************************************/
    SelectMemberListItem(MemberID) {

        cy.EnterText(elems_MemberListing.TXT_MEMBERID, MemberID)
        cy.Click(elems_MemberListing.BTN_SEARCHFILTER)
        cy.wait(3000)
        cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING, 'Member ID', MemberID)

    }
    /*****************************************************
    * Method: MembershipDropDownOperation
    * Description This function select from Membership dropdown
    *****************************************************/
    MembershipDropDownOperation(Operation) {

        cy.SelectDropDownItem(elems_MemberListing.BTNDRP_MEMBERSHIP, Operation)
        cy.wait(5000)

    }
    /*****************************************************
    * Method: SRPDropDownOperation
    * Description
    *****************************************************/
    SRPDropDownOperation(Operation) {

        cy.SelectDropDownItem(elems_MemberListing.BTNDRP_SRP, Operation)
        cy.wait(5000)

    }
    /*****************************************************
     * Method: VerifyMemberInfoInRequestForm 
     * Description: This function Verifies member information in SAFRA Points Adjustment Request Form
     * @param {string} MemberID
     * @param {string} MemberName
    *****************************************************/
    VerifyMemberInfoInRequestForm(MemberID) {

        cy.VerifyElementText(elems_SRPPointsAdjustmentRequest.LBL_MEMBERID, MemberID)

    }

    /*****************************************************
     * Method: FillOutSAFRAPointAdjRequestForm 
     * Description: This function fill out information in SAFRA Points Adjustment Request Form
     * @param {string} SourceChannelName
     * @param {string} VendorID
     * @param {string} EDCTerminal
     * @param {string} Type
     * @param {string} Remark
     * @param {string} Amount
     * @param {string} ApplyPromotion
    *****************************************************/
    FillOutSAFRAPointAdjRequestForm(SourceChannelName, VendorID, EDCTerminal, Type,
        Remark, Amount, ApplyPromotion) {

            if(SourceChannelName !== undefined){

                cy.Click(elems_SRPPointsAdjustmentRequest.PCK_SOURCECHANNEL)
                cy.EnterText(elems_SRPPointsAdjustmentRequest.TXT_NAME, SourceChannelName)
                // cy.SelectPickerDifferentItems(elems_SRPPointsAdjustmentRequest.PCK_SOURCECHANNEL,
                //     elems_SRPPointsAdjustmentRequest.TXT_NAME,  SourceChannelName)
                cy.Click(elems_SRPPointsAdjustmentRequest.BTN_SEARCHFILTER);

                new Table().selectTableItem(Picker.TBL_PICKERITEMS, 'FIRST')
                cy.xpath(Picker.BTN_SELECT).first().click();
            }
            if(VendorID !== undefined){
                cy.Click(elems_SRPPointsAdjustmentRequest.PCK_VENDORID)
                cy.EnterText(elems_SRPPointsAdjustmentRequest.TXT_VENDORID, VendorID)
                // cy.SelectPickerDifferentItems(elems_SRPPointsAdjustmentRequest.PCK_VENDORID,
                //     elems_SRPPointsAdjustmentRequest.TXT_VENDORID, VendorID)
                cy.Click(elems_SRPPointsAdjustmentRequest.BTN_SEARCHFILTER);

                new Table().selectTableItem(Picker.TBL_PICKERITEMS, 'FIRST')
                cy.xpath(Picker.BTN_SELECT).first().click();
            }
            if(EDCTerminal !== undefined){
                cy.Click(elems_SRPPointsAdjustmentRequest.PCK_EDCTERMINALID)
                cy.EnterText(elems_SRPPointsAdjustmentRequest.TXT_TERMINALID, EDCTerminal)
                // cy.SelectPickerDifferentItems(elems_SRPPointsAdjustmentRequest.PCK_EDCTERMINALID,
                //     elems_SRPPointsAdjustmentRequest.TXT_TERMINALID, EDCTerminal)
                cy.Click(elems_SRPPointsAdjustmentRequest.BTN_SEARCHFILTER);

                new Table().selectTableItem(Picker.TBL_PICKERITEMS, 'FIRST')
                cy.xpath(Picker.BTN_SELECT).first().click();
            }
            if(Type !== undefined){
                cy.SelectDropDownItem(elems_SRPPointsAdjustmentRequest.DRP_TYPE, Type)
            }
            if(Remark !== undefined){
                cy.EnterText(elems_SRPPointsAdjustmentRequest.TXT_REMARKS, Remark)

            }
            if(Amount !== undefined){
                cy.EnterText(elems_SRPPointsAdjustmentRequest.TXT_AMONUT, Amount)

            }
            if(ApplyPromotion !== undefined){
                cy.Click(elems_SRPPointsAdjustmentRequest.CHK_PROMOTION )

            }

    }
    /*****************************************************
     * Method: ApprovalWorkflowForSRP 
     * Description: This function performs approval workflow for SRP Adjustment
     * @param {string} 
     * @param {string} 
    *****************************************************/
    ApprovalWorkflowForSRPAdjustment(ApprovalOutcome, Remark) {

            cy.visit("/admin/pendingTaskList")
            cy.wait(10000)
            cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Pending Task Listing")
            cy.EnterText(elems_PendingTaskListing.TXT_TASKID, "M-SPR")
            cy.EnterText(elems_PendingTaskListing.TXT_WORKFLOWNAME, "SRP Adjustment Approval Workflow")
            cy.Click(elems_PendingTaskListing.BTN_SEARCH)
            cy.wait(5000)

            cy.Click('(//h2[text()="Pending Task Listing"]/ancestor::div//table//a)[1]')
            cy.wait(3000)

            cy.SelectDropDownItem(elems_PendingTaskDetails.DRP_APPROVALOUTCOME, ApprovalOutcome)
            cy.EnterText(elems_PendingTaskDetails.TXTAREA_REMARK, Remark)
    
        }
    /*****************************************************
     * Method: VerifyAwardedSAFRAPoints 
     * Description: This function verifies SAFRA Points in transaction history
     * @param {string} MemberID
     * @param {string} TransactionType
    *****************************************************/
    VerifyAwardedSAFRAPoints(MemberID, TransactionType) {

           cy.SelectPickerFilter(elems_SRPPointsTransaction.PCK_MEMBERID,
            elems_SRPPointsTransaction.TXT_MEMBERID, MemberID, elems_SRPPointsTransaction.BTN_SEARCHFILTER)

           cy.VerifyTableEntry(elems_SRPPointsTransaction.TBL_MEMBERSAFRAPOINTSTRANSACTION, 
            "Member ID", MemberID,
            "Transaction Type", TransactionType)

           cy.VerifyTableEntry(elems_SRPPointsTransaction.TBL_MEMBERSAFRAPOINTSTRANSACTION,             
            "Transaction Type", TransactionType),
            "Member ID", MemberID

    
        }


    

}
export default new SRP_PromotionListing