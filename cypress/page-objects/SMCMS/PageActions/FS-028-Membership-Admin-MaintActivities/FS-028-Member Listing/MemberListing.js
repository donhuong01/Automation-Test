import elems_MemberListing from "../../../Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing";
import data from "../../../../../fixtures/Data_Module/FS-028-Membership-Admin-MainActivities/028-data"
import elems_PageHeader from "../../../Elements/Common/PageHeader";
import elems_Alerts from "../../../Elements/Common/Alerts";
class MemberListingPage {

    fillOutFilters(Name, NRIC, ReasonCode) {
        if (Name !== undefined || NRIC !== undefined || ReasonCode !== undefined ) {
            cy.EnterText(elems_MemberListing.TXT_NAME, Name)
            cy.EnterText(elems_MemberListing.TXT_NRIC, NRIC)
            cy.SelectDropDownItem(elems_MemberListing.DRP_STATUSREASONCODE, ReasonCode)
        }

        cy.Click(elems_MemberListing.BTN_SEARCHFILTER);
        cy.wait(15000)
        cy.VerifyTableEntry(elems_MemberListing.TBL_MEMBERLISTING, "Name", Name)
        cy.VerifyTableEntry(elems_MemberListing.TBL_MEMBERLISTING, "NRIC (Last 4 digits)", NRIC)
        cy.VerifyTableEntry(elems_MemberListing.TBL_MEMBERLISTING, "Reason Code", ReasonCode)

    }

    FilterByMemberID(MemberID) {
        if (MemberID !== undefined) {
            cy.EnterText(elems_MemberListing.TXT_MEMBERID, MemberID)
        }

        cy.Click(elems_MemberListing.BTN_SEARCHFILTER);
        cy.wait(15000)
        cy.VerifyTableEntryDeferment(elems_MemberListing.TBL_MEMBERLISTING, "Member ID", MemberID)
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

    /*****************************************************
     * Method: selectMaintenanceDRP
     * Description: Select Item and Maintenance Operation
     *
     * @param {string} memberId Member ID of Item to be selected
     * @param {string} maintenanceOperation Maintenance Item
     * @param {string} confirmationCheckbox Checkbox in Popup
     *****************************************************/
     selectMaintenanceDRP({memberId, maintenanceOperation, confirmationCheckbox}) {
        cy.log("---------MAINTENANCE OPERATION FUNCTION----------------");

        if(memberId !== undefined && maintenanceOperation !== undefined){

            // Select Member ID
            cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING, 'Member ID', memberId);

            // Click Maintenance Operation
            cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE, maintenanceOperation);

            if (maintenanceOperation == "Resign") {
                cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Membership Resignation Request");
            }

            else if (maintenanceOperation == "Expulsion") {
                this.verifyConfirmationPopup("Membership Expulsion Confirmation", "Are you sure you want to expel the member?");

                if(confirmationCheckbox.toUpperCase() === "YES" && confirmationCheckbox !== undefined){
                    cy.TickCheckBox(elems_Alerts.CHK_TERMINATEDEPENDENTMEM, 'check')
                }
            }

            else if (maintenanceOperation == "Decease") {
                this.verifyConfirmationPopup("Membership Deceased Confirmation", 'Are you sure you want to "Deceased" the member?');
                
                if(confirmationCheckbox !== undefined){
                    if(confirmationCheckbox.toUpperCase() == "YES"){
                        cy.TickCheckBox(elems_Alerts.CHK_TERMINATEDEPENDENTMEM, 'check')
                    }
                }
            }

            else if (maintenanceOperation == "Suspense") {
                cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Membership Suspension Request");
            }

            else if (maintenanceOperation == "Release Suspend Early") {
                //Verify Error Message
            }
            else if (maintenanceOperation == "Reinstate") {
                this.verifyConfirmationPopup("Membership Reinstatement Confirmation", "Are you sure you want to reinstate the member?");
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
        }
        
        // Error Handling
        if(memberId === undefined 
            && maintenanceOperation === undefined 
            ){
                throw new Error("Member Listing  Error!!./n\
                                Please provide at both arguments.")
        }
    }

}

export default MemberListingPage;