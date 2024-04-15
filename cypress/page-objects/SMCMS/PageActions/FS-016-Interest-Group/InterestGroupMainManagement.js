import elems_InterestGroupMainListing from '../../Elements/Interest Group/InterestGroupMainListing'
import elems_InterestGroupMainDetail from '../../Elements/Interest Group/InterestGroupMainDetail'
import elems_PageHeader from '../../Elements/Common/PageHeader'
import elems_Alert from '../../Elements/Common/Alerts'

class InterestGroupMain {

    /*****************************************************
     * Method: VerifyPageTitle
     * Description:This function verifies page title
     * @param {string} PageTitle
    *****************************************************/
    VerifyPageTitle(PageTitle) {
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, PageTitle)
        cy.wait(2000)
    }

    /*****************************************************
     * Method: Create New
     * Description: Click on create new button
    *****************************************************/
    CreateNew() {
        cy.Click(elems_InterestGroupMainListing.BTN_CREATENEW)
        cy.wait(20000)
    }

    /*****************************************************
     * Method: VerifyIGMainNumber
     * Description: Validate interest group main number
    *****************************************************/
    VerifyIGMainNumber(IGMainNumber) {
        cy.ValidateElementText(elems_InterestGroupMainDetail.TabInterestGroup.LBL_IGMAIN, IGMainNumber)
    }
    /*****************************************************
         * Method: FilloutIGMainInformation
         * Description: Fillout Interest Group Main Details
        *****************************************************/
    FilloutIGMainInformation(Name, Code, MainCategory, IGGroupCategoryGroup, FabsGroup,
        ClubClassification, LifeStyleGroup, SMCClassification, OwnerEmail) {

        cy.EnterText(elems_InterestGroupMainDetail.TabInterestGroup.TXT_NAME, Name)
        cy.EnterText(elems_InterestGroupMainDetail.TabInterestGroup.TXT_CODE, Code)
        cy.TickRadioButton(elems_InterestGroupMainDetail.TabInterestGroup.RADIO_NORMAL, '')
        cy.EnterText(elems_InterestGroupMainDetail.TabInterestGroup.TXT_MAINCATEGTYPE, MainCategory)
        cy.SelectPickerDifferentItemsSeachBTN(elems_InterestGroupMainDetail.TabInterestGroup.PCK_IGCATEGGROUP,
            elems_InterestGroupMainDetail.TabInterestGroup.TXT_IGGROUPCATEGGROUP, IGGroupCategoryGroup,
            elems_InterestGroupMainDetail.TabInterestGroup.BTN_SEARCHFILTER)
        cy.SelectPickerDifferentItemsSeachBTN(elems_InterestGroupMainDetail.TabInterestGroup.PCK_FABSGROUP,
            elems_InterestGroupMainDetail.TabInterestGroup.TXT_CODESETNAME, FabsGroup,
            elems_InterestGroupMainDetail.TabInterestGroup.BTN_SEARCHFILTER)
        cy.SelectPickerDifferentItemsSeachBTN(elems_InterestGroupMainDetail.TabInterestGroup.PCK_CLUBCLASSIFICATION,
            elems_InterestGroupMainDetail.TabInterestGroup.TXT_CODESETNAME, ClubClassification,
            elems_InterestGroupMainDetail.TabInterestGroup.BTN_SEARCHFILTER)
        cy.SelectPickerDifferentItemsSeachBTN(elems_InterestGroupMainDetail.TabInterestGroup.PCK_LIFESTYLEGROUP,
            elems_InterestGroupMainDetail.TabInterestGroup.TXT_CODESETNAME, LifeStyleGroup,
            elems_InterestGroupMainDetail.TabInterestGroup.BTN_SEARCHFILTER)
        cy.SelectPickerDifferentItemsSeachBTN(elems_InterestGroupMainDetail.TabInterestGroup.PCK_SMCCLASSIFICATION,
            elems_InterestGroupMainDetail.TabInterestGroup.TXT_CODESETNAME, SMCClassification,
            elems_InterestGroupMainDetail.TabInterestGroup.BTN_SEARCHFILTER)
        cy.SelectPickerDifferentItemsSeachBTN(elems_InterestGroupMainDetail.TabInterestGroup.PCK_OWNER,
            elems_InterestGroupMainDetail.TabInterestGroup.TXT_LOGINEMAIL, OwnerEmail,
            elems_InterestGroupMainDetail.TabInterestGroup.BTN_SEARCHFILTER)

    }

    /*****************************************************
         * Method: FilloutIGMainInformation
         * Description: Fillout Interest Group Main Details
        *****************************************************/
    FilloutE1MainInformation(Name, Code, MainCategory, IGGroupCategoryGroup, FabsGroup,
        ClubClassification, LifeStyleGroup, SMCClassification, OwnerEmail) {

        cy.EnterText(elems_InterestGroupMainDetail.TabInterestGroup.TXT_NAME, Name)
        cy.EnterText(elems_InterestGroupMainDetail.TabInterestGroup.TXT_CODE, Code)
        cy.TickRadioButton(elems_InterestGroupMainDetail.TabInterestGroup.RADIO_ENERGYONE)
        cy.EnterText(elems_InterestGroupMainDetail.TabInterestGroup.TXT_MAINCATEGTYPE, MainCategory)
        cy.SelectPickerDifferentItemsSeachBTN(elems_InterestGroupMainDetail.TabInterestGroup.PCK_IGCATEGGROUP,
            elems_InterestGroupMainDetail.TabInterestGroup.TXT_IGGROUPCATEGGROUP, IGGroupCategoryGroup,
            elems_InterestGroupMainDetail.TabInterestGroup.BTN_SEARCHFILTER)
        cy.SelectPickerDifferentItemsSeachBTN(elems_InterestGroupMainDetail.TabInterestGroup.PCK_FABSGROUP,
            elems_InterestGroupMainDetail.TabInterestGroup.TXT_CODESETNAME, FabsGroup,
            elems_InterestGroupMainDetail.TabInterestGroup.BTN_SEARCHFILTER)
        cy.SelectPickerDifferentItemsSeachBTN(elems_InterestGroupMainDetail.TabInterestGroup.PCK_CLUBCLASSIFICATION,
            elems_InterestGroupMainDetail.TabInterestGroup.TXT_CODESETNAME, ClubClassification,
            elems_InterestGroupMainDetail.TabInterestGroup.BTN_SEARCHFILTER)
        cy.SelectPickerDifferentItemsSeachBTN(elems_InterestGroupMainDetail.TabInterestGroup.PCK_LIFESTYLEGROUP,
            elems_InterestGroupMainDetail.TabInterestGroup.TXT_CODESETNAME, LifeStyleGroup,
            elems_InterestGroupMainDetail.TabInterestGroup.BTN_SEARCHFILTER)
        cy.SelectPickerDifferentItemsSeachBTN(elems_InterestGroupMainDetail.TabInterestGroup.PCK_SMCCLASSIFICATION,
            elems_InterestGroupMainDetail.TabInterestGroup.TXT_CODESETNAME, SMCClassification,
            elems_InterestGroupMainDetail.TabInterestGroup.BTN_SEARCHFILTER)
        cy.SelectPickerDifferentItemsSeachBTN(elems_InterestGroupMainDetail.TabInterestGroup.PCK_OWNER,
            elems_InterestGroupMainDetail.TabInterestGroup.TXT_LOGINEMAIL, OwnerEmail,
            elems_InterestGroupMainDetail.TabInterestGroup.BTN_SEARCHFILTER)

    }

    /*****************************************************
     * Method: AddLocation
     * Description: This function add location
    *****************************************************/
    AddLocation(LocationName) {

        cy.Click(elems_InterestGroupMainDetail.Location.BTN_ADD)
        cy.wait(1000)
        cy.EnterText(elems_InterestGroupMainDetail.Location.TXT_LOCATIONNAME, LocationName)
        cy.Click(elems_InterestGroupMainDetail.Location.BTN_SEARCHFILTER)
        cy.SelectTableItem(elems_InterestGroupMainDetail.Location.TBL_SELECTLOCATION, 'Location Name', LocationName)
        cy.Click(elems_InterestGroupMainDetail.Location.BTN_SELECT)
    }

    /*****************************************************
     * Method: RemoveLocation
     * Description: This function Remove location
    *****************************************************/
    RemoveLocation(LocationName) {

        cy.SelectTableItem(elems_InterestGroupMainDetail.Location.TBL_LOCATION, 'Location Name', LocationName)
        cy.Click(elems_InterestGroupMainDetail.Location.BTN_REMOVE)
        cy.ValidateElementText(elems_Alert.NOTIFICATION_MESSAGE, 'Item(s) removed.')

    }

    /*****************************************************
         * Method: AddApproverOption
         * Description: This function will add approver
        *****************************************************/
    AddApproverOption(ApproverOption, ApproverEmail) {

        cy.SelectDropDownItem(elems_InterestGroupMainDetail.TabInterestGroup.DRP_APPROVALOPTION, ApproverOption)

        if (ApproverOption === 'Specific Approver') {
            cy.SelectPickerDifferentItemsSeachBTN(elems_InterestGroupMainDetail.TabInterestGroup.PCK_APPROVER,
                elems_InterestGroupMainDetail.TabInterestGroup.TXT_LOGINEMAIL, ApproverEmail,
                elems_InterestGroupMainDetail.TabInterestGroup.BTN_SEARCHFILTER
            )
        }
    }



    /*****************************************************
         * Method: SaveAsDraft
         * Description: This function click on save as draft button
        *****************************************************/
    SaveAsDraft() {

        cy.Click(elems_InterestGroupMainDetail.BTN_SAVEASDRAFT)

    }


    /*****************************************************
         * Method: FilterWithStatus
         * Description: This function filter interest group listing table with status
        *****************************************************/
    FilterWithStatus(Status) {

        cy.SelectDropDownItem(elems_InterestGroupMainListing.DRP_STATUS, Status)
        cy.Click(elems_InterestGroupMainListing.BTN_SEARCHFILTER)
        cy.VerifyTableEntry(elems_InterestGroupMainListing.TBL_IGGROUPMAINLIST, 'Status', Status)

    }

    /*****************************************************
         * Method: VerifyTableEntries
         * Description: This function verifies table entries status and name
        *****************************************************/
    VerifyTableEntries(Name, Status) {

        cy.VerifyTableEntry(elems_InterestGroupMainListing.TBL_IGGROUPMAINLIST, 'Status', Status)
        cy.VerifyTableEntry(elems_InterestGroupMainListing.TBL_IGGROUPMAINLIST, 'Name', Name)

    }


    /*****************************************************
         * Method: ClickIGTableLink
         * Description: This function Click On Newly Created Item
        *****************************************************/
    ClickIGTableLink(Name) {

        cy.ClickTableLinkItem(elems_InterestGroupMainListing.TBL_IGGROUPMAINLIST, 'Name', Name)

    }


    /*****************************************************
         * Method: ClickChargeRateTab
         * Description: This function Click On Charge Rate Tab
        *****************************************************/
    ClickChargeRateTab() {

        cy.Click(elems_InterestGroupMainDetail.TabChargeRate.TAB_CHARGERATE)

    }

    /*****************************************************
         * Method: ClickAddChargeType
         * Description: This function Click On Add Charge Type
        *****************************************************/
    ClickAddChargeType() {

        cy.Click(elems_InterestGroupMainDetail.TabChargeRate.BTN_ADDCHARGETYPE)
    }

    /*****************************************************
             * Method: FilloutChargeTypeFields
             * Description: This function Fill out Charge Type Fields
            *****************************************************/
    FilloutChargeTypeFields(ChargeName, TransactionType, CalculationType, AmmountType) {
        cy.EnterText(elems_InterestGroupMainDetail.TabChargeRate.TXT_CHARGENAME, ChargeName)
        cy.SelectDropDownItem(elems_InterestGroupMainDetail.TabChargeRate.DRP_TRANSACTIONTYPE, TransactionType)
        cy.SelectDropDownItem(elems_InterestGroupMainDetail.TabChargeRate.DRP_CALCULATIONTYPE, CalculationType)
        cy.SelectDropDownItem(elems_InterestGroupMainDetail.TabChargeRate.DRP_AMOUNTTYPE, AmmountType)

    }
    /*****************************************************
         * Method: AddCustomerCategory
         * Description: This function Add Customer Category
        *****************************************************/
    AddCustomerCategory(CustomerCategoryName) {

        cy.SelectPickerDifferentItemsSeachBTN(elems_InterestGroupMainDetail.TabChargeRate.BTN_ADDCUSTOMERCATEG,
            elems_InterestGroupMainDetail.TabChargeRate.TXT_CUSTOMERCATEGORYNAME, CustomerCategoryName,
            elems_InterestGroupMainDetail.TabInterestGroup.BTN_SEARCHFILTER)
    }



    /*****************************************************
         * Method: FilloutProductInformation
         * Description: This function Fill out Product Information Fields
        *****************************************************/
    FilloutProductInformation(RegItemCode, RenewalItemCode, DefermentItemCode, ReinstatementItemCode,
        TerminationItemCode, WaiverItemCode, ReversalItemCode) {

        cy.SelectPickerDifferentItemsSeachBTN(elems_InterestGroupMainDetail.TabChargeRate.PCK_REGITEMCODE,
            elems_InterestGroupMainDetail.TabChargeRate.TXT_PRODUCTNAME, RegItemCode,
            elems_InterestGroupMainDetail.TabInterestGroup.BTN_SEARCHFILTER)
        cy.SelectPickerDifferentItemsSeachBTN(elems_InterestGroupMainDetail.TabChargeRate.PCK_RENEWALITEMCODE,
            elems_InterestGroupMainDetail.TabChargeRate.TXT_PRODUCTNAME, RenewalItemCode,
            elems_InterestGroupMainDetail.TabInterestGroup.BTN_SEARCHFILTER)
        cy.SelectPickerDifferentItemsSeachBTN(elems_InterestGroupMainDetail.TabChargeRate.PCK_DEFERITEMCODE,
            elems_InterestGroupMainDetail.TabChargeRate.TXT_PRODUCTNAME, DefermentItemCode,
            elems_InterestGroupMainDetail.TabInterestGroup.BTN_SEARCHFILTER)
        cy.SelectPickerDifferentItemsSeachBTN(elems_InterestGroupMainDetail.TabChargeRate.PCK_REINSTATEMENTITEMCODE,
            elems_InterestGroupMainDetail.TabChargeRate.TXT_PRODUCTNAME, ReinstatementItemCode,
            elems_InterestGroupMainDetail.TabInterestGroup.BTN_SEARCHFILTER)
        cy.SelectPickerDifferentItemsSeachBTN(elems_InterestGroupMainDetail.TabChargeRate.PCK_TERMINATEITEMCODE,
            elems_InterestGroupMainDetail.TabChargeRate.TXT_PRODUCTNAME, TerminationItemCode,
            elems_InterestGroupMainDetail.TabInterestGroup.BTN_SEARCHFILTER)
        cy.SelectPickerDifferentItemsSeachBTN(elems_InterestGroupMainDetail.TabChargeRate.PCK_WAIVERITEMCODE,
            elems_InterestGroupMainDetail.TabChargeRate.TXT_PRODUCTNAME, WaiverItemCode,
            elems_InterestGroupMainDetail.TabInterestGroup.BTN_SEARCHFILTER)
        cy.SelectPickerDifferentItemsSeachBTN(elems_InterestGroupMainDetail.TabChargeRate.PCK_REVERSALITEMCODE,
            elems_InterestGroupMainDetail.TabChargeRate.TXT_PRODUCTNAME, ReversalItemCode,
            elems_InterestGroupMainDetail.TabInterestGroup.BTN_SEARCHFILTER)
    }

    /*****************************************************
         * Method: Submit
         * Description: This function Click On Submit Button
        *****************************************************/
    Submit() {

        cy.Click(elems_InterestGroupMainDetail.BTN_SUBMIT)
    }

    /*****************************************************
         * Method: ViewInterestGroup
         * Description: This function Click On View Interest Group Button
        *****************************************************/
    ViewInterestGroup() {

        cy.Click(elems_InterestGroupMainDetail.BTN_VIEWINTERESTGROUP)
    }
    /*****************************************************
         * Method: Cancel
         * Description: This function Click On Cancel Button
        *****************************************************/
    Cancel() {

        cy.Click(elems_InterestGroupMainDetail.BTN_CANCEL)
    }


}

export default new InterestGroupMain