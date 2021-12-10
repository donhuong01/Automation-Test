class elems_GiftExchange {
    static BTN_CHANGE = '//button[text()="Change"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    
    static NEWGIFTINFORMATION = {
        LBL_ITEMNAME : '//label[@for="pckItem"]/parent::div//button',
        TXT_QUANTITY : '//input[@id="txtQuantity"]',
        TEXTAREA_REASON : '//textarea[@id="areaReason"]'
    }
    static ITEMLIST = {
        TBL_ITEMLIST : '//h3[text()="Item List"]/ancestor::div//table'
    }
}
export default elems_GiftExchange