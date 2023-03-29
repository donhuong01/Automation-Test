import elems_E1GymMembershipRenewalAdvice from "../../Elements/FS-015-E1-Gym-Membership/E1GymMembershipRenewalAdvice"

class E1GymMembershipRenewalAdvice {

    /*****************************************************
         * Method: CreateNew
         * Description: This function Click on CreateNew button
        ****************************************************/
    CreateNew() {

        cy.Click(elems_E1GymMembershipRenewalAdvice.BTN_CREATENEW)

    }
    /*****************************************************
         * Method: Cancel
         * Description: This function Click on Cancel button
        ****************************************************/
    Cancel() {

        cy.Click(elems_E1GymMembershipRenewalAdvice.BTN_CANCEL)

    }
    /*****************************************************
         * Method: Delete
         * Description: This function Click on Delete button
        ****************************************************/
    Delete() {

        cy.Click(elems_E1GymMembershipRenewalAdvice.BTN_DELETE)

    }
    /*****************************************************
         * Method: Save
         * Description: This function Click on Save button
        ****************************************************/
    Save() {

        cy.Click(elems_E1GymMembershipRenewalAdvice.BTN_SAVE)

    }
    /*****************************************************
         * Method: ClickOnTableLink
         * Description: This function Click On Table Link 
        ****************************************************/
    ClickOnTableLink(AdviceNumber) {

        cy.ClickTableLinkItem(elems_E1GymMembershipRenewalAdvice.TBL_MEMRENADVICELIST, 'Advice Number', AdviceNumber)

    }
    /*****************************************************
         * Method: E1GymMemRenewalAdviceInformation
         * Description: This function Fillout E1 Gym Membership Renewal Advice Information
        ****************************************************/
    E1GymMemRenewalAdviceInformation(Description, GeneratedFor) {

        cy.EnterText(elems_E1GymMembershipRenewalAdvice.TXT_DESCRIPTION, Description)
        {
            if (GeneratedFor === 'Via Email') {
                cy.TickRadioButton(elems_E1GymMembershipRenewalAdvice.CHK_VIAEMAIL)
            } else {
                cy.TickRadioButton(elems_E1GymMembershipRenewalAdvice.CHK_VIAMAILMERGE)
            }
        }
    }

    /*****************************************************
         * Method: MembershipMasterData
         * Description: This function Fillout Membership Master Data
        ****************************************************/
    MembershipMasterData(ExpiryDateFrom, ExpiryDateTo, MembershipStatus, ReasonCode, DateOfBirth) {

        cy.EnterDate(elems_E1GymMembershipRenewalAdvice.DATE_EXPIRYDATEFROM, ExpiryDateFrom)
        cy.EnterDate(elems_E1GymMembershipRenewalAdvice.DATE_EXPIRYDATETO, ExpiryDateTo)
        cy.SelectDropDownItem(elems_E1GymMembershipRenewalAdvice.DRP_MEMBERSHIPSTATUS, MembershipStatus)
        cy.SelectDropDownItem(elems_E1GymMembershipRenewalAdvice.DRP_REASONCODE, ReasonCode)
        cy.EnterDate(elems_E1GymMembershipRenewalAdvice.DATE_DOB, DateOfBirth)
    }
    /*****************************************************
         * Method: Generate
         * Description: This function Click on Generate button
        ****************************************************/
    Generate() {

        cy.Click(elems_E1GymMembershipRenewalAdvice.BTN_GENERATE)
    }



}
export default new E1GymMembershipRenewalAdvice