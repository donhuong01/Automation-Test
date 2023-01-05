class elems_IGMembershipConversion {

    static BTN_CONVERT = '//button[@form="formIGMembershipConversion"]'
    static BTN_CANCEL = '//button[@form="formIGMembershipConversion"]/following-sibling::button[text()="Cancel"]'
    static DATE_CONVERSIONDATE = '//label[@id="dtpConversionDate_label"]/following-sibling::div//span'
    static PCK_DESTINATIONIG = '//label[@for="pckDestinationInterestGroup"]/following-sibling::div//button'
    static TBL_SELECTDESTINATIONIG = '//div[text()="Select Destination Interest Group"]/../..//table'
    static TXT_CONVERSIONREASON = '//textarea[@id="txtConversionReason"]'
    static LBL_CONVERSIONID = '//label[text()="Conversion ID"]/following-sibling::div'
    static LBL_SAFRAMEMBERID = '//label[text()="SAFRA Member ID"]/following-sibling::div'
    static LBL_CUSTOMERNAME = '//label[text()="Customer Name"]/following-sibling::div'
    static LBL_SAFRAMEMBERSHIPSTATUS = '//label[text()="SAFRA Membership Status"]/following-sibling::div'
    static LBL_SAFRAMEMBEREXPIRYDATE = '//label[text()="SAFRA Membership Expiry Date"]/following-sibling::div'
    static LBL_IGMEMBERSHIPID = '//label[text()="Interest Group Membership ID"]/following-sibling::div'
    static LBL_INTERESTGROUP = '//label[text()="Interest Group"]/following-sibling::div'
    static LBL_IGTERMSTART = '//label[text()="Interest Group Term Start"]/following-sibling::div'
    static LBL_IGTERMEND = '//label[text()="Interest Group Term End"]/following-sibling::div'
    static BTN_SELECT = '//button[text()="Select"]'



}

export default elems_IGMembershipConversion
