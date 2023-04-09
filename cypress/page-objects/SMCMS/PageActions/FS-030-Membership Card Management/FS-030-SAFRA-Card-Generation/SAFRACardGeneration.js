import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_SafraCardGeneration from '../../../Elements/Membership/FS030_Membership-Conversion-CardManagement/SafraCardGeneration'
import elems_MemberCard from '../../../Elements/Membership/FS030_Membership-Conversion-CardManagement/MemberCard'
import elems_Picker from '../../../Elements/Common/Picker'
import elems_MemberListing from '../../../../../page-objects/SMCMS/Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'

class SafraCardGeneration {
    
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
     * Method: VIPMemberCardGenerationForm
     * Description: This function will fillOut VIP Member Card Generation Form
     * Author Fshahzada
     * @param {string} MemberID
     * @param {string} NRIC
     * @param {string} Name
     * @param {string} Title
     *****************************************************/
    VIPMemberCardGenerationForm(MemberID, NRIC, Name){
            cy.ValidateElementText(elems_SafraCardGeneration.LBL_MEMBERID, MemberID)
            cy.ValidateElementText(elems_SafraCardGeneration.LBL_NRIC_ICNO, NRIC)
            cy.ValidateElementText(elems_SafraCardGeneration.LBL_NAME, Name)

        }
    /*****************************************************
     * Method: Generate
     * Description: This function will Click on Generate button
     * Author Fshahzada
     *****************************************************/
    Generate(){
            cy.Click(elems_SafraCardGeneration.BTN_GENERATE)

        }
   
    /*****************************************************
     * Method: Cancel
     * Description: This function will Click on Cancel button
     * Author Fshahzada
     *****************************************************/
    Cancel(){
            cy.Click(elems_SafraCardGeneration.BTN_CANCEL)

        }

    /*****************************************************
     * Method: SelectMemberCardNumber
     * Description: This function will select member from Member card listing
     * Author Fshahzada
     * @param {string} Header
     * @param {string} Value
     *****************************************************/
         SelectMemberCardNumber(Header,Value){
            cy.SelectTableItem(elems_MemberCard.MemberCardListing.TBL_MEMBERCARDLISTING ,Header,Value)
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
     *****************************************************/

         VerifyCardInformation(MemberID, Name, ECard, PhysicalCard, CardType, CardCategory){
            cy.wait(3000)
            cy.ValidateElementText(elems_MemberCard.CardInformation.LBL_CARDHOLDERMEMBERID, MemberID)
            cy.ValidateElementText(elems_MemberCard.CardInformation.LBL_MEMBERNAME, Name)
            cy.ValidateElementText(elems_MemberCard.CardInformation.LBL_ECARD, ECard)
            cy.ValidateElementText(elems_MemberCard.CardInformation.LBL_PHYSICALCARD, PhysicalCard)
            cy.ValidateElementText(elems_MemberCard.CardInformation.LBL_CARDTYPE, CardType)
            cy.ValidateElementText(elems_MemberCard.CardInformation.LBL_CARDCATEGORY, CardCategory)

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

    /*****************************************************
    * Method: VerifySuccessMSG
    * Description: this function verify Notification msg
    * @param NotificationMsg
    *****************************************************/

        VerifySuccessMSG(NotificationMsg)
        {
           cy.ValidateElementText(elems_Picker.MSG_NOTIFICATION, NotificationMsg)
   
        }
       /*****************************************************
     * Method: Detail Form Verification
     * Description: Varify the tile of the Detail Form
     * @param ExpectedPg
     *****************************************************/
    verifyPageTitle(ExpectedPg){ 

        cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)
        
    }

    /*****************************************************
     * Method: membershipOperation
     * Description: This function selects the membership operation
     * @param {String} membershipOperation 
    *****************************************************/
    
     membershipOperation(membershipOperation)
     {
         cy.Click(elems_MemberListing.BTNDRP_MEMBERSHIP)
         cy.Click(`//li[text()="${membershipOperation}"]`)
         cy.wait(5000)
 
     }

     /*****************************************************
     * Method: SelectReasonCode
     * Description: This function selects the membership operation
     * @param {String} ReasonCode 
    *****************************************************/
    
      SelectReasonCode(ReasonCode)
      {
          cy.Click(elems_SafraCardGeneration.DRP_REASONCODE)
          cy.Click(`//li[text()="${ReasonCode}"]`)
          cy.wait(5000)
  
      }

    /*****************************************************
     * Method: ClickTableItem
     * Description: This function click on table entry
     * @param {string} MemberID
    *****************************************************/

     SelectTableItem(MemberID)
     {
         cy.EnterText(elems_MemberListing.TXT_MEMBERID, MemberID)
         cy.Click(elems_MemberListing.BTN_SEARCHFILTER)
         cy.wait(3000)

         cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING,
         'Member ID', MemberID)
     
     }

    
    /*****************************************************
     * Method: VerifyMemberStatus
     * Description: This function click on table entry
     * @param {string} Name
     * @param {string} NRIC
     * @param {string} ReasonCode
    *****************************************************/

     VerifyMemberStatus(Name, NRIC, ReasonCode)
     {
         cy.EnterText(elems_MemberListing.TXT_NAME, Name)
         cy.EnterText(elems_MemberListing.TXT_NRIC, NRIC)
         cy.Click(elems_MemberListing.BTN_SEARCHFILTER)
         cy.wait(3000)

         cy.VerifyTableEntry(elems_MemberListing.TBL_MEMBERLISTING,
         'Reason Code', ReasonCode)
     
     }

    
}

export default SafraCardGeneration