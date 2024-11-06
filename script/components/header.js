import * as styles from '../../styles/header.module.css';
import createNode from '../utils/createNode';

export default function Header(headerParent, keys, current, setCurrent) {
  const container = createNode(headerParent, {
    tag: 'div',
    classes: [styles.header],
  });

  for (const key of keys) {
    createNode(container, {
      tag: 'div',
      classes: [styles.item],
      text: key,
      dataset: current.key === key ? current : null,
    }).addEventListener('click', function () {
      setCurrent((prev) => (prev.key === key ? {...prev, sort: (prev.sort + 1) % 3} : {key, sort: 1}));
    });
  }
}
