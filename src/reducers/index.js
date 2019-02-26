import { combineReducers } from 'redux';
import { presidentsReducer } from './presidentsReducer';
import { isLoadingReducer } from './isLoadingReducer';

export const rootReducer = combineReducers({
  presidents: presidentsReducer,
  isLoading: isLoadingReducer,
});