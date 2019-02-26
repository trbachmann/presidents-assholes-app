import { isLoadingReducer } from '../isLoadingReducer';
import { toggleLoading } from '../../actions';

describe('isLoadingReducer', () => {
  it('should return the default state', () => {
    const expected = false;
    const result = isLoadingReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with a bool', () => {
    const initialState = false;
    const bool = true;
    const result = isLoadingReducer(initialState, toggleLoading(bool));
    expect(result).toEqual(bool);
  });
});