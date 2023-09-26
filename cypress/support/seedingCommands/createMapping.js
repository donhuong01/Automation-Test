// Function to create a mapping based on a specific property
export function createMapping(array, key) {
    const mapping = {};
    array.forEach(item => {
        const id = item[key];
        mapping[id] = mapping[id] || [];
        mapping[id].push(item);
    });
    return mapping;
}
