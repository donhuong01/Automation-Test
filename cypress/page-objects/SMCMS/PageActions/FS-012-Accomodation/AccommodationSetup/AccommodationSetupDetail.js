import elems_AccommodationSetupDetail from "../../../Elements/FS-012-Accomodation/AccommodationSetupDetail"

class AccommodationSetupDetail {

    /*****************************************************
     * Method: SubmitForApproval
     * Description: This function Click on Submit for approval button
     *****************************************************/
    SubmitForApproval() {
        cy.Click(elems_AccommodationSetupDetail.BTN_SUBMITFORAPPROVAL)
        cy.wait(3000)
    }
    /*****************************************************
     * Method: SaveAsDraft
     * Description: This function Click on save as draft button
     *****************************************************/
    SaveAsDraft() {
        cy.Click(elems_AccommodationSetupDetail.BTN_SAVEASDRAFT)
        cy.wait(3000)
    }
    /*****************************************************
     * Method: Save
     * Description: This function Click on save button
     *****************************************************/
    Save() {
        cy.Click(elems_AccommodationSetupDetail.BTN_SAVE)
        cy.wait(5000)
    }




    //// Detail tab 
    /*****************************************************
     * Method: AccommodationInformation
     * Description: This function Fill out Accommodation information
     * @param {string} AccommodationName
     * @param {string} ActivationDate
     * @param {string} AccommodationType
     * @param {string} MaximumOccupancy
     *****************************************************/
    AccommodationInformation(AccommodationName, ActivationDate, AccommodationType, MaximumOccupancy) {
        cy.EnterText(elems_AccommodationSetupDetail.DetailTab.TXT_ACCOMMODATIONNAME, AccommodationName)
        cy.EnterDate(elems_AccommodationSetupDetail.DetailTab.DATE_ACTIVATIONDATE, ActivationDate)
        cy.SelectPickerDifferentItemsWait(elems_AccommodationSetupDetail.DetailTab.PCK_ACCOMMODATIONTYPE, 4000,
            elems_AccommodationSetupDetail.DetailTab.TXT_ACCOMMODATIONTYPE, AccommodationType,
            '(//button[text()="Search Filters"])[2]')
        cy.EnterText(elems_AccommodationSetupDetail.DetailTab.TXT_MAXIMUMACCUPANCY, MaximumOccupancy)
    }
    /*****************************************************
     * Method: OperatingPeriod
     * Description: This function Fill out Operating Period
     * @param {string} CheckInTime
     * @param {string} CheckOutTime
     *****************************************************/
    OperatingPeriod() {
        cy.EnterTime(elems_AccommodationSetupDetail.DetailTab.TIME_CHECKINTIME, '01:00')
        cy.EnterTime(elems_AccommodationSetupDetail.DetailTab.TIME_CHECKOUTTIME, '12:00')
    }



    /// Product Mapping Tab
    /*****************************************************
     * Method: ClickProductMapping
     * Description: This function Click on Product Mapping
     *****************************************************/
    ClickProductMapping() {
        cy.Click(elems_AccommodationSetupDetail.ProductMappingTab.TAB_PRODUCTMAPPING)
        cy.wait(1000)
    }
    /*****************************************************
     * Method: BookingFeeProduct
     * Description: This function Fill out Product Mapping 
     *****************************************************/
    BookingFeeProduct(ProductName) {
        cy.SelectPickerDifferentItemsWait(elems_AccommodationSetupDetail.ProductMappingTab.PCK_BOOKINGFEEPRODUCT, 5000,
            elems_AccommodationSetupDetail.ProductMappingTab.TXT_PRODUCTNAME, ProductName,
            '(//button[text()="Search Filters"])[2]')
    }

    /*****************************************************
     * Method: ReservationFeeProduct
     * Description: This function Fill out Reservation Fee Product 
     *****************************************************/
    ReservationFeeProduct(ReservationFeeProduct) {
        cy.SelectPickerDifferentItemsWait(elems_AccommodationSetupDetail.ProductMappingTab.PCK_RESERVATIONFEEPRODUCT, 5000,
            elems_AccommodationSetupDetail.ProductMappingTab.TXT_PRODUCTNAME, ReservationFeeProduct,
            '(//button[text()="Search Filters"])[2]')
    }



    //Charge Rate Tab
    /*****************************************************
     * Method: ClickChargeRateTab
     * Description: This function Click on Charge Rate Tab
     *****************************************************/
    ClickChargeRateTab() {
        cy.Click(elems_AccommodationSetupDetail.ChargeRateTab.TAB_CHARGERATE)
        cy.wait(1000)
    }
    /*****************************************************
     * Method: ClickAddButton
     * Description: This function Click on Add button
     *****************************************************/
    ClickAddButton() {
        cy.Click(elems_AccommodationSetupDetail.ChargeRateTab.BTN_ADD)
        cy.wait(4000)
    }
    /*****************************************************
     * Method: ChargeRateInformation
     * Description: This function Fill Out Charge Rate Information
     * @param {string} ChargeRateName
     * @param {string} StartDate
     * @param {string} location
     * @param {string} EndDate
     *****************************************************/
    ChargeRateInformation(ChargeRateName, /*StartDate,*/ location, /*EndDate*/) {
        cy.EnterText(elems_AccommodationSetupDetail.ChargeRateTab.TXT_CHARGERATE, ChargeRateName)
        //cy.EnterDate(elems_AccommodationSetupDetail.ChargeRateTab.DATE_STARTDATE, StartDate)
        cy.SelectPickerItem(elems_AccommodationSetupDetail.ChargeRateTab.PCK_LOCATION, location)
        //cy.EnterDate(elems_AccommodationSetupDetail.ChargeRateTab.DATE_ENDDATE, EndDate)
    }
    
    /*****************************************************
     * Method: ChargeTypeList
     * Description: This function Fill Out Charge Type List
     * @param {string} ChargeName
     * @param {string} TransactionType
     * @param {string} CalculationType
     * @param {string} AmountType
     *****************************************************/
    ChargeTypeList(ChargeName, TransactionType, CalculationType, AmountType) {
        cy.Click(elems_AccommodationSetupDetail.ChargeRateTab.BTN_ADDCHANGETYPE)
        cy.EnterText(elems_AccommodationSetupDetail.ChargeRateTab.TXT_CHARGERATENAME, ChargeName)
        cy.SelectDropDownItem(elems_AccommodationSetupDetail.ChargeRateTab.DRP_TRANSACTIONTYPE, TransactionType)
        cy.SelectDropDownItem(elems_AccommodationSetupDetail.ChargeRateTab.DRP_CALCULATIONTYPE, CalculationType)
        cy.SelectDropDownItem(elems_AccommodationSetupDetail.ChargeRateTab.DRP_AMOUNTTYPE, AmountType)
    }

    /*****************************************************
     * Method: CustomerCategory
     * Description: This function Fill Out Customer Category
     * @param {string} CustomerCategory
     *****************************************************/
    CustomerCategory(CustomerCategory) {
        cy.SelectPickerDifferentItemsWait(elems_AccommodationSetupDetail.ChargeRateTab.BTN_ADDCUSTOMERCATEGORY, 5000,
            elems_AccommodationSetupDetail.ChargeRateTab.TXT_CUSTOMERCATEGORYNAME, CustomerCategory,
            '//button[@form="formCustomerCategoryDialog"]')
        cy.EnterText(elems_AccommodationSetupDetail.ChargeRateTab.TXT_NONPEAK, 5)
        cy.EnterText(elems_AccommodationSetupDetail.ChargeRateTab.TXT_PEAK, 5)
        cy.EnterText(elems_AccommodationSetupDetail.ChargeRateTab.TXT_SUPERPEAK, 5)
        cy.EnterText(elems_AccommodationSetupDetail.ChargeRateTab.TXT_SUPERHOLIDAY, 5)
    }



    // Additional Information Tab

    /*****************************************************
     * Method: ClickAdditionalInformationTab
     * Description: This function Click on Additional Information Tab
     *****************************************************/
    ClickAdditionalInformationTab() {
        cy.Click(elems_AccommodationSetupDetail.AdditionalInformationTab.TAB_ADDITIONALINFO)
        cy.wait(2000)
    }
    /*****************************************************
     * Method: FilloutOtherInformation
     * Description: This function Fillout Other Information
     * @param {string} Description
     * @param {string} SpecialRemark
     * @param {string} ContactPersonInfo
     * @param {string} IndemnityText
     * @param {string} TermConditionText
     *****************************************************/
    FilloutOtherInformation(Description, SpecialRemark, ContactPersonInfo, IndemnityText, TermConditionText) {
        cy.EnterText(elems_AccommodationSetupDetail.AdditionalInformationTab.TXT_DESCRIPTION, Description)
        cy.EnterText(elems_AccommodationSetupDetail.AdditionalInformationTab.TXT_SPECIALREMARKS, SpecialRemark)
        cy.EnterText(elems_AccommodationSetupDetail.AdditionalInformationTab.TXT_CONTACTPERSONINFORMATION, ContactPersonInfo)
        cy.TickCheckBox(elems_AccommodationSetupDetail.AdditionalInformationTab.CHK_ENABLEINDEMNITYWAIVER, 'CHECK')
        cy.EnterText(elems_AccommodationSetupDetail.AdditionalInformationTab.TXT_INDEMNITYTEXT, IndemnityText)
        cy.EnterText(elems_AccommodationSetupDetail.AdditionalInformationTab.CHK_ENABLETERMCONDITION, 'CHECK')
        cy.EnterText(elems_AccommodationSetupDetail.AdditionalInformationTab.TXT_TERMCONDITIONTEXT, TermConditionText)
    }

}
export default new AccommodationSetupDetail