import elems_InterestGroupDetail from '../../Elements/Interest Group/InterestGroupDetail'
import elems_Picker from '../../Elements/Common/Picker'
import elems_Alerts from '../../Elements/Common/Alerts'
import elems_InterestGroupListing from '../../Elements/Interest Group/InterestGroupListing'

class InterestGroupDetail {

    /*****************************************************
     * Method: SaveAsDraft
     * Description: Click on Save As Draft button
    *****************************************************/
    SaveAsDraft() {
        cy.Click(elems_InterestGroupDetail.BTN_SAVEASDRAFT)
        cy.wait(1000)
    }


    /*****************************************************
     * Method: Submit
     * Description: Click on Submit button
    *****************************************************/
    Submit() {
        cy.Click(elems_InterestGroupDetail.BTN_SUBMIT)

    }
    /*****************************************************
     * Method: Cancel
     * Description: Click on Cancel button
    *****************************************************/
    Cancel() {
        cy.Click(elems_InterestGroupDetail.BTN_CANCEL)

    }
    /*****************************************************
     * Method: TabInterestGroup
     * Description: Click on Tab Interest Group 
    *****************************************************/
    TabInterestGroup() {
        cy.Click(elems_InterestGroupDetail.TabInterestGroup.TAB_IG)

    }
    /*****************************************************
     * Method: TabChargeRate
     * Description: Click on Tab Charge Rate 
    *****************************************************/
    TabChargeRate() {
        cy.Click(elems_InterestGroupDetail.TabChargeRate.TAB_CHARGERATE)

    }
    /*****************************************************
     * Method: TabOtherInfo
     * Description: Click on Tab Other Information 
    ****************************************************/
    TabOtherInfo() {
        cy.Click(elems_InterestGroupDetail.TabOtherInformation.TAB_OTHERINFORMATION)

    }
    /*****************************************************
     * Method: TabMembershipTags
     * Description: Click on Tab Membership Tags and Additional Information
    ****************************************************/
    TabMembershipTags() {

        cy.Click(elems_InterestGroupDetail.MembershipTagsAdditionalInfo.TAB_MEMBERSHIPTAGADDITIONALINFO)

    }
    /*****************************************************
     * Method: Interest Group Detail Information
     * Description: Fillout Interest group detail information Fields
     * @param {string} Name
     * @param {string} Code
     * @param {string} IGMain
     * @param {string} SubcategoryType
     * @param {string} PublishingDate
     * @param {string} EndDate
     * @param {string} MembershipTpe
    ****************************************************/
    InterestGroupDetailInformation(Name, Code, IGMain, SubcategoryType, PublishingDate, EndDate, MembershipTpe) {

        cy.EnterText(elems_InterestGroupDetail.TabInterestGroup.TXT_NAME, Name)
        cy.EnterText(elems_InterestGroupDetail.TabInterestGroup.TXT_CODE, Code)
        cy.Click(elems_InterestGroupDetail.TabInterestGroup.PCK_IGMAIN)
        cy.wait(2000)
        cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, 'Name', IGMain)
        cy.Click(elems_Picker.BTN_SELECT)
        // // cy.SelectPickerItem(elems_InterestGroupDetail.TabInterestGroup.PCK_IGMAIN, IGMain)
        cy.EnterText(elems_InterestGroupDetail.TabInterestGroup.TXT_SUBCATEGORYTYPE, SubcategoryType)
        cy.EnterDate(elems_InterestGroupDetail.TabInterestGroup.DATE_PUBLISHINGDATE, PublishingDate)
        cy.EnterDate(elems_InterestGroupDetail.TabInterestGroup.DATE_ENDDATE, EndDate)
        cy.SelectDropDownItem(elems_InterestGroupDetail.TabInterestGroup.DRP_MEMBERSHIPTYPE, MembershipTpe)


    }

    /*****************************************************
     * Method: FilloutRegistration
     * Description: Fillout Registration section
     * @param {Number} MinAge
     * @param {Number} MaxAge
     * @param {string} IsAgeRequired
     * @param {string} IsIGeCardApplicable
     * @param {string} IsAllowUserView
     * @param {string} IsAllowFloating

    ****************************************************/

    FilloutRegistration(MinAge, MaxAge, IsAgeRequired, IsIGeCardApplicable, IsAllowUserView, IsAllowFloating) {

        cy.xpath(elems_InterestGroupDetail.TabInterestGroup.TXT_MINIMUMAGEREQ).clear()
        cy.EnterText(elems_InterestGroupDetail.TabInterestGroup.TXT_MINIMUMAGEREQ, MinAge)
        cy.xpath(elems_InterestGroupDetail.TabInterestGroup.TXT_MAXAGEREQ).clear()
        cy.EnterText(elems_InterestGroupDetail.TabInterestGroup.TXT_MAXAGEREQ, MaxAge)

        cy.TickCheckBox(elems_InterestGroupDetail.TabInterestGroup.CHK_ISAGEREQUIRD, IsAgeRequired)
        cy.TickCheckBox(elems_InterestGroupDetail.TabInterestGroup.CHK_ISIGMEMBERECARD, IsIGeCardApplicable)
        cy.TickCheckBox(elems_InterestGroupDetail.TabInterestGroup.CHK_ISALLOWUSERVIEWDETAIL, IsAllowUserView)
        cy.TickCheckBox(elems_InterestGroupDetail.TabInterestGroup.CHK_ISALLOWFLOATINGANIVERSARY, IsAllowFloating)



    }

    /*****************************************************
     * Method: FilloutMembershipTerm
     * Description: Fillout Membership term section
     * @param {Number} TermLength
     * @param {Number} TermLengthType
     * @param {string} OnlineDisplay
     * @param {string} MinRegTerm
     * @param {string} MinRenewalTerm
     * @param {string} MaxRangeBypass

    ****************************************************/

    FilloutMembershipTerm(TermLength, TermLengthType, OnlineDisplay, MinRegTerm, MinRenewalTerm, MinRangeBypass, MaxRangeBypass) {

        cy.xpath(elems_InterestGroupDetail.TabInterestGroup.TXT_TERMLENGTH).clear()
        cy.EnterText(elems_InterestGroupDetail.TabInterestGroup.TXT_TERMLENGTH, TermLength)
        cy.SelectDropDownItem(elems_InterestGroupDetail.TabInterestGroup.DRP_TERMLENGTHTYPE, TermLengthType)
        cy.xpath(elems_InterestGroupDetail.TabInterestGroup.TXT_DISPLAYTERM).clear()
        cy.EnterText(elems_InterestGroupDetail.TabInterestGroup.TXT_DISPLAYTERM, OnlineDisplay)
        cy.xpath(elems_InterestGroupDetail.TabInterestGroup.TXT_MINREGISTRATIONTERM).clear()
        cy.EnterText(elems_InterestGroupDetail.TabInterestGroup.TXT_MINREGISTRATIONTERM, MinRegTerm)
        cy.xpath(elems_InterestGroupDetail.TabInterestGroup.TXT_MINRENEWALTERM).clear()
        cy.EnterText(elems_InterestGroupDetail.TabInterestGroup.TXT_MINRENEWALTERM, MinRenewalTerm)
        cy.TickCheckBox(elems_InterestGroupDetail.TabInterestGroup.CHK_ALLOWBYPASS, 'CHECK')
        cy.xpath(elems_InterestGroupDetail.TabInterestGroup.TXT_MAXRANGEBYPASS).clear()
        cy.IncreaseFieldValue(elems_InterestGroupDetail.TabInterestGroup.TXT_MAXRANGEBYPASS, 12)
        cy.wait(1000)
        cy.xpath(elems_InterestGroupDetail.TabInterestGroup.TXT_MINRANGEBYPASS).clear()
        cy.IncreaseFieldValue(elems_InterestGroupDetail.TabInterestGroup.TXT_MINRANGEBYPASS, MinRangeBypass)

    }

    /*****************************************************
     * Method: FilloutAccessModeList
     * Description: Fillout 
     * @param {string} AccessMode1
     * @param {string} AccessMode2
    ****************************************************/

    FilloutAccessModeList(AccessMode1, AccessMode2) {

        cy.SelectPickerItem(elems_InterestGroupDetail.TabInterestGroup.AccessMode.BTN_ADDACCESSMODE, AccessMode1)
        // cy.SelectPickerItem(elems_InterestGroupDetail.TabInterestGroup.AccessMode.BTN_ADDACCESSMODE, AccessMode2)
        // cy.Click(elems_InterestGroupDetail.TabInterestGroup.AccessMode.ICON_DELETE)
    }

    /*****************************************************
     * Method: CustomerCategoryAccessModeList
     * Description: Fillout
     * @param {string} CustomerCategName
    ****************************************************/

    CustomerCategoryAccessModeList(CustomerCategName) {

        cy.SelectPickerDifferentItemsWait(elems_InterestGroupDetail.TabInterestGroup.CUSTOMERCATEGORY.BTN_ADDCUSTOMERCATEGORY, 5000,
            elems_InterestGroupDetail.TabInterestGroup.CUSTOMERCATEGORY.TXT_CUTOMERCATEGNAME, CustomerCategName,
            elems_InterestGroupDetail.TabInterestGroup.CUSTOMERCATEGORY.BTN_SEARCHFILTER)
    }
    /*****************************************************
     * Method: AddLocation
     * Description: Fillout Add Location
     * @param {string} location
    ****************************************************/

    AddLocation(location) {

        cy.SelectPickerDifferentItemsWait(elems_InterestGroupDetail.TabInterestGroup.Location.BTN_ADD, 2000,
            elems_InterestGroupDetail.TabInterestGroup.Location.TXT_LOCATIONNAME, location,
            elems_InterestGroupDetail.TabInterestGroup.Location.BTN_SEARCHFILTER)
    }

    /*****************************************************
     * Method: ClickNewlyCteatedItem
     * Description:This function Click on Newly Cteated Item
     * @param {string} IGName
    ****************************************************/

    ClickNewlyCteatedItem(IGName) {

        cy.xpath(elems_InterestGroupListing.TXT_NAME).clear()
        cy.EnterText(elems_InterestGroupListing.TXT_NAME, IGName)
        cy.Click(elems_InterestGroupListing.BTN_SEARCH)
        cy.VerifyTableEntry(elems_InterestGroupListing.TBL_IGGROUPLISTING, 'Name', IGName)
        cy.ClickTableLinkItem(elems_InterestGroupListing.TBL_IGGROUPLISTING, 'Name', IGName)
    }
    /*****************************************************
     * Method: VarifyAdditionalTabsDisplayed
     * Description:This function Varify Additional Tabs are Displayed
     * @param {string} tabText
    ****************************************************/

    VarifyAdditionalTabsDisplayed(tabText) {

        cy.ValidateElementText(elems_InterestGroupDetail.TabChargeRate.TAB_CHARGERATE, tabText)
    }
    /*****************************************************
     * Method: ClickChargeRateTab
     * Description:This function Click on Charge Rate Tab
    ****************************************************/

    ClickChargeRateTab() {

        cy.Click(elems_InterestGroupDetail.TabChargeRate.TAB_CHARGERATE)
    }

    /*****************************************************
     * Method: FilloutCargeType
     * Description:This function fillout charge type
     * @param {string} ChargeName
     * @param {string} TransactionType
     * @param {string} CalculationType
     * @param {string} AmountType
    ****************************************************/
    FilloutCargeType(ChargeName, TransactionType, CalculationType, AmountType) {
        cy.Click(elems_InterestGroupDetail.TabChargeRate.BTN_ADDCHARGETYPE)
        cy.EnterText(elems_InterestGroupDetail.TabChargeRate.TXT_CHARGENAME, ChargeName)
        cy.SelectDropDownItem(elems_InterestGroupDetail.TabChargeRate.DRP_TRANSACTIONTYPE, TransactionType)
        cy.SelectDropDownItem(elems_InterestGroupDetail.TabChargeRate.DRP_CALCULATIONTYPE, CalculationType)
        cy.SelectDropDownItem(elems_InterestGroupDetail.TabChargeRate.DRP_AMOUNTTYPE, AmountType)

    }

    /*****************************************************
     * Method: ChargeRateCustomerCategory
     * Description:This function add charge rate customer category
     * @param {string} CustomerCategoryName
    ****************************************************/
    ChargeRateCustomerCategory(CustomerCategoryName) {

        cy.SelectPickerDifferentItemsWait(elems_InterestGroupDetail.TabChargeRate.BTN_ADDCUSTOMERCATEGORY, 5000,
            elems_InterestGroupDetail.TabChargeRate.TXT_CUSTOMERCATEGORYNAME, CustomerCategoryName,
            elems_InterestGroupDetail.TabInterestGroup.CUSTOMERCATEGORY.BTN_SEARCHFILTER)
        cy.EnterText(elems_InterestGroupDetail.TabChargeRate.TXT_CUSTOMERCATEGORY, '5')

    }
    /*****************************************************
     * Method: ProductMasterInformation
     * Description:This function add product master information
     * @param {string} ProductName
    ****************************************************/
    ProductMasterInformation(ProductName) {

        cy.SelectPickerDifferentItemsWait(elems_InterestGroupDetail.TabChargeRate.PCK_REGITEMCODE, 2000,
            elems_InterestGroupDetail.TabChargeRate.TXT_PRODUCTNAME, ProductName,
            elems_InterestGroupDetail.TabChargeRate.BTN_SEARCHFILTER)
        cy.SelectPickerDifferentItemsWait(elems_InterestGroupDetail.TabChargeRate.PCK_RENEWALITEMCODE, 2000,
            elems_InterestGroupDetail.TabChargeRate.TXT_PRODUCTNAME, ProductName,
            elems_InterestGroupDetail.TabChargeRate.BTN_SEARCHFILTER)
        cy.SelectPickerDifferentItemsWait(elems_InterestGroupDetail.TabChargeRate.PCK_DEFERMENTITEMCODE, 2000,
            elems_InterestGroupDetail.TabChargeRate.TXT_PRODUCTNAME, ProductName,
            elems_InterestGroupDetail.TabChargeRate.BTN_SEARCHFILTER)
        cy.SelectPickerDifferentItemsWait(elems_InterestGroupDetail.TabChargeRate.PCK_REINSTATEMENTCODE, 2000,
            elems_InterestGroupDetail.TabChargeRate.TXT_PRODUCTNAME, ProductName,
            elems_InterestGroupDetail.TabChargeRate.BTN_SEARCHFILTER)
        cy.SelectPickerDifferentItemsWait(elems_InterestGroupDetail.TabChargeRate.PCK_TERMINATIONCODE, 2000,
            elems_InterestGroupDetail.TabChargeRate.TXT_PRODUCTNAME, ProductName,
            elems_InterestGroupDetail.TabChargeRate.BTN_SEARCHFILTER)
        cy.SelectPickerDifferentItemsWait(elems_InterestGroupDetail.TabChargeRate.PCK_WAIVERITEMCODE, 2000,
            elems_InterestGroupDetail.TabChargeRate.TXT_PRODUCTNAME, ProductName,
            elems_InterestGroupDetail.TabChargeRate.BTN_SEARCHFILTER)
        cy.SelectPickerDifferentItemsWait(elems_InterestGroupDetail.TabChargeRate.PCK_REVERSALCODE, 2000,
            elems_InterestGroupDetail.TabChargeRate.TXT_PRODUCTNAME, ProductName,
            elems_InterestGroupDetail.TabChargeRate.BTN_SEARCHFILTER)
    }



    /*****************************************************
     * Method: ClickMembershipTagTab
     * Description:This function Click on Membership Tags Tab
    ****************************************************/

    ClickMembershipTagTab() {

        cy.Click(elems_InterestGroupDetail.MembershipTagsAdditionalInfo.TAB_MEMBERSHIPTAGADDITIONALINFO)
    }

    /*****************************************************
     * Method: FilloutMembershipTags
     * Description:This function Click on Membership Tags Tab
     * @param {string} AttributeName
     * @param {string} AttributeCode
    ****************************************************/

    FilloutMembershipTags(AttributeName, AttributeCode) {

        cy.Click(elems_InterestGroupDetail.MembershipTagsAdditionalInfo.BTN_ADDMEMBERSHIPTAGS)
        cy.EnterText(elems_InterestGroupDetail.MembershipTagsAdditionalInfo.TXT_ATTRIBUTENAME, AttributeName)
        cy.EnterText(elems_InterestGroupDetail.MembershipTagsAdditionalInfo.TXT_ATTRIBUTECODE, AttributeCode)
    }
    /*****************************************************
     * Method: AdditionalFields
     * Description:This function Click on Membership Tags Tab
     * @param {string} DisplayOrder
     * @param {string} ColumnCaption
     * @param {string} ControlType
     * @param {string} Tooltip
     * @param {string} Active
     * @param {string} ControlSpan
     * @param {string} Validation
    ****************************************************/

    AdditionalFields(DisplayOrder, ColumnCaption, ControlType, Tooltip, Active, ControlSpan, Validation) {

        cy.Click(elems_InterestGroupDetail.MembershipTagsAdditionalInfo.BTN_ADDADITIONALFIELDS)
        cy.SelectDropDownItem(elems_InterestGroupDetail.MembershipTagsAdditionalInfo.DRP_DISPLAYORDER, DisplayOrder)
        cy.EnterText(elems_InterestGroupDetail.MembershipTagsAdditionalInfo.TXT_COLUMNCAPTION, ColumnCaption)
        cy.SelectDropDownItem(elems_InterestGroupDetail.MembershipTagsAdditionalInfo.DRP_CONTROLTYPE, ControlType)
        cy.EnterText(elems_InterestGroupDetail.MembershipTagsAdditionalInfo.TXT_TOOLTIP, Tooltip)
        {
            Active === 'Yes' && cy.TickRadioButton(elems_InterestGroupDetail.MembershipTagsAdditionalInfo.CHK_STILLACTIVE)
        }
        {
            Active === 'No' && cy.TickCheckBox(elems_InterestGroupDetail.MembershipTagsAdditionalInfo.CHK_NOLONGERACTIVE)
        }
        cy.SelectDropDownItem(elems_InterestGroupDetail.MembershipTagsAdditionalInfo.DRP_CONTROLSPAN, ControlSpan)
        cy.TickCheckBox(elems_InterestGroupDetail.MembershipTagsAdditionalInfo.CHK_REQUIREDVALIDATION, Validation)

        cy.Click(elems_InterestGroupDetail.MembershipTagsAdditionalInfo.BTN_SAVE)
    }



    /*****************************************************
     * Method: UploadFile
     * Description: This function ulpload the file
     * @param {string} FileName
     *****************************************************/
    UploadFile(FileName) {

        cy.UploadFile(elems_MassUpdateForMemberDataDetail.File.UPL_FILE, FileName)
        cy.wait(2000)

    }
    /*****************************************************
     * Method: OtherInformationTab
     * Description: This function click on other information tab
     *****************************************************/
    OtherInformationTab() {

        cy.Click(elems_InterestGroupDetail.TabOtherInformation.TAB_OTHERINFORMATION)

    }

    /*****************************************************
     * Method: FilloutInformationFields
     * Description: This function fillout information field
     * @param {string} Description
     * @param {string} SpecialRemarks
     * @param {string} ContactPersonInformation
     *****************************************************/
    FilloutInformationFields(Description, SpecialRemarks, ContactPersonInformation) {

        cy.EnterText(elems_InterestGroupDetail.TabOtherInformation.Description.TEXTAREA_DESCRIPTION, Description)
        cy.EnterText(elems_InterestGroupDetail.TabOtherInformation.SpecialRemarks.TEXTAREA_DESCRIPTION, SpecialRemarks)
        cy.EnterText(elems_InterestGroupDetail.TabOtherInformation.ContactPersonInformation.TEXTAREA_DESCRIPTION, ContactPersonInformation)

    }
    /*****************************************************
     * Method: IndenmityWaiver
     * Description: This function fillout idenmity Waiver
     * @param {string} IndemnityText
     *****************************************************/
    IndenmityWaiver(IndemnityText) {

        cy.TickCheckBox(elems_InterestGroupDetail.TabOtherInformation.IndemnityText.CHK_ENABLEIDENTITYWAIVER, 'CHECK')
        cy.EnterText(elems_InterestGroupDetail.TabOtherInformation.IndemnityText.TEXTAREA_DESCRIPTION, IndemnityText)

    }

    /*****************************************************
     * Method: TermsandConditions
     * Description: This function Fillout Term and Condition
     * @param {string} TermsandConditionsText
     *****************************************************/
    TermsandConditions(TermsandConditionsText) {

        cy.TickCheckBox(elems_InterestGroupDetail.TabOtherInformation.TermsandConditionsText.CHK_ENABLETERMCONDITION, 'CHECK')
        cy.EnterText(elems_InterestGroupDetail.TabOtherInformation.TermsandConditionsText.TEXTAREA_DESCRIPTION, TermsandConditionsText)

    }
    /*****************************************************
     * Method: VarifyTableItemStatus
     * Description: This function Varify status of the newly created item
     * @param {string} Status
     * @param {string} Name
     *****************************************************/
    VarifyTableItemStatus(Name, Status) {

        cy.EnterText(elems_InterestGroupListing.TXT_NAME, Name)
        cy.Click(elems_InterestGroupListing.BTN_SEARCH)
        cy.VerifyTableEntry(elems_InterestGroupListing.TBL_IGGROUPLISTING, 'Status', Status)

    }

    /*****************************************************
     * Method: VarifyNotificationMsg
     * Description: This function Varify status of the newly created item
     * @param {string} Text
     *****************************************************/
    VarifyNotificationMsg(Text) {

        cy.ValidateElementText(elems_Alerts.NOTIFICATION_MESSAGE, Text)

    }

}
export default new InterestGroupDetail