/*****************************************************
 * Page Function: Sample Script to Test Withdrawal Of Consent Form Page Actions
 *
 * @author: fshahzada
 *****************************************************/

// Import Pages
import WithdrawalOfConsentForm from "../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-WithdrawalOfConsentForm/WithdrawalOfConsentForm"
import data from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import login from '../../../../fixtures/login'
import elems_MemberListing from '../../../../page-objects/SMCMS/Elements/Membership/FS028_Membership-Admin-MaintActivities/MemberListing'

//Personal Information
const ActiveMemberID = 'A30000829'
const Nationality = data.PersonalInformation.Nationality
const FullName = data.PersonalInformation.FullName
const Gender = data.PersonalInformation.Gender
const MartailStatus = data.PersonalInformation.MartailStatus
const DOB = data.PersonalInformation.DOB
const ProfilePicture = data.PersonalInformation.ProfilePicture

//Contact and Address Information
const HandPhones = data.ContactInformation.HandPhones
const HomeNumber = data.ContactInformation.HomeNumber
const EmergencyContact = data.ContactInformation.EmergencyContact
const EmailAddress = data.ContactInformation.EmergencyContact
const MailingAddress = data.ContactInformation.MailingAddress

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)
   
    // Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

describe('Task 4206: SP-2-Page Actions-FS-014- Withdrawal of Consent Form ', function () {


    it('[TC01] To be able to test withdrawing a member', function () {

        cy.visit('/membership/memberList')

        WithdrawalOfConsentForm.verifyPageTitle('Member Listing')

        // Filter Member Listing for Active Members
        WithdrawalOfConsentForm.fillOutFilters({
            memberID : ActiveMemberID
        })
        
        // Select MemberID from the listing form
        cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING,'Member ID', ActiveMemberID)

        // Select Terminate Option
        cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Withdraw')

        // Verify Page title
        WithdrawalOfConsentForm.verifyPageTitle('Withdrawal of Consent')

        WithdrawalOfConsentForm.fillOutPersonalInfoSection(
            Nationality, FullName, Gender, MartailStatus, DOB, ProfilePicture
        )

        WithdrawalOfConsentForm.ContactAndAddressInformation(
            HandPhones, HomeNumber, EmergencyContact, EmailAddress, MailingAddress 
        )

        WithdrawalOfConsentForm.Cancel()
        
    })

    it('[TC02] To be able to test generating the withdrawal of consent form and cancel', function () {

        cy.visit('/membership/memberList')

        WithdrawalOfConsentForm.verifyPageTitle('Member Listing')

        // Filter Member Listing for Active Members
        WithdrawalOfConsentForm.fillOutFilters({
            memberID : ActiveMemberID
        })
        
        // Select MemberID from the listing form
        cy.SelectTableItem(elems_MemberListing.TBL_MEMBERLISTING,'Member ID', ActiveMemberID)

        // Select Terminate Option
        cy.SelectBtnDropdownItem(elems_MemberListing.BTNDRP_MAINTENANCE,'Withdraw')

        // Verify Page title
        WithdrawalOfConsentForm.verifyPageTitle('Withdrawal of Consent')
                
        WithdrawalOfConsentForm.fillOutPersonalInfoSection(
            Nationality, FullName, Gender, MartailStatus, DOB, ProfilePicture
        )

        WithdrawalOfConsentForm.ContactAndAddressInformation(
            HandPhones, HomeNumber, EmergencyContact, EmailAddress, MailingAddress 
        )

        WithdrawalOfConsentForm.Withdraw()
        
    })
})
