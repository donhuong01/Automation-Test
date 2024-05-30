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
    ConversionInformation(ConversionReason) {

        cy.xpath('//label[@for="lblInterestGroup"]',{timeeout: 30000}).then($IG => {

            const Dest = $IG.text().trim()

            cy.wait(2000)
            cy.Click(elems_IGMembershipConversion.PCK_DESTINATIONIG)
            cy.wait(2000)

            // if (DestinationIG === 'BITEZ') {
            //     cy.SelectTableItem(elems_IGMembershipConversion.TBL_SELECTDESTINATIONIG, 'Name', "BITEX")
            // } else {
                cy.TickSpecificTableItem("Test IG Details - Main")
            // }
    
            cy.Click(elems_IGMembershipConversion.BTN_SELECT)
            cy.EnterText(elems_IGMembershipConversion.TXT_CONVERSIONREASON, ConversionReason)

        })



       

    }



}

export default new InterestGroupMembershipConversion