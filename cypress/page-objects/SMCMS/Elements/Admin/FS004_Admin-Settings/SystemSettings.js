class  elems_SystemSettings {

    static EmailServer = {
        TXT_SENDGRIDENDPOINT = '//input[@id="txtSendGridEndpoint"]',
        TXT_SENDGRIDAPIKEY = '//input[@id="txtSendGridApiKey"]',
        CHK_ENABLETLS = '//input[@id="checkEnableTls"]',
        TXT_FROMADDRESS = '//input[@id="txtFromAddress"]',
        TXT_REPLYTOADDRESS = '//input[@id="txtReplyToAddress"]'
    }
    
    static UISettings = {
        static TXT_SAMPLESETTING = '//input[@id="txtSampleSetting"]'
    }
    
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_SystemSettings