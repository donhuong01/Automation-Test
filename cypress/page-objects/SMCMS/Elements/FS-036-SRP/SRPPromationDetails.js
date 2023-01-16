class elems_SRPPromationDetails {


    static TXT_NAME = '//input[@id="txtName"]'
    static TXT_DESCRIPTION = '//input[@id="txtDescription"]'
    static DRP_PROMOTYPE = '//span[@id="drpPromoType"]'
    static TXT_QUANTITY = '//input[@id="txtQuantity"]'
    static DRP_PRODUCTCATEGORY = '//span[@id="drpProductCategory"]'
    static DRP_MODULETYPE = '//span[@id="drpModuleType"]'
    static DRP_TRANSACTION = '//span[@id="drpTransactionType"]'
    static DRP_EXTRAPOINTSTYPE = '//span[@id="drpExtraPointsType"]'
    static TXT_EXTRAPERCENTAGE = '//input[@id="drpExtraPoints"]'
    static DATE_VALIDFROM = '//input[@id="dtpValidFrom"]'
    static DATE_VALIDTO = '//input[@id="dtpValidTo"]'

    //Source Channel
    static SOURCECHANNEL = {
        BTN_ADD : '(//h3[text()="Source Channel"]//following::div//button)[1]',
        TXT_NAME : '(//input[@id="txtName"])[2]',
        DRP_TYPE : '//span[@id="drpType"]',

        BTN_SEARCHFILTERS : '//button[text()="Search Filters"]',
        BTN_SELECT : '//button[text()="Select"]',
        BTN_CANCEL : '(//button[text()="Cancel"])[2]'
    }

    //EDC Terminal
    static EDCTERMINAL = {
        BTN_ADD : '(//h3[text()="EDC Terminal"]//following::div//button)[1]',
        TXT_TERMINALID : '//input[@id="txtTerminalId"]',
        TXT_NAME : '//input[@id="txtName"]',
        TXT_STORENAME : '//input[@id="txtStoreName"]',

        BTN_SEARCHFILTERS : '//button[text()="Search Filters"]',
        BTN_SELECT : '//button[text()="Select"]',
        BTN_CANCEL : '(//button[text()="Cancel"])[2]'
    }

    //Members
    static Members = {
        BTN_ADD : '(//h3[text()="Members"]//following::div//button)[1]',
        TXT_MEMBERID : '//input[@id="txtMemberId"]',
        TXT_NAME : '(//input[@id="txtName"])[1]',

        BTN_SEARCHFILTERS : '//button[text()="Search Filters"]',
        BTN_SELECT : '//button[text()="Select"]',
        BTN_CANCEL : '(//button[text()="Cancel"])[2]'
    }

    //Members
    static MEMBERTYPES = {

        BTN_ADD : '(//h3[text()="Member Types"]//following::div//button)[1]',
        TXT_MEMBERTYPENAME : '//input[@id="txtMemberId"]',

        BTN_SEARCHFILTERS : '//button[text()="Search Filters"]',
        BTN_SELECT : '//button[text()="Select"]',
        BTN_CANCEL : '(//button[text()="Cancel"])[2]'

    }


    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'

}
export default elems_SRPPromationDetails