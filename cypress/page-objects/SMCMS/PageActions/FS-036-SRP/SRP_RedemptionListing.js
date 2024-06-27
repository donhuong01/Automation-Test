import elems_SRPREDEMPTIONLISTING from '../../Elements/FS-036-SRP/SRPRedemptionListing'
import elems_Picker from '../../Elements/Common/Picker'
import elems_PageHeader from '../../Elements/Common/PageHeader'
import elems_MemberListing from '../../Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'
class SRP_RedemptionListing {

    /*****************************************************
     * Method: Filters
     * Description: This function Filter SRP Redemption Listing Form
     * @param {string} ItemCode
     * @param {string} ItemDescription
     * @param {string} Category
     *****************************************************/
    Filters(ItemCode, ItemDescription, Category) {

        cy.EnterText(elems_SRPREDEMPTIONLISTING.TXT_ITEMCODE, ItemCode)
        cy.EnterText(elems_SRPREDEMPTIONLISTING.TXT_ITEMDESCRIPTION, ItemDescription)
        cy.SelectDropDownItem(elems_SRPREDEMPTIONLISTING.DRP_CATEGORY, Category)
        cy.wait(2000)
        cy.Click(elems_SRPREDEMPTIONLISTING.BTN_SEARCHFILTERS)
        cy.wait(5000)

    }
    /*****************************************************
     * Method: Redeem button
     * Description: This function Click on Redeem button
     *****************************************************/
    Redeem() {

        cy.Click(elems_SRPREDEMPTIONLISTING.BTN_REDEEM)

    }
    /*****************************************************
     * Method: CheckIn
     * Description: This function Check-in Member
     *****************************************************/
    CheckIn(MemberID) {

        cy.visit('/membership/customerCheckin')
        cy.wait(3000)
        cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, "Customer Check-In")
        cy.EnterText(elems_MemberListing.TXT_MEMBERID, MemberID)
        cy.Click('//span[text()="Check In"]')
        cy.wait(5000)

    }



}
export default new SRP_RedemptionListing