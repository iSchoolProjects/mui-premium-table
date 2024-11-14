import '../styles/index.css';
import Filter from './components/filter';
import createFooter from './components/footer';
import Header from './components/header';
import createDropdown from './utils/dropdown';

const root = document.getElementById('root');

const keys = [
  'Code',
  'Account type',
  'Name',
  'Street name',
  'House number',
  'Postal code',
  'City',
  'Email address',
  'Phone number',
  'Mobile number',
  'Actions',
];

function wrapper(state, setState) {
  root.innerHTML = '';
  Header(root, keys, state, setState);

  Filter(
    root,
    [
      {label: 'code', value: 'code'},
      {label: 'location', value: 'location'},
      {label: 'name', value: 'name'},
    ],
    state,
    setState
  );
  createDropdown(root, state, setState);
  createFooter(root, state, setState);
}
useState(
  {left: [], right: [], filters: [{columns: '', operators: '', value: ''}], itemsPerPage: 10, currentPage: 1, totalItems: 100},
  wrapper
);

function useState(initial, render) {
  let state = initial;

  function setState(newState) {
    if (typeof newState === 'function') state = newState(state);
    else state = newState;
    render(state, setState);
  }
  render(state, setState);
  return [state, setState];
}
