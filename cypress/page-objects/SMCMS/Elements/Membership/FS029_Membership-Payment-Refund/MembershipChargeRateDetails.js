class elems_MembershipChargeRateDetails {

    static GeneralInformation = {
        TXT_NAME : '//input[@id="txtName"]',
        DRP_CARDTYPE : '//span[@id="drpCardType"]',
        TXTAREA_DESCRIPTION : '//textarea[@id="areaDescription"]',
        TXT_NOOFPERIOD : '//input[@id="txtNumberOfPeriod"]',
        CHK_DISPLAYINFRONTEND : '//input[@id="checkDisplayInFrontend"]',
        DRP_SFSITEM : '//span[@id="drpSFSIitem"]',
        DRP_STATUS : '//span[@id="drpStatus"]'
    }

    static ChargeTypeList = {
        BTN_ADDCHARGETYPE : '//h3[text()="Charge Type List"]/parent::div//button[text()="Add Charge Type"]',
        TBL_CHARGETYPELIST : '//h3[text()="Charge Type List"]/parent::div//table'
    }

    static ChargeRateList = {
        BTN_ADDCUSTOMERCATEGORY : '//h3[text()="Charge Rate List"]/parent::div//button[text()=" Add Customer Category"]',
        TBL_CHARGERATELIST : '//h3[text()="Charge Rate List"]/parent::div//table'
    }

    static ProductMasterInformation = {
        PCK_ITEMCODE : '//label[@for="pckItemCode"]/parent::div//button',
        LBL_ITEMNAME : '//label[text()="Item Name"]/parent::div//label[@for="lblItemName"]'
    }

    static AccessModeList = {
        BTN_ADDACCESSMODE : '//h3[text()="Access Mode List"]/parent::div//button[text()="Add Access Mode"]',
        TBL_ACCESSMODELIST : '//h3[text()="Access Mode List"]/parent::div//table'
    }

    static CustomerCategoryAccessModeList = {
        BTN_ADDCUSTOMERCATEGORY : '//h3[text()="Customer Category Access Mode List "]/parent::div//button[text()=" Add Customer Category"]',
        TBL_CUSTMERCATEGRYACCESSMODELIST : '//h3[text()="Customer Category Access Mode List "]/parent::div//table'
    }

    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
}

export default elems_MembershipChargeRateDetails