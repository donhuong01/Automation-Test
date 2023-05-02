import PromotionUtilization from '../../../page-objects/SMCMS/PageActions/FS-042-Promotion/PromotionUtilization/PromotionUtilizationListing'
import login from '../../../fixtures/login'
import data from '../../../fixtures/Data_Module/FS-042-Promotion/PromotionUtilization'

beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

})

const { PromotionName } = data

describe('FS-042 - TS02_Promotion Utilization', function () {

    it('[TC01] Checking Promotion Filter functionality', function () {

        cy.visit('/club/promotionUtilizationListing').wait(3000)

        PromotionUtilization.FilterWithPromotionName(PromotionName)

    })

})