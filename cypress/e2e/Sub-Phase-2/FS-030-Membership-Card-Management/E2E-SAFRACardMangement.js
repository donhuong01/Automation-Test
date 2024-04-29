import VIPMemberCardGeneration from '../../../page-objects/SMCMS/PageActions/FS-030-Membership Card Management/FS-030-VIP-Card/VIPMemberCardGeneration'
import SafraCardGeneration from '../../../page-objects/SMCMS/PageActions/FS-030-Membership Card Management/FS-030-SAFRA-Card-Generation/SAFRACardGeneration'
import data from '../../../fixtures/Data_Module/FS-030-Membership-Card-Management/030-data'


 // Page Definitions
 const VIPMemberCard = new VIPMemberCardGeneration()
 const SafraCardGenerations = new SafraCardGeneration()


 
 const {MemberID, NRIC, Name, ECard, PhysicalCard, CardType, CardCategory, MemberCategory, Title} = data.SAFRACardGeneration

const SAFRACardManagement = (MemberID, Name, NRIC, CardType) => {

describe('[TS020] SAFRA Card Managment', function () {



 it('[TC01] Generate and verify Member Card', function () {

    cy.visit('/membership/memberList')
    cy.wait(10000)

    //Verify Page Title
    SafraCardGenerations.verifyPageTitle('Member Listing')

    // Filter By memeberID and Select
    SafraCardGenerations.SelectTableItem(MemberID)

    // Click on Membership DropDown and select Operation
    SafraCardGenerations.membershipOperation('Cards')

    //Verify Page Title
    SafraCardGenerations.verifyPageTitle('Member Card Listing')

    //Select Member Card Listing
    VIPMemberCard.SelectMemberCardNumber('Member ID', MemberID)
    
   //  //Generate Card
   //  VIPMemberCard.GenerateCard()

   //  // Verify VIP Member Card Generation
   //  VIPMemberCard.SAFRACardGeneration(MemberID, NRIC, Name, 'Registration', Title)

   //  // Click on Generate button
   //  VIPMemberCard.Generate()

   //Select Member Card Listing
   VIPMemberCard.SelectMemberCardNumber('Member ID', MemberID)
    
    // Verify Card information
    VIPMemberCard.VerifyCardInformation(MemberID, Name, ECard, PhysicalCard, CardType, CardCategory)


    //Select Member Card Listing
    VIPMemberCard.SelectMemberCardNumber('Member ID', MemberID)

   //  //Click on E-Card
   //  VIPMemberCard.DeactivateECard()
    
   //  //Click on E-Card
   //  VIPMemberCard.ActivateECard()

    //Select Member Card Listing
    VIPMemberCard.SelectMemberCardNumber('Member ID', MemberID)

    //Click on Physical Card
    VIPMemberCard.ActivatePhysicalCard()

    // Verify Card information
    VIPMemberCard.VerifyCardInformation(MemberID, Name, "Active", "Active", CardType, CardCategory)

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
    VIPMemberCard.VerifyCardInformation(MemberID, Name, "Active", "Inactive", CardType, CardCategory)

    //Select Member Card Listing
    VIPMemberCard.SelectMemberCardNumber('Member ID', MemberID)

    // Click on Generate button
    SafraCardGenerations.PrintCard()

 })

})

}

export default SAFRACardManagement