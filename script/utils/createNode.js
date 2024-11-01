/**
 *
 * @param {*} parentNode
 * @param {*} nodeProps
 * @returns {HTMLElement}
 */
export default function createNode(parentNode, nodeProps) {
  if (!nodeProps['tag']) throw Error('Tag is required');
  const element = document.createElement(nodeProps['tag']);
  if (nodeProps['classes'] && Array.isArray(nodeProps['classes'])) {
    const classes = nodeProps['classes'];
    for (let i = 0; i < classes.length; i++) {
      element.classList.toggle(classes[i]);
    }
  }
  if (nodeProps['text']) element.textContent = nodeProps['text'];
  if (nodeProps['src']) element.src = nodeProps['src'];
  if (nodeProps['id']) element.id = nodeProps['id'];
  if (nodeProps['href']) element.href = nodeProps['href'];
  if (nodeProps['type']) element.type = nodeProps['type'];
  if (nodeProps['name']) element.name = nodeProps['name'];
  if (nodeProps['value']) element.value = nodeProps['value'];
  if (nodeProps['required']) element.required = nodeProps['required'];
  if (nodeProps['checked']) element.checked = nodeProps['checked'];
  if (nodeProps['min']) element.min = nodeProps['min'];
  if (nodeProps['max']) element.max = nodeProps['max'];
  if (nodeProps['for']) element.htmlFor = nodeProps['for'];
  if (nodeProps['placeholder']) element.placeholder = nodeProps['placeholder'];
  if (nodeProps['tabindex']) element.tabindex = nodeProps['tabindex'];
  parentNode.append(element);
  return element;
}
