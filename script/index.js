import '../styles/index.css';
import data from './components/data';
import Filter from './components/filter';
import createFooter from './components/footer';
import Header from './components/header';
import generateRows from './components/rows';
import createDropdown from './utils/dropdown';

const root = document.getElementById('root');

const keys = [
  {label: 'Code', key: 'code'},
  {label: 'Name', key: 'name'},
  {label: 'Street name', key: 'addressIdObject.streetName'},
  {label: 'House number', key: 'addressIdObject.houseNumber'},
  {label: 'Postal code', key: 'addressIdObject.postalCode'},
  {label: 'City', key: 'addressIdObject.city'},
  {label: 'Email address', key: 'emailAddress'},
  {label: 'Phone number', key: 'phoneNumber'},
  {label: 'Mobile number', key: 'mobileNumber'},
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
  generateRows(root, data, keys, state);
  createFooter(root, state, setState);
}
useState(
  {
    left: [],
    right: [],
    hiddenKeys: [],
    filters: [{columns: '', operators: '', value: ''}],
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 100,
  },
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
