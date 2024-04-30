import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./index";
import { thunk } from "redux-thunk";

let middleware = applyMiddleware(thunk);


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(middleware);

export default function configureStore() {
  return createStore(rootReducer,enhancer);
}
