class elems_MemberRegistrationPrincipal {
    static BTN_SAVEANDNEXT = '//button[text()="Save and Next"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'

    static PERSONALINFORMATION = {
        LBL_MEMBERCATEGORY : '//label[@for="lbl-member-category"]',
        TXT_NAMEONNRIC : '//input[@id="txt-nric-name"]',
        TXT_NAMEONCARD : '//input[@id="txt-card-name"]',
        TXT_NRIC : '//input[@id="txt-nric"]',
        DRP_GENDER : '//span[@id="dropdown-gender"]',
        DATE_DATEOFBIRTH : '//input[@id="date-birthdate"]',
        LBL_AGE : '//label[@for="lbl-age"]',
        DRP_NSSTATUS : '//span[@id="dropdown-nsstatus"]',
        DRP_NSRANK : '//span[@id="dropdown-nsrank"]',
        LBL_MEMBERTYPE : '//label[@for="lbl-member-type"]',
        DRP_NATIONALITY : '//span[@id="dropdown-nationality"]',
        DRP_MARITALSTATUS : '//span[@id="dropdown-maritalstatus"]',
        LBL_CARDTYPE : '//label[@for="lbl-card-type"]',
        DRP_INTERESTINDBSCARD : '//span[@id="dropdown-interest"]',
        UPL_SELECTFILES : '//div[@id="upload-profile-picture" ]//input[@type="file"]',
        UPL_CANCEL : '//label[@for="upload-profile-picture"]/parent::div//button'
    }
    static ADDRESSINFORMATION = {
        TXT_POSTALCODE : '//input[@id="txt-postal-code"]',
        DRP_ADDRESS : '//span[@id="drp-address"]',
        TXT_UNITNUMBER : '//input[@id="txt-unit-number"]',
        TXT_POBOX : '//input[@id="txt-po-box"]',
        TXT_MAILBOX : '//input[@id="txt-mailbox"]',
    }
    static CONTACTINFORMATION = {
        TXT_POSTALCODE : '//input[@id="txt-handphone"]',
        TXT_EMAILADDRESS : '//input[@id="txtEmail"]',
        TXT_HOMENUMBER : '//input[@id="txt-homenum"]',
        TXT_EMERGENCYCONTACT : '//input[@id="txt-emergencyno"]',
        CHK_SELECTALL : '//input[@id="chk-selectall"]',
        CHK_EMAIL : '//input[@id="checkEmail"]',
        CHK_MAIL : '//input[@id="checkMail"]',
        CHK_SMS  : '//input[@id="checkSms"]',
        CHK_VOICECALL  : '//input[@id="checkVoice"]',
        CHK_PUSHNOTIFICATION  : '//input[@id="checkPushNotif"]',
        CHK_WHATSAPP  : '//input[@id="checkWhatsApp"]',
        CHK_MARKETINGCONSENT : '//input[@id="chk-marketing"]',
        CHK_SERVICENOTIFICATIONCONSENT  : '//input[@id="chk-servicenotifconsent"]',
        CHK_TRANSACTIONALCONSENT  : '//input[@id="chk-transactional"]'
    }

    static DOCUMETARYPROOF = {
        PROOFDOCUMENTOPTION : {
            RBTN_SUBMIT : '//input[@id="radioSubmitDocumentary"]',
            RBTN_UPLOAD : '//input[@id="radioUploadDocumentary"]',
            UPL_SELECTFILES : '//div[@id="uplProofDocument" ]//input[@type="file"]',
            UPL_CANCEL : '//label[@for="uplProofDocument"]/parent::div//button',
            CHK_DOCPROOFRECEIVED : '//input[@id="checkDocProof"]',
            DRP_DOCPROOFVALIDATED : '//span[@id="drpDocProofValidated"]'
        }
    }
   
    static INTERESTEDAREAINFORMATION = {
        PREFREEREDSAFRACLUBS : {
            CHK_SAFRAJURONG :  '//input[@id="chk-SAFRA-jurong"]',
            CHK_SAFRAPUNGGOL :  '//input[@id="chk-SAFRA-punggol"]',
            CHK_SAFRATOAPAYOH :  '//input[@id="chk-SAFRA-taopoyah"]',
            CHK_SAFRAMTFABER :  '//input[@id="chk-SAFRA-Faber"]',
            CHK_SAFRATAMPINES :  '//input[@id="chk-SAFRA-tampines"]',
            CHK_SAFRAYISHUN :  '//input[@id="chk-SAFRA-yishun"]'
        },
        SAFRABRANDS : {
            CHK_ENERGYONEGYM : '//input[@id="chk-SAFRA-energyone"]',
            CHK_KIDSAMAZESPLSHINDLAYG : '//input[@id="chk-SAFRA-kidzamaze"]',
            CHK_FINSSWIMSCHOOL : '//input[@id="chk-SAFRA-fins"]'
                
        },

        IAMINTERESTEDIN : {
            CHK_ALLEVENTSANDACTIVITIES : '//input[@id="chk-events"]',
            CHK_ALLPEAKSANDPROMOTIONS : '//input[@id="chk-peaks"]',
            CHK_FITNESSANDADVENTURE : '//input[@id="chk-fitnessandadventure"]',
            CHK_CHILDENRICHMENTACTIVITIES : '//input[@id="chk-childenrichment"]',
            CHK_LIFELONGLEARNING: '//input[@id="chk-learning"]',
            CHK_LEISUREANDENTERTAINMENT : '//input[@id="chk-leisure"]',
            CHK_FOODANDBEVERAGES : '//input[@id="chk-food"]',
            CHK_SHOPPINGANDGROCERIES : '//input[@id="chk-shopping"]',
            CHK_TRAVEL : '//input[@id="chk-travel"]',
            CHK_MOTORING : '//input[@id="chk-motoring"]',
            CHK_HEALTHANDBEAUTY : '//input[@id="chk-health"]',
            CHK_SAFRAPOINTSREWARDPROGRAMME : '//input[@id="chk-safrapoints"]'
        },
        SAFRANEWSLETTER : {
            CHK_ENSMAN : '//input[@id="chk-ensman"]'
        },
        
        INTERESTGROUPSMICROCLUBS : {
            CHK_SAFRAADVENTURECLUB : '//input[@id="chk-safraadventure"]',
            CHK_BITEZ : '//input[@id="chk-bitez"]',
            CHK_SAFRACOMSECLUB : '//input[@id="chk-csc"]',
            CHK_SAFRACOMPSPORTSCLUB : '//input[@id="chk-competitive"]',
            CHK_SAFRADIGMECLUB: '//input[@id="chk-dmc"]',
            CHK_SAFRAENTREPRENEURSCLUB : '//input[@id="chk-entrepreneursclub"]',
            CHK_FUSE : '//input[@id="chk-fuse"]',
            CHK_SAFRAGOLFINGSECTION : '//input[@id="chk-golfing"]',
            CHK_SAFRAMOVIEMAX : '//input[@id="chk-moviemax"]',
            CHK_SAFRAPHOTOGRAPHICCLUB : '//input[@id="chk-photograpic"]',
            CHK_SAFRARUNNINGCLUB : '//input[@id="chk-runningclub"]',
            CHK_SAFRASHOOTINGCLUB : '//input[@id="chk-shootingclub"]',
            CHK_SAFRASOCBADCLUB : '//input[@id="chk-badmintonclub"]',
            CHK_SAFRATECHCLUB : '//input[@id="chk-techclub"]',
            CHK_SAFRATRAVELCLUB : '//input[@id="chk-travelclub"]'
        }
    }
    static DEPENDENTS = {
        BTN_ADDDEPENDENT : '//button[text()="Add Dependent"]',
        TBL_DEPENDENTS : '//h3[text()="Dependents"]/ancestor::div//table'
    }
    
}
export default elems_MemberRegistrationPrincipal