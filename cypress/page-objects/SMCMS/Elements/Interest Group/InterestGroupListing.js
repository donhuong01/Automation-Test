class elems_InterestGroupListing {

    static BTN_CREATENEW = '//button[text()="Create New"]'
    static BTN_DELETE = '//button[text()="Delete"]'
    static BTN_DEACTIVATE = '//button[text()="Deactivate"]'
    static TXT_NAME = '//input[@id="name"]'
    static DRP_BUSINESSTYPE = '//span[@id="businessType"]'
    static PCK_INTERESTGROUPMAIN = '//label[text()="Interest Group Main"]/following-sibling::div//button'
    static TBL_SELECTIGMAIN = '//div[@class="k-widget k-window k-dialog"]//table'
    static BTN_SELECT = '//button[text()="Select"]'
    static DRP_STATUS = '//span[@id="status"]'
    static BTN_SEARCH = '//button[text()="Search Filters"]'
    static TBL_IGGROUPLISTING = '//h2[text()="Interest Group Listing"]//ancestor::div//table'

}

export default elems_InterestGroupListing