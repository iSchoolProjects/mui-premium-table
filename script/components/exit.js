import createNode from '../utils/createNode';

export default function Exit(parent) {
  const container = createNode(parent, {tag: 'div'});
  container.classList.add('exit-holder');
  const filterHolder = createNode(container, {tag: 'div'});
  createNode(filterHolder, {tag: 'p', text: 'X'});
}
