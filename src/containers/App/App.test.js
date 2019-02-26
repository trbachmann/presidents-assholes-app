import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import * as data from '../../mockData';
import { Provider } from 'react-redux';
import { fetchPresidents } from '../../thunks/fetchPresidents';

jest.mock('../../thunks/fetchPresidents');


describe('App', () => {

  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('App component', () => {

  });

  describe('mapStateToProps', () => {
    it('should return an object with isLoading and hasErrored', () => {
      const mockState = {
        presidents: data.mockPresidents,
        isLoading: false,
        hasErrored: ''
      };
      const expected = {
        isLoading: false,
        hasErrored: ''        
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with fetchPresidents thunk when fetchPresidents is invoked', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = fetchPresidents();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchPresidents();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
