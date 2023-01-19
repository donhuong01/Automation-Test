import elems_E1GymMembershipRegistaration from '../../Elements/FS-015-E1-Gym-Membership/E1 Gym Membership Registration'
import elems_E1GymMembershipListing from '../../Elements/FS-015-E1-Gym-Membership/E1 Gym Membership Listing'
class E1GymMembershipRegistration {

    /*****************************************************
     * Method: ClickOnBox
     * Description: Click on Interest Group Main Selection Boxes
    *****************************************************/
    ClickOnBox(BoxText) {

        cy.Click(`//div[@class="k-drawer-content"]//p[text()= "${BoxText}"]`)
        cy.wait(2000)

    }
    /*****************************************************
     * Method: Submit
     * Description: Click on Submit button
    *****************************************************/
    Submit() {

        cy.Click(elems_E1GymMembershipRegistaration.BTN_SUBMIT)

    }

    /*****************************************************
     * Method: AddToCart
     * Description: Click on AddToCart button
    *****************************************************/
    AddToCart() {

        cy.Click(elems_E1GymMembershipRegistaration.BTN_ADDTOCART)

    }
    /*****************************************************
     * Method:Cancel
     * Description: Click onCancel button
    *****************************************************/
    Cancel() {

        cy.Click(elems_E1GymMembershipRegistaration.BTN_CANCEL)

    }
    /*****************************************************
     * Method:RegistrationInfo
     * Description: Fillout Registration Information Fields 
    *****************************************************/
    RegistrationInfo(EffectiveDate) {

        cy.Click('//span[@title="Increase value"]')
        cy.EnterDate(elems_E1GymMembershipRegistaration.DATE_EFFECTIVEDATE, EffectiveDate)

    }
    /*****************************************************
     * Method:OtherInfoCheckboxes
     * Description: Fillout Registration Information Fields 
    *****************************************************/
    OtherInfoCheckboxes() {

        cy.TickCheckBox(elems_E1GymMembershipRegistaration.CHK_TERMCONDITION, 'CHECK')
        // cy.TickCheckBox(elems_E1GymMembershipRegistaration.CHK_INDEMNITYWAIVER, 'CHECK')

    }
    /*****************************************************
        * Method: AddWiaver
        * Description: This function Fillout Payment Detail Fields
        *****************************************************/

    AddWiaver(ChargeType, Amount, Reason) {

        cy.Click(elems_E1GymMembershipRegistaration.BTN_ADDWAIVEROFF)
        cy.SelectDropDownItem(elems_E1GymMembershipRegistaration.DRP_CHARGETYPE, ChargeType)
        cy.EnterText(elems_E1GymMembershipRegistaration.TXT_AMOUNT, Amount)
        cy.EnterText(elems_E1GymMembershipRegistaration.TXT_REASON, Reason)
        cy.Click(elems_E1GymMembershipRegistaration.BTN_CONFIRM)


    }
    /*****************************************************
         * Method: VerifyItemInIGMemListingTBL
         * Description: This function verify the new created item interest group membership listing table
        *****************************************************/
    VerifyItemInIGMemListingTBL(CustomerName) {

        cy.visit('/membership/e1GymMembershipList')
        cy.EnterText(elems_E1GymMembershipListing.TXT_CUSTOMERNAME, CustomerName)
        cy.Click(elems_E1GymMembershipListing.BTN_SEARCHFILTERS)
        cy.VerifyTableEntry(elems_E1GymMembershipListing.TBL_E1GYMMEMBERSHIPLISTING, 'Customer Name', CustomerName)

    }
    /*****************************************************
         * Method: SelectDepandencyType
         * Description: This function select dependency type
        *****************************************************/
    SelectDepandencyType(DependencyType) {


        cy.SelectDropDownItem(elems_E1GymMembershipRegistaration.DRP_DEPENDENCYTYPE, DependencyType)

    }
    /*****************************************************
         * Method: MembershipInfo
         * Description: This function fillout Membership Information fields
         * @param {string} EffectiveDate
        *****************************************************/
    MembershipInfo(EffectiveDate) {
        cy.wait(1000)
        cy.Click('//span[@title="Increase value"]')
        cy.wait(1000)
        cy.EnterDate(elems_E1GymMembershipRegistaration.DATE_EFFECTIVEDATE, EffectiveDate)
        cy.wait(500)
        cy.xpath('//label[@for="membershipPeriod"]').should('be.visible')

    }


}
export default new E1GymMembershipRegistration