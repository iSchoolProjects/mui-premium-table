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

export default function Search(data, key, operator, value) {
  switch (operator) {
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
