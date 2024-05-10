import elems_FacilityDetailFormDetailTab from '../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/FacilityDetailForm.js'
import elems_FacilityListing from '../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/FacilityListing'
import elems_PageHeader from '../../../Elements/Common/PageHeader.js'
import elems_Picker from '../../../Elements/Common/Picker.js'
import elems_PendingTaskListing from '../../../Elements/Admin/FS004_Admin-Settings/PendingTaskListing'
import elems_PendingTaskDetail from '../../../Elements/Admin/FS004_Admin-Settings/PendingTaskDetail'


class FacilityDetailForm {

    /*****************************************************
 * Method: Form Title Verification
 * Description: This function Verifies the Form Title
 * @param {string} ExpectedPg
 *****************************************************/
    VerifyPageTitle(ExpectedPg) {
        cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, ExpectedPg)

    }
    // •••••••••••••••••• DETAILS TAB •••••••••••••••••• //

    /*****************************************************
     * Method: FacilityDetailFormDetailTab
     * Description: This function fillOut Detail Tab Information
     * Author fshahzada
     * @param {string} FacilityName
     * @param {string} ActivationDate
     * @param {string} FacilityType
     * @param {string} Location
     *****************************************************/
    FacilityDetailFormDetailTab(FacilityName, ActivationDate, FacilityType, Location) {

        cy.xpath(elems_FacilityDetailFormDetailTab.DETAILSTAB.TXT_FACILITYNAME).clear()
        cy.EnterText(elems_FacilityDetailFormDetailTab.DETAILSTAB.TXT_FACILITYNAME, FacilityName)
        cy.EnterDate(elems_FacilityDetailFormDetailTab.DETAILSTAB.DATE_ACTIVATIONDATE, ActivationDate)

        cy.SelectPickerDifferentItemsWait(
            elems_FacilityDetailFormDetailTab.DETAILSTAB.BTN_FACILITYTYPE, 3000,
            elems_FacilityDetailFormDetailTab.DETAILSTAB.TXT_FACILITYTYPEPOPUP,
            FacilityType, '//div[text()="Select Facility Type"]/parent::*/following-sibling::div[@class="k-window-content k-dialog-content"]//button[text()="Search Filters"]')

        cy.Click(elems_FacilityDetailFormDetailTab.DETAILSTAB.BTN_LOCATION)
        cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, 'Location Name', Location)
        cy.Click(elems_Picker.BTN_SELECT)

        // cy.SelectPickerDifferentItemsWait(
        //     elems_FacilityDetailFormDetailTab.DETAILSTAB.BTN_LOCATION, 5000,
        //     elems_FacilityDetailFormDetailTab.DETAILSTAB.TXT_LOCATIONPOPUP,
        //     Location, '//div[text()="Select Location"]/parent::*/following-sibling::div[@class="k-window-content k-dialog-content"]//button')
        // cy.Click(elems_FacilityDetailFormDetailTab.DETAILSTAB.BTN_TRANSFERTO)
        // cy.Click(elems_FacilityDetailFormDetailTab.DETAILSTAB.BTN_TRANSFERFROM)
        // cy.Click(elems_FacilityDetailFormDetailTab.DETAILSTAB.BTN_TRANSFERALLTO)
        // cy.Click(elems_FacilityDetailFormDetailTab.DETAILSTAB.BTN_TRANSFER)

        // cy.Click(elems_FacilityDetailFormDetailTab.DETAILSTAB.CHK_HASRESOURCE)

    }
    /*****************************************************
    * Method: UploadFile
    * Description: This function select formst and transfer to 
    * Author fshahzada
    * @param {string} Upload
    * @param {string} ImageCate
    ****************************************************/

    UploadFile(Upload, ImageCate) {
        cy.Click(elems_FacilityDetailFormDetailTab.DETAILSTAB.BTN_UPLOAD)
        cy.UploadFile(elems_FacilityDetailFormDetailTab.DETAILSTAB.BTN_SELECTFILES, Upload)
        cy.wait(3000)
        cy.Click(elems_FacilityDetailFormDetailTab.DETAILSTAB.BTN_CLOSE)
        cy.wait(2000)
        cy.SelectDropDownItem(elems_FacilityDetailFormDetailTab.DETAILSTAB.DRP_IMAGERCATEGORY, ImageCate)

    }


    /*****************************************************
     * Method: BoxItemSelection
     * Description: This function select formst and transfer to 
     * Author fshahzada
     * @param {string} format
     * @param {string} title
     ****************************************************/
    BoxItemSelection(format, title) {

        // // Transfer all form 
        // cy.SelectListBoxItem(
        //     elems_FacilityDetailFormDetailTab.DETAILSTAB.TBL_FORMATALLOWEDSELECTION,
        //     'png',
        //     'Transfer To'
        // )
        // cy.SelectListBoxItem(
        //     elems_FacilityDetailFormDetailTab.DETAILSTAB.TBL_FORMATALLOWEDSELECTION,
        //     format,
        //     title
        // )

        // // Transfer to formats allowed selected
        // cy.Click(elems_FacilityDetailFormDetailTab.DETAILSTAB.BTN_TRANSFERALLTO)

        cy.Click('//li[text()="jpeg"]')
        cy.Click('//li//a[@title="Transfer To"]')

    }



    // •••••••••••••••••• GROUP BOOKING TAB •••••••••••••••••• //

    /*****************************************************
     * Method: FacilityGroupBooking
     * Description: This function fillOut Facility Group Booking Information
     * Author fshahzada
     * @param {string} BallotType
     * @param {string} BallotBefore
     * @param {string} EnableGroupBooking

     *****************************************************/

    FacilityGroupBooking(EnableGroupBooking, BallotType, BallotBefore) {

        cy.Click(elems_FacilityDetailFormDetailTab.GROUPBOOKINGTAB.TAB_GROUPBOOKING)

        if (EnableGroupBooking == 'check') {
            cy.TickCheckBox(elems_FacilityDetailFormDetailTab.GROUPBOOKINGTAB.CHK_ENABLEGROUPBOOKING, 'check')
            cy.TickCheckBox(elems_FacilityDetailFormDetailTab.GROUPBOOKINGTAB.CHK_WEDNESDAY, 'check')
            cy.TickCheckBox(elems_FacilityDetailFormDetailTab.GROUPBOOKINGTAB.CHK_FRIDAY, 'check')

            cy.SelectDropDownItem(elems_FacilityDetailFormDetailTab.GROUPBOOKINGTAB.TXT_BALLOTTYPE, BallotType)
            cy.EnterText(elems_FacilityDetailFormDetailTab.GROUPBOOKINGTAB.TXT_BALLOTBEFORE, BallotBefore)
        }
    }

    /*****************************************************
    * Method: FacilityDetailFormGroupBookingTab
    * Description: This function fillOut GroupBooking Tab Information
    * Author fshahzada
    * @param {string} GBIsAllowed
    * @param {string} GroupBookingCoslidated
    * @param {string} AccessMode
    * @param {string} CustomerName

    *****************************************************/

    FacilityDetailFormGroupBookingTab(GBIsAllowed, GBIsConsolidated, AccessMode, CustomerName) {

        // Booking Restricitons
        cy.EnterText(elems_FacilityDetailFormDetailTab.GROUPBOOKINGTAB.NUM_GROUPBOOKINGISALLOWED, GBIsAllowed)
        cy.EnterText(elems_FacilityDetailFormDetailTab.GROUPBOOKINGTAB.NUM_GROUPBOOKINGISCONSOLIDATED, GBIsConsolidated)

        cy.SelectPickerDifferentItemsSeachBTN(
            elems_FacilityDetailFormDetailTab.GROUPBOOKINGTAB.BTN_ADDBOOKINGACCESSMODE,
            elems_FacilityDetailFormDetailTab.GROUPBOOKINGTAB.TXT_ACCESSMODE, AccessMode,
            elems_FacilityDetailFormDetailTab.GROUPBOOKINGTAB.BTN_ACCESSMODESEARCHFILTER
        )

        cy.SelectPickerDifferentItemsSeachBTN(
            elems_FacilityDetailFormDetailTab.GROUPBOOKINGTAB.BTN_ADDCUSTOMERCATEGORY,
            elems_FacilityDetailFormDetailTab.GROUPBOOKINGTAB.TXT_CUSTOMERNAMEPOPUP, CustomerName,
            elems_FacilityDetailFormDetailTab.GROUPBOOKINGTAB.BTN_CUSTOMERCATESEARCHFILTER
        )
    }

    // •••••••••••••••••• CHARGE RATE TAB •••••••••••••••••• //

    /*****************************************************
     * Method: filterChargeRateListing
     * Description: This function Filters Charge Rate Listing
     * Author fshahzada & asadol
     * 
     * @param {string} ChargeRateName Charge Rate Name filter
     *****************************************************/
    filterChargeRateListing(ChargeRateName) {

        // Click Tab
        cy.Click(elems_FacilityDetailFormDetailTab.CHARGERATE.TAB_CHARGERATE)
        cy.wait(5000)

        // Enter Charge Rate Name
        if (ChargeRateName !== undefined) {
            cy.EnterText(elems_FacilityDetailFormDetailTab.CHARGERATE.TXT_CHARGERATENAME, ChargeRateName)
        }

        // Click Search Filters button
        cy.Click(elems_FacilityDetailFormDetailTab.CHARGERATE.BTN_SEARCHFILTERS)
    }

    /*****************************************************
     * Method: verifyChargeRateListing
     * Description: This function Verified Charge Rate Listing Items
     * Author: asadol
     * 
     * @param {string} ChargeRateListing Charge Rate Listing Array
     *****************************************************/
    verifyChargeRateListing(ChargeRateListing) {

        // Navigate to tab
        cy.Click(elems_FacilityDetailFormDetailTab.CHARGERATE.TAB_CHARGERATE)
        cy.wait(5000)

        // Array of listing data
        ChargeRateListing.forEach(data => {

            cy.VerifyTableEntry(
                elems_FacilityDetailFormDetailTab.CHARGERATE.TBL_CHARGERATE,
                'Start Date', data.startDate,
                'Charge Rate Name', data.chargeRateName
            )

            cy.VerifyTableEntry(
                elems_FacilityDetailFormDetailTab.CHARGERATE.TBL_CHARGERATE,
                'End Date', data.endDate,
                'Charge Rate Name', data.chargeRateName
            )
        })
    }

    /*****************************************************
     * Method: clickChargeRateLink
     * Description: Clicks a Charge Rate Item Link
     * Author: asadol
     *
     * @param {string} ChargeRateLink Charge Rate item link in Table
     *****************************************************/
    clickChargeRateLink(ChargeRateLink) {

        // Navigate to tab
        cy.Click(elems_FacilityDetailFormDetailTab.CHARGERATE.TAB_CHARGERATE)
        cy.wait(5000)

        // Select Reason Code Table Link Item
        if (ChargeRateLink !== undefined) {
            cy.ClickTableLink(
                elems_FacilityDetailFormDetailTab.CHARGERATE.TBL_CHARGERATE,
                'Charge Rate Name', ChargeRateLink
            )

            // Validate Page Redirection
            cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Facility Charge Rate Details')
        }

        // Error Handling
        if (ChargeRateLink === undefined) {
            throw new Error("FacilityDetailForm.clickChargeRateLink Error!!.\
                            Please provide a value.")
        }
    }

    /*****************************************************
     * Method: selectChargeRateItem
     * Description: Selects Charge Rate Listing Item
     * Author: asadol
     *
     * @param {string} ChargeRateItem Charge Rate Item
     *****************************************************/
    selectChargeRateItem(ChargeRateItem) {

        // Navigate to tab
        cy.Click(elems_FacilityDetailFormDetailTab.CHARGERATE.TAB_CHARGERATE)

        // Ticks Checkbox beside item
        cy.SelectTableItem(
            elems_FacilityDetailFormDetailTab.CHARGERATE.TBL_CHARGERATE,
            'Charge Rate Name', ChargeRateItem
        )
    }

    /*****************************************************
     * Method: deleteChargeRate
     * Description: This function Deletes Charge Rate Listing Item
     * Author: asadol
     *****************************************************/
    deleteChargeRate() {

        // Click Add button
        cy.Click(elems_FacilityDetailFormDetailTab.CHARGERATE.BTN_DELETE)
    }

    /*****************************************************
     * Method: addChargeRate
     * Description: This function Adds Charge Rate Listing Item
     * Author: asadol
     *****************************************************/
    addChargeRate() {

        // Navigate to tab
        cy.Click(elems_FacilityDetailFormDetailTab.CHARGERATE.TAB_CHARGERATE)

        cy.wait(3000)
        // Click Add button
        cy.Click(elems_FacilityDetailFormDetailTab.CHARGERATE.BTN_ADD)
        cy.wait(8000)

        // Validate Page Redirection
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Facility Charge Rate Details')
    }


    // •••••••••••••••••• PRODUCT MAPPING TAB •••••••••••••••••• //

    /*****************************************************
     * Method: FacilityDetailFormProductMappingTab
     * Description: This function fillOut Product Mapping Tab Information
     * Author fshahzada
     * @param {string} ProductNumber
     * @param {string} ProductName
     * @param {string} SearchName

     *****************************************************/
    FacilityDetailFormProductMappingTab(ProductNumber, ProductName, SearchName) {

        cy.Click(elems_FacilityDetailFormDetailTab.PRODUCTMAPPING.TAB_PRODUCTMAPPING)

        // Click on Booking Fee Product
        cy.Click(elems_FacilityDetailFormDetailTab.PRODUCTMAPPING.BTN_BOOKINGFEEPRODUCT)


        cy.EnterText(elems_FacilityDetailFormDetailTab.PRODUCTMAPPING.TXT_PRODCUTNUMBER, ProductNumber)
        cy.EnterText(elems_FacilityDetailFormDetailTab.PRODUCTMAPPING.TXT_PRODCUTNAME, ProductName)
        cy.EnterText(elems_FacilityDetailFormDetailTab.PRODUCTMAPPING.TXT_SEARCHNAME, SearchName)

        cy.Click(elems_FacilityDetailFormDetailTab.PRODUCTMAPPING.BTN_SEARCHFILTERS)
        cy.wait(2000)

        cy.SelectTableItem(elems_FacilityDetailFormDetailTab.PRODUCTMAPPING.TBL_SELECTPRODUCTCODE, 'Product Name', ProductName)

        cy.Click(elems_FacilityDetailFormDetailTab.PRODUCTMAPPING.BTN_SELECT)
    }
    /*****************************************************
     * Method: FacilityDetailFormProductMappingTab
     * Description: This function fillOut Product Mapping Tab Information
     * Author fshahzada
     * @param {string} BookingFee
     * @param {string} ReservationFee

     *****************************************************/
    FacilityDetailFormProductMappingTabBookingfeeAndReservationFee(BookingFee, ReservationFee) {

        cy.Click(elems_FacilityDetailFormDetailTab.PRODUCTMAPPING.TAB_PRODUCTMAPPING)

        // Click on Booking Fee Product
        cy.Click(elems_FacilityDetailFormDetailTab.PRODUCTMAPPING.BTN_BOOKINGFEEPRODUCT)


        cy.EnterText(elems_FacilityDetailFormDetailTab.PRODUCTMAPPING.TXT_PRODCUTNAME, BookingFee)

        cy.Click("(//button[text()='Search Filters'])[2]")
        cy.wait(2000)

        cy.SelectTableItem(elems_FacilityDetailFormDetailTab.PRODUCTMAPPING.TBL_SELECTPRODUCTCODE, 'Product Name', BookingFee)

        cy.Click(elems_FacilityDetailFormDetailTab.PRODUCTMAPPING.BTN_SELECT)


        // Reservation Fee Product
        // Click on Booking Fee Product
        cy.Click(elems_FacilityDetailFormDetailTab.PRODUCTMAPPING.BTN_RESERVATIONFEEPRODUCT)


        cy.EnterText(elems_FacilityDetailFormDetailTab.PRODUCTMAPPING.TXT_PRODCUTNAME, ReservationFee)

        cy.Click("(//button[text()='Search Filters'])[2]")
        cy.wait(2000)

        cy.SelectTableItem(elems_FacilityDetailFormDetailTab.PRODUCTMAPPING.TBL_SELECTPRODUCTCODE, 'Product Name', ReservationFee)

        cy.Click(elems_FacilityDetailFormDetailTab.PRODUCTMAPPING.BTN_SELECT)
    }


    // •••••••••••••••••• ADDITIONAL INFORMATION TAB •••••••••••••••••• //

    /*****************************************************
     * Method: FacilityDetailFormAdditionalInfoTab
     * Description: This function fillOut Additional Information Tab Information
     * Author fshahzada
     * @param {string} Description
     * @param {string} SpecialRemark
     * @param {string} ContactPersonInfo
     * @param {string} EnbleIndWaiver
     * @param {string} IndemnityText
     * @param {string} TermAndConditions
     * @param {string} TermAndConditionsText

     *****************************************************/
    FacilityDetailFormAdditionalInfoTab(
        Description, SpecialRemark, ContactPersonInfo,
        EnbleIndWaiver, IndemnityText, TermAndConditions, TermAndConditionsText) {

        cy.Click(elems_FacilityDetailFormDetailTab.ADDITIONALINFORMATION.TAB_ADDITIONALINFO)

        cy.Click(elems_FacilityDetailFormDetailTab.ADDITIONALINFORMATION.TXTAERA_DESCRIPTION)
        cy.EnterText(elems_FacilityDetailFormDetailTab.ADDITIONALINFORMATION.TXTAERA_DESCRIPTION, Description)

        //cy.Click(elems_FacilityDetailFormDetailTab.ADDITIONALINFORMATION.TXTAERA_SPECAILREMARKS).clear()
        cy.EnterText(elems_FacilityDetailFormDetailTab.ADDITIONALINFORMATION.TXTAERA_SPECAILREMARKS, SpecialRemark)

        //cy.Click(elems_FacilityDetailFormDetailTab.ADDITIONALINFORMATION.TXTAERA_CONTACTPERSONINFORMATION).clear()
        cy.EnterText(elems_FacilityDetailFormDetailTab.ADDITIONALINFORMATION.TXTAERA_CONTACTPERSONINFORMATION, ContactPersonInfo)

        if (EnbleIndWaiver === 'check') {
            cy.TickCheckBox(elems_FacilityDetailFormDetailTab.ADDITIONALINFORMATION.CHK_ENABLEINDEITYWAIVER, 'check')
            //cy.Click(elems_FacilityDetailFormDetailTab.ADDITIONALINFORMATION.TXTAERA_INDEMNITYTEXT).clear()
            cy.EnterText(elems_FacilityDetailFormDetailTab.ADDITIONALINFORMATION.TXTAERA_INDEMNITYTEXT, IndemnityText)
        }

        if (TermAndConditions === 'check') {
            cy.TickCheckBox(elems_FacilityDetailFormDetailTab.ADDITIONALINFORMATION.CHK_ENABLETERMANDCONDITIONS, 'check')
            //cy.Click(elems_FacilityDetailFormDetailTab.ADDITIONALINFORMATION.TXTAREA_TERMANDCONDITIONTEXT).clear()
            cy.EnterText(elems_FacilityDetailFormDetailTab.ADDITIONALINFORMATION.TXTAREA_TERMANDCONDITIONTEXT, TermAndConditionsText)
        }
    }

    /*****************************************************
     * Method: ClickFacilityListingItem
     * Description: This function click on Facility Listing Item
     * Author fshahzada
     * @param {string} targetItem
     *****************************************************/
    //  ClickFacilityListingItem(targetItem){
    //     cy.ClickTableLink(elems_FacilityDetailFormDetailTab.TBL_FACILITYLISTING,
    //         'Facility Name', targetItem)
    ClickFacilityListingItem() {
        cy.Click('(//h2[text()="Facilities Listing"]/parent::div/following-sibling::div//table//a)[1]')
    }


    // •••••••••••••••••• ATTACHMENT TAB •••••••••••••••••• //

    /*****************************************************
     * Method: FacilityDetailFormAttachmentTab
     * Description: This function FillOut Attachment Tab
     * Author fshahzada
     * @param {string} UploadFile
     *****************************************************/
    FacilityDetailFormAttachmentTab(UploadFile) {


        cy.Click(elems_FacilityDetailFormDetailTab.ATTACHMENT.TAB_ATTACHMENT)

        cy.Click(elems_FacilityDetailFormDetailTab.ATTACHMENT.BTN_UPLOAD)
        cy.UploadFile('//input[@name="file"]', UploadFile)
        // cy.xpath(elems_FacilityDetailFormDetailTab.ATTACHMENT.BTN_SELECTFILES)
        //     .attachFile(Cypress.env('FIXTURE_UPLOAD_PATH') + UploadFile, { subjectType: 'drag-n-drop' });
        // cy.xpath(elems_FacilityDetailFormDetailTab.ATTACHMENT.BTN_SELECTFILES + '/ancestor::div[@class="k-widget k-upload"]//span[@class="k-file-name"]').should('have.text', UploadFile)
        cy.wait(2000)
        cy.Click(elems_FacilityDetailFormDetailTab.ATTACHMENT.BTN_CLOSE)

        // cy.Click(elems_FacilityDetailFormDetailTab.ATTACHMENT.BTN_ADDATTACHMENT)
        // cy.Click(elems_FacilityDetailFormDetailTab.ATTACHMENT.BTN_REMOVEATTACHMENT)
    }

    /*****************************************************
     * Method: VerifyUploadedFileInTable
     * Description: This function verify newly uploaded file in the table
     * Author fshahzada
     * @param {string} UploadFile
     *****************************************************/

    VerifyUploadedFileInTable(UploadFile) {
        cy.VerifyTableEntry(
            elems_FacilityDetailFormDetailTab.ATTACHMENT.TBL_ATTACHMENTS,
            'File Name', UploadFile,

        )
    }

    /*****************************************************
     * Method: RemoveFile
     * Description: This function Remove newly uploaded file in the table
     * Author fshahzada
     * @param {string} UploadFile
     *****************************************************/
    RemoveFile(UploadFile) {
        cy.SelectTableItem(
            elems_FacilityDetailFormDetailTab.ATTACHMENT.TBL_ATTACHMENTS,
            'File Name', UploadFile
        )

        cy.Click(elems_FacilityDetailFormDetailTab.ATTACHMENT.BTN_REMOVEATTACHMENT)

    }

    // •••••••••••••••••• FACILITY DETAIL FORM •••••••••••••••••• //

    /*****************************************************
     * Method: Cancel
     * Description: This function Click on Cancel Button
     * Author fshahzada

     *****************************************************/
    Cancel() {

        cy.Click(elems_FacilityDetailFormDetailTab.BTN_CANCEL)

    }
    /*****************************************************
     * Method: Save
     * Description: This function Click on Save Button
     * Author fshahzada

     *****************************************************/
    Save() {

        cy.Click(elems_FacilityDetailFormDetailTab.BTN_SAVE)

    }

    /*****************************************************
     * Method: SaveAsDraft
     * Description: This function Click on Save As Draft Button
     * Author fshahzada

     *****************************************************/
    SaveAsDraft() {

        cy.Click(elems_FacilityDetailFormDetailTab.BTN_SAVEASDRAFT)

    }

    /*****************************************************
     * Method: Save
     * Description: This function Click on Save Button
     * Author fshahzada

     *****************************************************/
    SubmitForApproval() {

        cy.Click(elems_FacilityDetailFormDetailTab.BTN_SUBMITFORAPPROVAL)
    }
    /*****************************************************
     * Method:deleteTableItem
     * Description: This function Click on delete item from the table
     * Author fshahzada

     *****************************************************/
    deleteTableItem() {
        cy.SelectTableItem(
            elems_FacilityDetailFormDetailTab.CHARGERATE.TBL_CHARGERATE,
            'Charge Rate Name', ChargeRateItem
        )
    }

    /*****************************************************
     * Method: VerifyNotificationMsg
     * Description: This function verify Notification Message
     * @param {string} Msg
     *****************************************************/
    VerifyNotificationMsg(Msg) {

        cy.ValidateElementText(elems_Picker.MSG_NOTIFICATION, Msg)
        cy.wait(2000)
    }
    /*****************************************************
     * Method: CreatNew
     * Description: This function verify Notification Message
     *****************************************************/
    CreatNew() {

        cy.Click(elems_FacilityListing.BTN_CREATENEW)
        cy.wait(2000)
    }

    /*****************************************************
     * Method: FiltersFacilitieListingForm
     * Description: This function filter items in facility listing form
     * Author fshahzada
     * @param {string} FacilityName
     * @param {string} Status
     * @param {string} RecordStatus
     *****************************************************/

    FiltersFacilitieListingForm(FacilityName, Status, RecordStatus) {

        if (FacilityName !== undefined) {

            cy.EnterText(elems_FacilityListing.TXT_FACILITYNAME, FacilityName)
        }
        if (Status !== undefined) {

            cy.SelectDropDownItem(elems_FacilityListing.DRP_STATUS, Status)

        }
        if (RecordStatus !== undefined) {
            cy.wait(5000)

            cy.SelectDropDownItem(elems_FacilityListing.DRP_RECORDSTATUS, RecordStatus)
        }

        cy.wait(1000)
        cy.Click(elems_FacilityListing.BTN_SEARCHFILTERS)
        cy.wait(5000)

    }
    /*****************************************************
  * Method: FillOutFacilityChargeRateDetail
  * Description: This function fillout facility charge rate form
  * Author: fshahzada
  * @param {string} ChargeRateName
  * @param {string} StartDate
  * @param {string} Location
  * @param {string} EndDate
  *****************************************************/
    FillOutFacilityChargeRateDetail(ChargeRateName, StartDate, Location, EndDate) {

        // Enter Charge rate name
        cy.EnterText(elems_FacilityDetailFormDetailTab.CHARGERATE.TXT_CHARGERATENAME, ChargeRateName)
        cy.EnterDate(elems_FacilityDetailFormDetailTab.CHARGERATE.DATE_STARTDATE, StartDate)
        // cy.EnterText(elems_FacilityDetailFormDetailTab.CHARGERATE.PCK_LOCATION, )

        // cy.Click(elems_FacilityDetailFormDetailTab.CHARGERATE.PCK_LOCATION)
        // cy.EnterText(elems_FacilityDetailFormDetailTab.DETAILSTAB.TXT_LOCATIONPOPUP, Location)
        // cy.SelectTableItem(elems_Picker.TBL_PICKERITEMS, 'Location Name', Location)
        // cy.Click(elems_Picker.BTN_SELECT)

        cy.EnterDate(elems_FacilityDetailFormDetailTab.CHARGERATE.DATE_ENDDATE, EndDate)
    }
    /*****************************************************
 * Method: FilloutChargeTypeList
 * Description: This function Fillout Charge Type List
 * @param {string} ChargeTypeName
 * @param {string} Transaction
 * @param {string} Calculation
 * @param {string} Amount
 * Author fshahzada
 *****************************************************/
    FilloutChargeTypeList(ChargeTypeName, Transaction, Calculation, Amount) {
        cy.Click(elems_FacilityDetailFormDetailTab.CHARGERATE.BTN_ADDCHARGETYPE)
        cy.EnterText(elems_FacilityDetailFormDetailTab.CHARGERATE.TXT_CHARGENAME, ChargeTypeName)
        cy.SelectDropDownItem(elems_FacilityDetailFormDetailTab.CHARGERATE.DRP_TRANSACTIONTYPE, Transaction)
        cy.SelectDropDownItem(elems_FacilityDetailFormDetailTab.CHARGERATE.DRP_CALCULATIONTYPE, Calculation)
        cy.SelectDropDownItem(elems_FacilityDetailFormDetailTab.CHARGERATE.DRP_AMOUNTTYPE, Amount)
        cy.wait(2000)
    }

    /*****************************************************
    * Method: AddCustomerCategory
    * Description: This function Add Customer Category
    * @param {string} CategoryName
    * Author fshahzada
    *****************************************************/
    AddCustomerCategory(CategoryName) {
        cy.SelectPickerDifferentItemsSeachBTN(elems_FacilityDetailFormDetailTab.CHARGERATE.BTN_ADDCUSTOMERCATEGORY,
            elems_FacilityDetailFormDetailTab.CHARGERATE.TXT_CUSTOMERCATEGORYNAME, CategoryName,
            elems_FacilityDetailFormDetailTab.CHARGERATE.BTN_FILTERCATEGORY)
        cy.wait(2000)
        cy.EnterText(elems_FacilityDetailFormDetailTab.CHARGERATE.TXT_NONPEAK, '2')
        cy.EnterText(elems_FacilityDetailFormDetailTab.CHARGERATE.TXT_PEAK, '3')
        cy.EnterText(elems_FacilityDetailFormDetailTab.CHARGERATE.TXT_SUPERPEAK, '4')
        cy.EnterText(elems_FacilityDetailFormDetailTab.CHARGERATE.TXT_SUPERHOLIDAY, '5')
    }


    /*****************************************************
 * Method: AssociatedResources
 * Description: This function add associated resources
 *****************************************************/
    AssociatedResources() {
        cy.TickCheckBox(elems_FacilityDetailFormDetailTab.ASSOCIATEDRESOURCES.CHK_HASRESOURCES, 'check')
    }

    /*****************************************************
     * Method: AddResource
     * Description: This function add resource
     * @param {string} ResourceName
     * @param {string} UploadFileName
     *****************************************************/
    AddResource(ResourceName, UploadFileName, ChargeName, TransactionType, CalculationType, AmountType, CustomerCategory, ProductNo) {
        cy.Click(elems_FacilityDetailFormDetailTab.ASSOCIATEDRESOURCES.BTN_CREATERESOURCE)
        cy.wait(1000)
        cy.EnterText(elems_FacilityDetailFormDetailTab.ASSOCIATEDRESOURCES.TXT_RESOURCENAME, ResourceName)
        cy.UploadFile('//input[@name="file"]', UploadFileName)
        cy.TickCheckBox(elems_FacilityDetailFormDetailTab.ASSOCIATEDRESOURCES.CHK_ADDITIONALBOOKABLE, 'check')
        cy.EnterText(elems_FacilityDetailFormDetailTab.ASSOCIATEDRESOURCES.TXT_MAXQUANTITYAVAILABLE, '1')
        cy.Click(elems_FacilityDetailFormDetailTab.ASSOCIATEDRESOURCES.BTN_ADDCHARGETYPE)
        cy.EnterText(elems_FacilityDetailFormDetailTab.ASSOCIATEDRESOURCES.TXT_CHARGENAME, ChargeName)
        cy.SelectDropDownItem(elems_FacilityDetailFormDetailTab.ASSOCIATEDRESOURCES.DRP_TRANSACTIONTYPE, TransactionType)
        cy.SelectDropDownItem(elems_FacilityDetailFormDetailTab.ASSOCIATEDRESOURCES.DRP_CALCULATIONTYPE, CalculationType)
        cy.SelectDropDownItem(elems_FacilityDetailFormDetailTab.ASSOCIATEDRESOURCES.DRP_AMOUNTTYPE, AmountType)

        cy.Click(elems_FacilityDetailFormDetailTab.ASSOCIATEDRESOURCES.BTN_ADDCUSTOMERCATEGORY)
        cy.wait(5000)
        cy.EnterText(elems_FacilityDetailFormDetailTab.ASSOCIATEDRESOURCES.TXT_CUSTOMERCATEGNAME, CustomerCategory)
        cy.Click('//button[@form="formCustomerCategoryDialog"]')
        cy.Click('(//div[text()="Select Customer Category"]/parent::div/parent::div//table//input)[1]')
        cy.Click(elems_Picker.BTN_SELECT)
        cy.EnterText('(//label[text()="Customer Category"]/parent::div/parent::div/following-sibling::div//table//input)[2]', '2')

        cy.Click(elems_FacilityDetailFormDetailTab.ASSOCIATEDRESOURCES.PCK_PRODUCTITEMID)
        cy.wait(2000)
        cy.EnterText(elems_FacilityDetailFormDetailTab.ASSOCIATEDRESOURCES.TXT_PRODUCTNO, ProductNo)
        cy.Click('//div[@class="k-window-content k-dialog-content"]//button[text()="Search Filters"]')
        cy.Click('(//div[text()="Select Product Code"]/parent::div/parent::div//table//input)[1]')
        cy.Click(elems_Picker.BTN_SELECT)

        cy.Click('//button[@form="formCreateEditResource"]')
        cy.wait(2000)
    }

    /*****************************************************
     * Method: AddExistingResource
     * Description: This function Add Existing Resource
     * @param {string} ResourceName
     *****************************************************/
    AddExistingResource(ResourceName) {
        cy.Click(elems_FacilityDetailFormDetailTab.ASSOCIATEDRESOURCES.BTN_ADDEXISTINGRESOURCE)
        cy.wait(2000)
        cy.SelectTableItem(elems_FacilityDetailFormDetailTab.ASSOCIATEDRESOURCES.TBL_RESOURCE, "Resource", ResourceName)
        cy.Click(elems_FacilityDetailFormDetailTab.ASSOCIATEDRESOURCES.BTN_SELECT)
        cy.wait(2000)
        cy.EnterText(elems_FacilityDetailFormDetailTab.ASSOCIATEDRESOURCES.TXT_AVAILABLENUMBER, '2')

    }
    /*****************************************************
     * Method: VerifyStatus
     * Description: This function verify table item status
     * @param {string} Status
     *****************************************************/
    VerifyStatus(FacilityName, Status) {
        cy.visit('/facilities/facilityListing');

        cy.EnterText(elems_FacilityListing.TXT_FACILITYNAME, FacilityName)



        cy.Click(elems_FacilityListing.BTN_SEARCHFILTERS)
        cy.wait(2000)
        cy.VerifyTableEntry(elems_FacilityListing.TBL_FACILITYLISTING, 'Status', Status)

    }


    /*****************************************************
       * Method: ApprovalWorkFlow
       * Description: This function visit pending task list and approve the item
       * @param {string} TaskID
       * @param {string} WorkFlowName
       * @param {string} Approval
       * @param {string} Remark
       *****************************************************/
    ApprovalWorkFlow(TaskID, WorkFlowName, Approval, Remark) {

        cy.visit('/admin/pendingTaskList')

        cy.EnterText(elems_PendingTaskListing.TXT_TASKID, TaskID)
        cy.EnterText(elems_PendingTaskListing.TXT_WORKFLOWNAME, WorkFlowName)

        //Click on Filter button
        cy.Click(elems_PendingTaskListing.BTN_SEARCH)
        cy.wait(2000)

        //Click on Table item
        cy.xpath('(//h2[text()="Pending Task Listing"]/ancestor::div//table//tr["Task ID"]//td//a)[1]').click({ force: true })
        // cy.ClickTableLinkItem(elems_PendingTaskListing.TBL_PENDINGTASKLISTING, "Task ID", TaskID)

        //Approval Outcome
        cy.SelectDropDownItem(elems_PendingTaskDetail.DRP_APPROVALOUTCOME, Approval)

        //Remark
        cy.EnterText(elems_PendingTaskDetail.TXTAREA_REMARK, Remark)

        // Click on Save button
        cy.Click('//button[@form="formPendingTaskDetail"]')
        cy.wait(2000)


    }

    /*****************************************************
     * Method: FacilityApprovalWorkFlow
     * Description: This function perform the Approval Workflow
     * @param {string} TaskID
     * @param {string} WorkflowName
     * @param {string} ApprovalOutcome
     * @param {string} Remarks
     *****************************************************/
    FacilityApprovalWorkFlow(TaskID, WorkflowName, ApprovalOutcome, Remarks) {

        //cy.visit('/facilities/facilityListing');
        cy.wait(5000)
        cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, 'Pending Task Listing')
        cy.EnterText(elems_PendingTaskListing.TXT_TASKID, TaskID)
        cy.EnterText(elems_PendingTaskListing.TXT_WORKFLOWNAME, WorkflowName)
        cy.Click(elems_PendingTaskListing.BTN_SEARCH)
        cy.wait(5000)
        cy.Click('(//h2[text()="Pending Task Listing"]/ancestor::div//table//a)[1]')
        cy.wait(5000)

        cy.VerifyElementText(elems_PageHeader.LBL_PAGETITLE, 'Pending Task Detail')
        cy.SelectDropDownItem(elems_PendingTaskDetail.DRP_APPROVALOUTCOME, ApprovalOutcome)
        cy.EnterText(elems_PendingTaskDetail.TXTAREA_REMARK, Remarks)
        cy.Click(elems_PendingTaskDetail.BTN_SUBMIT)
        cy.wait(5000)


    }

}

export default new FacilityDetailForm