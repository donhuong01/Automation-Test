import elems_E1GymMembershipListing from '../../Elements/FS-015-E1-Gym-Membership/E1 Gym Membership Listing'

class E1GymMembershipListing {

    /*****************************************************
     * Method: Submit
     * Description: Click on Submit Button
    *****************************************************/
    Submit() {

        cy.Click('//button[text()="Submit"]')
        cy.wait(5000)

    }
    /*****************************************************
     * Method: ViewTransactionHistory
     * Description: Click on View Transaction History
    *****************************************************/
    ViewTransactionHistory() {

        cy.Click(elems_E1GymMembershipListing.BTN_VIEWTRANSACTIONHISTORY)

    }
    /*****************************************************
     * Method: Maintenace
     * Description: Click on View Transaction History
    *****************************************************/
    Maintenace(Maintenace) {

        cy.SelectDropDownItem(elems_E1GymMembershipListing.DRP_MAINTENANCE, Maintenace)
        cy.wait(5000)

    }
    /*****************************************************
     * Method: VerifyItemStatus
     * Description: 
    *****************************************************/
    VerifyItemStatus(E1GymMembershipID, Status) {

        cy.EnterText(elems_E1GymMembershipListing.TXT_E1GYMMEMBERSHIPID, E1GymMembershipID)
        cy.Click(elems_E1GymMembershipListing.BTN_SEARCHFILTERS)
        cy.wait(3000)
        cy.VerifyTableEntry(elems_E1GymMembershipListing.TBL_E1GYMMEMBERSHIPLISTING, 'Status', Status)
        cy.SelectTableItem(elems_E1GymMembershipListing.TBL_E1GYMMEMBERSHIPLISTING, 'E1 Gym Membership ID', E1GymMembershipID)

    }
    /*****************************************************
     * Method: StatusMemberID
     * Description: 
    *****************************************************/
    StatusMemberID(Memberid, Status) {

        // cy.EnterText(elems_E1GymMembershipListing.TXT_SAFRAMEMBERSHIPID, Memberid)
        // cy.Click(elems_E1GymMembershipListing.BTN_SEARCHFILTERS)
        cy.VerifyTableEntry(elems_E1GymMembershipListing.TBL_E1GYMMEMBERSHIPLISTING, 'Status', Status)

    }
    /*****************************************************
     * Method: FiterWithCustomerName
     * Description: This funstion Filter Table with Customer Name and verify in the table
    *****************************************************/
    FiterWithCustomerName(CustomerName) {

        cy.EnterText(elems_E1GymMembershipListing.TXT_CUSTOMERNAME, CustomerName)
        cy.Click(elems_E1GymMembershipListing.BTN_SEARCHFILTERS)
        cy.VerifyTableEntry(elems_E1GymMembershipListing.TBL_E1GYMMEMBERSHIPLISTING, 'Customer Name', CustomerName)

    }
    /*****************************************************
     * Method: SAFRAMembershipID
     * Description: This funstion Filter Table with SAFRA Membership ID
    *****************************************************/
    FilterSAFRAMembershipID(MembershipId) {

        cy.EnterText(elems_E1GymMembershipListing.TXT_SAFRAMEMBERSHIPID, MembershipId)
        cy.Click(elems_E1GymMembershipListing.BTN_SEARCHFILTERS)
        cy.VerifyTableEntry(elems_E1GymMembershipListing.TBL_E1GYMMEMBERSHIPLISTING, 'SAFRA Membership ID', MembershipId)
        cy.SelectTableItem(elems_E1GymMembershipListing.TBL_E1GYMMEMBERSHIPLISTING, 'SAFRA Membership ID', MembershipId)
    }
    /*****************************************************
     * Method: FilterE1GymMembershipID
     * Description: This funstion Filter Table with E1 Gym Membership ID
    *****************************************************/
    FilterE1GymMembershipID(E1GymMembershipId) {

        cy.EnterText(elems_E1GymMembershipListing.TXT_E1GYMMEMBERSHIPID, E1GymMembershipId)
        cy.Click(elems_E1GymMembershipListing.BTN_SEARCHFILTERS)
        cy.VerifyTableEntry(elems_E1GymMembershipListing.TBL_E1GYMMEMBERSHIPLISTING, 'E1 Gym Membership ID', E1GymMembershipId)
        cy.SelectTableItem(elems_E1GymMembershipListing.TBL_E1GYMMEMBERSHIPLISTING, 'E1 Gym Membership ID', E1GymMembershipId)
    }

    /*****************************************************
     * Method: SelectItemInTable
     * Description: This funstion will select table item
    *****************************************************/
    SelectItemInTable(CustomerName) {

        cy.SelectTableItem(elems_E1GymMembershipListing.TBL_E1GYMMEMBERSHIPLISTING, 'Customer Name', CustomerName)

    }

    /*****************************************************
     * Method: ClickOnTableItem
     * Description: This funstion will Click on table link
    *****************************************************/
    ClickOnTableItem(CustomerName) {

        cy.ClickTableLink(elems_E1GymMembershipListing.TBL_E1GYMMEMBERSHIPLISTING, 'Customer Name', CustomerName)

    }
    /*****************************************************
     * Method: VerifyTransactionTableItem
     * Description: This funstion Verify Remarks,Reason Code and status
     * @param {string} Remark
     * @param {string} ReasonCode
    *****************************************************/
    VerifyTransactionTableItem(Remark, ReasonCode) {

        cy.VerifyTableEntry(elems_E1GymMembershipListing.TBL_TRANSACTIONHISTORY, 'Remark', Remark)
        cy.VerifyTableEntry(elems_E1GymMembershipListing.TBL_TRANSACTIONHISTORY, 'Reason Code', ReasonCode)

    }

}
export default new E1GymMembershipListing