import Filter from './components/filter';

function onChange() {}
const root = document.getElementById('root');

Filter(root, ['code', 'location'], onChange);
