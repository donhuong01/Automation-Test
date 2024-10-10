class elems_BatchGiftRedemptionLetterGeneration {

    static ListingForm = {
        BTN_CREATENEW: '//button[text()="Create New"]',
        BTN_DELETE: '//button[text()="Delete"]',
        TXT_BATCHID: '//input[@id="txtBatchId"]',
        DRP_BATCHTYPE: '//span[@id="drpBatchType"]',
        DRP_STATUS: '//span[@id="drpStatus"]',
        BTN_SEARCHFILTERS: '//button[text()="Search Filters"]',
        TBL_BATCHGIFTLISTING: '//div[@class="k-widget k-grid"]//table'
    }
    static DetailForm = {

        BTN_SAVE: '//button[text()="Save"]',
        BTN_CANCEL: '//button[text()="Cancel"]',
        BTN_GENERATEREDEMPTIONLETTER: '//button[text()="Generate Redemption Letter"]',
        TXT_BATCHNAME: '//input[@id="txtBatchName"]',
        DRP_BATCHTYPE: '//span[@id="drpBatchType"]',
        DRP_AUTODEDUCTION: '//span[@id="drpAutoDeduction"]'
    }
}

export default elems_BatchGiftRedemptionLetterGeneration