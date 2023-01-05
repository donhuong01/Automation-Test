

//Batch Membership Registration With 
// 1. Non Member with Different Member Type
// 2. Existing Member with Different Member Type
// 3. New Member Principal with Different Member Type
// 4. New Member Dependent with Different Member Type

// Note: Must change the NRIC before run the tests

const BatchMembershipRegistrationWithNonMembers = [
    {
        SFS: 'SFS Enable',
        NonMemberNric: 'S1078587A',
        NonMemberDob: '31-Jan-1981',
        MemberType: 'AS',
        AplicationDate: '17-Jun-2024',
        Tenure: '5 Years',
        Category: 'Principal',
    },
    // {
    //     SFS: 'SFS Enable',
    //     NonMemberNric: 'S0678698G',
    //     NonMemberDob: '31-Jan-1981',
    //     MemberType: 'AV',
    //     AplicationDate: '17-Jun-2024',
    //     Tenure: '5 Years',
    //     Category: 'Principal',
    // },
    // {
    //     SFS: 'SFS Enable',
    //     NonMemberNric: 'S3054918Z',
    //     NonMemberDob: '31-Jan-1981',
    //     MemberType: 'OD',
    //     AplicationDate: '17-Jun-2024',
    //     Tenure: '5 Years',
    //     Category: 'Principal'
    // },
    // {
    //     SFS: 'SFS Enable',
    //     NonMemberNric: 'S6641383G',
    //     NonMemberDob: '31-Jan-1981',
    //     MemberType: 'OE',
    //     AplicationDate: '17-Jun-2024',
    //     Tenure: '5 Years',
    //     Category: 'Principal'
    // },
    // {
    //     SFS: 'SFS Enable',
    //     NonMemberNric: 'S4962605C',
    //     NonMemberDob: '31-Jan-1981',
    //     MemberType: 'OF',
    //     AplicationDate: '17-Jun-2024',
    //     Tenure: '5 Years',
    //     Category: 'Principal'
    // },
    // {
    //     SFS: 'SFS Enable',
    //     NonMemberNric: 'S7539055F',
    //     NonMemberDob: '31-Jan-1981',
    //     MemberType: 'VT',
    //     AplicationDate: '17-Jun-2024',
    //     Tenure:'5 Years',
    //     Category: 'Principal'
    // },
    // {
    //     SFS: 'SFS Enable',
    //     NonMemberNric: 'S8459020G',
    //     NonMemberDob: '31-Jan-1981',
    //     MemberType: 'FA',
    //     AplicationDate: '17-Jun-2024',
    //     Tenure:'5 Years',
    //     Category: 'Principal'
    // },
    // {
    //     SFS: 'SFS Enable',
    //     NonMemberNric: 'S8459020G',
    //     NonMemberDob: '31-Jan-1981',
    //     MemberType: 'AT',
    //     AplicationDate: '17-Jun-2024',
    //     Tenure:'2 Years',
    //     Category: 'Principal'
    // },
    // {
    //     SFS: 'SFS Enable',
    //     NonMemberNric: 'S8459020G',
    //     NonMemberDob: '31-Jan-1981',
    //     MemberType: 'LF',
    //     AplicationDate: '17-Jun-2024',
    //     Tenure:'5 Years',
    //     Category: 'Principal'
    // },
    // {
    //     SFS: 'SFS Enable',
    //     NonMemberNric: 'S8459020G',
    //     NonMemberDob: '31-Jan-1981',
    //     MemberType: 'OA',
    //     AplicationDate: '17-Jun-2024',
    //     Tenure:'5 Years',
    //     Category: 'Principal'
    // },
    // {
    //     SFS: 'SFS Enable',
    //     NonMemberNric: 'S8459020G',
    //     NonMemberDob: '31-Jan-1981',
    //     MemberType: 'VD',
    //     AplicationDate: '17-Jun-2024',
    //     Tenure:'5 Years',
    //     Category: 'Principal'
    // },
    // {
    //     SFS: 'SFS Enable',
    //     NonMemberNric: 'S8459020G',
    //     NonMemberDob: '31-Jan-1981',
    //     MemberType: 'VO',
    //     AplicationDate: '17-Jun-2024',
    //     Tenure:'5 Years',
    //     Category: 'Principal'
    // },
    // {
    //     SFS: 'SFS Enable',
    //     NonMemberNric: 'S8459020G',
    //     NonMemberDob: '31-Jan-1981',
    //     MemberType: 'VR',
    //     AplicationDate: '17-Jun-2024',
    //     Tenure:'5 Years',
    //     Category: 'Principal'
    // },

]
const BatchMembershipRegistrationWithExistingMembers = [

    {
        SFS: 'SFS Enable',                     // To disable SFS type 'SFS Disable'
        MaritalStatus: 'Married',              // Enter Marital Status
        MemberType: 'AS',                      // Enter Member Type      
        CustomerNRICFull: 'S6183684E',         // Enter Nric
        PrincipalTenure: '10 Years',           // Membership Tenure 
        AplicationDate: '17-Jun-2024',         // Application Date Batch
        Dependent: 'YES',                      // If want to Add Child Pass YES else Pass NO
        DepChildNRICFull: 'S7374176I',         // Chid NRIC
        DependentChildTenure: '10 Years',       // Child Tenure 
        Spouse: 'YES',                          // If want to Add Spouse Pass YES else Pass NO
        DepSouseNRICFull: 'S0624111E',         // Spouse Nric
        DependentSpouseTenure: '10 Years'       // Spouse Tenure
    },
    // {
    //     SFS: 'SFS Enable',                     // To disable SFS type 'SFS Disable'
    //     MaritalStatus: 'Married',              // Enter Marital Status
    //     MemberType: 'AV',                      // Enter Member Type      
    //     CustomerNRICFull: 'S6188446G',         // Enter Nric
    //     PrincipalTenure: '5 Years',            // Membership Tenure 
    //     AplicationDate: '17-Jun-2024',         // Application Date Batch
    //     Dependent: 'YES',                      // If want to Add Child Pass YES else Pass NO
    //     DepChildNRICFull: 'S4986734D',         // Chid NRIC
    //     DependentChildTenure: '5 Years',       // Child Tenure 
    //     Spouse: 'NO',                          // If want to Add Spouse Pass YES else Pass NO
    //     DepSouseNRICFull: 'S1091331D',         // Spouse Nric
    //     DependentSpouseTenure: '5 Years'       // Spouse Tenure
    // },
    // {
    //     SFS: 'SFS Enable',                     // To disable SFS type 'SFS Disable'
    //     MaritalStatus: 'Married',              // Enter Marital Status
    //     MemberType: 'OD',                      // Enter Member Type      
    //     CustomerNRICFull: 'S2568933Z',         // Enter Nric
    //     PrincipalTenure: '10 Years',           // Membership Tenure 
    //     AplicationDate: '17-Jun-2024',         // Application Date Batch
    //     Dependent: 'YES',                      // If want to Add Child Pass YES else Pass NO
    //     DepChildNRICFull: 'S4986734D',         // Chid NRIC
    //     DependentChildTenure: '5 Years',       // Child Tenure 
    //     Spouse: 'NO',                          // If want to Add Spouse Pass YES else Pass NO
    //     DepSouseNRICFull: 'S1091331D',         // Spouse Nric
    //     DependentSpouseTenure: '5 Years'       // Spouse Tenure
    // },
    // {
    //     SFS: 'SFS Enable',                     // To disable SFS type 'SFS Disable'
    //     MaritalStatus: 'Married',              // Enter Marital Status
    //     MemberType: 'OE',                      // Enter Member Type      
    //     CustomerNRICFull: 'S2282415E',         // Enter Nric
    //     PrincipalTenure: '10 Years',           // Membership Tenure 
    //     AplicationDate: '17-Jun-2024',         // Application Date Batch
    //     Dependent: 'YES',                      // If want to Add Child Pass YES else Pass NO
    //     DepChildNRICFull: 'S4986734D',         // Chid NRIC
    //     DependentChildTenure: '5 Years',       // Child Tenure 
    //     Spouse: 'NO',                          // If want to Add Spouse Pass YES else Pass NO
    //     DepSouseNRICFull: 'S1091331D',         // Spouse Nric
    //     DependentSpouseTenure: '5 Years'       // Spouse Tenure
    // },
    // {
    //     SFS: 'SFS Enable',                     // To disable SFS type 'SFS Disable'
    //     MaritalStatus: 'Married',              // Enter Marital Status
    //     MemberType: 'OF',                      // Enter Member Type      
    //     CustomerNRICFull: 'S3153595F',         // Enter Nric
    //     PrincipalTenure: '10 Years',           // Membership Tenure 
    //     AplicationDate: '17-Jun-2024',         // Application Date Batch
    //     Dependent: 'YES',                      // If want to Add Child Pass YES else Pass NO
    //     DepChildNRICFull: 'S4986734D',         // Chid NRIC
    //     DependentChildTenure: '5 Years',       // Child Tenure 
    //     Spouse: 'NO',                          // If want to Add Spouse Pass YES else Pass NO
    //     DepSouseNRICFull: 'S1091331D',         // Spouse Nric
    //     DependentSpouseTenure: '5 Years'       // Spouse Tenure
    // },
    // {
    //     SFS: 'SFS Enable',                     // To disable SFS type 'SFS Disable'
    //     MaritalStatus: 'Married',              // Enter Marital Status
    //     MemberType: 'VT',                      // Enter Member Type      
    //     CustomerNRICFull: 'S7205563B',         // Enter Nric
    //     PrincipalTenure: '10 Years',           // Membership Tenure 
    //     AplicationDate: '17-Jun-2024',         // Application Date Batch
    //     Dependent: 'YES',                      // If want to Add Child Pass YES else Pass NO
    //     DepChildNRICFull: 'S4986734D',         // Chid NRIC
    //     DependentChildTenure: '5 Years',       // Child Tenure 
    //     Spouse: 'NO',                          // If want to Add Spouse Pass YES else Pass NO
    //     DepSouseNRICFull: 'S1091331D',         // Spouse Nric
    //     DependentSpouseTenure: '5 Years'       // Spouse Tenure
    // },
    // {
    //     SFS: 'SFS Enable',                     // To disable SFS type 'SFS Disable'
    //     MaritalStatus: 'Married',              // Enter Marital Status
    //     MemberType: 'AT',                      // Enter Member Type      
    //     CustomerNRICFull: 'S7205563B',         // Enter Nric
    //     PrincipalTenure: '2 Years',            // Membership Tenure 
    //     AplicationDate: '17-Jun-2024',         // Application Date Batch
    //     Dependent: 'YES',                      // If want to Add Child Pass YES else Pass NO
    //     DepChildNRICFull: 'S4986734D',         // Chid NRIC
    //     DependentChildTenure: '5 Years',       // Child Tenure 
    //     Spouse: 'NO',                          // If want to Add Spouse Pass YES else Pass NO
    //     DepSouseNRICFull: 'S1091331D',         // Spouse Nric
    //     DependentSpouseTenure: '5 Years'       // Spouse Tenure
    // },
    // {
    //     SFS: 'SFS Enable',                     // To disable SFS type 'SFS Disable'
    //     MaritalStatus: 'Married',              // Enter Marital Status
    //     MemberType: 'LF',                      // Enter Member Type      
    //     CustomerNRICFull: 'S7205563B',         // Enter Nric
    //     PrincipalTenure: '10 Years',           // Membership Tenure 
    //     AplicationDate: '17-Jun-2024',         // Application Date Batch
    //     Dependent: 'YES',                      // If want to Add Child Pass YES else Pass NO
    //     DepChildNRICFull: 'S4986734D',         // Chid NRIC
    //     DependentChildTenure: '5 Years',       // Child Tenure 
    //     Spouse: 'NO',                          // If want to Add Spouse Pass YES else Pass NO
    //     DepSouseNRICFull: 'S1091331D',         // Spouse Nric
    //     DependentSpouseTenure: '5 Years'       // Spouse Tenure
    // },
    // {
    //     SFS: 'SFS Enable',                     // To disable SFS type 'SFS Disable'
    //     MaritalStatus: 'Married',              // Enter Marital Status
    //     MemberType: 'OA',                      // Enter Member Type      
    //     CustomerNRICFull: 'S7205563B',         // Enter Nric
    //     PrincipalTenure: '10 Years',           // Membership Tenure 
    //     AplicationDate: '17-Jun-2024',         // Application Date Batch
    //     Dependent: 'YES',                      // If want to Add Child Pass YES else Pass NO
    //     DepChildNRICFull: 'S4986734D',         // Chid NRIC
    //     DependentChildTenure: '5 Years',       // Child Tenure 
    //     Spouse: 'NO',                          // If want to Add Spouse Pass YES else Pass NO
    //     DepSouseNRICFull: 'S1091331D',         // Spouse Nric
    //     DependentSpouseTenure: '5 Years'       // Spouse Tenure
    // },
    // {
    //     SFS: 'SFS Enable',                     // To disable SFS type 'SFS Disable'
    //     MaritalStatus: 'Married',              // Enter Marital Status
    //     MemberType: 'VD',                      // Enter Member Type      
    //     CustomerNRICFull: 'S7205563B',         // Enter Nric
    //     PrincipalTenure: '10 Years',           // Membership Tenure 
    //     AplicationDate: '17-Jun-2024',         // Application Date Batch
    //     Dependent: 'YES',                      // If want to Add Child Pass YES else Pass NO
    //     DepChildNRICFull: 'S4986734D',         // Chid NRIC
    //     DependentChildTenure: '5 Years',       // Child Tenure 
    //     Spouse: 'NO',                          // If want to Add Spouse Pass YES else Pass NO
    //     DepSouseNRICFull: 'S1091331D',         // Spouse Nric
    //     DependentSpouseTenure: '5 Years'       // Spouse Tenure
    // },
    // {
    //     SFS: 'SFS Enable',                     // To disable SFS type 'SFS Disable'
    //     MaritalStatus: 'Married',              // Enter Marital Status
    //     MemberType: 'VO',                      // Enter Member Type      
    //     CustomerNRICFull: 'S7205563B',         // Enter Nric
    //     PrincipalTenure: '10 Years',           // Membership Tenure 
    //     AplicationDate: '17-Jun-2024',         // Application Date Batch
    //     Dependent: 'YES',                      // If want to Add Child Pass YES else Pass NO
    //     DepChildNRICFull: 'S4986734D',         // Chid NRIC
    //     DependentChildTenure: '5 Years',       // Child Tenure 
    //     Spouse: 'NO',                          // If want to Add Spouse Pass YES else Pass NO
    //     DepSouseNRICFull: 'S1091331D',         // Spouse Nric
    //     DependentSpouseTenure: '5 Years'       // Spouse Tenure
    // },
    // {
    //     SFS: 'SFS Enable',                     // To disable SFS type 'SFS Disable'
    //     MaritalStatus: 'Married',              // Enter Marital Status
    //     MemberType: 'VR',                      // Enter Member Type      
    //     CustomerNRICFull: 'S7205563B',         // Enter Nric
    //     PrincipalTenure: '10 Years',           // Membership Tenure 
    //     AplicationDate: '17-Jun-2024',         // Application Date Batch
    //     Dependent: 'YES',                      // If want to Add Child Pass YES else Pass NO
    //     DepChildNRICFull: 'S4986734D',         // Chid NRIC
    //     DependentChildTenure: '5 Years',       // Child Tenure 
    //     Spouse: 'NO',                          // If want to Add Spouse Pass YES else Pass NO
    //     DepSouseNRICFull: 'S1091331D',         // Spouse Nric
    //     DependentSpouseTenure: '5 Years'       // Spouse Tenure
    // },
    // {
    //     SFS: 'SFS Enable',                     // To disable SFS type 'SFS Disable'
    //     MaritalStatus: 'Married',              // Enter Marital Status
    //     MemberType: 'FA',                      // Enter Member Type      
    //     CustomerNRICFull: 'S7205563B',         // Enter Nric
    //     PrincipalTenure: '10 Years',           // Membership Tenure 
    //     AplicationDate: '17-Jun-2024',         // Application Date Batch
    //     Dependent: 'YES',                      // If want to Add Child Pass YES else Pass NO
    //     DepChildNRICFull: 'S4986734D',         // Chid NRIC
    //     DependentChildTenure: '5 Years',       // Child Tenure 
    //     Spouse: 'NO',                          // If want to Add Spouse Pass YES else Pass NO
    //     DepSouseNRICFull: 'S1091331D',         // Spouse Nric
    //     DependentSpouseTenure: '5 Years'       // Spouse Tenure
    // },
]
const BatchMembershipRegistrationWithNewMemberPrincipal = [

    {
        MemberType: 'AS',
        NricNewPrincipal: 'S6104895B',
        DOBNewPrincipal: '23-Sep-1990',
        AplicationDate: '01-Jan-2025',
        Tenure: '5 Years'
    },
    // {
    //     MemberType: 'AV',
    //     NricNewPrincipal: 'S7868263I',
    //     DOBNewPrincipal: '23-Sep-1990',
    //     AplicationDate: '01-Jan-2025',
    //     Tenure: '5 Years'
    // },
    // {
    //     MemberType: 'OD',
    //     NricNewPrincipal: 'S5731261J',
    //     DOBNewPrincipal: '23-Sep-1990',
    //     AplicationDate: '01-Jan-2025',
    //     Tenure: '5 Years'
    // },
    // {
    //     MemberType: 'OE',
    //     NricNewPrincipal: 'S7755650H',
    //     DOBNewPrincipal: '23-Sep-1990',
    //     AplicationDate: '01-Jan-2025',
    //     Tenure: '5 Years'
    // },
    // {
    //     MemberType: 'OF',
    //     NricNewPrincipal: 'S8725036I',
    //     DOBNewPrincipal: '23-Sep-1990',
    //     AplicationDate: '01-Jan-2025',
    //     Tenure: '5 Years'
    // },
    // {
    //     MemberType: 'VT',
    //     NricNewPrincipal: 'S5995688D',
    //     DOBNewPrincipal: '23-Sep-1990',
    //     AplicationDate: '01-Jan-2025',
    //     Tenure: '5 Years'
    // },
    // {
    //     MemberType: 'AT',
    //     NricNewPrincipal: 'S5995688D',
    //     DOBNewPrincipal: '23-Sep-1990',
    //     AplicationDate: '01-Jan-2025',
    //     Tenure: '2 Years'
    // },
    // {
    //     MemberType: 'LF',
    //     NricNewPrincipal: 'S5995688D',
    //     DOBNewPrincipal: '23-Sep-1990',
    //     AplicationDate: '01-Jan-2025',
    //     Tenure: '5 Years'
    // },
    // {
    //     MemberType: 'OA',
    //     NricNewPrincipal: 'S5995688D',
    //     DOBNewPrincipal: '23-Sep-1990',
    //     AplicationDate: '01-Jan-2025',
    //     Tenure: '5 Years'
    // },
    // {
    //     MemberType: 'FA',
    //     NricNewPrincipal: 'S5995688D',
    //     DOBNewPrincipal: '23-Sep-1990',
    //     AplicationDate: '01-Jan-2025',
    //     Tenure: '5 Years'
    // },
    // {
    //     MemberType: 'VD',
    //     NricNewPrincipal: 'S5995688D',
    //     DOBNewPrincipal: '23-Sep-1990',
    //     AplicationDate: '01-Jan-2025',
    //     Tenure: '5 Years'
    // },
    // {
    //     MemberType: 'VO',
    //     NricNewPrincipal: 'S5995688D',
    //     DOBNewPrincipal: '23-Sep-1990',
    //     AplicationDate: '01-Jan-2025',
    //     Tenure: '5 Years'
    // },
    // {
    //     MemberType: 'VR',
    //     NricNewPrincipal: 'S5995688D',
    //     DOBNewPrincipal: '23-Sep-1990',
    //     AplicationDate: '01-Jan-2025',
    //     Tenure: '5 Years'
    // },
]
const BatchMembershipRegistrationWithNewMemberDependent = [
    {
        MemberType: 'AS',
        NricNewDependent: 'S6240183D',
        DOBNewDependent: '13-Jan-1989',
        AplicationDate: '17-Jun-2024',
        Tenur: '5 Years'
    },
    // {
    //     MemberType: 'AV',
    //     NricNewDependent: 'S4713350E',
    //     DOBNewDependent: '13-Jan-1989',
    //     AplicationDate: '17-Jun-2024',
    //     Tenur: '5 Years'
    // },
    // {
    //     MemberType: 'OD',
    //     NricNewDependent: 'S5297041E',
    //     DOBNewDependent: '13-Jan-1989',
    //     AplicationDate: '17-Jun-2024',
    //     Tenur: '5 Years'
    // },
    // {
    //     MemberType: 'OE',
    //     NricNewDependent: 'S8866036F',
    //     DOBNewDependent: '13-Jan-1989',
    //     AplicationDate: '17-Jun-2024',
    //     Tenur: '5 Years'
    // },
    // {
    //     MemberType: 'OF',
    //     NricNewDependent: 'S9592929Z',
    //     DOBNewDependent: '13-Jan-1989',
    //     AplicationDate: '17-Jun-2024',
    //     Tenur: '5 Years'
    // },
    // {
    //     MemberType: 'VT',
    //     NricNewDependent: 'S6379152J',
    //     DOBNewDependent: '13-Jan-1989',
    //     AplicationDate: '17-Jun-2024',
    //     Tenur: '2 Years'
    // },
    // {
    //     MemberType: 'AT',
    //     NricNewDependent: 'S6379152J',
    //     DOBNewDependent: '13-Jan-1989',
    //     AplicationDate: '17-Jun-2024',
    //     Tenur: '5 Years'
    // },
    // {
    //     MemberType: 'LF',
    //     NricNewDependent: 'S6379152J',
    //     DOBNewDependent: '13-Jan-1989',
    //     AplicationDate: '17-Jun-2024',
    //     Tenur: '5 Years'
    // },
    // {
    //     MemberType: 'OA',
    //     NricNewDependent: 'S6379152J',
    //     DOBNewDependent: '13-Jan-1989',
    //     AplicationDate: '17-Jun-2024',
    //     Tenur: '5 Years'
    // },
    // {
    //     MemberType: 'VD',
    //     NricNewDependent: 'S6379152J',
    //     DOBNewDependent: '13-Jan-1989',
    //     AplicationDate: '17-Jun-2024',
    //     Tenur: '5 Years'
    // },
    // {
    //     MemberType: 'VO',
    //     NricNewDependent: 'S6379152J',
    //     DOBNewDependent: '13-Jan-1989',
    //     AplicationDate: '17-Jun-2024',
    //     Tenur: '5 Years'
    // },
    // {
    //     MemberType: 'VR',
    //     NricNewDependent: 'S6379152J',
    //     DOBNewDependent: '13-Jan-1989',
    //     AplicationDate: '17-Jun-2024',
    //     Tenur: '5 Years'
    // },
    // {
    //     MemberType: 'FA',
    //     NricNewDependent: 'S6379152J',
    //     DOBNewDependent: '13-Jan-1989',
    //     AplicationDate: '17-Jun-2024',
    //     Tenur: '5 Years'
    // },

]




export {
    BatchMembershipRegistrationWithNonMembers, BatchMembershipRegistrationWithExistingMembers,
    BatchMembershipRegistrationWithNewMemberPrincipal, BatchMembershipRegistrationWithNewMemberDependent
}