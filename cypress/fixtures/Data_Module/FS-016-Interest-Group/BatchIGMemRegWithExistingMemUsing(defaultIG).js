const data = [
    // Creating a Batch Interest Group Member Registration to Non-Existing member using default IG for minimum term
 {
        MemberId: 'A300000056',          // Provide non-existing member id
        BatchName: 'Sample Batch' + Math.floor(Math.random() * 10000),
        BatchType: 'Interest Group',
        InterestGroup: 'CINIPEX',
        EffectiveDate: '20-Jan-2023',
        IGMembershipTerm: 36,             // minimum term
        InterestGroupLocation: 'All Locations',
    },
    // Creating a Batch Interest Group Member Registration to Existing member using default IG for Maximum term
    {
        MemberId: 'A300000015',          // Provide Existing member id
        BatchName: 'Sample Batch' + Math.floor(Math.random() * 10000),
        BatchType: 'Interest Group',
        InterestGroup: 'BITEZ',
        EffectiveDate: '20-Jan-2023',
        IGMembershipTerm: 18,             // Maximum term
        InterestGroupLocation: 'All Locations',
    },
    // // Creating a Batch Interest Group Member Registration to Non-Existing member using default IG for Maximum term
    // {
    //     MemberId: 'A300000122',          // Provide Existing member id
    //     BatchName: 'Sample Batch' + Math.floor(Math.random() * 10000),
    //     BatchType: 'Interest Group',
    //     InterestGroup: 'MOVIEMAX',
    //     EffectiveDate: '20-Jan-2023',
    //     IGMembershipTerm: 18,             // Maximum term
    //     InterestGroupLocation: 'SAFRA Jurong',
    // },


]
export default data