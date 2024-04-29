const data = [

    // Promotion For InHouse Sale


    //Setup Standard Promo for InHouse Sale on Paid Period with ALL Item Option, Discount, All Customer Category.
    {
        PromotionTitle: 'Promo-InH' + Math.floor(Math.random() * 100098),
        BasicType: 'Standard',
        PromoCode: 'PInH' + Math.floor(Math.random() * 100098),
        UtilizeLimitPerCustomer: '99',
        MaxCap: '99',
        ValidityStartDate: '26-Apr-2023',
        ValidityExpiryDate: '26-Apr-2024',
        Remark: 'Test',

        PromotionType: 'Paid Period',
        StartDate: '26-Apr-2023',
        EndDate: '26-Apr-2024',
        ItemCate: 'In-house Sale',
        Quantity: '99',
        BenefitType: 'Discount',
        FixedDollarRate: '6',
        AgeRangFrom: '10',
        AgeRangTo: '80',
        CustomerCateg: 'All Customer Category',
        ApplicableMemberID: '',
        ApplicableSourceChannel: 'SAFRA HQ',
        Approval: 'Approve',
        BundlePromotion: 'No',

        MemberId: 'A30000626'
    },


    // //Setup Standard Promo for InHouse Sale on Book Period with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-InH' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Standard',
    //     PromoCode: 'PInH' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '26-Apr-2023',
    //     ValidityExpiryDate: '26-Apr-2024',
    //     Remark: 'Test',

    //     PromotionType: 'Book Period',
    //     StartDate: '26-Apr-2023',
    //     EndDate: '26-Apr-2024',
    //     ItemCate: 'In-house Sale',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA HQ',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',

    //    MemberId : ''
    // },


    // //Setup Standard Promo for InHouse Sale on Early Bird with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-InH' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Standard',
    //     PromoCode: 'PInH' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '26-Apr-2023',
    //     ValidityExpiryDate: '26-Apr-2024',
    //     Remark: 'Test',

    //     PromotionType: 'Early Bird',
    //     StartDate: '26-Apr-2023',
    //     EndDate: '26-Apr-2024',
    //     ItemCate: 'In-house Sale',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA HQ',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',

    //     MemberId : ''
    // },
    // //Setup Standard Promo for InHouse Sale on Birthday Month with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-InH' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Standard',
    //     PromoCode: 'PInH' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '26-Apr-2023',
    //     ValidityExpiryDate: '26-Apr-2024',
    //     Remark: 'Test',

    //     PromotionType: 'Birthday Month',
    //     StartDate: '26-Apr-2023',
    //     EndDate: '26-Apr-2024',
    //     ItemCate: 'In-house Sale',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA HQ',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',

    //     MemberId : ''
    // },
    // //Setup Standard Promo for InHouse Sale on Birthday with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-InH' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Standard',
    //     PromoCode: 'PInH' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '26-Apr-2023',
    //     ValidityExpiryDate: '26-Apr-2024',
    //     Remark: 'Test',

    //     PromotionType: 'Birthday',
    //     StartDate: '26-Apr-2023',
    //     EndDate: '26-Apr-2024',
    //     ItemCate: 'In-house Sale',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA HQ',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',

    //     MemberId : ''
    // },




    // Promotion With Promo Code 



    //Setup Promo Code for InHouse Sale on Paid Period with ALL Item Option, Discount, All Customer Category.
    {
        PromotionTitle: 'Promo-InH' + Math.floor(Math.random() * 100098),
        BasicType: 'Promo Code',
        PromoCode: 'PInH' + Math.floor(Math.random() * 100098),
        UtilizeLimitPerCustomer: '99',
        MaxCap: '99',
        ValidityStartDate: '26-Apr-2023',
        ValidityExpiryDate: '26-Apr-2024',
        Remark: 'Test',

        PromotionType: 'Paid Period',
        StartDate: '26-Apr-2023',
        EndDate: '26-Apr-2024',
        ItemCate: 'In-house Sale',
        Quantity: '99',
        BenefitType: 'Discount',
        FixedDollarRate: '6',
        AgeRangFrom: '10',
        AgeRangTo: '80',
        CustomerCateg: 'All Customer Category',
        ApplicableMemberID: '',
        ApplicableSourceChannel: 'SAFRA HQ',
        Approval: 'Approve',
        BundlePromotion: 'No',

        MemberId : ''
    },


    // //Setup Promo Code for InHouse Sale on Book Period with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-InH' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Promo Code',
    //     PromoCode: 'PInH' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '26-Apr-2023',
    //     ValidityExpiryDate: '26-Apr-2024',
    //     Remark: 'Test',

    //     PromotionType: 'Book Period',
    //     StartDate: '26-Apr-2023',
    //     EndDate: '26-Apr-2024',
    //     ItemCate: 'In-house Sale',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA HQ',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',

    //    MemberId : ''
    // },


    // //Setup Promo Code for InHouse Sale on Early Bird with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-InH' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Promo Code',
    //     PromoCode: 'PInH' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '26-Apr-2023',
    //     ValidityExpiryDate: '26-Apr-2024',
    //     Remark: 'Test',

    //     PromotionType: 'Early Bird',
    //     StartDate: '26-Apr-2023',
    //     EndDate: '26-Apr-2024',
    //     ItemCate: 'In-house Sale',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA HQ',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',

    //     MemberId : ''
    // },
    // //Setup Promo Code for InHouse Sale on Birthday Month with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-InH' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Promo Code',
    //     PromoCode: 'PInH' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '26-Apr-2023',
    //     ValidityExpiryDate: '26-Apr-2024',
    //     Remark: 'Test',

    //     PromotionType: 'Birthday Month',
    //     StartDate: '26-Apr-2023',
    //     EndDate: '26-Apr-2024',
    //     ItemCate: 'In-house Sale',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA HQ',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',

    //     MemberId : ''
    // },
    // //Setup Promo Code for InHouse Sale on Birthday with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-InH' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Promo Code',
    //     PromoCode: 'PInH' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '26-Apr-2023',
    //     ValidityExpiryDate: '26-Apr-2024',
    //     Remark: 'Test',

    //     PromotionType: 'Birthday',
    //     StartDate: '26-Apr-2023',
    //     EndDate: '26-Apr-2024',
    //     ItemCate: 'In-house Sale',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA HQ',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',

    //    MemberId : ''
    // },





    //Promotion For Merchandise


    //Setup Standard Promo for Merchandise on Paid Period with ALL Item Option, Discount, All Customer Category.
    {
        PromotionTitle: 'Promo-Merchandise' + Math.floor(Math.random() * 100098),
        BasicType: 'Standard',
        PromoCode: 'PInH' + Math.floor(Math.random() * 100098),
        UtilizeLimitPerCustomer: '99',
        MaxCap: '99',
        ValidityStartDate: '26-Apr-2023',
        ValidityExpiryDate: '26-Apr-2024',
        Remark: 'Test',

        PromotionType: 'Paid Period',
        StartDate: '26-Apr-2023',
        EndDate: '26-Apr-2024',
        ItemCate: 'Merchandise',
        Quantity: '99',
        BenefitType: 'Discount',
        FixedDollarRate: '6',
        AgeRangFrom: '10',
        AgeRangTo: '80',
        CustomerCateg: 'All Customer Category',
        ApplicableMemberID: '',
        ApplicableSourceChannel: 'SAFRA HQ',
        Approval: 'Approve',
        BundlePromotion: 'No',

        MemberId: 'A30001556'
    },


    // //Setup Standard Promo for Merchandise on Book Period with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Merchandise' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Standard',
    //     PromoCode: 'PInH' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '26-Apr-2023',
    //     ValidityExpiryDate: '26-Apr-2024',
    //     Remark: 'Test',

    //     PromotionType: 'Book Period',
    //     StartDate: '26-Apr-2023',
    //     EndDate: '26-Apr-2024',
    //     ItemCate: 'Merchandise',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA HQ',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',

    //    MemberId : ''
    // },


    // //Setup Standard Promo for Merchandise on Early Bird with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Merchandise' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Standard',
    //     PromoCode: 'PInH' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '26-Apr-2023',
    //     ValidityExpiryDate: '26-Apr-2024',
    //     Remark: 'Test',

    //     PromotionType: 'Early Bird',
    //     StartDate: '26-Apr-2023',
    //     EndDate: '26-Apr-2024',
    //     ItemCate: 'Merchandise',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA HQ',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',

    //     MemberId : ''
    // },
    // //Setup Standard Promo for Merchandise on Birthday Month with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Merchandise' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Standard',
    //     PromoCode: 'PInH' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '26-Apr-2023',
    //     ValidityExpiryDate: '26-Apr-2024',
    //     Remark: 'Test',

    //     PromotionType: 'Birthday Month',
    //     StartDate: '26-Apr-2023',
    //     EndDate: '26-Apr-2024',
    //     ItemCate: 'Merchandise',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA HQ',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',

    //     MemberId : ''
    // },
    // //Setup Standard Promo for Merchandise on Birthday with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Merchandise' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Standard',
    //     PromoCode: 'PInH' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '26-Apr-2023',
    //     ValidityExpiryDate: '26-Apr-2024',
    //     Remark: 'Test',

    //     PromotionType: 'Birthday',
    //     StartDate: '26-Apr-2023',
    //     EndDate: '26-Apr-2024',
    //     ItemCate: 'Merchandise',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA HQ',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',

    //     MemberId : ''
    // },




    // Promotion With Promo Code 



   // Setup Promo Code for Merchandise on Paid Period with ALL Item Option, Discount, All Customer Category.
    {
        PromotionTitle: 'Promo-Merchandise' + Math.floor(Math.random() * 100098),
        BasicType: 'Promo Code',
        PromoCode: 'PInH' + Math.floor(Math.random() * 100098),
        UtilizeLimitPerCustomer: '99',
        MaxCap: '99',
        ValidityStartDate: '26-Apr-2023',
        ValidityExpiryDate: '26-Apr-2024',
        Remark: 'Test',

        PromotionType: 'Paid Period',
        StartDate: '26-Apr-2023',
        EndDate: '26-Apr-2024',
        ItemCate: 'Merchandise',
        Quantity: '99',
        BenefitType: 'Discount',
        FixedDollarRate: '6',
        AgeRangFrom: '10',
        AgeRangTo: '80',
        CustomerCateg: 'All Customer Category',
        ApplicableMemberID: '',
        ApplicableSourceChannel: 'SAFRA HQ',
        Approval: 'Approve',
        BundlePromotion: 'No',

        MemberId : ''
    },


    // //Setup Promo Code for Merchandise on Book Period with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Merchandise' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Promo Code',
    //     PromoCode: 'PInH' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '26-Apr-2023',
    //     ValidityExpiryDate: '26-Apr-2024',
    //     Remark: 'Test',

    //     PromotionType: 'Book Period',
    //     StartDate: '26-Apr-2023',
    //     EndDate: '26-Apr-2024',
    //     ItemCate: 'Merchandise',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA HQ',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',

    //    MemberId : ''
    // },


    // //Setup Promo Code for Merchandise on Early Bird with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Merchandise' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Promo Code',
    //     PromoCode: 'PInH' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '26-Apr-2023',
    //     ValidityExpiryDate: '26-Apr-2024',
    //     Remark: 'Test',

    //     PromotionType: 'Early Bird',
    //     StartDate: '26-Apr-2023',
    //     EndDate: '26-Apr-2024',
    //     ItemCate: 'Merchandise',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA HQ',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',

    //     MemberId : ''
    // },
    // //Setup Promo Code for Merchandise on Birthday Month with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Merchandise' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Promo Code',
    //     PromoCode: 'PInH' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '26-Apr-2023',
    //     ValidityExpiryDate: '26-Apr-2024',
    //     Remark: 'Test',

    //     PromotionType: 'Birthday Month',
    //     StartDate: '26-Apr-2023',
    //     EndDate: '26-Apr-2024',
    //     ItemCate: 'Merchandise',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA HQ',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',

    //     MemberId : ''
    // },
    // //Setup Promo Code for Merchandise on Birthday with ALL Item Option, Discount, All Customer Category.
    // {
    //     PromotionTitle: 'Promo-Merchandise' + Math.floor(Math.random() * 100098),
    //     BasicType: 'Promo Code',
    //     PromoCode: 'PInH' + Math.floor(Math.random() * 100098),
    //     UtilizeLimitPerCustomer: '99',
    //     MaxCap: '99',
    //     ValidityStartDate: '26-Apr-2023',
    //     ValidityExpiryDate: '26-Apr-2024',
    //     Remark: 'Test',

    //     PromotionType: 'Birthday',
    //     StartDate: '26-Apr-2023',
    //     EndDate: '26-Apr-2024',
    //     ItemCate: 'Merchandise',
    //     Quantity: '99',
    //     BenefitType: 'Discount',
    //     FixedDollarRate: '6',
    //     AgeRangFrom: '10',
    //     AgeRangTo: '80',
    //     CustomerCateg: 'All Customer Category',
    //     ApplicableMemberID: '',
    //     ApplicableSourceChannel: 'SAFRA HQ',
    //     Approval: 'Approve',
    //     BundlePromotion: 'No',

    //    MemberId : ''
    // },


]
export default data