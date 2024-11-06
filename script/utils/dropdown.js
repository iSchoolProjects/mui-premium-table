import * as styles from '../../styles/dropdown.css';
import createNode from '../utils/createNode';

export default function createDropdown(parent, onChange, current) {
  const select = createNode(parent, {tag: 'div', classes: [styles.select]});
  const options = [
    {value: 'unsort', text: 'Unsort'},
    {value: 'sort_asc', text: 'Sort by ASC'},
    {value: 'sort_desc', text: 'Sort by DESC'},
    {value: 'filter', text: 'Filter'},
    {value: 'hide', text: 'Hide'},
    {value: 'show_columns', text: 'Show Columns'},
    {value: 'group_by_code', text: 'Group by Code'},
    {value: 'pin_left', text: 'Pin to Left'},
    {value: 'pin_right', text: 'Pin to Right'},
  ];

  options.forEach((option) => {
    const optionNode = createNode(select, {
      tag: 'div',
      text: option.text,
      value: option.value,
      classes: ['option'],
    });

    for (const option of options) {
      createNode(optionNode, {
        tag: 'div',
        classes: [],
        text: option,
        dataset: current.option === option ? current : null,
      }).addEventListener('click', function () {
        if (onChange) {
          onChange(option.value);
        }
      });
    }
    // optionNode.addEventListener('click', function () {

    //   if (onChange) {
    //     onChange(option.value);
    //   }
    // });
  });
  return select;
}
