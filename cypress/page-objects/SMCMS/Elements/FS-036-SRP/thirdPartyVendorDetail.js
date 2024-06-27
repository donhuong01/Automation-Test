class elems_ThirdPartyVendoreDetail {


    static BTN_SAVE = '//span[text()="Save"]'
    static BTN_CANCEL = '//span[text()="Cancel"]'

    static VENDORID = {

        PCK_VENDORID: '//label[text()="Vendor ID"]//following-sibling::div//button',
        TXT_VENDORID: '//input[@name="vendorId"]',
        TXT_NAME: '//input[@name="name"]',
        LBL_NAME: '//label[@for="txtName"]'

    }

    static TXT_NAME = '//input[@id="txtName"]'
    static TXT_MERCHANTID = '//input[@id="txtMerchantID"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static TXT_ContactNumberAddress = '//textarea[@id="txtContactNumberAddress"]'

    static BTN_SEARCHFILTERS = '//span[text()="Search Filters"]'
    static TBL_THIRDOARTYVENDORLSITING = '//h2[text()="Third Party Vendor Detail"]/parent::div/following-sibling::div//table'


}
export default elems_ThirdPartyVendoreDetail