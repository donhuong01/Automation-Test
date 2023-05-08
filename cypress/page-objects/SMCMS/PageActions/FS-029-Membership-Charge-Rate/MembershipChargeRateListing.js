import elems_MembershipChargeRateListing from '../../Elements/Membership/FS029_Membership-Payment-Refund/MembershipChargeRateListing.js'
import elems_PageHeader from '../../Elements/Common/PageHeader.js'
import elems_Alerts from '../../Elements/Common/Alerts'

class MembershipChargeRateListing {

    /*****************************************************
     * Method: filterChargeRateList
     * Description: Filters the Membership Charge Rate Listing
     *
     * @param {string} name Name 
     * @param {string} cardType Card Type
     *****************************************************/
     filterChargeRateList({name, cardType}){

        // Enter Name
        if(name !== undefined){
            cy.EnterText(elems_MembershipChargeRateListing.TXT_NAME, name, {force: true})
        }

        // Select Card Type
        if(cardType !== undefined){
            cy.SelectDropDownItem(elems_MembershipChargeRateListing.DRP_CARDTYPE, cardType)
        }

        cy.Click(elems_MembershipChargeRateListing.BTN_SEARCHFILTERS)
    }

    /*****************************************************
     * Method: clickNameLink
     * Description: Selects a Charge Rate Item
     *
     * @param {string} nameLink Charge Rate item link in Table
     *****************************************************/
     clickNameLink(nameLink){

        // Select Charge Rate Table Link Item
        if(nameLink !== undefined){
            cy.ClickTableLinkItem(
                elems_MembershipChargeRateListing.TBL_MEMSHIPCHARGERATELIST, 
                'Name', nameLink
            )

            cy.wait(10000)

            // Validate Page Redirection
            cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Membership Charge Rate Details')
        }

        // Error Handling
        if(nameLink === undefined){
            throw new Error("MembershipChargeRateListing.clickNameLink Error!!.\
                            Please provide a value.")
        }
    }

    /*****************************************************
     * Method: verifyMemChargeRateList
     * Description: Verfies Membership Charge Rate Listing Table
     *
     * @param {string} Desc
     * @param {string} Name
     *****************************************************/
     verifyMemChargeRateList(Name, Desc){

        // memChargeRateList.forEach( data => {
            cy.VerifyTableEntry(
                elems_MembershipChargeRateListing.TBL_MEMSHIPCHARGERATELIST,
                'Description', Desc,
                'Name', Name
            )

            // cy.VerifyTableEntry(
            //     elems_MembershipChargeRateListing.TBL_MEMSHIPCHARGERATELIST,
            //     'Card Type', data.cardType,
            //     'Name', data.name
            // )

            // cy.VerifyTableEntry(
            //     elems_MembershipChargeRateListing.TBL_MEMSHIPCHARGERATELIST,
            //     'Number of Period', data.numberOfPeriod,
            //     'Name', data.name
            // )

            // cy.VerifyTableEntry(
            //     elems_MembershipChargeRateListing.TBL_MEMSHIPCHARGERATELIST,
            //     'Status', data.status,
            //     'Name', data.name,
            // )
        // })
    }

    /*****************************************************
     * Method: selectChargeRate
     * Description: Selects Membership Charge Rate Listing Item
     *
     * @param {string} chargeRateItem Charge Rate Item
     *****************************************************/
     selectChargeRate(chargeRateItem){

        // Ticks Checkbox beside item
        cy.SelectTableItem(
            elems_MembershipChargeRateListing.TBL_MEMSHIPCHARGERATELIST,
            'Name', chargeRateItem
        )
    }

    /*****************************************************
     * Method: createNew
     * Description: Create New Charge Rate Update
     *****************************************************/
     createNew(){
        cy.Click(elems_MembershipChargeRateListing.BTN_CREATENEW)
        cy.wait(10000)
        // cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Membership Charge Rate Details')
    }

    /*****************************************************
     * Method: delete
     * Description: Delete Charge Rate Item
     *****************************************************/
     delete(){
        cy.Click(elems_MembershipChargeRateListing.BTN_DELETE)
        
    }
    /*****************************************************
     * Method: deletePopupYes
     * Description: Click on delete popup Yes
     *****************************************************/
     deletePopupYes(){
         cy.Click(elems_Alerts.BTN_YES)
        
    }

    /*****************************************************
     * Method: Cancel
     * Description: Cancel Charge Rate Detail form
     *****************************************************/
     Cancel(){

        cy.Click(elems_MembershipChargeRateListing.BTN_CANCEL)
        cy.wait(10000)
        
    }

    /*****************************************************
     * Method: VerifyPageTitle
     * Description: This function verify page title
     * @param {string} ExpectedPg
     *****************************************************/
     VerifyPageTitle(ExpectedPg){

        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)
       

    }

    /*****************************************************
     * Method: FilterByNameAndCardType
     * Description: This function verify Filter By Name And CardType
     * @param {string} Name
     * @param {string} CardType
     *****************************************************/
     FilterByNameAndCardType(Name, CardType){

        // Enter Name
        cy.EnterText(elems_MembershipChargeRateListing.TXT_NAME, Name)
        
        // Select CardType from the dropdown
        cy.SelectDropDownItem(elems_MembershipChargeRateListing.DRP_CARDTYPE, CardType)

        // Click Search button
        cy.Click(elems_MembershipChargeRateListing.BTN_SEARCHFILTERS)
        cy.wait(2000)
       

    }

    /*****************************************************
     * Method: selectChargeRate
     * Description: Verify Membership Charge Rate Listing Item
     *
     * @param {string} TargetColumn targeted column
     * @param {string} chargeRateItem Charge Rate Item
     *****************************************************/
         VerifyChargeRateInListingForm(TargetColumn, chargeRateItem){

            // Ticks Checkbox beside item
            cy.VerifyTableEntry(
                elems_MembershipChargeRateListing.TBL_MEMSHIPCHARGERATELIST,
                TargetColumn, chargeRateItem
            )
        }
}

export default MembershipChargeRateListing