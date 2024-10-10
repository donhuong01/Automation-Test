const data = [

    //Interest Group Membership Renewal to Existing Inactive Member Due to Deferment for Minimum Term
    {
        MemberId: 'A300001799',        // Defer Inactive Member
        CustomerName: 'Test User 13448',
        IGMembership: 'G1000000007',
        Terms: '18',                   //Manimum Term
    },
    //Interest Group Membership Renewal for Non SAFRA Member for Minimum Term
    {
        MemberId: 'A30000163',        // Non SAFRA Member
        CustomerName: '	SFS User 8622',
        IGMembership: 'G1000000039',
        Terms: '5',                   // Manimum Term
    },
    //Interest Group Membership Renewal to Existing active Member for Maximum Term
    {
        MemberId: 'A30000022',        // Existing Active Member
        CustomerName: '	Testuser007',
        IGMembership: 'G1000000039',
        Terms: '5',                   // Maximum Term
    },
    //Interest Group Membership Renewal to Existing Inactive Member Due to Deferment Maximum Term
    {
        MemberId: 'A30000022',        // Defer Inactive Member
        CustomerName: '	Testuser007',
        IGMembership: 'G1000000039',
        Terms: '5',                   // Maximum Term
    },
    //Interest Group Membership Renewal to Existing Inactive Member Due to Non Renewal for Maximum Term
    {
        MemberId: 'A30000022',        // Existing Inactive Member due to non Renewal
        CustomerName: '	Testuser007',
        IGMembership: 'G1000000039',
        Terms: '5',                   //Maximum Term
    },

]
export default data