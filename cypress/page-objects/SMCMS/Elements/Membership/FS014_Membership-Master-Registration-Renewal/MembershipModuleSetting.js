class elems_MembershipModuleSetting {
    static DOCUMENTARYPROOFSETTING = {
        TXT_MAXIMUMALLOWEDFILESIZE : '//input[@id="txtMaxSize"]',
        CHK_DELETEDOCUMENTS : '//input[@id="checkDeleteDoc"]',
        TXT_1STNOTIFICATIONAFTER : '//input[@id="txtFirstNotif"]',
        TXT_2NDNOTIFICATIONAFTER : '//input[@id="txtSecondNotif"]',
        TXT_3RDNOTIFICATIONAFTER : '//input[@id="txtThirdNotif"]',
        TXT_FINALNOTIFICATIONAFTER : '//input[@id="txtFinalNotif"]',
        TXT_TERMINATIONAFTER : '//input[@id="txtTermination"]',
        TXT_DOCUMENTARYPUSL : '//input[@id="txtDocumentaryProof"]',

    }
    static RENEWAL = {
        CHK_ENABLEERENWALADVICE : '//input[@id="txtEnableRenewal"]',
        TXT_NUMBEROFMONTHSBEFORE : '//input[@id="txtMonthRenewal"]',
        TXT_ERENWAPREFIX : '//input[@id="txtPrefixUrl"]',

    }
    static SAFRAFAMILYSCHEMESFSSETTING = {
        CHK_SFSACTIVATION : '//input[@id="checkSfsActivation"]',
        PCK_ADMINISTRATIONFEECHARGEITEM : '//label[@for="pckAdminFee"]/parent::div//button'

    }
    static REFUNEXCESSPAYMENT = {
        CHK_AUTOREFUNDEXCESSPAYMENT: '//input[@id="checkAutoRefundExcessPayment"]',
        DRP_DEFAULTREFUNDMODEFE : '//span[@id="drpDefaultRefundModeFrontend"]',
        DRP_DEFAULTREFUNDMODEAD : '//span[@id="drpDefaultRefundModeAutodeduction"]'

    }
    static BTN_SAVE = '//button[text()="Save"]'
    static BTND_CANCEL = '//button[text()="Cancel"]'    
}
export default elems_MembershipModuleSetting