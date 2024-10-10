class elems_InHouseSaleItemChargeSetup {

    //Header
    static BTN_SUBMITFORAPPROVAL = '//button[text()="Submit for Approval"]'
    static BTN_SAVEASDRAFT = '//button[text()="Save as Draft"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'

    //General information
    static LBL_INHOUSESALEITEMID = '//label[text()="In-House Sale Item ID"]//following-sibling::div//label'
    static LBL_WORKFLOW = '//label[text()="Workflow Status"]//following-sibling::div//label'
    static TXT_INHOUSESALEITEMNAME = '//input[@id="lblItemName"]'
    static PCK_LOCATION = '//label[text()="Location"]/following-sibling::div//button'
    static PCK_LIFEGROUP = '//label[text()="Lifestyle Group"]/following-sibling::div//button'
    static PCK_FABSGROUP = '//label[text()="FABS Group"]/following-sibling::div//button'
    static PCK_CLUBCLASSIFICATION = '//label[text()="Club Classification"]/following-sibling::div//button'
    static PCK_SMCCLASSIFICATION = '//label[text()="SMC Classification"]/following-sibling::div//button'
    static TXT_UNITSPERSET = '//input[@id="txtUnitsPerSet"]'
    static TXT_PERCHASELIMITPERMEMBER = '//input[@id="txtPurchaseLimitPerMember"]'
    //Charge Rate
    static CHARGERATE = {
        BTN_ADDCHARGETYPE: '//button[text()="Add Charge Type"]',
        TXT_CHARGENAME: '//button[text()="Add Charge Type"]/parent::div/following-sibling::div//table//input',
        TXT_TRANSACTIONTYPE: '(//span[@class="k-widget k-dropdown"])[1]',
        TXT_CALCULATIONTYPE: '(//span[@class="k-widget k-dropdown"])[2]',
        TXT_AMOUNTTYPE: '(//span[@class="k-widget k-dropdown"])[3]',
    }

    //Customer Category
    static CUSTOMERCATEGORY = {

        BTN_CUSTOMERCATEGORY: '//button[text()="Add Customer Category"]',
        TXT_CUSTOMERCATEGORYNAME: '//input[@id="txtCustomerCategoryName"]',
        BTN_SEARCHFILTERS: '//button[@form="formCustomerCategoryDialog"]',
        BTN_SELECT: '//button[text()="Select"]',
        BTN_CANCEL: '//button[text()="Cancel"]',

    }

    //Product Master Information
    static CHK_EARNSAFRAPOPINTS = '//input[@id="chkEarnSAFRAPoints"]'
    static PCK_PRODUCT = '//label[text()="Product"]/following-sibling::div//button'
    static TXT_REMARKS = '//textarea[@id="txtRemarks"]'
    static BTN_SEARCHFILTERS = "//button[text()='Search Filters']"
    static TXT_PRODUCTNUMBER = '//input[@name="productName"]'


    //Select Product Code
    static PRODUCTCODE = {
        TXT_PRODUCTNUMBER: '//label[text()="Product Number"]/following-sibling::input',
        TXT_PRODUCTNAME: '//label[text()="Product Name"]/following-sibling::input',
        TXT_SEARCHNAME: '//label[text()="Search Name"]/following-sibling::input',
        DRP_PRODUCTTYPE: '//label[text()="Product type"]/following-sibling::span',
        DRP_ITEMMODELGROUP: '//label[text()="Item Model Group"]/following-sibling::span',
        DRP_ITEMGROUP: '//label[text()="Item Group"]/following-sibling::span',
        DRP_STORAGEDIMENSIONGROUP: '//label[text()="Storage Dimension Group"]/following-sibling::span',
        DRP_TRACKINGDIMENSIONGROUP: '//label[text()="Tracking Dimension Group"]/following-sibling::span',
        DRP_SALESCATEGORY: '//label[text()="Sales Category"]/following-sibling::span',
        DRP_PROCUREMENTCATEGORY: '//label[text()="Procurement Category"]/following-sibling::span',

        BTN_SEARCHFILTER: '//button[text()="Search Filters"]',
        BTN_SELECT: '//button[text()="Select"]',
        BTN_CANCEL: '//button[text()="Cancel"]'


    }

    static ATTACHMENTS = {
        BTN_UPLOAD: '//button[text()="Upload"]',
        BTN_REMOVE: '//button[text()="Remove"]'
    }




}

export default elems_InHouseSaleItemChargeSetup