import createNode from '../utils/createNode';

export default function Select(parent, {label, options, onChange}) {
  // const label = ['Columns', 'Operator']

  const filterHolder = createNode(parent, {tag: 'div'});
  createNode(filterHolder, {tag: 'label', text: label});
  const select = createNode(filterHolder, {tag: 'select'});
  createNode(select, {tag: 'option'});

  for (const option of options) {
    createNode(select, {tag: 'option', value: option, text: option});
  }
  select.addEventListener('change', onChange);
  return select;
}
