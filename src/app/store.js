import { createStore, applyMiddleware } from "redux";
import mailReducer from "./reducers/mailReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(mailReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;