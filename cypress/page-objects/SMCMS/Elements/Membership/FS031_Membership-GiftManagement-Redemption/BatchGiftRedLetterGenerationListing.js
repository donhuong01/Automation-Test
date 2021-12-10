class elems_BatchGiftRedemptionLetterGenerationListing {
    static BTN_CREATENEW = '//button[contains(text(),"Create New")]'
    static BTN_DELETE = '//button[contains(text(),"Delete")]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static TXT_BATCHID = '//input[@id="txtBatchId"]'
    static DRP_BATCHTYPE = '//span[@id="drpBatchType"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static BTN_SEARCHFILTERS = '//button[text()="Search Filters"]'
    static TBL_BATCHGIFTREDLETTERGENLISTING = '//h2[text()="Batch Gift Redemption Letter Generation Listing"]/ancestor::div//table'
   
}
export default elems_BatchGiftRedemptionLetterGenerationListing