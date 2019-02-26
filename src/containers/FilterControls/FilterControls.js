import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../actions';

export const FilterControls = (props) => {
  const { setFilter } = props;
  return(
    <select onChange={(event) => setFilter(event.target.value)}>
      <option value='All'>All</option>
      <option value='No Party'>No Party</option>
      <option value='Federalist'>Federalist</option>
      <option value='Democratic-Republican'>Democratic-Republican</option>
      <option value='Whig'>Whig</option>
      <option value='Democratic'>Democratic</option>
      <option value='Republican'>Republican</option>
    </select>
  );
}

export const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter))
}); 

export default connect(null, mapDispatchToProps)(FilterControls);