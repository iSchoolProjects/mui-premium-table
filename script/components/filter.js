import * as styles from '../../styles/filter.module.css';
import createNode from '../utils/createNode';
import Button from './button';
import Exit from './exit';
import Input from './input';
import Select from './select';

export default function Filter(parent, options = ['code', 'location'], onChange) {
  const container = createNode(parent, {tag: 'div', classes: [styles.filter]});
  const filterHolder = createNode(container, {tag: 'div'});
  filterHolder.classList.add('filter-holder');
  Exit(filterHolder, {});
  Select(filterHolder, {options, label: 'Columns', onChange});
  Select(filterHolder, {
    options: ['contains', 'equals', 'starts with', 'ends with', 'is empty', 'is not empty', 'is any of'],
    label: 'Operator',
    onChange,
  });
  Input(filterHolder, {label: 'value'});
  const buttonHolder = createNode(container, {tag: 'div'});
  buttonHolder.classList.add('button-holder');

  Button(buttonHolder, {});
}
