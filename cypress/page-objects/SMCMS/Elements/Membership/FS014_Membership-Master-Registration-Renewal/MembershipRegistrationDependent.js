class elems_MembershipRegistrationDependent {

    static PersonalInformation = {
        LBL_MEMBERCATEGORY : '//label[text()="Member Category"]/parent::div//label[@for="lblMemberCategory"]',
        DRP_DEPENDENTTYPE : '//span[@id="drpDependantType"]',
        TXT_NAME : '//input[@id="txtName"]',
        TXT_NAMEONCARD : '//input[@id="txtNameCard"]',
        TXT_NRIC : '//input[@id="txtNric"]',
        DRP_GENDER : '//span[@id="drpGender"]',
        DATE_DATEOFBIRTH : '//input[@id="dtpDateofBirth"]',
        LBL_AGE : '//label[text()="Age"]/parent::div//label[@for="lblAge"]',
        PCK_PRINCIPAL : '//label[@for="pckPrincipalId"]/parent::div//button',
        LBL_PARENTTYPECODE : '//label[text()="Parent Type Code"]/parent::div//label[@for="lblParentType"]',
        LBL_MEMBERTYPE : '//label[text()="Member Type"]/parent::div//label[@for="lblMemberType"]',
        DRP_NATIONALITY : '//span[@id="drpNationality"]',
        DRP_MARITALSTATUS : '//span[@id="drpMaritalStatus"]',
        LBL_CARDTYPE : '//label[text()="Card Type"]/parent::div//label[@for="txtCardType"]',
        DRP_INTERESTINDBSCARD : '//span[@id="drpInterest"]',
        CHK_ALLOWTOREDEEMSAFRAPOINTS : '//input[@id="checkRedeem"]',

        ProfilePicture : {
            UPL_PROFILEPICTURE : '//legend[text()="Personal Information"]/parent::div//input[@type="file"]',
            UPL_CANCEL : '//legend[text()="Personal Information"]/parent::div//span[@title="Cancel"]/parent::button'
        }
    }

    static AddressInformation = {
        MailingAddress : {
            CHK_INDEPENDENTADDRESS : '//input[@id="checkIndependentAddress"]',
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
        TXT_EMERGENCYCONTACT : '//input[@id="txtEmergencyno"]',
        TXT_HOMENUMBER : '//input[@id="txtHomenum"]',

        PreferredContactMode : {
            CHK_SELECTALL : '//input[@id="chk-selectall"]',
            CHK_EMAIL : '//input[@id="checkEmail"]',
            CHK_MAIL : '//input[@id="checkMail"]',
            CHK_SMS : '//input[@id="checkSms"]',
            CHK_VOICECALL : '//input[@id="checkVoice"]',
            CHK_PUSHNOTIFICATION : '//input[@id="checkPushNotif"]',
            CHK_WHATSAPP : '//input[@id="checkWhatsApp"]'
        },

        ConsentInformation : {
            CHK_MARKETINGCONSENT : '//input[@id="checkMarketing"]',
            CHK_SERVICENOTIFICATIONCONSENT : '//input[@id="checkServiceNotifConsent"]',
            CHK_TRANSACTIONALCONSENT : '//input[@id="checkTransactionalConsent"]'
        }
    }

    static ProofDocument = {
        RBTN_SUBMITDOCPROOFLATER : '//input[@id="radioSubmitDocumentary"]',
        RBTN_UPLOADDOCPROOF : '//input[@id="radioUploadDocumentary"]',
        CHK_PROOFDOCUMENTOPTION : '//input[@id="checkProofDocumentOption"]',
        ProofDocumentUpload : {
            UPL_PROOFDOCUMENTUPLOAD : '//label[@id="uplProofDocument_label"]/parent::div//input[@type="file"]',
            UPL_CANCEL : '//label[@id="uplProofDocument_label"]/parent::div//span[@title="Cancel"]/parent::button'
        },

        CHK_DOCPROOFRECEIVED : '//input[@id="checkDocProof"]',
        DRP_DOCPROOFVALIDATED : '//span[@id="drpDocProofValidated"]'
    }

    static InterestAreaInformation = {
        PreferredSafraClubs : {
            CHK_SAFRAJURONG : '//input[@id="checkSafraJurong"]',
            CHK_SAFRAPUNGGOL : '//input[@id="checkSafraPunggol"]',
            CHK_SAFRATOAPAYOH : '//input[@id="checkSafraTaopoyah"]',
            CHK_SAFRAMTFABER : '//input[@id="checkSafraMtfaber"]',
            CHK_SAFRATAMPINES: '//input[@id="checkSafraTampines"]',
            CHK_SAFRAYISHUN : '//input[@id="checksafraYishun"]'
        },

        SafraBrands : {
            CHK_ENERGYONEGYM : '//input[@id="checkSafraEnergyone"]',
            CHK_KIDZAMAZE_SPLSHINDOORPLAYG : '//input[@id="checkSafraKidzAmaze"]',
            CHK_FINSSWIMSCHOOL : '//input[@id="checkSafraFins"]'
        },

        IAmInterestedIn : {
            CHK_ALLEVENTSANDACTIV : '//input[@id="checkEvents"]',
            CHK_ALLPEAKSANDPROMO : '//input[@id="checkPeaks"]',
            CHK_FITNESSANDADVENTURE : '//input[@id="checkFitnessAndAdventure"]',
            CHK_SHILDENRICHMENT_ACTIV : '//input[@id="checkChildEnrichment"]',
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
            CHK_SAFRAMOVIEMAX : '//input[@id="checkMovieMax"]',
            CHK_SAFRAPHOTOGRAPHICCLUB : '//input[@id="checkPhotographic"]',
            CHK_SAFRARUNNINGCLUB : '//input[@id="checkRunningClub"]',
            CHK_SAFRASHOOTINGCLUB : '//input[@id="checkShootingClub"]',
            CHK_SAFRASOCIALBADMINTONCLUB : '//input[@id="checkBadmintonClub"]',
            CHK_SAFRATECHCLUB : '//input[@id="checkTechClub"]',
            CHK_SAFRATRAVELCLUB : '//input[@id="checkTravelClub"]'
        }
    }

    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_MembershipRegistrationDependent