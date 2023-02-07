class elems_E1GymMembershipReinstatement {

     static BTN_ADDTOCART = '//button[@id="btnAddToCart"]'
     static BTN_CANCEL = '//button[text()="Submit"]/following-sibling::button[text()="Cancel"]'
     static DATE_REQUESTEDDATE = '//label[@id="dtpRequestedDate_label"]/following-sibling::div//input'
     static LBL_REINSTATEID = '//label[@for="lblReinstatementID"]'
     static LBL_E1GYMMEMBERSHIPID = '//label[@for="e1GymMembershipID"]'
     static LBL_E1GYMMEMBERSHIP = '//label[@for="lblE1GymMEmbership"]'
     static LBL_E1GYMMEMTERMSTART = '//label[@for="lble1GymTermStart"]'
     static LBL_E1GYMMEMTERMSTARTEND = '//label[@for="lble1GymTermEnd"]'
     static LBL_TERMINATIONREASON = '//label[@for="lblTerminationReason"]'
     static LBL_CUSTOMERCATEGORY = '//label[@for="lclCustomerCategory"]'
     static DATE_TERMSTARTDATE = '//input[@id="dtpTermStartDate"]'
     static TXT_MEMBERSHIPTERM = '//span[@id="drpMembershipTerm"]'
     static TBL_PAYMENTDETAIL = '(//h3[text()="Payment Detail"]/following-sibling::div//table)[2]'
     static LBL_TOTAL = '//label[text()="Total:"]/following-sibling::div'
     static LBL_PYAMENTAMOUNT = '//label[text()="Payment Amount:"]/following-sibling::div'
     static LBL_ISPAYMENTCOLLECTED = '//label[@for="chkIsPaymentCollected"]'
}
export default elems_E1GymMembershipReinstatement