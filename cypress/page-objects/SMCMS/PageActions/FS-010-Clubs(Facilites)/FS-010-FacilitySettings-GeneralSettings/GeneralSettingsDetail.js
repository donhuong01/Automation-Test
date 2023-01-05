import elems_FacilitySettingsGeneralSettingsDetail from '../../../Elements/Facilities/FS-010-CLUBS(FACILITIES)/FacilitySettingsGeneralSettingsDetail'
import elems_PageHeader from '../../../Elements/common/PageHeader'

const GeneralSetting = elems_FacilitySettingsGeneralSettingsDetail

class FacilityGeneralSettingDetail {

    /*****************************************************
     * Method: Verify page title
     * Description: This function verifies the page title
     * @param {string} expectedPg
    *****************************************************/

    verifyPageTitle(expectedPg) {

        cy.ValidateElementText(elems_PageHeader.LBL_PAGETITLE, expectedPg)

    }

    /*****************************************************
     * Method: ReminderAndSAFRAPointSection
     * Description: This function fill out Reminder and SAFRA point section 
     * @param {string} FacilityBookingReminder
     * @param {string} FacilityBooking
     * @param {string} FacilityGroup
     * @param {string} FacilityReservation
    *****************************************************/
    ReminderAndSAFRAPointSection(FacilityBookingReminder, FacilityBooking, FacilityGroup, FacilityReservation) {


        cy.xpath(GeneralSetting.TXT_FACILITYBOOKINGREMINDER).clear()
        cy.EnterText(GeneralSetting.TXT_FACILITYBOOKINGREMINDER, FacilityBookingReminder)

        if (FacilityBooking === 'check') {
            cy.TickCheckBox(GeneralSetting.CHK_FACIILTYBOOKINGEARN, FacilityBooking)
        }
        if (FacilityGroup === 'check') {
            cy.TickCheckBox(GeneralSetting.CHK_FACIILTYGROUPBOOKINGEARN, FacilityGroup)
        }
        if (FacilityReservation === 'check') {
            cy.TickCheckBox(GeneralSetting.CHK_FACIILTYRESERVATIONEARN, FacilityReservation)
        }
    }

    /*****************************************************
     * Method: FillOutPhotographSection
     * Description: This function Fill Out Photograph Section
     * @param {string} NumOfPhotoGraph
     * @param {string} MaximumFileSize
     * @param {string} FormatAllowedSelection
     * @param {string} TransferButton
    *****************************************************/
    FillOutPhotographSection(NumOfPhotoGraph, MaximumFileSize, FormatAllowedSelection, TransferButton) {

        cy.xpath(GeneralSetting.NUM_NUMBEROFPHOTOGRAPHSTOUPLOAD).clear()
        cy.EnterText(GeneralSetting.NUM_NUMBEROFPHOTOGRAPHSTOUPLOAD, NumOfPhotoGraph)
        cy.xpath(GeneralSetting.NUM_MAXIMUMFILESIZE).clear()
        cy.EnterText(GeneralSetting.NUM_MAXIMUMFILESIZE, MaximumFileSize)

        cy.SelectListBoxItem(GeneralSetting.BOX_FORMARTALLOWEDSELECTED, FormatAllowedSelection, TransferButton)

    }

    /*****************************************************
     * Method: TransferAllFrom
     * Description: This function Clicks on the Transfer All from button
     * @param {string} TransferButton
     * @param {string} FormatAllowedSelection
    *****************************************************/
    TransferAllFrom(FormatAllowedSelection, TransferButton) {
        cy.SelectListBoxItem(GeneralSetting.BOX_FORMARTALLOWEDSELECTED, FormatAllowedSelection, TransferButton)

    }

    /*****************************************************
     * Method: TransferAllFromAllowedSelected
     * Description: This function Clicks on the Transfer All from button
     * @param {string} TransferButton
     * @param {string} FormatAllowedSelection
    *****************************************************/
    TransferAllFromAllowedSelected(FormatAllowedSelection, TransferButton) {
        cy.SelectListBoxItem(GeneralSetting.BOX_FORMARTALLOWEDSELECTED, FormatAllowedSelection, TransferButton)

    }



    /*****************************************************
     * Method: FacilityCancellationAndAutoBackUp
     * Description: This function FillOut Facility Cancellation And Backup Section
     * @param {string} CancellationMonths
     * @param {string} CancellationDays
     * @param {string} DataBackUp
    *****************************************************/
    FacilityCancellationAndAutoBackUp(CancellationMonths, CancellationDays, DataBackUp) {
        cy.xpath(GeneralSetting.NUM_CANCELLATIONISNOTALLOWEDINMONTHS).clear()
        cy.EnterText(GeneralSetting.NUM_CANCELLATIONISNOTALLOWEDINMONTHS, CancellationMonths)
        cy.xpath(GeneralSetting.NUM_CANCELLATIONISNOTALLOWEDINDAYS).clear()
        cy.EnterText(GeneralSetting.NUM_CANCELLATIONISNOTALLOWEDINDAYS, CancellationDays)
        cy.xpath(GeneralSetting.NUM_DATABACKUPANDCLEANINGDAYS).clear()
        cy.EnterText(GeneralSetting.NUM_DATABACKUPANDCLEANINGDAYS, DataBackUp)
    }

    /*****************************************************
     * Method: Save
     * Description: This function click on Save Button
    *****************************************************/

    Save() {
        cy.Click(GeneralSetting.BTN_SAVE)
        cy.wait(2000)
    }

    /*****************************************************
     * Method: Cancel
     * Description: This function Click Cancel button
    *****************************************************/
    Cancel() {
        cy.Click(GeneralSetting.BTN_CANCEL)
    }
}

export default new FacilityGeneralSettingDetail