import elems_CustomerCreation from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCreation.js'
import elems_PageHeader from '../../../Elements/Common/PageHeader'

class CustomerCreation {

    fillOutRegistrationInfo({ name, DOB, gender, profilePicture }) {
        cy.log(name);
        if (name !== undefined) {
            cy.EnterText(elems_CustomerCreation.RegistrantInformation.TXT_NAME, name)
        }

        if (DOB !== undefined) {
            cy.SelectDateIg(elems_CustomerCreation.RegistrantInformation.DATE_DATEOFBIRTH, DOB)
        }

        if (gender !== undefined) {
            cy.SelectDropDownItem(elems_CustomerCreation.RegistrantInformation.DRP_GENDER, gender)
        }

        if (profilePicture !== undefined) {
            cy.UploadFile(elems_CustomerCreation.RegistrantInformation.ProfilePicture.UPL_PROFILEPICTURE, profilePicture)
        }

    }

    fillOutAddressInformation({ postalCode, address, unitNumber, POBOx, myMailbox }) {
        if (postalCode !== undefined) {
            cy.EnterText(elems_CustomerCreation.AddressInformation.MailingAddress.TXT_POSTALCODE, postalCode);
        }

        if (address !== undefined) {
            cy.EnterText(elems_CustomerCreation.AddressInformation.MailingAddress.DRP_ADDRESS, address);
        }

        if (unitNumber !== undefined) {
            cy.EnterText(elems_CustomerCreation.AddressInformation.MailingAddress.TXT_UNITNUMBER, unitNumber);
        }

        if (POBOx !== undefined) {
            cy.EnterText(elems_CustomerCreation.AddressInformation.MailingAddress.TXT_POBOX, POBOx);
        }

        if (myMailbox !== undefined) {
            cy.EnterText(elems_CustomerCreation.AddressInformation.MailingAddress.TXT_MYMAILBOX, myMailbox);
        }
    }


    fillOutContactInformation({ handPhone, emailAddress, emergencyContact, homeNumber, preferredContactModeSelectAll, preferredContactModeEmail, preferredContactModeMail, preferredContactModeSMS, preferredContactModeVoiceCall, preferredContactModePushNotification, consentInformationMarketing, consentInformationServiceNotification, consentInformationTransactional }) {
        if (handPhone !== undefined) {
            cy.EnterText(elems_CustomerCreation.ContactInformation.TXT_HANDPHONE, handPhone);
        }

        if (emailAddress !== undefined) {
            cy.xpath(elems_CustomerCreation.ContactInformation.TXT_EMAILADDRESS).clear();
            cy.EnterText(elems_CustomerCreation.ContactInformation.TXT_EMAILADDRESS, emailAddress);
        }

        if (emergencyContact !== undefined) {
            cy.EnterText(elems_CustomerCreation.ContactInformation.TXT_EMERGENCYCONTACT, emergencyContact);
        }

        // if (homeNumber !== undefined) {
        //     cy.EnterText(elems_CustomerCreation.ContactInformation.TXT_HOMENUMBER, homeNumber);
        // }

        if (preferredContactModeSelectAll !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.ContactInformation.PreferredContactMode.CHK_SELECTALL, preferredContactModeSelectAll);
        }
        if (preferredContactModeEmail !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.ContactInformation.PreferredContactMode.CHK_EMAIL, preferredContactModeEmail);
        }
        if (preferredContactModeMail !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.ContactInformation.PreferredContactMode.CHK_MAIL, preferredContactModeMail);
        }
        if (preferredContactModeSMS !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.ContactInformation.PreferredContactMode.CHK_SMS, preferredContactModeSMS);
        }
        if (preferredContactModeVoiceCall !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.ContactInformation.PreferredContactMode.CHK_VOICECALL, preferredContactModeVoiceCall);
        }
        if (preferredContactModePushNotification !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.ContactInformation.PreferredContactMode.CHK_PUSHNOTIFICATION, preferredContactModePushNotification);
        }

        if (consentInformationMarketing !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.ContactInformation.ConsentInformation.CHK_MARKETINGCONSENT, consentInformationMarketing);
        }

        if (consentInformationServiceNotification !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.ContactInformation.ConsentInformation.CHK_SERVICENOTIFICATIONCONSENT, consentInformationServiceNotification);
        }
        if (consentInformationTransactional !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.ContactInformation.ConsentInformation.CHK_TRANSACTIONALCONSENT, consentInformationTransactional);
        }
    }

    fillOutInterestAreaInformation({ clubJurong, clubPunggol, clubPayoh, clubFaber, clubTampines, clubYishun, brandEnergyOneGym, brandKidzAmaza, brandFINS, interestedAllEvents, interestedAllPeaks, interestedFitness, interestedLifelong, interestedLeisure, interestedTravel, interestedChild, interestedFood, interestedShopping, interestedMotoring, interestedHealth, interestedSAFRAPOINTS, SAFRANewsletter, groupAdventure, groupBitez, groupCommService, groupCompetitive, groupDigimedia, groupEntrep, groupFuse, groupGolf, groupMovie, groupPhotograph, groupRunning, groupShooting, groupSocialBadminton, groupTech, groupTravel }) {
        if (clubJurong !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.PreferredSafraClubs.CHK_SAFRAJURONG, clubJurong)
        }
        if (clubPunggol !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.PreferredSafraClubs.CHK_SAFRAPUNGGOL, clubPunggol)
        }
        if (clubPayoh !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.PreferredSafraClubs.CHK_SAFRATOAPAYOH, clubPayoh)
        }
        if (clubFaber !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.PreferredSafraClubs.CHK_SAFRAMTFABER, clubFaber)
        }
        if (clubTampines !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.PreferredSafraClubs.CHK_SAFRATAMPINES, clubTampines)
        }
        if (clubYishun !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.PreferredSafraClubs.CHK_SAFRAYISHUN, clubYishun)
        }

        if (brandEnergyOneGym !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.SafraBrands.CHK_ENERGYONEGYM, brandEnergyOneGym)
        }

        if (brandKidzAmaza !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.SafraBrands.CHK_KIDZAMAZE_SPLSHINDOORPLAYG, brandKidzAmaza)
        }

        if (brandFINS !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.SafraBrands.CHK_FINSSWIMSCHOOL, brandFINS)
        }

        if (interestedAllEvents !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.IAmInterestedIn.CHK_ALLEVENTSANDACTIV, interestedAllEvents)
        }

        if (interestedAllPeaks !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.IAmInterestedIn.CHK_ALLPEAKSANDPROMO, interestedAllPeaks)
        }

        if (interestedFitness !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.IAmInterestedIn.CHK_FITNESSANDADVENTURE, interestedFitness)
        }

        if (interestedChild !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.IAmInterestedIn.CHK_CHILDENRICHMNT_ACTIV, interestedChild)
        }

        if (interestedLifelong !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.IAmInterestedIn.CHK_LIFELONGLEARNING, interestedLifelong)
        }

        if (interestedLeisure !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.IAmInterestedIn.CHK_LEISUREANDENTERTAINMENT, interestedLeisure)
        }

        if (interestedFood !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.IAmInterestedIn.CHK_FOODANDBEVERAGES, interestedFood)
        }

        if (interestedShopping !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.IAmInterestedIn.CHK_SHOPPINGANDGROCERIES, interestedShopping)
        }

        if (interestedTravel !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.IAmInterestedIn.CHK_TRAVEL, interestedTravel)
        }

        if (interestedMotoring !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.IAmInterestedIn.CHK_MOTORING, interestedMotoring)
        }

        if (interestedHealth !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.IAmInterestedIn.CHK_HEALTHANDBEAUTY, interestedHealth)
        }

        if (interestedSAFRAPOINTS !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.IAmInterestedIn.CHK_SAFRAPOINTSREWARDPROGRAMME, interestedSAFRAPOINTS)
        }

        if (SAFRANewsletter !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.SafraNewsletter.CHK_ENSMAN, SAFRANewsletter)
        }

        if (groupAdventure !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRAADVENTURECLUB, groupAdventure)
        }

        if (groupBitez !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_BITEZ_FANDB, groupBitez)
        }

        if (groupCommService !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRACOMMSERVICESCLUB, groupCommService)
        }

        if (groupCompetitive !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRACOMPTTIVESPORTSCLUB, groupCompetitive)
        }

        if (groupDigimedia !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRADIGIMEDIACLUB, groupDigimedia)
        }

        if (groupEntrep !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRAENTREPRENEURSCLUB, groupEntrep)
        }

        if (groupFuse !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_FUSE, groupFuse)
        }
        if (groupGolf !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRAGOLFINGSECTION, groupGolf)
        }

        if (groupMovie !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRAMOVIEMAX, groupMovie)
        }

        if (groupPhotograph !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRAPHOTOGRAPHICCLUB, groupPhotograph)
        }

        if (groupRunning !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRARUNNINGCLUB, groupRunning)
        }

        if (groupShooting !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRASHOOTINGCLUB, groupShooting)
        }

        if (groupSocialBadminton !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRASOCIALBDMNTONCLUB, groupSocialBadminton)
        }

        if (groupTech !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRATECHCLUB, groupTech)
        }

        if (groupTravel !== undefined) {
            cy.TickCheckBox(elems_CustomerCreation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRATRAVELCLUB, groupTravel)
        }
    }

    save() {
        cy.Click(elems_CustomerCreation.BTN_CREATENEW);
        cy.wait(5000)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, "Customer Landing");
    }

    cancel(expectedPage) {
        cy.Click(elems_CustomerCreation.BTN_CANCEL);
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPage);

    }
}

export default CustomerCreation