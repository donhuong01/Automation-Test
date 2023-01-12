/*****************************************************
 * Page Function: Sample Script to Test Operating Period Detail Form Page Actions
 *
 * @author: asadol
 *****************************************************/

// Import Pages
import OperatingPeriodDetail from '../../../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Settings-Operating-Period/OperatingPeriodDetail'
import FacilitySettingsOperatingPeriodListing from '../../../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Settings-Operating-Period/FacilitySettingsOperatingPeriodListing'
import data from '../../../../../fixtures/Data_Module/FS-010-Club-Facility/010-data'

const FacilityOperatingPeriod = () => {

describe('[TS03] Facility Setting Operating Period Settings', function () {

    // Page Definitions
    const OperPrdDtl = new OperatingPeriodDetail()
    const FacilitySettingsOperatingPeriodList = new FacilitySettingsOperatingPeriodListing

    const OperatingPeriodName = data.OperatingPeriodDetail.operatingPeriodName + Math.floor(Math.random() * 1000)
    const Status = data.OperatingPeriodDetail.Status
    const RecordStatus = data.OperatingPeriodDetail.RecordStatus

    it('[TC01] Fill Out Operating Period Detail Form and Submit Form for Approval', function () {

        // Navigate to form
        cy.visit('/facilities/operatingPeriodDetail') 
        cy.wait(5000) 
        // FacilitySettingsOperatingPeriodList.CreateNew()
        
        // Fill out Operating Period Name
        OperPrdDtl.filloutOperatingPeriodDetail(OperatingPeriodName)

        // Verify Operating Period Detail List
        OperPrdDtl.verifyOperatingPeriodDetail(data.OperatingPeriodDetail.operatingPeriodDetailTable)
        
        // Add Operating Hour for 1st Row of Listing
        // SAVE ITEM BEFORE ADDING MORE ROWS
        OperPrdDtl.addOperatingHourRow1({
            typeOfOperatingDay : data.OperatingPeriodDetail.addOperatingHours.typeOfOperatingDay,
            startTime : data.OperatingPeriodDetail.addOperatingHours.operatingHourRow1.startTime,
            endTime : data.OperatingPeriodDetail.addOperatingHours.operatingHourRow1.endTime,
            typeOfPeakPeriod : data.OperatingPeriodDetail.addOperatingHours.operatingHourRow1.typeOfPeakPeriod,
            isClosedForBooking : data.OperatingPeriodDetail.addOperatingHours.operatingHourRow1.isClosedForBooking,
            ignoreRenderSlotLength : data.OperatingPeriodDetail.addOperatingHours.operatingHourRow1.ignoreRenderSlotLength
        })

        // Save Operating Hours Popup Changes
        OperPrdDtl.saveOperatingHour()

        // Add Operating Hours for 2nd row onwards of Listing
        OperPrdDtl.addOperatingHours({
            typeOfOperatingDay : data.OperatingPeriodDetail.addOperatingHours.typeOfOperatingDay,
            operatingHours : data.OperatingPeriodDetail.addOperatingHours.operatingHours
        })

        // Save Operating Hours Popup Changes
        OperPrdDtl.saveOperatingHour()
        
        // Remove Operating Hour !! MODAL MUST BE OPEN BEFORE REMOVING ITEM !!
        OperPrdDtl.removeOperatingHour(data.OperatingPeriodDetail.removeOperatingHour.operatingHour)
        
        // Verify Operating Hours Popup Table
        OperPrdDtl.verifyOperatingHour({
            typeOfOperatingDay : data.OperatingPeriodDetail.operatingHours.typeOfOperatingDay,
            operatingHoursTable : data.OperatingPeriodDetail.operatingHours.operatingHoursTable
        })
        
        // Cancel Operating Hours Popup Changes
        // OperPrdDtl.cancelOperatingHour()

        // Save Operating Hours Popup Changes
        OperPrdDtl.saveOperatingHour()

        //Click Submit for Approval button
        OperPrdDtl.submitForApproval()
        
    })

    it('[TC02] Fill Out Operating Period Detail Form and cancel ', function () {

        // Navigate to form
        cy.visit('/facilities/operatingPeriodDetail') 
        cy.wait(5000) 
        // FacilitySettingsOperatingPeriodList.CreateNew()

        // Fill out Operating Period Name
        OperPrdDtl.filloutOperatingPeriodDetail(OperatingPeriodName)

        // Verify Operating Period Detail List
        OperPrdDtl.verifyOperatingPeriodDetail(data.OperatingPeriodDetail.operatingPeriodDetailTable)
        
        // Add Operating Hour for 1st Row of Listing
        // SAVE ITEM BEFORE ADDING MORE ROWS
        OperPrdDtl.addOperatingHourRow1({
            typeOfOperatingDay : data.OperatingPeriodDetail.addOperatingHours.typeOfOperatingDay,
            startTime : data.OperatingPeriodDetail.addOperatingHours.operatingHourRow1.startTime,
            endTime : data.OperatingPeriodDetail.addOperatingHours.operatingHourRow1.endTime,
            typeOfPeakPeriod : data.OperatingPeriodDetail.addOperatingHours.operatingHourRow1.typeOfPeakPeriod,
            isClosedForBooking : data.OperatingPeriodDetail.addOperatingHours.operatingHourRow1.isClosedForBooking,
            ignoreRenderSlotLength : data.OperatingPeriodDetail.addOperatingHours.operatingHourRow1.ignoreRenderSlotLength
        })

        // Save Operating Hours Popup Changes
        OperPrdDtl.saveOperatingHour()
        
        // Cancel Form
        OperPrdDtl.cancel()
        
    })


    it('[TC03] Verify the functionality of filters on listing form', function(){

       cy.visit('/facilities/operatingPeriodListing')
       cy.wait(5000) 
       
        FacilitySettingsOperatingPeriodList.VerifyPageTitle()
        
        FacilitySettingsOperatingPeriodList.FilloutFilters(OperatingPeriodName,Status,RecordStatus)
        
        FacilitySettingsOperatingPeriodList.VerifyTableLink(OperatingPeriodName,Status)
    })

    it('[TC04] Verify the functionality of Cancelling Delete confirmation', function(){
       
        cy.visit('/facilities/operatingPeriodListing')
        cy.wait(5000) 

        FacilitySettingsOperatingPeriodList.FilloutFilters(OperatingPeriodName,Status,RecordStatus) 
       
        FacilitySettingsOperatingPeriodList.CancelDeleteItem(OperatingPeriodName, Status)
    })

    it('[TC05] Verify the Delete functionality', function(){
        
        cy.visit('/facilities/operatingPeriodListing')
        cy.wait(5000) 
        
        FacilitySettingsOperatingPeriodList.FilloutFilters(OperatingPeriodName,Status,RecordStatus)

        FacilitySettingsOperatingPeriodList.DeleteItem(OperatingPeriodName, Status)

        // FacilitySettingsOperatingPeriodList.VerifyDeleteNotification()
    })  
})

}

export default FacilityOperatingPeriod