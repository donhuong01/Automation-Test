// fileReader.js

// Function to remove spaces in JSON keys
const removeSpacesInJSONKeys = (obj) => {
    if (typeof obj !== 'object') {
        return obj; // If it's not an object, return as is
    }

    const newObj = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = key.replace(/\s+/g, ''); // Remove spaces in the key
            newObj[newKey] = removeSpacesInJSONKeys(obj[key]); // Recursively process nested objects
        }
    }

    return newObj;
};

// Function to process each file
const processFile = (filePath, cleanedData, fileName) => {
    cy.readFile(filePath).then((data) => {
        const cleaned = removeSpacesInJSONKeys(data);

        // Use the fileName as the key in the cleanedData object
        cleanedData[fileName] = cleaned;
    });
};

export { processFile };
