export function handlePrevPage(state, setState) {
  if (state.currentPage > 1) {
    setState((prevState) => ({
      ...prevState,
      currentPage: prevState.currentPage - 1,
    }));
  }
}

export function handleNextPage(state, setState) {
  if (state.currentPage < Math.ceil(state.totalItems / state.itemsPerPage)) {
    setState((prevState) => ({
      ...prevState,
      currentPage: prevState.currentPage + 1,
    }));
  }
}
