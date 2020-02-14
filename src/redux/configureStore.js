import { createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


const configureStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools()
  );
};
export default configureStore;
