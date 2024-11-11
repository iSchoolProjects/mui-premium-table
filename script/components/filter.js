import * as styles from '../../styles/filter.module.css';
import createNode from '../utils/createNode';
import data from './data';
import Exit from './exit';
import Input from './input';
import Operator from './operator';
import search from './search';
import Select from './select';


export default function Filter(parent, options, state, setState) {
  const filterContainer = createNode(parent, {
    tag: 'div',
    classes: [styles.filterContainer],
    dataset: {filterOpen: state.filterOpen},
  });

  for (const index in state.filters) {
    const filterHolder = createNode(filterContainer, {tag: 'div', classes: ['filter-holder']});
    Exit(filterHolder, {}).addEventListener('click', function () {
      setState((prev) => ({...prev, filters: prev.filters.filter((filter, idx) => idx !== +index)}));
    });

    if (state.filters.length > 1 && +index + 1 === state.filters.length) {
      Operator(filterHolder, {
        options: [
          {label: 'AND', value: 'AND'},
          {label: 'OR', value: 'OR'},
        ],
        label: 'r',
        value: state.operator,
      }).addEventListener('change', function (e) {
        setState((prev) => ({...prev, operator: e.target.value}));
      });
    }

    Select(filterHolder, {options, label: 'Columns', value: state.filters[index].columns}).addEventListener('change', function (e) {
      setState((prev) => ({
        ...prev,
        filters: prev.filters.map((filter, idx) => (idx === +index ? {...filter, columns: e.target.value} : filter)),
      }));
    });
    Select(filterHolder, {
      options: [
        {label: 'contains', value: 'contains'},
        {label: 'equals', value: 'equals'},
        {label: 'starts with', value: 'startsWith'},
        {label: 'ends with', value: 'endsWith'},
        {label: 'is empty', value: 'isEmpty'},
        {label: 'isNotEmpty'},
        {label: 'is any of', value: 'isAnyOf'},
      ],
      label: 'Operator',
      value: state.filters[index].operators,
    }).addEventListener('change', function (e) {
      setState((prev) => ({
        ...prev,
        filters: prev.filters.map((filter, idx) => (idx === +index ? {...filter, operators: e.target.value} : filter)),
      }));
    });
    const value = Input(filterHolder, {label: 'value', placeholder: 'Filter value', value: state.filters[index].value});
    value.addEventListener('blur', (e) => {
      setState((prev) => ({
        ...prev,
        filters: prev.filters.map((filter, idx) => (idx === +index ? {...filter, value: e.target.value} : filter)),
      }));
    });
  }

  const buttonHolder = createNode(filterContainer, {tag: 'div', classes: [styles.buttonHolder]});
  const filterData = createNode(buttonHolder, {tag: 'button', text: 'Filter Data', classes: [styles.filterButton]});
  filterData.addEventListener('click', function () {
    search(data, state.filters, state.operator);

    if (state.filterOpen) {
      setState((prev) => ({...prev, filterOpen: false}));
    }
  });
  const addFilter = createNode(buttonHolder, {tag: 'button', classes: [styles.filterButton], text: '+ Add filter'});
  addFilter.addEventListener('click', () => {
    setState((prev) => ({...prev, filters: prev.filters.concat({columns: '', operators: '', value: ''})}));
  });
}
