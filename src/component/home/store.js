import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { counterReducer } from "./reducer";
import { defaultSaga } from "./saga";
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(counterReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(defaultSaga);
