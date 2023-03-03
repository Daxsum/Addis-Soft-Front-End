import { call, put, takeLatest } from "redux-saga/effects";
import {
  getSongs,
  setSongs,
  addSong,
  deleteSong,
  updateSong,
  setError,
} from "./action";

function* fetchSongs() {
  try {
    const response = yield call(fetch, "http://localhost:5000/api/songs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = yield call([response, "json"]);
    yield put(setSongs(data));
  } catch (error) {
    yield put(setError(error));
  }
}

function* addNewSong(action) {
  try {
    const response = yield call(fetch, "http://localhost:5000/api/songs", {
      method: "POST",
      body: JSON.stringify(action.payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = yield call([response, "json"]);
    yield put(addSong(data));
  } catch (error) {
    yield put(setError(error));
  }
}

function* deleteSongById(action) {
  try {
    const response = yield call(
      fetch,
      `http://localhost:5000/api/songs/${action.payload.id}`,
      {
        method: "DELETE",
      }
    );
    const data = yield call([response, "json"]);
    yield put(deleteSong(data));
  } catch (error) {
    yield put(setError(error));
  }
}

function* updateSongById(action) {
  try {
    const response = yield call(
      fetch,
      `http://localhost:5000/api/songs/${action.payload.id}`,
      {
        method: "PUT",
        body: JSON.stringify(action.payload),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = yield call([response, "json"]);
    yield put(updateSong(data));
  } catch (error) {
    yield put(setError(error));
  }
}

function* songSaga() {
  yield takeLatest("GET_SONGS", fetchSongs);
  yield takeLatest("ADD_SONG", addNewSong);
  yield takeLatest("DELETE_SONG", deleteSongById);
  yield takeLatest("UPDATE_SONG", updateSongById);
}

export default songSaga;
