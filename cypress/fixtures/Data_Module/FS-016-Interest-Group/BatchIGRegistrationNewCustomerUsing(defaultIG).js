const data = [
    // Creating a Batch Interest Group Member Registration to New Customer using default IG for minimum term
    {
        NRICLast4Digit: '772Z',
        CustomerNRICFull: 'S4764772Z',
        BatchName: 'Sample Batch' + Math.floor(Math.random() * 10000),
        BatchType: 'Interest Group',
        InterestGroup: 'CINIPEX',
        EffectiveDate: '20-Jan-2023',
        IGMembershipTerm: 18,             // minimum term
        InterestGroupLocation: 'All Locations',
    },
    // // Creating a Batch Interest Group Member Registration to New Customer using default IG for Maximum term
    // {
    //     NRICLast4Digit: '',
    //     CustomerNRICFull: '',
    //     BatchName: 'Sample Batch' + Math.floor(Math.random() * 10000),
    //     BatchType: 'Interest Group',
    //     InterestGroup: 'MOVIEMAX',
    //     EffectiveDate: '20-Jan-2023',
    //     IGMembershipTerm: 18,             // Maximum term
    //     InterestGroupLocation: 'SAFRA Jurong',
    // },

]
export default data