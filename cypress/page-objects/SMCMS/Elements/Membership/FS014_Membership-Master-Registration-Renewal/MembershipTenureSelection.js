class elems_MembershipTenureSelection {

    static Principal = {
        TBL_PRINCIPAL : '//div[text()="Principal"]/parent::div//table'
    }

    static Dependent = {
        TBL_DEPENDENT : '(//div[text()="Dependent"]/parent::div//table)[1]'
    }

    static BTN_ADDTOCART = '//span[text()="Add to Cart"]'
    static BTN_CANCEL = '//span[text()="Cancel"]'
    static BTN_SAVEANDNEXT = '//span[text()=" Save & Next"]'
    static BTN_SUBMIT = '//span[text()="Submit"]'
    
}

export default elems_MembershipTenureSelection