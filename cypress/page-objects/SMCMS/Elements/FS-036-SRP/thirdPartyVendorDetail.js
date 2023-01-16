class elems_SRPREDEMPTIONTRANSACTIONDETAIL {


    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    
    static VENDORID = {

        PCK_VENDORID : '//label[text()="Vendor ID"]//following-sibling::div//button',
        TXT_VENDORID : '//input[@name="vendorId"]',
        TXT_NAME : '//input[@name="name"]'

    }

    static TXT_NAME = '//input[@id="txtName"]'
    static TXT_MERCHANTID = '//input[@id="txtMerchantID"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'
    static ContactNumberAddress = '//input[@id="txtContactNumberAddress"]'

    static BTN_SEARCHFILTERS = '//button[text()="Search Filters"]'
    static TBL_THIRDOARTYVENDORLSITING = '//h2[text()="Third Party Vendor Detail"]/parent::div/following-sibling::div//table'


}
export default elems_SRPREDEMPTIONTRANSACTIONDETAIL