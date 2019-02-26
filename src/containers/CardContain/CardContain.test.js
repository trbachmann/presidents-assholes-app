import { mapStateToProps } from './CardContain';
import { mockPresidents } from '../../mockData';

describe('CardContain', () => {
  describe('mapStateToProps', () => {
    it('should return an object with presidents', () => {
      const mockState = {
        presidents: mockPresidents,
        isLoading: false,
        hasErrored: '',
        currentParty: 'All'
      };
      const expected = {
        presidents: mockPresidents,
        currentParty: 'All'
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});