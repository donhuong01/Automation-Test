import elems_OnlineAccountAccessListing from '../../../Elements/Admin/FS001_Admin-SystemLogin/OnlineAccountAccessListing'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Alerts from '../../../Elements/Common/Alerts'

class OnlineAccountAccessListing{

    /*****************************************************
     * Method: VerifyPageTitle
     * Description: To verify the tile of Online Account Access Listing
     
    *****************************************************/
    VerifyPageTitle()
    { 
     cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE,'Online Account Access Listing')
        
    }

    /*****************************************************
     * Method: VerifyTableLink
     * Description: Verify the table link navigates to Detail form
     * @param {String} MembershipType
    *****************************************************/
     VerifyTableLink(MembershipType) 
     {
        // cy.ClickTableLink(elems_OnlineAccountAccessListing.TBL_MEMBERSHIPTYPE,'Membership Type',MembershipType)
        cy.xpath('//h2[text()="Online Account Access Listing"]/ancestor::div//table//a')
        .first().click()
     }

     /*****************************************************
     * Method: VerifyUpdatedDate
     * Description: To Verify last updated date
     * @param {String} DateTime
    *****************************************************/
      VerifyUpdatedDate(DateTime) 
      { 
        cy.VerifyTableEntry(elems_OnlineAccountAccessListing.TBL_MEMBERSHIPTYPE,
        'Last Updated Date', '09-Jun-2022 10:55 AM',
        'Membership Type','test online roles'    
        )
      }

}
export default OnlineAccountAccessListing