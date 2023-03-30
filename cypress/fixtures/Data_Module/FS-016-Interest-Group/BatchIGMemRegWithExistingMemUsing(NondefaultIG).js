const data = [

    // Creating a Batch Interest Group Member Registration to Non-Existing Member Using non-default IG for manimum term
    {
        MemberId: 'A300000303',            // Non-Existing Member 
        BatchName: 'Test Batch' + Math.floor(Math.random() * 100),
        BatchType: 'Interest Group',
        InterestGroup: 'CINIPEX',
        InterestGroupMain: 'MOVIEMAX',
        EffectiveDate: '05-Jan-2023',
        IGMembershipTerm: 18,              // Provide Manimum term
        InterestGroupLocation: 'All Locations',
    },

    // // Creating a Batch Interest Group Member Registration to Existing Member Using non-default IG for maximum term
    // {
    //     MemberId: 'A300002305',            // Existing Member 
    //     BatchName: 'Test Batch' + Math.floor(Math.random() * 100),
    //     BatchType: 'Interest Group',
    //     InterestGroup: 'BITEZ',
    //     InterestGroupMain: '',
    //     EffectiveDate: '05-Jan-2023',
    //     IGMembershipTerm: 18,              // Provide Maximum term
    //     InterestGroupLocation: 'All Locations',
    // },

    // // Creating a Batch Interest Group Member Registration to Non-Existing Member Using non-default IG for Maximum term
    // {
    //     MemberId: 'A300002305',            // NonExisting Membership 
    //     BatchName: 'Test Batch' + Math.floor(Math.random() * 100),
    //     BatchType: 'Interest Group',
    //     InterestGroup: 'BITEZ',
    //     InterestGroupMain: '',
    //     EffectiveDate: '05-Jan-2023',
    //     IGMembershipTerm: 18,              // Provide Maximum term
    //     InterestGroupLocation: 'All Locations',
    // }
]
export default data