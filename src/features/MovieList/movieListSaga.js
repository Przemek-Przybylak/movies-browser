import { apiConnect } from "../../common/apiConnect"
import { fetchMovieListSuccess } from "./movieListSlice";
import { call, put, takeLatest, delay } from "redux-saga/effects";

const path = "https://api.themoviedb.org/3/movie/popular?api_key=54628f6d7df0fa35378bd39ea74a55d1&language=en-US&page=1";

function* fetchMovieListHandler() {
    try {
        yield delay(200);
        const data = yield call(apiConnect, path);
        yield put(fetchMovieListSuccess(data));
    } catch (error) {
        yield console.log("nie działa")
    }
}

export function* watchFetchMovieList() {
    yield takeLatest(fetchMovieListSuccess.type, fetchMovieListHandler);
}