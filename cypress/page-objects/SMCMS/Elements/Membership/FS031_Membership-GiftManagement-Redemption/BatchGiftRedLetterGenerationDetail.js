class elems_BatchGiftRedemptionLetterGenerationDetail {
    static BTN_CREATENEW = '//button[text()="Create New"]'
    static BTN_SAVE = '//button[text()="Save"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static BTN_VALIDATEREDEMPTIONLETTER = '//button[text()="Validate Redemption Letter"]'
    static BTN_GENERATEREDEMPTIONLETTER = '//button[text()="Generate Redemption Letter"]'
    static LBL_BATCHID = '//label[@for="lblBatchId"]'
    static LBL_STATUS = '//label[@for="lblStatus"]'
    static DRP_BATCHTYPE = '//span[@id="cmbBatchType"]'
    static TXT_BATCHNAME = '//input[@id="txtBatchName"]'
    static PCK_BATCHREGISRATIONID = '//label[@for="pckBatchRegistrationId"]/parent::div//button'
    static PCK_AUTODEDUCTIONID = '//label[@for="pckAutoDeductionId"]/parent::div//button'
    static TBL_BATCHGIFTREDLETTERGENDETAIL = '//h2[text()="Batch Gift Redemption Letter Generation Detail Form"]/ancestor::div//table'

}
export default elems_BatchGiftRedemptionLetterGenerationDetail