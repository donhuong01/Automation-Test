class elems_BatchMembershipRegistrationListing {

    static TXT_BATCHID = '//input[@id="txtBatchId"]'
    static DRP_BATCHTYPE = '//span[@id="drpBatchType"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static BTN_SEARCHFILTERS = '//button[text()="Search Filters"]'
    static TBL_BATCHMEMSHIPREGLISTING = '//h2[text()="Batch Membership Registration Listing"]/ancestor::div//table'
    static BTN_CREATENEW = '//button[text()="Create New"]'
    static BTN_DELETE = '//button[text()="Delete"]'
}

export default elems_BatchMembershipRegistrationListing