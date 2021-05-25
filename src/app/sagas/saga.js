import {takeLatest, put} from "redux-saga/effects";

function* openCompose(){
  yield put({type:"OPEN_COMPOSE_MODAL"});
}

export function* watchforOpenCompose()
{
    console.log("open dispatched");
    yield takeLatest("OPEN", openCompose);
};

export function* watchforCloseCompose()
{
    console.log("close dispatched");
    yield takeLatest("CLOSE", closeCompose);
};

function* closeCompose(){
  yield put({type:"CLOSE_COMPOSE_MODAL"});
}
