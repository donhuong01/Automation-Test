const data = {

    SRP_Redemption_Managment: {
        MemberID: "A300001959",
        ItemCode: "SAFRAPoint007",
        ItemDescription: "SAFRA 007",
        Category: "Consignment Item",
        RedemptionSourceLoc: "SAFRA Jurong",
        Status: "Pending Payment",
        Quantity: 1,
        PaymentMethod: 'CASH'
    },

    SRP_Redemption_Collection: {
        MemberID: "A300002261",
        ItemCode: "SRP003",
        ItemDescription: "SRP Prod 003",
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
        ThirdPartyVendoreID: "Test001",
        ItemGSTGroup: "FULL",
        FabsGroup: "Golfing Club",
        ClubClassification: "Fitness & Leisure",
        SMCClassification: "Fitness & Adventure-SMC",
    },

    Third_Party_Vendore_Management: {
        VendorID: 'VD003',
        Name: 'Auto-Name ' + Math.floor(Math.random() * 10000),
        MerchandiseID: "MI" + Math.floor(Math.random() * 10000),
        Status: "Open",
        ContactNO: Math.floor(Math.random() * 10056300),
        UpdatedVendorID: 'VD001',
        UpdatedName: 'Auto-Name ' + Math.floor(Math.random() * 10000),
        UpdatedMerchandiseID: "MI" + Math.floor(Math.random() * 10000),
        UpdatedStatus: "Open",
        UpdatedContactNO: Math.floor(Math.random() * 10056300),
    },
    SAFRA_Points_Adjustment: {
        MemberID: "A30000400",
        SourceChannel: "SAFRA HQ",
        VendorID: "VD002",
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
        Name: 'Birthday SRP Promotion',
        Description: 'SRP Promotion for Birthday Celebrant',
        PromoType: 'Birthday Month',
        Quantity: 2,
        ProductCategory: 'SRP',
        ModuleType: 'Membership',
        ExtraPointsType: 'Percentage',
        ExtraPercentage: 10,
        ValidFrom: '01-Jan-2023',
        ValidTo: '31-Mar-2023',
        SourceChannel: 'SAFRA Jurong',
        EDCTerminal: 'TID00004',
        MemberID: 'A300002234',
        MemberType: 'ASSOCIATE',

    },
    SRP_Redemption_Catalogue_Management: {
        ItemCode: "SRP 001",
        ItemDescription: "SRP Prod 001",
        Status: "Active",
        Category: "Consignment Item",
        PublishStartDate: "22-Jan-2023",
        PublishEndDate: "01-Mar-2023",
        ExpiryCollection: 30,
        Featured: "CHECK",
        Img: "/test_images.png",
        location: "SAFRA HQ",
        RedemptionAmount: 20,
        RedemptionPoint: 4
    }

}
export default data                    