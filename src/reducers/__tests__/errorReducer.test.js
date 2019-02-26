import { errorReducer } from '../errorReducer';
import { setError } from '../../actions';

describe('errorReducer', () => {
  it('should set the default state', () => {
    const expected = '';
    const result = errorReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with an error message', () => {
    const initialState = '';
    const expected = 'Not found';
    const result = errorReducer(initialState, setError(expected));
    expect(result).toEqual(expected);
  });
});