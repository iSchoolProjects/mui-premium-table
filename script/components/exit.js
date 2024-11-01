import createNode from "../utils/createNode";

export default function Exit(parent, ...rest){
    const container = createNode(parent,{tag:'div'},{type:'text'})
    container.classList.add('exit-holder')
    const filterHolder = createNode(container,{tag:'div'})
    const exit = createNode(filterHolder, {tag: 'p', text:'X'})
}