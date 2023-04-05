import elems_E1GymMembershipRenewalAdvise from '../../Elements/FS-015-E1-Gym-Membership/E1GymMembershipRenewalAdvice'

import elems_Picker from '../../Elements/Common/Picker'
class E1GYMMembershipRenewalAdvice {

    /*****************************************************
         * Method: CreateNew
         * Description: This function Click on Create New button
        ****************************************************/
    CreateNew() {

        cy.Click(elems_E1GymMembershipRenewalAdvise.BTN_CREATENEW)

    }
    /*****************************************************
         * Method: Delete
         * Description: This function Click on Delete button
        ****************************************************/
    Delete() {

        cy.Click(elems_E1GymMembershipRenewalAdvise.BTN_DELETE)

    }
    /*****************************************************
         * Method: Save
         * Description: This function Click on Save button
        ****************************************************/
    Save() {

        cy.Click(elems_E1GymMembershipRenewalAdvise.BTN_SAVE)

    }
    /*****************************************************
         * Method: RenewalAdviceInfo
         * Description: This function fillout Renewal Advice Info 
        ****************************************************/
    RenewalAdviceInfo(Description, GeneratedFor) {

        cy.EnterText(elems_E1GymMembershipRenewalAdvise.TXT_DESCRIPTION, Description)

        if (GeneratedFor === 'Via Email') {
            cy.Click(elems_E1GymMembershipRenewalAdvise.CHK_VIAEMAIL)
        } else {
            cy.Click(elems_E1GymMembershipRenewalAdvise.CHK_VIAMAILMERGE)
        }


    }
    /*****************************************************
         * Method: Generate
         * Description:
        ****************************************************/
    Generate() {

        cy.Click(elems_E1GymMembershipRenewalAdvise.BTN_GENERATE)

    }
    /*****************************************************
         * Method: SelectItem
         * Description:
        ****************************************************/
    SelectItem(Description) {

        cy.SelectTableItem(elems_E1GymMembershipRenewalAdvise.TBL_MEMRENADVICELIST, 'Description', Description)

    }
    /*****************************************************
         * Method: MembershipMasterData
         * Description: This function fillout Membership Master Data 
        ****************************************************/
    MembershipMasterData(MainMembership, E1GymMembership, ExpiryDateFrom, ExpiryDateTo, MembershipStatus, ReasonCode, DOBFrom, DOBTo) {

        cy.Click(elems_E1GymMembershipRenewalAdvise.PCK_E1GYMMAINMEMBERSHIP)
        cy.EnterText('//input[@name="name"]', MainMembership )
        cy.Click('//button[text()="Search Filters"]')
        cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS,"Name", MainMembership)
        cy.Click(elems_Picker.BTN_SELECT)

        cy.Click(elems_E1GymMembershipRenewalAdvise.PCK_E1GYMMEMBERSHIP)
        cy.EnterText('//input[@name="name"]', E1GymMembership )
        cy.Click('//button[text()="Search Filters"]')
        cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS,"Name", E1GymMembership)
        cy.Click(elems_Picker.BTN_SELECT)

        // cy.SelectPickerDifferentItems(elems_E1GymMembershipRenewalAdvise.PCK_E1GYMMAINMEMBERSHIP, '//input[@name="name"]', MainMembership)
        // cy.SelectPickerDifferentItems(elems_E1GymMembershipRenewalAdvise.PCK_E1GYMMEMBERSHIP, '//input[@name="name"]', E1GymMembership)
        cy.EnterDate(elems_E1GymMembershipRenewalAdvise.DATE_EXPIRYDATEFROM, ExpiryDateFrom)
        cy.EnterDate(elems_E1GymMembershipRenewalAdvise.DATE_EXPIRYDATETO, ExpiryDateTo)
        cy.SelectDropDownItem(elems_E1GymMembershipRenewalAdvise.DRP_MEMBERSHIPSTATUS, MembershipStatus)
        cy.SelectDropDownItem(elems_E1GymMembershipRenewalAdvise.DRP_REASONCODE, ReasonCode)
        cy.EnterDate(elems_E1GymMembershipRenewalAdvise.DATE_DOBFROM, DOBFrom)
        cy.EnterDate(elems_E1GymMembershipRenewalAdvise.DATE_DOBTO, DOBTo)
        cy.TickCheckBox(elems_E1GymMembershipRenewalAdvise.CHK_SEARCHMONTHONLY, 'CHECK')


    }


}
export default new E1GYMMembershipRenewalAdvice