import createNode from "../utils/createNode";


export default function Select(parent,{label,options,onChange,...rest}){
    // const label = ['Columns', 'Operator']
    const contaniner = createNode(parent,{tag:'div'})
    createNode(contaniner,{tag: 'label', text: label })
    const select = createNode(contaniner,{tag:'select'})
    createNode(select,{tag: 'option'})

    for(const option of options){
       createNode(select,{tag: 'option',value:option,text: option})
    }
    select.addEventListener('change',onChange)
    return contaniner
}