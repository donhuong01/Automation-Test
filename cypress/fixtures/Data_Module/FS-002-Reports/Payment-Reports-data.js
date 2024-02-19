/******************************************************
*                      UAT Data                       *
******************************************************/

const data = {

    //Receipt Listing
    RECEIPT:{
        EXPECTEDPG: "Report Viewer - Receipt"
    },
    
    //IBG Deduction Listing
    IBG_DEDUCT:{
        EXPECTEDPG: "Report Viewer - IBG Deduction",
        START_DATE: "",
        END_DATE: ""
    },

     //PAYM Deduction Listing
     PAYM_DEDUCT:{
        EXPECTEDPG: "Report Viewer - PAYM Deduction",
        START_DATE: "",
        END_DATE: ""
    },

    //CC Deduction Listing
    CC_DEDUCT:{
        EXPECTEDPG: "Report Viewer - CC Deduction",
        START_DATE: "",
        END_DATE: ""
    },

    //Failed Paymaster Deduction Listing
    PAY_MASTER_DEDUCTION:{
        EXPECTEDPG: "Report Viewer - ReportPayment.FailedPaymasterDeduction"
    },

    //SFS Transaction Listing
    SFS_TRANSACTION:{
        EXPECTEDPG: "Report Viewer - SFS Transaction",
        SOURCE_CHANNEL: '',
        TRANSAC_DATE_FROM: '',
        TRANSAC_DATE_TO: ''
    },

    //Internet Receipt
    INTERNET_RECEIPT:{
        EXPECTEDPG: "Report Viewer - ReportPayment.InternetReceipt"
    },
}

export default data