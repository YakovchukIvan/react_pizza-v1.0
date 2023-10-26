import { combineReducers } from 'redux';

import filterReducer from './filters';
import pizzasReducer from './pizzas';

const rootReducer = combineReducers({
  filters: filterReducer,
  pizzas: pizzasReducer,
});

export default rootReducer;
