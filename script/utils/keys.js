export function extractKeys(obj, parentKey = '') {
  let keys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const formattedKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof obj[key] === 'object' && obj[key] !== null) {
        keys = keys.concat(extractKeys(obj[key], formattedKey));
      } else {
        keys.push(formattedKey);
      }
    }
  }

  return keys;
}

export function getUniqueKeys(data) {
  let allKeys = [];

  data.forEach((item) => {
    allKeys = allKeys.concat(extractKeys(item));
  });

  return [...new Set(allKeys)];
}
