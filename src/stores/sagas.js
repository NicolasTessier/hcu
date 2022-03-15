import { call, all, put, takeLatest } from "redux-saga/effects";
import { actions } from "./heroesStore";
import { actions as detailsActions } from "./detailsStore";
import { fetchHero, fetchHeroes } from "../ApiHelper";

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
export function* workerHero(id) {
  const hero = yield call(fetchHero, id);
  yield put(detailsActions.change({ hero: hero }));
}

// watcher Saga
export function* watchHeroes() {
  yield takeLatest("FETCH_HEROES", workerHeroes);
}
export function* watchHero() {
  yield takeLatest("FETCH_HERO", workerHero);
}

// root Saga
export function* rootSaga() {
  yield all([watchHeroes(), watchHero()]);
}
