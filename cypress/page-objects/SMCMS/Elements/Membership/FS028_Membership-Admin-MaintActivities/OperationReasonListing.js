class elems_OperationReasonListing{
    static BTN_CREATENEW = '//button[text()="Create New"]'
    static BTN_DELETE = '//button[text()="Delete"]'
    static TXT_REASONCODE = '//input[@id="txtReasonCode"]'
    static DRP_OPERATION = '//span[@id="drpOperation"]'
    static BTN_SEARCHFILTERS ='//div[text()="Search Filters"]/parent::button'
    static TBL_OPERATIONREASONLISTING = '//h2[text()="Operation Reason Listing"]/ancestor::div//table'
}
export default elems_OperationReasonListing