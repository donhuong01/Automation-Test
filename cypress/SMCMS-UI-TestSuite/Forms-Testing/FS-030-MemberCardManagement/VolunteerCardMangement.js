import VIPMemberCardGeneration from '../../../../page-objects/SMCMS/PageActions/FS-030-Membership Card Management/FS-030-VIP-Card/VIPMemberCardGeneration'
import VolunteerAppointmentTermRegistrationDetail from '../../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-Volunteer Appointment Term Registration/VolunteerAppointmentTermRegistrationDetail'
import AppointmentTermRegistrationListingForm from '../../../../page-objects/SMCMS/PageActions/FS-025-Membership-VIP-Volunteer-Veteran-League/FS-025-Volunteer Appointment Term Registration/VolunteerAppointmentTermRegistrationListing'
import data from '../../../../fixtures/Data_Module/FS-030-Membership-Card-Management/030-data'
import VolunteerCard from '../../../../page-objects/SMCMS/PageActions/FS-030-Membership Card Management/FS-030-Volunteer-Card/VolunteerCard'
import login from '../../../../fixtures/login'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

const AppointmentTerm = new AppointmentTermRegistrationListingForm()
const VIPMemberCard = new VIPMemberCardGeneration()
const VolunteerCards = new VolunteerCard()

const AppointmentID = data.VolAppointmentTermRegistration.AppointmentID
const Last4NRICNO = data.VolAppointmentTermRegistration.Last4NRICNO
const MemberID = data.VolAppointmentTermRegistration.MemberID
const MemberName = data.VolAppointmentTermRegistration.MemberName
const Status = data.VolAppointmentTermRegistration.Type
const StartDate = data.VolAppointmentTermRegistration.StartDate
const EndDate = data.VolAppointmentTermRegistration.EndDate
const AppointmentTypeID = data.VolAppointmentTermRegistration.AppointmentTypeID

const VolunterAppTermDetail = new VolunteerAppointmentTermRegistrationDetail()

const { ECard, PhysicalCard, CardType, CardCategory, MemberCategory, CardStatus } = data.VolunteerMemberCardGeneration


describe('[TS020] Volunteer Appointment Term Registration Managment', function () {



    it('[TC02] Fillout Volunteer Appointment Registration Detail form and Verify functionality of Save button', () => {

        cy.visit('/membership/volunteerAppointmentTermRegistrationDetail')

        VolunterAppTermDetail.VerifyFormTitle('Volunteer Appointment Term Registration Detail')

        VolunterAppTermDetail.FillOutVolAppointmentTermRegDetailForm(
            MemberID, MemberName, AppointmentTypeID, StartDate, EndDate)

        VolunterAppTermDetail.ValidateNameAndNRIC(Last4NRICNO, MemberName)

        VolunterAppTermDetail.save()

        VolunterAppTermDetail.VerifyFormTitle('Volunteer Appointment Term Registration Listing')

    })

    it('[TC02] Generate and verify Member Card', function () {

        cy.visit('/membership/volunteerAppointmentTermRegistrationListing')
        cy.wait(5000)

        //Verify Page Title
        VolunterAppTermDetail.VerifyFormTitle('Volunteer Appointment Term Registration Listing')

        // Filter By memeberID and Select
        AppointmentTerm.SelectTableItem(MemberID)

        // Click on Generate Card
        AppointmentTerm.Cards('Generate Card')

        //Verify Page Title
        VolunterAppTermDetail.VerifyFormTitle('Volunteer Card Generation')

        // Verify Volunteer Card Generation information
        VolunteerCards.VolunteerMemberCardGenerationForm(MemberID, Last4NRICNO, MemberName, StartDate, EndDate)

        // // Click on Generate button
        VolunteerCards.Generate()

        // //Verify Notifcation message
        VolunterAppTermDetail.VerifySuccessMSG('Record has been saved successfully.')

        // //Verify Page Title
        VolunterAppTermDetail.VerifyFormTitle('Member Card Listing')

        // //Select Member Card Listing
        VolunteerCards.SelectMemberCardNumber('Member ID', MemberID)

        // // Verify Card information
        VolunteerCards.VerifyCardInformation(MemberID, MemberName, ECard, PhysicalCard, CardType, CardCategory, CardStatus)


        // //Select Member Card Listing
        VolunteerCards.SelectMemberCardNumber('Member ID', MemberID)

        // //Click on E-Card
        VolunteerCards.ActivateECard()

        // //Select Member Card Listing
        VolunteerCards.SelectMemberCardNumber('Member ID', MemberID)

        // //Click on Physical Card
        VolunteerCards.ActivatePhysicalCard()

        // // Verify Card information
        VolunteerCards.VerifyCardInformation(MemberID, MemberName, "Active", "Active", CardType, CardCategory, CardStatus)



    })

})