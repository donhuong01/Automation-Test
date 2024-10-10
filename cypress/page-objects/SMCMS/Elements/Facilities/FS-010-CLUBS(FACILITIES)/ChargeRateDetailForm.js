class elems_ChargeRateForm{
    
    static TXT_CHARGERATENAME = '//input[@id="chargeRateName"]'
    static DATE_STARTDATE = '//label[@id="startDate_label"]//following-sibling::div//a'
    static DATE_ENDDATE = '//label[@id="endDate_label"]//following-sibling::div//a'
    static BTN_LOCATION = '//label[@for="location"]//following-sibling::div//button'

    static CHARGETYPELIST = {

        BTN_ADDCHARGETYPE: '//button[@class="k-button" and contains(.,"Add Charge Type")]',
        TBL_CHARGETYPELIST:'//h3[text()="Charge Type List"]//following-sibling::div//table[@class="k-grid-table"]'
    }

    static CUSTOMCATEGORY = {
        BTN_ADDCUSTOMCATEGORY: '//button[@class="k-button" and contains(.,"Add Customer Category")]',
        TBL_CUSTOMCATEGORY:'//h3[text()="Customer Category"]//following-sibling::div//table[@class="k-grid-table"]'
    }

    static FACILITYTYPECHARGERATE = {

        TBL_FACILITYTYPECHARGELIST:'//h3[text()="Facility Type Charge Rate"]//following-sibling::div//table[@class="k-grid-table"]'
    }

    static BTN_SAVE = '//button[@type="submit" and contains(.,"Save")]'
    static BTN_CANCEL = '//button[@class="k-button" and contains(.,"Cancel")]'
}

export default elems_ChargeRateForm
