import ellipsisVertical from '../../assets/images/ellipsis-vertical.svg';
import * as styles from '../../styles/header.module.css';
import createNode from '../utils/createNode';

export default function Header(headerParent, keys, current, setCurrent) {
  const container = createNode(headerParent, {
    tag: 'div',
    classes: [styles.header],
  });

  for (const idx in keys) {
    const key = keys[idx].label;
    let left = 0;
    let right = 0;
    if (current.left.includes(key)) {
      left = -1 * current.left.length + current.left.indexOf(key);
    }
    if (current.right.includes(key)) {
      right = current.right.length + current.right.indexOf(key);
    }
    const keyHolder = createNode(container, {
      tag: 'div',
      classes: [styles.key],
      styles: {'--x-order': left || right},
      dataset: {hidden: current.hiddenKeys.includes(key)},
    });
    createNode(keyHolder, {
      tag: 'div',
      classes: [styles.item],
      text: key,
      dataset: current.key === key ? current : null,
    }).addEventListener('click', function () {
      setCurrent((prev) =>
        prev.key === key ? {...prev, sort: (prev.sort + 1) % 3} : {...prev, key, sort: 1, dropdownOpen: false, menuItem: undefined}
      );
    });
    const imageHolder = createNode(keyHolder, {
      tag: 'div',
      classes: [styles.dropdown],
      dataset: current.key === key ? current : null,
    });
    createNode(imageHolder, {
      tag: 'img',
      src: ellipsisVertical,
      dataset: current.key === key ? current : null,
    }).addEventListener('click', function () {
      setCurrent((prev) => ({...prev, key, dropdownOpen: true, menuItem: idx}));
    });
  }
}
