import { call, all, put, takeLatest } from "redux-saga/effects";
import { actions } from "./heroesStore";
import { fetchHeroes } from "../ApiHelper";

// worker Saga
export function* workerHeroes(params) {
  if (!params.query) {
    yield put(actions.change({ heroes: [] }));
  } else {
    const heroes = yield call(fetchHeroes, params);
    if (heroes.response === "error") heroes.results = ["error"];
    yield put(actions.change({ heroes: heroes.results }));
  }
}

// watcher Saga
export function* watchHeroes() {
  yield takeLatest("FETCH_HEROES", workerHeroes);
}

// root Saga
export function* rootSaga() {
  yield all([watchHeroes()]);
}
