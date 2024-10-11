class elems_MemberRegistrationPrincipal {
    // static BTN_SAVEANDNEXT = '//button[@form="formMembershipRegistrationDependent"]'
    static BTN_SAVEANDNEXT = '//button[text()="Save and Next"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'

    static PERSONALINFORMATION = {
        LBL_MEMBERCATEGORY: '//label[@for="lblMemberCategory"]',
        TXT_NAMEONNRIC: '//input[@id="txtNricName"]',
        TXT_NAMEONCARD: '//input[@id="txtCardName"]',
        TXT_NRIC: '//input[@id="txtNric"]',
        DRP_GENDER: '//span[@id="drpGender"]',
        DATE_DATEOFBIRTH: '//input[@id="dtpDateofBirth"]',
        LBL_AGE: '//label[@for="lblAge"]',
        DRP_NSSTATUS: '//span[@id="drpNsStatus"]',
        DRP_NSRANK: '//span[@id="drpNsRank"]',
        LBL_MEMBERTYPE: '//label[@for="lblMemberTypeCode"]',
        DRP_NATIONALITY: '//span[@id="drpNationality"]',
        DRP_MARITALSTATUS: '//span[@id="drpMaritalStatus"]',
        LBL_CARDTYPE: '//label[@for="lblCardType"]',
        DRP_INTERESTINDBSCARD: '//span[@id="drpInterestDbsCard"]',
        UPL_SELECTFILES: '//input[@type="file"]',
        UPL_CANCEL: '//label[@for="upload-profile-picture"]/parent::div//button'
    }
    static ADDRESSINFORMATION = {
        TXT_POSTALCODE: '//input[@id="txtPostalCode"]',
        DRP_ADDRESS: '//span[@id="drpAddress"]',
        TXT_UNITNUMBER: '//input[@id="txtUnitNumber"]',
        TXT_POBOX: '//input[@id="txtPoBox"]',
        TXT_MAILBOX: '//input[@id="txtMailbox"]',
    }
    static CONTACTINFORMATION = {
        TXT_HANDPHONE: '//input[@id="txtHandphone"]',
        TXT_EMAILADDRESS: '//input[@id="txtEmail"]',
        TXT_HOMENUMBER: '//input[@id="txtHomeNumber"]',
        TXT_EMERGENCYCONTACT: '//input[@id="txtEmergencyContact"]',
        CHK_SELECTALL: '//input[@id="chkContactModeSelectAll"]',
        CHK_EMAIL: '//input[@id="checkPreferEmail"]',
        CHK_MAIL: '//input[@id="checkPreferMail"]',
        CHK_SMS: '//input[@id="checkPreferSms"]',
        CHK_VOICECALL: '//input[@id="checkPreferVoiceCall"]',
        CHK_PUSHNOTIFICATION: '//input[@id="checkPreferPushnotification"]',
        CHK_WHATSAPP: '//input[@id="chkPreferWhatsApp"]',
        CHK_MARKETINGCONSENT: '//input[@id="checkMarketingConsent"]',
        CHK_SERVICENOTIFICATIONCONSENT: '//input[@id="checkServiceNotification"]',
        CHK_TRANSACTIONALCONSENT: '//input[@id="checkTransactionConsent"]'
    }

    static DOCUMETARYPROOF = {
        PROOFDOCUMENTOPTION: {
            RBTN_SUBMIT: '//input[@id="radioSubmitDocumentary"]',
            RBTN_UPLOAD: '//input[@id="radioUploadDocumentary"]',
            UPL_SELECTFILES: '//div[@id="uplProofDocument" ]//input[@type="file"]',
            UPL_CANCEL: '//label[@for="uplProofDocument"]/parent::div//button',
            CHK_DOCPROOFRECEIVED: '//input[@id="checkDocProof"]',
            DRP_DOCPROOFVALIDATED: '//span[@id="drpDocProofValidated"]'

        }
    }

    static INTERESTEDAREAINFORMATION = {
        PREFREEREDSAFRACLUBS: {
            CHK_SAFRAJURONG: '//input[@id="checkSafraJurong"]',
            CHK_SAFRAPUNGGOL: '//input[@id="checkSafraPunggol"]',
            CHK_SAFRATOAPAYOH: '//input[@id="checkSafraToaPayoh"]',
            CHK_SAFRAMTFABER: '//input[@id="checkSafraMtFaber"]',
            CHK_SAFRATAMPINES: '//input[@id="checkSafraTampines"]',
            CHK_SAFRAYISHUN: '//input[@id="checkSafraYishun"]'
        },
        SAFRABRANDS: {
            CHK_ENERGYONEGYM: '//input[@id="checkSafraEnergyOne"]',
            CHK_KIDSAMAZESPLSHINDLAYG: '//input[@id="checkSafraKidzAmaze"]',
            CHK_FINSSWIMSCHOOL: '//input[@id="checkSafraFins"]'

        },

        IAMINTERESTEDIN: {
            CHK_ALLEVENTSANDACTIVITIES: '//input[@id="checkEvents"]',
            CHK_ALLPEAKSANDPROMOTIONS: '//input[@id="checkPeaks"]',
            CHK_FITNESSANDADVENTURE: '//input[@id="checkFitnessAndAdventure"]',
            CHK_CHILDENRICHMENTACTIVITIES: '//input[@id="checkChildEnrichment"]',
            CHK_LIFELONGLEARNING: '//input[@id="checkLifelongLearning"]',
            CHK_LEISUREANDENTERTAINMENT: '//input[@id="checkLeisure"]',
            CHK_FOODANDBEVERAGES: '//input[@id="checkFood"]',
            CHK_SHOPPINGANDGROCERIES: '//input[@id="checkShopping"]',
            CHK_TRAVEL: '//input[@id="checkTravel"]',
            CHK_MOTORING: '//input[@id="checkMotoring"]',
            CHK_HEALTHANDBEAUTY: '//input[@id="checkHealth"]',
            CHK_SAFRAPOINTSREWARDPROGRAMME: '//input[@id="checkSafraPoints"]'
        },
        SAFRANEWSLETTER: {
            CHK_ENSMAN: '//input[@id="checkEnsman"]'
        },

        INTERESTGROUPSMICROCLUBS: {
            CHK_SAFRAADVENTURECLUB: '//input[@id="checkSafraAdventure"]',
            CHK_BITEZ: '//input[@id="checkBitez"]',
            CHK_SAFRACOMSECLUB: '//input[@id="checkCsc"]',
            CHK_SAFRACOMPSPORTSCLUB: '//input[@id="checkCompetitive"]',
            CHK_SAFRADIGMECLUB: '//input[@id="checkDmc"]',
            CHK_SAFRAENTREPRENEURSCLUB: '//input[@id="checkEntrepreneursClub"]',
            CHK_FUSE: '//input[@id="checkEntrepreneursClub"]',
            CHK_SAFRAGOLFINGSECTION: '//input[@id="checkGolfing"]',
            CHK_SAFRAMOVIEMAX: '//input[@id="checkMovieMax"]',
            CHK_SAFRAPHOTOGRAPHICCLUB: '//input[@id="checkPhotographic"]',
            CHK_SAFRARUNNINGCLUB: '//input[@id="checkRunningClub"]',
            CHK_SAFRASHOOTINGCLUB: '//input[@id="checkShootingClub"]',
            CHK_SAFRASOCBADCLUB: '//input[@id="checkBadmintonClub"]',
            CHK_SAFRATECHCLUB: '//input[@id="checkTechClub"]',
            CHK_SAFRATRAVELCLUB: '//input[@id="checkTravelClub"]'
        }
    }
    static DEPENDENTS = {
        BTN_ADDDEPENDENT: '//button[text()="Add Dependent"]',
        TBL_DEPENDENTS: '//h3[text()="Dependents"]/ancestor::div//table'
    }

}
export default elems_MemberRegistrationPrincipal