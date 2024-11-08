import * as styles from '../../styles/header.module.css';
import createNode from '../utils/createNode';

// {}
/**
 * 
 *const keys = [
  'Code',
  'Account type',
  'Name',
  'Street name',
  'House number',
  'Postal code',
  'City',
  'Email address',
  'Phone number',
  'Mobile number',
  'Actions',
];
 */
export default function Header(headerParent, keys, current, setCurrent) {
  const container = createNode(headerParent, {
    tag: 'div',
    classes: [styles.header],
  });

  for (const key of keys) {
    const keyHolder = createNode(container, {
      tag: 'div',
      classes: [styles.key],
    });
    createNode(keyHolder, {
      tag: 'div',
      classes: [styles.item],
      text: key,
      dataset: current.key === key ? current : null,
    }).addEventListener('click', function () {
      setCurrent((prev) => (prev.key === key ? {...prev, sort: (prev.sort + 1) % 3} : {...prev, key, sort: 1, dropdownOpen: false}));
    });
    const imageHolder = createNode(keyHolder, {
      tag: 'div',
      classes: [styles.dropdown],
      dataset: current.key === key ? current : null,
    });
    createNode(imageHolder, {
      tag: 'img',
      src: './assets/images/ellipsis-vertical.svg',
      dataset: current.key === key ? current : null,
    }).addEventListener('click', function () {
      setCurrent((prev) => ({...prev, key, dropdownOpen: true}));
    });
  }
}
