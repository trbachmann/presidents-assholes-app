import { currentPartyReducer } from '../currentPartyReducer';
import { setFilter } from '../../actions';

describe('currentPartyReducer', () => {
  it('should return the default state', () => {
    const expected = 'All';
    const result = currentPartyReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with a filter', () => {
    const mockFilter = 'No Party';
    const initialState = 'All';
    const result = currentPartyReducer(initialState, setFilter(mockFilter));
    expect(result).toEqual(mockFilter);
  });
});