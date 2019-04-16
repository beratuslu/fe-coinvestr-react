const actions = {
  GIT_SEARCH: "GIT_SEARCH",
  GIT_SUCCESS_RESULT: "GIT_SUCCESS_RESULT",
  GIT_ERROR_RESULT: "GIT_ERROR_RESULT",
  gitSearch: searchText => ({
    type: actions.GIT_SEARCH,
    payload: { searchText, page: 1 }
  }),
  onPageChange: (searchText, page) => ({
    type: actions.GIT_SEARCH,
    payload: { searchText, page }
  }),
  gitSearchSuccess: (result, total_count, page) => ({
    type: actions.GIT_SUCCESS_RESULT,
    result,
    total_count,
    page
  }),
  gitSearchError: () => ({
    type: actions.GIT_ERROR_RESULT
  })
};
export default actions;
