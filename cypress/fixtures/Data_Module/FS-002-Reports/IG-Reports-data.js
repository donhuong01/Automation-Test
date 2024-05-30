/******************************************************
*                      UAT Data                       *
******************************************************/

const data = {
    /*IGMAIN: {
        expectedPg: '',
        iGMain: 'Test',
        iGMainNumber: ''
    }*/

    table: '//div[@data-id="table1_1"]',
    

    //IG Main Data
    IG_MAIN:{
        IGMAIN: 'Badminton Social Group',
        IG: 'BITEZ',
        IGMAINNUMBER: 'IG-RIS-100000012',
        EXPECTEDPG_IGMAIN: 'Report Viewer - Interest Group Main',
    },


    //IG Deactivation Data
    IG_DEACTIVATE:{
        IGMAIN: 'Badminton Social Group',
        IG: 'Badminton Training.',
        DEACTIVATEDATE: '25-May-2023',
        EXPECTEDPG_DEACTIVATION: 'Report Viewer - Interest Group Deactivation',
    },

    //IG Deferment Summary
    IG_DEFERMENT:{
            EXPECTEDPG_DEFERMENT: 'Report Viewer - Interest Group Membership Deferment',
        IGMAIN: 'Badminton Social Group',
        IG: 'Badminton Training.',
        DEFERDATE_FROM: '01-Dec-2021',
        DEFERDATE_TO: '30-Dec-2027'
    },

    //IG Deferment Summary
    IG_DEFER_SUMMARY:{
        EXPECTEDPG_DEFERMENT_SUMMARY: 'Report Viewer - Interest Group Membership Deferment Summary',
    },


    //IG Renewal listing
    IG_RENEWAL:{
        IGMAIN: 'MOVIEMAX',
        IG: 'CINIPEX',
        EXPECTEDPG_RENEWAL: 'Report Viewer - Interest Group Membership Renewal',
        RENEWAL_FROM: '30-Dec-2017',
        RENEWAL_TO: '31-Aug-2027',
    },


    //IG Member Listing
    IG_MEM_LIST:{
        IGMAIN: 'Badminton Social Group',
        IG: 'Badminton Training.',
        EXPECTEDPG_MEMBERLISTING: 'Report Viewer - Interest Group Membership Listing',
        INITIAL_DATE:'18-Nov-2022',
        EXPIRY_DATE: '30-Dec-2030',
    },
    

    //IG Member Listing Address
    IG_MEM_LIST_ADD:{
        IGMAIN: 'Badminton Social Group',
        IG: 'Badminton Training.',
        EXPECTEDPG_MEMBERLISTING_ADDRESS: 'Report Viewer - Interest Group Membership Address',
        INITIAL_DATE:'18-Nov-2022',
        EXPIRY_DATE: '30-Dec-2030',
    },
    

    //IG Member listing Email
    IG_MEM_LIST_EMAIL:{
        IGMAIN: 'Badminton Social Group',
        IG: 'Badminton Training.',
        EXPECTEDPG_MEMBERLISTING_EMAIL: 'Report Viewer - Interest Group Membership Email',
        INITIAL_DATE:'18-Nov-2022',
        EXPIRY_DATE: '30-Dec-2030',
    },

    //IG Member listing Mobile
    IG_MEM_LIST_MOBILE:{
        IGMAIN: 'Badminton Social Group',
        IG: 'Badminton Training.',
        EXPECTEDPG: 'Report Viewer - Interest Group Membership Mobile',
        INITIAL_DATE:'18-Nov-2022',
        EXPIRY_FROM: '01-Dec-2020',
        EXPIRY_TO: '30-Dec-2030'
    },

    //IG Membership Registration
    IG_REGISTRATION:{
        IGMAIN: 'MOVIEMAX',
        IG: 'CINIPEX',
        EXPECTEDPG_REGISTRATION: 'Report Viewer - Interest Group Membership Registration',
        REG_FROM:'01-Dec-2020',
        REG_TOL:'31-Aug-2027',
    },


    //IG Termination Summary
    IG_TERMI_SUMAMRY:{
        EXPECTEDPG_TERMINATION_SUMMARY: 'Report Viewer - Interest Group Membership Termination Summary',
    },


    //IG Deferment Summary
    IG_DEFER_SUMAMRY:{
        EXPECTEDPG_DEFERMENT_SUMMARY: 'Report Viewer - Interest Group Membership Deferment Summary',
    },


    //IG Termination Listing
    IG_TERMINATION: {
        IGMAIN: 'Badmintion Social Group',
        IG: 'Test IG Receipt',
        EXPECTEDPG_TERMINATION: 'Report Viewer - Interest Group Membership Termination',
        TERMINATED_BY: 'Customer',
        TERMINATED_DATE: '07-Apr-2023',
    },


    //IG Waiver Listing
    IG_WAIVER:{
        IGMAIN: 'MOVIEMAX',
        IG: 'CINIPEX',
        EXPECTEDPG_WAIVER: 'Report Viewer - Interest Group Membership Waiver',
        TERM_START_DATE: '01-Dec-2020',
        TERM_END_DATE: '01-Jan-2027',
    },
    

    //IG Renewal Confirmation
    IG_RENEWAL_CONFIRM:{
        EXPECTEDPG_RENEWAL_SUMMARY: 'Report Viewer - Interest Group Renewal Confirmation',
    },

    //IG Member Listing
    IG_RENEW_REGIS:{
        IGMAIN: 'Badminton Social Group',
        IG: 'BITEZ',
        EXPECTEDPG_REGISTRATIONORRENEWAL: 'Report Viewer - Interest Group Membership Registration Or Renewal',
        EXPIRY_FROM: '29-Dec-2020',
        EXPIRY_TO: '29-Dec-2026',
    },
    
    //IG MOVIEMAX Confirmation
    IG_MOVIEMAX:{
        EXPECTEDPG_MOVIEMAX: 'Report Viewer - Interest Group Movie Max Promotion',
    },

    //IG Membership Registration Listing Receipt Date
    IG_REG_RECEIPT_DATE: {
        IGMAIN: 'Badminton Social Group',
        IG: 'BITEZ',
        EXPECTEDPG: 'Report Viewer - Interest Group Membership Registration By Receipt Date',
        START_DATE: '29-Dec-2020',
        END_DATE: '29-Dec-2026',
    },

    //IG Membership Interest Group Listing
    IG_MEM_INTEREST_GROUP: {
        IG: 'BITEZ',
        CUSTOM_CATEG: 'All Customer Category',
        EXPECTEDPG: 'Report Viewer - Membership Interest Group Listing',
        BUSINESS_TYPE: 'Normal',
        STATUS: 'Approved',
        PUBLISHING_DATE: '29-Dec-2020',
        END_DATE: '29-Dec-2026',
    },





}


/******************************************************
*                      QA Data                       *
******************************************************/


/*


const data = {
   

    table: '//div[@data-id="table1_1"]',
    

    //IG Main Data
    IG_MAIN:{
        IGMAIN: 'Badminton Social Group',
        IG: 'BITEZ',
        IGMAINNUMBER: 'IGM-260922-000037',
        EXPECTEDPG_IGMAIN: 'Report Viewer - ReportIG.InterestGroupMainListing',
    },


    //IG Deactivation Data
    IG_DEACTIVATE:{
        IGMAIN: 'Badminton Social Group',
        IG: 'BITEZ',
        DEACTIVATEDATE: '25-May-2023',
        EXPECTEDPG_DEACTIVATION: 'Report Viewer - ReportIG.MembershipDeactivationListing',
    },


    //IG Deferment Summary
    IG_DEFER_SUMMARY:{
        EXPECTEDPG_DEFERMENT_SUMMARY: 'Report Viewer - ReportIG.MembershipDefermentSummaryListing',
    },


    //IG Renewal listing
    IG_RENEWAL:{
        IGMAIN: 'Badminton Social Group',
        IG: 'BITEZ',
        EXPECTEDPG_RENEWAL: 'Report Viewer - ReportIG.MembershipRenewalListing',
        RENEWAL_FROM: '01-Dec-2022',
        RENEWAL_TO: '01-Dec-2026',
    },


    //IG Member Listing
    IG_MEM_LIST:{
        IGMAIN: 'Badminton Social Group',
        IG: 'BITEZ',
        EXPECTEDPG_MEMBERLISTING: 'Report Viewer - ReportIG.MembershipListing',
        INITIAL_DATE:'01-Jan-2020',
        EXPIRY_DATE: '29-Dec-2026',
    },
    

    //IG Member Listing Address
    IG_MEM_LIST_ADD:{
        IGMAIN: 'Badminton Social Group',
        IG: 'BITEZ',
        EXPECTEDPG_MEMBERLISTING_ADDRESS: 'Report Viewer - ReportIG.MembershipListingAddress',
        INITIAL_DATE:'01-Jan-2020',
        EXPIRY_DATE: '29-Dec-2026',
    },
    

    //IG Member listing Email
    IG_MEM_LIST_EMAIL:{
        IGMAIN: 'Badminton Social Group',
        IG: 'BITEZ',
        EXPECTEDPG_MEMBERLISTING_EMAIL: 'Report Viewer - ReportIG.MembershipListingEmail',
        INITIAL_DATE:'01-Jan-2020',
        EXPIRY_DATE: '29-Dec-2026',
    },

    //IG Member listing Mobile
    IG_MEM_LIST_MOBILE:{
        IGMAIN: 'Badminton Social Group',
        IG: 'BITEZ',
        EXPECTEDPG: 'Report Viewer - ReportIG.MembershipListingEmail',
        INITIAL_DATE:'01-Jan-2020',
        EXPIRY_FROM: '01-Dec-2020',
        EXPIRY_TO: '30-Dec-2030'
    },

    //IG Membership Registration
    IG_REGISTRATION:{
        IGMAIN: 'Badminton Social Group',
        IG: 'BITEZ',
        EXPECTEDPG_REGISTRATION: 'Report Viewer - ReportIG.MembershipRegistrationListing',
        REG_FROM:'01-Jan-2020',
        REG_TOL:'29-Dec-2026',
    },


    //IG Termination Summary
    IG_TERMI_SUMAMRY:{
        EXPECTEDPG_TERMINATION_SUMMARY: 'Report Viewer - ReportIG.MembershipTerminationSummaryListing',
    },


    //IG Deferment Summary
    IG_DEFER_SUMAMRY:{
        EXPECTEDPG_DEFERMENT_SUMMARY: 'Report Viewer - ReportIG.MembershipDefermentSummaryListing',
    },


    //IG Termination Listing
    IG_TERMINATION: {
        IGMAIN: 'Badminton Social Group',
        IG: 'BITEZ',
        EXPECTEDPG_TERMINATION: 'Report Viewer - ReportIG.MembershipTerminationSummaryListing',
        TERMINATED_BY: 'Customer',
        TERMINATED_DATE: '29-Dec-2026',
    },


    //IG Waiver Listing
    IG_WAIVER:{
        IGMAIN: 'Badminton Social Group',
        IG: 'BITEZ',
        EXPECTEDPG_WAIVER: 'Report Viewer - ReportIG.MembershipWaiverListing',
        TERM_START_DATE: '01-Jan-2020',
        TERM_END_DATE: '29-Dec-2026',
    },
    

    //IG Renewal Confirmation
    IG_RENEWAL_CONFIRM:{
        EXPECTEDPG_RENEWAL_SUMMARY: 'Report Viewer - ReportIG.RenewalConfirmation',
    },

    //IG Member Listing
    IG_RENEW_REGIS:{
        IGMAIN: 'Badminton Social Group',
        IG: 'BITEZ',
        EXPECTEDPG_REGISTRATIONORRENEWAL: 'Report Viewer - ReportIG.MembershipRegistrationOrRenewalListing',
        EXPIRY_FROM: '29-Dec-2020',
        EXPIRY_TO: '29-Dec-2026',
    },
    
    //IG MOVIEMAX Confirmation
    IG_MOVIEMAX:{
        EXPECTEDPG_MOVIEMAX: 'Report Viewer - ReportIG.MovieMaxPromotion',
    },

    //IG Membership Registration Listing Receipt Date
    IG_REG_RECEIPT_DATE: {
        IGMAIN: 'Badminton Social Group',
        IG: 'BITEZ',
        EXPECTEDPG: 'Report Viewer - ReportIG.MembershipRegistrationByReceiptDate',
        START_DATE: '29-Dec-2020',
        END_DATE: '29-Dec-2026',
    },

    //IG Membership Interest Group Listing
    IG_MEM_INTEREST_GROUP: {
        IG: 'BITEZ',
        CUSTOM_CATEG: 'All Customer Category',
        EXPECTEDPG: 'Report Viewer - ReportIG.MembershipInterestGroupListing',
        BUSINESS_TYPE: 'Normal',
        STATUS: 'Approved',
        PUBLISHING_DATE: '29-Dec-2020',
        END_DATE: '29-Dec-2026',
    },


} 
*/

export default data
