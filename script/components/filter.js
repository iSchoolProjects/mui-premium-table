
import Select from "./select"
import Input from "./input"
import * as styles from '../../styles/filter.module.css'
import createNode from "../utils/createNode"

export default function Filter(parent,options=['code','location'],onChange){
    const contaniner = createNode(parent,{tag: 'div',classes: [styles.filter]})

     Select(contaniner,{options,label: 'Columns',onChange})
      Select(contaniner,{options:['contains','equals','starts with', 'ends with', 'is empty', 'is not empty', 'is any of'],label: 'Operator',onChange})
     Input(contaniner,{label:'value'})
}