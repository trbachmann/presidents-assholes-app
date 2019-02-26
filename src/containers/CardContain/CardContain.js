import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card';

export const CardContain = (props) => {
  const presidentCards = props.presidents.map(president => {
    return <Card president={president} key={president.number}/>
  });
  
  return(
    <div className='CardContain'>
      { presidentCards }
    </div>
  );
}

export const mapStateToProps = (state) => ({
  presidents: state.presidents
});

export default connect(mapStateToProps)(CardContain);