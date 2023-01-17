const data = {
    CalendarName: 'Auto Test ',
    Status: 'Draft',
    StatusPendingApproval: 'Pending Approval',
    Approved: 'Approved',
    RecordStatus: 'Inactive',

    StartDate: "5-Jun-1996",
    EndDate: "23-Jun-2008",

    HolidayDates: {
        HolidayName1: 'Chinese New Year Day 1',
        HolidayName2: 'Chrismis Day',
        HoildayDate1: '18-Feb-2022',
        HoildayDate2: '24-Dec-2023',


    },
    FacilityBookingDetails: {
        FacilityType: 'Booking Test 111',
        slot: '',
        ChargeType: 'Rate 111',
        Amount: '25',
        Reason: 'Testing',
        FacilityName: 'Testing-Facility ' + Math.floor(Math.random() * 1000),
        Location: 'SAFRA Jurong',
    },

    Period: {
        PeriodName1: '2022 Term 1 Sch Day',
        PeriodStartDate1: '31-Dec-2022',
        PeriodEndDate1: '12-Mar-2023',
        PeriodName2: '2022 Term 2 Sch Day',
        PeriodStartDate2: '22-Mar-2022',
        PeriodEndDate2: '28-May-2023',

        Description: 'Test Period Description'
    },

    // Operating Period Detail
    OperatingPeriodDetail: {
        operatingPeriodName: '1st Period 2022',
        Status: 'Pending Approval',
        RecordStatus: 'Inactive',

        addOperatingHours: {
            typeOfOperatingDay: 'Sunday',

            operatingHourRow1: {
                startTime: '12:30 AM',
                endTime: '1:00 AM',
                typeOfPeakPeriod: 'Non-Peak',
                isClosedForBooking: 'check',
                ignoreRenderSlotLength: 'check'
            },

            operatingHours: [
                {
                    startTime: '4:30 PM',
                    row: 2,
                    endTime: '8:00 PM',
                    typeOfPeakPeriod: 'Peak',
                    isClosedForBooking: 'check',
                    ignoreRenderSlotLength: 'uncheck'
                },
                {
                    startTime: '8:30 AM',
                    row: 3,
                    endTime: '10:00 AM',
                    typeOfPeakPeriod: 'Super Holiday',
                    isClosedForBooking: 'uncheck',
                    ignoreRenderSlotLength: 'check'
                }
            ]
        },


        operatingPeriodDetailTable: [
            {
                typeOfOperatingDay: 'Monday',
                operatingHours: ''
            },
            {
                typeOfOperatingDay: 'Tuesday',
                operatingHours: ''
            },
            {
                typeOfOperatingDay: 'Wednesday',
                operatingHours: ''
            }
        ],

        operatingHours: {
            typeOfOperatingDay: 'Sunday',
            operatingHoursTable: [
                {
                    startTime: '12:30 AM',
                    endTime: '1:00 AM',
                    typeOfPeakPeriod: 'Non-Peak',
                    isClosedForBooking: 'check',
                    ignoreRenderSlotLength: 'check'
                }
            ]
        },

        removeOperatingHour: {
            operatingHour: '1:30 PM'
        }
    },

    // Facility General Settings
    FacilityBookingReminder: 0,
    BookingEarn: 'check',
    GroupBooking: 'uncheck',
    ReservationEarn: 'check',

    NumOfPhotoGraphs: '1',
    MaximumFileSize: '1000',

    FormatAllowed: 'png',
    TransferButton: 'Transfer To',

    CancellationNotAllowedMonths: '1',
    CancellationNotAllowedDays: '30',
    DataBackUp: '0',

    ProductMappingTab: {

        BookingFeeItem: 'Mock Product 2'
    },


    // Facility Setup Detail Form
    FacilityDetail: {

        DetailsTab: {
            FacilityInfo: {
                FacilityName: 'Auto-Test' + Math.floor(Math.random() * 1000),
                ActivationDate: '23-Nov-2023',
                UploadPhotos: 'Sample_Images.jpeg',
                FacilityType: 'Test Type 2022',
                Location: 'SAFRA Jurong',
                FormatsAllowed: 'check',
                ResourceName: 'Auto-Test-Resource' + Math.floor(Math.random() * 1000),
                ChargeName: 'Auto-Test-Charge-Name',
                TransactionType: 'Booking',
                CalculationType: 'Per Booking',
                AmountType: 'Percentage',
                CustomerCategory: 'AAdventurers33',
                ProductNo: 'FAL-1000001',
                Item: 'jpeg',
                TransferTo: 'Transfer To'
            },

            OperatingPeriods: {

            },

            AssociatedResources: {
                HasResources: ''
            }
        },

        GroupBookingTab: {
            EnableGroupBooking: 'check',
            BallotType: 'Manual Ballot',
            BallotBefore: '9',
            GroupBookingIsAllowed: '5',
            GroupBookingIsConslidated: '9',
            BallotType: 'Manual Ballot',
            BallotBefore: '9',
            AccessMode: 'Mobile',
            CustomerCategoryName: 'Kickass',
        },

        ChargeRateTab: {
            ChargeRateName: 'Sample',

            ChargeRateListing: [
                {
                    chargeRateName: '',
                    startDate: '',
                    endDate: ''
                },
                {
                    chargeRateName: '',
                    startDate: '',
                    endDate: ''
                }
            ],

            ChargeRateLink: '',
            ChargeRateItem: 'Test Charge rate'
        },

        ProductMappingTab: {

            ProductNumber: 'FAL-1000001',
            ProductName: 'Facility Booking Fee',
            SearchName: 'Facility Booking Fee',
        },

        AdditionalInfoTab: {
            Description: 'Test Description',
            SpecialRemark: 'Test Special Remark',
            ContactPersonInfo: 'Test Contact Information',
            EnableIndemnityWaiver: 'check',
            IndemnityText: 'Test Indemnity Text',
            EnableTermAndCondition: 'check',
            TermAndConditionsText: 'Test Term and Conditions',
        },

        AttachmentTab: {
            UploadFile: 'Test sample.pdf'

        }
    },

    //Facility Type
    FacilityTypeDetail: {
        FacilityName: 'Auto-Test ' + Math.floor(Math.random() * 1000),
        CalenderName: 'BBQ PIT - 2022 (Eric)',
        ChargeRateName: 'Testing CR',
        Location: 'SAFRA Jurong',
        ChargeTypeName: 'Charge Type Name',
        Transaction: 'Booking',
        Calculation: 'Per Booking',
        Amount: 'Fixed Value',
        CategoryName: 'TP - SAFRA PHOTO CLUB (TERM) Member',
        CategoryNumber: '3',
        ProductName: 'Facility Booking Fee',
        AccessMode: 'Online',
        CustomerCategory: 'All Customer Category',
        Status: 'Pending Approval',

    },
    CategorySection: {

        Category:"SWIMMING POOL",
        LifestyleGroup:"Entertainment",
        FABSGroup:"IG Activities",
        ClubClassification:"Family & Enrichment",
        SMCClassification:"Family & Enrichment-SMC"
    }

}

export default data