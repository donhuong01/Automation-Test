
import login from '../../../fixtures/login'

import MemberRegistrationPrincipal from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Member Registration/MemberRegistrationPrincipal'
import elems_Landing from '../../../page-objects/SMCMS/Elements/Common/Customer_LandingPage'
import MembershipTenureSelection from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Membership Tenure Selection/MembershipTenureSelection'
import data from '../../../fixtures/Data_Module/FS-014-Membership-Registration-Renewal/014-data'
import ShoppingCartPayments from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-Shopping Cart and Payment/ShoppingCartandPayments'
import CustomerCreationPage from '../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-CustomerCreation/CustomerCreation'
import Customerdata from '../../../fixtures/Data_Module/CustomerCreationData'
import elems_CustomerCheckInPage from '../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCheckInPage'
import IGMembershipRegistration from '../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/Interest Group Membership Registarion'
import IGRegistration from '../../../fixtures/Data_Module/FS-016-Interest-Group/FS-016-Interest-Group-Management'

//Page definition
const MemRegPrincipal = new MemberRegistrationPrincipal()
const MemTenureSelect = new MembershipTenureSelection()
const ShoppingCart = new ShoppingCartPayments()
const CustomerCreation = new CustomerCreationPage()


const PrincipalName = Customerdata.CustomerCreationPrincipal.RegistrationInformation.name
const PrincipalEmail = Customerdata.CustomerCreationPrincipal.ContactInformation.emailAddress
// const CustomerNRICFull = 'S9191352F'

// const CustomerNRIC = "352F"
const { IGMainSelectionBox, IGSelection, IGLocationSelection, MembershipTenure, EffectiveDate,
    AgreeWithTermAndCondition, AgreeWithIndemnityWaiver } = IGRegistration.IGMembershipRegistration

// beforeEach(() => {

//     // Set local storage for QA Enviroment
//     cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

//     // Set local storage for UAT Enviroment
//     // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
// })

//TODO to separate AutoGenerateNRIC in a separate file
//#region AutoGenerateNRIC
function pad(num, size) {
    var s = "0000000" + num;
    return s.substr(s.length - size);
}

// first = S,T,F,G age=10-100
function generate(first, age) {
    age = parseInt(age, 10);
    if (first != 'S' && first != 'T' && first != 'F' && first != 'G') return;
    if (!(age >= -1 && age <= 9)) age = -1;

    // The IC Generator Algorithm
    var chars = pad(Math.floor(Math.random() * 9999999), 7).split('');
    if (age != -1) chars[0] = age;

    var output = first + chars.join('');

    chars[0] *= 2;
    chars[1] *= 7;
    chars[2] *= 6;
    chars[3] *= 5;
    chars[4] *= 4;
    chars[5] *= 3;
    chars[6] *= 2;

    var sum = 0;
    var offset = (first == "T" || first == "G") ? 4 : 0;
    var st = ["J", "Z", "I", "H", "G", "F", "E", "D", "C", "B", "A"];
    var fg = ["X", "W", "U", "T", "R", "Q", "P", "N", "M", "L", "K"];
    for (var i = 0; i <= 6; i++) {
        sum += chars[i];
    }
    var temp = (offset + sum) % 11;

    var theAlpha = "";
    if (first == "S" || first == "T") {
        theAlpha = st[temp];
    } else if (first == "F" || first == "G") {
        theAlpha = fg[temp];
    } else theAlpha = "?";

    return output + theAlpha;
}

const nricGenerator = () => {
    const generated = generate("S", 40);
    console.log("Generated NRIC:", generated); // Add this line for debugging
    return generated;
};
//#endregion

const InterestGroupMembershipRegistration = () => {

    const CustomerNRICFull = nricGenerator()

    const CustomerNRIC = CustomerNRICFull.substr(CustomerNRICFull.length - 4);

    describe('[TS01] Interest Group Membership Registration Management', function () {


        it('[TC01] Membership Creation and Principal Registration, Interest Group Membership Registration', function () {

            cy.visit('/membership/customerCheckin')
            cy.wait(5000)
            cy.Click(elems_CustomerCheckInPage.RBTN_NRIC)
            cy.EnterDate(elems_CustomerCheckInPage.DATE_DATEOFBIRTH, Customerdata.CustomerCreationPrincipal.RegistrationInformation.DOB)
            cy.log("Generated NRIC:", CustomerNRICFull)
            cy.log("trimmed", CustomerNRIC)
            cy.EnterText(elems_CustomerCheckInPage.TXT_LAST4DIGITSNRIC, CustomerNRIC)
            cy.Click(elems_CustomerCheckInPage.BTN_CHECKIN)
            cy.wait(2000)
            cy.Click(elems_CustomerCheckInPage.BTN_CREATNEW)

            CustomerCreation.fillOutRegistrationInfo({
                name: PrincipalName,
                DOB: Customerdata.CustomerCreationPrincipal.RegistrationInformation.DOB,
                gender: Customerdata.CustomerCreationPrincipal.RegistrationInformation.gender,
            });

            CustomerCreation.fillOutAddressInformation({
                postalCode: Customerdata.CustomerCreationPrincipal.AddressInformation.postalCode,
                address: Customerdata.CustomerCreationPrincipal.AddressInformation.address,
                unitNumber: Customerdata.CustomerCreationPrincipal.AddressInformation.unitNumber,
                POBOx: Customerdata.CustomerCreationPrincipal.AddressInformation.POBOx,
                myMailbox: Customerdata.CustomerCreationPrincipal.AddressInformation.myMailbox
            });

            CustomerCreation.fillOutContactInformation({
                handPhone: '86585896',
                emailAddress: PrincipalEmail,
                emergencyContact: Customerdata.CustomerCreationPrincipal.ContactInformation.emergencyContact,
                homeNumber: '62673705',

            });


            CustomerCreation.save();

            ///////////////////////////////PRINCIPAL REGISTRATION////////////////////////////////////////

            cy.Click(elems_Landing.SAFRA_Member)
            cy.Click(elems_Landing.Membership_Registration)
            cy.wait(8000)

            MemRegPrincipal.verifyPersonalInformation({
                MemberCategory: data.memberregistrationprincipal.Personal_Info.MemberCategory,
                NameOnNRIC: PrincipalName,
                NameOnCard: PrincipalName,
                Nric: CustomerNRICFull,
                Gender: data.memberregistrationprincipal.Personal_Info.Gender,
                DateofBirth: data.memberregistrationprincipal.Personal_Info.DateofBirth,
                Age: data.memberregistrationprincipal.Personal_Info.Age,
                NSStatus: data.memberregistrationprincipal.Personal_Info.NSStatus,
                NSRank: data.memberregistrationprincipal.Personal_Info.NSRank,
                MemberType: data.memberregistrationprincipal.Personal_Info.MemberType,
                Nationality: data.memberregistrationprincipal.Personal_Info.Nationality,
                MaritalStatus: data.memberregistrationprincipal.Personal_Info.MaritalStatus,
                CardType: data.memberregistrationprincipal.Personal_Info.CardType,
                InterestinDBSCard: data.memberregistrationprincipal.Personal_Info.InterestinDBSCard,
            })



            MemRegPrincipal.SaveAndNextPrincipal()
            cy.wait(10000)

            MemTenureSelect.principalTenureSelection(PrincipalName, '10 Years')

            MemTenureSelect.addToCart()

            ShoppingCart.fillOutandApplyPayment('CASH')

            cy.wait(10000)

            // cy.visit('/membership/customerCheckin')
            // cy.wait(3000)
            // cy.EnterText('//input[@id="txtMemberId"]', MemberID)
            // cy.Click('//button[@form="formCustomerCheckIn"]')
            // cy.wait(5000)

            cy.visit('/membership/interestGroupMainSelection')
            cy.wait(4000)

            IGMembershipRegistration.ClickOnBox(IGMainSelectionBox)

            IGMembershipRegistration.ClickOnBox(IGSelection)

            IGMembershipRegistration.ClickOnBox(IGLocationSelection)

            IGMembershipRegistration.SelectMembershipTerm(MembershipTenure)

            IGMembershipRegistration.MembershipEffectiveDate(EffectiveDate)

            IGMembershipRegistration.AgreeWithTermCondition(AgreeWithTermAndCondition)

            IGMembershipRegistration.AgreewithIndemnityWaiver(AgreeWithIndemnityWaiver)

            // IGMembershipRegistration.AddWaiver('Registration')

            cy.wait(2000)
            MemTenureSelect.addToCart()

            ShoppingCart.fillOutandApplyPayment('CASH')

            cy.wait(15000)

            IGMembershipRegistration.VerifyItemInIGMemListingTBL(PrincipalName)
            //Logout
            cy.LogoutOfSmcms()

        })


    })

}
export default InterestGroupMembershipRegistration