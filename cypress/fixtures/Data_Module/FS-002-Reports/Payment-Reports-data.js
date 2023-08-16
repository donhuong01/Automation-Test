/******************************************************
*                      UAT Data                       *
******************************************************/

const data = {

    //Receipt Listing
    RECEIPT:{
        EXPECTEDPG: "Report Viewer - ReportPayment.Receipt"
    },
    
    //IBG Deduction Listing
    IBG_DEDUCT:{
        EXPECTEDPG: "Report Viewer - ReportPayment.IBGDeduction",
        START_DATE: "",
        END_DATE: ""
    },

     //PAYM Deduction Listing
     PAYM_DEDUCT:{
        EXPECTEDPG: "Report Viewer - ReportPayment.PAYMDeduction",
        START_DATE: "",
        END_DATE: ""
    },

    //CC Deduction Listing
    CC_DEDUCT:{
        EXPECTEDPG: "Report Viewer - ReportPayment.CCDeduction",
        START_DATE: "",
        END_DATE: ""
    },

    //Failed Paymaster Deduction Listing
    PAY_MASTER_DEDUCTION:{
        EXPECTEDPG: "Report Viewer - ReportPayment.FailedPaymasterDeduction"
    },

    //SFS Transaction Listing
    SFS_TRANSACTION:{
        EXPECTEDPG: "Report Viewer - ReportPayment.SFSTransaction",
        SOURCE_CHANNEL: '',
        TRANSAC_DATE_FROM: '',
        TRANSAC_DATE_TO: ''
    },

}

export default data