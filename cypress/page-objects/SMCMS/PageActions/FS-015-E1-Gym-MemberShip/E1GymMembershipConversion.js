import elems_E1GymMembershipConversion from "../../Elements/FS-015-E1-Gym-Membership/E1 Gym Membership Conversion"

class E1GymMembershipConversion {

    /*****************************************************
         * Method: Convert
         * Description: This function Click on Convert button
        ****************************************************/
    Convert() {

        cy.Click(elems_E1GymMembershipConversion.BTN_CONVERT)

    }
    /*****************************************************
         * Method: Cancel
         * Description: This function Click on Cancel button
        ****************************************************/
    Cancel() {

        cy.Click(elems_E1GymMembershipConversion.BTN_CANCEL)

    }
    /*****************************************************
         * Method: SAFRAMembershipInformation
         * Description: This function Verify SAFRA Membership Information Labels
        ****************************************************/
    SAFRAMembershipInformation(SAFRAMemberID, CustomerName, SAFRAMemberStatus, SAFRAMemberExpiryDate) {

        cy.ValidateElementText(elems_E1GymMembershipConversion.LBL_SAFRAMEMBERID, SAFRAMemberID)
        cy.ValidateElementText(elems_E1GymMembershipConversion.LBL_CUSTOMERNAME, CustomerName)
        cy.ValidateElementText(elems_E1GymMembershipConversion.LBL_SAFRAMEMBERSTATUS, SAFRAMemberStatus)
        cy.ValidateElementText(elems_E1GymMembershipConversion.LBL_SAFRAMEMEXPIRYDATE, SAFRAMemberExpiryDate)

    }
    /*****************************************************
         * Method: E1GymMembershipInformation
         * Description: This function Verify E1 Gym Membership Information Labels
        ****************************************************/
    E1GymMembershipInformation(E1GymMembershipID, E1GymMembership, E1GymTermStart, E1GymTermEnd) {

        cy.ValidateElementText(elems_E1GymMembershipConversion.LBL_E1GYMMEMID, E1GymMembershipID)
        cy.ValidateElementText(elems_E1GymMembershipConversion.LBL_E1GYMMEMBERSHIP, E1GymMembership)
        cy.ValidateElementText(elems_E1GymMembershipConversion.LBL_E1GYMTERMSTART, E1GymTermStart)
        cy.ValidateElementText(elems_E1GymMembershipConversion.LBL_E1GYMTERMEND, E1GymTermEnd)

    }
    /*****************************************************
         * Method: Conversion Information
         * Description: This function Fillout Conversion Information
        ****************************************************/
    ConversionInformation(ConversionReason) {
        cy.xpath('//label[@for="lblE1DependencyType"]').then(text => {
            let innertext = text.text()
            if (innertext === 'Principal') {
                cy.SelectDropDownItem(elems_E1GymMembershipConversion.DRP_MEMBERCATEGORY, 'Dependent')
            } else {
                cy.SelectDropDownItem(elems_E1GymMembershipConversion.DRP_MEMBERCATEGORY, 'Main')
            }
            cy.EnterText(elems_E1GymMembershipConversion.TXT_CONVERSIONREASON, ConversionReason)
        })

    }
}
export default new E1GymMembershipConversion