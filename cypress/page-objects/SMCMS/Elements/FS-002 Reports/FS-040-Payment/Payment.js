class elems_Payment {
    static BTN_GENERATE = '//button[text()="Generate"]'
    static BTN_EXPORT = '//button[text()="Export"]'
    static BTN_SEARCHFILTER = '//button[text()="Search Filters"]'
    static BTN_SELECT = '//button[text()="Select"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static LBL_PAGE = '//h2'

    //Deductions Listing Forms
    static TXT_STARTDATE = '//input[@id="dtpStartDate"]'
    static TXT_ENDDATE = '//input[@id="dtpEndDate"]'

    //SFS Transaction
    static PCK_SOURCECHANNEL = '//label[text()="Source Channel"]//following-sibling::div//button'
    static TXT_TDATEFROM = '//input[@id="dtpTransactionDateFrom"]'
    static TXT_TDATETO = '//input[@id="dtpTransactionDateTo"]'
}

export default elems_Payment