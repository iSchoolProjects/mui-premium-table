import * as styles from '../../styles/search.module.css';
import createNode from '../utils/createNode';

export default function Searchbar(searchBarparent, keys, data) {
  const input = createNode(searchBarparent, {tag: 'input', placeholder: 'Search', classes: [styles.input]});

  const resultsContainer = createNode(searchBarparent, {tag: 'div', classes: [styles.resultsContainer]});

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase();
    resultsContainer.innerHTML = '';

    const filteredData = data.filter((item) => {
      return keys.some((key) => {
        return item[key].toLowerCase().includes(query);
      });
    });

    filteredData.forEach((item) => {
      createNode(resultsContainer, {tag: 'div', classes: [styles.resultItem], textContent: item[keys[0]]});
    });
  });
}
