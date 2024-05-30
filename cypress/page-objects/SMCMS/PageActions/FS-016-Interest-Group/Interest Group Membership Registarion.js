import elems_IGMembershipRegistration from '../../Elements/Interest Group/InterestGroupMembershipRegistration'
import elems_InterestGroupMembershipRenewal from '../../Elements/Interest Group/Interest Group Membership Renewal'
import elems_IGMemberListing from '../../Elements/Interest Group/InterestGroupMembershipListing'
import elems_IGMembershipTransactionHistory from '../../Elements/Interest Group/IGMembershipTransactionHistory'
import elems_IGMemberDetail from '../../Elements/Interest Group/InterestGroupMembershipDetail'

class IGMembershipRegistration {

    /*****************************************************
     * Method: ClickOnBox
     * Description: Click on Interest Group Main Selection Boxes
    *****************************************************/
    ClickOnBox(BoxText) {

        if (BoxText === "SAFRA Jurong") {

            cy.Click(`(//p[text()= "${BoxText}"])[2]`)
            cy.wait(8000)
        }
        else {

            cy.Click(`//p[text()= "${BoxText}"]`)
            cy.wait(8000)
        }



    }

    /*****************************************************
     * Method: SelectMembershipTerm
     * Description: This function Select Membership Term
    *****************************************************/
    SelectMembershipTerm(Tenure) {

        cy.EnterText(elems_IGMembershipRegistration.TXT_MEMBERSHIPTERM, Tenure)

    }

    /*****************************************************
     * Method: MembershipEffectiveDate
     * Description: This function Select Effective date
    *****************************************************/
    MembershipEffectiveDate(date) {

        cy.EnterDate(elems_IGMembershipRegistration.DATE_MEMBEREFFECTIVEDATE, date)

    }
    /*****************************************************
     * Method: AgreeWithTermCondition
     * Description: This function Check on agree with Term and Conditions checkbox
    *****************************************************/
    AgreeWithTermCondition() {

        cy.TickCheckBox(elems_IGMembershipRegistration.CHK_AGRETERMCONDITION, "CHECK")

    }

    /*****************************************************
     * Method: Agree with Indemnity Waiver
     * Description: This function Check on indenmity wiaver checkbox
    *****************************************************/
    AgreewithIndemnityWaiver() {

        cy.TickCheckBox(elems_IGMembershipRegistration.CHK_AGREIDENTITYWIAVER, "CHECK")

    }

    /*****************************************************
     * Method: AddToCard
     * Description: This function Click on add to card button
    *****************************************************/
    AddToCard() {

        cy.Click(elems_IGMembershipRegistration.BTN_ADDTOCART)

    }

    /*****************************************************
     * Method: VerifyItemInIGMemListingTBL
     * Description: This function verify the new created item interest group membership listing table
    *****************************************************/
    VerifyItemInIGMemListingTBL(CustomerName) {

        cy.visit('/membership/interestGroupMembershipListing')
        cy.EnterText(elems_IGMembershipRegistration.TXT_CUSTOMERCATEGNAME, CustomerName)
        cy.Click(elems_IGMembershipRegistration.BTN_SEARCHFILTER)
        cy.wait(2000)
        cy.VerifyTableEntry(elems_IGMemberListing.TBL_IGGROUPMEMBERLIST, 'Customer Name', CustomerName)

    }
    /*****************************************************
     * Method: SelectItemInTable
     * Description: This function select item in the table
    *****************************************************/
    SelectItemInTable(CustomerName) {

        cy.SelectTableItem(elems_IGMemberListing.TBL_IGGROUPMEMBERLIST, 'Customer Name', CustomerName)

    }

    /*****************************************************
    * Method: MembershipStatusReason
    * Description: This function Verify Membership Status Reason
    *****************************************************/

    MembershipStatusReason(Reason) {
        cy.Click(elems_IGMemberListing.TBL_LINKIGMEMBERLIST)
        cy.ValidateElementText(elems_IGMemberDetail.LBL_MEMBERSTATUSREASON, Reason)

    }

    /*****************************************************
     * Method: SelectMaintanceOperation
     * Description: This function select maintenance operation
    *****************************************************/
    SelectMaintanceOperation(Operation) {

        cy.SelectDropDownItem(elems_IGMemberListing.DRP_MAINTENANCE, Operation)

    }

    /*****************************************************
     * Method: SelectIGMembership
     * Description: This function select Interest Group Membership
    *****************************************************/
    SelectIGMembership(IGMembership) {

        cy.Click(elems_InterestGroupMembershipRenewal.DRP_INTERESTGROUPMEMBERSHIP)
        cy.wait(1000)
        cy.Click(`//*[contains(text(),'${IGMembership}')]`)

    }

    /*****************************************************
     * Method: SelectRenewalTerm
     * Description: This function select Renewal Term
    *****************************************************/
    SelectRenewalTerm(RenewalTerm) {

        cy.SelectDropDownItem(elems_InterestGroupMembershipRenewal.DRP_RENEWALTERM, RenewalTerm)

    }

    /*****************************************************
     * Method: Submit
     * Description: This function Click On Submit Button
    *****************************************************/
    Submit() {

        cy.Click(elems_InterestGroupMembershipRenewal.BTN_SUBMIT)

    }

    /*****************************************************
     * Method: Complete
     * Description: This function Click On Complete Button
    *****************************************************/
    Complete() {

        cy.Click(elems_InterestGroupMembershipRenewal.BTN_COMPLETE)

    }

    /*****************************************************
     * Method: ViewTransactionHistory
     * Description: This function Select Table Item and click on ViewTransactionHistory Button
    *****************************************************/
    ViewTransactionHistory(CustomerName) {

        cy.SelectTableItem(elems_IGMemberListing.TBL_IGGROUPMEMBERLIST, 'Customer Name', CustomerName)
        cy.Click(elems_IGMemberListing.BTN_VIEWTRANSACTIONHISTORY)
        cy.wait(2000)

    }

    /*****************************************************
     * Method: VerifyReasonCode
     * Description: This function Verify Reason after IG Membership Renewal
    *****************************************************/
    VerifyReasonCode(ReasonCode) {

        cy.VerifyTableEntry(elems_IGMembershipTransactionHistory.TBL_IGMEMBERSHIPTRANSACTIONHISTORY, 'Reason Code', ReasonCode)

    }


    /*****************************************************
     * Method: AddWaiver
     * Description: This function Fillout Waiver Form
    *****************************************************/
    AddWaiver(ChargeType) {

        cy.Click(elems_IGMembershipRegistration.BTN_ADDWIAVER)
        cy.SelectDropDownItem(elems_IGMembershipRegistration.DRP_CHARGETYPE, ChargeType)
        cy.EnterText(elems_IGMembershipRegistration.TXT_AMOUNT, '1')
        cy.EnterText(elems_IGMembershipRegistration.TXT_REASON, 'Waive')
        cy.Click(elems_IGMembershipRegistration.BTN_CONFIRM)
    }

    /*****************************************************
   * Method: Fill out Additional Fields
   * Description: Fill out Additional Fields
  *****************************************************/
    PopulateAdditionalFields(TextAreaText) {

        cy.EnterText(elems_IGMembershipRegistration.TXT_ADDITIONALFIELDS, TextAreaText)

    }

}
export default new IGMembershipRegistration