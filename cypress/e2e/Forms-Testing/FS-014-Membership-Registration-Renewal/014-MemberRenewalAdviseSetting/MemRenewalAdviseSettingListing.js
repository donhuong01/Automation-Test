import elems_MembershipRenewalAdviceSettingDetail from '../../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/MembershipRenewalAdviceSettingDetail'
import data from '../../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import MembershipRenewAdviseSettingListing from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-MembershipRenewalAdviseSetting/MembershipRenewAdviseSettingList'
import login from '../../../../fixtures/login'

beforeEach(() => {

//    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)
})


describe ('[TS10] Membership Renewal Advice Setting Detail Form', function (){

    //Page definiton
    const memRenewSetDetail = new MembershipRenewAdviseSettingDetail()

    //Assigning form data 
    const Name = data.memberRenewlAdvice.Name
    const Description = data.memberRenewlAdvice.Description
    const MemberCategory = data.memberRenewlAdvice.MemberCategory
    const Gender = data.memberRenewlAdvice.Gender
    const MemberTypeCode = data.memberRenewlAdvice.MemberTypeCode
    const MemberStatusReason = data.memberRenewlAdvice.MemberStatusReason         //Drop down has no data
    const ExpiryDateFrom = data.memberRenewlAdvice.ExpiryDateFrom
    const ExpiryDateTo = data.memberRenewlAdvice.ExpiryDateTo
    const DateofBirthFrom = data.memberRenewlAdvice.DateofBirthFrom
    const DateofBirthTo = data.memberRenewlAdvice.DateofBirthTo
    const MemberCardType = data.memberRenewlAdvice.MemberCardType
    const PostalCode = data.memberRenewlAdvice.PostalCode
    const ZoneId = data.memberRenewlAdvice.ZoneId
    const AutoDeduction = data.memberRenewlAdvice.AutoDeduction
    const MaritalStatus = data.memberRenewlAdvice.MaritalStatus
    const ExcludeBadAddress = data.memberRenewlAdvice.ExcludeBadAddress
    const ExcludeRegistrationInAdvance = data.memberRenewlAdvice.ExcludeRegistrationInAdvance
    const ExcludeTerminatedInAdvance = data.memberRenewlAdvice.ExcludeTerminatedInAdvance                

    
    it('[TC01] To be able to test updating and cancelling a Membership Renewal Advice Setting', function() {

        cy.visit('/membership/renewalAdviceSettingList') //visit the form
        cy.wait(5000) //wait for 10 secs

        // Verify Page Title
        memRenewSetDetail.verifyPageTitle('Membership Renewal Advice Setting Listing')
       
        // Click on table item
        memRenewSetDetail.ClickonItem(Name)

        //fill out the form
        memRenewSetDetail.fillOutForm(Name,Description,MemberCategory,Gender,MemberTypeCode,MemberStatusReason,
            ExpiryDateFrom,ExpiryDateTo,DateofBirthFrom,DateofBirthTo,MemberCardType,
            PostalCode,ZoneId,AutoDeduction,MaritalStatus,ExcludeBadAddress,ExcludeTerminatedInAdvance,
            ExcludeRegistrationInAdvance
        )

        //Cancel the form 
        memRenewSetDetail.cancelForm() 

        // Verify Page Title
        memRenewSetDetail.verifyPageTitle('Membership Renewal Advice Setting Listing')


    })

    it('[TC02] Updating a  Membership Renewal Advice Setting', function() {

        cy.visit('/membership/renewalAdviceSettingList') //visit the form
        cy.wait(5000) //wait for 10 secs

        // Verify Page Title
        memRenewSetDetail.verifyPageTitle('Membership Renewal Advice Setting Listing')
       
        // Click on table item
        memRenewSetDetail.ClickonItem(Name)

        //fill out the form
        memRenewSetDetail.fillOutForm(Name,Description,MemberCategory,Gender,MemberTypeCode,MemberStatusReason,
            ExpiryDateFrom,ExpiryDateTo,DateofBirthFrom,DateofBirthTo,MemberCardType,
            PostalCode,ZoneId,AutoDeduction,MaritalStatus,ExcludeBadAddress,ExcludeTerminatedInAdvance,
            ExcludeRegistrationInAdvance
        )

        //Save the form     
        memRenewSetDetail.saveForm()

        // Verify Page Title
        memRenewSetDetail.verifyPageTitle('Membership Renewal Advice Setting Detail')


    })
 })