import login from "../../../fixtures/login"
import AccommodationClosureDetail from "../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodatiomClosure/AccommodationClosureDetail"
import AccommodationClosureListing from '../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodatiomClosure/AccommodationClosureListing'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import data from "../../../fixtures/Data_Module/FS-012-Accommodation/data"

const common = new Common()


beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)
})


const { AccommodationType, Reason} = data.AccommodationClosure

describe('FS-012 Accommodation Closure Management', function () {

    it('Creating and Updating a Accommodation', function () {

        cy.visit('/accommodation/closureListing').wait(4000)

        AccommodationClosureListing.verifyPageTitle('Accommodation Closure Listing')

        AccommodationClosureListing.CreateNew()

        AccommodationClosureListing.verifyPageTitle('Accommodation Closure Detail')

        AccommodationClosureDetail.SelectAccommodationType()

        AccommodationClosureDetail.EnterReason(Reason)

    })

})