import { mapDispatchToProps } from './FilterControls';
import { setFilter } from '../../actions';

describe('FilterControls', () => {
  describe('mapDispatchToProps', () => {
    it('should dispatch a setFilter action when setFilter is invoked', () => {
      const mockDispatch = jest.fn();
      const mockFilter = 'Democratic';
      const actionToDispatch = setFilter(mockFilter);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setFilter(mockFilter);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});