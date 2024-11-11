import createNode from '../utils/createNode';
import Select from './select';

export default function Operator(parent, {options, value}) {
  const container = createNode(parent, {tag: 'div'});
  container.classList.add('operator-holder');

  return Select(container, {options, value});
}
