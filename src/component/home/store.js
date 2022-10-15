import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { CRUDreducer } from "./reducer";
import { defaultSaga } from "./saga";
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(CRUDreducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(defaultSaga);
