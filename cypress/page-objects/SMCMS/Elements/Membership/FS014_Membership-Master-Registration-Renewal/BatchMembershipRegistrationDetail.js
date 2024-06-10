class elems_BatchMembershipRegistrationDetail {

    static BatchInformation = {
        LBL_BATCHID: '//label[@for="lblBatchId"]',
        TXT_BATCHNAME: '//input[@id="txtBatchName"]',
        DRP_BATCHTYPE: '//span[@id="txtBatchType"]',
        TXT_RECTALKSESSIONID: '//input[@id="txtRecTalk"]',
        DRP_MEMSHIPREGTENURE: '//span[@id="drpRegistrationTenure"]',
        TXT_PROMOTIONREGISTRATION: '//input[@id="pckPromoRegistration"]',
        DRP_MEMSHIPRENEWALTENURE: '//span[@id="drp-renewal-tenure"]',
        TXT_PROMOTION_RENEWAL: '//input[@id="txt-promo-tenure"]',
        DRP_PAYMENTMODE: '//span[@id="drp-payment-mode"]',
        LBL_STATUS: '//label[@for="lbl-status"]',

        //Batch Type Interest Group

        TXT_NAME: '//input[@name="name"]',
        BTN_SEARCHFILTERS: "//span[text()='Search Filters']",
        PCK_IG: '//label[@for="pckInterestGroup"]/following-sibling::div//button',
        DATE_IGEFFECTIVEDATE: '//input[@id="pckInterestGroupMembershipEffectiveDate"]',
        TXT_IGTERM: '//input[@id="InterestGroupMembershipTerm"]',//span[@title="Increase value"]',
        PCK_IGLOCATION: '//label[@for="pckInterestGroupLocation"]//following-sibling::div//button',
        BTN_IGREGDEFAULTIG: '//button[@id="interestGroupAddDefaultIG"]',
        BTN_ADDIGREGISTRATION: '//button[@id="interestGroupAddIGRegistration"]',
        BTN_REMOVEIGREGISTRAION: '//span[text()="Remove Interest Group Registration"]',
        BTN_UPLOAD: '//span[text()="Upload"]',
        TBL_IGREGRENEWAL: '//div[@class="k-widget k-grid"]//table',


    }

    static MembershipRegistrationAndRenewalListing = {
        BTN_ADDMEMBER: '//span[text()="Add Member"]',
        TBL_MEMSHIPREGANDRENEWALLIST: '//legend[text()="Membership Registration and Renewal Listing"]/ancestor::div//table'
    }

    static MemRegInBatchRegistration = {
        BTN_NEWMEMBERPRINCIPAL: '//span[text()="New Member (Principal)"]',
        BTN_NEWMEMBERDEPENDENT: '//span[text()="New Member (Dependent)"]',
        DRP_DEPENDENTTYPE: '//span[@id="drpDependentType"]',
        PCK_PRINCIPALID: '//label[text()="Principal ID"]/following-sibling::div//button',
        RADIO_BATCHREGISTRATION: '//input[@id="radioBatch"]',
        RADIO_INDIVIDUALREGISTRATION: '//input[@id="radioIndividual"]',
        LNK_GOTOLASTPAGE: '//a[@title="Go to the last page"]',
        TBL_MEMBERID: '//div[@class="k-widget k-grid"]//table',
        BTN_SELECT: '//span[text()="Select"]',
        BTN_NEXT: '//span[text()="Next"]',
        BTN_CANCEL: '//span[text()="Cancel"]',

        CHK_EXISTINGMEMBER: '//input[@id="radioExistingMember"]',
        TXT_MEMBERID: '//input[@id="txtmemberID"]',
        TXT_NRIC: '//input[@id="txtNric"]',

        CHK_NONMEMBER: '//input[@id="radioNonMember"]',
        TXT_LAST4NRIC: '//input[@id="txtLastDigits"]',
        DATE_DOB: '//input[@id="dtpDateOfBirth"]',



    }
    static SELECTMEMBERCATEPOPUP = {

        RADIO_PRINCIPAL: '//input[@id="radioPrincipal"]',
        RADIO_DEPENDENT: '//input[@id="radioDependent"]',
        BTN_SELECT: '//span[text()="Select"]',
        BTN_CANCEL: '//span[text()="Cancel"]',
    }

    static BTN_SAVE = '//span[text()="Save"]'
    static BTN_NEXT = '//span[text()="Next"]'
    static BTN_SAVEANDNEXT = '//span[text()="Save and Next"]'
    static BTN_SAVEANDNEXTTENURE = '//span[text()=" Save & Next"]'
    static BTN_CANCEL = '//span[text()="Cancel"]'
    static BTN_VALIDATEREGISTRATION = '//span[text()="Validate Registration"]'
    static BTN_POSTREGISTRATION = '//span[text()="Post Registration"]'
    static DATE_APPLICATIONDATE = '//input[@id="dtpApplicationDate"]'

}


export default elems_BatchMembershipRegistrationDetail