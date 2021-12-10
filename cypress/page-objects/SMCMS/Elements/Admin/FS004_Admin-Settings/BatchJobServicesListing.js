class  elems_BatchJobServicesListing {

    static TXT_JOBNAME = '//input[@id="txtJobName"]'
    static BTN_SEARCH = '//button[text()="Search Filters"]'
    static TBL_BATCHJOBSERVCLISTING = '//h2[text()="Batch Job Services Listing"]/ancestor::div//table'
    static BTN_RUN = '//button[text()="Run"]'
    static BTN_ENABLE = '//button[text()="Enable"]'
    static BTN_DISABLE = '//button[text()="Disable"]'
}

export default elems_BatchJobServicesListing