// filter(data,key,operator,value){
//   switch(operatore){
//     case 'contains':
//         return data.filter(ele=>ele[key].contains(value))
//   }
// }
// value je Input
// key je ime polja prvog iz date nazivi
// ele je elemet citav od kljuca
import isAnyOf from './isAnyOf.js';

function filterData(data, {columns: key, operators, value}) {
  switch (operators) {
    case 'contains':
      return data.filter((ele) => ele[key] && typeof ele[key] === 'string' && ele[key].includes(value));
    case 'equals':
      return data.filter((ele) => ele[key] === value);
    case 'startsWith':
      return data.filter((ele) => typeof ele[key] === 'string' && ele[key].startsWith(value));
    case 'endsWith':
      return data.filter((ele) => typeof ele[key] === 'string' && ele[key].endsWith(value));
    case 'isEmpty':
      return data.filter((ele) => ele[key] === '');
    // case 'isNotEmpty':
    //     return data.filter((ele) =>  ele[key] !== '');
    //prikazuje samo one kojim je id string
    case 'isNotEmpty':
      return data.filter((ele) => !!ele);
    case 'isAnyOf':
      return data.filter((ele) => typeof ele[key] === 'string' && isAnyOf(ele[key], value));
  }
}
export default function search(data, filters, operator) {
  if (!operator && filters.length === 1) return filterData(data, filters[0]);
  let filteredData = [...data];
  if (operator.toUpperCase() === 'AND') {
    for (const filter of filters) {
      filteredData = filterData(filteredData, filter);
    }
  } else {
    const temp = [];
    for (const filter of filters) {
      const res = filterData(data, filter);
      for (const r of res) {
        if (!temp.find((k) => k.id === r.id)) temp.push(r);
      }
    }
    return temp;
  }

  return filteredData;
}
