import * as styles from '../../styles/rows.module.css';
import createNode from '../utils/createNode';

export default function generateRows(parent, keys, state) {
  const dataTable = createNode(parent, {
    tag: 'div',
  });

  for (const d of state.data) {
    const row = createNode(dataTable, {
      tag: 'div',
      classes: [styles.row],
    });
    for (const key of keys) {
      let left = 0;
      let right = 0;
      if (state.left.includes(key.label)) {
        left = -1 * state.left.length + state.left.indexOf(key.label);
      }
      if (state.right.includes(key.label)) {
        right = state.right.length + state.right.indexOf(key.label);
      }
      const [parent, child] = key.key.split('.');

      createNode(row, {
        tag: 'div',
        text: child ? d?.[parent]?.[child] : d[parent],
        classes: [styles.cell],
        styles: {'--x-order': left || right},
      });
    }
  }
}
