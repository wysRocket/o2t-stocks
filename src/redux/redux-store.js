import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { stocksReducer } from "./stocks-reducer";

const reducers = combineReducers({
  form: formReducer,
  stocks: stocksReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
