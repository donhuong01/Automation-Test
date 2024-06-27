class elems_EDCTerminalListing {


    static BTN_CREATENEW = '//span[text()="Create New"]'
    static BTN_DELETE = '//span[text()="Delete"]'
    

    static TXT_TERMINALID = '//input[@id="txtTerminalID"]'
    static TXT_NAME = '//input[@id="txtName"]'

    static STORE = {

        PCK_STORE : '//label[text()="Store"]//following-sibling::div//button',
        TXT_NAME : '(//input[@name="name"])[2]',
        DRP_GROUP : '//select[@name="groupId"]',
        DRP_HEADQUARTER : '//select[@name="isHeadQuarter"]',
        TXT_SITE : '//input[@name="site"]',
        
        BTN_SEARCHFILTERS : '(//span[text()="Search Filters"])[2]',
        BTN_SELECT : '//span[text()="Select"]'

    }

    static BTN_SEARCHFILTERS = '//span[text()="Search Filters"]'
    static TBL_EDCTERMINALLSITING = '//h2[text()="EDC Terminal Listing"]/parent::div/following-sibling::div//table'


}

export default elems_EDCTerminalListing