import data from '../../../fixtures/Data_Module/FS-030-Membership-Card-Management/030-data'
import VIPAppointmentTermRegistrationListingForm from '../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-VIP Appointment Term Registration/VIPAppointmentTermRegistrationListingForm'
import VIPAppointmentTermRegistrationDetailForm from '../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-VIP Appointment Term Registration/VIPAppointmentTermRegistrationDetailForm'
import VIPMemberCardGeneration from '../../../page-objects/SMCMS/PageActions/FS-030-Membership Card Management/FS-030-VIP-Card/VIPMemberCardGeneration'



 // Page Definitions
 const VIPAppTermRegDetail = new VIPAppointmentTermRegistrationDetailForm()
 const VIPAppointmentTerm = new VIPAppointmentTermRegistrationListingForm()
 const VIPMemberCard = new VIPMemberCardGeneration()

 const MemberID = data.VIPAppointmentTermRegDetail.MemberID
 const Name = data.VIPAppointmentTermRegDetail.Name
 const NRIC = data.VIPAppointmentTermRegDetail.NRIC
 const AppointmentID = data.VIPAppointmentTermRegDetail.AppointmentID
 const Type = data.VIPAppointmentTermRegDetail.Type
 const StartDate = data.VIPAppointmentTermRegDetail.StartDate
 const EndDate = data.VIPAppointmentTermRegDetail.EndDate


 const {Title, ECard, PhysicalCard, CardType, CardCategory, MemberCategory} = data.VIPMemberCardGeneration

 const VIPCardManagement = (MemberID, Name, NRIC, CardType) => {


describe('[TS020] VIP Card Managment', function () {



 it('[TC01] Creating New Appoinment Term Registration', function () {

     cy.visit('/membership/vipAppointmentTermRegistrationListing')
     cy.wait(10000)

     //Verify Page Title
     VIPAppTermRegDetail.verifyPageTitle('VIP Appointment Term Registration Listing')

     //Click create new button
     VIPAppTermRegDetail.CreateNew()

     //Verify Page Title
     VIPAppTermRegDetail.verifyPageTitle('VIP Appointment Term Registration Detail')

     //Fill Out Detail Form
     VIPAppTermRegDetail.fillOutVipAppointmentTermRegDetailForm(MemberID, Name, NRIC,
          AppointmentID, Type, StartDate, EndDate)

     //Save Detail Form
     VIPAppTermRegDetail.saveForm()

     //Verify Success Message
     VIPAppTermRegDetail.VerifySuccessMSG('Record has been saved successfully.')

     //Verify Page Title
     VIPAppTermRegDetail.verifyPageTitle('VIP Appointment Term Registration Listing')


 })

 it('[TC02] Generate and verify Member Card', function () {

     cy.visit('/membership/vipAppointmentTermRegistrationListing')
     cy.wait(10000)

     //Verify Page Title
     VIPAppTermRegDetail.verifyPageTitle('VIP Appointment Term Registration Listing')

     // Filter By memeberID and Select
     VIPAppointmentTerm.SelectMemberID(MemberID)

     // Click on Generate Card
     VIPAppointmentTerm.Cards('Generate Card')

    //Verify Page Title
    VIPAppTermRegDetail.verifyPageTitle('VIP Member Card Generation')

    // Verify VIP Member Card Generation
    VIPMemberCard.VIPMemberCardGenerationForm(MemberID, NRIC, Name, Title)

    // Click on Generate button
    VIPMemberCard.Generate()

    //Verify Notifcation message
    VIPAppTermRegDetail.VerifySuccessMSG('Record has been saved successfully.')

    //Verify Page Title
    VIPAppTermRegDetail.verifyPageTitle('Member Card Listing')

    //Select Member Card Listing
    VIPMemberCard.SelectMemberCardNumber('Member ID', MemberID)
    
    // Verify Card information
    VIPMemberCard.VerifyCardInformation(MemberID, Name, ECard, PhysicalCard, CardType, CardCategory)


    //Select Member Card Listing
    VIPMemberCard.SelectMemberCardNumber('Member ID', MemberID)

    // //Click on Deactivate E-Card
    // VIPMemberCard.DeactivateECard()
    
    // //Click on E-Card
    // VIPMemberCard.ActivateECard()

    //Select Member Card Listing
    VIPMemberCard.SelectMemberCardNumber('Member ID', MemberID)

    //Click on Physical Card
    VIPMemberCard.ActivatePhysicalCard()

    // Verify Card information
    VIPMemberCard.VerifyCardInformation(MemberID, Name, "Active", "Active", CardType, CardCategory)



 })

})
}
export default VIPCardManagement