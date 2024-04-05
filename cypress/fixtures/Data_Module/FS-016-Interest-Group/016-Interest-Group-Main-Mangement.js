const data = {

    IGMainNumber: '',
    IGName: 'z-IG Main testing' + Math.floor(Math.random() * 1000),
    Code: 'SMCMS06',
    MainCategory: 'TEST',
    IGCategoryGroup: 'INTEREST GROUP CATEGORY',
    FABSGroup: 'Contest',
    ClubClassification: 'Fitness & Leisure',
    LifeStyleGroup: 'Clubbing/Pubbing',
    SMCClassification: 'Fitness & Adventure-SMC',
    OwnerEmail: 'htran@synergyonline.com',

    LocationName: 'SAFRA Jurong',

    ApproverOption: 'PIC of the requestor',
    ApproverEmail: 'HTran@synergyonline.com',
    Status: 'Draft',

    ChargeName: 'Registration Fee',
    TransactionType: 'Registration',
    CalculationType: 'Per Term',
    AmmountType: 'Fixed Value',

    CustomerCategoryName: 'Associate',

    RegItemCode: 'IG Prod 001',
    RenewalItemCode: 'IG Prod 001',
    DefermentItemCode: 'IG Prod 001',
    ReinstatementItemCode: 'IG Prod 001',
    TerminationItemCode: 'IG Prod 001',
    WaiverItemCode: 'IG Prod 001',
    ReversalItemCode: 'IG Prod 001',

    IGDetail: {
        IGName: "Auto-IG-Test" + Math.floor(Math.random() * 1000),
        Code: "SMCS01",
        IGMain: "IG Main QA Testing 1",
        SubCatType: "BITEZ",
        PublishDate: "29-Sep-2022",
        EndDate: "29-Nov-2050",
        MemType: "Main",

        //Registration
        MinAGeReq: "19",
        UpdMinAGeReq: "18",
        MaxAGeReq: "45",
        UpdMaxAGeReq: "50",
        IsAgeReq: "CHECK",
        IsIGReq: "CHECK",
        IsAllowUser: "CHECK",
        IsAllowFloating: "CHECK",

        //Membership Term
        termLength: "3",
        termLengthType: "Month",
        onlineDisplayTerm: "6",
        minRegTerm: "3",
        minRenewalTerm: "5",
        minRangeForBypassTerm: "1",
        maxRangeForBypassTerm: "10",

        // Access Mode Lsit
        AccessMode: 'Online',
        CustomerCate: 'TRAVEL CLUB Member',

        // Location 
        location: 'SAFRA HQ',

        //charge rate
        ChargeName: 'Test Charge Rate',
        TransactionType: 'Registration',
        CalculationType: 'Per Registration',
        AmountType: 'Fixed Value',


        //Product Master Information
        ProductName: 'IG Prod 001',


        //Other Information
        Description: 'Test Description',
        SpecialRemarks: 'Test Remarks',
        ContactPersonInformation: 'Test CPI',

        IndemnityText: 'Indemnity Text',
        TermsandConditionsText: 'Testing',

        //Membership tags and additional information
        AttributeName: 'Testing Attribute',
        AttributeCode: 'TA',

        //Additional Field
        DisplayOrder: '1',
        ColumnCaption: 'Test Column Caption',
        ControlType: 'Textbox',
        Tooltip: 'Testing Tooltip',
        Active: 'Yes',
        ControlSpan: 'Full',
        Validation: 'CHECK'
    }


}
export default data 