import Filter from './components/filter';

function onChange(e){console.log(e.target.value)}

const root = document.getElementById('root')
 Filter(root,['code','location'],onChange);

