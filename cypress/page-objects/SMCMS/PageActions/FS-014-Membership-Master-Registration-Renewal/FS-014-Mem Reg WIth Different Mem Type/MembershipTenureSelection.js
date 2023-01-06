import elems_MembershipTenureSelection from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/MembershipTenureSelection.js'
import elems_PageHeader from '../../../Elements/Common/PageHeader.js'


class MembershipTenureSelection {

    /*****************************************************
     * Method: verifyPrincipalList
     * Description: Verify Principal List Item
     *
     * @param {string} principal Principal Member Information
     *****************************************************/
    verifyPrincipalList(principal) {

        cy.VerifyTableEntry(
            elems_MembershipTenureSelection.Principal.TBL_PRINCIPAL,
            'Name', principal.name,
            'Member ID', principal.memberId
        )

        cy.VerifyTableEntry(
            elems_MembershipTenureSelection.Principal.TBL_PRINCIPAL,
            'Member Type Code', principal.memberTypeCode,
            'Member ID', principal.memberId
        )

        cy.VerifyTableEntry(
            elems_MembershipTenureSelection.Principal.TBL_PRINCIPAL,
            'Membership Period', principal.membershipPeriod,
            'Member ID', principal.memberId
        )
    }

    /*****************************************************
      * Method: principalTenureSelection
      * Description: Add Tenure Selection to Principal Member
      *
      * @param {string} PrincipalTenure Tenure Selection
      * @param {string} ColumnValue Column value
      * @param {string} Membertype Member type
      *****************************************************/
    principalTenureSelection(Membertype, ColumnValue, PrincipalTenure) {

        if (Membertype === "AV") {
            cy.TenureSelection(elems_MembershipTenureSelection.Principal.TBL_PRINCIPAL,
                ColumnValue, PrincipalTenure)
        }
        if (Membertype === "AS") {
            cy.TenureSelection(elems_MembershipTenureSelection.Principal.TBL_PRINCIPAL,
                ColumnValue, PrincipalTenure)
        }
        if (Membertype === "OD") {
            cy.TenureSelection(elems_MembershipTenureSelection.Principal.TBL_PRINCIPAL,
                ColumnValue, PrincipalTenure)
        }
        if (Membertype === "FA") {
            cy.TenureSelection(elems_MembershipTenureSelection.Principal.TBL_PRINCIPAL,
                ColumnValue, PrincipalTenure)
        }
        if (Membertype === "AT") {
            cy.TenureSelection(elems_MembershipTenureSelection.Principal.TBL_PRINCIPAL,
                ColumnValue, PrincipalTenure)
        }
        if (Membertype === "OE") {
            cy.TenureSelection(elems_MembershipTenureSelection.Principal.TBL_PRINCIPAL,
                ColumnValue, PrincipalTenure)
        }

        if (Membertype === "LF") {
            cy.TenureSelection(elems_MembershipTenureSelection.Principal.TBL_PRINCIPAL,
                ColumnValue, PrincipalTenure)
        }

        if (Membertype === "OF") {
            cy.TenureSelection(elems_MembershipTenureSelection.Principal.TBL_PRINCIPAL,
                ColumnValue, PrincipalTenure)
        }
        if (Membertype === "VD") {
            cy.TenureSelection(elems_MembershipTenureSelection.Principal.TBL_PRINCIPAL,
                ColumnValue, PrincipalTenure)
        }
        if (Membertype === "VO") {
            cy.TenureSelection(elems_MembershipTenureSelection.Principal.TBL_PRINCIPAL,
                ColumnValue, PrincipalTenure)
        }
        if (Membertype === "VR") {
            cy.TenureSelection(elems_MembershipTenureSelection.Principal.TBL_PRINCIPAL,
                ColumnValue, PrincipalTenure)
        }
        if (Membertype === "VT") {
            cy.TenureSelection(elems_MembershipTenureSelection.Principal.TBL_PRINCIPAL,
                ColumnValue, PrincipalTenure)
        }

    }

    /*****************************************************
     * Method: verifyDependentList
     * Description: Verify Dependent List Item
     *
     * @param {string} dependent Dependent Member Information
     *****************************************************/
    verifyDependentList(dependent) {

        cy.VerifyTableEntry(
            elems_MembershipTenureSelection.Dependent.TBL_DEPENDENT,
            'Name', dependent.name,
            'Member ID', dependent.memberId
        )

        cy.VerifyTableEntry(
            elems_MembershipTenureSelection.Dependent.TBL_DEPENDENT,
            'Member Type Code', dependent.memberTypeCode,
            'Member ID', dependent.memberId
        )

        cy.VerifyTableEntry(
            elems_MembershipTenureSelection.Dependent.TBL_DEPENDENT,
            'Membership Period', dependent.membershipPeriod,
            'Member ID', dependent.memberId
        )
    }

    /*****************************************************
     * Method: dependentTenureSelection
     * Description: Add Tenure Selection to Dependent Member
     * @param {string} ColumnValue target column 
     * @param {string} tenureSelection Tenure Selection
     *****************************************************/
    dependentTenureSelection(ColumnValue, tenureSelection) {

        cy.TenureSelection(elems_MembershipTenureSelection.Dependent.TBL_DEPENDENT,
            ColumnValue, tenureSelection)
        // cy.SelectTableItem(elems_MembershipTenureSelection.Dependent.TBL_DEPENDENT, 'Name', ColumnValue)
    }

    /*****************************************************
     * Method: selectDependent
     * Description: Select Dependent Member
     *
     * @param {string} name   Dependent Member Name
     *****************************************************/
    selectDependent(name) {

        // Tick Checkbox of Member ID
        if (name !== undefined) {
            cy.SelectTableItem(
                elems_MembershipTenureSelection.Dependent.TBL_DEPENDENT,
                // 'Member ID', memberId,
                'Name', name,

            )
        }
    }
    /*****************************************************
  * Method: SelectPrincipal
  * Description: Select Principal Member
  * @param {string} name Principal Member Name
  *****************************************************/
    SelectPrincipal(name) {

        // Tick Checkbox of Member ID
        if (name !== undefined) {
            cy.SelectTableItem(
                elems_MembershipTenureSelection.Principal.TBL_PRINCIPAL,
                // 'Member ID', memberId,
                'Name', name,

            )
        }
    }

    /*****************************************************
     * Method: addToCart
     * Description: Click Add To Cart button
     *****************************************************/
    addToCart() {

        // Click Add to Cart button
        cy.Click(elems_MembershipTenureSelection.BTN_ADDTOCART)
        cy.wait(4000)
        // Verify Redirection Page
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Shopping Cart')
    }
    /*****************************************************
     * Method: Submit
     * Description: Click Submit button
     *****************************************************/
    Submit() {

        // Click Submit button
        cy.Click(elems_MembershipTenureSelection.BTN_SUBMIT)
        cy.wait(4000)
    }

    /*****************************************************
     * Method: cancel
     * Description: Click Cancel button
     * 
     * @param {string} expectedPage Expected Page
     *****************************************************/
    cancel(expectedPage) {

        // Click Cancel button
        cy.Click(elems_MembershipTenureSelection.BTN_CANCEL)

        // Verify Redirection Page
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPage)
    }
}

export default MembershipTenureSelection