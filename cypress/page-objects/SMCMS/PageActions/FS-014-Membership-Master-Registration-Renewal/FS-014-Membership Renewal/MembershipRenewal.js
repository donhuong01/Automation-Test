import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_MemberListing from '../../../Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'
import elems_Landing from '../../../Elements/Common/Customer_LandingPage'

class MembershipRenewal {
  /*****************************************************
  * Method: verify PageTitle
  * Description: Verify Membership Renewal Advise Setting Detail Form
  * @param {string} ExpectedPg 
   *****************************************************/
  verifyPageTitle(ExpectedPg) {
    cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)
  }

  /*****************************************************
* Method: VerifyMemberStatus
* Description: This function click on table entry
* @param {string} Name
* @param {string} NRIC
* @param {string} ReasonCode
*****************************************************/

  VerifyMemberStatus(Name, NRIC, ReasonCode) {
    cy.visit('/membership/memberList')
    cy.EnterText(elems_MemberListing.TXT_NAME, Name)
    cy.EnterText(elems_MemberListing.TXT_NRIC, NRIC)
    cy.Click(elems_MemberListing.BTN_SEARCHFILTER)
    cy.wait(10000)

    cy.VerifyTableEntry(elems_MemberListing.TBL_MEMBERLISTING,
      'Reason Code', ReasonCode)
    cy.wait(2000)

  }

  /*****************************************************
  * Method: GoHome
  * Description: Click SAFRA Logo 
   *****************************************************/
  GoHome() {

    cy.Click('//h3[text()="SMCMS"]/../../div//img[@alt="Logo"]')
    cy.wait(1000)

  }

  /*****************************************************
  * Method: ClickSAFRAMember
  * Description: Click SAFRAMember
   *****************************************************/
  ClickSAFRAMember() {

    cy.Click(elems_Landing.SAFRA_Member)
    cy.wait(1000)

  }

  /*****************************************************
 * Method: MemberShipRenewal
 * Description: Click ClickMemberShipRenewal
 * @param {string}  
  *****************************************************/
  ClickMemberShipRenewal() {

    cy.Click(elems_Landing.Membership_Renewal)
    cy.wait(5000)

  }


}

export default new MembershipRenewal