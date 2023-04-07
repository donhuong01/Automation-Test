const data = {

    SRP_Redemption_Managment: {
        MemberID: "A300001959",
        ItemCode: "006",
        ItemDescription: "SRP Voucher 006",
        Category: "Consignment Item",
        RedemptionSourceLoc: "SAFRA Jurong",
        Status: "Pending Payment",
        Quantity: 1,
        PaymentMethod: 'CASH'
    },

    SRP_Redemption_Collection: {
        MemberID: "A300002261",
        ItemCode: "SRP008",
        ItemDescription: "SRP Voucher 008",
        Category: "Voucher",
        RedemptionSourceLoc: "SAFRA Jurong",
        Status: "Pending Payment",
        Quantity: 1,
        PaymentMode: 'CASH'
    },

    EDC_Terminal_Management: {
        Name: "EDC00345",
        Placement: "Trial",
        SourceChannel: "SAFRA Punggol",
        ThirdPartyVendoreID: "VD003",
        ItemGSTGroup: "FULL",
        FabsGroup: "Golfing Club",
        ClubClassification: "Fitness & Leisure",
        SMCClassification: "Fitness & Adventure-SMC",
    },

    Third_Party_Vendore_Management: {
        VendorID: 'VD003',
        Name: 'Third-Part Vendore ' + Math.floor(Math.random() * 10000),
        MerchandiseID: "MI" + Math.floor(Math.random() * 10000),
        Status: "Open",
        ContactNO: Math.floor(Math.random() * 10056300),
        UpdatedVendorID: 'VD003',
        UpdatedName: 'Third-Part Vendore ' + Math.floor(Math.random() * 10000),
        UpdatedMerchandiseID: "MI" + Math.floor(Math.random() * 10000),
        UpdatedStatus: "Open",
        UpdatedContactNO: Math.floor(Math.random() * 10056300),
    },
    SAFRA_Points_Adjustment: {
        MemberID: "A30000400",
        SourceChannel: "SAFRA HQ",
        VendorID: "VD003",
        EDCTerminal: "TID00002",
        Remarks: "Testing",
        SAFRAPoints: "500",
        Awarding: "Awarding",
        Deduction: "Deduction",
    },
    SAFRA_Points_Transaction: {
        MemberID: "A30000400",
        TransactionType: "Awarding",
        SRPOperationItem: 'Manual Points Adjustment',
        SourceChannel: "SAFRA HQ",
        VendoreID: "VD002",
        EDCTerminalID: "TID00002",
        Type: "Awarding",
        Remark: "Testing",
        Amount: 5,
    },
    SRP_Module_Setting: {
        GrandDraw: "50",
        AwardSAFRAPointsPerSGD: "2",
        DeductSAFRAPointsPerSGD: "50",
        EnableMember: "CHECK",
        AwardSAFRAPointsNewMember: "42",
        SendRedemptionLetter: "CHECK",
        SendReminderEmail: "22",
    },
    SRP_Promotion_Management: {
        Name: 'Birthday SRP Promotion ' + Math.floor(Math.random() * 100000 ),
        Description: 'SRP Promotion for Birthday Celebrant',
        PromoType: 'Birthday Month',
        Quantity: 2,
        ProductCategory: 'Gift',
        ModuleType: 'Membership',
        ExtraPointsType: 'Percentage',
        ExtraPercentage: 10,
        ValidFrom: '01-Apr-2023',
        ValidTo: '30-Jun-2023',
        SourceChannel: 'SAFRA Jurong',
        EDCTerminal: 'TID00005',
        MemberID: 'A300002068',
        MemberType: 'ASSOCIATE',

    },

    Updated_SRP_Promotion_Management: {
        Updated_Name: 'Birthday SRP Promotion ',
        Updated_Description: 'SRP Promotion for Birthday Celebrant',
        Updated_PromoType: 'Birthday Month',
        Updated_Quantity: 2,
        Updated_ProductCategory: 'All Code',
        Updated_ModuleType: 'Membership',
        Updated_ExtraPointsType: 'Percentage',
        Updated_ExtraPercentage: 10,
        Updated_ValidFrom: '01-May-2023',
        Updated_ValidTo: '30-Aug-2023',
        Updated_SourceChannel: 'SAFRA Jurong',
        Updated_EDCTerminal: 'TID00003',
        Updated_MemberID: 'A300002066',
        Updated_MemberType: 'ASSOCIATE',

    },
    SRP_Redemption_Catalogue_Management: {
        ItemCode: "004",
        ItemDescription: "SAFRA Voucher 004",
        Status: "Active",
        Category: "Consignment Item",
        PublishStartDate: "22-Jan-2023",
        PublishEndDate: "01-Aug-2023",
        ExpiryCollection: 15,
        Featured: "CHECK",
        Img: "/test_images.png",
        location: "SAFRA Jurong",
        RedemptionAmount: 20,
        RedemptionPoint: 4
    }

}
export default data                    