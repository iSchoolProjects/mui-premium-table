import * as styles from '../../styles/dropdown.module.css';
import createNode from '../utils/createNode';

export default function createDropdown(parent, state, setState) {
  const select = createNode(parent, {tag: 'div', classes: [styles.select]});
  const options = [
    {value: 'unsort', text: 'Unsort', onclick: () => setState((prev) => ({...prev, sort: 0}))},
    {value: 1, text: 'Sort by ASC', key: 'sort', onclick: () => setState((prev) => ({...prev, sort: 1}))},
    {value: 2, text: 'Sort by DESC', key: 'sort', onclick: () => setState((prev) => ({...prev, sort: 2}))},
    {value: 'filter', text: 'Filter'},
    {value: 'hide', text: 'Hide'},
    {value: 'show_columns', text: 'Show Columns'},
    {value: 'group_by_code', text: 'Group by Code'},
    {value: 'pin_left', text: 'Pin to Left', onclick: () => setState((prev) => ({...prev.pinned, left: true, right: false}))},
    {value: 'pin_right', text: 'Pin to Right', onclick: () => setState((prev) => ({...prev.pinned, left: false, right: true}))},
  ];

  options.forEach((option) => {
    const optionNode = createNode(select, {
      tag: 'div',
      text: option.text,
      classes: [styles.option],
      dataset: state[option.key] === option.value ? {active: true} : null,
    });
    if (option.onclick) {
      optionNode.addEventListener('click', option.onclick);
    }
  });

  return select;
}
