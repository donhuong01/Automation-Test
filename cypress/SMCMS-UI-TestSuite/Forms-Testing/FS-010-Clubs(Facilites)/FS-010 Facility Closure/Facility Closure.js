import login from '../../../../../fixtures/login'
import FacilityClosure from '../../../../../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010 Facility Closure/Facility Closure'
import Common from '../../../../../page-objects/SMCMS/PageActions/Common/Common'
import date from '../../../../../fixtures/Data_Module/FS-010-Club-Facility/010-data'

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

const common = new Common()

const { FacilityType, location, Facility, Reason, StartDate, StartTime, EndDate, EndTime } = date.FacilityClosure

describe('SP3-FS010_TS09 Facility Closure', function () {


    it('[TC01] Creating a Recurring Facility Closure', function () {

        cy.visit('/facilities/facilityClosureListing')

        FacilityClosure.CreateNew()

        FacilityClosure.FacilityClosureInformation(FacilityType, location, Facility, Reason)

        FacilityClosure.ClosurePeriod(StartDate, StartTime, EndDate, EndTime)

        FacilityClosure.SubmitForApproval()

        common.ApprovalWorkFlow('F-CLO', 'Facility Closure Approval Workflow', 'Approve', 'Approved')


    })

});