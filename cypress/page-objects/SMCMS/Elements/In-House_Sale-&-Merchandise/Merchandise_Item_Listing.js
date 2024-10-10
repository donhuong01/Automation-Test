class elems_InHouseSaleMerchandiseItemListing {

    static BTN_CREATENEW = '//button[text()="Create New"]'
    static RAD_INHOUSESALEITEM = '//label[text()="In-House Sale Item"]/preceding-sibling::input'
    static RAD_MERCHANDISEITEM = '//label[text()="Merchandise Item"]/preceding-sibling::input'
    static TXT_ITEMNAM = '//input[@id="txtItemName"]'
    static TXT_ITEMID = '//input[@id="txtItemID"]'
    static DRP_WORKFLOWSTATUS = '//span[@id="drpWorkflowStatus"]'
    static PCK_LOCATION = '//label[text()="Location"]/following-sibling::div//button'
    static PCK_LIFESTYLEGROUP = '//label[text()="Lifestyle Group"]/following-sibling::div//button'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static PCK_CLUBCLASSIFICATION = '//label[text()="Club Classification"]/following-sibling::div//button'
    static PCK_FABSGROUP = '//label[text()="FABS Group"]/following-sibling::div//button'
    static PCK_SMCCLASSIFICATION = '//label[text()="SMC Classification"]/following-sibling::div//button'
    static BTN_SEARCHFILTER = '//button[text()="Search Filters"]'
    static TBL_INHOUSEMERCHANDISE = '//div[@class="container-fluid"]//table'

}

export default elems_InHouseSaleMerchandiseItemListing