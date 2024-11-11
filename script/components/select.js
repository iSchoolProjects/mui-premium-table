import createNode from '../utils/createNode';

export default function Select(parent, {label, options, value}) {
  // const label = ['Columns', 'Operator']

  const filterHolder = createNode(parent, {tag: 'div'});
  createNode(filterHolder, {tag: 'label', text: label});
  const select = createNode(filterHolder, {tag: 'select'});
  createNode(select, {tag: 'option'});

  for (const {value, label} of options) {
    createNode(select, {tag: 'option', value: value, text: label});
  }
  select.value = value;
  return select;
}
