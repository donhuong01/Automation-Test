/******************************************************
*                      UAT Data                       *
******************************************************/

const data = {

    //FS-014
    BAD_ADDRESS:{
        EXPECTEDPG: 'Report Viewer - Bad Address Members',
    },

    DOCUMENTARY_PROOF_OPERATIONAL: {
        EXPECTEDPG: 'Report Viewer - Documentary Proof Operational',   
    },

    DOCUMENTARY_PROOF_VERIFIED: {
        EXPECTEDPG: 'Report Viewer - Documentary Proof Verified',
        DOCU_PROOF: '',
        START_DATE: '',
        END_DATE: ''
    },

    MEMBERSHIP_FIGURE: {
        EXPECTEDPG: 'Report Viewer - Membership Figures',
    },

    MEMBERSHIP_TRANSACTION: {
        EXPECTEDPG: 'Report Viewer - ReportMembership.MembershipTransaction',
    },

    MEMBERSHIP_REVENUE: {
        EXPECTEDPG: 'Report Viewer - Membership Revenue',
    },

    MEMBERSHIP_RENEWAL: {
        EXPECTEDPG: 'Report Viewer - ReportMembership.MembershipRenewal',
    },

    //FS-025
    VIP_APPOINTMENT: {
        EXPECTEDPG: 'Report Viewer - VIP Appointment Term',
        EXPIRYFROM: '',
        EXPIRYTO: ''
    },

    //FS-034
    CUSTOMER_MARKTING: {
        EXPECTEDPG: 'Report Viewer - Customer Marketing Profile',
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
        EXPECTEDPG: 'Report Viewer - Lucky Draw Tracking',
    },

    LUCKYDRAW_WINNER: {
        EXPECTEDPG: 'Report Viewer - Lucky Draw Winner',
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