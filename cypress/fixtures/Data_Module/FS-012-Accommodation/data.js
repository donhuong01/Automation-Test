const data = {

    AccommodationSettingGeneral: {
        NumOfPhotoUpload: '3',
        MaxSize: '300',
        CancellationIsNotAllowedInMonth: '1',
        CancellationIsNotAllowedInDay: '30',
        AccoTransactionCancelAfter: '3',
        AccoBookingNotificationBeforeStart: '5'
    },
    AccomodationSettingOperatingPeriod: {
        OperatingPeriodName: 'Auto-test' + Math.floor(Math.random() * 12340),
    },
    AccommodationType: {
        AccTypeName: 'Auto-Accomodation' + Math.floor(Math.random() * 100),
        LifeStyleGroup: 'Enrichment',
        FABSGroup: 'Contest',
        ClubClassification: 'Fitness & Leisure',
        SMCClassification: 'Fitness & Adventure-SMC',
        AccessMode: 'Online Portal',
        CustomerCateName: 'All Customer Category',
        CustomerCateg: 'All Customer Category',
        EnableHorizone: 'CHECK',
        NewBookingStartDate: '1',
        ButWithinMonth: '1',
        ButWithinDays: '5',
        CustomerAllowdMonth: '1',
        CustomerAllowdDays: '3',
        PeakEnableQouta: 'CHECK',
        PeakQoutaFor: 'Per Week',
        PeakMaximumSlotHour: '3',
        NonPeakEnableQouta: 'CHECK',
        NonPeakQoutaFor: 'Per Week',
        NonPeakMaximumSlotHour: '4',
        EnableSlotNo: 'CHECK',
        MaxNoOFAccommodation: '5',
        AReservationCanBeHoldBy: '2',
        AllowReservation: 'CHECK',
        SendNotification: 'CHECK',
        PermitTemplateCode: 'Accommodation Permit Template',
        AuthorisationPermit: 'Accommodation Authorization Permit template',
        ChargeRateName: 'Accommodation',
        StartDate: '01-Feb-2024',
        location: 'SAFRA HQ',
        EndDate: '30-Dec-2024',
        TransactionType: 'Booking',
        CalculationType: 'Per Booking',
        AmountType: 'Fixed Value',
        CalendarName: 'QA-DEMO-Calendar-2024',
        OperatingPeriodName: 'QA-DEMO-OP-2024',
        BookingAdminFeeProduct: 'SRP Prod 001',
        ReservationAdminFeeProduct: 'SRP Prod 002',
        CancellationAdminFeeProduct: 'SRP Prod 003',
    },

    AccommodationSetup: {

        AccommodationName: 'Auto-Acco' + Math.floor(Math.random() * 101230),
        ActivationDate: '21-Feb-2024',
        AccommodationType: 'Accommodation Test 1',
        MaximumOccupancy: '5',
        ProductName: 'Villa Prod 01',
        ChargeRateName: 'Booking',
        StartDate: '21-Feb-2024',
        location: 'SAFRA Jurong',
        EndDate: '21-Dec-2024',
        ChargeName: 'Booking',
        TransactionType: 'Booking',
        CalculationType: 'Per Booking',
        AmountType: 'Percentage',
        CustomerCategory: 'All Customer Category',
        Description: 'Testing Description',
        SpecialRemark: 'Special Remarks',
        ContactPersonInfo: 'Testing Info',
        IndemnityText: 'Indemnity Text',
        TermConditionText: 'Term and Conditions',
        UploadFile: 'Test sample.pdf'
    },

    // Data for Accommodation Closre
    AccommodationClosure: {

        AccommodationType: 'Auto-Accomodation78',
        Reason: 'Testing Accommodation ',
        PermanentTermination:'Yes',
        StartDate: '15-May-2023',
        StartTime:'12:00 AM',
        EndDate:'30-May-2023',
        EndTime:'12:00 AM',

        //Add Recuring Date
        AddRecurringDate:'Yes',
        RecurringType:'Weekly',
        RecurEvery:'2',
        RecurStartDate:'13-Apr-2023',
        TimeFrom:'12:00 AM',
        TimeTo:'10:00 AM',
        EndAfter:'Occurrences',


    } 
}
export default data