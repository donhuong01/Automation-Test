class  elems_CodeSetMasterListing {

    static TXT_CODESETNAME = '//input[@id="txtCodeName"]'
    static TXT_ABBREVIATIONCODE = '//input[@id="txtAbbreviation"]'
    static TXT_CODETYPE = '//input[@id="txtCodeType"]'
    static BTN_SEARCH = '//button[text()="Search Filters"]'
    static TBL_CODESETNAME = '//h2[text()="Code Set Master Listing"]/ancestor::div//table'
    static BTN_CREATENEW = '//button[text()="Create New"]'
    static BTN_DELETE = '//button[text()="Delete"]'
}

export default elems_CodeSetMasterListing