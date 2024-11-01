import createNode from "../utils/createNode";

export default function Input(parent,{label,placeholder,...rest}){
    const container = createNode(parent,{tag:'div'},{type:'text'})
    container.classList.add('input-holder')
    const filterHolder = createNode(container,{tag:'div'})
    createNode(filterHolder,{tag: 'label',text:'Value'})
  const inputElement = createNode(filterHolder, { tag: 'input', type: 'text', placeholder:'Filter value', ...rest });
    
  
    return container
}
