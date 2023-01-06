import elems_PageHeader from "../../../Elements/Common/PageHeader"
import elems_Landing from '../../../Elements/Common/Customer_LandingPage'
class CustomerLandingPage{


    /*****************************************************
         * Method: Verify page title
         * Description: This function verifies the page title
         * @param {string} expectedPg

    *****************************************************/

     verifyPageTitle(expectedPg)

    {

      cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPg)

    }

    /*****************************************************
         * Method: Verify Landing Page Content
         * Description: This function verifies the landing page content
         * @param {string} BackButton
         * @param {string} MembershipWaiver
         * @param {string} MembershipRegistration
         * @param {string} TransactionHistory
         * @param {string} MembershipDeferment
         * @param {string} MembershipRenewal

    *****************************************************/

    verifyLandingPageContent(BackButton, MembershipWaiver, MembershipRegistration,
                         TransactionHistory, MembershipDeferment, MembershipRenewal)
    {
         if( BackButton!== undefined)
         {
          cy.ValidateElementText(elems_Landing.Back_BTN, BackButton)
         }
         if(MembershipWaiver !== undefined)
         {
          cy.ValidateElementText(elems_Landing.Membership_Waiver, MembershipWaiver)
         }
         if(MembershipRegistration !== undefined)
         {
          cy.ValidateElementText(elems_Landing.Membership_Registration, MembershipRegistration)
         }
         if(TransactionHistory !== undefined)
         {
          cy.ValidateElementText(elems_Landing.Transaction_History, TransactionHistory)
         }
         if(MembershipDeferment !== undefined)
         {
          cy.ValidateElementText(elems_Landing.Membership_Deferment, MembershipDeferment)
         }
         if(MembershipRenewal !== undefined)
         {
          cy.ValidateElementText(elems_Landing.Membership_Renewal, MembershipRenewal)
         }
         if( BackButton === undefined && 
          SAFRAMember === undefined && 
          MembershipWaiver === undefined && 
          MembershipRegistration === undefined && 
          TransactionHistory === undefined && 
          MembershipDeferment === undefined &&
          MembershipRenewal === undefined) 
      {
          throw new Error("Customer Landing Page!!./n\
                          Please provide at least one argument.")
      }
     

    }

    /*****************************************************
         * Method: click safra member
         * Description: This function click on 'SAFRA_MEMBER' in customer landing page

    *****************************************************/
    clickSAFRAMember(expectedPg)
    {
        cy.Click(elems_Landing.SAFRA_Member, expectedPg)
    }

    /*****************************************************
         * Method: click back
         * Description: This function click on 'BACK' in customer landing page

    *****************************************************/

    clickBack(expectedPg)
    {
        cy.Click(elems_Landing.Back_BTN, expectedPg)
    }

    /*****************************************************
         * Method: click Membership Waiver
         * Description: This function click on 'Membership Waiver' in customer landing page

    *****************************************************/

    clickOnMembershipWaiver()
    {
        cy.Click(elems_Landing.Membership_Waiver, 'Batch Membership Waiver Request')
    }

     /*****************************************************
      * Method: click Membership Registration
      * Description: This function click on 'Membership Registration' in customer landing page

     *****************************************************/

    clickOnMembershipRegistration()
    {
        cy.Click(elems_Landing.Membership_Registration, 'Membership Registration - Principal')
    }

     /*****************************************************
      * Method: click Transaction History
      * Description: This function click on 'Transaction History' in customer landing page

     *****************************************************/

    clickOnTransactionHistory()
    {
        cy.Click(elems_Landing.Transaction_History, 'Membership Transaction History')
    }

     /*****************************************************
      * Method: click Membership Deferment
      * Description: This function click on 'Membership Deferment' in customer landing page

     *****************************************************/

    clickOnMembershipDeferment()
    {
        cy.Click(elems_Landing.Membership_Deferment, 'Membership Deferment Request')
    }

     /*****************************************************
      * Method: click Membership Renewal
      * Description: This function click on 'Membership Renewal' in customer landing page

     *****************************************************/

    clickOnMemebershipRenewal()
    {
        cy.Click(elems_Landing.Membership_Renewal, 'Membership Renewal')
    }

     }

export default new CustomerLandingPage

