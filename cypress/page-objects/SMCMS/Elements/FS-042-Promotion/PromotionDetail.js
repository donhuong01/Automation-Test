class elems_PromotionDetail {

    static BTN_SAVEASDRAFT = '//button[text()="Save as Draft"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static BTN_SUBMIT = '//button[text()="Submit"]'
    static TXT_PROMOTIONTITLE = '//input[@id="txtPromotionTitle"]'
    static LBL_PROMOTIONNUMBER = '//label[text()="Promotion Number"]//following-sibling::div'
    static RADIO_STANDARD = '//label[text()="Standard"]//preceding-sibling::input'
    static RADIO_PROMOCODE = '//label[text()="Promo Code"]//preceding-sibling::input'
    static TXT_PROMOCODE = '//input[@id="txtPromoCode"]'
    static TXT_UTILIZELIMITOERCUSTOMER = '//input[@id="txtUtilizeLimit"]'
    static TXT_MAXCAP = '//input[@id="txtMaxCap"]'
    static DATE_VALIDITYSTARTDATE = '//input[@id="dtValidityStartDate"]'
    static DATE_VALIDITYEXOIRYDATE = '//input[@id="dtValidityEndDate"]'
    static TXTAERA_REMARK = '//textarea[@id="remark"]'

    static PromotionType = {

        DRP_PROMOTIONTYPE: '//span[@id="promotionType"]',
        DATE_PERIODSTARTDATE: '//input[@id="dtpPeriodStartDate"]',
        DATE_PROMOTIONENDDATE: '//input[@id="dtpPeriodEndDate"]',
        DRP_STARTHOUR: '//span[@id="dtpStartHour"]',
        DRP_ENDHOUR: 'dtpEndHour',

        //Early Bird
        TXT_LIMITINTOTAL: '//input[@id="txtLimitInTotal"]',

        //Paid Period Type
        DATE_DATE: '//input[@id="dtpDate"]',
        BTN_ADD: '(//button[text()="Add"])[1]'
    }

    static BenefitItem = {

        BTN_ADDBENEFIT: '//button[text()="Add Benefit"]',
        BTN_ADDBUNDLEBENEFIT: '//button[text()="Add Bundle Benefit"]',
        BTN_DELETE: '//button[text()="Delete"]',
        TBL_BENIFIT: '//h3[text()="Promotion Benefit Items"]/following-sibling::div//table',

        //Add Benefit
        DRP_ITEMCATEGORY: '//span[@id="drpItemCategory"]',
        TXT_QUANTITY: '//input[@id="txtQuantity"]',
        DRP_BENEFITTYPE: '//span[@id="drpBenefitType"]',
        RADIO_FIXEDPRICE: '//label[text()="Fixed Value"]/preceding-sibling::input',
        RADIO_ALL: '//input[@name="itemOption"]//following-sibling::label[text()="All"]',
        RADIO_SPECIFICITEM: '//input[@name="itemOption"]//following-sibling::label[text()="Specific Item"]',
        CHK_ISMAINITEM: '//input[@id="checkIsMainItem"]',
        BTN_SAVE: '//button[text()="Save"]',
        BTN_CANCEL: '//button[text()="Cancel"]',
        TAB_BENEFITITEM: '//button[text()="Benefit Item"]',
        TXT_FIXEDDOLLAR: '//input[@id="numfixedValueAmountToDiscount"]', //input[@id="numFixedDollarValueToDiscount"]
        TXT_FIXEDDOLLARTOCHARGETOCUSTOMER: '//input[@id="numFixedDollarRateToChargeToCustomer"]',
        TXT_APPICABLEFREEPERIODINMONTH: '//input[@id="numApplicableFreePeriodInMonth"]',
        PCK_GIFT: '//label[@for="pckGiftItem"]/following-sibling::div//button'

    }
    static PromotionCriteria = {

        //Promotion Criteria Information
        TAB_PROMOTIONCRIERIA: '//button[text()="Promotion Criteria"]',
        TXT_APPLICABLEAGERANGEFORCUSTOMERFROM: '//input[@id="numApplicableAgeRangeForCustomerFrom"]',
        TXT_APPLICABLEAGERANGEFORCUSTOMERTO: '//input[@id="numApplicableAgeRangeForCustomerTo"]',
        BTN_ADDAPPLICABLECUSCATEG: '//h3[text()="Applicable Customer Categories"]/following-sibling::div//button[text()="Add Customer Category"]',
        TXT_CUSTOMERCATEGORYNAME: '//input[@id="txtCustomerCategoryName"]',
        BTN_ADDAPPLICBLEMEMBERID: '//h3[text()="Applicable Member ID"]/following-sibling::div//button[text()="Add Member"]',
        TXT_MEMBERID: '//input[@id="txtMemberId"]',
        BTN_ADDAPPLICABLESOURCECHANNEL: '//h3[text()="Applicable Source Channel"]/following-sibling::div//button[text()="Add Source Channel"]',
        TXT_SOURCECHANNELNAME: '//input[@id="txtName"]',




    }
}
export default elems_PromotionDetail