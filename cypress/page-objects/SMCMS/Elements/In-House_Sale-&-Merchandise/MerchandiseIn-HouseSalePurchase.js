class elems_MerchandiseInHouseSalePurcahse {

   static BTN_ADDTOCARD = '//button[@form="formSalesPurchase"]'
   static BTN_CANCEL = '//button[text()="Cancel"]'
   static RAD_INHOUSESALEITEM = '//label[text()="In-House Sale Item"]/preceding-sibling::input'
   static RAD_MERCHANDISEITEM = '//label[text()="Merchandise Item"]/preceding-sibling::input'
   static LBL_PURCHASENUMBER = '//label[@for="lblPurchaseNumber"]'
   static LBL_MEMBERID = '//label[@for="lblMemberID"]'
   static LBL_CUSTOMERCATEGORY = '//label[@for="lblCustomerCategory"]'
   static PCK_SALEITEMNAME = '//label[@for="pckItemName"]/following-sibling::div//button'
   static BTN_CLEAR = '//button[text()="Clear"]'
   static RAD_PURCHASETRANSACTION = '//label[text()="Purchase / Transaction"]/preceding-sibling::input'
   static RAD_COLLECTION = '//label[text()="Collection"]/preceding-sibling::input'
   static TXT_QUANTITYOFSETSINHOUSE = '//input[@id="txtInHouseQuantityOfSets"]'
   static TXT_QUANTITYOFSETSMERCHANDISE = '//input[@id="txtMerchandiseQuantityOfSets"]'
   static TXT_COLLECTIONAMOUNT = '//input[@id="txtCollectionAmount"]'
   static TXT_TRANSACTIONDATE = '//input[@id="dtpTransactionDate"]'

}

export default elems_MerchandiseInHouseSalePurcahse