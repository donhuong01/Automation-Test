class elems_BadAddressUpdateDetail {

    static LBL_BATCHID = '//label[text()="Batch ID"]/parent::div//label[@for="lblBatchId"]'
    static File = {
        UPL_FILE : '//input[@type="file"]',
        UPL_CANCEL : '//span[@title="Cancel"]/parent::button'
    }
    static LBL_STATUS = '//label[text()="Status"]/parent::div//label[@for="lblStatus"]'
    static BTN_VALIDATE = '//span[text()="Validate"]'
    static BTN_UPLOAD = '//span[text()="Upload"]'
    static BTN_CANCEL = '//span[text()="Cancel"]'
}

export default elems_BadAddressUpdateDetail