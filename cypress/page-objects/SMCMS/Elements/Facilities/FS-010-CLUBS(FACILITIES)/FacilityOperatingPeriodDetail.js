class elems_FacilityOperatingPeriodDetail{

    static TXT_OPERATINGPERIODNAME = '//input[@id="txtOperatingPeriod"]'
    static BTN_SUBMITFORAPPROVAL = '//button[text()="Submit for Approval"]'
    static BTN_SAVEASDRAFT = '//button[text()="Save as Draft"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static TBL_SETTINGOPERATINGPERIODDETAILS ='//h2[text()="Settings - Operating Period Details"]//ancestor::div//table'

    static OperatingPeriodModalDetail ={
        BTN_SAVE : '//div[@class="k-widget k-window k-dialog"]//button[text()="Save"]',
        BTN_ADDOPERATINGHOUR: '//button[text()="Add"]',
        BTN_CANCEL : '//div[@class="k-widget k-window k-dialog"]//button[text()="Cancel"]',
        TBL_TABLEMODAL : '//form[@id="formModal"]//table'
    }

}
export default  elems_FacilityOperatingPeriodDetail