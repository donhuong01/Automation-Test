/******************************************************
*                      UAT Data                       *
******************************************************/

const data = {

    //FS-014
    BAD_ADDRESS:{
        EXPECTEDPG: 'Report Viewer - ReportMembership.BadAddressMembers',
    },

    DOCUMENTARY_PROOF_OPERATIONAL: {
        EXPECTEDPG: 'Report Viewer - ReportMembership.DocumentaryProofOperational',   
    },

    DOCUMENTARY_PROOF_VERIFIED: {
        EXPECTEDPG: 'Report Viewer - ReportMembership.DocumentaryProofVerified',
        DOCU_PROOF: '',
        START_DATE: '',
        END_DATE: ''
    },

    MEMBERSHIP_FIGURE: {
        EXPECTEDPG: 'Report Viewer - ReportMembership.MembershipFigure',
    },

    //FS-025
    VIP_APPOINTMENT: {
        EXPECTEDPG: 'Report Viewer - ReportMembership.VIPAppointmentTerm',
        EXPIRYFROM: '',
        EXPIRYTO: ''
    },

    //FS-034
    CUSTOMER_MARKTING: {
        EXPECTEDPG: 'Report Viewer - ReportMembership.CustomerMarketingProfile',
        CONSENT: '',
        MEMBERSHIP: '',
        CONTACTMODE: '',
        MEMBERSTATUS: '',
        EMAIL: ''
    },

    //FS-030
    DBS_BILLING: {
        EXPECTEDPG: 'Report Viewer - ReportMemberCard.DBSBilling',
    },

    //FS-032
    LUCKYDRAW_TRACKING: {
        EXPECTEDPG: 'Report Viewer - ReportMembership.LuckyDrawTracking',
    },

    LUCKYDRAW_WINNER: {
        EXPECTEDPG: 'Report Viewer - ReportMembership.LuckyDrawWinner',
    },

    //FS-026
    NSF_RECONCILIATION: {
        EXPECTEDPG: 'Report Viewer - ReportNSF.NSFReconciliation',
    },

    NSF_SUMMARY: {
        EXPECTEDPG: 'Report Viewer - ReportNSF.NSFSummary',
    },

    FAILED_PAYMASTER: {
        EXPECTEDPG: 'Report Viewer - ReportMembership.FailedPaymasterDeduction',
    },

    //FS-027
    TRANSACTION_PRINCIPAL: {
        EXPECTEDPG: 'Report Viewer - ReportMembership.TransactionByPrincipal',
    },




}

export default data