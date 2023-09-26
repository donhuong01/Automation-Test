// Function to create a mapping for nested objects based on a property path
export function createMappingForNested(array, propertyPath) {
    const mapping = {};

    array.forEach(item => {
        const keys = propertyPath.split('.');
        let currentValue = item;

        keys.forEach(key => {
            if (currentValue.hasOwnProperty(key)) {
                currentValue = currentValue[key];
            } else {
                currentValue = null;
            }
        });

        if (currentValue !== null) {
            mapping[currentValue] = mapping[currentValue] || [];
            mapping[currentValue].push(item);
        }
    });

    return mapping;
}
