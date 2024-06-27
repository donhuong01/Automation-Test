class elems_EDCTerminalDetail {


    static BTN_SAVE = '//span[text()="Save"]'
    static BTN_CANCEL = '//span[text()="Cancel"]'
    static LBL_TERMINALID = '//label[@for="lblTerminalID"]'

    static TXT_TERMINALID = '//label[@for="lblTerminalID"]'
    static TXT_NAME = '//input[@id="txtName"]'
    static TXT_PLACEMENT = '//input[@id="txtPlacement"]'

    //Source Channel
    static SOURCECHANNEL = {

        PCK_SOURCECHANNEL: '//label[text()="Source Channel"]//following-sibling::div//button',
        TXT_NAME: '(//input[@name="name"])[2]',
        DRP_GROUP: '//select[@name="groupId"]',
        DRP_HEADQUARTER: '//select[@name="isHeadQuarter"]',
        TXT_SITE: '//input[@name="site"]',

        BTN_SEARCHFILTERS: '(//span[text()="Search Filters"])[1]',
        BTN_SELECT: '//span[text()="Select"]'

    }

    //Third Party Vendor ID
    static THIRDPARTYVENDORID = {

        PCK_THIRDPARTYVENDORID: '//label[text()="Third Party Vendor ID"]//following-sibling::div//button',

        TXT_VENDORID: '//input[@name="vendorId"]',
        TXT_NAME: '(//input[@name="name"])[2]',

        BTN_SEARCHFILTERS: '(//span[text()="Search Filters"])[1]',
        BTN_SELECT: '//span[text()="Select"]'

    }

    //Item GST Group 
    static ITEMGSTGROUP = {

        PCK_ITEMGSTGROUP: '//label[text()="Item GST Group"]//following-sibling::div//button',

        TXT_TAXITEMGROUPCODE: '//input[@name="taxItemGroupCode"]',
        TXT_DESCRIPTION: '//input[@name="description"]',
        TXT_TAXCODEID: '//input[@name="taxCodeId"]',

        BTN_SEARCHFILTERS: '(//span[text()="Search Filters"])[1]',
        BTN_SELECT: '//span[text()="Select"]'

    }

    //Fabs Group 
    static FABSGROUP = {

        PCK_FABSGROUP: '//label[text()="Fabs Group"]//following-sibling::div//button',

        TXT_CODESETNAME: '//input[@fieldname="codeName"]',
        TXT_ABBREVIATION: '//input[@id="txtAbbreviation"]',
        TXT_CODETYPE: '//input[@id="txtCodeType"]',

        BTN_SEARCHFILTERS: '(//span[text()="Search Filters"])[1]',
        BTN_SELECT: '//span[text()="Select"]'

    }

    //Club Classification
    static CLUBCLASSIFICATION = {

        PCK_CLUBCLASSIFICATION: '//label[text()="Club Classification"]//following-sibling::div//button',

        TXT_CODESETNAME: '//input[@fieldname="codeName"]',
        TXT_ABBREVIATION: '//input[@id="txtAbbreviation"]',
        TXT_CODETYPE: '//input[@id="txtCodeType"]',

        BTN_SEARCHFILTERS: '(//span[text()="Search Filters"])[1]',
        BTN_SELECT: '//span[text()="Select"]'

    }

    //SMC Classification
    static SMCCLASSIFICATION = {

        PCK_SMCCLASSIFICATION: '//label[text()="SMC Classification"]//following-sibling::div//button',

        TXT_CODESETNAME: '//input[@fieldname="codeName"]',
        TXT_ABBREVIATION: '//input[@id="txtAbbreviation"]',
        TXT_CODETYPE: '//input[@id="txtCodeType"]',

        BTN_SEARCHFILTERS: '(//span[text()="Search Filters"])[1]',
        BTN_SELECT: '//span[text()="Select"]'

    }

    static LBL_THIRDPARTYVENDORNAME = '//label[@for="lblThirdPartyVendorName"]'
    static LBL_MERCHANTID = '//label[@for="lblMerchantID"]'

    static BTN_SEARCHFILTERS = '//span[text()="Search Filters"]'
    static TBL_EDCTERMINALLSITING = '//h2[text()="EDC Terminal Listing"]/parent::div/following-sibling::div//table'


}

export default elems_EDCTerminalDetail