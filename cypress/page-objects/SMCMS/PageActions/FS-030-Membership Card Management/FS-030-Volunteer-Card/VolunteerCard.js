import elems_ReceiptListing from "../../../Elements/Club-Sales/FS040_ShoppingCart-Payment/ReceiptListing"
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_VolunteerCardGeneration from '../../../Elements/Membership/FS030_Membership-Conversion-CardManagement/VolunteerCardGeneration'
import elems_MemberCard from '../../../Elements/Membership/FS030_Membership-Conversion-CardManagement/MemberCard'

class VolunteerCard
 {
    
        
    /*****************************************************
     * Method: VerifyPageTitle
     * Description: This function will Verify Page Title
     * Author Fshahzada
     * @param {string} Title
     *****************************************************/
     VerifyPageTitle(Title){
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE,Title)
    }

/*****************************************************
 * Method: VolunteerMemberCardGenerationForm
 * Description: This function will fillOut Volunteer Member Card Generation Form
 * Author Fshahzada
 * @param {string} MemberID
 * @param {string} NRIC
 * @param {string} Name
 * @param {string} EffectiveDate
 * @param {string} ExpiryDate
 *****************************************************/
VolunteerMemberCardGenerationForm(MemberID, NRIC, Name, EffectiveDate, ExpiryDate){
        cy.ValidateElementText(elems_VolunteerCardGeneration.LBL_MEMBERID, MemberID)
        cy.ValidateElementText(elems_VolunteerCardGeneration.LBL_NRIC_ICNO, NRIC)
        cy.ValidateElementText(elems_VolunteerCardGeneration.LBL_NAME, Name)
        cy.ValidateElementText(elems_VolunteerCardGeneration.LBL_EFFECTIVEDATE, EffectiveDate)
        cy.ValidateElementText(elems_VolunteerCardGeneration.LBL_EXPIRYDATE, ExpiryDate)

    }
/*****************************************************
 * Method: Generate
 * Description: This function will Click on Generate button
 * Author Fshahzada
 *****************************************************/
Generate(){
        cy.Click(elems_VolunteerCardGeneration.BTN_GENERATE)

    }

/*****************************************************
 * Method: Cancel
 * Description: This function will Click on Cancel button
 * Author Fshahzada
 *****************************************************/
Cancel(){
        cy.Click(elems_VolunteerCardGeneration.BTN_CANCEL)

    }

/*****************************************************
 * Method: SelectMemberCardNumber
 * Description: This function will select member from Member card listing
 * Author Fshahzada
 * @param {string} Header
 * @param {string} Value
 *****************************************************/
     SelectMemberCardNumber(Header,Value){
        // cy.SelectTableItem(elems_MemberCard.MemberCardListing.TBL_MEMBERCARDLISTING ,Header,Value)
        cy.TickSpecificTableItem('Enable')
    }

/*****************************************************
 * Method: VIPMemberCardGenerationForm
 * Description: This function will fillOut VIP Member Card Generation Form
 * Author Fshahzada
 * @param {string} MemberID
 * @param {string} Name
 * @param {string} ECard
 * @param {string} PhysicalCard
 * @param {string} CardType
 * @param {string} CardCategory
 * @param {string} Status
 *****************************************************/

     VerifyCardInformation(MemberID, Name, ECard, PhysicalCard, CardType, CardCategory, Status){
        cy.wait(3000)
        cy.ValidateElementText(elems_MemberCard.CardInformation.LBL_CARDHOLDERMEMBERID, MemberID)
        cy.ValidateElementText(elems_MemberCard.CardInformation.LBL_MEMBERNAME, Name)
        cy.ValidateElementText(elems_MemberCard.CardInformation.LBL_ECARD, ECard)
        cy.ValidateElementText(elems_MemberCard.CardInformation.LBL_PHYSICALCARD, PhysicalCard)
        cy.ValidateElementText(elems_MemberCard.CardInformation.LBL_CARDTYPE, CardType)
        cy.ValidateElementText(elems_MemberCard.CardInformation.LBL_CARDCATEGORY, CardCategory)
        cy.ValidateElementText(elems_MemberCard.CardStatus.LBL_STATUS, Status)

    }



/*****************************************************
 * Method: GenerateCard
 * Description: This function will Click on Generate Card button
 * Author Fshahzada
 *****************************************************/
GenerateCard(){
    cy.Click(elems_MemberCard.BTN_GENERATECARD)

}

/*****************************************************
 * Method: ActivateECard
 * Description: This function will Click on Activate e-Card button
 * Author Fshahzada
 *****************************************************/
     ActivateECard(){
        cy.Click(elems_MemberCard.BTN_ACTIVATEECARD)
        cy.wait(5000)

    }

/*****************************************************
 * Method: ActivatePhysicalCard
 * Description: This function will Click on Activate Physical Card button
 * Author Fshahzada
 *****************************************************/
ActivatePhysicalCard(){
    cy.Click(elems_MemberCard.BTN_ACTIVATEPHYSICALCARD)
    cy.wait(5000)

}

/*****************************************************
 * Method: DeactivateECard
 * Description: This function will Click on Deactivate e-Card button
 * Author Fshahzada
 *****************************************************/
     DeactivateECard(){
        cy.Click(elems_MemberCard.BTN_DEACTIVATEECARD)

    }

/*****************************************************
 * Method: DeactivatePhysicalCard
 * Description: This function will Click on Deactivate Physical Card button
 * Author Fshahzada
 *****************************************************/
DeactivatePhysicalCard(){
    cy.Click(elems_MemberCard.BTN_DEACTIVATEECARD)

}
/*****************************************************
 * Method: PrintCard
 * Description: This function will Click on PrintCard button
 * Author Fshahzada
 *****************************************************/
PrintCard(){
    cy.Click(elems_MemberCard.BTN_PRINTCARD)

}

   
}

export default VolunteerCard
