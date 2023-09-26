import { processFile } from '../support/fileReader';
import { createMapping } from '../support/seedingCommands/createMapping';
import { assignToFacilityTypes } from '../support/seedingCommands/assignToFacilityTypes';
import { createMappingForNested } from '../support/seedingCommands/createMappingForNested';

describe('Facility Type Seeding', () => {
  it('passes', () => {
    const fileNames = [
      'S1 - FacilityType.json',
      'S6 - FacilityTypeBookingAccessModes.json',
      'S7 - FacilityTypeBookingCustomerCategories.json',
      'S8 - FacilityTypeBooking.json',
      'S9 - FacilityTypeHorizon.json',
      'S10 - FacilityTypeQuota.json'

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

      // Create a mapping of FacilityTypeId to access modes
      const accessModesMapping = createMapping(accessModesArray, 'FacilityTypeId');
      // Create a mapping of FacilityTypeId to customer categories
      const customerCategoriesMapping = createMapping(customerCategoriesArray, 'FacilityTypeId');
      // Create a mapping of FacilityTypeId to customer categories and so on...
      const bookingMapping = createMapping(bookingArray, 'FacilityTypeId');
      const horizonMapping = createMapping(horizonArray, 'FacilityTypeId');

      //ensure nested before passing
      const quotaMapping = createMappingForNested(quotaArray, 'FacilityTypeId');



      // Filter and assign access modes to facilityTypeObject
      assignToFacilityTypes(facilityTypeObject, accessModesMapping, 'accessModes');
      // Filter and assign customer categories to facilityTypeObject without overwriting accessModes and so on...
      assignToFacilityTypes(facilityTypeObject, customerCategoriesMapping, 'customerCategories', true);
      assignToFacilityTypes(facilityTypeObject, bookingMapping, 'bookings', true);
      assignToFacilityTypes(facilityTypeObject, horizonMapping, 'horizons', true);
      assignToFacilityTypes(facilityTypeObject, quotaMapping, 'quotas', true);

      // Log the updated facilityTypeObject
      cy.log(JSON.stringify(facilityTypeObject, null, 2));

    });
  });
});

// // Function to create a mapping based on a specific property
// function createMapping(array, key) {
//   const mapping = {};
//   array.forEach(item => {
//     const id = item[key];
//     mapping[id] = mapping[id] || [];
//     mapping[id].push(item);
//   });
//   return mapping;
// }


// // Function to assign values to facility types based on FacilityTypeId
// function assignToFacilityTypes(facilityTypeObject, mapping, propertyName, addToExisting = false) {
//   for (const key in facilityTypeObject) {
//     if (facilityTypeObject.hasOwnProperty(key)) {
//       const facilityType = facilityTypeObject[key];
//       const facilityTypeId = facilityType.Id;

//       // Check if the property already exists
//       if (!facilityType.hasOwnProperty(propertyName)) {
//         facilityType[propertyName] = [];
//       }

//       // Add to the existing property if addToExisting is true
//       if (addToExisting) {
//         facilityType[propertyName] = facilityType[propertyName].concat(mapping[facilityTypeId] || []);
//       } else {
//         facilityType[propertyName] = mapping[facilityTypeId] || [];
//       }
//     }
//   }
// }

// function createMappingForNested(array, propertyPath) {
//   const mapping = {};

//   array.forEach(item => {
//     const keys = propertyPath.split('.');
//     let currentValue = item;

//     keys.forEach(key => {
//       if (currentValue.hasOwnProperty(key)) {
//         currentValue = currentValue[key];
//       } else {
//         currentValue = null;
//       }
//     });

//     if (currentValue !== null) {
//       mapping[currentValue] = mapping[currentValue] || [];
//       mapping[currentValue].push(item);
//     }
//   });

//   return mapping;
// }
