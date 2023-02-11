import login from '../../../../fixtures/login'
import AccommodationSettingsOperatingPeriodListing from '../../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodationSettingsOperatingPeriod/AccommodationSettingsOperatingPeriodListing'
import AccommodationSettingsOperatingPeriodDetail from '../../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodationSettingsOperatingPeriod/AccommodationSettingsOperatingPeriodLDetail'
import Common from '../../../../page-objects/SMCMS/PageActions/Common/Common'
import data from '../../../../fixtures/Data_Module/FS-012-Accommodation/data'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

const common = new Common()
const { OperatingPeriodName } = data.AccomodationSettingOperatingPeriod

describe('FS-012 Accommodation Settings (Operating Period)', function () {

    it('Creating Operating Period and Approve', function () {

        cy.visit('/accommodation/settingsOperatingPeriodListing').wait(2000)

        AccommodationSettingsOperatingPeriodListing.CreateNew()

        AccommodationSettingsOperatingPeriodDetail.EnterOperatingPeriodName(OperatingPeriodName)

        AccommodationSettingsOperatingPeriodDetail.EnterTypeOfPeakPeriod('Sunday', 'Super Holiday')

        AccommodationSettingsOperatingPeriodDetail.EnterTypeOfPeakPeriod('Monday', 'Non-Peak')

        AccommodationSettingsOperatingPeriodDetail.EnterTypeOfPeakPeriod('Tuesday', 'Peak')

        AccommodationSettingsOperatingPeriodDetail.EnterTypeOfPeakPeriod('Wednesday', 'Super-Peak')

        AccommodationSettingsOperatingPeriodDetail.SaveAsDraft()

        AccommodationSettingsOperatingPeriodListing.FilterByOperatingPeriodName(OperatingPeriodName)

        AccommodationSettingsOperatingPeriodListing.ClickOnTableEntry(OperatingPeriodName)

        AccommodationSettingsOperatingPeriodListing.verifyPageTitle('Settings - Operating Period Details')

        AccommodationSettingsOperatingPeriodDetail.SubmitForApproval()

        common.ApprovalWorkFlow('', '', 'Approve', 'test')

        cy.visit('/accommodation/settingsOperatingPeriodListing').wait(2000)

        AccommodationSettingsOperatingPeriodListing.FilterByOperatingPeriodName(OperatingPeriodName)

        AccommodationSettingsOperatingPeriodListing.VerifyItemStatus('Approved')

        AccommodationSettingsOperatingPeriodListing.SelectItem(OperatingPeriodName)

        AccommodationSettingsOperatingPeriodListing.Delete()

    })
})