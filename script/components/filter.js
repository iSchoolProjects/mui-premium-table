import * as styles from '../../styles/filter.module.css';
import createNode from '../utils/createNode';
import Button from './button';
// import data from './data';
import Exit from './exit';
import Input from './input';
import Operator from './operator';

// import Search from './search';
// import Select from './select';

//napravim mu holder dam sirinu onda dam klasu u batnu promjenim klasu na fazon dn db
export default function Filter(parent, onChange) {
  const filterContainer = createNode(parent, {tag: 'div'});
  // let operatorHolder;
  filterContainer.classList.add('filter-container');
  const container = createNode(parent, {tag: 'div', classes: [styles.filter]});
  function duplicateFilter() {
    const filterHolder = createNode(filterContainer, {tag: 'div'});
    filterHolder.classList.add('filter-holder');
    Exit(filterHolder, {});
    const operatorHolder = createNode(filterHolder, {tag: 'div', classes: ['inactive']});
    operatorHolder.classList.add('operator-holder');
    Operator(filterHolder, {options: ['AND', 'OR'], label: 'r', onChange});
    // const columns = Select(filterHolder, {options, label: 'Columns', onChange});
    // const operator = Select(filterHolder, {
    //   options: ['contains', 'equals', 'starts with', 'ends with', 'is empty', 'is not empty', 'is any of'],
    //   label: 'Operator',
    //   onChange,
    // });
    const value = Input(filterHolder, {label: 'value', placeholder: 'Filter value'});
    value.addEventListener('blur', () => {
      // const result = Search(data, columns.value, operator.value, value.value);
    });
  }
  duplicateFilter();
  const buttonHolder = createNode(container, {tag: 'div'});
  buttonHolder.classList.add('button-holder');

  const addFilter = Button(buttonHolder, {});
  addFilter.addEventListener('click', () => {
    // Filter(parent)
    duplicateFilter();
  });
}
//blur
//kao na event listneru umjestu klik blur je
