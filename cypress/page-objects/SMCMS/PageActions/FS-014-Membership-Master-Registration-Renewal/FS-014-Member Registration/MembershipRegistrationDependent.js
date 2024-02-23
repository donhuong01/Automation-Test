import elems_MembershipRegistrationDependent from '../../../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/MembershipRegDependent(Batch)'
import elems_PageHeader from '../../../Elements/Common/PageHeader.js'
import elems_Picker from '../../../Elements/Common/Picker'
class Membership_Registration_Dependent{

     /*****************************************************
     * Method: fillOutPersonalInformation
     * Description: Fill-out Personal Infromation
     *
     * @param {string} MemberCategory verify Member Category
     * @param {string} DependentType Dependent Type
     * @param {string} NameonNRIC Name on NRIC
     * @param {string} NameonCard Name on Card
     * @param {string} NRIC NRIC
     * @param {string} Gender Gender
     * @param {string} DateofBirth DateofBirth
     * @param {string} Age Age
     * @param {string} PrincipalID Principal ID
     * @param {string} PrincipalType PrincipalTypeCode
     * @param {string} MemberType Member Type
     * @param {string} Nationality Nationality
     * @param {string} MaritalStatus MaritalStatus
     * @param {string} CardType Card Type
     * @param {string} InterestinDBSCard 
     * @param {string} AllowtoRedeemSAFRAPoints Allow to Redeem SAFRAPoints
     * @param {string} ProfilePicture ProfilePicture
     /*****************************************************/
 
    //  fillsoutPersonalInformation(MemberCategory, DependentType, NameOnNRIC, NameOnCard, NRIC, Gender, DateofBirth , PrincipaID, PrincipalTypeCode,
    //      MemberType, Nationality, MaritalStatus, CardType, InterestinDBSCard , AllowtoRedeemSAFRAPoints, ProfilePicture)
     fillsoutPersonalInformation(
        MemberCategory, DependentType, NameOnNRIC, NameOnCard,NRIC, Gender,
        DateofBirth, Age, PrincipalID, PrincipalType, MemberType, Nationality, MaritalStatus,
        CardType, InterestinDBSCard , AllowtoRedeemSAFRAPoints, ProfilePicture
         )
            {
                // fillsout Member Catergory
            if(MemberCategory !== undefined){
              cy.ValidateElementText(elems_MembershipRegistrationDependent.PersonalInformation.LBL_MEMBERCATEGORY, MemberCategory)
             }
                // fillsout DependentType
             if(DependentType !== undefined){
              cy.SelectDropDownItem(elems_MembershipRegistrationDependent.PersonalInformation.DRP_DEPENDENTTYPE, DependentType)
            }
               // Enter Name on NRIC
            if(NameOnNRIC !== undefined){
            cy.xpath(elems_MembershipRegistrationDependent.PersonalInformation.TXT_NAMEONNRIC).clear()
            cy.EnterText(elems_MembershipRegistrationDependent.PersonalInformation.TXT_NAMEONNRIC, NameOnNRIC)
            }
             // Enter Name onCArd
            if(NameOnCard !== undefined){
              cy.xpath(elems_MembershipRegistrationDependent.PersonalInformation.TXT_NAMEONCARD).clear()
              cy.EnterText(elems_MembershipRegistrationDependent.PersonalInformation.TXT_NAMEONCARD, NameOnCard)
            }
            // Enter NRIC
            if(NRIC !== undefined){
                cy.xpath(elems_MembershipRegistrationDependent.PersonalInformation.TXT_NRIC).clear()
              cy.EnterText(elems_MembershipRegistrationDependent.PersonalInformation.TXT_NRIC, NRIC)
            }
            // Enter Gender
            if(Gender !== undefined){
              cy.SelectDropDownItem(elems_MembershipRegistrationDependent.PersonalInformation.DRP_GENDER, Gender)
             }
            // Enter Date of Birth
            if(DateofBirth !== undefined){
              cy.EnterDate(elems_MembershipRegistrationDependent.PersonalInformation.DATE_DATEOFBIRTH, DateofBirth)
             }
             // Verify Age
            // if(Age !== undefined){
            //   cy.ValidateElementText(elems_MembershipRegistrationDependent.PersonalInformation.LBL_AGE, Age)
            //  }
            // Verify PrincipaID
            // if(PrincipaID!== undefined){
            //   cy.ValidateElementText(elems_MembershipRegistrationDependent.PersonalInformation.LBL_PRINCIPALID, PrincipaID)
            //   }
            //   // Verify PrincipalTypeCode
            // if(PrincipalTypeCode!== undefined){
            //     cy.ValidateElementText(elems_MembershipRegistrationDependent.PersonalInformation.LBL_PRINCIPALTYPECODE, PrincipalTypeCode)
            //     }
            // Enter Nationality
            if(Nationality !== undefined){
              cy.SelectDropDownItem(elems_MembershipRegistrationDependent.PersonalInformation.DRP_NATIONALITY, Nationality)
            }
            // Enter Marital Status
            if(MaritalStatus !== undefined){
              cy.SelectDropDownItem(elems_MembershipRegistrationDependent.PersonalInformation.DRP_MARITALSTATUS, MaritalStatus)
            }
            //Enter Card Tyoe
            if(CardType !== undefined){
              cy.ValidateElementText(elems_MembershipRegistrationDependent.PersonalInformation.LBL_CARDTYPE, CardType)
            }
            // Enter Interest in DBS Card
            if(InterestinDBSCard !== undefined){
              cy.SelectDropDownItem(elems_MembershipRegistrationDependent.PersonalInformation.DRP_INTERESTINDBSCARD, InterestinDBSCard)
            }
            // Enter Interest in Profile Picture
            if(AllowtoRedeemSAFRAPoints !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.PersonalInformation.CHK_ALLOWTOREDEEMSAFRAPOINTS, AllowtoRedeemSAFRAPoints)
            }
           // Enter Interest in Profile Picture
            if(ProfilePicture !== undefined){
              cy.UploadFile(elems_MembershipRegistrationDependent.PersonalInformation.UPL_SELECTFILES, ProfilePicture)
            }
  
    
        }

    /*****************************************************
     * Method: fillOutPersonalInformation
     * Description: Fill-out Personal Infromation
     *
     * @param {string} MemberCategory verify Member Category
     * @param {string} DependentType Dependent Type
     * @param {string} NameonNRIC Name on NRIC
     * @param {string} NameonCard Name on Card
     * @param {string} NRIC NRIC
     * @param {string} Gender Gender
     * @param {string} DateofBirth DateofBirth
     * @param {string} Age Age
     * @param {string} PrincipalID Principal ID
     * @param {string} PrincipalType PrincipalTypeCode
     * @param {string} MemberType Member Type
     * @param {string} Nationality Nationality
     * @param {string} MaritalStatus MaritalStatus
     * @param {string} CardType Card Type
     * @param {string} InterestinDBSCard 
     * @param {string} AllowtoRedeemSAFRAPoints Allow to Redeem SAFRAPoints
     * @param {string} ProfilePicture ProfilePicture
     /*****************************************************/
 
    //  fillsoutPersonalInformation(MemberCategory, DependentType, NameOnNRIC, NameOnCard, NRIC, Gender, DateofBirth , PrincipaID, PrincipalTypeCode,
    //      MemberType, Nationality, MaritalStatus, CardType, InterestinDBSCard , AllowtoRedeemSAFRAPoints, ProfilePicture)
    fillsoutPersonalInformationDep(
        MemberCategory, DependentType, NameOnNRIC, NameOnCard,NRIC, Gender,
        DateofBirth, Age, PrincipalID, PrincipalType, MemberType, Nationality, MaritalStatus,
        CardType, InterestinDBSCard , AllowtoRedeemSAFRAPoints, ProfilePicture
         )
            {
                // fillsout Member Catergory
            if(MemberCategory !== undefined){
              cy.ValidateElementText(elems_MembershipRegistrationDependent.PersonalInformation.LBL_MEMBERCATEGORY, MemberCategory)
             }
                // fillsout DependentType
             if(DependentType !== undefined){
              cy.SelectDropDownItem(elems_MembershipRegistrationDependent.PersonalInformation.DRP_DEPENDENTTYPE, DependentType)
            }
               // Enter Name on NRIC
            if(NameOnNRIC !== undefined){
            cy.xpath(elems_MembershipRegistrationDependent.PersonalInformation.TXT_NAMEONNRIC).clear()
            cy.EnterText(elems_MembershipRegistrationDependent.PersonalInformation.TXT_NAMEONNRIC, NameOnNRIC)
            }
             // Enter Name onCArd
            if(NameOnCard !== undefined){
              cy.xpath(elems_MembershipRegistrationDependent.PersonalInformation.TXT_NAMEONCARD).clear()
              cy.EnterText(elems_MembershipRegistrationDependent.PersonalInformation.TXT_NAMEONCARD, NameOnCard)
            }
            // Enter NRIC
            if(NRIC !== undefined){
                cy.xpath(elems_MembershipRegistrationDependent.PersonalInformation.TXT_NRIC).clear()
              cy.EnterText(elems_MembershipRegistrationDependent.PersonalInformation.TXT_NRIC, NRIC)
            }
            // Enter Gender
            if(Gender !== undefined){
              cy.SelectDropDownItem(elems_MembershipRegistrationDependent.PersonalInformation.DRP_GENDER, Gender)
             }
            // Enter Date of Birth
            if(DateofBirth !== undefined){
              cy.EnterDateSuspension(elems_MembershipRegistrationDependent.PersonalInformation.DATE_DATEOFBIRTH, DateofBirth)
             }
             // Verify Age
            // if(Age !== undefined){
            //   cy.ValidateElementText(elems_MembershipRegistrationDependent.PersonalInformation.LBL_AGE, Age)
            //  }
            // Verify PrincipaID
            // if(PrincipaID!== undefined){
            //   cy.ValidateElementText(elems_MembershipRegistrationDependent.PersonalInformation.LBL_PRINCIPALID, PrincipaID)
            //   }
            //   // Verify PrincipalTypeCode
            // if(PrincipalTypeCode!== undefined){
            //     cy.ValidateElementText(elems_MembershipRegistrationDependent.PersonalInformation.LBL_PRINCIPALTYPECODE, PrincipalTypeCode)
            //     }
            // Enter Nationality
            if(Nationality !== undefined){
              cy.SelectDropDownItem(elems_MembershipRegistrationDependent.PersonalInformation.DRP_NATIONALITY, Nationality)
            }
            // Enter Marital Status
            if(MaritalStatus !== undefined){
              cy.SelectDropDownItem(elems_MembershipRegistrationDependent.PersonalInformation.DRP_MARITALSTATUS, MaritalStatus)
            }
            //Enter Card Tyoe
            if(CardType !== undefined){
              cy.ValidateElementText(elems_MembershipRegistrationDependent.PersonalInformation.LBL_CARDTYPE, CardType)
            }
            // Enter Interest in DBS Card
            if(InterestinDBSCard !== undefined){
              cy.SelectDropDownItem(elems_MembershipRegistrationDependent.PersonalInformation.DRP_INTERESTINDBSCARD, InterestinDBSCard)
            }
            // Enter Interest in Profile Picture
            if(AllowtoRedeemSAFRAPoints !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.PersonalInformation.CHK_ALLOWTOREDEEMSAFRAPOINTS, AllowtoRedeemSAFRAPoints)
            }
           // Enter Interest in Profile Picture
            if(ProfilePicture !== undefined){
              cy.UploadFile(elems_MembershipRegistrationDependent.PersonalInformation.UPL_SELECTFILES, ProfilePicture)
            }
  
    
        }



    /*****************************************************
     * Method: verifyAddressInformation
     * Description: Verify Personal Infromation
     * @param {string} IndependentAddress tick the Independent Address
     * @param {string} PostalCode verify PostalCode
     * @param {string} Address  Address
     * @param {string} UnitNumber UnitNumber
     * @param {string} PoBox PoBox
     * @param {string} MyMailbox MyMailbox
    *****************************************************/     
     verifyAddressInformation({IndependentAddress, PostalCode, Address, UnitNumber, PoBox, MyMailbox})
        {   //Tick Checkbox IndependentAddress
            if(IndependentAddress !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.AddressInformation.MailingAddress.CHK_INDEPENDENTADDRESS, IndependentAddress)
             } 
             //verify PostalCode
            if(PostalCode !== undefined){
               cy.xpath(elems_MembershipRegistrationDependent.AddressInformation.MailingAddress.TXT_POSTALCODE).clear()
               cy.EnterText(elems_MembershipRegistrationDependent.AddressInformation.MailingAddress.TXT_POSTALCODE, PostalCode)
            }  
             //verify Address
            if(Address !== undefined){
                cy.SelectDropDownItem(elems_MembershipRegistrationDependent.AddressInformation.MailingAddress.DRP_ADDRESS, Address)
             } 
             //verify UnitNumber
            if(UnitNumber !== undefined){
                cy.xpath(elems_MembershipRegistrationDependent.AddressInformation.MailingAddress.TXT_UNITNUMBER).clear()
                cy.EnterText(elems_MembershipRegistrationDependent.AddressInformation.MailingAddress.TXT_UNITNUMBER, UnitNumber)
            }  
            //verify PoBox
            if(PoBox !== undefined){
                cy.xpath(elems_MembershipRegistrationDependent.AddressInformation.MailingAddress.TXT_POBOX).clear()
                cy.EnterText(elems_MembershipRegistrationDependent.AddressInformation.MailingAddress.TXT_POBOX, PoBox)
            }  
            //verify MyMailbox 
            if(MyMailbox !== undefined){
                cy.xpath(elems_MembershipRegistrationDependent.AddressInformation.MailingAddress.TXT_MYMAILBOX).clear()
                cy.EnterText(elems_MembershipRegistrationDependent.AddressInformation.MailingAddress.TXT_MYMAILBOX, MyMailbox)
            } 
          // Error Handling
            if( IndependentAddress === undefined
            && PostalCode === undefined 
            && Address  === undefined
            && UnitNumber === undefined
            && PoBox === undefined
            && MyMailbox === undefined
          
            ){
                throw new Error("MemberRegistrationDependent.AddressInformationError!!./n\
                            Please provide at least one argument.")
            }

        }
    /*****************************************************
     * Method: SelectPrincipalID
     * Description: This function select principal id
     * @param {string} PrincipalID Pricipal ID
     * @param {string} PrincipalName Pricipal Name
    *****************************************************/     
     SelectPrincipalID(PrincipalID)
        {   

            cy.Click(elems_MembershipRegistrationDependent.PersonalInformation.PCK_PRINCIPALID)
            cy.wait(5000)
            cy.SelectTableItem2(elems_Picker.TBL_PICKERITEMS, 'Member ID', PrincipalID)
            cy.wait(5000)
            cy.Click(elems_Picker.BTN_SELECT)

        }

    /*****************************************************
     * Method: fillOutContactInformation
     * Description: Fill-out Personal Infromation
     * @param {string} Handphone fill out Handphone
     * @param {string} PostalCode verify PostalCode
     * @param {string} Address  Address
     * @param {string} UnitNumber UnitNumber
     * @param {string} PoBox PoBox
     * @param {string} MyMailbox MyMailbox
    /*****************************************************/     
        fillsoutContactInformation({Handphone, EmailAddress, HomeNumber, EmergencyContact})
        {
            if(Handphone !== undefined) {
                cy.xpath(elems_MembershipRegistrationDependent.ContactInformation.TXT_HANDPHONE).clear()
                cy.EnterText(elems_MembershipRegistrationDependent.ContactInformation.TXT_HANDPHONE, Handphone)
            }
            if(EmailAddress !== undefined) {
                cy.xpath(elems_MembershipRegistrationDependent.ContactInformation.TXT_EMAILADDRESS).clear()
                cy.EnterText(elems_MembershipRegistrationDependent.ContactInformation.TXT_EMAILADDRESS, EmailAddress)
            }
            if(HomeNumber !== undefined){
                cy.xpath(elems_MembershipRegistrationDependent.ContactInformation.TXT_HOMENUMBER).clear()
                cy.EnterText(elems_MembershipRegistrationDependent.ContactInformation.TXT_HOMENUMBER, HomeNumber)
            }
            if(EmergencyContact !== undefined){
                cy.xpath(elems_MembershipRegistrationDependent.ContactInformation.TXT_EMERGENCYCONTACT).clear()
                cy.EnterText(elems_MembershipRegistrationDependent.ContactInformation.TXT_EMERGENCYCONTACT, EmergencyContact)
            }

            // Error Handling
            if( Handphone === undefined 
            && EmailAddress === undefined
            && HomeNumber === undefined
            && EmergencyContact=== undefined
           
          
            ){
                throw new Error("MemberRegistrationDependent.AddressInformationError!!./n\
                            Please provide at least one argument.")
            }
        }
    /*****************************************************
     * Method: fillout preferred contact mode
     * Description: Fill-out Personal Infromation
     * @param {string} SelectAll tick checkbox Handphone
     * @param {string} Email tick checkbox PostalCode
     * @param {string} Mail tick checkbox Address
     * @param {string} SMS tick checkbox SMS
     * @param {string} VoiceCall tick checkbox UnitNumber
     * @param {string} PushNotification tick checkbox PoBox
     * @param {string} MyMailbox tick checkbox MyMailbox
     * @param {string} WhatsApp tick checkbox WhatsApp
    /*****************************************************/     
        filloutPreferredContactMode({SelectAll, Email, Mail, SMS, VoiceCall, PushNotification,WhatsApp})
        {
            if(SelectAll !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.ContactInformation.PreferredContactMode.CHK_SELECTALL, SelectAll)
            }
            if(Email !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.ContactInformation.PreferredContactMode.CHK_EMAIL, Email)
            }
            if(Mail !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.ContactInformation.PreferredContactMode.CHK_MAIL, Mail)
            }
            if(SMS !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.ContactInformation.PreferredContactMode.CHK_SMS, SMS)
            }
            if(VoiceCall !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.ContactInformation.PreferredContactMode.CHK_VOICECALL, VoiceCall)
            }
            if(PushNotification !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.ContactInformation.PreferredContactMode.CHK_PUSHNOTIFICATION, PushNotification)
            }
            if(WhatsApp !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.ContactInformation.PreferredContactMode.CHK_WHATSAPP, WhatsApp)
            }
             // Error Handling
            if( SelectAll === undefined 
            && Email === undefined
            && Mail === undefined
            && SMS === undefined
            && VoiceCall === undefined
            && PushNotification === undefined
            && WhatsApp === undefined
           
          
            ){
                throw new Error("MemberRegistrationDependent.PreferredContactMode!!./n\
                            Please provide at least one argument.")
            }
        }

    /*****************************************************
     * Method: fillout ConsentInformation
     * Description: Fill-out ConsentInformation
     * @param {string} MarketingConsent tick checkbox MarketingConsent
     * @param {string} ServiceNotificationConsent tick checkbox Service Notification Consent
     * @param {string} TransactionalConsent tick checkbox Transactional Consent
    /*****************************************************/   
        filloutConsentInformation({MarketingConsent, ServiceNotificationConsent, TransactionalConsent})
        {
            if(MarketingConsent !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.ContactInformation.ConsentInformation.CHK_MARKETINGCONSENT, MarketingConsent)
            }
            if(ServiceNotificationConsent !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.ContactInformation.ConsentInformation.CHK_SERVICENOTIFICATIONCONSENT, ServiceNotificationConsent)
            }
            if(TransactionalConsent !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.ContactInformation.ConsentInformation.CHK_TRANSACTIONALCONSENT, TransactionalConsent)
            }
                
                 // Error Handling
             if( MarketingConsent === undefined 
                && ServiceNotificationConsent === undefined
                && TransactionalConsent === undefined
             ){
                    throw new Error("MemberRegistrationDependent.ConsentInformation!!./n\
                                Please provide at least one argument.")
                }
        }   
/*****************************************************
     * Method: fillOutProofDocument
     * Description: Fills-out Proof Document
     *
     * @param {string} proofOfDocOption Proof Document Buttons: SUBMITDOCPROOFLATER, UPLOADDOCPROOF
     * @param {string} proofDocOptionChkBox Proof Document Option Checkbox Setting
     * @param {string} proofDocUpload Proof Document Upload File Upload
     * @param {string} docProofReceived Doc Proof Received Checkbox Setting
     * @param {string} docProofValidated Doc Proof Validated
     *****************************************************/
 fillOutProofDocument(proofOfDocOption, proofDocUpload, docProofReceived, docProofValidated){
        
    // Set Submit Document Proof Later Radio Button
    if(proofOfDocOption === 'SUBMITDOCPROOFLATER'){
        cy.TickRadioButton(elems_MembershipRegistrationDependent.DocumentaryProof.ProofDocumentOption.RBTN_SUBMITDOCPROOFLATER)
    }

    // Set Upload Document Proof Radio Button
    else if(proofOfDocOption === 'UPLOADDOCPROOF'){
        cy.TickRadioButton(elems_MembershipRegistrationDependent.DocumentaryProof.ProofDocumentOption.RBTN_UPLOADDOCPROOF)

        // Upload Proof Document Upload
        if(proofDocUpload !== undefined){
            cy.UploadFile(elems_MembershipRegistrationDependent.DocumentaryProof.ProofDocumentOption.ProofDocumentUpload.UPL_PROOFDOCUMENTUPLOAD, proofDocUpload)
        }

        // Set Proof Document Option Checkbox
        if(docProofReceived !== undefined){
            cy.TickCheckBox(elems_MembershipRegistrationDependent.DocumentaryProof.ProofDocumentOption.CHK_DOCPROOFRECEIVED, docProofReceived)
        }

        // Choose Doc Proof Validated
        if(docProofValidated !== undefined){
            cy.SelectDropDownItem(elems_MembershipRegistrationDependent.DocumentaryProof.ProofDocumentOption.DRP_DOCPROOFVALIDATED, docProofValidated)
        }
    }

    else {
        throw new Error("Member Registration Dependent.fillOutProofDocument error on argument./n\
                        Accepted values: SUBMITDOCPROOFLATER and UPLOADDOCPROOF")
    }

}

       /*****************************************************
      * Method: fillOutPreferredSafraClubs
      * Description: Fills-out Consent Information
      *
      * @param {string} safraJurong SAFRA Jurong Checkbox Setting
      * @param {string} safraPunggol SAFRA Punggol Checkbox Setting
      * @param {string} safraToaPayoh SAFRA Toa Payoh Checkbox Setting
      * @param {string} safraMtFaber SAFRA Mt Faber Checkbox Setting
      * @param {string} safraTampines SAFRA Tampines Checkbox Setting
      * @param {string} safraYishun SAFRA Yishun Checkbox Setting
      *****************************************************/
        fillOutPreferredSafraClubs({safraJurong, safraPunggol, safraToaPayoh, safraMtFaber, safraTampines, safraYishun})
        {
 
            // Set SAFRA Jurong Checkbox
            if(safraJurong !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.PreferredSafraClubs.CHK_SAFRAJURONG, safraJurong)
            }
    
            // Set SAFRA Punggol Checkbox Checkbox
            if(safraPunggol !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.PreferredSafraClubs.CHK_SAFRAPUNGGOL, safraPunggol)
            }
    
            // Set SAFRA Toa Payoh Checkbox
            if(safraToaPayoh !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.PreferredSafraClubs.CHK_SAFRATOAPAYOH, safraToaPayoh)
            }
    
            // Set SAFRA Mt Faber Checkbox
            if(safraMtFaber !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.PreferredSafraClubs.CHK_SAFRAMTFABER, safraMtFaber)
            }
    
            // Set SAFRA Tampines Checkbox
            if(safraTampines !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.PreferredSafraClubs.CHK_SAFRATAMPINES, safraTampines)
            }
    
            // Set SAFRA Yishun Checkbox
            if(safraYishun !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.PreferredSafraClubs.CHK_SAFRATAMPINES, safraYishun)
            }
    
            // Error Handling
            if( safraJurong === undefined 
                && safraPunggol === undefined
                && safraToaPayoh === undefined
                && safraMtFaber === undefined
                && safraTampines === undefined
                && safraYishun === undefined
            ){
                throw new Error("MemberRegistrationDependent.fillOutPreferredSafraClubs Error!!./n\
                                Please provide at least one argument.")
            }
    
        }
    
        /*****************************************************
         * Method: fillOutSafraBrands
         * Description: Fills-out Safra Brands
         *
         * @param {string} energyOneGym Energy One Gym Checkbox Setting
         * @param {string} kidzAmazeSplshIndrPlayGrnd Kidz Amaze/Splash Indoor Playground Checkbox Setting
         * @param {string} finsSwimSchool FINS Swim School Checkbox Setting
         *****************************************************/
         fillOutSafraBrands({energyOneGym, kidzAmazeSplshIndrPlayGrnd, finsSwimSchool})
         {
    
            // Set Energy One Gtm Checkbox
            if(energyOneGym !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.SafraBrands.CHK_ENERGYONEGYM, energyOneGym)
            }
    
            // Set Kidz Amaze/Splash Indoor Playground Checkbox Checkbox
            if(kidzAmazeSplshIndrPlayGrnd !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.SafraBrands.CHK_KIDZAMAZE_SPLSHINDOORPLAYG, kidzAmazeSplshIndrPlayGrnd)
            }
    
            // Set FINS Swim School Checkbox
            if(finsSwimSchool !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.SafraBrands.CHK_FINSSWIMSCHOOL, finsSwimSchool)
            }
    
            // Error Handling
            if( energyOneGym === undefined 
                && kidzAmazeSplshIndrPlayGrnd === undefined
                && finsSwimSchool === undefined
            ){
                throw new Error("MemberRegistrationDependent.fillOutSafraBrands Error!!./n\
                                Please provide at least one argument.")
            }
    
        }
    
        /*****************************************************
         * Method: fillOutIamInterestedIn
         * Description: Fills-out I am Interested in
         *
         * @param {string} allEventsAndActivities All Events and Activities Checkbox Setting
         * @param {string} allPeaksAndPromos All Peaks and Promotions Checkbox Setting
         * @param {string} fitnessAndAdventure Fitness & Adventure Checkbox Setting
         * @param {string} childEnrichmentActivities Child Enrichment/Activities Checkbox Setting
         * @param {string} lifeLongLearning Lifelong Learning Checkbox Setting
         * @param {string} leisureAndEntrtnmnt Leisure & Entertainment Checkbox Setting
         * @param {string} foodAndBeverages Food & Beverages Checkbox Setting
         * @param {string} shoppingAndGroceries Shopping & Groceries Checkbox Setting
         * @param {string} travel Travel Checkbox Setting
         * @param {string} motoring Motoring Checkbox Setting
         * @param {string} healthAndBeauty Health & Beauty Checkbox Setting
         * @param {string} safraPtsRewardsProgramme SAFRAPOINTS Rewards Programme Checkbox Setting
         *****************************************************/
         filloutIamInterestedIn({allEventsAndActivities, allPeaksAndPromos, fitnessAndAdventure, childEnrichmentActivities, lifeLongLearning,
            leisureAndEntrtnmnt, foodAndBeverages, shoppingAndGroceries, travel, motoring, healthAndBeauty, safraPtsRewardsProgramme
        })
        {
    
            // Set All Events and Activities Checkbox
            if(allEventsAndActivities !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.IAmInterestedIn.CHK_ALLEVENTSANDACTIV, allEventsAndActivities)
            }
    
            // Set All Peaks and Promotions Checkbox
            if(allPeaksAndPromos !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.IAmInterestedIn.CHK_ALLPEAKSANDPROMO, allPeaksAndPromos)
            }
    
            // Set Fitness & Adventure Checkbox
            if(fitnessAndAdventure !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.IAmInterestedIn.CHK_FITNESSANDADVENTURE, fitnessAndAdventure)
            }
    
            // Set Child Enrichment/Activitie Checkbox
            if(childEnrichmentActivities !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.IAmInterestedIn.CHK_CHILDENRICHMENT_ACTIV, childEnrichmentActivities)
            }
    
            // Set Lifelong Learning Checkbox
            if(lifeLongLearning !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.IAmInterestedIn.CHK_LIFELONGLEARNING, lifeLongLearning)
            }
    
            // Set Leisure & Entertainment Checkbox
            if(leisureAndEntrtnmnt !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.IAmInterestedIn.CHK_LEISUREANDENTERTAINMENT, leisureAndEntrtnmnt)
            }
    
            // Set Food & Beverages Checkbox
            if(foodAndBeverages !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.IAmInterestedIn.CHK_FOODANDBEVERAGES, foodAndBeverages)
            }
    
            // Set Shopping & Groceries Checkbox
            if(shoppingAndGroceries !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.IAmInterestedIn.CHK_SHOPPINGANDGROCERIES, shoppingAndGroceries)
            }
    
            // Set Travel Checkbox
            if(travel !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.IAmInterestedIn.CHK_TRAVEL, travel)
            }
    
            // Set Motoring Checkbox
            if(motoring !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.IAmInterestedIn.CHK_MOTORING, motoring)
            }
    
            // Set Health & Beauty Checkbox
            if(healthAndBeauty !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.IAmInterestedIn.CHK_HEALTHANDBEAUTY, healthAndBeauty)
            }
    
            // Set SAFRAPOINTS Rewards Programme Checkbox
            if(safraPtsRewardsProgramme !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.IAmInterestedIn.CHK_SAFRAPOINTSREWARDPROGRAMME, safraPtsRewardsProgramme)
            }
    
            // Error Handling
            if( allEventsAndActivities === undefined 
                && allPeaksAndPromos === undefined
                && fitnessAndAdventure === undefined
                && childEnrichmentActivities === undefined
                && lifeLongLearning === undefined
                && leisureAndEntrtnmnt === undefined
                && foodAndBeverages === undefined
                && shoppingAndGroceries === undefined
                && travel === undefined
                && motoring === undefined
                && healthAndBeauty === undefined
                && safraPtsRewardsProgramme === undefined
            ){
                throw new Error("MemberRegistrationDependent.fillOutIamInterestedIn Error!!./n\
                                Please provide at least one argument.")
            }
    
        }
    
        
    
        /*****************************************************
         * Method: fillOutSafraNewsLetter
         * Description: Fills-out SAFRA Newsletter
         *
         * @param {string} ensman e-NSMan Checkbox Setting
         *****************************************************/
         filloutSafraNewsLetter({ensman})
         {
    
            // Set ensman Checkbox
            if(ensman !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.SafraNewsletter.CHK_ENSMAN, ensman)
            }
    
            // Error Handling
            if( ensman === undefined ){
                throw new Error("MemberRegistrationDependent.fillOutSafraNewsLetter Error!!./n\
                                Please provide at least one argument.")
            }
      
        }
    
        /*****************************************************
         * Method: fillOutInterestGrpsAndMicroClubs
         * Description: Fills-out Interest Groups & Micro Clubs
         *
         * @param {string} safraAdventureClub SAFRA Adventure Club Checkbox Setting
         * @param {string} bitezFandB Bitez (F&B) Checkbox Setting
         * @param {string} safraCommSrvcsClub SAFRA Community Services Club Checkbox Setting
         * @param {string} safraCompSportsClub SAFRA Competitive Sports Club Checkbox Setting
         * @param {string} safraDigitalMediaClub SAFRA Digital Media Club Checkbox Setting
         * @param {string} safraEntrpnrsClub SAFRA Entrepreneurs Club Checkbox Setting
         * @param {string} fuseEntrtnmnt Fuse (Entertainment) Checkbox Setting
         * @param {string} safraGolfingSection SAFRA Golfing Section Checkbox Setting
         * @param {string} safraMovieMax SAFRA MovieMax Checkbox Setting
         * @param {string} safraPhotoClub SAFRA Photographic Club Checkbox Setting
         * @param {string} safraRunningClub SAFRA Running Club Checkbox Setting
         * @param {string} safraShootingClub SAFRA Shooting Club Checkbox Setting
         * @param {string} safraSocialBadmntnClub SAFRA Social Badmintion Club Checkbox Setting
         * @param {string} safraTechClub SAFRA Tech Club Checkbox Setting
         * @param {string} safraTravelClub SAFRA Travel Club Checkbox Setting
         *****************************************************/
         fillOutInterestGrpsAndMicroClubs({safraAdventureClub, bitezFandB, safraCommSrvcsClub, safraCompSportsClub, safraDigitalMediaClub,
            safraEntrpnrsClub, fuseEntrtnmnt, safraGolfingSection, safraMovieMax, safraPhotoClub, safraRunningClub, safraShootingClub,
            safraSocialBadmntnClub, safraTechClub, safraTravelClub})
        {
    
            // Set SAFRA Adventure Club Checkbox
            if(safraAdventureClub !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRAADVENTURECLUB, safraAdventureClub)
            }
    
            // Set Bitez (F&B) Checkbox
            if(bitezFandB !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_BITEZ_FANDB, bitezFandB)
            }
    
            // Set SAFRA Community Services Club Checkbox
            if(safraCommSrvcsClub !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRACOMMSERVICESCLUB, safraCommSrvcsClub)
            }
    
            // Set SAFRA Competitive Sports Club Checkbox
            if(safraCompSportsClub !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRACOMPTTIVESPORTSCLUB, safraCompSportsClub)
            }
    
            // Set SAFRA Digital Media Club Checkbox
            if(safraDigitalMediaClub !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRADIGIMEDIACLUB, safraDigitalMediaClub)
            }
    
            // Set SAFRA Entrepreneurs Club Checkbox
            if(safraEntrpnrsClub !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRAENTREPRENEURSCLUB, safraEntrpnrsClub)
            }
    
            // Set Fuse (Entertainment) Checkbox
            if(fuseEntrtnmnt !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_FUSE, fuseEntrtnmnt)
            }
    
            // Set SAFRA Golfing Section Checkbox
            if(safraGolfingSection !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRAGOLFINGSECTION, safraGolfingSection)
            }
    
            // Set SAFRA MovieMax Checkbox
            if(safraMovieMax !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRAMOVIEMAX, safraMovieMax)
            }
    
            // Set SAFRA Photographic Club Checkbox
            // if(safraPhotoClub !== undefined){
            //     cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRAPHOTOGRAPHICCLUB, safraPhotoClub)
            // }
    
            // Set SAFRA Running Club Checkbox
            // if(safraRunningClub !== undefined){
            //     cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRAPHOTOGRAPHICCLUB, safraRunningClub)
            // }
    
            // Set SAFRA Shooting Club Checkbox
            if(safraShootingClub !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRASHOOTINGCLUB, safraShootingClub)
            }
    
            // Set SAFRA Social Badmintion Club Checkbox
            if(safraSocialBadmntnClub !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRASOCIALBADMINTONCLUB, safraSocialBadmntnClub)
            }
    
            // Set SAFRA Tech Club Checkbox
            if(safraTechClub !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRATECHCLUB, safraTechClub)
            }
    
            // Set SAFRA Travel Club Checkbox
            if(safraTravelClub !== undefined){
                cy.TickCheckBox(elems_MembershipRegistrationDependent.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRATRAVELCLUB, safraTravelClub)
            }
    
            // Error Handling
            if( safraAdventureClub === undefined 
                && bitezFandB === undefined
                && safraCommSrvcsClub === undefined 
                && safraCompSportsClub === undefined 
                && safraDigitalMediaClub === undefined 
                && safraEntrpnrsClub === undefined 
                && fuseEntrtnmnt === undefined 
                && safraGolfingSection === undefined
                && safraMovieMax === undefined 
                && safraPhotoClub === undefined 
                && safraRunningClub === undefined 
                && safraShootingClub === undefined 
                && safraSocialBadmntnClub === undefined 
                && safraTechClub === undefined 
                && safraTravelClub === undefined 
            ){
                throw new Error("MemberRegistrationDependent.fillOutInterestGrpsAndMicroClubs Error!!./n\
                                Please provide at least one argument.")
            }
   
      
        }
    /*****************************************************
    * Method: Save
    * Description: Save the Add dependent form
    *****************************************************/
     Save()
     {
         cy.Click(elems_MembershipRegistrationDependent.BTN_SAVE)
         cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Membership Registration - Principal')
        }
      /*****************************************************
      * Method: cancel
      * Description: Cancel Add Dependent form
      *****************************************************/
       Cancel(expectedPage)
       {
         cy.Click(elems_MembershipRegistrationDependent.BTN_CANCEL)
         cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Membership Registration - Principal')
       } 

      /*****************************************************
      * Method: EnterDateOfBirth
      * Description: This function enter date of birth
      * @param {string} dateOfBirth - Date of birth
      *****************************************************/
       EnterDateOfBirth(dateOfBirth)
       {
        cy.EnterDate(elems_MembershipRegistrationDependent.PersonalInformation.DATE_DATEOFBIRTH, dateOfBirth)
       } 
 
   
}
export default Membership_Registration_Dependent