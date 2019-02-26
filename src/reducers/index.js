import { combineReducers } from 'redux';
import { presidentsReducer } from './presidentsReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { errorReducer } from './errorReducer';
import { currentPartyReducer } from './currentPartyReducer';

export const rootReducer = combineReducers({
  presidents: presidentsReducer,
  isLoading: isLoadingReducer,
  hasErrored: errorReducer,
  currentParty: currentPartyReducer
});