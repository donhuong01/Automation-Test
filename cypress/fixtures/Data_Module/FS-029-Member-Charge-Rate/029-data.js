const data={
    MembershipChargeRateDetail:{
        Name : 'Testing' + Math.floor(Math.random() * 10000 ),
        CardType : 'SAFRA Classic Card',
        Description : 'This is a test',
        NumberofPeriod : '2',
        DisplayInFrontEnd : 'check',
        SFSItem : 'Not Applicable',
        Status : 'Inactive',
        ChargeTypeName : 'Test',
        AccessMode : 'Online',
        AddCatAccessmode : 'Junior',
        TransectionType : 'Renewal',
        CalculationType : 'Per Registration',
        AmountType : 'Fixed Value',
        CustomerCategoryName: 'Kickass',
        ProductNumber :'UATTest20061', //'PROD113',
        ProductName : 'UATTest20061Name', //"Product 3",
        SearchName : 'UATTest20061Name', //"Product 3",
        ProductType : 'Item', //'Item',
        ItemModelGrp : 'ITEM',
        ItemGrp : 'MCH_IG',
        StorageDimGrp : 'SITE - WAREHOUSE',
        TrackingDimGrp : 'NONE',
        SalesCat : 'All Code',
        ProcurementCat : 'ALL PURCHASE'

    },
     // Membership Charge Rate Listing
     MembershipChargeRateListing : {
        filters : {
            name : 'Testing2923',
            cardType : 'SAFRA Classic Card',
            Description : 'This is a test',
        },

        nameLink : 'Testing2923',

        memChargeRateList : [
            {
                name : 'Testing2923',
                description : '1 Yr CC',
                Description : 'This is a test',
                cardType : 'SAFRA DBS Credit Card',
                numberOfPeriod : '2',
                status : 'InActive'
            },

        ],

        chargeRateItem : '1 Yr CC'
    }
}   

export default data



