import login from '../../../fixtures/login'
import AccommodationSettingsOperatingPeriodListing from '../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodationSettingsOperatingPeriod/AccommodationSettingsOperatingPeriodListing'
import AccommodationSettingsOperatingPeriodDetail from '../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodationSettingsOperatingPeriod/AccommodationSettingsOperatingPeriodLDetail'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import data from '../../../fixtures/Data_Module/FS-012-Accommodation/data'

const common = new Common()
const { OperatingPeriodName } = data.AccomodationSettingOperatingPeriod

const AccommodationSettingOperatingPeriod = () =>{

describe('FS-012 Accommodation Settings (Operating Period)', function () {

    it('[TS-01] Creating Operating Period and Approve', function () {

        cy.visit('/accommodation/settingsOperatingPeriodListing').wait(2000)

        AccommodationSettingsOperatingPeriodListing.CreateNew()

        AccommodationSettingsOperatingPeriodDetail.EnterOperatingPeriodName(OperatingPeriodName)

        AccommodationSettingsOperatingPeriodDetail.EnterTypeOfPeakPeriod('Monday', 'Super Holiday')
        
        AccommodationSettingsOperatingPeriodDetail.EnterTypeOfPeakPeriod('Tuesday', 'Peak')
        
        AccommodationSettingsOperatingPeriodDetail.EnterTypeOfPeakPeriod('Wednesday', 'Super Holiday')
        
        AccommodationSettingsOperatingPeriodDetail.EnterTypeOfPeakPeriod('Thursday', 'Non-Peak')

        AccommodationSettingsOperatingPeriodDetail.EnterTypeOfPeakPeriod('Friday', 'Super Holiday')

        AccommodationSettingsOperatingPeriodDetail.EnterTypeOfPeakPeriod('Saturday', 'Super Holiday')

        AccommodationSettingsOperatingPeriodDetail.EnterTypeOfPeakPeriod('Sunday', 'Non-Peak')

        AccommodationSettingsOperatingPeriodDetail.EnterTypeOfPeakPeriod('Public Holiday', 'Peak')
        
        AccommodationSettingsOperatingPeriodDetail.EnterTypeOfPeakPeriod('Eve of Public Holiday (Weekday)', 'Peak')

        AccommodationSettingsOperatingPeriodDetail.EnterTypeOfPeakPeriod('Eve of Public Holiday (Weekend)', 'Super-Peak')

        AccommodationSettingsOperatingPeriodDetail.SaveAsDraft()

        AccommodationSettingsOperatingPeriodListing.FilterByOperatingPeriodName(OperatingPeriodName)

        AccommodationSettingsOperatingPeriodListing.ClickOnTableEntry(OperatingPeriodName)

        AccommodationSettingsOperatingPeriodListing.verifyPageTitle('Settings - Operating Period Details')

        AccommodationSettingsOperatingPeriodDetail.SubmitForApproval()

        common.ApprovalWorkFlow('A-OPD', 'Accommodation Operating Period Approval Workflow', 'Approve', 'Testing Accommodation Operating Period Approval Workflow	')

        cy.visit('/accommodation/settingsOperatingPeriodListing').wait(2000)

        AccommodationSettingsOperatingPeriodListing.FilterByOperatingPeriodName(OperatingPeriodName)

        AccommodationSettingsOperatingPeriodListing.VerifyItemStatus('Approved')

        AccommodationSettingsOperatingPeriodListing.SelectItem(OperatingPeriodName)

        AccommodationSettingsOperatingPeriodListing.Delete()

    })
})

}

export default AccommodationSettingOperatingPeriod