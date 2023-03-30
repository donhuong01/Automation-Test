import IGDeactivation from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/FS-016 Interest Group Deactivation'
import InterestGroupListing from '../../../../page-objects/SMCMS/PageActions/FS-016-Interest-Group/InterestGroupListing'
import login from '../../../../fixtures/login'
import Data from '../../../../fixtures/Data_Module/FS-016-Interest-Group/FS-016-Interest-Group-Management'
import Common from '../../../../page-objects/SMCMS/PageActions/Common/Common'

const common = new Common

beforeEach(() => {

    // Set local storage for QA Enviroment
    // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})


describe('FS-016 Interest Group Deactivation', function () {

    it('Deactivating Interest Group', function () {

        cy.visit('/membership/interestGroupListing').wait(2000)

        InterestGroupListing.FilterWithName(Data.IGMembershipDeactivation.IGName)

        InterestGroupListing.SelectTableEntry(Data.IGMembershipDeactivation.IGName)

        InterestGroupListing.Deactivate()

        IGDeactivation.FilloutDeactivationInfo(Data.IGMembershipDeactivation.DeactivationDate, Data.IGMembershipDeactivation.DReason)

        IGDeactivation.Submit()

        common.ApprovalWorkFlow('IGD', 'Interest Group Deactivation Approval Workflow', 'Approve', 'Approved')

        cy.visit('/membership/interestGroupListing').wait(2000)

        InterestGroupListing.FilterWithName(Data.IGMembershipDeactivation.IGName)

        InterestGroupListing.VerifyStatus(Data.IGMembershipDeactivation.Status)

    })
})