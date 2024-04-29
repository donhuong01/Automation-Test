class elems_MemberCard {

    static MemberCardListing = {
        TBL_MEMBERCARDLISTING : '//h3[text()="Member Card Listing"]/parent::div//table'
    }

    static CardInformation = {
        LBL_ECARD : '//label[text()="eCard"]/parent::div//label[@for="lblECard"]',
        LBL_PHYSICALCARD : '//label[text()="Physical Card"]/parent::div//label[@for="lblPhysicalCard"]',
        LBL_MEMBERCARDNUMBER : '//label[text()="Member Card Number"]/parent::div//label[@for="lblMemberCardNumer"]',
        LBL_CARDTYPE : '//label[text()="Card Type"]/parent::div//label[@for="lblCardType"]',
        LBL_CARDCATEGORY : '//label[text()="Card Category"]/parent::div//label[@for="lblCardCategory"]',
        LBL_PRINCIPALID : '//label[text()="Principal ID"]/parent::div//label[@for="lblPrincipalId"]',
        LBL_CARDHOLDERMEMBERID : '//label[text()="Card Holder Member ID"]/parent::div//label[@for="lblCardHolderMemberId"]',
        LBL_MEMBERNAME : '//label[text()="Member Name"]/parent::div//label[@for="lblMemberName"]',
        LBL_MEMBERCATEGORY : '//label[text()="Member Category"]/parent::div//label[@for="lblMemberCategory"]',
        LBL_TITLE : '//label[text()="Title"]/parent::div//label[@for="lblTitle"]'
    }

    static CardStatus = {
        LBL_VALIDFROM : '//label[text()="Valid From"]/parent::div//label[@for="lblValidFrom"]',
        LBL_VALIDTO : '//label[text()="Valid To"]/parent::div//label[@for="lblValidTo"]',
        LBL_EXPIRYDATE : '//label[text()="Expiry Date"]/parent::div//label[@for="lblExpiryDate"]',
        LBL_STATUS : '//label[text()="Status"]/parent::div//label[@for="lblActive"]'
    }

    static PrintInformation = {
        LBL_LASTPRINTEDBY : '//label[text()="Last Printed By"]/parent::div//label[@for="lblLastPrintedBy"]',
        LBL_LASTPRINTEDDATE : '//label[text()="Last Printed Date"]/parent::div//label[@for="lblLastPrintedDate"]',
        LBL_PRINTCOUNTED : '//label[text()="Print Counted"]/parent::div//label[@for="lblPrintCounted"]'
    }

    static BankInformation = {
        LBL_BANKTERMNTIONPROCSSDDATE : '//label[text()="Bank Termination Processed Date"]/parent::div//label[@for="lblBankTermination"]'
    }

    static BTN_GENERATECARD = '//button[text()="Generate Card"]'
    static BTN_ACTIVATEECARD = '//button[text()="Activate e-Card"]'
    static BTN_ACTIVATEPHYSICALCARD = '//button[text()="Activate Physical Card"]'
    static BTN_DEACTIVATEECARD = '//button[text()="Deactivate e-Card"]'
    static BTN_DEACTIVATEPHYSICALCARD = '//button[text()="Deactivate Physical Card"]'
    static BTN_PRINTCARD = '//button[text()=" Print Card"]'
}

export default elems_MemberCard