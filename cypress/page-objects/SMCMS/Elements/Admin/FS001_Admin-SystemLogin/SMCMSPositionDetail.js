class elems_SMCMSPositionDetail {
    static BTN_ADDUSERS = '//button[text()="Add Users"]'
    static BTN_REMOVEUSERS = '//button[text()="Remove Users"]'
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static TXT_POSITIONNAME = '//input[@id="lblPositionName"]'
    static DRP_ROLE = '//span[@id="drpRole"]'
    static DRP_LOCATION = '//span[@id="drpLocation"]'
    static TXTAREA_REMARK = '//textarea[@id="areaRemark"]'
    static TBL_POSITIONDETAIL = '//h2[text()="SMCMS Position Detail"]/ancestor::div//table'

}
export default elems_SMCMSPositionDetail

