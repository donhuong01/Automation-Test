const data = {

    //Costomer Checkin

    checkin_expectedPg: "Customer Check-In",
    meminfo_expectedPg: 'Member Information',

    checkin_memberID: {
        type: 'MEMBERID',
        value1: 'A300005639'//QA 
    },
    checkin_NRIC: {
        type: 'NRIC',
        value1: '980Z',//QA
        value2: '18-Aug-1980',
    },
    checkin_email: {
        type: 'EMAIL',
        value1: 'Auto-User2225941520@test.com', ///QA
    },
    checkin_mobile: {
        type: 'MOBILENUMBER',
        value1: '88888889',//QA
        value2: 'A300005639'
    },
    checkin_scancard: {
        type: 'SCANECARD',
        value1: 'A300005639_3DA4F788839DE16D26F7865886038183AECEF073A605371439FCA067A95E8F15',//QA
    },
    checkin_swipecard: {
        type: 'SWIPECARD',
        value1: '%A8008980001869402^LEE CHOON CHIEH ^2508^A300005639^019801221000000?;8008980001869402=2508201000005500011?',//QA
    },

    //Membership Tenure Selection

    checkIn: {
        memberId: 'A300000042'
    },

    memberRegistrationPrincipal: {
        expectedPage: 'Membership Tenure Selection'
    },

    membershipTenureSelection: {
        principal: {
            memberId: 'A30000451',
            name: 'John',
            memberTypeCode: 'AS',
            membershipPeriod: '02/01/2022',
            tenureSelection: '5 Years'
        },

        dependent: {
            memberId: 'A300000033',
            name: 'Nita John',
            memberTypeCode: 'JH',
            membershipPeriod: '02/01/2022',
            tenureSelection: '2 Years'
        },

        expectedPage: 'Membership Registration - Principal'
    },


    //Customer Landing Page
    memberinfo: {
        MemberId: "A300000017"

    },
    customerLandingPageContent: {
        Back: "Back",
        MembershipWaiver: "Membership Waiver",
        MembershipRegistration: "Membership Registration",
        TransactionHistory: "Transaction History",
        MembershipDeferment: "Membership Deferment",
        MembershipRenewal: "Membership Renewal"
    },
    pageTitle: {
        CustomerLanding: "Customer Landing",
        BatchMembershipWaiverRequest: "Batch Membership Waiver Request",
        MembershipRegistrationPrincipal: "Membership Registration - Principal",
        MembershipTransactionHistory: "Membership Transaction History",
        MembershipDefermentRequest: "Membership Deferment Request",
        MembershipRenewal: "Membership Renewal",
    },


    //Member Type Listing And Details
    MemberTypeDetail: {
        //MemberCategory : 'Dependent',
        MemberCategory: 'Principal',
        DependentType: 'Spouse',
        ParentType: 'OD',
        Code: 'ITZY' + + Math.floor(Math.random() * 10000 * 50),
        Description: 'Sample Description',
        MembershipType: 'OD',
        ServiceStatus: 'SAFVC Active',
        Rank: 'C2D',
        MinYears: '2',
        MaxYears: '5',
        MaxCapYears: '8',
        Remark: 'Sample Data',
        Status: 'Active',
        ExpectedPage: 'Member Type Listing'
    },

    MemberTypeList: {
        memberCategory: {
            All: 'ALl',
            Principal: 'Principal',
            Dependent: 'Dependent',
            FreeNSF: 'Free NSF',
            columnName: 'Principle'
        },
        dependentType: {
            columnName: 'Dependent Type',
            All: 'All',
            Spouse: 'Spouse',
            Child: 'Child',
        },
        memberCode: {
            AS: "AS",
            AT: "AT",
            AV: "AV",
            LF: "LF",
            OA: "OA",
            OF: "OF",
            OD: "OD",
            VO: "VO",
            VD: "VD",
            JH: "JH",
            JL: "JL",
            JV: "JV",
            SH: "SH",
            SV: "SV",
            SL: "SL",
        },
        membershipType: {
            ASSOCIATE: "ASSOCIATE",
            ASSOCIATE_SAFVC: "ASSOCIATE (SAFVC)",
            VETERAN_ASSOCIATE: "VETERAN (ASSOCIATE)",
            LIFE: "LIFE",
            ASSOCIATE: "ASSOCIATE",
            ORDINARY_A: "ASSOCIORDINARY A	ATE",
            ORDINARY_B: "ORDINARY B",
            VETERAN_C2D: "	VETERAN (C2D)",
            VETERAN: "VETERAN",
            NSF: "NSF",
        }
    },




    //Member Registration Principal

    // PRINCIPAL MEMBER WITHOUT DEPENDENT - WILL SUBMIT DOC PROOF LATER
    memberregistrationprincipal: {
        Personal_Info: {
            MemberCategory: 'Principal',
            NameOnNRIC: 'Auto Test',
            NameOnCard: 'Auto Test',
            Nric: 'S8433696C',
            Gender: 'Male',
            DateofBirth: '01-Jan-1982',
            Age: '41',
            NSStatus: 'SAF Regular/DXO',
            NSRank: 'Officer',
            MemberType: 'AS',
            Nationality: 'Singaporean/PR',
            MaritalStatus: 'Married',
            CardType: 'SAFRA Classic Card',
            InterestinDBSCard: 'N/A',
            ProfilePicture: 'test_images.png'
        },

        AddressInfo: {
            PostalCode: '117606',
            Address: '608 CHOA CHU KANG STREET 62',
            UnitNumber: '#02-222',
            POBOX: '12345',
            MyMailbox: '2323'
        },
        ContactInfo: {
            Handphone: '87126534',
            EmailAddress: 'auto' + Math.floor(Math.random() * 10000 * 50) + '@test.com',
            HomeNumber: '62347722',
            EmergencyContact: '8658 5894',
            //Preferred COntact Mode
            SelectAll: 'check',
            Email: 'uncheck',
            Mail: 'uncheck',
            SMS: 'uncheck',
            VoiceCall: 'uncheck',
            PushNotification: 'uncheck',
            WhatsApp: 'uncheck',
            // Consent Information
            MarketingConsent: 'check',
            ServiceNotificationConsent: 'check',
            TransactionalConsent: 'check'
            //Documentary Proof

        },
        InterestedAreaInformation: {
            //PreferredSafraClubs
            safraJurong: 'check',
            safraPunggol: 'check',
            safraToaPayoh: 'check',
            safraMtFaber: 'uncheck',
            safraTampines: 'uncheck',
            safraYishun: 'uncheck',
            //SAFRA Brands
            energyOneGym: 'check',
            kidzAmazeSplshIndrPlayGrnd: 'uncheck',
            finsSwimSchool: 'uncheck',
            //I am interested in
            allEventsAndActivities: 'check',
            allPeaksAndPromos: 'uncheck',
            fitnessAndAdventure: 'check',
            childEnrichmentActivities: 'uncheck',
            lifeLongLearning: 'check',
            leisureAndEntrtnmnt: 'check',
            foodAndBeverages: 'uncheck',
            shoppingAndGroceries: 'check',
            travel: 'uncheck',
            motoring: 'check',
            healthAndBeauty: 'uncheck',
            safraPtsRewardsProgramme: 'check',
            ensman: 'check',
        },
        // //SafraNewsletter
        // Safranewsletter: {

        // },

        //Interested Groups & Micro Clubs
        InterestGroupsMicroClubs: {
            safraAdventureClub: 'check',
            bitezFandB: 'uncheck',
            safraCommSrvcsClub: 'check',
            safraCompSportsClub: 'uncheck',
            safraDigitalMediaClub: 'check',
            safraEntrpnrsClub: 'uncheck',
            fuseEntrtnmnt: 'uncheck',
            safraGolfingSection: 'check',
            safraMovieMax: 'uncheck',
            safraPhotoClub: 'uncheck',
            safraRunningClub: 'check',
            safraShootingClub: 'uncheck',
            safraSocialBadmntnClub: 'check',
            safraTechClub: 'uncheck',
            safraTravelClub: 'check',

        },

    },




    //Membership Registration Dependent
    memregdependent: {
        Personal_Info: {
            MemberCategory: 'Dependent',
            DependentType: 'Child',
            NameOnNRIC: 'Juan Dela Cruz',
            NameOnCard: 'Juan Dela Cruz',
            NRIC: 'S8433696C',
            Gender: 'Male',
            DateofBirth: '18-Jan-2010',
            Age: '12',
            PrincipalID: 'A300000001',
            PrincipalTypeCode: 'OD',
            MemberType: 'JL',
            Nationality: 'Singaporean/PR',
            MaritalStatus: 'Single',
            CardType: 'SAFRA Classic Card',
            InterestinDBSCard: 'N/A',
            AllowtoRedeemSAFRAPoints: 'check',
            ProfilePicture: 'test_images.png'
        },

        AddressInfo: {
            IndependentAddress: 'check',
            PostalCode: '117606',
            Address: '33 MAR0032',
            UnitNumber: '#02-222',
            PoBox: '12345',
            MyMailbox: '2323'
        },
        ContactInfo: {
            Handphone: '87126534',
            EmailAddress: 'Testuser' + Math.floor(Math.random() * 100000 * 2) + '@synergyonline.com',
            HomeNumber: '63231234',
            EmergencyContact: '87627612',
            //Preferred COntact Mode
            SelectAll: 'uncheck',
            Email: 'check',
            Mail: 'check',
            SMS: 'check',
            VoiceCall: 'check',
            PushNotification: 'check',
            WhatsApp: 'check',
            // Consent Information
            MarketingConsent: 'check',
            ServiceNotificationConsent: 'uncheck',
            TransactionalConsent: 'check',
            //Documentary Proof
        },
        ProofDoc: {
            proofOfDocOption1: 'SUBMITDOCPROOFLATER',
            proofOfDocOption2: 'UPLOADDOCPROOF',
            DocumentaryProof: 'Sample_Images.jpeg'
        },
        InterestedAreaInformation: {
            //PreferredSafraClubs
            safraJurong: 'check',
            safraPunggol: 'check',
            safraToaPayoh: 'check',
            safraMtFaber: 'uncheck',
            safraTampines: 'uncheck',
            safraYishun: 'uncheck',
            //SAFRA Brands
            energyOneGym: 'check',
            kidzAmazeSplshIndrPlayGrnd: 'uncheck',
            finsSwimSchool: 'uncheck',
            //I am interested in
            allEventsAndActivities: 'check',
            allPeaksAndPromos: 'uncheck',
            fitnessAndAdventure: 'check',
            childEnrichmentActivities: 'uncheck',
            lifeLongLearning: 'check',
            leisureAndEntrtnmnt: 'check',
            foodAndBeverages: 'uncheck',
            shoppingAndGroceries: 'check',
            travel: 'uncheck',
            motoring: 'check',
            healthAndBeauty: 'uncheck',
            safraPtsRewardsProgramme: 'check',

        },

        Safranewsletter: {
            ensman: 'check',
        },

        //Interested Groups & Micro Clubs
        InterestGroupsMicroClubs: {
            safraAdventureClub: 'check',
            bitezFandB: 'uncheck',
            safraCommSrvcsClub: 'check',
            safraCompSportsClub: 'uncheck',
            safraDigitalMediaClub: 'check',
            safraEntrpnrsClub: 'uncheck',
            fuseEntrtnmnt: 'uncheck',
            safraGolfingSection: 'check',
            safraMovieMax: 'uncheck',
            safraPhotoClub: 'uncheck',
            safraRunningClub: 'check',
            safraShootingClub: 'uncheck',
            safraSocialBadmntnClub: 'check',
            safraTechClub: 'uncheck',
            safraTravelClub: 'check',

        },


    },


    //Membership Advise Setting Listing
    memberRenewlAdviceListing: {

        Name: 'JohnDoe',
        Description: 'Test User',
        MemberCategory: 'Principal',
        Gender: 'Male',
        MemberTypeCode: 'AS',
        MemberStatusReason: ' ',
        ExpiryDateFrom: '01/01/2010',
        ExpiryDateTo: '01/01/2020',
        DateofBirthFrom: '01/01/1970',
        DateofBirthTo: '01/02/1990',
        MemberCardType: 'SAFRA Classic Card',
        PostalCode: '546080',
        ZoneId: '1234',
        AutoDeduction: 'IBG',
        MaritalStatus: 'Single',
        ExcludeBadAddress: 'CHECK',
        ExcludeTerminatedInAdvance: 'CHECK',
        ExcludeRegistrationInAdvance: 'CHECK'

    },

    //Membership Advise Setting Details
    memberRenewlAdviceDetail: {

        Name: 'JohnDoe',
        Description: 'Test User',
        MemberCategory: 'Principal',
        Gender: 'Male',
        MemberTypeCode: 'AS',
        MemberStatusReason: ' ',
        ExpiryDateFrom: '01-Jan-2020',
        ExpiryDateTo: '01-Jan-2020',
        DateofBirthFrom: '30-Apr-1992',
        DateofBirthTo: '1-Feb-1996',
        MemberCardType: 'SAFRA DBS Credit Card',
        PostalCode: '546080',
        ZoneId: '1234',
        AutoDeduction: 'IBG',
        MaritalStatus: 'Single',
        ExcludeBadAddress: 'CHECK',
        ExcludeTerminatedInAdvance: 'CHECK',
        ExcludeRegistrationInAdvance: 'CHECK',
        ExpiryDateFromListing: '01/01/2010',
        ExpiryDateToListing: '01/01/2020'

    },


    //Source Channel Listing
    sourcechaListing: {
        Name: 'Test Source 123',
        Type: 'Deduction'

    },
    //Source Channel Detail
    sourceChannelDetail: {
        userList: {
            username: 'Arielle Sadol',
            emailAddress: 'asadol@synergyonline.com'
        },

        addUser: 'asadol@synergyonline.com',
        removeUser: 'asadol@synergyonline.com',

        fillOutSourceChannelDetail: {
            name: 'Test Source 3',
            type: 'Deduction',
            group: 'Internet',
            operatingUnitNumber: 'IBG',
            // clubHouseStoreId: '00000000-0000-0000-0000-000000000000',
            clubHouseStoreId: 'B0967328-3FF2-4977-93B1-08D9AF1689EE',
            headquarter: 'No',
            warehouse: 'BITEZ',
            //site: '',
            address: 'Tokyo, Japan',
            website: 'www.sample.com',
            facebook: 'sample.faceboook.com',
            mobileApp: 'SampleApp',
            telephone: '6549873',
            numberSequence: 'Receipt_No',
            location: 'Tokyo, Japan',
            description: 'Safra Jurong Item',
            roadshowCode: 'ABC123',
            status: 'Inactive'
        },

        addEligiblePaymentMethod: "Credit Card",
        removePaymentMethod: "Credit Card",
        verifyPaymentMethodList: {
            paymentMethodCash: 'Cash',
            paymentMethodCreditCard: 'Credit Card'
        }

    },

    //BAdAddressUpdateListing
    BadAddressUpdateListing: {
        batchId: 'BA-BR-1000001',
        badAddressUpdateList: [
            {
                batchId: 'BA-BR-1000001',
                status: 'Draft'
            },
            {
                batchId: 'BA-BR-1000002',
                status: 'Validation Failed'
            },
            {
                batchId: 'BA-BR-1000006',
                status: 'Validation Failed'
            }
        ],
        batchIdItem: 'BA-BR-1000001'
    },

    BadAddressUpdateDetail: {

        batchId: '-',
        uploadFile: 'bad-address-test.xlsx',
        status: '-'
    },

    // Mass Update For Member Data Listing
    MassUpdateForMemberDataListing: {
        batchId: 'MS-BR-100012', // 'MS-BR-100019'
        batchIdItem: 'MS-BR-100012',
        massUpdForMemData: [
            {
                batchId: 'MS-BR-100021',
                status: 'Submitted'
            },
            {
                batchId: 'MS-BR-100031',
                status: 'Draft'
            },
            {
                batchId: 'MS-BR-100017',
                status: 'Validation Failed'
            },
            {
                batchId: 'MS-BR-100027',
                status: 'Validated'
            }
        ]
    },

    // Mass Update For Member Data Detail
    MassUpdateForMemberDataDetail: {
        FileName: 'mass-update-test.xlsx',
        InvalidFile: 'bad-address-test.xlsx'
    },

    // Membership Module Setting
    MembershipModuleSetting: {

        DocumentaryProofSetting: {
            MaximumAllowedFile: '999996',
            AutoDeleteCheckBox: 'check',
            FirstNotification: '1',
            SecondNotification: '2',
            ThirdNotification: '3',
            FinalNotification: '4',
            TerminationAfterApplicationDate: '27',
            DocumentaryProofUpload: 'link 2022'
        },


        RenewalAdvice: {
            EnableRenewalAdvice: 'check',
            MonthsBeforeSendingRenewal: '3',
            ERenewalPrefixUrl: 'prefix 2022'
        },

        SfsSetting: {
            SfsActivation: 'check',
            AdminFeeChargeItem: '10 YRS SC',

            AdminFeeChargeItemFilters: {
                NameFilter: '10 YRS SC',
                DescriptionFilter: '10 YRS SC',
                CardTypeFilter: 'SAFRA Classic Card',
                StatusFilter: 'Active'
            }
        },

        RefundExcessPayment: {
            AutoRefundExcessPayment: 'check',
            DefaultRefundModeFrontEnd: 'PayNow',
            DefaultRefundModeAutoDeduction: 'GIRO'
        }
    },

    //Batch Membership Registration Form
    BatchMemRegDetail: {
        BatchName: ' SYN SG ',
        BatchType: 'Membership',
        RecTalkSessionID: 'RECID',
        MemRegTenure: '2 YRS CC',
        PromationReg: '',
        MemRenewalTenure: '5 YRS SC',
        PromationRenewal: '',
        PaymentMode: 'I-Banking',
        Status: 'Open',

        InBatchRegistration: {

            MemberID: 'A300000023',
            NIRC: '941Z',

            Last4NRIC: 'A965',
            DateofBirth: '18-Jan-1979',
        }

    },

    // SFS Member Registration
    CustomerCreationPrincipal: {
        RegistrationInformation: {
            name: 'Test User ',
            DOB: '24-Jan-1980',
            gender: 'Male'
        },
        AddressInformation: {
            postalCode: '569933',
            address: undefined,
            unitNumber: "200A",
            POBOx: "102A",
            myMailbox: "SGPost"
        },
        ContactInformation: {
            handPhone: '+65 658 5896',
            emailAddress: 'testuser',
            emergencyContact: "+65 658 5893",
            homeNumber: "NA",

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
            DateofBirth: '1-Jan-2010',
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
            handPhone: '+65 658 5896',
            emailAddress: 'testuser',
            emergencyContact: "+65 658 5893",
            homeNumber: "NA",

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
            DateofBirth: '24-Jan-1980',
            gender: 'Female',
            Age: '42',
            PrincipalType: 'AS',
            MemberType: 'JH',
            Nationality: 'Singaporean/PR',
            MaritalStatus: 'Single',
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
            handPhone: '+65 658 5896',
            emailAddress: 'testuser',
            emergencyContact: "+65 658 5893",
            conentInformationServiceNotification: 'check',
            homeNumber: "NA",

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

    //Principal and dependent Payment

    PrincipalPayment: {
        PAYMENT_MODE: 'CHEQUE',
        AMOUNT: '405.00',
        POINT: '0',
        ReferanceNo: '',
        ReferanceDte: '',
        Remaining_balance: 'S$ 0.00'
    },
    PrincipalDependentPayment: {
        PAYMENT_MODE: 'CHEQUE',
        AMOUNT: '571.00',
        POINT: '0',
        ReferanceNo: '',
        ReferanceDte: '',
        Remaining_balance: 'S$ 0.00'
    },

    CustomerCreationPrincipal: {
        RegistrationInformation: {
            name: 'TestUser ',
            DOB: '18-Aug-1980',
            gender: 'Male'
        },
        AddressInformation: {
            postalCode: '117606',
            address: undefined,
            unitNumber: "200A",
            POBOx: "102A",
            myMailbox: "SGPost"
        },
        ContactInformation: {
            handPhone: '85658589',
            emailAddress: 'testuser',
            emergencyContact: "85 658 5893",
            homeNumber: "83547634",
            homeNumber2: "67419445",

            preferredContactModeSelectAll: 'check',
            preferredContactModeEmail: 'check',
            preferredContactModeMail: 'check',
            preferredContactModeSMS: 'check',
            preferredContactModeVoiceCall: 'check',
            preferredContactModePushNotification: 'check',
            preferredContactModeWhatsApp: 'check',

            //Consent Information
            consentInformationMarketing: 'check',
            consentInformationServiceNotification: 'check',
            consentInformationTransactional: 'uncheck',

        },
        InterestAreaInformation: {
            //Preferred SAFRA clubs
            clubChoa: 'check',
            clubFaber: 'uncheck',
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
            DateofBirth: '1-Jan-2010',
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
            handPhone: '85 658 5896',
            emailAddress: 'testuser',
            emergencyContact: "85 658 5893",
            homeNumber: "62112342",

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
            DateofBirth: '24-Jan-1990',
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
            homeNumber: "6223 2323",

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
    //Membership Renewal Advice
    memberRenewlAdvice: {

        Name: 'Auto-Test ' + Math.floor(Math.random() * 1000),
        Description: 'Test User Description',
        MemberCategory: 'Principal',
        Gender: 'Male',
        MemberTypeCode: 'AS',
        MemberStatusReason: 'Renewal',
        ExpiryDateFrom: '1-Jan-2010',
        ExpiryDateTo: '1-Jan-2020',
        DateofBirthFrom: '1-Jan-1970',
        DateofBirthTo: '1-Feb-1990',
        MemberCardType: 'SAFRA Classic Card',
        PostalCode: '546080',
        ZoneId: '1234',
        AutoDeduction: 'IBG',
        MaritalStatus: 'Single',
        ExcludeBadAddress: 'CHECK',
        ExcludeTerminatedInAdvance: 'CHECK',
        ExcludeRegistrationInAdvance: 'CHECK'

    },

    // Member Status Reason Code
    memstatcodedetail: {
        ReasonCode: 'New',
        MemberStatus: 'Active',
        Comeback: 'Not Allowed',
        ComebackList: 'NotAllowed',
        Remark: 'When membership is expired'

    },
    memstatcodedetailUpated: {
        ReasonCode: 'New',
        MemberStatus: 'Active',
        Comeback: 'Not Allowed',
        ComebackList: 'NotAllowed',
        Remark: 'Updated'


    },

    //Withrawal Of Consent Form
    PersonalInformation: {

        Nationality: 'check',
        FullName: 'check',
        Gender: 'check',
        MartailStatus: 'check',
        DOB: 'check',
        ProfilePicture: 'uncheck'
    },

    ContactInformation: {

        HandPhones: 'uncheck',
        HomeNumber: 'check',
        EmergencyContact: 'uncheck',
        EmailAddress: 'check',
        MailingAddress: 'check'
    }



}
export default data

/*********************************************************************************************************** */
/************************************************ QA ******************************************************* */
/*********************************************************************************************************** */


// const data = {

//     //Costomer Checkin

//     checkin_expectedPg: "Customer Check-In",
//     meminfo_expectedPg: 'Member Information',

//     checkin_memberID: {
//         type: 'MEMBERID',
//         value1: 'A300002657'
//     },
//     checkin_NRIC: {
//         type: 'NRIC',
//         value1: '912D',
//         value2: '04-Feb-1980',
//     },
//     checkin_email: {
//         type: 'EMAIL',
//         value1: 'AutotestS1435B@test.com', //A300002657
//     },
//     checkin_mobile: {
//         type: 'MOBILENUMBER',
//         value1: '2525-2626',
//         value2: 'A300002657'
//     },
//     checkin_scancard: {
//         type: 'SCANECARD',
//         value1: 'A300002657_3DA4F788839DE16D26F7865886038183AECEF073A605371439FCA067A95E8F15',
//     },
//     checkin_swipecard: {
//         type: 'SWIPECARD',
//         value1: '%A8008980001869402^LEE CHOON CHIEH ^2508^A300002657^019801221000000?;8008980001869402=2508201000005500011?',
//     },

//     //Membership Tenure Selection

//     checkIn: {
//         memberId: 'A300000042'
//     },

//     memberRegistrationPrincipal: {
//         expectedPage: 'Membership Tenure Selection'
//     },

//     membershipTenureSelection: {
//         principal: {
//             memberId: 'A30000451',
//             name: 'John',
//             memberTypeCode: 'AS',
//             membershipPeriod: '02/01/2022',
//             tenureSelection: '5 Years'
//         },

//         dependent: {
//             memberId: 'A300000033',
//             name: 'Nita John',
//             memberTypeCode: 'JH',
//             membershipPeriod: '02/01/2022',
//             tenureSelection: '2 Years'
//         },

//         expectedPage: 'Membership Registration - Principal'
//     },


//     //Customer Landing Page
//     memberinfo: {
//         MemberId: "A300000017"

//     },
//     customerLandingPageContent: {
//         Back: "Back",
//         MembershipWaiver: "Membership Waiver",
//         MembershipRegistration: "Membership Registration",
//         TransactionHistory: "Transaction History",
//         MembershipDeferment: "Membership Deferment",
//         MembershipRenewal: "Membership Renewal"
//     },
//     pageTitle: {
//         CustomerLanding: "Customer Landing",
//         BatchMembershipWaiverRequest: "Batch Membership Waiver Request",
//         MembershipRegistrationPrincipal: "Membership Registration - Principal",
//         MembershipTransactionHistory: "Membership Transaction History",
//         MembershipDefermentRequest: "Membership Deferment Request",
//         MembershipRenewal: "Membership Renewal",
//     },


//     //Member Type Listing And Details
//     MemberTypeDetail: {
//         //MemberCategory : 'Dependent',
//         MemberCategory: 'Principal',
//         DependentType: 'Spouse',
//         ParentType: 'OD',
//         Code: 'ITZY',
//         Description: 'Sample Description',
//         MembershipType: 'OD',
//         ServiceStatus: 'SAFVC Active',
//         Rank: 'C2D',
//         MinYears: '2',
//         MaxYears: '5',
//         MaxCapYears: '8',
//         Remark: 'Sample Data',
//         Status: 'Active',
//         ExpectedPage: 'Member Type Listing'
//     },

//     MemberTypeList: {
//         memberCategory: {
//             All: 'ALl',
//             Principal: 'Principal',
//             Dependent: 'Dependent',
//             FreeNSF: 'Free NSF',
//             columnName: 'Principle'
//         },
//         dependentType: {
//             columnName: 'Dependent Type',
//             All: 'All',
//             Spouse: 'Spouse',
//             Child: 'Child',
//         },
//         memberCode: {
//             AS: "AS",
//             AT: "AT",
//             AV: "AV",
//             LF: "LF",
//             OA: "OA",
//             OF: "OF",
//             OD: "OD",
//             VO: "VO",
//             VD: "VD",
//             JH: "JH",
//             JL: "JL",
//             JV: "JV",
//             SH: "SH",
//             SV: "SV",
//             SL: "SL",
//         },
//         membershipType: {
//             ASSOCIATE: "ASSOCIATE",
//             ASSOCIATE_SAFVC: "ASSOCIATE (SAFVC)",
//             VETERAN_ASSOCIATE: "VETERAN (ASSOCIATE)",
//             LIFE: "LIFE",
//             ASSOCIATE: "ASSOCIATE",
//             ORDINARY_A: "ASSOCIORDINARY A	ATE",
//             ORDINARY_B: "ORDINARY B",
//             VETERAN_C2D: "	VETERAN (C2D)",
//             VETERAN: "VETERAN",
//             NSF: "NSF",
//         }
//     },




//     //Member Registration Principal

//     // PRINCIPAL MEMBER WITHOUT DEPENDENT - WILL SUBMIT DOC PROOF LATER
//     memberregistrationprincipal: {
//         Personal_Info: {
//             MemberCategory: 'Principal',
//             NameOnNRIC: 'Auto Test',
//             NameOnCard: 'Auto Test',
//             Nric: 'S8433696C',
//             Gender: 'Male',
//             DateofBirth: '01-Jan-1982',
//             Age: '41',
//             NSStatus: 'SAF Regular DXO',
//             NSRank: 'Officer',
//             MemberType: 'AS',
//             Nationality: 'Singaporean/PR',
//             MaritalStatus: 'Married',
//             CardType: 'SAFRA Classic Card',
//             InterestinDBSCard: 'SAFRA DBS Credit Card',
//             ProfilePicture: 'test_images.png'
//         },

//         AddressInfo: {
//             PostalCode: '117606',
//             Address: '608 CHOA CHU KANG STREET 62',
//             UnitNumber: '#02-222',
//             POBOX: '12345',
//             MyMailbox: '2323'
//         },
//         ContactInfo: {
//             Handphone: '87126534',
//             EmailAddress: 'auto' + Math.floor(Math.random() * 10000 * 50) + '@test.com',
//             HomeNumber: '12347722',
//             EmergencyContact: '+65 658 5894',
//             //Preferred COntact Mode
//             SelectAll: 'check',
//             Email: 'uncheck',
//             Mail: 'uncheck',
//             SMS: 'uncheck',
//             VoiceCall: 'uncheck',
//             PushNotification: 'uncheck',
//             WhatsApp: 'uncheck',
//             // Consent Information
//             MarketingConsent: 'check',
//             ServiceNotificationConsent: 'check',
//             TransactionalConsent: 'check'
//             //Documentary Proof

//         },
//         InterestedAreaInformation: {
//             //PreferredSafraClubs
//             safraJurong: 'check',
//             safraPunggol: 'check',
//             safraToaPayoh: 'check',
//             safraMtFaber: 'uncheck',
//             safraTampines: 'uncheck',
//             safraYishun: 'uncheck',
//             //SAFRA Brands
//             energyOneGym: 'check',
//             kidzAmazeSplshIndrPlayGrnd: 'uncheck',
//             finsSwimSchool: 'uncheck',
//             //I am interested in
//             allEventsAndActivities: 'check',
//             allPeaksAndPromos: 'uncheck',
//             fitnessAndAdventure: 'check',
//             childEnrichmentActivities: 'uncheck',
//             lifeLongLearning: 'check',
//             leisureAndEntrtnmnt: 'check',
//             foodAndBeverages: 'uncheck',
//             shoppingAndGroceries: 'check',
//             travel: 'uncheck',
//             motoring: 'check',
//             healthAndBeauty: 'uncheck',
//             safraPtsRewardsProgramme: 'check',
//             ensman: 'check',
//         },
//         // //SafraNewsletter
//         // Safranewsletter: {

//         // },

//         //Interested Groups & Micro Clubs
//         InterestGroupsMicroClubs: {
//             safraAdventureClub: 'check',
//             bitezFandB: 'uncheck',
//             safraCommSrvcsClub: 'check',
//             safraCompSportsClub: 'uncheck',
//             safraDigitalMediaClub: 'check',
//             safraEntrpnrsClub: 'uncheck',
//             fuseEntrtnmnt: 'uncheck',
//             safraGolfingSection: 'check',
//             safraMovieMax: 'uncheck',
//             safraPhotoClub: 'uncheck',
//             safraRunningClub: 'check',
//             safraShootingClub: 'uncheck',
//             safraSocialBadmntnClub: 'check',
//             safraTechClub: 'uncheck',
//             safraTravelClub: 'check',

//         },

//     },




//     //Membership Registration Dependent
//     memregdependent: {
//         Personal_Info: {
//             MemberCategory: 'Dependent',
//             DependentType: 'Child',
//             NameOnNRIC: 'Juan Dela Cruz',
//             NameOnCard: 'Juan Dela Cruz',
//             NRIC: 'S8433696C',
//             Gender: 'Male',
//             DateofBirth: '18-Jan-2010',
//             Age: '12',
//             PrincipalID: 'A300000002',
//             PrincipalTypeCode: 'OD',
//             MemberType: 'JL',
//             Nationality: 'Singaporean/PR',
//             MaritalStatus: 'Single',
//             CardType: 'SAFRA Classic Card',
//             InterestinDBSCard: 'N/A',
//             AllowtoRedeemSAFRAPoints: 'check',
//             ProfilePicture: 'test_images.png'
//         },

//         AddressInfo: {
//             IndependentAddress: 'check',
//             PostalCode: '117606',
//             Address: '33 MAR0032',
//             UnitNumber: '#02-222',
//             PoBox: '12345',
//             MyMailbox: '2323'
//         },
//         ContactInfo: {
//             Handphone: '87126534',
//             EmailAddress: 'Testuser' + Math.floor(Math.random() * 100000 * 2) + '@synergyonline.com',
//             HomeNumber: '2323',
//             EmergencyContact: '+65 658 5894',
//             //Preferred COntact Mode
//             SelectAll: 'uncheck',
//             Email: 'check',
//             Mail: 'check',
//             SMS: 'check',
//             VoiceCall: 'check',
//             PushNotification: 'check',
//             WhatsApp: 'check',
//             // Consent Information
//             MarketingConsent: 'check',
//             ServiceNotificationConsent: 'uncheck',
//             TransactionalConsent: 'check',
//             //Documentary Proof
//         },
//         ProofDoc: {
//             proofOfDocOption1: 'SUBMITDOCPROOFLATER',
//             proofOfDocOption2: 'UPLOADDOCPROOF',
//             DocumentaryProof: 'Sample_Images.jpeg'
//         },
//         InterestedAreaInformation: {
//             //PreferredSafraClubs
//             safraJurong: 'check',
//             safraPunggol: 'check',
//             safraToaPayoh: 'check',
//             safraMtFaber: 'uncheck',
//             safraTampines: 'uncheck',
//             safraYishun: 'uncheck',
//             //SAFRA Brands
//             energyOneGym: 'check',
//             kidzAmazeSplshIndrPlayGrnd: 'uncheck',
//             finsSwimSchool: 'uncheck',
//             //I am interested in
//             allEventsAndActivities: 'check',
//             allPeaksAndPromos: 'uncheck',
//             fitnessAndAdventure: 'check',
//             childEnrichmentActivities: 'uncheck',
//             lifeLongLearning: 'check',
//             leisureAndEntrtnmnt: 'check',
//             foodAndBeverages: 'uncheck',
//             shoppingAndGroceries: 'check',
//             travel: 'uncheck',
//             motoring: 'check',
//             healthAndBeauty: 'uncheck',
//             safraPtsRewardsProgramme: 'check',

//         },

//         Safranewsletter: {
//             ensman: 'check',
//         },

//         //Interested Groups & Micro Clubs
//         InterestGroupsMicroClubs: {
//             safraAdventureClub: 'check',
//             bitezFandB: 'uncheck',
//             safraCommSrvcsClub: 'check',
//             safraCompSportsClub: 'uncheck',
//             safraDigitalMediaClub: 'check',
//             safraEntrpnrsClub: 'uncheck',
//             fuseEntrtnmnt: 'uncheck',
//             safraGolfingSection: 'check',
//             safraMovieMax: 'uncheck',
//             safraPhotoClub: 'uncheck',
//             safraRunningClub: 'check',
//             safraShootingClub: 'uncheck',
//             safraSocialBadmntnClub: 'check',
//             safraTechClub: 'uncheck',
//             safraTravelClub: 'check',

//         },


//     },


//     //Membership Advise Setting Listing
//     memberRenewlAdviceListing: {

//         Name: 'JohnDoe',
//         Description: 'Test User',
//         MemberCategory: 'Principal',
//         Gender: 'Male',
//         MemberTypeCode: 'AS',
//         MemberStatusReason: ' ',
//         ExpiryDateFrom: '01/01/2010',
//         ExpiryDateTo: '01/01/2020',
//         DateofBirthFrom: '01/01/1970',
//         DateofBirthTo: '01/02/1990',
//         MemberCardType: 'SAFRA Classic Card',
//         PostalCode: '546080',
//         ZoneId: '1234',
//         AutoDeduction: 'IBG',
//         MaritalStatus: 'Single',
//         ExcludeBadAddress: 'CHECK',
//         ExcludeTerminatedInAdvance: 'CHECK',
//         ExcludeRegistrationInAdvance: 'CHECK'

//     },

//     //Membership Advise Setting Details
//     memberRenewlAdviceDetail: {

//         Name: 'JohnDoe',
//         Description: 'Test User',
//         MemberCategory: 'Principal',
//         Gender: 'Male',
//         MemberTypeCode: 'AS',
//         MemberStatusReason: ' ',
//         ExpiryDateFrom: '01-Jan-2020',
//         ExpiryDateTo: '01-Jan-2020',
//         DateofBirthFrom: '30-Apr-1992',
//         DateofBirthTo: '1-Feb-1996',
//         MemberCardType: 'SAFRA DBS Credit Card',
//         PostalCode: '546080',
//         ZoneId: '1234',
//         AutoDeduction: 'IBG',
//         MaritalStatus: 'Single',
//         ExcludeBadAddress: 'CHECK',
//         ExcludeTerminatedInAdvance: 'CHECK',
//         ExcludeRegistrationInAdvance: 'CHECK',
//         ExpiryDateFromListing: '01/01/2010',
//         ExpiryDateToListing: '01/01/2020'

//     },


//     //Source Channel Listing
//     sourcechaListing: {
//         Name: 'Test Source 123',
//         Type: 'Deduction'

//     },
//     //Source Channel Detail
//     sourceChannelDetail: {
//         userList: {
//             username: 'Arielle Sadol',
//             emailAddress: 'asadol@synergyonline.com'
//         },

//         addUser: 'asadol@synergyonline.com',
//         removeUser: 'asadol@synergyonline.com',

//         fillOutSourceChannelDetail: {
//             name: 'Test Source 3',
//             type: 'Deduction',
//             group: 'Internet',
//             operatingUnitNumber: 'IBG',
//             // clubHouseStoreId: '00000000-0000-0000-0000-000000000000',
//             clubHouseStoreId: 'B0967328-3FF2-4977-93B1-08D9AF1689EE',
//             headquarter: 'No',
//             warehouse: 'BITEZ',
//             //site: '',
//             address: 'Tokyo, Japan',
//             website: 'www.sample.com',
//             facebook: 'sample.faceboook.com',
//             mobileApp: 'SampleApp',
//             telephone: '6549873',
//             numberSequence: 'Receipt_No',
//             location: 'Tokyo, Japan',
//             description: 'Safra Jurong Item',
//             roadshowCode: 'ABC123',
//             status: 'Inactive'
//         },

//         addEligiblePaymentMethod: "Credit Card",
//         removePaymentMethod: "Credit Card",
//         verifyPaymentMethodList: {
//             paymentMethodCash: 'Cash',
//             paymentMethodCreditCard: 'Credit Card'
//         }

//     },

//     //BAdAddressUpdateListing
//     BadAddressUpdateListing: {
//         batchId: 'BA-BR-1000001',
//         badAddressUpdateList: [
//             {
//                 batchId: 'BA-BR-1000001',
//                 status: 'Draft'
//             },
//             {
//                 batchId: 'BA-BR-1000002',
//                 status: 'Validation Failed'
//             },
//             {
//                 batchId: 'BA-BR-1000006',
//                 status: 'Validation Failed'
//             }
//         ],
//         batchIdItem: 'BA-BR-1000001'
//     },

//     BadAddressUpdateDetail: {

//         batchId: '-',
//         uploadFile: 'bad-address-test.xlsx',
//         status: '-'
//     },

//     // Mass Update For Member Data Listing
//     MassUpdateForMemberDataListing: {
//         batchId: 'MS-BR-100012', // 'MS-BR-100019'
//         batchIdItem: 'MS-BR-100012',
//         massUpdForMemData: [
//             {
//                 batchId: 'MS-BR-100021',
//                 status: 'Submitted'
//             },
//             {
//                 batchId: 'MS-BR-100031',
//                 status: 'Draft'
//             },
//             {
//                 batchId: 'MS-BR-100017',
//                 status: 'Validation Failed'
//             },
//             {
//                 batchId: 'MS-BR-100027',
//                 status: 'Validated'
//             }
//         ]
//     },

//     // Mass Update For Member Data Detail
//     MassUpdateForMemberDataDetail: {
//         FileName: 'mass-update-test.xlsx',
//         InvalidFile: 'bad-address-test.xlsx'
//     },

//     // Membership Module Setting
//     MembershipModuleSetting: {

//         DocumentaryProofSetting: {
//             MaximumAllowedFile: '999996',
//             AutoDeleteCheckBox: 'check',
//             FirstNotification: '1',
//             SecondNotification: '2',
//             ThirdNotification: '3',
//             FinalNotification: '4',
//             TerminationAfterApplicationDate: '27',
//             DocumentaryProofUpload: 'link 2022'
//         },


//         RenewalAdvice: {
//             EnableRenewalAdvice: 'check',
//             MonthsBeforeSendingRenewal: '3',
//             ERenewalPrefixUrl: 'prefix 2022'
//         },

//         SfsSetting: {
//             SfsActivation: 'check',
//             AdminFeeChargeItem: '10 YRS SC',

//             AdminFeeChargeItemFilters: {
//                 NameFilter: '10 YRS SC',
//                 DescriptionFilter: '10 YRS SC',
//                 CardTypeFilter: 'SAFRA Classic Card',
//                 StatusFilter: 'Active'
//             }
//         },

//         RefundExcessPayment: {
//             AutoRefundExcessPayment: 'check',
//             DefaultRefundModeFrontEnd: 'PayNow',
//             DefaultRefundModeAutoDeduction: 'GIRO'
//         }
//     },

//     //Batch Membership Registration Form
//     BatchMemRegDetail: {
//         BatchName: ' SYN SG ',
//         BatchType: 'Membership',
//         RecTalkSessionID: 'RECID',
//         MemRegTenure: '2 YRS CC',
//         PromationReg: 'REGPROMO',
//         MemRenewalTenure: '5 YRS SC',
//         PromationRenewal: 'REGPROMO',
//         PaymentMode: 'SAFRA $',
//         Status: 'Open',

//         InBatchRegistration: {

//             MemberID: 'A300000023',
//             NIRC: '941Z',

//             Last4NRIC: 'A965',
//             DateofBirth: '18-Jan-1979',
//         }

//     },

//     // SFS Member Registration
//     CustomerCreationPrincipal: {
//         RegistrationInformation: {
//             name: 'Test User ',
//             DOB: '24-Jan-1980',
//             gender: 'Male'
//         },
//         AddressInformation: {
//             postalCode: '569933',
//             address: undefined,
//             unitNumber: "200A",
//             POBOx: "102A",
//             myMailbox: "SGPost"
//         },
//         ContactInformation: {
//             handPhone: '+65 658 5896',
//             emailAddress: 'testuser',
//             emergencyContact: "+65 658 5893",
//             homeNumber: "NA",

//             preferredContactModeSelectAll: 'check',
//             preferredContactModeEmail: 'uncheck',
//             preferredContactModeMail: 'uncheck',
//             preferredContactModeSMS: 'uncheck',
//             preferredContactModeVoiceCall: 'uncheck',
//             preferredContactModePushNotification: 'uncheck',

//             //Consent Information
//             consentInformationMarketing: 'check',
//             consentInformationServiceNotification: 'check',
//             consentInformationTransactional: 'uncheck',

//         },
//         InterestAreaInformation: {
//             //Preferred SAFRA clubs
//             clubFaber: 'check',
//             clubPayoh: 'uncheck',
//             clubTampines: 'uncheck',
//             clubYishun: 'uncheck',
//             clubJurong: 'uncheck',
//             clubPunggol: 'uncheck',

//             //SAFRA Brands
//             brandEnergyOneGym: 'uncheck',
//             brandKidzAmaza: 'check',
//             brandFINS: 'uncheck',

//             //I am interested in
//             interestedAllEvents: 'uncheck',
//             interestedAllPeaks: 'check',
//             interestedFitness: 'check',
//             interestedChild: 'uncheck',
//             interestedLifelong: 'uncheck',
//             interestedLeisure: 'uncheck',
//             interestedFood: 'uncheck',
//             interestedShopping: 'check',
//             interestedTravel: 'check',
//             interestedMotoring: 'uncheck',
//             interestedHealth: 'uncheck',
//             interestedSAFRAPOINTS: 'check',

//             //SAFRA Newsletter
//             SAFRANewsletter: 'check',

//             //Interest Groups & Micro Clubs
//             groupAdventure: 'check',
//             groupBitez: 'uncheck',
//             groupCommService: 'uncheck',
//             groupCompetitive: 'uncheck',
//             groupDigimedia: 'uncheck',
//             groupEntrep: 'check',
//             groupFuse: 'uncheck',
//             groupGolf: 'uncheck',
//             groupMovie: 'uncheck',
//             groupPhotograph: 'check',
//             groupRunning: 'check',
//             groupShooting: 'uncheck',
//             groupSocialBadminton: 'check',
//             groupTech: 'check',
//             groupTravel: 'uncheck'
//         }
//     },

//     CustomerCreationDependentChild: {
//         RegistrationInformation: {
//             name: 'Test User',
//             MemberCategory: 'Dependent',
//             DependentType: 'Child',
//             Gender: 'Male',
//             DateofBirth: '1-Jan-2010',
//             Age: '12',
//             PrincipalType: 'AS',
//             MemberType: 'JH',
//             Nationality: 'Singaporean/PR',
//             MaritalStatus: 'Single',
//             CardType: 'SAFRA Classic Card',
//             InterestinDBSCard: 'N/A',
//             AllowtoRedeemSAFRAPoints: 'uncheck',
//             //ProfilePicture: 'test_images.png'
//         },
//         ContactInformation: {
//             handPhone: '+65 658 5896',
//             emailAddress: 'testuser',
//             emergencyContact: "+65 658 5893",
//             homeNumber: "NA",

//             preferredContactModeSelectAll: 'check',
//             preferredContactModeEmail: 'uncheck',
//             preferredContactModeMail: 'uncheck',
//             preferredContactModeSMS: 'uncheck',
//             preferredContactModeVoiceCall: 'uncheck',
//             preferredContactModePushNotification: 'uncheck',

//             //Consent Information
//             consentInformationMarketing: 'check',
//             consentInformationServiceNotification: 'check',
//             consentInformationTransactional: 'uncheck',

//         },
//         InterestAreaInformation: {
//             //Preferred SAFRA clubs
//             clubFaber: 'check',
//             clubPayoh: 'uncheck',
//             clubTampines: 'uncheck',
//             clubYishun: 'uncheck',
//             clubJurong: 'uncheck',
//             clubPunggol: 'uncheck',

//             //SAFRA Brands
//             brandEnergyOneGym: 'uncheck',
//             brandKidzAmaza: 'check',
//             brandFINS: 'uncheck',

//             //I am interested in
//             interestedAllEvents: 'uncheck',
//             interestedAllPeaks: 'check',
//             interestedFitness: 'check',
//             interestedChild: 'uncheck',
//             interestedLifelong: 'uncheck',
//             interestedLeisure: 'uncheck',
//             interestedFood: 'uncheck',
//             interestedShopping: 'check',
//             interestedTravel: 'check',
//             interestedMotoring: 'uncheck',
//             interestedHealth: 'uncheck',
//             interestedSAFRAPOINTS: 'check',

//             //SAFRA Newsletter
//             SAFRANewsletter: 'check',

//             //Interest Groups & Micro Clubs
//             groupAdventure: 'check',
//             groupBitez: 'uncheck',
//             groupCommService: 'uncheck',
//             groupCompetitive: 'uncheck',
//             groupDigimedia: 'uncheck',
//             groupEntrep: 'check',
//             groupFuse: 'uncheck',
//             groupGolf: 'uncheck',
//             groupMovie: 'uncheck',
//             groupPhotograph: 'check',
//             groupRunning: 'check',
//             groupShooting: 'uncheck',
//             groupSocialBadminton: 'check',
//             groupTech: 'check',
//             groupTravel: 'uncheck'
//         }
//     },

//     CustomerCreationDependentSpouse: {
//         RegistrationInformation: {
//             name: 'Test User',
//             MemberCategory: 'Dependent',
//             DependentType: 'Spouse',
//             DateofBirth: '24-Jan-1980',
//             gender: 'Female',
//             Age: '42',
//             PrincipalType: 'AS',
//             MemberType: 'JH',
//             Nationality: 'Singaporean/PR',
//             MaritalStatus: 'Single',
//             CardType: 'SAFRA Classic Card',
//             InterestinDBSCard: 'N/A',
//             AllowtoRedeemSAFRAPoints: 'uncheck',
//         },
//         AddressInformation: {
//             postalCode: '569933',
//             address: undefined,
//             unitNumber: "200A",
//             POBOx: "102A",
//             myMailbox: "SGPost"
//         },
//         ContactInformation: {
//             handPhone: '+65 658 5896',
//             emailAddress: 'testuser',
//             emergencyContact: "+65 658 5893",
//             conentInformationServiceNotification: 'check',
//             homeNumber: "NA",

//             preferredContactModeSelectAll: 'check',
//             preferredContactModeEmail: 'uncheck',
//             preferredContactModeMail: 'uncheck',
//             preferredContactModeSMS: 'uncheck',
//             preferredContactModeVoiceCall: 'uncheck',
//             preferredContactModePushNotification: 'uncheck',

//             //Consent Information
//             consentInformationMarketing: 'check',
//             consentInformationServiceNotification: 'check',
//             consentInformationTransactional: 'uncheck',

//         },
//         InterestAreaInformation: {
//             //Preferred SAFRA clubs
//             clubFaber: 'check',
//             clubPayoh: 'uncheck',
//             clubTampines: 'uncheck',
//             clubYishun: 'uncheck',
//             clubJurong: 'uncheck',
//             clubPunggol: 'uncheck',

//             //SAFRA Brands
//             brandEnergyOneGym: 'uncheck',
//             brandKidzAmaza: 'check',
//             brandFINS: 'uncheck',

//             //I am interested in
//             interestedAllEvents: 'uncheck',
//             interestedAllPeaks: 'check',
//             interestedFitness: 'check',
//             interestedChild: 'uncheck',
//             interestedLifelong: 'uncheck',
//             interestedLeisure: 'uncheck',
//             interestedFood: 'uncheck',
//             interestedShopping: 'check',
//             interestedTravel: 'check',
//             interestedMotoring: 'uncheck',
//             interestedHealth: 'uncheck',
//             interestedSAFRAPOINTS: 'check',

//             //SAFRA Newsletter
//             SAFRANewsletter: 'check',

//             //Interest Groups & Micro Clubs
//             groupAdventure: 'check',
//             groupBitez: 'uncheck',
//             groupCommService: 'uncheck',
//             groupCompetitive: 'uncheck',
//             groupDigimedia: 'uncheck',
//             groupEntrep: 'check',
//             groupFuse: 'uncheck',
//             groupGolf: 'uncheck',
//             groupMovie: 'uncheck',
//             groupPhotograph: 'check',
//             groupRunning: 'check',
//             groupShooting: 'uncheck',
//             groupSocialBadminton: 'check',
//             groupTech: 'check',
//             groupTravel: 'uncheck'
//         }
//     },

//     //Principal and dependent Payment

//     PrincipalPayment: {
//         PAYMENT_MODE: 'CHEQUE',
//         AMOUNT: '405.00',
//         POINT: '0',
//         ReferanceNo: '',
//         ReferanceDte: '',
//         Remaining_balance: 'S$ 0.00'
//     },
//     PrincipalDependentPayment: {
//         PAYMENT_MODE: 'CHEQUE',
//         AMOUNT: '571.00',
//         POINT: '0',
//         ReferanceNo: '',
//         ReferanceDte: '',
//         Remaining_balance: 'S$ 0.00'
//     },

//     CustomerCreationPrincipal: {
//         RegistrationInformation: {
//             name: 'Test User ',
//             DOB: '24-Jan-1980',
//             gender: 'Male'
//         },
//         AddressInformation: {
//             postalCode: '117606',
//             address: undefined,
//             unitNumber: "200A",
//             POBOx: "102A",
//             myMailbox: "SGPost"
//         },
//         ContactInformation: {
//             handPhone: '+65 658 5896',
//             emailAddress: 'testuser',
//             emergencyContact: "+65 658 5893",
//             homeNumber: "10234567",

//             preferredContactModeSelectAll: 'check',
//             preferredContactModeEmail: 'uncheck',
//             preferredContactModeMail: 'uncheck',
//             preferredContactModeSMS: 'uncheck',
//             preferredContactModeVoiceCall: 'uncheck',
//             preferredContactModePushNotification: 'uncheck',

//             //Consent Information
//             consentInformationMarketing: 'check',
//             consentInformationServiceNotification: 'check',
//             consentInformationTransactional: 'uncheck',

//         },
//         InterestAreaInformation: {
//             //Preferred SAFRA clubs
//             clubFaber: 'check',
//             clubPayoh: 'uncheck',
//             clubTampines: 'uncheck',
//             clubYishun: 'uncheck',
//             clubJurong: 'uncheck',
//             clubPunggol: 'uncheck',

//             //SAFRA Brands
//             brandEnergyOneGym: 'uncheck',
//             brandKidzAmaza: 'check',
//             brandFINS: 'uncheck',

//             //I am interested in
//             interestedAllEvents: 'uncheck',
//             interestedAllPeaks: 'check',
//             interestedFitness: 'check',
//             interestedChild: 'uncheck',
//             interestedLifelong: 'uncheck',
//             interestedLeisure: 'uncheck',
//             interestedFood: 'uncheck',
//             interestedShopping: 'check',
//             interestedTravel: 'check',
//             interestedMotoring: 'uncheck',
//             interestedHealth: 'uncheck',
//             interestedSAFRAPOINTS: 'check',

//             //SAFRA Newsletter
//             SAFRANewsletter: 'check',

//             //Interest Groups & Micro Clubs
//             groupAdventure: 'check',
//             groupBitez: 'uncheck',
//             groupCommService: 'uncheck',
//             groupCompetitive: 'uncheck',
//             groupDigimedia: 'uncheck',
//             groupEntrep: 'check',
//             groupFuse: 'uncheck',
//             groupGolf: 'uncheck',
//             groupMovie: 'uncheck',
//             groupPhotograph: 'check',
//             groupRunning: 'check',
//             groupShooting: 'uncheck',
//             groupSocialBadminton: 'check',
//             groupTech: 'check',
//             groupTravel: 'uncheck'
//         }
//     },

//     CustomerCreationDependentChild: {
//         RegistrationInformation: {
//             name: 'Test User',
//             MemberCategory: 'Dependent',
//             DependentType: 'Child',
//             Gender: 'Male',
//             DateofBirth: '1-Jan-2010',
//             Age: '12',
//             PrincipalType: 'AS',
//             MemberType: 'JH',
//             Nationality: 'Singaporean/PR',
//             MaritalStatus: 'Single',
//             CardType: 'SAFRA Classic Card',
//             InterestinDBSCard: 'N/A',
//             AllowtoRedeemSAFRAPoints: 'uncheck',
//             //ProfilePicture: 'test_images.png'
//         },
//         ContactInformation: {
//             handPhone: '+65 658 5896',
//             emailAddress: 'testuser',
//             emergencyContact: "+65 658 5893",
//             homeNumber: "122",

//             preferredContactModeSelectAll: 'check',
//             preferredContactModeEmail: 'uncheck',
//             preferredContactModeMail: 'uncheck',
//             preferredContactModeSMS: 'uncheck',
//             preferredContactModeVoiceCall: 'uncheck',
//             preferredContactModePushNotification: 'uncheck',

//             //Consent Information
//             consentInformationMarketing: 'check',
//             consentInformationServiceNotification: 'check',
//             consentInformationTransactional: 'uncheck',

//         },
//         InterestAreaInformation: {
//             //Preferred SAFRA clubs
//             clubFaber: 'check',
//             clubPayoh: 'uncheck',
//             clubTampines: 'uncheck',
//             clubYishun: 'uncheck',
//             clubJurong: 'uncheck',
//             clubPunggol: 'uncheck',

//             //SAFRA Brands
//             brandEnergyOneGym: 'uncheck',
//             brandKidzAmaza: 'check',
//             brandFINS: 'uncheck',

//             //I am interested in
//             interestedAllEvents: 'uncheck',
//             interestedAllPeaks: 'check',
//             interestedFitness: 'check',
//             interestedChild: 'uncheck',
//             interestedLifelong: 'uncheck',
//             interestedLeisure: 'uncheck',
//             interestedFood: 'uncheck',
//             interestedShopping: 'check',
//             interestedTravel: 'check',
//             interestedMotoring: 'uncheck',
//             interestedHealth: 'uncheck',
//             interestedSAFRAPOINTS: 'check',

//             //SAFRA Newsletter
//             SAFRANewsletter: 'check',

//             //Interest Groups & Micro Clubs
//             groupAdventure: 'check',
//             groupBitez: 'uncheck',
//             groupCommService: 'uncheck',
//             groupCompetitive: 'uncheck',
//             groupDigimedia: 'uncheck',
//             groupEntrep: 'check',
//             groupFuse: 'uncheck',
//             groupGolf: 'uncheck',
//             groupMovie: 'uncheck',
//             groupPhotograph: 'check',
//             groupRunning: 'check',
//             groupShooting: 'uncheck',
//             groupSocialBadminton: 'check',
//             groupTech: 'check',
//             groupTravel: 'uncheck'
//         }
//     },

//     CustomerCreationDependentSpouse: {
//         RegistrationInformation: {
//             name: 'Test User',
//             MemberCategory: 'Dependent',
//             DependentType: 'Spouse',
//             DateofBirth: '24-Jan-1990',
//             gender: 'Female',
//             Age: '42',
//             PrincipalType: 'AS',
//             MemberType: 'JH',
//             Nationality: 'Singaporean/PR',
//             MaritalStatus: 'Married',
//             CardType: 'SAFRA Classic Card',
//             InterestinDBSCard: 'N/A',
//             AllowtoRedeemSAFRAPoints: 'uncheck',
//         },
//         AddressInformation: {
//             postalCode: '569933',
//             address: undefined,
//             unitNumber: "200A",
//             POBOx: "102A",
//             myMailbox: "SGPost"
//         },
//         ContactInformation: {
//             handPhone: '+65 658 5896',
//             emailAddress: 'testuser',
//             emergencyContact: "+65 658 5893",
//             conentInformationServiceNotification: 'check',
//             homeNumber: "123",

//             preferredContactModeSelectAll: 'check',
//             preferredContactModeEmail: 'uncheck',
//             preferredContactModeMail: 'uncheck',
//             preferredContactModeSMS: 'uncheck',
//             preferredContactModeVoiceCall: 'uncheck',
//             preferredContactModePushNotification: 'uncheck',

//             //Consent Information
//             consentInformationMarketing: 'check',
//             consentInformationServiceNotification: 'check',
//             consentInformationTransactional: 'uncheck',

//         },
//         InterestAreaInformation: {
//             //Preferred SAFRA clubs
//             clubFaber: 'check',
//             clubPayoh: 'uncheck',
//             clubTampines: 'uncheck',
//             clubYishun: 'uncheck',
//             clubJurong: 'uncheck',
//             clubPunggol: 'uncheck',

//             //SAFRA Brands
//             brandEnergyOneGym: 'uncheck',
//             brandKidzAmaza: 'check',
//             brandFINS: 'uncheck',

//             //I am interested in
//             interestedAllEvents: 'uncheck',
//             interestedAllPeaks: 'check',
//             interestedFitness: 'check',
//             interestedChild: 'uncheck',
//             interestedLifelong: 'uncheck',
//             interestedLeisure: 'uncheck',
//             interestedFood: 'uncheck',
//             interestedShopping: 'check',
//             interestedTravel: 'check',
//             interestedMotoring: 'uncheck',
//             interestedHealth: 'uncheck',
//             interestedSAFRAPOINTS: 'check',

//             //SAFRA Newsletter
//             SAFRANewsletter: 'check',

//             //Interest Groups & Micro Clubs
//             groupAdventure: 'check',
//             groupBitez: 'uncheck',
//             groupCommService: 'uncheck',
//             groupCompetitive: 'uncheck',
//             groupDigimedia: 'uncheck',
//             groupEntrep: 'check',
//             groupFuse: 'uncheck',
//             groupGolf: 'uncheck',
//             groupMovie: 'uncheck',
//             groupPhotograph: 'check',
//             groupRunning: 'check',
//             groupShooting: 'uncheck',
//             groupSocialBadminton: 'check',
//             groupTech: 'check',
//             groupTravel: 'uncheck'
//         }
//     },
//     //Membership Renewal Advice
//     memberRenewlAdvice: {

//         Name: 'Auto-Test ' + Math.floor(Math.random() * 1000),
//         Description: 'Test User Description',
//         MemberCategory: 'Principal',
//         Gender: 'Male',
//         MemberTypeCode: 'AS',
//         MemberStatusReason: 'Renewal',
//         ExpiryDateFrom: '1-Jan-2010',
//         ExpiryDateTo: '1-Jan-2020',
//         DateofBirthFrom: '1-Jan-1970',
//         DateofBirthTo: '1-Feb-1990',
//         MemberCardType: 'SAFRA Classic Card',
//         PostalCode: '546080',
//         ZoneId: '1234',
//         AutoDeduction: 'IBG',
//         MaritalStatus: 'Single',
//         ExcludeBadAddress: 'CHECK',
//         ExcludeTerminatedInAdvance: 'CHECK',
//         ExcludeRegistrationInAdvance: 'CHECK'

//     },

//     // Member Status Reason Code
//     memstatcodedetail: {
//         ReasonCode: 'New',
//         MemberStatus: 'Active',
//         Comeback: 'Not Allowed',
//         ComebackList: 'NotAllowed',
//         Remark: 'When membership is expired'

//     },
//     memstatcodedetailUpated: {
//         ReasonCode: 'New',
//         MemberStatus: 'Active',
//         Comeback: 'Not Allowed',
//         ComebackList: 'NotAllowed',
//         Remark: 'Updated'


//     },

//     //Withrawal Of Consent Form
//     PersonalInformation: {

//         Nationality: 'check',
//         FullName: 'check',
//         Gender: 'check',
//         MartailStatus: 'check',
//         DOB: 'check',
//         ProfilePicture: 'uncheck'
//     },

//     ContactInformation: {

//         HandPhones: 'uncheck',
//         HomeNumber: 'check',
//         EmergencyContact: 'uncheck',
//         EmailAddress: 'check',
//         MailingAddress: 'check'
//     }



// }
// export default data