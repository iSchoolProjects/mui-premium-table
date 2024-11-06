import '../styles/index.css';
import Filter from './components/filter';
import Header from './components/header';

const root = document.getElementById('root');
Filter(root, ['code', 'location', 'name']);
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
}
useState({}, wrapper);

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
