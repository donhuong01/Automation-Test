class elems_SRPREDEMPTIONDETAIL {

    static BTN_ADDTOCART = '//button[@form="formSRPRedemptionDetail"]'
    static BTN_CANCEL = '//span[text()="Cancel"]'
    static TXT_QUANTITY = '//input[@id="txtQuantity"]'
    static DATE_REDEMPTIONDATE = '//input[@id="dtpRedemptionDate"]'

    static LBL_MEMBERID = '//label[@for="lblMemberID"]'
    static LBL_MEMBERNAME = '//label[@for="lblMemberName"]'
    static LBL_SAFRAMEMBERPOINT = '//label[text()="SAFRA Member Point"]/following-sibling::div'
    static LBL_SOURCELOCATION = '//label[@for="lblMemberSourceChannel"]'
    static LBL_REDEMPTIONITEMTITLE = '//label[@for="lblRedemptionItemTitle"]'
    static LBL_REDEMPTIONITEMDESCRIPTION = '//label[@for="lblRedemptionItemDecsription"]'
    static LBL_REDEMPTIONPOINT = '//label[@for="lblRedemptionPoint"]'
    static LBL_REDEMPTIONAMOUNT = '//label[@for="lblRedemptionAmount"]'
    static LBL_REDEMPTIONSOURCELOCATION = '//label[@for="lblRedemptionSourceLocation"]'
    static LBL_TOTALREDEMPTIONPOINT = '//label[@for="lblTotalRedemptionPoints"]'
}
export default elems_SRPREDEMPTIONDETAIL