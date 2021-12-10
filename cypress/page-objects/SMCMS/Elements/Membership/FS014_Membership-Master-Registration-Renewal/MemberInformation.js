class elems_MemberInformation {

    static MemberInformation = {
        LBL_NAMEONNRIC : '//label[text()="Name on NRIC:"]/parent::div//label[@for="lblNameOnNric"]',
        LBL_DATEOFBIRTH : '//label[text()="Date of Birth:"]/parent::div//label[@for="lblDateOfBirth"]',
        LBL_GENDER : '//label[text()="Gender:"]/parent::div//label[@for="lblGender"]',
        LBL_MEMBERSHIPCARDTYPE : '//label[text()="Membership Card Type:"]/parent::div//label[@for="lblMembershipCardType"]',
        LBL_NRIC : '//label[text()="NRIC:"]/parent::div//label[@for="lblNric"]',
        LBL_PRINCIPALID : '//label[text()="Principal ID:"]/parent::div//label[@for="lblPrincipalId"]',
        LBL_MEMBERSHIPID : '//label[text()="Membership ID:"]/parent::div//label[@for="lblMembershipId"]',
        LBL_NATIONALITY : '//label[text()="Nationality:"]/parent::div//label[@for="lblNationality"]',
        LBL_MEMBERSHIPTYPE : '//label[text()="Membership Type:"]/parent::div//label[@for="lblMembershipType"]',
        LBL_MEMBERHSIPEXPIRYDATE : '//label[text()="Membership Expiry Date:"]/parent::div//label[@for="lblMembershipExpiryDate"]',
        LBL_LASTMEMSHIPTRANSACTION : '//label[text()="Last Membership Transaction:"]/parent::div//label[@for="lblLastMembershipTrans"]',
        LBL_NS50MANUALOPTIN : '//label[text()="NS50 Manual Opt In:"]/parent::div//label[@for="lblNs50Manual"]'
    }

    static AddressInformation = {
        MailingAddress : {
            TXT_POSTALCODE : '//input[@id="txtPostalCode"]',
            DRP_ADDRESS : '//span[@id="drpaddress"]',
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
            CHK_SELECTALL : '//input[@id="chk-selectall"]',
            CHK_EMAIL : '//label[text()="Email"]/parent::div//input[@id="checkEmail"]',
            CHK_MAIL : '//label[text()="Mail"]/parent::div//input[@id="checkEmail"]',
            CHK_SMS : '//input[@id="checkSms"]',
            CHK_VOICECALL : '//input[@id="checkVoice"]',
            CHK_PUSHNOTIFICATION : '//input[@id="checkPushNotif"]',
            CHK_WHATSAPP : '//input[@id="checkWhatsApp"]'
        },

        ConsentInformation : {
            CHK_MARKETINGCONSENT : '//input[@id="checkMarketing"]',
            CHK_SERVICENOTIFICATIONCONSENT : '//input[@id="checkServiceNotificationConsent"]',
            CHK_TRANSACTIONALCONSENT : '//input[@id="checkTransactionalConsent"]'
        }
    }

    static InterestAreaInformation = {
        PreferredSafraClubs : {
            CHK_SAFRAJURONG : '//input[@id="checkSafraJurong"]',
            CHK_SAFRAPUNGGOL : '//input[@id="checkSafraPunggol"]',
            CHK_SAFRATOAPAYOH : '//input[@id="checkSafraTaopoyah"]',
            CHK_SAFRAMTFABER : '//input[@id="checkSafraMtfaber"]',
            CHK_SAFRATAMPINES: '//input[@id="checksafraTampines"]',
            CHK_SAFRAYISHUN : '//input[@id="checkSafraYishun"]'
        },

        SafraBrands : {
            CHK_ENERGYONEGYM : '//input[@id="checkSafraEnergyone"]',
            CHK_KIDZAMAZE_SPLSHINDOORPLAYG : '//input[@id="checkSafraKidzaAaze"]',
            CHK_FINSSWIMSCHOOL : '//input[@id="checkSafraFins"]'
        },

        IAmInterestedIn : {
            CHK_ALLEVENTSANDACTIV : '//input[@id="checkEvents"]',
            CHK_ALLPEAKSANDPROMO : '//input[@id="chkeckPeaks"]',
            CHK_FITNESSANDADVENTURE : '//input[@id="checkFitnessAndAdventure"]',
            CHK_CHILDENRICHMENT_ACTIV : '//input[@id="checkChildEnrichment"]',
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
            CHK_SAFRADIGIMEDIACLUB : '//input[@id="checkDmc"]',
            CHK_SAFRAENTREPRENEURSCLUB : '//input[@id="checkEntrepreneursClub"]',
            CHK_FUSE : '//input[@id="checkFuse"]',
            CHK_SAFRAGOLFINGSECTION : '//input[@id="checkGolfing"]',
            CHK_SAFRAMOVIEMAX : '//input[@id="checkMoviemax"]',
            CHK_SAFRAPHOTOGRAPHICCLUB : '//input[@id="checkPhotographicClub"]',
            CHK_SAFRARUNNINGCLUB : '//input[@id="checkRunningClub"]',
            CHK_SAFRASHOOTINGCLUB : '//input[@id="checkShootingclub"]',
            CHK_SAFRASOCIALBADMINTONCLUB : '//input[@id="checkBadmintonclub"]',
            CHK_SAFRATECHCLUB : '//input[@id="checkTechclub"]',
            CHK_SAFRATRAVELCLUB : '//input[@id="checkTravelclub"]'
        }
    }

    static Comments = {
        TXTAREA_COMMENTS : '//textarea[@id="txtComment"]'
    }

    static TAB_MEMBERINFORMATION = '//ul[@role="tablist"]'
    static TBL_MEMBERINFORMATION = '//ul[@role="tablist"]/following::div//table'
    static BTN_UPDATEANDCONTINUE = '//button[text()="Update & Continue"]'
    static BTN_CONTINUE = '//button[text()="Continue"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_MemberInformation