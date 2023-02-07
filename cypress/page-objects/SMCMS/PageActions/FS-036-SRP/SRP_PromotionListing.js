import elems_SRPPromationListing from '../../Elements/FS-036-SRP/SRPPromationListing'
import elems_MemberListing from '../../Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'

class SRP_PromotionListing {

    /*****************************************************
     * Method: CreateNew 
     * Description: This function click on create new button
     *****************************************************/
    CreateNew() {

        cy.Click(elems_SRPPromationListing.BTN_CREATENEW)
        cy.wait(2000)

    }
    /*****************************************************
     * Method: Delete 
     * Description: This function click on delete button
     *****************************************************/
    Delete() {

        cy.Click(elems_SRPPromationListing.BTN_DELETE)

    }

    
    /*****************************************************
    * Method: SelectMemberListItem
    * Description
    *****************************************************/
        SelectMemberListItem(MemberID) {

            cy.EnterText(elems_MemberListing.TXT_MEMBERID, MemberID)
            cy.Click(elems_MemberListing.BTN_SEARCHFILTER)
            cy.wait(3000)
            cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING, 'Member ID', MemberID)
    
        }
    /*****************************************************
     * Method: FilterByTitlePromoType 
     * Description: This function Filter the by Title and Promo Type
     * @param {string} Title
     * @param {string} PromoType
    *****************************************************/
    FilterByTitlePromoType(Title, PromoType) {

        cy.EnterText(elems_SRPPromationListing.TXT_TITLE, Title)
        cy.SelectDropDownItem(elems_SRPPromationListing.DRP_PROMOTYPE, PromoType)
        cy.Click(elems_SRPPromationListing.BTN_SEARCHFILTERS)

    }
    /*****************************************************
     * Method: SelectTableItem 
     * Description: This function Select item in the table
     * @param {string} Title
    *****************************************************/
    SelectTableItem(Title) {

        cy.SelectTableItem(elems_SRPPromationListing.TBL_SRPPROMATIONLISTING, 'Title', Title)

    }
    /*****************************************************
     * Method: ClickOnTableLink 
     * Description: This function Click on item link in the table
     * @param {string} Title
    *****************************************************/
    ClickOnTableLink(Title) {

        cy.ClickTableLinkItem(elems_SRPPromationListing.TBL_SRPPROMATIONLISTING, 'Title', Title)

    }
}
export default new SRP_PromotionListing