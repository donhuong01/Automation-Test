import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_MembershipRenewalAdviceSettingList from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/MemberRenewalAdviceSettingListing'

class MembershipRenewAdviseSettingListing{
    /*****************************************************
    * Method: verify PageTitle
    * Description: Verify Membership Renewal Advise Setting Detail Form
     *****************************************************/
   verifyPageTitle()
   {
    cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Membership Renewal Advice Setting Listing')
   }
        
    /*****************************************************
    * Method: Create new 
    * Description: Click on create new button in Membership Renewal Advise Setting Listing Form
    *****************************************************/
        
    createNew()
    {
        cy.Click(elems_MembershipRenewalAdviceSettingList.BTN_CREATENEW,'Membership Renewal Advice Setting Detail')
    }
    
    /*****************************************************
    * Method: Verify form
    * Description: Verify table entries of the form 
    * 
    * @param {string} Name MemberName
    * @param {string} MemberTypeCode MemberTypeCode
    * @param {string} CardType MemberCardType
    * @param {string} MemberCategory MemberCatagory
    * @param {string} ExpiryDateFrom MemberExpiryDate
    * @param {string} ExpiryDateTo 
    *****************************************************/    

    VerifyForm(Name,MemberCategory,ExpiryDateFrom,ExpiryDateTo,MemberTypeCode,CardType)
    {
        cy.VerifyTableEntry(
            elems_MembershipRenewalAdviceSettingList.TBL_MEMRENADVSETLIST,
            'Member Category', MemberCategory,
            'Name',Name
            )
        cy.VerifyTableEntry(
            elems_MembershipRenewalAdviceSettingList.TBL_MEMRENADVSETLIST,
            'Expiry Date (From)',ExpiryDateFrom,
            'Name',Name
            )    
        cy.VerifyTableEntry(
            elems_MembershipRenewalAdviceSettingList.TBL_MEMRENADVSETLIST,
            'Expiry Date (From)',ExpiryDateFrom,
            'Name', Name
            )    
        cy.VerifyTableEntry(
            elems_MembershipRenewalAdviceSettingList.TBL_MEMRENADVSETLIST,
            'Expiry Date (To)',ExpiryDateTo,
            'Name', Name
            )        
        cy.VerifyTableEntry(
            elems_MembershipRenewalAdviceSettingList.TBL_MEMRENADVSETLIST,
            'Member Type Code',MemberTypeCode,
            'Name', Name
            )        

        cy.VerifyTableEntry(
            elems_MembershipRenewalAdviceSettingList.TBL_MEMRENADVSETLIST,
            'Member Card Type',CardType,
            'Name',Name
            )    
    
    }                
    }

export default MembershipRenewAdviseSettingListing