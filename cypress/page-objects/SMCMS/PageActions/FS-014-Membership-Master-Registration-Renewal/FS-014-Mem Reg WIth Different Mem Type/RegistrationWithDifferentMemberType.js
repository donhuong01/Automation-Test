import elems_MemberRegistrationPrincipal from '../../../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/MembershipRegPrincipal(Batch)'
import elems_PageHeader from '../../../../../page-objects/SMCMS/Elements/Common/PageHeader'

class MemberRegistrationWithDifferentMemberType {

    /*****************************************************
     * Method: fillOutPersonalInformation
     * Description: Fill-out Personal Infromation
     *
     * @param {string} NameOnNRIC Name on NRIC
     * @param {string} NameOnCard Name on Card
     * @param {string} Nric NRIC
     * @param {string} Gender Gender
     * @param {string} DATE_DATEOFBIRTH Date of Birth
     * @param {string} NSStatus  NS Status
     * @param {string} NSRank  NSRank
     * @param {string} MemberType  MemberType
     * @param {string} Nationality  Nationality
     * @param {string} MaritalStatus MaritalStatus
     * @param {string} CardType CardType
     * @param {string} InterestinDBSCard InterestinDBSCard
     * @param {string} ProfilePicture ProfilePicture
     *****************************************************/
    fillsoutPersonalInformation({ MemberCategory, NameOnNRIC, NameOnCard, Nric, Gender, DATE_DATEOFBIRTH, Age, Nationality, MaritalStatus, CardType, InterestinDBSCard, ProfilePicture
    }) {
        // Verify Member Catergory
        if (MemberCategory !== undefined) {
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_MEMBERCATEGORY, MemberCategory)
        }
        // Enter Name on NRIC
        if (NameOnNRIC !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NAMEONNRIC).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NAMEONNRIC, NameOnNRIC)
        } boo
        // Enter Name onCArd
        if (NameOnCard !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NAMEONCARD).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NAMEONCARD, NameOnCard)
        }
        // Enter NRIC
        if (Nric !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NRIC).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NRIC, Nric)
        }
        // Enter Gender
        if (Gender !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_GENDER).clear()
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_GENDER, Gender)
        }
        // Enter Date of Birth
        if (DATE_DATEOFBIRTH !== undefined) {
            cy.EnterDate(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DATE_DATEOFBIRTH, DateofBirth)
        }
        // Verify Age
        if (Age !== undefined) {
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_AGE, Age)
        }
        // Enter NS Status
        //  if(NSStatus !== undefined){
        //      cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSSTATUS, NSStatus)
        //  }

        //  if(NSRank !== undefined){
        //  cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSRANK, NSRank)
        //  }
        //  // Verify Member Type
        //  if(MemberType !== undefined){
        //  cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_MEMBERTYPE, MemberType)
        //  }
        // Enter Nationality
        if (Nationality !== undefined) {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NATIONALITY, Nationality)
        }
        // Enter Marital Status
        if (MaritalStatus !== undefined) {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_MARITALSTATUS, MaritalStatus)
        }
        //Enter Card Tyoe
        if (CardType !== undefined) {
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_CARDTYPE, CardType)
        }
        // Enter Interest in DBS Card
        if (InterestinDBSCard !== undefined) {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_INTERESTINDBSCARD, InterestinDBSCard)
        }
        // Enter Interest in Profile Picture
        if (ProfilePicture !== undefined) {
            cy.UploadFile(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.UPL_SELECTFILES, ProfilePicture)
        }

        // Error Handling
        if (NameOnNRIC === undefined
            && NameOnCard === undefined
            && Nric === undefined
            && Gender === undefined
            && DATE_DATEOFBIRTH === undefined
            //  && NSStatus === undefined
            //  && NSRank === undefined
            && Nationality === undefined
            && MaritalStatus === undefined
            && InterestinDBSCard === undefined
            && ProfilePicture === undefined

        ) {
            throw new Error("MemberRegistrationPrincipal.PersonalInformation Error!!./n\
                             Please provide at least one argument.")
        }

    }


    /*****************************************************
     * Method: SelectMemberType
     * Description: Fill-out Personal Infromation
     * @param {string} MemberType  MemberType
     *****************************************************/
    SelectMemberType(MemberType) {

        if (MemberType === 'OD') {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSSTATUS, 'SAF NSMan')
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSRANK, 'Officer')

            // Verify Member Type
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_MEMBERTYPE, MemberType)


        }
        if (MemberType === 'OA') {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSSTATUS, 'NSF')
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSRANK, 'Officer')

            // Verify Member Type
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_MEMBERTYPE, MemberType)


        }
        if (MemberType === 'AS') {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSSTATUS, 'SAF Regular DXO')
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSRANK, 'Officer')

            // Verify Member Type
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_MEMBERTYPE, MemberType)


        }
        if (MemberType === 'AV') {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSSTATUS, 'SAFVC Active')
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSRANK, 'SAF Volunteer 12 Yrs')

            // Verify Member Type
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_MEMBERTYPE, MemberType)


        }
        if (MemberType === 'AT') {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSSTATUS, 'SAFVC Active')
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSRANK, 'SAF Volunteer')

            // Verify Member Type
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_MEMBERTYPE, MemberType)


        }
        if (MemberType === 'LF') {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSSTATUS, 'SAF NSMan')
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSRANK, 'Officer')
            cy.xpath('//input[@id="chkLfMembership"]').click()
            // Verify Member Type
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_MEMBERTYPE, MemberType)


        }
        if (MemberType === 'OE') {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSSTATUS, 'Former NSMan')
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSRANK, 'Non Officer')

            // Verify Member Type
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_MEMBERTYPE, MemberType)


        }
        if (MemberType === 'FA') {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSSTATUS, 'NSF')
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSRANK, 'Officer')

            // Verify Member Type
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_MEMBERTYPE, MemberType)


        }
        if (MemberType === 'VD') {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSSTATUS, 'C2D')
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSRANK, 'C2D (abv.70)')

            // Verify Member Type
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_MEMBERTYPE, MemberType)


        }
        if (MemberType === 'VR') {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSSTATUS, 'VETERAN')
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSRANK, 'Officer')

            // Verify Member Type
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_MEMBERTYPE, MemberType)


        }
        if (MemberType === 'OF') {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSSTATUS, 'Former SAFRA Member')
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSRANK, 'Non Officer')

            // Verify Member Type
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_MEMBERTYPE, MemberType)


        }
        if (MemberType === 'VO') {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSSTATUS, 'C2D')
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSRANK, 'C2D')

            // Verify Member Type
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_MEMBERTYPE, MemberType)


        }
        if (MemberType === 'VT') {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSSTATUS, 'VETERAN')
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSRANK, 'Officer')

            // Verify Member Type
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_MEMBERTYPE, MemberType)


        }

    }




    fillsoutAddressInformation({ PostalCode, UnitNumber, POBOX, MyMailbox }) {
        if (PostalCode != undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.ADDRESSINFORMATION.TXT_POSTALCODE).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.ADDRESSINFORMATION.TXT_POSTALCODE, PostalCode)
        }
        if (UnitNumber !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.ADDRESSINFORMATION.TXT_UNITNUMBER).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.ADDRESSINFORMATION.TXT_UNITNUMBER, UnitNumber)
        }
        if (POBOX !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.ADDRESSINFORMATION.TXT_POBOX).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.ADDRESSINFORMATION.TXT_POBOX, POBOX)
        }
        if (MyMailbox !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.ADDRESSINFORMATION.TXT_MAILBOX).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.ADDRESSINFORMATION.TXT_MAILBOX, MyMailbox)
        }
        // Error Handling
        if (PostalCode === undefined
            && UnitNumber === undefined
            && POBOX === undefined
            && MyMailbox === undefined

        ) {
            throw new Error("MemberRegistrationPrincipal.AddressInformationError!!./n\
                         Please provide at least one argument.")
        }
    }
    fillsoutContactInformation({ Handphone, EmailAddress, HomeNumber, EmergencyContact }) {
        if (Handphone !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.TXT_HANDPHONE).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.TXT_HANDPHONE, Handphone)
        }
        if (EmailAddress !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.TXT_EMAILADDRESS).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.TXT_EMAILADDRESS, EmailAddress)
        }
        if (HomeNumber !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.TXT_HOMENUMBER).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.TXT_HOMENUMBER, HomeNumber)
        }
        if (EmergencyContact !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.TXT_EMERGENCYCONTACT).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.TXT_EMERGENCYCONTACT, EmergencyContact)
        }
        // Error Handling
        if (Handphone === undefined
            && EmailAddress === undefined
            && HomeNumber === undefined
            && EmergencyContact === undefined


        ) {
            throw new Error("MemberRegistrationPrincipal.AddressInformationError!!./n\
                         Please provide at least one argument.")
        }
    }



    fillsoutPreferredContactMode({ SelectAll, Email, Mail, SMS, VoiceCall, PushNotification, WhatsApp }) {
        if (SelectAll !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.CHK_SELECTALL, SelectAll)
        }
        if (Email !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.CHK_EMAIL, Email)
        }
        if (Mail !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.CHK_MAIL, Mail)
        }
        if (SMS !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.CHK_SMS, SMS)
        }
        if (VoiceCall !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.CHK_VOICECALL, VoiceCall)
        }
        if (PushNotification !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.CHK_PUSHNOTIFICATION, PushNotification)
        }
        if (WhatsApp !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.CHK_WHATSAPP, WhatsApp)
        }
        // Error Handling
        if (SelectAll === undefined
            && Email === undefined
            && Mail === undefined
            && SMS === undefined
            && VoiceCall === undefined
            && PushNotification === undefined
            && WhatsApp === undefined


        ) {
            throw new Error("MemberRegistrationPrincipal.PreferredContactMode!!./n\
                         Please provide at least one argument.")
        }
    }
    fillsoutConsentInformation({ MarketingConsent, ServiceNotificationConsent, TransactionalConsent }) {
        if (MarketingConsent !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.CHK_MARKETINGCONSENT, MarketingConsent)
        }
        if (ServiceNotificationConsent !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.CHK_SERVICENOTIFICATIONCONSENT, ServiceNotificationConsent)
        }
        if (TransactionalConsent !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.CHK_TRANSACTIONALCONSENT, TransactionalConsent)
        }

        // Error Handling
        if (MarketingConsent === undefined
            && ServiceNotificationConsent === undefined
            && TransactionalConsent === undefined
        ) {
            throw new Error("MemberRegistrationPrincipaln.ConsentInformation!!./n\
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
    fillOutProofDocument({ proofOfDocOption, proofDocOptionChkBox, proofDocUpload, docProofReceived, docProofValidated }) {

        // Set Submit Document Proof Later Radio Button
        if (proofOfDocOption.toUpperCase() === 'SUBMITDOCPROOFLATER') {
            cy.TickRadioButton(elems_MemberRegistrationPrincipal.ProofDocument.RBTN_SUBMITDOCPROOFLATER)
        }

        // Set Upload Document Proof Radio Button
        else if (proofOfDocOption.toUpperCase() === 'UPLOADDOCPROOF') {
            cy.TickRadioButton(elems_MemberRegistrationPrincipal.ProofDocument.RBTN_UPLOADDOCPROOF)

            // Upload Proof Document Upload
            if (proofDocUpload !== undefined) {
                cy.UploadFile(elems_MemberRegistrationPrincipal.ProofDocument.ProofDocumentUpload.UPL_PROOFDOCUMENTUPLOAD, proofDocUpload)
            }

            // Set Proof Document Option Checkbox
            if (docProofReceived !== undefined) {
                cy.TickCheckBox(elems_MemberRegistrationPrincipal.ProofDocument.CHK_DOCPROOFRECEIVED, docProofReceived)
            }

            // Choose Doc Proof Validated
            if (docProofValidated !== undefined) {
                cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.ProofDocument.DRP_DOCPROOFVALIDATED, docProofValidated)
            }
        }

        else {
            throw new Error("MembershipRegistrationDependent.fillOutProofDocument error on 'type' argument./n\
                                 Accepted 'type' values: SUBMITDOCPROOFLATER and UPLOADDOCPROOF")
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
    fillOutPreferredSafraClubs({ safraJurong, safraPunggol, safraToaPayoh, safraMtFaber, safraTampines, safraYishun }) {

        // Set SAFRA Jurong Checkbox
        if (safraJurong !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.PREFREEREDSAFRACLUBS.CHK_SAFRAJURONG, safraJurong)
        }

        // Set SAFRA Punggol Checkbox Checkbox
        if (safraPunggol !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.PREFREEREDSAFRACLUBS.CHK_SAFRAPUNGGOL, safraPunggol)
        }

        // Set SAFRA Toa Payoh Checkbox
        if (safraToaPayoh !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.PREFREEREDSAFRACLUBS.CHK_SAFRATOAPAYOH, safraToaPayoh)
        }

        // Set SAFRA Mt Faber Checkbox
        if (safraMtFaber !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.PREFREEREDSAFRACLUBS.CHK_SAFRAMTFABER, safraMtFaber)
        }

        // Set SAFRA Tampines Checkbox
        if (safraTampines !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.PREFREEREDSAFRACLUBS.CHK_SAFRATAMPINES, safraTampines)
        }

        // Set SAFRA Yishun Checkbox
        if (safraYishun !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.PREFREEREDSAFRACLUBS.CHK_SAFRATAMPINES, safraYishun)
        }

        // Error Handling
        if (safraJurong === undefined
            && safraPunggol === undefined
            && safraToaPayoh === undefined
            && safraMtFaber === undefined
            && safraTampines === undefined
            && safraYishun === undefined
        ) {
            throw new Error("MemberRegistrationPrincipal.fillOutPreferredSafraClubs Error!!./n\
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
    fillOutSafraBrands({ energyOneGym, kidzAmazeSplshIndrPlayGrnd, finsSwimSchool }) {

        // Set Energy One Gtm Checkbox
        if (energyOneGym !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.SAFRABRANDS.CHK_ENERGYONEGYM, energyOneGym)
        }

        // Set Kidz Amaze/Splash Indoor Playground Checkbox Checkbox
        if (kidzAmazeSplshIndrPlayGrnd !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.SAFRABRANDS.CHK_KIDSAMAZESPLSHINDLAYG, kidzAmazeSplshIndrPlayGrnd)
        }

        // Set FINS Swim School Checkbox
        if (finsSwimSchool !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.SAFRABRANDS.CHK_FINSSWIMSCHOOL, finsSwimSchool)
        }

        // Error Handling
        if (energyOneGym === undefined
            && kidzAmazeSplshIndrPlayGrnd === undefined
            && finsSwimSchool === undefined
        ) {
            throw new Error("MemberRegistrationPrincipal.fillOutSafraBrands Error!!./n\
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
    fillOutIamInterestedIn({ allEventsAndActivities, allPeaksAndPromos, fitnessAndAdventure, childEnrichmentActivities, lifeLongLearning,
        leisureAndEntrtnmnt, foodAndBeverages, shoppingAndGroceries, travel, motoring, healthAndBeauty, safraPtsRewardsProgramme
    }) {

        // Set All Events and Activities Checkbox
        if (allEventsAndActivities !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_ALLEVENTSANDACTIVITIES, allEventsAndActivities)
        }

        // Set All Peaks and Promotions Checkbox
        if (allPeaksAndPromos !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_ALLPEAKSANDPROMOTIONS, allPeaksAndPromos)
        }

        // Set Fitness & Adventure Checkbox
        if (fitnessAndAdventure !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_FITNESSANDADVENTURE, fitnessAndAdventure)
        }

        // Set Child Enrichment/Activitie Checkbox
        if (childEnrichmentActivities !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_CHILDENRICHMENTACTIVITIES, childEnrichmentActivities)
        }

        // Set Lifelong Learning Checkbox
        if (lifeLongLearning !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_LIFELONGLEARNING, lifeLongLearning)
        }

        // Set Leisure & Entertainment Checkbox
        if (leisureAndEntrtnmnt !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_LEISUREANDENTERTAINMENT, leisureAndEntrtnmnt)
        }

        // Set Food & Beverages Checkbox
        if (foodAndBeverages !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_FOODANDBEVERAGES, foodAndBeverages)
        }

        // Set Shopping & Groceries Checkbox
        if (shoppingAndGroceries !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_SHOPPINGANDGROCERIES, shoppingAndGroceries)
        }

        // Set Travel Checkbox
        if (travel !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_TRAVEL, travel)
        }

        // Set Motoring Checkbox
        if (motoring !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_MOTORING, motoring)
        }

        // Set Health & Beauty Checkbox
        if (healthAndBeauty !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_HEALTHANDBEAUTY, healthAndBeauty)
        }

        // Set SAFRAPOINTS Rewards Programme Checkbox
        if (safraPtsRewardsProgramme !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_SAFRAPOINTSREWARDPROGRAMME, safraPtsRewardsProgramme)
        }

        // Error Handling
        if (allEventsAndActivities === undefined
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
        ) {
            throw new Error("MemberRegistrationPrincipal.fillOutIamInterestedIn Error!!./n\
                             Please provide at least one argument.")
        }

    }



    /*****************************************************
     * Method: fillOutSafraNewsLetter
     * Description: Fills-out SAFRA Newsletter
     *
     * @param {string} ensman e-NSMan Checkbox Setting
     *****************************************************/
    fillOutSafraNewsLetter({ ensman }) {

        // Set ensman Checkbox
        if (ensman !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.SAFRANEWSLETTER.CHK_ENSMAN, ensman)
        }

        // Error Handling
        if (ensman === undefined) {
            throw new Error("MemberRegistrationPrincipal.fillOutSafraNewsLetter Error!!./n\
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
    fillOutInterestGrpsAndMicroClubs({ safraAdventureClub, bitezFandB, safraCommSrvcsClub, safraCompSportsClub, safraDigitalMediaClub,
        safraEntrpnrsClub, fuseEntrtnmnt, safraGolfingSection, safraMovieMax, safraPhotoClub, safraRunningClub, safraShootingClub,
        safraSocialBadmntnClub, safraTechClub, safraTravelClub
    }) {

        // Set SAFRA Adventure Club Checkbox
        if (safraAdventureClub !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRAADVENTURECLUB, safraAdventureClub)
        }

        // Set Bitez (F&B) Checkbox
        if (bitezFandB !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_BITEZ, bitezFandB)
        }

        // Set SAFRA Community Services Club Checkbox
        if (safraCommSrvcsClub !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRACOMSECLUB, safraCommSrvcsClub)
        }

        // Set SAFRA Competitive Sports Club Checkbox
        if (safraCompSportsClub !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRACOMPSPORTSCLUB, safraCompSportsClub)
        }

        // Set SAFRA Digital Media Club Checkbox
        if (safraDigitalMediaClub !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRADIGMECLUB, safraDigitalMediaClub)
        }

        // Set SAFRA Entrepreneurs Club Checkbox
        if (safraEntrpnrsClub !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRAENTREPRENEURSCLUB, safraEntrpnrsClub)
        }

        // Set Fuse (Entertainment) Checkbox
        if (fuseEntrtnmnt !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_FUSE, fuseEntrtnmnt)
        }

        // Set SAFRA Golfing Section Checkbox
        if (safraGolfingSection !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRAGOLFINGSECTION, safraGolfingSection)
        }

        // Set SAFRA MovieMax Checkbox
        if (safraMovieMax !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRAMOVIEMAX, safraMovieMax)
        }

        // Set SAFRA Photographic Club Checkbox
        if (safraPhotoClub !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRAPHOTOGRAPHICCLUB, safraPhotoClub)
        }

        // Set SAFRA Running Club Checkbox
        if (safraRunningClub !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRAPHOTOGRAPHICCLUB, safraRunningClub)
        }

        // Set SAFRA Shooting Club Checkbox
        if (safraShootingClub !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRASHOOTINGCLUB, safraShootingClub)
        }

        // Set SAFRA Social Badmintion Club Checkbox
        if (safraSocialBadmntnClub !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRASOCBADCLUB, safraSocialBadmntnClub)
        }

        // Set SAFRA Tech Club Checkbox
        if (safraTechClub !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRATECHCLUB, safraTechClub)
        }

        // Set SAFRA Travel Club Checkbox
        if (safraTravelClub !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRATRAVELCLUB, safraTravelClub)
        }

        // Error Handling
        if (safraAdventureClub === undefined
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
        ) {
            throw new Error("MemberRegistrationPrincipal.fillOutInterestGrpsAndMicroClubs Error!!./n\
                             Please provide at least one argument.")
        }


    }


    /*****************************************************
     * Method: verifyPersonalInformation
     * Description: verify Personal Infromation
     *@param {string} MemberCategory Member Category
     * @param {string} NameOnNRIC Name on NRIC
     * @param {string} NameOnCard Name on Card
     * @param {string} Nric NRIC
     * @param {string} Gender Gender
     * @param {string} DATE_DATEOFBIRTH Date of Birth
     * @param {string} NSStatus  NS Status
     * @param {string} NSRank  NSRank
     * @param {string} MemberType  MemberType
     * @param {string} Nationality  Nationality
     * @param {string} MaritalStatus MaritalStatus
     * @param {string} CardType CardType
     * @param {string} InterestinDBSCard InterestinDBSCard
     * @param {string} ProfilePicture ProfilePicture
     *****************************************************/
    verifyPersonalInformation({ MemberCategory, NameOnNRIC, NameOnCard, Nric, Gender, DateofBirth, Age, Nationality, MaritalStatus, CardType, InterestinDBSCard, ProfilePicture
    }) {
        // Verify Member Catergory
        if (MemberCategory !== undefined) {
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_MEMBERCATEGORY, MemberCategory)
        }
        // Verify Name on NRIC
        if (NameOnNRIC !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NAMEONNRIC).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NAMEONNRIC, NameOnNRIC)
        }
        // Verify Name onCArd
        if (NameOnCard !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NAMEONCARD).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NAMEONCARD, NameOnCard)
        }
        // Verify NRIC
        if (Nric !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NRIC).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.TXT_NRIC, Nric)
        }
        // Verify Gender
        if (Gender !== undefined) {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_GENDER, Gender)
        }
        // VerifyDate of Birth
        if (DateofBirth !== undefined) {
            //  cy.EnterDate(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DATE_DATEOFBIRTH, DateofBirth)
        }
        // Verify Age
        if (Age !== undefined) {
            //  cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_AGE, Age)
        }
        // Verify NS Status
        //  if(NSStatus !== undefined){
        //      cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSSTATUS, NSStatus)
        //  }
        // // Verify NSRank
        //  if(NSRank !== undefined){
        //      cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NSRANK, NSRank)
        //  }
        // // Verify Member Type
        //  if(MemberType !== undefined){
        //      cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_MEMBERTYPE, MemberType)
        //  }
        // Verify Nationality
        if (Nationality !== undefined) {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_NATIONALITY, Nationality)
        }
        // Verify Marital Status
        if (MaritalStatus !== undefined) {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_MARITALSTATUS, MaritalStatus)
        }
        // Verify Card Tyoe
        if (CardType !== undefined) {
            cy.ValidateElementText(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.LBL_CARDTYPE, CardType)
        }
        // Verify Interest in DBS Card
        if (InterestinDBSCard !== undefined) {
            cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.DRP_INTERESTINDBSCARD, InterestinDBSCard)
        }
        // Verify in Profile Picture
        if (ProfilePicture !== undefined) {
            cy.UploadFile(elems_MemberRegistrationPrincipal.PERSONALINFORMATION.UPL_SELECTFILES, ProfilePicture)
        }

        // Error Handling
        if (NameOnNRIC === undefined
            && NameOnCard === undefined
            && Nric === undefined
            && Gender === undefined
            && DateofBirth === undefined
            //  && NSStatus === undefined
            //  && NSRank === undefined
            && Nationality === undefined
            && MaritalStatus === undefined
            && InterestinDBSCard === undefined
            && ProfilePicture === undefined

        ) {
            throw new Error("MemberRegistrationPrincipal.PersonalInformation Error!!./n\
                             Please provide at least one argument.")
        }

    }

    verifyAddressInformation({ PostalCode, UnitNumber, POBOX, MyMailbox }) {
        // Verify in PostalCode
        if (PostalCode != undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.ADDRESSINFORMATION.TXT_POSTALCODE).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.ADDRESSINFORMATION.TXT_POSTALCODE, PostalCode)
        }
        // Verify in UnitNumber
        if (UnitNumber !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.ADDRESSINFORMATION.TXT_UNITNUMBER).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.ADDRESSINFORMATION.TXT_UNITNUMBER, UnitNumber)
        }
        // Verify in POBOC  
        if (POBOX !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.ADDRESSINFORMATION.TXT_POBOX).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.ADDRESSINFORMATION.TXT_POBOX, POBOX)
        }
        // Verify in MyMailbox   
        if (MyMailbox !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.ADDRESSINFORMATION.TXT_MAILBOX).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.ADDRESSINFORMATION.TXT_MAILBOX, MyMailbox)
        }
        // Error Handling
        if (PostalCode === undefined
            && UnitNumber === undefined
            && POBOX === undefined
            && MyMailbox === undefined

        ) {
            throw new Error("MemberRegistrationPrincipal.AddressInformationError!!./n\
                         Please provide at least one argument.")
        }
    }
    verifyContactInformation({ Handphone, EmailAddress, HomeNumber, EmergencyContact }) {
        // Verify in Handphone
        if (Handphone !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.TXT_HANDPHONE).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.TXT_HANDPHONE, Handphone)
        }
        // Verify in EmailAddress
        if (EmailAddress !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.TXT_EMAILADDRESS).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.TXT_EMAILADDRESS, EmailAddress)
        }
        // Verify in HomeNumber
        if (HomeNumber !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.TXT_HOMENUMBER).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.TXT_HOMENUMBER, HomeNumber)
        }
        // Verify in EmergyContact
        if (EmergencyContact !== undefined) {
            cy.xpath(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.TXT_EMERGENCYCONTACT).clear()
            cy.EnterText(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.TXT_EMERGENCYCONTACT, EmergencyContact)
        }
        // Error Handling
        if (Handphone === undefined
            && EmailAddress === undefined
            && HomeNumber === undefined
            && EmergencyContact === undefined


        ) {
            throw new Error("MemberRegistrationPrincipal.AddressInformationError!!./n\
                         Please provide at least one argument.")
        }
    }
    verifyPreferredContactMode({ SelectAll, Email, Mail, SMS, VoiceCall, PushNotification, WhatsApp }) {
        //Verify in SelectAll
        if (SelectAll !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.CHK_SELECTALL, SelectAll)
        }
        //Verify in Email
        if (Email !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.CHK_EMAIL, Email)
        }
        //Verify in Mail
        if (Mail !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.CHK_MAIL, Mail)
        }
        //Verify in SMS
        if (SMS !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.CHK_SMS, SMS)
        }
        //Verify in VoiceCall
        if (VoiceCall !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.CHK_VOICECALL, VoiceCall)
        }
        //Verify in PushNotification
        if (PushNotification !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.CHK_PUSHNOTIFICATION, PushNotification)
        }
        //Verify in WhatsApp
        if (WhatsApp !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.CHK_WHATSAPP, WhatsApp)
        }
        // Error Handling
        if (SelectAll === undefined
            && Email === undefined
            && Mail === undefined
            && SMS === undefined
            && VoiceCall === undefined
            && PushNotification === undefined
            && WhatsApp === undefined


        ) {
            throw new Error("MemberRegistrationPrincipal.PreferredContactMode!!./n\
                         Please provide at least one argument.")
        }
    }
    verifyConsentInformation({ MarketingConsent, ServiceNotificationConsent, TransactionalConsent }) {
        //Verify in MarketingConsent
        if (MarketingConsent !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.CHK_MARKETINGCONSENT, MarketingConsent)
        }
        //Verify in ServiceNotification
        if (ServiceNotificationConsent !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.CHK_SERVICENOTIFICATIONCONSENT, ServiceNotificationConsent)
        }
        //Verify in TransactionalConsent
        if (TransactionalConsent !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.CONTACTINFORMATION.CHK_TRANSACTIONALCONSENT, TransactionalConsent)
        }

        // Error Handling
        if (MarketingConsent === undefined
            && ServiceNotificationConsent === undefined
            && TransactionalConsent === undefined
        ) {
            throw new Error("MemberRegistrationPrincipaln.ConsentInformation!!./n\
                             Please provide at least one argument.")
        }
    }
    /*****************************************************
* Method: verifyProofDocument
* Description: Verify Proof Document
*
* @param {string} proofOfDocOption Proof Document Buttons: SUBMITDOCPROOFLATER, UPLOADDOCPROOF
* @param {string} proofDocOptionChkBox Proof Document Option Checkbox Setting
* @param {string} proofDocUpload Proof Document Upload File Upload
* @param {string} docProofReceived Doc Proof Received Checkbox Setting
* @param {string} docProofValidated Doc Proof Validated
*****************************************************/
    verifyProofDocument({ proofOfDocOption, proofDocOptionChkBox, proofDocUpload, docProofReceived, docProofValidated }) {

        // Set Submit Document Proof Later Radio Button
        if (proofOfDocOption.toUpperCase() === 'SUBMITDOCPROOFLATER') {
            cy.TickRadioButton(elems_MemberRegistrationPrincipal.ProofDocument.RBTN_SUBMITDOCPROOFLATER)
        }

        // Set Upload Document Proof Radio Button
        else if (proofOfDocOption.toUpperCase() === 'UPLOADDOCPROOF') {
            cy.TickRadioButton(elems_MemberRegistrationPrincipal.ProofDocument.RBTN_UPLOADDOCPROOF)

            // Upload Proof Document Upload
            if (proofDocUpload !== undefined) {
                cy.UploadFile(elems_MemberRegistrationPrincipal.ProofDocument.ProofDocumentUpload.UPL_PROOFDOCUMENTUPLOAD, proofDocUpload)
            }

            // Set Proof Document Option Checkbox
            if (docProofReceived !== undefined) {
                cy.TickCheckBox(elems_MemberRegistrationPrincipal.ProofDocument.CHK_DOCPROOFRECEIVED, docProofReceived)
            }

            // Choose Doc Proof Validated
            if (docProofValidated !== undefined) {
                cy.SelectDropDownItem(elems_MemberRegistrationPrincipal.ProofDocument.DRP_DOCPROOFVALIDATED, docProofValidated)
            }
        }

        else {
            throw new Error("MembershipRegistrationDependent.fillOutProofDocument error on 'type' argument./n\
                                 Accepted 'type' values: SUBMITDOCPROOFLATER and UPLOADDOCPROOF")
        }

    }
    /*****************************************************
     * Method: verifyPreferredSafraClubs
     * Description: Verify Consent Information
     *
     * @param {string} safraJurong SAFRA Jurong Checkbox Setting
     * @param {string} safraPunggol SAFRA Punggol Checkbox Setting
     * @param {string} safraToaPayoh SAFRA Toa Payoh Checkbox Setting
     * @param {string} safraMtFaber SAFRA Mt Faber Checkbox Setting
     * @param {string} safraTampines SAFRA Tampines Checkbox Setting
     * @param {string} safraYishun SAFRA Yishun Checkbox Setting
     *****************************************************/
    verifyPreferredSafraClubs({ safraJurong, safraPunggol, safraToaPayoh, safraMtFaber, safraTampines, safraYishun }) {

        // Set SAFRA Jurong Checkbox
        if (safraJurong !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.PREFREEREDSAFRACLUBS.CHK_SAFRAJURONG, safraJurong)
        }

        // Set SAFRA Punggol Checkbox Checkbox
        if (safraPunggol !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.PREFREEREDSAFRACLUBS.CHK_SAFRAPUNGGOL, safraPunggol)
        }

        // Set SAFRA Toa Payoh Checkbox
        if (safraToaPayoh !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.PREFREEREDSAFRACLUBS.CHK_SAFRATOAPAYOH, safraToaPayoh)
        }

        // Set SAFRA Mt Faber Checkbox
        if (safraMtFaber !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.PREFREEREDSAFRACLUBS.CHK_SAFRAMTFABER, safraMtFaber)
        }

        // Set SAFRA Tampines Checkbox
        if (safraTampines !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.PREFREEREDSAFRACLUBS.CHK_SAFRATAMPINES, safraTampines)
        }

        // Set SAFRA Yishun Checkbox
        if (safraYishun !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.PREFREEREDSAFRACLUBS.CHK_SAFRATAMPINES, safraYishun)
        }

        // Error Handling
        if (safraJurong === undefined
            && safraPunggol === undefined
            && safraToaPayoh === undefined
            && safraMtFaber === undefined
            && safraTampines === undefined
            && safraYishun === undefined
        ) {
            throw new Error("MemberRegistrationPrincipal.fillOutPreferredSafraClubs Error!!./n\
                             Please provide at least one argument.")
        }

    }

    /*****************************************************
     * Method: verifySafraBrands
     * Description: Verify Safra Brands
     *
     * @param {string} energyOneGym Energy One Gym Checkbox Setting
     * @param {string} kidzAmazeSplshIndrPlayGrnd Kidz Amaze/Splash Indoor Playground Checkbox Setting
     * @param {string} finsSwimSchool FINS Swim School Checkbox Setting
     *****************************************************/
    verifySafraBrands({ energyOneGym, kidzAmazeSplshIndrPlayGrnd, finsSwimSchool }) {

        // Set Energy One Gtm Checkbox
        if (energyOneGym !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.SAFRABRANDS.CHK_ENERGYONEGYM, energyOneGym)
        }

        // Set Kidz Amaze/Splash Indoor Playground Checkbox Checkbox
        if (kidzAmazeSplshIndrPlayGrnd !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.SAFRABRANDS.CHK_KIDSAMAZESPLSHINDLAYG, kidzAmazeSplshIndrPlayGrnd)
        }

        // Set FINS Swim School Checkbox
        if (finsSwimSchool !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.SAFRABRANDS.CHK_FINSSWIMSCHOOL, finsSwimSchool)
        }

        // Error Handling
        if (energyOneGym === undefined
            && kidzAmazeSplshIndrPlayGrnd === undefined
            && finsSwimSchool === undefined
        ) {
            throw new Error("MemberRegistrationPrincipal.fillOutSafraBrands Error!!./n\
                             Please provide at least one argument.")
        }

    }

    /*****************************************************
     * Method: verifyIamInterestedIn
     * Description: Verify I am Interested in
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
    verifyIamInterestedIn({ allEventsAndActivities, allPeaksAndPromos, fitnessAndAdventure, childEnrichmentActivities, lifeLongLearning,
        leisureAndEntrtnmnt, foodAndBeverages, shoppingAndGroceries, travel, motoring, healthAndBeauty, safraPtsRewardsProgramme, ensman
    }) {

        // verify All Events and Activities Checkbox
        if (allEventsAndActivities !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_ALLEVENTSANDACTIVITIES, allEventsAndActivities)
        }

        // verify All Peaks and Promotions Checkbox
        if (allPeaksAndPromos !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_ALLPEAKSANDPROMOTIONS, allPeaksAndPromos)
        }

        // verify Fitness & Adventure Checkbox
        if (fitnessAndAdventure !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_FITNESSANDADVENTURE, fitnessAndAdventure)
        }

        // verify Child Enrichment/Activitie Checkbox
        if (childEnrichmentActivities !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_CHILDENRICHMENTACTIVITIES, childEnrichmentActivities)
        }

        // verify Lifelong Learning Checkbox
        if (lifeLongLearning !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_LIFELONGLEARNING, lifeLongLearning)
        }

        // verify Leisure & Entertainment Checkbox
        if (leisureAndEntrtnmnt !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_LEISUREANDENTERTAINMENT, leisureAndEntrtnmnt)
        }

        // verify Food & Beverages Checkbox
        if (foodAndBeverages !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_FOODANDBEVERAGES, foodAndBeverages)
        }

        // verify Shopping & Groceries Checkbox
        if (shoppingAndGroceries !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_SHOPPINGANDGROCERIES, shoppingAndGroceries)
        }

        // verify Travel Checkbox
        if (travel !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_TRAVEL, travel)
        }

        // verify Motoring Checkbox
        if (motoring !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_MOTORING, motoring)
        }

        // verify Health & Beauty Checkbox
        if (healthAndBeauty !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_HEALTHANDBEAUTY, healthAndBeauty)
        }

        // verify SAFRAPOINTS Rewards Programme Checkbox
        if (safraPtsRewardsProgramme !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.IAMINTERESTEDIN.CHK_SAFRAPOINTSREWARDPROGRAMME, safraPtsRewardsProgramme)
        }
        if (ensman !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.SAFRANEWSLETTER.CHK_ENSMAN, ensman)
        }

        // Error Handling
        if (allEventsAndActivities === undefined
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
            && ensman === undefined
        ) {
            throw new Error("MemberRegistrationPrincipal.fillOutIamInterestedIn Error!!./n\
                             Please provide at least one argument.")
        }

    }



    //  /*****************************************************
    //   * Method: verifySafraNewsLetter
    //   * Description: Verify SAFRA Newsletter
    //   *
    //   * @param {string} ensman e-NSMan Checkbox Setting
    //   *****************************************************/
    //   verifySafraNewsLetter(ensman){

    //     // verify ensman Checkbox
    //      if(ensman !== undefined){
    //          cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.SAFRANEWSLETTER.CHK_ENSMAN, ensman)
    //      }

    //     // Error Handling
    //      if( ensman === undefined ){
    //          throw new Error("MemberRegistrationPrincipal.fillOutSafraNewsLetter Error!!./n\
    //                          Please provide at least one argument.")
    //      }

    //  }

    /*****************************************************
     * Method: verifyInterestGrpsAndMicroClubs
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
    verifyInterestGrpsAndMicroClubs({ safraAdventureClub, bitezFandB, safraCommSrvcsClub, safraCompSportsClub, safraDigitalMediaClub,
        safraEntrpnrsClub, fuseEntrtnmnt, safraGolfingSection, safraMovieMax, safraPhotoClub, safraRunningClub, safraShootingClub,
        safraSocialBadmntnClub, safraTechClub, safraTravelClub
    }) {

        // verify SAFRA Adventure Club Checkbox
        if (safraAdventureClub !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRAADVENTURECLUB, safraAdventureClub)
        }

        // verify Bitez (F&B) Checkbox
        if (bitezFandB !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_BITEZ, bitezFandB)
        }

        // verify SAFRA Community Services Club Checkbox
        if (safraCommSrvcsClub !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRACOMSECLUB, safraCommSrvcsClub)
        }

        // verify SAFRA Competitive Sports Club Checkbox
        if (safraCompSportsClub !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRACOMPSPORTSCLUB, safraCompSportsClub)
        }

        // verify SAFRA Digital Media Club Checkbox
        if (safraDigitalMediaClub !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRADIGMECLUB, safraDigitalMediaClub)
        }

        // verify SAFRA Entrepreneurs Club Checkbox
        if (safraEntrpnrsClub !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRAENTREPRENEURSCLUB, safraEntrpnrsClub)
        }

        // verify Fuse (Entertainment) Checkbox
        if (fuseEntrtnmnt !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_FUSE, fuseEntrtnmnt)
        }

        // verify SAFRA Golfing Section Checkbox
        if (safraGolfingSection !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRAGOLFINGSECTION, safraGolfingSection)
        }

        // verify SAFRA MovieMax Checkbox
        if (safraMovieMax !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRAMOVIEMAX, safraMovieMax)
        }

        // verify SAFRA Photographic Club Checkbox
        if (safraPhotoClub !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRAPHOTOGRAPHICCLUB, safraPhotoClub)
        }

        // verify SAFRA Running Club Checkbox
        if (safraRunningClub !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRAPHOTOGRAPHICCLUB, safraRunningClub)
        }

        // verify SAFRA Shooting Club Checkbox
        if (safraShootingClub !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRASHOOTINGCLUB, safraShootingClub)
        }

        // verifySAFRA Social Badmintion Club Checkbox
        if (safraSocialBadmntnClub !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRASOCBADCLUB, safraSocialBadmntnClub)
        }

        // verify SAFRA Tech Club Checkbox
        if (safraTechClub !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRATECHCLUB, safraTechClub)
        }

        // verify SAFRA Travel Club Checkbox
        if (safraTravelClub !== undefined) {
            cy.TickCheckBox(elems_MemberRegistrationPrincipal.INTERESTEDAREAINFORMATION.INTERESTGROUPSMICROCLUBS.CHK_SAFRATRAVELCLUB, safraTravelClub)
        }

        // Error Handling
        if (safraAdventureClub === undefined
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
        ) {
            throw new Error("MemberRegistrationPrincipal.fillOutInterestGrpsAndMicroClubs Error!!./n\
                             Please provide at least one argument.")
        }


    }

    /*****************************************************
    * Method: SaveAndNext
    * Description: SaveAndNext
    *****************************************************/
    SaveAndNext() {
        //  cy.click(elems_MemberRegistrationPrincipal.BTN_SAVEANDNEXT)
        cy.xpath(elems_MemberRegistrationPrincipal.BTN_SAVEANDNEXT).first().click()
        cy.wait(5000)
        //cy.visit('https://qa-smcms-fe.azurewebsites.net/membershipregistrationprincipal') // Not actual URL
        //  cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Membership Tenure Selection')
    }
    /*****************************************************
    * Method: SaveAndNext
    * Description: SaveAndNext
    *****************************************************/
    SaveAndNextPrincipal() {
        //  cy.click(elems_MemberRegistrationPrincipal.BTN_SAVEANDNEXT)
        cy.xpath(elems_MemberRegistrationPrincipal.BTN_SAVEANDNEXT).first().click()
        cy.wait(5000)
        //cy.visit('https://qa-smcms-fe.azurewebsites.net/membershipregistrationprincipal') // Not actual URL
        //  cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Membership Tenure Selection')
    }
    /*****************************************************
    * Method: VerifyPageTitle
    * Description: This function Verify page title
    * @param {string} expectedPage Page to be validate
    *****************************************************/
    VerifyPageTitle(expectedPage) {

        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPage)
    }
    /*****************************************************
    * Method: cancel
    * Description: Member Regisration Principal Cancellation
    *****************************************************/
    Cancel(expectedPage) {
        cy.Click(elems_MemberRegistrationPrincipal.BTN_CANCEL)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Customer Landing')
    }
    /*****************************************************
* Method: Add Dependent
* Description: Adding Dependents
*****************************************************/
    AddDependent() {
        cy.wait(2000)
        cy.Click(elems_MemberRegistrationPrincipal.DEPENDENTS.BTN_ADDDEPENDENT)
        cy.wait(7000)

        // cy.visit('https://qa-smcms-fe.azurewebsites.net/membershipregistrationdependent')
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Membership Registration - Dependent')
    }

    /*****************************************************
    * Method: selectNameItem
    * Description: Selects a Name Item
    *
    * @param {string} Name Name item link in Table
    *****************************************************/
    selectDependentNameItem({ Name }) {

        // Select NameItem Table Link Item
        if (Name !== undefined) {
            cy.ClickTableLink(elems_MemberRegistrationPrincipal.TBL_DEPENDENTS, 'Name', Name)
            cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Membership Registration - Principal')
        }

        // Error Handling
        if (Name === undefined) {
            throw new Error("MemberRegistrationPrincipal.selectNameItem Error!!./n\
                             Please select at least one item.")
        }
    }

    /*****************************************************
        * Method: verifyDependentsTable
        * Description: Verfies Dependents Table
        *
        * @param {Array} DependentsTable Dependents Table Array
        *****************************************************/

    verifyDependentsTable({ DependentsTable }) {
        if (DependentsTable !== undefined) {
            DependentsTable.forEach(dependentsTbl => {
                cy.VerifyTableEntry(
                    elems_MemberRegistrationPrincipal.DEPENDENTS.TBL_DEPENDENTS,
                    'Dependent Type',
                    dependentsTbl.DependentType,
                    'Dependent Type',
                    dependentsTbl.DependentType
                )
                cy.VerifyTableEntry(
                    elems_MemberRegistrationPrincipal.DEPENDENTS.TBL_DEPENDENTS,
                    'NRIC',
                    dependentsTbl.nric,
                    'Dependent Type',
                    dependentsTbl.DependentType
                )

                cy.VerifyTableEntry(
                    elems_MemberRegistrationPrincipal.DEPENDENTS.TBL_DEPENDENTS,
                    'Gender',
                    dependentsTbl.Gender,
                    'Dependent Type',
                    dependentsTbl.DependentType
                )
                cy.VerifyTableEntry(
                    elems_MemberRegistrationPrincipal.DEPENDENTS.TBL_DEPENDENTS,
                    'Date of Birth',
                    dependentsTbl.DateofBirth,
                    'Dependent Type',
                    dependentsTbl.DependentType
                )

            }
            )
        }
    }

}
export default MemberRegistrationWithDifferentMemberType

