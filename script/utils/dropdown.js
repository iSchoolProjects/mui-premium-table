import * as styles from '../../styles/dropdown.module.css';
import createNode from '../utils/createNode';

export default function createDropdown(parent, state, setState) {
  const select = createNode(parent, {
    tag: 'div',
    classes: [styles.select],
    dataset: {dropdownOpen: state.dropdownOpen},
    styles: {'--menu-item': state.menuItem},
  });

  const options = [
    {value: 'unsort', text: 'Unsort', onclick: () => setState((prev) => ({...prev, sort: 0}))},
    {value: 1, text: 'Sort by ASC', key: 'sort', onclick: () => setState((prev) => ({...prev, sort: 1}))},
    {value: 2, text: 'Sort by DESC', key: 'sort', onclick: () => setState((prev) => ({...prev, sort: 2}))},
    {value: 'filter', text: 'Filter'},
    {
      value: 'hide',
      text: 'Hide',
      key: state.key,
      onclick: () =>
        setState((prev) => ({
          ...prev,
          hiddenKeys: state.hiddenKeys.includes(state.key)
            ? prev.hiddenKeys.filter((l) => l !== state.key)
            : prev.hiddenKeys.concat(state.key),
          hideKey: false,
          dropdownOpen: false,
        })),
    },
    {value: 'show_columns', text: 'Show Columns'},
    {value: 'group_by_code', text: 'Group by Code'},
    {
      value: 'pin_left',
      text: state.left.includes(state.key) ? 'Unpin left' : 'Pin to Left',
      onclick: () =>
        setState((prev) => ({
          ...prev,
          left: state.left.includes(state.key) ? prev.left.filter((k) => k !== state.key) : prev.left.concat(state.key),
          dropdownOpen: false,
        })),
    },
    {
      value: 'pin_right',
      text: state.right.includes(state.key) ? 'Unpin right' : 'Pin to Right',
      onclick: () =>
        setState((prev) => ({
          ...prev,
          right: state.right.includes(state.key) ? prev.right.filter((k) => k !== state.key) : prev.right.concat(state.key),
          dropdownOpen: false,
        })),
    },
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
