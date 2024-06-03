class elems_CustomerCreation {

    static RegistrantInformation = {
        LBL_NRIC : '//label[text()="NRIC"]/parent::div//label[@for="lblNric"]',
        TXT_NAME : '//input[@id="lblName"]',
        DATE_DATEOFBIRTH : '//input[@id="dtpDateofBirth"]',
        DRP_GENDER : '//span[@id="drpGender"]',

        ProfilePicture : {
            UPL_PROFILEPICTURE : '//input[@type="file"]',
            UPL_CANCEL : '//span[@title="Cancel"]/parent::button'
        }
    }

    static AddressInformation = {
        MailingAddress : {
            TXT_POSTALCODE : '//input[@id="txtPostalCode"]',
            DRP_ADDRESS : '//span[@id="drpAddress"]',
            TXT_UNITNUMBER : '//input[@id="txtUnitNumber"]',
            TXT_POBOX : '//input[@id="txtPoBox"]',
            TXT_MYMAILBOX : '//input[@id="txtMailbox"]'
        }
    }

    static ContactInformation = {
        TXT_HANDPHONE : '//input[@id="txtHandphone"]',
        TXT_EMAILADDRESS: '//input[@id="txtEmail"]',
        TXT_EMERGENCYCONTACT : '//input[@id="txtEmergencyContact"]',
        TXT_HOMENUMBER : '//input[@id="txtHomeNumber"]',

        PreferredContactMode : {
            CHK_SELECTALL : '//input[@id="chkContactModeSelectAll"]',
            CHK_EMAIL : '//input[@id="checkPreferEmail"]',
            CHK_MAIL : '//input[@id="checkPreferMail"]',
            CHK_SMS : '//input[@id="checkPreferSms"]',
            CHK_VOICECALL : '//input[@id="checkPreferVoiceCall"]',
            CHK_PUSHNOTIFICATION : '//input[@id="checkPreferPushnotification"]',
            CHK_WHATSAPP : '//input[@id="chkPreferWhatsApp"]'
        },

        ConsentInformation : {
            CHK_MARKETINGCONSENT : '//input[@id="checkMarketingConsent"]',
            CHK_SERVICENOTIFICATIONCONSENT : '//input[@id="checkServiceNotifConsent"]',
            CHK_TRANSACTIONALCONSENT : '//input[@id="checkTransactionalConsent"]'
        }
    }

    static InterestAreaInformation = {
        PreferredSafraClubs : {
            CHK_SAFRACHOA : '//input[@id="checkSafraChoaChuKung"]',
            CHK_SAFRAJURONG : '//input[@id="checkSafraJurong"]',
            CHK_SAFRAPUNGGOL : '//input[@id="checkSafraPunggol"]',
            CHK_SAFRATOAPAYOH : '//input[@id="checkSafraToaPayoh"]',
            CHK_SAFRAMTFABER : '//input[@id="checkSafraMtFaber"]',
            CHK_SAFRATAMPINES: '//input[@id="checkSafraTampines"]',
            CHK_SAFRAYISHUN : '//input[@id="checkSafraYishun"]'
        },

        SafraBrands : {
            CHK_ENERGYONEGYM : '//input[@id="checkSafraEnergyOne"]',
            CHK_KIDZAMAZE_SPLSHINDOORPLAYG : '//input[@id="checkSafraKidzAmaze"]',
            CHK_FINSSWIMSCHOOL : '//input[@id="checkSafraFins"]'
        },

        IAmInterestedIn : {
            CHK_ALLEVENTSANDACTIV : '//input[@id="checkEvents"]',
            CHK_ALLPEAKSANDPROMO : '//input[@id="checkPeaks"]',
            CHK_FITNESSANDADVENTURE : '//input[@id="checkFitnessAndAdventure"]',
            CHK_CHILDENRICHMNT_ACTIV : '//input[@id="checkChildEnrichment"]',
            CHK_LIFELONGLEARNING: '//input[@id="checkLifelongLearning"]',
            CHK_LEISUREANDENTERTAINMENT : '//input[@id="checkLeisure"]',
            CHK_FOODANDBEVERAGES : '//input[@id="checkFood"]',
            CHK_SHOPPINGANDGROCERIES : '//input[@id="checkShopping"]',
            CHK_TRAVEL : '//input[@id="checkTravel"]',
            CHK_MOTORING : '//input[@id="checkMotoring"]',
            CHK_HEALTHANDBEAUTY : '//input[@id="checkHealth"]',
            CHK_SAFRAPOINTSREWARDPROGRAMME : '//input[@id="checkSafraPoints"]'
        },

        SafraNewsletter : {
            CHK_ENSMAN : '//input[@id="checkEnsman"]'
        },

        InterestGroupsAndMicroClubs : {
            CHK_SAFRAADVENTURECLUB : '//input[@id="checkSafraAdventure"]',
            CHK_BITEZ_FANDB : '//input[@id="checkBitez"]',
            CHK_SAFRACOMMSERVICESCLUB : '//input[@id="checkCsc"]',
            CHK_SAFRACOMPTTIVESPORTSCLUB : '//input[@id="checkCompetitive"]',
            CHK_SAFRADIGIMEDIACLUB: '//input[@id="checkDmc"]',
            CHK_SAFRAENTREPRENEURSCLUB : '//input[@id="checkEntrepreneursClub"]',
            CHK_FUSE : '//input[@id="checkFuse"]',
            CHK_SAFRAGOLFINGSECTION : '//input[@id="checkGolfing"]',
            CHK_SAFRAMOVIEMAX : '//input[@id="checkMovieMax"]',
            CHK_SAFRAPHOTOGRAPHICCLUB : '//input[@id="checkPhotographic"]',
            CHK_SAFRARUNNINGCLUB : '//input[@id="checkRunningClub"]',
            CHK_SAFRASHOOTINGCLUB : '//input[@id="checkShootingClub"]',
            CHK_SAFRASOCIALBDMNTONCLUB : '//input[@id="checkBadmintonClub"]',
            CHK_SAFRATECHCLUB : '//input[@id="checkTechClub"]',
            CHK_SAFRATRAVELCLUB : '//input[@id="checkTravelClub"]'
        }
    }
    static BTN_CREATENEW = '//span[text()="Create New"]'
    static BTN_CANCEL = '//span[text()="Cancel"]'
}

export default elems_CustomerCreation