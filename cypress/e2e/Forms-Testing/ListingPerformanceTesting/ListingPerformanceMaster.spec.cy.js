import login from '../../../fixtures/login'
import ListingOnlineAccountAccess from '../FS-001-Admin-SystemLogin/ListingPerformance/ListingOnlineAccountAccess'
import ListingPositionListing from '../FS-001-Admin-SystemLogin/ListingPerformance/ListingPositionListing'
import ListingSMCMSRoleListing from '../FS-001-Admin-SystemLogin/ListingPerformance/ListingSMCMSRoleListing'
import ListingSMCMSUserListing from '../FS-001-Admin-SystemLogin/ListingPerformance/ListingSMCMSUserListing'

beforeEach(() => {
    //Set local storage for UAT Enviroment
    cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})

describe('E2E Auto Testing:FS-001 Admin: System Login', () => {
    ListingOnlineAccountAccess();
    ListingPositionListing();
    ListingSMCMSRoleListing();
    ListingSMCMSUserListing();
})