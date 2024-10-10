import elems_IGMembershipRenewalAdviceListing from '../../Elements/Interest Group/IGMembershipRenewalAdviceInfoListing'
import elems_IGMembershipRenewalAdviceDetail from '../../Elements/Interest Group/IGMembershipRenewalAdviceInfoDetail'

class InterestGroupRenewalAdvice {

    /*****************************************************
    * Method: CreateNew
    * Description: Click on Create New button
    *****************************************************/
    CreateNew() {

        cy.Click(elems_IGMembershipRenewalAdviceListing.BTN_CREATENEW)
        cy.wait(7000)
    }
    /*****************************************************
    * Method: Delete
    * Description: Click on Delete button
    *****************************************************/
    Delete() {

        cy.Click(elems_IGMembershipRenewalAdviceListing.BTN_DELETE)
        cy.wait(3000)
        cy.Click('//button[text()="Yes"]')
        cy.wait(2000)
    }
    /*****************************************************
    * Method: SelectTableItem
    * Description: Select Table Item 
    *****************************************************/
    SelectTableItem(Description) {

        cy.SelectTableItem(elems_IGMembershipRenewalAdviceListing.TBL_IGMEMRENEWALADVICELIST, 'Description', Description)
    }
    /*****************************************************
    * Method: ClickOnAdviceNumberLink
    * Description: Click on table Link
    *****************************************************/
    ClickOnAdviceNumberLink(AdviceLink) {

        cy.ClickTableLinkItem(elems_IGMembershipRenewalAdviceListing.TBL_IGMEMRENEWALADVICELIST, 'Advice Number', AdviceLink)
    }
    /*****************************************************
    * Method: Save
    * Description: Click on Save Button
    *****************************************************/
    Save() {

        cy.Click(elems_IGMembershipRenewalAdviceDetail.BTN_SAVE)
    }
    /*****************************************************
    * Method: Cancel
    * Description: Click on Cancel Button
    *****************************************************/
    Cancel() {

        cy.Click(elems_IGMembershipRenewalAdviceDetail.BTN_CANCEL)
    }
    /*****************************************************
    * Method: IGRenewalAdviceInfo
    * Description: Fillout IG Membership Renewal Advice Information
    *****************************************************/
    IGRenewalAdviceInfo(GeneratedFor, Description) {

        if (GeneratedFor === 'Via Post') {
            cy.Click(elems_IGMembershipRenewalAdviceDetail.CHK_VISAPOST)
        } else if (GeneratedFor === 'Via Email') {
            cy.Click(elems_IGMembershipRenewalAdviceDetail.CHK_VIAEMAIL)
        } else {
            cy.Click(elems_IGMembershipRenewalAdviceDetail.CHK_VIAMAILMERGE)
        }

        cy.EnterText(elems_IGMembershipRenewalAdviceDetail.TXT_DESCRIPTION, Description)
    }
    /*****************************************************
    * Method: MembershipMasterDataFilters
    * Description: Fillout Membership Master Data Filters
    *****************************************************/
    MembershipMasterDataFilters(IGMain, InterestGroup, MembershipStatus, ReasonCode, ExpiryDateFrom, ExpiryDateTo, DateofBithFrom, DateofBirthTo, SearchMonthOnly) {

        cy.SelectPickerWithoutFields(elems_IGMembershipRenewalAdviceDetail.PCK_IGMAIN, IGMain)
        cy.SelectPickerItem(elems_IGMembershipRenewalAdviceDetail.PCK_INTERESTGROUP, InterestGroup)
        cy.SelectDropDownItem(elems_IGMembershipRenewalAdviceDetail.DRP_MEMBERSHIPSTATUS, MembershipStatus)
        cy.SelectDropDownItem(elems_IGMembershipRenewalAdviceDetail.DRP_REASONCODE, ReasonCode)
        cy.EnterDate(elems_IGMembershipRenewalAdviceDetail.DATE_EXPIRYDATEFROM, ExpiryDateFrom)
        cy.EnterDate(elems_IGMembershipRenewalAdviceDetail.DATE_EXPIRYDATETO, ExpiryDateTo)
        cy.EnterDate(elems_IGMembershipRenewalAdviceDetail.DATE_DATEOFBIRTHFROM, DateofBithFrom)
        cy.EnterDate(elems_IGMembershipRenewalAdviceDetail.DATE_DATEOFBIRTHTO, DateofBirthTo)
        cy.TickCheckBox(elems_IGMembershipRenewalAdviceDetail.CHK_SEARCHMONTONLY, SearchMonthOnly)
    }

    /*****************************************************
    * Method: Generat
    * Description: Click on Generat Button
    *****************************************************/
    Generat() {

        cy.Click(elems_IGMembershipRenewalAdviceDetail.BTN_GENERATE)
    }

}
export default new InterestGroupRenewalAdvice