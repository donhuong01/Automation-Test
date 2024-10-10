import elems_E1GymMembershipDetail from "../../Elements/FS-015-E1-Gym-Membership/E1 Gym Membership Detail";
import elems_E1GymMembershipListing from "../../Elements/FS-015-E1-Gym-Membership/E1 Gym Membership Listing";

class E1GymMembership {

    /*****************************************************
     * Method: ViewTransactionHistory
     * Description: Click on View Transaction History button
    ****************************************************/
    ViewTransactionHistory() {

        cy.Click(elems_E1GymMembershipListing.BTN_VIEWTRANSACTIONHISTORY)

    }

    /*****************************************************
     * Method: MaintenaceSelection
     * Description: This function select maintenace operation
     * @param {string} Maintenace
    ****************************************************/
    MaintenaceSelection(Maintenace) {

        cy.SelectDropDown(elems_E1GymMembershipListing.DRP_MAINTENANCE, Maintenace)

    }

    /*****************************************************
     * Method: FilterTableItem
     * Description: This function Filter e1 gym membership listing
     * @param {string} E1GymMembershipMain
     * @param {string} E1GymMembership
     * @param {string} E1GymMembershipID
    ****************************************************/
    FilterTableItem(E1GymMembershipMain, E1GymMembership, E1GymMembershipID) {


    }

    /*****************************************************
     * Method: Save
     * Description: This function click on Save button
    ****************************************************/
    Save() {

        cy.Click(elems_E1GymMembershipDetail.BTN_SAVE)

    }

    /*****************************************************
     * Method: Cancel
     * Description: This function click on Cancel button
    ****************************************************/
    Cancel() {

        cy.Click(elems_E1GymMembershipDetail.BTN_CANCEL)

    }


    /*****************************************************
     * Method: VarifyLabels
     * Description: This function Varify Labels on E1 Gym Membership Detail
     * @param {string} MemID
    ****************************************************/
    VarifyLabels(MemID) {

        cy.ValidateElementText(elems_E1GymMembershipDetail.LBL_MEMBERSHIPID, MemID)

    }

    /*****************************************************
     * Method: AddMembershipTags
     * Description: This function Add Membership Tags
     * @param {string} AttributeName
    ****************************************************/
    AddMembershipTags(AttributeName) {

        cy.SelectPickerDifferentItemsWait(elems_E1GymMembershipDetail.BTN_ADDMEMBERSHIPTAGS, 4000,
            elems_E1GymMembershipDetail.TXT_ATTRIBUTENAME, AttributeName,
            elems_E1GymMembershipDetail.BTN_SEARCHFILTERMEMTAGS
        )

    }
}

export default E1GymMembership