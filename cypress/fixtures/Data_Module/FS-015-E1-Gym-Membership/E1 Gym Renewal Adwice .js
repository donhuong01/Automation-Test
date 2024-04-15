const data = [

    // E1 Gym Renewal Advice Via Email

    {
        GeneratedFor: 'Via Email',
        Description: 'E1RenAdvice' + Math.floor(Math.random() * 23829),
        MainMembership: 'QAE1MAIN2024',
        E1GymMembership: 'QAE12024',
        ExpiryDateFrom: '03-Feb-2023',
        ExpiryDateTo: '23-Dec-2023',
        MembershipStatus: 'Active',
        ReasonCode: 'New',
        DOBFrom: '12-Feb-1990',
        DOBTo: '12-Feb-2050'
    },

    // E1 Gym Renewal Advice Via Mail Merge
    {
        GeneratedFor: 'Via Mail Merge',
        Description: 'E1RenAdvice' + Math.floor(Math.random() * 23829),
        MainMembership: 'QAE1MAIN2024',//'Test E1 Main',
        E1GymMembership: 'QAE12024', //"Test E1 Detail",
        ExpiryDateFrom: '03-Feb-2023',
        ExpiryDateTo: '23-Dec-2023',
        MembershipStatus: 'Active',
        ReasonCode: 'New',
        DOBFrom: '12-Feb-1990',
        DOBTo: '12-Feb-2050'
    },
]
export default data