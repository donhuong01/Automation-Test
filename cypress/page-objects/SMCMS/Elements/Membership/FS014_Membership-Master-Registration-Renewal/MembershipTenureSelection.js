class elems_MembershipTenureSelection {

    static Principal = {
        TBL_PRINCIPAL : '//div[text()="Principal"]/parent::div//table'
    }

    static Dependent = {
        TBL_DEPENDENT : '//div[text()="Dependent"]/parent::div//table'
    }

    static BTN_ADDTOCART = '//button[text()="Add to Cart"]'
    static BTN_CANCEL = '//button[text()="Cancel"]'
    static BTN_SAVEANDNEXT = '//button[text()=" Save & Next"]'
    static BTN_SUBMIT = '//button[text()="Submit"]'
    
}

export default elems_MembershipTenureSelection