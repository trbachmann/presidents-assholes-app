import { combineReducers } from 'redux';
import { presidentsReducer } from './presidentsReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  presidents: presidentsReducer,
  isLoading: isLoadingReducer,
  hasErrored: errorReducer
});