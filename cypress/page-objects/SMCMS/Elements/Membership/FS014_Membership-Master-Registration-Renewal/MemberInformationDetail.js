class elems_MemberInformationDetail {

    static PersonalInformation = {
        LBL_MEMBERID : '//label[text()="Member ID"]/parent::div//label[@for="lblMemberId"]',
        TXT_PRINCIPALID : '//input[@id="txtPrincipalId"]',
        TXT_LAST4NRIC_ICNO : '//input[@id="txtLastDigits"]',
        TXT_NRIC : '//input[@id="txtNric"]',
        DRP_NATIONALITY : '//span[@id="drpNationality"]',
        TXT_NAMEONNRIC : '//input[@id="txtNameOnNric"]',
        DRP_GENDER : '//span[@id="drpGender"]',
        DRP_MARITALSTATUS : '//span[@id="drpMaritalStatus"]',
        DATE_DATEOFBIRTH : '//input[@id="dtpDateofBirth"]',
        LBL_AGE : '//label[text()="Age"]/parent::div//label[@for="lblAge"]',

        ProfilePicture : {
            UPL_PROFILEPICTURE : '//label[@id="uplProfilePic_label"]/parent::div//input[@type="file"]',
            UPL_CANCEL : '//label[@id="uplProfilePic_label"]/parent::div//span[@title="Cancel"]/parent::button'
        }
    }

    static MembershipInformation = {
        TXT_NAMEONCARD : '//input[@id="txtNameCard"]',
        DRP_MEMBERCATEGORY : '//span[@id="drpMemberCategory"]',
        DRP_NSRANK : '//span[@id="drpNsRank"]',
        DRP_NSSTATUS : '//span[@id="drpNsStatus"]',
        LBL_MEMBERTYPE : '//label[text()="Member Type"]/parent::div//label[@for="lblMemberType"]',
        LBL_MEMBERTYPECODE : '//label[text()="Member Type Code"]/parent::div//label[@for="lblMemberTypeCode"]',
        DRP_CARDTYPE : '//span[@id="drpcardType"]',
        DATE_JOINDATE : '//input[@id="dtpJoinDate"]',
        DATE_EXPIRYDATE : '//input[@id="dtpExpiryDate"]',
        DATE_ORDDATE : '//input[@id="dtpOrdDate"]',
        LBL_REASONCODE : '//label[text()="Reason Code"]/parent::div//label[@for="lblReasonCode"]',
        DRP_TRANSFORTO : '//span[@id="drpTransfer"]',
        DATE_TRANSFERDATE : '//input[@id="pckTransferDate"]',
        CHK_DECLARATIONFORM : '//input[@id="checkDeclaration"]',
        CHK_FORMERSAFRAMEMBER : '//input[@id="checkFormerMember"]',
        CHK_NEWNS50COMPLYONLY : '//input[@id="checkNewNs50"]'
    }

    static MembershipStatusAndSfsStatus = {
        LBL_STATUS : '//label[text()="Status"]/parent::div//label[@for="lblStatus"]',
        LBL_SFSSTATUS : '//label[text()="SFS Status"]/parent::div//label[@for="lblSfsStatus"]',
        CHK_SFSCONVERSION : '//input[@id="checkSfsConversion"]',
        CHK_STOPRENEWAL : '//input[@id="checkStopRenewal"]'
    }

    static SafraPoints = {
        LBL_USEDPOINTS : '//label[text()="Used Points"]/parent::div//label[@for="lblUsedPoints"]',
        LBL_ISSUESPOINTS : '//label[text()="Issued Points"]/parent::div//label[@for="checkIssuedPoints"]',
        LBL_POINTSTATUS : '//label[text()="Point Status"]/parent::div//label[@for="lblPointStatus"]',
        CHK_VIEW_REDEEMPOINTS : '//input[@id="checkViewRedeem"]'
    }

    static FamilyInformation = {
        TBL_FAMILYINFORMATION : '//legend[text()="Family Information"]/ancestor::div//table'
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
            CHK_SAFRAMOVIEMAX : '//input[@id="checkMoviemax"]',
            CHK_SAFRAPHOTOGRAPHICCLUB : '//input[@id="checkPhotographicClub"]',
            CHK_SAFRARUNNINGCLUB : '//input[@id="checkRunningclub"]',
            CHK_SAFRASHOOTINGCLUB : '//input[@id="checkShootingclub"]',
            CHK_SAFRASOCIALBADMINTONCLUB : '//input[@id="checkBadmintonclub"]',
            CHK_SAFRATECHCLUB : '//input[@id="checkTechclub"]',
            CHK_SAFRATRAVELCLUB : '//input[@id="checkTravelclub"]'
        }
    }

    static Comments = {
        TXTAREA_COMMENTS : '//textarea[@id="txt-comment"]'
    }

    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static BTN_VIEWCARD = '//button[text()="View Card"]'
}

export default elems_MemberInformationDetail