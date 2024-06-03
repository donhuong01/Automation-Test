class elems_GiftManagement {

    static ListingForm = {
        BTN_IMPORTMANAGEMENTPRODUCT: '//button[text()="Import From Product"]',
        TXT_ITEMCODE: '//input[@id="txtItemCode"]',
        TXT_ITEMDESCRIPTION: '//input[@id="txtItemDescription"]',
        TBL_GIFTMANAGEMENTLISTING: '//div[@class="container-fluid"]//table',
        BTN_SEARCHFILTERS: '//span[text()="Search Filters"]',
        PCK_WAREHOUSE: '//label[text()="Warehouse"]//following-sibling::div//button',
        TXT_WAREHOUSENAME: '//input[@name="name"]',
        BTN_WAREHOUSEFILTERS: '(//span[text()="Search Filters"])[1]',
        BTN_SELECT: '//span[text()="Select"]',
    }
    static DetailForm = {
        BTN_SAVE: '//button[@form="formDetail"]',
        BTN_CANCEL: '//span[text()="Cancel"]',
        DRP_REDEMPTIONTYPE: '//span[@id="drpRedemptionType"]',
        DATE_PUBLISHDATEFROM: '//input[@id="dtpPublishDateFrom"]',
        DATE_PUBLISHDATETO: '//input[@id="dtpPublishDateTo"]',
        TXT_EXPIRYCOLLECTION: '//input[@id="txtExpiryCollection"]',
        TXT_PRICE: '//input[@id="txtPrice"]',
        DRP_GIFTCATEGORY: '//span[@id="txtGiftCategory"]',
        DRP_STATUS: '//span[@id="drpStatus"]',
        UPLOADFILE: '//button[@id="uplFile"]'
    }
}
export default elems_GiftManagement