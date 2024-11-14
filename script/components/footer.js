import left from '../../assets/images/left.svg';
import right from '../../assets/images/right.svg';
import styles from '../../styles/footer.module.css';
import createNode from '../utils/createNode';

function createFooterContainer(root) {
  return createNode(root, {
    tag: 'div',
    classes: [styles.footer],
  });
}

function createPageSizeDiv(parent) {
  return createNode(parent, {
    tag: 'div',
    classes: [styles.pageSize],
  });
}

function createPageSizeLabel(parent) {
  return createNode(parent, {
    tag: 'label',
    text: 'Rows per page:',
    for: 'page-size-select',
    classes: [styles.pageSizeLabel],
  });
}

function createPageSizeSelect(parent, state, setState) {
  const pageSizeSelect = createNode(parent, {
    tag: 'select',
    id: 'page-size-select',
  });

  const pageSizeOptions = [10, 25, 50, 100];
  pageSizeOptions.forEach((size) => {
    createNode(pageSizeSelect, {
      tag: 'option',
      value: size,
      text: size.toString(),
    });
  });

  pageSizeSelect.value = state.itemsPerPage;

  pageSizeSelect.addEventListener('change', (event) => {
    setState((prevState) => ({
      ...prevState,
      currentPage: 1,
      itemsPerPage: parseInt(event.target.value),
    }));
  });

  return pageSizeSelect;
}

function createPaginationDiv(parent) {
  return createNode(parent, {
    tag: 'div',
    classes: [styles.pagination],
  });
}

function createPageInfo(parent, state) {
  return createNode(parent, {
    tag: 'span',
    id: 'page-info',
    text: `${(state.currentPage - 1) * state.itemsPerPage + 1}-${state.currentPage * state.itemsPerPage} of ${state.totalItems}`,
  });
}

function createPrevButton(parent, state, setState) {
  const prevBtn = createNode(parent, {
    tag: 'img',
    classes: [styles.paginationButton],
    src: left,
    alt: 'Previous',
    dataset: {
      disabled: state.currentPage === 1,
    },
  });
  prevBtn.addEventListener('click', () => {
    setState((prevState) => ({
      ...prevState,
      currentPage: Math.max(1, prevState.currentPage - 1),
    }));
  });
  return prevBtn;
}

function createNextButton(parent, state, setState) {
  const nextBtn = createNode(parent, {
    tag: 'img',
    classes: [styles.paginationButton],
    src: right,
    alt: 'Next',
    dataset: {
      disabled: Math.ceil(state.totalItems / state.itemsPerPage) === state.currentPage,
    },
  });
  nextBtn.addEventListener('click', () => {
    setState((prevState) => ({
      ...prevState,
      currentPage: Math.min(Math.ceil(state.totalItems / state.itemsPerPage), prevState.currentPage + 1),
    }));
  });
  return nextBtn;
}

export default function createFooter(root, state, setState) {
  const footer = createFooterContainer(root);
  const pageSizeDiv = createPageSizeDiv(footer);
  createPageSizeLabel(pageSizeDiv);
  createPageSizeSelect(pageSizeDiv, state, setState);
  const paginationDiv = createPaginationDiv(footer);
  createPageInfo(paginationDiv, state);
  createPrevButton(paginationDiv, state, setState);
  createNextButton(paginationDiv, state, setState);
}
