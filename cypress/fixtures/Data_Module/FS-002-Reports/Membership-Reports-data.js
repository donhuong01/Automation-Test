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
    }

}

export default data