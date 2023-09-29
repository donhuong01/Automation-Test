const data = {

    SRP_Redemption_Managment: {
        MemberID: "A300001959",
        ItemCode: "SRP001", // QA: SRP001 ; UAT: 006
        ItemDescription: "SRP Prod 001", // QA: SRP Prod 001 ; UAT: SRP Voucher 006
        Category: "e-Vouchers", // QA: e-Vouchers ; UAT: Consignment Item
        RedemptionSourceLoc: "SAFRA Jurong",
        Status: "Pending Payment",
        Quantity: 1,
        PaymentMethod: 'I-Banking'
    },

    SRP_Redemption_Collection: {
        MemberID: "A300002261",
        ItemCode: "SRP001", // QA: SRP001 ; UAT: SRP008
        ItemDescription: "SRP Prod 001", // QA: SRP Prod 001 ; UAT: SRP Voucher 008
        Category: "e-Vouchers", // QA: e-Vouchers ; UAT: Voucher
        RedemptionSourceLoc: "SAFRA Jurong",
        Status: "Pending Payment",
        Quantity: 1,
        PaymentMode: 'I-Banking'
    },

    EDC_Terminal_Management: {
        Name: "EDC00345",
        Placement: "Trial",
        SourceChannel: "SAFRA Punggol",
        ThirdPartyVendoreID: "VD003",
        ItemGSTGroup: "ZERO",
        FabsGroup: "Activities",
        ClubClassification: "Fitness & Leisure",
        SMCClassification: "Fitness & Adventure-SMC",
    },

    Third_Party_Vendore_Management: {
        VendorID: 'V000000006', //QA V000000003; UAT VD003
        Name: 'Third-Part Vendore ' + Math.floor(Math.random() * 10000),
        MerchandiseID: "MI" + Math.floor(Math.random() * 10000),
        Status: "Open",
        ContactNO: Math.floor(Math.random() * 10056300),
        UpdatedVendorID: 'V000000007', //QA V000000003; UAT VD003
        UpdatedName: 'Third-Part Vendore ' + Math.floor(Math.random() * 10000),
        UpdatedMerchandiseID: "MI" + Math.floor(Math.random() * 10000),
        UpdatedStatus: "Open",
        UpdatedStatusforDeleting: "Inactive",
        UpdatedContactNO: Math.floor(Math.random() * 10056300),
    },
    SAFRA_Points_Adjustment: {
        MemberID: "A30000400",
        SourceChannel: "SAFRA HQ",
        VendorID: "V000000003", //QA V000000003; UAT VD003
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
        VendoreID: "V000000002", //QA V000000002; UAT VD002
        EDCTerminalID: "TID00002",
        Type: "Awarding",
        Remark: "Testing",
        Amount: 5,
    },
    SRP_Module_Setting: {
        GrandDraw: "60",
        AwardSAFRAPointsPerSGD: "1",
        DeductSAFRAPointsPerSGD: "60",
        EnableMember: "CHECK",
        AwardSAFRAPointsNewMember: "12",
        SendRedemptionLetter: "CHECK",
        SendReminderEmail: "7",
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
        ItemCode: "AAAAA",
        ItemDescription: "AAAAA",
        Status: "Active",
        Category: "Consignment Item",
        PublishStartDate: "29-Sep-2023",
        PublishEndDate: "01-Dec-2023",
        ExpiryCollection: 15,
        Featured: "CHECK",
        Img: "/test_images.png",
        location: "SAFRA Jurong",
        RedemptionAmount: 20,
        RedemptionPoint: 4
    }

}
export default data                    