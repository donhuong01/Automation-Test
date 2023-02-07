class elems_SRPREDEMPTIONTRANSACTIONDETAIL {


    static BTN_COLLECT = '//button[@form="formSRPRedemptionCollectionDetail"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static LBL_COLLECTORID = '//label[@for="lblCollectorID"]'
    static LBL_STAFFNAME = '//label[@for="lblStaffName"]'
    static TXT_REMARK = '//textarea[@id="txtRemark"]'
    static TBL_ITEMLIST = '//h3[text()="Item List"]/following-sibling::div//table'
    static TXT_QUANTITY = '(//h3[text()="Item List"]/following-sibling::div//table//input)[2]'
    static TXT_ITEMLISTREMARK = '(//h3[text()="Item List"]/following-sibling::div//table//input)[3]'

}
export default elems_SRPREDEMPTIONTRANSACTIONDETAIL