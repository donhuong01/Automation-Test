import elems_E1GymMembershipRegistaration from '../../Elements/FS-015-E1-Gym-Membership/E1 Gym Membership Registration'
import elems_E1GymMembershipListing from '../../Elements/FS-015-E1-Gym-Membership/E1 Gym Membership Listing'
import elems_Picker from '../../Elements/Common/Picker'
class E1GymMembershipRegistration {

    /*****************************************************
     * Method: ClickOnBox
     * Description: Click on Interest Group Main Selection Boxes
    *****************************************************/
    ClickOnBox(BoxText) {

        cy.Click(`//div[@class="k-drawer-content"]//p[text()= "${BoxText}"]`)
        cy.wait(4000)

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
        cy.wait(10000)

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

    AddWiaver() {

        cy.Click(elems_E1GymMembershipRegistaration.BTN_ADDWAIVEROFF)
        cy.SelectDropDownItem(elems_E1GymMembershipRegistaration.DRP_CHARGETYPE, 'Admin Fee Registration')
        cy.EnterText(elems_E1GymMembershipRegistaration.TXT_AMOUNT, 3)
        cy.EnterText(elems_E1GymMembershipRegistaration.TXT_REASON, 'Test')
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
        cy.VerifyTableContent(elems_E1GymMembershipListing.TBL_E1GYMMEMBERSHIPLISTING, 'Customer Name', CustomerName)

    }
    /*****************************************************
         * Method: FilterByCustomerName
         * Description: This function Filter the table by customer name 
        *****************************************************/
    FilterByCustomerName(CustomerName) {

        cy.EnterText(elems_E1GymMembershipListing.TXT_CUSTOMERNAME, CustomerName)
        cy.Click(elems_E1GymMembershipListing.BTN_SEARCHFILTERS)
      

    }
    /*****************************************************
         * Method: VerifyNoRecordMsg
         * Description: This function verify that the item is not present in the table
        *****************************************************/
    VerifyNoRecordMsg() {

        cy.xpath('//td[text()="No records available"]').should('be.visible')
    }
    /*****************************************************
         * Method: SelectDepandencyType
         * Description: This function select dependency type
        *****************************************************/
    SelectDepandencyType(DependencyType) {

        cy.SelectDropDownItem(elems_E1GymMembershipRegistaration.DRP_DEPENDENCYTYPE, DependencyType)

    }
    /*****************************************************
         * Method: RegistrationInformation
         * Description: This function select Customer Category
        *****************************************************/
    RegistrationInformation(category) {
        {
            category.length > 0 && cy.SelectPickerDifferentItemsWait(elems_E1GymMembershipRegistaration.PCK_CUSTOMERCATEGORY, 8000,
                elems_E1GymMembershipRegistaration.TXT_CUSTOMERCATEGORYNAME, category,
                '//button[@form="formFiltersCustomerCategory"]')

        }
    }
    /*****************************************************
         * Method: MembershipInfo
         * Description: This function fillout Membership Information fields
         * @param {string} PreferredClubHouse
         * @param {string} EffectiveDate
         * @param {string} Terms
        *****************************************************/
    MembershipInfo(PreferredClubHouse, EffectiveDate, Terms) {
        cy.wait(2000)
        // cy.SelectPickerWithoutFields(elems_E1GymMembershipRegistaration.PCK_PREFERREDCLUBHOUSE, PreferredClubHouse)
        // cy.Click(elems_E1GymMembershipRegistaration.PCK_PREFERREDCLUBHOUSE)
        // cy.wait(5000)
        // cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, PreferredClubHouse)
        // cy.Click(elems_Picker.BTN_SELECT)
        cy.EnterText('//input[@id="membershipTerm"]', Terms)
        cy.EnterDate(elems_E1GymMembershipRegistaration.DATE_EFFECTIVEDATE, EffectiveDate)
        cy.wait(500)
        cy.xpath('//label[@for="membershipPeriod"]').should('be.visible')

    }
    /*****************************************************
         * Method: FillOutOtherInfo
         * Description: This function fillout other information

        *****************************************************/
    FillOutOtherInfo() {
        
        cy.Click(elems_E1GymMembershipRegistaration.CHK_TERMCONDITION)
        cy.Click(elems_E1GymMembershipRegistaration.CHK_INDEMNITYWAIVER)
        
       

    }

    


}
export default new E1GymMembershipRegistration