class  elems_AdhocBatchProcessingReportsRequestListing {

    static TXT_REPORTNAME = '//input[@id="txtReportName"]'
    static DATE_REQUESTDATE = '//input[@id="dtpRequestDate"]'
    static BTN_SEARCH = '//button[text()="Search Filters"]'
    static TBL_ADHOCBATCHPRCESSRPORTSRQUESTLIST = '//h2[text()="Ad-hoc Batch Processing Reports Request Listing"]/ancestor::div//table'
    static BTN_CREATENEW = '//button[text()="Create New"]'
    static BTN_CANCELREQUEST = '//button[text()="Cancel Request"]'
}

export default elems_AdhocBatchProcessingReportsRequestListing