class elems_ThirdPartyVendoreListing {


    static BTN_CREATENEW = '//span[text()="Create New"]'
    static BTN_DELETE = '//span[text()="Delete"]'

    static VENDORID = {

        PCK_VENDORID: '//label[text()="Vendor ID"]//following-sibling::div//button',
        TXT_VENDORID: '//input[@name="vendorId"]',
        TXT_NAME: '//input[@name="name"]'

    }

    static TXT_NAME = '//input[@id="txtName"]'
    static DRP_STATUS = '//span[@id="drpStatus"]'

    static BTN_SEARCHFILTER = '(//span[text()="Search Filters"])[1]'
    static BTN_SEARCHFILTERS = '(//span[text()="Search Filters"])[2]'
    static TBL_THIRDOARTYVENDORLSITING = '//h2[text()="Third Party Vendor Listing"]/parent::div/following-sibling::div//table'


}
export default elems_ThirdPartyVendoreListing