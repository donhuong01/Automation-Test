class elems_Alerts {

    static LBL_POPUPTITLE = '//div[@role="dialog"]/parent::div//div[@class="k-window-title k-dialog-title"]'
    static LBL_POPUPCONTENT = '//div[@role="dialog"]/parent::div//div[@class="k-window-content k-dialog-content"]//h6'
    static BTN_SAVE = '//div[@role="dialog"]/parent::div//span[text()="Save"]'
    static BTN_CANCEL = '//div[@role="dialog"]/parent::div//span[text()="Cancel"]'
    static BTN_YES = '//div[@role="dialog"]/parent::div//span[text()="Yes"]'
    static BTN_NO = '//div[@role="dialog"]/parent::div//span[text()="No"]'
    static BTN_DELETEPOPUP = '//button[text()="Cancel"]//following-sibling::button'
    static BTN_Delete = '//button[text()="Cancel"]//following-sibling::button'
    static BTN_Cancel = '//button[text()="Cancel"]'
    static BTN_DELETE = '//button[text()="Cancel"]//following-sibling::button'
    static CHK_TERMINATEDEPENDENTMEM = '//label[text()="Terminate Dependent Member"]/ancestor::div//input[@role="checkbox"]'
    static BTN_CLOSE = '//div[@class="k-window-actions k-dialog-actions"]/parent::div//a[@role="button"]'
    static DELETE_NOTIFICATION = '//div[@class="notification__message"]'
    static NOTIFICATION_MESSAGE = '//div[@class="notification__message"]'
}

export default elems_Alerts