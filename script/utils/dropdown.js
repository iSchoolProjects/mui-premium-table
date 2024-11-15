import * as styles from '../../styles/dropdown.module.css';
import createNode from '../utils/createNode';

export default function createDropdown(parent, state, setState) {
  const select = createNode(parent, {
    tag: 'div',
    classes: [styles.select],
    dataset: {dropdownOpen: state.dropdownOpen},
    styles: {
      '--menu-item':
        state.left.indexOf(state.key) > -1
          ? state.left.indexOf(state.key)
          : state.right.indexOf(state.key) > -1
            ? state.right.indexOf(state.key)
            : state.menuItem,
    },
  });

  const options = [
    {value: 'unsort', text: 'Unsort', onclick: () => setState((prev) => ({...prev, sort: 0}))},
    {value: 1, text: 'Sort by ASC', key: 'sort', onclick: () => setState((prev) => ({...prev, sort: 1}))},
    {value: 2, text: 'Sort by DESC', key: 'sort', onclick: () => setState((prev) => ({...prev, sort: 2}))},
    {
      value: 'filter',
      text: 'Filter',
      onclick: () =>
        setState((prev) => ({
          ...prev,
          filterOpen: !prev.filterOpen,
          dropdownOpen: false,
        })),
    },
    {value: 'hide', text: 'Hide'},
    {value: 'show_columns', text: 'Show Columns'},
    {value: 'group_by_code', text: `Group by ${state.key}`},
    {
      value: 'pin_left',
      text: state.left.includes(state.key) ? 'Unpin left' : 'Pin to Left',
      onclick: () =>
        setState((prev) => {
          const isPinnedLeft = prev.left.includes(state.key);
          return {
            ...prev,
            left: isPinnedLeft ? prev.left.filter((key) => key !== state.key) : prev.left.concat(state.key),
            right: prev.right.filter((key) => key !== state.key),
            dropdownOpen: false,
          };
        }),
    },
    {
      value: 'pin_right',
      text: 'Pin to Right',
      onclick: () =>
        setState((prev) => ({...prev, right: prev.right.concat(state.key), left: prev.left.filter((key) => key !== state.key)})),
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
