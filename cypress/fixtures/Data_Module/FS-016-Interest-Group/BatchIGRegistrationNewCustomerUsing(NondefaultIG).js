const data = [
    // Creating a Batch Interest Group Member Registration to New Customer using Non default IG for minimum term
    {
        NRICLast4Digit: '681G',
        CustomerNRICFull: 'S7569681G',
        BatchName: 'Sample Batch' + Math.floor(Math.random() * 10000),
        BatchType: 'Interest Group',
        InterestGroupMain: '',
        InterestGroup: 'MOVIEMAX',
        EffectiveDate: '20-Jan-2023',
        IGMembershipTerm: 18,             // Minimum term
        InterestGroupLocation: 'SAFRA Jurong',
    },
    // Creating a Batch Interest Group Member Registration to New Customer using Non default IG for Maximum term
    // {
    //     NRICLast4Digit: '',
    //     CustomerNRICFull: '',
    //     BatchName: 'Sample Batch' + Math.floor(Math.random() * 10000),
    //     BatchType: 'Interest Group',
    //     InterestGroupMain:'',
    //     InterestGroup: 'MOVIEMAX',
    //     EffectiveDate: '20-Jan-2023',
    //     IGMembershipTerm: 18,             // Maximum term
    //     InterestGroupLocation: 'SAFRA Jurong',
    // },

]
export default data