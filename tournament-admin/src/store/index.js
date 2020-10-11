import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
const initialiseSagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(initialiseSagaMiddleware)
  )
);

initialiseSagaMiddleware.run(rootSaga);

export default store;
