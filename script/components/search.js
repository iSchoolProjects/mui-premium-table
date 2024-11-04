// filter(data,key,operator,value){
//   switch(operatore){
//     case 'contains':
//         return data.filter(ele=>ele[key].contains(value))
//   }
// }
// value je Input
// key je ime polja prvog iz date nazivi
// ele je elemet citav od kljuca

export default function Search(data, key, operator, value) {
    switch(operator){
            case 'contains':
                return data.filter(ele=>ele[key].contains(value))
            }
        }
