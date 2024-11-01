import createNode from "../utils/createNode";


export default function Select(parent,{label,options,onChange,...rest}){
    // const label = ['Columns', 'Operator']
    const container = createNode(parent,{tag:'div'})
    container.classList.add('select-holder')
    const filterHolder = createNode(container,{tag:'div'})
    createNode(filterHolder,{tag: 'label', text: label })
    const select = createNode(filterHolder,{tag:'select'})
    createNode(select,{tag: 'option'})

    for(const option of options){
       createNode(select,{tag: 'option',value:option,text: option})
    }
    select.addEventListener('change',onChange)
    return container
}