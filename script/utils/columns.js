import * as styles from '../../styles/columns.module.css';
import createNode from './createNode';

export default function Columns(parent, state, setState, keys) {
  const showColumns = createNode(parent, {
    tag: 'div',
    classes: [styles.columns],
  });
  const searchHolder = createNode(showColumns, {
    tag: 'div',
    classes: [styles.searchHolder],
  });

  createNode(searchHolder, {
    tag: 'p',
    classes: [styles.title],
    text: 'Find column',
  });
  const searchInput = createNode(searchHolder, {
    tag: 'input',
    classes: [styles.searchInput],
    type: 'text',
    name: 'searchInput',
    placeholder: 'Column title',
    value: state.searchQuery || '',
  });

  searchInput.addEventListener('input', function (e) {
    setState((prev) => ({...prev, searchQuery: e.target.value.toLowerCase()}));
    renderColumns();
  });
  if (state.focus === 'searchInput') {
    searchInput.focus();
  }

  const columnHolder = createNode(showColumns, {
    tag: 'div',
    classes: [styles.columnHolder],
  });

  function renderColumns() {
    columnHolder.innerHTML = '';
    const filteredKeys = state.searchQuery ? keys.filter((key) => key.toLowerCase().includes(state.searchQuery)) : keys;

    for (const idx in filteredKeys) {
      const rowHolder = createNode(columnHolder, {
        tag: 'div',
        classes: [styles.rowHolder],
      });

      const toggleSwitch = createNode(rowHolder, {
        tag: 'label',
        classes: [styles.toggleSwitch],
      });

      createNode(toggleSwitch, {
        tag: 'input',
        type: 'checkbox',
        checked: !state.hiddenKeys.includes(filteredKeys[idx]),
      }).addEventListener('change', function () {
        setState((prev) => ({
          ...prev,
          hiddenKeys: this.checked ? prev.hiddenKeys.filter((s) => s !== filteredKeys[idx]) : prev.hiddenKeys.concat(filteredKeys[idx]),
        }));
      });

      createNode(toggleSwitch, {
        tag: 'span',
        classes: [styles.toggleSlider],
      });

      createNode(rowHolder, {
        tag: 'h3',
        classes: [styles.columnTitle],
        text: filteredKeys[idx].label,
      });
    }
  }

  renderColumns();

  const hideShowButtons = createNode(showColumns, {
    tag: 'div',
    classes: [styles.hideShowButtons],
  });

  const hideAll = createNode(hideShowButtons, {
    tag: 'button',
    classes: [styles.hideAll],
    text: 'Hide All',
  });
  const showAll = createNode(hideShowButtons, {
    tag: 'button',
    classes: [styles.showAll],
    text: 'Show All',
  });

  hideAll.addEventListener('click', function () {
    setState((prev) => ({...prev, hiddenKeys: keys}));
  });
  showAll.addEventListener('click', function () {
    setState((prev) => ({...prev, hiddenKeys: []}));
  });
}
