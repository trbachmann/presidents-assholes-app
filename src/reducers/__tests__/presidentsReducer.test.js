import * as data from '../../mockData';
import { presidentsReducer } from '../presidentsReducer';
import { setPresidents } from '../../actions';

describe('presidentsReducer', () => {
  it('should return the default state', () => {
    const expected = [];
    const result = presidentsReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with presidents', () => {
    const initialState = [];
    const expected = data.mockPresidents;
    const result = presidentsReducer(
        initialState, 
        setPresidents(data.mockPresidents)
    );
    expect(result).toEqual(expected);
  });
});