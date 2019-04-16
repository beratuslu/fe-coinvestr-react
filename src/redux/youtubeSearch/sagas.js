import { all, takeEvery, put, call } from "redux-saga/effects";
import actions from "./actions";
import { youtubeSearchApi } from "../../settings";
export const per_page = 10;
const maxResults = 10;
const youtubeSearchURL = `https://www.googleapis.com/youtube/v3/search?maxResults=${maxResults}&type=video&key=${youtubeSearchApi}&part=snippet`;

const onSearchReqeust = async (searchText, pageToken) =>
  await fetch(
    `${youtubeSearchURL}&q=${encodeURIComponent(searchText)}${pageToken}`
  )
    .then(res => res.json())
    .then(res => res)
    .catch(error => error);

function* searchRequest({ payload }) {
  const { searchText, pageToken } = payload;
  try {
    const searchResult = yield call(
      onSearchReqeust,
      searchText,
      pageToken ? `&pageToken=${pageToken}` : ""
    );
    if (searchResult.items) {
      yield put(
        actions.youtubeSearchSuccess(
          searchResult.items,
          searchResult.pageInfo.totalResults,
          searchResult.nextPageToken,
          searchResult.prevPageToken
        )
      );
    } else {
      yield put(actions.youtubeSearchSuccess());
    }
  } catch (error) {
    yield put(actions.youtubeSearchSuccess());
  }
}
export default function* rootSaga() {
  yield all([takeEvery(actions.YOUTUBE_SEARCH, searchRequest)]);
}
