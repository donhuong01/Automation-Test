class elems_InterestGroupDetail {

  static BTN_SAVEASDRAFT = '//button[text()="Save as Draft"]'
  static BTN_SUBMIT = '//button[text()="Submit"]'
  static BTN_CANCEL = '//button[text()="Cancel"]'


  static TabInterestGroup = {

    TAB_IG: '//button[text()="Interest Group"]',
    TXT_NAME: '//input[@id="Name"]',
    TXT_CODE: '//input[@id="code"]',
    PCK_IGMAIN: '//label[text()="Interest Group Main"]/following-sibling::div//button',
    TXT_SUBCATEGORYTYPE: '//input[@id="subCategoryType"]',
    DATE_PUBLISHINGDATE: '//input[@id="publishingDate"]',
    DATE_ENDDATE: '//input[@id="endDate"]',
    DRP_MEMBERSHIPTYPE: '//span[@id="membershipType"]',
    TXT_MINIMUMAGEREQ: '//input[@id="minAgeRequirement"]',
    TXT_MAXAGEREQ: '//input[@id="maxAgeRequirement"]',
    CHK_ISAGEREQUIRD: '//input[@id="isAgeRequired"]',
    CHK_ISIGMEMBERECARD: '//input[@id="isInterestGroupMember"]',
    CHK_ISALLOWUSERVIEWDETAIL: '//input[@id="isAllowUserViewDetailsOnline"]',
    CHK_ISALLOWFLOATINGANIVERSARY: '//input[@id="allowFloatingAnniversary"]',
    TXT_TERMLENGTH: '//input[@id="termLength"]',
    DRP_TERMLENGTHTYPE: '//span[@id="termLengthType"]',
    TXT_DISPLAYTERM: '//input[@id="onlineDisplayTerm"]',
    TXT_MINREGISTRATIONTERM: '//input[@id="minRegistrationTerm"]',
    TXT_MINRENEWALTERM: '//input[@id="minRenewalTerm"]',
    CHK_ALLOWBYPASS: '//input[@id="allowBypass"]',
    TXT_MINRANGEBYPASS: '//input[@id="minRangeForByPass"]',
    TXT_MAXRANGEBYPASS: '//input[@id="maxRangeForByPass"]',


    AccessMode: {
      BTN_ADDACCESSMODE: '//button[text()="Add Access Mode"]',
      TXT_ACCESSMODE: '//input[@id="txtAccessModeName"]',
      TBL_SELECTACCESSMODE: '//form[@id="formAccessModeDialog"]/parent::div/parent::div//table',
      BTN_SEARCHFILTER: '//button[@form="formAccessModeDialog"]',
      BTN_SELECT: '//button[text()="Select"]',
      BTN_CANCEL: '//button[text()="Select"]/following-sibling::button',
      TBL_ACCESSMODELIST: '//h3[text()="Access Mode List"]/following-sibling::div//div[@class="k-grid-container"]//table',
      ICON_DELETE: '(//h3[text()="Access Mode List"]/following-sibling::div//div[@class="k-grid-container"]//table//tr//td)[1]'
    },


    CUSTOMERCATEGORY: {
      BTN_ADDCUSTOMERCATEGORY: '//h3[text()="Customer Category Access Mode List"]/following-sibling::div//button[text()="Add Customer Category"]',
      TXT_CUTOMERCATEGNAME: '//input[@id="txtCustomerCategoryName"]',
      TBL_SELECTCUSTOMERCATEG: '//form[@id="formCustomerCategoryDialog"]/parent::div/parent::div//table',
      BTN_SEARCHFILTER: '//button[@form="formCustomerCategoryDialog"]',
      BTN_SELECT: '//button[text()="Select"]',
      BTN_CANCEL: '//button[text()="Select"]/following-sibling::button',
      TBL_CUSTOMERCATEGORY: '//h3[text()="Customer Category Access Mode List"]/following-sibling::div//div[@class="k-grid-container"]//table'
    },

    Location: {
      BTN_ADD: '//h3[text()="Location"]/following-sibling::div//button[text()="Add"]',
      BTN_REMOVE: '//h3[text()="Location"]/following-sibling::div//button[text()="Remove"]',
      TXT_LOCATIONNAME: '//input[@id="txtLocationName"]',
      TBL_SELECTCUSTOMERCATEG: '//form[@id="formLocationDialog"]/parent::div/parent::div//table',
      BTN_SEARCHFILTER: '//button[@form="formLocationDialog"]',
      BTN_SELECT: '//button[text()="Select"]',
      BTN_CANCEL: '//button[text()="Select"]/following-sibling::button',
      TBL_LOCATION: '//h3[text()="Location"]/following-sibling::div//table'
    }

  }

  static TabChargeRate = {
    TAB_CHARGERATE: '//button[text()="Charge Rate"]',
    BTN_ADDCHARGETYPE: '//button[text()="Add Charge Type"]',
    BTN_ADDCUSTOMERCATEGORY: '//h3[text()="Charge Rate List"]//following-sibling::div//button[text()="Add Customer Category"]',
    TXT_CHARGENAME: '//button[text()="Add Charge Type"]/parent::div/parent::div//table//input',
    TXT_CHARGENAME2: '(//button[text()="Add Charge Type"]/parent::div/parent::div//table//input)[2]',
    DRP_TRANSACTIONTYPE: '(//button[text()="Add Charge Type"]/parent::div/parent::div//table//td//span[@class="k-widget k-dropdown"])[1]',
    DRP_TRANSACTIONTYPE2: '(//button[text()="Add Charge Type"]/parent::div/parent::div//table//td//span[@class="k-widget k-dropdown"])[4]',
    DRP_CALCULATIONTYPE: '(//button[text()="Add Charge Type"]/parent::div/parent::div//table//td//span[@class="k-widget k-dropdown"])[2]',
    DRP_CALCULATIONTYPE2: '(//button[text()="Add Charge Type"]/parent::div/parent::div//table//td//span[@class="k-widget k-dropdown"])[5]',
    DRP_AMOUNTTYPE: '(//button[text()="Add Charge Type"]/parent::div/parent::div//table//td//span[@class="k-widget k-dropdown"])[3]',
    DRP_AMOUNTTYPE2: '(//button[text()="Add Charge Type"]/parent::div/parent::div//table//td//span[@class="k-widget k-dropdown"])[6]',
    TXT_CUSTOMERCATEGORYNAME: '//input[@id="txtCustomerCategoryName"]',
    TXT_CUSTOMERCATEGORY: '(//h3[text()="Charge Rate List"]/following-sibling::div//input)[1]',
    TXT_CUSTOMERCATEGORY2: '(//h3[text()="Charge Rate List"]/following-sibling::div//input)[2]',
    PCK_REGITEMCODE: '//label[@for="pckRegistrationItemCode"]//following-sibling::div//button',
    PCK_RENEWALITEMCODE: '//label[@for="pckRenewalItemCode"]//following-sibling::div//button',
    PCK_DEFERMENTITEMCODE: '//label[@for="pckDefermentItemCode"]//following-sibling::div//button',
    PCK_REINSTATEMENTCODE: '//label[@for="pckReinstatementItemCode"]//following-sibling::div//button',
    PCK_TERMINATIONCODE: '//label[@for="pckTerminationItemCode"]//following-sibling::div//button',
    PCK_WAIVERITEMCODE: '//label[@for="pckWaiverItemCode"]//following-sibling::div//button',
    PCK_REVERSALCODE: '//label[@for="pckReversalItemCode"]//following-sibling::div//button',
    TXT_PRODUCTNAME: '//input[@name="productName"]',
    BTN_SEARCHFILTER: ' (//button[@class="k-button search-button"])[1]'
  }


  static TabOtherInformation = {
    TAB_OTHERINFORMATION: '//button[text()="Other Information"]',

    Description: {
      TEXTAREA_DESCRIPTION: '//label[text()="Description"]/..//div[@class="k-editor-content"]',
      DRP_FONTSIZE: '//label[text()="Description"]/..//span[text()="Font Size"]',
      DRP_FONTNAME: '//label[text()="Description"]/..//span[text()="Font Name"]',
      DRP_PARAGRAPH: '//label[text()="Description"]/..//span[text()="Paragraph"]',
      BTN_UNDO: '//label[text()="Description"]/..//div[@class="k-button-group"]//button[@title="Undo"]',
      BTN_REDO: '//label[text()="Description"]/..//div[@class="k-button-group"]//button[@title="Redo"]'

    },

    SpecialRemarks: {
      TEXTAREA_DESCRIPTION: '//label[text()="Special Remarks"]/..//div[@class="k-editor-content"]',
      DRP_FONTSIZE: '//label[text()="Special Remarks"]/..//span[text()="Font Size"]',
      DRP_FONTNAME: '//label[text()="Special Remarks"]/..//span[text()="Font Name"]',
      DRP_PARAGRAPH: '//label[text()="Special Remarks"]/..//span[text()="Paragraph"]',
      BTN_UNDO: '//label[text()="Special Remarks"]/..//div[@class="k-button-group"]//button[@title="Undo"]',
      BTN_REDO: '//label[text()="Special Remarks"]/..//div[@class="k-button-group"]//button[@title="Redo"]'

    },

    ContactPersonInformation: {
      TEXTAREA_DESCRIPTION: '//label[text()="Contact Person Information"]/..//div[@class="k-editor-content"]',
      DRP_FONTSIZE: '//label[text()="Contact Person Information"]/..//span[text()="Font Size"]',
      DRP_FONTNAME: '//label[text()="Contact Person Information"]/..//span[text()="Font Name"]',
      DRP_PARAGRAPH: '//label[text()="Contact Person Information"]/..//span[text()="Paragraph"]',
      BTN_UNDO: '//label[text()="Contact Person Information"]/..//div[@class="k-button-group"]//button[@title="Undo"]',
      BTN_REDO: '//label[text()="Contact Person Information"]/..//div[@class="k-button-group"]//button[@title="Redo"]'

    },

    IndemnityText: {
      CHK_ENABLEIDENTITYWAIVER: '//input[@id="chkEnableIndemnityWaiver"]',
      TEXTAREA_DESCRIPTION: '//label[text()="Indemnity Text"]/..//div[@class="k-editor-content"]',
      DRP_FONTSIZE: '//label[text()="Indemnity Text"]/..//span[text()="Font Size"]',
      DRP_FONTNAME: '//label[text()="Indemnity Text"]/..//span[text()="Font Name"]',
      DRP_PARAGRAPH: '//label[text()="Indemnity Text"]/..//span[text()="Paragraph"]',
      BTN_UNDO: '//label[text()="Indemnity Text"]/..//div[@class="k-button-group"]//button[@title="Undo"]',
      BTN_REDO: '//label[text()="Indemnity Text"]/..//div[@class="k-button-group"]//button[@title="Redo"]'

    },

    TermsandConditionsText: {
      CHK_ENABLETERMCONDITION: '//input[@id="chkEnableTermsAndConditions"]',
      TEXTAREA_DESCRIPTION: '//label[text()="Terms and Conditions Text"]/..//div[@class="k-editor-content"]',
      DRP_FONTSIZE: '//label[text()="Terms and Conditions Text"]/..//span[text()="Font Size"]',
      DRP_FONTNAME: '//label[text()="Terms and Conditions Text"]/..//span[text()="Font Name"]',
      DRP_PARAGRAPH: '//label[text()="Terms and Conditions Text"]/..//span[text()="Paragraph"]',
      BTN_UNDO: '//label[text()="Terms and Conditions Text"]/..//div[@class="k-button-group"]//button[@title="Undo"]',
      BTN_REDO: '//label[text()="Terms and Conditions Text"]/..//div[@class="k-button-group"]//button[@title="Redo"]'

    }
  }

  static MembershipTagsAdditionalInfo = {
    TAB_MEMBERSHIPTAGADDITIONALINFO: '//button[text()="Membership Tags and Additional Information"]',
    BTN_ADDMEMBERSHIPTAGS: '//h3[text()="Membership Tags"]/following-sibling::div//button[text()="Add"]',
    TXT_ATTRIBUTENAME: '(//h3[text()="Membership Tags"]/following-sibling::div//table//input)[1]',
    TXT_ATTRIBUTECODE: '(//h3[text()="Membership Tags"]/following-sibling::div//table//input)[2]',
    BTN_ADDADITIONALFIELDS: '//h3[text()="Additional Fields"]/parent::div/following-sibling::div//button',
    DRP_DISPLAYORDER: '//span[@id="drpDisplayOrder"]',
    TXT_COLUMNCAPTION: '//input[@id="columnName"]',
    DRP_CONTROLTYPE: '//span[@id="controlType"]',
    TXT_TOOLTIP: '//input[@id="toolTip"]',
    CHK_STILLACTIVE: '//label[text()="Yes, this field is still active"]/preceding-sibling::input',
    CHK_NOLONGERACTIVE: '(//input[@name="isControlActive"])[2]',
    DRP_CONTROLSPAN: '//span[@id="controlSpan"]',
    CHK_REQUIREDVALIDATION: '//input[@id="requiredvalidation"]',
    BTN_SAVE: '//button[@form="formAddAdditionalFieldsDialog"]',
    BTN_ATTACHMENT: '//div[@id="uplAttachments"]'
  }

}

export default elems_InterestGroupDetail