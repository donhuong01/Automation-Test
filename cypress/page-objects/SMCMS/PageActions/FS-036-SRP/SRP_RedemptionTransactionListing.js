import elems_SRPREDEMPTIONTRANSACTIONLISTING from '../../Elements/FS-036-SRP/SRPRedemptionTransactionListing'
import elems_MemberListing from '../../Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'

class SRP_RedemptionTransactionListing {

    /*****************************************************
        * Method: Coolect Gift
        * Description: This function Click on Collect Gift button
        *****************************************************/
    CollectGift() {

        cy.Click(elems_SRPREDEMPTIONTRANSACTIONLISTING.BTN_COLLECTGIFT)

    }
    /*****************************************************
        * Method: Download Redemption Letter
        * Description: This function Click on Download Redemption Letter button
        *****************************************************/
    DownloadRedemptionLetter() {

        cy.Click(elems_SRPREDEMPTIONTRANSACTIONLISTING.BTN_DOWNLOADREDEMPTIONLETTER)

    }
    /*****************************************************
        * Method: Filters
        * Description: This function Filter form with Category,MemberID and Status
        *****************************************************/
    Filters(Category, MemberID, Status) {

        cy.SelectDropDownItem(elems_SRPREDEMPTIONTRANSACTIONLISTING.DRP_CATEGORY, Category)
        cy.SelectPickerDifferentItemsWait(elems_SRPREDEMPTIONTRANSACTIONLISTING.MEMBERID.PCK_MEMBERID, 2000,
            elems_SRPREDEMPTIONTRANSACTIONLISTING.MEMBERID.TXT_MEMBERID, MemberID,
            elems_SRPREDEMPTIONTRANSACTIONLISTING.BTN_SEARCHFILTERS)
            cy.wait(4000)
        // cy.SelectDropDownItem(elems_SRPREDEMPTIONTRANSACTIONLISTING.DRP_STATUS, Status)
        cy.Click(elems_SRPREDEMPTIONTRANSACTIONLISTING.BTN_SEARCHFILTERS)
        cy.wait(4000)

    }
    /*****************************************************
        * Method: SelectItem
        * Description
        *****************************************************/
    SelectItem(ReceiptNumber) {

        cy.SelectTableItem(elems_SRPREDEMPTIONTRANSACTIONLISTING.TBL_SRPREDEMPTIONLIATING, 'Receipt Number', ReceiptNumber)

    }

    /*****************************************************
        * Method: SelectItem
        * Description
        *****************************************************/
    VerifyStatus(Status) {

        cy.VerifyTableEntry(elems_SRPREDEMPTIONTRANSACTIONLISTING.TBL_SRPREDEMPTIONLIATING, 'Status', Status)

    }
    
    /*****************************************************
        * Method: ClickOnReceiptNumber
        * Description
        *****************************************************/
    ClickOnReceiptNumber(ReceiptNumber) {

        cy.ClickTableLinkItem(elems_SRPREDEMPTIONTRANSACTIONLISTING.TBL_SRPREDEMPTIONLIATING, 'Receipt Number', ReceiptNumber)

    }
    /*****************************************************
        * Method: SelectMemberListItem
        * Description
        *****************************************************/
    SelectMemberListItem(MemberID) {

        cy.EnterText(elems_MemberListing.TXT_MEMBERID, MemberID)
        cy.Click(elems_MemberListing.BTN_SEARCHFILTER)
        cy.ClickTableLinkItem(elems_MemberListing.TBL_MEMBERLISTING, 'Member ID', MemberID)

    }
    /*****************************************************
        * Method: MembershipDrpOpr
        * Description
        *****************************************************/
    MembershipDrpOpr(Operation) {

        cy.SelectDropDownItem(elems_MemberListing.BTNDRP_MEMBERSHIP, Operation)

    }
}
export default new SRP_RedemptionTransactionListing