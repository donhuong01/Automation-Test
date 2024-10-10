class elems_DocumentTemplateListing {
    
    static TXT_TEMPLATENAME = '//input[@id="txtTemplateName"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static BTN_SEARCHFILTERS = '//button[text()="Search Filters"]'
    static TBL_DOCTEMPLATELISTING = '//h2[text()="Document Template Listing"]/ancestor::div//table'
    static BTN_CREATENEW = '//button[text()="Create New"]'
    static BTN_DELETE = '//button[text()="Delete"]'
}

export default elems_DocumentTemplateListing