import elems_IGMembershipConversion from '../../Elements/Interest Group/InterestGroupMembershipConversion'

class InterestGroupMembershipConversion {

    /*****************************************************
          * Method: Convert
          * Description: This function Click On Convert Button
         *****************************************************/
    Convert() {

        cy.Click(elems_IGMembershipConversion.BTN_CONVERT)
    }

    /*****************************************************
        * Method: Cancel
        * Description: This function Click On Cancel Button
       *****************************************************/
    Cancel() {

        cy.Click(elems_IGMembershipConversion.BTN_CANCEL)
    }

    /*****************************************************
        * Method: ConversionInformation
        * Description: This function Fillout Conversion Information Fields
       *****************************************************/
    ConversionInformation(DestinationIG, ConversionReason) {
        cy.wait(2000)
        cy.Click(elems_IGMembershipConversion.PCK_DESTINATIONIG)
        cy.wait(3000)
        {
            if (DestinationIG === 'BITEZ') {
                cy.SelectTableItem(elems_IGMembershipConversion.TBL_SELECTDESTINATIONIG, 'Name', "BITEX")
            } else {
                cy.SelectTableItem(elems_IGMembershipConversion.TBL_SELECTDESTINATIONIG, 'Name', "BITEZ")
            }
        }
        cy.Click(elems_IGMembershipConversion.BTN_SELECT)
        cy.EnterText(elems_IGMembershipConversion.TXT_CONVERSIONREASON, ConversionReason)

    }



}

export default new InterestGroupMembershipConversion