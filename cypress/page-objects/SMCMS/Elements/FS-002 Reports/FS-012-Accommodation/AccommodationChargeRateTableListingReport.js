class elems_AccommodationChargeRateTableListingReport {

    static DRP_TRANSACTIONTYPE = '//span[@id="drpTransactionType"]'
    static DRP_CALCULATIONTYPE = '//span[@id="drpCalculationType"]'
    static DRP_AMOUNTTYPE = '//span[@id="drpAmountType"]'
    static PCK_ACCOMODATIONTYPENAME = '//label[text()="Accommodation Type Name"]//following-sibling::div//button'
    static PCK_ACCOMMODATIONNAME = '//label[text()="Accommodation Name"]//following-sibling::div//button'
    static PCK_LOCATION = '//label[text()="Location"]//following-sibling::div//button'
    static BTN_GENERATE = '//button[text()="Generate"]'
    static BTN_EXPORT = '//button[text()="Export"]'
    static BTN_SEARCHFILTER = '//button[text()="Search Filters"]'
    static BTN_SELECT = '//button[text()="Select"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static LBL_PAGE = '//h2'
}

export default elems_AccommodationChargeRateTableListingReport