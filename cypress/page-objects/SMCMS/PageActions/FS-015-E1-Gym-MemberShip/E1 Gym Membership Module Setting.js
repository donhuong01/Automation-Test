import elems_E1GymMembershipModuleSetting from '../../Elements/FS-015-E1-Gym-Membership/E1 Gym Membership Module Setting'

class E1GymMembershipModuleSetting {

    /*****************************************************
        * Method: Save
        * Description: This function Click on Save button
       ****************************************************/
    Save() {

        cy.Click(elems_E1GymMembershipModuleSetting.BTN_SAVE)

    }
    /*****************************************************
        * Method: Cancel
        * Description: This function Click on Cancel button
       ****************************************************/
    Cancel() {

        cy.Click(elems_E1GymMembershipModuleSetting.BTN_CANCEL)

    }
    /*****************************************************
        * Method: FilloutMembershipSection
        * Description: This function Fillout Membership Section
       ****************************************************/
    FilloutMembershipSection(GracePeriod, TerminateMemAfterExpiration, MinMembDeferPeriod, MinMemRejoinPeriod, WaiverProductItem) {
        cy.xpath(elems_E1GymMembershipModuleSetting.TXT_GRACEPERIODFORSIGNUP).clear()
        cy.EnterText(elems_E1GymMembershipModuleSetting.TXT_GRACEPERIODFORSIGNUP, GracePeriod)
        cy.xpath(elems_E1GymMembershipModuleSetting.TXT_TERMINATEMEMBERSHIPAFTEREXPIRATION).clear()
        cy.EnterText(elems_E1GymMembershipModuleSetting.TXT_TERMINATEMEMBERSHIPAFTEREXPIRATION, TerminateMemAfterExpiration)
        cy.xpath(elems_E1GymMembershipModuleSetting.TXT_MINIMUMMEMBERSHIPDEFERMENT).clear()
        cy.EnterText(elems_E1GymMembershipModuleSetting.TXT_MINIMUMMEMBERSHIPDEFERMENT, MinMembDeferPeriod)
        cy.xpath(elems_E1GymMembershipModuleSetting.TXT_MINIMUMMEMBERSHIPREJOIN).clear()
        cy.EnterText(elems_E1GymMembershipModuleSetting.TXT_MINIMUMMEMBERSHIPREJOIN, MinMemRejoinPeriod)
        // cy.SelectPickerDifferentItems(elems_E1GymMembershipModuleSetting.PCK_WAIVERPRODUCTITEM,
        //     elems_E1GymMembershipModuleSetting.TXT_PRODUCTNUMBER, WaiverProductItem)

    }
    /*****************************************************
        * Method: FilloutTransactionSection
        * Description: 
       ****************************************************/
    FilloutTransactionSection() {

        cy.TickCheckBox(elems_E1GymMembershipModuleSetting.CHK_REGISTRATIONTRANSACTIONEARNPOINT, 'CHECK')
        cy.TickCheckBox(elems_E1GymMembershipModuleSetting.CHK_RENEWALTRANSACTIONEARNPOINT, 'CHECK')
        cy.TickCheckBox(elems_E1GymMembershipModuleSetting.CHK_REINSTATEMENTTRANSACTIONEARNPOINT, 'CHECK')

    }
    /*****************************************************
        * Method: ReminderSection
        * Description: 
       ****************************************************/
    ReminderSection() {

        cy.TickCheckBox(elems_E1GymMembershipModuleSetting.CHK_REGISTRATIONTRANSACTIONEARNPOINT, 'CHECK')
        cy.TickCheckBox(elems_E1GymMembershipModuleSetting.CHK_RENEWALTRANSACTIONEARNPOINT, 'CHECK')
        cy.TickCheckBox(elems_E1GymMembershipModuleSetting.CHK_REINSTATEMENTTRANSACTIONEARNPOINT, 'CHECK')

    }
    /*****************************************************
        * Method: FilloutTransactionSection
        * Description: 
       ****************************************************/
    FilloutTransactionSection() {

        cy.TickCheckBox(elems_E1GymMembershipModuleSetting.CHK_REGISTRATIONTRANSACTIONEARNPOINT, 'CHECK')
        cy.TickCheckBox(elems_E1GymMembershipModuleSetting.CHK_RENEWALTRANSACTIONEARNPOINT, 'CHECK')
        cy.TickCheckBox(elems_E1GymMembershipModuleSetting.CHK_REINSTATEMENTTRANSACTIONEARNPOINT, 'CHECK')

    }
}
export default new E1GymMembershipModuleSetting