class elems_BulkGiftRedemptionUpload {
    static BTN_SUBMIT = '//button[text()="Submit"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    
    static UPLOADINFORMATION = {
        LNK_CLICKTODOWNLOADTEMPLATE : '//a[text()="Click to Download Template"]',
        UPL_SELECTFILES : '//div[@id="uplBulkGiftRedemption"]//input[@type="file"]',
        UPL_CANCEL : '//span[@title="Cancel"]/parent::button',
        BTN_UPLOAD : '//button[text()="Upload"]'

    }
    static TBL_GIFTREDEMPTIONLISTING = '//h3[text()="Gift Redemption Listing"]/ancestor::div//table'
    
}
export default elems_BulkGiftRedemptionUpload