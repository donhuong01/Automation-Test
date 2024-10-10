const data = {

    AccommodationSettingGeneral: {
        NumOfPhotoUpload: '1',
        MaxSize: '100',
        CancellationIsNotAllowedInMonth: '1',
        CancellationIsNotAllowedInDay: '30',
        AccoTransactionCancelAfter: '10',
        AccoBookingNotificationBeforeStart: '1'
    },
    AccomodationSettingOperatingPeriod: {
        OperatingPeriodName: 'Auto-test' + Math.floor(Math.random() * 10),
    },
    AccommodationType: {
        AccTypeName: 'Auto-Accomodation' + Math.floor(Math.random() * 100),
        LifeStyleGroup: 'Enrichment',
        FABSGroup: 'Contest',
        ClubClassification: 'Fitness & Leisure',
        SMCClassification: 'Fitness & Adventure-SMC',
        AccessMode: 'Online',
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
        AllowReservation: 'CHECK',
        SendNotification: 'CHECK',
        PermitTemplateCode: '',
        AuthorisationPermit: '',
        ChargeRateName: 'Accommodation',
        StartDate: '01-Feb-2023',
        location: 'SAFRA Jurong',
        EndDate: '30-Dec-2023',
        TransactionType: 'Booking',
        CalculationType: 'Per Booking',
        AmountType: 'Fixed Value',
        BookingAdminFeeProduct: '',
        ReservationAdminFeeProduct: '',
        CancellationAdminFeeProduct: '',
    },

    // Data for Accommodation Closre
    AccommodationClosure: {

        AccommodationType: 'Villa Type 002',
        Reason: 'Testing Accommodation ',


    } 
}
export default data