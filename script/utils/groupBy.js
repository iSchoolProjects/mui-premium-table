export function groupBy(data, key) {
  return data.reduce((result, item) => {
    const value = item[key];
    
    if (!result[value]) {
      result[value] = [];
    }
    
    result[value].push(item);
    
    return result;
  }, {});
} 