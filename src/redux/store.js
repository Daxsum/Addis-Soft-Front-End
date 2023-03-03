import rootReducer from "./rootReducer";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import songSaga from "../sagas/sagas";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(songSaga);
export default store;
