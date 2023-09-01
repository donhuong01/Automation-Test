import elems_MembershipTenureSelection from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/MembershipTenureSelection.js'
import elems_PageHeader from '../../../Elements/Common/PageHeader.js'


class MembershipTenureSelection{

    /*****************************************************
     * Method: verifyPrincipalList
     * Description: Verify Principal List Item
     *
     * @param {string} principal Principal Member Information
     *****************************************************/
     verifyPrincipalList(principal){

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
     * @param {string} tenureSelection Tenure Selection
     * @param {string} ColumnValue Column value
     *****************************************************/
    principalTenureSelection(ColumnValue, tenureSelection){
        
        // Set Tenure Selection
        if(tenureSelection !== undefined && ColumnValue !== undefined){

            cy.TenureSelection(elems_MembershipTenureSelection.Principal.TBL_PRINCIPAL,
                ColumnValue,  tenureSelection)
        }
        

    }

    /*****************************************************
     * Method: verifyDependentList
     * Description: Verify Dependent List Item
     *
     * @param {string} dependent Dependent Member Information
     *****************************************************/
     verifyDependentList(dependent){

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
     *
     * @param {string} memberId Dependent Member ID
     * @param {string} tenureSelection Tenure Selection
     * @param {string} ColumnValue target column 
     *****************************************************/
     dependentTenureSelection(ColumnValue, tenureSelection){
        
        cy.TenureSelection(elems_MembershipTenureSelection.Dependent.TBL_DEPENDENT,
            ColumnValue,  tenureSelection)
    }

    /*****************************************************
     * Method: selectDependent
     * Description: Select Dependent Member
     *
     * @param {string} name   Dependent Member Name
     *****************************************************/
     selectDependent(name){

        // Tick Checkbox of Member ID
        cy.SelectTableItem(elems_MembershipTenureSelection.Dependent.TBL_DEPENDENT,'Name', name)
        
        
        
        
        // if(name !== undefined ){
        //     cy.SelectTableItem2(
        //         elems_MembershipTenureSelection.Dependent.TBL_DEPENDENT,
        //         // 'Member ID', memberId,
        //         'Name', name, 
               
        //     )
        // }
     }
       /*****************************************************
     * Method: SelectPrincipal
     * Description: Select Principal Member
     * @param {string} name Principal Member Name
     *****************************************************/
        SelectPrincipal( name){

            // Tick Checkbox of Member ID
            if( name !== undefined ){
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
     addToCart(){

        // Click Add to Cart button
        cy.Click(elems_MembershipTenureSelection.BTN_ADDTOCART)
        cy.wait(7000) // Change it to 15000 when in UAT
        // Verify Redirection Page
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Shopping Cart')
    }

    /*****************************************************
     * Method: cancel
     * Description: Click Cancel button
     * 
     * @param {string} expectedPage Expected Page
     *****************************************************/
     cancel(expectedPage){

        // Click Cancel button
        cy.Click(elems_MembershipTenureSelection.BTN_CANCEL)

        // Verify Redirection Page
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPage)
    }
}

export default MembershipTenureSelection