import { all, takeEvery, put, call } from "redux-saga/effects";
import actions from "./actions";
export const per_page = 10;
const gitSearchApi = `https://api.github.com/search/repositories?per_page=${per_page}&q=`;

const onSearchRequest = async (searchText, page = 1) =>
  await fetch(`${gitSearchApi}${encodeURIComponent(searchText)}&page=${page}`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error);

function* searchRequest({ payload }) {
  const { searchText, page } = payload;
  try {
    const searchResult = yield call(onSearchRequest, searchText, page);
    if (searchResult.items && searchResult.total_count) {
      yield put(
        actions.gitSearchSuccess(
          searchResult.items,
          searchResult.total_count,
          page
        )
      );
    } else {
      yield put(actions.gitSearchSuccess());
    }
  } catch (error) {
    yield put(actions.gitSearchSuccess());
  }
}

function* sagaTest({ payload }) {
  const { searchText, page } = payload;
  try {
    const searchResult = yield call(onSearchRequest, searchText, page);
    if (searchResult.items && searchResult.total_count) {
      yield put(
        actions.gitSearchSuccess(
          searchResult.items,
          searchResult.total_count,
          page
        )
      );
    } else {
      yield put(actions.gitSearchSuccess());
    }
  } catch (error) {
    yield put(actions.gitSearchSuccess());
  }
}
export default function* rootSaga() {
  yield all([
    takeEvery(actions.GIT_SEARCH, searchRequest),
    takeEvery("SAGA_TEST", sagaTest)
  ]);
}
