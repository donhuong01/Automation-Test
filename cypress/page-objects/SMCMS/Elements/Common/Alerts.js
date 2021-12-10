class elems_Alerts {

    static LBL_POPUPTITLE = '//div[@role="dialog"]/parent::div//div[@class="k-window-title k-dialog-title"]'
    static LBL_POPUPCONTENT = '//div[@role="dialog"]/parent::div//div[@class="k-window-content k-dialog-content"]//h5'
    static BTN_SAVE = '//div[@role="dialog"]/parent::div//button[text()="Save"]'
    static BTN_CANCEL = '//div[@role="dialog"]/parent::div//button[text()="Cancel"]'
    static CHK_TERMINATEDEPENDENTMEM = '//label[text()="Terminate Dependent Member"]/ancestor::div//input[@role="checkbox"]'
    static BTN_CLOSE = '//div[@class="k-window-actions k-dialog-actions"]/parent::div//a[@role="button"]'
}

export default elems_Alerts