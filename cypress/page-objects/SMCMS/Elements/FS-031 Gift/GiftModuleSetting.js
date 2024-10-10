class elems_GiftModuleSetting {

    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static TXT_GIFTREDEMPTIONLETTER = '//input[@id="lblGiftRedemptionLetterValidityPeriod"]'
    static CHK_SENDGIFTREDEMPTIONLETR = '//input[@id="chkSendGiftRedemptionLetterViaEmail"]'
    static TXT_SENDREMINDERLETTER = '//input[@id="txtSendReminderEmail"]'
    static BTN_ADDSOURCECHANNEL = '//h3[text()="Source Channel Listing"]/following-sibling::button[text()="Add"]'
    static BTN_REMOVESOURCECHANNEL = '//h3[text()="Source Channel Listing"]/following-sibling::button[text()="Remove"]'
    static TXT_SCNAME = '//input[@id="txtName"]'
    static TBL_SOURCECHANNEL = '//h3[text()="Source Channel Listing"]/parent::div//table'
}
export default elems_GiftModuleSetting