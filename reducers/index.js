import {combineReducers} from 'redux';
import userReducer from './user.reducer';
import eventReducer from './events.reducer';
import loaderReducer from './loading.reducer';
import modalReducer from './modal.reducer';
const rootReducer = combineReducers({
  userReducer,
  eventReducer,
  loaderReducer,
  modalReducer,
});

export default rootReducer;
