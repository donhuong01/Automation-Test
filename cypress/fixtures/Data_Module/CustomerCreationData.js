const Customerdata = {

    CustomerCreationPrincipal: {
        RegistrationInformation: {
            name: 'Auto-User' + Math.floor(Math.random() * 100000 ),
            DOB: '18-Aug-1980',
            gender: 'Male',
            NRICFULL: 'S1261790I',
            NRICLAST4DIGIT: '959F'
        },
        AddressInformation: {
            postalCode: '117606',
            address: undefined,
            unitNumber: "200A",
            POBOx: "102A",
            myMailbox: "SGPost"
        },
        ContactInformation: {
            handPhone: '8658 5896',
            emailAddress: 'Auto-Test' +  Math.floor(Math.random() * 1000300) + '@test.com',
            emergencyContact: "8658 5893",
            homeNumber: "62378565",

            preferredContactModeSelectAll: 'check',
            preferredContactModeEmail: 'uncheck',
            preferredContactModeMail: 'uncheck',
            preferredContactModeSMS: 'uncheck',
            preferredContactModeVoiceCall: 'uncheck',
            preferredContactModePushNotification: 'uncheck',

            //Consent Information
            consentInformationMarketing: 'check',
            consentInformationServiceNotification: 'check',
            consentInformationTransactional: 'uncheck',

        },
        InterestAreaInformation: {
            //Preferred SAFRA clubs
            clubFaber: 'check',
            clubPayoh: 'uncheck',
            clubTampines: 'uncheck',
            clubYishun: 'uncheck',
            clubJurong: 'uncheck',
            clubPunggol: 'uncheck',

            //SAFRA Brands
            brandEnergyOneGym: 'uncheck',
            brandKidzAmaza: 'check',
            brandFINS: 'uncheck',

            //I am interested in
            interestedAllEvents: 'uncheck',
            interestedAllPeaks: 'check',
            interestedFitness: 'check',
            interestedChild: 'uncheck',
            interestedLifelong: 'uncheck',
            interestedLeisure: 'uncheck',
            interestedFood: 'uncheck',
            interestedShopping: 'check',
            interestedTravel: 'check',
            interestedMotoring: 'uncheck',
            interestedHealth: 'uncheck',
            interestedSAFRAPOINTS: 'check',

            //SAFRA Newsletter
            SAFRANewsletter: 'check',

            //Interest Groups & Micro Clubs
            groupAdventure: 'check',
            groupBitez: 'uncheck',
            groupCommService: 'uncheck',
            groupCompetitive: 'uncheck',
            groupDigimedia: 'uncheck',
            groupEntrep: 'check',
            groupFuse: 'uncheck',
            groupGolf: 'uncheck',
            groupMovie: 'uncheck',
            groupPhotograph: 'check',
            groupRunning: 'check',
            groupShooting: 'uncheck',
            groupSocialBadminton: 'check',
            groupTech: 'check',
            groupTravel: 'uncheck'
        }
    },

    CustomerCreationDependentChild: {
        RegistrationInformation: {
            name: 'Test User',
            MemberCategory: 'Dependent',
            DependentType: 'Child',
            Gender: 'Male',
            DateofBirth: '1-Jan-2009',
            Age: '12',
            PrincipalType: 'AS',
            MemberType: 'JH',
            Nationality: 'Singaporean/PR',
            MaritalStatus: 'Single',
            CardType: 'SAFRA Classic Card',
            InterestinDBSCard: 'N/A',
            AllowtoRedeemSAFRAPoints: 'uncheck',
            //ProfilePicture: 'test_images.png'
        },
        ContactInformation: {
            handPhone: '8658 5896',
            emailAddress: 'testuser',
            emergencyContact: "8658 5893",
            homeNumber: "65825896",

            preferredContactModeSelectAll: 'check',
            preferredContactModeEmail: 'uncheck',
            preferredContactModeMail: 'uncheck',
            preferredContactModeSMS: 'uncheck',
            preferredContactModeVoiceCall: 'uncheck',
            preferredContactModePushNotification: 'uncheck',

            //Consent Information
            consentInformationMarketing: 'check',
            consentInformationServiceNotification: 'check',
            consentInformationTransactional: 'uncheck',

        },
        InterestAreaInformation: {
            //Preferred SAFRA clubs
            clubFaber: 'check',
            clubPayoh: 'uncheck',
            clubTampines: 'uncheck',
            clubYishun: 'uncheck',
            clubJurong: 'uncheck',
            clubPunggol: 'uncheck',

            //SAFRA Brands
            brandEnergyOneGym: 'uncheck',
            brandKidzAmaza: 'check',
            brandFINS: 'uncheck',

            //I am interested in
            interestedAllEvents: 'uncheck',
            interestedAllPeaks: 'check',
            interestedFitness: 'check',
            interestedChild: 'uncheck',
            interestedLifelong: 'uncheck',
            interestedLeisure: 'uncheck',
            interestedFood: 'uncheck',
            interestedShopping: 'check',
            interestedTravel: 'check',
            interestedMotoring: 'uncheck',
            interestedHealth: 'uncheck',
            interestedSAFRAPOINTS: 'check',

            //SAFRA Newsletter
            SAFRANewsletter: 'check',

            //Interest Groups & Micro Clubs
            groupAdventure: 'check',
            groupBitez: 'uncheck',
            groupCommService: 'uncheck',
            groupCompetitive: 'uncheck',
            groupDigimedia: 'uncheck',
            groupEntrep: 'check',
            groupFuse: 'uncheck',
            groupGolf: 'uncheck',
            groupMovie: 'uncheck',
            groupPhotograph: 'check',
            groupRunning: 'check',
            groupShooting: 'uncheck',
            groupSocialBadminton: 'check',
            groupTech: 'check',
            groupTravel: 'uncheck'
        }
    },

    CustomerCreationDependentSpouse: {
        RegistrationInformation: {
            name: 'Test User',
            MemberCategory: 'Dependent',
            DependentType: 'Spouse',
            DateofBirth: '01-Jan-1978',
            gender: 'Female',
            Age: '42',
            PrincipalType: 'AS',
            MemberType: 'JH',
            Nationality: 'Singaporean/PR',
            MaritalStatus: 'Married',
            CardType: 'SAFRA Classic Card',
            InterestinDBSCard: 'N/A',
            AllowtoRedeemSAFRAPoints: 'uncheck',
        },
        AddressInformation: {
            postalCode: '569933',
            address: undefined,
            unitNumber: "200A",
            POBOx: "102A",
            myMailbox: "SGPost"
        },
        ContactInformation: {
            handPhone: '8658 5896',
            emailAddress: 'testuser',
            emergencyContact: "8658 5893",
            conentInformationServiceNotification: 'check',
            homeNumber: "65825896",

            preferredContactModeSelectAll: 'check',
            preferredContactModeEmail: 'uncheck',
            preferredContactModeMail: 'uncheck',
            preferredContactModeSMS: 'uncheck',
            preferredContactModeVoiceCall: 'uncheck',
            preferredContactModePushNotification: 'uncheck',

            //Consent Information
            consentInformationMarketing: 'check',
            consentInformationServiceNotification: 'check',
            consentInformationTransactional: 'uncheck',

        },
        InterestAreaInformation: {
            //Preferred SAFRA clubs
            clubFaber: 'check',
            clubPayoh: 'uncheck',
            clubTampines: 'uncheck',
            clubYishun: 'uncheck',
            clubJurong: 'uncheck',
            clubPunggol: 'uncheck',

            //SAFRA Brands
            brandEnergyOneGym: 'uncheck',
            brandKidzAmaza: 'check',
            brandFINS: 'uncheck',

            //I am interested in
            interestedAllEvents: 'uncheck',
            interestedAllPeaks: 'check',
            interestedFitness: 'check',
            interestedChild: 'uncheck',
            interestedLifelong: 'uncheck',
            interestedLeisure: 'uncheck',
            interestedFood: 'uncheck',
            interestedShopping: 'check',
            interestedTravel: 'check',
            interestedMotoring: 'uncheck',
            interestedHealth: 'uncheck',
            interestedSAFRAPOINTS: 'check',

            //SAFRA Newsletter
            SAFRANewsletter: 'check',

            //Interest Groups & Micro Clubs
            groupAdventure: 'check',
            groupBitez: 'uncheck',
            groupCommService: 'uncheck',
            groupCompetitive: 'uncheck',
            groupDigimedia: 'uncheck',
            groupEntrep: 'check',
            groupFuse: 'uncheck',
            groupGolf: 'uncheck',
            groupMovie: 'uncheck',
            groupPhotograph: 'check',
            groupRunning: 'check',
            groupShooting: 'uncheck',
            groupSocialBadminton: 'check',
            groupTech: 'check',
            groupTravel: 'uncheck'
        }
    }

}

export default Customerdata;
