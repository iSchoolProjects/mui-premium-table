import Filter from './components/filter';
import * as styles from '../styles/index.css'

function onChange(e){console.log(e.target.value)}

const root = document.getElementById('root')
 Filter(root,['code','location'],onChange);

