class elems_SRPREDEMPTIONCATALOGUEDETAIL {

    static BTN_SAVE = '//button[@form="formSRPRedemptionCatalogueDetail"]'
    static BTN_CANCEL = '//span[text()="Cancel"]'
    static LBL_ITEMCODE = '//label[@for="itemCode"]'
    static LBL_ITEMCODE = '//label[@for="itemCode"]'
    static LBL_ITEMDESCRIPTION = '//label[@for="itemDescription"]'
    static DRP_CATEGORY = '//span[@id="drpCategory"]'
    static DATE_PUBLISHSTARTDATE = '//input[@id="dtpPublishStartDate"]'
    static DATE_PUBLISHENDDATE = '//input[@id="dtpPublishEndDate"]'
    static TXT_EXPIRYCOLLECTION = '//input[@id="txtExpiryCollection"]'
    static CHK_FEATURED = '//input[@id="chkFeatured"]'
    static DRP_STATUS = '//span[@id="status"]'
    static BTN_IMAGE = '//div[@id="uplImage"]'
    static BTN_ADDSOURCELOCATION = '//span[text()="Add Source Location"]'
    static BTN_REMOVESOURCELOCATION = '//span[text()="Remove Source Location"]'
    static TXT_SOURCECHANNELNAME = '//input[@id="txtName"]'
    static DRP_SOURCECHANNELTYPE = '//span[@id="drpType"]'
    static BTN_SOURCECHANNELSEARCHFILTERS = '//button[@form="formSourceChannelDialog"]'
    static TBL_DIFFERENTSOURCEREDEMPTION = '//div[@class="k-widget k-grid"]//table'
    static TXT_REDEMPTIONAMOUNT = '(//input[@role="spinbutton"])[5]'
    static TXT_REDEMPTIONPOINT = '(//input[@role="spinbutton"])[6]'

}
export default elems_SRPREDEMPTIONCATALOGUEDETAIL