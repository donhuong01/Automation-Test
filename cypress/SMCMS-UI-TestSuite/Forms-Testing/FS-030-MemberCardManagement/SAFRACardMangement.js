import data from '../../../../fixtures/Data_Module/FS-030-Membership-Card-Management/030-data'
import VIPMemberCardGeneration from '../../../../page-objects/SMCMS/PageActions/FS-030-Membership Card Management/FS-030-VIP-Card/VIPMemberCardGeneration'
import SafraCardGeneration from '../../../../page-objects/SMCMS/PageActions/FS-030-Membership Card Management/FS-030-SAFRA-Card-Generation/SAFRACardGeneration'
import login from '../../../../fixtures/login'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})


// Page Definitions
const VIPMemberCard = new VIPMemberCardGeneration()
const SafraCardGenerations = new SafraCardGeneration()



const { MemberID, NRIC, Name, ECard, PhysicalCard, CardType, CardCategory, MemberCategory } = data.SAFRACardGeneration



describe('[TS020] VIP Appointment Term Registration Managment', function () {



    it.only('[TC01] Generate and verify Member Card', function () {

        cy.visit('/membership/memberList')
        cy.wait(5000)

        //Verify Page Title
        SafraCardGenerations.verifyPageTitle('Member Listing')

        // Filter By memeberID and Select
        SafraCardGenerations.SelectTableItem(MemberID)

        // Click on Membership DropDown and select Operation
        SafraCardGenerations.membershipOperation('Cards')

        //Verify Page Title
        // SafraCardGenerations.verifyPageTitle('Member Card Listing')

        // Verify VIP Member Card Generation
        // SafraCardGenerations.VIPMemberCardGenerationForm(MemberID, NRIC, Name)

        // Click on Generate button
        // VIPMemberCard.Generate()

        //Verify Notifcation message
        // SafraCardGenerations.VerifySuccessMSG('Record has been saved successfully.')

        //Verify Page Title
        SafraCardGenerations.verifyPageTitle('Member Card Listing')

        //Select Member Card Listing
        VIPMemberCard.SelectMemberCardNumber('Member ID', MemberID)

        // Verify Card information
        VIPMemberCard.VerifyCardInformation(MemberID, Name, ECard, PhysicalCard, CardType, CardCategory)


        //Select Member Card Listing
        VIPMemberCard.SelectMemberCardNumber('Member ID', MemberID)

        //Click on E-Card
        VIPMemberCard.ActivateECard()

        //Select Member Card Listing
        VIPMemberCard.SelectMemberCardNumber('Member ID', MemberID)

        //Click on Physical Card
        VIPMemberCard.ActivatePhysicalCard()

        // Verify Card information
        VIPMemberCard.VerifyCardInformation(MemberID, Name, "InActive", "Active", CardType, CardCategory)

        //Select Member Card Listing
        VIPMemberCard.SelectMemberCardNumber('Member ID', MemberID)

        //Generate Card
        VIPMemberCard.GenerateCard()

        //Verify Page Title
        SafraCardGenerations.verifyPageTitle('SAFRA Card Generation')

        // Verify SAFRA Card Generation info
        SafraCardGenerations.VIPMemberCardGenerationForm(MemberID, NRIC, Name)

        // Click on Generate button
        SafraCardGenerations.SelectReasonCode('Registration')

        // Click on Generate button
        VIPMemberCard.Generate()

        //Select Member Card Listing
        VIPMemberCard.SelectMemberCardNumber('Member ID', MemberID)

        // Verify Card information
        VIPMemberCard.VerifyCardInformation(MemberID, Name, "Inactive", "Inactive", CardType, CardCategory)

        //Select Member Card Listing
        VIPMemberCard.SelectMemberCardNumber('Member ID', MemberID)

        // Click on Generate button
        SafraCardGenerations.PrintCard()

    })

})