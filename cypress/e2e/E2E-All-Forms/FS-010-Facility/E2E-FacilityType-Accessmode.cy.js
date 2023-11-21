import FacilityTypeAccessMode from './FacilityType-Accessmode'
import AccessModedata from '../../../fixtures/Data_Module/FS-010-Club-Facility/AccessMode-Data'
import login from '../../../fixtures/login'


beforeEach(() => {

    // Set local storage for QA Enviroment
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

    // Set local storage for UAT Enviroment
    // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

    //Select Channel
    cy.visit('/membership/customerCheckin')
    cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA Jurong')
})

//const FacilityTypeAccessMode = (FacilityName, AccessMode, CustomerCategory, Hours, Days, DaysAndTime, Status) => {

AccessModedata.forEach(AccessModedata => {

    describe(`Facility Type - Testing ${AccessModedata.AccessMode} - Access Mode`, function () {

        FacilityTypeAccessMode(AccessModedata.FacilityName, AccessModedata.AccessMode, AccessModedata.CustomerCategory, AccessModedata.Hours, 
            AccessModedata.Days, AccessModedata.DaysAndTime)

    })
})



