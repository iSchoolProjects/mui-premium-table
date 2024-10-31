import createNode from "../utils/createNode";

export default function Input(parent,{label,placeholder,...rest}){
    const contaniner = createNode(parent,{tag:'div'},{type:'text'})
    createNode(contaniner,{tag: 'label',text:'Value'})
  const inputElement = createNode(contaniner, { tag: 'input', type: 'text', placeholder:'Filter value', ...rest });
    
  
    return contaniner
}
