/*****************************************************
 * Page Function: Sample Script to Test Operating Period Detail Form Page Actions
 *
 * @author: asadol
 *****************************************************/

// Import Pages
import OperatingPeriodDetail from '../../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Settings-Operating-Period/OperatingPeriodDetail'
import data from '../../../../fixtures/Data_Module/FS-010-Club-Facility/010-data'
import login from '../../../../fixtures/login'

import Common from '../../../../page-objects/SMCMS/PageActions/Common/Common'


const common = new Common()

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})


describe('[FS010] Fill Out Operating Period Detail Form', function () {

    // Page Definitions
    const OperPrdDtl = new OperatingPeriodDetail()

    it('[TC01] Fill Out Operating Period Detail Form and Cancel button', function () {

        // Navigate to form
        cy.visit('/facilities/operatingPeriodDetail')

        // Fill out Operating Period Name
        OperPrdDtl.filloutOperatingPeriodDetail(data.OperatingPeriodDetail.operatingPeriodName)

        // Verify Operating Period Detail List
        OperPrdDtl.verifyOperatingPeriodDetail(data.OperatingPeriodDetail.operatingPeriodDetailTable)

        // Add Operating Hour for 1st Row of Listing
        // SAVE ITEM BEFORE ADDING MORE ROWS
        OperPrdDtl.addOperatingHourRow1({
            typeOfOperatingDay: data.OperatingPeriodDetail.addOperatingHours.typeOfOperatingDay,
            startTime: data.OperatingPeriodDetail.addOperatingHours.operatingHourRow1.startTime,
            endTime: data.OperatingPeriodDetail.addOperatingHours.operatingHourRow1.endTime,
            typeOfPeakPeriod: data.OperatingPeriodDetail.addOperatingHours.operatingHourRow1.typeOfPeakPeriod,
            isClosedForBooking: data.OperatingPeriodDetail.addOperatingHours.operatingHourRow1.isClosedForBooking,
            ignoreRenderSlotLength: data.OperatingPeriodDetail.addOperatingHours.operatingHourRow1.ignoreRenderSlotLength
        })

        // Save Operating Hours Popup Changes
        OperPrdDtl.saveOperatingHour()

        // Add Operating Hours for 2nd row onwards of Listing
        OperPrdDtl.addOperatingHours({
            typeOfOperatingDay: data.OperatingPeriodDetail.addOperatingHours.typeOfOperatingDay,
            operatingHours: data.OperatingPeriodDetail.addOperatingHours.operatingHours
        })

        // Save Operating Hours Popup Changes
        OperPrdDtl.saveOperatingHour()

        // Remove Operating Hour !! MODAL MUST BE OPEN BEFORE REMOVING ITEM !!
        OperPrdDtl.removeOperatingHour(data.OperatingPeriodDetail.removeOperatingHour.operatingHour)

        // Cancel Form
        OperPrdDtl.cancel()

    })

    it('[TC02] Fill Out Operating Period Detail Form and Submit Form for Approval', function () {

        // Navigate to form
        cy.visit('/facilities/operatingPeriodDetail')

        // Fill out Operating Period Name
        OperPrdDtl.filloutOperatingPeriodDetail(data.OperatingPeriodDetail.operatingPeriodName)
        cy.wait(1000)
        // Verify Operating Period Detail List
        OperPrdDtl.verifyOperatingPeriodDetail(data.OperatingPeriodDetail.operatingPeriodDetailTable)

        // Add Operating Hour for 1st Row of Listing
        // SAVE ITEM BEFORE ADDING MORE ROWS
        OperPrdDtl.addOperatingHourRow1({
            typeOfOperatingDay: data.OperatingPeriodDetail.addOperatingHours.typeOfOperatingDay,
            startTime: data.OperatingPeriodDetail.addOperatingHours.operatingHourRow1.startTime,
            endTime: data.OperatingPeriodDetail.addOperatingHours.operatingHourRow1.endTime,
            typeOfPeakPeriod: data.OperatingPeriodDetail.addOperatingHours.operatingHourRow1.typeOfPeakPeriod,
            isClosedForBooking: data.OperatingPeriodDetail.addOperatingHours.operatingHourRow1.isClosedForBooking,
            ignoreRenderSlotLength: data.OperatingPeriodDetail.addOperatingHours.operatingHourRow1.ignoreRenderSlotLength
        })

        // // Save Operating Hours Popup Changes
        OperPrdDtl.saveOperatingHour()

        // Add Operating Hours for 2nd row onwards of Listing
        OperPrdDtl.addOperatingHours({
            typeOfOperatingDay: data.OperatingPeriodDetail.addOperatingHours.typeOfOperatingDay,
            operatingHours: data.OperatingPeriodDetail.addOperatingHours.operatingHours
        })

        // Save Operating Hours Popup Changes
        OperPrdDtl.saveOperatingHour()

        // Remove Operating Hour !! MODAL MUST BE OPEN BEFORE REMOVING ITEM !!
        OperPrdDtl.removeOperatingHour(data.OperatingPeriodDetail.removeOperatingHour.operatingHour)

        //Click Submit for Approval button
        OperPrdDtl.submitForApproval()

        common.ApprovalWorkFlow('F-OPD', 'Facility Operating Period Approval Workflow', 'Approved', 'approved')

    })
})