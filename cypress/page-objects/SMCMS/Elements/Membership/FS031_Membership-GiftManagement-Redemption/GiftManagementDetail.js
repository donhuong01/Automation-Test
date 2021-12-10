class elems_GiftManagementDetail {
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static LBL_ITEMCODE = '//label[@for="lblItemCode"]'
    static LBL_ITEMDESCRIPTION = '//label[@for="lblItemDescription"]'
    static DATE_VALIDITYDATE = '//input[@id="dtpValidityDate"]'
    static DATE_EXPIRYDATE = '//input[@id="dtpExpiryDate"]'
    static LBL_REDEMPTIONTYPE = '//label[@for="lblRedemptionType"]'
    static TXT_EXPIRYCOLLECTION = '//input[@id="txtExpiryCollection"]'
    static TXT_PRICE = '//input[@id="txtPrice"]'
    static DRP_STATUS = '//span[@id="txtStatus"]'
    static UPL_SELECTFILES = '//div[@id="uplImage"]//input[@type="file"]'
    static UPL_CANCEL = '//span[@title="Cancel"]/parent::button'
    static IMG_IMAGE = '//label[text()="Image"]/following::img'
    
}
export default elems_GiftManagementDetail