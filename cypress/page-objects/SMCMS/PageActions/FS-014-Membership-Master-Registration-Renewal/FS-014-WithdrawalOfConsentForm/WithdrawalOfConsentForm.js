import elems_PageHeader from "../../../Elements/Common/PageHeader"
import elems_Alerts from "../../../Elements/Common/Alerts"
import elems_WithdrawalOfConsent from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/WithdrawalOfConsent'
import elems_MemberListing from '../../../Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'

class WithdrawalOfConsentForm{
    /*****************************************************
    * Method: Verify page title
    * Description: This function verifies the page title
    * @param {string} ExpectedPg
    *****************************************************/

     verifyPageTitle(ExpectedPg)

    {

      cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)

    }
    /*****************************************************
    * Method: Verify page element
    * Description: This function verifies the member name
    * @param {string} name
    *****************************************************/

     verifyPageText(name)

    {

      cy.ValidateElementText('//label[@for="lblMemberName"]', name)

    }

    /************************************************** 
         * Method:fillOutPersonalInfoSection
         * Description: This function fill Out Personal Information Section
         * @param {string} Notionality
         * @param {string} FullName
         * @param {string} Gender
         * @param {string} MartailStatus
         * @param {string} DOB
         * @param {string} ProfilePicture
    *****************************************************/


    fillOutPersonalInfoSection(Notionality, FullName, Gender, MartailStatus, DOB, ProfilePicture)
    {

        if(Notionality === 'check'){

            cy.TickCheckBox(elems_WithdrawalOfConsent.PersonalInformation.CHK_NATIONALITY, 'check')
        }
        if(FullName === 'check'){

            cy.TickCheckBox(elems_WithdrawalOfConsent.PersonalInformation.CHK_FULLNAME, 'check')
        }
        if(Gender === 'check'){

            cy.TickCheckBox(elems_WithdrawalOfConsent.PersonalInformation.CHK_GENDER, 'check')
        }
        if(MartailStatus === 'check'){

            cy.TickCheckBox(elems_WithdrawalOfConsent.PersonalInformation.CHK_MARITALSTATUS, 'check')
        }
        if(DOB === 'check'){

            cy.TickCheckBox(elems_WithdrawalOfConsent.PersonalInformation.CHK_DATEOFBIRTH, 'check')
        }
        if(ProfilePicture === 'check'){

            cy.TickCheckBox(elems_WithdrawalOfConsent.PersonalInformation.CHK_PROFILEPICTURE, 'check')
        }

    }

    /************************************************** 
    * Method:fillOutPersonalInfoSection
    * Description: This function fill Out Personal Information Section
    * @param {string} HandPhones
    * @param {string} HomeNumber
    * @param {string} EmergencyContact
    * @param {string} EmailAddress
    * @param {string} MailingAddress
    *****************************************************/
    ContactAndAddressInformation(HandPhones, HomeNumber, EmergencyContact, EmailAddress, MailingAddress){

        if(HandPhones === 'check'){
            cy.TickCheckBox(elems_WithdrawalOfConsent.ContactInformation.CHK_HANDPHONE, 'check')
        }
        if(HomeNumber === 'check'){
            cy.TickCheckBox(elems_WithdrawalOfConsent.ContactInformation.CHK_HOMENUMBER, 'check')
        }
        if(EmergencyContact === 'check'){
            cy.TickCheckBox(elems_WithdrawalOfConsent.ContactInformation.CHK_EMERGENCYCONTACT, 'check')
        }
        if(EmailAddress === 'check'){
            cy.TickCheckBox(elems_WithdrawalOfConsent.ContactInformation.CHK_EMAILADDRESS, 'check')
        }
        if(MailingAddress === 'check'){
            cy.TickCheckBox(elems_WithdrawalOfConsent.AddressInformation.CHK_MAILINGADDRESS, 'check')
        }

    }
    /************************************************** 
    * Method: Withdraw the form 
    * Description: This function click Withdraw button  
    *****************************************************/
      Withdraw()
     {
        cy.Click(elems_WithdrawalOfConsent.BTN_WITHDRAW)
        cy.Click(elems_Alerts.BTN_YES)

     }
    /************************************************** 
    * Method: PurgeMemberData
    * Description: This function click Purge Member Data button  
    *****************************************************/
     PurgeMemberData()
     {
        cy.Click(elems_WithdrawalOfConsent.BTN_PURGEMEMBERDATA)

     }
    /************************************************** 
    * Method: Cancel the Form 
    * Description: This function click cancel button
    *****************************************************/

     Cancel()
     {
        cy.Click(elems_WithdrawalOfConsent.BTN_CANCEL)
     }

     fillOutFilters({ name, memberID, NRIC }) {
        if (memberID !== undefined) {
            cy.EnterText(elems_MemberListing.TXT_MEMBERID, memberID)
        }

        cy.Click(elems_MemberListing.BTN_SEARCHFILTER);
    }


}   
export default new WithdrawalOfConsentForm
