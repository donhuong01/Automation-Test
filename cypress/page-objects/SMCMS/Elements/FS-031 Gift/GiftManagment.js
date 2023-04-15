class elems_GiftManagement {

    static ListingForm = {
        BTN_IMPORTMANAGEMENTPRODUCT: '//button[text()="Import From Product"]',
        TXT_ITEMCODE: '//input[@id="txtItemCode"]',
        TXT_ITEMDESCRIPTION: '//input[@id="txtItemDescription"]',
        TBL_GIFTMANAGEMENTLISTING: '//div[@class="container-fluid"]//table',
        BTN_SEARCHFILTERS: '//button[text()="Search Filters"]',
        PCK_WAREHOUSE: '//label[text()="Warehouse"]//following-sibling::div//button',
        TXT_WAREHOUSENAME: '//input[@name="name"]',
        BTN_WAREHOUSEFILTERS: '(//button[text()="Search Filters"])[1]',
        BTN_SELECT: '//button[text()="Select"]',
    }
    static DetailForm = {
        BTN_SAVE: '//button[@form="formDetail"]',
        BTN_CANCEL: '//button[text()="Cancel"]',
        DRP_REDEMPTIONTYPE: '//span[@id="drpRedemptionType"]',
        DATE_PUBLISHDATEFROM: '//input[@id="dtpPublishDateFrom"]',
        DATE_PUBLISHDATETO: '//input[@id="dtpPublishDateTo"]',
        TXT_EXPIRYCOLLECTION: '//input[@id="txtExpiryCollection"]',
        TXT_PRICE: '//input[@id="txtPrice"]',
        DRP_GIFTCATEGORY: '//span[@id="txtGiftCategory"]',
        DRP_STATUS: '//span[@id="drpStatus"]',
        UPLOADFILE: '//div[@id="uplFile"]'
    }
}
export default elems_GiftManagement