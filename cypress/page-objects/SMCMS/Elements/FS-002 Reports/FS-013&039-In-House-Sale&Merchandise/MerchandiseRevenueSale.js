class elems_MerchandiseRevenueSale {
    static PCK_MERCHANDISE = '//label[text()="Merchandise Sale Item Name"]//following-sibling::div//button'
    static DRP_RECEIPT = '//span[@id="drpReceiptStatus"]'
    static TXT_DATEFROM = '//input[@id="dtFrom"]'
    static TXT_DATETO = '//input[@id="dtTo"]'
    static BTN_GENERATE = '//button[text()="Generate"]'
    static BTN_EXPORT = '//button[text()="Export"]'
    static BTN_SEARCHFILTER = '//button[text()="Search Filters"]'
    static BTN_SELECT = '//button[text()="Select"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static LBL_PAGE = '//h2'
}

export default elems_MerchandiseRevenueSale