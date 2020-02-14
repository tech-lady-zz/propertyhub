import { combineReducers } from 'redux';
import TrendingProperties from './TrendingPropertyReducer';
import Properties from './PropertyReducer';

const rootReducer = combineReducers({
  TrendingProperties,
  Properties
});

export default rootReducer;
