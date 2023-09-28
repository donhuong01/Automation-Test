import { processFile } from '../support/fileReader';
import { createMapping } from '../support/seedingCommands/createMapping';
import { assignToFacilityTypes } from '../support/seedingCommands/assignToFacilityTypes';
import { createMappingForNested } from '../support/seedingCommands/createMappingForNested';
import login from '../fixtures/login';

beforeEach(() => {

  //Set local storage for QA Enviroment
  // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

  /****************************
   * Requestor Testing - Erik *
   ****************************/
  // Set local storage for UAT Enviroment
  // cy.SaveUserInfoInLocalStorageForUAT(login.R_authenticated_user_uat, login.R_active_location_uat, login.R_safra_client_uat)

  /************************
   * Admin Testing - Hung *
   ************************/
  // Set local storage for UAT Enviroment
  cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)


  // cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
})

describe('Facility Type Seeding', () => {
  it('passes', () => {
    //#region File read
    const fileNames = [
      'S1 - FacilityType.json',
      'S6 - FacilityTypeBookingAccessModes.json',
      'S7 - FacilityTypeBookingCustomerCategories.json',
      'S8 - FacilityTypeBooking.json',
      'S9 - FacilityTypeHorizon.json',
      'S10 - FacilityTypeQuota.json',
      'S11 - FacilityTypeBookingTiming.json',
      'S12 - FacilityTypeBookingTimingRestriction.json',
      'S13 - FacilityTypeReservation.json',
      'S14 - FacilityTypeExtension.json',
      'S14 - FacilityTypeExtension.json',
      'S15 - FacilityTypeCalendar.json',
      'S18 - FacilityTypeProduct.json'

      // Add more file names as needed
    ];

    // Create an object to store the cleaned data
    const cleanedData = {};

    // Use Cypress commands to read and process each file
    cy.wrap(fileNames).each((fileName) => {
      const filePath = `cypress/fixtures/FacilityTypeMasterSeeding/${fileName}`;
      processFile(filePath, cleanedData, fileName); // Pass the fileName as an argument
    }).then(() => {
      const facilityTypeObject = cleanedData['S1 - FacilityType.json'];
      const accessModesArray = Object.values(cleanedData['S6 - FacilityTypeBookingAccessModes.json']);
      const customerCategoriesArray = Object.values(cleanedData['S7 - FacilityTypeBookingCustomerCategories.json']);
      const bookingArray = Object.values(cleanedData['S8 - FacilityTypeBooking.json']);
      const horizonArray = Object.values(cleanedData['S9 - FacilityTypeHorizon.json']);
      const quotaArray = Object.values(cleanedData['S10 - FacilityTypeQuota.json']);
      const bookingTimingArray = Object.values(cleanedData['S11 - FacilityTypeBookingTiming.json']);
      const bookingTimingRestrictionArray = Object.values(cleanedData['S12 - FacilityTypeBookingTimingRestriction.json']);
      const reservationArray = Object.values(cleanedData['S13 - FacilityTypeReservation.json']);
      const extensionArray = Object.values(cleanedData['S14 - FacilityTypeExtension.json']);
      const calendarArray = Object.values(cleanedData['S15 - FacilityTypeCalendar.json']);
      const productArray = Object.values(cleanedData['S18 - FacilityTypeProduct.json']);


      // Create a mapping of FacilityTypeId to access modes
      const accessModesMapping = createMapping(accessModesArray, 'FacilityTypeId');

      // Create a mapping of FacilityTypeId to customer categories
      const customerCategoriesMapping = createMapping(customerCategoriesArray, 'FacilityTypeId');
      // Create a mapping of FacilityTypeId to customer categories and so on...
      const bookingMapping = createMapping(bookingArray, 'FacilityTypeId');
      const horizonMapping = createMapping(horizonArray, 'FacilityTypeId');

      //ensure nested before passing
      const quotaMapping = createMappingForNested(quotaArray, 'FacilityTypeId');
      //ensure nested before passing
      const bookingTimingMapping = createMappingForNested(bookingTimingArray, 'FacilityTypeId');
      const bookingTimingRestrictionMapping = createMappingForNested(bookingTimingRestrictionArray, 'FacilityTypeId');
      const reservationMapping = createMapping(reservationArray, 'FacilityTypeId');
      const extensionMapping = createMapping(extensionArray, 'FacilityTypeId');
      const calendarMapping = createMapping(calendarArray, 'FacilityTypeId');
      const productMapping = createMapping(productArray, 'FacilityTypeId');


      // Filter and assign access modes to facilityTypeObject
      assignToFacilityTypes(facilityTypeObject, accessModesMapping, 'accessModes');
      // Filter and assign customer categories to facilityTypeObject without overwriting accessModes and so on...
      assignToFacilityTypes(facilityTypeObject, customerCategoriesMapping, 'customerCategories', true);
      assignToFacilityTypes(facilityTypeObject, bookingMapping, 'bookings', true);
      assignToFacilityTypes(facilityTypeObject, horizonMapping, 'horizons', true);
      assignToFacilityTypes(facilityTypeObject, quotaMapping, 'quotas', true);
      assignToFacilityTypes(facilityTypeObject, bookingTimingMapping, 'bookingTiming', true);
      assignToFacilityTypes(facilityTypeObject, bookingTimingRestrictionMapping, 'bookingTimingRestriction', true);
      assignToFacilityTypes(facilityTypeObject, reservationMapping, 'reservation', true);
      assignToFacilityTypes(facilityTypeObject, extensionMapping, 'extension', true);
      assignToFacilityTypes(facilityTypeObject, calendarMapping, 'calendar', true);
      assignToFacilityTypes(facilityTypeObject, productMapping, 'product', true);

      //#endregion

      // Log the updated facilityTypeObject
      cy.log(JSON.stringify(facilityTypeObject, null, 2));

      cy.visit('/facilities/facilityTypeListing', { timeout: 30000 });

    });
  });
});
