import createNode from '../utils/createNode';

export default function Operator(parent, {options, onChange}) {
  const container = createNode(parent, {tag: 'div'});
  container.classList.add('operator-holder');

  const operator = createNode(container, {tag: 'select'});
  createNode(operator, {tag: 'option'});

  for (const option of options) {
    createNode(operator, {tag: 'option', value: option, text: option});
  }
  operator.addEventListener('change', onChange);
  return operator;
}
