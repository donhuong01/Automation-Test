class elems_MembershipRegistrationPrincipalBatch {

    static PersonalInformation = {
        LBL_MEMBERCATEGORY : '//label[text()="Member Category"]/parent::div//label[@for="lbl-member-category"]',
        TXT_NAMEONNRIC : '//input[@id="txt-nric-name"]',
        TXT_NAMEONCARD: '//input[@id="txt-card-name"]',
        TXT_NRIC : '//input[@id="txt-nric"]',
        DRP_GENDER : '//span[@id="dropdown-gender"]',
        DATE_DATEOFBIRTH : '//input[@id="date-birthdate"]',
        LBL_AGE : '//label[text()="Age"]/parent::div//label[@for="lbl-age"]',
        DRP_NSSTATUS : '//span[@id="dropdown-nsstatus"]',
        DRP_NSRANK : '//span[@id="dropdown-nsrank"]',
        LBL_MEMBERTYPE : '//label[text()="Member Type (auto-populated based on the selected NS rank, NS Status and Age)"]/parent::div//label[@for="lbl-member-type"]',
        DRP_NATIONALITY : '//span[@id="dropdown-nationality"]',
        DRP_MARITALSTATUS : '//span[@id="dropdown-maritalstatus"]',
        LBL_CARDTYPE : '//label[text()="Card Type"]/parent::div//label[@for="lbl-card-type"]',
        DRP_INTERESTINDBSCARD : '//span[@id="dropdown-interest"]',

        ProfilePicture : {
            UPL_PROFILEPICTURE : '//label[@id="upload-profile-picture_label"]/parent::div//input[@type="file"]',
            UPL_CANCEL : '//label[@id="upload-profile-picture_label"]/parent::div//span[@title="Cancel"]/parent::button'
        }
    }

    static AddressInformation = {
        MailingAddress : {
            TXT_POSTALCODE : '//input[@id="txt-postal-code"]',
            DRP_ADDRESS : '//span[@id="drp-address"]',
            TXT_UNITNUMBER : '//input[@id="txt-unit-number"]',
            TXT_POBOX : '//input[@id="txt-po-box"]',
            TXT_MYMAILBOX : '//input[@id="txt-mailbox"]'
        }
    }

    static ContactInformation = {
        TXT_HANDPHONE : '//input[@id="txt-handphone"]',
        TXT_EMAILADDRESS: '//input[@id="txtEmail"]',
        TXT_EMERGENCYCONTACT : '//input[@id="txt-emergencyno"]',
        TXT_HOMENUMBER : '//input[@id="txt-homenum"]',

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
            CHK_MARKETINGCONSENT : '//input[@id="chk-marketing"]',
            CHK_SERVICENOTIFICATIONCONSENT : '//input[@id="chk-servicenotifconsent"]',
            CHK_TRANSACTIONALCONSENT : '//input[@id="chk-transactional"]'
        }
    }

    static DocumentaryProof = {
        ProofDocumentOption : {
            RBTN_SUBMITDOCPROOFLATER : '//input[@id="radioSubmitDocumentary"]',
            RBTN_UPLOADDOCPROOF : '//input[@id="radioUploadDocumentary"]',
            ProofDocumentUpload : {
                UPL_PROOFDOCUMENTUPLOAD : '//label[@id="uplProofDocument_label"]/parent::div//input[@type="file"]',
                UPL_CANCEL : '//label[@id="uplProofDocument_label"]/parent::div//span[@title="Cancel"]/parent::button'
            },

            CHK_DOCPROOFRECEIVED : '//input[@id="checkDocProof"]',
            DRP_DOCPROOFVALIDATED : '//span[@id="drpDocProofValidated"]'
        }
    }

    static InterestAreaInformation = {
        PreferredSafraClubs : {
            CHK_SAFRAJURONG : '//input[@id="chk-SAFRA-jurong"]',
            CHK_SAFRAPUNGGOL : '//input[@id="chk-SAFRA-punggol"]',
            CHK_SAFRATOAPAYOH : '//input[@id="chk-SAFRA-taopoyah"]',
            CHK_SAFRAMTFABER : '//input[@id="chk-SAFRA-Faber"]',
            CHK_SAFRATAMPINES: '//input[@id="chk-SAFRA-tampines"]',
            CHK_SAFRAYISHUN : '//input[@id="chk-SAFRA-yishun"]'
        },

        SafraBrands : {
            CHK_ENERGYONEGYM : '//input[@id="chk-SAFRA-energyone"]',
            CHK_KIDZAMAZE_SPLSHINDOORPLAYG : '//input[@id="chk-SAFRA-kidzamaze"]',
            CHK_FINSSWIMSCHOOL : '//input[@id="chk-SAFRA-fins"]'
        },

        IAmInterestedIn : {
            CHK_ALLEVENTSANDACTIV : '//input[@id="chk-events"]',
            CHK_ALLPEAKSANDPROMO : '//input[@id="chk-peaks"]',
            CHK_FITNESSANDADVENTURE : '//input[@id="chk-fitnessandadventure"]',
            CHK_SHILDENRICHMENT_ACTIV : '//input[@id="chk-childenrichment"]',
            CHK_LIFELONGLEARNING: '//input[@id="chk-learning"]',
            CHK_LEISUREANDENTERTAINMENT : '//input[@id="chk-leisure"]',
            CHK_FOODANDBEVERAGES : '//input[@id="chk-food"]',
            CHK_SHOPPINGANDGROCERIES : '//input[@id="chk-shopping"]',
            CHK_TRAVEL : '//input[@id="chk-travel"]',
            CHK_MOTORING : '//input[@id="chk-motoring"]',
            CHK_HEALTHANDBEAUTY : '//input[@id="chk-health"]',
            CHK_SAFRAPOINTSREWARDPROGRAMME : '//input[@id="chk-safrapoints"]'
        },

        SafraNewsletter : {
            CHK_ENSMAN : '//input[@id="chk-ensman"]'
        },

        InterestGroupsAndMicroClubs : {
            CHK_SAFRAADVENTURECLUB : '//input[@id="chk-safraadventure"]',
            CHK_BITEZ_FANDB : '//input[@id="chk-bitez"]',
            CHK_SAFRACOMMSERVICESCLUB : '//input[@id="chk-csc"]',
            CHK_SAFRACOMPTTIVESPORTSCLUB : '//input[@id="chk-competitive"]',
            CHK_SAFRADIGIMEDIACLUB : '//input[@id="chk-dmc"]',
            CHK_SAFRAENTREPRENEURSCLUB : '//input[@id="chk-entrepreneursclub"]',
            CHK_FUSE : '//input[@id="chk-fuse"]',
            CHK_SAFRAGOLFINGSECTION : '//input[@id="chk-golfing"]',
            CHK_SAFRAMOVIEMAX : '//input[@id="chk-moviemax"]',
            CHK_SAFRAPHOTOGRAPHICCLUB : '//input[@id="chk-photograpic"]',
            CHK_SAFRARUNNINGCLUB : '//input[@id="chk-runningclub"]',
            CHK_SAFRASHOOTINGCLUB : '//input[@id="chk-shootingclub"]',
            CHK_SAFRASOCIALBADMINTONCLUB : '//input[@id="chk-badmintonclub"]',
            CHK_SAFRATECHCLUB : '//input[@id="chk-techclub"]',
            CHK_SAFRATRAVELCLUB : '//input[@id="chk-travelclub"]'
        }
    }

    static BTN_SAVEANDNEXT = '//button[text()="Save and Next"]'
    static BTN_USEDEFAULTVALUEANDCOMPLETE = '//button[text()="Use Default Value and Complete"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'

}

export default elems_MembershipRegistrationPrincipalBatch