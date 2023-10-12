import { createStore, applyMiddleware ,combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import { carsReducer } from './reducers/carsReducer';
import {alertReducers} from "./reducers/alertReducers"

const composeEnhancers = composeWithDevTools({

});

const rootReducer = combineReducers({

    carsReducer,
    alertReducers,
})

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)

  )
);

export default store