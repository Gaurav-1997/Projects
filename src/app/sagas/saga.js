import {takeLatest, put,delay} from "redux-saga/effects";

function* openCompose(){
  yield put({type:"OPEN_COMPOSE_MODAL"});
}



function* closeCompose(){
  yield put({type:"CLOSE_COMPOSE_MODAL"});
}

function* selectedMail({id, title, subject, description, time}){
  yield delay(5000);
  console.log("from watchforSelectedMail",{id, title, subject, description, time});
  yield put({
    type:"SELECTED_MAIL",
    payload: {id, title, subject, description, time}
  });
};

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

export function* watchforSelectedMail()
{
    console.log("slected mail dispatched");
    yield takeLatest("SELECT_MAIL", selectedMail);
};
