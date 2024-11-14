import createNode from '../utils/createNode';
import exit from '../../assets/images/Exit.svg';
export default function Exit(parent) {
  const container = createNode(parent, {tag: 'div'});
  container.classList.add('exit-holder');
  const filterHolder = createNode(container, {tag: 'div'});
  return createNode(filterHolder, {tag: 'img', src: exit});
}
