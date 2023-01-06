import elems_MemberInformation from '../../../Elements/Membership/FS014_Membership-Master-Registration-Renewal/MemberInformation'
import elems_PageHeader from '../../../Elements/Common/PageHeader.js'

class MemberInformation {
    /*****************************************************
     * Method: fillOutAddressInfo
     * Description: Fills-out Address Information
     *
     * @param {string} postalCode Postal Code
     * @param {string} address Field Value needed for check-in type
     * @param {string} unitNumber Unit Number
     * @param {string} poBox P.O. Box
     * @param {string} myMailBox My Mail Box
     *****************************************************/
     fillOutAddressInfo({postalCode, address, unitNumber, poBox, myMailBox}){

        // Enter Postal Code
        if(postalCode !== undefined){
            cy.xpath(elems_MemberInformation.AddressInformation.MailingAddress.TXT_POSTALCODE).clear()
            cy.EnterText(elems_MemberInformation.AddressInformation.MailingAddress.TXT_POSTALCODE, postalCode)
        }

        // Enter Address
        if(address !== undefined){
            cy.SelectDropDownItem(elems_MemberInformation.AddressInformation.MailingAddress.DRP_ADDRESS, address)
        }

        // Enter Unit Number
        if(unitNumber !== undefined){
            cy.xpath(elems_MemberInformation.AddressInformation.MailingAddress.TXT_UNITNUMBER).clear()
            cy.EnterText(elems_MemberInformation.AddressInformation.MailingAddress.TXT_UNITNUMBER, unitNumber)
        }

        //  Enter P.O. Box
        if(poBox !== undefined){
            cy.xpath(elems_MemberInformation.AddressInformation.MailingAddress.TXT_POBOX).clear()
            cy.EnterText(elems_MemberInformation.AddressInformation.MailingAddress.TXT_POBOX, poBox)
        }

        // Enter My Mail Box
        if(myMailBox !== undefined){
            cy.xpath(elems_MemberInformation.AddressInformation.MailingAddress.TXT_MYMAILBOX).clear()
            cy.EnterText(elems_MemberInformation.AddressInformation.MailingAddress.TXT_MYMAILBOX, myMailBox)
        }

        // Error Handling
        if( postalCode === undefined 
            && address === undefined
            && unitNumber === undefined
            && poBox === undefined
            && myMailBox === undefined
        ){
            throw new Error("MemberInformation.fillOutAddressInfo Error!!./n\
                            Please provide at least one argument.")
        }

    }

    /*****************************************************
     * Method: fillOutContactInfo
     * Description: Fills-out General Contact Information
     *
     * @param {string} handPhone Hand Phone
     * @param {string} emailAddress Email Address
     * @param {string} homeNumber Home Number
     * @param {string} emergencyContact Emergency Contact
     *****************************************************/
     fillOutContactInfo({handPhone, emailAddress, homeNumber, emergencyContact}){

        // Enter Hand Phone
        if(handPhone !== undefined){
            cy.xpath(elems_MemberInformation.ContactInformation.TXT_HANDPHONE).clear()
            cy.EnterText(elems_MemberInformation.ContactInformation.TXT_HANDPHONE, handPhone)
        }

        // Enter Email Address
        if(emailAddress !== undefined){
            cy.xpath(elems_MemberInformation.ContactInformation.TXT_EMAILADDRESS).clear()
            cy.EnterText(elems_MemberInformation.ContactInformation.TXT_EMAILADDRESS, emailAddress)
        }

        // Enter Home Number
        if(homeNumber !== undefined){
            cy.xpath(elems_MemberInformation.ContactInformation.TXT_HOMENUMBER).clear()
            cy.EnterText(elems_MemberInformation.ContactInformation.TXT_HOMENUMBER, homeNumber)
        }

        //  Enter Emergency Contact
        if(emergencyContact !== undefined){
            cy.xpath(elems_MemberInformation.ContactInformation.TXT_EMERGENCYCONTACT).clear()
            cy.EnterText(elems_MemberInformation.ContactInformation.TXT_EMERGENCYCONTACT, emergencyContact)
        }

        // Error Handling
        if( handPhone === undefined 
            && emailAddress === undefined
            && homeNumber === undefined
            && emergencyContact === undefined
        ){
            throw new Error("MemberInformation.fillOutGenContactInfo Error!!./n\
                            Please provide at least one argument.")
        }

    }

    /*****************************************************
     * Method: fillOutPreferredContactMode
     * Description: Fills-out Preferred Contact Mode
     *
     * @param {string} selectAll Select All Checkbox Setting
     * @param {string} email Email Checkbox Setting
     * @param {string} mail Mail Checkbox Setting
     * @param {string} sms SMS Checkbox Setting
     * @param {string} voiceCall Voice Call Checkbox Setting
     * @param {string} pushNotif Push Notification Checkbox Setting
     * @param {string} whatsApp Whats App Checkbox Setting
     *****************************************************/
     fillOutPreferredContactMode({selectAll, email, mail, sms, voiceCall, pushNotif, whatsApp}){

        // Set Select All Checkbox
        if(selectAll !== undefined){
            cy.TickCheckBox(elems_MemberInformation.ContactInformation.PreferredContactMode.CHK_SELECTALL, selectAll)
        }

        // Set Email Checkbox
        if(email !== undefined){
            cy.TickCheckBox(elems_MemberInformation.ContactInformation.PreferredContactMode.CHK_EMAIL, email)
        }

        // Set Mail Checkbox
        if(mail !== undefined){
            cy.TickCheckBox(elems_MemberInformation.ContactInformation.PreferredContactMode.CHK_MAIL, mail)
        }

        // Set SMS Checkbox
        if(sms !== undefined){
            cy.TickCheckBox(elems_MemberInformation.ContactInformation.PreferredContactMode.CHK_SMS, sms)
        }

        // Set Voice Call Checkbox
        if(voiceCall !== undefined){
            cy.TickCheckBox(elems_MemberInformation.ContactInformation.PreferredContactMode.CHK_VOICECALL, voiceCall)
        }

        // Set Push Notification Checkbox 
        if(pushNotif !== undefined){
            cy.TickCheckBox(elems_MemberInformation.ContactInformation.PreferredContactMode.CHK_PUSHNOTIFICATION, pushNotif)
        }

        // Set Whats App Checkbox 
        if(whatsApp !== undefined){
            cy.TickCheckBox(elems_MemberInformation.ContactInformation.PreferredContactMode.CHK_WHATSAPP, whatsApp)
        }

        // Error Handling
        if( selectAll === undefined 
            && email === undefined
            && mail === undefined
            && sms === undefined
            && voiceCall === undefined
            && pushNotif === undefined
            && whatsApp === undefined
        ){
            throw new Error("MemberInformation.fillOutPreferredContactMode Error!!./n\
                            Please provide at least one argument.")
        }

    }

    /*****************************************************
     * Method: fillOutConsentInformation
     * Description: Fills-out Consent Information
     *
     * @param {string} marketingConsent Marketing Consent Checkbox Setting
     * @param {string} serviceNotifConsent Service Notification Consent Checkbox Setting
     * @param {string} transactionalConsent Transactional Consent Checkbox Setting
     *****************************************************/
     fillOutConsentInformation({marketingConsent, serviceNotifConsent, transactionalConsent}){

        // Set Marketing Consent Checkbox
        if(marketingConsent !== undefined){
            cy.TickCheckBox(elems_MemberInformation.ContactInformation.ConsentInformation.CHK_MARKETINGCONSENT, marketingConsent)
        }

        // Set Service Notification Consent Checkbox
        if(serviceNotifConsent !== undefined){
            cy.TickCheckBox(elems_MemberInformation.ContactInformation.ConsentInformation.CHK_SERVICENOTIFICATIONCONSENT, serviceNotifConsent)
        }

        // Set Transactional Consent Checkbox
        if(transactionalConsent !== undefined){
            cy.TickCheckBox(elems_MemberInformation.ContactInformation.ConsentInformation.CHK_TRANSACTIONALCONSENT, transactionalConsent)
        }

        // Error Handling
        if( marketingConsent === undefined 
            && serviceNotifConsent === undefined
            && transactionalConsent === undefined
        ){
            throw new Error("MemberInformation.fillOutConsentInformation Error!!./n\
                            Please provide at least one argument.")
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
     fillOutPreferredSafraClubs({safraJurong, safraPunggol, safraToaPayoh, safraMtFaber, safraTampines, safraYishun}){

        // Set SAFRA Jurong Checkbox
        if(safraJurong !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.PreferredSafraClubs.CHK_SAFRAJURONG, safraJurong)
        }

        // Set SAFRA Punggol Checkbox Checkbox
        if(safraPunggol !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.PreferredSafraClubs.CHK_SAFRAPUNGGOL, safraPunggol)
        }

        // Set SAFRA Toa Payoh Checkbox
        if(safraToaPayoh !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.PreferredSafraClubs.CHK_SAFRATOAPAYOH, safraToaPayoh)
        }

        // Set SAFRA Mt Faber Checkbox
        if(safraMtFaber !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.PreferredSafraClubs.CHK_SAFRAMTFABER, safraMtFaber)
        }

        // Set SAFRA Tampines Checkbox
        if(safraTampines !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.PreferredSafraClubs.CHK_SAFRATAMPINES, safraTampines)
        }

        // Set SAFRA Yishun Checkbox
        if(safraYishun !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.PreferredSafraClubs.CHK_SAFRATAMPINES, safraYishun)
        }

        // Error Handling
        if( safraJurong === undefined 
            && safraPunggol === undefined
            && safraToaPayoh === undefined
            && safraMtFaber === undefined
            && safraTampines === undefined
            && safraYishun === undefined
        ){
            throw new Error("MemberInformation.fillOutPreferredSafraClubs Error!!./n\
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
     fillOutSafraBrands({energyOneGym, kidzAmazeSplshIndrPlayGrnd, finsSwimSchool}){

        // Set Energy One Gtm Checkbox
        if(energyOneGym !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.SafraBrands.CHK_ENERGYONEGYM, energyOneGym)
        }

        // Set Kidz Amaze/Splash Indoor Playground Checkbox Checkbox
        if(kidzAmazeSplshIndrPlayGrnd !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.SafraBrands.CHK_KIDZAMAZE_SPLSHINDOORPLAYG, kidzAmazeSplshIndrPlayGrnd)
        }

        // Set FINS Swim School Checkbox
        if(finsSwimSchool !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.SafraBrands.CHK_FINSSWIMSCHOOL, finsSwimSchool)
        }

        // Error Handling
        if( energyOneGym === undefined 
            && kidzAmazeSplshIndrPlayGrnd === undefined
            && finsSwimSchool === undefined
        ){
            throw new Error("MemberInformation.fillOutSafraBrands Error!!./n\
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
     fillOutIamInterestedIn({allEventsAndActivities, allPeaksAndPromos, fitnessAndAdventure, childEnrichmentActivities, lifeLongLearning,
        leisureAndEntrtnmnt, foodAndBeverages, shoppingAndGroceries, travel, motoring, healthAndBeauty, safraPtsRewardsProgramme
    }){

        // Set All Events and Activities Checkbox
        if(allEventsAndActivities !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_ALLEVENTSANDACTIV, allEventsAndActivities)
        }

        // Set All Peaks and Promotions Checkbox
        if(allPeaksAndPromos !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_ALLPEAKSANDPROMO, allPeaksAndPromos)
        }

        // Set Fitness & Adventure Checkbox
        if(fitnessAndAdventure !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_FITNESSANDADVENTURE, fitnessAndAdventure)
        }

        // Set Child Enrichment/Activitie Checkbox
        if(childEnrichmentActivities !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_CHILDENRICHMENT_ACTIV, childEnrichmentActivities)
        }

        // Set Lifelong Learning Checkbox
        if(lifeLongLearning !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_LIFELONGLEARNING, lifeLongLearning)
        }

        // Set Leisure & Entertainment Checkbox
        if(leisureAndEntrtnmnt !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_LEISUREANDENTERTAINMENT, leisureAndEntrtnmnt)
        }

        // Set Food & Beverages Checkbox
        if(foodAndBeverages !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_FOODANDBEVERAGES, foodAndBeverages)
        }

        // Set Shopping & Groceries Checkbox
        if(shoppingAndGroceries !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_SHOPPINGANDGROCERIES, shoppingAndGroceries)
        }

        // Set Travel Checkbox
        if(travel !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_TRAVEL, travel)
        }

        // Set Motoring Checkbox
        if(motoring !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_MOTORING, motoring)
        }

        // Set Health & Beauty Checkbox
        if(healthAndBeauty !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_HEALTHANDBEAUTY, healthAndBeauty)
        }

        // Set SAFRAPOINTS Rewards Programme Checkbox
        if(safraPtsRewardsProgramme !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_SAFRAPOINTSREWARDPROGRAMME, safraPtsRewardsProgramme)
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
            throw new Error("MemberInformation.fillOutIamInterestedIn Error!!./n\
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
     fillOutIamInterestedIn({allEventsAndActivities, allPeaksAndPromos, fitnessAndAdventure, childEnrichmentActivities, lifeLongLearning,
        leisureAndEntrtnmnt, foodAndBeverages, shoppingAndGroceries, travel, motoring, healthAndBeauty, safraPtsRewardsProgramme
    }){

        // Set All Events and Activities Checkbox
        if(allEventsAndActivities !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_ALLEVENTSANDACTIV, allEventsAndActivities)
        }

        // Set All Peaks and Promotions Checkbox
        if(allPeaksAndPromos !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_ALLPEAKSANDPROMO, allPeaksAndPromos)
        }

        // Set Fitness & Adventure Checkbox
        if(fitnessAndAdventure !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_FITNESSANDADVENTURE, fitnessAndAdventure)
        }

        // Set Child Enrichment/Activitie Checkbox
        if(childEnrichmentActivities !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_CHILDENRICHMENT_ACTIV, childEnrichmentActivities)
        }

        // Set Lifelong Learning Checkbox
        if(lifeLongLearning !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_LIFELONGLEARNING, lifeLongLearning)
        }

        // Set Leisure & Entertainment Checkbox
        if(leisureAndEntrtnmnt !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_LEISUREANDENTERTAINMENT, leisureAndEntrtnmnt)
        }

        // Set Food & Beverages Checkbox
        if(foodAndBeverages !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_FOODANDBEVERAGES, foodAndBeverages)
        }

        // Set Shopping & Groceries Checkbox
        if(shoppingAndGroceries !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_SHOPPINGANDGROCERIES, shoppingAndGroceries)
        }

        // Set Travel Checkbox
        if(travel !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_TRAVEL, travel)
        }

        // Set Motoring Checkbox
        if(motoring !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_MOTORING, motoring)
        }

        // Set Health & Beauty Checkbox
        if(healthAndBeauty !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_HEALTHANDBEAUTY, healthAndBeauty)
        }

        // Set SAFRAPOINTS Rewards Programme Checkbox
        if(safraPtsRewardsProgramme !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.IAmInterestedIn.CHK_SAFRAPOINTSREWARDPROGRAMME, safraPtsRewardsProgramme)
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
            throw new Error("MemberInformation.fillOutIamInterestedIn Error!!./n\
                            Please provide at least one argument.")
        }

    }

    /*****************************************************
     * Method: fillOutSafraNewsLetter
     * Description: Fills-out SAFRA Newsletter
     *
     * @param {string} ensman e-NSMan Checkbox Setting
     *****************************************************/
     fillOutSafraNewsLetter({ensman}){

        // Set ensman Checkbox
        if(ensman !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.SafraNewsletter.CHK_ENSMAN, ensman)
        }

        // Error Handling
        if( ensman === undefined ){
            throw new Error("MemberInformation.fillOutSafraNewsLetter Error!!./n\
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
        safraSocialBadmntnClub, safraTechClub, safraTravelClub
    }){

        // Set SAFRA Adventure Club Checkbox
        if(safraAdventureClub !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRAADVENTURECLUB, safraAdventureClub)
        }

        // Set Bitez (F&B) Checkbox
        if(bitezFandB !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_BITEZ_FANDB, bitezFandB)
        }

        // Set SAFRA Community Services Club Checkbox
        if(safraCommSrvcsClub !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRACOMMSERVICESCLUB, safraCommSrvcsClub)
        }

        // Set SAFRA Competitive Sports Club Checkbox
        if(safraCompSportsClub !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRACOMPTTIVESPORTSCLUB, safraCompSportsClub)
        }

        // Set SAFRA Digital Media Club Checkbox
        if(safraDigitalMediaClub !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRADIGIMEDIACLUB, safraDigitalMediaClub)
        }

        // Set SAFRA Entrepreneurs Club Checkbox
        if(safraEntrpnrsClub !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRAENTREPRENEURSCLUB, safraEntrpnrsClub)
        }

        // Set Fuse (Entertainment) Checkbox
        if(fuseEntrtnmnt !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_FUSE, fuseEntrtnmnt)
        }

        // Set SAFRA Golfing Section Checkbox
        if(safraGolfingSection !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRAGOLFINGSECTION, safraGolfingSection)
        }

        // Set SAFRA MovieMax Checkbox
        if(safraMovieMax !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRAMOVIEMAX, safraMovieMax)
        }

        // Set SAFRA Photographic Club Checkbox
        if(safraPhotoClub !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRAPHOTOGRAPHICCLUB, safraPhotoClub)
        }

        // Set SAFRA Running Club Checkbox
        if(safraRunningClub !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRAPHOTOGRAPHICCLUB, safraRunningClub)
        }

        // Set SAFRA Shooting Club Checkbox
        if(safraShootingClub !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRASHOOTINGCLUB, safraShootingClub)
        }

        // Set SAFRA Social Badmintion Club Checkbox
        if(safraSocialBadmntnClub !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRASOCIALBADMINTONCLUB, safraSocialBadmntnClub)
        }

        // Set SAFRA Tech Club Checkbox
        if(safraTechClub !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRATECHCLUB, safraTechClub)
        }

        // Set SAFRA Travel Club Checkbox
        if(safraTravelClub !== undefined){
            cy.TickCheckBox(elems_MemberInformation.InterestAreaInformation.InterestGroupsAndMicroClubs.CHK_SAFRATRAVELCLUB, safraTravelClub)
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
            throw new Error("MemberInformation.fillOutInterestGrpsAndMicroClubs Error!!./n\
                            Please provide at least one argument.")
        }
  
    }

    /*****************************************************
     * Method: fillOutComments
     * Description: Fills-out Comments Section
     *
     * @param {string} comments Comments Text
     *****************************************************/
     fillOutComments({comments}){

        // Enter Comments
        if(comments !== undefined){
            cy.xpath(elems_MemberInformation.Comments.TXTAREA_COMMENTS).clear()
            cy.EnterText(elems_MemberInformation.Comments.TXTAREA_COMMENTS, comments)
        }

        // Error Handling
        if( comments === undefined ){
            throw new Error("MemberInformation.fillOutComments Error!!./n\
                            Please provide at least one argument.")
        }

    }

    /*****************************************************
     * Method: updateAndContinue
     * Description: Update Member Information and Continue
     *****************************************************/
     updateAndContinue(){
        cy.Click(elems_MemberInformation.BTN_UPDATEANDCONTINUE)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Customer Landing')
    }

    /*****************************************************
     * Method: continue
     * Description: Member Information Continue
     *****************************************************/
     continue(){
        cy.Click(elems_MemberInformation.BTN_CONTINUE)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Customer Landing')
    }

    /*****************************************************
     * Method: cancel
     * Description: Member Information Cancellation
     *****************************************************/
     cancel(expectedPage){
        cy.Click(elems_MemberInformation.BTN_CANCEL)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPage)
    }

    /*****************************************************
     * Method: verifyMemberInfoSection
     * Description: Verifies Member Information Section
     *
     * @param {string} nameOnNric Name on NRIC Label
     * @param {string} dateOfBirth Date of Birth Label
     * @param {string} gender Gender Label
     * @param {string} membershipCardType Membership Card Type Label
     * @param {string} nric NRIC Label
     * @param {string} principalId Principal ID Label
     * @param {string} membershipId Membership ID Label
     * @param {string} nationality Nationality Label
     * @param {string} membershipType Membership Type Label
     * @param {string} membershipExpiryDate Membership Expiry Date Label
     * @param {string} lastMembershipTxn Last Membership Transaction Label
     * @param {string} ns50ManualOptIn NS50 Manual Opt In Label
     *****************************************************/
     verifyMemberInfoSection({nameOnNric, dateOfBirth, gender, membershipCardType, nric,
        principalId, membershipId, nationality, membershipType, membershipExpiryDate,
        lastMembershipTxn, ns50ManualOptIn
    }){

        // Verify Name on NRIC
        if(nameOnNric !== undefined){
            cy.ValidateElementText(elems_MemberInformation.MemberInformation.LBL_NAMEONNRIC, nameOnNric)
        }

        // Verify Date of Birth
        if(dateOfBirth !== undefined){
            cy.ValidateElementText(elems_MemberInformation.MemberInformation.LBL_DATEOFBIRTH, dateOfBirth)
        }

        // Verify Gender
        if(gender !== undefined){
            cy.ValidateElementText(elems_MemberInformation.MemberInformation.LBL_GENDER, gender)
        }

        // Verify Membership Card Type
        if(membershipCardType !== undefined){
            cy.ValidateElementText(elems_MemberInformation.MemberInformation.LBL_MEMBERSHIPCARDTYPE, membershipCardType)
        }

        // Verify NRIC
        if(nric !== undefined){
            cy.ValidateElementText(elems_MemberInformation.MemberInformation.LBL_NRIC, nric)
        }

        // Verify Principal ID
        if(principalId !== undefined){
            cy.ValidateElementText(elems_MemberInformation.MemberInformation.LBL_PRINCIPALID, principalId)
        }

        // Verify Membership ID
        if(membershipId !== undefined){
            cy.ValidateElementText(elems_MemberInformation.MemberInformation.LBL_MEMBERSHIPID, membershipId) 
        }
        // Verify Nationality
        if(nationality !== undefined){
            cy.ValidateElementText(elems_MemberInformation.MemberInformation.LBL_NATIONALITY, nationality)
        }

        // Verify Membership Type
        if(membershipType !== undefined){
            cy.ValidateElementText(elems_MemberInformation.MemberInformation.LBL_MEMBERSHIPTYPE, membershipType)
        }

        // Verify Membership Expiry Date
        if(membershipExpiryDate !== undefined){
            cy.ValidateElementText(elems_MemberInformation.MemberInformation.LBL_MEMBERHSIPEXPIRYDATE, membershipExpiryDate)
        }

        // Verify Last Membership Transaction
        if(lastMembershipTxn !== undefined){
            cy.ValidateElementText(elems_MemberInformation.MemberInformation.LBL_LASTMEMSHIPTRANSACTION, lastMembershipTxn)
        }

        // Verify NS50 Manual Opt In
        if(ns50ManualOptIn !== undefined){
            cy.ValidateElementText(elems_MemberInformation.MemberInformation.LBL_NS50MANUALOPTIN, ns50ManualOptIn)
        }

        // Error Handling
        if( nameOnNric === undefined 
            && dateOfBirth === undefined 
            && gender === undefined 
            && membershipCardType === undefined 
            && nric === undefined 
            && principalId === undefined 
            && membershipId === undefined 
            && nationality === undefined 
            && membershipType === undefined 
            && membershipExpiryDate === undefined 
            && lastMembershipTxn === undefined 
            && ns50ManualOptIn === undefined 
        ){
            throw new Error("MemberInformation.verifyMemberInfo Error!!./n\
                            Please provide at least one argument.")
        }

    }

    /*****************************************************
     * Method: verifyInterestGrpTab
     * Description: Verfies Interest Group Tab
     *
     * @param {string} interestGroups Interest Groups Array
     *****************************************************/
     verifyInterestGrpTab({interestGroups}){

        cy.SelectSectionTab(elems_MemberInformation.TAB_MEMBERINFORMATION, 'Interest Group')
        interestGroups.forEach( interestGrp => {
            cy.VerifyTableEntry(
                elems_MemberInformation.TBL_MEMBERINFORMATION, 
                'Club',
                interestGrp.club,
                'Club',
                interestGrp.club
            )

            cy.VerifyTableEntry(
                elems_MemberInformation.TBL_MEMBERINFORMATION, 
                'Main Club',
                interestGrp.mainClub,
                'Club',
                interestGrp.club
            )

            cy.VerifyTableEntry(
                elems_MemberInformation.TBL_MEMBERINFORMATION, 
                'Initial Join Date',
                interestGrp.initialJoinDate,
                'Club',
                interestGrp.club
            )

            cy.VerifyTableEntry(
                elems_MemberInformation.TBL_MEMBERINFORMATION, 
                'Expiry Date',
                interestGrp.expiryDate,
                'Club',
                interestGrp.club
            )
        })
    }

    /*****************************************************
     * Method: verifyEnergyOneGymMembershipTab
     * Description: Verfies Energy One Gym Membership Tab
     *
     * @param {string} energyOneGymMemberships Energy One Gym Memberships Array
     *****************************************************/
     verifyEnergyOneGymMembershipTab({energyOneGymMemberships}){

        cy.SelectSectionTab(elems_MemberInformation.TAB_MEMBERINFORMATION, 'Energy One Gym Membership')
        energyOneGymMemberships.forEach( energyOneGymMembership => {
            cy.VerifyTableEntry(
                elems_MemberInformation.TBL_MEMBERINFORMATION, 
                'Club',
                energyOneGymMembership.club,
                'Club',
                energyOneGymMembership.club
            )

            cy.VerifyTableEntry(
                elems_MemberInformation.TBL_MEMBERINFORMATION, 
                'Main Club',
                energyOneGymMembership.mainClub,
                'Club',
                energyOneGymMembership.club
            )

            cy.VerifyTableEntry(
                elems_MemberInformation.TBL_MEMBERINFORMATION, 
                'Initial Join Date',
                energyOneGymMembership.initialJoinDate,
                'Club',
                energyOneGymMembership.club
            )

            cy.VerifyTableEntry(
                elems_MemberInformation.TBL_MEMBERINFORMATION, 
                'Expiry Date',
                energyOneGymMembership.expiryDate,
                'Club',
                energyOneGymMembership.club
            )
        })
    }

    /*****************************************************
     * Method: verifyFamilyInformationTab
     * Description: Verfies Family Information Tab
     *
     * @param {string} familyInformation Familty Information Array
     *****************************************************/
     verifyFamilyInformationTab({familyInformation}){

        cy.SelectSectionTab(elems_MemberInformation.TAB_MEMBERINFORMATION, 'Family Information')
        familyInformation.forEach( familyMember => {
            cy.VerifyTableEntry(
                elems_MemberInformation.TBL_MEMBERINFORMATION, 
                'Membership ID',
                familyMember.membershipId,
                'Membership ID',
                familyMember.membershipId
            )

            cy.VerifyTableEntry(
                elems_MemberInformation.TBL_MEMBERINFORMATION, 
                'Name',
                familyMember.name,
                'Membership ID',
                familyMember.membershipId
            )

            cy.VerifyTableEntry(
                elems_MemberInformation.TBL_MEMBERINFORMATION, 
                'Date Of Birth',
                familyMember.dateOfBirth,
                'Membership ID',
                familyMember.membershipId
            )

            cy.VerifyTableEntry(
                elems_MemberInformation.TBL_MEMBERINFORMATION, 
                'Relationship',
                familyMember.relationship,
                'Membership ID',
                familyMember.membershipId
            )

            cy.VerifyTableEntry(
                elems_MemberInformation.TBL_MEMBERINFORMATION, 
                'Dependent',
                familyMember.dependent,
                'Membership ID',
                familyMember.membershipId
            )
        })
    }
}

export default MemberInformation