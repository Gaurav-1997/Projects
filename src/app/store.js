import { createStore, applyMiddleware } from "redux";
import mailReducer from "./reducers/mailReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(mailReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;