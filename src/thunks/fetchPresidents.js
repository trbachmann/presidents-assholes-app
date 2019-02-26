import { toggleLoading, setError, setPresidents } from '../actions';

export const fetchPresidents = () => {
  return async (dispatch) => {
    try {
      dispatch(toggleLoading(true));
      const response = await fetch('http://localhost:3001/api/v1/presidents');
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const result = await response.json();
      dispatch(toggleLoading(false));
      dispatch(setPresidents(result));
    } catch(error) {
      dispatch(setError(error.message));
    }
  }
}