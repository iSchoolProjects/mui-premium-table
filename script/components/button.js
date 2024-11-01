import createNode from '../utils/createNode';

export default function Button(parent) {
  const container = createNode(parent, {tag: 'div'});
  const buttonHolder = createNode(container, {tag: 'div'});
  createNode(buttonHolder, {tag: 'button', text: '+  Add Filter'});
}