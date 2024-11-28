import * as styles from '../../styles/search.module.css';
import createNode from '../utils/createNode';

export default function Searchbar(searchBarparent, lookups, data, setState) {
  const input = createNode(searchBarparent, {tag: 'input', placeholder: 'Search', classes: [styles.input]});

  const resultsContainer = createNode(searchBarparent, {tag: 'div', classes: [styles.resultsContainer]});

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase();
    resultsContainer.innerHTML = '';
    // const a = [];
    const filteredData = data.filter((item) => {
      return lookups.some((key) => {
        return item[key.key]?.toLowerCase?.().includes(query);
      });
    });
    setState((prev) => ({...prev, data: filteredData}));
  });
}

// Array.prototype.sloboFilter = function (cb) {
//   const res = [];

//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i])) res.push(this[i]);
//   }
//   return res;
// };
// // 5
// console.log(
//   data.sloboFilter((k) => {
//     return k.orgUnitIdObject.languageId === 5;
//   })
// );
