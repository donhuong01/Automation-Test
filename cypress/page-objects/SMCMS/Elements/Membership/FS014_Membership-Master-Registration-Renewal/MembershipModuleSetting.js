class elems_MembershipModuleSetting {
    static DOCUMENTARYPROOFSETTING = {
        TXT_MAXIMUMALLOWEDFILESIZE : '//input[@id="txtMaxSize"]',
        CHK_DELETEDOCUMENTS : '//input[@id="checkDeleteDoc"]',
        TXT_1STNOTIFICATIONAFTER : '//input[@id="txtFirstNotif"]',
        TXT_2NDNOTIFICATIONAFTER : '//input[@id="txtSecondNotif"]',
        TXT_3RDNOTIFICATIONAFTER : '//input[@id="txtThirdNotif"]',
        TXT_FINALNOTIFICATIONAFTER : '//input[@id="txtFinalNotif"]',
        TXT_TERMINATIONAFTER : '//input[@id="txtTermination"]',
        TXT_DOCUMENTARYPUSL : '//textarea[@id="txtDocumentaryProof"]',

    }
    static RENEWAL = {
        CHK_ENABLEERENWALADVICE : '//input[@id="txtEnableRenewal"]',
        TXT_NUMBEROFMONTHSBEFORE : '//input[@id="txtMonthRenewal"]',
        TXT_ERENWAPREFIX : '//textarea[@id="txtPrefixUrl"]',

    }
    static SAFRAFAMILYSCHEMESFSSETTING = {
        CHK_SFSACTIVATION : '//input[@id="checkSfsActivation"]',
        PCK_ADMINISTRATIONFEECHARGEITEM : '//label[@for="pckAdminFee"]/parent::div//button',
        PCKPOPUP_ADMINFEECHARGE : {
            TBL_ADMINFEECHARGEPOPUP : '//div[@class="k-window-content k-dialog-content"]//table',
            TXT_NAME : '//div[@class="k-window-content k-dialog-content"]//input[@name="name"]',
            TXT_DESCRIPTION : '//div[@class="k-window-content k-dialog-content"]//input[@name="description"]',
            DRP_CARDTYPE : '//label[@class="k-label" and contains(.,"Card Type")]//following-sibling::span',
            TXT_STATUS : '//label[@class="k-label" and contains(.,"Status")]//following-sibling::span',
            BTN_SEARCHFILTERS : '//div[@class="k-window-content k-dialog-content"]//button[@class="k-button search-button"]'
        }

    }
    static REFUNEXCESSPAYMENT = {
        CHK_AUTOREFUNDEXCESSPAYMENT: '//input[@id="checkAutoRefundExcessPayment"]',
        DRP_DEFAULTREFUNDMODEFE : '//span[@id="drpDefaultRefundModeFrontend"]',
        DRP_DEFAULTREFUNDMODEAD : '//span[@id="drpDefaultRefundModeAutodeduction"]'

    }
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'    
}
export default elems_MembershipModuleSetting