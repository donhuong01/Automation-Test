const data = [

    //Promotion with Standard Promo for Facility


    //Setup Standard Promo for Facility on Paid Period with ALL Item Option, Discount, All Customer Category.
    {
        PromotionTitle: 'Promo-Facility' + Math.floor(Math.random() * 100098),
        BasicType: 'Standard',
        PromoCode: 'PFac' + Math.floor(Math.random() * 100098),
        UtilizeLimitPerCustomer: '99',
        MaxCap: '99',
        ValidityStartDate: '15-Feb-2023',
        ValidityExpiryDate: '20-Feb-2051',
        Remark: 'Test',

        PromotionType: 'Paid Period',
        StartDate: '15-Feb-2023',
        EndDate: '15-Feb-2050',
        ItemCate: 'Facility',
        Quantity: '99',
        BenefitType: 'Discount',
        FixedDollarRate: '6',
        AgeRangFrom: '10',
        AgeRangTo: '80',
        CustomerCateg: 'All Customer Category',
        ApplicableMemberID: '',
        ApplicableSourceChannel: 'SAFRA Jurong',
        Approval: 'Approve',
        BundlePromotion: 'No',
        MemberId: 'A300002417',
        FacilityType: 'Facility Type 2024', // 2023 FA
        location: 'SAFRA Jurong',
        FacilitySetup: 'Group Ballot 2023', // FA-2023
        BookingSlot: 'Available (09:00 am - 09:30 am)'
    },


    //Setup Standard Promo for Facility on Book Period with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Facility' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Standard',
    //     PromoCode: 'PFac' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '15-Feb-2023',
    //     ValidityExpiryDate: '20-Feb-2051',
    //     Remark: 'Test',

    //     PromotionType: 'Book Period',
    //     StartDate: '15-Feb-2023',
    //     EndDate: '15-Feb-2050',
    //     ItemCate: 'Facility',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA Jurong',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',
    //     MemberId: 'A30000022',
    // FacilityType: '',
    // location: '',
    // FacilitySetup: '',
    // BookingSlot: ''
    // },


    // //Setup Standard Promo for Facility on Early Bird with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Facility' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Standard',
    //     PromoCode: 'PFac' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '15-Feb-2023',
    //     ValidityExpiryDate: '20-Feb-2051',
    //     Remark: 'Test',

    //     PromotionType: 'Early Bird',
    //     StartDate: '15-Feb-2023',
    //     EndDate: '15-Feb-2050',
    //     ItemCate: 'Facility',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA Jurong',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',
    //     MemberId: 'A30000022',
    // FacilityType: '',
    // location: '',
    // FacilitySetup: '',
    // BookingSlot: ''
    // },
    // //Setup Standard Promo for Facility on Birthday Month with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Facility' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Standard',
    //     PromoCode: 'PFac' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '15-Feb-2023',
    //     ValidityExpiryDate: '20-Feb-2051',
    //     Remark: 'Test',

    //     PromotionType: 'Birthday Month',
    //     StartDate: '15-Feb-2023',
    //     EndDate: '15-Feb-2050',
    //     ItemCate: 'Facility',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA Jurong',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',
    //     MemberId: '',
    // FacilityType: '',
    //     location: '',
    //     FacilitySetup: '',
    //     BookingSlot:''
    // },
    // //Setup Standard Promo for Facility on Birthday with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Facility' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Standard',
    //     PromoCode: 'PFac' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '15-Feb-2023',
    //     ValidityExpiryDate: '20-Feb-2051',
    //     Remark: 'Test',

    //     PromotionType: 'Birthday',
    //     StartDate: '15-Feb-2023',
    //     EndDate: '15-Feb-2050',
    //     ItemCate: 'Facility',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA Jurong',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',
    //     MemberId: '',
    // FacilityType: '',
    //     location: '',
    //     FacilitySetup: '',
    //     BookingSlot:''

    // },




    // // Promotion With Promo Code for Facility



    //Setup Promo Code for Facility on Paid Period with ALL Item Option, Discount, All Customer Category.
    {
        PromotionTitle: 'Promo-Facility' + Math.floor(Math.random() * 100098),
        BasicType: 'Promo Code',
        PromoCode: 'PFac' + Math.floor(Math.random() * 100098),
        UtilizeLimitPerCustomer: '99',
        MaxCap: '99',
        ValidityStartDate: '15-Feb-2023',
        ValidityExpiryDate: '20-Feb-2051',
        Remark: 'Test',

        PromotionType: 'Paid Period',
        StartDate: '15-Feb-2023',
        EndDate: '15-Feb-2050',
        ItemCate: 'Facility',
        Quantity: '99',
        BenefitType: 'Discount',
        FixedDollarRate: '6',
        AgeRangFrom: '10',
        AgeRangTo: '80',
        CustomerCateg: 'All Customer Category',
        ApplicableMemberID: '',
        ApplicableSourceChannel: 'SAFRA Jurong',
        Approval: 'Approve',
        BundlePromotion: 'No',
        MemberId: 'A300002417',
        FacilityType: 'Facility Type 2024', // 2023 FA
        location: 'SAFRA Jurong',
        FacilitySetup: 'Group Ballot 2023', // FA-2023
        BookingSlot: 'Available (09:00 am - 09:30 am)'
    },


    // //Setup Promo Code for Facility on Book Period with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Facility' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Promo Code',
    //     PromoCode: 'PFac' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '15-Feb-2023',
    //     ValidityExpiryDate: '20-Feb-2051',
    //     Remark: 'Test',

    //     PromotionType: 'Book Period',
    //     StartDate: '15-Feb-2023',
    //     EndDate: '15-Feb-2050',
    //     ItemCate: 'Facility',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA Jurong',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',
    //     MemberId: '',
    // FacilityType: '',
    //     location: '',
    //     FacilitySetup: '',
    //     BookingSlot:''

    // },


    // //Setup Promo Code for Facility on Early Bird with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Facility' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Promo Code',
    //     PromoCode: 'PFac' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '15-Feb-2023',
    //     ValidityExpiryDate: '20-Feb-2051',
    //     Remark: 'Test',

    //     PromotionType: 'Early Bird',
    //     StartDate: '15-Feb-2023',
    //     EndDate: '15-Feb-2050',
    //     ItemCate: 'Facility',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA Jurong',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',
    //     MemberId: '',
    // FacilityType: '',
    //     location: '',
    //     FacilitySetup: '',
    //     BookingSlot:''

    // },
    // //Setup Promo Code for Facility on Birthday Month with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Facility' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Promo Code',
    //     PromoCode: 'PFac' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '15-Feb-2023',
    //     ValidityExpiryDate: '20-Feb-2051',
    //     Remark: 'Test',

    //     PromotionType: 'Birthday Month',
    //     StartDate: '15-Feb-2023',
    //     EndDate: '15-Feb-2050',
    //     ItemCate: 'Facility',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA Jurong',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',
    //     MemberId: '',
    // FacilityType: '',
    //     location: '',
    //     FacilitySetup: '',
    //     BookingSlot:''

    // },
    // //Setup Promo Code for Facility on Birthday with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Facility' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Promo Code',
    //     PromoCode: 'PFac' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '15-Feb-2023',
    //     ValidityExpiryDate: '20-Feb-2051',
    //     Remark: 'Test',

    //     PromotionType: 'Birthday',
    //     StartDate: '15-Feb-2023',
    //     EndDate: '15-Feb-2050',
    //     ItemCate: 'Facility',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA Jurong',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',
    //     MemberId: '',
    // FacilityType: '',
    //     location: '',
    //     FacilitySetup: '',
    //     BookingSlot:''
    // },



    // //Promotion with Standard Promo for Facility Type


    // //Setup Standard Promo for Facility Type on Paid Period with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Facility-Type' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Standard',
    //     PromoCode: 'PFacT' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '15-Feb-2023',
    //     ValidityExpiryDate: '20-Feb-2051',
    //     Remark: 'Test',

    //     PromotionType: 'Paid Period',
    //     StartDate: '15-Feb-2023',
    //     EndDate: '15-Feb-2050',
    //     ItemCate: 'Facility Type',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA Jurong',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',
    //     MemberId: 'A30000022',
    // FacilityType: '',
    //     location: '',
    //     FacilitySetup: '',
    //     BookingSlot:''
    // },


    // //Setup Standard Promo for Facility Type on Book Period with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Facility-Type' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Standard',
    //     PromoCode: 'PFacT' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '15-Feb-2023',
    //     ValidityExpiryDate: '20-Feb-2051',
    //     Remark: 'Test',

    //     PromotionType: 'Book Period',
    //     StartDate: '15-Feb-2023',
    //     EndDate: '15-Feb-2050',
    //     ItemCate: 'Facility Type',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA Jurong',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',
    //     MemberId: 'A30000022',
    // FacilityType: '',
    //     location: '',
    //     FacilitySetup: '',
    //     BookingSlot:''
    // },


    // //Setup Standard Promo for Facility Type on Early Bird with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Facility-Type' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Standard',
    //     PromoCode: 'PFacT' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '15-Feb-2023',
    //     ValidityExpiryDate: '20-Feb-2051',
    //     Remark: 'Test',

    //     PromotionType: 'Early Bird',
    //     StartDate: '15-Feb-2023',
    //     EndDate: '15-Feb-2050',
    //     ItemCate: 'Facility Type',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA Jurong',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',
    //     MemberId: 'A30000022',
    // FacilityType: '',
    //     location: '',
    //     FacilitySetup: '',
    //     BookingSlot:''
    // },
    // //Setup Standard Promo for Facility Type on Birthday Month with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Facility-Type' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Standard',
    //     PromoCode: 'PFacT' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '15-Feb-2023',
    //     ValidityExpiryDate: '20-Feb-2051',
    //     Remark: 'Test',

    //     PromotionType: 'Birthday Month',
    //     StartDate: '15-Feb-2023',
    //     EndDate: '15-Feb-2050',
    //     ItemCate: 'Facility Type',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA Jurong',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',
    //     MemberId: '',
    // FacilityType: '',
    //     location: '',
    //     FacilitySetup: '',
    //     BookingSlot:''
    // },
    // //Setup Standard Promo for Facility Type on Birthday with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Facility-Type' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Standard',
    //     PromoCode: 'PFacT' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '15-Feb-2023',
    //     ValidityExpiryDate: '20-Feb-2051',
    //     Remark: 'Test',

    //     PromotionType: 'Birthday',
    //     StartDate: '15-Feb-2023',
    //     EndDate: '15-Feb-2050',
    //     ItemCate: 'Facility Type',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA Jurong',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',
    //     MemberId: '',
    // FacilityType: '',
    //     location: '',
    //     FacilitySetup: '',
    //     BookingSlot:''

    // },




    // // Promotion With Promo Code for Facility Type



    // //Setup Promo Code for Facility Type on Paid Period with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Facility-Type' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Promo Code',
    //     PromoCode: 'PFacT' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '15-Feb-2023',
    //     ValidityExpiryDate: '20-Feb-2051',
    //     Remark: 'Test',

    //     PromotionType: 'Paid Period',
    //     StartDate: '15-Feb-2023',
    //     EndDate: '15-Feb-2050',
    //     ItemCate: 'Facility Type',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA Jurong',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',
    //     MemberId: '',
    // FacilityType: '',
    //     location: '',
    //     FacilitySetup: '',
    //     BookingSlot:''
    // },


    // //Setup Promo Code for Facility on Book Period with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Facility-Type' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Promo Code',
    //     PromoCode: 'PFacT' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '15-Feb-2023',
    //     ValidityExpiryDate: '20-Feb-2051',
    //     Remark: 'Test',

    //     PromotionType: 'Book Period',
    //     StartDate: '15-Feb-2023',
    //     EndDate: '15-Feb-2050',
    //     ItemCate: 'Facility Type',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA Jurong',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',
    //     MemberId: '',
    // FacilityType: '',
    //     location: '',
    //     FacilitySetup: '',
    //     BookingSlot:''

    // },


    // //Setup Promo Code for Facility on Early Bird with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Facility-Type' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Promo Code',
    //     PromoCode: 'PFacT' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '15-Feb-2023',
    //     ValidityExpiryDate: '20-Feb-2051',
    //     Remark: 'Test',

    //     PromotionType: 'Early Bird',
    //     StartDate: '15-Feb-2023',
    //     EndDate: '15-Feb-2050',
    //     ItemCate: 'Facility Type',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA Jurong',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',
    //     MemberId: '',
    // FacilityType: '',
    //     location: '',
    //     FacilitySetup: '',
    //     BookingSlot:''

    // },
    // //Setup Promo Code for Facility on Birthday Month with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Facility-Type' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Promo Code',
    //     PromoCode: 'PFacT' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '15-Feb-2023',
    //     ValidityExpiryDate: '20-Feb-2051',
    //     Remark: 'Test',

    //     PromotionType: 'Birthday Month',
    //     StartDate: '15-Feb-2023',
    //     EndDate: '15-Feb-2050',
    //     ItemCate: 'Facility Type',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA Jurong',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',
    //     MemberId: '',
    // FacilityType: '',
    //     location: '',
    //     FacilitySetup: '',
    //     BookingSlot:''

    // },
    // //Setup Promo Code for Facility Type on Birthday with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Facility-Type' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Promo Code',
    //     PromoCode: 'PFacT' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '15-Feb-2023',
    //     ValidityExpiryDate: '20-Feb-2051',
    //     Remark: 'Test',

    //     PromotionType: 'Birthday',
    //     StartDate: '15-Feb-2023',
    //     EndDate: '15-Feb-2050',
    //     ItemCate: 'Facility Type',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA Jurong',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',
    //     MemberId: '',
    // FacilityType: '',
    //     location: '',
    //     FacilitySetup: '',
    //     BookingSlot:''
    // },



]
export default data