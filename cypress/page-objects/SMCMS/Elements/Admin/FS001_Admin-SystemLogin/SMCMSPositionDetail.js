class elems_SMCMSPositionDetail {
    static BTN_ADDUSERS = '//button[text()="Add User"]'
    static BTN_ADDPIC = '//button[text()="Add PIC"]'
    static BTN_REMOVEUSERS = '//button[text()="Remove Users"]'
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static TXT_POSITIONNAME = '//input[@id="lblName"]'
    static DRP_ROLE = '//span[@id="drpRole"]'
    static DRP_LOCATION = '//span[@id="drpLocation"]'
    static TXTAREA_REMARK = '//textarea[@id="areaRemark"]'
    static TXT_USER = '//form[@id="frmUserSection"]//input[@id="txtUserName"]'
    static TXT_POSITIONPICS = '//form[@id="frmPicSection"]//input[@id="txtUserName"]'
    static BTN_USERSEARCHFILTER = '//button[@form="frmUserSection"]'
    static TXT_USERNAMEPOSITIONPICS = '//form[@id="frmUserSection"]//input[@id="txtUserName"]'
    static BTN_REMOVEUSER = '//button[text()= "Remove User"]'
    static BTN_REMOVEPICS = '//button[text()= "Remove PIC"]'
    static BTN_USERNAMEPOSITIONPICS = '//button[@form="frmPicSection"]'
    static TBL_USERS = '//h3[@class="card-title" and contains(.,"Users")]//following-sibling::div//table'
    static TBL_POSITIONPICS = '//h3[@class="card-title" and contains(.,"Position PICs")]//following-sibling::div//table'
    static TBL_POSITIONDETAIL = '//h2[text()="SMCMS Position Detail"]/ancestor::div//table'
    static BTN_SEARCHFILTERS = '//button[@class="k-button search-button" and @form="formUserDialog"]'

}
export default elems_SMCMSPositionDetail



