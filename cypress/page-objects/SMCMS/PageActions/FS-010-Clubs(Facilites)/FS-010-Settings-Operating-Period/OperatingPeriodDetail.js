import elems_FacilityOperatingPeriodDetail from '../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/FacilityOperatingPeriodDetail'
import elems_PageHeader from '../../../Elements/Common/PageHeader'
import elems_Alerts from '../../../Elements/Common/Alerts.js'

class OperatingPeriodDetail {

    /*****************************************************
     * Method: filloutOperatingPeriodDetail
     * Description: Fills-out Operating Period Detail Form
     *
     * @param {string} operatingPeriodName Operating Period Name
    *****************************************************/
     filloutOperatingPeriodDetail(operatingPeriodName){

        // Enter Operating Period Name
        if(operatingPeriodName !== undefined){
            // cy.xpath(elems_FacilityOperatingPeriodDetail.TXT_OPERATINGPERIODNAME).clear()
            cy.EnterText(elems_FacilityOperatingPeriodDetail.TXT_OPERATINGPERIODNAME, operatingPeriodName)
        }
        
        // Error Handling
        if( operatingPeriodName === undefined 
        ){
            throw new Error("OperatingPeriodDetail.filloutOperatingPeriodDetail Error!!.\
                            Please provide an argument.")
        }
    }

    /*****************************************************
     * Method: verifyOperatingPeriodDetail
     * Description: Verfies Operating Period Detail Table
     *
     * @param {string} operatingPeriodDetailTable Operating Period Detail Table Array
     *****************************************************/
     verifyOperatingPeriodDetail(operatingPeriodDetailTable){
        operatingPeriodDetailTable.forEach( data => {
            cy.VerifyTableEntryPayment(
                elems_FacilityOperatingPeriodDetail.TBL_SETTINGOPERATINGPERIODDETAILS,
                'Operating Hours', data.operatingHours,
                'Type of Operating Day', data.typeOfOperatingDay
            )

            cy.VerifyTableEntryPayment(
                elems_FacilityOperatingPeriodDetail.TBL_SETTINGOPERATINGPERIODDETAILS,
                'Operating Hours', data.operatingHours,
                'Type of Operating Day', data.typeOfOperatingDay
            )
        })
    }

    /*****************************************************
     * Method: addOperatingHourRow1
     * Description: Adds an Operating Hour item in the Table's 1st Row
     *
     * @param {string} typeOfOperatingDay Type of Operating Day
     * @param {string} row Row Reference
     * @param {string} startTime Start Time
     * @param {string} endTime End Time
     * @param {string} typeOfPeakPeriod Type Of Peak Period
     * @param {string} isClosedForBooking Is Closed For Booking 
     * @param {string} ignoreRenderSlotLength Ignore Render Slot Length
    *****************************************************/
     addOperatingHourRow1({typeOfOperatingDay, startTime, endTime, typeOfPeakPeriod, isClosedForBooking, ignoreRenderSlotLength}){

        // Click Operating Period Name
        if(typeOfOperatingDay !== undefined){
            cy.ClickTablePlusButton(typeOfOperatingDay)  
            
            // Add Operating Hour Row
            cy.ValidateElementText(elems_Alerts.LBL_POPUPTITLE, typeOfOperatingDay)
            cy.Click(elems_FacilityOperatingPeriodDetail.OperatingPeriodModalDetail.BTN_ADDOPERATINGHOUR)
            // cy.wait(2000)
            // Select Start Time
            if(startTime !== undefined){
                cy.SelectFirstDropdownInPopupTable(elems_FacilityOperatingPeriodDetail.OperatingPeriodModalDetail.TBL_TABLEMODAL + '//tbody', 2, startTime)
            }

            // Select End Time
            if(endTime !== undefined){
                cy.SelectFirstDropdownInPopupTable(elems_FacilityOperatingPeriodDetail.OperatingPeriodModalDetail.TBL_TABLEMODAL + '//tbody', 3, endTime)
            }

            // Select Type of Peak Period
            if(typeOfPeakPeriod !== undefined){
                cy.SelectFirstDropdownInPopupTable(elems_FacilityOperatingPeriodDetail.OperatingPeriodModalDetail.TBL_TABLEMODAL , 4, typeOfPeakPeriod)
            }
            

            // Is Closed for Booking Checkbox
            if(isClosedForBooking !== undefined){
                cy.CheckboxInTable(
                    elems_FacilityOperatingPeriodDetail.OperatingPeriodModalDetail.TBL_TABLEMODAL,
                    1, 5, isClosedForBooking
                )
            }

            // Ignore Render Slot Length Checkbox
            if(ignoreRenderSlotLength !== undefined){
                cy.CheckboxInTable(
                    elems_FacilityOperatingPeriodDetail.OperatingPeriodModalDetail.TBL_TABLEMODAL,
                    1, 6, ignoreRenderSlotLength
                )
            }

            if( startTime === undefined
                && endTime === undefined
                && typeOfPeakPeriod === undefined
                && isClosedForBooking === undefined
                && ignoreRenderSlotLength === undefined
            ){
                    throw new Error("OperatingPeriodDetail.addOperatingHourRow1 Error!!.\
                                    Please provide at least one argument.")
            }
        }
        
        // Error Handling
        if( typeOfOperatingDay === undefined 
        ){
            throw new Error("OperatingPeriodDetail.addOperatingHourRow1 Error!!.\
                            Please provide an argument.")
        }
    }


    /*****************************************************
     * Method: addOperatingHours
     * Description: Adds an Operating Hour item in the Table after the 1st Row
     *
     * @param {string} typeOfOperatingDay Type of Operating Day
     * @param {string} operatingHours Operating Hours Row Data Array
    *****************************************************/
     addOperatingHours({typeOfOperatingDay, operatingHours}){ 
        
        // Click Operating Period Name 
        if(typeOfOperatingDay !== undefined){
            cy.ClickTablePlusButton(typeOfOperatingDay)  

            // Loop for dataset
            operatingHours.forEach( data => {

                // Add Operating Hour Row
                // Add Operating Hour Row
                cy.ValidateElementText(elems_Alerts.LBL_POPUPTITLE, typeOfOperatingDay)
                cy.Click(elems_FacilityOperatingPeriodDetail.OperatingPeriodModalDetail.BTN_ADDOPERATINGHOUR)

                // Select Start Time
                if(data.startTime !== undefined){
                    cy.SelectSingleDropdownInTable(elems_FacilityOperatingPeriodDetail.OperatingPeriodModalDetail.TBL_TABLEMODAL, data.row, 2, data.startTime)
                }

                // Select End Time
                if(data.endTime !== undefined){
                    cy.SelectSingleDropdownInTable(elems_FacilityOperatingPeriodDetail.OperatingPeriodModalDetail.TBL_TABLEMODAL, data.row, 3, data.endTime)
                }

                // Select Type of Peak Period
                if(data.typeOfPeakPeriod !== undefined){
                    cy.SelectSingleDropdownInTable(elems_FacilityOperatingPeriodDetail.OperatingPeriodModalDetail.TBL_TABLEMODAL, data.row, 4, data.typeOfPeakPeriod)
                }
                

                // Is Closed for Booking Checkbox
                if(data.isClosedForBooking !== undefined){
                    cy.CheckboxInTable(
                        elems_FacilityOperatingPeriodDetail.OperatingPeriodModalDetail.TBL_TABLEMODAL,data.row, 5, data.isClosedForBooking
                    )
                }

                // Ignore Render Slot Length Checkbox
                if(data.ignoreRenderSlotLength !== undefined){
                    cy.CheckboxInTable(
                        elems_FacilityOperatingPeriodDetail.OperatingPeriodModalDetail.TBL_TABLEMODAL,
                        data.row, 6, data.ignoreRenderSlotLength
                    )
                }

                if( data.row === undefined
                    && data.startTime === undefined
                    && data.endTime === undefined
                    && data.typeOfPeakPeriod === undefined
                    && data.isClosedForBooking === undefined
                    && data.ignoreRenderSlotLength === undefined
                ){
                        throw new Error("OperatingPeriodDetail.addOperatingHours Error!!.\
                                        Please provide at least one argument.")
                }
            })
    
        // Error Handling
        if( typeOfOperatingDay === undefined 
            ){
                throw new Error("OperatingPeriodDetail.verifyOperatingHour Error!!.\
                                Please provide an argument.")
            }   
        }
    }

    /*****************************************************
     * Method: saveOperatingHour
     * Description: Save Operating Hour Popup Changes
    *****************************************************/
     saveOperatingHour(){
        cy.Click(elems_FacilityOperatingPeriodDetail.OperatingPeriodModalDetail.BTN_SAVE)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Settings - Operating Period Details')
    }

    /*****************************************************
     * Method: cancelOperatingHour
     * Description: Cancel Operating Hour Popup Changes
    *****************************************************/
     cancelOperatingHour(){
        cy.Click(elems_FacilityOperatingPeriodDetail.OperatingPeriodModalDetail.BTN_CANCEL)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Settings - Operating Period Details')
    }

    /*****************************************************
     * Method: verifyOperatingHour
     * Description: Verfies Operating Hour Popup Table
     *
     * @param {string} typeOfOperatingDay Type of Operating Day Popup
     * @param {string} operatingHoursTable Operating Hour Popup Table Array
     *****************************************************/
     verifyOperatingHour({typeOfOperatingDay, operatingHoursTable}){
        
        // Click Operating Period Name
        if(typeOfOperatingDay !== undefined){
            cy.ClickTablePlusButton(typeOfOperatingDay)  
            
            // Loop for dataset
            operatingHoursTable.forEach( data => {

                // Verify Start Time Value
                cy.VerifyTableEntryShoppingCart(
                    elems_FacilityOperatingPeriodDetail.OperatingPeriodModalDetail.TBL_TABLEMODAL,
                    'Start Time', data.startTime,
                    'End Time', data.endTime
                )

                // Verify End Time Value
                cy.VerifyTableEntryShoppingCart(
                    elems_FacilityOperatingPeriodDetail.OperatingPeriodModalDetail.TBL_TABLEMODAL,
                    'End Time', data.endTime,
                    'Start Time', data.startTime
                )
                
                // Verify Type of Peak Period Value
                cy.VerifyTableEntryShoppingCart(
                    elems_FacilityOperatingPeriodDetail.OperatingPeriodModalDetail.TBL_TABLEMODAL,
                    'Type of Peak Period', data.typeOfPeakPeriod,
                    'Start Time', data.startTime
                )
            })
        }

        // Error Handling
        if( typeOfOperatingDay === undefined 
            ){
                throw new Error("OperatingPeriodDetail.verifyOperatingHour Error!!.\
                                Please provide an argument.")
            }
    }

    /*****************************************************
     * Method: removeOperatingHour
     * Description: Removes an Operating Hour item in the Table
     *
     * @param {string} typeOfOperatingDay Type of Operating Day item
     * @param {string} operatingHour Start Time of Item to be Removed
    *****************************************************/
     removeOperatingHour({typeOfOperatingDay, operatingHour}){
        
        // Click Operating Period Name
        if(typeOfOperatingDay !== undefined){
            cy.ClickTablePlusButton(typeOfOperatingDay)  

            // Remove Item from Listing
            if(operatingHour !== undefined){
                cy.DeleteTableItem(
                    elems_FacilityOperatingPeriodDetail.OperatingPeriodModalDetail.TBL_TABLEMODAL,
                    'Start Time', operatingHour
                )
            }

            // Error Handling
            if(operatingHour === undefined 
            ){
                throw new Error("OperatingPeriodDetail.removeOperatingHour Error!!.\
                                Please provide an argument.")
            }
        
        // Error Handling
        if( typeOfOperatingDay === undefined 
            ){
                throw new Error("OperatingPeriodDetail.verifyOperatingHour Error!!.\
                                Please provide an argument.")
            }
        }
    }

    /*****************************************************
     * Method: submitForApproval
     * Description: Submit Operating Period Detail Form
    *****************************************************/
     submitForApproval(){
        cy.Click(elems_FacilityOperatingPeriodDetail.BTN_SUBMITFORAPPROVAL)
        cy.wait(3000)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Settings - Operating Period Listing')
    }

    /*****************************************************
     * Method: saveAsDraft
     * Description: Save Operating Period Detail Form
    *****************************************************/
     saveAsDraft(){
        cy.Click(elems_FacilityOperatingPeriodDetail.BTN_SAVEASDRAFT)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Settings - Operating Period Listing')
    }

    /*****************************************************
     * Method: cancel
     * Description: Cancel Operating Period Detail Form
    *****************************************************/
     cancel(){
        cy.Click(elems_FacilityOperatingPeriodDetail.BTN_CANCEL)
        cy.wait(3000)
        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, 'Settings - Operating Period Listing')
    }
}

export default OperatingPeriodDetail