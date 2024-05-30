const data = [
    // Creating a Batch Interest Group Member Registration to Non-Existing member using default IG for minimum term
 {
        MemberId: 'A300000056',          // Provide non-existing member id
        BatchName: 'Sample Batch' + Math.floor(Math.random() * 10000),
        BatchType: 'Interest Group',
        InterestGroup: 'Test IG Details - Main',//'CINIPEX',
        EffectiveDate: '03-Apr-2023',
        IGMembershipTerm: '3',             // minimum term
        InterestGroupLocation: 'All Locations',
    },
    // Creating a Batch Interest Group Member Registration to Existing member using default IG for Maximum term
    {
        MemberId: 'A300000015',          // Provide Existing member id
        BatchName: 'Sample Batch' + Math.floor(Math.random() * 10000),
        BatchType: 'Interest Group',
        InterestGroup: 'Test IG Details - Main',//'BITEZ',
        EffectiveDate: '03-Apr-2023',
        IGMembershipTerm: '3',             // Maximum term
        InterestGroupLocation: 'All Locations',
    },
    // // Creating a Batch Interest Group Member Registration to Non-Existing member using default IG for Maximum term
    // {
    //     MemberId: 'A300000122',          // Provide Existing member id
    //     BatchName: 'Sample Batch' + Math.floor(Math.random() * 10000),
    //     BatchType: 'Interest Group',
    //     InterestGroup: 'MOVIEMAX',
    //     EffectiveDate: '20-Jan-2023',
    //     IGMembershipTerm: 10,             // Maximum term
    //     InterestGroupLocation: 'SAFRA Jurong',
    // },


]
export default data