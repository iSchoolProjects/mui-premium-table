import createNode from "../utils/createNode";

export default function Button(parent, ...rest){
    const container = createNode(parent,{tag:'div'},{type:'text'})
    const buttonHolder = createNode(container,{tag:'div'})
    const button = createNode(buttonHolder, {tag: 'button', text:'+  Add Filter'})
}