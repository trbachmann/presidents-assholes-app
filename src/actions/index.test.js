import { setPresidents, toggleLoading, setError } from './index';
import { mockPresidents } from '../mockData';

describe('actions', () => {
  describe('setPresidents', () => {
    it('should return and object with a type SET_PRESIDENTS and presidents', () => {
      const expected = {
        type: 'SET_PRESIDENTS',
        presidents: mockPresidents 
      };
      const result = setPresidents(mockPresidents);
      expect(result).toEqual(expected);
    });
  });

  describe('toggleLoading', () => {
    it('should return and object with a type TOGGLE_LOADING and a bool', () => {
      const mockBool = true;
      const expected = {
        type: 'TOGGLE_LOADING',
        bool: mockBool
      };
      const result = toggleLoading(mockBool);
      expect(result).toEqual(expected);
    });
  });

  describe('setError', () => {
    it('should return and object with a type SET_ERROR and a message', () => {
      const mockError = 'Not found';
      const expected = {
        type: 'SET_ERROR',
        message: mockError
      };
      const result = setError(mockError);
      expect(result).toEqual(expected);
    });
  });
});