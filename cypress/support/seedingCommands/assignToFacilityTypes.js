// Function to assign values to facility types based on FacilityTypeId
export function assignToFacilityTypes(facilityTypeObject, mapping, propertyName, addToExisting = false) {
    for (const key in facilityTypeObject) {
      if (facilityTypeObject.hasOwnProperty(key)) {
        const facilityType = facilityTypeObject[key];
        const facilityTypeId = facilityType.Id;

        // Check if the property already exists
        if (!facilityType.hasOwnProperty(propertyName)) {
          facilityType[propertyName] = [];
        }

        // Add to the existing property if addToExisting is true
        if (addToExisting) {
          facilityType[propertyName] = facilityType[propertyName].concat(mapping[facilityTypeId] || []);
        } else {
          facilityType[propertyName] = mapping[facilityTypeId] || [];
        }
      }
    }
  }
