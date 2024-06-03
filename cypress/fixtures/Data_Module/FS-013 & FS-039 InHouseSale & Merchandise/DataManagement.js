const data = {

    InHouseSaleAndMerchandiseItemChargeSetup: {
        MerchandiseItemName: 'Auto-Merchant ' + Math.floor(Math.random() * 10000),
        InhouseItemName: 'Auto-Inhouse ' + Math.floor(Math.random() * 10000),
        LocationName: 'SAFRA Jurong',
        LifeStyle: 'Facilities',
        FabsGroup: 'Benefits',
        ClubClassification: 'Family & Enrichment',
        SMCClassification: 'Fitness & Adventure-SMC',
        ChargeName: 'Purchase',
        TransactionType: 'Purchase',
        CalculationType: 'Per Item',
        AmountType: 'Fixed Value',
        CategoryName: 'All Customer Category',
        ProductNumber: "In-House Sale Product without tax",
        ProductNumber2: "Merchandise without Tax",
        Remarks: 'test',
        EarnSAFRAPoints: 'CHECK'
    },

    InHouseSaleAndMerchandisePurchase: {
        MemberIdMerchandise: 'A300001148',
        MemberIdInHouse: 'A300001825',
        ItemNameMerchandise: 'GST NOT APPLICABLE',
        ItemNameInHouse: 'In House Sales Demo',
        QuantitySetMerchandise: '1',
        QuantitySetInhouse: '1',
    },

    InHouseSaleAndMerchandiseItemTransactionRefund: {
        MemberIdMerchandise: '',
        MemberIdInHouse: '',

    },

    InHouseSaleAndMerchandiseItemTransaction: {
        MemberIdMerchandise: 'A300001148',
        MemberIdInHouse: 'A300001825',

    },

    InHouseSaleAndMerchandiseItemTransactionCancellation: {
        MemberIdMerchandise: '',
        MemberIdInHouse: '',

    }
}
export default data