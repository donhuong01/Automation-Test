import elems_MemberListing from '../../../Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'
import data from '../../../../../fixtures/data'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Alerts from '../../../Elements/Common/Alerts'


class MemberListingPage {

    fillOutFilters({ name, memberID, NRIC }) {
        if (name !== undefined) {
            cy.EnterText(elems_MemberListing.TXT_NAME, name)
        }
        if (memberID !== undefined) {
            cy.EnterText(elems_MemberListing.TXT_MEMBERID, memberID)
        }
        if (NRIC !== undefined) {
            cy.EnterText(elems_MemberListing.TXT_NRIC, NRIC)
        }
        cy.Click(elems_MemberListing.BTN_SEARCHFILTER);
    }


    /********************************* 
   * @param {String} Name 
   * @param {String} ReasonCode
   **********************************/
    VerifyListingItem(Name, ReasonCode) {
        cy.VerifyTableEntry(elems_MemberListing.TBL_MEMBERLISTING,
            'Reason Code', ReasonCode,
            'Name', Name)
    }

    /********************************* 
  * @param {String} Name 
  * @param {String} ReasonCode
  **********************************/
    VerifyMemberInListingItem(Name, ReasonCode) {
        cy.VerifyTableEntry(elems_MemberListing.TBL_MEMBERLISTING,
            'Member/Non-Member', ReasonCode,
            'Name', Name)
    }
    /********************************* 
    * @param membershipOperation
    * values:
    * Transactions 
    * Cards
    * SAFRAPoints
    * 
    **********************************/

    verifyMembershipDRP(membershipOperation) {
        cy.log("---------MEMBERSHIP OPERATION FUNCTION----------------");
        cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING, 'Member ID', data.memberListing.MemberID);
        cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MEMBERSHIP, membershipOperation);

        if (membershipOperation == "Transactions") {
            cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Membership Transaction History");
        }

        else if (membershipOperation == "Cards") {
            cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Uknown at the moment (Cards is disabled as option)");
        }

        else if (membershipOperation == "SAFRAPoints") {
            cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Member SAFRAPoints History");
        }


        this.backToMemberListing();
    }



    /********************************* 
    * @param maintenanceOperation
    * values:
    * Resign
    * Expulsion
    * Decease
    * Suspense
    * Release Suspend Early
    * Reinstate
    * Terminate
    * Deferment
    * Deferment Release
    * Waiver
    * 
    * 
    **********************************/

    verifyMaintenanceDRP(maintenanceOperation) {
        cy.log("---------MAINTENANCE OPERATION FUNCTION----------------");

        cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING, 'Member ID', data.memberListing.MemberID);
        cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE, maintenanceOperation);

        if (maintenanceOperation == "Resign") {
            cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Membership Resignation Request");
        }
        else if (maintenanceOperation == "Expulsion") {
            this.verifyConfirmationPopup("Membership Expulsion Confirmation", "Are you sure you want to expel the member?");
        }
        else if (maintenanceOperation == "Decease") {
            this.verifyConfirmationPopup("Membership Deceased Confirmation", 'Are you sure you want to "Deceased" the member?');
        }
        else if (maintenanceOperation == "Suspense") {
            cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Membership Suspension Request");
        }
        else if (maintenanceOperation == "Release Suspend Early") {
            //Verify Error Message
        }
        else if (maintenanceOperation == "Reinstate") {
            //Verify Error Message
        }
        else if (maintenanceOperation == "Terminate") {
            this.verifyConfirmationPopup("Membership Termination Confirmation", "Are you sure you want to terminate the selected members?");
        }
        else if (maintenanceOperation == "Deferment") {
            cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Membership Deferment Request");
        }
        else if (maintenanceOperation == "Deferment Release") {
            cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Membership Deferment Release Request");
        }
        else if (maintenanceOperation == "Waiver") {
            cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Batch Membership Waiver Request");
        }

        cy.wait(2000);
        this.backToMemberListing();
    }

    verifyPaymentDRP(elementToClick) {
        this.backToMemberListing();
    }

    backToMemberListing() {
        //URL to Member Listing page.
        cy.visit('https://uat-smcms.safra.sg/membership/memberlist');
        cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Member Listing");
    }

    paginateTable(operation) {
        if (operation === 'next') {
            cy.NavigateTablePage(elems_MemberListingPage.TBL_MEMBERLISTING, Const.TABLE_NAVI.NEXT);
        }
        else if (operation === "previous") {
            cy.NavigateTablePage(elems_MemberListingPage.TBL_MEMBERLISTING, Const.TABLE_NAVI.PREV);
        }

        else if (operation === "first") {
            cy.NavigateTablePage(elems_MemberListingPage.TBL_MEMBERLISTING, Const.TABLE_NAVI.LAST);
        }

        else if (operation === 'last') {
            cy.NavigateTablePage(elems_MemberListingPage.TBL_MEMBERLISTING, Const.TABLE_NAVI.FIRST);
        }
    }


    verifyConfirmationPopup(title, content) {

        // Verify Window Title
        if (title !== undefined) {
            cy.ValidateElementText(elems_Alerts.LBL_POPUPTITLE, title)
        }

        // Verify Window Title
        if (content !== undefined) {
            cy.ValidateElementText(elems_Alerts.LBL_POPUPCONTENT, content)
        }

    }


}

export default MemberListingPage;